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
  ...rest
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgAlt, setImgAlt] = useState(alt || defaultAlt);
  const [hasError, setHasError] = useState(false);

  // Update imgSrc if src prop changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  // Handle image loading errors
  const handleError = () => {
    if (!hasError) {
      console.warn(`Image failed to load: ${imgSrc}`);
      
      // If the source starts with a slash (local image), try without the leading slash
      // This can help in some Next.js deployments where image paths get misinterpreted
      if (typeof imgSrc === 'string' && imgSrc.startsWith('/') && imgSrc !== fallbackSrc) {
        const newSrc = imgSrc.substring(1);
        console.log(`Trying alternative image path: ${newSrc}`);
        setImgSrc(newSrc);
      } else {
        // Fall back to the fallback image
        setImgSrc(fallbackSrc);
        if (!alt) {
          setImgAlt('Image not available');
        }
        setHasError(true);
      }
    }
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
      loader={customImageLoader}
      unoptimized={true}
    />
  );
} 