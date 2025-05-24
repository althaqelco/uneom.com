/**
 * Title and Description Generator
 * 
 * This utility generates unique, optimized page titles and meta descriptions
 * for different page types, addressing [TASK SF_FIX_004] from the Screaming Frog report.
 * 
 * Features:
 * - Generates unique, targeted titles and descriptions based on page context
 * - Handles both English and Arabic content with proper cultural adaptation
 * - Ensures proper length and keyword inclusion for SEO
 */

// Define types for page categories
export type IndustryType = 'corporate' | 'healthcare' | 'hospitality' | 'industrial' | 'school' | 'security';
export type ServiceType = 'design' | 'manufacturing' | 'delivery' | 'consulting';
export type LocationType = 'riyadh' | 'jeddah' | 'dammam' | 'mecca' | 'medina';
export type PageType = 'home' | 'about' | 'contact' | 'industry' | 'service' | 'location' | 'product' | 'blog' | 'resource';

interface TitleDescription {
  title: string;
  description: string;
  h1: string; // H1 heading, addressing [TASK SF_FIX_003]
}

interface GeneratorOptions {
  companyName?: string;
  includeLocation?: boolean;
  includeCTA?: boolean;
}

// Default options
const defaultOptions: GeneratorOptions = {
  companyName: 'UNEOM',
  includeLocation: true,
  includeCTA: true
};

/**
 * Generate title, description, and H1 for an industry page
 */
