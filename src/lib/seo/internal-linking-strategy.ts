/**
 * Internal Linking Strategy
 * 
 * This utility helps implement a strategic internal linking structure to enhance SEO.
 * It provides contextually relevant links to related content, improving crawlability
 * and content relationship signals for search engines.
 * 
 * The implementation is designed to work with both English and Arabic content,
 * supporting optimized Arabic content as seen in the corporate uniforms page.
 */

import { RelatedLink } from '@/components/seo/InternalLinkingModule';

// Define industry types
export type IndustryType = 'corporate' | 'healthcare' | 'hospitality' | 'industrial' | 'school' | 'security';

// Define service types
export type ServiceType = 'design' | 'manufacturing' | 'delivery' | 'consulting';

// Define location types
export type LocationType = 'riyadh' | 'jeddah' | 'dammam' | 'mecca' | 'medina';

/**
 * Get related content links for the corporate industry page
 */
export function getCorporateIndustryLinks(locale: string = 'en'): RelatedLink[] {
  if (locale === 'ar') {
    return [
      {
        title: 'دليل الأقمشة للأزياء الموحدة للشركات',
        href: '/ar/resources/fabric-guide/',
        description: 'تعرف على أفضل الأقمشة للأزياء الموحدة للشركات في المناخ السعودي',
        type: 'resource'
      },
      {
        title: 'كيفية إنشاء سياسة الزي الموحد للشركة',
        href: '/ar/blog/creating-corporate-uniform-policy/',
        description: 'دليل خطوة بخطوة لتطوير سياسة فعالة للزي الموحد للشركات',
        type: 'blog'
      },
      {
        title: 'خدمات تصميم الأزياء الموحدة المخصصة',
        href: '/ar/services/design/',
        description: 'حلول تصميم مخصصة لتعزيز هوية علامتك التجارية من خلال الزي الموحد',
        type: 'service'
      },
      {
        title: 'قصة نجاح: برنامج الزي الموحد للبنك السعودي',
        href: '/ar/blog/saudi-bank-uniform-case-study/',
        description: 'كيف ساعدنا أحد أكبر البنوك السعودية في تحويل هوية علامته التجارية',
        type: 'blog'
      },
      {
        title: 'دليل المقاسات للأزياء الموحدة للشركات',
        href: '/ar/resources/size-guide/',
        description: 'دليل شامل للمقاسات لضمان ملاءمة مثالية للجميع',
        type: 'resource'
      },
      {
        title: 'أزياء موحدة للضيافة',
        href: '/ar/industries/hospitality/',
        description: 'حلول أنيقة وعملية للفنادق والمطاعم والمنتجعات',
        type: 'industry'
      }
    ];
  }
  
  return [
    {
      title: 'Fabric Guide for Corporate Uniforms',
      href: '/resources/fabric-guide/',
      description: 'Learn about the best fabrics for corporate uniforms in Saudi climate',
      type: 'resource'
    },
    {
      title: 'How to Create a Corporate Uniform Policy',
      href: '/blog/creating-corporate-uniform-policy/',
      description: 'Step-by-step guide to developing an effective corporate uniform policy',
      type: 'blog'
    },
    {
      title: 'Custom Uniform Design Services',
      href: '/services/design/',
      description: 'Custom design solutions to enhance your brand identity through uniforms',
      type: 'service'
    },
    {
      title: 'Case Study: Saudi Bank Uniform Program',
      href: '/blog/saudi-bank-uniform-case-study/',
      description: 'How we helped one of the largest Saudi banks transform their brand identity',
      type: 'blog'
    },
    {
      title: 'Size Guide for Corporate Uniforms',
      href: '/resources/size-guide/',
      description: 'Comprehensive sizing guide to ensure perfect fit for everyone',
      type: 'resource'
    },
    {
      title: 'Hospitality Uniforms',
      href: '/industries/hospitality/',
      description: 'Elegant and practical solutions for hotels, restaurants, and resorts',
      type: 'industry'
    }
  ];
}

/**
 * Get related content links for the healthcare industry page
 */
