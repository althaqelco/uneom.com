/**
 * Service Page Template
 * 
 * A standardized template for service pages that implements all SEO fixes.
 * This template ensures proper H1 tags, sufficient text content, semantic HTML,
 * and proper meta tags across all service pages.
 */

import React from 'react';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import HeadingManager from '@/components/seo/HeadingManager';
import EnhancedContent from '@/components/seo/EnhancedContent';

interface ServicePageTemplateProps {
  serviceName: string;
  serviceDescription: string;
  heroImage?: string;
  keyFeatures: {
    title: string;
    description: string;
    icon?: string;
  }[];
  processSteps?: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits?: {
    title: string;
    description: string;
  }[];
  casesStudies?: {
    title: string;
    description: string;
    image?: string;
    results?: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  ctaText?: string;
  ctaLink?: string;
  locale?: 'en' | 'ar';
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  serviceName,
  serviceDescription,
  heroImage,
  keyFeatures,
  processSteps,
  benefits,
  casesStudies,
  faq,
  ctaText,
  ctaLink,
  locale = 'en'
}) => {
  const isRTL = locale === 'ar';
  const textDir = isRTL ? 'rtl' : 'ltr';
  const textAlign = isRTL ? 'text-right' : 'text-left';
  
  // Prepare content sections for EnhancedContent
  const contentSections = [
    {
      heading: locale === 'en' ? "About This Service" : "حول هذه الخدمة",
      content: serviceDescription,
      id: "about-section"
    }
  ];
  
  if (keyFeatures && keyFeatures.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "Key Features" : "الميزات الرئيسية",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="p-4 border rounded-lg">
              {feature.icon && (
                <div className="text-primary-600 mb-3">
                  {/* Icon implementation */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      ),
      id: "features-section"
    });
  }
  
  if (processSteps && processSteps.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "Our Process" : "عمليتنا",
      content: (
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-4 border-b last:border-b-0">
              <div className="md:w-16 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
              </div>
              <div className={`flex-grow ${textAlign}`}>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      id: "process-section"
    });
  }
  
  if (benefits && benefits.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "Benefits" : "الفوائد",
      content: (
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      ),
      id: "benefits-section"
    });
  }
  
  if (casesStudies && casesStudies.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "Case Studies" : "دراسات الحالة",
      content: (
        <div className="space-y-8">
          {casesStudies.map((caseStudy, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              {caseStudy.image && (
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{caseStudy.title}</h3>
                <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                {caseStudy.results && (
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="font-medium text-green-800">
                      {locale === 'en' ? 'Results: ' : 'النتائج: '}
                      {caseStudy.results}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ),
      id: "case-studies-section"
    });
  }
  
  // Generate schema.org JSON-LD for service page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} by UNEOM`,
    "description": serviceDescription,
    "provider": {
      "@type": "Organization",
      "name": "UNEOM",
      "url": "https://uneom.com/"
    },
    "serviceType": serviceName,
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    }
  };
  
  return (
    <div dir={textDir}>
      {/* SEO Component with all meta tags */}
      <EnhancedSEO 
        pageName="services"
        subpage={serviceName.toLowerCase().replace(/\s+/g, '-')}
      />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 ${textAlign}`}>
        <div className="container mx-auto px-4">
          {/* H1 Heading - ensures exactly one per page */}
          <HeadingManager
            className={`text-4xl md:text-5xl font-bold mb-6 ${textAlign}`}
          >
            {serviceName}
          </HeadingManager>
          
          <p className="text-xl max-w-3xl">
            {serviceDescription.substring(0, 160)}...
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <EnhancedContent
            title={serviceName}
            description={serviceDescription}
            contentSections={contentSections}
            locale={locale}
          />
          
          {/* FAQ Section with structured data */}
          {faq && faq.length > 0 && (
            <div className={`mt-12 ${textAlign}`}>
              <h2 className="text-2xl font-semibold mb-6">
                {locale === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
              </h2>
              
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              {/* JSON-LD for FAQ */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faq.map(item => ({
                      "@type": "Question",
                      "name": item.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                      }
                    }))
                  })
                }}
              />
            </div>
          )}
          
          {/* CTA Section */}
          {ctaText && ctaLink && (
            <div className="mt-12 text-center">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  {locale === 'en' ? 'Ready to Get Started?' : 'مستعد للبدء؟'}
                </h2>
                <p className="text-lg mb-6">
                  {ctaText}
                </p>
                <a 
                  href={ctaLink} 
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
                >
                  {locale === 'en' ? 'Contact Us Now' : 'تواصل معنا الآن'}
                </a>
              </div>
            </div>
          )}
          
          {/* Schema.org JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd)
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