export function generateIndustryContent(
  industry: IndustryType,
  locale: string = 'en',
  options: GeneratorOptions = defaultOptions
): TitleDescription {
  const { companyName, includeLocation } = { ...defaultOptions, ...options };
  
  // Industry-specific content for English
  const industryContentEN: Record<IndustryType, TitleDescription> = {
    corporate: {
      title: `Corporate Uniforms & Workwear in Saudi Arabia | ${companyName}`,
      description: `Premium corporate uniforms and professional business attire designed for Saudi companies. Custom designs, high-quality fabrics, and complete workwear solutions for your corporate identity.`,
      h1: 'Corporate Uniform Solutions in Saudi Arabia'
    },
    healthcare: {
      title: `Medical Uniforms & Healthcare Scrubs in KSA | ${companyName}`,
      description: `Professional medical uniforms, scrubs, and lab coats for Saudi hospitals and clinics. Antimicrobial fabrics, comfortable designs, and customization options for healthcare facilities.`,
      h1: 'Healthcare Uniform Solutions for Medical Professionals'
    },
    hospitality: {
      title: `Hospitality Uniforms for Hotels & Restaurants | ${companyName}`,
      description: `Elegant hotel uniforms, restaurant workwear, and hospitality attire for Saudi Arabia's service industry. Enhance guest experience with professional, comfortable, and distinctive staff uniforms.`,
      h1: 'Hospitality Uniform Solutions for Service Excellence'
    },
    industrial: {
      title: `Industrial Workwear & Safety Uniforms in KSA | ${companyName}`,
      description: `Durable industrial workwear and safety uniforms for Saudi manufacturing, construction, and energy sectors. Heat-resistant fabrics, protective features, and company branding options.`,
      h1: 'Industrial Workwear Solutions for Safety & Productivity'
    },
    school: {
      title: `School Uniforms for Saudi Educational Institutions | ${companyName}`,
      description: `High-quality school uniforms for Saudi private schools, international academies, and educational institutions. Comfortable, durable designs with customization options and bulk ordering.`,
      h1: 'School Uniform Solutions for Educational Excellence'
    },
    security: {
      title: `Security Uniforms & Guard Workwear in KSA | ${companyName}`,
      description: `Professional security uniforms and guard workwear for Saudi security companies and facilities. Durable, authoritative designs with functionality for security operations.`,
      h1: 'Security Uniform Solutions for Professional Protection'
    }
  };
  
  // Industry-specific content for Arabic (optimized, not translated)
  const industryContentAR: Record<IndustryType, TitleDescription> = {
    corporate: {
      title: `زي موحد للشركات وملابس العمل في السعودية | ${companyName}`,
      description: `يونيفورم احترافي وأزياء عمل مصممة خصيصًا للشركات السعودية. تصاميم مخصصة، أقمشة عالية الجودة، وحلول متكاملة للزي الموحد تعزز هوية شركتك المؤسسية.`,
      h1: 'حلول الزي الموحد للشركات في المملكة العربية السعودية'
    },
    healthcare: {
      title: `يونيفورم طبي وسكراب للرعاية الصحية في المملكة | ${companyName}`,
      description: `أزياء طبية احترافية، سكراب، ومعاطف مختبر للمستشفيات والعيادات السعودية. أقمشة مضادة للميكروبات، تصاميم مريحة، وخيارات تخصيص لمرافق الرعاية الصحية.`,
      h1: 'حلول اليونيفورم الطبي للعاملين في مجال الرعاية الصحية'
    },
    hospitality: {
      title: `يونيفورم الضيافة للفنادق والمطاعم | ${companyName}`,
      description: `أزياء أنيقة للفنادق، ملابس عمل للمطاعم، وأزياء الضيافة لقطاع الخدمات في المملكة العربية السعودية. تعزيز تجربة الضيوف مع زي موحد احترافي ومريح ومميز للموظفين.`,
      h1: 'حلول يونيفورم الضيافة لتميز الخدمة'
    },
    industrial: {
      title: `ملابس العمل الصناعية ويونيفورم السلامة في المملكة | ${companyName}`,
      description: `ملابس عمل صناعية متينة وأزياء موحدة للسلامة لقطاعات التصنيع والبناء والطاقة السعودية. أقمشة مقاومة للحرارة، ميزات حماية، وخيارات العلامات التجارية للشركات.`,
      h1: 'حلول ملابس العمل الصناعية للسلامة والإنتاجية'
    },
    school: {
      title: `زي مدرسي للمؤسسات التعليمية السعودية | ${companyName}`,
      description: `زي مدرسي عالي الجودة للمدارس الخاصة السعودية والأكاديميات الدولية والمؤسسات التعليمية. تصاميم مريحة ومتينة مع خيارات التخصيص وطلبات الشراء بالجملة.`,
      h1: 'حلول الزي المدرسي للتميز التعليمي'
    },
    security: {
      title: `يونيفورم الأمن وملابس الحراسة في المملكة | ${companyName}`,
      description: `أزياء أمنية احترافية وملابس عمل للحراس لشركات ومرافق الأمن السعودية. تصاميم متينة وذات سلطة مع وظائف عملية لعمليات الأمن.`,
      h1: 'حلول الزي الأمني للحماية الاحترافية'
    }
  };
  
  // Select content based on locale
  const content = locale === 'ar' ? industryContentAR[industry] : industryContentEN[industry];
  
  // Add location context if requested
  if (includeLocation && locale === 'en') {
    content.title = content.title.replace(' in Saudi Arabia', ' in Riyadh, Saudi Arabia');
    content.description = content.description.replace('Saudi ', 'Riyadh, Saudi ');
  } else if (includeLocation && locale === 'ar') {
    content.title = content.title.replace('في السعودية', 'في الرياض، السعودية');
    content.description = content.description.replace('السعودية', 'الرياض، السعودية');
  }
  
  return content;
}

/**
 * Generate title, description, and H1 for a service page
 */
