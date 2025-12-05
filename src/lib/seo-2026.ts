/**
 * SEO 2026 - Server-Side Metadata Generator
 * 
 * This module provides utilities for generating Next.js 14 Metadata
 * optimized for 2026 SEO standards and AI search engines.
 */

import { Metadata, Viewport } from 'next';

// ============================================
// VIEWPORT EXPORT (Next.js 14 Requirement)
// ============================================

/**
 * Standard viewport configuration for all pages
 * In Next.js 14, viewport settings must be exported separately from metadata
 */
export const viewport2026: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' }
  ],
  colorScheme: 'light dark',
};

/**
 * Generate viewport configuration (can be customized per page if needed)
 */
export function generateViewport2026(): Viewport {
  return viewport2026;
}

// ============================================
// TYPES
// ============================================

export interface SEO2026Config {
  // Basic
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  keywords?: string[];
  keywordsAr?: string[];
  locale?: 'en' | 'ar';
  
  // Page Info
  pageType?: 'home' | 'industry' | 'product' | 'service' | 'blog' | 'location' | 'about' | 'contact' | 'faq' | 'resources' | 'shop' | 'category';
  path: string;
  
  // Media
  image?: string;
  imageAlt?: string;
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
  
  // Author
  author?: string;
  authorAr?: string;
  
  // Dates
  publishedTime?: string;
  modifiedTime?: string;
  
  // Advanced
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  
  // AI Optimization
  aiSummary?: string;
  aiSummaryAr?: string;
}

// ============================================
// CONSTANTS
// ============================================

const BASE_URL = 'https://uneom.com';
const DEFAULT_IMAGE = '/images/og/uneom-og-image.jpg';
const SITE_NAME = 'UNEOM';
const SITE_NAME_AR = 'يونيوم';

// Default keywords for different page types
const DEFAULT_KEYWORDS: Record<string, string[]> = {
  home: [
    'professional uniforms Saudi Arabia',
    'uniform manufacturer KSA',
    'custom workwear Saudi',
    'corporate uniforms Riyadh',
    'medical scrubs Saudi Arabia',
    'hospitality uniforms',
    'industrial workwear',
    'school uniforms KSA'
  ],
  industry: [
    'industry uniforms Saudi Arabia',
    'sector-specific workwear',
    'professional attire KSA',
    'custom industry uniforms'
  ],
  product: [
    'buy uniforms Saudi Arabia',
    'professional workwear online',
    'custom uniforms KSA',
    'bulk uniform orders'
  ],
  service: [
    'uniform services Saudi Arabia',
    'custom design services',
    'bulk ordering',
    'corporate uniform programs'
  ],
  blog: [
    'uniform industry insights',
    'workwear trends',
    'professional attire tips',
    'Saudi Arabia uniform news'
  ],
  location: [
    'uniform supplier',
    'workwear store',
    'professional uniforms near me',
    'custom uniforms'
  ],
  shop: [
    'shop uniforms online Saudi Arabia',
    'buy workwear KSA',
    'professional uniforms store',
    'uniform e-commerce'
  ]
};

const DEFAULT_KEYWORDS_AR: Record<string, string[]> = {
  home: [
    'الأزياء المهنية السعودية',
    'مصنع الزي الموحد',
    'ملابس العمل المخصصة',
    'أزياء الشركات الرياض',
    'سكرابز طبية السعودية',
    'أزياء الضيافة',
    'ملابس العمل الصناعية',
    'الزي المدرسي السعودية'
  ],
  industry: [
    'أزياء القطاعات السعودية',
    'ملابس العمل المتخصصة',
    'الأزياء المهنية',
    'الزي الموحد المخصص'
  ],
  product: [
    'شراء الأزياء السعودية',
    'ملابس العمل أونلاين',
    'الأزياء المخصصة',
    'طلبات الجملة'
  ],
  shop: [
    'متجر الأزياء المهنية',
    'شراء ملابس العمل',
    'متجر الزي الموحد',
    'تسوق أونلاين'
  ]
};

// ============================================
// MAIN FUNCTION
// ============================================

