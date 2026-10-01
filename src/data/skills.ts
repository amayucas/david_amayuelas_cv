import type { Localized } from '@/lib/localized';

export type LocalizedText = Localized<string>;
export type LocalizedTextList = Localized<string[]>;

export interface Project {
  id: string;
  slug: string;
  title: string | LocalizedText;
  description: string | LocalizedText;
  longDescription?: string | LocalizedText;
  thumbnail: string;
  images: string[];
  technologies: string[];
  category: string | LocalizedText;
  role: string | LocalizedText;
  duration: string | LocalizedText;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[] | LocalizedTextList;
}

export const projectCategories: string[] = ['All', 'Mobile App', 'IoT', 'Personal Project'];

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'ryanair-lab',
    title: { es: 'Ryanair Finder (iOS)', en: 'Ryanair Finder (iOS)' },
    description: {
      es: 'App iOS para buscar vuelos de Ryanair con SwiftUI moderno, async/await y arquitectura MVVM limpia.',
      en: 'iOS app to search Ryanair flights using modern SwiftUI, async/await and a clean MVVM architecture.',
    },
    longDescription: {
      es: 'Aplicación iOS que permite buscar vuelos de Ryanair seleccionando origen, destino y fecha de salida. Desarrollada con las últimas características de SwiftUI, gestión de estado, y una arquitectura clara para facilitar la expansión.',
      en: 'iOS application that lets users search Ryanair flights by selecting origin, destination, and departure date. Built with the latest SwiftUI features, state management, and a clean architecture designed for future expansion.',
    },
    thumbnail: '/projects/ryanair-thumb.jpg',
    images: [],
    technologies: ['Swift 5', 'SwiftUI', 'MVVM', 'async/await', 'Codable', 'iOS 16+'],
    category: { es: 'Mobile App', en: 'Mobile App' },
    role: { es: 'Developer', en: 'Developer' },
    duration: { es: 'Sep 2025', en: 'Sep 2025' },
    githubUrl: 'https://github.com/amayucas/Ryanair_lab',
    featured: true,
    highlights: {
      es: [
        'Arquitectura MVVM con separación limpia de responsabilidades',
        'Concurrencia moderna con async/await y @MainActor',
        'Búsqueda y filtrado de estaciones Ryanair en tiempo real',
        'Manejo de estados: carga, vacío y error con feedback visual',
      ],
      en: [
        'MVVM architecture with clean separation of responsibilities',
        'Modern concurrency using async/await and @MainActor',
        'Live search and filtering of Ryanair stations',
        'State handling for loading, empty, and error views with visual feedback',
      ],
    },
  },
  {
    id: 'proj-2',
    slug: 'mymeds',
    title: { es: 'MyMeds – Medication Log', en: 'MyMeds – Medication Log' },
    description: {
      es: 'App iOS para registrar la toma de medicamentos con SwiftUI + MVVM, persistencia local y micro-interacciones nativas.',
      en: 'iOS app for tracking medication intake with SwiftUI + MVVM, local persistence, and native micro-interactions.',
    },
    longDescription: {
      es: 'MyMeds es una app de salud personal para llevar el control de la ingesta de medicamentos. Permite seleccionar medicamento, introducir dosis, elegir fecha/hora y añadir nota personal.',
      en: 'MyMeds is a personal health app for tracking medication intake. It allows users to select a medicine, enter dosage, choose date and time, and add personal notes.',
    },
    thumbnail: '/projects/mymeds-thumb.jpg',
    images: [],
    technologies: ['Swift', 'SwiftUI', 'MVVM', 'iOS 17+', 'Persistence'],
    category: { es: 'Mobile App', en: 'Mobile App' },
    role: { es: 'Developer', en: 'Developer' },
    duration: { es: 'Nov 2025', en: 'Nov 2025' },
    githubUrl: 'https://github.com/amayucas/MyMeds',
    featured: true,
    highlights: {
      es: [
        'Persistencia local de registros entre sesiones',
        'Timeline inversa con swipe-to-delete',
        'Haptic feedback y efectos de material blur nativos',
        'Sin dependencias externas, 100% Swift',
      ],
      en: [
        'Local persistence for records across sessions',
        'Reverse timeline with swipe-to-delete interactions',
        'Native haptic feedback and blur material effects',
        'No external dependencies, 100% Swift',
      ],
    },
  },
  {
    id: 'proj-3',
    slug: 'app-carrefour-espana',
    title: { es: 'App Carrefour España', en: 'Carrefour Spain App' },
    description: {
      es: 'Aplicación móvil Android e iOS de Carrefour España con millones de usuarios activos para compra online y fidelización.',
      en: 'Android and iOS mobile application for Carrefour Spain, serving millions of active users for online shopping and loyalty.',
    },
    longDescription: {
      es: 'Contribución al desarrollo y mantenimiento de la app oficial de Carrefour España, una de las aplicaciones de retail más utilizadas en España. La app permite compra online, gestión de ofertas y fidelización.',
      en: 'Contribution to the development and maintenance of Carrefour Spain’s official app, one of the most used retail apps in Spain. The app supports online purchases, offers, and loyalty features.',
    },
    thumbnail: '/projects/carrefour-thumb.jpg',
    images: [],
    technologies: ['Kotlin', 'Swift', 'Jetpack Compose', 'SwiftUI', 'REST APIs', 'Google Cloud'],
    category: { es: 'Mobile App', en: 'Mobile App' },
    role: { es: 'Senior Mobile Developer', en: 'Senior Mobile Developer' },
    duration: { es: '2020 – Actualidad', en: '2020 – Present' },
    featured: true,
    highlights: {
      es: [
        'Millones de usuarios activos en Android e iOS',
        'Integración con plataformas de IA y servicios cloud',
        'Arquitectura limpia y modular',
        'Parte del proceso de transformación digital de Carrefour España',
      ],
      en: [
        'Millions of active users on Android and iOS',
        'Integration with AI platforms and cloud services',
        'Clean, modular architecture',
        'Part of Carrefour Spain’s digital transformation program',
      ],
    },
  },
  {
    id: 'proj-4',
    slug: 'iot-energy-monitoring',
    title: { es: 'IoT Energy Efficiency Monitoring', en: 'IoT Energy Efficiency Monitoring' },
    description: {
      es: 'Sistema IoT de monitorización ambiental y energética con firmware Arduino, comunicación XBee/serie y concentrador en Raspberry Pi.',
      en: 'IoT environmental and energy monitoring system using Arduino firmware, XBee/serial communication, and a Raspberry Pi concentrator.',
    },
    longDescription: {
      es: 'Proyecto de ingeniería IoT que despliega un prototipo de adquisición de medidas (temperatura, humedad, luminosidad, movimiento, corriente) para analizar la eficiencia energética.',
      en: 'An IoT engineering project implementing a measurement prototype to capture temperature, humidity, light, motion, and current data for energy-efficiency analysis.',
    },
    thumbnail: '/projects/iot-thumb.jpg',
    images: [],
    technologies: ['Java', 'Arduino', 'C++', 'Raspberry Pi', 'MQTT', 'XBee', 'JSON'],
    category: { es: 'IoT', en: 'IoT' },
    role: { es: 'Developer', en: 'Developer' },
    duration: { es: '2019', en: '2019' },
    githubUrl: 'https://github.com/amayucas/iot-energy-efficiency-monitoring',
    featured: false,
    highlights: {
      es: [
        'Arquitectura completa: sensores → Arduino → XBee → Raspberry Pi → MQTT',
        'Sensores: temperatura, humedad, luminosidad, corriente y movimiento',
        'Concentrador Java con broker MQTT y filtros JSON',
        'Proyecto académico UPM con informe técnico completo',
      ],
      en: [
        'Complete architecture: sensors → Arduino → XBee → Raspberry Pi → MQTT',
        'Sensors: temperature, humidity, light, current, and motion',
        'Java concentrator with MQTT broker and JSON filters',
        'UPM academic project with full technical report',
      ],
    },
  },
  {
    id: 'proj-5',
    slug: 'be-real-talent-app',
    title: { es: 'Be Real Talent App', en: 'Be Real Talent App' },
    description: {
      es: 'Plataforma mobile para conectar empresas con talento tecnológico. Desarrollo de funcionalidades desde las etapas iniciales del producto.',
      en: 'Mobile platform connecting companies with technology talent. Development of product features from the early stages.',
    },
    longDescription: {
      es: 'Desarrollo de parte de las funcionalidades de la aplicación Be Real Talent, una startup de Madrid que conecta empresas con perfiles tecnológicos. Trabajo en entorno ágil y entregas iterativas.',
      en: 'Development of several features for the Be Real Talent app, a Madrid startup connecting companies with technology profiles. Work was carried out in an agile environment with iterative deliveries.',
    },
    thumbnail: '/projects/beretalent-thumb.jpg',
    images: [],
    technologies: ['Android', 'Kotlin', 'iOS', 'Swift', 'REST APIs'],
    category: { es: 'Mobile App', en: 'Mobile App' },
    role: { es: 'Mobile Developer', en: 'Mobile Developer' },
    duration: { es: '2018 – 2019', en: '2018 – 2019' },
    featured: false,
    highlights: {
      es: [
        'Desarrollo responsable y en tiempo de las funcionalidades',
        'Trabajo en startup en etapas tempranas del producto',
        'Apps nativas Android e iOS',
      ],
      en: [
        'Responsible and timely delivery of product features',
        'Work in a startup during early product stages',
        'Native Android and iOS apps',
      ],
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      (typeof project.title === 'string' ? project.title : project.title.es).toLowerCase().includes(lowerQuery) ||
      (typeof project.description === 'string' ? project.description : project.description.es).toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery)),
  );
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
