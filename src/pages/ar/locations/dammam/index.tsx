/**
 * Arabic Dammam Location Page
 * 
 * This page implements:
 * - LocalBusiness schema for improved local search visibility
 * - GeoJSON-LD for map listings and geographic targeting
 * - Location-specific content optimized for Dammam customers
 * - Industry-specific focus on oil & gas and industrial sectors
 * - Arabic language optimization with proper RTL handling
 * - Core Web Vitals optimizations for performance
 */

import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '@/components/layouts/MainLayout';
import HreflangTags from '@/components/seo/HreflangTags';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import OptimizedImage from '@/components/images/OptimizedImage';
import { applyPerformanceOptimizations } from '@/lib/performance/web-vitals';
import { generateLocalBusinessSchema } from '@/lib/seo/local-business-schema';

// Hero Section for Dammam Location
const HeroSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const content = {
    en: {
      title: 'UNEOM Dammam',
      subtitle: 'Your industrial uniform specialists in the Eastern Province',
      description: 'Visit our showroom in Dammam to explore our complete range of industrial, oil & gas, corporate, and safety uniforms. Our expert team is ready to assist with your specialized uniform needs in the Eastern Province.',
      address: 'King Saud Street, Al Aziziyah District, Dammam 32424',
      cta: 'Contact Us'
    },
    ar: {
      title: 'يونيوم الدمام',
      subtitle: 'متخصصون في الزي الموحد الصناعي في المنطقة الشرقية',
      description: 'قم بزيارة معرضنا في الدمام لاستكشاف مجموعتنا الكاملة من الزي الموحد الصناعي، وزي قطاع النفط والغاز، والزي الموحد للشركات، وملابس السلامة. فريقنا من الخبراء جاهز لمساعدتك في احتياجات الزي الموحد المتخصصة في المنطقة الشرقية.',
      address: 'شارع الملك سعود، حي العزيزية، الدمام 32424',
      cta: 'اتصل بنا'
    }
  };
  
  const t = content[isArabic ? 'ar' : 'en'];
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  return (
    <section className="relative bg-blue-50">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className={`md:w-1/2 ${textAlign}`} dir={textDir}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 mb-6">
            {t.subtitle}
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {t.description}
          </p>
          <p className="font-semibold text-gray-800 mb-8">
            {t.address}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            {t.cta}
          </button>
        </div>
        
        <div className="md:w-1/2 mt-10 md:mt-0">
          <OptimizedImage
            src="/images/locations/dammam/storefront.jpg"
            alt={isArabic ? 'معرض يونيوم في الدمام' : 'UNEOM Dammam showroom'}
            width={800}
            height={600}
            priority={true} // This is an LCP element
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

// Contact Information Section
const ContactSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const content = {
    en: {
      title: 'Contact Information',
      address: 'King Saud Street, Al Aziziyah District, Dammam 32424, Saudi Arabia',
      phone: '+966 13 345 6789',
      email: 'dammam@uneom.com',
      hours: 'Opening Hours',
      hoursDetail: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      closed: 'Closed on Friday and Saturday',
      directions: 'Get Directions'
    },
    ar: {
      title: 'معلومات الاتصال',
      address: 'شارع الملك سعود، حي العزيزية، الدمام 32424، المملكة العربية السعودية',
      phone: '+966 13 345 6789',
      email: 'dammam@uneom.com',
      hours: 'ساعات العمل',
      hoursDetail: 'الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً',
      closed: 'مغلق يوم الجمعة والسبت',
      directions: 'احصل على الاتجاهات'
    }
  };
  
  const t = content[isArabic ? 'ar' : 'en'];
  
  return (
    <section className="py-16 bg-white" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${textAlign}`}>
            <h3 className="text-xl font-semibold mb-4">{t.hours}</h3>
            <p className="text-gray-700 mb-2">{t.hoursDetail}</p>
            <p className="text-gray-700 mb-6">{t.closed}</p>
            
            <h3 className="text-xl font-semibold mb-4">{isArabic ? 'العنوان' : 'Address'}</h3>
            <p className="text-gray-700 mb-6">{t.address}</p>
            
            <h3 className="text-xl font-semibold mb-4">{isArabic ? 'اتصل بنا' : 'Contact Us'}</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">{isArabic ? 'هاتف:' : 'Phone:'}</span> {t.phone}
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-medium">{isArabic ? 'بريد إلكتروني:' : 'Email:'}</span> {t.email}
            </p>
            
            <a 
              href="https://maps.google.com/?q=26.4207,50.0888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              {t.directions}
            </a>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-80">
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.6259397509994!2d50.08661471535894!3d26.42069398334191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI1JzE0LjUiTiA1MMKwMDUnMzIuMCJF!5e0!3m2!1sen!2ssa!4v1653389386221!5m2!1sen!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={isArabic ? 'خريطة موقع يونيوم الدمام' : 'Map of UNEOM Dammam location'}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section - Customized for Dammam's industrial focus
const ServicesSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const services = [
    {
      title: isArabic ? 'زي موحد لقطاع النفط والغاز' : 'Oil & Gas Sector Uniforms',
      description: isArabic 
        ? 'زي موحد متخصص لشركات النفط والغاز في المنطقة الشرقية، مصمم للامتثال لأعلى معايير السلامة والأداء.'
        : 'Specialized uniforms for oil and gas companies in the Eastern Province, designed to comply with the highest safety and performance standards.',
      icon: '/images/icons/oil-gas-icon.svg',
      iconAlt: isArabic ? 'أيقونة زي قطاع النفط والغاز' : 'Oil & gas uniforms icon'
    },
    {
      title: isArabic ? 'ملابس مقاومة للهب' : 'Flame-Resistant Workwear',
      description: isArabic
        ? 'ملابس عمل مقاومة للهب معتمدة للعاملين في القطاعات الصناعية، مصممة لتوفير الحماية القصوى في بيئات العمل الخطرة.'
        : 'Certified flame-resistant workwear for industrial sector workers, designed to provide maximum protection in hazardous work environments.',
      icon: '/images/icons/flame-resistant-icon.svg',
      iconAlt: isArabic ? 'أيقونة الملابس المقاومة للهب' : 'Flame-resistant workwear icon'
    },
    {
      title: isArabic ? 'الزي الموحد الصناعي المتخصص' : 'Specialized Industrial Uniforms',
      description: isArabic
        ? 'زي موحد مصمم خصيصًا للقطاعات الصناعية المختلفة في المنطقة الشرقية، بما في ذلك البتروكيماويات والتصنيع والتعدين.'
        : 'Tailored uniforms for various industrial sectors in the Eastern Province, including petrochemicals, manufacturing, and mining.',
      icon: '/images/icons/industrial-icon.svg',
      iconAlt: isArabic ? 'أيقونة الزي الصناعي' : 'Industrial uniforms icon'
    },
    {
      title: isArabic ? 'معدات الحماية الشخصية' : 'Personal Protective Equipment',
      description: isArabic
        ? 'مجموعة كاملة من معدات الحماية الشخصية المتوافقة مع الزي الموحد، بما في ذلك الخوذات والنظارات الواقية والقفازات وأحذية السلامة.'
        : 'Complete range of personal protective equipment to complement uniforms, including helmets, safety glasses, gloves, and safety footwear.',
      icon: '/images/icons/ppe-icon.svg',
      iconAlt: isArabic ? 'أيقونة معدات الحماية الشخصية' : 'PPE icon'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'خدماتنا في الدمام' : 'Our Services in Dammam'}
          </h2>
          <p className="text-xl text-gray-600">
            {isArabic 
              ? 'نقدم حلول الزي الموحد المتخصصة للقطاعات الصناعية في المنطقة الشرقية'
              : 'We offer specialized uniform solutions for industrial sectors in the Eastern Province'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`flex items-start p-6 bg-white rounded-lg shadow-md ${textAlign}`}>
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={service.icon} 
                  alt={service.iconAlt}
                  className="w-12 h-12"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Industrial Safety Standards Section - Specific to Dammam's focus
const SafetyStandardsSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const standards = [
    {
      name: isArabic ? 'معيار NFPA 2112' : 'NFPA 2112 Standard',
      description: isArabic 
        ? 'الملابس المقاومة للهب التي تتوافق مع معيار الجمعية الوطنية للحماية من الحرائق لحماية العاملين من خطر التعرض للهب.'
        : 'Flame-resistant garments that comply with the National Fire Protection Association standard for protecting workers from flash fire exposure hazards.'
    },
    {
      name: isArabic ? 'معيار ANSI/ISEA 107' : 'ANSI/ISEA 107 Standard',
      description: isArabic
        ? 'ملابس عالية الرؤية تلبي معايير المعهد الوطني الأمريكي للمعايير لتحسين رؤية العاملين في بيئات عمل خطرة.'
        : 'High-visibility clothing that meets American National Standards Institute requirements for enhanced visibility of workers in hazardous work environments.'
    },
    {
      name: isArabic ? 'معيار EN ISO 11612' : 'EN ISO 11612 Standard',
      description: isArabic
        ? 'ملابس حماية للعاملين المعرضين للحرارة واللهب، تلبي معايير الاتحاد الأوروبي للحماية والسلامة.'
        : 'Protective clothing for workers exposed to heat and flame, meeting European Union standards for protection and safety.'
    },
    {
      name: isArabic ? 'امتثال أرامكو السعودية' : 'Saudi Aramco Compliance',
      description: isArabic
        ? 'زي موحد يلبي متطلبات أرامكو السعودية الصارمة للسلامة وجودة الملابس للمقاولين والموظفين.'
        : 'Uniforms that meet Saudi Aramco\'s stringent requirements for safety and clothing quality for contractors and employees.'
    }
  ];
  
  return (
    <section className="py-16 bg-white" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'معايير السلامة الصناعية' : 'Industrial Safety Standards'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {isArabic 
              ? 'جميع الزي الموحد الصناعي الخاص بنا يلبي أو يتجاوز معايير السلامة الدولية التالية'
              : 'All our industrial uniforms meet or exceed the following international safety standards'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((standard, index) => (
            <div key={index} className={`p-6 border border-gray-200 rounded-lg ${textAlign}`}>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{standard.name}</h3>
              <p className="text-gray-700">{standard.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 ${textAlign}`}>
          <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            {isArabic 
              ? 'يلتزم فريق خبراء يونيوم في الدمام بمساعدتك في اختيار الزي الموحد الذي يلبي المتطلبات الدقيقة لصناعتك ومعاييرها.'
              : 'UNEOM\'s expert team in Dammam is committed to helping you select uniforms that meet the exact requirements of your industry and its standards.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  
  return (
    <section className="py-16 bg-blue-600 text-white" dir={textDir}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {isArabic 
            ? 'زور معرضنا في الدمام اليوم'
            : 'Visit Our Dammam Showroom Today'
          }
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {isArabic
            ? 'شاهد مجموعتنا الكاملة من الزي الموحد الصناعي وتحدث مع خبرائنا للحصول على استشارة مجانية.'
            : 'See our complete industrial uniform collection and speak with our experts for a free consultation.'
          }
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300">
            {isArabic ? 'احجز موعدًا' : 'Book Appointment'}
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-bold transition duration-300">
            {isArabic ? 'اتصل بنا' : 'Contact Us'}
          </button>
        </div>
      </div>
    </section>
  );
};

const DammamLocationPage = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  // Apply performance optimizations on page load
  useEffect(() => {
    applyPerformanceOptimizations();
  }, []);
  
  // Generate Local Business Schema
  const localBusinessSchema = generateLocalBusinessSchema('dammam', locale);
  
  // SEO metadata - using Arabic translations when locale is Arabic
  const pageTitle = isArabic 
    ? 'يونيوم الدمام | متجر الزي الموحد الصناعي المتخصص في الدمام، المملكة العربية السعودية'
    : 'UNEOM Dammam | Specialized Industrial Uniform Store in Dammam, Saudi Arabia';
    
  const pageDescription = isArabic
    ? 'زر متجر يونيوم في الدمام لاستكشاف مجموعتنا من الزي الموحد الصناعي وزي قطاع النفط والغاز. متخصصون في ملابس السلامة والملابس المقاومة للهب للقطاعات الصناعية في المنطقة الشرقية.'
    : 'Visit UNEOM store in Dammam to explore our collection of industrial and oil & gas sector uniforms. Specialists in safety wear and flame-resistant clothing for industrial sectors in the Eastern Province.';
    
  const pageKeywords = isArabic
    ? ['يونيوم الدمام', 'زي موحد صناعي الدمام', 'ملابس قطاع النفط', 'ملابس مقاومة للهب', 'زي شركات النفط', 'معدات السلامة الشخصية']
    : ['UNEOM Dammam', 'industrial uniforms Dammam', 'oil sector clothing', 'flame-resistant workwear', 'oil company uniforms', 'personal protective equipment'];
  
  const currentPath = '/ar/locations/dammam/';
  const canonicalUrl = `https://www.uneom.com${currentPath}`;
  
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://www.uneom.com/images/locations/dammam/storefront-social.jpg" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.uneom.com/images/locations/dammam/twitter-image.jpg" />
        
        {/* Language and Direction */}
        <meta httpEquiv="Content-Language" content="ar" />
        <html lang="ar" dir="rtl" />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      
      <MainLayout
        pageName="locations"
        subpage="dammam"
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        specificLocation="dammam"
      >
        {/* Canonical URL */}
        <CanonicalUrl url={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <HreflangTags currentPath={currentPath} />
        
        {/* Main Page Content */}
        <HeroSection />
        <ContactSection />
        <ServicesSection />
        <SafetyStandardsSection />
        <CTASection />
      </MainLayout>
    </>
  );
};

export default DammamLocationPage;


// Export for proper server-side rendering - fixes "2 Word Count / Low Text Ratio" issue
export const getStaticProps = async ({ locale }) => {
  // This ensures content is rendered server-side
  // Additional data fetching could be done here if needed
  return {
    props: {
      // Any props needed for the page
    }
  };
};

