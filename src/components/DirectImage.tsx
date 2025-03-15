"use client";

import React, { useState, useEffect, useRef } from 'react';

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
  const imgRef = useRef<HTMLImageElement>(null);
  
  // تحميل الصور الاحتياطية مسبقًا عند تحميل المكون
  useEffect(() => {
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
    
    preloadFallbackImages();
  }, []);
  
  useEffect(() => {
    // تحديد ما إذا كنا في بيئة Vercel
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const isVercelEnv = 
        hostname.includes('vercel.app') || 
        hostname === 'uneom.com' || 
        hostname.endsWith('.uneom.com');
      
      setIsVercel(isVercelEnv);
      
      // إضافة فئة إلى الجسم للتعرف على بيئة Vercel في CSS
      if (isVercelEnv) {
        document.body.classList.add('vercel-deployment');
      }
    }
  }, []);
  
  // إعادة تعيين الحالة عند تغيير مصدر الصورة
  useEffect(() => {
    setCurrentSrc(src);
    setAttempts(0);
    setLoaded(false);
    setError(false);
  }, [src]);
  
  // تحديد نوع الصورة بناءً على المسار أو الفئة
  const getImageType = () => {
    const srcString = typeof src === 'string' ? src.toLowerCase() : '';
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
  
  // معالجة خطأ تحميل الصورة
  const handleError = () => {
    if (attempts >= 5) {
      // بعد 5 محاولات، استخدم الصورة الاحتياطية
      console.error(`Failed to load image after 5 attempts: ${src}`);
      
      // تحديد نوع الصورة الاحتياطية المناسبة
      const imageType = getImageType();
      const fallbackSrc = getFallbackSrc(imageType);
      
      // تعيين الصورة الاحتياطية
      setCurrentSrc(fallbackSrc);
      
      // إذا فشلت الصورة الاحتياطية JPEG، استخدم SVG
      setTimeout(() => {
        if (imgRef.current && imgRef.current.naturalWidth === 0) {
          const svgFallback = getFallbackSrc(imageType, 'svg');
          console.log(`Trying SVG fallback: ${svgFallback}`);
          setCurrentSrc(svgFallback);
        }
      }, 300);
      
      setError(true);
      if (onError) onError();
      return;
    }
    
    const nextAttempt = attempts + 1;
    setAttempts(nextAttempt);
    console.warn(`Image load error (attempt ${nextAttempt}): ${src}`);
    
    // استراتيجيات مختلفة بناءً على رقم المحاولة
    switch (nextAttempt) {
      case 1:
        // محاولة 1: إضافة بادئة المضيف إذا كان المسار نسبيًا
        if (typeof window !== 'undefined' && !src.startsWith('http') && !src.startsWith('data:')) {
          const baseUrl = window.location.origin;
          const fixedSrc = src.startsWith('/') 
            ? `${baseUrl}${src}` 
            : `${baseUrl}/${src}`;
          console.log(`Trying with absolute URL: ${fixedSrc}`);
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
              const decodedUrl = decodeURIComponent(imgUrl);
              console.log(`Extracted URL from Next.js image: ${decodedUrl}`);
              setCurrentSrc(decodedUrl);
            }
          } catch (e) {
            console.error('خطأ في استخراج URL من صورة Next.js:', e);
            // محاولة بديلة: إزالة الشرطة المائلة الأمامية
            if (src.startsWith('/')) {
              console.log(`Trying without leading slash: ${src.substring(1)}`);
              setCurrentSrc(src.substring(1));
            }
          }
        } else if (src.startsWith('/')) {
          console.log(`Trying without leading slash: ${src.substring(1)}`);
          setCurrentSrc(src.substring(1));
        }
        break;
      
      case 3:
        // محاولة 3: تجربة مسار بديل (بدون _next)
        if (src.includes('/_next/')) {
          const altPath = src.replace('/_next/', '/');
          console.log(`Trying alternative path: ${altPath}`);
          setCurrentSrc(altPath);
        } else if (!src.startsWith('/')) {
          console.log(`Trying with leading slash: /${src}`);
          setCurrentSrc(`/${src}`);
        }
        break;
      
      case 4:
        // محاولة 4: تجربة مسار مباشر للصورة
        if (src.includes('/images/')) {
          const directPath = `/images/${src.split('/images/')[1].split('?')[0]}`;
          console.log(`Trying direct images path: ${directPath}`);
          setCurrentSrc(directPath);
        } else {
          // محاولة مع مسار الصور
          const filename = src.split('/').pop()?.split('?')[0];
          if (filename) {
            console.log(`Trying with direct images path: /images/${filename}`);
            setCurrentSrc(`/images/${filename}`);
          }
        }
        break;
      
      case 5:
        // محاولة 5: استخدام الصورة الاحتياطية
        const imageType = getImageType();
        const fallbackSrc = getFallbackSrc(imageType);
        console.log(`Using fallback image: ${fallbackSrc}`);
        setCurrentSrc(fallbackSrc);
        break;
      
      default:
        // استخدام الصورة الاحتياطية المضمنة
        setCurrentSrc('/images/default-placeholder.svg');
    }
  };
  
  // معالجة نجاح تحميل الصورة
  const handleLoad = () => {
    console.log(`Image loaded successfully: ${currentSrc}`);
    setLoaded(true);
    if (onLoad) onLoad();
  };
  
  // تحديد فئة CSS المناسبة بناءً على نوع الصورة
  const getImageClass = () => {
    const imageType = getImageType();
    return `${imageType}-image`;
  };
  
  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={`direct-image ${getImageClass()} ${error ? 'error' : ''} ${loaded ? 'loaded' : 'loading'} ${className}`}
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
      data-src={src}
      data-attempts={attempts}
      data-vercel-fixed={isVercel ? 'true' : undefined}
    />
  );
};

export default DirectImage; 