// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — every section reads from these exports.
// ─────────────────────────────────────────────────────────────

const devicon = (name, file = `${name}-original`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${file}.svg`;

export const profile = {
  name: "Fhamid Mottaki Aurnob",
  shortName: "Fhamid",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka",
  email: "fmaurnob0@gmail.com",
  github: "https://github.com/FhamidAurnob",
  githubUser: "FhamidAurnob",
  linkedin: "https://www.linkedin.com/in/fhamid-aurnob-115a8915a",
  currently: "Customer Service Officer @ City Bank PLC",
  roles: [
    "Android Developer",
    "Software Engineer",
    "Fintech Builder",
    "Algo-Trading Engineer",
    "Banking Tech Professional",
  ],
  tagline:
    "I build Android apps, fintech platforms and algorithmic trading systems — and I bring hands-on banking operations experience to every product I ship.",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Journey" },
  { id: "skills", title: "Skills" },
  { id: "work", title: "Work" },
  { id: "research", title: "Research" },
  { id: "contact", title: "Contact" },
];

// Experience start: Oct 2022 → computed live, so the number never goes stale
const careerStart = new Date(2022, 9, 8);
const yearsExp = Math.floor((Date.now() - careerStart) / (365.25 * 24 * 3600 * 1000));

export const stats = [
  { value: yearsExp, suffix: "+", label: "Years in industry" },
  { value: 6, suffix: "+", label: "Products shipped" },
  { value: 3, suffix: "", label: "Thesis papers" },
  { value: 10, suffix: "+", label: "Languages & frameworks" },
];

export const services = [
  {
    title: "Android Development",
    desc: "Native Kotlin & Jetpack Compose apps with smooth, animated UIs.",
    icon: "android",
    accent: "#3ddc84",
  },
  {
    title: "Full-Stack & Cross-Platform",
    desc: "React, React Native, Flutter and ASP.NET Core — web to mobile.",
    icon: "layers",
    accent: "#22d3ee",
  },
  {
    title: "Fintech & Algo Trading",
    desc: "MQL5 Expert Advisors and Pine Script tools for XAUUSD markets.",
    icon: "chart",
    accent: "#f5c451",
  },
  {
    title: "Banking Systems & Ops",
    desc: "Core Banking System workflows, compliance and customer operations.",
    icon: "bank",
    accent: "#a78bfa",
  },
];

export const quickFacts = [
  { label: "Based in", value: "Dhaka, BD" },
  { label: "Degree", value: "BSc CSE · AUST" },
  { label: "Now", value: "City Bank PLC" },
  { label: "Focus", value: "Android · Fintech" },
];

export const experiences = [
  {
    title: "Customer Service Officer",
    company_name: "City Bank PLC",
    initials: "CB",
    iconBg: "linear-gradient(135deg,#7c3aed,#06b6d4)",
    date: "Jun 2025 — Present",
    current: true,
    points: [
      "Handle account management and day-to-day customer service operations on the Core Banking System (CBS).",
      "Resolve customer complaints and draft grievance-management correspondence end to end.",
      "Run compliance workflows, keeping every request accurate, documented and audit-ready.",
    ],
    tags: ["CBS", "Compliance", "Customer Ops"],
  },
  {
    title: "IT Executive",
    company_name: "Orion Group Ltd.",
    initials: "OG",
    iconBg: "linear-gradient(135deg,#f59e0b,#ef4444)",
    date: "Oct 2022 — Jun 2025",
    points: [
      "Designed and developed Android applications for business use.",
      "Worked with SAP Plant Maintenance (PM) modules to support maintenance operations.",
      "Bridged business teams and technology across a large industrial group for nearly three years.",
    ],
    tags: ["Android", "Kotlin", "SAP PM"],
  },
  {
    title: "BSc in Computer Science & Engineering",
    company_name: "Ahsanullah University of Science & Technology",
    initials: "AU",
    iconBg: "linear-gradient(135deg,#10b981,#3b82f6)",
    date: "Graduated 2023",
    points: [
      "CGPA 3.35 / 4.00.",
      "Thesis research in machine learning and deep learning — NLP and audio classification.",
    ],
    tags: ["Education", "ML", "Research"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Kotlin", icon: devicon("kotlin") },
      { name: "Java", icon: devicon("java") },
      { name: "Python", icon: devicon("python") },
      { name: "C#", icon: devicon("csharp") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "MQL5", glyph: "M5" },
      { name: "Pine Script", glyph: "PS" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Android", icon: devicon("android") },
      { name: "Jetpack Compose", icon: devicon("jetpackcompose") },
      { name: "Flutter", icon: devicon("flutter") },
      { name: "React Native", icon: devicon("react") },
      { name: "Android Studio", icon: devicon("androidstudio") },
    ],
  },
  {
    title: "Web & Backend",
    items: [
      { name: "React", icon: devicon("react") },
      { name: "ASP.NET Core", icon: devicon("dot-net") },
      { name: "Three.js", icon: devicon("threejs"), invert: true },
      { name: "Tailwind", icon: devicon("tailwindcss") },
      { name: "HTML5", icon: devicon("html5") },
      { name: "CSS3", icon: devicon("css3") },
    ],
  },
  {
    title: "Enterprise & Tools",
    items: [
      { name: "SAP PM", glyph: "SAP" },
      { name: "Core Banking", glyph: "CBS" },
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github"), invert: true },
      { name: "MetaTrader 5", glyph: "MT5" },
      { name: "TradingView", glyph: "TV" },
    ],
  },
];

export const projectFilters = ["All", "Mobile", "Fintech", "Trading"];

export const projects = [
  {
    name: "Animated Weather",
    category: "Mobile",
    featured: true,
    badge: "Latest",
    description:
      "My newest Kotlin build — a weather app with animated scenes that change to match the conditions outside, so the forecast feels alive instead of just being read.",
    tags: ["Kotlin", "Android", "Animations"],
    theme: "weather",
    link: "https://github.com/FhamidAurnob/Ani_Weather",
  },
  {
    name: "CherryCharm v2.0",
    category: "Mobile",
    description:
      "A full e-commerce Android app built with Kotlin and Jetpack Compose — product browsing, cart and a modern, fluid shopping experience.",
    tags: ["Kotlin", "Jetpack Compose", "E-commerce"],
    theme: "cherry",
    link: "https://github.com/FhamidAurnob/CherryCharm-v2.0",
  },
  {
    name: "GreenO2",
    category: "Mobile",
    description:
      "A carbon-tracking app (formerly Green Miles) that helps people measure and cut their footprint. Built as a team project.",
    tags: ["Android", "Sustainability", "Team"],
    theme: "green",
    link: "https://github.com/FhamidAurnob/GreenO2",
  },
  {
    name: "GoldHunt",
    category: "Fintech",
    description:
      "A fintech platform for gold-backed crypto with built-in algorithmic trading — on the web and on Android.",
    tags: ["Fintech", "Web", "Android"],
    theme: "gold",
    link: "https://goldhunt.online",
    linkLabel: "Visit site",
  },
  {
    name: "SMC / ICT Expert Advisors",
    category: "Trading",
    description:
      "A family of MQL5 Expert Advisors for XAUUSD that trade Smart Money Concepts — CHoCH, BOS, Order Blocks and Fair Value Gaps.",
    tags: ["MQL5", "MetaTrader 5", "XAUUSD"],
    theme: "candles",
  },
  {
    name: "Auto-Optimizing Indicators",
    category: "Trading",
    description:
      "Pine Script indicators that tune their own parameters, published as an invite-only product on TradingView.",
    tags: ["Pine Script", "TradingView", "Optimization"],
    theme: "wave",
  },
];

export const research = [
  {
    title: "Machine Learning Approaches to Predict Suicidal Tendency from Social Media Text",
    authors: "with I. J. Urmi, A. Saky, J. I. Haque",
    area: "NLP · Mental-health AI",
  },
  {
    title: "Sentiment Analysis on Corona Virus Tweets",
    authors: "First author · with MD N. Islam, R. H. Rasan",
    area: "NLP · Sentiment",
  },
  {
    title: "Music Genre Classification With Deep Learning",
    authors: "First author · with MD N. Islam, R. H. Rasan",
    area: "Deep Learning · Audio",
  },
];
