// Noah Lim Tian Run - CV Website Data
// This file contains all the content for easy updates and maintenance

const websiteData = {
    // Personal Information
    personal: {
        name: "Noah Lim Tian Run",
        title: "Medical Student & National Jiu-Jitsu Athlete",
        tagline: "Medical student and national jiu-jitsu athlete passionate about AI in healthcare.",
        email: "noahlimjj@gmail.com",
        phone: "+65 9646 7502",
        location: "Singapore 299450"
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

    // Awards and Achievements
    awards: [
        {
            title: "Sports Excellence (Spex) Scholarship",
            organization: "Singapore Olympic Committee",
            year: "2024",
            icon: "fas fa-trophy"
        },
        {
            title: "SEA Games Gold Medalist",
            organization: "Jiu-Jitsu",
            year: "2019, 2021, 2022",
            icon: "fas fa-medal"
        },
        {
            title: "5th Place – 19th Asian Games",
            organization: "Hangzhou",
            year: "2023",
            icon: "fas fa-medal"
        },
        {
            title: "World Pro Jiu-Jitsu Juvenile Champion",
            organization: "Abu Dhabi",
            year: "2019",
            icon: "fas fa-crown"
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
            title: "Prognostic Factors in Necrotizing Fasciitis: 17-Year Retrospective Study (Singapore)"
        }
    ],

    // Social Links
    social: {
        linkedin: "#", // Add your LinkedIn URL
        youtube: "#",  // Add your YouTube URL
        github: "#"    // Add your GitHub URL
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
