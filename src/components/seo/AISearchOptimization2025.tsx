/**
 * AI Search Optimization Component - December 2025 & 2026 Standards
 * 
 * This component implements cutting-edge SEO requirements for AI-powered search:
 * - Google SGE (Search Generative Experience) optimization
 * - Bing Copilot & ChatGPT search compatibility
 * - Voice Search & Conversational AI optimization
 * - Enhanced E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)
 * - Speakable Schema for voice assistants
 * - FAQ Schema for conversational queries
 * - HowTo Schema for procedural content
 * - Product/Service Schema with AI-friendly attributes
 */

'use client';

import React from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

interface AISearchOptimization2025Props {
  // Basic SEO
  title: string;
  description: string;
  keywords?: string[];
  locale?: 'en' | 'ar';
  
  // Page Type
  pageType: 'home' | 'industry' | 'product' | 'service' | 'blog' | 'location' | 'about' | 'contact' | 'faq';
  
  // Content Details
  mainEntity?: string;
  primaryImage?: string;
  additionalImages?: string[];
  
  // E-E-A-T Signals
  author?: {
    name: string;
    jobTitle?: string;
    image?: string;
    credentials?: string[];
  };
  organization?: {
    name: string;
    logo?: string;
    foundingDate?: string;
    areaServed?: string[];
  };
  
  // FAQ for Conversational AI
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  
  // Product/Service Details
  product?: {
    name: string;
    description: string;
    image: string;
    price?: string;
    currency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    brand?: string;
    category?: string;
    features?: string[];
  };
  
  // Location for Local SEO
  location?: {
    name: string;
    address: string;
    city: string;
    region: string;
    country: string;
    geo?: { lat: number; lng: number };
  };
  
  // Voice Search Optimization
  speakableSelectors?: string[];
  
