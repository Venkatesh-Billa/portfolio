import {
  ProjectData,
  EducationItem,
  SkillCategory,
  ExperienceItem,
  CertificationItem,
  AchievementItem,
  CodingProfile,
} from '../types';
import { portfolioConfig } from '../config/portfolioConfig';

export const statsData = [
  { label: 'Graduation Aggregate', value: '8.36', subtext: 'NRCM (B.Tech IT)' },
  { label: 'Expected Graduation', value: '2027', subtext: 'Information Technology' },
  { label: 'SSC CGPA', value: '10.0', subtext: 'R.K. High School' },
  { label: 'Intermediate', value: '95.5%', subtext: 'Alphores Junior College' },
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Narsimha Reddy Engineering College (NRCM)',
    period: '2023 – 2027',
    score: '8.36',
    scoreLabel: 'Aggregate CGPA',
    status: 'Expected Graduation: 2027',
    highlights: [
      'Core focus: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management, Operating Systems',
      'Active participant in collegiate hackathons, code sprints, and technical expos',
    ],
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Alphores Junior College',
    period: '2020 – 2022',
    score: '95.5%',
    scoreLabel: 'Percentage',
    status: 'Completed',
    highlights: [
      'Strong analytical foundation in Mathematics, Physics, and Chemistry',
      'Consistent academic standing and competitive problem solving',
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'R.K. High School',
    period: '2020',
    score: '10.0',
    scoreLabel: 'CGPA',
    status: 'Completed',
    highlights: [
      'Graduated with maximum possible GPA of 10.0',
      'Developed early interest in computational mathematics and programming',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'code',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'AI / ML',
    icon: 'brain',
    skills: [
      'Machine Learning',
      'NLP',
      'scikit-learn',
      'NumPy',
      'Pandas',
      'CountVectorizer',
      'Cosine Similarity',
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Security',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'JWT', 'Axios', 'bcrypt', 'VS Code'],
  },
  {
    title: 'Cloud / DevOps',
    icon: 'cloud',
    skills: [
      'Cloud Fundamentals',
      'VPC',
      'Subnets',
      'Route Tables',
      'Internet Gateway',
      'Security Groups',
      'Docker',
    ],
  },
];

export const projectsData: ProjectData[] = [
  {
    id: 'ai-movie-recommendation',
    key: 'movieRecommendation',
    title: 'AI Movie Recommendation System',
    subtitle: 'Content-Based Film Discovery Engine with TMDB Integration',
    description:
      'An intelligent content-based recommendation platform that analyzes movie metadata to generate high-precision film suggestions with AI explanations.',
    category: ['AI/ML', 'Python'],
    stack: ['Python', 'Machine Learning', 'NLP', 'TMDB API', 'CountVectorizer', 'Cosine Similarity'],
    features: [
      'TMDB 5000 dataset processing with multi-attribute vectorization',
      'Genre, keyword, cast, and director semantic text analysis',
      'Content-based vector calculations yielding Top-5 closest matches',
      'Live TMDB API integration for posters, ratings, and release dates',
      'Mathematical similarity scoring with explainable AI rationale',
      'Interactive favorites, search history tracking, and side-by-side movie comparison',
    ],
    architecture: ['Dataset', 'Preprocessing', 'Vectorization', 'Cosine Similarity', 'TMDB API', 'UI'],
    caseStudy: {
      overview:
        'The AI Movie Recommendation System assists users in finding movies tailored specifically to their taste by computing similarity matrices across thousands of titles using Natural Language Processing.',
      problem:
        'Standard popularity-based algorithms fail to surface niche titles that match a viewer’s unique preferences in narrative tropes, directors, and casting style.',
      solution:
        'Built a content-based vector space model using bag-of-words and CountVectorizer, calculating cosine distance across multi-feature text representations extracted from the TMDB 5000 dataset.',
      architectureDescription:
        'Data cleaning extracts cast, crew, and plot keywords → Vectorized using CountVectorizer (max features 5000) → Cosine similarity matrix computed → Live TMDB REST API supplies real-time visual assets.',
      technologies: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'TMDB API', 'Streamlit / Web'],
      features: [
        'TMDB 5000 dataset parsing and tag generation',
        'Multi-column metadata feature extraction (genres, keywords, cast, crew)',
        'Content-based recommendations producing top-5 closest matches',
        'Dynamic TMDB API requests for high-res movie posters and live metadata',
        'Similarity score display with confidence breakdown',
        'User search history and persistent favorites list',
        'Trending movies carousel and comparison dashboard',
      ],
      contribution:
        'Developed end-to-end data pipeline in Python, formulated text vectorization tags, tuned cosine similarity computations, and integrated TMDB API endpoints.',
      challenges: [
        'High dimensionality when vectorizing large bodies of text without causing memory bottlenecks.',
        'Handling API rate limits and missing poster links gracefully.',
      ],
      solutions: [
        'Filtered vocabulary down to top 5,000 frequent terms using scikit-learn CountVectorizer with English stop words removed.',
        'Implemented local caching for poster URLs and metadata to reduce external API dependency.',
      ],
      futureImprovements: [
        'Incorporate collaborative filtering to build a hybrid recommendation engine.',
        'Deploy as a lightweight microservice with Redis caching for similarity lookups.',
      ],
    },
  },
  {
    id: 'fraudshield-genai',
    key: 'fraudShield',
    title: 'FraudShield-GenAI',
    subtitle: 'AI-Powered Fraud Detection with Explainable Decision Intelligence',
    description:
      'Real-time financial transaction monitoring system leveraging machine learning classifiers and generative explanations to detect anomalies and explain risks.',
    category: ['AI/ML', 'Python'],
    stack: ['Python', 'Machine Learning', 'Generative AI', 'Pandas', 'NumPy', 'scikit-learn'],
    features: [
      'Comprehensive tabular transaction preprocessing and normalization',
      'Multi-factor anomaly classification with calibrated risk scoring',
      'Instant flagging of high-velocity and unusual geographic transactions',
      'Explainable alert generation detailing why a transaction is suspicious',
      'End-to-end pipeline architecture from transaction input to human review',
    ],
    architecture: [
      'Transaction',
      'Preprocessing',
      'ML Model',
      'Risk Score',
      'AI Explanation',
      'Alert',
    ],
    caseStudy: {
      overview:
        'FraudShield-GenAI provides an automated, transparent fraud screening workflow that classifies transactional risk and translates raw model probability into plain-language risk explanations for compliance teams.',
      problem:
        'Traditional rule-based fraud detection systems suffer from high false-positive rates, while black-box ML models leave fraud analysts without actionable context on why a transaction was flagged.',
      solution:
        'Engineered an ML anomaly classification model coupled with an explainable AI layer that pinpoints exact trigger factors (unusual amounts, atypical time, geo-velocity) and generates clear decision summaries.',
      architectureDescription:
        'Transaction Ingestion → Data Preprocessing & Scaling → ML Supervised / Anomaly Model → Risk Probability Scoring (0-100) → AI Explanation Synthesis → Secure Alert Dispatch.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Generative AI / NLP', 'FastAPI'],
      features: [
        'Data preprocessing pipeline with feature scaling and one-hot encoding',
        'Supervised fraud classification model with class-imbalance mitigation',
        'Dynamic risk scoring engine outputting confidence intervals',
        'Suspicious transaction detection across behavioral indicators',
        'Explainable audit alerts with automated natural language summaries',
      ],
      contribution:
        'Constructed the preprocessing module, tuned classification thresholds on skewed fraud datasets, and formulated the architectural pipeline flow.',
      challenges: [
        'Severe dataset class imbalance (fraudulent transactions represent <1% of records).',
        'Ensuring explanation generation does not introduce significant latency to transaction throughput.',
      ],
      solutions: [
        'Utilized stratified sampling and SMOTE techniques to balance minority classes and focused on PR-AUC metrics.',
        'Decoupled classification from deep explanation generation via asynchronous task processing.',
      ],
      futureImprovements: [
        'Integrate real-time Kafka event streaming for high-throughput payment pipelines.',
        'Implement graph neural networks (GNN) to detect coordinated fraud rings.',
      ],
    },
  },
  {
    id: 'online-voting-system',
    key: 'votingSystem',
    title: 'Online Voting System with Face Verification',
    subtitle: 'Biometric Authenticated E-Voting Web Application',
    description:
      'A secure web portal featuring facial biometric verification, one-vote-per-voter integrity enforcement, and transparent candidate tallying.',
    category: ['Python', 'Django', 'AI/ML'],
    stack: ['Python', 'Django', 'Face Recognition', 'HTML', 'CSS'],
    features: [
      'Secure multi-tier voter and administrator authentication',
      'Facial recognition pipeline ensuring identity verification at ballot access',
      'Candidate management, nomination review, and district partitioning',
      'Strict duplicate-vote prevention with database-level constraint enforcement',
      'Real-time automated vote aggregation with audit trail',
    ],
    architecture: ['Voter Registration', 'Face Match', 'Ballot Cast', 'One-Vote Lock', 'Audit Record'],
    caseStudy: {
      overview:
        'An election platform designed to prevent voter impersonation and double voting using automated facial recognition matching against registered voter records.',
      problem:
        'Remote and digital voting systems are vulnerable to identity theft, proxy voting, and credential sharing.',
      solution:
        'Integrated facial feature vector extraction at sign-in and ballot submission stages in Django, validating camera frames against pre-enrolled government ID facial embeddings.',
      architectureDescription:
        'Voter Enrolls Face Embeddings → Web Cam Capture at Login → Face Recognition Distance Comparison → Ballot Access Granted → Vote Enqueued & Marked as Voted → Database Commit.',
      technologies: ['Python', 'Django Framework', 'OpenCV / Face Recognition', 'SQLite/MySQL', 'HTML5/CSS3'],
      features: [
        'Two-factor authentication combining credentials with biometric validation',
        'Automated facial landmark detection and Euclidean distance matching',
        'Dynamic candidate roster and election lifecycle controls',
        'Tamper-resistant vote recording preventing multiple ballot submissions',
        'Administrative dashboard with live voting statistics and exportable reports',
      ],
      contribution:
        'Configured the Django authentication backend, integrated client webcam video feed capture, and constructed database models with cryptographic checks against duplicate submissions.',
      challenges: [
        'Varying lighting conditions and camera qualities affecting facial verification accuracy.',
        'Ensuring voter privacy while validating facial features.',
      ],
      solutions: [
        'Applied histogram equalization and landmark normalization before computing embedding distance.',
        'Stored mathematical facial embeddings rather than raw image files to safeguard voter privacy.',
      ],
      futureImprovements: [
        'Migrate storage to a tamper-evident distributed ledger for decentralized verifiable tallying.',
        'Add liveness detection (blink/turn head) to mitigate photograph spoofing attempts.',
      ],
    },
  },
  {
    id: 'mern-invoice-system',
    key: 'invoiceSystem',
    title: 'MERN Invoice Management System',
    subtitle: 'Full-Stack Billing & Customer Accounting Application',
    description:
      'Enterprise-ready web application with role-based JWT authorization, customer directories, invoice lifecycle tracking, and responsive financial dashboards.',
    category: ['Full Stack', 'React', 'MERN'],
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'JWT',
      'bcrypt',
      'Axios',
      'Tailwind CSS',
    ],
    features: [
      'Token-based JWT authentication with bcrypt password encryption',
      'Full CRUD operations for invoices, tax computations, and status tracking',
      'Dedicated customer management directory with billing profiles',
      'Interactive metrics dashboard highlighting paid, pending, and overdue revenues',
      'Structured REST API architecture with robust input validation and error handling',
    ],
    architecture: ['React Client', 'Axios Client', 'Express REST API', 'JWT Middleware', 'MongoDB Atlas'],
    caseStudy: {
      overview:
        'A full-stack business utility created to streamline invoice creation, automated tax/discount calculations, client relationship tracking, and payment status monitoring.',
      problem:
        'Small businesses and freelancers rely on manual spreadsheets, resulting in lost billings, miscalculated totals, and delayed customer payments.',
      solution:
        'Architected a MERN stack application with reactive UI components, secure REST endpoints, automated financial arithmetic, and persistent document storage.',
      architectureDescription:
        'React frontend built with Tailwind CSS communicates via Axios to an Express Node.js server. Endpoints are guarded by custom JWT middleware connecting to MongoDB schemas.',
      technologies: [
        'React 18',
        'Node.js',
        'Express.js',
        'MongoDB Mongoose',
        'JWT',
        'bcryptjs',
        'Axios',
        'Tailwind CSS',
      ],
      features: [
        'Secure user registration and session management via JWT',
        'Dynamic line-item invoice builder with real-time subtotal and tax calculation',
        'Customer database with billing address book and transaction history',
        'Status management (Draft, Sent, Paid, Overdue) with filtered views',
        'Dashboard analytical breakdown of revenue metrics and receivables',
      ],
      contribution:
        'Designed normalized MongoDB schemas, authored secure Express route handlers with middleware authorization, and engineered dynamic form states in React.',
      challenges: [
        'Managing nested array state for dynamic line items while maintaining responsive UI typing speed.',
        'Protecting private customer and revenue data across RESTful endpoints.',
      ],
      solutions: [
        'Implemented immutable state update handlers and debounced auto-calculation helpers.',
        'Created granular authorization middleware verifying token payload against document ownership IDs.',
      ],
      futureImprovements: [
        'Incorporate automated PDF generation and direct customer email dispatch via Nodemailer.',
        'Add Stripe or Razorpay webhook integration for instant payment reconciliation.',
      ],
    },
  },
  {
    id: 'student-management-system',
    key: 'studentManagement',
    title: 'Student Management System',
    subtitle: 'Role-Based Academic Administration Web Portal',
    description:
      'A multi-portal academic records platform featuring dedicated Admin, Faculty, and Student workspaces for grades, attendance, and enrollment management.',
    category: ['Python', 'Django'],
    stack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS'],
    features: [
      'Multi-tier role authentication (Administrator, Faculty Member, Student)',
      'Role-isolated dashboards customized with permissions and actionable workflows',
      'Student record management (profiles, course enrollments, branch assignments)',
      'Academic information tracking for subject-wise attendance and examination marks',
      'Relational MySQL schema design with foreign key constraints and audit tables',
    ],
    architecture: ['Django Auth', 'Role Routing', 'Admin / Faculty / Student Portals', 'MySQL Database'],
    caseStudy: {
      overview:
        'An academic management platform engineered to digitize college operations, enabling instructors to record marks and attendance while students review records transparently.',
      problem:
        'Colleges often struggle with fragmented paperwork, delayed grade publications, and lack of real-time attendance visibility for students.',
      solution:
        'Engineered a monolithic Django application backed by relational MySQL tables with strictly segmented permission groups and interactive data views.',
      architectureDescription:
        'Django Model-View-Template (MVT) pattern running on top of MySQL. Role-based decorator middleware inspects authenticated user privileges before serving views.',
      technologies: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Dedicated admin console for course and faculty roster management',
        'Faculty interface for batch attendance logging and grade submission',
        'Student portal for reviewing attendance thresholds and semester scorecards',
        'Automated warning flags for low attendance percentages',
        'Centralized MySQL database with relational integrity and data backups',
      ],
      contribution:
        'Modeled the relational schema in MySQL, configured Django custom user models, and crafted the front-end templates for each user role.',
      challenges: [
        'Handling concurrent batch updates when faculty log attendance for entire lecture sections.',
        'Preventing unauthorized students from inspecting other learners’ grades.',
      ],
      solutions: [
        'Utilized Django `bulk_create` and atomic database transactions to optimize batch attendance commits.',
        'Enforced strict query filtering `filter(student=request.user.student_profile)` at the view layer.',
      ],
      futureImprovements: [
        'Expose RESTful endpoints using Django REST Framework for future mobile app support.',
        'Automate semester report generation as downloadable signed PDF certificates.',
      ],
    },
  },
  {
    id: 'bragboard-platform',
    key: 'bragBoard',
    title: 'BragBoard',
    subtitle: 'Internal Employee Recognition & Peer Appreciation Platform',
    description:
      'A high-performance peer appreciation application built with React and FastAPI, fostering team culture through public shoutouts and actionable analytics.',
    category: ['Full Stack', 'React', 'Python'],
    stack: ['React.js', 'FastAPI', 'Python', 'Tailwind CSS'],
    features: [
      'Peer-to-peer appreciation feed with category tags and reaction emojis',
      'Interactive leaderboard celebrating top culture contributors and team achievements',
      'Admin governance console with moderation workflows and role assignment',
      'Detailed culture analytics, engagement metrics, and departmental reports',
      'Exportable reporting data supporting CSV and PDF documentation formats',
    ],
    architecture: ['React UI', 'FastAPI Async Backend', 'Pydantic Models', 'Analytics Engine', 'Export'],
    caseStudy: {
      overview:
        'BragBoard is an internal employee engagement utility that transforms workplace recognition by offering a transparent space for teams to acknowledge accomplishments.',
      problem:
        'In distributed and hybrid environments, individual employee contributions often go unnoticed, impacting morale and cross-team visibility.',
      solution:
        'Created a responsive React frontend paired with an asynchronous Python FastAPI service that powers real-time kudos feeds and company-wide analytics.',
      architectureDescription:
        'React single-page client interacts with FastAPI endpoints defined with typed Pydantic models. Data queries aggregate peer recognition logs into analytical dashboards.',
      technologies: ['React.js', 'FastAPI', 'Python', 'Pydantic', 'Tailwind CSS', 'Axios'],
      features: [
        'Public recognition board with real-time recognition posts and praise reactions',
        'Departmental filtering and company value tagging (Innovation, Teamwork, Leadership)',
        'Comprehensive admin panel for user directory management and content moderation',
        'Engagement analytics dashboard tracking frequency of peer appreciation',
        'Export module providing formatted CSV reports for HR and management reviews',
      ],
      contribution:
        'Developed dynamic React feed components, implemented FastAPI REST routes with Pydantic validation, and configured the CSV export engine.',
      challenges: [
        'Designing a snappy async backend that handles quick shoutout feeds and dynamic reaction counts.',
        'Building a responsive, modern UI suitable for desktop monitors and mobile devices.',
      ],
      solutions: [
        'Leveraged FastAPI asynchronous route handlers and optimized query aggregations.',
        'Designed a clean component hierarchy with Tailwind CSS and optimistic UI state updates for reactions.',
      ],
      futureImprovements: [
        'Integrate Slack and Microsoft Teams bot notifications for cross-platform shoutouts.',
        'Incorporate reward points redeemable for digital gift cards and company merchandise.',
      ],
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Software / Technology Intern',
    company: 'Infosys Springboard',
    period: '2025',
    location: 'Remote / Virtual',
    factualSummary:
      'Completed industry-aligned technical curriculum and project-oriented training focused on programming fundamentals, software engineering best practices, and enterprise technologies.',
    keyFocus: [
      'Python programming, algorithmic thinking, and clean code principles',
      'Object-oriented system design and modular software structure',
      'Evaluation through hands-on technical assessments and coding milestones',
    ],
  },
  {
    role: 'Technology Intern',
    company: 'Cognifyz Technologies',
    period: '2024 – 2025',
    location: 'Virtual / Hybrid',
    factualSummary:
      'Engaged in technical task execution, web development workflows, and computational assignments under structured project deadlines.',
    keyFocus: [
      'Practical software implementation and version control workflows using Git',
      'Frontend and backend integration testing across modern web stacks',
      'Technical problem analysis and milestone documentation',
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-python',
    title: 'Python Certification',
    issuer: 'Infosys Springboard',
    year: '2025',
    credentialUrl: portfolioConfig.certificates.python,
    skills: ['Python', 'Object-Oriented Programming', 'Data Structures', 'Algorithmic Problem Solving'],
  },
  {
    id: 'cert-cloud',
    title: 'Cloud & Infrastructure Foundations',
    issuer: 'Technical Training & Upskilling',
    year: '2025',
    credentialUrl: portfolioConfig.certificates.cloud,
    skills: ['VPC', 'Subnets', 'Security Groups', 'Networking Fundamentals', 'Docker'],
  },
  {
    id: 'cert-genai',
    title: 'AI / Machine Learning Specialization Track',
    issuer: 'Academic & Industry Initiative',
    year: '2025',
    credentialUrl: portfolioConfig.certificates.ai,
    skills: ['Machine Learning', 'scikit-learn', 'NLP', 'Cosine Similarity', 'Feature Engineering'],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: '1st Place – CodeSprint 2K25',
    organization: 'Narsimha Reddy Engineering College (NRCM)',
    year: '2025',
    icon: 'trophy',
    badge: 'Champion',
  },
  {
    id: 'ach-2',
    title: 'National-Level Project Expo – 2025',
    organization: 'NRCM',
    year: '2025',
    icon: 'rocket',
    badge: 'Finalist / Exhibitor',
  },
  {
    id: 'ach-3',
    title: 'National-Level Project Expo – 2026',
    organization: 'NRCM',
    year: '2026',
    icon: 'rocket',
    badge: 'Exhibitor & Innovator',
  },
  {
    id: 'ach-4',
    title: 'CodeStrom 36-Hour Hackathon – 2024',
    organization: 'NRCM',
    year: '2024',
    icon: 'code',
    badge: '36-Hour Hackathon Finalist',
  },
];

export const codingProfilesData: CodingProfile[] = [
  {
    platform: 'GitHub',
    username: 'Venkatesh-Billa',
    url: portfolioConfig.github,
    accent: 'emerald',
    focus: 'Open Source, Project Repositories & Version Control',
  },
  {
    platform: 'LeetCode',
    username: 'YOUR_LEETCODE_USERNAME',
    url: portfolioConfig.leetcode,
    accent: 'amber',
    focus: 'Data Structures, Problem Solving & Algorithmic Patterns',
  },
  {
    platform: 'CodeChef',
    username: 'YOUR_CODECHEF_USERNAME',
    url: portfolioConfig.codechef,
    accent: 'blue',
    focus: 'Competitive Programming Contests & Rating Challenges',
  },
  {
    platform: 'HackerRank',
    username: 'YOUR_HACKERRANK_USERNAME',
    url: portfolioConfig.hackerrank,
    accent: 'teal',
    focus: 'Domain Skills, Language Badges & Core Problem Solving',
  },
];

export const dsaTopics = [
  'Arrays',
  'Strings',
  'Linked Lists',
  'Stacks',
  'Queues',
  'Trees',
  'Searching',
  'Sorting',
  'Hashing',
];

export const javaTopics = [
  'OOP Concepts',
  'JVM / JDK / JRE Internals',
  'Strings & StringBuilder',
  'Collections Framework',
  'Exception Handling',
  'Java 8 Features',
  'Method References',
  'Optional Class',
  'Date-Time API',
  'Access Modifiers',
  'final / finally / finalize',
  'Multithreading',
  'Deadlock Handling',
];

export const preparationStages = [
  { step: '01', title: 'Learning', desc: 'Grasping foundational principles & syntax', current: false, done: true },
  { step: '02', title: 'Practicing', desc: 'Solving standard patterns & edge cases', current: true, done: false },
  { step: '03', title: 'Building', desc: 'Applying logic inside full-stack projects', current: false, done: false },
  { step: '04', title: 'Interview Ready', desc: 'Mock interviews, time complexity & code reviews', current: false, done: false },
];

export const cloudDevOpsTopics = [
  'Cloud Fundamentals',
  'VPC',
  'Subnets',
  'Route Tables',
  'Internet Gateway',
  'Security Groups',
  'Docker',
  'Containerization',
  'Deployment',
];
