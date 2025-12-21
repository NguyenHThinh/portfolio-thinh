export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 5, category: 'frontend' },
  { name: 'CSS', level: 5, category: 'frontend' },
  { name: 'JavaScript/TypeScript', level: 5, category: 'frontend' },
  { name: 'React/Next.js', level: 5, category: 'frontend' },
  { name: 'Nuxt3', level: 4, category: 'frontend' },
  { name: 'Bootstrap', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 5, category: 'frontend' },
  { name: 'WordPress', level: 4, category: 'frontend' },
  // Tools
  { name: 'npm/yarn', level: 5, category: 'tools' },
  { name: 'Git', level: 5, category: 'tools' },
  { name: 'Jira', level: 4, category: 'tools' },
  { name: 'Docker', level: 3, category: 'tools' },
  { name: 'Figma', level: 4, category: 'tools' },
  { name: 'Postman', level: 4, category: 'tools' },
];
