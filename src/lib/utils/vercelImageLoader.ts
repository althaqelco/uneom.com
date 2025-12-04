/**
 * موجه تحميل الصور لـ Vercel
 * 
 * هذا الملف يتعامل مع تحميل الصور في بيئة Vercel، ويوفر حلولًا للمشاكل الشائعة
 * مثل عدم ظهور الصور أو بطء التحميل
 */

import { ImageLoaderProps } from 'next/image';

// واجهة لتكوين محمل الصور
export interface VercelImageLoaderConfig {
  quality?: number;
  width?: number;
  fallbackImage?: string;
  timeout?: number;
}

// الصورة الافتراضية في حالة الفشل
const DEFAULT_FALLBACK_IMAGE = '/images/hero/uniform-hero-2.jpg';

interface VercelImageLoaderOptions {
  quality?: number;
  width?: number;
  isVercel?: boolean;
}

/**
 * Custom image loader optimized for Vercel deployment
 * Handles different image paths and formats for Vercel environment
 */
export const vercelImageLoader = ({
  src,
  width,
  quality = 75,
  isVercel = false,
}: ImageLoaderProps & VercelImageLoaderOptions): string => {
  // Check if we're on Vercel
  const isVercelEnv = isVercel || 
    (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) ||
    process.env.NEXT_PUBLIC_VERCEL_ENV;

  // If it's an external URL, return it as is
  if (src.startsWith('http') || src.startsWith('//')) {
    return src;
  }

  // For Vercel environment
  if (isVercelEnv) {
    // Ensure the path starts with a slash
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    
    // Return the path as is for Vercel (no optimization)
    return normalizedSrc;
  }

  // For local development or other environments
  // You can implement custom image optimization logic here if needed
  return src;
};

/**
 * Attempts to fix broken image paths by trying different variations
 */
export const fixImagePath = (src: string): string[] => {
  const variations: string[] = [src];
  
  // If it's an absolute URL
  if (src.startsWith('http')) {
    // Try both http and https
    if (src.startsWith('https://')) {
      variations.push(src.replace('https://', 'http://'));
    } else if (src.startsWith('http://')) {
      variations.push(src.replace('http://', 'https://'));
    }
  } 
  // If it's a protocol-relative URL
  else if (src.startsWith('//')) {
    variations.push(`https:${src}`);
    variations.push(`http:${src}`);
  }
  // If it's a relative path
  else {
    // With and without leading slash
    if (src.startsWith('/')) {
      variations.push(src.substring(1));
    } else {
      variations.push(`/${src}`);
    }
    
    // Try with _next/static prefix for Vercel
    if (!src.includes('_next/static')) {
      variations.push(`/_next/static/${src}`);
    }
  }
  
  return variations;
};

/**
 * Validates if an image exists by attempting to load it
 */
export const validateImagePath = async (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    
    img.src = src;
    
    // If the image is already cached, the onload event might not fire
    if (img.complete) {
      resolve(true);
    }
  });
};

/**
 * Finds the first working image path from a list of variations
 */
export const findWorkingImagePath = async (src: string): Promise<string> => {
  const variations = fixImagePath(src);
  
  for (const path of variations) {
    const isValid = await validateImagePath(path);
    if (isValid) {
      return path;
    }
  }
  
  // If no variations work, return the original
  return src;
};

/**
 * Loads an image with a timeout and fallback
 */
export const loadImageWithFallback = async (
  src: string,
  config: VercelImageLoaderConfig = {}
): Promise<string> => {
  return new Promise((resolve) => {
    const timeout = config.timeout || 5000;
    let timeoutId: NodeJS.Timeout;
    
    // Try to find a working path
    findWorkingImagePath(src)
      .then((workingPath) => {
        clearTimeout(timeoutId);
        resolve(workingPath);
      })
      .catch(() => {
        resolve(config.fallbackImage || DEFAULT_FALLBACK_IMAGE);
      });
    
    // Set a timeout to resolve with fallback if it takes too long
    timeoutId = setTimeout(() => {
      resolve(config.fallbackImage || DEFAULT_FALLBACK_IMAGE);
    }, timeout);
  });
}; 