/**
 * Keywords Manager
 * 
 * This module provides structured, strategic keyword management for the site.
 * While meta keywords have minimal impact on rankings, they are maintained for:
 * 1. Internal categorization and site organization
 * 2. Content planning and optimization guidance
 * 3. Legacy systems that might still use them
 */

import { DEFAULT_LANGUAGE } from '@/lib/i18n/config';

// Keyword type definition
type KeywordSet = {
  primary: string[];  // 2-3 most important keywords
  secondary: string[]; // 4-5 supporting keywords
  location?: string[]; // Location-specific keywords (for local pages)
};

// Interface for the keyword dictionary
interface KeywordDictionary {
  [page: string]: {
    [locale: string]: KeywordSet;
  };
}

// Core industry keywords by industry type
const industryKeywords: {[industry: string]: {[locale: string]: KeywordSet}} = {
  corporate: {
    en: {
      primary: ['corporate uniforms saudi arabia', 'business attire riyadh', 'office wear saudi'],
      secondary: ['executive suits saudi', 'corporate shirts jeddah', 'professional workwear ksa', 'company uniform supplier', 'business casual saudi arabia'],
    },
    ar: {
      primary: ['زي موحد للشركات في السعودية', 'ملابس رسمية للموظفين', 'يونيفورم الشركات'],
      secondary: ['بدلات تنفيذية في الرياض', 'قمصان للشركات', 'ملابس العمل المهنية', 'مورد زي موحد', 'ملابس العمل غير الرسمية'],
    }
  },
  healthcare: {
    en: {
      primary: ['medical uniforms saudi arabia', 'healthcare scrubs ksa', 'hospital uniform supplier'],
      secondary: ['doctor coats saudi', 'nurse uniforms riyadh', 'medical staff clothing', 'lab coats jeddah', 'clinic workwear'],
    },
    ar: {
      primary: ['يونيفورم طبي في السعودية', 'سكرابس الرعاية الصحية', 'مورد زي المستشفيات'],
      secondary: ['معاطف الأطباء', 'يونيفورم التمريض في الرياض', 'ملابس الطاقم الطبي', 'معاطف المختبر في جدة', 'ملابس العمل للعيادات'],
    }
  },
  hospitality: {
    en: {
      primary: ['hotel uniforms saudi arabia', 'restaurant staff clothing ksa', 'hospitality workwear'],
      secondary: ['chef uniforms riyadh', 'hotel staff attire', 'restaurant server clothing', 'luxury hotel uniforms', 'saudi resort workwear'],
    },
    ar: {
      primary: ['يونيفورم الفنادق في السعودية', 'ملابس طاقم المطاعم', 'ملابس عمل الضيافة'],
      secondary: ['يونيفورم الطهاة في الرياض', 'ملابس موظفي الفنادق', 'ملابس نادل المطعم', 'يونيفورم الفنادق الفاخرة', 'ملابس عمل المنتجعات السعودية'],
    }
  },
  // Add more industries as needed
};

// Core service keywords by service type
const serviceKeywords: {[service: string]: {[locale: string]: KeywordSet}} = {
  design: {
    en: {
      primary: ['uniform design saudi arabia', 'custom workwear design', 'corporate clothing design'],
      secondary: ['bespoke uniform creation', 'professional attire design', 'saudi uniform designer', 'brand identity clothing', 'company uniform styling'],
    },
    ar: {
      primary: ['تصميم الزي الموحد في السعودية', 'تصميم ملابس العمل المخصصة', 'تصميم ملابس الشركات'],
      secondary: ['إنشاء زي موحد مخصص', 'تصميم الملابس المهنية', 'مصمم الزي الموحد السعودي', 'ملابس هوية العلامة التجارية', 'تصميم زي الشركة'],
    }
  },
  // Add more services as needed
};

// Location-specific keywords
const locationKeywords: {[location: string]: {[locale: string]: string[]}} = {
  riyadh: {
    en: ['riyadh', 'saudi capital', 'central region'],
    ar: ['الرياض', 'العاصمة السعودية', 'المنطقة الوسطى'],
  },
  jeddah: {
    en: ['jeddah', 'western region', 'makkah province'],
    ar: ['جدة', 'المنطقة الغربية', 'منطقة مكة'],
  },
  dammam: {
    en: ['dammam', 'eastern province', 'gulf coast'],
    ar: ['الدمام', 'المنطقة الشرقية', 'ساحل الخليج'],
  },
  // Add more locations as needed
};

// Generic/global site keywords
const globalKeywords: {[locale: string]: string[]} = {
  en: ['uniform supplier saudi arabia', 'workwear ksa', 'professional clothing middle east', 'uneom'],
  ar: ['مورد الزي الموحد في السعودية', 'ملابس العمل في المملكة', 'الملابس المهنية في الشرق الأوسط', 'يونيوم'],
};

/**
 * Generates keywords for a specific page type and locale
 */
export function getKeywords(
  pageName: string,
  subpage?: string,
  locale: string = DEFAULT_LANGUAGE,
  location?: string
): string[] {
  const keywords: string[] = [];
  
  // Add global keywords
  keywords.push(...(globalKeywords[locale] || globalKeywords['en']));
  
  // Add industry-specific keywords
  if (pageName === 'industries' && subpage && industryKeywords[subpage]) {
    const keywordSet = industryKeywords[subpage][locale] || industryKeywords[subpage]['en'];
    keywords.push(...keywordSet.primary, ...keywordSet.secondary);
  }
  
  // Add service-specific keywords
  if (pageName === 'services' && subpage && serviceKeywords[subpage]) {
    const keywordSet = serviceKeywords[subpage][locale] || serviceKeywords[subpage]['en'];
    keywords.push(...keywordSet.primary, ...keywordSet.secondary);
  }
  
  // Add location keywords if applicable
  if (location && locationKeywords[location]) {
    const locKeywords = locationKeywords[location][locale] || locationKeywords[location]['en'];
    keywords.push(...locKeywords);
    
    // Create location-specific combinations with primary keywords
    if (pageName === 'industries' && subpage && industryKeywords[subpage]) {
      const primaryKeywords = industryKeywords[subpage][locale]?.primary || industryKeywords[subpage]['en'].primary;
      
      // Add location-specific combinations for primary keywords
      locKeywords.forEach(loc => {
        primaryKeywords.forEach(keyword => {
          if (!keyword.includes(loc)) {
            keywords.push(`${keyword} ${loc}`);
          }
        });
      });
    }
  }
  
  // Return unique keywords, trimmed and sorted by length (shortest first)
  return [...new Set(keywords)]
    .map(keyword => keyword.trim())
    .sort((a, b) => a.length - b.length);
}

/**
 * Formats keywords into a meta tag-ready string
 */
export function formatKeywordsForMetaTag(keywords: string[]): string {
  // Limit to maximum 10 keywords for meta tag (best practice)
  return keywords.slice(0, 10).join(', ');
}

/**
 * One-step function to get formatted keywords for meta tag
 */
export function getMetaKeywords(
  pageName: string,
  subpage?: string,
  locale: string = DEFAULT_LANGUAGE,
  location?: string
): string {
  const keywords = getKeywords(pageName, subpage, locale, location);
  return formatKeywordsForMetaTag(keywords);
}

export default {
  getKeywords,
  formatKeywordsForMetaTag,
  getMetaKeywords,
};
