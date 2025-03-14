'use client';

import React, { useEffect } from 'react';

// قائمة الصور الأساسية التي يجب تحميلها مسبقًا
const CRITICAL_IMAGES = [
  '/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg',
  '/images/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg',
  '/images/back-to-elementary-school-concept-children-hold-h-2024-11-29-15-57-59-utc.jpg',
  '/images/joyful-stewardesses-standing-near-aircraft-at-airp-2023-11-27-04-49-34-utc.jpg',
  '/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg',
  '/images/uneom_hero.jpg',
  '/images/default-placeholder.jpg'
];

/**
 * مكون تحميل الصور المسبق
 * يساعد على تحسين أداء الموقع عن طريق تحميل الصور الأساسية مسبقًا
 */
const ImagePreloader: React.FC = () => {
  useEffect(() => {
    // التحقق مما إذا كان التطبيق يعمل على Vercel
    const isVercel = typeof window !== 'undefined' && 
      (window.location.hostname.includes('vercel.app') || 
       window.location.hostname === 'uneom.com' ||
       window.location.hostname.endsWith('.uneom.com'));
    
    // إزالة أي preload links موجودة (لتجنب التكرار)
    document.querySelectorAll('link[rel="preload"][as="image"]').forEach(el => {
      el.remove();
    });
    
    // تحميل الصور المهمة مسبقًا
    CRITICAL_IMAGES.forEach(imagePath => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = isVercel ? `https://uneom-com.vercel.app${imagePath}` : imagePath;
      link.as = 'image';
      document.head.appendChild(link);
      
      // إنشاء صورة وتحميلها في الذاكرة
      const img = new Image();
      img.src = isVercel ? `https://uneom-com.vercel.app${imagePath}` : imagePath;
      
      // معالجة الخطأ وإعادة المحاولة
      img.onerror = () => {
        console.warn(`Failed to preload image: ${imagePath}`);
        // محاولة مرة أخرى بمسار مختلف
        setTimeout(() => {
          img.src = imagePath.startsWith('/') 
            ? imagePath.substring(1) // إزالة السلاش الأمامي
            : `/${imagePath}`; // إضافة سلاش أمامي
        }, 500);
      };
    });
    
    // إضافة معالجة للصور المعطوبة
    const style = document.createElement('style');
    style.textContent = `
      /* تحسين عرض الصور */
      img.loading, img.lazy, img[loading="lazy"] {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      
      img.loaded {
        opacity: 1;
      }
      
      /* استخدام صورة بديلة للصور المعطوبة */
      img:not([src]),
      img[src=""],
      img[src="#"],
      img:not([src]).broken,
      img[src].broken,
      img.error {
        content: url('${isVercel ? 'https://uneom-com.vercel.app' : ''}/images/default-placeholder.jpg');
      }
    `;
    document.head.appendChild(style);
    
    // تطبيق معالجة أخطاء الصور
    setTimeout(() => {
      document.querySelectorAll('img').forEach(img => {
        // للصور التي لم تحمل بشكل صحيح
        if ((img.complete && img.naturalWidth === 0) || !img.src || img.src === '') {
          // محاولة إعادة تحميل الصورة
          const originalSrc = img.getAttribute('data-src') || img.getAttribute('data-original') || '';
          const currentSrc = img.src || '';
          
          if (originalSrc && originalSrc !== currentSrc) {
            img.src = isVercel ? `https://uneom-com.vercel.app${originalSrc}` : originalSrc;
          } else if (currentSrc && !currentSrc.includes('data:image')) {
            // إعادة تحميل من البداية
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            setTimeout(() => {
              img.src = isVercel ? `https://uneom-com.vercel.app${currentSrc}` : currentSrc;
            }, 10);
          }
        }
        
        // إضافة معالج لحدث onload
        img.addEventListener('load', () => {
          img.classList.add('loaded');
          img.classList.remove('error', 'broken');
        });
        
        // إضافة معالج للأخطاء
        img.addEventListener('error', () => {
          img.classList.add('error');
          // محاولة التحميل مع URL بديل
          if (!img.classList.contains('fallback-applied')) {
            img.classList.add('fallback-applied');
            const src = img.src;
            img.src = isVercel 
              ? `https://uneom-com.vercel.app/images/default-placeholder.jpg` 
              : '/images/default-placeholder.jpg';
            console.warn(`Image failed to load: ${src}, using fallback`);
          }
        });
      });
    }, 1500);
    
  }, []);
  
  // هذا المكون لا يعرض أي محتوى مرئي
  return null;
};

export default ImagePreloader; 