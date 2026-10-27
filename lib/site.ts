// Single source of truth for portfolio content. Edit here, not in components.

export type Link = { label: string; href: string };

export const person = {
  name: "Venkata Sai Tarun Varma Chintha",
  short: "Tarun",
  initials: "TC",
  cardTagline: "Backend, applied AI, and things that ship.",
  wordmark: "TARUN / ENGINEERING",
  role: "Software Developer Intern",
  focus: "Backend & Applied AI",
  location: "Andhra Pradesh, India",
  email: "tarunvarmachintha@gmail.com",
  github: "https://github.com/Tarunvarma07",
  linkedin: "https://linkedin.com/in/tarunvarmach",
  // Set to a path under /public (e.g. "/resume.pdf") once the file exists.
  // The link is hidden while this is empty.
  resume: "",
  // Set when a real domain is configured; enables canonical + sitemap URLs.
  siteUrl: "",
  // Only set to true while this is accurate.
  availableForOpportunities: true,
} as const;

export const nav: Link[] = [
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  short?: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  // Leave empty until a real URL exists; the link is then hidden.
  repo: string;
  demo: string;
  flow: { title: string; steps: string[]; note: string };
  caveat?: string;
  reported?: string[];
};

export const projects: Project[] = [
  {
    id: "anydoc",
    index: "01",
    title: "AnyDoc",
    category: "Applied AI · Retrieval-Augmented Generation",
    description:
      "A document and web research assistant that brings multiple content sources into a unified question-answering workflow.",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "LLM API",
      "BM25 + vector retrieval",
      "Reciprocal Rank Fusion",
    ],
    highlights: [
      "Unified ingestion for PDF, DOCX, TXT, CSV, and web sources.",
      "Combined lexical (BM25) and vector retrieval, merged with Reciprocal Rank Fusion.",
      "Citation validation to improve answer reliability.",
      "Protections against SSRF and file-spoofing attacks on upload and fetch paths.",
    ],
    repo: "",
    demo: "",
    flow: {
      title: "Retrieval pipeline",
      steps: [
        "Sources",
        "Ingestion",
        "Chunking & indexing",
        "Hybrid retrieval",
        "Rank fusion",
        "LLM",
        "Cited answer",
      ],
      note: "Conceptual illustration of the stages, not a service map.",
    },
  },
  {
    id: "eats",
    index: "02",
    short: "EATS",
    title: "Employee Attendance Tracking System",
    category: "Backend Engineering · API Design",
    description:
      "A role-based attendance platform built around authenticated APIs, location-aware attendance workflows, and auditable records.",
    stack: ["FastAPI", "PostgreSQL", "JavaScript", "Docker", "JWT", "RBAC"],
    highlights: [
      "Secure employee and administrator workflows.",
      "Location-aware clock-in and clock-out endpoints.",
      "Normalized PostgreSQL data model with audit logging.",
      "Containerized local development.",
    ],
    repo: "",
    demo: "",
    flow: {
      title: "Request path",
      steps: ["Client", "JWT + role check", "FastAPI endpoints", "PostgreSQL", "Audit log"],
      note: "Simplified request flow.",
    },
  },
  {
    id: "healthcare",
    index: "03",
    title: "Personalized Predictive Healthcare System",
    category: "Applied Machine Learning",
    description:
      "A machine-learning application combining predictive models with a conversational interface.",
    stack: ["Python", "Django", "Scikit-learn", "XGBoost", "Model ensemble", "LLM chatbot"],
    highlights: [
      "7-model ensemble covering 40+ disease categories.",
      "LLM-powered chatbot alongside the prediction workflow.",
    ],
    reported: [
      "96% accuracy on 10,000+ patient records",
      "Chatbot responses under 2 seconds",
    ],
    caveat:
      "Results are as reported in my resume from the project's own evaluation. This is a machine-learning prototype: it has not been clinically validated and is not a diagnostic tool. A medical product would need clinical studies, regulatory review, and domain oversight that a prototype does not have.",
    repo: "",
    demo: "",
    flow: { title: "", steps: [], note: "" },
  },
];

