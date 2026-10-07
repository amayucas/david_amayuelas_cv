'use client';

import { Container } from '@/components/ui';
import {
  ProfileHeader,
  Summary,
  ExperienceTimeline,
  SkillsSection,
  EducationSection,
  CertificationsSection,
  LanguagesSection,
} from '@/components/resume';
import { ContactSection } from '@/components/contact';
import { ProjectGrid } from '@/components/portfolio';
import { Section } from '@/components/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { VisitCounter } from '@/components/VisitCounter';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <Container size="lg" className="py-12">
      <div className="mb-6 flex justify-end">
        <VisitCounter />
      </div>

      <section id="about" className="mb-16">
        <ProfileHeader />
        <Summary />
      </section>

      <ExperienceTimeline />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />

      <Section
        id="portfolio-preview"
        title={t('portfolio.featuredProjects')}
        subtitle={t('portfolio.featuredSubtitle')}
      >
        <ProjectGrid featuredOnly limit={3} showFilters={false} />
        <div className="text-center mt-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            {t('portfolio.viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <ContactSection />
    </Container>
  );
}
