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

// Navbar rule + active section highlighting
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);

    let current = '';
    const probe = window.scrollY + window.innerHeight * 0.3;
    sections.forEach(section => {
        if (probe >= section.offsetTop) current = section.id;
    });
    // Experience and Skills have no nav link; keep the nearest one highlighted
    const alias = { experience: 'education', skills: 'research' };
    current = alias[current] || current;

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// CV download
document.getElementById('download-cv').addEventListener('click', e => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'Noah Lim CV.docx';
    link.download = 'Noah_Lim_CV.docx';
    document.body.appendChild(link);
    link.click();
    link.remove();
});

// Quiet fade-in for sections as they scroll into view
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                reveal.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.sec, .plates').forEach(el => {
        el.classList.add('reveal');
        reveal.observe(el);
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
