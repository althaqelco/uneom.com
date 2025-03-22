"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaVideo } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface FloatingIconsProps {
  className?: string;
}

const FloatingIcons: React.FC<FloatingIconsProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  
  // Control visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const baseButtonClasses = `
    flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110
    transition-all duration-300 z-50 border-2
  `;
  
  const getWhatsAppUrl = () => {
    return `https://wa.me/971558164922?text=${encodeURIComponent(
      isArabic 
        ? 'مرحباً، أود الاستفسار عن منتجاتكم وخدماتكم.'
        : 'Hello, I would like to inquire about your products and services.'
    )}`;
  };
  
  const getVideoUrl = () => {
    return isArabic 
      ? "/ar?openVideo=true" 
      : "/?openVideo=true";
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={`fixed bottom-6 ${isArabic ? 'left-6' : 'right-6'} flex ${isArabic ? 'flex-row-reverse' : 'flex-row'} gap-4 items-center ${className}`}
      style={{ zIndex: 999 }}
    >
      {/* Video Icon */}
      <Link 
        href={getVideoUrl()}
        className={`${baseButtonClasses} bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 border-white/30 text-white`}
        aria-label={isArabic ? "شاهد الفيديو التعريفي" : "Watch Intro Video"}
      >
        <div className="relative">
          {/* Pulse animation */}
          <span 
            className="absolute inset-0 rounded-full animate-ping opacity-70"
            style={{ 
              background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)',
              animationDuration: '1.5s'
            }}
          ></span>
          <FaVideo className="w-6 h-6 z-10 relative" />
        </div>
      </Link>
      
      {/* WhatsApp Icon */}
      <a 
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseButtonClasses} bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-white/30 text-white`}
        aria-label={isArabic ? "تواصل معنا عبر واتساب" : "Contact us via WhatsApp"}
      >
        <div className="relative">
          {/* Pulse animation */}
          <span 
            className="absolute inset-0 rounded-full animate-ping opacity-70"
            style={{ 
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              animationDuration: '1.5s'
            }}
          ></span>
          <FaWhatsapp className="w-6 h-6 z-10 relative" />
        </div>
      </a>
    </div>
  );
};

export default FloatingIcons; 