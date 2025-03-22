"use client";

import React, { createContext, useContext, useEffect } from 'react';

interface ArabicLayoutContextType {
  isRTL: boolean;
}

const ArabicLayoutContext = createContext<ArabicLayoutContextType>({ isRTL: false });

export const useArabicLayout = () => useContext(ArabicLayoutContext);

interface ArabicLayoutProviderProps {
  children: React.ReactNode;
  locale: string;
}

export default function ArabicLayoutProvider({ children, locale }: ArabicLayoutProviderProps) {
  const isRTL = locale === 'ar';

  useEffect(() => {
    // Set direction attribute on document
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;

    // Add/remove RTL class for global styling hooks
    if (isRTL) {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }

    return () => {
      // Cleanup if needed
    };
  }, [isRTL, locale]);

  return (
    <ArabicLayoutContext.Provider value={{ isRTL }}>
      {children}
    </ArabicLayoutContext.Provider>
  );
} 