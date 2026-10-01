'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, User, CheckCircle } from 'lucide-react';
import { Badge, Button, Card, CardContent } from '@/components/ui';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/lib/LanguageContext';
import { getLocalizedValue } from '@/lib/localized';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, locale } = useLanguage();

  const title = getLocalizedValue(project.title, locale) ?? 'Project';
  const description = getLocalizedValue(project.longDescription, locale) ?? getLocalizedValue(project.description, locale) ?? '';
  const highlights = getLocalizedValue(project.highlights, locale) ?? [];
  const category = getLocalizedValue(project.category, locale) ?? project.category;
  const role = getLocalizedValue(project.role, locale) ?? project.role;
  const duration = getLocalizedValue(project.duration, locale) ?? project.duration;

  return (
    <div>
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {t('portfolio.backToPortfolio')}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-64 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden mb-8"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-6xl font-bold">
                {title.substring(0, 2).toUpperCase()}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-6"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('portfolio.keyHighlights')}
            </h2>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('portfolio.technologiesUsed')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('portfolio.role')}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{String(role)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('portfolio.duration')}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{String(duration)}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t('portfolio.category')}</p>
                <Badge variant="secondary" size="md">{String(category)}</Badge>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                {project.liveUrl && (
                  <Button href={project.liveUrl} className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('portfolio.viewLiveSite')}
                  </Button>
                )}
                {project.githubUrl && (
                  <Button href={project.githubUrl} variant="outline" className="w-full">
                    <Github className="w-4 h-4 mr-2" />
                    {t('portfolio.viewSource')}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
