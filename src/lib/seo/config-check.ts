/**
 * Next.js Configuration Check for SEO
 * 
 * This file provides utilities to validate and verify that critical
 * Next.js configuration settings are properly implemented for SEO
 */

import { useRouter } from 'next/router';

// Constants
export const EXPECTED_CONFIG = {
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  }
};

/**
 * Validates whether a URL follows the trailing slash convention
 * @param url The URL to check
 * @returns Boolean indicating if URL follows trailing slash convention
 */
export const hasTrailingSlash = (url: string): boolean => {
  // Skip URLs with query parameters or hash
  if (url.includes('?') || url.includes('#')) {
    url = url.split(/[?#]/)[0];
  }
  
  // Skip the root URL
  if (url === '/' || url === '') return true;
  
  return url.endsWith('/');
};

/**
 * Hook to validate the current page's URL format
 * @returns Object with validation results
 */
export const useUrlValidation = () => {
  const router = useRouter();
  
  const isTrailingSlashValid = hasTrailingSlash(router.asPath);
  const isLocaleValid = 
    router.locale === 'en' || router.locale === 'ar';
  const hasCorrectLocalePath = 
    (router.locale === 'en' && !router.asPath.startsWith('/en/')) || 
    (router.locale === 'ar' && router.asPath.startsWith('/ar/'));
  
  return {
    isTrailingSlashValid,
    isLocaleValid,
    hasCorrectLocalePath,
    currentPath: router.asPath,
    currentLocale: router.locale,
  };
};

/**
 * Generates the alternate URL for the current page in the other language
 * @param currentPath Current page path
 * @param currentLocale Current locale
 * @returns The alternate language URL
 */
export const getAlternateUrl = (currentPath: string, currentLocale: string): string => {
  const siteUrl = 'https://uneom.com';
  
  if (currentLocale === 'en') {
    // If root path, alternate is /ar/
    if (currentPath === '/') {
      return `${siteUrl}/ar/`;
    }
    // Otherwise prepend /ar/ to the path
    return `${siteUrl}/ar${currentPath}`;
  } else {
    // If on Arabic root, alternate is /
    if (currentPath === '/ar/') {
      return siteUrl;
    }
    // Otherwise remove /ar/ from the path
    return `${siteUrl}${currentPath.replace(/^\/ar/, '')}`;
  }
};

export default {
  EXPECTED_CONFIG,
  hasTrailingSlash,
  useUrlValidation,
  getAlternateUrl
};
