'use client';

import React, { useState, useEffect } from 'react';

interface EmergencyImageLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  showDebugInfo?: boolean;
}

/**
 * EmergencyImageLoader component
 * 
 * A fallback image component that tries multiple loading strategies
 * to ensure images load correctly, even in problematic environments.
 * Useful for debugging image loading issues.
 */
const EmergencyImageLoader: React.FC<EmergencyImageLoaderProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  showDebugInfo = false
}) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMethod, setLoadingMethod] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [debugInfo, setDebugInfo] = useState<Record<string, any>>({});

  // Fallback SVG as data URL
  const fallbackSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQ4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQ4MCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjMyMCIgeT0iMjQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODgiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+`;

  useEffect(() => {
    if (!src) {
      setError('No source provided');
      setLoadedSrc(fallbackSvg);
      return;
    }

    // Reset state when src changes
    setLoadedSrc(null);
    setError(null);
    setLoadingMethod(null);
    setAttempts(0);
    setDebugInfo({});

    // Try different loading methods
    tryLoadImage();
  }, [src]);

  const tryLoadImage = async () => {
    setAttempts(prev => prev + 1);
    
    // Collect debug info
    const info: Record<string, any> = {
      originalSrc: src,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      windowSize: `${window.innerWidth}x${window.innerHeight}`,
      devicePixelRatio: window.devicePixelRatio,
      attempts
    };
    
    // Generate path variations
    const baseUrl = window.location.origin;
    const variations = [
      src, // Original
      src.startsWith('/') ? src : `/${src}`, // With leading slash
      src.startsWith('/') ? src.substring(1) : src, // Without leading slash
      src.startsWith('/') ? `${baseUrl}${src}` : `${baseUrl}/${src}`, // With base URL
      `/_next/static/images/${src.split('/').pop()}`, // Next.js image path
      `/images/${src.split('/').pop()}`, // Common images folder
      '/images/defaults/default-placeholder.jpg', // Default fallback
      fallbackSvg // SVG fallback
    ];
    
    info.variations = variations;
    
    // Try each variation
    for (let i = 0; i < variations.length; i++) {
      const currentSrc = variations[i];
      try {
        // Method 1: Image constructor
        if (i < variations.length - 1) { // Skip for fallback SVG
          const loadResult = await loadWithImageConstructor(currentSrc);
          if (loadResult) {
            setLoadedSrc(currentSrc);
            setLoadingMethod('Image constructor');
            info.successMethod = 'Image constructor';
            info.successVariation = currentSrc;
            setDebugInfo(info);
            return;
          }
        }
        
        // Method 2: Fetch API
        if (i < variations.length - 1 && !currentSrc.startsWith('data:')) { // Skip for data URLs
          const fetchResult = await loadWithFetch(currentSrc);
          if (fetchResult) {
            setLoadedSrc(currentSrc);
            setLoadingMethod('Fetch API');
            info.successMethod = 'Fetch API';
            info.successVariation = currentSrc;
            setDebugInfo(info);
            return;
          }
        }
      } catch (err) {
        // Continue to next variation
        info.errors = info.errors || [];
        info.errors.push({
          variation: currentSrc,
          error: err instanceof Error ? err.message : String(err)
        });
      }
    }
    
    // If all variations fail, use fallback
    setLoadedSrc(fallbackSvg);
    setError('All loading methods failed');
    setLoadingMethod('Fallback SVG');
    info.finalResult = 'Used fallback SVG';
    setDebugInfo(info);
  };

  const loadWithImageConstructor = (imgSrc: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      
      img.src = imgSrc;
      
      // If image is already cached
      if (img.complete && img.naturalWidth > 0) {
        resolve(true);
      }
      
      // Set a timeout to prevent hanging
      setTimeout(() => resolve(false), 3000);
    });
  };

  const loadWithFetch = async (imgSrc: string): Promise<boolean> => {
    try {
      // Skip data URLs
      if (imgSrc.startsWith('data:')) return false;
      
      const response = await fetch(imgSrc, { method: 'HEAD' });
      const contentType = response.headers.get('content-type');
      return response.ok && contentType !== null && contentType.startsWith('image/');
    } catch (error) {
      return false;
    }
  };

  return (
    <div className={`emergency-image-loader ${className}`}>
      {loadedSrc ? (
        <img 
          src={loadedSrc} 
          alt={alt} 
          width={width} 
          height={height}
          className={`emergency-loaded-image ${error ? 'emergency-image-error' : ''}`}
        />
      ) : (
        <div 
          className="emergency-image-loading"
          style={{ 
            width: width || 100, 
            height: height || 100,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888'
          }}
        >
          Loading...
        </div>
      )}
      
      {showDebugInfo && (
        <div className="emergency-image-debug" style={{ 
          fontSize: '10px', 
          backgroundColor: '#f8f8f8', 
          padding: '5px',
          border: '1px solid #ddd',
          marginTop: '5px',
          maxWidth: '300px',
          overflowX: 'auto'
        }}>
          <div><strong>Source:</strong> {src}</div>
          <div><strong>Status:</strong> {error ? `Error: ${error}` : 'Loaded'}</div>
          <div><strong>Method:</strong> {loadingMethod || 'Attempting...'}</div>
          <div><strong>Attempts:</strong> {attempts}</div>
          {loadedSrc && <div><strong>Loaded:</strong> {loadedSrc.substring(0, 50)}...</div>}
          <details>
            <summary>Debug Info</summary>
            <pre style={{ fontSize: '9px' }}>
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default EmergencyImageLoader; 