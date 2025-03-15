"use client";

import React, { useEffect, useState } from 'react';

interface ImageInfo {
  src: string;
  status: 'loading' | 'success' | 'error';
  element: HTMLImageElement;
  originalSrc?: string;
  attempts: number;
}

/**
 * Componente para depurar y corregir problemas de carga de imágenes en Vercel
 */
const ImageDebugger: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [isVercel, setIsVercel] = useState<boolean>(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Check if we're on Vercel
    const hostname = window.location.hostname;
    const isVercelEnv = hostname.includes('vercel.app') || 
                        process.env.NEXT_PUBLIC_VERCEL_ENV !== undefined;
    
    setIsVercel(isVercelEnv);

    // Only show debugger in Vercel environment with debug parameter
    const params = new URLSearchParams(window.location.search);
    const shouldDebug = params.get('debug') === 'images' || 
                        params.get('debug') === 'true' ||
                        localStorage.getItem('debugImages') === 'true';
    
    if (!shouldDebug && !isVercelEnv) return;

    // Function to scan all images on the page
    const scanImages = () => {
      const imgElements = document.querySelectorAll('img');
      const newImages: ImageInfo[] = [];
      
      imgElements.forEach((img) => {
        const src = img.getAttribute('src') || '';
        const originalSrc = img.getAttribute('data-original-src') || undefined;
        
        // Skip data URLs and already tracked images
        if (src.startsWith('data:') || 
            images.some(i => i.element === img)) {
          return;
        }
        
        // Add image to tracking
        newImages.push({
          src,
          originalSrc,
          status: img.complete ? (img.naturalWidth > 0 ? 'success' : 'error') : 'loading',
          element: img,
          attempts: 0
        });
        
        // Add event listeners
        img.addEventListener('load', () => handleImageLoad(img));
        img.addEventListener('error', () => handleImageError(img));
      });
      
      if (newImages.length > 0) {
        setImages(prev => [...prev, ...newImages]);
      }
    };
    
    // Handle image load success
    const handleImageLoad = (img: HTMLImageElement) => {
      setImages(prev => 
        prev.map(info => 
          info.element === img 
            ? { ...info, status: 'success' } 
            : info
        )
      );
    };
    
    // Handle image load error
    const handleImageError = (img: HTMLImageElement) => {
      setImages(prev => {
        const updatedImages = prev.map(info => {
          if (info.element === img) {
            const attempts = info.attempts + 1;
            
            // Try to fix the image if it's the first error
            if (attempts === 1 && isVercelEnv) {
              tryFixImage(img);
            }
            
            return { 
              ...info, 
              status: 'error' as const,
              attempts
            };
          }
          return info;
        });
        
        return updatedImages;
      });
    };
    
    // Try to fix a broken image
    const tryFixImage = (img: HTMLImageElement) => {
      const src = img.getAttribute('src') || '';
      const originalSrc = img.getAttribute('data-original-src') || src;
      
      // Try different variations
      const variations = [
        // Original source
        originalSrc,
        // With and without leading slash
        originalSrc.startsWith('/') ? originalSrc.substring(1) : `/${originalSrc}`,
        // With _next prefix
        `/_next/static/images/default-placeholder.jpg'/').pop()}`,
        // With absolute URL
        `${window.location.origin}${originalSrc.startsWith('/') ? '' : '/'}${originalSrc}`,
        // Fallback
        '/images/default-placeholder.jpg'
      ];
      
      // Try each variation
      let index = 0;
      const tryNextVariation = () => {
        if (index >= variations.length) return;
        
        const variation = variations[index++];
        img.src = variation;
      };
      
      img.addEventListener('error', tryNextVariation, { once: true });
      tryNextVariation();
    };
    
    // Initial scan
    scanImages();
    
    // Scan for new images periodically
    const intervalId = setInterval(scanImages, 2000);
    
    // Toggle visibility with keyboard shortcut (Ctrl+Shift+I)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        setIsVisible(prev => !prev);
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images]);

  // Don't render anything if not on Vercel or debugger is hidden
  if (!isVercel || !isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        maxWidth: '400px',
        maxHeight: '80vh',
        overflow: 'auto',
        fontSize: '12px',
        fontFamily: 'monospace'
      }}
    >
      <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        Image Debugger (Press Ctrl+Shift+I to hide)
      </div>
      
      <div>
        <div style={{ marginBottom: '5px' }}>
          Total Images: {images.length} | 
          Success: {images.filter(i => i.status === 'success').length} | 
          Error: {images.filter(i => i.status === 'error').length} | 
          Loading: {images.filter(i => i.status === 'loading').length}
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '5px' }}>
          {images.filter(i => i.status === 'error').map((img, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: '5px', 
                padding: '5px', 
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderRadius: '3px'
              }}
            >
              <div>Error: {img.src}</div>
              {img.originalSrc && <div>Original: {img.originalSrc}</div>}
              <div>Attempts: {img.attempts}</div>
              <button 
                onClick={() => {
                  // Try to fix the image
                  img.element.src = '/images/default-placeholder.jpg';
                }}
                style={{
                  backgroundColor: '#555',
                  border: 'none',
                  color: 'white',
                  padding: '2px 5px',
                  borderRadius: '3px',
                  marginTop: '3px',
                  cursor: 'pointer'
                }}
              >
                Fix
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDebugger; 