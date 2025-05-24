/**
 * I18n Configuration for UNEOM
 * 
 * This configuration supports bilingual setup with English and Arabic
 * following recommendations from scramefrog.md
 */

export type Locale = 'en' | 'ar';

export interface LocaleConfig {
  code: Locale;
  hrefLang: string;
  name: string;
  direction: 'ltr' | 'rtl';
  countryCode: string;
  dateFormat: string;
  defaultTitle: string;
}

// Available locales
export const locales: Record<Locale, LocaleConfig> = {
  en: {
    code: 'en',
    hrefLang: 'en-SA',
    name: 'English',
    direction: 'ltr',
    countryCode: 'SA',
    dateFormat: 'MM/DD/YYYY',
    defaultTitle: 'UNEOM'
  },
  ar: {
    code: 'ar',
    hrefLang: 'ar-SA',
    name: 'العربية',
    direction: 'rtl',
    countryCode: 'SA',
    dateFormat: 'DD/MM/YYYY',
    defaultTitle: 'يونيوم'
  }
};

// Export LANGUAGES and DEFAULT_LANGUAGE for backward compatibility
export const LANGUAGES = {
  EN: 'en' as Locale,
  AR: 'ar' as Locale
};

export const DEFAULT_LANGUAGE: Locale = 'en';

// Check if a language is RTL
export const isRTL = (lang: string): boolean => {
  return lang === 'ar';
};

// Default locale
export const defaultLocale: Locale = 'en';

// Base URLs for each locale
export const localeBaseUrls = {
  en: 'https://uneom.com',
  ar: 'https://uneom.com/ar'
};

/**
 * Get alternate URL for the opposite language
 * @param currentUrl Current page URL
 * @param currentLocale Current locale (en/ar)
 * @returns URL for the page in the alternate language
 */
export function getAlternateUrl(currentUrl: string, currentLocale: Locale): string {
  try {
    const url = new URL(currentUrl);
    const pathname = url.pathname;
    
    // Get the target locale
    const targetLocale = currentLocale === 'en' ? 'ar' : 'en';
    
    // Generate the alternate path
    let alternatePath: string;
    
    if (currentLocale === 'en') {
      // English to Arabic - add /ar/ prefix
      alternatePath = `/ar${pathname}`;
    } else {
      // Arabic to English - remove /ar/ prefix
      alternatePath = pathname.replace(/^\/ar/, '');
    }
    
    // Ensure the path ends with a trailing slash
    if (!alternatePath.endsWith('/')) {
      alternatePath += '/';
    }
    
    // Build the full URL
    return `${localeBaseUrls[targetLocale]}${alternatePath}`;
  } catch (error) {
    console.error('Error generating alternate URL:', error);
    return currentLocale === 'en' ? localeBaseUrls.ar : localeBaseUrls.en;
  }
}

/**
 * Get locale from pathname
 * @param pathname URL pathname
 * @returns Detected locale
 */
export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith('/ar') ? 'ar' : 'en';
}

export default {
  locales,
  defaultLocale,
  localeBaseUrls,
  getAlternateUrl,
  getLocaleFromPathname
}; 