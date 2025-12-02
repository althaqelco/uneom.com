/**
 * OptimizedImage Component - AI-Ready Image Optimization 2025/2026
 * 
 * This component provides:
 * - Responsive images for all devices (mobile, tablet, desktop)
 * - WebP/AVIF format support with fallbacks
 * - Lazy loading with blur placeholder
 * - AI-friendly alt text generation
 * - Schema.org ImageObject markup
 * - Accessibility enhancements
 * - Core Web Vitals optimization (LCP, CLS)
 */

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import Script from 'next/script';

interface OptimizedImageProps {
  src: string;
  alt: string;
  altAr?: string; // Arabic alt text
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  
  // Responsive sizes
  sizes?: string;
  mobileSrc?: string;
  tabletSrc?: string;
  
  // AI & SEO
  caption?: string;
  captionAr?: string;
  credit?: string;
  keywords?: string[];
  
  // Schema.org
  schemaData?: {
    name?: string;
    description?: string;
    contentUrl?: string;
    license?: string;
    acquireLicensePage?: string;
    creator?: string;
  };
  
  // Display options
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  aspectRatio?: string;
  
  // Effects
  blur?: boolean;
  blurDataURL?: string;
  
  // Locale
  locale?: 'en' | 'ar';
  
  // Callbacks
  onLoad?: () => void;
  onError?: () => void;
}

// Image optimization utilities
const getOptimizedSrc = (src: string): string => {
  if (src.startsWith('http')) return src;
  if (!src.startsWith('/')) return `/${src}`;
  return src;
};

const generateBlurDataURL = (width: number = 10, height: number = 10): string => {
  // Generate a simple blur placeholder
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="20"/>
      </filter>
      <rect width="100%" height="100%" fill="#e5e7eb" filter="url(#b)"/>
    </svg>`
  ).toString('base64')}`;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  altAr,
  width,
  height,
  priority = false,
  className = '',
  containerClassName = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  mobileSrc,
  tabletSrc,
  caption,
  captionAr,
  credit,
  keywords = [],
  schemaData,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  aspectRatio,
  blur = true,
  blurDataURL,
  locale = 'en',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(getOptimizedSrc(src));
  const imgRef = useRef<HTMLDivElement>(null);
  const isArabic = locale === 'ar';

  // Handle responsive image source
  useEffect(() => {
    const updateSrc = () => {
      const width = window.innerWidth;
      if (width < 640 && mobileSrc) {
        setCurrentSrc(getOptimizedSrc(mobileSrc));
      } else if (width < 1024 && tabletSrc) {
        setCurrentSrc(getOptimizedSrc(tabletSrc));
      } else {
        setCurrentSrc(getOptimizedSrc(src));
      }
    };

    updateSrc();
    window.addEventListener('resize', updateSrc);
    return () => window.removeEventListener('resize', updateSrc);
  }, [src, mobileSrc, tabletSrc]);

  // Generate appropriate alt text
  const effectiveAlt = isArabic && altAr ? altAr : alt;
  const effectiveCaption = isArabic && captionAr ? captionAr : caption;

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    // Fallback to placeholder
    setCurrentSrc('/images/default-placeholder.jpg');
    onError?.();
  };

  // Generate Schema.org ImageObject
  const imageSchema = {
    '@type': 'ImageObject',
    '@id': `https://uneom.com${currentSrc}#image`,
    url: `https://uneom.com${currentSrc}`,
    contentUrl: schemaData?.contentUrl || `https://uneom.com${currentSrc}`,
    name: schemaData?.name || effectiveAlt,
    description: schemaData?.description || effectiveCaption || effectiveAlt,
    caption: effectiveCaption,
    width: width,
    height: height,
    inLanguage: isArabic ? 'ar' : 'en',
    ...(credit && { creditText: credit }),
    ...(schemaData?.license && { license: schemaData.license }),
    ...(schemaData?.creator && {
      creator: {
        '@type': 'Organization',
        name: schemaData.creator
      }
    }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') })
  };

  // Blur placeholder
  const placeholder = blur ? 'blur' : 'empty';
  const effectiveBlurDataURL = blurDataURL || generateBlurDataURL(width, height);

  // Container styles
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio && { aspectRatio })
  };

  // Render error fallback
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${containerClassName}`}
        style={containerStyle}
      >
        <span className="text-gray-500 text-sm">
          {isArabic ? 'الصورة غير متوفرة' : 'Image unavailable'}
        </span>
      </div>
    );
  }

  return (
    <figure 
      ref={imgRef}
      className={`relative ${containerClassName}`}
      style={containerStyle}
      itemScope
      itemType="https://schema.org/ImageObject"
    >
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />

      {/* Next.js Optimized Image */}
      {fill ? (
        <Image
          src={currentSrc}
          alt={effectiveAlt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={effectiveBlurDataURL}
          className={`object-${objectFit} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={{ objectPosition }}
          onLoad={handleLoad}
          onError={handleError}
          itemProp="contentUrl"
        />
      ) : (
        <Image
          src={currentSrc}
          alt={effectiveAlt}
          width={width || 800}
          height={height || 600}
          sizes={sizes}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={effectiveBlurDataURL}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          style={{ objectFit, objectPosition }}
          onLoad={handleLoad}
          onError={handleError}
          itemProp="contentUrl"
        />
      )}

      {/* Hidden meta for SEO */}
      <meta itemProp="name" content={schemaData?.name || effectiveAlt} />
      <meta itemProp="description" content={schemaData?.description || effectiveCaption || effectiveAlt} />

      {/* Caption */}
      {effectiveCaption && (
        <figcaption 
          className={`mt-2 text-sm text-gray-600 ${isArabic ? 'text-right' : 'text-left'}`}
          itemProp="caption"
        >
          {effectiveCaption}
          {credit && (
            <span className="text-gray-400 ml-2" itemProp="creditText">
              © {credit}
            </span>
          )}
        </figcaption>
      )}

      {/* Loading skeleton */}
      {!isLoaded && blur && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </figure>
  );
};

export default OptimizedImage;

// Export utility functions
export { getOptimizedSrc, generateBlurDataURL };

// Image Gallery Component for multiple images
interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    altAr?: string;
    caption?: string;
    captionAr?: string;
  }>;
  locale?: 'en' | 'ar';
  columns?: 2 | 3 | 4;
  gap?: number;
  aspectRatio?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  locale = 'en',
  columns = 3,
  gap = 4,
  aspectRatio = '4/3'
}) => {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div 
      className={`grid ${gridCols[columns]} gap-${gap}`}
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      {images.map((image, index) => (
        <OptimizedImage
          key={index}
          src={image.src}
          alt={image.alt}
          altAr={image.altAr}
          caption={image.caption}
          captionAr={image.captionAr}
          locale={locale}
          aspectRatio={aspectRatio}
          fill
          containerClassName="relative rounded-lg overflow-hidden"
        />
      ))}
    </div>
  );
};

// Hero Image Component
interface HeroImageProps {
  src: string;
  alt: string;
  altAr?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  locale?: 'en' | 'ar';
  height?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  altAr,
  overlay = true,
  overlayOpacity = 0.4,
  children,
  locale = 'en',
  height = 'min-h-[60vh]'
}) => {
  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      <OptimizedImage
        src={src}
        alt={alt}
        altAr={altAr}
        fill
        priority
        objectFit="cover"
        locale={locale}
        containerClassName="absolute inset-0"
      />
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}
      
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};
