"use client";

import React, { useEffect, useState } from 'react';

// إضافة تعريف للخصائص الإضافية على كائن window
declare global {
  interface Window {
    fallbackImageDataUrl?: string;
    fixImagePaths?: () => void;
  }
}

/**
 * VercelImageFixer component
 * 
 * Automatically detects and fixes common image loading issues on Vercel deployments.
 * This component addresses specific issues with image paths and loading in Vercel environments.
 */
const VercelImageFixer: React.FC = () => {
  const [isVercel, setIsVercel] = useState<boolean>(false);
  const [fixedImages, setFixedImages] = useState<number>(0);
  const [totalImages, setTotalImages] = useState<number>(0);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Check if we're on Vercel
    const hostname = window.location.hostname;
    const isVercelEnv = hostname.includes('vercel.app') || 
                        process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined;
    
    setIsVercel(isVercelEnv);

    // Only run on Vercel
    if (!isVercelEnv) return;

    // Add class to body for CSS targeting
    document.body.classList.add('vercel-deployment');

    // Fix all images on the page
    const fixImages = () => {
      const images = document.querySelectorAll('img:not([data-vercel-fixed="true"])');
      let fixed = 0;
      
      setTotalImages(images.length);
      
      images.forEach((img) => {
        // Cast to HTMLImageElement to access image-specific properties
        const imgElement = img as HTMLImageElement;
        const src = imgElement.getAttribute('src') || '';
        
        // Skip data URLs and already fixed images
        if (src.startsWith('data:') || imgElement.hasAttribute('data-vercel-fixed')) {
          return;
        }
        
        // Mark as being processed
        imgElement.setAttribute('data-vercel-fixed', 'processing');
        
        // Store original source
        if (!imgElement.hasAttribute('data-original-src')) {
          imgElement.setAttribute('data-original-src', src);
        }
        
        // Add error handler to try alternative paths
        imgElement.onerror = () => {
          const originalSrc = imgElement.getAttribute('data-original-src') || src;
          const currentSrc = imgElement.getAttribute('src') || '';
          const attempts = parseInt(imgElement.getAttribute('data-fix-attempts') || '0', 10);
          
          // Don't try more than 3 times
          if (attempts >= 3) {
            imgElement.setAttribute('src', '/images/hero/uniform-hero-2.jpg');
            imgElement.setAttribute('data-vercel-fixed', 'fallback');
            return;
          }
          
          // Increment attempts
          imgElement.setAttribute('data-fix-attempts', (attempts + 1).toString());
          
          // Try different variations
          const variations = [
            // Original with and without leading slash
            originalSrc.startsWith('/') ? originalSrc.substring(1) : `/${originalSrc}`,
            // Try in images folder
            `/images/${originalSrc.split('/').pop()}`,
            // With absolute URL
            `${window.location.origin}${originalSrc.startsWith('/') ? '' : '/'}${originalSrc}`,
            // Fallback
            '/images/hero/uniform-hero-2.jpg'
          ];
          
          // Find a variation that hasn't been tried yet
          const nextVariation = variations.find(v => v !== currentSrc);
          
          if (nextVariation) {
            imgElement.setAttribute('src', nextVariation);
          } else {
            imgElement.setAttribute('src', '/images/hero/uniform-hero-2.jpg');
            imgElement.setAttribute('data-vercel-fixed', 'fallback');
          }
        };
        
        // Add load handler to mark as fixed
        imgElement.onload = () => {
          imgElement.setAttribute('data-vercel-fixed', 'true');
          fixed++;
          setFixedImages(prev => prev + 1);
        };
        
        // Force reload to trigger handlers
        if (imgElement.complete) {
          // If already loaded successfully, mark as fixed
          if (imgElement.naturalWidth > 0) {
            imgElement.setAttribute('data-vercel-fixed', 'true');
            fixed++;
            setFixedImages(prev => prev + 1);
          } else {
            // If failed to load, trigger error handler
            if (imgElement.onerror) {
              imgElement.onerror(new Event('error'));
            }
          }
        }
      });
    };
    
    // Run initially and after DOM changes
    fixImages();
    
    // Set up mutation observer to watch for new images
    const observer = new MutationObserver((mutations) => {
      let hasNewImages = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              const element = node as Element;
              if (element.tagName === 'IMG' || element.querySelectorAll('img').length > 0) {
                hasNewImages = true;
              }
            }
          });
        }
      });
      
      if (hasNewImages) {
        fixImages();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  // Don't render anything visible
  return null;
};

export default VercelImageFixer; 