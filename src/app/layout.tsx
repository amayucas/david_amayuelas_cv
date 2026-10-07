import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer, SideNav } from '@/components/layout';
import { profile } from '@/data/profile';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const defaultTitle = typeof profile.title === 'string' ? profile.title : profile.title.es;
const defaultSummary = typeof profile.summary === 'string' ? profile.summary : profile.summary.es;

export const metadata: Metadata = {
  title: `${profile.name} | ${defaultTitle}`,
  description: defaultSummary,
  keywords: ['resume', 'portfolio', 'developer', 'software engineer'],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${defaultTitle}`,
    description: defaultSummary,
    type: 'profile',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <LanguageProvider>
          <Header />
          <SideNav />
          <main className="pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
