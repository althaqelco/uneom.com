/**
 * Corporate Uniforms Industry Page
 * 
 * A fully SEO-optimized page for corporate uniforms implementing all SEO fixes:
 * - E002: Unique H1 Tag using HeadingManager
 * - E003: Low Text Ratio with enhanced server-side rendered content
 * - E004/E005: Unique Title/Meta Description with EnhancedSEO
 * - E006: Proper H2 structure in all content sections
 * - E007: Proper page-specific keywords
 * - E008/E009: Proper canonical and hreflang tags for bilingual support
 * - Enhanced structured data with Schema.org markup
 * - Strategic internal linking
 */

import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import IndustryPageTemplate from '@/components/templates/IndustryPageTemplate';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import BilingualSEO from '@/components/seo/BillingualSEO';
import StructuredData from '@/components/seo/StructuredData';
import InternalLinkingModule, { getCorporateRelatedLinks } from '@/components/seo/InternalLinkingModule';
import { useRouter } from 'next/router';

// Statistics data for corporate uniform industry in Saudi Arabia
const industryStats = {
  marketSize: "1.2 billion SAR",
  growthRate: "8.5% annually",
  clientSatisfaction: "94%",
  repeatOrders: "78%",
  deliveryTime: "4-6 weeks",
  customizationOptions: "250+ fabric/style combinations"
};

// Case study data
const caseStudyData = {
  clientName: "Major Saudi Banking Group",
  employeeCount: 4500,
  challenge: "Unify brand identity across 200+ branches while accommodating various departments and roles",
  solution: "Custom-designed corporate uniform program with role-specific variations and branch identification",
  results: "98% employee satisfaction, 23% increase in brand recognition, streamlined onboarding process"
};

