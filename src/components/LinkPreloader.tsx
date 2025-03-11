'use client';

import { useEffect } from 'react';
import { initLinkPreloading, preloadCriticalPaths } from '@/lib/utils/linkPreloader';

interface LinkPreloaderProps {
  criticalPaths?: string[];
}

/**
 * LinkPreloader component that sets up link preloading for the application
 * This is a client component that should be included in the root layout
 * to enable link preloading across the entire application.
 */
export default function LinkPreloader({ criticalPaths = [] }: LinkPreloaderProps) {
  useEffect(() => {
    // Initialize link preloading for all navigation links
    initLinkPreloading();

    // Preload critical paths if provided
    if (criticalPaths.length > 0) {
      preloadCriticalPaths(criticalPaths);
    }

    // Preload common paths that are likely to be visited
    const commonPaths = [
      '/services',
      '/industries',
      '/about',
      '/contact',
      '/shop',
      '/blog'
    ];

    // Determine current language and preload paths for that language
    const isArabic = window.location.pathname.startsWith('/ar');
    const pathPrefix = isArabic ? '/ar' : '';
    
    // Preload common paths with appropriate language prefix
    const localizedPaths = commonPaths.map(path => `${pathPrefix}${path}`);
    preloadCriticalPaths(localizedPaths, 'low');

  }, [criticalPaths]);

  // This component doesn't render anything
  return null;
} 