export function getHealthcareIndustryLinks(locale: string = 'en'): RelatedLink[] {
  if (locale === 'ar') {
    return [
      {
        title: 'معايير الأزياء الطبية في السعودية',
        href: '/ar/resources/healthcare-uniform-standards/',
        description: 'دليل شامل لمعايير الأزياء الطبية واللوائح في المملكة العربية السعودية',
        type: 'resource'
      },
      {
        title: 'أقمشة مضادة للميكروبات للأزياء الطبية',
        href: '/ar/blog/antimicrobial-fabrics-healthcare/',
        description: 'كيف تساعد الأقمشة المتطورة في الحماية من العدوى في بيئات الرعاية الصحية',
        type: 'blog'
      },
      {
        title: 'خدمات التصميم للمستشفيات',
        href: '/ar/services/design/',
        description: 'حلول مخصصة لأزياء المستشفيات والعيادات الطبية',
        type: 'service'
      },
      {
        title: 'دراسة حالة: مستشفى المملكة',
        href: '/ar/blog/kingdom-hospital-uniforms-case-study/',
        description: 'كيف ساعدنا أحد أكبر المستشفيات في المملكة على تحسين الكفاءة والراحة',
        type: 'blog'
      },
      {
        title: 'برنامج استبدال الأزياء الطبية',
        href: '/ar/services/healthcare-uniform-replacement/',
        description: 'برنامج فعال لاستبدال وتجديد الأزياء الطبية لمرافق الرعاية الصحية',
        type: 'service'
      }
    ];
  }
  
  return [
    {
      title: 'Healthcare Uniform Standards in Saudi Arabia',
      href: '/resources/healthcare-uniform-standards/',
      description: 'Comprehensive guide to medical uniform standards and regulations in KSA',
      type: 'resource'
    },
    {
      title: 'Antimicrobial Fabrics for Healthcare Uniforms',
      href: '/blog/antimicrobial-fabrics-healthcare/',
      description: 'How advanced fabrics help protect against infection in healthcare settings',
      type: 'blog'
    },
    {
      title: 'Design Services for Hospitals',
      href: '/services/design/',
      description: 'Custom solutions for hospital and medical clinic uniforms',
      type: 'service'
    },
    {
      title: 'Case Study: Kingdom Hospital',
      href: '/blog/kingdom-hospital-uniforms-case-study/',
      description: 'How we helped one of the largest hospitals in the Kingdom improve efficiency and comfort',
      type: 'blog'
    },
    {
      title: 'Healthcare Uniform Replacement Program',
      href: '/services/healthcare-uniform-replacement/',
      description: 'Efficient program for replacing and refreshing medical uniforms for healthcare facilities',
      type: 'service'
    }
  ];
}

/**
 * Get related content links for a location page
 */
export function getLocationPageLinks(cityName: string, locale: string = 'en'): RelatedLink[] {
  if (locale === 'ar') {
    return [
      {
        title: 'أزياء موحدة للشركات',
        href: '/ar/industries/corporate/',
        description: `حلول اليونيفورم المهنية للشركات في ${cityName}`,
        type: 'industry'
      },
      {
        title: 'أزياء الرعاية الصحية',
        href: '/ar/industries/healthcare/',
        description: `أزياء طبية عالية الجودة للمستشفيات والعيادات في ${cityName}`,
        type: 'industry'
      },
      {
        title: 'خدمات التصميم',
        href: '/ar/services/design/',
        description: `خدمات تصميم الأزياء الموحدة المخصصة في ${cityName}`,
        type: 'service'
      },
      {
        title: 'اتصل بنا',
        href: '/ar/contact/',
        description: `تواصل مع فريقنا في ${cityName} للحصول على المساعدة`,
        type: 'service'
      }
    ];
  }
  
  return [
    {
      title: 'Corporate Uniforms',
      href: '/industries/corporate/',
      description: `Professional corporate uniform solutions in ${cityName}`,
      type: 'industry'
    },
    {
      title: 'Healthcare Uniforms',
      href: '/industries/healthcare/',
      description: `High-quality medical uniforms for hospitals and clinics in ${cityName}`,
      type: 'industry'
    },
    {
      title: 'Design Services',
      href: '/services/design/',
      description: `Custom uniform design services in ${cityName}`,
      type: 'service'
    },
    {
      title: 'Contact Us',
      href: '/contact/',
      description: `Get in touch with our team in ${cityName} for assistance`,
      type: 'service'
    }
  ];
}

/**
 * Get related content links for the design services page
 */
