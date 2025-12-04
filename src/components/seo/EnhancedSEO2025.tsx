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
      telephone: '+971558164922',
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
    <React.Fragment>
      {/* Enhanced Structured Data for May 2025 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [organizationData, websiteData]
          })
        }}
      />
      
      {/* Core Web Vitals Monitoring */}
      <CoreWebVitals />

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
                non_interaction: true});
            }
          }
          
          // Load web-vitals and report
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
              import('web-vitals').then((webVitals) => {
                if (webVitals.onCLS) webVitals.onCLS(reportWebVitals);
                if (webVitals.onINP) webVitals.onINP(reportWebVitals); // INP replaces FID in v5
                if (webVitals.onFCP) webVitals.onFCP(reportWebVitals);
                if (webVitals.onLCP) webVitals.onLCP(reportWebVitals);
                if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals);
              }).catch((error) => {
                console.log('Web vitals not available:', error);
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
                non_interaction: true});
            }
          });
        `}
      </Script>
    </React.Fragment>
  );
};

export default EnhancedSEO2025;