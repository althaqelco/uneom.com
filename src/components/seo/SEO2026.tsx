/**
 * SEO 2026 - Next Generation Search Optimization Component
 * 
 * Advanced SEO features for 2026:
 * - Google AI Overview (formerly SGE) optimization
 * - ChatGPT/Perplexity/Claude search compatibility
 * - Multi-modal search (text, image, voice, video)
 * - Experience signals & user engagement metrics
 * - Advanced E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * - Semantic search & entity optimization
 * - Zero-click answer optimization
 * - Featured snippets & knowledge panels
 * - Visual search optimization
 * - Accessibility-first SEO
 */

'use client';

import React from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

// Types for comprehensive SEO configuration
interface AuthorInfo {
  name: string;
  nameAr?: string;
  title?: string;
  titleAr?: string;
  image?: string;
  credentials?: string[];
  socialProfiles?: string[];
  yearsExperience?: number;
}

interface ProductInfo {
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  image: string;
  images?: string[];
  price?: number;
  priceCurrency?: string;
  priceRange?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';
  brand?: string;
  category?: string;
  categoryAr?: string;
  sku?: string;
  features?: string[];
  featuresAr?: string[];
  rating?: number;
  reviewCount?: number;
  material?: string;
  color?: string[];
}

interface LocationInfo {
  name: string;
  nameAr?: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
  telephone?: string;
  email?: string;
  geo?: { latitude: number; longitude: number };
  openingHours?: string[];
  priceRange?: string;
}

interface FAQItem {
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
}

interface BreadcrumbItem {
  name: string;
  nameAr?: string;
  url: string;
}

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface SEO2026Props {
  // Basic SEO
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  keywords?: string[];
  keywordsAr?: string[];
  locale?: 'en' | 'ar';
  
  // Page Classification
  pageType: 'home' | 'industry' | 'product' | 'service' | 'blog' | 'location' | 'about' | 'contact' | 'faq' | 'resources' | 'shop' | 'category';
  
  // Content Entity
  mainEntity?: string;
  mainEntityAr?: string;
  
  // Media
  primaryImage?: string;
  primaryImageAlt?: string;
  additionalImages?: { url: string; alt: string }[];
  video?: { url: string; title: string; description: string; thumbnail: string };
  
  // Author & Organization (E-E-A-T)
  author?: AuthorInfo;
  showOrganization?: boolean;
  
  // Content Types
  product?: ProductInfo;
  location?: LocationInfo;
  faqs?: FAQItem[];
  howTo?: { name: string; steps: HowToStep[] };
  
  // Navigation
  breadcrumbs?: BreadcrumbItem[];
  
  // Dates
  publishedDate?: string;
  modifiedDate?: string;
  
  // Advanced
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  
  // AI Search Optimization
  aiSummary?: string;
  aiSummaryAr?: string;
  conversationalKeywords?: string[];
  voiceSearchQueries?: string[];
  
  // Industry-specific
  industry?: string;
  serviceArea?: string[];
  
  // Trust Signals
  certifications?: string[];
  awards?: string[];
  clientCount?: number;
  yearsInBusiness?: number;
}

