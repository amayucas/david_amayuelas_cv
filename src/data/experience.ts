/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * TO ADD A NEW EXPERIENCE:
 * Copy an existing entry and modify all fields. Example:
 * {
 *   id: 'exp-4',  // Unique identifier
 *   title: 'Your Job Title',
 *   company: 'Company Name',
 *   location: 'City, State/Country',
 *   type: 'full-time',  // Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
 *   startDate: '2023-01',  // Format: YYYY-MM
 *   endDate: '2024-01',    // Format: YYYY-MM or omit for current position
 *   current: false,        // Set to true if this is your current job
 *   description: 'Brief description of your role...',
 *   achievements: ['Achievement 1', 'Achievement 2'],
 *   technologies: ['Tech 1', 'Tech 2'],
 * }
 *
 * TO REMOVE AN EXPERIENCE:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // CURRENT POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-1',
    title: 'Senior Mobile Developer (Android & iOS)',
    company: 'Carrefour España',
    location: 'Madrid, España',
    type: 'full-time',
    startDate: '2020-01',
    current: true,
    description:
      'Desarrollo y mantenimiento de las aplicaciones móviles de Carrefour España para Android e iOS, contribuyendo a la transformación digital del retailer líder en Europa.',
    achievements: [
      'Desarrollo de funcionalidades clave en las apps Android e iOS con millones de usuarios activos',
      'Implementación de arquitecturas limpias (MVVM, Clean Architecture) mejorando la mantenibilidad del código',
      'Integración con plataformas de IA y nuevas tecnologías para la experiencia de compra digital',
      'Colaboración en la estrategia de transformación digital de Carrefour España',
      'Impulso de buenas prácticas de desarrollo mobile en el equipo técnico',
    ],
    technologies: [
      'Kotlin',
      'Swift',
      'Android',
      'iOS',
      'Jetpack Compose',
      'SwiftUI',
      'React Native',
      'Google Cloud',
      'CI/CD',
    ],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-2',
    title: 'Mobile Developer',
    company: 'Be Real Talent',
    location: 'Madrid, España',
    type: 'full-time',
    startDate: '2018-01',
    endDate: '2019-12',
    current: false,
    description:
      'Desarrollo de funcionalidades de la app Be Real Talent, plataforma de conexión entre empresas y talento tecnológico.',
    achievements: [
      'Desarrollo responsable y en tiempo de las funcionalidades asignadas de la plataforma',
      'Trabajo en equipo en entorno startup con metodologías ágiles',
      'Contribución al crecimiento de la app desde las etapas iniciales del producto',
    ],
    technologies: [
      'Android',
      'Kotlin',
      'iOS',
      'Swift',
      'REST APIs',
      'Git',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
