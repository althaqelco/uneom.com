'use client';

import React, { useEffect } from 'react';

/**
 * Component that preloads critical images to improve performance
 * This helps reduce layout shifts and improve LCP (Largest Contentful Paint)
 */
export default function ImagePreloader() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // List of critical images to preload
    const criticalImages = [
      '/images/defaults/default-placeholder.jpg',
      '/images/default-placeholder.svg',
    ];

    // Preload critical images
    criticalImages.forEach(imageSrc => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
    });

    // Create a global fallback image data URL
    const fallbackSvg = '<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="480" fill="#f0f0f0"/><text x="320" y="240" font-family="Arial" font-size="24" text-anchor="middle" fill="#888">Image not available</text></svg>';
    const fallbackDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(fallbackSvg)}`;
    
    // Add to window object for global access
    window.fallbackImageDataUrl = fallbackDataUrl;
  }, []);

  return null;
}

// Add fallbackImageDataUrl to Window interface
declare global {
  interface Window {
    fallbackImageDataUrl?: string;
  }
} 