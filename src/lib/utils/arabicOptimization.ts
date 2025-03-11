/**
 * Arabic-specific optimization utilities for UNEOM website
 * This file contains functions to optimize Arabic pages for better performance
 */

import type { ImageLoaderProps } from 'next/image';

/**
 * Generates Arabic-specific image placeholders with proper RTL support
 * @param color - Base color for the placeholder
 * @returns - Data URL for a tiny placeholder with RTL support
 */
export const generateArabicPlaceholder = (color: string = '#f3f4f6'): string => {
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' dir='rtl'%3E%3Crect width='1' height='1' fill='${color.replace('#', '%23')}'/%3E%3C/svg%3E`;
};

/**
 * Get optimized image path for Arabic content
 * @param src - Original image path
 * @returns - Optimized image path for Arabic content
 */
export const getArabicImagePath = (src: string): string => {
  // Check if there's an Arabic-specific version available
  if (src.includes('/images/')) {
    const arabicPath = src.replace('/images/', '/images/ar/');
    // In a real implementation, you would check if this file exists
    return arabicPath;
  }
  return src;
};

/**
 * Custom image loader for Arabic content with RTL support
 * @param props - Image loader props
 * @returns - Optimized image URL for Arabic content
 */
export const arabicImageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  // Get Arabic-specific version if available
  const arabicPath = getArabicImagePath(src);
  
  // Apply optimization parameters
  return `${arabicPath}?w=${width}&q=${quality || 75}&rtl=true`;
};

/**
 * Preloads critical images for Arabic pages
 * @param paths - Array of critical image paths
 */
export const preloadArabicCriticalImages = (paths: string[]): void => {
  if (typeof document !== 'undefined') {
    paths.forEach(path => {
      const arabicPath = getArabicImagePath(path);
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = arabicPath;
      document.head.appendChild(link);
    });
  }
};

/**
 * Determines if an image should be flipped for RTL layout
 * @param src - Image source path
 * @returns - Whether the image should be flipped
 */
export const shouldFlipForRTL = (src: string): boolean => {
  // Images that should be flipped in RTL mode
  // For example, directional icons, diagrams that show flow, etc.
  const flippablePatterns = [
    'arrow',
    'direction',
    'flow',
    'progress',
    'timeline',
    'process',
    'chevron',
    'next',
    'prev',
    'forward',
    'back',
    'right',
    'left',
    'navigation'
  ];
  
  return flippablePatterns.some(pattern => src.toLowerCase().includes(pattern));
};

/**
 * Get RTL-appropriate CSS classes for images
 * @param src - Image source path
 * @returns - CSS classes for RTL support
 */
export const getRTLImageClasses = (src: string): string => {
  if (shouldFlipForRTL(src)) {
    return 'rtl-flip';
  }
  return '';
};

/**
 * Prefetches Arabic fonts to improve font loading performance
 */
export const prefetchArabicFonts = (): void => {
  if (typeof document !== 'undefined') {
    // Define the Arabic font URLs to preload
    const fontUrls = [
      '/fonts/ar/Cairo-Regular.woff2',
      '/fonts/ar/Cairo-Medium.woff2',
      '/fonts/ar/Cairo-Bold.woff2',
      '/fonts/ar/Cairo-SemiBold.woff2',
      // Add Tajawal as a fallback Arabic font
      '/fonts/ar/Tajawal-Regular.woff2',
      '/fonts/ar/Tajawal-Medium.woff2',
      '/fonts/ar/Tajawal-Bold.woff2'
    ];
    
    // Create preload links for each font
    fontUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    
    // Add CSS to define font faces
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Cairo';
        src: url('/fonts/ar/Cairo-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Cairo';
        src: url('/fonts/ar/Cairo-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Cairo';
        src: url('/fonts/ar/Cairo-SemiBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Cairo';
        src: url('/fonts/ar/Cairo-Bold.woff2') format('woff2');
        font-weight: 700;
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
      
      @font-face {
        font-family: 'Tajawal';
        src: url('/fonts/ar/Tajawal-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Tajawal';
        src: url('/fonts/ar/Tajawal-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      
      .rtl-text {
        font-family: 'Cairo', 'Tajawal', sans-serif;
      }
      
      .rtl-flip {
        transform: scaleX(-1);
      }
      
      [dir="rtl"] svg[class*="arrow"],
      [dir="rtl"] svg[class*="chevron"],
      [dir="rtl"] svg[class*="direction"],
      [dir="rtl"] svg[class*="navigation"] {
        transform: scaleX(-1);
      }
    `;
    
    document.head.appendChild(style);
  }
};

/**
 * Optimizes layout for RTL text rendering
 * @returns - CSS variables for RTL optimization
 */
export const getRTLOptimizationCSSVars = (): Record<string, string> => {
  return {
    '--text-align': 'right',
    '--direction': 'rtl',
    '--font-family': 'Cairo, Tajawal, sans-serif',
    '--reverse-flex': 'row-reverse',
    '--start-padding': '0',
    '--end-padding': '1rem',
    '--align-start': 'flex-end',
    '--align-end': 'flex-start',
    '--margin-start': '0',
    '--margin-end': 'auto',
  };
};

/**
 * Apply RTL transformations to DOM elements
 */
export const applyRTLTransformations = (): void => {
  if (typeof document === 'undefined') return;
  
  // Apply to directional SVG icons
  document.querySelectorAll('svg').forEach(svg => {
    const classList = svg.getAttribute('class') || '';
    if (
      classList.includes('arrow') || 
      classList.includes('chevron') ||
      classList.includes('direction') ||
      classList.includes('navigation')
    ) {
      svg.classList.add('rtl-flip');
    }
  });
  
  // Fix spacing and alignment in flex containers
  document.querySelectorAll('.flex, .inline-flex').forEach(el => {
    const justifyContent = window.getComputedStyle(el).justifyContent;
    if (justifyContent === 'flex-start') {
      el.classList.add('rtl-justify-end');
    } else if (justifyContent === 'flex-end') {
      el.classList.add('rtl-justify-start');
    }
  });
  
  // Apply Arabic fonts to text elements
  document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, button, a, li, label, input, textarea').forEach(el => {
    el.classList.add('rtl-text');
  });
};

/**
 * Initializes all Arabic optimizations
 * Call this function once when loading Arabic pages
 */
export const initArabicOptimizations = (): void => {
  if (typeof window !== 'undefined') {
    // Preload Arabic fonts
    prefetchArabicFonts();
    
    // Preload critical Arabic images
    preloadArabicCriticalImages([
      '/images/hero-ar.jpg',
      '/images/logo-ar.svg',
      '/images/icons/rtl-menu.svg'
    ]);
    
    // Add RTL-specific CSS variables to the document
    const rtlVars = getRTLOptimizationCSSVars();
    const rootElement = document.documentElement;
    
    Object.entries(rtlVars).forEach(([key, value]) => {
      rootElement.style.setProperty(key, value);
    });
    
    // Add RTL class to body for global styling
    document.body.classList.add('rtl-optimized');
    
    // Apply RTL transformations to DOM elements
    applyRTLTransformations();
    
    // Add event listener to reapply transformations on dynamic content changes
    const observer = new MutationObserver(() => {
      applyRTLTransformations();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Reapply transformations after page loads completely
    window.addEventListener('load', () => {
      applyRTLTransformations();
    });
  }
}; 