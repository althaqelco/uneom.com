"use client";

import React, { useState, useEffect } from 'react';

interface DirectImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * مكون DirectImage يستخدم علامة img الأساسية بدلاً من مكون Image من Next.js
 * مع إضافة معالجة أخطاء متقدمة ومحاولات متعددة لتحميل الصورة
 */
const DirectImage: React.FC<DirectImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  style = {},
  onLoad,
  onError,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [attempts, setAttempts] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isVercel, setIsVercel] = useState<boolean>(false);
  
  useEffect(() => {
    // تحديد ما إذا كنا في بيئة Vercel
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      setIsVercel(
        hostname.includes('vercel.app') || 
        hostname === 'uneom.com' || 
        hostname.endsWith('.uneom.com')
      );
    }
  }, []);
  
  // إعادة تعيين الحالة عند تغيير مصدر الصورة
  useEffect(() => {
    setCurrentSrc(src);
    setAttempts(0);
    setLoaded(false);
    setError(false);
  }, [src]);
  
  // Normalize image path for Vercel
  const normalizeImagePath = (imagePath: string): string => {
    // If it's already an absolute URL, return it as is
    if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
      return imagePath;
    }

    // For Vercel, ensure paths start with a slash
    if (isVercel && !imagePath.startsWith('/')) {
      return '/' + imagePath;
    }

    return imagePath;
  };
  
  // معالجة خطأ تحميل الصورة
  const handleError = () => {
    if (attempts >= 5) {
      // بعد 5 محاولات، استخدم الصورة الاحتياطية
      setCurrentSrc('/images/defaults/default-placeholder.jpg');
      setError(true);
      if (onError) onError();
      return;
    }
    
    const nextAttempt = attempts + 1;
    setAttempts(nextAttempt);
    
    // استراتيجيات مختلفة بناءً على رقم المحاولة
    switch (nextAttempt) {
      case 1:
        // محاولة 1: إضافة بادئة المضيف إذا كان المسار نسبيًا
        if (src && !src.startsWith('http') && !src.startsWith('data:') && typeof window !== 'undefined') {
          const baseUrl = window.location.origin;
          const fixedSrc = src.startsWith('/') 
            ? baseUrl + src 
            : baseUrl + '/' + src;
          setCurrentSrc(fixedSrc);
        }
        break;
      
      case 2:
        // محاولة 2: إزالة بادئة _next/image إذا كانت موجودة
        if (src.includes('/_next/image')) {
          try {
            const urlParams = new URLSearchParams(src.split('?')[1]);
            const imgUrl = urlParams.get('url');
            if (imgUrl) {
              setCurrentSrc(decodeURIComponent(imgUrl));
            }
          } catch (e) {
            console.error('خطأ في استخراج URL من صورة Next.js:', e);
          }
        } else if (src.startsWith('/')) {
          // Try without leading slash
          setCurrentSrc(src.substring(1));
        }
        break;
      
      case 3:
        // محاولة 3: تجربة مسار بديل (بدون _next)
        if (src.includes('/_next/')) {
          const altPath = src.replace('/_next/', '/');
          setCurrentSrc(altPath);
        } else if (!src.startsWith('/')) {
          // Try with leading slash
          setCurrentSrc('/' + src);
        }
        break;
      
      case 4:
        // محاولة 4: تجربة مسار مباشر للصورة
        if (src.includes('/images/')) {
          const directPath = `/images/${src.split('/images/')[1]}`;
          setCurrentSrc(directPath);
        } else {
          // Try with images path
          const filename = src.split('/').pop();
          if (filename) {
            setCurrentSrc(`/images/${filename}`);
          }
        }
        break;
      
      case 5:
        // محاولة 5: استخدام الصورة الاحتياطية
        setCurrentSrc('/images/defaults/default-placeholder.jpg');
        break;
      
      default:
        // استخدام الصورة الاحتياطية المضمنة
        if (typeof window !== 'undefined' && window.fallbackImageDataUrl) {
          setCurrentSrc(window.fallbackImageDataUrl);
        } else {
          setCurrentSrc('/images/default-placeholder.svg');
        }
    }
  };
  
  // معالجة نجاح تحميل الصورة
  const handleLoad = () => {
    setLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Normalize the initial src
  useEffect(() => {
    if (isVercel) {
      const normalizedSrc = normalizeImagePath(src);
      if (normalizedSrc !== currentSrc) {
        setCurrentSrc(normalizedSrc);
      }
    }
  }, [isVercel, src]);
  
  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={`direct-image ${error ? 'direct-image-error' : ''} ${loaded ? 'direct-image-loaded' : 'direct-image-loading'} ${className}`}
      style={{
        ...style,
        // إضافة أنماط للتأكد من عدم ظهور رمز الصورة المكسورة
        minHeight: '1px',
        minWidth: '1px',
      }}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
};

export default DirectImage; 