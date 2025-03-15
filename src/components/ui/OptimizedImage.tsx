"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { 
  generateBlurPlaceholder, 
  getLoadingStrategy,
  customImageLoader
} from '@/lib/utils/imageOptimization';
import DirectImage from '@/components/DirectImage';

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
  const [useRegularImgTag, setUseRegularImgTag] = useState(false);
  const [isVercel, setIsVercel] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Update imgSrc if src prop changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setErrorRetryCount(0);
    setUseRegularImgTag(false);
  }, [src]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      
      // Check if we're in Vercel environment
      const hostname = window.location.hostname;
      const isVercelEnv = 
        hostname.includes('vercel.app') || 
        hostname === 'uneom.com' || 
        hostname.endsWith('.uneom.com') ||
        process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined;
      
      setIsVercel(isVercelEnv);
      
      // Force using DirectImage in production
      if (isVercelEnv || process.env.NODE_ENV === 'production') {
        console.log(`Using DirectImage for ${typeof src === 'string' ? src : 'unknown'} (Vercel: ${isVercelEnv})`);
      }
    }
  }, []);

  // Handle image loading errors
  const handleError = () => {
    if (errorRetryCount >= 3) {
      // After 3 retries, use fallback image with a regular <img> tag
      console.warn(`Image failed to load after maximum retries: ${imgSrc}`);
      setImgSrc(fallbackSrc);
      if (!alt) {
        setImgAlt('Image not available');
      }
      setHasError(true);
      setUseRegularImgTag(true);
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
        const unoptimizedSrc = typeof imgSrc === 'string' && !imgSrc.includes('?') 
          ? `${imgSrc}?unoptimized=true` 
          : imgSrc;
        setImgSrc(unoptimizedSrc);
      }
    } else if (errorRetryCount === 1) {
      // Second retry: Try with public URL
      if (isVercel) {
        const basePath = window.location.origin;
        if (typeof imgSrc === 'string' && !imgSrc.startsWith('http')) {
          const fullPath = imgSrc.startsWith('/') 
            ? `${basePath}${imgSrc}` 
            : `${basePath}/${imgSrc}`;
          console.log(`Trying with full URL path: ${fullPath}`);
          setImgSrc(fullPath);
        } else {
          // Try with original path again but with different query param
          setImgSrc(`${src}?v=${new Date().getTime()}`);
        }
      } else {
        // If not on Vercel, try with cache busting
        if (typeof imgSrc === 'string') {
          setImgSrc(`${imgSrc}?nocache=${new Date().getTime()}`);
        }
      }
    } else if (errorRetryCount === 2) {
      // Third retry: Fallback to direct image tag
      console.log(`Final retry: switching to regular img tag`);
      setUseRegularImgTag(true);
    }
    
    setErrorRetryCount(prev => prev + 1);
  };

  // Determine loading strategy based on whether the image is critical
  const loadingStrategy = loading || getLoadingStrategy(priority || isCritical);
  
  // Generate blur placeholder if not provided
  const generatedBlurDataURL = blurDataURL || 
    (placeholder === 'blur' ? generateBlurPlaceholder(blurColor) : undefined);

  // Use regular img tag as last resort
  if (useRegularImgTag) {
    const { width, height, layout, objectFit, ...restProps } = rest as any;
    
    const styleProps: React.CSSProperties = {
      maxWidth: '100%',
      height: height ? `${height}px` : 'auto',
      width: width ? `${width}px` : '100%',
      objectFit: objectFit || 'cover',
    };
    
    return (
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`${rest.className || ''} ${hasError ? 'opacity-80' : ''}`}
        style={styleProps}
        loading={loadingStrategy === 'eager' ? 'eager' : 'lazy'}
        onError={handleError}
        {...restProps}
      />
    );
  }

  // Always use DirectImage in production or on Vercel
  if (isClient && (isVercel || process.env.NODE_ENV === 'production')) {
    return (
      <DirectImage
        src={typeof imgSrc === 'string' ? imgSrc : ''}
        alt={imgAlt}
        width={typeof rest.width === 'number' ? rest.width : undefined}
        height={typeof rest.height === 'number' ? rest.height : undefined}
        className={`${rest.className || ''} ${hasError ? 'opacity-80' : ''}`}
        priority={priority}
        style={rest.style}
        onError={handleError}
      />
    );
  }

  // Use Next.js Image component for development environment
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
        return customImageLoader({ ...params, locale, isVercel });
      }}
    />
  );
} 