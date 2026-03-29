'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Locale, t } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('locale');
    if (saved === 'es' || saved === 'en') return saved;
  }
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

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
