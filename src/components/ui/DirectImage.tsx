"use client";

import React, { useState, useEffect } from 'react';

// Interfaz para las propiedades del componente
interface DirectImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  fallbackSrc?: string;
  onClick?: () => void;
  onLoad?: () => void;
}

/**
 * Un componente de imagen simple y directo que no usa la optimización de Next.js
 * para garantizar que las imágenes se carguen correctamente en Vercel
 */
export default function DirectImage({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  priority = false,
  fallbackSrc = '/images/defaults/default-placeholder.jpg',
  onClick,
  onLoad,
}: DirectImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Función para convertir rutas relativas a absolutas para Vercel
  const getVercelImageUrl = (imgSrc: string): string => {
    if (imgSrc.startsWith('http')) return imgSrc;
    
    // Determinar la URL base
    const isVercel = typeof window !== 'undefined' && 
      (window.location.hostname.includes('vercel.app') || 
       window.location.hostname === 'uneom.com' ||
       window.location.hostname.endsWith('.uneom.com'));
       
    const baseUrl = isVercel ? `https://${window.location.hostname}` : '';
    
    // Asegurar que la ruta comience con '/'
    const normalizedSrc = imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;
    
    return `${baseUrl}${normalizedSrc}`;
  };

  // Reiniciar el estado si la fuente cambia
  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setTriedFallback(false);
    setIsLoaded(false);
  }, [src]);

  // Función de manejo de errores
  const handleError = () => {
    if (triedFallback) {
      // Ya intentamos el fallback, no hacer nada más
      console.warn('Imagen de respaldo también falló:', fallbackSrc);
      return;
    }

    if (hasError) {
      // Ya intentamos una vez, ahora intentar con el fallback
      console.warn('Intentando con imagen de respaldo:', fallbackSrc);
      setImageSrc(getVercelImageUrl(fallbackSrc));
      setTriedFallback(true);
      return;
    }

    // Primer error, intentar con URL absoluta
    const absoluteUrl = getVercelImageUrl(src);
    console.warn('Imagen no cargada, intentando con URL absoluta:', absoluteUrl);
    setImageSrc(absoluteUrl);
    setHasError(true);
  };

  // Manejo de carga exitosa
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Estilo combinado
  const combinedStyle: React.CSSProperties = {
    ...style,
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
    opacity: isLoaded ? 1 : 0.1,
    transition: 'opacity 0.3s ease',
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${hasError ? 'opacity-90' : ''}`}
      style={combinedStyle}
      loading={priority ? 'eager' : 'lazy'}
      onError={handleError}
      onLoad={handleLoad}
      onClick={onClick}
    />
  );
} 