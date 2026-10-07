import type { Localized } from '@/lib/localized';

export type LocalizedText = Localized<string>;
export type LocalizedTextList = Localized<string[]>;

export interface Education {
  id: string;
  degree: string | LocalizedText;
  field: string | LocalizedText;
  school: string | LocalizedText;
  schoolLogo?: string;
  location: string | LocalizedText;
  startYear: number;
  endYear: number;
  gpa?: string;
  honors?: string[] | LocalizedTextList;
  relevantCourses?: string[] | LocalizedTextList;
  description?: string | LocalizedText;
}

export interface Certification {
  id: string;
  name: string | LocalizedText;
  issuer: string | LocalizedText;
  issuerLogo?: string;
  date: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Award {
  id: string;
  title: string | LocalizedText;
  issuer: string | LocalizedText;
  date: string;
  description?: string | LocalizedText;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: {
      es: 'Grado en Ingeniería del Software',
      en: 'Bachelor’s Degree in Software Engineering',
    },
    field: {
      es: '',
      en: '',
    },
    school: {
      es: 'Universidad Politécnica de Madrid',
      en: 'Technical University of Madrid',
    },
    schoolLogo: '/logos/upm.png',
    location: {
      es: 'Madrid, España',
      en: 'Madrid, Spain',
    },
    description: {
      es: 'Asociación de estudiantes-Nostromus',
      en: 'Student association - Nostromus',
    },
    startYear: 2015,
    endYear: 2020,
    relevantCourses: {
      es: [
        'Programación Orientada a Objetos',
        'Sistemas Operativos',
        'Redes de Computadores',
        'Ingeniería del Software',
        'Bases de Datos',
      ],
      en: [
        'Object-Oriented Programming',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Databases',
      ],
    },
  },
  {
    id: 'edu-2',
    degree: {
      es: 'Becario',
      en: 'Scholar',
    },
    field: {
      es: 'Ingeniería de Software',
      en: 'Software Engineering',
    },
    school: {
      es: 'Tongji University',
      en: 'Tongji University',
    },
    schoolLogo: '/logos/tongji.svg',
    location: {
      es: 'Shanghai, China',
      en: 'Shanghai, China',
    },
    startYear: 2018,
    endYear: 2019,
    description: {
      es: 'Beca de un semestre en la Tongji University.',
      en: 'One-semester scholarship at Tongji University.',
    },
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: {
      es: 'Certificado de Desarrollo con IA',
      en: 'AI Development Certification',
    },
    issuer: { es: 'BIG school', en: 'BIG school' },
    date: '2026-03',
  },
  {
    id: 'cert-2',
    name: { es: 'Open Water Diver', en: 'Open Water Diver' },
    issuer: { es: 'PADI', en: 'PADI' },
    date: '2025-05',
  },
  {
    id: 'cert-3',
    name: {
      es: 'Google Cloud Fundamentals: Core Infrastructure en Español',
      en: 'Google Cloud Fundamentals: Core Infrastructure',
    },
    issuer: { es: 'Coursera', en: 'Coursera' },
    date: '2022-11',
    credentialId: '44LW6DYXEGKG',
  },
  {
    id: 'cert-4',
    name: {
      es: 'Preparing for Your Professional Cloud Security Engineer Journey',
      en: 'Preparing for Your Professional Cloud Security Engineer Journey',
    },
    issuer: { es: 'Coursera', en: 'Coursera' },
    date: '2022-11',
    credentialId: 'C2M4U67L7C4V',
  },
  {
    id: 'cert-5',
    name: { es: 'Piloto de RPAS', en: 'RPAS Pilot' },
    issuer: {
      es: 'EASA - European Union Aviation Safety Agency',
      en: 'EASA - European Union Aviation Safety Agency',
    },
    date: '2020-12',
  },
  {
    id: 'cert-6',
    name: { es: 'Django + Python & REST', en: 'Django + Python & REST' },
    issuer: { es: 'KeepCoding®', en: 'KeepCoding®' },
    date: '2018-12',
    credentialId: 'cert_k5spg8s3',
  },
  {
    id: 'cert-7',
    name: { es: 'Advanced Kotlin', en: 'Advanced Kotlin' },
    issuer: { es: 'KeepCoding®', en: 'KeepCoding®' },
    date: '2018-07',
    credentialId: 'cert_h1j7pz6w',
  },
  {
    id: 'cert-8',
    name: {
      es: 'JavaScript + Node.js + Express + MongoDB',
      en: 'JavaScript + Node.js + Express + MongoDB',
    },
    issuer: { es: 'KeepCoding®', en: 'KeepCoding®' },
    date: '2018-01',
    credentialId: 'cert_2j3cpjkx',
  },
  {
    id: 'cert-9',
    name: { es: 'Mobile Apps', en: 'Mobile Apps' },
    issuer: { es: 'Actívate con Google', en: 'Actívate con Google' },
    date: '2017-02',
  },
  {
    id: 'cert-10',
    name: {
      es: 'Certificación B2 en Lengua Inglesa',
      en: 'B2 English Language Certification',
    },
    issuer: { es: 'TOEIC® Program', en: 'TOEIC® Program' },
    date: '2016-11',
    expirationDate: '2018-11',
  },
  {
    id: 'cert-11',
    name: { es: 'AI for App Building', en: 'AI for App Building' },
    issuer: { es: 'Google', en: 'Google' },
    date: '2026-06',
    credentialId: 'Y7ASFRT7ZGJY',
  },
  {
    id: 'cert-12',
    name: { es: 'AI for Data Analysis', en: 'AI for Data Analysis' },
    issuer: { es: 'Google', en: 'Google' },
    date: '2026-06',
    credentialId: 'GT2A0EX9YLUD',
  },
  {
    id: 'cert-13',
    name: { es: 'AI for Content Creation', en: 'AI for Content Creation' },
    issuer: { es: 'Google', en: 'Google' },
    date: '2026-06',
    credentialId: 'O5XJLCMV9LBH',
  },
  {
    id: 'cert-14',
    name: {
      es: 'AI for Writing and Communicating',
      en: 'AI for Writing and Communicating',
    },
    issuer: { es: 'Google', en: 'Google' },
    date: '2026-06',
    credentialId: '66GQZZ7WAQXX',
  },
  {
    id: 'cert-15',
    name: { es: 'AI for Research and Insights', en: 'AI for Research and Insights' },
    issuer: { es: 'Google', en: 'Google' },
    date: '2026-06',
    credentialId: '1AXB8CPMT0US',
  },
  {
    id: 'cert-16',
    name: {
      es: 'AI for Brainstorming and Planning',
      en: 'AI for Brainstorming and Planning',
    },
    issuer: { es: 'Google', en: 'Google' },
    date: '2026-06',
    credentialId: 'BMENNNGIRDEP',
  },
];

