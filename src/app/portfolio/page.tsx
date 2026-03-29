'use client';

import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui';
import { ProjectGrid } from '@/components/portfolio';
import { profile } from '@/data/profile';
import { useLanguage } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: `Portfolio | ${profile.name}`,
  description: `Explore projects and work by ${profile.name}`,
};

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <Container size="lg" className="py-12">
      <Section
        title={t('portfolio.title')}
        subtitle={t('portfolio.subtitle')}
      >
        <ProjectGrid showFilters />
      </Section>
    </Container>
  );
}
