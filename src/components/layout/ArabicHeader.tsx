"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Logo from '../ui/Logo';
import { FaQuoteRight } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const ArabicHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const locale = 'ar'; // Always Arabic for this component
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine if we're on the homepage
  const isHomePage = pathname === '/ar' || pathname === '/ar/';

  // Determine header styles based on scroll position and current page
  const headerClasses = `fixed w-full transition-all duration-300 z-50 ${
    isMounted && scrolled
      ? 'bg-white shadow-md py-2'
      : isHomePage
        ? 'bg-transparent backdrop-blur-sm bg-white/40 py-3'
        : 'bg-white shadow-md py-3'
  }`;
  
  return (
    <header className={headerClasses} dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center flex-row">
            <Logo locale={locale} className="h-10 w-auto" width={160} height={45} />
            {/* Navigation - desktop only */}
            <div className="hidden lg:block mr-8">
              <Navigation locale={locale} />
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex items-center">
            {/* Buttons for desktop */}
            <div className="hidden lg:flex items-center space-x-reverse space-x-6">
              <Link
                href="/ar/quote"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 shadow-sm hover:shadow-md flex items-center flex-row-reverse"
              >
                <FaQuoteRight className="ml-2 h-4 w-4" />
                طلب عرض سعر
              </Link>
              <LanguageSwitcher currentLocale={locale} />
            </div>
            
            {/* Mobile menu button - mobile only */}
            <div className="lg:hidden flex items-center">
              <LanguageSwitcher 
                currentLocale={locale} 
                className="mr-3" 
              />
              <button
                className="p-2 text-neutral-700 hover:text-primary-600"
                onClick={toggleMobileMenu}
                aria-label="فتح القائمة"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - shown only on mobile when toggled */}
      {isMounted && isMobileMenuOpen && (
        <MobileMenu locale={locale} onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default ArabicHeader; 