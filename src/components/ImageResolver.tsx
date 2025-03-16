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
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Function to resolve image paths
    const resolveImagePaths = () => {
      const images = document.querySelectorAll('img:not([data-resolved="true"])');
      
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        const src = imgElement.getAttribute('src') || '';
        
        // Skip data URLs and already resolved images
        if (src.startsWith('data:') || imgElement.hasAttribute('data-resolved')) {
          return;
        }
        
        // Mark as resolved
        imgElement.setAttribute('data-resolved', 'true');
        
        // Store original source
        if (!imgElement.hasAttribute('data-original-src')) {
          imgElement.setAttribute('data-original-src', src);
        }
        
        // Add error handler
        imgElement.onerror = () => {
          const originalSrc = imgElement.getAttribute('data-original-src') || '';
          
          // Try different path variations
          const variations = [
            // Try with and without leading slash
            src.startsWith('/') ? src.substring(1) : `/${src}`,
            // Try with absolute URL
            `${window.location.origin}${src.startsWith('/') ? '' : '/'}${src}`,
            // Try with _next prefix
            `/_next/static/images/${src.split('/').pop()}`,
            // Try original source if different
            originalSrc !== src ? originalSrc : '',
            // Fallback
            '/images/default-placeholder.jpg'
          ].filter(Boolean); // Remove empty strings
          
          // Try each variation
          let currentIndex = 0;
          
          const tryNextVariation = () => {
            if (currentIndex >= variations.length) {
              // If all variations fail, use fallback
              imgElement.setAttribute('src', '/images/default-placeholder.jpg');
              return;
            }
            
            const variation = variations[currentIndex++];
            imgElement.setAttribute('src', variation);
          };
          
          // Set up error handler for next variation
          imgElement.onerror = tryNextVariation;
          
          // Try first variation
          tryNextVariation();
        };
        
        // For images that are already loaded but broken
        if (imgElement.complete && imgElement.naturalWidth === 0) {
          // Trigger error handler
          if (imgElement.onerror) {
            imgElement.onerror(new Event('error'));
          }
        }
      });
    };
    
    // Run initially
    resolveImagePaths();
    
    // Run after page load
    window.addEventListener('load', resolveImagePaths);
    
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
        resolveImagePaths();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Clean up
    return () => {
      observer.disconnect();
      window.removeEventListener('load', resolveImagePaths);
    };
  }, []);

  // Don't render anything visible
  return null;
};

export default ImageResolver; 