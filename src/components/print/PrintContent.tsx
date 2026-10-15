'use client';

import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skillCategories, getSkillsByCategory, languages } from '@/data/skills';
import { education, certifications } from '@/data/education';
import { PrintButton } from '@/components/ui/PrintButton';
import { useLanguage } from '@/lib/LanguageContext';
import { formatDateLocale } from '@/lib/date';
import { getLocalizedValue } from '@/lib/localized';

export function PrintContent() {
  const { t, locale } = useLanguage();
  const formatDate = (date: string) => formatDateLocale(date, locale);

  const levelLabels: Record<string, Record<string, string>> = {
    es: { Native: 'Nativo', Professional: 'Profesional', Basic: 'Básico' },
    en: { Native: 'Native', Professional: 'Professional', Basic: 'Basic' },
  };

  const title = getLocalizedValue(profile.title, locale) ?? profile.name;
  const location = getLocalizedValue(profile.location, locale) ?? '';
  const summary = getLocalizedValue(profile.summary, locale) ?? '';

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black print:p-0 print:pt-8">
      {/* Header */}
      <header className="print-header mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold mb-1">{profile.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{profile.email}</span>
          {profile.phone && (
            <>
              <span>&bull;</span>
              <span>{profile.phone}</span>
            </>
          )}
          <span>&bull;</span>
          <span>{location}</span>
          {profile.website && (
            <>
              <span>&bull;</span>
              <span>{profile.website}</span>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">{t('print.summary')}</h2>
        <p className="text-gray-700">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">{t('print.experience')}</h2>
        <div className="space-y-4">
          {experience.map((exp) => {
            const expTitle = getLocalizedValue(exp.title, locale) ?? exp.company;
            const expLocation = getLocalizedValue(exp.location, locale) ?? '';
            const achievements = getLocalizedValue(exp.achievements, locale) ?? [];

            return (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{expTitle}</h3>
                    <p className="text-gray-600">{exp.company} &bull; {expLocation}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatDate(exp.startDate)} &ndash; {exp.current ? t('experience.present') : formatDate(exp.endDate!)}
                  </span>
                </div>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                  {achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            );
          })}
