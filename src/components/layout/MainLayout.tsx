"use client";

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import VercelImageFixer from '../ui/VercelImageFixer';
import WhatsAppContact from '../ui/WhatsAppContact';

interface MainLayoutProps {
  children: React.ReactNode;
  locale?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, locale = 'en' }) => {
  const isRTL = locale === 'ar';
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/ar';
  
  // استخدام هيكل موحد لكلا الاتجاهين بدون تعليق التصيير
  return (
    <div className={`min-h-screen flex flex-col`} dir={isRTL ? 'rtl' : 'ltr'}>
      <VercelImageFixer />
      <Header locale={locale} />
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-24'}`}>
        {children}
      </main>
      <Footer locale={locale} />
      <WhatsAppContact locale={locale} />
    </div>
  );
};

export default MainLayout;