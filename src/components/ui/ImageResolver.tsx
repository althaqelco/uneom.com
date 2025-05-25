"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageResolverProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  locale?: string;
  basePath?: string;
}

/**
 * ImageResolver - A component that handles image path resolution and fallbacks
 * 
 * Features:
 * - Resolves paths for different locales (adds locale prefix if needed)
 * - Provides fallbacks for missing images
 * - Handles errors gracefully
 * - Maintains Next.js Image optimization benefits
 */
const ImageResolver: React.FC<ImageResolverProps> = ({
  src,
  fallbackSrc = '/images/icons/premium-quality.svg',
  locale = 'en',
  basePath = '/images',
  alt,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [error, setError] = useState<boolean>(false);

  // Process image path when component mounts or src/locale changes
  useEffect(() => {
    // Reset error state when src changes
    setError(false);
    
    // If src is already a complete URL, use it directly
    if (src.startsWith('http') || src.startsWith('data:')) {
      setImageSrc(src);
      return;
    }
    
    // If src already has a leading slash, remove the basePath prefix
    const cleanSrc = src.startsWith('/') ? src : `${basePath}/${src}`;
    
    // Check if we should add locale prefix (avoid duplicating)
    const shouldAddLocalePrefix = locale === 'ar' && 
      !cleanSrc.includes('/ar-') && 
      !cleanSrc.includes('/ar/');
      
    // Build the full path with locale prefix if needed
    let fullPath = cleanSrc;
    
    if (shouldAddLocalePrefix) {
      // Insert 'ar-' before filename
      const lastSlashIndex = cleanSrc.lastIndexOf('/');
      if (lastSlashIndex !== -1) {
        const directory = cleanSrc.substring(0, lastSlashIndex + 1);
        const filename = cleanSrc.substring(lastSlashIndex + 1);
        fullPath = `${directory}ar-${filename}`;
      }
    }
    
    setImageSrc(fullPath);
  }, [src, locale, basePath]);

  // Handle image load errors
  const handleError = () => {
    if (!error) {
      setError(true);
      setImageSrc(fallbackSrc);
      console.warn(`Image failed to load: ${imageSrc}, using fallback`);
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={alt || 'Image'}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageResolver; 