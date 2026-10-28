/** Typed shapes for everything in data/portfolio.data.ts */
export interface Profile {
  name: string; title: string; tagline: string;
  photo?: string;            // e.g. 'assets/me.jpg' (put file in /public or /src/assets). Empty = initials shown.
  stats: { value: string; label: string }[];
  summary: string;
  languages: string[];
}
export interface ContactInfo {
  email: string; phone: string; location: string; linkedin: string;
  github?: string;           // optional: hidden when empty
}
export interface SkillGroup { category: string; items: string[]; }
export interface Experience { role: string; company: string; location: string; period: string; highlights: string[]; }
export interface Education { degree: string; institute: string; period: string; note?: string; }
export interface Project { name: string; period: string; stack: string[]; description: string; link?: string; }
export interface Portfolio {
  profile: Profile; contact: ContactInfo; skills: SkillGroup[];
  experience: Experience[]; education: Education[]; projects: Project[];
}
