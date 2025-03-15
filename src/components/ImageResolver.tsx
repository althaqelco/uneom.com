"use client";

import React, { useEffect } from 'react';

/**
 * مكون يحسن تحميل الصور في بيئات مختلفة، خاصة في Vercel
 * 
 * هذا المكون:
 * 1. يعمل فقط في جانب العميل
 * 2. يكتشف ما إذا كنا في Vercel ويطبق منطقًا متخصصًا
 * 3. يجرب استراتيجيات مختلفة لتحميل الصور
 * 4. يوفر إصلاحات لمشاكل تحميل الصور الشائعة
 */
const ImageResolver: React.FC = () => {
  useEffect(() => {
    // تشغيل فقط في المتصفح
    if (typeof window === 'undefined') return;

    // تحديد ما إذا كنا في بيئة Vercel
    const hostname = window.location.hostname;
    const isVercel = 
      hostname.includes('vercel.app') || 
      hostname === 'uneom.com' || 
      hostname.endsWith('.uneom.com');
    
    console.log(`ImageResolver: Running in Vercel environment: ${isVercel ? 'Yes' : 'No'}`);
    
    // إضافة فئة إلى الجسم للتعرف على بيئة Vercel في CSS
    if (isVercel) {
      document.body.classList.add('vercel-deployment');
      console.log('Added vercel-deployment class to body');
    }
    
    // تحميل الصور الاحتياطية مسبقًا
    const preloadFallbackImages = () => {
      const fallbackImages = [
        '/images/default-placeholder.jpg',
        '/images/default-placeholder.svg',
        '/images/product-placeholder.jpg',
        '/images/product-placeholder.svg',
        '/images/avatar-placeholder.jpg',
        '/images/avatar-placeholder.svg',
        '/images/banner-placeholder.jpg',
        '/images/banner-placeholder.svg'
      ];
      
      fallbackImages.forEach(imgSrc => {
        const img = new Image();
        img.src = imgSrc;
        console.log(`Preloaded fallback image: ${imgSrc}`);
      });
    };
    
    // تحميل الصور الاحتياطية مسبقًا
    preloadFallbackImages();

    // تحديد نوع الصورة بناءً على المسار أو الفئة
    const getImageType = (src: string, className: string = '') => {
      const srcString = src.toLowerCase();
      const classString = className.toLowerCase();
      
      if (srcString.includes('product') || srcString.includes('item') || classString.includes('product')) {
        return 'product';
      } else if (srcString.includes('avatar') || srcString.includes('profile') || srcString.includes('user') || classString.includes('avatar')) {
        return 'avatar';
      } else if (srcString.includes('banner') || srcString.includes('hero') || srcString.includes('cover') || classString.includes('banner')) {
        return 'banner';
      }
      
      return 'default';
    };
    
    // الحصول على مسار الصورة الاحتياطية المناسبة
    const getFallbackSrc = (type: string, format: 'jpg' | 'svg' = 'jpg') => {
      return `/images/${type}-placeholder.${format}`;
    };

    // وظيفة لحل مسارات الصور
    const resolveImagePaths = () => {
      const images = document.querySelectorAll('img:not([data-resolved="true"])');
      console.log(`ImageResolver: Found ${images.length} unresolved images`);
      
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        const src = imgElement.getAttribute('src') || '';
        const className = imgElement.className || '';
        
        // تخطي عناوين URL للبيانات والصور التي تم حلها بالفعل
        if (src.startsWith('data:') || imgElement.hasAttribute('data-resolved')) {
          return;
        }
        
        // وضع علامة كمحلول
        imgElement.setAttribute('data-resolved', 'true');
        imgElement.setAttribute('data-original-src', src);
        
        // إضافة فئة CSS بناءً على نوع الصورة
        const imageType = getImageType(src, className);
        imgElement.classList.add(`${imageType}-image`);
        
        // إضافة معالج أخطاء
        imgElement.onerror = () => {
          console.log(`Image error: ${src}`);
          
          // إضافة فئة الخطأ
          imgElement.classList.add('error');
          
          // تحديد نوع الصورة الاحتياطية المناسبة
          const fallbackSrc = getFallbackSrc(imageType);
          
          // تجربة اختلافات المسار المختلفة
          const variations = [
            // تجربة مع وبدون شرطة مائلة أمامية
            src.startsWith('/') ? src.substring(1) : `/${src}`,
            // تجربة مع عنوان URL مطلق
            `${window.location.origin}${src.startsWith('/') ? '' : '/'}${src}`,
            // تجربة مع بادئة _next
            src.includes('/_next/') ? src.replace('/_next/', '/') : null,
            // تجربة المصدر الأصلي إذا كان مختلفًا
            imgElement.getAttribute('data-original-src') !== src ? imgElement.getAttribute('data-original-src') : null,
            // تجربة مع مسار الصور
            `/images/${src.split('/').pop()?.split('?')[0]}`,
            // استخدام الصورة الاحتياطية
            fallbackSrc,
            // استخدام الصورة الاحتياطية SVG
            getFallbackSrc(imageType, 'svg')
          ].filter(Boolean); // إزالة القيم الفارغة
          
          // تجربة كل اختلاف
          let currentIndex = 0;
          
          const tryNextVariation = () => {
            if (currentIndex >= variations.length) {
              // إذا فشلت جميع الاختلافات، استخدم الاحتياطي
              imgElement.setAttribute('src', getFallbackSrc('default', 'svg'));
              imgElement.setAttribute('data-vercel-fixed', 'fallback');
              return;
            }
            
            const variation = variations[currentIndex++];
            if (variation) {
              console.log(`Trying variation ${currentIndex}: ${variation}`);
              imgElement.setAttribute('src', variation);
              imgElement.setAttribute('data-vercel-fixed', 'true');
            } else {
              tryNextVariation();
            }
          };
          
          // إعداد معالج الأخطاء للاختلاف التالي
          imgElement.onerror = tryNextVariation;
          
          // تجربة الاختلاف الأول
          tryNextVariation();
        };
        
        // للصور التي تم تحميلها بالفعل ولكنها معطلة
        if (imgElement.complete && imgElement.naturalWidth === 0) {
          // تشغيل معالج الأخطاء
          if (imgElement.onerror) {
            imgElement.onerror(new Event('error') as any);
          }
        }
      });
    };
    
    // تشغيل في البداية
    resolveImagePaths();
    
    // تشغيل بعد تحميل الصفحة
    window.addEventListener('load', resolveImagePaths);
    
    // إعداد مراقب التحولات لمراقبة الصور الجديدة
    const observer = new MutationObserver((mutations) => {
      let hasNewImages = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // عقدة عنصر
              const element = node as Element;
              if (element.tagName === 'IMG' || element.querySelectorAll('img').length > 0) {
                hasNewImages = true;
              }
            }
          });
        }
      });
      
      if (hasNewImages) {
        resolveImagePaths();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // تنظيف
    return () => {
      observer.disconnect();
      window.removeEventListener('load', resolveImagePaths);
    };
  }, []);

  // لا تعرض أي شيء مرئي
  return null;
};

export default ImageResolver; 