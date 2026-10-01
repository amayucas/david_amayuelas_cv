/**
 * =============================================================================
 * PROFILE DATA - Personal Information
 * =============================================================================
 */

import type { Localized } from '@/lib/localized';

export type LocalizedText = Localized<string>;
export type LocalizedTextList = Localized<string[]>;

export interface Profile {
  name: string;
  title: string | LocalizedText;
  photo: string;
  email: string;
  phone?: string;
  location: string | LocalizedText;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  summary: string | LocalizedText;
  highlights: string[] | LocalizedTextList;
}

export const profile: Profile = {
  name: 'David Amayuelas Díaz',
  title: {
    es: 'Senior Mobile Developer (Android & iOS)',
    en: 'Senior Mobile Developer (Android & iOS)',
  },
  photo: '/images/profile.jpg',
  email: 'amayudance@gmail.com',
  phone: '+34 682 131 939',
  location: {
    es: 'Madrid, España',
    en: 'Madrid, Spain',
  },
  linkedin: 'https://linkedin.com/in/amayuelas',
  github: 'https://github.com/amayucas',
  summary: {
    es: 'Si buscas un desarrollador mobile con una sólida base tecnológica y pasión por crear experiencias digitales de primer nivel, has llegado al lugar correcto. Senior Mobile Developer con experiencia en apps Android e iOS, arquitectura limpia y experiencia de usuario de alto impacto.',
    en: 'If you are looking for a mobile developer with a solid technical foundation and a passion for creating top-tier digital experiences, you have come to the right place. Senior Mobile Developer with experience in Android and iOS apps, clean architecture, and high-impact user experiences.',
  },
  highlights: {
    es: [
      'Senior Mobile Developer en Carrefour España',
      'Desarrollo de apps Android e iOS con millones de usuarios',
      'Especialista en Kotlin, Swift y React Native',
      'Formación continua: IA, Cloud y arquitecturas modernas',
    ],
    en: [
      'Senior Mobile Developer at Carrefour Spain',
      'Development of Android and iOS apps with millions of users',
      'Specialist in Kotlin, Swift and React Native',
      'Continuous learning: AI, Cloud and modern architectures',
    ],
  },
};

export function getProfileSocialLinks(): Array<{ platform: string; url: string }> {
  const links: Array<{ platform: string; url: string }> = [];

  if (profile.github) links.push({ platform: 'github', url: profile.github });
  if (profile.linkedin) links.push({ platform: 'linkedin', url: profile.linkedin });
  if (profile.twitter) links.push({ platform: 'twitter', url: profile.twitter });
  if (profile.website) links.push({ platform: 'website', url: profile.website });

  return links;
}

export function hasProfilePhoto(): boolean {
  return Boolean(profile.photo && profile.photo.length > 0);
}

export function getProfileInitials(): string {
  return profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