export function generateServiceContent(
  service: ServiceType,
  locale: string = 'en',
  options: GeneratorOptions = defaultOptions
): TitleDescription {
  const { companyName, includeLocation, includeCTA } = { ...defaultOptions, ...options };
  
  // Service-specific content for English
  const serviceContentEN: Record<ServiceType, TitleDescription> = {
    design: {
      title: `Custom Uniform Design Services in Saudi Arabia | ${companyName}`,
      description: `Professional uniform design services tailored for Saudi businesses. From concept to creation, our expert designers develop distinctive workwear that enhances your brand identity.${includeCTA ? ' Contact us for a design consultation.' : ''}`,
      h1: 'Custom Uniform Design Services'
    },
    manufacturing: {
      title: `Uniform Manufacturing & Production in KSA | ${companyName}`,
      description: `High-quality uniform manufacturing for Saudi organizations. State-of-the-art production facilities, premium fabrics, and meticulous attention to detail ensure exceptional workwear.${includeCTA ? ' Request a manufacturing quote today.' : ''}`,
      h1: 'Professional Uniform Manufacturing Services'
    },
    delivery: {
      title: `Uniform Delivery & Distribution Services | ${companyName}`,
      description: `Reliable uniform delivery and distribution throughout Saudi Arabia. Efficient logistics, on-time delivery, and easy reordering systems for businesses of all sizes.${includeCTA ? ' Schedule your uniform delivery now.' : ''}`,
      h1: 'Efficient Uniform Delivery Solutions'
    },
    consulting: {
      title: `Uniform Consulting & Policy Development | ${companyName}`,
      description: `Expert uniform consulting services for Saudi companies. Our specialists help develop effective uniform policies, selection guidelines, and implementation strategies.${includeCTA ? ' Book a consultation with our experts.' : ''}`,
      h1: 'Professional Uniform Consulting Services'
    }
  };
  
  // Service-specific content for Arabic (optimized, not translated)
  const serviceContentAR: Record<ServiceType, TitleDescription> = {
    design: {
      title: `خدمات تصميم الزي الموحد المخصص في السعودية | ${companyName}`,
      description: `خدمات احترافية لتصميم اليونيفورم مصممة خصيصًا للشركات السعودية. من المفهوم إلى الإنشاء، يطور مصممونا الخبراء ملابس عمل مميزة تعزز هوية علامتك التجارية.${includeCTA ? ' اتصل بنا للحصول على استشارة تصميم.' : ''}`,
      h1: 'خدمات تصميم الزي الموحد المخصص'
    },
    manufacturing: {
      title: `تصنيع وإنتاج اليونيفورم في المملكة | ${companyName}`,
      description: `تصنيع يونيفورم عالي الجودة للمؤسسات السعودية. مرافق إنتاج حديثة، أقمشة ممتازة، واهتمام دقيق بالتفاصيل لضمان ملابس عمل استثنائية.${includeCTA ? ' اطلب عرض سعر للتصنيع اليوم.' : ''}`,
      h1: 'خدمات تصنيع اليونيفورم الاحترافية'
    },
    delivery: {
      title: `خدمات توصيل وتوزيع الزي الموحد | ${companyName}`,
      description: `توصيل وتوزيع موثوق للزي الموحد في جميع أنحاء المملكة العربية السعودية. خدمات لوجستية فعالة، توصيل في الوقت المحدد، وأنظمة إعادة طلب سهلة للشركات من جميع الأحجام.${includeCTA ? ' جدول توصيل الزي الموحد الآن.' : ''}`,
      h1: 'حلول توصيل اليونيفورم الفعالة'
    },
    consulting: {
      title: `استشارات اليونيفورم وتطوير السياسات | ${companyName}`,
      description: `خدمات استشارية متخصصة في الزي الموحد للشركات السعودية. يساعد متخصصونا في تطوير سياسات فعالة للزي الموحد، إرشادات الاختيار، واستراتيجيات التنفيذ.${includeCTA ? ' احجز استشارة مع خبرائنا.' : ''}`,
      h1: 'خدمات استشارات اليونيفورم الاحترافية'
    }
  };
  
  // Select content based on locale
  const content = locale === 'ar' ? serviceContentAR[service] : serviceContentEN[service];
  
  // Add location context if requested
  if (includeLocation && locale === 'en') {
    content.title = content.title.replace(' in Saudi Arabia', ' in Riyadh, Saudi Arabia');
    content.description = content.description.replace('Saudi ', 'Riyadh, Saudi ');
  } else if (includeLocation && locale === 'ar') {
    content.title = content.title.replace('في السعودية', 'في الرياض، السعودية');
    content.description = content.description.replace('السعودية', 'الرياض، السعودية');
  }
  
  return content;
}

