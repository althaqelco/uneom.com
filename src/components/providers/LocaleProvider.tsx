'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { DEFAULT_LANGUAGE, getLanguageFromPath, isRTL, LANGUAGES } from '@/lib/i18n/config';

// Define the types for our context
interface LocaleContextType {
  locale: string;
  isRTL: boolean;
  dir: 'rtl' | 'ltr';
}

// Create the context with a default value
const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LANGUAGE,
  isRTL: false,
  dir: 'ltr',
});

// Create a custom hook to use our locale context
export const useLocale = () => useContext(LocaleContext);

// Define props for the provider component
interface LocaleProviderProps {
  children: ReactNode;
  initialLocale?: string;
}

/**
 * LocaleProvider component
 * Provides language and direction context to the app
 * Optimized to prevent hydration issues
 */
export default function LocaleProvider({ 
  children, 
  initialLocale = DEFAULT_LANGUAGE
}: LocaleProviderProps) {
  const pathname = usePathname();
  // تعيين اللغة من المسار
  // للتجنب مشاكل hydration، نستخدم اللغة الافتراضية في الرندر الأولي وليس اللغة المكتشفة
  const [locale, setLocale] = useState(initialLocale);
  const [isMounted, setIsMounted] = useState(false);
  
  // تحديث اللغة على جانب العميل فقط
  useEffect(() => {
    setIsMounted(true);
    const detectedLocale = getLanguageFromPath(pathname);
    setLocale(detectedLocale);
  }, [pathname]);
  
  // احسب RTL بناءً على اللغة
  const rtl = isRTL(locale);
  
  // إنشاء قيمة Context
  const contextValue: LocaleContextType = {
    locale: isMounted ? locale : initialLocale,
    isRTL: rtl,
    dir: rtl ? 'rtl' : 'ltr',
  };
  
  // استخدام نمط شامل لتجنب مشاكل hydration
  return (
    <LocaleContext.Provider value={contextValue}>
      <div dir={contextValue.dir} lang={locale}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
} 