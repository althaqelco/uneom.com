'use client';

import { useParams } from 'next/navigation';
import { defaultLocale, locales, Locale } from '@/lib/i18n/config';

/**
 * React hook to get the current locale in client components
 * @returns Current locale string (e.g., 'en' or 'ar')
 */
export function useLocale(): Locale {
  const params = useParams();
  
  // Check if locale exists in params and is valid
  if (params && params.locale && typeof params.locale === 'string') {
    const localeParam = params.locale as string;
    // Check if localeParam is a valid locale
    if (localeParam === 'en' || localeParam === 'ar') {
      return localeParam as Locale;
    }
  }
  
  return defaultLocale;
}

/**
 * React hook to determine if the current locale is RTL
 * @returns Boolean indicating if the current locale is RTL
 */
export function useIsRTL(): boolean {
  const locale = useLocale();
  return locale === 'ar'; // Arabic is RTL
}

/**
 * React hook to get link path with the correct locale prefix
 * @param path - The path without locale prefix
 * @returns Path with locale prefix
 */
export function useLocalizedPath(path: string): string {
  const locale = useLocale();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (locale === defaultLocale) {
    return cleanPath;
  }
  
  return `/${locale}${cleanPath}`;
} 