import type { Locale } from '@/lib/translations';

export type Localized<T> = {
  es: T;
  en: T;
};

export function getLocalizedValue<T>(
  value: T | Localized<T> | undefined,
  locale: Locale,
  fallback?: T,
): T | undefined {
  if (value === undefined) return fallback;

  if (typeof value === 'object' && value !== null && 'es' in value && 'en' in value) {
    const localized = value as Localized<T>;
    return localized[locale] ?? localized.es ?? fallback;
  }

  return value as T;
}
