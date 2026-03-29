/**
 * =============================================================================
 * SKILLS DATA - Technical & Professional Skills
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains skills displayed in the Skills section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example skills with your actual skills
 * 2. Set proficiency levels honestly (0-100)
 * 3. Organize skills by category
 * 4. Update spoken languages if applicable
 *
 * PROFICIENCY LEVEL GUIDE:
 * - 90-100: Expert (can teach others, deep knowledge)
 * - 70-89:  Advanced (proficient, used extensively)
 * - 50-69:  Intermediate (comfortable, moderate experience)
 * - 30-49:  Basic (familiar, some experience)
 * - 10-29:  Beginner (learning, minimal experience)
 *
 * TO ADD A NEW SKILL:
 * { name: 'Skill Name', level: 85, category: 'Category', yearsOfExperience: 3 }
 *
 * TO ADD A NEW CATEGORY:
 * 1. Add the category name to the skillCategories array
 * 2. Add skills with that category to the skills array
 * =============================================================================
 */

/**
 * Skill entry type definition
 */
export interface Skill {
  /** Skill name (e.g., "React", "Python", "Project Management") */
  name: string;

  /**
   * Proficiency level from 0-100
   * See guide above for recommended ranges
   */
  level: number;

  /**
   * Category for grouping skills
   * Must match one of the categories in skillCategories array
   */
  category: string;

  /**
   * Icon identifier (optional)
   * Can be used to display skill icons
   */
  icon?: string;

  /**
   * Years of experience with this skill (optional)
   */
  yearsOfExperience?: number;
}

/**
 * Spoken language type definition
 */
export interface Language {
  /** Language name (e.g., "English", "Spanish") */
  name: string;

  /**
   * Proficiency level
   * Options: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic'
   */
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

/**
 * =============================================================================
 * SKILL CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * These categories are used to group skills in the UI.
 * Add, remove, or rename categories as needed.
 */
export const skillCategories: string[] = [
  'Móvil',
  'Lenguajes',
  'Backend',
  'IA / LLM',
  'Cloud',
  'DevOps',
];

/**
 * =============================================================================
 * YOUR SKILLS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example skills with your actual skills.
 * Group skills by category for better organization.
 */
export const skills: Skill[] = [
  // ---------------------------------------------------------------------------
  // MOBILE
  // ---------------------------------------------------------------------------
  {
    name: 'Android (Kotlin)',
    level: 95,
    category: 'Móvil',
    yearsOfExperience: 7,
  },
  {
    name: 'iOS (Swift)',
    level: 90,
    category: 'Móvil',
    yearsOfExperience: 6,
  },
  {
    name: 'Jetpack Compose',
    level: 88,
    category: 'Móvil',
    yearsOfExperience: 3,
  },
  {
    name: 'SwiftUI',
    level: 82,
    category: 'Móvil',
    yearsOfExperience: 3,
  },
  {
    name: 'Clean Architecture / MVVM',
    level: 90,
    category: 'Móvil',
    yearsOfExperience: 5,
  },

  // ---------------------------------------------------------------------------
  // PROGRAMMING LANGUAGES
  // ---------------------------------------------------------------------------
  {
    name: 'Kotlin',
    level: 95,
    category: 'Lenguajes',
    yearsOfExperience: 7,
  },
  {
    name: 'Swift',
    level: 90,
    category: 'Lenguajes',
    yearsOfExperience: 6,
  },
  {
    name: 'Java',
    level: 80,
    category: 'Lenguajes',
    yearsOfExperience: 5,
  },
  {
    name: 'JavaScript',
    level: 75,
    category: 'Lenguajes',
    yearsOfExperience: 4,
  },
  {
    name: 'Python',
    level: 65,
    category: 'Lenguajes',
    yearsOfExperience: 3,
  },

  // ---------------------------------------------------------------------------
  // BACKEND
  // ---------------------------------------------------------------------------
  {
    name: 'Node.js / Express',
    level: 72,
    category: 'Backend',
    yearsOfExperience: 3,
  },
  {
    name: 'Django / Python',
    level: 68,
    category: 'Backend',
    yearsOfExperience: 2,
  },
  {
    name: 'REST APIs',
    level: 92,
    category: 'Backend',
    yearsOfExperience: 7,
  },
  {
    name: 'MongoDB',
    level: 70,
    category: 'Backend',
    yearsOfExperience: 3,
  },

  // ---------------------------------------------------------------------------
  // IA / LLM
  // ---------------------------------------------------------------------------
  {
    name: 'Prompt Engineering',
    level: 82,
    category: 'IA / LLM',
    yearsOfExperience: 2,
  },
  {
    name: 'OpenAI API / GPT',
    level: 78,
    category: 'IA / LLM',
    yearsOfExperience: 2,
  },
  {
    name: 'Google Gemini / Gemini CLI',
    level: 75,
    category: 'IA / LLM',
    yearsOfExperience: 1,
  },
  {
    name: 'Claude Code',
    level: 70,
    category: 'IA / LLM',
    yearsOfExperience: 1,
  },
  {
    name: 'Codex',
    level: 68,
    category: 'IA / LLM',
    yearsOfExperience: 1,
  },
  {
    name: 'OpenClaw',
    level: 65,
    category: 'IA / LLM',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // CLOUD & DEVOPS
  // ---------------------------------------------------------------------------
  {
    name: 'Google Cloud (GCP)',
    level: 72,
    category: 'Cloud',
    yearsOfExperience: 3,
  },
  {
    name: 'Git',
    level: 92,
    category: 'DevOps',
    yearsOfExperience: 8,
  },
  {
    name: 'CI/CD',
    level: 80,
    category: 'DevOps',
    yearsOfExperience: 4,
  },
  {
    name: 'Agile / Scrum',
    level: 88,
    category: 'DevOps',
    yearsOfExperience: 6,
  },
];

/**
 * =============================================================================
 * SPOKEN LANGUAGES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * List the languages you speak and your proficiency level.
 */
export const languages: Language[] = [
  { name: 'Español', level: 'Native' },
  { name: 'Inglés', level: 'Professional' },
  { name: 'Chino', level: 'Basic' },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get skills filtered by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Get top N skills sorted by proficiency level
 */
export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

/**
 * Get all unique skill categories actually used in skills array
 */
export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  // Return in the order defined in skillCategories
  return skillCategories.filter((cat) => categories.has(cat));
}

/**
 * Get skills grouped by category
 */
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

/**
 * Calculate average skill level
 */
export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

/**
 * Get proficiency label for a skill level
 */
export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Experto';
  if (level >= 70) return 'Avanzado';
  if (level >= 50) return 'Intermedio';
  if (level >= 30) return 'Básico';
  return 'Principiante';
}
