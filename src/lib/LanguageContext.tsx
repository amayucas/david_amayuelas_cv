'use client';

import { createContext, useContext, useState, useEffect, useCallback, startTransition, ReactNode } from 'react';
import { Locale, t } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved === 'es' || saved === 'en') {
      startTransition(() => setLocale(saved));
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => {
      const newLocale: Locale = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
      return newLocale;
    });
  }, []);

  const translate = useCallback((key: string) => t(key, locale), [locale]);

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
