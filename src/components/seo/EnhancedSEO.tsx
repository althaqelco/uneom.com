/**
 * EnhancedSEO Component
 * 
 * A comprehensive SEO component that handles:
 * - Unique page titles
 * - Unique meta descriptions
 * - Proper page-specific keywords (not generic)
 * - Self-referencing canonical URLs
 * 
 * This component integrates all the SEO improvements to address issues
 * identified in the Screaming Frog report, including:
 * - [TASK SF_FIX_003] Unique H1 tags
 * - [TASK SF_FIX_004] Unique titles & meta descriptions
 * - [TASK SF_FIX_006] Targeted meta keywords
 * - [TASK SF_FIX_008] Canonical tag implementation
 * - [TASK SF_FIX_009] Hreflang tag implementation
 */

import React from 'react';
import Head from 'next/head';
import { useSafeRouter } from '@/lib/hooks/useSafeRouter';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import HreflangTags from '@/components/seo/HreflangTags';
import { getPageKeywords } from '@/lib/seo/keyword-optimizer';
import * as titleDescriptionGenerator from '@/lib/seo/title-description-generator';
import { getAlternateUrl } from '@/lib/seo/config-check';
import { getMetaKeywords } from '@/lib/seo/keywords-manager';

// Standard meta tags that should be included on all pages
interface EnhancedSEOProps {
  /**
   * Page title - if not provided, will be generated based on page type
   */
  title?: string;
  
  /**
   * Meta description - if not provided, will be generated based on page type
   */
  description?: string;
  
  /**
   * Meta keywords - if not provided, will be generated based on page type
   */
  keywords?: string[];
  
  /**
   * Type of page (e.g., 'industry', 'service', 'location')
   * Used for generating appropriate metadata
   */
  pageType?: 'home' | 'about' | 'contact' | 'quote' | 'faq' | 'industry' | 'service' | 'location' | 'product' | 'blog' | 'resource';
  
  /**
   * Specific subtype (e.g., 'corporate', 'healthcare' for industries)
   */
  specificType?: string;
  
  /**
   * Specific value for the page (e.g., 'riyadh' for a location page)
   */
  specificValue?: string;
  
  /**
   * Legacy prop - Used for retrieving page-specific metadata
   * @deprecated Use pageType instead
   */
  pageName?: string;
  
  /**
   * Legacy prop - Used for more specific page types
   * @deprecated Use specificType instead
   */
  subpage?: string;
  
  /**
   * URL to the main image for the page
   */
  image?: string;
  
  /**
   * Whether to add noindex directive
   */
  noindex?: boolean;
  
  /**
   * Whether to add nofollow directive
   */
  nofollow?: boolean;
  
  /**
   * Whether to include canonical and hreflang tags
   */
  includeLanguageTags?: boolean;
  
  /**
   * Override the default H1 tag content
   */
  h1Content?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords,
  pageType = 'home',
  specificType,
  specificValue,
  pageName,
  subpage,
  image,
  noindex = false,
  nofollow = false,
  includeLanguageTags = true,
  h1Content
}) => {
  const router = useSafeRouter();
  const locale = router.locale || 'en';
  const isArabic = locale === 'ar';
  
  // Base URL for the site
  const baseUrl = 'https://uneom.com';
  
  // Generate full URL for the current page
  const pageUrl = `${baseUrl}${router.asPath}`;
  
  // Get meta image URL
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${baseUrl}${image}`)
    : `${baseUrl}/images/og-image.jpg`;
  
  // Handle legacy props
  const resolvedPageType = pageType || (pageName === 'home' ? 'home' : pageName);
  const resolvedSpecificType = specificType || subpage || '';
  
  // Generate meta content based on page type
  let generatedMeta = {
    title: '',
    description: '',
    h1: ''
  };
  
  if (resolvedPageType === 'industry' && resolvedSpecificType) {
    // Handle industry pages
    const industryType = resolvedSpecificType as titleDescriptionGenerator.IndustryType;
    generatedMeta = titleDescriptionGenerator.generateIndustryContent(industryType, locale);
  } else if (resolvedPageType === 'service' && resolvedSpecificType) {
    // Handle service pages
    const serviceType = resolvedSpecificType as titleDescriptionGenerator.ServiceType;
    generatedMeta = titleDescriptionGenerator.generateServiceContent(serviceType, locale);
  } else if (resolvedPageType === 'location' && specificValue) {
    // Handle location pages
    const locationType = specificValue as titleDescriptionGenerator.LocationType;
    generatedMeta = titleDescriptionGenerator.generateLocationContent(locationType, locale);
  } else if (['home', 'about', 'contact', 'quote', 'faq'].includes(resolvedPageType)) {
    // Handle general pages
    generatedMeta = titleDescriptionGenerator.generatePageContent(
      resolvedPageType as 'home' | 'about' | 'contact' | 'quote' | 'faq',
      locale
    );
  }
  
  // Use provided values or fall back to generated ones
  const pageTitle = title || generatedMeta.title || `UNEOM - Professional Uniforms & Workwear in Saudi Arabia`;
  const pageDescription = description || generatedMeta.description || `Premium quality uniforms and workwear solutions for corporate, healthcare, hospitality, and educational institutions across Saudi Arabia.`;
  const pageH1 = h1Content || generatedMeta.h1;
  
  // Generate page-specific keywords if not provided
  const pageKeywords = keywords || getPageKeywords(
    resolvedPageType as any,
    locale,
    resolvedSpecificType,
    specificValue
  );
  
  return (
    <React.Fragment>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        {pageKeywords.length > 0 && <meta name="keywords" content={pageKeywords.join(', ')} />}
        
        {/* Robots directives */}
        {noindex && <meta name="robots" content={`noindex${nofollow ? ', nofollow' : ''}`} />}
        {!noindex && nofollow && <meta name="robots" content="nofollow" />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:locale" content={isArabic ? 'ar_SA' : 'en_US'} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={metaImage} />
        
        {/* Additional metadata for SEO */}
        <meta name="author" content="UNEOM" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Store H1 content in a global variable for HeadingManager to use */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__UNEOM_PAGE_H1 = ${JSON.stringify(pageH1)};`
          }}
        />
      </Head>
      
      {/* Add canonical tag */}
      {includeLanguageTags && <CanonicalUrl path={router.asPath} />}
      
      {/* Add hreflang tags */}
      {includeLanguageTags && <HreflangTags path={router.asPath} />}
    </React.Fragment>
  );
};

export default EnhancedSEO;
