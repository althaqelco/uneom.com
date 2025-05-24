A/**
 * Location Page Template
 * 
 * A standardized template for location pages that implements all SEO fixes.
 * This template ensures proper H1 tags, sufficient text content, semantic HTML,
 * and proper meta tags with enhanced LocalBusiness schema.org markup
 * to optimize for local SEO in Saudi Arabian cities.
 * 
 * Addresses the following SEO issues from the Screaming Frog report:
 * - E002: Unique H1 Tag
 * - E003: Low Text Ratio with server-side rendered content
 * - E004/E005: Unique Title/Meta Description
 * - E006: Proper heading hierarchy
 * - E007: Strategic keywords integration
 * - E008/E009: Proper canonical and hreflang tags
 */

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import HeadingManager, { HeadingTwo, HeadingThree } from '@/components/seo/HeadingManager';
import EnhancedContent from '@/components/seo/EnhancedContent';
import LocalSEO from '@/components/seo/LocalSEO';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { getMetaKeywords } from '@/lib/seo/keywords-manager';
import InternalLinkingModule from '@/components/seo/InternalLinkingModule';

// Define RelatedLink interface to match what InternalLinkingModule expects
interface RelatedLink {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  type: 'product' | 'blog' | 'resource' | 'industry' | 'service' | 'location';
}

interface LocationPageTemplateProps {
  cityName: string;
  cityDescription: string;
  address: {
    street: string;
    district?: string;
    city: string;
    postalCode?: string;
    region?: string;
    country: string;
  };
  contactInfo: {
    phone: string;
    email: string;
    whatsapp?: string;
  };
  businessHours?: {
    days: string;
    hours: string;
  }[];
  heroImage?: string;
  mapEmbedUrl?: string;
  services?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  industries?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  testimonials?: {
    quote: string;
    author: string;
    position?: string;
    company?: string;
  }[];
  localClients?: {
    name: string;
    logo?: string;
    description?: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  locale?: 'en' | 'ar';
}

const LocationPageTemplate: React.FC<LocationPageTemplateProps> = ({
  cityName,
  cityDescription,
  address,
  contactInfo,
  businessHours,
  heroImage,
  mapEmbedUrl,
  services,
  industries,
  testimonials,
  localClients,
  faq,
  locale = 'en'
}) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const isRTL = locale === 'ar';
  const textDir = isRTL ? 'rtl' : 'ltr';
  const textAlign = isRTL ? 'text-right' : 'text-left';
  
  // Form the full address string
  const formattedAddress = [
    address.street,
    address.district,
    address.city,
    address.postalCode,
    address.region,
    address.country
  ].filter(Boolean).join(', ');
  
  // Prepare page title
  const pageTitle = locale === 'en' 
    ? `Uniform Solutions in ${cityName}, Saudi Arabia`
    : `حلول اليونيفورم في ${cityName}، المملكة العربية السعودية`;
  
  // Define interface for content sections that can handle React elements
  interface ContentSection {
    heading: string;
    content: string | React.ReactNode;
    id: string;
  }
  
  // Prepare content sections for EnhancedContent
  const contentSections: ContentSection[] = [
    {
      heading: locale === 'en' ? `About Our ${cityName} Branch` : `حول فرعنا في ${cityName}`,
      content: cityDescription,
      id: "about-section"
    }
  ];
  
