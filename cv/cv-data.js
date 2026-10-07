// Single source of truth for the downloadable CV (Word + PDF).
// Edit here, then run `npm run build` in this folder (see README.md).
// Keep in step with index.html.

module.exports = {
    name: 'Noah Lim Tian Run',
    tagline: 'Medical student · National ju-jitsu athlete, Team Singapore',
    contact: [
        { text: 'noahlimjj@gmail.com', url: 'mailto:noahlimjj@gmail.com' },
        { text: 'noahlim.com', url: 'https://noahlim.com' },
        { text: 'Singapore' },
    ],

    summary:
        'Medical student and national ju-jitsu athlete with an interest in the clinical applications of ' +
        'artificial intelligence. Passionate about helping patients regain function and return to active ' +
        'lifestyles, having experienced first-hand the physical and psychological impact of musculoskeletal conditions.',

    education: [
        {
            title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
            org: 'Lee Kong Chian School of Medicine, Nanyang Technological University',
            when: '2022 – 2027 (expected)',
            points: ['Dean’s List: M1 (2022–23), M2 (2023–24), M3 (2024–25)'],
        },
        {
            title: 'International Baccalaureate Diploma',
            org: 'Anglo-Chinese School (Independent)',
            when: '2020',
            points: [],
        },
    ],

    experience: [
        {
            title: 'Medic',
            org: 'Singapore Civil Defence Force',
            when: 'Apr 2021 – Jul 2022',
            points: [
                'Awarded the Covid-19 Resilience Medal',
                'Best Medic, 1st Division, EMT SIM Wars',
                'Built a Python and Selenium program to automate medical inventory monitoring',
                'Developed emergency response skills in frontline operations',
            ],
        },
    ],

    // [year, competition, result, isMedal]
    record: [
        ['2026', 'Asian Games, Aichi-Nagoya', '5th, −69 kg', false],
        ['2026', 'Ju-Jitsu World Championships, Abu Dhabi', 'Silver, ne-waza −69 kg', true],
        ['2025', '33rd SEA Games, Thailand', 'Team Singapore flag bearer', false],
        ['2025', 'Ju-Jitsu World Championships, Bangkok', 'Silver, ne-waza −69 kg', true],
        ['2023', 'Asian Games, Hangzhou', '5th, −69 kg', false],
        ['2023', '32nd SEA Games, Phnom Penh', 'Gold, ne-waza −69 kg', true],
        ['2022', '31st SEA Games, Hanoi', 'Gold, −69 kg', true],
        ['2019', '30th SEA Games, Philippines', 'Gold, −62 kg', true],
        ['2019', 'World Pro Jiu-Jitsu Championship, Abu Dhabi', 'Juvenile champion', true],
        ['2019–25', 'Singapore National Jiu-Jitsu Championships', '1st place', false],
    ],

    // [title, detail]
    honours: [
        ['NTU Talent Scholarship', 'Nanyang Technological University'],
        ['Sports Excellence (spex) Scholarship', '2024'],
        ['Peter Lim High Performance Athlete Scholarship', '2020'],
        ['ACS OBA Sports Boy of the Year', '2020'],
        ['Evolve MMA Future World Champions Program', 'Full sponsorship to compete internationally'],
    ],

    research: [
        {
            title: 'Improved productivity using deep learning assisted Cobb angle measurement on scoliosis radiographs',
            venue: 'Presented at the Global Spine Conference 2024, Thailand',
        },
        {
            title: 'Deep learning for CT detection of high-grade metastatic epidural spinal cord compression and its impact on treatment delays',
            venue: 'PubMed',
            url: 'https://pubmed.ncbi.nlm.nih.gov/40647478/',
        },
        {
            title: 'Prognostic factors and outcomes of extremity necrotising fasciitis in Singapore: insights from a 17-year retrospective cohort study',
            venue: 'Annals of the Academy of Medicine, Singapore',
            url: 'https://annals.edu.sg/extremity-necrotising-fasciitis-outcomes/',
        },
    ],

    // [label, items]
    skills: [
        ['Certifications', 'PADI Open Water Diver · CITI Certificate · Basics of Clinical Research & SRMA Workshop'],
        ['Technical', 'Python · JavaScript · Machine learning'],
    ],
};
