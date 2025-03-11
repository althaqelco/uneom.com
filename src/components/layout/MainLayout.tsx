"use client";

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

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
      <Header locale={locale} />
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-24'}`}>
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
};

export default MainLayout; 