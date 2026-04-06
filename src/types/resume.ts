export type Profile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  heroIntro: string;
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export type Skill = {
  name: string;
  category: string;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  stack: string[];
  description: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
};

export type HighlightItem = {
  title: string;
  detail: string;
};

export type ResumeData = {
  profile: Profile;
  contactLinks: ContactLink[];
  skills: Skill[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  achievements: HighlightItem[];
  leadership: HighlightItem[];
};
