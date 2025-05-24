/**
 * CanonicalTags Component
 * 
 * This component handles the implementation of canonical URLs and hreflang tags for all pages.
 * It addresses the E008 (Missing Self-Referencing Canonical) and E009 (Missing Hreflang) issues
 * from the Screaming Frog report by ensuring proper implementation for both English and Arabic pages.
 */

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface CanonicalTagsProps {
  /**
   * Path without the locale prefix (e.g., /about/)
   * Will default to current path if not provided
   */
  path?: string;
  /**
   * Domain name for the site, defaults to uneom.com
   */
  domain?: string;
}

const CanonicalTags: React.FC<CanonicalTagsProps> = ({ 
  path,
  domain = 'uneom.com'
}) => {
  const router = useRouter();
  
  // Get current path or use provided path
  const currentPath = path || router.pathname;
  
  // Ensure path has a trailing slash for canonical consistency
  const pathWithTrailingSlash = currentPath.endsWith('/')
    ? currentPath
    : `${currentPath}/`;
  
  // Remove locale prefix if present in the path
  const cleanPath = pathWithTrailingSlash.replace(/^\/(en|ar)/, '');
  
  // Create absolute URLs for both English and Arabic versions
  const baseUrl = `https://${domain}`;
  const englishUrl = `${baseUrl}${cleanPath}`;
  const arabicUrl = `${baseUrl}/ar${cleanPath}`;
  
  // Determine which URL is canonical for the current page
  const isArabicPage = router.locale === 'ar';
  const canonicalUrl = isArabicPage ? arabicUrl : englishUrl;

  return (
    <Head>
      {/* Self-referencing canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags for language alternatives */}
      <link rel="alternate" hrefLang="en-SA" href={englishUrl} />
      <link rel="alternate" hrefLang="ar-SA" href={arabicUrl} />
      <link rel="alternate" hrefLang="x-default" href={englishUrl} />
    </Head>
  );
};

export default CanonicalTags;
