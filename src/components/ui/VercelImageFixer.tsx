"use client";

import { useEffect } from 'react';

/**
 * VercelImageFixer - A component that fixes image loading issues specific to Vercel deployments
 * 
 * This component addresses Vercel-specific image loading issues:
 * 1. Template string expressions being rendered literally
 * 2. Path resolution differences between local and Vercel environments
 * 3. Undefined values in template literals
 * 
 * Usage: Add this component to your layout or pages that have image loading issues in Vercel
 */
const VercelImageFixer: React.FC = () => {
  useEffect(() => {
    // Only run this in production or on Vercel
    const isVercel = 
      window.location.hostname.includes('vercel.app') || 
      process.env.NEXT_PUBLIC_VERCEL_ENV;
      
    if (!isVercel && process.env.NODE_ENV !== 'production') {
      return;
    }
    
    // Function to fix broken image sources
    const fixBrokenImages = () => {
      // Find all image elements
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        const src = img.getAttribute('src');
        
        if (!src) return;
        
        // Fix template string literals that were rendered incorrectly
        if (src.includes('${') && src.includes('}')) {
          console.warn('Found unprocessed template literal in image:', src);
          img.setAttribute('data-original-src', src);
          
          // Try to extract the base path and set a fallback
          const pathPrefix = src.split('${')[0];
          const fallbackSrc = `${pathPrefix}default-placeholder.jpg`;
          img.setAttribute('src', fallbackSrc);
        }
        
        // Fix undefined values in paths
        if (src.includes('undefined')) {
          console.warn('Found undefined in image path:', src);
          img.setAttribute('data-original-src', src);
          
          // Replace undefined with empty string
          const fixedSrc = src.replace(/undefined/g, '');
          img.setAttribute('src', fixedSrc);
        }
      });
    };
    
    // Run immediately and also set up a MutationObserver
    fixBrokenImages();
    
    // Use MutationObserver to detect when new images are added to the DOM
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          fixBrokenImages();
        }
      });
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // This is a utility component that doesn't render anything
  return null;
};

export default VercelImageFixer; 