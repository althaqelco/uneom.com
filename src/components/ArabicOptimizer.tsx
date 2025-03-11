'use client';

import { useEffect, useRef } from 'react';
import { initArabicOptimizations, applyRTLTransformations } from '@/lib/utils/arabicOptimization';

/**
 * ArabicOptimizer component that initializes various optimizations
 * for Arabic pages including RTL layout, font preloading, and image
 * optimization. This component doesn't render anything visible.
 * 
 * This enhanced version includes better handling of dynamically loaded
 * elements and improved RTL direction support.
 */
export default function ArabicOptimizer() {
  // Use a ref to track initialization
  const initializedRef = useRef(false);
  
  useEffect(() => {
    // Prevent duplicate initialization
    if (initializedRef.current) return;
    initializedRef.current = true;
    
    // Initialize all Arabic optimizations
    initArabicOptimizations();
    
    // Add MutationObserver to watch for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      // Apply RTL transformations on DOM changes
      applyRTLTransformations();
      
      // Check for newly added images
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Check if this is an image element
              if (node.nodeName === 'IMG') {
                const img = node as HTMLImageElement;
                const src = img.getAttribute('src') || '';
                if (src.includes('arrow') || 
                    src.includes('direction') || 
                    src.includes('chevron') ||
                    src.includes('navigation')) {
                  img.classList.add('rtl-flip');
                }
              }
              
              // Check for SVG elements
              if (node.nodeName === 'svg') {
                const svg = node as SVGElement;
                const classList = svg.getAttribute('class') || '';
                if (classList.includes('arrow') || 
                    classList.includes('direction') || 
                    classList.includes('chevron') ||
                    classList.includes('navigation')) {
                  svg.classList.add('rtl-flip');
                }
              }
              
              // Handle flex container direction
              if (node instanceof HTMLElement) {
                const style = window.getComputedStyle(node);
                if (style.display === 'flex' || style.display === 'inline-flex') {
                  if (style.justifyContent === 'flex-start') {
                    node.classList.add('rtl-justify-end');
                  } else if (style.justifyContent === 'flex-end') {
                    node.classList.add('rtl-justify-start');
                  }
                }
              }
            }
          });
        }
      });
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, {
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });
    
    // Apply transformations when page content is fully loaded
    window.addEventListener('load', () => {
      applyRTLTransformations();
    });
    
    // Apply transformations on each navigation change in case of client routing
    window.addEventListener('popstate', () => {
      setTimeout(() => {
        applyRTLTransformations();
      }, 100);
    });
    
    // Cleanup function
    return () => {
      observer.disconnect();
      window.removeEventListener('load', () => {});
      window.removeEventListener('popstate', () => {});
    };
  }, []);

  // This component doesn't render anything visible
  return null;
} 