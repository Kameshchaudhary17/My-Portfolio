// IT Support & Networking version of the CV. Reuses the shared profile in
// src/data.js and swaps in IT-focused wording. Built by scripts/build-cv.mjs.
// Keep this file free of imports so the build script can load it directly.

export function buildItSupportCv(DATA) {
  const job = (company) => DATA.experience.find((e) => e.company === company);
  const project = (name) => DATA.projects.find((p) => p.name === name);
  const cert = (id) => ({ ...DATA.certifications.find((c) => c.id === id), cvExclude: false });

  return {
    ...DATA,
    title: 'IT Support & Network Technician',
    resumeFileName: 'Kamesh_Chaudhary_IT_Support_CV.pdf',
    summary:
      'IT Support and Network Technician who troubleshoots hardware, software, network and application issues for end users and production systems. Skilled in TCP/IP, DNS, DHCP, VLANs and subnetting, Windows and Microsoft 365 support, and user management in Active Directory and Entra ID. Holds Cisco Networking Academy certificates in Networking Basics and IT Customer Support Basics, and explains fixes clearly to non-technical users.',
    competencies: [
      'Help Desk & End-User Support',
      'Hardware & Software Troubleshooting',
      'Network Troubleshooting',
      'TCP/IP, DNS & DHCP',
      'VLANs, Subnetting & Routing',
      'Windows & Microsoft 365',
      'Remote Desktop Support',
      'Ticketing & Documentation',
      'Active Directory & Entra ID',
    ],
    cvExcludeSkills: [],
    skills: {
      'IT Support': [
        'Technical help desk',
        'End-user support',
        'Hardware/software troubleshooting',
        'Printer, network & device support',
        'Remote desktop support',
        'Software installation & configuration',
        'User account & password management',
        'Ticketing & issue documentation',
      ],
      Networking: [
        'TCP/IP',
        'IPv4 & IPv6 addressing',
        'Subnetting',
        'DNS',
        'DHCP',
        'VLANs',
        'Routing & switching fundamentals',
        'Ethernet & wireless router setup',
        'Network troubleshooting',
        'Network operating systems',
      ],
      'IT Tools': [
        'Active Directory & Entra ID',
        'Ticketing systems',
        'Remote Desktop (RDP), AnyDesk, TeamViewer',
        'Cisco Packet Tracer',
        'MS Excel',
      ],
      'Systems & Cloud': [
        'Windows',
        'Microsoft 365',
        'Microsoft Azure (fundamentals)',
        'AWS (Cloud Foundations)',
        'Docker',
      ],
      'Development & Data': ['React.js', 'Node.js', 'ASP.NET Core', 'REST APIs', 'JavaScript/TypeScript', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Postman', 'Git & GitHub'],
    },
    experience: [
      {
        ...job('Altren Group'),
        bullets: [
          'Support and maintain production web applications for an international remote team, troubleshooting issues to keep systems stable and available.',
          'Deploy and maintain applications on Microsoft Azure, monitoring uptime and performance and responding to incidents.',
          'Diagnose issues across frontend, backend, server and deployment layers, tracing root causes and applying lasting fixes.',
          'Containerize services with Docker and support deployment workflows for reliable, repeatable releases.',
          'Communicate clear status updates and solutions across time zones, documenting fixes through Git-based workflows.',
        ],
      },
      {
        ...job('Portpro'),
        bullets: [
          'Diagnosed and resolved application bugs and data-flow issues while delivering web features in an Agile team.',
          'Tested and debugged RESTful APIs with Postman, isolating faults between the frontend, server and database layers.',
          'Reproduced reported issues, documented findings and verified fixes before release.',
          'Collaborated with senior developers through Git version control, code reviews and sprint planning.',
        ],
      },
      {
        ...job('Itahari International College'),
        bullets: [
          'Guided students through network operating system fundamentals, TCP/IP concepts and hands-on networking labs.',
          'Provided troubleshooting support in lab sessions, helping students resolve configuration and connectivity issues.',
          'Evaluated assignments and gave clear technical feedback, building patient, user-focused communication skills.',
        ],
      },
    ],
    projects: [
      {
        ...project('Community Fix'),
        tag: 'Issue Tracking Platform',
        cvBullets: [
          'Built a help-desk-style issue tracking platform where users log problems and follow them through to resolution.',
          'Implemented role-based access for residents and admins, with an admin dashboard to triage, prioritize and close issues.',
        ],
      },
      {
        ...project('Vehicle Parts Management System'),
        tag: 'Inventory & Access Control',
        cvBullets: [
          'Built an inventory system tracking parts, stock levels and suppliers, with automatic low-stock alerts.',
          'Set up role-based staff accounts and access control on an ASP.NET Core and SQL Server backend.',
        ],
      },
      {
        ...project('Library Management System'),
        tag: 'User & Records Management',
        cvBullets: [
          'Managed user accounts, book inventory and borrowing records on SQL Server with Entity Framework.',
          'Automated overdue tracking and fines, keeping records accurate and auditable.',
        ],
      },
    ],
    certifications: [
      cert('cisco-networking-basics'),
      cert('cisco-it-customer-support'),
      cert('aws-cloud-foundations'),
      cert('aws-data-engineering'),
    ],
    strengths: [
      'Strong analytical and problem-solving skills to identify, diagnose and resolve hardware, software and network connectivity issues.',
      'Explains technical issues clearly to non-technical users while providing patient, user-focused support.',
      'Prioritizes support requests, documents issues and fixes, and works with the team to resolve problems quickly.',
      'Learns new technologies, IT tools and troubleshooting procedures quickly and adapts to changing environments.',
      'Comfortable in multicultural, international teams, working across time zones with English, Hindi and Nepali.',
    ],
  };
}