export function generateMetadata2026(config: SEO2026Config): Metadata {
  const {
    title,
    titleAr,
    description,
    descriptionAr,
    keywords = [],
    keywordsAr = [],
    locale = 'en',
    pageType = 'home',
    path,
    image = DEFAULT_IMAGE,
    imageAlt,
    images = [],
    author = 'UNEOM Expert Team',
    authorAr = 'فريق خبراء يونيوم',
    publishedTime,
    modifiedTime,
    canonical,
    noindex = false,
    nofollow = false,
    aiSummary,
    aiSummaryAr
  } = config;

  const isArabic = locale === 'ar';
  const currentUrl = canonical || `${BASE_URL}${path}`;
  const alternateUrl = isArabic 
    ? path.replace('/ar', '') || BASE_URL
    : `${BASE_URL}/ar${path}`;

  // Localized content
  const localTitle = isArabic ? (titleAr || title) : title;
  const localDescription = isArabic ? (descriptionAr || description) : description;
  const localAuthor = isArabic ? (authorAr || author) : author;
  const localSiteName = isArabic ? SITE_NAME_AR : SITE_NAME;
  const localAiSummary = isArabic ? (aiSummaryAr || aiSummary || localDescription) : (aiSummary || localDescription);

  // Combine keywords
  const defaultKw = DEFAULT_KEYWORDS[pageType] || DEFAULT_KEYWORDS.home;
  const defaultKwAr = DEFAULT_KEYWORDS_AR[pageType] || DEFAULT_KEYWORDS_AR.home;
  const allKeywords = isArabic 
    ? [...keywordsAr, ...defaultKwAr, ...keywords, ...defaultKw]
    : [...keywords, ...defaultKw, ...keywordsAr, ...defaultKwAr];

  // Full title with branding
  const fullTitle = `${localTitle} | ${localSiteName}`;

  // Image URL
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  // OpenGraph images
  const ogImages = images.length > 0 
    ? images.map(img => ({
        url: img.url.startsWith('http') ? img.url : `${BASE_URL}${img.url}`,
        width: img.width || 1200,
        height: img.height || 630,
        alt: img.alt || localTitle
      }))
    : [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: imageAlt || localTitle
      }];

  // Build metadata object
  const metadata: Metadata = {
    // Basic
    title: fullTitle,
    description: localDescription,
    keywords: allKeywords.join(', '),
    
    // Authors
    authors: [{ name: localAuthor, url: BASE_URL }],
    creator: localAuthor,
    publisher: localSiteName,
    
    // Generator
    generator: 'Next.js 14',
    applicationName: localSiteName,
    
    // Referrer
    referrer: 'strict-origin-when-cross-origin',
    
    // Note: colorScheme, themeColor, and viewport have been moved to viewport export
    // as per Next.js 14 requirements. Use generateViewport2026() for these.
    
    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      nocache: false,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    
    // Icons
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' }
      ],
      apple: [
        { url: '/icons/apple-touch-icon.png', sizes: '180x180' }
      ],
      other: [
        { rel: 'icon', url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { rel: 'icon', url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
      ]
    },
    
    // Manifest
    manifest: '/manifest.json',
    
    // OpenGraph
    openGraph: {
      type: pageType === 'blog' ? 'article' : 'website',
      locale: isArabic ? 'ar_SA' : 'en_SA',
      alternateLocale: isArabic ? 'en_SA' : 'ar_SA',
      url: currentUrl,
      siteName: localSiteName,
      title: fullTitle,
      description: localDescription,
      images: ogImages,
      countryName: 'Saudi Arabia',
      ...(pageType === 'blog' && publishedTime ? {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: [localAuthor],
        section: 'Uniforms & Workwear'
      } : {})
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: '@uneom_sa',
      creator: '@uneom_sa',
      title: fullTitle,
      description: localDescription,
      images: ogImages.map(img => img.url)
    },
    
    // Alternates
    alternates: {
      canonical: currentUrl,
      languages: {
        'en-SA': isArabic ? alternateUrl : currentUrl,
        'ar-SA': isArabic ? currentUrl : alternateUrl,
        'x-default': currentUrl.replace('/ar', '')
      },
      types: {
        'application/rss+xml': `${BASE_URL}/rss.xml`
      }
    },
    
    // Verification
    verification: {
      google: 'k27-50XLg0yC-wwjyTIqfkGiowHO5nrAjTNiYmmf7is',
      yandex: 'yandex-verification-code'
    },
    
    // Category
    category: getCategory(pageType),
    classification: 'Business',
    
    // Other meta tags
    other: {
      // Apple
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': localSiteName,
      
      // Microsoft
      'msapplication-TileColor': '#1e40af',
      'msapplication-config': '/browserconfig.xml',
      
      // Mobile
      'mobile-web-app-capable': 'yes',
      'format-detection': 'telephone=no',
      
      // AI Search Optimization
      'ai-summary': localAiSummary.substring(0, 300),
      'ai-content-type': pageType,
      'ai-locale': isArabic ? 'ar-SA' : 'en-SA',
      
      // Trust signals
      'business-type': 'B2B',
      'industry': 'Professional Uniforms & Workwear',
      'service-area': 'Saudi Arabia, UAE, GCC',
      'established': '2015',
      
      // Content info
      'content-language': isArabic ? 'ar' : 'en',
      'geo.region': 'SA',
      'geo.placename': 'Saudi Arabia',
      
      // Dates
      ...(publishedTime ? { 'article:published_time': publishedTime } : {}),
      ...(modifiedTime ? { 'article:modified_time': modifiedTime } : {})
    }
  };

  return metadata;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function getCategory(pageType: string): string {
  const categoryMap: Record<string, string> = {
    home: 'Business',
    industry: 'Manufacturing',
    product: 'Shopping',
    service: 'Business Services',
    blog: 'News & Information',
    location: 'Local Business',
    about: 'Company Information',
    contact: 'Contact',
    faq: 'Customer Support',
    resources: 'Education',
    shop: 'E-commerce',
    category: 'Shopping'
  };
  return categoryMap[pageType] || 'Business';
}