/**
 * Generate title, description, and H1 for a location page
 */
export function generateLocationContent(
  location: LocationType,
  locale: string = 'en',
  options: GeneratorOptions = defaultOptions
): TitleDescription {
  const { companyName, includeCTA } = { ...defaultOptions, ...options };
  
  // Location names for English and Arabic
  const locationNames: Record<LocationType, {en: string, ar: string}> = {
    riyadh: {en: 'Riyadh', ar: 'الرياض'},
    jeddah: {en: 'Jeddah', ar: 'جدة'},
    dammam: {en: 'Dammam', ar: 'الدمام'},
    mecca: {en: 'Mecca', ar: 'مكة المكرمة'},
    medina: {en: 'Medina', ar: 'المدينة المنورة'}
  };
  
  // Get location name based on locale
  const locationName = locale === 'ar' ? locationNames[location].ar : locationNames[location].en;
  
  // Generate content based on locale
  if (locale === 'ar') {
    return {
      title: `يونيفورم وملابس العمل في ${locationName} | ${companyName}`,
      description: `مزود يونيفورم احترافي في ${locationName}. نقدم تصميم وتصنيع وتوريد زي موحد للشركات والمستشفيات والفنادق والمدارس في ${locationName} ومناطق محيطة.${includeCTA ? ' زر مقرنا أو اتصل بنا لمعرفة المزيد.' : ''}`,
      h1: `حلول اليونيفورم في ${locationName}`
    };
  } else {
    return {
      title: `Professional Uniforms & Workwear in ${locationName} | ${companyName}`,
      description: `Your trusted uniform provider in ${locationName}, Saudi Arabia. We design, manufacture, and supply uniforms for corporate, healthcare, hospitality, and schools in ${locationName} and surrounding areas.${includeCTA ? ' Visit our location or contact us to learn more.' : ''}`,
      h1: `Uniform Solutions in ${locationName}`
    };
  }
}

/**
 * Generate title, description, and H1 for a general page
 */
