import en from './translations/en';
import ar from './translations/ar';
import seoData from './translations/seo-data';
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

// Type for SEO data structure
type SEOLanguageData = {
  [page: string]: SEOMetadata | {
    [subpage: string]: SEOMetadata;
  };
};

type SEODataType = {
  en: SEOLanguageData;
  ar: SEOLanguageData;
  [key: string]: SEOLanguageData;
};

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
  
  // Use optimized SEO data from dedicated file
  let pageMetadata: SEOMetadata = {
    title: '',
    description: '',
    keywords: ''
  };
  
  // First try to get from optimized SEO data
  if (seoData && seoData[locale as keyof typeof seoData]) {
    const localeSeoData = seoData[locale as keyof typeof seoData] as SEOLanguageData;
    
    // For subpages like industries/healthcare
    if (subpage && 
        page in localeSeoData && 
        typeof localeSeoData[page] === 'object' &&
        !('title' in localeSeoData[page]) && // Not a direct SEOMetadata
        subpage in (localeSeoData[page] as Record<string, SEOMetadata>)) {
      
      pageMetadata = (localeSeoData[page] as Record<string, SEOMetadata>)[subpage];
    }
    // For main section pages like industries
    else if (page in localeSeoData && 
             typeof localeSeoData[page] === 'object' && 
             'title' in localeSeoData[page]) {
      
      pageMetadata = localeSeoData[page] as SEOMetadata;
    }
    // Fallback to home
    else if ('home' in localeSeoData) {
      pageMetadata = localeSeoData.home as SEOMetadata;
    }
  } else {
    // Fallback to old method if optimized data not available
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
    if (t.seo && t.seo[page]) {
      const oldPageMetadata = t.seo[page];
      
      // Get subpage metadata if available
      if (subpage && t.seo[page][subpage]) {
        pageMetadata = {
          ...oldPageMetadata,
          ...t.seo[page][subpage]
        };
      } else {
        pageMetadata = oldPageMetadata;
      }
    } else {
      // Fallback to default
      pageMetadata = defaultMeta[locale] || defaultMeta['en'];
      console.warn(`SEO data not found for ${page}/${subpage} in ${locale}`);
    }
  }
  
  // Generate alternates
  const urlPath = page === 'home' ? '' : page;
  const subpathPart = subpage ? `/${subpage}` : '';
  const completePath = `${urlPath}${subpathPart}`;
  
  const alternates = {
    canonical: `${siteUrl}${locale === 'ar' ? '/ar' : ''}/${completePath}`,
    languages: {
      'en': `${siteUrl}/${completePath}`,
      'ar': `${siteUrl}/ar/${completePath}`,
    },
  };
  
  return {
    ...pageMetadata,
    alternates,
  };
};

export default getSEOMetadata; 