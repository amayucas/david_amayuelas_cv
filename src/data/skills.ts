import type { Localized } from '@/lib/localized';

export type LocalizedText = Localized<string>;

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
  yearsOfExperience?: number;
}

export interface Language {
  name: string | LocalizedText;
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

export const skillCategories: string[] = ['Móvil', 'Lenguajes', 'Backend', 'IA / LLM', 'Cloud', 'DevOps'];

export const skills: Skill[] = [
  { name: 'Android (Kotlin)', level: 95, category: 'Móvil', yearsOfExperience: 7 },
  { name: 'iOS (Swift)', level: 90, category: 'Móvil', yearsOfExperience: 6 },
  { name: 'Jetpack Compose', level: 88, category: 'Móvil', yearsOfExperience: 3 },
  { name: 'SwiftUI', level: 82, category: 'Móvil', yearsOfExperience: 3 },
  { name: 'Clean Architecture / MVVM', level: 90, category: 'Móvil', yearsOfExperience: 5 },

  { name: 'Kotlin', level: 95, category: 'Lenguajes', yearsOfExperience: 7 },
  { name: 'Swift', level: 90, category: 'Lenguajes', yearsOfExperience: 6 },
  { name: 'Java', level: 80, category: 'Lenguajes', yearsOfExperience: 5 },
  { name: 'JavaScript', level: 75, category: 'Lenguajes', yearsOfExperience: 4 },
  { name: 'Python', level: 65, category: 'Lenguajes', yearsOfExperience: 3 },

  { name: 'Node.js / Express', level: 72, category: 'Backend', yearsOfExperience: 3 },
  { name: 'Django / Python', level: 68, category: 'Backend', yearsOfExperience: 2 },
  { name: 'REST APIs', level: 92, category: 'Backend', yearsOfExperience: 7 },
  { name: 'MongoDB', level: 70, category: 'Backend', yearsOfExperience: 3 },

  { name: 'Prompt Engineering', level: 82, category: 'IA / LLM', yearsOfExperience: 2 },
  { name: 'OpenAI API / GPT', level: 78, category: 'IA / LLM', yearsOfExperience: 2 },
  { name: 'Google Gemini / Gemini CLI', level: 75, category: 'IA / LLM', yearsOfExperience: 1 },
  { name: 'Claude Code', level: 70, category: 'IA / LLM', yearsOfExperience: 1 },
  { name: 'Codex', level: 68, category: 'IA / LLM', yearsOfExperience: 1 },
  { name: 'OpenClaw', level: 65, category: 'IA / LLM', yearsOfExperience: 1 },

  { name: 'Google Cloud (GCP)', level: 72, category: 'Cloud', yearsOfExperience: 3 },
  { name: 'Git', level: 92, category: 'DevOps', yearsOfExperience: 8 },
  { name: 'CI/CD', level: 80, category: 'DevOps', yearsOfExperience: 4 },
  { name: 'Agile / Scrum', level: 88, category: 'DevOps', yearsOfExperience: 6 },
];

export const languages: Language[] = [
  { name: { es: 'Español', en: 'Spanish' }, level: 'Native' },
  { name: { es: 'Inglés', en: 'English' }, level: 'Professional' },
  { name: { es: 'Chino', en: 'Chinese' }, level: 'Basic' },
];

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  return skillCategories.filter((cat) => categories.has(cat));
}

export function getSkillsGroupedByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {};

  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      grouped[category] = categorySkills;
    }
  });

  return grouped;
}

export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Experto';
  if (level >= 70) return 'Avanzado';
  if (level >= 50) return 'Intermedio';
  if (level >= 30) return 'Básico';
  return 'Principiante';
}
