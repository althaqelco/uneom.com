"use client";

import React, { useEffect, useState } from 'react';

interface ImageStatus {
  src: string;
  status: 'loading' | 'success' | 'error';
  absoluteSrc?: string;
  error?: string;
  attempts?: number;
}

/**
 * Componente para depurar y corregir problemas de carga de imágenes en Vercel
 */
const ImageDebugger: React.FC = () => {
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([]);
  const [isVercel, setIsVercel] = useState<boolean>(false);
  const [hostname, setHostname] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');
  const [isFixing, setIsFixing] = useState<boolean>(false);
  const [fixedCount, setFixedCount] = useState<number>(0);

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
    collectImageStatuses();
    
    // Probar cargar la imagen de marcador de posición para diagnóstico
    testPlaceholderImage(currentOrigin);
    
    // Configurar un intervalo para verificar periódicamente las imágenes
    const intervalId = setInterval(() => {
      collectImageStatuses();
    }, 5000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Función para recopilar el estado de todas las imágenes
  const collectImageStatuses = () => {
    const images = document.querySelectorAll('img');
    const initialStatuses: ImageStatus[] = [];
    
    images.forEach((img) => {
      const src = img.getAttribute('src') || '';
      const currentOrigin = window.location.origin;
      
      if (src) {
        initialStatuses.push({
          src,
          status: img.complete && !img.naturalWidth ? 'error' : img.complete ? 'success' : 'loading',
          absoluteSrc: src.startsWith('http') ? src : `${currentOrigin}${src.startsWith('/') ? '' : '/'}${src}`,
          attempts: 0
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
    
    setImageStatuses(prevStatuses => {
      // Mantener los intentos anteriores para imágenes existentes
      const updatedStatuses = initialStatuses.map(newStatus => {
        const existingStatus = prevStatuses.find(s => s.src === newStatus.src);
        return existingStatus ? { ...newStatus, attempts: existingStatus.attempts } : newStatus;
      });
      return updatedStatuses;
    });
  };

  // Función para actualizar el estado de una imagen
  const updateImageStatus = (src: string, status: 'loading' | 'success' | 'error', error?: string) => {
    setImageStatuses(prevStatuses => 
      prevStatuses.map(img => 
        img.src === src ? { ...img, status, error } : img
      )
    );
  };

  // Función para probar la imagen de marcador de posición
  const testPlaceholderImage = (currentOrigin: string) => {
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
  };

  // Función para intentar corregir todas las imágenes con error
  const fixAllImages = async () => {
    setIsFixing(true);
    let fixed = 0;
    
    // Obtener todas las imágenes con error
    const errorImages = document.querySelectorAll('img');
    
    // Convertir NodeList a Array para poder iterar
    const imageArray = Array.from(errorImages);
    
    for (const img of imageArray) {
      const src = img.getAttribute('src') || '';
      const originalSrc = img.getAttribute('data-original-src') || '';
      const dataSrc = img.getAttribute('data-src') || '';
      
      // Si la imagen está rota, intentar corregirla
      if (!img.complete || (img.complete && !img.naturalWidth)) {
        // Incrementar el contador de intentos
        setImageStatuses(prevStatuses => 
          prevStatuses.map(status => 
            status.src === src ? { ...status, attempts: (status.attempts || 0) + 1 } : status
          )
        );
        
        // Estrategia 1: Intentar con URL absoluta
        const absoluteSrc = src.startsWith('http') ? src : `${origin}${src.startsWith('/') ? '' : '/'}${src}`;
        await tryImageFix(img, absoluteSrc);
        
        // Estrategia 2: Intentar con la URL original si existe
        if (originalSrc && img.getAttribute('src') !== originalSrc) {
          await tryImageFix(img, originalSrc);
        }
        
        // Estrategia 3: Intentar con data-src si existe
        if (dataSrc && img.getAttribute('src') !== dataSrc) {
          await tryImageFix(img, dataSrc);
        }
        
        // Estrategia 4: Intentar con URL sin _next/image
        if (src.includes('/_next/image')) {
          const urlParams = new URLSearchParams(src.split('?')[1]);
          const imgUrl = urlParams.get('url');
          if (imgUrl) {
            await tryImageFix(img, imgUrl);
          }
        }
        
        // Estrategia 5: Usar la imagen de respaldo
        if (!img.complete || (img.complete && !img.naturalWidth)) {
          img.setAttribute('src', '/images/default-placeholder.jpg');
          fixed++;
        }
      }
    }
    
    setFixedCount(fixed);
    setIsFixing(false);
    
    // Actualizar el estado de las imágenes después de los intentos de corrección
    collectImageStatuses();
  };

  // Función para intentar una estrategia de corrección de imagen
  const tryImageFix = (img: HTMLImageElement, newSrc: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const tempImg = new Image();
      
      // Configurar un timeout para no esperar demasiado
      const timeout = setTimeout(() => {
        resolve(false);
      }, 2000);
      
      tempImg.onload = () => {
        clearTimeout(timeout);
        img.setAttribute('src', newSrc);
        resolve(true);
      };
      
      tempImg.onerror = () => {
        clearTimeout(timeout);
        resolve(false);
      };
      
      tempImg.src = newSrc;
    });
  };

  // Si no hay imágenes o estamos en el servidor, no mostrar nada
  if (imageStatuses.length === 0) {
    return null;
  }

  // Contar imágenes con error
  const errorCount = imageStatuses.filter(img => img.status === 'error').length;

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 bg-black bg-opacity-80 text-white rounded-tl-lg max-w-md max-h-96 overflow-auto">
      <h3 className="text-lg font-bold mb-2">Depurador de Imágenes</h3>
      <p className="text-xs mb-2">Entorno: {isVercel ? 'Vercel' : 'Desarrollo'}</p>
      <p className="text-xs mb-2">Hostname: {hostname}</p>
      <p className="text-xs mb-2">Origin: {origin}</p>
      
      {errorCount > 0 && (
        <button 
          onClick={fixAllImages}
          disabled={isFixing}
          className="mb-2 px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 disabled:bg-gray-500"
        >
          {isFixing ? 'Corrigiendo...' : `Corregir ${errorCount} imágenes con error`}
        </button>
      )}
      
      {fixedCount > 0 && (
        <p className="text-xs mb-2 text-green-400">Se corrigieron {fixedCount} imágenes</p>
      )}
      
      <div className="text-xs">
        <div className="grid grid-cols-4 gap-1 font-bold mb-1">
          <span>Imagen</span>
          <span>Estado</span>
          <span>Intentos</span>
          <span>URL</span>
        </div>
        {imageStatuses.map((img, index) => (
          <div key={index} className="grid grid-cols-4 gap-1 mb-1 border-t border-gray-600 pt-1">
            <span className="truncate">{img.src.split('/').pop()}</span>
            <span className={
              img.status === 'success' ? 'text-green-400' : 
              img.status === 'error' ? 'text-red-400' : 'text-yellow-400'
            }>
              {img.status}
            </span>
            <span>{img.attempts || 0}</span>
            <span className="truncate">{img.absoluteSrc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDebugger; 