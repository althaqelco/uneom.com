"use client";

import React, { useEffect, useState } from 'react';

interface ImagePreloaderProps {
  imagePaths: string[];
  children: React.ReactNode;
  showLoadingIndicator?: boolean;
}

/**
 * ImagePreloader component
 * 
 * Preloads critical images before rendering children to prevent layout shifts
 * and ensure important images are available immediately.
 */
const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  imagePaths,
  children,
  showLoadingIndicator = false
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!imagePaths || imagePaths.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imagePaths.length;

    // Function to update progress
    const updateProgress = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalImages) * 100));
      
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    // Preload all images
    imagePaths.forEach(path => {
      if (!path) {
        updateProgress();
        return;
      }

      const img = new Image();
      
      img.onload = updateProgress;
      img.onerror = () => {
        console.warn(`Failed to preload image: ${path}`);
        updateProgress();
      };
      
      // Start loading the image
      img.src = path;
      
      // If image is already cached, onload might not fire
      if (img.complete) {
        updateProgress();
      }
    });

    // Set a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (!imagesLoaded) {
        console.warn('Image preloading timed out, rendering content anyway');
        setImagesLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [imagePaths]);

  // Always render children in production, only show loading in development if enabled
  if (process.env.NODE_ENV !== 'development' || !showLoadingIndicator) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  // In development with loading indicator enabled
  return (
    <React.Fragment>
      {!imagesLoaded && showLoadingIndicator ? (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          zIndex: 9999}}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#4caf50',
            transition: 'width 0.3s ease-in-out'}} />
          <div style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '3px',
            fontSize: '12px',
            zIndex: 9999}}>
            Loading images: {progress}%
          </div>
        </div>
      ) : null}
      {children}
    </React.Fragment>
  );
};

export default ImagePreloader; 