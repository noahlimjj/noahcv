// Password screen (temporary while the site is private)
const gateForm = document.querySelector('.gate-form');
if (gateForm) {
    const sha256 = async text => {
        const bytes = new TextEncoder().encode(text);
        const digest = await crypto.subtle.digest('SHA-256', bytes);
        return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
    };
    if (document.documentElement.classList.contains('locked')) {
        document.getElementById('gate-password').focus();
    }
    gateForm.addEventListener('submit', async e => {
        e.preventDefault();
        const input = document.getElementById('gate-password');
        const ok = (await sha256(input.value)) === window.GATE_HASH;
        gateForm.querySelector('.gate-error').hidden = ok;
        if (!ok) { input.select(); return; }
        try { localStorage.setItem('noahcv-gate', window.GATE_HASH); } catch (err) {}
        document.documentElement.classList.remove('locked');
        window.scrollTo(0, 0);
        onScroll();
    });
}

// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function setMenu(open) {
    hamburger.classList.toggle('active', open);
    navMenu.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
}

hamburger.addEventListener('click', () => setMenu(!navMenu.classList.contains('active')));
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => setMenu(false)));

// Navbar rule + active chapter highlighting
const navbar = document.querySelector('.navbar');
const navTargets = ['about', 'medicine', 'jujitsu', 'press']
    .map(id => document.getElementById(id))
    .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);

    let current = '';
    const probe = window.scrollY + window.innerHeight * 0.3;
    navTargets.forEach(el => {
        if (probe >= el.offsetTop) current = el.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('js-motion');

    // Quiet fade-in for sections, and the timeline drawing itself
    const reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                reveal.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.sec, .chapter-head').forEach(el => {
        el.classList.add('reveal');
        reveal.observe(el);
    });
    document.querySelectorAll('.timeline').forEach(el => reveal.observe(el));

    // Hero facts count up once
    document.querySelectorAll('.count').forEach(el => {
        const to = Number(el.dataset.to);
        const start = performance.now() + 500;
        el.textContent = '0';
        const tick = now => {
            const t = Math.min(1, Math.max(0, (now - start) / 900));
            el.textContent = String(Math.round(to * (1 - Math.pow(1 - t, 3))));
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    });

    // Gentle parallax on the Ju-Jitsu cover photo
    const cover = document.querySelector('.cover');
    const coverImg = document.querySelector('.cover-img');
    if (cover && coverImg) {
        let ticking = false;
        const update = () => {
            const r = cover.getBoundingClientRect();
            if (r.bottom > 0 && r.top < window.innerHeight) {
                const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
                coverImg.style.transform = `translateY(${(progress - 0.5) * -8}%)`;
            }
            ticking = false;
        };
        window.addEventListener('scroll', () => {
            if (!ticking) { requestAnimationFrame(update); ticking = true; }
        }, { passive: true });
        update();
    }
}

// Photo gallery: arrow buttons scroll one photo at a time
const gallery = document.querySelector('.gallery');
if (gallery) {
    const step = dir => {
        const item = gallery.querySelector('.g-item');
        const gap = parseFloat(getComputedStyle(gallery).columnGap) || 24;
        gallery.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    document.querySelector('.g-prev')?.addEventListener('click', () => step(-1));
    document.querySelector('.g-next')?.addEventListener('click', () => step(1));
}

// Lightbox
const lightbox = document.querySelector('.lightbox');
const galleryItems = [...document.querySelectorAll('.g-item')];
if (lightbox && galleryItems.length && typeof lightbox.showModal === 'function') {
    const lbImg = lightbox.querySelector('img');
    const lbCap = lightbox.querySelector('figcaption');
    let index = 0;

    const show = i => {
        index = (i + galleryItems.length) % galleryItems.length;
        const img = galleryItems[index].querySelector('img');
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbCap.innerHTML = galleryItems[index].querySelector('figcaption').innerHTML;
    };

    galleryItems.forEach((item, i) => {
        item.querySelector('.g-open').addEventListener('click', () => {
            show(i);
            lightbox.showModal();
        });
    });
    lightbox.querySelector('.lb-close').addEventListener('click', () => lightbox.close());
    lightbox.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
    lightbox.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') show(index - 1);
        if (e.key === 'ArrowRight') show(index + 1);
    });

    // Swipe between photos on touch screens
    let touchX = null;
    lightbox.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', e => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
        touchX = null;
    });
}

// Press filters (topic + language)
const pressItems = document.querySelectorAll('.press-item');
const pressYears = document.querySelectorAll('.press-year');
const pressEmpty = document.querySelector('.press-empty');
const pressFilterState = { topic: 'all', lang: 'all' };

function applyPressFilters() {
    pressItems.forEach(item => {
        const topics = (item.dataset.topic || '').split(' ');
        const matchTopic = pressFilterState.topic === 'all' || topics.includes(pressFilterState.topic);
        const matchLang = pressFilterState.lang === 'all' || item.dataset.lang === pressFilterState.lang;
        item.hidden = !(matchTopic && matchLang);
    });
    let visibleYears = 0;
    pressYears.forEach(year => {
        year.hidden = !year.querySelector('.press-item:not([hidden])');
        if (!year.hidden) visibleYears++;
    });
    if (pressEmpty) pressEmpty.hidden = visibleYears > 0;
}

function bindPressFilter(selector, key, attr) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            pressFilterState[key] = btn.getAttribute(attr);
            applyPressFilters();
        });
    });
}

bindPressFilter('.press-filter', 'topic', 'data-filter-topic');
bindPressFilter('.press-lang', 'lang', 'data-filter-lang');
