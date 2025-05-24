/**
 * Keyword Optimizer
 * 
 * This utility provides page-specific keyword optimization instead of generic site-wide keywords.
 * It addresses [TASK SF_FIX_006] from the Screaming Frog report by replacing generic
 * meta keywords with targeted, page-specific ones when needed.
 * 
 * Note: While meta keywords have diminished SEO value for Google, they can still be
 * useful for some search engines and internal search systems.
 */

// Define types for industry-specific keywords
export type IndustryType = 'corporate' | 'healthcare' | 'hospitality' | 'industrial' | 'school' | 'security';
export type ServiceType = 'design' | 'manufacturing' | 'delivery' | 'consulting';
export type LocationType = 'riyadh' | 'jeddah' | 'dammam' | 'mecca' | 'medina';
export type PageType = 'home' | 'about' | 'contact' | 'industry' | 'service' | 'location' | 'product' | 'blog' | 'resource';

interface KeywordData {
  en: string[];
  ar: string[];
}

// Industry-specific keywords
const industryKeywords: Record<IndustryType, KeywordData> = {
  corporate: {
    en: [
      'corporate uniforms Saudi Arabia',
      'business attire KSA',
      'professional workwear Riyadh',
      'office uniform supplier',
      'corporate dress code Saudi',
      'business casual uniforms'
    ],
    ar: [
      'زي موحد للشركات في السعودية',
      'ملابس رسمية للموظفين',
      'يونيفورم الشركات',
      'موردي ازياء موحدة للشركات',
      'ملابس العمل المكتبية الرياض',
      'زي موحد للمؤسسات'
    ]
  },
  healthcare: {
    en: [
      'medical uniforms Saudi Arabia',
      'healthcare scrubs KSA',
      'hospital uniform supplier',
      'nurse uniforms Riyadh',
      'doctor coats Saudi',
      'medical workwear'
    ],
    ar: [
      'ازياء طبية في السعودية',
      'سكراب طبي',
      'يونيفورم مستشفيات',
      'ملابس التمريض الرياض',
      'معاطف الأطباء',
      'ملابس العمل الطبية'
    ]
  },
  hospitality: {
    en: [
      'hotel uniforms Saudi Arabia',
      'restaurant staff uniforms',
      'hospitality workwear KSA',
      'chef uniforms Riyadh',
      'waiter uniforms Saudi',
      'front desk uniforms'
    ],
    ar: [
      'يونيفورم فنادق السعودية',
      'ازياء موحدة للمطاعم',
      'ملابس العمل للضيافة',
      'زي الطهاة الرياض',
      'ملابس النادل',
      'يونيفورم الاستقبال'
    ]
  },
  industrial: {
    en: [
      'industrial workwear Saudi Arabia',
      'factory uniforms KSA',
      'safety uniforms Riyadh',
      'construction worker clothing',
      'protective workwear Saudi',
      'industrial safety gear'
    ],
    ar: [
      'ملابس العمل الصناعية السعودية',
      'يونيفورم المصانع',
      'ملابس السلامة الرياض',
      'ملابس عمال البناء',
      'ملابس الحماية للعمل',
      'معدات السلامة الصناعية'
    ]
  },
  school: {
    en: [
      'school uniforms Saudi Arabia',
      'student uniforms KSA',
      'educational institution uniforms',
      'private school uniforms Riyadh',
      'Saudi school dress code',
      'international school uniforms'
    ],
    ar: [
      'زي مدرسي في السعودية',
      'يونيفورم الطلاب',
      'ازياء المؤسسات التعليمية',
      'زي المدارس الخاصة الرياض',
      'نظام الزي المدرسي السعودي',
      'زي المدارس العالمية'
    ]
  },
  security: {
    en: [
      'security uniforms Saudi Arabia',
      'guard uniforms KSA',
      'security staff clothing',
      'security services workwear',
      'professional security attire Riyadh',
      'security officer uniforms'
    ],
    ar: [
      'زي أمني في السعودية',
      'يونيفورم الحراسة',
      'ملابس موظفي الأمن',
      'ملابس خدمات الأمن',
      'زي أمني احترافي الرياض',
      'يونيفورم ضباط الأمن'
    ]
  }
};