const SEO2026: React.FC<SEO2026Props> = ({
  title,
  titleAr,
  description,
  descriptionAr,
  keywords = [],
  keywordsAr = [],
  locale = 'en',
  pageType,
  mainEntity,
  mainEntityAr,
  primaryImage,
  primaryImageAlt,
  additionalImages = [],
  video,
  author,
  showOrganization = true,
  product,
  location,
  faqs = [],
  howTo,
  breadcrumbs = [],
  publishedDate,
  modifiedDate,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  aiSummary,
  aiSummaryAr,
  conversationalKeywords = [],
  voiceSearchQueries = [],
  industry,
  serviceArea = ['Saudi Arabia', 'UAE', 'Kuwait', 'Bahrain', 'Qatar', 'Oman'],
  certifications = ['ISO 9001:2015', 'OEKO-TEX Standard 100'],
  awards = [],
  clientCount = 500,
  yearsInBusiness = 10
}) => {
  const pathname = usePathname();
  const isArabic = locale === 'ar';
  const baseUrl = 'https://uneom.com';
  const currentUrl = canonicalUrl || `${baseUrl}${pathname}`;
  const alternateUrl = isArabic 
    ? currentUrl.replace('/ar', '') || baseUrl
    : `${baseUrl}/ar${pathname}`;
  
  const now = new Date().toISOString();
  const published = publishedDate || now;
  const modified = modifiedDate || now;
  
  // Localized content
  const localTitle = isArabic ? (titleAr || title) : title;
  const localDescription = isArabic ? (descriptionAr || description) : description;
  const localKeywords = isArabic ? [...keywordsAr, ...keywords] : [...keywords, ...keywordsAr];
  const localEntity = isArabic ? (mainEntityAr || mainEntity) : mainEntity;
  const localAiSummary = isArabic ? (aiSummaryAr || aiSummary || localDescription) : (aiSummary || localDescription);

  // ============================================
  // SCHEMA.ORG STRUCTURED DATA
  // ============================================
  
  // Organization Schema (E-E-A-T)
  const organizationSchema = showOrganization ? {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'UNEOM',
    alternateName: ['يونيوم', 'UNEOM Professional Uniforms', 'يونيوم للأزياء المهنية'],
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${baseUrl}/#logo`,
      url: `${baseUrl}/images/uneom-logo.png`,
      contentUrl: `${baseUrl}/images/uneom-logo.png`,
      width: 300,
      height: 100,
      caption: 'UNEOM - Professional Uniforms Manufacturer'
    },
    image: `${baseUrl}/images/uneom-og-image.jpg`,
    description: isArabic 
      ? 'الشركة الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية. نقدم حلول متكاملة للرعاية الصحية والضيافة والشركات والقطاع الصناعي.'
      : 'Leading professional uniforms and workwear manufacturer in Saudi Arabia. Complete solutions for healthcare, hospitality, corporate, and industrial sectors.',
    foundingDate: '2015',
    foundingLocation: {
      '@type': 'Place',
      name: 'Riyadh, Saudi Arabia'
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 100,
      maxValue: 500
    },
    areaServed: serviceArea.map(area => ({
      '@type': 'Country',
      name: area
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road, Al Olaya District',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: '12211',
      addressCountry: 'SA'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971558164922',
        contactType: 'sales',
        availableLanguage: ['English', 'Arabic'],
        areaServed: 'SA',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '18:00'
        }
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971558164922',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
        areaServed: ['SA', 'AE', 'KW', 'BH', 'QA', 'OM']
      }
    ],
    sameAs: [
      'https://www.facebook.com/uneomuniforms/',
      'https://www.instagram.com/uneomuniforms/',
      'https://www.linkedin.com/company/uneom',
      'https://www.tiktok.com/@uneomcom',
      'https://www.youtube.com/@uneom-uniforms',
      'https://twitter.com/uneom_sa'
    ],
    knowsAbout: [
      'Professional Uniforms Manufacturing',
      'Medical Scrubs and Healthcare Apparel',
      'Corporate Workwear Design',
      'Hospitality Uniforms',
      'Industrial Safety Workwear',
      'Aviation Uniforms',
      'School Uniforms',
      'Security Uniforms',
      'Custom Embroidery and Branding',
      'Fabric Technology and Innovation',
      'Sustainable Textile Solutions',
      'Uniform Program Management'
    ],
    hasCredential: certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: cert
    })),
    award: awards,
    slogan: isArabic ? 'جودة تلبي طموحاتك' : 'Quality That Meets Your Ambitions',
    ethicsPolicy: `${baseUrl}/ethics-policy/`,
    diversityPolicy: `${baseUrl}/diversity-policy/`
  } : null;

  // WebSite Schema
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'UNEOM',
    alternateName: 'يونيوم',
    description: 'Professional Uniforms & Workwear Solutions in Saudi Arabia',
    publisher: { '@id': `${baseUrl}/#organization` },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    ],
    inLanguage: ['en-SA', 'ar-SA'],
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: { '@id': `${baseUrl}/#organization` }
  };

  // WebPage Schema
  // For FAQ pages, include mainEntity with Question/Answer pairs as required by Google
  const webPageSchema = {
    '@type': getPageSchemaType(pageType),
    '@id': `${currentUrl}/#webpage`,
    url: currentUrl,
    name: localTitle,
    description: localDescription,
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: localEntity ? { '@type': 'Thing', name: localEntity } : undefined,
    // Required for FAQPage: mainEntity must contain Question/Answer pairs
    ...(pageType === 'faq' && faqs.length > 0 ? {
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: isArabic ? (faq.questionAr || faq.question) : faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: isArabic ? (faq.answerAr || faq.answer) : faq.answer
        }
      }))
    } : {}),
    primaryImageOfPage: primaryImage ? {
      '@type': 'ImageObject',
      '@id': `${currentUrl}/#primaryimage`,
      url: primaryImage.startsWith('http') ? primaryImage : `${baseUrl}${primaryImage}`,
      contentUrl: primaryImage.startsWith('http') ? primaryImage : `${baseUrl}${primaryImage}`,
      caption: primaryImageAlt || localTitle
    } : undefined,
    thumbnailUrl: primaryImage ? (primaryImage.startsWith('http') ? primaryImage : `${baseUrl}${primaryImage}`) : undefined,
    inLanguage: isArabic ? 'ar-SA' : 'en-SA',
    datePublished: published,
    dateModified: modified,
    author: author ? { '@id': `${baseUrl}/#author-${author.name.toLowerCase().replace(/\s+/g, '-')}` } : { '@id': `${baseUrl}/#organization` },
    publisher: { '@id': `${baseUrl}/#organization` },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      cssSelector: 'main, article, .main-content'
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.summary', '.description', 'article p:first-of-type']
    },
    accessibilityFeature: [
      'alternativeText',
      'readingOrder',
      'structuralNavigation',
      'tableOfContents',
      'highContrastDisplay'
    ],
    accessibilityHazard: 'none',
    accessMode: ['textual', 'visual'],
    accessModeSufficient: [
      { '@type': 'ItemList', itemListElement: ['textual'] },
      { '@type': 'ItemList', itemListElement: ['visual'] }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@type': 'BreadcrumbList',
    '@id': `${currentUrl}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isArabic ? 'الرئيسية' : 'Home',
        item: baseUrl
      },
      ...breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: isArabic ? (item.nameAr || item.name) : item.name,
        item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
      }))
    ]
  } : null;

  // FAQ Schema
  const faqSchema = faqs.length > 0 ? {
    '@type': 'FAQPage',
    '@id': `${currentUrl}/#faq`,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: isArabic ? (faq.questionAr || faq.question) : faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isArabic ? (faq.answerAr || faq.answer) : faq.answer
      }
    }))
  } : null;

  // Product Schema
  const productSchema = product ? {
    '@type': 'Product',
    '@id': `${currentUrl}/#product`,
    name: isArabic ? (product.nameAr || product.name) : product.name,
    description: isArabic ? (product.descriptionAr || product.description) : product.description,
    image: product.images?.length ? product.images.map(img => 
      img.startsWith('http') ? img : `${baseUrl}${img}`
    ) : (product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`),
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'UNEOM',
      logo: `${baseUrl}/images/uneom-logo.png`
    },
    manufacturer: { '@id': `${baseUrl}/#organization` },
    category: isArabic ? (product.categoryAr || product.category) : product.category,
    material: product.material,
    color: product.color,
    offers: {
      '@type': 'Offer',
      url: currentUrl,
      priceCurrency: product.priceCurrency || 'SAR',
      price: product.price,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      seller: { '@id': `${baseUrl}/#organization` },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'SA'
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'DAY'
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 5,
            unitCode: 'DAY'
          }
        }
      }
    },
    additionalProperty: product.features?.map(feature => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature
    })),
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: product.reviewCount || 10
    } : undefined
  } : null;

  // LocalBusiness Schema
  const localBusinessSchema = location ? {
    '@type': ['LocalBusiness', 'ClothingStore'],
    '@id': `${currentUrl}/#localbusiness`,
    name: isArabic ? (location.nameAr || location.name) : location.name,
    image: primaryImage ? (primaryImage.startsWith('http') ? primaryImage : `${baseUrl}${primaryImage}`) : `${baseUrl}/images/uneom-store.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      addressRegion: location.addressRegion,
      postalCode: location.postalCode,
      addressCountry: location.addressCountry
    },
    geo: location.geo ? {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude
    } : undefined,
    telephone: location.telephone || '+971558164922',
    email: location.email || 'info@uneom.com',
    url: currentUrl,
    openingHoursSpecification: location.openingHours?.map(hours => {
      const [days, time] = hours.split(': ');
      const [opens, closes] = time.split('-');
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: days.split('-'),
        opens: opens.trim(),
        closes: closes.trim()
      };
    }),
    priceRange: location.priceRange || '$$',
    parentOrganization: { '@id': `${baseUrl}/#organization` },
    hasMap: location.geo ? `https://maps.google.com/?q=${location.geo.latitude},${location.geo.longitude}` : undefined
  } : null;

  // Author Schema
  const authorSchema = author ? {
    '@type': 'Person',
    '@id': `${baseUrl}/#author-${author.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: isArabic ? (author.nameAr || author.name) : author.name,
    jobTitle: isArabic ? (author.titleAr || author.title) : author.title,
    image: author.image,
    worksFor: { '@id': `${baseUrl}/#organization` },
    knowsAbout: author.credentials || ['Professional Uniforms', 'Workwear Industry', 'Textile Technology'],
    sameAs: author.socialProfiles || []
  } : null;

  // HowTo Schema
  const howToSchema = howTo ? {
    '@type': 'HowTo',
    '@id': `${currentUrl}/#howto`,
    name: howTo.name,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? (step.image.startsWith('http') ? step.image : `${baseUrl}${step.image}`) : undefined
    }))
  } : null;

  // Video Schema
  const videoSchema = video ? {
    '@type': 'VideoObject',
    '@id': `${currentUrl}/#video`,
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail.startsWith('http') ? video.thumbnail : `${baseUrl}${video.thumbnail}`,
    contentUrl: video.url,
    uploadDate: published,
    publisher: { '@id': `${baseUrl}/#organization` }
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
    authorSchema,
    howToSchema,
    videoSchema
  ].filter(Boolean);

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

      {/* Canonical & Alternate URLs */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hrefLang={isArabic ? 'ar-SA' : 'en-SA'} href={currentUrl} />
      <link rel="alternate" hrefLang={isArabic ? 'en-SA' : 'ar-SA'} href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl.replace('/ar', '')} />

      {/* AI Search Optimization Meta */}
      <meta name="ai-summary" content={localAiSummary.substring(0, 300)} />
      <meta name="ai-keywords" content={localKeywords.join(', ')} />
      <meta name="ai-content-type" content={pageType} />
      <meta name="ai-entity" content={localEntity || localTitle} />
      
      {/* Voice Search Optimization */}
      {voiceSearchQueries.length > 0 && (
        <meta name="voice-queries" content={voiceSearchQueries.join(' | ')} />
      )}
      
      {/* Conversational AI Keywords */}
      {conversationalKeywords.length > 0 && (
        <meta name="conversational-keywords" content={conversationalKeywords.join(', ')} />
      )}

      {/* Industry Classification */}
      {industry && <meta name="industry" content={industry} />}
      
      {/* Trust Signals */}
      <meta name="client-count" content={String(clientCount)} />
      <meta name="years-in-business" content={String(yearsInBusiness)} />
      {certifications.length > 0 && (
        <meta name="certifications" content={certifications.join(', ')} />
      )}

      {/* Robots */}
      {(noindex || nofollow) && (
        <meta 
          name="robots" 
          content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} 
        />
      )}

      {/* Performance & UX Scripts */}
      <Script id="seo-2026-optimization" strategy="afterInteractive">
        {`
          (function() {
            // AI Content Visibility Tracking
            if ('IntersectionObserver' in window) {
              const aiObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.setAttribute('data-ai-visible', 'true');
                    entry.target.setAttribute('data-view-time', Date.now().toString());
                  }
                });
              }, { threshold: 0.3, rootMargin: '50px' });
              
              document.querySelectorAll('h1, h2, h3, p, article, section, .product-card, .faq-item').forEach(el => {
                aiObserver.observe(el);
              });
            }
            
            // Voice Search Ready - Mark speakable content
            document.querySelectorAll('h1, .summary, .description, article > p:first-child').forEach(el => {
              el.setAttribute('data-speakable', 'true');
              el.setAttribute('aria-label', el.textContent?.trim() || '');
            });
            
            // Semantic Enhancement
            const main = document.querySelector('main');
            if (main && !main.getAttribute('role')) {
              main.setAttribute('role', 'main');
            }
            
            document.querySelectorAll('article').forEach(el => {
              if (!el.getAttribute('role')) {
                el.setAttribute('role', 'article');
              }
            });
            
            // FAQ Accessibility
            document.querySelectorAll('[itemtype*="Question"], .faq-item').forEach((el, index) => {
              el.setAttribute('role', 'listitem');
              el.setAttribute('aria-posinset', (index + 1).toString());
            });
            
            // Performance: Lazy load images not in viewport
            if ('loading' in HTMLImageElement.prototype) {
              document.querySelectorAll('img:not([loading])').forEach(img => {
                if (!img.closest('header') && !img.hasAttribute('fetchpriority')) {
                  img.loading = 'lazy';
                }
              });
            }
            
            // Engagement Tracking for AI Search Ranking
            let engagementData = {
              startTime: Date.now(),
              maxScroll: 0,
              interactions: 0,
              sectionsViewed: new Set()
            };
            
            window.addEventListener('scroll', () => {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
              if (scrollPercent > engagementData.maxScroll) {
                engagementData.maxScroll = scrollPercent;
              }
            }, { passive: true });
            
            document.addEventListener('click', () => {
              engagementData.interactions++;
            }, { passive: true });
            
            // Report engagement on page exit
            window.addEventListener('beforeunload', () => {
              const timeOnPage = Math.round((Date.now() - engagementData.startTime) / 1000);
              
              if (navigator.sendBeacon && typeof gtag !== 'undefined') {
                gtag('event', 'page_engagement_2026', {
                  time_on_page: timeOnPage,
                  max_scroll: engagementData.maxScroll,
                  interactions: engagementData.interactions,
                  sections_viewed: engagementData.sectionsViewed.size
                });
              }
            });
          })();
        `}
      </Script>
    </>
  );
};

// Helper function to get appropriate schema type
function getPageSchemaType(pageType: string): string {
  const typeMap: Record<string, string> = {
    'home': 'WebPage',
    'industry': 'WebPage',
    'product': 'ProductPage',
    'service': 'WebPage',
    'blog': 'Article',
    'location': 'WebPage',
    'about': 'AboutPage',
    'contact': 'ContactPage',
    'faq': 'FAQPage',
    'resources': 'WebPage',
    'shop': 'CollectionPage',
    'category': 'CollectionPage'
  };
  return typeMap[pageType] || 'WebPage';
}

export default SEO2026;
