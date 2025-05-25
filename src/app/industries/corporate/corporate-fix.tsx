"use client";

import React, { useEffect } from 'react';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

/**
 * A component that fixes issues with the corporate.jpg image
 * This ensures we have a fallback if the image is missing
 */
export default function CorporateImageFix() {
  useEffect(() => {
    // Check if the corporate image exists
    const checkAndFixCorporateImage = () => {
      const testImg = new Image();
      testImg.onload = () => {
        // Image loaded successfully, no action needed
      };
      
      testImg.onerror = () => {
        // Image failed to load, fix it by using a placeholder
        console.log("Corporate image not found, using placeholder");
        
        // Create placeholder for the corporate image
        const placeholderImg = new Image();
        placeholderImg.src = '/images/products/corporate-suit-executive.jpg';
        placeholderImg.onload = () => {
          // When placeholder loads, assign it to all corporate images
          const images = document.querySelectorAll('img[src*="corporate.jpg"]');
          images.forEach((img: Element) => {
            if (img instanceof HTMLImageElement) {
              img.src = '/images/products/corporate-suit-executive.jpg';
            }
          });
        };
      };
      
      // Test the corporate image
      testImg.src = '/images/industries/corporate.jpg';
    };
    
    // Run after a short delay to ensure DOM is fully loaded
    setTimeout(checkAndFixCorporateImage, 500);
    
    // Also run on load event
    window.addEventListener('load', checkAndFixCorporateImage);
    
    return () => {
      window.removeEventListener('load', checkAndFixCorporateImage);
    };
  }, []);
  
  // This component doesn't render anything
  return null;
} 