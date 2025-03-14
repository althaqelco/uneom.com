"use client";

import React, { useEffect, useState } from 'react';

interface ImagePreloaderProps {
  imagePaths: string[];
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
  children?: React.ReactNode;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  imagePaths,
  onComplete,
  onProgress,
  children,
}) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!imagePaths || imagePaths.length === 0) {
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    let mounted = true;
    const totalImages = imagePaths.length;
    let loadedImages = 0;

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          if (mounted) {
            loadedImages++;
            setLoadedCount(loadedImages);
            
            if (onProgress) {
              onProgress(loadedImages / totalImages);
            }
            
            if (loadedImages === totalImages) {
              setIsComplete(true);
              if (onComplete) onComplete();
            }
          }
          resolve();
        };
        
        img.onerror = () => {
          // Even if image fails to load, we count it as "loaded" to continue the process
          if (mounted) {
            loadedImages++;
            setLoadedCount(loadedImages);
            
            if (onProgress) {
              onProgress(loadedImages / totalImages);
            }
            
            if (loadedImages === totalImages) {
              setIsComplete(true);
              if (onComplete) onComplete();
            }
          }
          resolve(); // Resolve anyway to continue
        };
        
        // Try to load the image with different path variations
        img.src = src;
        
        // If the image is already cached, the onload event might not fire
        if (img.complete) {
          if (mounted) {
            loadedImages++;
            setLoadedCount(loadedImages);
            
            if (onProgress) {
              onProgress(loadedImages / totalImages);
            }
            
            if (loadedImages === totalImages) {
              setIsComplete(true);
              if (onComplete) onComplete();
            }
          }
          resolve();
        }
      });
    };

    // Preload all images in parallel
    Promise.all(imagePaths.map(preloadImage))
      .then(() => {
        if (mounted) {
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        if (mounted) {
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      });

    return () => {
      mounted = false;
    };
  }, [imagePaths, onComplete, onProgress]);

  return (
    <>
      {children && (
        <div style={{ opacity: isComplete ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
          {children}
        </div>
      )}
    </>
  );
};

export default ImagePreloader; 