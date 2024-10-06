import {
    android,
    oriongroup,
    flutter,
    kotlin,
    austclassroom,
    bachelorshome,
    orionportal,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    ani_weather,
    jobit,
    tripguide,
    threejs,
    fmbanking,
    paranoidmes,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Android Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Android",
        icon: android,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Kotlin",
        icon: kotlin,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
    
];

const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "React Native Developer",
        company_name: "Orion Group",
        icon: oriongroup,
        iconBg: "#383E56",
        date: "Oct 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Orion Group",
        icon: oriongroup,
        iconBg: "#383E56",
        date: "Oct 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Android Developer",
        company_name: "Orion Group",
        icon: oriongroup,
        iconBg: "#383E56",
        date: "Oct 2022 - Present",
        points: [
            "Designing and building advanced applications for the Android platform using Kotlin, Flutter and Java.",
            "Collaborating with cross-functional teams to define, design, and ship new features.",
            "Troubleshooting and debugging to optimize performance and improve user experience.",
            "Ensuring the best possible performance, quality, and responsiveness of applications.",
            "Implementing third-party APIs and ensuring backward compatibility with different Android versions.",
            "Writing clean, maintainable, and scalable code, while adhering to best practices and guidelines.",
            "Participating in code reviews, providing feedback"
        ],
    },
];

const testimonials = [
    // {
    //     testimonial:
    //         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //     name: "Sara Lee",
    //     designation: "CFO",
    //     company: "Acme Co",
    //     image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //     testimonial:
    //         "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //     name: "Chris Brown",
    //     designation: "COO",
    //     company: "DEF Corp",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //     testimonial:
    //         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "CTO",
    //     company: "456 Enterprises",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];

const projects = [
    {
        name: "Ani Weather",
        description:
            "Android-based application that provides users with real-time weather forecasts, current conditions, and weather alerts.",

        tags: [
            {
                name: "Kotlin",
                color: "blue-text-gradient",
            },
            {
                name: "Android",
                color: "green-text-gradient",
            },
        
        ],
        image: ani_weather,
        source_code_link: "https://github.com/FhamidAurnob/Ani_Weather",
    },
    {
        name: "FM Banking",
        description:
            "Desktop based banking application using java GUI (Netbeans)",
        tags: [
            {
                name: "Netbeans",
                color: "blue-text-gradient",
            },
            {
                name: "Java",
                color: "green-text-gradient",
            },
        ],
        image: fmbanking,
        source_code_link: "https://github.com/FhamidAurnob/Banking-Application",
    },
    {
        name: "Orion Portal",
        description:
            "Yearly Appraisal mobile application of Orion Group",
        tags: [
            {
                name: "Android",
                color: "blue-text-gradient",
            },
            {
                name: "Flutter",
                color: "green-text-gradient",
            },
            {
                name: "Dart",
                color: "pink-text-gradient",
            },
        ],
        image: orionportal,
        source_code_link: "https://play.google.com/store/apps/details?id=net.oriongroup.oriongroupportal&pcampaignid=web_share",
    },
    {
        name: "Bachelors Home",
        description:
            "Web based project for Bachelors to find and rent house or rooms",

        tags: [
            {
                name: "ASP.NET",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "C#",
                color: "red-text-gradient",
            },
            {
                name: "SQL",
                color: "purple-text-gradient",
            },
        ],
        image: bachelorshome,
        source_code_link: "https://github.com/FhamidAurnob/BachelorsHome-AUST-CSE-Software-Development-V",
    },
    {
        name: "Aust Classroom",
        description:
            "Document and PDF sharing android application only for AUSTIANS",

        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Android",
                color: "green-text-gradient",
            },
        
        ],
        image: austclassroom,
        source_code_link: "https://github.com/FhamidAurnob/Aust_Classroom",
    },
    {
        name: "Paranoid Messenger",
        description:
            "Desktop based Instant Messaging App(Group + individual chat) made using Java Netbeans",
        tags: [
            {
                name: "Netbeans",
                color: "blue-text-gradient",
            },
            {
                name: "Java",
                color: "green-text-gradient",
            },
        ],
        image: paranoidmes,
        source_code_link: "https://github.com/FhamidAurnob/Paranoid_Messenger",
    },
];

export { services, technologies, experiences, testimonials, projects };