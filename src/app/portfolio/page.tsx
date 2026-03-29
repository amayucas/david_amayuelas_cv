import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import { PortfolioContent } from '@/components/portfolio/PortfolioContent';

export const metadata: Metadata = {
  title: `Portfolio | ${profile.name}`,
  description: `Explore projects and work by ${profile.name}`,
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