// Service-specific keywords
const serviceKeywords: Record<ServiceType, KeywordData> = {
  design: {
    en: [
      'uniform design services Saudi',
      'custom uniform design KSA',
      'corporate uniform styling',
      'professional workwear design',
      'bespoke uniform creation Riyadh',
      'uniform designer Saudi Arabia'
    ],
    ar: [
      'خدمات تصميم الزي الموحد السعودية',
      'تصميم يونيفورم مخصص',
      'تصميم أزياء الشركات',
      'تصميم ملابس العمل الاحترافية',
      'إنشاء زي موحد حسب الطلب الرياض',
      'مصمم يونيفورم المملكة العربية السعودية'
    ]
  },
  manufacturing: {
    en: [
      'uniform manufacturing Saudi Arabia',
      'workwear production KSA',
      'uniform factory Riyadh',
      'professional uniform manufacturer',
      'quality uniform production',
      'bulk uniform manufacturing'
    ],
    ar: [
      'تصنيع الزي الموحد السعودية',
      'إنتاج ملابس العمل',
      'مصنع يونيفورم الرياض',
      'مصنع ازياء موحدة احترافي',
      'إنتاج يونيفورم عالي الجودة',
      'تصنيع الزي الموحد بالجملة'
    ]
  },
  delivery: {
    en: [
      'uniform delivery services Saudi',
      'workwear distribution KSA',
      'corporate uniform supply chain',
      'fast uniform delivery Riyadh',
      'Saudi uniform supplier',
      'uniform logistics services'
    ],
    ar: [
      'خدمات توصيل الزي الموحد السعودية',
      'توزيع ملابس العمل',
      'سلسلة توريد يونيفورم الشركات',
      'توصيل سريع للزي الموحد الرياض',
      'مورد يونيفورم سعودي',
      'خدمات لوجستية للزي الموحد'
    ]
  },
  consulting: {
    en: [
      'uniform consulting services Saudi',
      'workwear consulting KSA',
      'corporate uniform advisory',
      'professional image consulting Riyadh',
      'uniform policy development',
      'workwear standards consulting'
    ],
    ar: [
      'خدمات استشارات الزي الموحد السعودية',
      'استشارات ملابس العمل',
      'استشارات يونيفورم الشركات',
      'استشارات الصورة المهنية الرياض',
      'تطوير سياسة الزي الموحد',
      'استشارات معايير ملابس العمل'
    ]
  }
};

// Location-specific keywords
const locationKeywords: Record<LocationType, KeywordData> = {
  riyadh: {
    en: [
      'uniform supplier Riyadh',
      'workwear Riyadh Saudi Arabia',
      'corporate uniforms Riyadh',
      'medical uniforms Riyadh',
      'Riyadh uniform store',
      'professional workwear Riyadh'
    ],
    ar: [
      'مورد يونيفورم الرياض',
      'ملابس العمل الرياض السعودية',
      'يونيفورم الشركات الرياض',
      'ازياء طبية الرياض',
      'متجر الزي الموحد الرياض',
      'ملابس العمل الاحترافية الرياض'
    ]
  },
  jeddah: {
    en: [
      'uniform supplier Jeddah',
      'workwear Jeddah Saudi Arabia',
      'corporate uniforms Jeddah',
      'medical uniforms Jeddah',
      'Jeddah uniform store',
      'professional workwear Jeddah'
    ],
    ar: [
      'مورد يونيفورم جدة',
      'ملابس العمل جدة السعودية',
      'يونيفورم الشركات جدة',
      'ازياء طبية جدة',
      'متجر الزي الموحد جدة',
      'ملابس العمل الاحترافية جدة'
    ]
  },
  dammam: {
    en: [
      'uniform supplier Dammam',
      'workwear Dammam Saudi Arabia',
      'corporate uniforms Dammam',
      'medical uniforms Dammam',
      'Dammam uniform store',
      'professional workwear Dammam'
    ],
    ar: [
      'مورد يونيفورم الدمام',
      'ملابس العمل الدمام السعودية',
      'يونيفورم الشركات الدمام',
      'ازياء طبية الدمام',
      'متجر الزي الموحد الدمام',
      'ملابس العمل الاحترافية الدمام'
    ]
  },
  mecca: {
    en: [
      'uniform supplier Mecca',
      'workwear Mecca Saudi Arabia',
      'corporate uniforms Mecca',
      'medical uniforms Mecca',
      'Mecca uniform store',
      'professional workwear Mecca'
    ],
    ar: [
      'مورد يونيفورم مكة',
      'ملابس العمل مكة السعودية',
      'يونيفورم الشركات مكة',
      'ازياء طبية مكة',
      'متجر الزي الموحد مكة',
      'ملابس العمل الاحترافية مكة'
    ]
  },
  medina: {
    en: [
      'uniform supplier Medina',
      'workwear Medina Saudi Arabia',
      'corporate uniforms Medina',
      'medical uniforms Medina',
      'Medina uniform store',
      'professional workwear Medina'
    ],
    ar: [
      'مورد يونيفورم المدينة المنورة',
      'ملابس العمل المدينة المنورة السعودية',
      'يونيفورم الشركات المدينة المنورة',
      'ازياء طبية المدينة المنورة',
      'متجر الزي الموحد المدينة المنورة',
      'ملابس العمل الاحترافية المدينة المنورة'
    ]
  }
};

