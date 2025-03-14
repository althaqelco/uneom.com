"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface VercelSafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  unoptimized?: boolean;
  style?: React.CSSProperties;
}

/**
 * Componente de imagen especialmente diseñado para funcionar en Vercel
 * con múltiples estrategias de carga y recuperación ante fallos
 */
const VercelSafeImage: React.FC<VercelSafeImageProps> = ({
  src,
  alt,
  width = 640,
  height = 480,
  className = '',
  priority = false,
  unoptimized = true,
  style,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [loadError, setLoadError] = useState(false);
  const [useNativeImg, setUseNativeImg] = useState(false);
  const [isVercel, setIsVercel] = useState(false);

  useEffect(() => {
    // Detectar si estamos en Vercel
    const hostname = window.location.hostname;
    const isVercelEnvironment = 
      hostname.includes('vercel.app') || 
      hostname.endsWith('.vercel.app') ||
      document.cookie.includes('vercel');
    
    setIsVercel(isVercelEnvironment);
    
    // Reiniciar el estado si la fuente cambia
    setImageSrc(src);
    setLoadError(false);
    setUseNativeImg(false);
  }, [src]);

  // Manejar errores de carga
  const handleError = () => {
    // Si ya estamos usando un tag nativo, intentar con la imagen de respaldo
    if (useNativeImg) {
      setImageSrc('/images/default-placeholder.jpg');
      return;
    }
    
    // Si estamos en Vercel, intentar con diferentes estrategias
    if (isVercel) {
      // Si la URL no comienza con http o https, añadir el origen
      if (!src.startsWith('http') && !src.startsWith('data:')) {
        const baseUrl = window.location.origin;
        const absoluteSrc = src.startsWith('/') 
          ? `${baseUrl}${src}` 
          : `${baseUrl}/${src}`;
          
        setImageSrc(absoluteSrc);
      } else {
        // Cambiar a un tag img nativo como último recurso
        setUseNativeImg(true);
      }
    } else {
      // En desarrollo, simplemente cambiar a un tag nativo
      setUseNativeImg(true);
    }
    
    setLoadError(true);
  };

  // Opciones adicionales para Next.js Image
  const imageOptions = {
    unoptimized: unoptimized || isVercel, // Deshabilitar optimización en Vercel
    loading: priority ? 'eager' : 'lazy' as 'eager' | 'lazy',
  };

  // Si estamos usando un tag nativo como fallback
  if (useNativeImg) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          maxWidth: '100%',
          objectFit: 'contain',
          ...style,
        }}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => {
          if (imageSrc !== '/images/default-placeholder.jpg') {
            setImageSrc('/images/default-placeholder.jpg');
          }
        }}
      />
    );
  }

  // Por defecto, usar Next.js Image
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={style}
      onError={handleError}
      {...imageOptions}
    />
  );
};

export default VercelSafeImage; 