'use client';

import { Badge } from '@/components/ui';
import type { Experience } from '@/data/experience';
import { useLanguage } from '@/lib/LanguageContext';
import { getLocalizedValue } from '@/lib/localized';
import { formatDateLocale } from '@/lib/date';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { t, locale } = useLanguage();
  const formatDate = (date: string) => formatDateLocale(date, locale);

  const title = getLocalizedValue(experience.title, locale) ?? experience.company;
  const location = getLocalizedValue(experience.location, locale) ?? experience.company;
  const description = getLocalizedValue(experience.description, locale) ?? '';
  const achievements = getLocalizedValue(experience.achievements, locale) ?? [];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={experience.company}
              className="object-contain w-full h-full p-1"
            />
          ) : (
            <span className="text-sm font-bold text-gray-400 dark:text-gray-500">
              {experience.company.substring(0, 2).toUpperCase()}
            </span>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {experience.company}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {formatDate(experience.startDate)} –{' '}
            {experience.current ? t('experience.present') : formatDate(experience.endDate!)}
            {' · '}{location}
            {' · '}<span>{t(`employment.${experience.type}`)}</span>
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>

      <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700 dark:text-gray-300">
        {achievements.map((achievement, i) => (
          <li key={i} className="text-sm">{achievement}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" size="sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
