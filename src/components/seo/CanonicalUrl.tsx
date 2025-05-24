/**
 * CanonicalUrl Component
 * 
 * This component provides self-referencing canonical URLs for all pages,
 * addressing [TASK SF_FIX_008] from the Screaming Frog report.
 * 
 * Features:
 * - Automatically generates the correct canonical URL based on current path and locale
 * - Ensures proper URL formatting with trailing slashes
 * - Provides a simple API for implementation across the site
 */

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getCanonicalUrl } from '@/lib/seo/url-formatter';

interface CanonicalUrlProps {
  /**
   * Optional override path if needed (e.g., for dynamically generated pages)
   */
  path?: string;
  
  /**
   * Base URL for the site
   */
  baseUrl?: string;
}

const CanonicalUrl: React.FC<CanonicalUrlProps> = ({
  path,
  baseUrl = 'https://uneom.com'
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  
  // Use the provided path or current path from router
  const currentPath = path || router.asPath;
  
  // Generate canonical URL with proper formatting
  const canonicalUrl = getCanonicalUrl(currentPath, locale, baseUrl);
  
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default CanonicalUrl;