  // Breadcrumb
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const AISearchOptimization2025: React.FC<AISearchOptimization2025Props> = ({
  title,
  description,
  keywords = [],
  locale = 'en',
  pageType,
  mainEntity,
  primaryImage,
  additionalImages = [],
  author,
  organization,
  faqs = [],
  product,
  location,
  speakableSelectors = ['article', 'h1', '.main-content'],
  breadcrumbs = []
}) => {
  const pathname = usePathname();
  const isArabic = locale === 'ar';
  const baseUrl = 'https://uneom.com';
  const currentUrl = `${baseUrl}${pathname}`;
  const alternateUrl = isArabic 
    ? currentUrl.replace('/ar', '') || baseUrl
    : `${baseUrl}/ar${pathname}`;

  // Generate Organization Schema
  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: organization?.name || 'UNEOM',
    alternateName: isArabic ? 'يونيوم' : 'UNEOM - يونيوم',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: organization?.logo || `${baseUrl}/images/uneom-logo.png`,
      width: 300,
      height: 100
    },
    description: isArabic 
      ? 'الشركة الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية'
      : 'Leading professional uniforms and workwear manufacturer in Saudi Arabia',
    foundingDate: organization?.foundingDate || '2015',
    areaServed: organization?.areaServed || [
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Oman' }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971558164922',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
        areaServed: 'SA'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971558164922',
        contactType: 'sales',
        availableLanguage: ['English', 'Arabic'],
        areaServed: 'SA'
      }
    ],
    sameAs: [
      'https://www.facebook.com/uneomuniforms/',
      'https://www.instagram.com/uneomuniforms/',
      'https://www.linkedin.com/company/uneom',
      'https://www.tiktok.com/@uneomcom',
      'https://www.youtube.com/@uneom-uniforms'
    ],
    // E-E-A-T Enhancement
    knowsAbout: [
      'Professional Uniforms',
      'Medical Scrubs',
      'Corporate Workwear',
      'Hospitality Attire',
      'Industrial Safety Wear',
      'Aviation Uniforms',
      'School Uniforms',
      'Security Uniforms',
      'Custom Uniform Design',
      'Fabric Technology'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'ISO 9001:2015 Quality Management'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'OEKO-TEX Standard 100'
      }
    ]
  };

  // Generate WebSite Schema with SearchAction
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'UNEOM',
    alternateName: 'يونيوم',
    description: description,
    publisher: { '@id': `${baseUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Arabic', alternateName: 'ar' }
    ]
  };

  // Generate WebPage Schema
  const webPageSchema = {
    '@type': 'WebPage',
    '@id': `${currentUrl}/#webpage`,
    url: currentUrl,
    name: title,
    description: description,
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: mainEntity ? { '@type': 'Thing', name: mainEntity } : undefined,
    primaryImageOfPage: primaryImage ? {
      '@type': 'ImageObject',
      url: primaryImage.startsWith('http') ? primaryImage : `${baseUrl}${primaryImage}`
    } : undefined,
    inLanguage: isArabic ? 'ar-SA' : 'en-SA',
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    // Speakable for Voice Search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSelectors
    }
  };

  // Generate BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@type': 'BreadcrumbList',
    '@id': `${currentUrl}/#breadcrumb`,
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  } : null;

  // Generate FAQ Schema for Conversational AI
  const faqSchema = faqs.length > 0 ? {
    '@type': 'FAQPage',
    '@id': `${currentUrl}/#faq`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  // Generate Product Schema
  const productSchema = product ? {
    '@type': 'Product',
    '@id': `${currentUrl}/#product`,
    name: product.name,
    description: product.description,
    image: product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'UNEOM'
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      url: currentUrl,
      priceCurrency: product.currency || 'SAR',
      price: product.price || 'Contact for pricing',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      seller: { '@id': `${baseUrl}/#organization` }
    },
    additionalProperty: product.features?.map(feature => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature
    }))
  } : null;

  // Generate LocalBusiness Schema
  const localBusinessSchema = location ? {
    '@type': 'LocalBusiness',
    '@id': `${currentUrl}/#localbusiness`,
    name: location.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.country
    },
    geo: location.geo ? {
      '@type': 'GeoCoordinates',
      latitude: location.geo.lat,
      longitude: location.geo.lng
    } : undefined,
    parentOrganization: { '@id': `${baseUrl}/#organization` }
  } : null;

  // Generate Author Schema
  const authorSchema = author ? {
    '@type': 'Person',
    '@id': `${baseUrl}/#author-${author.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: author.name,
    jobTitle: author.jobTitle,
    image: author.image,
    worksFor: { '@id': `${baseUrl}/#organization` },
    knowsAbout: author.credentials || ['Professional Uniforms', 'Workwear', 'Textile Industry']
  } : null;

  // Combine all schemas
  const schemaGraph = [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    breadcrumbSchema,
    faqSchema,
    productSchema,
    localBusinessSchema,
    authorSchema
  ].filter(Boolean);

  // AI Search Optimization Meta Tags
  const aiMetaTags = {
    // Google SGE Optimization
    'ai-content-type': pageType,
    'ai-summary': description.substring(0, 200),
    'ai-keywords': keywords.join(', '),
    
    // Language & Region
    'content-language': isArabic ? 'ar-SA' : 'en-SA',
    
    // Content Classification
    'category': pageType,
    'topic': mainEntity || title,
    
    // Trust Signals
    'author': author?.name || 'UNEOM Expert Team',
    'publisher': 'UNEOM',
    
    // Dates
    'article:published_time': new Date().toISOString(),
    'article:modified_time': new Date().toISOString()
  };

  return (
    <>
      {/* Primary Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': schemaGraph
          })
        }}
      />

      {/* AI Search Meta Tags */}
      {Object.entries(aiMetaTags).map(([name, content]) => (
        content && <meta key={name} name={name} content={content} />
      ))}

      {/* Hreflang Tags for Multilingual */}
      <link rel="alternate" hrefLang={isArabic ? 'ar-SA' : 'en-SA'} href={currentUrl} />
      <link rel="alternate" hrefLang={isArabic ? 'en-SA' : 'ar-SA'} href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* AI Search Engagement Tracking */}
      <Script id="ai-search-tracking" strategy="afterInteractive">
        {`
          // AI Search Compatibility - December 2025 Standards
          (function() {
            // Track content visibility for SGE
            if ('IntersectionObserver' in window) {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const element = entry.target;
                    element.setAttribute('data-ai-visible', 'true');
                  }
                });
              }, { threshold: 0.5 });
              
              document.querySelectorAll('h1, h2, h3, p, article, section').forEach(el => {
                observer.observe(el);
              });
            }
            
            // Voice Search Optimization - Mark speakable content
            document.querySelectorAll('${speakableSelectors.join(', ')}').forEach(el => {
              el.setAttribute('data-speakable', 'true');
            });
            
            // Semantic Content Enhancement
            document.querySelectorAll('main, article, section').forEach(el => {
              if (!el.getAttribute('role')) {
                el.setAttribute('role', 'region');
              }
            });
            
            // FAQ Accessibility Enhancement
            document.querySelectorAll('[itemtype*="Question"]').forEach(el => {
              el.setAttribute('role', 'listitem');
            });
          })();
        `}
      </Script>

      {/* Core Web Vitals Optimization */}
      <Script id="cwv-optimization" strategy="afterInteractive">
        {`
          // Core Web Vitals 2025 Optimization
          (function() {
            // LCP Optimization - Preload critical images
            const lcpImage = document.querySelector('img[fetchpriority="high"]');
            if (lcpImage && lcpImage.src) {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'image';
              link.href = lcpImage.src;
              document.head.appendChild(link);
            }
            
            // INP Optimization - Defer non-critical interactions
            const deferInteractions = () => {
              document.querySelectorAll('[data-defer-interaction]').forEach(el => {
                el.addEventListener('click', function(e) {
                  if (!this.hasAttribute('data-interaction-ready')) {
                    e.preventDefault();
                    requestIdleCallback(() => {
                      this.setAttribute('data-interaction-ready', 'true');
                      this.click();
                    });
                  }
                }, { passive: true });
              });
            };
            
            if ('requestIdleCallback' in window) {
              requestIdleCallback(deferInteractions);
            } else {
              setTimeout(deferInteractions, 200);
            }
            
            // CLS Prevention - Reserve space for dynamic content
            document.querySelectorAll('[data-dynamic-height]').forEach(el => {
              const height = el.getAttribute('data-dynamic-height');
              if (height) {
                el.style.minHeight = height;
              }
            });
          })();
        `}
      </Script>
    </>
  );
};

export default AISearchOptimization2025;

