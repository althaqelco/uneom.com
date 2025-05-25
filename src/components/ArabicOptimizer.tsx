'use client';

import React, { useEffect } from 'react';
import { initArabicOptimizations } from '@/lib/utils/arabicOptimization';

// Critical images for Arabic version
const CRITICAL_IMAGES = [
  '/images/avatar-placeholder.jpg',
  '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
  '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
  '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
  '/images/healthcare/medical_hijab_uniform.jpg',
  '/images/banner-placeholder.jpg',
  '/images/products/corporate-suit-executive.jpg'
];

/**
 * ArabicOptimizer component for enhancing Arabic version performance
 * This handles proper font loading and RTL optimizations
 */
const ArabicOptimizer: React.FC = () => {
  useEffect(() => {
    // Initialize Arabic optimizations on mount
    initArabicOptimizations();
    
    // Check if running on Vercel
    const isVercel = typeof window !== 'undefined' && 
      (window.location.hostname.includes('vercel.app') || 
       window.location.hostname === 'uneom.com' ||
       window.location.hostname.endsWith('.uneom.com'));
    
    // Load Google Fonts for Arabic
    const cairoGoogleFont = document.createElement('link');
    cairoGoogleFont.rel = 'stylesheet';
    cairoGoogleFont.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap';
    document.head.appendChild(cairoGoogleFont);
    
    const tajawalGoogleFont = document.createElement('link');
    tajawalGoogleFont.rel = 'stylesheet';
    tajawalGoogleFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap';
    document.head.appendChild(tajawalGoogleFont);
    
    // Remove any existing preload links for fonts (to avoid duplicates)
    document.querySelectorAll('link[rel="preload"][as="font"]').forEach(el => {
      if ((el as HTMLLinkElement).href.includes('/fonts/ar/')) {
        el.remove();
      }
    });
    
    // Preload critical images
    CRITICAL_IMAGES.forEach(imagePath => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = isVercel ? `https://uneom-com.vercel.app${imagePath}` : imagePath;
      link.as = 'image';
      document.head.appendChild(link);
    });
    
    // Add CSS to prioritize font loading
    const style = document.createElement('style');
    style.textContent = `
      /* Apply Arabic fonts to critical elements immediately */
      html[lang="ar"] body {
        font-family: 'Tajawal', sans-serif !important;
      }
      
      html[lang="ar"] h1,
      html[lang="ar"] h2,
      html[lang="ar"] h3,
      html[lang="ar"] h4,
      html[lang="ar"] h5,
      html[lang="ar"] h6 {
        font-family: 'Cairo', sans-serif !important;
      }
      
      /* Fix images in production */
      .next-image-wrapper img {
        object-fit: contain !important;
        object-position: center !important;
      }
      
      /* Force reveal hidden images */
      img[style*="visibility: hidden"] {
        visibility: visible !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    
    // Force browser to recognize direction
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    // Fix any RTL layout issues
    document.body.classList.add('rtl');
    
    // Apply fixes for images delayed appearance
    setTimeout(() => {
      document.querySelectorAll('img').forEach(img => {
        if (img.complete && img.naturalWidth === 0) {
          // Force reload broken images
          const currentSrc = img.src;
          img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
          setTimeout(() => {
            img.src = currentSrc;
          }, 10);
        }
      });
    }, 1000);
    
    return () => {
      // Cleanup
      document.head.removeChild(cairoGoogleFont);
      document.head.removeChild(tajawalGoogleFont);
    };
  }, []);

  // This is a client-side only component
  return null;
};

export default ArabicOptimizer; 