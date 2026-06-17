export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const professionalSummary =
  "Frontend & AEM Developer with 8+ years of experience building scalable, accessible, and high-performance web applications. Specialized in Adobe Experience Manager (AEM 6.5), React.js, and modern UI technologies, with a strong focus on WCAG/ADA compliance. Proven ability to design reusable component libraries, develop responsive enterprise applications, and integrate frontend systems with backend services. Experienced in Agile environments, cloud platforms (AWS, Azure), and delivering user-centric digital experiences across multiple devices.";

export const experiences: Experience[] = [
  {
    title: "Front-End Developer",
    company: "Carnival Cruise Line – Holland America & Seabourn",
    location: "Remote",
    period: "Jan 2022 — Present",
    description: [
      "Developed and maintained scalable UI component library including buttons, forms, dropdowns, and reusable design elements.",
      "Built accessible, responsive web applications using React.js, HTML5, CSS3, and JavaScript aligned with WCAG standards.",
      "Integrated frontend components with backend services using REST APIs and Redux for state management.",
      "Implemented isomorphic and responsive design supporting desktop, tablet, and mobile platforms.",
      "Enhanced cross-browser compatibility across modern browsers.",
      "Developed and customized AEM components and templates using HTL and Sling Models.",
      "Collaborated with backend teams and designers to deliver high-quality user experiences.",
    ],
    technologies: ["React.js", "AEM", "HTML", "CSS", "JavaScript", "REST APIs", "Redux"],
  },
  {
    title: "AEM/UI Developer",
    company: "Sherwin-Williams",
    location: "Ohio",
    period: "Mar 2019 — Jan 2022",
    description: [
      "Developed enterprise web applications using AEM, Angular, and Java-based backend services.",
      "Designed and implemented reusable AEM components, templates, workflows, and services.",
      "Built responsive UI using modern frontend technologies and CSS preprocessors (SASS/LESS).",
      "Implemented CI/CD pipelines using Docker and Jenkins for efficient deployments.",
      "Collaborated in Agile teams to deliver scalable and maintainable solutions.",
      "Worked with RESTful and SOAP web services for system integrations.",
    ],
    technologies: ["AEM", "Angular", "Java", "JSP", "REST APIs", "Docker", "Jenkins"],
  },
  {
    title: "AEM/UI Developer",
    company: "General Motors (GM)",
    location: "United States",
    period: "Jun 2018 — Jan 2019",
    description: [
      "Developed AEM components, templates, and OSGi services for enterprise web applications.",
      "Migrated legacy JSP-based components to HTL (Sightly) for improved performance and maintainability.",
      "Integrated frontend components with backend systems using RESTful APIs.",
      "Configured dispatcher and optimized performance in author/publish environments.",
    ],
    technologies: ["AEM", "HTL (Sightly)", "OSGi", "JSP", "Java", "REST APIs"],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Science",
    institution: "Cleveland State University, Ohio",
    period: "Jan 2016 — Dec 2017",
    details: "GPA: 3.6",
  },
  {
    degree: "Bachelor of Information Technology",
    institution: "Gujarat Technological University, India",
    period: "Jun 2011 — May 2016",
    details: "GPA: 3.8",
  },
];

export const certifications: Certification[] = [];

export const skills: SkillCategory[] = [
  {
    category: "Frontend & Web Technologies",
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript (ES6+)",
      "React.js",
      "Angular (2+)",
      "AngularJS",
      "jQuery",
      "AJAX",
      "JSON",
      "SASS",
      "LESS",
    ],
  },
  {
    category: "AEM & CMS",
    skills: [
      "Adobe Experience Manager (6.0, 6.4, 6.5)",
      "Sling Models",
      "HTL (Sightly)",
      "CRXDE",
      "OSGi",
      "JCR",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Java", "Python", "SQL"],
  },
  {
    category: "Accessibility",
    skills: [
      "WCAG 2.1",
      "ADA Compliance",
      "Accessible UI Development",
      "Semantic HTML",
      "Screen Reader Support",
    ],
  },
  {
    category: "Tools & Testing",
    skills: ["JIRA", "Chrome DevTools", "Selenium"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Oracle", "MongoDB"],
  },
  {
    category: "Version Control",
    skills: ["Git", "Bitbucket"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "CI/CD (Jenkins)"],
  },
  {
    category: "Methodologies",
    skills: ["Agile", "Scrum", "Waterfall"],
  },
  {
    category: "Operating Systems",
    skills: ["MacOS", "Windows", "Linux"],
  },
];

export const stats = [
  { label: "Years Shipping", value: "8+" },
  { label: "Enterprise Clients", value: "3" },
  { label: "AEM & React", value: "Core" },
];

export const accomplishments = [
  {
    title: "Reusable Component Libraries",
    description: "Designed scalable UI component libraries powering enterprise applications.",
  },
  {
    title: "Accessibility Champion",
    description: "Built WCAG-aligned, ADA-compliant interfaces with strong screen reader support.",
  },
  {
    title: "AEM Specialist",
    description: "Deep expertise across AEM 6.0–6.5 with Sling Models, HTL, OSGi, and JCR.",
  },
  {
    title: "Full Delivery Lifecycle",
    description: "Delivered responsive enterprise apps in Agile teams with CI/CD pipelines.",
  },
];

export const resumePdf = {
  path: "/resume/khushboo-parmar-resume.pdf",
  filename: "Khushboo-Parmar-Resume.pdf",
} as const;
