'use client';

import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export function VisitCounter() {
  const { t } = useLanguage();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadVisits() {
      try {
        if (typeof window !== 'undefined') {
          const hasCounted = sessionStorage.getItem('visit-counter-posted') === 'true';
          if (!hasCounted) {
            sessionStorage.setItem('visit-counter-posted', 'true');
            await fetch('/api/views', { method: 'POST' });
          }
        }

        const response = await fetch('/api/views');
        const data = (await response.json()) as { views?: number };

        if (isMounted) {
          setCount(typeof data.views === 'number' ? data.views : 0);
        }
      } catch {
        if (isMounted) {
          setCount(0);
        }
      }
    }

    loadVisits();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-300">
      <Eye className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
      <span>
        {count === null ? t('visits.loading') : `${count.toLocaleString()} ${t('visits.label')}`}
      </span>
    </div>
  );
}
