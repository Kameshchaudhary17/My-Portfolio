export const DATA = {
  name: "Kamesh Chaudhary",
  title: "Software Engineer | Data Management",
  roles: [
    "Software Engineer",
    "Data Management Specialist",
    "Full-Stack Engineer",
    "SQL & Database Developer",
    "Next.js & Nest.js Developer",
    "ASP.NET Core (.NET) Engineer",
    "IT Support & Network Technician",
    "AWS Certified Data Engineer (Academy)",
  ],
  location: "Dubai, United Arab Emirates",
  locationShort: "Dubai, UAE",
  email: "kameshchaudhary17@gmail.com",
  phone: "+977 9827089956",
  github: "https://github.com/kameshchaudhary17",
  linkedin: "https://www.linkedin.com/in/kamesh-chaudhary-11397b294/",
  portfolio: "https://kameshchaudhary.vercel.app/",
  resumePdf: `${process.env.PUBLIC_URL || ""}/Kamesh_Chaudhary_CV.pdf`,
  resumeFileName: "Kamesh_Chaudhary_CV.pdf",
  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Fluent" },
    { name: "Nepali", level: "Native" },
  ],
  summary:
    "Software Engineer with a strong data management focus, building full-stack applications and the reliable data layers behind them. Experienced in data modeling, efficient SQL and secure RESTful APIs with React.js, Next.js, Node.js, Nest.js and ASP.NET Core, and AWS Academy certified in Data Engineering and Cloud Foundations. Equally strong at hands-on data work with MS Excel, Google Sheets and CRM/ERP systems, with a detail-oriented approach that keeps business records complete, accurate and secure.",
  competencies: [
    "Data Verification & Records",
    "MS Excel & Reporting",
    "Data Management & Accuracy",
    "Database Design & Modeling",
    "SQL Querying & Optimization",
    "ETL & Data Pipelines",
    "Full-Stack Web Development",
    "RESTful API Development",
    "Cloud & DevOps (AWS, Docker)",
  ],
  stats: [
    { value: "2+", label: "Years", sub: "Dev & Engineering" },
    { value: "3", label: "Companies &", sub: "Organizations" },
    { value: "5+", label: "Shipped", sub: "Major Projects" },
    { value: "6", label: "AWS & Cisco", sub: "Certifications" },
  ],
  // Website-only skill groups, left out of the Software & Data CV PDF
  cvExcludeSkills: ["IT Support", "Networking"],
  skills: {
    "Data Management": [
      "Data verification & record keeping",
      "Data modeling & schema design",
      "Data integrity & normalization",
      "SQL optimization",
      "Data validation & quality",
      "Data migration",
      "ETL pipelines",
      "Reporting dashboards",
      "MS Excel",
      "Google Sheets",
      "CRM/ERP systems",
    ],
    Databases: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB (Mongoose)",
      "Entity Framework Core",
      "Amazon Redshift",
      "Amazon Athena",
    ],
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
      "C#",
      "Python",
      "RESTful API design",
      "JWT Authentication",
    ],
    "DevOps & Cloud": [
      "AWS (S3, Glue, EMR, SageMaker)",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD pipelines",
      "GitHub Actions",
    ],
    "IT Support": [
      "Help desk & end-user support",
      "Hardware/software troubleshooting",
      "Active Directory & Entra ID",
      "User account & password management",
      "Ticketing & issue documentation",
      "Remote support (RDP, AnyDesk, TeamViewer)",
      "Printer & device support",
      "Windows & Microsoft 365",
    ],
    Networking: [
      "TCP/IP",
      "IPv4 & IPv6 addressing",
      "Subnetting",
      "DNS & DHCP",
      "VLANs",
      "Routing & switching fundamentals",
      "Ethernet & wireless router setup",
      "Cisco Packet Tracer",
    ],
    "Tools & Practices": [
      "Git & GitHub",
      "Postman",
      "MVC Architecture",
      "Agile/Scrum",
      "Unit Testing",
      "VS Code",
    ],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Altren Group",
      workplaceType: "Remote",
      period: "Aug 2026 – Present",
      type: "International Remote Engineering",
      color: "#79ff97",
      bullets: [
        "Develop and maintain full-stack web applications with Next.js, Nest.js and Node.js for an international remote team.",
        "Design database schemas and data access layers behind RESTful APIs, keeping production data consistent and secure.",
        "Build reusable backend services and integrations that improve the performance and scalability of production features.",
        "Containerize services with Docker and support Kubernetes deployment workflows for reliable, repeatable releases.",
        "Collaborate across time zones through Git-based workflows, code reviews, sprint planning and Agile ceremonies.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Portpro",
      workplaceType: "On-site / Hybrid",
      period: "Dec 2025 – Jul 2026",
      type: "Software Engineering",
      color: "#58a6ff",
      bullets: [
        "Delivered end-to-end features for web applications using React.js and Node.js within a professional Agile team.",
        "Developed and integrated RESTful APIs, improving data flow and reliability between frontend, backend and database layers.",
        "Investigated and resolved application and data issues, tracing defects from the UI through the API down to the database.",
        "Took part in code reviews and sprint planning with senior developers, following version control and testing best practices.",
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
        "Evaluated assignments and projects, giving clear technical feedback that helped students improve their outcomes.",
        "Explained complex technical concepts to mixed audiences, building strong communication and leadership skills.",
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
      cvBullets: [
        "Built a civic-tech platform for residents to report and track local issues in real time, with role-based access.",
        "Modeled issue, user and status data in MongoDB, served via a RESTful Node.js API to an admin reporting dashboard.",
      ],
    },
    {
      name: "Vehicle Parts Management System",
      tag: "Full-Stack .NET & React",
      stack: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "React.js", "REST API"],
      desc: "Full-featured vehicle parts sales and management platform with parts inventory, stock tracking, supplier management, and role-based staff access control. Relational SQL Server schema via EF Core ORM connected to a React.js frontend through RESTful APIs.",
      color: "#ffa657",
      image: "/projects/vehicle_parts.png",
      featured: true,
      highlights: [
        "Live inventory and low-stock alerts",
        "Role-based staff authentication and access controls",
        "High-performance REST API with React SPA frontend",
      ],
      cvBullets: [
        "Designed a normalized SQL Server schema with EF Core for parts inventory, stock levels, suppliers and sales transactions.",
        "Delivered low-stock alerts and role-based staff access through an ASP.NET Core REST API and a React.js frontend.",
      ],
    },
    {
      name: "Plant Disease Detection System",
      tag: "ML Project",
      stack: ["Python", "Machine Learning", "Image Processing"],
      desc: "Developed a machine learning system to detect plant diseases from leaf images for early agricultural diagnosis. Trained classification models on plant disease datasets, achieving reliable accuracy across multiple disease types with an intuitive UI for instant diagnosis results.",
      color: "#58a6ff",
      image: "/projects/ml_plants.png",
      featured: false,
      highlights: [
        "Deep learning computer vision model for leaf diagnosis",
        "High accuracy classification across multiple plant diseases",
        "Intuitive web interface allowing farmers to upload leaf photos for instant diagnosis",
      ],
      cvBullets: [
        "Prepared, cleaned and labeled leaf image datasets, then trained classification models to detect multiple plant diseases.",
        "Built a simple upload interface that returns an instant diagnosis to help farmers act early.",
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
      cvBullets: [
        "Designed a relational SQL Server schema with Entity Framework for books, members, loans and returns.",
        "Automated overdue tracking and fine calculation, keeping borrowing records accurate and auditable.",
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
      cvBullets: [
        "Built a MERN booking platform connecting trekkers with certified local guides, with search by region, rating and price.",
        "Modeled guides, availability and bookings in MongoDB behind authenticated Express.js REST APIs.",
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
    },
    {
      id: "cisco-networking-basics",
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      credential: "Cisco Networking Academy",
      date: "August 2026",
      pdfUrl: "/certificates/cisco-networking-basics.pdf",
      skills: ["IPv4 & IPv6", "Ethernet", "Routers & Network Types", "Connectivity Troubleshooting", "Wireless Router Setup"],
      color: "#1ba0d7",
      cvExclude: true,
      description: "Covered network types, components and protocols, Ethernet communication, IPv4 and IPv6 addressing, how routers connect networks, connectivity troubleshooting tools, and secure wireless router setup."
    },
    {
      id: "cisco-it-customer-support",
      title: "IT Customer Support Basics",
      issuer: "Cisco Networking Academy",
      credential: "Cisco Networking Academy",
      date: "August 2026",
      pdfUrl: "/certificates/cisco-it-customer-support-basics.pdf",
      skills: ["Help Desk", "Ticket Documentation", "Troubleshooting", "Remote Support", "Productivity Apps"],
      color: "#ffa657",
      cvExclude: true,
      description: "Learned help desk functions, recording customer issues and solutions, step-by-step troubleshooting, remote support of user devices, and resolving common issues in email, collaboration and productivity apps."
    }
  ],
  strengths: [
    "Strong analytical and problem-solving skills, with close attention to data accuracy, code quality and performance.",
    "Reliable with confidential business data, meeting deadlines on high-volume record-keeping tasks.",
    "Able to communicate technical concepts clearly to both technical and non-technical audiences.",
    "Quick learner with a growth mindset, consistently self-studying emerging technologies and frameworks.",
    "Practical exposure to cloud data services and containerized infrastructure (AWS, Azure, Docker, Kubernetes).",
    "Comfortable in multicultural, international teams, working across time zones with English, Hindi and Nepali.",
  ],
};

export const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Education", "Certifications", "CV", "Chat"];

export const SYSTEM_PROMPT = `You are an AI assistant embedded in ${DATA.name}'s personal portfolio website. You have full knowledge of his background. Here is his complete profile:

Name: ${DATA.name}
Role: ${DATA.title}
Location: ${DATA.location}
Languages: ${DATA.languages.map(l => `${l.name} (${l.level})`).join(', ')}
Email: ${DATA.email}
Phone: ${DATA.phone}
LinkedIn: ${DATA.linkedin}
GitHub: ${DATA.github}

Professional Summary:
${DATA.summary}

Skills:
${Object.entries(DATA.skills).map(([cat, list]) => `- ${cat}: ${list.join(', ')}`).join('\n')}

Experience:
${DATA.experience.map((e, i) => `${i + 1}. ${e.role} at ${e.company} (${e.workplaceType}) [${e.period}]: ${e.bullets.join(' ')}`).join('\n')}

Projects:
${DATA.projects.map((p, i) => `${i + 1}. ${p.name} (${p.tag}): ${p.desc} Stack: ${p.stack.join(', ')}.`).join('\n')}

Education: ${DATA.education.degree} from ${DATA.education.school}, graduated ${DATA.education.year}. Relevant modules: ${DATA.education.modules.join(', ')}.

Certifications: ${DATA.certifications.map(c => c.title).join('; ')}.

Be helpful, friendly, and professional. Represent Kamesh positively and accurately. Keep answers concise (2-4 sentences). Kamesh is based in Dubai and open to software engineering and data management roles in the UAE.`;
