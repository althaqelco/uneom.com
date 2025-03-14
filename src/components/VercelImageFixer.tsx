"use client";

import React, { useEffect } from 'react';

/**
 * Componente que corrige automáticamente problemas de carga de imágenes en Vercel
 * Se ejecuta solo en el cliente y aplica múltiples estrategias para asegurar que las imágenes se carguen correctamente
 */
const VercelImageFixer: React.FC = () => {
  useEffect(() => {
    // Solo ejecutar en el cliente y en entorno Vercel
    if (typeof window === 'undefined') return;
    
    const isVercel = 
      window.location.hostname.includes('vercel.app') || 
      window.location.hostname === 'uneom.com' || 
      window.location.hostname.endsWith('.uneom.com');
    
    if (!isVercel) return;
    
    // Función para corregir rutas de imágenes
    const fixImagePaths = () => {
      const images = document.querySelectorAll('img:not([data-fixed="true"])') as NodeListOf<HTMLImageElement>;
      const baseUrl = window.location.origin;
      
      images.forEach(img => {
        // Marcar la imagen como procesada
        img.setAttribute('data-fixed', 'true');
        
        const src = img.getAttribute('src') || '';
        
        // Estrategia 1: Convertir rutas relativas a absolutas
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
          const fixedSrc = src.startsWith('/') 
            ? baseUrl + src 
            : baseUrl + '/' + src;
          
          // Guardar la URL original
          img.setAttribute('data-original-src', src);
          img.setAttribute('src', fixedSrc);
          
          // Configurar manejo de errores
          setupErrorHandling(img);
        } 
        // Estrategia 2: Para imágenes Next.js optimizadas
        else if (src && src.includes('/_next/image')) {
          setupErrorHandling(img);
        }
        // Estrategia 3: Para cualquier otra imagen
        else if (src) {
          setupErrorHandling(img);
        }
      });
    };
    
    // Configurar manejo de errores para una imagen
    const setupErrorHandling = (img: HTMLImageElement) => {
      // Evitar configurar múltiples manejadores de errores
      if (img.hasAttribute('data-error-handler')) return;
      img.setAttribute('data-error-handler', 'true');
      
      img.onerror = function() {
        const src = img.getAttribute('src') || '';
        const originalSrc = img.getAttribute('data-original-src') || '';
        
        // Estrategia 1: Si la URL corregida falla, intentar con la original
        if (originalSrc && src !== originalSrc) {
          console.log(`Intentando cargar imagen con URL original: ${originalSrc}`);
          img.setAttribute('src', originalSrc);
          return;
        }
        
        // Estrategia 2: Para imágenes Next.js optimizadas, intentar con la URL directa
        if (src.includes('/_next/image')) {
          try {
            const urlParams = new URLSearchParams(src.split('?')[1]);
            const imgUrl = urlParams.get('url');
            if (imgUrl) {
              console.log(`Intentando cargar imagen directamente: ${imgUrl}`);
              img.setAttribute('src', imgUrl);
              return;
            }
          } catch (e) {
            console.error('Error al extraer URL de imagen Next.js:', e);
          }
        }
        
        // Estrategia 3: Usar la imagen de respaldo
        console.log(`Usando imagen de respaldo para: ${src}`);
        img.setAttribute('src', '/images/default-placeholder.jpg');
      };
    };
    
    // Ejecutar inicialmente
    fixImagePaths();
    
    // Configurar un observador de mutaciones para detectar nuevas imágenes
    const observer = new MutationObserver((mutations) => {
      let shouldFix = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // ELEMENT_NODE
              const element = node as Element;
              if (element.tagName === 'IMG' || element.querySelectorAll('img').length > 0) {
                shouldFix = true;
              }
            }
          });
        }
      });
      
      if (shouldFix) {
        fixImagePaths();
      }
    });
    
    // Observar cambios en todo el documento
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // También ejecutar después de que la página se cargue completamente
    window.addEventListener('load', fixImagePaths);
    
    // Limpiar
    return () => {
      observer.disconnect();
      window.removeEventListener('load', fixImagePaths);
    };
  }, []);
  
  // Este componente no renderiza nada visible
  return null;
};

export default VercelImageFixer; 