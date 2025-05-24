/**
 * Industry Page Template
 * 
 * A standardized template for industry pages that implements all SEO fixes.
 * This template ensures proper H1 tags, sufficient text content, semantic HTML,
 * and proper meta tags across all industry pages.
 */

import React from 'react';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import HeadingManager from '@/components/seo/HeadingManager';
import EnhancedContent from '@/components/seo/EnhancedContent';

interface IndustryPageTemplateProps {
  industryName: string;
  industryDescription: string;
  heroImage?: string;
  benefits: {
    title: string;
    description: string;
    icon?: string;
  }[];
  products: {
    title: string;
    description: string;
    image?: string;
  }[];
  departments?: {
    title: string;
    description: string;
  }[];
  fabricSection?: {
    title: string;
    description: string;
    items?: string[];
  };
  customizationOptions?: {
    title: string;
    description: string;
    options?: string[];
  };
  testimonials?: {
    quote: string;
    author: string;
    position?: string;
    company?: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  locale?: 'en' | 'ar';
}

const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({
  industryName,
  industryDescription,
  heroImage,
  benefits,
  products,
  departments,
  fabricSection,
  customizationOptions,
  testimonials,
  faq,
  locale = 'en'
}) => {
  const isRTL = locale === 'ar';
  const textDir = isRTL ? 'rtl' : 'ltr';
  const textAlign = isRTL ? 'text-right' : 'text-left';
  
  // Prepare content sections for EnhancedContent
  const contentSections = [
    {
      heading: locale === 'en' ? "About Our Solutions" : "حول حلولنا",
      content: industryDescription,
      id: "about-section"
    }
  ];
  
  if (benefits && benefits.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "Key Benefits" : "المزايا الرئيسية",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 border rounded-lg">
              {benefit.icon && (
                <div className="text-primary-600 mb-3">
                  {/* Icon implementation */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      ),
      id: "benefits-section"
    });
  }
  
  if (products && products.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "Product Categories" : "فئات المنتجات",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
              {product.image && (
                <div className="md:w-1/3">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              )}
              <div className={`md:w-2/3 ${textAlign}`}>
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      id: "products-section"
    });
  }
  
  if (departments && departments.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "Department-Specific Solutions" : "حلول خاصة بالأقسام",
      content: (
        <div className="space-y-6">
          {departments.map((dept, index) => (
            <div key={index} className="p-4 border-b last:border-b-0">
              <h3 className="font-semibold text-lg mb-2">{dept.title}</h3>
              <p className="text-gray-700">{dept.description}</p>
            </div>
          ))}
        </div>
      ),
      id: "departments-section"
    });
  }
  
  if (fabricSection) {
    contentSections.push({
      heading: fabricSection.title,
      content: (
        <div>
          <p className="mb-4">{fabricSection.description}</p>
          {fabricSection.items && fabricSection.items.length > 0 && (
            <ul className="list-disc list-inside space-y-2">
              {fabricSection.items.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ),
      id: "fabrics-section"
    });
  }
  
  if (customizationOptions) {
    contentSections.push({
      heading: customizationOptions.title,
      content: (
        <div>
          <p className="mb-4">{customizationOptions.description}</p>
          {customizationOptions.options && customizationOptions.options.length > 0 && (
            <ul className="list-disc list-inside space-y-2">
              {customizationOptions.options.map((option, index) => (
                <li key={index} className="text-gray-700">{option}</li>
              ))}
            </ul>
          )}
        </div>
      ),
      id: "customization-section"
    });
  }
  
  if (testimonials && testimonials.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? "What Our Clients Say" : "ماذا يقول عملاؤنا",
      content: (
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg italic">
              <p className="mb-4">"{testimonial.quote}"</p>
              <div className={`font-medium ${textAlign}`}>
                <p className="text-primary-600">{testimonial.author}</p>
                {testimonial.position && testimonial.company && (
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ),
      id: "testimonials-section"
    });
  }
  
  // Generate schema.org JSON-LD for industry page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${industryName} Uniform Solutions by UNEOM`,
    "description": industryDescription,
    "provider": {
      "@type": "Organization",
      "name": "UNEOM",
      "url": "https://uneom.com/"
    },
    "serviceType": "Uniform Solutions",
    "serviceOutput": "Professional Uniforms",
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    }
  };
  
  return (
    <div dir={textDir}>
      {/* SEO Component with all meta tags */}
      <EnhancedSEO 
        pageName="industries"
        subpage={industryName.toLowerCase().replace(/\s+/g, '-')}
      />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 ${textAlign}`}>
        <div className="container mx-auto px-4">
          {/* H1 Heading - ensures exactly one per page */}
          <HeadingManager
            className={`text-4xl md:text-5xl font-bold mb-6 ${textAlign}`}
          >
            {industryName} {locale === 'en' ? 'Uniform Solutions' : 'حلول اليونيفورم'}
          </HeadingManager>
          
          <p className="text-xl max-w-3xl">
            {industryDescription.substring(0, 160)}...
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <EnhancedContent
            title={`${industryName} ${locale === 'en' ? 'Uniform Solutions' : 'حلول اليونيفورم'}`}
            description={industryDescription}
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

export default IndustryPageTemplate;