export function getDesignServicesLinks(locale: string = 'en'): RelatedLink[] {
  if (locale === 'ar') {
    return [
      {
        title: 'عملية التصميم لدينا',
        href: '/ar/services/design/process/',
        description: 'تعرف على عملية تصميم الأزياء الموحدة من البداية إلى النهاية',
        type: 'service'
      },
      {
        title: 'معرض التصاميم',
        href: '/ar/gallery/design-portfolio/',
        description: 'استعرض مجموعة من تصاميمنا السابقة للعملاء في مختلف الصناعات',
        type: 'resource'
      },
      {
        title: 'خدمات التصنيع',
        href: '/ar/services/manufacturing/',
        description: 'تعرف على كيفية تحويل التصاميم إلى أزياء موحدة عالية الجودة',
        type: 'service'
      },
      {
        title: 'أزياء موحدة للشركات',
        href: '/ar/industries/corporate/',
        description: 'حلول أزياء احترافية مصممة خصيصًا للشركات السعودية',
        type: 'industry'
      }
    ];
  }
  
  return [
    {
      title: 'Our Design Process',
      href: '/services/design/process/',
      description: 'Learn about our uniform design process from start to finish',
      type: 'service'
    },
    {
      title: 'Design Portfolio',
      href: '/gallery/design-portfolio/',
      description: 'Browse a collection of our previous designs for clients across industries',
      type: 'resource'
    },
    {
      title: 'Manufacturing Services',
      href: '/services/manufacturing/',
      description: 'Learn how designs are transformed into high-quality uniforms',
      type: 'service'
    },
    {
      title: 'Corporate Uniforms',
      href: '/industries/corporate/',
      description: 'Professional uniform solutions tailored for Saudi businesses',
      type: 'industry'
    }
  ];
}

/**
 * Get homepage related links
 */
export function getHomepageLinks(locale: string = 'en'): RelatedLink[] {
  if (locale === 'ar') {
    return [
      {
        title: 'أزياء موحدة للشركات',
        href: '/ar/industries/corporate/',
        description: 'حلول أزياء احترافية للشركات في المملكة العربية السعودية',
        type: 'industry'
      },
      {
        title: 'أزياء الرعاية الصحية',
        href: '/ar/industries/healthcare/',
        description: 'أزياء طبية عالية الجودة للمستشفيات والعيادات',
        type: 'industry'
      },
      {
        title: 'خدمات التصميم',
        href: '/ar/services/design/',
        description: 'خدمات تصميم الأزياء الموحدة المخصصة',
        type: 'service'
      },
      {
        title: 'فرعنا في الرياض',
        href: '/ar/locations/riyadh/',
        description: 'زيارة موقعنا الرئيسي في الرياض',
        type: 'location'
      }
    ];
  }
  
  return [
    {
      title: 'Corporate Uniforms',
      href: '/industries/corporate/',
      description: 'Professional uniform solutions for businesses in Saudi Arabia',
      type: 'industry'
    },
    {
      title: 'Healthcare Uniforms',
      href: '/industries/healthcare/',
      description: 'High-quality medical uniforms for hospitals and clinics',
      type: 'industry'
    },
    {
      title: 'Design Services',
      href: '/services/design/',
      description: 'Custom uniform design services',
      type: 'service'
    },
    {
      title: 'Riyadh Branch',
      href: '/locations/riyadh/',
      description: 'Visit our main location in Riyadh',
      type: 'location'
    }
  ];
}

/**
 * Get related links based on page type
 */
export function getRelatedLinks(
  pageType: 'home' | 'industry' | 'service' | 'location' | 'blog' | 'resource',
  locale: string = 'en',
  specificType?: string,
  specificValue?: string
): RelatedLink[] {
  switch (pageType) {
    case 'home':
      return getHomepageLinks(locale);
      
    case 'industry':
      if (specificType === 'corporate') {
        return getCorporateIndustryLinks(locale);
      } else if (specificType === 'healthcare') {
        return getHealthcareIndustryLinks(locale);
      }
      // Default industry links if specific type not matched
      return [];
      
    case 'service':
      if (specificType === 'design') {
        return getDesignServicesLinks(locale);
      }
      // Default service links if specific type not matched
      return [];
      
    case 'location':
      if (specificValue) {
        return getLocationPageLinks(specificValue, locale);
      }
      // Default location links if specific value not provided
      return [];
      
    default:
      // Default to homepage links if type not matched
      return getHomepageLinks(locale);
  }
}

export default {
  getCorporateIndustryLinks,
  getHealthcareIndustryLinks,
  getLocationPageLinks,
  getDesignServicesLinks,
  getHomepageLinks,
  getRelatedLinks
};
