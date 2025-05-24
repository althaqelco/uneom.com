/**
 * Arabic Corporate Uniforms Page
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
import HeroSection from '@/components/industries/corporate/HeroSection';
import BenefitsSection from '@/components/industries/corporate/BenefitsSection';
import ProductCategoriesSection from '@/components/industries/corporate/ProductCategoriesSection';
import RegionalTargetingSection from '@/components/industries/corporate/RegionalTargetingSection';
import RegionalCaseStudies from '@/components/industries/corporate/RegionalCaseStudies';
import FAQSection from '@/components/industries/corporate/FAQSection';
import RegionalSEO from '@/components/seo/RegionalSEO';
import HreflangTags from '@/components/seo/HreflangTags';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import { applyPerformanceOptimizations } from '@/lib/performance/web-vitals';

// Department-specific section component
const DepartmentSection = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const departments = [
    {
      title: isArabic ? 'الإدارة التنفيذية' : 'Executive Management',
      description: isArabic 
        ? 'زي موحد أنيق يعكس المكانة والاحترافية للإدارة العليا والتنفيذية.'
        : 'Elegant uniforms that reflect the status and professionalism of top and executive management.',
      image: '/images/industries/corporate/department-executives.jpg',
      imageAlt: isArabic ? 'زي موحد للإدارة التنفيذية' : 'Executive management uniforms'
    },
    {
      title: isArabic ? 'مكتب الاستقبال' : 'Front Office',
      description: isArabic
        ? 'زي موحد مميز لموظفي الاستقبال الذين يمثلون واجهة شركتك.'
        : 'Distinctive uniforms for reception staff who represent the face of your company.',
      image: '/images/industries/corporate/department-frontdesk.jpg',
      imageAlt: isArabic ? 'زي موحد لمكتب الاستقبال' : 'Front desk uniforms'
    },
    {
      title: isArabic ? 'الخدمات المساندة' : 'Support Services',
      description: isArabic
        ? 'زي موحد عملي ومريح للموظفين في الأقسام المساندة مع الحفاظ على المظهر المهني.'
        : 'Practical and comfortable uniforms for employees in support departments while maintaining a professional appearance.',
      image: '/images/industries/corporate/department-support.jpg',
      imageAlt: isArabic ? 'زي موحد للخدمات المساندة' : 'Support services uniforms'
    },
    {
      title: isArabic ? 'المبيعات والتسويق' : 'Sales & Marketing',
      description: isArabic
        ? 'زي موحد يمنح فريق المبيعات والتسويق مظهرًا احترافيًا مع حرية الحركة اللازمة لعملهم.'
        : 'Uniforms that give your sales and marketing team a professional look with the freedom of movement needed for their work.',
      image: '/images/industries/corporate/department-sales.jpg',
      imageAlt: isArabic ? 'زي موحد للمبيعات والتسويق' : 'Sales and marketing uniforms'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'حلول متخصصة لكل قسم' : 'Specialized Solutions for Each Department'}
          </h2>
          <p className="text-xl text-gray-600">
            {isArabic 
              ? 'نقدم زي موحد مصمم خصيصًا ليناسب احتياجات كل قسم في مؤسستك'
              : 'We offer uniforms specifically designed to suit the needs of each department in your organization'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className={`flex flex-col ${textAlign} bg-white rounded-lg shadow-md overflow-hidden`}>
              <div className="relative h-64">
                <img 
                  src={dept.image} 
                  alt={dept.imageAlt}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dept.title}</h3>
                <p className="text-gray-600">{dept.description}</p>
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
            ? 'جاهز لتحسين مظهر فريقك المهني؟'
            : 'Ready to enhance your team\'s professional appearance?'
          }
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {isArabic
            ? 'تواصل معنا اليوم للحصول على استشارة مجانية ولمناقشة احتياجات الزي الموحد لشركتك.'
            : 'Contact us today for a free consultation and to discuss your company\'s uniform needs.'
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

const CorporatePage = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  // Apply performance optimizations on page load
  useEffect(() => {
    applyPerformanceOptimizations();
  }, []);
  
  // SEO metadata - using Arabic translations when locale is Arabic
  const pageTitle = isArabic 
    ? 'زي موحد للشركات في السعودية | يونيوم - ملابس رسمية للموظفين'
    : 'Corporate Uniforms in Saudi Arabia | UNEOM - Professional Staff Attire';
    
  const pageDescription = isArabic
    ? 'نقدم زي موحد احترافي للشركات والمؤسسات في المملكة العربية السعودية. ملابس رسمية عالية الجودة مع إمكانية التخصيص حسب هوية علامتك التجارية. تصميم وتصنيع محلي.'
    : 'We provide professional corporate uniforms for companies and institutions in Saudi Arabia. High-quality formal attire with customization options according to your brand identity. Local design and manufacturing.';
    
  const pageKeywords = isArabic
    ? ['زي موحد للشركات', 'ملابس رسمية للموظفين', 'يونيفورم الشركات', 'زي موحد في السعودية', 'ملابس موظفين الشركات']
    : ['corporate uniforms', 'professional staff attire', 'company uniforms', 'uniforms in Saudi Arabia', 'business attire'];
  
  const currentPath = '/ar/industries/corporate/';
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
        <meta property="og:image" content="https://www.uneom.com/images/industries/corporate/og-image-ar.jpg" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.uneom.com/images/industries/corporate/twitter-image-ar.jpg" />
        
        {/* Language and Direction */}
        <meta httpEquiv="Content-Language" content="ar" />
        <html lang="ar" dir="rtl" />
      </Head>
      
      <MainLayout
        pageName="industries"
        subpage="corporate"
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        specificIndustry="corporate"
      >
        {/* Canonical URL */}
        <CanonicalUrl path={currentPath} />
        
        {/* Hreflang Tags */}
        <HreflangTags path={currentPath} />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ClothingStore',
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
          industryType="corporate"
          regions={['riyadh', 'jeddah', 'dammam']}
          businessName="يونيوم للأزياء الموحدة"
          description={pageDescription}
          mainImage="https://www.uneom.com/images/industries/corporate/main-ar.jpg"
        />
        
        {/* Main Page Content */}
        <HeroSection />
        <BenefitsSection />
        <ProductCategoriesSection />
        <RegionalTargetingSection />
        <DepartmentSection />
        <RegionalCaseStudies />
        <FAQSection />
        <CTASection />
      </MainLayout>
    </>
  );
};

export default CorporatePage;


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

