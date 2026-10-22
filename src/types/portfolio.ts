export type ProjectCategory = 'All' | 'ML' | 'Deep Learning' | 'AI' | 'Big Data';

export interface ProfileInfo {
  name: string;
  role: string;
  shortBio: string;
  fullBioParagraphs: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  medium: string;
  msLearn: string;
  kaggle?: string;
  avatarUrl: string;
  availableForWork: boolean;
  availabilityTagline: string;
  cvUrl?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  level: 'Undergraduate' | 'Advanced Level (A/L)';
  highlights: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
  levelText: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  type: 'technical' | 'soft';
  categoryLabel: string;
  description: string;
  skills: SkillItem[];
  highlightBadge?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'ML' | 'Deep Learning' | 'AI' | 'Big Data';
  tools: string[];
  shortDescription: string;
  fullDescription: string;
  architectureNotes: string;
  metrics: ProjectMetric[];
  image: string;
  repoUrl: string;
  liveDemoUrl: string;
  videoDemoUrl: string;
  keyFeatures: string[];
}

export interface Certification {
  id: string;
  title: string;
  from: string;
  issuedYear: string;
  credentialId: string;
  verifyUrl: string;
  credentialImage?: string;
  skillsCovered: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface VolunteerRole {
  id: string;
  title: string;
  organization: string;
  period: string;
  highlightedSkill: string;
  description: string;
  photos: {
    url: string;
    caption: string;
  }[];
  externalLink?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
}
