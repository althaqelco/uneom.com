/**
 * Enhanced SEO Component for Google May 2025 Standards
 * 
 * This component implements all the latest SEO requirements including:
 * - Core Web Vitals monitoring
 * - E-A-T signals
 * - Mobile-first optimization
 * - AI content guidelines
 * - Enhanced structured data
 */

'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import CoreWebVitals from './CoreWebVitals';
import StructuredData from './StructuredData';

interface EnhancedSEO2025Props {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  contentType?: 'article' | 'product' | 'service' | 'location' | 'faq';
  expertise?: string;
  trustSignals?: string[];
  locale?: string;
  noindex?: boolean;
  canonicalUrl?: string;
}

const EnhancedSEO2025: React.FC<EnhancedSEO2025Props> = ({
  title = 'UNEOM | Premium Uniform Manufacturer in Saudi Arabia',
  description = 'Leading uniform manufacturer in Saudi Arabia providing high-quality corporate, healthcare, hospitality, and industrial uniforms with custom designs and premium fabrics.',
  keywords = [],
  image = '/images/og-image.jpg',
  author = 'UNEOM Expert Team',
  publishedTime,
  modifiedTime,
  contentType = 'service',
  expertise = 'Uniform Manufacturing & Design',
  trustSignals = [],
  locale = 'en',
  noindex = false,
  canonicalUrl
}) => {
  const pathname = usePathname();
  const currentUrl = `https://uneom.com${pathname}`;
  const canonical = canonicalUrl || currentUrl;
  const isArabic = locale === 'ar';

  // Generate comprehensive keywords
  const seoKeywords = [
    ...keywords,
    'uniform Saudi Arabia',
    'professional uniforms',
    'custom uniforms',
    'uniform manufacturer',
    'workwear Saudi',
    'corporate uniforms',
    'medical uniforms',
    'hospitality uniforms',
    'industrial uniforms'
  ].join(', ');

  // E-A-T signals for content authenticity
  const eatSignals = {
    expertise: expertise,
    authoritativeness: 'Leading uniform manufacturer in Saudi Arabia since establishment',
    trustworthiness: [
      'ISO certified manufacturing',
      'Government approved supplier',
      'Trusted by 500+ companies',
      ...trustSignals
    ]
  };

  // Enhanced structured data for May 2025
  const organizationData = {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com',
    logo: 'https://uneom.com/images/logo.png',
    description: 'Premium uniform manufacturer in Saudi Arabia',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'Riyadh Province',
      addressLocality: 'Riyadh'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-XX-XXX-XXXX',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic']
    },
    sameAs: [
      'https://linkedin.com/company/uneom',
      'https://twitter.com/uneom',
      'https://instagram.com/uneom'
    ]
  };

  const websiteData = {
    '@type': 'WebSite',
    name: 'UNEOM',
    url: 'https://uneom.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://uneom.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags - May 2025 Optimized */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />
        
        {/* Language and Region */}
        <meta name="language" content={isArabic ? 'Arabic' : 'English'} />
        <meta name="geo.region" content="SA" />
        <meta name="geo.country" content="Saudi Arabia" />
        <meta name="geo.placename" content="Riyadh, Jeddah, Dammam" />
        
        {/* Robots and Indexing */}
        <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'} />
        <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        
        {/* E-A-T Signals */}
        <meta name="author" content={author} />
        <meta name="expertise" content={expertise} />
        <meta name="trustworthiness" content={eatSignals.trustworthiness.join(', ')} />
        {publishedTime && <meta name="article:published_time" content={publishedTime} />}
        {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}
        
        {/* Open Graph / Facebook - May 2025 Enhanced */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://uneom.com${image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:locale" content={isArabic ? 'ar_SA' : 'en_SA'} />
        <meta property="og:site_name" content="UNEOM" />
        
        {/* Twitter Card - Enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://uneom.com${image}`} />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:creator" content="@uneom" />
        <meta name="twitter:site" content="@uneom" />
        
        {/* Mobile Optimization - May 2025 Standards */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Performance and Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* Core Web Vitals Monitoring */}
      <CoreWebVitals />

      {/* Enhanced Structured Data */}
      <StructuredData type="Organization" data={organizationData} language={locale} />
      <StructuredData type="Website" data={websiteData} language={locale} />

      {/* Performance Monitoring Script */}
      <Script id="performance-monitoring" strategy="afterInteractive">
        {`
          // Monitor Core Web Vitals
          function reportWebVitals(metric) {
            console.log('Web Vital:', metric);
            
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', metric.name, {
                event_category: 'Web Vitals',
                event_label: metric.id,
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                non_interaction: true,
              });
            }
          }
          
          // Load web-vitals and report
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
              import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(reportWebVitals);
                getFID(reportWebVitals);
                getFCP(reportWebVitals);
                getLCP(reportWebVitals);
                getTTFB(reportWebVitals);
              });
            });
          }
        `}
      </Script>

      {/* User Engagement Tracking */}
      <Script id="engagement-tracking" strategy="afterInteractive">
        {`
          // Track user engagement for May 2025 ranking factors
          let engagementStartTime = Date.now();
          let scrollDepth = 0;
          let maxScrollDepth = 0;
          
          function trackEngagement() {
            const currentScrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (currentScrollDepth > maxScrollDepth) {
              maxScrollDepth = currentScrollDepth;
            }
          }
          
          window.addEventListener('scroll', trackEngagement, { passive: true });
          
          // Track time on page
          window.addEventListener('beforeunload', () => {
            const timeOnPage = Date.now() - engagementStartTime;
            if (typeof gtag !== 'undefined') {
              gtag('event', 'page_engagement', {
                event_category: 'Engagement',
                time_on_page: Math.round(timeOnPage / 1000),
                max_scroll_depth: maxScrollDepth,
                non_interaction: true,
              });
            }
          });
        `}
      </Script>
    </>
  );
};

export default EnhancedSEO2025;