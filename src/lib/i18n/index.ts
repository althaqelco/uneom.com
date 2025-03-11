import en from './translations/en';
import ar from './translations/ar';
import { LANGUAGES, DEFAULT_LANGUAGE, isRTL } from './config';

// Interface definitions for TypeScript
export interface TranslationObject {
  [key: string]: any;
}

export interface LanguageAlternate {
  lang: string;
  href: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  alternates?: {
    canonical?: string;
    languages?: {
      [key: string]: string;
    };
  };
  [key: string]: any;
}

// Translation collections by language
const translations: { [key: string]: TranslationObject } = {
  [LANGUAGES.EN]: en,
  [LANGUAGES.AR]: ar,
};

/**
 * Get translation for a specific language
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {TranslationObject} Translation object for the language
 */
export const getTranslation = (lang = DEFAULT_LANGUAGE): TranslationObject => {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
};

/**
 * Get a specific translation key
 * @param {string} key - Dot notation path to translation key (e.g. 'navigation.home')
 * @param {string} lang - Language code
 * @returns {string} Translated text or key if translation not found
 */
export const getTranslationKey = (key: string, lang = DEFAULT_LANGUAGE): string => {
  const translation = getTranslation(lang);
  const keys = key.split('.');
  
  // Handle nested keys
  try {
    let result: any = translation;
    keys.forEach(k => {
      result = result[k];
      if (result === undefined) throw new Error('Key not found');
    });
    return result as string;
  } catch (e) {
    console.warn(`Translation key not found: ${key} for language ${lang}`);
    return key;
  }
};

/**
 * Format a date according to the current language
 * @param {Date|string} date - The date to format
 * @param {string} lang - Language code
 * @returns {string} Formatted date string
 */
export const formatDate = (date: Date | string, lang = DEFAULT_LANGUAGE): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const locale = lang === LANGUAGES.AR ? 'ar-SA' : 'en-US';
  
  try {
    return new Intl.DateTimeFormat(locale, options).format(dateObj);
  } catch (e) {
    console.warn('Error formatting date:', e);
    return String(date);
  }
};

/**
 * Get direction attribute based on language
 * @param {string} lang - Language code
 * @returns {string} 'rtl' or 'ltr'
 */
export const getLanguageDirection = (lang = DEFAULT_LANGUAGE): 'rtl' | 'ltr' => {
  return isRTL(lang) ? 'rtl' : 'ltr';
};

/**
 * Get appropriate CSS class for text alignment based on language
 * @param {string} lang - Language code
 * @returns {string} CSS class for text alignment
 */
export const getTextAlignmentClass = (lang = DEFAULT_LANGUAGE): string => {
  return isRTL(lang) ? 'text-right' : 'text-left';
};

/**
 * Generate language alternates for SEO
 * @param {string} path - Current path without language prefix
 * @returns {object} Language alternates object
 */
export const getLanguageAlternates = (path = '', locale = DEFAULT_LANGUAGE): LanguageAlternate[] => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const siteUrl = 'https://uneom.com';
  
  return [
    {
      lang: 'en',
      href: `${siteUrl}${cleanPath}`,
    },
    {
      lang: 'ar',
      href: `${siteUrl}/ar${cleanPath}`,
    },
  ];
};

/**
 * Get SEO metadata for a specific language and page
 * @param {string} locale - Language code
 * @param {string} page - Page key
 * @param {string} subpage - Optional subpage key
 * @returns {SEOMetadata} SEO metadata
 */
export const getSEOMetadata = (locale = DEFAULT_LANGUAGE, page = 'home', subpage = ''): SEOMetadata => {
  const t = getTranslation(locale);
  const siteUrl = 'https://uneom.com';
  
  // Default meta by language
  const defaultMeta: { [key: string]: SEOMetadata } = {
    'en': {
      title: 'UNEOM - Professional Uniform Solutions in Saudi Arabia',
      description: 'UNEOM provides custom uniform solutions for healthcare, aviation, hospitality and corporate sectors across Saudi Arabia.',
      keywords: 'uniforms, corporate uniforms, medical scrubs, saudi arabia, uneom, professional workwear',
    },
    'ar': {
      title: 'يونيوم - حلول الزي الموحد المهنية في المملكة العربية السعودية',
      description: 'توفر يونيوم حلول الزي الموحد المخصصة لقطاعات الرعاية الصحية والطيران والضيافة والشركات في جميع أنحاء المملكة العربية السعودية.',
      keywords: 'زي موحد, زي شركات, ملابس طبية, المملكة العربية السعودية, يونيوم, ملابس مهنية',
    }
  };
  
  // Try to get page-specific metadata if available
  let pageMetadata: any = {};
  try {
    if (t.seo && t.seo[page]) {
      pageMetadata = t.seo[page];
      
      // Get subpage metadata if available
      if (subpage && t.seo[page][subpage]) {
        pageMetadata = {
          ...pageMetadata,
          ...t.seo[page][subpage]
        };
      }
    }
  } catch (e) {
    console.warn(`SEO data not found for ${page}/${subpage} in ${locale}`);
  }
  
  // Combine default and page-specific metadata
  const metadata = {
    ...defaultMeta[locale],
    ...pageMetadata,
  };
  
  // Generate alternates
  const alternates = {
    canonical: `${siteUrl}${locale === 'ar' ? '/ar' : ''}/${page === 'home' ? '' : page}`,
    languages: {
      'en': `${siteUrl}/${page === 'home' ? '' : page}`,
      'ar': `${siteUrl}/ar/${page === 'home' ? '' : page}`,
    },
  };
  
  return {
    ...metadata,
    alternates,
  };
};

// Re-export isRTL from config
export { isRTL };

export default {
  getTranslation,
  getTranslationKey,
  formatDate,
  getLanguageDirection,
  getTextAlignmentClass,
  getLanguageAlternates,
  getSEOMetadata,
  isRTL,
}; 