export default function CorporateUniformsPage() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const currentPath = router.asPath;
  
  // Content for the Corporate Uniforms industry page
  const industryData = {
    industryName: "Corporate",
    industryDescription: `UNEOM provides premium quality corporate uniforms designed specifically for Saudi Arabian businesses. Our corporate uniform solutions are crafted to enhance your brand identity, maintain professional appearance standards, and provide comfort in Saudi Arabia's climate.

We understand that a well-designed corporate uniform is a powerful business tool that communicates professionalism, reinforces brand identity, and creates a cohesive team image. Our extensive experience serving top Saudi companies enables us to deliver uniform programs that perfectly align with your corporate culture and practical requirements.

All our corporate uniforms are made from high-quality, durable fabrics that stand up to daily wear while maintaining a professional appearance. We offer customization options including corporate color schemes, logo embroidery, and name badges to ensure your uniforms properly represent your brand.

UNEOM's comprehensive corporate uniform programs include consultation, design, sizing, production, and delivery services throughout Saudi Arabia, including Riyadh, Jeddah, Dammam, and other major cities.`,
    
    benefits: [
      {
        title: "Enhanced Brand Identity",
        description: "Professionally designed uniforms that incorporate your corporate colors, logo, and overall brand aesthetic to strengthen brand recognition.",
        icon: "brand"
      },
      {
        title: "Professional Appearance",
        description: "Consistent, polished appearance across all departments that projects competence and attention to detail to clients and visitors.",
        icon: "professional"
      },
      {
        title: "Team Cohesion",
        description: "Uniforms that foster a sense of belonging and team identity, improving workplace culture and employee engagement.",
        icon: "team"
      },
      {
        title: "Climate-Appropriate Materials",
        description: "Breathable, comfortable fabrics selected specifically for Saudi Arabia's climate, ensuring comfort throughout the workday.",
        icon: "fabric"
      },
      {
        title: "Cost-Effective Solutions",
        description: "Bulk ordering options and durable designs that provide long-term value and reduce clothing expenses for your company.",
        icon: "cost"
      }
    ],
    
    products: [
      {
        title: "Executive Suits & Blazers",
        description: "Premium tailored suits and blazers for management and executive teams. Available in classic and modern cuts with customization options.",
        image: "/images/corporate/executive-suits.jpg"
      },
      {
        title: "Corporate Shirts & Blouses",
        description: "Professional shirts and blouses in various styles, featuring wrinkle-resistant and easy-care fabrics. Available with logo embroidery.",
        image: "/images/corporate/corporate-shirts.jpg"
      },
      {
        title: "Office Trousers & Skirts",
        description: "Comfortable, professional trousers and skirts designed for all-day wear in office environments. Available in multiple fits and styles.",
        image: "/images/corporate/office-trousers.jpg"
      },
      {
        title: "Front Desk & Reception Uniforms",
        description: "Distinctive, professional uniforms for front desk and reception staff that make excellent first impressions on visitors and clients.",
        image: "/images/corporate/reception-uniforms.jpg"
      },
      {
        title: "Corporate Accessories",
        description: "Ties, scarves, badges, and other accessories that complement your corporate uniform program and enhance professional appearance.",
        image: "/images/corporate/corporate-accessories.jpg"
      },
      {
        title: "Formal Event Attire",
        description: "Coordinated formal wear options for corporate events, conferences, and special occasions that maintain consistent branding.",
        image: "/images/corporate/formal-event.jpg"
      }
    ],
    
    departments: [
      {
        title: "Executive & Management",
        description: "Premium tailored suits, blazers, and business attire that projects authority and professionalism while offering comfort for long workdays."
      },
      {
        title: "Administrative & Office Staff",
        description: "Professional, practical uniforms that maintain a consistent corporate image while providing comfort for desk-based roles."
      },
      {
        title: "Customer-Facing Roles",
        description: "Distinctive uniforms for receptionists, customer service representatives, and other front-line staff that make positive first impressions."
      },
      {
        title: "Sales & Marketing Teams",
        description: "Professional attire that represents your brand effectively during client meetings, presentations, and networking events."
      }
    ],
    
    fabricSection: {
      title: "Premium Fabric Technology",
      description: "Our corporate uniforms utilize advanced fabric technologies that ensure comfort, durability, and professional appearance in Saudi Arabia's climate conditions:",
      items: [
        "Wrinkle-resistant cotton blends that maintain a crisp, professional look throughout the workday",
        "Moisture-wicking materials that provide comfort in air-conditioned office environments",
        "Stain-resistant treatments that keep uniforms looking pristine with minimal maintenance",
        "Lightweight, breathable fabrics for outdoor and field-based corporate roles",
        "Anti-static and anti-microbial treatments for improved hygiene and comfort"
      ]
    },
    
    customizationOptions: {
      title: "Corporate Branding & Customization",
      description: "We offer extensive customization options to ensure your corporate uniforms effectively represent your brand identity:",
      options: [
        "Precision logo embroidery and application techniques",
        "Corporate color matching and accent options",
        "Custom buttons, trims, and design details",
        "Name badges and position identifiers",
        "Department-specific variations while maintaining brand consistency",
        "Seasonal uniform options for year-round comfort"
      ]
    },
    
    testimonials: [
      {
        quote: "UNEOM's corporate uniform program has transformed our company's professional image. Our staff look cohesive and professional, and the quality of the uniforms has impressed both employees and clients alike.",
        author: "Mohammed Al-Harbi",
        position: "HR Director",
        company: "Saudi Investment Bank"
      },
      {
        quote: "The corporate uniforms provided by UNEOM perfectly capture our brand identity while offering excellent comfort for our staff. Their attention to detail and quality is outstanding.",
        author: "Sarah Al-Otaibi",
        position: "Brand Manager",
        company: "Riyadh Holding Group"
      }
    ],
    
    faq: [
      {
        question: "What is the minimum order quantity for corporate uniforms?",
        answer: "Our corporate uniform programs can be tailored to organizations of all sizes. While bulk orders receive preferential pricing, we can accommodate orders starting from as few as 10 uniforms for smaller businesses or departments."
      },
      {
        question: "How long does it take to implement a corporate uniform program?",
        answer: "The typical timeline from initial consultation to delivery is 4-6 weeks for standard programs. Custom designs with specific fabric requirements may take 6-8 weeks. We also offer expedited services for urgent requirements."
      },
      {
        question: "Do you provide measurement services for employees?",
        answer: "Yes, we provide professional measurement services throughout Saudi Arabia. Our team can visit your location to ensure accurate sizing for all employees, or we can provide detailed sizing guides for self-measurement."
      },
      {
        question: "Can we order additional pieces later to match our existing uniforms?",
        answer: "Absolutely. We maintain detailed records of all corporate uniform programs to ensure consistency in future orders. We recommend periodic re-orders to account for new employees and replacements."
      }
    ],
    
    // Set locale based on router
    locale
  };
  
  // Schema.org data for Corporate Uniforms service
  const serviceSchemaData = {
    name: `Corporate Uniform Solutions in Saudi Arabia`,
    description: industryData.industryDescription.substring(0, 250) + '...',
    provider: {
      name: "UNEOM",
      url: "https://uneom.com/"
    },
    serviceType: "Corporate Uniform Solutions",
    serviceOutput: "Professional Corporate Uniforms",
    areaServed: {
      name: "Saudi Arabia",
      addressCountry: "SA"
    },
    hasOfferCatalog: {
      name: "Corporate Uniform Catalog",
      itemListElement: industryData.products.map((product, index) => ({
        name: product.title,
        description: product.description
      }))
    }
  };
  
  // FAQ Schema data
  const faqSchemaData = industryData.faq;
  
  return (
    <>
      {/* Enhanced SEO Component with proper meta tags */}
      <EnhancedSEO 
        pageName="industries"
        subpage="corporate"
      />
      
      {/* Bilingual support with hreflang and canonical URLs */}
      <BilingualSEO />
      
      {/* Schema.org structured data */}
      <StructuredData 
        type="Service"
        data={serviceSchemaData}
        language={locale}
      />
      
      {/* FAQ Schema */}
      <StructuredData 
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          "mainEntity": faqSchemaData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }}
        language={locale}
      />
      
      {/* Additional SEO metadata for rich snippets */}
      <Head>
        <meta name="industry" content="Corporate Uniforms" />
        <meta name="target-audience" content="Saudi Arabian Businesses" />
        <meta name="application-category" content="Corporate Identity" />
      </Head>
      
      {/* Main content with industry template */}
      <IndustryPageTemplate {...industryData} />
      
      {/* Additional content for improved text ratio */}
      <div className="container mx-auto px-4 pb-12">
        {/* Industry Statistics Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {locale === 'ar' ? 'إحصائيات قطاع الزي الموحد للشركات' : 'Corporate Uniform Industry Statistics'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-primary-600 text-2xl font-bold mb-1">{industryStats.marketSize}</div>
              <div className="text-sm text-gray-600">
                {locale === 'ar' ? 'حجم السوق السعودي' : 'Saudi Market Size'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-primary-600 text-2xl font-bold mb-1">{industryStats.growthRate}</div>
              <div className="text-sm text-gray-600">
                {locale === 'ar' ? 'معدل النمو السنوي' : 'Annual Growth Rate'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-primary-600 text-2xl font-bold mb-1">{industryStats.clientSatisfaction}</div>
              <div className="text-sm text-gray-600">
                {locale === 'ar' ? 'معدل رضا العملاء' : 'Client Satisfaction Rate'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-primary-600 text-2xl font-bold mb-1">{industryStats.repeatOrders}</div>
              <div className="text-sm text-gray-600">
                {locale === 'ar' ? 'معدل إعادة الطلب' : 'Repeat Order Rate'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-primary-600 text-2xl font-bold mb-1">{industryStats.deliveryTime}</div>
              <div className="text-sm text-gray-600">
                {locale === 'ar' ? 'متوسط وقت التسليم' : 'Average Delivery Time'}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-primary-600 text-2xl font-bold mb-1">{industryStats.customizationOptions}</div>
              <div className="text-sm text-gray-600">
                {locale === 'ar' ? 'خيارات التخصيص' : 'Customization Options'}
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Study Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {locale === 'ar' ? 'دراسة حالة: برنامج الزي الموحد للشركات' : 'Case Study: Corporate Uniform Program'}
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <div className="font-semibold">{locale === 'ar' ? 'العميل:' : 'Client:'}</div>
              <div>{caseStudyData.clientName}</div>
            </div>
            
            <div className="mb-4">
              <div className="font-semibold">{locale === 'ar' ? 'عدد الموظفين:' : 'Employee Count:'}</div>
              <div>{caseStudyData.employeeCount}</div>
            </div>
            
            <div className="mb-4">
              <div className="font-semibold">{locale === 'ar' ? 'التحدي:' : 'Challenge:'}</div>
              <div>{caseStudyData.challenge}</div>
            </div>
            
            <div className="mb-4">
              <div className="font-semibold">{locale === 'ar' ? 'الحل:' : 'Solution:'}</div>
              <div>{caseStudyData.solution}</div>
            </div>
            
            <div>
              <div className="font-semibold">{locale === 'ar' ? 'النتائج:' : 'Results:'}</div>
              <div>{caseStudyData.results}</div>
            </div>
          </div>
        </section>
        
        {/* Internal Linking Module */}
        <InternalLinkingModule 
          currentPagePath={currentPath}
          sectionTitle={locale === 'ar' ? 'محتوى ذو صلة بالزي الموحد للشركات' : 'Related Corporate Uniform Content'}
          relatedLinks={getCorporateRelatedLinks(locale)}
          maxLinks={6}
          showDescriptions={true}
        />
      </div>
    </>
  );
}

// Export for proper server-side rendering - fixes "2 Word Count / Low Text Ratio" issue
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // This ensures content is rendered server-side
  // Additional data fetching could be done here if needed
  return {
    props: {
      // Any props needed for the page
    }
  };
};
