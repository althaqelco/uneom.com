"use client";

import React, { useEffect, useState } from 'react';

interface ImageStatus {
  src: string;
  status: 'loading' | 'success' | 'error';
  absoluteSrc?: string;
  error?: string;
}

/**
 * Componente para depurar problemas de carga de imágenes en Vercel
 */
const ImageDebugger: React.FC = () => {
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([]);
  const [isVercel, setIsVercel] = useState<boolean>(false);
  const [hostname, setHostname] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;

    // Obtener información del entorno
    const currentHostname = window.location.hostname;
    const currentOrigin = window.location.origin;
    
    setHostname(currentHostname);
    setOrigin(currentOrigin);
    setIsVercel(
      currentHostname.includes('vercel.app') || 
      currentHostname === 'uneom.com' || 
      currentHostname.endsWith('.uneom.com')
    );

    // Recopilar todas las imágenes en la página
    const images = document.querySelectorAll('img');
    const initialStatuses: ImageStatus[] = [];
    
    images.forEach((img) => {
      const src = img.getAttribute('src') || '';
      if (src) {
        initialStatuses.push({
          src,
          status: 'loading',
          absoluteSrc: src.startsWith('http') ? src : `${currentOrigin}${src.startsWith('/') ? '' : '/'}${src}`
        });
        
        // Configurar listeners para todas las imágenes
        img.addEventListener('load', () => {
          updateImageStatus(src, 'success');
        });
        
        img.addEventListener('error', (e) => {
          updateImageStatus(src, 'error', (e as ErrorEvent).message);
        });
      }
    });
    
    setImageStatuses(initialStatuses);
    
    // Función para actualizar el estado de una imagen
    function updateImageStatus(src: string, status: 'loading' | 'success' | 'error', error?: string) {
      setImageStatuses(prevStatuses => 
        prevStatuses.map(img => 
          img.src === src ? { ...img, status, error } : img
        )
      );
    }
    
    // Probar cargar la imagen de marcador de posición para diagnóstico
    const testPlaceholderImage = new Image();
    testPlaceholderImage.src = '/images/default-placeholder.jpg';
    testPlaceholderImage.onload = () => {
      console.log('✅ Imagen de marcador de posición cargada correctamente');
    };
    testPlaceholderImage.onerror = () => {
      console.error('❌ Error al cargar la imagen de marcador de posición');
      
      // Probar con URL absoluta
      const absoluteTestImage = new Image();
      absoluteTestImage.src = `${currentOrigin}/images/default-placeholder.jpg`;
      absoluteTestImage.onload = () => {
        console.log('✅ Imagen de marcador de posición cargada correctamente con URL absoluta');
      };
      absoluteTestImage.onerror = () => {
        console.error('❌ Error al cargar la imagen de marcador de posición incluso con URL absoluta');
      };
    };
    
    // Limpiar listeners
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', () => {});
        img.removeEventListener('error', () => {});
      });
    };
  }, []);

  // Si no hay imágenes o estamos en el servidor, no mostrar nada
  if (imageStatuses.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 bg-black bg-opacity-80 text-white rounded-tl-lg max-w-md max-h-96 overflow-auto">
      <h3 className="text-lg font-bold mb-2">Depurador de Imágenes</h3>
      <p className="text-xs mb-2">Entorno: {isVercel ? 'Vercel' : 'Desarrollo'}</p>
      <p className="text-xs mb-2">Hostname: {hostname}</p>
      <p className="text-xs mb-2">Origin: {origin}</p>
      <div className="text-xs">
        <div className="grid grid-cols-3 gap-1 font-bold mb-1">
          <span>Imagen</span>
          <span>Estado</span>
          <span>URL Absoluta</span>
        </div>
        {imageStatuses.map((img, index) => (
          <div key={index} className="grid grid-cols-3 gap-1 mb-1 border-t border-gray-600 pt-1">
            <span className="truncate">{img.src.split('/').pop()}</span>
            <span className={
              img.status === 'success' ? 'text-green-400' : 
              img.status === 'error' ? 'text-red-400' : 'text-yellow-400'
            }>
              {img.status}
            </span>
            <span className="truncate">{img.absoluteSrc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDebugger; 