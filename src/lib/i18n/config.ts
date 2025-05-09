/**
 * Configuration for internationalization
 * Contains locale settings and language options
 * 
 * URL Structure (per roadmap.md):
 * - English (default): No prefix (e.g., /about/)
 * - Arabic: /ar/ prefix (e.g., /ar/about/)
 * - All URLs should have trailing slashes
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
 * Only 'ar' is considered a locale prefix
 * English (default) has no prefix
 */
export const getLanguageFromPath = (pathname: string): Locale => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  if (firstSegment === 'ar') {
    return 'ar';
  }
  
  return defaultLocale;
};

/**
 * Change language in path
 * Follows the URL structure:
 * - English (default): No prefix
 * - Arabic: /ar/ prefix
 */
export const changeLanguageInPath = (currentPath: string, newLang: Locale): string => {
  const currentLang = getLanguageFromPath(currentPath);
  
  if (currentLang === defaultLocale) {
    // Current path is English (no prefix)
    if (newLang === defaultLocale) {
      // Stay in English
      return currentPath;
    } else {
      // Switch to Arabic
      return `/ar${currentPath === '/' ? '' : currentPath}`;
    }
  } else {
    // Current path is Arabic (with /ar/ prefix)
    if (newLang === defaultLocale) {
      // Switch to English (remove /ar/ prefix)
      return currentPath.replace(/^\/ar/, '');
    } else {
      // Stay in Arabic
      return currentPath;
    }
  }
};

// Language URLs mapping for hreflang tags
export const languageURLs: Record<Locale, string> = {
  en: 'https://uneom.com',
  ar: 'https://uneom.com/ar'
}; 