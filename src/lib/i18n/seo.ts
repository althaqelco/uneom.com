import en from './translations/en';
import ar from './translations/ar';
// Don't import from config.ts which is a client component
// Define server-side constants instead
const LANGUAGES = {
  EN: 'en',
  AR: 'ar'
};

const DEFAULT_LANGUAGE = 'en';

// Interface definitions for TypeScript
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
const translations: { [key: string]: any } = {
  [LANGUAGES.EN]: en,
  [LANGUAGES.AR]: ar,
};

/**
 * Get translation for a specific language
 * @param {string} lang - Language code ('en' or 'ar')
 * @returns {any} Translation object for the language
 */
const getTranslation = (lang = DEFAULT_LANGUAGE): any => {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
};

/**
 * Get SEO metadata for a specific language and page
 * @param {string} locale - Language code
 * @param {string} page - Page key
 * @param {string} subpage - Optional subpage key
 * @returns {SEOMetadata} SEO metadata
 */
const getSEOMetadata = (locale = DEFAULT_LANGUAGE, page = 'home', subpage = ''): SEOMetadata => {
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

export default getSEOMetadata; 