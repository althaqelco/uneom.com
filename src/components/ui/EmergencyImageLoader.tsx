'use client';

import React, { useState, useEffect } from 'react';
import { findWorkingImagePath } from '@/lib/utils/vercelImageLoader';

interface EmergencyImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
  showDebugInfo?: boolean;
}

/**
 * مكون تحميل الصور في حالات الطوارئ
 * يستخدم عند فشل تحميل الصور بالأساليب العادية
 */
const EmergencyImageLoader: React.FC<EmergencyImageLoaderProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallbackSrc = '/images/default-placeholder.jpg',
  showDebugInfo = false,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<number>(0);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebugInfo = (info: string) => {
    if (showDebugInfo) {
      setDebugInfo(prev => [...prev, `${new Date().toISOString().substring(11, 19)}: ${info}`]);
    }
  };

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);
    setAttempts(0);
    
    const loadImage = async () => {
      try {
        addDebugInfo(`Starting to load image: ${src}`);
        
        // Try to find a working path
        const workingPath = await findWorkingImagePath(src);
        
        if (!isMounted) return;
        
        if (workingPath !== src) {
          addDebugInfo(`Found working path: ${workingPath}`);
        } else {
          addDebugInfo(`Using original path: ${src}`);
        }
        
        setImageSrc(workingPath);
        setIsLoading(false);
      } catch (err) {
        if (!isMounted) return;
        
        addDebugInfo(`Error finding working path: ${err}`);
        setError(`Failed to load image: ${err}`);
        setImageSrc(fallbackSrc);
        setIsLoading(false);
      }
    };
    
    loadImage();
    
    return () => {
      isMounted = false;
    };
  }, [src, fallbackSrc, showDebugInfo]);

  const handleImageError = () => {
    setAttempts(prev => prev + 1);
    addDebugInfo(`Image load error (attempt ${attempts + 1})`);
    
    if (attempts < 2) {
      // Try different variations
      const variations = [
        // Try without leading slash
        src.startsWith('/') ? src.substring(1) : src,
        // Try with leading slash
        !src.startsWith('/') ? `/${src}` : src,
        // Try with _next prefix
        `/_next/static/images/${src.split('/').pop()}`,
        // Try with different domain
        `https://uneom-com.vercel.app${src.startsWith('/') ? '' : '/'}${src}`,
      ];
      
      setImageSrc(variations[attempts]);
      addDebugInfo(`Trying alternative path: ${variations[attempts]}`);
    } else {
      // Fall back to default image
      setImageSrc(fallbackSrc);
      setError('Failed to load image after multiple attempts');
      addDebugInfo('Falling back to default image');
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setError(null);
    addDebugInfo(`Image loaded successfully: ${imageSrc}`);
  };

  const imageStyle: React.CSSProperties = {
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
  };

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
        >
          <span className="text-sm text-gray-500">Loading...</span>
        </div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        style={imageStyle}
        onLoad={handleImageLoad}
        onError={handleImageError}
        width={width}
        height={height}
      />
      
      {error && !isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-red-50"
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
        >
          <span className="text-sm text-red-500">{error}</span>
        </div>
      )}
      
      {showDebugInfo && debugInfo.length > 0 && (
        <div className="mt-2 p-2 bg-gray-100 text-xs text-gray-700 rounded">
          <div className="font-bold mb-1">Debug Info:</div>
          {debugInfo.map((info, index) => (
            <div key={index}>{info}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmergencyImageLoader; 