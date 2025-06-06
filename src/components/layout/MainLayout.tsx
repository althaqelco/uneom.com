"use client";

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ArabicHeader from './ArabicHeader';
import ArabicFooter from './ArabicFooter';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import VercelImageFixer from '../ui/VercelImageFixer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

interface MainLayoutProps {
  children: React.ReactNode;
  locale?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  locale = 'en',
  hideHeader = false,
  hideFooter = false
}) => {
  const pathname = usePathname();
  const isArabicPage = pathname?.startsWith('/ar');
  const isRTL = isArabicPage || locale === 'ar';
  
  // تحديد ما إذا كنا في الصفحة الرئيسية (الإنجليزية أو العربية)
  const isHomePage = pathname === '/' || pathname === '/ar' || pathname === '/ar/';
  
  return (
    <div className={`min-h-screen flex flex-col`} dir={isRTL ? 'rtl' : 'ltr'}>
      <VercelImageFixer />
      {/* Show the appropriate header based on locale only if not hidden */}
      {!hideHeader && (isArabicPage ? <ArabicHeader /> : <Header locale={locale} />)}
      
      {/* اضبط المساحة العلوية بناءً على ما إذا كنا في الصفحة الرئيسية وما إذا كان الهيدر مخفيًا */}
      <main className={`flex-grow ${isHomePage && !hideHeader ? 'pt-0' : 'pt-0'}`}>
        {children}
      </main>
      
      {/* Show the appropriate footer based on locale only if not hidden */}
      {!hideFooter && (isArabicPage ? <ArabicFooter /> : <Footer locale={locale} />)}
      <FloatingWhatsApp 
        phoneNumber="971558164922" 
        locale={locale as 'en' | 'ar'} 
        position={isRTL ? 'left' : 'right'}
      />
    </div>
  );
};

export default MainLayout; 