// General page type keywords
const pageTypeKeywords: Record<PageType, KeywordData> = {
  home: {
    en: [
      'professional uniforms Saudi Arabia',
      'workwear supplier KSA',
      'uniform company Riyadh',
      'Saudi uniform manufacturer',
      'corporate uniform solutions',
      'quality workwear Saudi'
    ],
    ar: [
      'يونيفورم احترافي السعودية',
      'مورد ملابس العمل المملكة',
      'شركة زي موحد الرياض',
      'مصنع يونيفورم سعودي',
      'حلول الزي الموحد للشركات',
      'ملابس عمل عالية الجودة السعودية'
    ]
  },
  about: {
    en: [
      'UNEOM uniform company',
      'Saudi Arabia uniform experts',
      'professional workwear history',
      'uniform manufacturer KSA',
      'trusted uniform supplier Riyadh',
      'UNEOM company story'
    ],
    ar: [
      'شركة يونيوم للزي الموحد',
      'خبراء اليونيفورم في السعودية',
      'تاريخ ملابس العمل الاحترافية',
      'مصنع الزي الموحد السعودية',
      'مورد يونيفورم موثوق الرياض',
      'قصة شركة يونيوم'
    ]
  },
  contact: {
    en: [
      'contact UNEOM uniforms',
      'uniform supplier contacts Saudi',
      'workwear inquiry KSA',
      'uniform quote request',
      'UNEOM Riyadh contact',
      'Saudi uniform company phone'
    ],
    ar: [
      'اتصل بيونيوم للزي الموحد',
      'جهات اتصال مورد اليونيفورم السعودية',
      'استفسار ملابس العمل المملكة',
      'طلب عرض سعر للزي الموحد',
      'اتصل بيونيوم الرياض',
      'هاتف شركة اليونيفورم السعودية'
    ]
  },
  industry: {
    en: [
      'industry-specific uniforms KSA',
      'sector workwear solutions',
      'specialized uniform design',
      'Saudi industry workwear',
      'professional sector clothing',
      'industry-compliant uniforms'
    ],
    ar: [
      'يونيفورم خاص بالصناعة السعودية',
      'حلول ملابس العمل القطاعية',
      'تصميم زي موحد متخصص',
      'ملابس العمل الصناعية السعودية',
      'ملابس قطاع احترافية',
      'يونيفورم متوافق مع الصناعة'
    ]
  },
  service: {
    en: [
      'uniform services Saudi Arabia',
      'workwear solutions KSA',
      'professional uniform services',
      'custom uniform creation',
      'Riyadh uniform services',
      'corporate clothing services'
    ],
    ar: [
      'خدمات الزي الموحد السعودية',
      'حلول ملابس العمل المملكة',
      'خدمات يونيفورم احترافية',
      'إنشاء زي موحد مخصص',
      'خدمات اليونيفورم الرياض',
      'خدمات ملابس الشركات'
    ]
  },
  location: {
    en: [
      'local uniform supplier',
      'workwear near me Saudi',
      'regional uniform provider',
      'uniform shop location',
      'Saudi uniform branch',
      'city-specific workwear'
    ],
    ar: [
      'مورد يونيفورم محلي',
      'ملابس العمل بالقرب مني السعودية',
      'مزود زي موحد إقليمي',
      'موقع متجر اليونيفورم',
      'فرع اليونيفورم السعودي',
      'ملابس عمل خاصة بالمدينة'
    ]
  },
  product: {
    en: [
      'uniform products Saudi',
      'workwear items KSA',
      'professional clothing products',
      'uniform catalog Riyadh',
      'Saudi workwear collection',
      'quality uniform products'
    ],
    ar: [
      'منتجات الزي الموحد السعودية',
      'عناصر ملابس العمل المملكة',
      'منتجات الملابس الاحترافية',
      'كتالوج اليونيفورم الرياض',
      'مجموعة ملابس العمل السعودية',
      'منتجات يونيفورم عالية الجودة'
    ]
  },
  blog: {
    en: [
      'uniform industry news',
      'workwear trends Saudi',
      'professional clothing blog',
      'uniform insights KSA',
      'Saudi workwear articles',
      'corporate uniform blog'
    ],
    ar: [
      'أخبار صناعة اليونيفورم',
      'اتجاهات ملابس العمل السعودية',
      'مدونة الملابس الاحترافية',
      'رؤى الزي الموحد المملكة',
      'مقالات ملابس العمل السعودية',
      'مدونة زي الشركات الموحد'
    ]
  },
  resource: {
    en: [
      'uniform resources Saudi',
      'workwear guides KSA',
      'uniform sizing information',
      'corporate attire resources',
      'Saudi uniform standards',
      'professional clothing resources'
    ],
    ar: [
      'موارد اليونيفورم السعودية',
      'أدلة ملابس العمل المملكة',
      'معلومات مقاسات الزي الموحد',
      'موارد ملابس الشركات',
      'معايير اليونيفورم السعودية',
      'موارد الملابس الاحترافية'
    ]
  }
};

