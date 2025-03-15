"use client";

import React, { useEffect } from 'react';
import VercelSafeImage from './ui/VercelSafeImage';

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
    
    // إضافة فئة إلى الجسم للتعرف على بيئة Vercel في CSS
    if (isVercel) {
      document.body.classList.add('vercel-deployment');
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
      });
    };
    
    // تحميل الصور الاحتياطية مسبقًا
    preloadFallbackImages();

    // وظيفة لحل مسارات الصور
    const resolveImagePaths = () => {
      const images = document.querySelectorAll('img:not([data-resolved="true"])');
      
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        const src = imgElement.getAttribute('src') || '';
        
        // تخطي عناوين URL للبيانات والصور التي تم حلها بالفعل
        if (src.startsWith('data:') || imgElement.hasAttribute('data-resolved')) {
          return;
        }
        
        // وضع علامة كمحلول
        imgElement.setAttribute('data-resolved', 'true');
        
        // تخزين المصدر الأصلي
        if (!imgElement.hasAttribute('data-original-src')) {
          imgElement.setAttribute('data-original-src', src);
        }
        
        // إضافة معالج أخطاء
        imgElement.onerror = () => {
          const originalSrc = imgElement.getAttribute('data-original-src') || '';
          
          // تجربة اختلافات المسار المختلفة
          const variations = [
            // تجربة مع وبدون شرطة مائلة أمامية
            src.startsWith('/') ? src.substring(1) : `/${src}`,
            // تجربة مع عنوان URL مطلق
            `${window.location.origin}${src.startsWith('/') ? '' : '/'}${src}`,
            // تجربة مع بادئة _next
            `/_next/static/images/${src.split('/').pop()}`,
            // تجربة المصدر الأصلي إذا كان مختلفًا
            originalSrc !== src ? originalSrc : '',
            // تحديد نوع الصورة الاحتياطية المناسبة
            src.includes('product') || src.includes('item') 
              ? '/images/product-placeholder.jpg' 
              : src.includes('avatar') || src.includes('profile') || src.includes('user')
                ? '/images/avatar-placeholder.jpg'
                : src.includes('banner') || src.includes('hero') || src.includes('cover')
                  ? '/images/banner-placeholder.jpg'
                  : '/images/default-placeholder.jpg'
          ].filter(Boolean); // إزالة السلاسل الفارغة
          
          // تجربة كل اختلاف
          let currentIndex = 0;
          
          const tryNextVariation = () => {
            if (currentIndex >= variations.length) {
              // إذا فشلت جميع الاختلافات، استخدم الاحتياطي
              imgElement.setAttribute('src', '/images/default-placeholder.jpg');
              imgElement.setAttribute('data-vercel-fixed', 'fallback');
              return;
            }
            
            const variation = variations[currentIndex++];
            imgElement.setAttribute('src', variation);
            imgElement.setAttribute('data-vercel-fixed', 'true');
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