'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { useLocale } from '@/lib/i18n/client';
import { getWebsiteSchema, getBreadcrumbSchema } from './SEOSchemaMarkup';
import Script from 'next/script';

// Manually define types as imports are causing issues
type Locale = 'en' | 'ar';

const defaultTitleTemplate = '%s | UNEOM';

// Use absolute URLs for language base paths to comply with SEO best practices
const languageURLs = {
  en: 'https://uneom.com',
  ar: 'https://uneom.com/ar'
};

// Placeholder function until we properly connect to the SEO data
const getSEOMetadata = (locale: Locale, pathname: string) => {
  return {
    title: '',
    description: '',
    keywords: ''
  };
};

/**
 * SEO component for improved search engine optimization
 * Handles meta tags, Open Graph, Twitter Cards, canonical URLs, and hreflang
 */
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  noIndex?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  pageType?: string;
  structuredData?: any;
  hreflangAlternatives?: Array<{ href: string; lang: string }>;
}

export default function SEO({
  title: customTitle,
  description: customDescription,
  keywords: customKeywords,
  ogImage: customOgImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl: customCanonicalUrl,
  noIndex = false,
  breadcrumbs,
  pageType,
  structuredData,
  hreflangAlternatives: customHreflangAlternatives
}: SEOProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname() || '';
  
  // Get SEO metadata from localized data or use custom values
  const metadata = getSEOMetadata(locale, pathname);
  
  // Use custom values or fallback to metadata from translations
  const title = customTitle || metadata.title || 'UNEOM';
  const description = customDescription || metadata.description || '';
  
  // We're not using meta keywords as they're not relevant for Google SEO anymore
  // const keywords = customKeywords || metadata.keywords || '';
  
  // Format title with template unless it already contains the brand name
  const formattedTitle = title.includes('UNEOM') || title.includes('يونيوم') 
    ? title 
    : defaultTitleTemplate.replace('%s', title);
  
  // Determine canonical URL - always ensure trailing slash
  let baseUrl;
  let pathForCanonical;
  
  // Clean pathname for alternate URLs - carefully handle paths to avoid duplication
  // Remove any locale prefix from the pathname to get the pure path
  let cleanPathname = pathname;
  
  if (locale === 'ar' && pathname.startsWith('/ar')) {
    cleanPathname = pathname.substring(3); // Remove /ar prefix
  } else if (locale === 'en' && pathname.startsWith('/en')) {
    cleanPathname = pathname.substring(3); // Remove /en prefix if somehow present
  }
  
  // Make sure path starts with / for consistency
  if (!cleanPathname.startsWith('/') && cleanPathname !== '') {
    cleanPathname = '/' + cleanPathname;
  }
  
  // For home page (/ path), don't add another slash
  if (cleanPathname === '' || cleanPathname === '/') {
    cleanPathname = '/';
  }
  // For all other pages, ensure trailing slash
  else if (!cleanPathname.endsWith('/')) {
    cleanPathname += '/';
  }
  
  // Set base URL based on locale
  if (locale === 'ar') {
    baseUrl = languageURLs.ar;
    pathForCanonical = cleanPathname;
  } else {
    baseUrl = languageURLs.en;
    pathForCanonical = cleanPathname;
  }
  
  // Use custom canonical if provided, otherwise build it
  const canonicalUrl = customCanonicalUrl || `${baseUrl}${pathForCanonical}`;
  
  // Construct OG Image URL (use custom or default)
  const ogImage = customOgImage || 'https://uneom.com/images/default-placeholder.jpg';
  
  // Generate alternate URLs for different languages
  // The hreflang implementation specifically uses en-SA and ar-SA for Saudi Arabia targeting
  // with x-default pointing to the English version as per roadmap.md and scramefrog.md
  
  // Calculate alternateUrls programmatically to ensure consistency
  const enUrl = `${languageURLs.en}${cleanPathname}`;
  const arUrl = `${languageURLs.ar}${cleanPathname}`;
  
  // Define the alternate URLs with proper hreflang codes for Saudi Arabia
  const alternateUrls = [
    { lang: 'en-SA', url: enUrl },
    { lang: 'ar-SA', url: arUrl },
    { lang: 'x-default', url: enUrl } // English as default per roadmap.md
  ];
  
  // Generate structured data if not provided
  const schemas = [];
  
  // Add website schema
  schemas.push(getWebsiteSchema(locale));
  
  // Add breadcrumb schema if breadcrumbs are provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(getBreadcrumbSchema(breadcrumbs, locale));
  }
  
  // Add custom structured data if provided
  if (structuredData) {
    schemas.push(structuredData);
  }
  
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{formattedTitle}</title>
        <meta name="description" content={description} />
        {/* Removed meta keywords as they're no longer relevant for SEO */}
        {/* {keywords && <meta name="keywords" content={keywords} />} */}
        
        {/* Canonical URL - Self-referencing */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags - Fixed implementation per scramefrog.md */}
        {customHreflangAlternatives ? (
          // Use custom alternatives if provided
          customHreflangAlternatives.map(({ lang, href }) => (
            <link key={lang} rel="alternate" hrefLang={lang} href={href} />
          ))
        ) : (
          // Otherwise use our calculated alternatives
          alternateUrls.map(({ lang, url }) => (
            <link key={lang} rel="alternate" hrefLang={lang} href={url} />
          ))
        )}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta property="og:site_name" content={locale === 'ar' ? 'يونيوم' : 'UNEOM'} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Indexing Directives */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      
      {/* JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="afterInteractive"
        />
      ))}
    </>
  );
} 