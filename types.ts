
export type Language = 'en' | 'ru' | 'ky';

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: Record<Language, string>;
  period: string;
  description: Record<Language, string[]>;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  level: number; // 0 to 100
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