  // Contact Information Section
  contentSections.push({
    heading: locale === 'en' ? "Contact Information" : "معلومات الاتصال",
    content: (
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="mb-4">
          <h3 className="font-semibold mb-2">{locale === 'en' ? 'Address:' : 'العنوان:'}</h3>
          <p className="text-gray-700">{formattedAddress}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">{locale === 'en' ? 'Phone:' : 'الهاتف:'}</h3>
          <p className="text-gray-700">
            <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:underline">
              {contactInfo.phone}
            </a>
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">{locale === 'en' ? 'Email:' : 'البريد الإلكتروني:'}</h3>
          <p className="text-gray-700">
            <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:underline">
              {contactInfo.email}
            </a>
          </p>
        </div>
        
        {contactInfo.whatsapp && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{locale === 'en' ? 'WhatsApp:' : 'واتساب:'}</h3>
            <p className="text-gray-700">
              <a 
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
                className="text-primary-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo.whatsapp}
              </a>
            </p>
          </div>
        )}
        
        {businessHours && businessHours.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">{locale === 'en' ? 'Business Hours:' : 'ساعات العمل:'}</h3>
            <ul className="space-y-1">
              {businessHours.map((schedule, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-medium">{schedule.days}:</span> {schedule.hours}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
    id: "contact-section"
  });
  
  // Map Section
  if (mapEmbedUrl) {
    contentSections.push({
      heading: locale === 'en' ? "Find Us" : "موقعنا",
      content: (
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe 
            src={mapEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`UNEOM ${cityName} location map`}
          ></iframe>
        </div>
      ),
      id: "map-section"
    });
  }
  
  // Services Section
  if (services && services.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? `Our Services in ${cityName}` : `خدماتنا في ${cityName}`,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-4 border rounded-lg">
              {service.icon && (
                <div className="text-primary-600 mb-3">
                  {/* Icon implementation */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      ),
      id: "services-section"
    });
  }
  
  // Industries Section
  if (industries && industries.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? `Industries We Serve in ${cityName}` : `القطاعات التي نخدمها في ${cityName}`,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2">{industry.title}</h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>
      ),
      id: "industries-section"
    });
  }
  
  // Local Clients Section
  if (localClients && localClients.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? `Our Clients in ${cityName}` : `عملاؤنا في ${cityName}`,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {localClients.map((client, index) => (
            <div key={index} className="p-4 border rounded-lg text-center">
              {client.logo && (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-16 object-contain mx-auto mb-3"
                />
              )}
              <h3 className="font-semibold mb-2">{client.name}</h3>
              {client.description && (
                <p className="text-sm text-gray-600">{client.description}</p>
              )}
            </div>
          ))}
        </div>
      ),
      id: "clients-section"
    });
  }
  
  // Testimonials Section
  if (testimonials && testimonials.length > 0) {
    contentSections.push({
      heading: locale === 'en' ? `${cityName} Client Testimonials` : `شهادات العملاء في ${cityName}`,
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
  
  // Generate schema.org JSON-LD for location page with LocalBusiness markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `UNEOM ${cityName}`,
    "description": cityDescription,
    "url": `https://uneom.com/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}/`,
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.region || "Riyadh Province",
      "postalCode": address.postalCode,
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",  // Example - this should be dynamically set
      "longitude": "46.6753"  // Example - this should be dynamically set
    },
    "openingHoursSpecification": businessHours ? businessHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.days,
      "opens": hours.hours.split('-')[0].trim(),
      "closes": hours.hours.split('-')[1].trim()
    })) : [],
    "image": heroImage ? `https://uneom.com${heroImage}` : "https://uneom.com/images/locations/default-location.jpg"
  };
  
  // Define location-specific keywords
  // Get keywords from keyword manager and convert to array if needed
  const rawLocationKeywords = getMetaKeywords(locale, 'locations', cityName.toLowerCase());
  const locationKeywords = rawLocationKeywords.split(', ');
  
  // Define related links for internal linking
  const relatedLinks: RelatedLink[] = [
    {
      href: locale === 'en' ? '/industries/corporate' : '/ar/industries/corporate',
      title: locale === 'en' ? 'Corporate Uniforms' : 'زي موحد للشركات',
      description: locale === 'en' 
        ? `Professional corporate uniform solutions in ${cityName}` 
        : `حلول اليونيفورم المهنية للشركات في ${cityName}`,
      type: 'industry'
    },
    {
      href: locale === 'en' ? '/industries/hospitality' : '/ar/industries/hospitality',
      title: locale === 'en' ? 'Hospitality Uniforms' : 'زي موحد للضيافة',
      description: locale === 'en'
        ? `Premium hospitality uniform solutions in ${cityName}`
        : `حلول اليونيفورم الفاخرة للضيافة في ${cityName}`,
      type: 'industry'
    },
    {
      href: locale === 'en' ? '/contact' : '/ar/contact',
      title: locale === 'en' ? 'Contact Us' : 'اتصل بنا',
      description: locale === 'en'
        ? `Get in touch with our ${cityName} branch`
        : `تواصل مع فرعنا في ${cityName}`,
      type: 'service'
    },
    {
      href: locale === 'en' ? '/about' : '/ar/about',
      title: locale === 'en' ? 'About UNEOM' : 'حول UNEOM',
      description: locale === 'en'
        ? 'Learn about our history and commitment to quality'
        : 'تعرف على تاريخنا والتزامنا بالجودة',
      type: 'resource'
    }
  ];
  
  return (
    <div className={`location-page ${textAlign}`} dir={textDir}>
      {/* Enhanced SEO Component with proper meta tags */}
      <EnhancedSEO 
        title={pageTitle}
        description={cityDescription.substring(0, 160)}
        keywords={locationKeywords}
        pageName="locations"
        subpage={cityName.toLowerCase()}
      />
      
      {/* Local Business Schema and Geo Meta Tags */}
      <LocalSEO 
        location={cityName.toLowerCase()}
        telephone={contactInfo.phone}
        email={contactInfo.email}
        showMap={!mapEmbedUrl} // Only show LocalSEO map if no custom map is provided
      />
      
      {/* Breadcrumbs for navigation */}
      <Breadcrumbs className="mb-6" />
      
      {/* Hero Section */}
      <section className={`bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 ${textAlign}`}>
        <div className="container mx-auto px-4">
          {/* H1 Heading - ensures exactly one per page */}
          <HeadingManager
            title={pageTitle}
            className={`text-4xl md:text-5xl font-bold mb-6 ${textAlign}`}
          />
          
          <p className="text-xl max-w-3xl">
            {cityDescription.substring(0, 160)}...
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 py-12">
          <EnhancedContent
            title={pageTitle}
            description={cityDescription}
            contentSections={contentSections}
            locale={locale}
            className="mb-12"
          />
          
          {/* Internal linking section to improve crawlability */}
          <div className="mb-12">
            <InternalLinkingModule
              currentPagePath={currentPath}
              sectionTitle={locale === 'ar' ? 'محتوى ذو صلة' : 'Related Content'}
              relatedLinks={relatedLinks}
              maxLinks={3}
              showDescriptions={true}
            />
          </div>
          
          {/* FAQ Section with structured data */}
          {faq && faq.length > 0 && (
            <div className={`mt-12 ${textAlign}`}>
              <h2 className="text-2xl font-semibold mb-4 mb-2">
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

export default LocationPageTemplate;
