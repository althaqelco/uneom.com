import { Locale } from '@/lib/i18n/config';
import type { ImageLoaderProps as NextImageLoaderProps } from 'next/image';

/**
 * Interface for our custom image loader props
 * Extends Next.js ImageLoaderProps
 */
export interface CustomImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
  locale?: Locale;
}

/**
 * Custom image loader function for Next.js Image component
 * This can be extended to use different image providers or CDNs
 * Currently it uses the default Next.js image optimization
 * 
 * @param src The source path to the image
 * @param width The desired width of the image
 * @param quality The quality of the image (1-100)
 * @returns The URL for the optimized image
 */
export default function imageLoader({ src, width, quality = 75, locale }: CustomImageLoaderProps): string {
  // Check if the image is an external URL
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }

  // If locale is provided, get localized image path
  if (locale && locale !== 'en') {
    src = getLocalizedImagePath(src, locale);
  }

  // Handle local images with Next.js image optimization
  return `${src}?w=${width || ''}&q=${quality}`;
}

/**
 * Helper function to generate responsive image sizes based on breakpoints
 * @param mobile Mobile size (default: 100vw)
 * @param tablet Tablet size (default: 50vw)
 * @param desktop Desktop size (default: 33vw)
 * @returns A sizes string for the Next.js Image component
 */
export function getResponsiveSizes(mobile = '100vw', tablet = '50vw', desktop = '33vw'): string {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
}

/**
 * Utility to get an appropriate fallback image when an image is not available
 * @param category The category of the image (product, blog, team, etc.)
 * @returns Path to an appropriate fallback image
 */
export function getFallbackImage(category: 'product' | 'blog' | 'team' | 'industry' | 'service' | 'general' = 'general'): string {
  const fallbacks = {
    product: '/images/defaults/default-product.jpg',
    blog: '/images/defaults/default-blog.jpg',
    team: '/images/defaults/default-team.jpg',
    industry: '/images/defaults/default-industry.jpg',
    service: '/images/defaults/default-service.jpg',
    general: '/images/defaults/default-placeholder.jpg',
  };

  return fallbacks[category];
}

/**
 * Get localized image path based on locale
 * Will check if a localized version exists and return that path or fall back to default
 * 
 * Format: image.jpg -> image-ar.jpg for Arabic
 * Alternative format: /path/to/image.jpg -> /path/to/image-ar.jpg
 */
export function getLocalizedImagePath(src: string, locale: Locale = 'en'): string {
  // Always return original path for English or if source is a full URL
  if (locale === 'en' || src.startsWith('http') || src.startsWith('https')) {
    return src;
  }
  
  const hasExtension = src.includes('.');
  
  // Handle case with extension (e.g., image.jpg)
  if (hasExtension) {
    const lastDotIndex = src.lastIndexOf('.');
    const fileName = src.substring(0, lastDotIndex);
    const extension = src.substring(lastDotIndex);
    
    // Check if the image already has a locale suffix
    if (fileName.endsWith(`-${locale}`)) {
      return src;
    }
    
    // Try localized version first, but fall back to original if not available
    // Note: In real world usage, we would do a file check here, but for the web,
    // we'll simply return the localized path and let the Image component handle fallbacks
    return `${fileName}-${locale}${extension}`;
  }
  
  // Handle case without extension (e.g., /path/to/image)
  return `${src}-${locale}`;
}

/**
 * Check if an image should be mirrored in RTL mode
 * This is useful for images that have directional content
 */
export function shouldMirrorImage(src: string): boolean {
  // Define patterns for images that should be mirrored in RTL mode
  const mirrorPatterns = [
    'arrow',
    'direction',
    'pointer',
    'swipe',
    'navigation',
  ];
  
  return mirrorPatterns.some(pattern => 
    src.toLowerCase().includes(pattern)
  );
}

/**
 * Get the appropriate image for industry categories
 * Useful for industry-specific pages to use the right imagery
 */
export function getIndustryImage(industry: string, imageType: 'hero' | 'card' | 'icon' = 'hero'): string {
  const basePath = `/images/industries/${industry}`;
  
  switch (imageType) {
    case 'hero':
      return `${basePath}/hero.jpg`;
    case 'card':
      return `${basePath}/card.jpg`;
    case 'icon':
      return `${basePath}/icon.svg`;
    default:
      return `${basePath}/default.jpg`;
  }
}

/**
 * Responsive image component helper
 * Returns the proper image size based on breakpoint
 */
export function getResponsiveImageSizes(): string {
  return '(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw';
}

/**
 * Image optimization utilities for UNEOM website
 * Provides functions for optimizing image loading and performance
 */

/**
 * Custom image loader that can be used with next/image
 * This can be extended to use a CDN or image optimization service
 */
export const customImageLoader = ({ src, width, quality, locale }: CustomImageLoaderProps): string => {
  // If it's an external URL, return as is
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }
  
  // Apply localization if needed
  let localizedSrc = src;
  if (locale && locale !== 'en') {
    localizedSrc = getLocalizedImagePath(src, locale);
  }
  
  // Add query parameters for Next.js image optimization
  return `${localizedSrc}?w=${width}&q=${quality || 75}`;
};

/**
 * Generates responsive image srcSet for different device sizes
 * @param src - Image source path
 * @param sizes - Array of sizes to generate
 * @returns - srcSet string for use in img tags
 */
export const generateSrcSet = (src: string, sizes: number[] = [640, 750, 828, 1080, 1200, 1920]): string => {
  return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ');
};

/**
 * Determines appropriate image size based on device type
 * @param isMobile - Whether the device is mobile
 * @param isTablet - Whether the device is tablet
 * @returns - Appropriate image width
 */
export const getResponsiveImageSize = (isMobile: boolean, isTablet: boolean): number => {
  if (isMobile) return 640;
  if (isTablet) return 1080;
  return 1920;
};

/**
 * Generates a blurred placeholder image for lazy loading
 * @param color - Base color for the placeholder
 * @returns - Data URL for a tiny blurred placeholder
 */
export const generateBlurPlaceholder = (color: string = '#f3f4f6'): string => {
  // This is a simple implementation - for production, consider using
  // a more sophisticated approach like LQIP (Low Quality Image Placeholders)
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='${color.replace('#', '%23')}'/%3E%3C/svg%3E`;
};

/**
 * Preloads critical images to improve LCP (Largest Contentful Paint)
 * @param imagePaths - Array of critical image paths to preload
 */
export const preloadCriticalImages = (imagePaths: string[]): void => {
  if (typeof document !== 'undefined') {
    imagePaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = path;
      document.head.appendChild(link);
    });
  }
};

/**
 * Determines if an image should be lazy loaded based on its importance
 * @param isCritical - Whether the image is critical for initial render
 * @returns - Loading strategy ('lazy' or 'eager')
 */
export const getLoadingStrategy = (isCritical: boolean): 'lazy' | 'eager' => {
  return isCritical ? 'eager' : 'lazy';
};

/**
 * Formats image dimensions to maintain aspect ratio
 * @param originalWidth - Original image width
 * @param originalHeight - Original image height
 * @param targetWidth - Desired width
 * @returns - Object with width and height maintaining aspect ratio
 */
export const maintainAspectRatio = (
  originalWidth: number,
  originalHeight: number,
  targetWidth: number
): { width: number; height: number } => {
  const aspectRatio = originalWidth / originalHeight;
  const height = Math.round(targetWidth / aspectRatio);
  
  return {
    width: targetWidth,
    height
  };
}; 