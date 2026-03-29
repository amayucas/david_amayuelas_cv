const monthsEs = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDateLocale(dateString: string, locale: 'es' | 'en'): string {
  const [year, month] = dateString.split('-').map(Number);
  const months = locale === 'es' ? monthsEs : monthsEn;
  return `${months[month - 1]} ${year}`;
}
