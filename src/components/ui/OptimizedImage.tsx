"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { 
  generateBlurPlaceholder, 
  getLoadingStrategy,
  customImageLoader
} from '@/lib/utils/imageOptimization';

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
  defaultAlt?: string;
  isCritical?: boolean;
  blurColor?: string;
  locale?: string;
}

const defaultFallbackImage = '/images/default-placeholder.jpg';

/**
 * OptimizedImage component that handles image loading errors gracefully
 * by providing fallback images when the main image fails to load.
 * Enhanced with performance optimizations like blur placeholders and
 * priority loading for critical images.
 */
export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = defaultFallbackImage,
  defaultAlt = 'Image',
  isCritical = false,
  blurColor,
  priority,
  loading,
  placeholder,
  blurDataURL,
  locale,
  ...rest
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgAlt, setImgAlt] = useState(alt || defaultAlt);
  const [hasError, setHasError] = useState(false);
  const [errorRetryCount, setErrorRetryCount] = useState(0);

  // Update imgSrc if src prop changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setErrorRetryCount(0);
  }, [src]);

  // Handle image loading errors
  const handleError = () => {
    if (errorRetryCount >= 2) {
      // After 2 retries, use fallback image
      console.warn(`Image failed to load after retries: ${imgSrc}`);
      setImgSrc(fallbackSrc);
      if (!alt) {
        setImgAlt('Image not available');
      }
      setHasError(true);
      return;
    }
    
    console.warn(`Image failed to load: ${imgSrc}, retry #${errorRetryCount + 1}`);
    
    // Try different approaches depending on retry count
    if (errorRetryCount === 0) {
      // First retry: Try without initial slash
      if (typeof imgSrc === 'string' && imgSrc.startsWith('/') && imgSrc !== fallbackSrc) {
        const newSrc = imgSrc.substring(1);
        console.log(`Trying alternative image path without leading slash: ${newSrc}`);
        setImgSrc(newSrc);
      } else {
        // If not a path starting with slash, try with unoptimized
        console.log(`Trying with unoptimized image loading`);
        setImgSrc(`${imgSrc}?unoptimized=true`);
      }
    } else if (errorRetryCount === 1) {
      // Second retry: Try with direct URL path for Vercel deployment
      const basePath = 'https://uneom-com.vercel.app';
      if (typeof imgSrc === 'string' && !imgSrc.startsWith('http')) {
        const fullPath = imgSrc.startsWith('/') 
          ? `${basePath}${imgSrc}` 
          : `${basePath}/${imgSrc}`;
        console.log(`Trying with full path: ${fullPath}`);
        setImgSrc(fullPath);
      } else {
        // If already a full URL or other cases, go to fallback
        setImgSrc(fallbackSrc);
        setHasError(true);
      }
    }
    
    setErrorRetryCount(prev => prev + 1);
  };

  // Determine loading strategy based on whether the image is critical
  const loadingStrategy = loading || getLoadingStrategy(priority || isCritical);
  
  // Generate blur placeholder if not provided
  const generatedBlurDataURL = blurDataURL || 
    (placeholder === 'blur' ? generateBlurPlaceholder(blurColor) : undefined);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={imgAlt}
      onError={handleError}
      loading={loadingStrategy}
      placeholder={placeholder || (generatedBlurDataURL ? 'blur' : undefined)}
      blurDataURL={generatedBlurDataURL}
      className={`${rest.className || ''} ${hasError ? 'opacity-80' : ''}`}
      loader={(params) => {
        // @ts-ignore - locale is added in our custom loader but not in the original type
        return customImageLoader({ ...params, locale });
      }}
      unoptimized={true}
    />
  );
} 