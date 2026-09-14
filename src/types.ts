export type ProjectKey =
  | 'movieRecommendation'
  | 'fraudShield'
  | 'votingSystem'
  | 'invoiceSystem'
  | 'studentManagement'
  | 'bragBoard';

export interface ProjectData {
  id: string;
  key: ProjectKey;
  title: string;
  subtitle?: string;
  description: string;
  category: ('AI/ML' | 'Full Stack' | 'Java' | 'Python' | 'React' | 'Django' | 'MERN')[];
  stack: string[];
  features: string[];
  architecture?: string[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architectureDescription: string;
    technologies: string[];
    features: string[];
    contribution: string;
    challenges: string[];
    solutions: string[];
    futureImprovements: string[];
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  factualSummary: string;
  keyFocus: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  icon: 'trophy' | 'rocket' | 'code';
  badge: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  accent: string;
  focus: string;
}
