/**
 * Arabic Jeddah Location Page
 * 
 * This page implements:
 * - LocalBusiness schema for improved local search visibility
 * - GeoJSON-LD for map listings and geographic targeting
 * - Location-specific content optimized for Jeddah customers
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

// Hero Section for Jeddah Location
const HeroSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const content = {
    en: {
      title: 'UNEOM Jeddah',
      subtitle: 'Your premium uniform provider in the commercial hub of Saudi Arabia',
      description: 'Visit our showroom in Jeddah to explore our complete range of corporate, healthcare, and hospitality uniforms. Our expert team is ready to assist with your uniform needs in the western region.',
      address: 'Prince Mohammed Bin Abdulaziz St, Al Rawdah District, Jeddah 23432',
      cta: 'Contact Us'
    },
    ar: {
      title: 'يونيوم جدة',
      subtitle: 'مزود الزي الموحد المتميز في المركز التجاري للمملكة العربية السعودية',
      description: 'قم بزيارة معرضنا في جدة لاستكشاف مجموعتنا الكاملة من الزي الموحد للشركات والرعاية الصحية والضيافة. فريقنا من الخبراء جاهز لمساعدتك في احتياجات الزي الموحد الخاصة بك في المنطقة الغربية.',
      address: 'شارع الأمير محمد بن عبد العزيز، حي الروضة، جدة 23432',
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
            src="/images/locations/jeddah/storefront.jpg"
            alt={isArabic ? 'معرض يونيوم في جدة' : 'UNEOM Jeddah showroom'}
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
      address: 'Prince Mohammed Bin Abdulaziz St, Al Rawdah District, Jeddah 23432, Saudi Arabia',
      phone: '+966 12 234 5678',
      email: 'jeddah@uneom.com',
      hours: 'Opening Hours',
      hoursDetail: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      closed: 'Closed on Friday and Saturday',
      directions: 'Get Directions'
    },
    ar: {
      title: 'معلومات الاتصال',
      address: 'شارع الأمير محمد بن عبد العزيز، حي الروضة، جدة 23432، المملكة العربية السعودية',
      phone: '+966 12 234 5678',
      email: 'jeddah@uneom.com',
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
              href="https://maps.google.com/?q=21.5433,39.1728" 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6324868894893!2d39.17095441532057!3d21.543271685663733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMyJzM1LjgiTiAzOcKwMTAnMjIuMiJF!5e0!3m2!1sen!2ssa!4v1653389290154!5m2!1sen!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={isArabic ? 'خريطة موقع يونيوم جدة' : 'Map of UNEOM Jeddah location'}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section - Customized for Jeddah's unique offerings
const ServicesSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const services = [
    {
      title: isArabic ? 'زي موحد للضيافة والفنادق' : 'Hospitality & Hotel Uniforms',
      description: isArabic 
        ? 'متخصصون في توفير زي موحد للفنادق والمطاعم والمنتجعات في جدة، مصمم خصيصًا لتعزيز تجربة الضيافة الفاخرة.'
        : 'Specialized in providing uniforms for hotels, restaurants, and resorts in Jeddah, designed to enhance the luxury hospitality experience.',
      icon: '/images/icons/hospitality-icon.svg',
      iconAlt: isArabic ? 'أيقونة الزي الموحد للضيافة' : 'Hospitality uniforms icon'
    },
    {
      title: isArabic ? 'زي موحد للشركات' : 'Corporate Uniforms',
      description: isArabic
        ? 'زي موحد احترافي للشركات والمؤسسات في جدة، مصمم للبيئة التجارية النشطة في المدينة.'
        : 'Professional corporate uniforms for businesses and institutions in Jeddah, designed for the city\'s active commercial environment.',
      icon: '/images/icons/corporate-icon.svg',
      iconAlt: isArabic ? 'أيقونة الزي الموحد للشركات' : 'Corporate uniforms icon'
    },
    {
      title: isArabic ? 'خدمات التطريز المتخصص' : 'Specialized Embroidery Services',
      description: isArabic
        ? 'خدمات تطريز متخصصة في موقعنا بجدة، متاحة للشعارات المعقدة والتصاميم المخصصة للشركات والمؤسسات.'
        : 'Specialized embroidery services at our Jeddah location, available for complex logos and custom designs for businesses and institutions.',
      icon: '/images/icons/embroidery-icon.svg',
      iconAlt: isArabic ? 'أيقونة خدمات التطريز' : 'Embroidery services icon'
    },
    {
      title: isArabic ? 'زي موحد للمناسبات الخاصة' : 'Special Events Uniforms',
      description: isArabic
        ? 'زي موحد للمناسبات والمؤتمرات والفعاليات الخاصة في جدة، مع خيارات تصميم وتسليم سريعة.'
        : 'Uniforms for events, conferences, and special occasions in Jeddah, with rapid design and delivery options.',
      icon: '/images/icons/events-icon.svg',
      iconAlt: isArabic ? 'أيقونة زي المناسبات الخاصة' : 'Special events uniforms icon'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'خدماتنا في جدة' : 'Our Services in Jeddah'}
          </h2>
          <p className="text-xl text-gray-600">
            {isArabic 
              ? 'نقدم مجموعة متخصصة من خدمات الزي الموحد في موقعنا بجدة'
              : 'We offer specialized uniform services at our Jeddah location'
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

// Jeddah-specific Hospitality Industry Focus Section
const HospitalityFocusSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  return (
    <section className="py-16 bg-white" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'تخصصنا في قطاع الضيافة بجدة' : 'Our Hospitality Expertise in Jeddah'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {isArabic 
              ? 'نحن متخصصون في توفير الزي الموحد لقطاع الضيافة المزدهر في جدة'
              : 'We specialize in providing uniforms for Jeddah\'s thriving hospitality sector'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`bg-blue-50 p-6 rounded-lg shadow-md ${textAlign}`}>
            <h3 className="text-xl font-semibold mb-4">
              {isArabic ? 'الفنادق الفاخرة' : 'Luxury Hotels'}
            </h3>
            <p className="text-gray-700 mb-4">
              {isArabic
                ? 'زي موحد عالي الجودة مصمم خصيصًا للفنادق الفاخرة في جدة، مع التركيز على الأناقة والراحة والمتانة.'
                : 'High-quality uniforms specially designed for luxury hotels in Jeddah, with emphasis on elegance, comfort, and durability.'
              }
            </p>
            <OptimizedImage
              src="/images/locations/jeddah/luxury-hotel.jpg"
              alt={isArabic ? 'زي موحد للفنادق الفاخرة في جدة' : 'Luxury hotel uniforms in Jeddah'}
              width={400}
              height={250}
              className="rounded-lg mt-4"
            />
          </div>
          
          <div className={`bg-blue-50 p-6 rounded-lg shadow-md ${textAlign}`}>
            <h3 className="text-xl font-semibold mb-4">
              {isArabic ? 'المطاعم والمقاهي' : 'Restaurants & Cafés'}
            </h3>
            <p className="text-gray-700 mb-4">
              {isArabic
                ? 'زي موحد عملي وأنيق للمطاعم والمقاهي في جدة، مصمم لتحمل بيئة العمل المزدحمة مع الحفاظ على المظهر الاحترافي.'
                : 'Practical and stylish uniforms for restaurants and cafés in Jeddah, designed to withstand busy work environments while maintaining a professional appearance.'
              }
            </p>
            <OptimizedImage
              src="/images/locations/jeddah/restaurant.jpg"
              alt={isArabic ? 'زي موحد للمطاعم في جدة' : 'Restaurant uniforms in Jeddah'}
              width={400}
              height={250}
              className="rounded-lg mt-4"
            />
          </div>
          
          <div className={`bg-blue-50 p-6 rounded-lg shadow-md ${textAlign}`}>
            <h3 className="text-xl font-semibold mb-4">
              {isArabic ? 'المنتجعات والمرافق السياحية' : 'Resorts & Tourist Facilities'}
            </h3>
            <p className="text-gray-700 mb-4">
              {isArabic
                ? 'زي موحد خاص للمنتجعات والمرافق السياحية في جدة، مصمم لمناخ البحر الأحمر مع مواد مقاومة للماء والأشعة فوق البنفسجية.'
                : 'Specialized uniforms for resorts and tourist facilities in Jeddah, designed for the Red Sea climate with water-resistant and UV-protected materials.'
              }
            </p>
            <OptimizedImage
              src="/images/locations/jeddah/resort.jpg"
              alt={isArabic ? 'زي موحد للمنتجعات في جدة' : 'Resort uniforms in Jeddah'}
              width={400}
              height={250}
              className="rounded-lg mt-4"
            />
          </div>
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
            ? 'زور معرضنا في جدة اليوم'
            : 'Visit Our Jeddah Showroom Today'
          }
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {isArabic
            ? 'شاهد مجموعتنا الكاملة من الزي الموحد وتحدث مع خبرائنا للحصول على استشارة مجانية.'
            : 'See our complete uniform collection and speak with our experts for a free consultation.'
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

const JeddahLocationPage = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  // Apply performance optimizations on page load
  useEffect(() => {
    applyPerformanceOptimizations();
  }, []);
  
  // Generate Local Business Schema
  const localBusinessSchema = generateLocalBusinessSchema('jeddah', locale);
  
  // SEO metadata - using Arabic translations when locale is Arabic
  const pageTitle = isArabic 
    ? 'يونيوم جدة | متجر الزي الموحد المتميز في جدة، المملكة العربية السعودية'
    : 'UNEOM Jeddah | Premium Uniform Store in Jeddah, Saudi Arabia';
    
  const pageDescription = isArabic
    ? 'زر متجر يونيوم في جدة لاستكشاف مجموعتنا من الزي الموحد للضيافة والشركات. متخصصون في زي الفنادق والمطاعم والمنتجعات في المنطقة الغربية من المملكة العربية السعودية.'
    : 'Visit UNEOM store in Jeddah to explore our collection of hospitality and corporate uniforms. Specialists in hotel, restaurant, and resort uniforms in the western region of Saudi Arabia.';
    
  const pageKeywords = isArabic
    ? ['يونيوم جدة', 'زي موحد في جدة', 'ملابس الفنادق جدة', 'متجر زي موحد', 'زي الضيافة جدة', 'زي المطاعم جدة']
    : ['UNEOM Jeddah', 'uniforms in Jeddah', 'hotel clothing Jeddah', 'uniform store', 'hospitality uniforms Jeddah', 'restaurant uniforms Jeddah'];
  
  const currentPath = '/ar/locations/jeddah/';
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
        <meta property="og:image" content="https://www.uneom.com/images/locations/jeddah/storefront-social.jpg" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.uneom.com/images/locations/jeddah/twitter-image.jpg" />
        
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
        subpage="jeddah"
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        specificLocation="jeddah"
      >
        {/* Canonical URL */}
        <CanonicalUrl url={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <HreflangTags currentPath={currentPath} />
        
        {/* Main Page Content */}
        <HeroSection />
        <ContactSection />
        <ServicesSection />
        <HospitalityFocusSection />
        <CTASection />
      </MainLayout>
    </>
  );
};

export default JeddahLocationPage;


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

