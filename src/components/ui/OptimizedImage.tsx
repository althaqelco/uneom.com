/**
 * OptimizedImage Component
 * مكون صور محسن للأداء والتوافق
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - Responsive srcset generation
 * - WebP/AVIF format support
 * - Blur placeholder
 * - Schema.org ImageObject markup
 * - Alt text optimization for accessibility and SEO
 * - Mobile-first responsive sizes
 */

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  
  // SEO & Accessibility
  title?: string;
  caption?: string;
  credit?: string;
  
  // Schema.org
  includeSchema?: boolean;
  schemaType?: 'ImageObject' | 'Photograph' | 'Product';
  
  // Responsive
  sizes?: string;
  quality?: number;
  
  // Styling
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Effects
  hover?: 'zoom' | 'brighten' | 'darken' | 'grayscale' | 'none';
  
  // Loading
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  
  // Events
  onLoad?: () => void;
  onError?: () => void;
}

// Pre-defined responsive sizes for different use cases
const RESPONSIVE_SIZES = {
  hero: '100vw',
  fullWidth: '100vw',
  halfWidth: '(max-width: 768px) 100vw, 50vw',
  thirdWidth: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quarterWidth: '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw',
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px',
  thumbnail: '(max-width: 640px) 50vw, 200px',
  avatar: '100px',
  icon: '48px'
};

// Generate blur data URL for placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e2e8f0" offset="20%" />
      <stop stop-color="#f1f5f9" offset="50%" />
      <stop stop-color="#e2e8f0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e2e8f0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  title,
  caption,
  credit,
  includeSchema = false,
  schemaType = 'ImageObject',
  sizes = RESPONSIVE_SIZES.card,
  quality = 85,
  objectFit = 'cover',
  objectPosition = 'center',
  rounded = false,
  hover = 'none',
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load images 200px before they enter viewport
        threshold: 0.01
      }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => observer.disconnect();
  }, [priority, isInView]);
  
  // Generate rounded class
  const getRoundedClass = () => {
    if (!rounded) return '';
    if (rounded === true) return 'rounded-lg';
    return `rounded-${rounded}`;
  };
  
  // Generate hover effect class
  const getHoverClass = () => {
    switch (hover) {
      case 'zoom': return 'transition-transform duration-300 hover:scale-105';
      case 'brighten': return 'transition-filter duration-300 hover:brightness-110';
      case 'darken': return 'transition-filter duration-300 hover:brightness-90';
      case 'grayscale': return 'transition-filter duration-300 grayscale hover:grayscale-0';
      default: return '';
    }
  };
  
  // Generate placeholder
  const getPlaceholder = () => {
    if (blurDataURL) return blurDataURL;
    if (placeholder === 'blur' && width && height) {
      return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
    }
    return undefined;
  };
  
  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };
  
  // Handle image error
  const handleError = () => {
    setHasError(true);
    onError?.();
  };
  
  // Generate schema.org markup
  const generateImageSchema = () => {
    if (!includeSchema) return null;
    
    const imageUrl = src.startsWith('http') ? src : `https://uneom.com${src}`;
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      contentUrl: imageUrl,
      url: imageUrl,
      name: title || alt,
      description: alt,
      ...(caption && { caption }),
      ...(credit && { 
        author: { 
          '@type': 'Person', 
          name: credit 
        } 
      }),
      ...(width && height && {
        width: { '@type': 'QuantitativeValue', value: width },
        height: { '@type': 'QuantitativeValue', value: height }
      }),
      encodingFormat: src.endsWith('.webp') ? 'image/webp' : 
                      src.endsWith('.png') ? 'image/png' : 
                      src.endsWith('.svg') ? 'image/svg+xml' : 'image/jpeg'
    };
    
    return (
      <Script
        id={`image-schema-${src.replace(/[^a-zA-Z0-9]/g, '-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  };
  
  // Fallback image for errors
  const fallbackSrc = '/images/default-placeholder.jpg';
  
  // Container classes
  const containerClasses = [
    'relative overflow-hidden',
    getRoundedClass(),
    className
  ].filter(Boolean).join(' ');
  
  // Image classes
  const imageClasses = [
    getHoverClass(),
    `object-${objectFit}`,
    isLoaded ? 'opacity-100' : 'opacity-0',
    'transition-opacity duration-300'
  ].filter(Boolean).join(' ');

  return (
    <>
      <div 
        ref={imageRef} 
        className={containerClasses}
        style={fill ? undefined : { width, height }}
      >
        {isInView && (
          <Image
            src={hasError ? fallbackSrc : src}
            alt={alt}
            title={title || alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            priority={priority}
            quality={quality}
            sizes={sizes}
            className={imageClasses}
            style={{ objectPosition }}
            placeholder={placeholder}
            blurDataURL={getPlaceholder()}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        )}
        
        {/* Loading skeleton */}
        {!isLoaded && !hasError && (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
            aria-hidden="true"
          />
        )}
        
        {/* Caption */}
        {caption && isLoaded && (
          <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2 text-center">
            {caption}
            {credit && <span className="text-xs opacity-75"> — {credit}</span>}
          </figcaption>
        )}
      </div>
      
      {/* Schema.org markup */}
      {generateImageSchema()}
    </>
  );
};

// Named exports for convenience
export { RESPONSIVE_SIZES };
export default OptimizedImage;
