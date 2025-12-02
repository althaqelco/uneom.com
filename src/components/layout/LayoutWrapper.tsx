"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ArabicHeader from './ArabicHeader';
import ArabicFooter from './ArabicFooter';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

/**
 * LayoutWrapper Component
 * Handles Header and Footer rendering based on the current route locale
 * This prevents hydration errors by handling everything in a single client component
 * Also updates the HTML element's lang and dir attributes dynamically
 */
const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  
  // Update HTML attributes based on locale
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (isArabic) {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
      } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
      }
    }
  }, [isArabic]);
  
  return (
    <div className={`min-h-screen flex flex-col`} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header based on locale */}
      {isArabic ? <ArabicHeader /> : <Header locale="en" />}
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer based on locale */}
      {isArabic ? <ArabicFooter /> : <Footer locale="en" />}
      
      {/* WhatsApp floating button */}
      <FloatingWhatsApp 
        phoneNumber="971558164922" 
        locale={isArabic ? 'ar' : 'en'} 
        position={isArabic ? 'left' : 'right'}
      />
    </div>
  );
};

export default LayoutWrapper;

