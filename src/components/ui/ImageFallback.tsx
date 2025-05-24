"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

/**
 * A client component that handles image loading errors gracefully
 * Enhanced to avoid hydration issues and provide better fallbacks
 */
const ImageFallback = ({
  src,
  alt,
  fallbackSrc = '/images/default-placeholder.jpg',
  ...props
}: ImageFallbackProps) => {
  // Use null initial state to avoid hydration mismatch
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);
  
  // Set the source after component mounts to avoid hydration issues
  useEffect(() => {
    setImgSrc(src as string);
    
    // Preload the fallback image
    const preloadFallback = new Image();
    preloadFallback.src = fallbackSrc as string;
  }, [src, fallbackSrc]);

  const handleError = () => {
    setError(true);
    setImgSrc(fallbackSrc as string);
  };

  // If we're still server-side or hydrating, use the original src
  if (imgSrc === null) {
    return (
      <Image
        {...props}
        src={src}
        alt={alt}
        className={`${props.className || ''}`}
      />
    );
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`${props.className || ''} ${error ? 'opacity-90' : ''}`}
    />
  );
};

export default ImageFallback; 