import type { Localized } from '@/lib/localized';

export type LocalizedText = Localized<string>;
export type LocalizedTextList = Localized<string[]>;

export interface Experience {
  id: string;
  title: string | LocalizedText;
  company: string;
  companyLogo?: string;
  location: string | LocalizedText;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string | LocalizedText;
  achievements: string[] | LocalizedTextList;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 'exp-1',
    title: {
      es: 'Senior Mobile Developer (Android & iOS)',
      en: 'Senior Mobile Developer (Android & iOS)',
    },
    company: 'Carrefour España',
    companyLogo: '/logos/carrefour.png',
    location: {
      es: 'Madrid, España',
      en: 'Madrid, Spain',
    },
    type: 'full-time',
    startDate: '2020-01',
    current: true,
    description: {
      es: 'Desarrollo y mantenimiento de las aplicaciones móviles de Carrefour España para Android e iOS, contribuyendo a la transformación digital del retailer líder en Europa.',
      en: 'Development and maintenance of Carrefour Spain mobile applications for Android and iOS, contributing to the digital transformation of the leading retailer in Europe.',
    },
    achievements: {
      es: [
        'Desarrollo de funcionalidades clave en las apps Android e iOS con millones de usuarios activos',
        'Implementación de arquitecturas limpias (MVVM, Clean Architecture) mejorando la mantenibilidad del código',
        'Integración con plataformas de IA y nuevas tecnologías para la experiencia de compra digital',
        'Colaboración en la estrategia de transformación digital de Carrefour España',
        'Impulso de buenas prácticas de desarrollo mobile en el equipo técnico',
      ],
      en: [
        'Development of key features in Android and iOS apps with millions of active users',
        'Implementation of clean architectures (MVVM, Clean Architecture) to improve code maintainability',
        'Integration with AI platforms and new technologies to improve the digital shopping experience',
        'Collaboration in Carrefour Spain’s digital transformation strategy',
        'Promotion of mobile development best practices within the technical team',
      ],
    },
    technologies: ['Kotlin', 'Swift', 'Android', 'iOS', 'Jetpack Compose', 'SwiftUI', 'React Native', 'Google Cloud', 'CI/CD'],
  },
  {
    id: 'exp-2',
    title: {
      es: 'Android Developer',
      en: 'Android Developer',
    },
    company: 'IMbox.me',
    companyLogo: '/logos/imbox.png',
    location: {
      es: 'Madrid, España',
      en: 'Madrid, Spain',
    },
    type: 'full-time',
    startDate: '2020-02',
    endDate: '2021-10',
    current: false,
    description: {
      es: 'Desarrollador y diseñador de la aplicación Android. Encargado de lidiar con varios equipos de desarrolladores.',
      en: 'Android developer and designer for the company’s application, coordinating with multiple development teams.',
    },
    achievements: {
      es: [
        'Desarrollo y diseño completo de la aplicación Android de mensajería empresarial',
        'Coordinación con múltiples equipos de desarrollo en un entorno ágil',
        'Más información sobre el servicio y enlaces a apps de clientes en https://www.imbox.me',
      ],
      en: [
        'Complete design and development of the company’s Android messaging application',
        'Coordination with multiple development teams in an agile environment',
        'More information about the service and links to client apps at https://www.imbox.me',
      ],
    },
    technologies: ['Android SDK', 'Java', 'Android'],
  },
  {
    id: 'exp-3',
    title: {
      es: 'Mentor',
      en: 'Mentor',
    },
    company: 'Telefónica',
    companyLogo: '/logos/telefonica.png',
    location: {
      es: 'Madrid y alrededores, España',
      en: 'Madrid area, Spain',
    },
    type: 'part-time',
    startDate: '2019-10',
    endDate: '2020-02',
    current: false,
    description: {
      es: 'Ponente en las Escuelas Talentum de Telefónica, compartiendo mi experiencia y visión sobre el futuro de la innovación en las escuelas.',
      en: 'Speaker at Telefónica Talentum Schools, sharing my experience and vision about the future of innovation in education.',
    },
    achievements: {
      es: [
        'Ponencias en Escuelas Talentum de Telefónica',
        'Mentoría a jóvenes talentos en innovación y tecnología',
        'Divulgación sobre el futuro de la innovación en la educación',
      ],
      en: [
        'Talks at Telefónica Talentum Schools',
        'Mentoring young talent in innovation and technology',
        'Dissemination of innovation trends in education',
      ],
    },
    technologies: ['Mentoring', 'Innovation', 'Education'],
  },
  {
    id: 'exp-4',
    title: {
      es: 'Creador de Contenido',
      en: 'Content Creator',
    },
    company: 'TechGround',
    companyLogo: '/logos/techground.png',
    location: {
      es: 'Área metropolitana de Madrid',
      en: 'Madrid metropolitan area',
    },
    type: 'freelance',
    startDate: '2014-11',
    endDate: '2019-09',
    current: false,
    description: {
      es: 'Periodista / Analista de la industria cubriendo eventos, noticias y entrevistas sobre el mundo mobile.',
      en: 'Journalist / industry analyst covering events, news, and interviews about the mobile world.',
    },
    achievements: {
      es: [
        'Cobertura de eventos y conferencias del sector mobile',
        'Análisis de la industria y tendencias tecnológicas',
        'Entrevistas a profesionales y líderes del sector tecnológico',
      ],
      en: [
        'Coverage of mobile industry events and conferences',
        'Analysis of industry trends and technological developments',
        'Interviews with professionals and leaders from the tech sector',
      ],
    },
    technologies: ['Tech journalism', 'Industry analysis', 'Digital content'],
  },
  {
    id: 'exp-5',
    title: {
      es: 'Programador de Software',
      en: 'Software Developer',
    },
    company: 'Be Real Talent',
    companyLogo: '/logos/berealtalent.svg',
    location: {
      es: 'Madrid, España',
      en: 'Madrid, Spain',
    },
    type: 'full-time',
    startDate: '2017-03',
    endDate: '2018-11',
    current: false,
    description: {
      es: 'Desarrollo de funcionalidades e interfaces de la plataforma. Trabajando en una amplia variedad de proyectos.',
      en: 'Development of platform features and interfaces across a wide variety of projects.',
    },
    achievements: {
      es: [
        'Desarrollo de funcionalidades e interfaces de la plataforma',
        'Trabajo en una amplia variedad de proyectos',
        'Contribución al desarrollo de la plataforma de conexión entre empresas y talento',
      ],
      en: [
        'Development of platform features and interfaces',
        'Work across a wide range of projects',
        'Contribution to the platform connecting companies with talent',
      ],
    },
    technologies: ['REST APIs', 'Git', 'JavaScript'],
  },
];

export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) => (exp.endDate ? new Date(exp.endDate).getTime() : 0)),
        ),
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365),
  );
  return years;
}

export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
}

export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mes${remainingMonths !== 1 ? 'es' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} año${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} año${years !== 1 ? 's' : ''} ${remainingMonths} mes${remainingMonths !== 1 ? 'es' : ''}`;
  }
}