export type Role = {
  company: string;
  role: string;
  dates: string;
  location: string;
  summary?: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Knight21 Digi Hub Private Limited",
    role: "Software Developer Intern",
    dates: "July 2026 – Present",
    location: "Kakinada, India",
    summary:
      "Working across client-facing applications, backend services, integrations, and production deployments in a fast-moving engineering environment.",
    points: [
      "Shipped 6+ client websites and 2 mobile applications (as reported in my resume).",
      "Built and deployed HostHaven, a temple ticketing and room-booking platform.",
      "Worked on VSmart, a multi-role grocery platform, using Django, Redis caching, OTP authentication, and KYC workflows.",
      "Debugged a multi-platform school ERP.",
      "Validated a payment gateway integration.",
      "Contributed across requirements analysis, backend/API development, testing, debugging, security validation, and deployment.",
    ],
  },
  {
    company: "Smartbridge Private Limited",
    role: "AI/ML Intern",
    dates: "December 2025 – March 2026",
    location: "Remote, India",
    points: [
      "Built modular Python data-processing pipelines.",
      "Processed a dataset of more than 30,000 records.",
      "Developed data-cleaning and validation scripts.",
      "Evaluated model performance using accuracy, precision, and recall.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Python", "Django", "FastAPI", "REST APIs"] },
  { group: "Applied AI", items: ["LLM integration", "RAG", "LangChain", "LangGraph"] },
  { group: "Machine learning", items: ["Scikit-learn", "XGBoost"] },
  {
    group: "Frontend",
    items: ["Next.js", "React fundamentals", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  { group: "Data", items: ["PostgreSQL", "Redis", "ChromaDB"] },
  { group: "Infrastructure", items: ["Docker", "AWS EC2", "AWS S3", "Hostinger VPS"] },
  {
    group: "Engineering",
    items: [
      "Git & GitHub",
      "Postman",
      "API testing",
      "Debugging",
      "Security validation",
      "Regression testing",
    ],
  },
];

export const principles = [
  {
    title: "Reliability over appearances",
    body: "Software is not finished when it works once. It should behave predictably, handle invalid input, and fail safely.",
  },
  {
    title: "Understand the system",
    body: "I care about how requests flow through an application, how data is stored, where failures occur, and how individual components affect one another.",
  },
  {
    title: "Use AI with engineering discipline",
    body: "LLM-powered features need more than good prompts. Retrieval quality, input validation, evaluation, and reliable outputs matter.",
  },
];

export const about = {
  body: "I'm a Computer Science and Business Systems graduate interested in the intersection of backend engineering and applied AI. My experience building and maintaining real applications has taught me to value clear APIs, careful debugging, security, and practical problem-solving.",
  education: {
    degree: "B.Tech — Computer Science & Business Systems",
    school: "Swarnandhra College of Engineering & Technology",
    meta: "Graduated April 2026 · CGPA 8.4/10",
  },
  achievements: [
    "Regional Hackathon Winner, competing against 30+ teams.",
    "Machine Learning Specialization — DeepLearning.AI.",
    "Technical mentor to 250+ junior students through programming workshops and hackathons.",
  ],
};

// Off-the-clock content. Edit freely; keep fun facts true.
export const hobbies = [
  {
    title: "Cricket",
    body: "Team sport, long games. It taught me to stay patient, read the situation, and trust the people around me.",
  },
  {
    title: "Badminton",
    body: "Fast, quiet, and all about footwork and timing. My favourite way to reset after a long debugging session.",
  },
  {
    title: "Music, by mood",
    body: "I pick songs to match how I feel, and the mood usually decides how the work goes. Try the picker.",
  },
];

// speed = equalizer cycle in seconds (lower is faster).
export const moods = [
  { id: "focus", label: "Focus", line: "Steady, low-distraction songs for deep work and long debugging.", speed: 1.6 },
  { id: "happy", label: "Happy", line: "Upbeat songs for shipping days and small wins.", speed: 0.7 },
  { id: "calm", label: "Calm", line: "Slow, easy songs for winding down and reading.", speed: 2.4 },
  { id: "hype", label: "Hype", line: "High-energy songs for match days and deadlines.", speed: 0.45 },
  { id: "late", label: "Late night", line: "Mellow songs for quiet hours and unfinished ideas.", speed: 2 },
];

export const funFacts = [
  "I won a regional hackathon competing against 30+ teams.",
  "I've mentored 250+ junior students through programming workshops and hackathons.",
  "One of the apps I shipped books rooms and tickets for temples (HostHaven).",
];
