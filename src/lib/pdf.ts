import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skills, skillCategories, getSkillsByCategory, languages } from '@/data/skills';
import { education, certifications } from '@/data/education';
import { getLocalizedValue } from '@/lib/localized';
import type { Locale } from '@/lib/translations';

// Helper to format dates
export function formatDate(date: string, locale: Locale = 'es'): string {
  return new Date(date + '-01').toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    month: 'short',
    year: 'numeric',
  });
}

// Generate plain text resume for simple downloads
export function generateTextResume(locale: Locale = 'es'): string {
  const lines: string[] = [];
  const title = getLocalizedValue(profile.title, locale) ?? profile.name;
  const location = getLocalizedValue(profile.location, locale) ?? '';
  const summary = getLocalizedValue(profile.summary, locale) ?? '';
  
  // Header
  lines.push(profile.name.toUpperCase());
  lines.push(title);
  lines.push('');
  lines.push(locale === 'es' ? `Correo: ${profile.email} | Teléfono: ${profile.phone}` : `Email: ${profile.email} | Phone: ${profile.phone}`);
  lines.push(locale === 'es' ? `Ubicación: ${location} | Sitio web: ${profile.website}` : `Location: ${location} | Website: ${profile.website}`);
  lines.push('');
  lines.push('═'.repeat(60));
  lines.push('');
  
  // Summary
  lines.push(locale === 'es' ? 'RESUMEN' : 'SUMMARY');
  lines.push('-'.repeat(40));
  lines.push(summary);
  lines.push('');
  
  // Experience
  lines.push(locale === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE');
  lines.push('-'.repeat(40));
  experience.forEach((exp) => {
    const expTitle = getLocalizedValue(exp.title, locale) ?? exp.company;
    const expLoc = getLocalizedValue(exp.location, locale) ?? '';
    const achievements = getLocalizedValue(exp.achievements, locale) ?? [];
    lines.push(`${expTitle} ${locale === 'es' ? 'en' : 'at'} ${exp.company}`);
    lines.push(`${formatDate(exp.startDate, locale)} - ${exp.current ? (locale === 'es' ? 'Actualidad' : 'Present') : formatDate(exp.endDate!, locale)}`);
    lines.push(`${expLoc} | ${exp.type}`);
    achievements.forEach((achievement) => {
      lines.push(`  • ${achievement}`);
    });
    lines.push('');
  });
  
  // Skills
  lines.push(locale === 'es' ? 'HABILIDADES' : 'SKILLS');
  lines.push('-'.repeat(40));
  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      lines.push(`${category}: ${categorySkills.map((s) => s.name).join(', ')}`);
    }
  });
  lines.push('');
  
  // Education
  lines.push(locale === 'es' ? 'EDUCACIÓN' : 'EDUCATION');
  lines.push('-'.repeat(40));
  education.forEach((edu) => {
    const degree = getLocalizedValue(edu.degree, locale) ?? '';
    const field = getLocalizedValue(edu.field, locale) ?? '';
    const school = getLocalizedValue(edu.school, locale) ?? '';
    const eduLoc = getLocalizedValue(edu.location, locale) ?? '';
    lines.push(`${degree}${field ? ` ${locale === 'es' ? 'en' : 'in'} ${field}` : ''}`);
    lines.push(`${school}, ${eduLoc} (${edu.endYear})`);
    if (edu.gpa) lines.push(locale === 'es' ? `Promedio: ${edu.gpa}` : `GPA: ${edu.gpa}`);
    lines.push('');
  });
  
  // Certifications
  lines.push(locale === 'es' ? 'CERTIFICACIONES' : 'CERTIFICATIONS');
  lines.push('-'.repeat(40));
  certifications.forEach((cert) => {
    const certName = getLocalizedValue(cert.name, locale) ?? '';
    const certIssuer = getLocalizedValue(cert.issuer, locale) ?? '';
    lines.push(`${certName} - ${certIssuer} (${formatDate(cert.date, locale)})`);
  });
  lines.push('');
  
  // Languages
  lines.push(locale === 'es' ? 'IDIOMAS' : 'LANGUAGES');
  lines.push('-'.repeat(40));
  lines.push(languages.map((lang) => {
    const langName = getLocalizedValue(lang.name, locale) ?? '';
    return `${langName} (${lang.level})`;
  }).join(', '));
  
  return lines.join('\n');
}

// Export resume data as JSON for external PDF services
export function getResumeData() {
  return {
    profile,
    experience,
    skills,
    skillCategories,
    education,
    certifications,
    languages,
  };
}
