/**
 * =============================================================================
 * EDUCATION DATA - Academic History & Certifications
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains education, certifications, and awards data.
 *
 * TO CUSTOMIZE:
 * 1. Replace example entries with your actual education
 * 2. List education in reverse chronological order (newest first)
 * 3. Add certifications if you have any professional certifications
 * 4. Include relevant awards and honors
 *
 * TO ADD A NEW EDUCATION ENTRY:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'edu-3', 'edu-4')
 * - Include start and end years
 * - GPA is optional (omit if you prefer not to share)
 *
 * TO REMOVE AN ENTRY:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Education entry type definition
 */
export interface Education {
  /** Unique identifier (e.g., 'edu-1', 'edu-2') */
  id: string;

  /**
   * Degree type
   * Examples: "Bachelor of Science", "Master of Arts", "Ph.D.", "Associate's"
   */
  degree: string;

  /**
   * Field of study
   * Examples: "Computer Science", "Business Administration", "Design"
   */
  field: string;

  /** School/University name */
  school: string;

  /**
   * School logo path (optional)
   * - Use '/logos/school.png' for local image
   * - Use full URL for external image
   */
  schoolLogo?: string;

  /** Location (City, State/Country) */
  location: string;

  /** Start year */
  startYear: number;

  /** End year (or expected graduation year) */
  endYear: number;

  /**
   * GPA (optional)
   * Format: "3.8/4.0" or "First Class Honours"
   */
  gpa?: string;

  /**
   * Academic honors (optional)
   * Examples: ["Magna Cum Laude", "Dean's List", "Valedictorian"]
   */
  honors?: string[];

  /**
   * Relevant courses (optional)
   * List courses relevant to your career
   */
  relevantCourses?: string[];

  /**
   * Description (optional)
   * Additional information about the education entry
   */
  description?: string;
}

/**
 * Certification entry type definition
 */
export interface Certification {
  /** Unique identifier (e.g., 'cert-1', 'cert-2') */
  id: string;

  /** Certification name */
  name: string;

  /** Issuing organization */
  issuer: string;

  /**
   * Issuer logo path (optional)
   * - Use '/logos/issuer.png' for local image
   * - Use full URL for external image
   */
  issuerLogo?: string;

  /**
   * Date obtained in YYYY-MM format
   * Example: '2023-06'
   */
  date: string;

  /**
   * Expiration date in YYYY-MM format (optional)
   * Omit for certifications that don't expire
   */
  expirationDate?: string;

  /**
   * Credential ID (optional)
   * The unique identifier from the issuing organization
   */
  credentialId?: string;

  /**
   * Verification URL (optional)
   * Link to verify the certification
   */
  credentialUrl?: string;
}

/**
 * Award entry type definition
 */
export interface Award {
  /** Unique identifier (e.g., 'award-1', 'award-2') */
  id: string;

  /** Award title */
  title: string;

  /** Issuing organization or event */
  issuer: string;

  /** Date received (year or YYYY-MM format) */
  date: string;

  /** Description of the award (optional) */
  description?: string;
}

/**
 * =============================================================================
 * YOUR EDUCATION - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual education.
 * List in reverse chronological order (most recent first).
 */
export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Grado en Ingeniería del Software',
    field: '',
    school: 'Universidad Politécnica de Madrid',
    schoolLogo: '/logos/upm.png',
    location: 'Madrid, España',
    description: 'Asociación de estudiantes-Nostromus',
    startYear: 2015,
    endYear: 2020,
    relevantCourses: [
      'Programación Orientada a Objetos',
      'Sistemas Operativos',
      'Redes de Computadores',
      'Ingeniería del Software',
      'Bases de Datos',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Becario',
    field: 'Ingeniería de Software',
    school: 'Tongji University',
    schoolLogo: '/logos/tongji.svg',
    location: 'Shanghai, China',
    startYear: 2018,
    endYear: 2019,
    description: 'Beca de un semestre en la Tongji University.',
  },
];

/**
 * =============================================================================
 * YOUR CERTIFICATIONS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Add your professional certifications here.
 * Remove this array or leave empty if you have no certifications.
 */
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Certificado de Desarrollo con IA',
    issuer: 'BIG school',
    date: '2026-03',
  },
  {
    id: 'cert-2',
    name: 'Open Water Diver',
    issuer: 'PADI',
    date: '2025-05',
  },
  {
    id: 'cert-3',
    name: 'Google Cloud Fundamentals: Core Infrastructure en Español',
    issuer: 'Coursera',
    date: '2022-11',
    credentialId: '44LW6DYXEGKG',
  },
  {
    id: 'cert-4',
    name: 'Preparing for Your Professional Cloud Security Engineer Journey',
    issuer: 'Coursera',
    date: '2022-11',
    credentialId: 'C2M4U67L7C4V',
  },
  {
    id: 'cert-5',
    name: 'Piloto de RPAS',
    issuer: 'EASA - European Union Aviation Safety Agency',
    date: '2020-12',
  },
  {
    id: 'cert-6',
    name: 'Django + Python & REST',
    issuer: 'KeepCoding®',
    date: '2018-12',
    credentialId: 'cert_k5spg8s3',
  },
  {
    id: 'cert-7',
    name: 'Advanced Kotlin',
    issuer: 'KeepCoding®',
    date: '2018-07',
    credentialId: 'cert_h1j7pz6w',
  },
  {
    id: 'cert-8',
    name: 'JavaScript + Node.js + Express + MongoDB',
    issuer: 'KeepCoding®',
    date: '2018-01',
    credentialId: 'cert_2j3cpjkx',
  },
  {
    id: 'cert-9',
    name: 'Mobile Apps',
    issuer: 'Actívate con Google',
    date: '2017-02',
  },
  {
    id: 'cert-10',
    name: 'Certificación B2 en Lengua Inglesa',
    issuer: 'TOEIC® Program',
    date: '2016-11',
    expirationDate: '2018-11',
  },
];

/**
 * =============================================================================
 * YOUR AWARDS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Add awards, honors, or recognition you've received.
 * Remove this array or leave empty if you have no awards.
 */
export const awards: Award[] = [];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get highest/most recent education
 */
export function getLatestEducation(): Education | undefined {
  return education.length > 0 ? education[0] : undefined;
}

/**
 * Get active (non-expired) certifications
 */
export function getActiveCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return true;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate > now;
  });
}

/**
 * Get expired certifications
 */
export function getExpiredCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return false;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate <= now;
  });
}

/**
 * Check if any certifications exist
 */
export function hasCertifications(): boolean {
  return certifications.length > 0;
}

/**
 * Check if any awards exist
 */
export function hasAwards(): boolean {
  return awards.length > 0;
}

/**
 * Format education as a string
 */
export function formatEducation(edu: Education): string {
  return `${edu.degree} en ${edu.field} de ${edu.school} (${edu.endYear})`;
}

/**
 * Check if certification is expiring soon (within 6 months)
 */
export function isCertificationExpiringSoon(cert: Certification): boolean {
  if (!cert.expirationDate) return false;

  const now = new Date();
  const expDate = new Date(cert.expirationDate + '-01');
  const sixMonthsFromNow = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);

  return expDate <= sixMonthsFromNow && expDate > now;
}
