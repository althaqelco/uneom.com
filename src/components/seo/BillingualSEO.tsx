/**
 * BillingualSEO Component
 * 
 * This component handles advanced SEO requirements for bilingual (English/Arabic) content
 * by implementing proper:
 * - hreflang tags with region targeting (en-SA and ar-SA)
 * - x-default tags
 * - self-referencing canonical URLs
 * - properly formatted structured data with language attributes
 */

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAlternateUrl } from '@/lib/seo/config-check';

interface BillingualSEOProps {
  canonicalPath?: string;
  noindex?: boolean;
}

const BilingualSEO: React.FC<BillingualSEOProps> = ({
  canonicalPath,
  noindex = false
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isArabic = locale === 'ar';
  const siteUrl = 'https://uneom.com';
  
  // Create canonical URL with trailing slash
  let currentPath = canonicalPath || router.asPath;
  
  // Remove query parameters and hash if they exist
  if (currentPath.includes('?') || currentPath.includes('#')) {
    currentPath = currentPath.split(/[?#]/)[0];
  }
  
  // Ensure trailing slash for canonical URLs
  if (!currentPath.endsWith('/')) {
    currentPath = `${currentPath}/`;
  }
  
  // Form the absolute URLs for canonical and alternates
  const canonicalUrl = `${siteUrl}${currentPath}`;
  const alternateUrl = getAlternateUrl(currentPath, locale);
  
  // Saudi Arabia specific region targeting
  const currentLangRegion = isArabic ? 'ar-SA' : 'en-SA';
  const alternateLangRegion = isArabic ? 'en-SA' : 'ar-SA';
  
  return (
    <Head>
      {/* Canonical URL - self-referencing */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags - properly implemented for Saudi audience */}
      <link 
        rel="alternate" 
        hreflang={currentLangRegion} 
        href={canonicalUrl} 
      />
      <link 
        rel="alternate" 
        hreflang={alternateLangRegion}
        href={alternateUrl} 
      />
      <link 
        rel="alternate" 
        hreflang="x-default" 
        href={isArabic ? alternateUrl : canonicalUrl} 
      />
      
      {/* If noindex is required (for admin or utility pages) */}
      {noindex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Head>
  );
};

export default BilingualSEO;