export const awards: Award[] = [];

export function getLatestEducation(): Education | undefined {
  return education.length > 0 ? education[0] : undefined;
}

export function getActiveCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return true;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate > now;
  });
}

export function getExpiredCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return false;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate <= now;
  });
}

export function hasCertifications(): boolean {
  return certifications.length > 0;
}

export function hasAwards(): boolean {
  return awards.length > 0;
}

export function formatEducation(edu: Education, locale: 'es' | 'en' = 'es'): string {
  const degree = typeof edu.degree === 'string' ? edu.degree : edu.degree[locale];
  const field = typeof edu.field === 'string' ? edu.field : edu.field[locale];
  const school = typeof edu.school === 'string' ? edu.school : edu.school[locale];
  const inWord = locale === 'es' ? 'en' : 'in';
  const ofWord = locale === 'es' ? 'de' : 'at';
  return `${degree}${field ? ` ${inWord} ${field}` : ''} ${ofWord} ${school} (${edu.endYear})`;
}

export function isCertificationExpiringSoon(cert: Certification): boolean {
  if (!cert.expirationDate) return false;

  const now = new Date();
  const expDate = new Date(cert.expirationDate + '-01');
  const sixMonthsFromNow = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);

  return expDate <= sixMonthsFromNow && expDate > now;
}
