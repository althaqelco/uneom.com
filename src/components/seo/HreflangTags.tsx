/**
 * HreflangTags Component
 * 
 * Implements hreflang tags for proper internationalization signals to search engines.
 * This component addresses [TASK SF_FIX_009] from the Screaming Frog report by
 * ensuring proper language and regional targeting.
 * 
 * Key features:
 * - Automatically generates hreflang tags for EN and AR versions of pages
 * - Adds x-default tag pointing to the English version
 * - Supports all page types in the site structure
 */

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface HreflangTagsProps {
  /**
   * Optional override for the current page path if needed
   */
  path?: string;
  
  /**
   * Base URL for the site
   */
  baseUrl?: string;
}

const HreflangTags: React.FC<HreflangTagsProps> = ({
  path,
  baseUrl = 'https://uneom.com'
}) => {
  const router = useRouter();
  
  // Get the current path, ensuring it has a trailing slash
  const currentPath = path || router.asPath;
  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  
  // Remove locale prefix if present to get the base path
  const locale = router.locale || 'en';
  let basePath = normalizedPath;
  
  if (locale === 'ar' && normalizedPath.startsWith('/ar')) {
    // Remove /ar prefix for Arabic pages
    basePath = normalizedPath.substring(3);
  }
  
  // For home page, basePath might be empty or just '/'
  if (!basePath || basePath === '/') {
    basePath = '/';
  }
  
  // Ensure basePath starts with /
  if (!basePath.startsWith('/')) {
    basePath = `/${basePath}`;
  }
  
  // Generate URLs for each locale
  const enUrl = `${baseUrl}${basePath}`;
  const arUrl = `${baseUrl}/ar${basePath}`;
  
  return (
    <Head>
      {/* English hreflang */}
      <link rel="alternate" hrefLang="en-SA" href={enUrl} />
      
      {/* Arabic hreflang */}
      <link rel="alternate" hrefLang="ar-SA" href={arUrl} />
      
      {/* x-default hreflang (points to English version as default) */}
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </Head>
  );
};

export default HreflangTags;
