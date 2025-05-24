"use client";

import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  position?: 'left' | 'right';
  locale?: 'en' | 'ar';
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber,
  message = '',
  position = 'right',
  locale = 'en',
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const isRTL = locale === 'ar';
  
  // Only render on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Don't render anything on the server
  if (!isMounted) {
    return null;
  }
  
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  
  const positionClass = position === 'left' || isRTL ? 'left-6' : 'right-6';
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${positionClass} z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
      style={{ 
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
      }}
      aria-label={locale === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
    >
      {/* Pulse Effect */}
      <span 
        className="absolute inset-0 rounded-full animate-ping opacity-70" 
        style={{ 
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          animationDuration: '1.5s'
        }}
      ></span>
      
      {/* Icon */}
      <FaWhatsapp className="relative z-10 text-white w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp; 