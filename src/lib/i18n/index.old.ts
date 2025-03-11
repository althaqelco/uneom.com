import en from './translations/en';
import ar from './translations/ar';

// Define the Translation type based on the structure of our translation files
export type TranslationSEO = {
  title: string;
  description: string;
  keywords: string;
};

export type TranslationObject = {
  common: Record<string, any>;
  seo: Record<string, any>;
  pages: Record<string, any>;
};

export const translations: Record<SupportedLocale, TranslationObject> = {
  en,
  ar
};

export type SupportedLocale = 'en' | 'ar';

export const isRTL = (locale: string): boolean => {
  return locale === 'ar';
};

export const getDirection = (locale: string): 'ltr' | 'rtl' => {
  return isRTL(locale) ? 'rtl' : 'ltr';
};

/**
 * Get translation object based on locale
 */
export const getTranslation = (locale: string = 'en'): TranslationObject => {
  return translations[locale as SupportedLocale] || translations.en;
};

/**
 * Get SEO metadata for a specific page in the current locale
 */
export const getSEOMetadata = (locale: string = 'en', page: string, subpage?: string): TranslationSEO => {
  const t = getTranslation(locale);
  
  // Get the specific page metadata
  if (subpage && t.seo[page] && t.seo[page][subpage]) {
    return t.seo[page][subpage] as TranslationSEO;
  }
  
  // Get main page metadata
  if (t.seo[page]) {
    return t.seo[page] as TranslationSEO;
  }
  
  // Fallback to home page metadata
  return t.seo.home as TranslationSEO;
};

/**
 * Generate alternate language URLs for hreflang SEO
 */
export const getAlternateLanguages = (currentPath: string, currentLocale: string = 'en') => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  
  type AlternateLanguage = {
    lang: string;
    href: string;
  };
  
  // Generate URLs for all supported locales
  const alternates = Object.keys(translations).map(locale => {
    // Skip current locale
    if (locale === currentLocale) return null;
    
    // For English (default locale)
    if (locale === 'en') {
      // If current path is Arabic home page, return English home
      if (currentPath === '/ar') {
        return {
          lang: 'en',
          href: `${baseUrl}/`
        };
      }
      
      // Otherwise remove 'ar' prefix
      const englishPath = currentPath.replace(/^\/ar/, '');
      return {
        lang: 'en',
        href: `${baseUrl}${englishPath}`
      };
    }
    
    // For Arabic
    if (locale === 'ar') {
      // If current path is home page, return Arabic home
      if (currentPath === '/') {
        return {
          lang: 'ar',
          href: `${baseUrl}/ar`
        };
      }
      
      // Otherwise add 'ar' prefix
      return {
        lang: 'ar',
        href: `${baseUrl}/ar${currentPath}`
      };
    }
    
    return null;
  }).filter(Boolean) as AlternateLanguage[];
  
  return alternates;
};

export default translations; 