export type SkillCategory = 'Language' | 'Framework' | 'Tool' | 'Platform';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Python',     category: 'Language' },
  { name: 'SQL',        category: 'Language' },

  // Frameworks
  { name: 'Next.js',    category: 'Framework' },
  { name: 'React',      category: 'Framework' },
  { name: 'Node.js',    category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Framework' },

  // Tools
  { name: 'Git',        category: 'Tool' },
  { name: 'Docker',     category: 'Tool' },
  { name: 'VS Code',    category: 'Tool' },

  // Platforms
  { name: 'GitHub',     category: 'Platform' },
  { name: 'Vercel',     category: 'Platform' },
  { name: 'Linux',      category: 'Platform' },
];
