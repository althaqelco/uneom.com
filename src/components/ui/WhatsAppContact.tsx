'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WhatsAppContactProps {
  locale?: string;
}

const WhatsAppContact: React.FC<WhatsAppContactProps> = ({ locale = 'en' }) => {
  const isRTL = locale === 'ar';
  const phoneNumber = '+971558164922';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Text content based on locale
  const text = {
    cta: isRTL ? 'تواصل عبر واتساب' : 'Chat via WhatsApp',
    tooltip: isRTL ? 'تواصل مع السعودي موفينج عبر واتساب' : 'Contact Saudi Moving via WhatsApp',
    phone: phoneNumber
  };

  return (
    <div 
      className={`fixed ${isRTL ? 'left-4' : 'right-4'} bottom-4 z-50`}
      aria-label={text.tooltip}
    >
      <div className="relative group">
        {/* Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-center ${isExpanded ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl focus:outline-none`}
          aria-label={text.tooltip}
        >
          {/* WhatsApp Icon with Brand Green */}
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-9 h-9 fill-white">
              <path d="M87.694-.001c-48.38 0-87.694 39.313-87.694 87.695 0,16.901 4.829,32.69 13.171,46.067L-.001 175.553l42.466-13.498c12.93 7.604 27.909 11.978 43.856 12.043 48.069-.001 87.695-39.317 87.695-87.426S136.055-.001 87.694-.001zm0 160.569c-16.342 0-31.22-5.472-43.155-14.604l-30.16 9.566 9.79-29.069c-10.038-12.246-16.195-27.809-16.195-44.764 0-39.247 31.922-71.17 71.168-71.17 39.246 0 71.171 31.918 71.171 71.164.001 39.248-31.924 71.166-71.173 71.173z" />
              <path d="M131.789 105.598c-1.78-3.028-9.499-7.68-11.144-8.094-5.384-1.376-10.093-1.266-13.359 3.731-2.936 4.489-2.734 10.316-3.392 11.962-1.153 2.903-4.203 5.423-7.14 5.423-5.812 0-12.16-4.995-19.885-13.061-6.452-6.735-12.786-17.116-13.824-20.462-1.038-3.345 2.361-6.991 4.322-8.551 1.96-1.56 3.12-3.239 4.388-5.087 1.269-1.846 2.578-5.167 1.568-8.229-1.009-3.062-13.613-34.566-14.999-37.324-1.386-2.758-3.228-2.994-6.155-2.994-1.193 0-12.242 1.458-15.092 8.432-3.788 9.551 1.324 23.413 1.594 24.792 5.607 28.475 25.298 45.663 43.131 53.129 10.138 4.249 24.48 7.924 31.068 6.904 6.588-1.02 21.574-8.429 24.594-16.963 3.021-8.534-1.869-13.58-3.648-16.614z" />
            </svg>
            
            {/* Saudi Flag Indicator */}
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white overflow-hidden shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 28" className="w-full h-full">
                <rect width="42" height="28" fill="#006c35"/>
                <g fill="#fff">
                  <path d="M13,8.75h16v3.5H13v7h-3.5v-7H0v-3.5H9.5v-7H13Z"/>
                  <path d="M32.5,10.5c0-1.933-1.567-3.5-3.5-3.5a3.5,3.5,0,0,0,0,7C30.933,14,32.5,12.433,32.5,10.5Z"/>
                  <path d="M28.583,8.167c.35-.117.817.233.7.583l-.233.7c.35.117.35.583,0,.7l-.7.233c-.117.35-.583.35-.7,0l-.233-.7c-.35-.117-.233-.583.117-.7l.7-.233C27.883,7.817,28.233,8.05,28.583,8.167Z"/>
                </g>
              </svg>
            </div>
            
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
          </div>
        </button>
        
        {/* Expanded Contact Card */}
        <div 
          className={`${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-bottom-right transition-all duration-300 absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} bg-white rounded-lg shadow-xl p-4 w-64`}
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700"
            aria-label={isRTL ? "إغلاق" : "Close"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Card Content */}
          <div className="flex items-center space-x-3 mb-3">
            {/* Saudi Flag */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 28" className="w-full h-full">
                <rect width="42" height="28" fill="#006c35"/>
                <g fill="#fff">
                  <path d="M13,8.75h16v3.5H13v7h-3.5v-7H0v-3.5H9.5v-7H13Z"/>
                  <path d="M32.5,10.5c0-1.933-1.567-3.5-3.5-3.5a3.5,3.5,0,0,0,0,7C30.933,14,32.5,12.433,32.5,10.5Z"/>
                  <path d="M28.583,8.167c.35-.117.817.233.7.583l-.233.7c.35.117.35.583,0,.7l-.7.233c-.117.35-.583.35-.7,0l-.233-.7c-.35-.117-.233-.583.117-.7l.7-.233C27.883,7.817,28.233,8.05,28.583,8.167Z"/>
                </g>
              </svg>
            </div>
            
            <div className={`flex-grow ${isRTL ? 'text-right mr-3' : 'text-left'}`}>
              <h3 className="font-bold text-neutral-800">Saudi Moving</h3>
              <p className="text-sm text-neutral-600">{text.phone}</p>
            </div>
          </div>
          
          <p className={`text-sm text-neutral-600 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {isRTL ? 'تواصل معنا الآن للاستفسار أو طلب خدمة' : 'Contact us now for inquiries or service requests'}
          </p>
          
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] hover:bg-[#1ea952] text-white font-medium py-3 px-4 rounded-md text-center transition-colors duration-200"
          >
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              {text.cta}
            </div>
          </Link>
        </div>
        
        {/* Mobile-only touchable overlay when expanded */}
        {isExpanded && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[-1]"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </div>
    </div>
  );
};

export default WhatsAppContact;