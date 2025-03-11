/**
 * Keyword Strategy for UNEOM Website
 * This file contains targeted keywords for different pages and sections of the website
 * to help with SEO optimization in both English and Arabic.
 */

export interface KeywordGroup {
  primary: string;
  secondary: string[];
  related: string[];
}

export interface PageKeywords {
  title: string;
  description: string;
  keywords: KeywordGroup;
}

export interface LocalizedKeywords {
  en: Record<string, PageKeywords>;
  ar: Record<string, PageKeywords>;
}

/**
 * Targeted keywords for different pages of the website
 */
export const keywordStrategy: LocalizedKeywords = {
  en: {
    home: {
      title: "Saudi Arabia's Leading Provider of Professional Uniforms & Scrubs",
      description: "UNEOM provides tailored B2B uniform solutions for healthcare, aviation, hospitality, and corporate sectors across Saudi Arabia.",
      keywords: {
        primary: "professional uniforms Saudi Arabia",
        secondary: [
          "B2B uniform supplier Saudi",
          "corporate workwear Riyadh",
          "medical scrubs Saudi Arabia",
          "professional attire Saudi"
        ],
        related: [
          "healthcare uniforms Saudi",
          "hotel staff uniforms KSA",
          "airline uniforms Saudi Arabia",
          "corporate uniform program",
          "Saudi uniform manufacturer"
        ]
      }
    },
    healthcare: {
      title: "Professional Medical Scrubs & Healthcare Uniforms in Saudi Arabia",
      description: "High-quality medical uniforms and scrubs for Saudi healthcare institutions. Premium fabrics, customizable designs, and Saudi healthcare compliance.",
      keywords: {
        primary: "medical scrubs Saudi Arabia",
        secondary: [
          "healthcare uniforms Saudi",
          "hospital staff uniforms KSA",
          "nurse uniforms Saudi Arabia",
          "doctor scrubs Riyadh"
        ],
        related: [
          "medical attire Saudi",
          "Islamic medical uniforms",
          "antimicrobial scrubs Saudi",
          "healthcare workwear KSA",
          "Saudi hospital dress code"
        ]
      }
    },
    corporate: {
      title: "Corporate Uniforms & Workwear Solutions in Saudi Arabia",
      description: "Professional corporate uniforms and workwear for Saudi Arabian businesses. Custom branding, premium fabrics, and bulk ordering available.",
      keywords: {
        primary: "corporate uniforms Saudi Arabia",
        secondary: [
          "business workwear Saudi",
          "office uniforms Riyadh",
          "company dress code KSA",
          "professional attire Saudi"
        ],
        related: [
          "branded corporate clothing",
          "Saudi business attire",
          "executive uniforms KSA",
          "corporate identity uniforms",
          "Saudi office dress standards"
        ]
      }
    },
    services: {
      title: "Professional Uniform Services for Saudi Businesses | UNEOM",
      description: "Comprehensive uniform services including program management, custom design, bulk ordering, and measurement services for Saudi organizations.",
      keywords: {
        primary: "uniform services Saudi Arabia",
        secondary: [
          "uniform program management KSA",
          "custom uniform design Saudi",
          "bulk uniform ordering Riyadh",
          "corporate uniform services"
        ],
        related: [
          "uniform measurement services",
          "Saudi uniform policy development",
          "uniform maintenance program",
          "corporate identity management",
          "uniform consultation Saudi"
        ]
      }
    },
    blog: {
      title: "Uniform Insights & Trends | UNEOM Blog",
      description: "Explore the latest insights, trends, and best practices in professional uniforms from Saudi Arabia's leading uniform supplier.",
      keywords: {
        primary: "uniform trends Saudi Arabia",
        secondary: [
          "professional attire insights",
          "Saudi workwear blog",
          "uniform best practices KSA",
          "corporate uniform trends"
        ],
        related: [
          "Saudi dress code guidelines",
          "uniform industry news",
          "workwear fabric technology",
          "uniform sustainability Saudi",
          "professional image Saudi"
        ]
      }
    }
  },
  ar: {
    home: {
      title: "المزود الرائد للزي المهني والملابس الطبية في المملكة العربية السعودية",
      description: "توفر يونيوم حلول زي مهني مخصصة للشركات في قطاعات الرعاية الصحية والطيران والضيافة والشركات في جميع أنحاء المملكة العربية السعودية.",
      keywords: {
        primary: "زي مهني المملكة العربية السعودية",
        secondary: [
          "مورد زي موحد للشركات السعودية",
          "ملابس عمل الرياض",
          "ملابس طبية السعودية",
          "ملابس مهنية سعودية"
        ],
        related: [
          "زي الرعاية الصحية السعودية",
          "زي موظفي الفنادق المملكة",
          "زي شركات الطيران السعودية",
          "برنامج الزي الموحد للشركات",
          "مصنع الزي الموحد السعودي"
        ]
      }
    },
    healthcare: {
      title: "ملابس طبية احترافية وأزياء الرعاية الصحية في المملكة العربية السعودية",
      description: "ملابس طبية عالية الجودة لمؤسسات الرعاية الصحية السعودية. أقمشة متميزة، تصاميم قابلة للتخصيص، ومتوافقة مع معايير الرعاية الصحية السعودية.",
      keywords: {
        primary: "ملابس طبية المملكة العربية السعودية",
        secondary: [
          "زي الرعاية الصحية السعودية",
          "زي موظفي المستشفى المملكة",
          "زي الممرضات السعودية",
          "ملابس الأطباء الرياض"
        ],
        related: [
          "ملابس طبية سعودية",
          "زي طبي إسلامي",
          "ملابس طبية مضادة للميكروبات",
          "ملابس عمل الرعاية الصحية",
          "قواعد لباس المستشفيات السعودية"
        ]
      }
    },
    corporate: {
      title: "أزياء الشركات وحلول الملابس المهنية في المملكة العربية السعودية",
      description: "أزياء شركات مهنية وملابس عمل للشركات السعودية. شعارات مخصصة، أقمشة ممتازة، وإمكانية الطلب بالجملة.",
      keywords: {
        primary: "أزياء الشركات المملكة العربية السعودية",
        secondary: [
          "ملابس العمل السعودية",
          "زي المكتب الرياض",
          "قواعد اللباس للشركات المملكة",
          "ملابس مهنية سعودية"
        ],
        related: [
          "ملابس الشركات ذات العلامة التجارية",
          "زي العمل السعودي",
          "أزياء المديرين التنفيذيين",
          "زي الهوية المؤسسية",
          "معايير لباس المكاتب السعودية"
        ]
      }
    },
    services: {
      title: "خدمات الزي المهني للشركات السعودية | يونيوم",
      description: "خدمات شاملة للزي الموحد تشمل إدارة البرامج، التصميم المخصص، الطلبات بالجملة، وخدمات القياس للمؤسسات السعودية.",
      keywords: {
        primary: "خدمات الزي الموحد المملكة العربية السعودية",
        secondary: [
          "إدارة برنامج الزي الموحد المملكة",
          "تصميم الزي المخصص السعودية",
          "طلبات الزي بالجملة الرياض",
          "خدمات الزي المؤسسي"
        ],
        related: [
          "خدمات قياس الزي الموحد",
          "تطوير سياسة الزي السعودية",
          "برنامج صيانة الزي الموحد",
          "إدارة الهوية المؤسسية",
          "استشارات الزي الموحد السعودية"
        ]
      }
    },
    blog: {
      title: "رؤى واتجاهات الزي الموحد | مدونة يونيوم",
      description: "استكشف أحدث الرؤى والاتجاهات وأفضل الممارسات في الزي المهني من المورد الرائد للزي الموحد في المملكة العربية السعودية.",
      keywords: {
        primary: "اتجاهات الزي الموحد المملكة العربية السعودية",
        secondary: [
          "رؤى الملابس المهنية",
          "مدونة ملابس العمل السعودية",
          "أفضل ممارسات الزي الموحد المملكة",
          "اتجاهات زي الشركات"
        ],
        related: [
          "إرشادات قواعد اللباس السعودية",
          "أخبار صناعة الزي الموحد",
          "تكنولوجيا أقمشة ملابس العمل",
          "استدامة الزي الموحد السعودية",
          "الصورة المهنية السعودية"
        ]
      }
    }
  }
};

