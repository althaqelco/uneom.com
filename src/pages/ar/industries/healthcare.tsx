/**
 * Arabic Healthcare Uniforms Page
 * 
 * This page implements:
 * - Core Web Vitals optimizations for performance
 * - SEO best practices for Arabic content
 * - Structured data for rich snippets
 * - Proper RTL layout and typography for Arabic
 * - Performance-optimized image loading
 */

import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/industries/healthcare/HeroSection';
import BenefitsSection from '@/components/industries/healthcare/BenefitsSection';
import ProductCategoriesSection from '@/components/industries/healthcare/ProductCategoriesSection';
import RegionalTargetingSection from '@/components/industries/healthcare/RegionalTargetingSection';
import FAQSection from '@/components/industries/healthcare/FAQSection';
import LocalSEO from '@/components/seo/LocalSEO';
import RegionalSEO from '@/components/seo/RegionalSEO';
import HreflangTags from '@/components/seo/HreflangTags';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import { applyPerformanceOptimizations } from '@/lib/performance/web-vitals';

// Certifications section component
const CertificationsSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const certifications = [
    {
      title: isArabic ? 'مضاد للميكروبات' : 'Antimicrobial',
      description: isArabic 
        ? 'أقمشة معالجة لتثبيط نمو البكتيريا والفطريات، مما يساعد في الحفاظ على بيئة أكثر نظافة في المرافق الطبية.'
        : 'Fabrics treated to inhibit the growth of bacteria and fungi, helping to maintain a cleaner environment in medical facilities.',
      icon: '/images/industries/healthcare/cert-antimicrobial.svg',
      iconAlt: isArabic ? 'شهادة مضاد للميكروبات' : 'Antimicrobial certification'
    },
    {
      title: isArabic ? 'مقاوم للسوائل' : 'Fluid-Resistant',
      description: isArabic
        ? 'أقمشة مصممة لمنع السوائل من الاختراق، مما يوفر حماية إضافية ضد التعرض للسوائل في بيئات الرعاية الصحية.'
        : 'Fabrics designed to prevent fluid penetration, providing additional protection against exposure to fluids in healthcare environments.',
      icon: '/images/industries/healthcare/cert-fluid-resistant.svg',
      iconAlt: isArabic ? 'شهادة مقاوم للسوائل' : 'Fluid-resistant certification'
    },
    {
      title: isArabic ? 'سهل التنظيف' : 'Easy-Care',
      description: isArabic
        ? 'أقمشة تم اختبارها للتأكد من أنها تتحمل التعقيم والغسيل المتكرر بدرجات حرارة عالية دون فقدان الشكل أو اللون.'
        : 'Fabrics tested to ensure they withstand sanitization and repeated washing at high temperatures without losing shape or color.',
      icon: '/images/industries/healthcare/cert-easy-care.svg',
      iconAlt: isArabic ? 'شهادة سهل التنظيف' : 'Easy-care certification'
    },
    {
      title: isArabic ? 'مطابق للمعايير الطبية' : 'Medical Standard Compliant',
      description: isArabic
        ? 'منتجات تلبي معايير الصناعة للملابس الطبية، بما في ذلك معايير السلامة والمتانة المطلوبة للاستخدام في بيئات الرعاية الصحية.'
        : 'Products that meet industry standards for medical apparel, including safety and durability standards required for use in healthcare environments.',
      icon: '/images/industries/healthcare/cert-medical-standard.svg',
      iconAlt: isArabic ? 'شهادة مطابقة للمعايير الطبية' : 'Medical standard certification'
    }
  ];
  
  return (
    <section className="py-16 bg-blue-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'شهادات الجودة والمعايير' : 'Quality Certifications & Standards'}
          </h2>
          <p className="text-xl text-gray-600">
            {isArabic 
              ? 'منتجاتنا مصممة لتلبية أعلى معايير السلامة والجودة في مجال الرعاية الصحية'
              : 'Our products are designed to meet the highest safety and quality standards in healthcare'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className={`flex items-start p-6 bg-white rounded-lg shadow-md ${textAlign}`}>
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={cert.icon} 
                  alt={cert.iconAlt}
                  className="w-12 h-12"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to action component
const CTASection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  
  return (
    <section className="py-16 bg-blue-600 text-white" dir={textDir}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {isArabic 
            ? 'تحتاج زياً موحداً متخصصاً لمنشأتك الطبية؟'
            : 'Need specialized uniforms for your medical facility?'
          }
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {isArabic
            ? 'تواصل معنا اليوم للحصول على استشارة مجانية ولمناقشة احتياجات الزي الموحد للرعاية الصحية الخاصة بك.'
            : 'Contact us today for a free consultation and to discuss your healthcare uniform needs.'
          }
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300">
            {isArabic ? 'اطلب عرض سعر' : 'Request a Quote'}
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-bold transition duration-300">
            {isArabic ? 'تحدث مع مستشار' : 'Speak to a Consultant'}
          </button>
        </div>
      </div>
    </section>
  );
};

const HealthcarePage = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  // Apply performance optimizations on page load
  useEffect(() => {
    applyPerformanceOptimizations();
  }, []);
  
  // SEO metadata - using Arabic translations when locale is Arabic
  const pageTitle = isArabic 
    ? 'زي موحد للرعاية الصحية في السعودية | يونيوم - ملابس طبية احترافية'
    : 'Healthcare Uniforms in Saudi Arabia | UNEOM - Professional Medical Attire';
    
  const pageDescription = isArabic
    ? 'نقدم زي موحد للرعاية الصحية عالي الجودة للمستشفيات والعيادات في المملكة العربية السعودية. ملابس طبية مصممة للراحة والمتانة ومكافحة العدوى. تصميم وتصنيع محلي.'
    : 'We provide high-quality healthcare uniforms for hospitals and clinics in Saudi Arabia. Medical attire designed for comfort, durability, and infection control. Local design and manufacturing.';
    
  const pageKeywords = isArabic
    ? ['زي موحد للرعاية الصحية', 'ملابس طبية', 'يونيفورم مستشفيات', 'ملابس تمريض', 'معاطف أطباء', 'زي طبي في السعودية']
    : ['healthcare uniforms', 'medical attire', 'hospital uniforms', 'nursing uniforms', 'doctor coats', 'medical uniforms in Saudi Arabia'];
  
  const currentPath = '/ar/industries/healthcare/';
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
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.uneom.com/images/industries/healthcare/og-image-ar.jpg" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.uneom.com/images/industries/healthcare/twitter-image-ar.jpg" />
        
        {/* Language and Direction */}
        <meta httpEquiv="Content-Language" content="ar" />
        <html lang="ar" dir="rtl" />
      </Head>
      
      <MainLayout
        pageName="industries"
        subpage="healthcare"
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        specificIndustry="healthcare"
      >
        {/* Canonical URL */}
        <CanonicalUrl path={currentPath} />
        
        {/* Hreflang Tags */}
        <HreflangTags path={currentPath} />
        
        {/* Local Business Schema - This uses custom meta tags and schema under the hood */}
        {/* We'll update the implementation with proper typing in a future sprint */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              'name': 'يونيوم للأزياء الموحدة',
              'description': pageDescription,
              'image': 'https://www.uneom.com/images/logo.png',
              'areaServed': 'المملكة العربية السعودية',
              'url': canonicalUrl
            })
          }}
        />
        
        {/* Regional SEO Schema for targeting specific Saudi cities */}
        <RegionalSEO
          industryType="healthcare"
          regions={['riyadh', 'jeddah', 'dammam']}
          businessName="يونيوم للأزياء الموحدة"
          description={pageDescription}
          mainImage="https://www.uneom.com/images/industries/healthcare/main-ar.jpg"
        />
        
        {/* Main Page Content */}
        <HeroSection />
        <BenefitsSection />
        <ProductCategoriesSection />
        <RegionalTargetingSection />
        <CertificationsSection />
        <FAQSection />
        <CTASection />
      </MainLayout>
    </>
  );
};

export default HealthcarePage;


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

