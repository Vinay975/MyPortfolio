export interface PersonalInfo {
  name: string;
  title: string;
  roleSubtitle: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  bio: string;
  summary: string;
  availableForWork: boolean;
}

export interface SkillItem {
  name: string;
  tier: 'Core' | 'Advanced' | 'Proficient' | 'Familiar';
  focus: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | 'Developer Tool';
  description: string;
  problem: string;
  solution: string;
  contributions: string[];
  tech: string[];
  github: string;
  live?: string;
  image: string;
  featured: boolean;
  metricsOrStatus?: string;
}

export interface MiniProject {
  name: string;
  category: string;
  tech: string;
  description: string;
  github: string;
  live?: string;
}

export interface Internship {
  id: number;
  role: string;
  company: string;
  location: string;
  employeeId?: string;
  duration: string;
  type: string;
  description: string;
  keyResponsibilities: string[];
  certificate: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  url: string;
}

export interface Education {
  degree: string;
  college: string;
  year: string;
  location: string;
  gpa: string;
  focus: string;
}

export const personalInfo: PersonalInfo = {
  name: "Vinay Tellagorla",
  title: "Full Stack Developer & Software Engineer",
  roleSubtitle: "Building robust web and mobile architectures with clean systems design and thoughtful user interfaces.",
  email: "tellagorlavinay78@gmail.com",
  phone: "+91 9030601848",
  linkedin: "vinay-tellagorla",
  github: "Vinay975",
  location: "Andhra Pradesh, India",
  bio: "Full Stack and Software Developer with deep hands-on focus in React, Node.js, and React Native. I engineer maintainable, end-to-end applications with resilient backend services and responsive client architectures.",
  summary: "Specialized in TypeScript, scalable REST architectures, state management, and modern component engineering. Passionate about solving complex system bottlenecks and crafting high-performance digital experiences.",
  availableForWork: true
};

