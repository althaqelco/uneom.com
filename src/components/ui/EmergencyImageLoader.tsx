'use client';

import React, { useState, useEffect } from 'react';

interface EmergencyImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * مكون تحميل الصور في حالات الطوارئ
 * يستخدم عند فشل تحميل الصور بالأساليب العادية
 */
const EmergencyImageLoader: React.FC<EmergencyImageLoaderProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // التحقق مما إذا كان التطبيق يعمل على Vercel
    const isVercel = typeof window !== 'undefined' && 
      (window.location.hostname.includes('vercel.app') || 
       window.location.hostname === 'uneom.com' ||
       window.location.hostname.endsWith('.uneom.com'));
    
    // تجربة تحميل الصورة بطرق مختلفة
    const attemptLoad = async () => {
      setLoading(true);
      setError(false);
      
      // قائمة المسارات المحتملة للصورة
      const possiblePaths = [
        src, // المسار الأصلي
        isVercel ? `https://uneom-com.vercel.app${src}` : src, // مسار Vercel
        src.startsWith('/') ? src.substring(1) : src, // بدون سلاش أمامي
        !src.startsWith('/') ? `/${src}` : src, // مع سلاش أمامي
        src.replace(/^(\/|)(images|public)\//, '/'), // إعادة تنظيم المسار
        `/images/${src.split('/').pop()}`, // فقط اسم الملف في مجلد الصور
        '/images/default-placeholder.jpg', // الصورة الاحتياطية
      ];
      
      // محاولة تحميل الصور بالترتيب
      for (const path of possiblePaths) {
        try {
          // تجربة تحميل الصورة
          const img = new Image();
          const loadPromise = new Promise<string>((resolve, reject) => {
            img.onload = () => resolve(path);
            img.onerror = () => reject(new Error(`Failed to load ${path}`));
            img.src = path;
          });
          
          // انتظار 2 ثانية كحد أقصى لتحميل الصورة
          const timeoutPromise = new Promise<never>((_, reject) => {
            setTimeout(() => reject(new Error('Timeout')), 2000);
          });
          
          // استخدام أول صورة تُحمَّل بنجاح
          const loadedPath = await Promise.race([loadPromise, timeoutPromise]);
          setImageSrc(loadedPath);
          setLoading(false);
          return; // الخروج من الدالة فور نجاح التحميل
        } catch (e) {
          console.warn(`Failed to load image from ${path}`, e);
          // استمرار للمسار التالي
        }
      }
      
      // إذا وصلنا إلى هنا، فشلت جميع المحاولات
      setError(true);
      setLoading(false);
      setImageSrc('/images/default-placeholder.jpg');
    };
    
    attemptLoad();
  }, [src]);
  
  // عرض حالة التحميل
  if (loading) {
    return (
      <div 
        className={`emergency-image-loader ${className} animate-pulse bg-gray-200 dark:bg-gray-700`}
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span className="sr-only">تحميل الصورة...</span>
        <svg className="w-8 h-8 text-gray-400 animate-spin" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  }
  
  // عرض الصورة أو الحالة البديلة
  return (
    <>
      {error ? (
        <div 
          className={`emergency-image-error ${className} bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : '200px' 
          }}
        >
          <div className="text-center p-4">
            <svg className="w-10 h-10 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{alt || 'تعذر تحميل الصورة'}</p>
          </div>
        </div>
      ) : (
        <img
          src={imageSrc || '/images/default-placeholder.jpg'}
          alt={alt}
          className={`emergency-loaded-image ${className}`}
          width={width}
          height={height}
          loading="eager"
          decoding="async"
          style={{ objectFit: 'contain' }}
          onError={(e) => {
            console.error('Image still failed to load:', e);
            setError(true);
            setImageSrc('/images/default-placeholder.jpg');
          }}
        />
      )}
    </>
  );
};

export default EmergencyImageLoader; 