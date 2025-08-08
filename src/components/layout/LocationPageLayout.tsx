"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArabicHeader from './ArabicHeader';
import ArabicFooter from './ArabicFooter';
import dynamic from 'next/dynamic';
import VercelImageFixer from '../ui/VercelImageFixer';

// Dynamically import FloatingWhatsApp with no SSR
const FloatingWhatsApp = dynamic(() => import('../ui/FloatingWhatsApp'), {
  ssr: false});

interface LocationPageLayoutProps {
  children: React.ReactNode;
  locale: string;
}

const LocationPageLayout: React.FC<LocationPageLayoutProps> = ({ children, locale }) => {
  const isRTL = locale === 'ar';
  
  return (
    <div className={`min-h-screen flex flex-col`} dir={isRTL ? 'rtl' : 'ltr'}>
      <VercelImageFixer />
      {isRTL ? <ArabicHeader /> : <Header locale={locale} />}
      <main className="flex-grow">
        {children}
      </main>
      {isRTL ? <ArabicFooter /> : <Footer locale={locale} />}
      <FloatingWhatsApp 
        phoneNumber="971558164922" 
        locale={locale as 'en' | 'ar'} 
        position={isRTL ? 'left' : 'right'}
      />
    </div>
  );
};

export default LocationPageLayout; 