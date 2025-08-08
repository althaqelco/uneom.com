/**
 * CustomMetaTags Component
 * 
 * Implements specialized meta tags beyond the standard ones covered by EnhancedSEO.
 * This component addresses specific technical SEO requirements for various page types,
 * including industry, service, and location pages in both English and Arabic.
 * 
 * It helps improve rankings for specific terms and indicates language/region targeting.
 */

import React from 'react';
import Head from 'next/head';
import { useSafeRouter } from '@/lib/hooks/useSafeRouter';

interface CustomMetaTagsProps {
  /**
   * Page type helps determine which specialized meta tags to include
   */
  pageType?: 'industry' | 'service' | 'location' | 'product' | 'blog' | 'general';
  
  /**
   * Specific industry if this is an industry page
   */
  industry?: string;
  
  /**
   * Specific location if this is a location page
   */
  location?: string;
  
  /**
   * Specific service if this is a service page
   */
  service?: string;
  
  /**
   * Geographic coordinates for location pages
   */
  geoPosition?: {
    latitude: string;
    longitude: string;
  };
  
  /**
   * Region for geo-targeting (e.g., "SA-01" for Riyadh region)
   */
  geoRegion?: string;
  
  /**
   * Place name for geo-targeting (e.g., "Riyadh, Saudi Arabia")
   */
  geoPlaceName?: string;
  
  /**
   * News keywords for blog/news pages (comma-separated)
   */
  newsKeywords?: string;
}

const CustomMetaTags: React.FC<CustomMetaTagsProps> = ({
  pageType = 'general',
  industry,
  location,
  service,
  geoPosition,
  geoRegion = 'SA',
  geoPlaceName,
  newsKeywords
}) => {
  const router = useSafeRouter();
  const locale = router.locale || 'en';
  const isArabic = locale === 'ar';
  
  /**
   * Generate page-specific meta tags based on page type
   */
  const generatePageSpecificTags = () => {
    switch (pageType) {
      case 'industry':
        return (
          <React.Fragment>
            {industry && <meta name="industry" content={industry} />}
            <meta name="page-type" content="industry" />
            <meta name="category" content={`uniform-industry:${industry}`} />
          </React.Fragment>
        );
        
      case 'service':
        return (
          <React.Fragment>
            {service && <meta name="service" content={service} />}
            <meta name="page-type" content="service" />
            <meta name="category" content={`uniform-service:${service}`} />
          </React.Fragment>
        );
        
      case 'location':
        return (
          <React.Fragment>
            {location && <meta name="location" content={location} />}
            <meta name="page-type" content="local-business" />
            {geoPosition && (
              <meta name="geo.position" content={`${geoPosition.latitude};${geoPosition.longitude}`} />
            )}
            <meta name="geo.region" content={geoRegion} />
            {geoPlaceName && <meta name="geo.placename" content={geoPlaceName} />}
            <meta name="ICBM" content={geoPosition ? `${geoPosition.latitude}, ${geoPosition.longitude}` : ''} />
          </React.Fragment>
        );
        
      case 'blog':
        return (
          <React.Fragment>
            <meta name="page-type" content="article" />
            {newsKeywords && <meta name="news_keywords" content={newsKeywords} />}
          </React.Fragment>
        );
        
      case 'product':
        return (
          <React.Fragment>
            <meta name="page-type" content="product" />
            <meta name="product:availability" content="in stock" />
          </React.Fragment>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Head>
      {/* Language indication */}
      <meta name="content-language" content={isArabic ? 'ar-SA' : 'en-SA'} />
      
      {/* Mobile optimization hint */}
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Page-specific meta tags */}
      {generatePageSpecificTags()}
      
      {/* Copyright information */}
      <meta name="copyright" content={`© ${new Date().getFullYear()} UNEOM`} />
      
      {/* Content rating */}
      <meta name="rating" content="general" />
    </Head>
  );
};

export default CustomMetaTags;