/**
 * Get page-specific keywords based on page type and locale
 */
export function getPageKeywords(
  pageType: PageType,
  locale: string = 'en',
  specificType?: string,
  specificValue?: string
): string[] {
  const keywordCollections: string[][] = [];
  
  // Add page type keywords
  if (pageTypeKeywords[pageType]) {
    keywordCollections.push(
      locale === 'ar' ? pageTypeKeywords[pageType].ar : pageTypeKeywords[pageType].en
    );
  }
  
  // Add industry-specific keywords if applicable
  if (pageType === 'industry' && specificType && specificType in industryKeywords) {
    const industryType = specificType as IndustryType;
    keywordCollections.push(
      locale === 'ar' ? industryKeywords[industryType].ar : industryKeywords[industryType].en
    );
  }
  
  // Add service-specific keywords if applicable
  if (pageType === 'service' && specificType && specificType in serviceKeywords) {
    const serviceType = specificType as ServiceType;
    keywordCollections.push(
      locale === 'ar' ? serviceKeywords[serviceType].ar : serviceKeywords[serviceType].en
    );
  }
  
  // Add location-specific keywords if applicable
  if (pageType === 'location' && specificValue && specificValue in locationKeywords) {
    const locationType = specificValue as LocationType;
    keywordCollections.push(
      locale === 'ar' ? locationKeywords[locationType].ar : locationKeywords[locationType].en
    );
  }
  
  // Flatten and remove duplicates
  const allKeywords = keywordCollections.flat();
  const uniqueKeywords = [...new Set(allKeywords)];
  
  // Return a subset of keywords (max 10) to avoid keyword stuffing
  return uniqueKeywords.slice(0, 10);
}

export default {
  getPageKeywords,
  industryKeywords,
  serviceKeywords,
  locationKeywords,
  pageTypeKeywords
};