export const skills: {
  frontend: SkillItem[];
  backend: SkillItem[];
  database: SkillItem[];
  tools: SkillItem[];
  languages: SkillItem[];
} = {
  frontend: [
    { name: "React.js", tier: "Core", focus: "Component architecture, custom hooks, performance profiling" },
    { name: "React Native", tier: "Core", focus: "Cross-platform iOS/Android development, mobile navigation" },
    { name: "TypeScript", tier: "Core", focus: "Type safety, generic abstractions, robust interfaces" },
    { name: "JavaScript (ES6+)", tier: "Core", focus: "Asynchronous runtime, event loop, closures, DOM APIs" },
    { name: "Tailwind CSS", tier: "Advanced", focus: "Design systems, responsive layouts, theme tokens" },
    { name: "HTML5 & Modern CSS", tier: "Advanced", focus: "Semantic markup, CSS Grid, Flexbox, accessible standards" },
    { name: "Bootstrap", tier: "Proficient", focus: "Grid system, utility styling, rapid prototyping" }
  ],
  backend: [
    { name: "Node.js", tier: "Core", focus: "Event-driven architecture, non-blocking I/O, server services" },
    { name: "Express.js", tier: "Core", focus: "REST API routing, middleware chains, error handling" },
    { name: "RESTful APIs", tier: "Core", focus: "API design conventions, HTTP status codes, payload structures" },
    { name: "JWT & Authentication", tier: "Advanced", focus: "Bearer token authorization, role-based access control, security" },
    { name: "API Middleware", tier: "Advanced", focus: "Request validation, rate limiting, logging pipelines" }
  ],
  database: [
    { name: "MongoDB", tier: "Core", focus: "Document modeling, aggregation pipelines, schema validation" },
    { name: "Mongoose ODM", tier: "Core", focus: "Schema design, lifecycle hooks, indexing, population" },
    { name: "Firebase", tier: "Advanced", focus: "Firestore, real-time database, cloud authentication" },
    { name: "MySQL", tier: "Proficient", focus: "Relational queries, table normalization, transactions" },
    { name: "PostgreSQL", tier: "Proficient", focus: "Relational modeling, indexing, ACID compliance" }
  ],
  tools: [
    { name: "Git & GitHub", tier: "Core", focus: "Version control workflows, branching, pull requests, releases" },
    { name: "VS Code", tier: "Core", focus: "Integrated debugging, LSP tooling, workspace customization" },
    { name: "Postman", tier: "Advanced", focus: "API testing, automated endpoint collections, mock servers" },
    { name: "npm & yarn", tier: "Advanced", focus: "Package management, dependency auditing, workspace scripts" },
    { name: "Vite / Webpack", tier: "Advanced", focus: "Module bundling, build pipelines, HMR configuration" }
  ],
  languages: [
    { name: "TypeScript", tier: "Core", focus: "Strict typing, type contracts, generic architectures" },
    { name: "JavaScript", tier: "Core", focus: "ESNext features, modern browser & runtime programming" },
    { name: "C++", tier: "Advanced", focus: "Data structures, algorithms, object-oriented principles" },
    { name: "Python", tier: "Proficient", focus: "Scripting, algorithmic problem solving, automation" },
    { name: "Java", tier: "Proficient", focus: "OOP paradigms, core data modeling, backend fundamentals" },
    { name: "SQL", tier: "Proficient", focus: "Relational queries, table schema definition, joins" }
  ]
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Habita",
    subtitle: "Rental Discovery & Property Management Platform",
    category: "Full Stack",
    description: "An end-to-end rental discovery and property administration system designed to bridge the gap between accommodation seekers and property owners with transparent listings.",
    problem: "Students and relocating professionals struggle with opaque rental listings, hidden costs, and lack of verified amenity details for hostels, PGs, and apartments, causing extensive friction in communication.",
    solution: "Built Habita with dedicated discovery filters for hostels, PGs, and apartments, transparent amenity inventories, bookmarking/saved listings, and real-time owner-seeker inquiry channels.",
    contributions: [
      "Engineered frontend architecture with React and responsive layouts for property cataloging",
      "Implemented comprehensive search filter engine based on price, category, and amenities",
      "Designed property owner management portal for creating, updating, and monitoring listings",
      "Built saved listings collection allowing prospective tenants to compare accommodation options"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Vinay975/habita",
    live: "https://habita-app.vercel.app",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    metricsOrStatus: "Priority Architecture"
  },
  {
    id: 2,
    title: "RepoMind",
    subtitle: "Developer Repository Intelligence & Architecture Analyzer",
    category: "Developer Tool",
    description: "Developer-focused codebase analysis platform that parses repository topologies to generate automated structural documentation, module graphs, and architectural insights.",
    problem: "Developers onboarding onto complex open-source or team repositories waste considerable hours manually mapping directory structures, dependencies, and internal relations.",
    solution: "Engineered RepoMind to connect to GitHub repositories, parse tree hierarchies, inspect manifest dependencies, and produce structured markdown documentation and visual module breakdowns.",
    contributions: [
      "Built GitHub REST API integration to fetch repository trees, commits, and file contents",
      "Implemented automated documentation generator summarizing project setup and architecture",
      "Constructed interactive dependency visualization and folder explorer in React",
      "Designed live markdown documentation previewer with one-click export capability"
    ],
    tech: ["React", "TypeScript", "Node.js", "GitHub API", "Tailwind CSS"],
    github: "https://github.com/Vinay975/repomind",
    live: "https://repomind.vercel.app",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    metricsOrStatus: "Priority Tool"
  },
  {
    id: 3,
    title: "Zewixa",
    subtitle: "Real-Time Enterprise Business Operations Hub",
    category: "Full Stack",
    description: "Full-scale business operations platform featuring secure multi-role authentication, operational workflows, and real-time administrative analytics dashboards.",
    problem: "Small-to-medium businesses frequently struggle with fragmented tooling for user access, customer invoicing, and administrative oversight.",
    solution: "Delivered a centralized MERN web application with JWT-secured endpoints, responsive management dashboards, and operational monitoring.",
    contributions: [
      "Architected RESTful API backend using Node.js, Express, and MongoDB Mongoose models",
      "Implemented JWT authentication with HTTP-only cookies and protected client-side routes",
      "Developed responsive administrative dashboard with live metric visualization in React"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/Vinay975/zewixa",
    live: "https://zewixa.vercel.app",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    metricsOrStatus: "Production Deployment"
  },
  {
    id: 4,
    title: "FitClub",
    subtitle: "Fitness Tracking & Nutrition Planning Application",
    category: "Frontend",
    description: "Comprehensive health and workout web application enabling users to curate custom training regimens, track daily macronutrients, and monitor fitness metrics.",
    problem: "Fitness trackers are often cluttered with excessive paywalls and complex interfaces that discourage consistent habit logging.",
    solution: "Engineered an accessible, clean workout planner with immediate routine visualization, progress trackers, and cloud-persisted user profiles.",
    contributions: [
      "Built reactive workout configuration UI in React with dynamic workout splits",
      "Configured Firebase real-time database and user authentication flows",
      "Crafted mobile-responsive workout cards with responsive exercise animations"
    ],
    tech: ["React", "Firebase", "CSS3", "JavaScript"],
    github: "https://github.com/Vinay975/fitclub",
    live: "https://fitclub-app.vercel.app",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 5,
    title: "OpenTab",
    subtitle: "Virtual Collaboration & Concept Sharing Platform",
    category: "Full Stack",
    description: "Collaborative platform for distributed teams to brainstorm concepts, exchange feedback in virtual rooms, and organize project milestones in shared boards.",
    problem: "Dispersed teams need lightweight spaces to quickly exchange project mockups and feedback without heavy enterprise suite friction.",
    solution: "Implemented OpenTab featuring persistent virtual collaboration boards, member permission control, and structured comment threads.",
    contributions: [
      "Engineered backend REST endpoints for room generation, member access, and card states",
      "Built clean React interface with optimistic UI updates for real-time interactions",
      "Integrated MongoDB schemas for hierarchical boards and categorized topic lists"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/venugopal8005/opentable",
    live: "https://opentable-clone.vercel.app",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 6,
    title: "Resume Builder",
    subtitle: "Dynamic Curriculum Vitae Generator & PDF Exporter",
    category: "Frontend",
    description: "Client-side resume creation suite providing dynamic live previews, configurable typography and layout themes, and high-fidelity PDF document rendering.",
    problem: "Existing online resume tools lock download functionality behind subscriptions or alter layout margins upon exporting.",
    solution: "Engineered a client-side generator with instant preview recalculation, template switching, and pixel-accurate PDF printing.",
    contributions: [
      "Implemented structured JSON state store reflecting complex resume sections",
      "Built real-time preview canvas adjusting to layout and color theme switches",
      "Optimized print style stylesheets for high-resolution PDF generation"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "HTML5"],
    github: "https://github.com/Vinay975/Resume",
    live: "https://resume-builder-app.vercel.app",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 7,
    title: "Event Planner",
    subtitle: "Event Logistics & RSVP Administration Engine",
    category: "Full Stack",
    description: "Full-stack event administration suite featuring attendee invitations, automated RSVP status synchronization, and schedule timelines.",
    problem: "Organizing medium-sized events usually relies on fragmented spreadsheets and delayed RSVP feedback from guests.",
    solution: "Created an all-in-one portal for event hosts to publish agendas, track attendance confirmations in real time, and manage guest inquiries.",
    contributions: [
      "Engineered guest management REST APIs with confirmation token validation",
      "Developed interactive guest response dashboard with live statistics",
      "Designed responsive schedule view for mobile attendees"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Vinay975/event-planner",
    live: "https://event-planner-app.vercel.app",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 8,
    title: "Typing Speed Game",
    subtitle: "Real-Time WPM & Keystroke Accuracy Evaluation Engine",
    category: "Frontend",
    description: "Precision keystroke evaluation platform with word-per-minute metrics, character accuracy calculations, and adaptive difficulty modes.",
    problem: "Accurate typing metrics require strict sub-millisecond event handling to prevent inaccurate WPM calculation.",
    solution: "Developed raw event listener pipelines measuring typing rhythm, mistake penalties, and instantaneous speed graphing.",
    contributions: [
      "Built timer and keystroke validation engine in pure JavaScript and React",
      "Implemented real-time error highlight matching string indices",
      "Created session leaderboard and historical performance caching"
    ],
    tech: ["JavaScript", "CSS3", "HTML5"],
    github: "https://github.com/Vinay975/typing-game",
    live: "https://typing-speed-game.vercel.app",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
];

export const miniProjects: MiniProject[] = [
  { name: "Weather App", category: "API Integration", tech: "React · OpenWeather API", description: "Real-time global weather dashboard with 5-day forecasts and atmospheric metrics.", github: "https://github.com/Vinay975/weather-app" },
  { name: "Chatbot Application", category: "AI & Natural Language", tech: "Node.js · Express · WebSockets", description: "Interactive conversational interface with prompt matching and intent routing.", github: "https://github.com/Vinay975/chatbot" },
  { name: "Notes Hub", category: "Productivity", tech: "MERN Stack", description: "Persistent markdown note-taking tool with categorized tag filtering.", github: "https://github.com/Vinay975/notes-app" },
  { name: "Currency Converter", category: "Utility", tech: "React · Exchange Rate API", description: "Live currency evaluation tool supporting 40+ international currency pairings.", github: "https://github.com/Vinay975/currency-converter" },
  { name: "QR Code Generator", category: "Tool", tech: "JavaScript · Canvas API", description: "Dynamic QR code encoder for URLs, contact cards, and text with SVG/PNG download.", github: "https://github.com/Vinay975/qr-generator" },
  { name: "Password Generator", category: "Security", tech: "JavaScript · Crypto API", description: "Cryptographically randomized password creator with entropy strength scoring.", github: "https://github.com/Vinay975/password-generator" },
  { name: "Expense Splitter", category: "Finance", tech: "React · State Management", description: "Group expense ledger calculating optimal debt settlements between multiple peers.", github: "https://github.com/Vinay975/expense-splitter" },
  { name: "Calculator", category: "Utility", tech: "JavaScript · DOM Architecture", description: "Accurate mathematical calculation engine with expression history recording.", github: "https://dashing-sprinkles-a79678.netlify.app/", live: "https://dashing-sprinkles-a79678.netlify.app/" },
  { name: "Rock Paper Scissors", category: "Game", tech: "JavaScript · State Logic", description: "Classic interactive game with randomized CPU logic and winning streak counters.", github: "https://vermillion-gnome-8ff4a2.netlify.app/", live: "https://vermillion-gnome-8ff4a2.netlify.app/" },
  { name: "Precision Timer", category: "Utility", tech: "React · Web APIs", description: "High-accuracy stopwatch and countdown interval system with lap timing splits.", github: "https://vermillion-gnome-8ff4a2.netlify.app/", live: "https://vermillion-gnome-8ff4a2.netlify.app/" }
];

export const internships: Internship[] = [
  {
    id: 1,
    role: "Full Stack with React Native Developer",
    company: "Technical Hub Pvt. Ltd.",
    location: "Surampalem, India",
    employeeId: "22A91A61C0",
    duration: "May 01, 2025 – June 30, 2025",
    type: "Industry Internship",
    description: "Selected through rigorous institutional assessment. Hands-on professional engineering focusing on React Native mobile architectures, full-stack REST integrations, and modern enterprise software workflows.",
    keyResponsibilities: [
      "Developed production-ready mobile components using React Native and TypeScript",
      "Connected client mobile applications to Node.js / Express backend endpoints with secure token handling",
      "Collaborated in agile sprint cycles, code reviews, and Git version control practices",
      "Optimized rendering performance and state propagation across multi-screen navigational flows"
    ],
    certificate: '/intership2.pdf'
  },
  {
    id: 2,
    role: "Full Stack with React Native Apprentice",
    company: "Technical Hub",
    location: "Surampalem, India",
    duration: "June 10, 2024 – July 27, 2024",
    type: "Technical Training & Development",
    description: "Intensive full-stack development program centered on React Native mobile development, state synchronization, backend API architecture, and database integrations.",
    keyResponsibilities: [
      "Mastered fundamentals of full-stack engineering across the MERN technology stack",
      "Constructed modular UI components and responsive views for mobile and web screens",
      "Engineered database schemas in MongoDB and practiced query optimization techniques",
      "Successfully delivered functional capstone applications evaluated by senior technical trainers"
    ],
    certificate: '/intership1.pdf'
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "React Developer Certification",
    issuer: "HackerRank",
    date: "2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-JxElQcMfe-0FiP_97nC3ynGLKdJHXpHnA&s",
    url: '/javascript1.pdf'
  },
  {
    id: 2,
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6khJE1Ki6sE6LZcZ-ikNjOTVPEVRe5Hpm3A&s",
    url: '/javascript_basic.pdf'
  },
  {
    id: 3,
    name: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcLTs7Bk6BMNVhoF_ufFaD8jhN8SSObWwfw&s",
    url: '/javascript1.pdf'
  },
  {
    id: 4,
    name: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yiAD08nePoxyyzsDzWxg6A14v5ux6r0FNQ&s",
    url: '/javascript2.pdf'
  },
  {
    id: 5,
    name: "MongoDB Developer's Toolkit",
    issuer: "GeeksforGeeks",
    date: "2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YmhDdn1HLzatPyuWRTg-YlitbQJtwdb_VQ&s",
    url: '/MongoDB.pdf'
  },
  {
    id: 6,
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65CTTHb2m6CvvK31nYqH3bJbjrTvZ6e7rjw&s",
    url: '/python.pdf'
  },
  {
    id: 7,
    name: "C++ Programming",
    issuer: "GeeksforGeeks",
    date: "2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVm4yEaRq9Ry8KTqRfBc1gyfz_SUGhRCAIQ&s",
    url: '/c++.pdf'
  }
];

export const education: Education = {
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  college: "Aditya Engineering College",
  year: "2022 — 2026",
  location: "Surampalem, Andhra Pradesh, India",
  gpa: "7.7 / 10",
  focus: "Core focus on Data Structures, Algorithms, Software Engineering, Object-Oriented System Design, and Machine Learning."
};