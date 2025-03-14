"use client";

import React, { useEffect, useState } from 'react';
import VercelSafeImage from './ui/VercelSafeImage';

/**
 * Componente que mejora la carga de imágenes en diferentes entornos, especialmente en Vercel
 * 
 * Este componente:
 * 1. Se ejecuta solo en el lado del cliente
 * 2. Detecta si estamos en Vercel y aplica lógica especializada
 * 3. Intenta diferentes estrategias para cargar imágenes
 * 4. Proporciona correcciones para problemas comunes de carga de imágenes
 */
const ImageResolver: React.FC = () => {
  const [isVercel, setIsVercel] = useState(false);
  
  useEffect(() => {
    // Detectar si estamos en Vercel
    const hostname = window.location.hostname;
    const isVercelEnvironment = 
      hostname.includes('vercel.app') || 
      hostname.endsWith('.vercel.app') ||
      document.cookie.includes('vercel');
    
    setIsVercel(isVercelEnvironment);
    
    // Función para arreglar todas las imágenes
    const fixAllImages = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        if (!img.hasAttribute('data-fixed')) {
          applyImageFixes(img, isVercelEnvironment);
        }
      });
    };
    
    // Monitorear cambios en el DOM para nuevas imágenes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'IMG') {
              applyImageFixes(node as HTMLImageElement, isVercelEnvironment);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const images = (node as Element).querySelectorAll('img');
              images.forEach(img => {
                if (!img.hasAttribute('data-fixed')) {
                  applyImageFixes(img, isVercelEnvironment);
                }
              });
            }
          });
        }
      });
    });
    
    // Iniciar el observador
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Arreglar imágenes existentes
    fixAllImages();
    
    // Arreglar imágenes en eventos de carga
    window.addEventListener('load', fixAllImages);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('load', fixAllImages);
    };
  }, []);
  
  // Función para aplicar arreglos específicos a cada imagen
  const applyImageFixes = (img: HTMLImageElement, isVercelEnvironment: boolean) => {
    // Marcar como procesada
    img.setAttribute('data-fixed', 'true');
    
    // Guardar la URL original
    const originalSrc = img.getAttribute('src') || '';
    img.setAttribute('data-original-src', originalSrc);
    
    // Corregir rutas relativas si es necesario
    if (originalSrc && !originalSrc.startsWith('http') && !originalSrc.startsWith('data:')) {
      let fixedSrc = originalSrc;
      
      // Agregar dominio si es necesario
      if (isVercelEnvironment) {
        const baseUrl = window.location.origin;
        fixedSrc = originalSrc.startsWith('/') 
          ? `${baseUrl}${originalSrc}`
          : `${baseUrl}/${originalSrc}`;
      }
      
      img.setAttribute('src', fixedSrc);
    }
    
    // Configurar manejo de errores
    img.onerror = function() {
      handleImageError(img, originalSrc, isVercelEnvironment);
    };
  };
  
  // Manejar errores de carga de imágenes
  const handleImageError = (img: HTMLImageElement, originalSrc: string, isVercelEnvironment: boolean) => {
    const currentSrc = img.getAttribute('src') || '';
    const baseUrl = window.location.origin;
    
    // No hacer nada si ya es la imagen de respaldo
    if (currentSrc.includes('default-placeholder')) {
      return;
    }
    
    // Intentar diferentes estrategias
    if (currentSrc !== originalSrc) {
      // Volver a la URL original
      img.setAttribute('src', originalSrc);
    } else if (isVercelEnvironment) {
      // Intentar con _next/image
      if (!currentSrc.includes('_next/image')) {
        const nextImageUrl = `${baseUrl}/_next/image?url=${encodeURIComponent(originalSrc)}&w=640&q=75`;
        img.setAttribute('src', nextImageUrl);
      } else {
        // Último recurso: imagen de respaldo
        img.setAttribute('src', '/images/default-placeholder.jpg');
      }
    } else {
      // Imagen de respaldo
      img.setAttribute('src', '/images/default-placeholder.jpg');
    }
  };
  
  // Componente sin renderizado visible
  return null;
};

export default ImageResolver; 