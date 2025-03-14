/**
 * Image optimization utilities for UNEOM website
 * Provides functions for optimizing image loading and performance
 */

import type { ImageLoaderProps } from 'next/image';

/**
 * Custom image loader that can be used with next/image
 * This can be extended to use a CDN or image optimization service
 */
export const customImageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  // If using a CDN, you can modify this to use the CDN URL
  // For example: return `https://cdn.uneom.com/images${src}?w=${width}&q=${quality || 75}`;
  
  // Check if src is already a full URL, return it as is to prevent double processing
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Handle relative URLs
  return `${src}?w=${width}&q=${quality || 75}`;
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