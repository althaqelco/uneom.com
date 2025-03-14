'use client';

import React, { useEffect } from 'react';
import { initArabicOptimizations } from '@/lib/utils/arabicOptimization';

/**
 * ArabicOptimizer component for enhancing Arabic version performance
 * This handles proper font loading and RTL optimizations
 */
const ArabicOptimizer: React.FC = () => {
  useEffect(() => {
    // Initialize Arabic optimizations on mount
    initArabicOptimizations();
    
    // Manually preload Arabic fonts with proper attributes
    const fontUrls = [
      '/fonts/ar/Cairo-Regular.woff2',
      '/fonts/ar/Cairo-Medium.woff2',
      '/fonts/ar/Cairo-Bold.woff2',
      '/fonts/ar/Cairo-SemiBold.woff2',
      '/fonts/ar/Tajawal-Regular.woff2',
      '/fonts/ar/Tajawal-Medium.woff2',
      '/fonts/ar/Tajawal-Bold.woff2'
    ];
    
    // Remove any existing preload links for fonts (to avoid duplicates)
    document.querySelectorAll('link[rel="preload"][as="font"]').forEach(el => {
      el.remove();
    });
    
    // Create new preload links with correct attributes
    fontUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    
    // Add CSS to prioritize font loading
    const style = document.createElement('style');
    style.textContent = `
      /* Prioritize font loading */
      @font-face {
        font-family: 'Cairo';
        src: url('/fonts/ar/Cairo-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Tajawal';
        src: url('/fonts/ar/Tajawal-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      
      /* Apply Arabic fonts to critical elements immediately */
      html[lang="ar"] body {
        font-family: 'Cairo', 'Tajawal', sans-serif !important;
      }
    `;
    document.head.appendChild(style);
    
    // Force browser to recognize direction
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    // Fix any RTL layout issues
    document.body.classList.add('rtl');
    
    return () => {
      // Cleanup if needed
      document.querySelectorAll('link[rel="preload"][as="font"]').forEach(el => {
        if (fontUrls.some(url => el.href.includes(url))) {
          el.remove();
        }
      });
    };
  }, []);

  // This is a client-side only component
  return null;
};

export default ArabicOptimizer; 