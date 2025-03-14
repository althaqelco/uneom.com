'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { vercelImageLoader, isVercelEnvironment } from '@/lib/utils/vercelImageLoader';
import EmergencyImageLoader from './EmergencyImageLoader';

// واجهة خصائص مكون VercelImage
interface VercelImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  disableVercelOptimization?: boolean;
  enableEmergencyMode?: boolean;
}

/**
 * مكون VercelImage
 * 
 * مكون صورة متوافق مع Vercel بشكل كامل، يتعامل مع مشاكل تحميل الصور
 * ويوفر آليات احتياطية متعددة لضمان ظهور الصور بشكل صحيح
 */
const VercelImage: React.FC<VercelImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc = '/images/default-placeholder.jpg',
  disableVercelOptimization = false,
  enableEmergencyMode = false,
  ...props
}) => {
  // حالة تتبع أخطاء تحميل الصورة
  const [loadError, setLoadError] = useState<boolean>(false);
  // حالة تتبع عدد محاولات إعادة التحميل
  const [retryCount, setRetryCount] = useState<number>(0);
  // حالة تتبع ما إذا كنا في وضع الطوارئ
  const [isEmergencyMode, setIsEmergencyMode] = useState<boolean>(enableEmergencyMode);
  // حالة تتبع مسار الصورة الحالي
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  
  // التحقق مما إذا كنا في بيئة Vercel
  const isVercel = isVercelEnvironment();
  
  // إعادة تعيين الحالة عند تغيير مصدر الصورة
  useEffect(() => {
    setCurrentSrc(src);
    setLoadError(false);
    setRetryCount(0);
  }, [src]);
  
  // معالج أخطاء تحميل الصورة
  const handleImageError = () => {
    // زيادة عداد المحاولات
    const newRetryCount = retryCount + 1;
    setRetryCount(newRetryCount);
    
    // إذا وصلنا إلى الحد الأقصى من المحاولات، انتقل إلى وضع الطوارئ
    if (newRetryCount >= 3) {
      setIsEmergencyMode(true);
      setLoadError(true);
      return;
    }
    
    // محاولة استراتيجيات مختلفة بناءً على عدد المحاولات
    let newSrc = src;
    
    if (newRetryCount === 1) {
      // المحاولة الأولى: إضافة أو إزالة السلاش الأمامي
      newSrc = src.startsWith('/') ? src.substring(1) : `/${src}`;
    } else if (newRetryCount === 2) {
      // المحاولة الثانية: استخدام المسار المطلق على Vercel
      newSrc = isVercel 
        ? `https://uneom-com.vercel.app${src.startsWith('/') ? '' : '/'}${src}` 
        : fallbackSrc;
    } else {
      // المحاولة الثالثة: استخدام الصورة الاحتياطية
      newSrc = fallbackSrc;
    }
    
    // تحديث مسار الصورة
    setCurrentSrc(newSrc);
  };
  
  // إذا كنا في وضع الطوارئ، استخدم محمل الصور في حالات الطوارئ
  if (isEmergencyMode) {
    return (
      <EmergencyImageLoader
        src={currentSrc}
        alt={alt as string}
        className={className}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
      />
    );
  }
  
  // إذا كنا في بيئة Vercel وتم تعطيل تحسين الصور، استخدم علامة img العادية
  if (isVercel && disableVercelOptimization) {
    // استخدام محمل الصور المخصص لـ Vercel
    const optimizedSrc = vercelImageLoader({
      src: currentSrc,
      width: typeof width === 'number' ? width : undefined,
      isVercel
    });
    
    return (
      <img
        src={optimizedSrc}
        alt={alt as string}
        width={width}
        height={height}
        className={`vercel-optimized-image ${className}`}
        onError={handleImageError}
        loading="eager"
        decoding="async"
        {...props}
      />
    );
  }
  
  // في الحالات العادية، استخدم مكون Image من Next.js
  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={`next-image-wrapper ${className}`}
      onError={handleImageError}
      loading="eager"
      priority={true}
      {...props}
    />
  );
};

export default VercelImage; 