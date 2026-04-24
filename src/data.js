export const DATA = {
  name: "Kamesh Chaudhary",
  title: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "React Developer", "Node.js Engineer", "Problem Solver"],
  location: "Kathmandu, Nepal",
  email: "kameshchaudhary17@gmail.com",
  phone: "9827089956",
  github: "https://github.com/kameshchaudhary17",
  linkedin: "https://www.linkedin.com/in/kamesh-chaudhary-11397b294/",
  summary:
    "Full-Stack Developer crafting scalable, user-focused web applications with clean, efficient code and a problem-solving mindset.",
  stats: [
    { value: "1", label: "Years", sub: "Experience" },
    { value: "3", label: "Major", sub: "Projects" },
    { value: "4+", label: "Tech", sub: "Stacks" },
    { value: "10+", label: "Tools &", sub: "Frameworks" },
  ],
  skills: {
    Frontend: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express.js", "ASP.NET Core (.NET)", "RESTful APIs"],
    Database: ["MongoDB (Mongoose)", "PostgreSQL", "SQL Server", "Entity Framework"],
    "Tools & Practices": ["Git", "GitHub", "MVC Architecture", "Agile/Scrum", "VS Code", "Postman"],
  },
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Portpro",
      period: "Dec 2025 – Apr 2026",
      type: "Technology Industry",
      color: "#79ff97",
      bullets: [
        "Contributed to end-to-end web application development using React.js and Node.js in a professional agile environment",
        "Developed and integrated RESTful backend APIs, improving data flow between frontend and server layers",
        "Collaborated with senior developers using Git version control, participating in code reviews and sprint planning",
        "Gained hands-on experience with real-world software engineering workflows and best practices",
      ],
    },
    {
      role: "Graduate Teaching Assistant (GTA)",
      company: "Itahari International College",
      period: "Jun 2025 – Dec 2025",
      type: "Higher Education",
      color: "#58a6ff",
      bullets: [
        "Guided and mentored undergraduate students in network operating system fundamentals and lab exercises",
        "Assisted in evaluating assignments and projects, providing constructive feedback to improve student outcomes",
        "Developed strong communication, leadership, and problem-solving skills through direct student interaction",
      ],
    },
  ],
  projects: [
    {
      name: "Community Fix",
      tag: "Final Year Project",
      stack: ["React.js", "Node.js", "MongoDB", "REST API"],
      desc: "Full-stack civic tech platform enabling residents to report and track local community issues in real-time. Features user authentication, issue submission forms, status tracking, and an admin dashboard.",
      color: "#79ff97",
      image: "/projects/civic_tech.png",
    },
    {
      name: "Plant Disease Detection",
      tag: "ML Project",
      stack: ["Python", "Machine Learning", "Image Processing"],
      desc: "ML-powered system to detect plant diseases from leaf images for early agricultural diagnosis. Trained classification models achieving reliable detection accuracy for multiple disease types.",
      color: "#58a6ff",
      image: "/projects/ml_plants.png",
    },
    {
      name: "Library Management System",
      tag: ".NET Project",
      stack: ["ASP.NET Core", "Entity Framework", "SQL Server", "MVC"],
      desc: "Full-featured library management system with book inventory, user account handling, borrowing/return system, and overdue tracking using Entity Framework ORM with SQL Server.",
      color: "#f78166",
      image: "/projects/library.png",
    },
    {
      name: "Vehicle Parts Management System",
      tag: "Full-Stack .NET",
      stack: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "React.js", "REST API"],
      desc: "Full-featured vehicle parts sales and management platform with parts inventory, stock tracking, supplier management, and role-based staff access control. Relational SQL Server schema via EF Core ORM connected to a React.js frontend through RESTful APIs.",
      color: "#ffa657",
      image: "/projects/vehicle_parts.png",
    },
    {
      name: "Trek Direct Nepal",
      tag: "MERN Stack",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      desc: "Tourism booking platform connecting trekkers with certified local guides across Nepal's major trekking routes. Features guide listings, availability calendar, booking confirmation, user authentication, and search/filter by region, rating, and price.",
      color: "#d2a8ff",
      image: "/projects/trek_nepal.png",
    },
  ],
  education: {
    degree: "BSc (Hons) Computing",
    school: "Itahari International College",
    year: "2025",
    modules: ["Web Development", "Software Engineering", "Database Systems", "Object-Oriented Programming", "Networks"],
  },
  strengths: [
    "Strong analytical and problem-solving skills with attention to code quality and performance",
    "Proven ability to collaborate in team environments and communicate technical concepts clearly",
    "Quick learner with a growth mindset — consistently self-studying emerging technologies",
    "Experience in both teaching and industry contexts demonstrates versatility and adaptability",
  ],
};

export const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Education", "Chat"];

export const SYSTEM_PROMPT = `You are an AI assistant embedded in Kamesh Chaudhary's personal portfolio website. You have full knowledge of his background. Here is his complete profile:

Name: Kamesh Chaudhary
Role: Full-Stack Developer
Location: Kathmandu, Nepal
Email: kameshchaudhary17@gmail.com
Phone: 9827089956

Skills: React.js, Node.js, TypeScript, JavaScript ES6+, HTML5, CSS3, Express.js, ASP.NET Core, MongoDB, PostgreSQL, SQL Server, Entity Framework, Git, GitHub, Postman, MVC Architecture, Agile/Scrum.

Experience:
1. Full Stack Developer Intern at Portpro (Dec 2025 - Apr 2026) — built React.js/Node.js web apps, integrated RESTful APIs, participated in code reviews and sprint planning.
2. Graduate Teaching Assistant at Itahari International College (Jun 2025 - Dec 2025) — mentored students in network OS fundamentals, evaluated assignments.

Projects:
1. Community Fix — civic tech platform (React.js, Node.js, MongoDB, REST API) for reporting/tracking community issues in real-time with admin dashboard.
2. Plant Disease Detection — ML-powered system (Python, Machine Learning, Image Processing) detecting plant diseases from leaf images with reliable accuracy.
3. Library Management System — full .NET app (ASP.NET Core, Entity Framework, SQL Server, MVC) with inventory, borrowing/return, and overdue tracking.
4. Vehicle Parts Management System — Full-stack .NET & React platform for inventory and sales tracking with EF Core and SQL Server.
5. Trek Direct Nepal — MERN stack tourism booking platform connecting trekkers with local guides, featuring real-time booking and guide management.

Education: BSc (Hons) Computing from Itahari International College, graduated 2025. Modules: Web Development, Software Engineering, Database Systems, OOP, Networks.

Be helpful, friendly, and professional. Represent Kamesh positively and accurately. Keep answers concise (2-4 sentences). If asked about availability or hiring, say Kamesh is open to new opportunities.`;