export function generatePageContent(
  pageType: 'home' | 'about' | 'contact' | 'quote' | 'faq',
  locale: string = 'en',
  options: GeneratorOptions = defaultOptions
): TitleDescription {
  const { companyName, includeLocation, includeCTA } = { ...defaultOptions, ...options };
  
  // Page-specific content for English
  const pageContentEN: Record<string, TitleDescription> = {
    home: {
      title: `Professional Uniforms & Workwear Solutions in Saudi Arabia | ${companyName}`,
      description: `Premium quality uniforms and workwear for corporate, healthcare, hospitality, and industrial sectors in Saudi Arabia. Custom designs, high-quality fabrics, and professional service.${includeCTA ? ' Request a quote today.' : ''}`,
      h1: 'Professional Uniform Solutions in Saudi Arabia'
    },
    about: {
      title: `About UNEOM | Leading Uniform Provider in Saudi Arabia`,
      description: `Learn about UNEOM, Saudi Arabia's premier uniform and workwear provider. Our history, values, expertise, and commitment to quality make us the trusted choice for professional attire.`,
      h1: 'About UNEOM - Saudi Arabia\'s Uniform Experts'
    },
    contact: {
      title: `Contact Us | UNEOM - Uniform Solutions in Saudi Arabia`,
      description: `Get in touch with UNEOM for all your uniform and workwear needs. Our team is ready to assist with inquiries, quotes, orders, and support for businesses across Saudi Arabia.`,
      h1: 'Contact UNEOM - Your Uniform Partner'
    },
    quote: {
      title: `Request a Quote | Custom Uniforms & Workwear | ${companyName}`,
      description: `Get a customized quote for your uniform and workwear requirements. Tell us about your needs, and our team will provide detailed pricing and options for your organization.`,
      h1: 'Request a Custom Uniform Quote'
    },
    faq: {
      title: `Frequently Asked Questions | Uniform Solutions | ${companyName}`,
      description: `Find answers to common questions about our uniform services, ordering process, customization options, delivery, and more. Get the information you need about our workwear solutions.`,
      h1: 'Frequently Asked Questions About Our Uniform Services'
    }
  };
  
  // Page-specific content for Arabic (optimized, not translated)
  const pageContentAR: Record<string, TitleDescription> = {
    home: {
      title: `حلول اليونيفورم وملابس العمل الاحترافية في السعودية | ${companyName}`,
      description: `يونيفورم وملابس عمل عالية الجودة للقطاعات المؤسسية والرعاية الصحية والضيافة والصناعية في المملكة العربية السعودية. تصاميم مخصصة، أقمشة عالية الجودة، وخدمة احترافية.${includeCTA ? ' اطلب عرض سعر اليوم.' : ''}`,
      h1: 'حلول اليونيفورم الاحترافية في المملكة العربية السعودية'
    },
    about: {
      title: `عن يونيوم | مزود اليونيفورم الرائد في السعودية`,
      description: `تعرف على يونيوم، مزود اليونيفورم وملابس العمل الأول في المملكة العربية السعودية. تاريخنا، قيمنا، خبرتنا، والتزامنا بالجودة يجعلنا الخيار الموثوق للملابس المهنية.`,
      h1: 'عن يونيوم - خبراء اليونيفورم في المملكة العربية السعودية'
    },
    contact: {
      title: `اتصل بنا | يونيوم - حلول اليونيفورم في السعودية`,
      description: `تواصل مع يونيوم لجميع احتياجاتك من اليونيفورم وملابس العمل. فريقنا جاهز للمساعدة في الاستفسارات، عروض الأسعار، الطلبات، والدعم للشركات في جميع أنحاء المملكة العربية السعودية.`,
      h1: 'اتصل بيونيوم - شريكك في اليونيفورم'
    },
    quote: {
      title: `طلب عرض سعر | يونيفورم وملابس عمل مخصصة | ${companyName}`,
      description: `احصل على عرض سعر مخصص لمتطلبات اليونيفورم وملابس العمل الخاصة بك. أخبرنا عن احتياجاتك، وسيقدم فريقنا أسعارًا مفصلة وخيارات لمؤسستك.`,
      h1: 'طلب عرض سعر لليونيفورم المخصص'
    },
    faq: {
      title: `الأسئلة الشائعة | حلول اليونيفورم | ${companyName}`,
      description: `ابحث عن إجابات للأسئلة الشائعة حول خدمات اليونيفورم لدينا، عملية الطلب، خيارات التخصيص، التوصيل، والمزيد. احصل على المعلومات التي تحتاجها حول حلول ملابس العمل لدينا.`,
      h1: 'الأسئلة المتداولة حول خدمات اليونيفورم لدينا'
    }
  };
  
  // Select content based on locale
  const content = locale === 'ar' ? pageContentAR[pageType] : pageContentEN[pageType];
  
  // Add location context if requested
  if (includeLocation && locale === 'en') {
    content.title = content.title.replace(' in Saudi Arabia', ' in Riyadh, Saudi Arabia');
    content.description = content.description.replace('Saudi ', 'Riyadh, Saudi ');
  } else if (includeLocation && locale === 'ar') {
    content.title = content.title.replace('في السعودية', 'في الرياض، السعودية');
    content.description = content.description.replace('السعودية', 'الرياض، السعودية');
  }
  
  return content;
}

export default {
  generateIndustryContent,
  generateServiceContent,
  generateLocationContent,
  generatePageContent
};
