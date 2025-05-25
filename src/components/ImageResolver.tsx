"use client";

import React, { useEffect } from 'react';
import VercelSafeImage from './ui/VercelSafeImage';

/**
 * Componente que mejora la carga de imágenes en diferentes entornos, especialmente en Vercel
 * 
 * Este componente:
 * 1. Se ejecuta solo en el lado del cliente
 * 2. Detecta si estamos en Vercel y aplica lógica especializada
 * 3. Intenta diferentes estrategias para cargar imágenes
 * 4. Proporciona correcciones para problemas comunes de carga de imágenes
 */
const ImageResolver: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Default fallback image
    const DEFAULT_FALLBACK = '/images/defaults/default-placeholder.jpg';
    
    // Track processed images to avoid duplicate processing
    const processedImages = new Set<HTMLImageElement>();
    
    // Process all images on the page
    const processImages = () => {
      const images = document.querySelectorAll('img:not([data-resolved="true"])');
      
      images.forEach(img => {
        // Cast to HTMLImageElement
        const imgElement = img as HTMLImageElement;
        
        // Skip already processed images
        if (processedImages.has(imgElement)) return;
        processedImages.add(imgElement);
        
        // Mark as processed
        imgElement.setAttribute('data-resolved', 'true');
        
        // Store original src
        const originalSrc = imgElement.getAttribute('src');
        if (originalSrc) {
          imgElement.setAttribute('data-original-src', originalSrc);
        }
        
        // Add loading="lazy" for images below the fold
        if (!imgElement.hasAttribute('loading') && !isInViewport(imgElement)) {
          imgElement.setAttribute('loading', 'lazy');
        }
        
        // Handle image errors
        imgElement.onerror = function() {
          handleImageError(imgElement);
        };
        
        // Check if image is already broken
        if (imgElement.complete && imgElement.naturalWidth === 0) {
          handleImageError(imgElement);
        }
      });
    };
    
    // Handle image loading errors
    const handleImageError = (img: HTMLImageElement) => {
      // Get original source
      const originalSrc = img.getAttribute('data-original-src') || img.getAttribute('src');
      if (!originalSrc) return;
      
      // Try with different path variations
      const variations = generatePathVariations(originalSrc);
      
      // Try each variation
      tryImageVariations(img, variations, 0);
    };
    
    // Generate different path variations to try
    const generatePathVariations = (src: string) => {
      if (!src || src.startsWith('data:')) return [DEFAULT_FALLBACK];
      
      const variations: string[] = [];
      const baseUrl = window.location.origin;
      const filename = src.split('/').pop() || '';
      
      // Original path
      variations.push(src);
      
      // With and without leading slash
      if (src.startsWith('/')) {
        variations.push(baseUrl + src);
        variations.push(baseUrl + src.substring(1));
        variations.push(src.substring(1));
      } else {
        variations.push('/' + src);
        variations.push(baseUrl + '/' + src);
      }
      
      // Try in _next/static/images folder
      variations.push('/_next/static/images/' + filename);
      variations.push(baseUrl + '/_next/static/images/' + filename);
      
      // Try in public/images folder
      variations.push('/images/' + filename);
      variations.push(baseUrl + '/images/' + filename);
      
      // Add fallback as last resort
      variations.push(DEFAULT_FALLBACK);
      
      // Remove duplicates
      return Array.from(new Set(variations));
    };
    
    // Try each variation until one works
    const tryImageVariations = (img: HTMLImageElement, variations: string[], index: number) => {
      if (index >= variations.length) {
        // All variations failed, use default placeholder
        img.src = DEFAULT_FALLBACK;
        return;
      }
      
      const testImg = new Image();
      
      testImg.onload = function() {
        // This variation worked
        img.src = variations[index];
        img.setAttribute('data-fixed', 'true');
      };
      
      testImg.onerror = function() {
        // Try next variation
        tryImageVariations(img, variations, index + 1);
      };
      
      testImg.src = variations[index];
      
      // If image is already cached, onload might not fire
      if (testImg.complete) {
        if (testImg.naturalWidth > 0) {
          img.src = variations[index];
          img.setAttribute('data-fixed', 'true');
        } else {
          tryImageVariations(img, variations, index + 1);
        }
      }
    };
    
    // Check if element is in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    
    // Process images on load and after DOM changes
    window.addEventListener('load', processImages);
    
    // Process new images when they're added to the DOM
    const observer = new MutationObserver(mutations => {
      let hasNewImages = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'IMG') {
              hasNewImages = true;
            } else if (node instanceof Element && node.querySelectorAll) {
              const images = node.querySelectorAll('img');
              if (images.length > 0) {
                hasNewImages = true;
              }
            }
          });
        }
      });
      
      if (hasNewImages) {
        processImages();
      }
    });
    
    // Start observing the document
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    
    // Run initial processing
    processImages();
    
    // Clean up
    return () => {
      observer.disconnect();
      window.removeEventListener('load', processImages);
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default ImageResolver; 