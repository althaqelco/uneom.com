'use client';

import React from 'react';
import { Metadata } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import Head from 'next/head';
import { getLanguageAlternates, getSEOMetadata } from '@/lib/i18n';
import { isRTL } from '@/lib/i18n/config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  ogImage?: string;
  type?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noindex?: boolean;
  schemaMarkup?: object | object[];
  locale?: string;
  page?: string;
  subpage?: string;
  alternateLanguages?: {
    lang: string;
    href: string;
  }[];
}

/**
 * Generate metadata for Next.js App Router
 */
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/images/uneom-social-share.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
  alternateLanguages = [],
  locale = 'en',
  page,
  subpage,
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // If page is provided, get SEO data from translations
  let seoData = { title, description, keywords };
  if (page) {
    const pageSEO = getSEOMetadata(locale, page, subpage);
    seoData = {
      title: pageSEO.title,
      description: pageSEO.description,
      keywords: pageSEO.keywords
    };
  }
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords?.split(', '),
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: ogType,
      url: canonicalUrl,
      images: [
        {
          url: fullOgImageUrl,
        },
      ],
      locale,
    },
    twitter: {
      card: twitterCard,
      title: seoData.title,
      description: seoData.description,
      images: [fullOgImageUrl],
    },
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      languages: alternateLanguages.reduce((acc, { lang, href }) => {
        acc[lang] = href;
        return acc;
      }, {} as Record<string, string>),
    },
  };
}

/**
 * Default metadata for the site
 */
export const defaultMetadata: Metadata = {
  title: 'UNEOM - Saudi Arabia\'s Leading Provider of Professional Uniforms & Scrubs',
  description: 'UNEOM provides high-quality professional uniforms and scrubs for healthcare, aviation, hospitality, and corporate sectors in Saudi Arabia.',
  keywords: [
    'uniforms', 
    'Saudi Arabia', 
    'professional uniforms', 
    'scrubs', 
    'healthcare uniforms', 
    'aviation uniforms', 
    'hospitality uniforms', 
    'corporate uniforms'
  ],
  robots: 'index, follow',
};

/**
 * SEO component for managing meta tags, Open Graph, Twitter cards, and Schema.org markup
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  ogImage,
  type = 'website',
  schemaMarkup,
  noindex = false,
  canonical,
  alternateLanguages,
  locale = 'en',
  page,
  subpage,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  
  // Default values from translations if page is provided
  let seoData = {
    title: 'UNEOM - Saudi Arabia\'s Leading Provider of Professional Uniforms & Scrubs',
    description: 'UNEOM provides tailored B2B uniform solutions for healthcare, aviation, hospitality, and corporate sectors across Saudi Arabia.',
    keywords: 'uniforms, Saudi Arabia, professional uniforms, scrubs, healthcare uniforms, aviation uniforms, hospitality uniforms, corporate uniforms',
  };
  
  if (page) {
    const pageSEO = getSEOMetadata(locale, page, subpage);
    seoData = {
      title: pageSEO.title,
      description: pageSEO.description,
      keywords: pageSEO.keywords
    };
  } else if (title || description) {
    seoData = {
      title: title || seoData.title,
      description: description || seoData.description,
      keywords: seoData.keywords,
    };
  }
  
  // Format title
  const siteTitle = seoData.title.includes('UNEOM') || seoData.title.includes('يونيوم')
    ? seoData.title
    : locale === 'en' 
      ? `${seoData.title} | UNEOM`
      : `${seoData.title} | يونيوم`;
    
  // Use provided values or defaults
  const metaDescription = seoData.description;
  const metaImage = image || ogImage || '/images/uneom-social-card.jpg';
  
  // Base URL for absolute URLs
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  
  // Generate absolute URL for canonical and OG links
  const currentPath = pathname || '';
  const url = canonical 
    ? `${baseUrl}${canonical}` 
    : `${baseUrl}${currentPath}`;
    
  // Format image URL (ensure it's absolute)
  const ogImageUrl = metaImage.startsWith('http') 
    ? metaImage 
    : `${baseUrl}${metaImage}`;

  // Handle alternate languages if not explicitly provided
  const languageAlternates = alternateLanguages || getLanguageAlternates(currentPath, locale);

  // Handle JSON-LD markup
  const generateSchemaMarkup = () => {
    if (!schemaMarkup) return null;
    
    if (Array.isArray(schemaMarkup)) {
      return schemaMarkup.map((markup, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(markup) }}
        />
      ));
    }
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
    );
  };

  // Check if the content is RTL
  const isRtl = isRTL(locale);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* RTL Metadata */}
      {isRtl && <html lang="ar" dir="rtl" />}
      {!isRtl && <html lang="en" dir="ltr" />}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={locale === 'en' ? 'UNEOM' : 'يونيوم'} />
      <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'ar_SA'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Alternate Language Links */}
      {languageAlternates?.map((lang) => (
        <link 
          key={lang.lang}
          rel="alternate" 
          hrefLang={lang.lang} 
          href={lang.href}
        />
      ))}
      
      {/* Schema.org JSON-LD */}
      {generateSchemaMarkup()}
    </Head>
  );
};

export default SEO; 