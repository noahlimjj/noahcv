// Noah Lim Tian Run - CV Website Data
// This file contains all the content for easy updates and maintenance
//
// ─── HOW TO UPDATE ─────────────────────────────────────────────
// 1. Add new entries to the appropriate array below.
// 2. Mirror the change in index.html (the HTML is the source of truth
//    for rendering; this file is the single reference for data).
// 3. For awards, place athletic items under `awards.athletic` and
//    scholarship / academic items under `awards.academic`.
// 4. For news articles, add a new object to the `news` array with
//    source, date, title, url, topic and lang (see the comment on `news`).
// ───────────────────────────────────────────────────────────────

const websiteData = {
    // Personal Information
    personal: {
        name: "Noah Lim Tian Run",
        title: "Medical Student & National Jiu-Jitsu Athlete",
        tagline: "Medical student and national jiu-jitsu athlete",
        email: "noahlimjj@gmail.com"
    },

    // Professional Summary
    summary: "Medical student and national jiu-jitsu athlete with an interest in the clinical applications of artificial intelligence. Passionate in helping patients regain function and return to active lifestyles, having first-hand experience of the physical and psychological impact of musculoskeletal conditions",

    // Education
    education: [
        {
            institution: "Lee Kong Chian School of Medicine, MBBS",
            date: "Expected: July 2027",
            achievements: [
                "Dean's List: M1 (2022-2023), M2 (2023-2024), M3 (2024-2025)"
            ]
        }
    ],

    // Work Experience
    experience: [
        {
            position: "Singapore Civil Defence Force Medic",
            period: "04/2021 – 07/2022",
            responsibilities: [
                "Enhanced emergency response abilities",
                "Awarded Covid-19 Resilience Medal",
                "Best medic (1st division, EMT SIM Wars)",
                "Built a Python-Selenium script to automate medical inventory checks"
            ]
        }
    ],

    // Awards and Achievements — split into Athletic and Academic
    awards: {
        athletic: [
            {
                title: "JJAU World Championship",
                description: "Silver Medal (2025, 2026)",
                icon: "fas fa-medal",
                link: "https://www.straitstimes.com/sport/training-smarter-spurs-spore-jiu-jitsu-exponent-noah-lim-to-silver-at-world-championships"
            },
            {
                title: "SEA Games Gold Medalist",
                description: "Jiu-Jitsu (2019, 2021, 2022)",
                icon: "fas fa-medal"
            },
            {
                title: "Asian Games – 5th Place",
                description: "Hangzhou (2023), Aichi Nagoya (2026)",
                icon: "fas fa-medal"
            },
            {
                title: "World Pro Jiu-Jitsu Juvenile Champion",
                description: "Abu Dhabi (2019)",
                icon: "fas fa-crown"
            },
            {
                title: "Singapore National Jiujitsu Championship 1st Place",
                description: "2019–2025",
                icon: "fas fa-medal"
            },
            {
                title: "ACS OBA Sports Boy of the Year Award",
                description: "2020",
                icon: "fas fa-trophy"
            },
            {
                title: "Evolve MMA Future World Champions Program",
                description: "Full sponsorship to compete internationally",
                icon: "fas fa-star"
            }
        ],
        academic: [
            {
                title: "NTU Talent Scholarship",
                description: "Nanyang Technological University",
                icon: "fas fa-graduation-cap"
            },
            {
                title: "Sports Excellence (Spex) Scholarship",
                description: "Singapore Olympic Committee (2024)",
                icon: "fas fa-trophy"
            },
            {
                title: "Peter Lim High Performance Athlete Scholarship",
                description: "2020",
                icon: "fas fa-award"
            }
        ]
    },

    // In the News — newest first. topic: asian-games | worlds | sea-games | video | radio (space-separated); lang: en | zh
    news: [
        {
            source: "The Straits Times",
            date: "Oct 2026",
            title: "From jiu-jitsu fighter Noah Lim a lovely lesson: Grace after grit",
            url: "https://www.straitstimes.com/sport/from-jiu-jitsu-fighter-noah-lim-a-lovely-lesson-grace-after-grit",
            topic: "asian-games",
            lang: "en",
            featured: true
        },
        {
            source: "The Straits Times",
            date: "Oct 2026",
            title: "Hearing Majulah Singapura, show of sportsmanship and bad translations: Moments of 2026 Asian Games",
            url: "https://www.straitstimes.com/sport/hearing-majulah-singapura-show-of-sportsmanship-and-bad-translations-moments-of-2026-asian-games",
            topic: "asian-games",
            lang: "en"
        },
        {
            source: "The Straits Times",
            date: "Oct 2026",
            title: "4 sports, 4 sibling pairs: Team Singapore's athletes share more than a love for sport",
            url: "https://www.straitstimes.com/sport/4-sports-4-sibling-pairs-team-singapores-athletes-share-more-than-a-love-for-sport",
            topic: "asian-games",
            lang: "en"
        },
        {
            source: "CNA",
            date: "Oct 2026",
            title: "Asian Games: Singapore's ju-jitsu exponent Noah Lim misses out on medal",
            url: "https://www.channelnewsasia.com/watch/asian-games-singapores-ju-jitsu-exponent-noah-lim-misses-out-medal-6424851",
            topic: "asian-games video",
            lang: "en"
        },
        {
            source: "Lianhe Zaobao",
            date: "Oct 2026",
            title: "再与奖牌擦肩而过 新加坡巴柔好手林天润失落但不忘队友",
            url: "https://www.zaobao.com.sg/news/sports/story20261001-9764690",
            topic: "asian-games",
            lang: "zh"
        },
        {
            source: "8world",
            date: "Oct 2026",
            title: "林天润闯巴西柔术铜牌战 惜败无缘奖牌",
            url: "https://www.8world.com/sports/asian-game-2026-ju-jitsu-3296746",
            topic: "asian-games",
            lang: "zh"
        },
        {
            source: "CNA",
            date: "Sep 2026",
            title: "Seven Singapore athletes to look out for at the 2026 Asian Games in Japan",
            url: "https://www.channelnewsasia.com/sport/asian-games-seven-singapore-athletes-6390866",
            topic: "asian-games",
            lang: "en"
        },
        {
            source: "MONEY FM 89.3",
            date: "Sep 2026",
            title: "The Agenda: Can 'hard work' alone get you ahead anymore?",
            url: "https://open.spotify.com/episode/1xdKdlY2RW77QgBKjZSKrd",
            topic: "radio",
            lang: "en"
        },
        {
            source: "The Straits Times",
            date: "Aug 2026",
            title: "Taking gap year reaps silver for S'pore's Noah Lim at ju-jitsu world c'ships",
            url: "https://www.straitstimes.com/sport/combat-sports/singapores-noah-lim-clinches-silver-at-ju-jitsu-world-championships",
            topic: "worlds",
            lang: "en"
        },
        {
            source: "Lianhe Zaobao",
            date: "Aug 2026",
            title: "林天润连续两年获柔术世锦赛银牌 剑指亚运会奖牌",
            url: "https://www.zaobao.com.sg/news/sports/story20260808-9491371",
            topic: "worlds",
            lang: "zh"
        },
        {
            source: "The Straits Times",
            date: "Dec 2025",
            title: "SEA Games 2025: Noah Lim's flight to fourth consecutive ju-jitsu gold halted in opening round",
            url: "https://www.straitstimes.com/sport/sea-games-2025-noah-lims-flight-to-fourth-consecutive-gold-halted-in-opening-round",
            topic: "sea-games",
            lang: "en"
        },
        {
            source: "The Straits Times",
            date: "Nov 2025",
            title: "Training smarter spurs S'pore ju-jitsu exponent Noah Lim to silver at world championships",
            url: "https://www.straitstimes.com/sport/training-smarter-spurs-spore-jiu-jitsu-exponent-noah-lim-to-silver-at-world-championships",
            topic: "worlds",
            lang: "en"
        },
        {
            source: "Lianhe Zaobao",
            date: "Nov 2025",
            title: "林天润巴西柔术世锦赛摘银 称\"聪明训练\"取得突破",
            url: "https://www.zaobao.com.sg/news/sports/story20251107-7785945",
            topic: "worlds",
            lang: "zh"
        },
        {
            source: "CNA",
            date: "May 2023",
            title: "Ju-jitsu fighter Noah Lim conquers injury, wins Singapore's first gold at 32nd SEA Games",
            url: "https://www.channelnewsasia.com/sport/ju-jitsu-fighter-noah-lim-wins-singapores-first-gold-32nd-sea-games-3469466",
            topic: "sea-games",
            lang: "en"
        },
        {
            source: "CNA",
            date: "May 2023",
            title: "Ju-jitsu fighter Noah Lim conquers injury, wins Singapore's first gold at 32nd SEA Games (Video)",
            url: "https://www.channelnewsasia.com/watch/ju-jitsu-fighter-noah-lim-conquers-injury-wins-singapores-first-gold-32nd-sea-games-video-3469816",
            topic: "sea-games video",
            lang: "en"
        },
        {
            source: "The Straits Times",
            date: "May 2023",
            title: "SEA Games 2023: First gold medal for Singapore as Noah Lim comes out top in ju-jitsu",
            url: "https://www.straitstimes.com/sport/sea-games-2023-first-gold-medal-for-singapore-as-noah-lim-comes-out-top-in-ju-jitsu",
            topic: "sea-games",
            lang: "en"
        },
        {
            source: "NTU LKCMedicine",
            date: "May 2023",
            title: "LKCMedicine student Noah Lim wins Singapore's first Jiu-Jitsu Gold at SEA Games",
            url: "https://www.ntu.edu.sg/medicine/news-events/news/detail/lkcmedicine-student-noah-lim-wins-singapore's-first-jiu-jitsu-gold-at-sea-games",
            topic: "sea-games",
            lang: "en"
        },
        {
            source: "The Straits Times",
            date: "May 2022",
            title: "SEA Games: Noah Lim wins back-to-back gold with victory in jujitsu men's U-69kg",
            url: "https://www.straitstimes.com/sport/combat-sports/sea-games-noah-lim-wins-back-to-back-gold-with-victory-in-jujitsu-mens-u-69kg",
            topic: "sea-games",
            lang: "en"
        },
        {
            source: "The Straits Times",
            date: "Dec 2019",
            title: "SEA Games: Noah Lim submits Thai opponent to win jiu-jitsu gold for Singapore",
            url: "https://www.straitstimes.com/sport/sea-games-noah-lim-submits-thai-opponent-to-win-jiu-jitsu-gold-for-singapore",
            topic: "sea-games",
            lang: "en"
        }
    ],

    // Skills and Certifications
    skills: {
        certifications: [
            "PADI Open Water Diver",
            "CITI Certificate",
            "Basics of Clinical Research & SRMA Workshop"
        ],
        technical: [
            "Python",
            "JavaScript",
            "Machine Learning"
        ]
    },

    // Research
    research: [
        {
            conference: "Global Spine Conference 2024 (Thailand)",
            type: "Published",
            title: "Improved Productivity Using Deep Learning Assisted Cobb Angle Measurement on Scoliosis Radiographs"
        },
        {
            conference: "Deep Learning for CT Detection",
            type: "Research",
            title: "Deep Learning for CT Detection of Metastatic Epidural Spinal Cord Compression",
            link: "https://pubmed.ncbi.nlm.nih.gov/40647478/"
        },
        {
            conference: "Prognostic Factors Study",
            type: "Research",
            title: "Prognostic Factors in Necrotizing Fasciitis: 17-Year Retrospective Study (Singapore)",
            link: "https://annals.edu.sg/extremity-necrotising-fasciitis-outcomes/"
        }
    ],

    // Social Links
    social: {
        linkedin: "https://sg.linkedin.com/in/noah-lim-a646b7267",
        youtube: "https://www.youtube.com/channel/UCxd2l6lW6b84j6IthHCO2sA",
        github: "https://github.com/",
        instagram: "https://www.instagram.com/noah.lim/?hl=en",
        tiktok: "https://www.tiktok.com/@noahlimjj"
    },

    // Official Profile
    officialProfile: {
        title: "Noah Lim Tian Run — Team Singapore",
        url: "https://www.teamsingapore.sg/athletes/noah-lim-tian-run"
    },

    // Website Configuration
    config: {
        theme: {
            primaryColor: "#1e3a8a",
            secondaryColor: "#3b82f6",
            textColor: "#1a1a1a",
            backgroundColor: "#ffffff",
            accentColor: "#059669"
        },
        animations: {
            enabled: true,
            duration: 600,
            delay: 100
        }
    }
};

// Function to dynamically populate content
function populateContent() {
    // This function can be used to dynamically populate content from the data
    // Currently, content is hardcoded in HTML for simplicity
    // You can uncomment and modify this function to make the site more dynamic
    
    console.log('Website data loaded:', websiteData);
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = websiteData;
}

// Make available globally
window.websiteData = websiteData;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', populateContent); 
