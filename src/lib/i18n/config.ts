/**
 * Configuration for internationalization
 * Contains locale settings and language options
 */

// Supported locales
export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

// Default locale used as fallback
export const defaultLocale: Locale = 'en';

// Language constants for backward compatibility
export const LANGUAGES = {
  EN: 'en' as Locale,
  AR: 'ar' as Locale
};

// Default language
export const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Locale display names
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية'
};

// RTL locales
export const rtlLocales: Locale[] = ['ar'];

// Language direction mapping
export const LANGUAGE_DIRECTION: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ar: 'rtl'
};

// Locale metadata
export const localeMetadata: Record<Locale, { direction: 'ltr' | 'rtl'; dateFormat: string }> = {
  en: {
    direction: 'ltr',
    dateFormat: 'MM/DD/YYYY'
  },
  ar: {
    direction: 'rtl',
    dateFormat: 'DD/MM/YYYY'
  }
};

// Default page title format
export const defaultTitleTemplate = '%s | UNEOM';

/**
 * Check if a language is RTL
 */
export const isRTL = (lang: Locale): boolean => LANGUAGE_DIRECTION[lang] === 'rtl';

/**
 * Get language code from path
 */
export const getLanguageFromPath = (pathname: string): Locale => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return defaultLocale;
};

/**
 * Change language in path
 */
export const changeLanguageInPath = (currentPath: string, newLang: Locale): string => {
  const currentLang = getLanguageFromPath(currentPath);
  
  if (currentLang === defaultLocale) {
    // Path doesn't have language prefix
    return `/${newLang}${currentPath}`;
  } else {
    // Replace language in path
    return currentPath.replace(`/${currentLang}`, newLang === defaultLocale ? '' : `/${newLang}`);
  }
};

// Language URLs mapping for hreflang tags
export const languageURLs: Record<Locale, string> = {
  en: 'https://uneom.com',
  ar: 'https://uneom.com/ar'
}; 