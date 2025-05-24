/**
 * Arabic Riyadh Location Page
 * 
 * This page implements:
 * - LocalBusiness schema for improved local search visibility
 * - GeoJSON-LD for map listings and geographic targeting
 * - Location-specific content optimized for Riyadh customers
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

// Hero Section for Riyadh Location
const HeroSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const content = {
    en: {
      title: 'UNEOM Riyadh',
      subtitle: 'Your premium uniform provider in the capital city',
      description: 'Visit our showroom in Riyadh to explore our complete range of corporate, healthcare, and hospitality uniforms. Our expert team is ready to assist with your uniform needs.',
      address: 'King Fahd Road, Al Olaya District, Riyadh 12211',
      cta: 'Contact Us'
    },
    ar: {
      title: 'يونيوم الرياض',
      subtitle: 'مزود الزي الموحد المتميز في العاصمة',
      description: 'قم بزيارة معرضنا في الرياض لاستكشاف مجموعتنا الكاملة من الزي الموحد للشركات والرعاية الصحية والضيافة. فريقنا من الخبراء جاهز لمساعدتك في احتياجات الزي الموحد الخاصة بك.',
      address: 'طريق الملك فهد، حي العليا، الرياض 12211',
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
            src="/images/locations/riyadh/storefront.jpg"
            alt={isArabic ? 'معرض يونيوم في الرياض' : 'UNEOM Riyadh showroom'}
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
      address: 'King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia',
      phone: '+966 11 123 4567',
      email: 'riyadh@uneom.com',
      hours: 'Opening Hours',
      hoursDetail: 'Sunday - Thursday: 9:00 AM - 5:00 PM',
      closed: 'Closed on Friday and Saturday',
      directions: 'Get Directions'
    },
    ar: {
      title: 'معلومات الاتصال',
      address: 'طريق الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية',
      phone: '+966 11 123 4567',
      email: 'riyadh@uneom.com',
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
              href="https://maps.google.com/?q=24.7136,46.6753" 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2097508146567!2d46.6731113!3d24.7135995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMjMuMiJF!5e0!3m2!1sen!2ssa!4v1653389188291!5m2!1sen!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={isArabic ? 'خريطة موقع يونيوم الرياض' : 'Map of UNEOM Riyadh location'}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const services = [
    {
      title: isArabic ? 'زي موحد للشركات' : 'Corporate Uniforms',
      description: isArabic 
        ? 'توفير زي موحد احترافي للشركات والمؤسسات في الرياض، مصمم خصيصًا لتعزيز هوية علامتك التجارية.'
        : 'Providing professional corporate uniforms for businesses and institutions in Riyadh, specially designed to enhance your brand identity.',
      icon: '/images/icons/corporate-icon.svg',
      iconAlt: isArabic ? 'أيقونة الزي الموحد للشركات' : 'Corporate uniforms icon'
    },
    {
      title: isArabic ? 'زي موحد للرعاية الصحية' : 'Healthcare Uniforms',
      description: isArabic
        ? 'زي طبي متخصص للمستشفيات والعيادات والمراكز الطبية في الرياض، مصمم للراحة والأداء الوظيفي.'
        : 'Specialized medical attire for hospitals, clinics, and medical centers in Riyadh, designed for comfort and functionality.',
      icon: '/images/icons/healthcare-icon.svg',
      iconAlt: isArabic ? 'أيقونة الزي الموحد للرعاية الصحية' : 'Healthcare uniforms icon'
    },
    {
      title: isArabic ? 'خدمات التخصيص' : 'Customization Services',
      description: isArabic
        ? 'خدمات تخصيص الزي الموحد في موقعنا بالرياض، بما في ذلك التطريز والطباعة وتصميم الشعارات والتعديلات المخصصة.'
        : 'On-site uniform customization services in our Riyadh location, including embroidery, printing, logo design, and custom alterations.',
      icon: '/images/icons/customization-icon.svg',
      iconAlt: isArabic ? 'أيقونة خدمات التخصيص' : 'Customization services icon'
    },
    {
      title: isArabic ? 'استشارات الزي الموحد' : 'Uniform Consultations',
      description: isArabic
        ? 'استشارات مخصصة مع خبراء الزي الموحد لدينا في الرياض لمساعدتك في اختيار الأنماط والألوان والأقمشة المناسبة لاحتياجاتك.'
        : 'Personalized consultations with our uniform experts in Riyadh to help you select the right styles, colors, and fabrics for your needs.',
      icon: '/images/icons/consultation-icon.svg',
      iconAlt: isArabic ? 'أيقونة استشارات الزي الموحد' : 'Uniform consultations icon'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'خدماتنا في الرياض' : 'Our Services in Riyadh'}
          </h2>
          <p className="text-xl text-gray-600">
            {isArabic 
              ? 'نقدم مجموعة كاملة من خدمات الزي الموحد في موقعنا بالرياض'
              : 'We offer a full range of uniform services at our Riyadh location'
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
            ? 'زور معرضنا في الرياض اليوم'
            : 'Visit Our Riyadh Showroom Today'
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

const RiyadhLocationPage = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  // Apply performance optimizations on page load
  useEffect(() => {
    applyPerformanceOptimizations();
  }, []);
  
  // Generate Local Business Schema
  const localBusinessSchema = generateLocalBusinessSchema('riyadh', locale);
  
  // SEO metadata - using Arabic translations when locale is Arabic
  const pageTitle = isArabic 
    ? 'يونيوم الرياض | متجر الزي الموحد المتميز في الرياض، المملكة العربية السعودية'
    : 'UNEOM Riyadh | Premium Uniform Store in Riyadh, Saudi Arabia';
    
  const pageDescription = isArabic
    ? 'زر متجر يونيوم في الرياض لاستكشاف مجموعتنا من الزي الموحد للشركات والرعاية الصحية والضيافة. خدمات مخصصة وفريق من الخبراء لمساعدتك في اختيار الزي الموحد المثالي.'
    : 'Visit UNEOM store in Riyadh to explore our collection of corporate, healthcare, and hospitality uniforms. Custom services and expert team to help you choose the perfect uniforms.';
    
  const pageKeywords = isArabic
    ? ['يونيوم الرياض', 'زي موحد في الرياض', 'ملابس الشركات الرياض', 'متجر زي موحد', 'زي طبي الرياض', 'زي الضيافة الرياض']
    : ['UNEOM Riyadh', 'uniforms in Riyadh', 'corporate clothing Riyadh', 'uniform store', 'medical uniforms Riyadh', 'hospitality uniforms Riyadh'];
  
  const currentPath = '/ar/locations/riyadh/';
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
        <meta property="og:image" content="https://www.uneom.com/images/locations/riyadh/storefront-social.jpg" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.uneom.com/images/locations/riyadh/twitter-image.jpg" />
        
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
        subpage="riyadh"
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        specificLocation="riyadh"
      >
        {/* Canonical URL */}
        <CanonicalUrl url={canonicalUrl} />
        
        {/* Hreflang Tags */}
        <HreflangTags currentPath={currentPath} />
        
        {/* Main Page Content */}
        <HeroSection />
        <ContactSection />
        <ServicesSection />
        <CTASection />
      </MainLayout>
    </>
  );
};

export default RiyadhLocationPage;


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

