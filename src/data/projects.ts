/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Mobile App',
  'IoT',
  'Personal Project',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'ryanair-lab',
    title: 'Ryanair Finder (iOS)',
    description:
      'App iOS para buscar vuelos de Ryanair con SwiftUI moderno, async/await y arquitectura MVVM limpia.',
    longDescription: `Aplicación iOS que permite buscar vuelos de Ryanair seleccionando origen, destino y fecha de salida. Desarrollada con las últimas características de SwiftUI, gestión de estado con @StateObject/@Published, concurrencia con async/await y @MainActor, y parsing de JSON con Codable. La UI sigue el diseño oficial de Ryanair con tarjetas personalizadas que muestran horarios, duración y precio "Basic".`,
    thumbnail: '/projects/ryanair-thumb.jpg',
    images: [],
    technologies: ['Swift 5', 'SwiftUI', 'MVVM', 'async/await', 'Codable', 'iOS 16+'],
    category: 'Mobile App',
    role: 'Developer',
    duration: 'Sep 2025',
    githubUrl: 'https://github.com/amayucas/Ryanair_lab',
    featured: true,
    highlights: [
      'Arquitectura MVVM con separación limpia de responsabilidades',
      'Concurrencia moderna con async/await y @MainActor',
      'Búsqueda y filtrado de estaciones Ryanair en tiempo real',
      'Manejo de estados: carga, vacío y error con feedback visual',
    ],
  },
  {
    id: 'proj-2',
    slug: 'mymeds',
    title: 'MyMeds – Medication Log',
    description:
      'App iOS para registrar la toma de medicamentos con SwiftUI + MVVM, persistencia local y micro-interacciones nativas.',
    longDescription: `MyMeds es una app de salud personal para llevar el control de la ingesta de medicamentos. Permite seleccionar medicamento, introducir dosis, elegir fecha/hora y añadir notas. Los registros se muestran en una timeline en orden cronológico inverso con persistencia local entre sesiones. Diseñada siguiendo patrones nativos de iOS con efectos de material blur y haptic feedback.`,
    thumbnail: '/projects/mymeds-thumb.jpg',
    images: [],
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'iOS 17+', 'Persistence'],
    category: 'Mobile App',
    role: 'Developer',
    duration: 'Nov 2025',
    githubUrl: 'https://github.com/amayucas/MyMeds',
    featured: true,
    highlights: [
      'Persistencia local de registros entre sesiones',
      'Timeline inversa con swipe-to-delete',
      'Haptic feedback y efectos de material blur nativos',
      'Sin dependencias externas, 100% Swift',
    ],
  },
  {
    id: 'proj-3',
    slug: 'app-carrefour-espana',
    title: 'App Carrefour España',
    description:
      'Aplicación móvil Android e iOS de Carrefour España con millones de usuarios activos para compra online y fidelización.',
    longDescription: `Contribución al desarrollo y mantenimiento de la app oficial de Carrefour España, una de las aplicaciones de retail más utilizadas en España. La app permite compra online, gestión de la tarjeta de fidelización, consulta de ofertas y seguimiento de pedidos, todo desde Android e iOS.`,
    thumbnail: '/projects/carrefour-thumb.jpg',
    images: [],
    technologies: ['Kotlin', 'Swift', 'Jetpack Compose', 'SwiftUI', 'REST APIs', 'Google Cloud'],
    category: 'Mobile App',
    role: 'Senior Mobile Developer',
    duration: '2020 – Actualidad',
    featured: true,
    highlights: [
      'Millones de usuarios activos en Android e iOS',
      'Integración con plataformas de IA y servicios cloud',
      'Arquitectura limpia y modular',
      'Parte del proceso de transformación digital de Carrefour España',
    ],
  },
  {
    id: 'proj-4',
    slug: 'iot-energy-monitoring',
    title: 'IoT Energy Efficiency Monitoring',
    description:
      'Sistema IoT de monitorización ambiental y energética con firmware Arduino, comunicación XBee/serie y concentrador en Raspberry Pi.',
    longDescription: `Proyecto de ingeniería IoT que despliega un prototipo de adquisición de medidas (temperatura, humedad, luminosidad, movimiento, corriente) para analizar la eficiencia energética en un edificio. La arquitectura conecta motas sensoras Arduino con un concentrador en Raspberry Pi vía XBee/serie, enviando datos a un broker MQTT. Desarrollado como proyecto académico en la UPM.`,
    thumbnail: '/projects/iot-thumb.jpg',
    images: [],
    technologies: ['Java', 'Arduino', 'C++', 'Raspberry Pi', 'MQTT', 'XBee', 'JSON'],
    category: 'IoT',
    role: 'Developer',
    duration: '2019',
    githubUrl: 'https://github.com/amayucas/iot-energy-efficiency-monitoring',
    featured: false,
    highlights: [
      'Arquitectura completa: sensores → Arduino → XBee → Raspberry Pi → MQTT',
      'Sensores: temperatura, humedad, luminosidad, corriente y movimiento',
      'Concentrador Java con broker MQTT y filtros JSON',
      'Proyecto académico UPM con informe técnico completo',
    ],
  },
  {
    id: 'proj-5',
    slug: 'be-real-talent-app',
    title: 'Be Real Talent App',
    description:
      'Plataforma mobile para conectar empresas con talento tecnológico. Desarrollo de funcionalidades desde las etapas iniciales del producto.',
    longDescription: `Desarrollo de parte de las funcionalidades de la aplicación Be Real Talent, una startup de Madrid que conecta empresas con perfiles tecnológicos. Trabajo en entorno ágil con foco en la calidad y el cumplimiento de plazos.`,
    thumbnail: '/projects/beretalent-thumb.jpg',
    images: [],
    technologies: ['Android', 'Kotlin', 'iOS', 'Swift', 'REST APIs'],
    category: 'Mobile App',
    role: 'Mobile Developer',
    duration: '2018 – 2019',
    featured: false,
    highlights: [
      'Desarrollo responsable y en tiempo de las funcionalidades',
      'Trabajo en startup en etapas tempranas del producto',
      'Apps nativas Android e iOS',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