/**
 * Get keywords for a specific page and locale
 * @param page - Page identifier
 * @param locale - Language code ('en' or 'ar')
 * @returns - Keywords for the specified page and locale
 */
export const getPageKeywords = (page: string, locale: 'en' | 'ar' = 'en'): PageKeywords | null => {
  const keywords = keywordStrategy[locale];
  return keywords[page] || null;
};

/**
 * Generate a meta description with targeted keywords
 * @param baseDescription - Base description text
 * @param keywords - Keywords to incorporate
 * @returns - SEO-optimized description
 */
export const generateOptimizedDescription = (
  baseDescription: string,
  keywords: string[]
): string => {
  // Simple implementation - in a real scenario, this would be more sophisticated
  // to naturally incorporate keywords into the description
  return baseDescription;
};

/**
 * Generate schema markup with targeted keywords
 * @param type - Schema type
 * @param data - Base schema data
 * @param keywords - Keywords to incorporate
 * @returns - SEO-optimized schema markup
 */
export const generateOptimizedSchema = (
  type: string,
  data: Record<string, any>,
  keywords: KeywordGroup
): Record<string, any> => {
  // Add keywords to appropriate schema fields based on type
  // This is a simplified implementation
  return {
    ...data,
    keywords: [...keywords.secondary, ...keywords.related].join(', ')
  };
}; 