export const DATA = {
  name: "Kamesh Chaudhary",
  title: "Software Developer | Application Support",
  roles: [
    "Software Developer",
    "Full-Stack Engineer",
    "Next.js & Nest.js Developer",
    "ASP.NET Core (.NET) Engineer",
    "Application Support Specialist",
    "DevOps & Cloud Enthusiast"
  ],
  location: "Kathmandu, Nepal",
  email: "kameshchaudhary17@gmail.com",
  phone: "+977 9827089956",
  github: "https://github.com/kameshchaudhary17",
  linkedin: "https://www.linkedin.com/in/kamesh-chaudhary-11397b294/",
  resumePdf: "/Kamesh_Chaudhary_Resume.pdf",
  summary:
    "Results-driven Software Developer with hands-on experience building full-stack web applications across the modern JavaScript and .NET ecosystems. Proficient in React.js, Next.js, Node.js, Nest.js, and ASP.NET Core, with practical exposure to containerized, scalable deployments using Docker and Kubernetes. Skilled at designing RESTful APIs, debugging software and hardware issues, and collaborating in Agile teams. Currently delivering remote development for an international engineering team.",
  stats: [
    { value: "2+", label: "Years", sub: "Dev & Engineering" },
    { value: "3", label: "Companies &", sub: "Organizations" },
    { value: "5+", label: "Shipped", sub: "Major Projects" },
    { value: "15+", label: "Tech Stacks &", sub: "Cloud Tools" },
  ],
  skills: {
    Frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "ASP.NET Core (.NET)",
      "RESTful API design",
      "JWT Authentication",
    ],
    Databases: [
      "MongoDB (Mongoose)",
      "PostgreSQL",
      "SQL Server",
      "Entity Framework",
    ],
    "DevOps & Cloud": [
      "Docker",
      "Kubernetes",
      "CI/CD pipelines",
      "Git",
      "GitHub Actions",
      "AWS",
      "Azure",
    ],
    "IT Support & Networking": [
      "Hardware/software troubleshooting",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Printer/network/device support",
      "End-user helpdesk support",
    ],
    "Tools & Practices": [
      "Git",
      "GitHub",
      "Postman",
      "MVC Architecture",
      "Agile/Scrum",
      "VS Code",
      "Unit Testing",
    ],
  },
  experience: [
    {
      role: "Software Developer",
      company: "Altren Group",
      workplaceType: "Remote",
      period: "Aug 2026 – Present",
      type: "International Remote Engineering",
      color: "#79ff97",
      bullets: [
        "Develop and maintain full-stack web applications using Next.js, Nest.js, and Node.js for an international, fully remote engineering team.",
        "Build and integrate RESTful APIs and reusable backend services, improving performance and scalability of production features.",
        "Containerize applications with Docker and support deployment workflows on Kubernetes for reliable, scalable delivery.",
        "Collaborate across time zones using Git-based workflows, contributing to code reviews, sprint planning, and Agile ceremonies.",
      ],
    },
    {
      role: "Software Developer",
      company: "Portpro",
      workplaceType: "On-site / Hybrid",
      period: "Dec 2025 – Jul 2026",
      type: "Software Engineering",
      color: "#58a6ff",
      bullets: [
        "Contributed to end-to-end web application development using React.js and Node.js within a professional Agile team.",
        "Developed and integrated RESTful backend APIs, improving data flow and reliability between frontend and server layers.",
        "Collaborated with senior developers using Git version control, participating in code reviews and sprint planning.",
        "Gained hands-on experience with real-world engineering workflows, debugging, and testing best practices.",
      ],
    },
    {
      role: "Graduate Teaching Assistant",
      company: "Itahari International College",
      workplaceType: "On-campus",
      period: "Jun 2025 – Dec 2025",
      type: "Higher Education / Academic",
      color: "#e8c87a",
      bullets: [
        "Mentored undergraduate students in network operating system fundamentals and hands-on lab exercises.",
        "Evaluated student assignments and projects, providing constructive technical feedback to improve outcomes.",
        "Strengthened communication, leadership, and problem-solving skills through direct student support and troubleshooting sessions.",
      ],
    },
  ],
  projects: [
    {
      name: "Community Fix",
      tag: "Final Year Project",
      stack: ["React.js", "Node.js", "MongoDB", "REST API"],
      desc: "Full-stack civic-tech platform enabling residents to report and track local community issues in real time. Features user authentication, issue submission forms, status tracking, and an admin dashboard backed by a RESTful Node.js and MongoDB API.",
      color: "#79ff97",
      image: "/projects/civic_tech.png",
      featured: true,
      highlights: [
        "Real-time issue tracking with live status updates",
        "Secure role-based authentication (resident & admin)",
        "Interactive dashboard with issue filtering and resolution tracking",
      ],
    },
    {
      name: "Plant Disease Detection System",
      tag: "ML Project",
      stack: ["Python", "Machine Learning", "Image Processing"],
      desc: "Developed a machine learning system to detect plant diseases from leaf images for early agricultural diagnosis. Trained classification models on plant disease datasets, achieving reliable accuracy across multiple disease types with an intuitive UI for instant diagnosis results.",
      color: "#58a6ff",
      image: "/projects/ml_plants.png",
      featured: true,
      highlights: [
        "Deep learning computer vision model for leaf diagnosis",
        "High accuracy classification across multiple plant diseases",
        "Intuitive web interface allowing farmers to upload leaf photos for instant diagnosis",
      ],
    },
    {
      name: "Library Management System",
      tag: ".NET Core MVC",
      stack: ["ASP.NET Core", "Entity Framework", "SQL Server", "MVC Architecture"],
      desc: "Full-featured enterprise library management system with book inventory, user account handling, borrowing/return system, and overdue tracking using Entity Framework ORM with SQL Server.",
      color: "#f78166",
      image: "/projects/library.png",
      featured: false,
      highlights: [
        "Comprehensive book catalogue & borrowing transaction tracking",
        "Relational schema design with Entity Framework Core",
        "Automated overdue notices and fine calculation system",
      ],
    },
    {
      name: "Vehicle Parts Management System",
      tag: "Full-Stack .NET & React",
      stack: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "React.js", "REST API"],
      desc: "Full-featured vehicle parts sales and management platform with parts inventory, stock tracking, supplier management, and role-based staff access control. Relational SQL Server schema via EF Core ORM connected to a React.js frontend through RESTful APIs.",
      color: "#ffa657",
      image: "/projects/vehicle_parts.png",
      featured: false,
      highlights: [
        "Live inventory and low-stock alerts",
        "Role-based staff authentication and access controls",
        "High-performance REST API with React SPA frontend",
      ],
    },
    {
      name: "Trek Direct Nepal",
      tag: "MERN Stack",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      desc: "Tourism booking platform connecting trekkers with certified local guides across Nepal's major trekking routes. Features guide listings, availability calendar, booking confirmation, user authentication, and search/filter by region, rating, and price.",
      color: "#d2a8ff",
      image: "/projects/trek_nepal.png",
      featured: false,
      highlights: [
        "Verified guide listings with ratings & reviews",
        "Interactive trekking route maps and difficulty ratings",
        "Direct booking workflow with calendar availability",
      ],
    },
  ],
  education: {
    degree: "BSc (Hons) Computing",
    school: "Itahari International College",
    year: "2025",
    modules: [
      "Web Development",
      "Software Engineering",
      "Database Systems",
      "Object-Oriented Programming",
      "Networks",
    ],
  },
  certifications: [
    {
      id: "aws-cloud-foundations",
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      date: "June 2026",
      pdfUrl: "/certificates/aws-cloud-foundations.pdf",
      skills: ["Cloud Computing", "AWS Core Services", "IAM & Security", "Billing & Architecture"],
      color: "#58a6ff",
      description: "Acquired fundamental knowledge of cloud concepts, AWS core services, security, architecture, pricing, and support."
    },
    {
      id: "aws-data-engineering",
      title: "AWS Academy Graduate - Data Engineering",
      issuer: "AWS Academy",
      date: "June 2026",
      pdfUrl: "/certificates/aws-data-engineering.pdf",
      skills: ["Redshift", "AWS Glue", "EMR & Athena", "ETL Pipelines", "Data Lake"],
      color: "#79ff97",
      description: "Learned to build, maintain, and secure robust data pipelines, orchestrate ETL jobs, and perform big data analytics using AWS data services."
    },
    {
      id: "aws-ml-foundations",
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "June 2026",
      pdfUrl: "/certificates/aws-ml-foundations.pdf",
      skills: ["SageMaker", "Jupyter", "Model Training", "Data Preprocessing"],
      color: "#e8c87a",
      description: "Gained an understanding of machine learning concepts, building pipelines, data preprocessing, and model training/deployment on AWS SageMaker."
    },
    {
      id: "aws-ml-nlp",
      title: "AWS Academy Graduate - ML for Natural Language Processing",
      issuer: "AWS Academy",
      date: "June 2026",
      pdfUrl: "/certificates/aws-ml-nlp.pdf",
      skills: ["Comprehend", "Lex & Polly", "NLP Algorithms", "Conversational AI"],
      color: "#d2a8ff",
      description: "Focused on solving NLP problems using Amazon AI services and deploying customized machine learning algorithms for text and speech analysis."
    }
  ],
  strengths: [
    "Strong analytical and problem-solving skills, with attention to code quality and performance.",
    "Able to communicate technical concepts clearly to both technical and non-technical audiences.",
    "Quick learner with a growth mindset, consistently self-studying emerging technologies and frameworks.",
    "Practical exposure to containerized microservices and modern cloud infrastructure (Docker, Kubernetes, AWS, Azure).",
    "Hands-on experience in both international remote engineering teams and higher education mentoring environments.",
  ],
};

