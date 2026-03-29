'use client';

import { Container, Section } from '@/components/ui';
import { ProjectGrid } from '@/components/portfolio';
import { useLanguage } from '@/lib/LanguageContext';

export function PortfolioContent() {
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
