/**
 * OptimizedImage Component
 * 
 * This component enforces SEO best practices for images by:
 * 1. Requiring alt text for all images (except decorative ones)
 * 2. Supporting responsive image sizes
 * 3. Implementing lazy loading
 * 4. Providing proper image dimensions
 * 5. Ensuring best image format
 */

import React from 'react';
import Image from 'next/image';
import { useSafeLocale } from '@/lib/hooks/useSafeRouter';

// Define the component props
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  decorative?: boolean; // Explicitly mark images as decorative
  responsive?: boolean; // Whether to use responsive sizing
  sizes?: string; // Responsive size attribute
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  objectPosition?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string; // Fallback image if main image fails to load
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Get the appropriate alt text based on image purpose
 * For decorative images, we use an empty alt text
 */
const getAltText = (alt: string, decorative?: boolean, locale?: string): string => {
  if (decorative) {
    return ''; // Empty alt for decorative images
  }
  
  if (!alt || alt.trim() === '') {
    return locale === 'ar' ? 'صورة' : 'Image'; // Fallback alt text
  }
  
  return alt;
};

/**
 * OptimizedImage component
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  decorative = false,
  responsive = false,
  sizes = '100vw',
  objectFit = 'cover',
  objectPosition = 'center',
  quality = 85,
  loading = 'lazy',
  fallbackSrc = '/images/placeholder.jpg',
  onClick,
  onLoad,
  onError}) => {
  const { locale } = useSafeLocale();
  
  // State to track image loading errors
  const [imgSrc, setImgSrc] = React.useState(src);
  const [imgError, setImgError] = React.useState(false);
  
  // Handle image load error
  const handleError = () => {
    if (!imgError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setImgError(true);
    }
    
    if (onError) {
      onError();
    }
  };
  
  // Prepare the final alt text
  const finalAlt = getAltText(alt, decorative, locale);
  
  // For responsive images
  if (responsive) {
    return (
      <div className={`optimized-image ${className}`} onClick={onClick}>
        <Image
          src={imgSrc}
          alt={finalAlt}
          fill={true}
          sizes={sizes}
          priority={priority}
          quality={quality}
          loading={loading}
          style={{
            objectFit,
            objectPosition}}
          onError={handleError}
          onLoad={onLoad}
        />
      </div>
    );
  }
  
  // For images with fixed dimensions
  return (
    <div className={`optimized-image ${className}`} onClick={onClick}>
      <Image
        src={imgSrc}
        alt={finalAlt}
        width={width || 100}
        height={height || 100}
        priority={priority}
        quality={quality}
        loading={loading}
        style={{
          objectFit,
          objectPosition}}
        onError={handleError}
        onLoad={onLoad}
      />
    </div>
  );
};

export default OptimizedImage;
