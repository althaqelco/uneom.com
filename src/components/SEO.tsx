'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { useLocale } from '@/lib/i18n/client';
import { getWebsiteSchema, getBreadcrumbSchema } from './SEOSchemaMarkup';
import Script from 'next/script';

// Manually define types as imports are causing issues
type Locale = 'en' | 'ar';

const defaultTitleTemplate = '%s | UNEOM';

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
  structuredData
}: SEOProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname() || '';
  
  // Get SEO metadata from localized data or use custom values
  const metadata = getSEOMetadata(locale, pathname);
  
  // Use custom values or fallback to metadata from translations
  const title = customTitle || metadata.title || 'UNEOM';
  const description = customDescription || metadata.description || '';
  const keywords = customKeywords || metadata.keywords || '';
  
  // Format title with template unless it already contains the brand name
  const formattedTitle = title.includes('UNEOM') || title.includes('يونيوم') 
    ? title 
    : defaultTitleTemplate.replace('%s', title);
  
  // Determine canonical URL
  const baseUrl = locale === 'ar' ? 'https://uneom.com/ar' : 'https://uneom.com';
  const cleanPathname = pathname.replace(`/${locale}`, '');
  const canonicalUrl = customCanonicalUrl || `${baseUrl}${cleanPathname}`;
  
  // Construct OG Image URL (use custom or default)
  const ogImage = customOgImage || 'https://uneom.com/images/default-placeholder.jpg';
  
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
  
  // Generate alternate URLs for different languages
  const alternateUrls = Object.entries(languageURLs).map(([lang, url]) => {
    if (pathname === '/') {
      return { lang, url };
    }
    
    // For non-root paths, construct proper alternate URLs
    if (lang === 'en') {
      return { lang, url: `${url}${cleanPathname}` };
    } else {
      return { lang, url: `${url}${cleanPathname}` };
    }
  });
  
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{formattedTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang Tags */}
        {alternateUrls.map(({ lang, url }) => (
          <link 
            key={lang} 
            rel="alternate" 
            hrefLang={lang === 'ar' ? 'ar-SA' : 'en'} 
            href={url} 
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={languageURLs.en} />
        
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