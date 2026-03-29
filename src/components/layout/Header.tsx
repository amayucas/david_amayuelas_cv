'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale, toggleLanguage } = useLanguage();

  const navItems = [
    { href: '/#about', label: t('nav.about') },
    { href: '/#experience', label: t('nav.experience') },
    { href: '/#skills', label: t('nav.skills') },
    { href: '/#education', label: t('nav.education') },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white">
            {profile.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/print" size="sm">
              <Download className="w-4 h-4 mr-2" />
              {t('nav.resume')}
            </Button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white border border-gray-300 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2 flex flex-col gap-2">
              <Button href="/print" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                {t('nav.downloadResume')}
              </Button>
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white border border-gray-300 dark:border-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Globe className="w-4 h-4" />
                {locale === 'es' ? 'English' : 'Español'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