// ============================================
// PRESET GENERATORS
// ============================================

/**
 * Generate metadata for industry pages
 */
export function generateIndustryMetadata(
  industry: string,
  industryAr: string,
  path: string,
  locale: 'en' | 'ar' = 'en'
): Metadata {
  return generateMetadata2026({
    title: `${industry} Uniforms & Workwear Solutions`,
    titleAr: `حلول الأزياء المهنية لقطاع ${industryAr}`,
    description: `Professional ${industry.toLowerCase()} uniforms and workwear in Saudi Arabia. Custom designs, premium fabrics, and bulk ordering available. UNEOM - Your trusted uniform partner.`,
    descriptionAr: `أزياء مهنية احترافية لقطاع ${industryAr} في السعودية. تصاميم مخصصة وأقمشة فاخرة وطلبات بالجملة. يونيوم - شريكك الموثوق للأزياء.`,
    keywords: [
      `${industry.toLowerCase()} uniforms`,
      `${industry.toLowerCase()} workwear`,
      `${industry.toLowerCase()} clothing Saudi Arabia`,
      `professional ${industry.toLowerCase()} attire`
    ],
    keywordsAr: [
      `أزياء ${industryAr}`,
      `ملابس عمل ${industryAr}`,
      `زي ${industryAr}`,
      `أزياء مهنية ${industryAr}`
    ],
    locale,
    pageType: 'industry',
    path,
    image: `/images/industries/${industry.toLowerCase().replace(/\s+/g, '-')}.jpg`
  });
}

/**
 * Generate metadata for product pages
 */
export function generateProductMetadata(
  productName: string,
  productNameAr: string,
  productDescription: string,
  productDescriptionAr: string,
  path: string,
  image: string,
  locale: 'en' | 'ar' = 'en'
): Metadata {
  return generateMetadata2026({
    title: `${productName} | Professional Uniforms`,
    titleAr: `${productNameAr} | الأزياء المهنية`,
    description: productDescription,
    descriptionAr: productDescriptionAr,
    keywords: [
      productName.toLowerCase(),
      'professional uniform',
      'workwear',
      'Saudi Arabia',
      'buy online'
    ],
    keywordsAr: [
      productNameAr,
      'زي مهني',
      'ملابس عمل',
      'السعودية',
      'شراء أونلاين'
    ],
    locale,
    pageType: 'product',
    path,
    image
  });
}

/**
 * Generate metadata for location pages
 */
export function generateLocationMetadata(
  city: string,
  cityAr: string,
  path: string,
  locale: 'en' | 'ar' = 'en'
): Metadata {
  return generateMetadata2026({
    title: `Professional Uniforms in ${city}`,
    titleAr: `الأزياء المهنية في ${cityAr}`,
    description: `UNEOM provides professional uniforms and workwear solutions in ${city}, Saudi Arabia. Healthcare, corporate, hospitality, and industrial uniforms with local delivery.`,
    descriptionAr: `يونيوم تقدم حلول الأزياء المهنية وملابس العمل في ${cityAr}، السعودية. أزياء الرعاية الصحية والشركات والضيافة والصناعة مع التوصيل المحلي.`,
    keywords: [
      `uniforms ${city}`,
      `workwear ${city}`,
      `uniform supplier ${city}`,
      `professional uniforms ${city}`
    ],
    keywordsAr: [
      `أزياء ${cityAr}`,
      `ملابس عمل ${cityAr}`,
      `مورد أزياء ${cityAr}`,
      `زي موحد ${cityAr}`
    ],
    locale,
    pageType: 'location',
    path,
    image: `/images/locations/${city.toLowerCase()}.jpg`
  });
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata(
  title: string,
  titleAr: string,
  excerpt: string,
  excerptAr: string,
  path: string,
  image: string,
  author: string,
  authorAr: string,
  publishedDate: string,
  locale: 'en' | 'ar' = 'en'
): Metadata {
  return generateMetadata2026({
    title,
    titleAr,
    description: excerpt,
    descriptionAr: excerptAr,
    locale,
    pageType: 'blog',
    path,
    image,
    author,
    authorAr,
    publishedTime: publishedDate,
    modifiedTime: new Date().toISOString()
  });
}

export default generateMetadata2026;
