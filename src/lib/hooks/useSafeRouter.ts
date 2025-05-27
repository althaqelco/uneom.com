"use client";

import { useEffect, useState } from 'react';

// Safe router hook for static export
export const useSafeRouter = () => {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState('en');
  const [pathname, setPathname] = useState('/');
  const [query, setQuery] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
    
    // Get locale from URL or localStorage
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const search = window.location.search;
      setPathname(path);
      
      // Parse query parameters
      const urlParams = new URLSearchParams(search);
      const queryObj: Record<string, string> = {};
      urlParams.forEach((value, key) => {
        queryObj[key] = value;
      });
      
      // Extract dynamic route parameters from path
      const pathSegments = path.split('/').filter(Boolean);
      if (pathSegments[0] === 'ar') {
        setLocale('ar');
        // Remove 'ar' from segments for parameter extraction
        pathSegments.shift();
      } else {
        setLocale('en');
      }
      
      // Extract common dynamic parameters
      if (pathSegments.length > 0) {
        // For blog posts: /blog/[slug]
        if (pathSegments[0] === 'blog' && pathSegments[1]) {
          queryObj.slug = pathSegments[1];
        }
        // For shop items: /shop/[category]/[product]
        if (pathSegments[0] === 'shop') {
          if (pathSegments[1]) queryObj.category = pathSegments[1];
          if (pathSegments[2]) queryObj.product = pathSegments[2];
        }
        // For authors: /authors/[slug]
        if (pathSegments[0] === 'authors' && pathSegments[1]) {
          queryObj.slug = pathSegments[1];
        }
        // For locations: /locations/[city]
        if (pathSegments[0] === 'locations' && pathSegments[1]) {
          queryObj.city = pathSegments[1];
        }
      }
      
      setQuery(queryObj);
    }
  }, []);

  return {
    locale,
    pathname,
    asPath: pathname,
    query,
    isReady: mounted,
    push: (url: string) => {
      if (typeof window !== 'undefined') {
        window.location.href = url;
      }
    },
    replace: (url: string) => {
      if (typeof window !== 'undefined') {
        window.location.replace(url);
      }
    }
  };
};

// Safe locale hook for static export
export const useSafeLocale = () => {
  const [locale, setLocale] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(Boolean);
      if (pathSegments[0] === 'ar') {
        setLocale('ar');
      } else {
        setLocale('en');
      }
    }
  }, []);

  return { locale, isArabic: locale === 'ar', mounted };
};