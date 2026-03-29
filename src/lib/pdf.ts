import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skills, skillCategories, getSkillsByCategory, languages } from '@/data/skills';
import { education, certifications } from '@/data/education';

// Helper to format dates
export function formatDate(date: string): string {
  return new Date(date + '-01').toLocaleDateString('es-ES', {
    month: 'short',
    year: 'numeric',
  });
}

// Generate plain text resume for simple downloads
export function generateTextResume(): string {
  const lines: string[] = [];
  
  // Header
  lines.push(profile.name.toUpperCase());
  lines.push(profile.title);
  lines.push('');
  lines.push(`Correo: ${profile.email} | Teléfono: ${profile.phone}`);
  lines.push(`Ubicación: ${profile.location} | Sitio web: ${profile.website}`);
  lines.push('');
  lines.push('═'.repeat(60));
  lines.push('');
  
  // Summary
  lines.push('RESUMEN');
  lines.push('-'.repeat(40));
  lines.push(profile.summary);
  lines.push('');
  
  // Experience
  lines.push('EXPERIENCIA');
  lines.push('-'.repeat(40));
  experience.forEach((exp) => {
    lines.push(`${exp.title} en ${exp.company}`);
    lines.push(`${formatDate(exp.startDate)} - ${exp.current ? 'Actualidad' : formatDate(exp.endDate!)}`);
    lines.push(`${exp.location} | ${exp.type}`);
    exp.achievements.forEach((achievement) => {
      lines.push(`  • ${achievement}`);
    });
    lines.push('');
  });
  
  // Skills
  lines.push('HABILIDADES');
  lines.push('-'.repeat(40));
  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      lines.push(`${category}: ${categorySkills.map((s) => s.name).join(', ')}`);
    }
  });
  lines.push('');
  
  // Education
  lines.push('EDUCACIÓN');
  lines.push('-'.repeat(40));
  education.forEach((edu) => {
    lines.push(`${edu.degree} en ${edu.field}`);
    lines.push(`${edu.school}, ${edu.location} (${edu.endYear})`);
    if (edu.gpa) lines.push(`Promedio: ${edu.gpa}`);
    lines.push('');
  });
  
  // Certifications
  lines.push('CERTIFICACIONES');
  lines.push('-'.repeat(40));
  certifications.forEach((cert) => {
    lines.push(`${cert.name} - ${cert.issuer} (${formatDate(cert.date)})`);
  });
  lines.push('');
  
  // Languages
  lines.push('IDIOMAS');
  lines.push('-'.repeat(40));
  lines.push(languages.map((lang) => `${lang.name} (${lang.level})`).join(', '));
  
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
