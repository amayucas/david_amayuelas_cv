import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import { PrintContent } from '@/components/print/PrintContent';

export const metadata: Metadata = {
  title: `Resume | ${profile.name}`,
  description: 'Print-friendly resume version',
};

export default function PrintPage() {
  return <PrintContent />;
}