export const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Education", "Certifications", "Chat"];

export const SYSTEM_PROMPT = `You are an AI assistant embedded in Kamesh Chaudhary's personal portfolio website. You have full knowledge of his background. Here is his complete profile:

Name: Kamesh Chaudhary
Role: Software Developer | Application Support
Location: Kathmandu, Nepal
Email: kameshchaudhary17@gmail.com
Phone: +977 9827089956
LinkedIn: https://www.linkedin.com/in/kamesh-chaudhary-11397b294/
GitHub: https://github.com/kameshchaudhary17

Professional Summary:
Results-driven Software Developer with hands-on experience building full-stack web applications across the modern JavaScript and .NET ecosystems. Proficient in React.js, Next.js, Node.js, Nest.js, and ASP.NET Core, with practical exposure to containerized, scalable deployments using Docker and Kubernetes. Skilled at designing RESTful APIs, debugging software and hardware issues, and collaborating in Agile teams. Currently delivering remote development for an international engineering team.

Skills:
- Frontend: React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Redux
- Backend: Node.js, Express.js, Nest.js, ASP.NET Core (.NET), RESTful API design, JWT Authentication
- Databases: MongoDB (Mongoose), PostgreSQL, SQL Server, Entity Framework
- DevOps & Cloud: Docker, Kubernetes, CI/CD pipelines, Git, GitHub Actions, AWS, Azure
- IT Support & Networking: Hardware/software troubleshooting, TCP/IP, DNS, DHCP, printer/network/device support, end-user helpdesk support
- Tools & Practices: Git, GitHub, Postman, MVC Architecture, Agile/Scrum, VS Code, Unit Testing

Experience:
1. Software Developer at Altren Group (Remote) [Aug 2026 – Present] — develop full-stack apps with Next.js, Nest.js, Node.js; containerize with Docker & Kubernetes; international Agile ceremonies.
2. Software Developer at Portpro [Dec 2025 – Jul 2026] — end-to-end React.js & Node.js development, RESTful APIs, code reviews, Agile sprints.
3. Graduate Teaching Assistant at Itahari International College [Jun 2025 – Dec 2025] — mentored students in network operating systems, evaluated assignments, provided constructive technical feedback.

Projects:
1. Community Fix (Final Year Project) — Full-stack civic-tech platform (React.js, Node.js, MongoDB, REST API) with authentication, issue reporting, and admin dashboard.
2. Plant Disease Detection System — Machine learning image processing system (Python, ML, CNN) for instant agricultural disease diagnosis.
3. Library Management System — ASP.NET Core & Entity Framework system with inventory, borrowing/returns, and overdue calculation.
4. Vehicle Parts Management System — Full-stack .NET Core & React platform with inventory tracking, supplier management, and role-based staff access.
5. Trek Direct Nepal — MERN stack tourism portal connecting trekkers with local certified guides.

Education: BSc (Hons) Computing from Itahari International College, Graduated 2025. Relevant modules: Web Development, Software Engineering, Database Systems, Object-Oriented Programming, Networks.

Certifications: 4 AWS Academy Graduate Certifications (Cloud Foundations, Data Engineering, ML Foundations, ML for NLP).

Be helpful, friendly, and professional. Represent Kamesh positively and accurately. Keep answers concise (2-4 sentences). Kamesh is open to software development and engineering opportunities.`;
