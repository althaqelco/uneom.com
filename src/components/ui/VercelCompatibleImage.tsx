"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface VercelCompatibleImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
}

const VercelCompatibleImage: React.FC<VercelCompatibleImageProps> = ({
  src,
  fallbackSrc = '/images/hero/uniform-hero-2.jpg',
  alt,
  className,
  containerClassName,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [useRegularImg, setUseRegularImg] = useState<boolean>(false);

  // Check if we're on Vercel
  const isVercel = typeof window !== 'undefined' && 
    (window.location.hostname.includes('vercel.app') || 
     process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined);

  // Normalize the image path for Vercel
  const normalizeImagePath = (path: string): string => {
    // If it's already an absolute URL, return it as is
    if (path.startsWith('http') || path.startsWith('//')) {
      return path;
    }

    // For Vercel, ensure paths start with a slash
    if (isVercel && !path.startsWith('/')) {
      return '/' + path;
    }

    // For local development, handle paths appropriately
    if (!isVercel && path.startsWith('/')) {
      // Remove leading slash for local development if needed
      return path;
    }

    return path;
  };

  // Handle image loading error
  const handleError = () => {
    if (!error) {
      // First try the fallback
      if (imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc);
      } else {
        // If fallback also fails, use regular img tag
        setUseRegularImg(true);
      }
      setError(true);
    }
  };

  // Handle successful image load
  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  // Reset state when src changes
  useEffect(() => {
    const normalizedPath = normalizeImagePath(src);
    setImgSrc(normalizedPath);
    setLoading(true);
    setError(false);
    setUseRegularImg(false);
  }, [src]);

  return (
    <div className={cn('relative', containerClassName)}>
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      
      {useRegularImg ? (
        <img
          src={imgSrc}
          alt={alt as string}
          className={cn('w-full h-auto', className)}
          onLoad={handleLoad}
          onError={handleError}
          {...props as any}
        />
      ) : (
        <Image
          src={imgSrc}
          alt={alt as string}
          className={cn('transition-opacity', className, {
            'opacity-0': loading,
            'opacity-100': !loading})}
          onLoadingComplete={handleLoad}
          onError={handleError}
          unoptimized={Boolean(isVercel)} // Disable Next.js image optimization on Vercel
          {...props}
        />
      )}
    </div>
  );
};

export default VercelCompatibleImage; 