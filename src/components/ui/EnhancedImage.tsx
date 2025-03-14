"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface EnhancedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
  retryCount?: number;
  retryDelay?: number;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
}

const DEFAULT_FALLBACK = '/images/default-placeholder.jpg';
const MAX_RETRY_COUNT = 3;
const RETRY_DELAY = 1000;

const EnhancedImage: React.FC<EnhancedImageProps> = ({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt,
  className,
  containerClassName,
  onLoad,
  onError,
  retryCount = MAX_RETRY_COUNT,
  retryDelay = RETRY_DELAY,
  loadingComponent,
  errorComponent,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [retries, setRetries] = useState<number>(0);
  const [useFallback, setUseFallback] = useState<boolean>(false);
  const [useRegularImg, setUseRegularImg] = useState<boolean>(false);

  // Function to try different image paths
  const tryAlternativePaths = () => {
    const isAbsoluteUrl = src.startsWith('http') || src.startsWith('//');
    
    // If it's already an absolute URL, try adding or removing https:
    if (isAbsoluteUrl) {
      if (src.startsWith('https://')) {
        return src.replace('https://', 'http://');
      } else if (src.startsWith('http://')) {
        return src.replace('http://', 'https://');
      } else if (src.startsWith('//')) {
        return 'https:' + src;
      }
    }
    
    // If it's a relative path, try different variations
    if (src.startsWith('/')) {
      // Try without leading slash
      return src.substring(1);
    } else {
      // Try with leading slash
      return '/' + src;
    }
  };

  // Handle image loading error
  const handleError = () => {
    if (retries < retryCount) {
      // Try again after delay
      setTimeout(() => {
        setRetries(retries + 1);
        
        // Try alternative path on first retry
        if (retries === 0) {
          const alternativePath = tryAlternativePaths();
          setImgSrc(alternativePath);
        } 
        // Try fallback on second retry
        else if (retries === 1) {
          setUseFallback(true);
          setImgSrc(fallbackSrc);
        }
        // Use regular img tag on third retry
        else if (retries === 2) {
          setUseRegularImg(true);
        }
        
        setLoading(true);
      }, retryDelay);
    } else {
      setError(true);
      setLoading(false);
      if (onError) onError();
    }
  };

  // Handle successful image load
  const handleLoad = () => {
    setLoading(false);
    setError(false);
    if (onLoad) onLoad();
  };

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
    setError(false);
    setRetries(0);
    setUseFallback(false);
    setUseRegularImg(false);
  }, [src]);

  // Preload the fallback image
  useEffect(() => {
    const img = new window.Image();
    img.src = fallbackSrc;
  }, [fallbackSrc]);

  return (
    <div className={cn('relative', containerClassName)}>
      {loading && !error && loadingComponent ? (
        loadingComponent
      ) : loading && !error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
      
      {error && errorComponent ? (
        errorComponent
      ) : error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Failed to load image</span>
        </div>
      ) : null}
      
      {useRegularImg ? (
        <img
          src={imgSrc}
          alt={alt as string}
          className={cn('w-full h-auto', className)}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      ) : (
        <Image
          src={imgSrc}
          alt={alt as string}
          className={cn('transition-opacity', className, {
            'opacity-0': loading || error,
            'opacity-100': !loading && !error,
          })}
          onLoadingComplete={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default EnhancedImage; 