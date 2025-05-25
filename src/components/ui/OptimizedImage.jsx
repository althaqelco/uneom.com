'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * OptimizedImage component with built-in fallback
 * 
 * This component extends Next.js Image with error handling that
 * automatically switches to a fallback image if the original source fails to load.
 * 
 * @param src - Primary image source
 * @param fallbackSrc - Fallback image to use if primary fails
 * @param alt - Alt text for accessibility
 * @param props - All other Image props
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/defaults/default-placeholder.jpg', 
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  
  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };
  
  return (
    <Image
      src={imgSrc}
      alt={alt || "UNEOM image"}
      onError={handleError}
      {...props}
    />
  );
} 