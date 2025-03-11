"use client";

import React, { useState, useEffect } from 'react';
import { HiTranslate } from 'react-icons/hi';
import { CgSpinner } from 'react-icons/cg';
import { LANGUAGES } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  className?: string;
  currentLocale: string;
}

/**
 * Component for switching between languages
 * Optimized to prevent hydration issues
 */
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  currentLocale,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // تأكد من أن المكون يُعرض فقط على جانب العميل لمنع مشاكل hydration
  useEffect(() => {
    setIsMounted(true);
    
    // إزالة أي مؤشرات تحميل عالقة
    if (typeof document !== 'undefined') {
      if (document.documentElement.classList.contains('language-transition')) {
        document.documentElement.classList.remove('language-transition');
      }
    }
    
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('isLanguageSwitch');
      }
    } catch (e) {}
  }, []);
  
  // Get the language we'll switch to (opposite of current)
  const alternateLanguage = currentLocale === LANGUAGES.AR ? LANGUAGES.EN : LANGUAGES.AR;
  
  // Get the display name for the alternate language
  const alternateLanguageLabel = currentLocale === LANGUAGES.AR ? 'English' : 'العربية';
  
  const handleLanguageChange = () => {
    if (!isMounted || isLoading) return;
    
    setIsLoading(true);
    
    // بناء المسار الجديد
    let newPath = '';
    
    try {
      const pathname = window.location.pathname;
      const search = window.location.search;
      
      if (currentLocale === LANGUAGES.AR) {
        // من العربية إلى الإنجليزية
        newPath = pathname.replace(/^\/ar/, '');
        if (newPath === '') newPath = '/';
      } else {
        // من الإنجليزية إلى العربية
        newPath = `/ar${pathname}`;
      }
      
      if (search) {
        newPath += search;
      }
      
      // تعيين علامة انتقال اللغة
      sessionStorage.setItem('isLanguageSwitch', 'true');
      
      // إضافة مؤشر التحميل
      document.documentElement.classList.add('language-transition');
      
      // التنقل إلى المسار الجديد
      window.location.href = newPath;
    } catch (e) {
      // في حالة الخطأ، إعادة تعيين الحالة
      setIsLoading(false);
      console.error('Error during language switch:', e);
    }
  };
  
  // عدم عرض المكون على الخادم أو أثناء التحميل الأولي
  if (!isMounted) {
    return <span className={className}></span>;
  }
  
  return (
    <button
      onClick={handleLanguageChange}
      disabled={isLoading}
      className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md border border-neutral-200 hover:bg-neutral-50 transition-colors duration-300 ${isLoading ? 'opacity-70 cursor-wait' : ''} ${className}`}
      aria-label={`Switch to ${alternateLanguageLabel}`}
    >
      {isLoading ? (
        <CgSpinner className={`h-4 w-4 ${currentLocale === LANGUAGES.AR ? 'ml-1.5' : 'mr-1.5'} animate-spin`} />
      ) : (
        <HiTranslate className={`h-4 w-4 ${currentLocale === LANGUAGES.AR ? 'ml-1.5' : 'mr-1.5'}`} />
      )}
      <span>{alternateLanguageLabel}</span>
    </button>
  );
};

export default LanguageSwitcher; 