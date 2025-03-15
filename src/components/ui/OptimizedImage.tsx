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
  const [isProduction, setIsProduction] = useState<boolean>(false);

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
      
      // Check if we're in production
      const isProd = process.env.NODE_ENV === 'production';
      setIsProduction(isProd);
      
      // Log environment info
      console.log(`OptimizedImage: ${typeof src === 'string' ? src : 'unknown'} - Vercel: ${isVercelEnv}, Production: ${isProd}`);
      
      // Add vercel-deployment class to body if in Vercel environment
      if (isVercelEnv) {
        document.body.classList.add('vercel-deployment');
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
        // Try with absolute URL
        if (typeof window !== 'undefined' && typeof imgSrc === 'string' && !imgSrc.startsWith('http') && !imgSrc.startsWith('data:')) {
          const baseUrl = window.location.origin;
          const fixedSrc = imgSrc.startsWith('/') 
            ? `${baseUrl}${imgSrc}` 
            : `${baseUrl}/${imgSrc}`;
          console.log(`Trying with absolute URL: ${fixedSrc}`);
          setImgSrc(fixedSrc);
        }
      }
    } else if (errorRetryCount === 1) {
      // Second retry: Try with fallback
      console.log(`Using fallback image: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
    } else {
      // Third retry: Use DirectImage component
      setUseRegularImgTag(true);
    }
    
    setErrorRetryCount(prev => prev + 1);
  };

  // Generate blur placeholder if needed
  const generatedBlurDataURL = !blurDataURL && blurColor ? generateBlurPlaceholder(blurColor) : blurDataURL;
  
  // Determine loading strategy
  const loadingStrategy = getLoadingStrategy(isCritical, priority, loading as any);
  
  // Extract remaining props
  const { width, height, style, className, objectFit, ...restProps } = rest as any;
  
  // If using regular img tag due to errors
  if (useRegularImgTag) {
    const styleProps: React.CSSProperties = {
      maxWidth: '100%',
      height: height ? `${height}px` : 'auto',
      width: width ? `${width}px` : '100%',
      objectFit: objectFit as any || 'cover',
    };
    
    return (
      <img
        src={typeof imgSrc === 'string' ? imgSrc : ''}
        alt={imgAlt}
        className={`${className || ''} ${hasError ? 'error' : ''}`}
        style={styleProps}
        loading={loadingStrategy === 'eager' ? 'eager' : 'lazy'}
        onError={handleError}
        {...restProps}
      />
    );
  }

  // Always use DirectImage in production or on Vercel
  if (isClient && (isVercel || isProduction)) {
    return (
      <DirectImage
        src={typeof imgSrc === 'string' ? imgSrc : ''}
        alt={imgAlt}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        className={`${className || ''} ${hasError ? 'error' : ''}`}
        priority={priority}
        style={style}
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
      className={`${className || ''} ${hasError ? 'error' : ''}`}
      loader={(params) => {
        // @ts-ignore - locale is added in our custom loader but not in the original type
        return customImageLoader({ ...params, locale, isVercel });
      }}
    />
  );
} 