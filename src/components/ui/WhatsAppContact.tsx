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
    tooltip: isRTL ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp',
    phone: phoneNumber
  };

  return (
    <div 
      className={`fixed ${isRTL ? 'left-4' : 'right-4'} bottom-4 z-50`}
      aria-label={text.tooltip}
    >
      <div className="relative group">
        {/* Tooltip that appears on hover - new */}
        <div className={`absolute ${isRTL ? 'left-full mr-3' : 'right-full ml-3'} bottom-2 scale-0 group-hover:scale-100 transition-transform duration-200 origin-right`}>
          <div className="bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-lg text-sm whitespace-nowrap">
            {text.tooltip}
            <div className={`absolute border-8 border-transparent ${isRTL ? 'border-l-0 -right-4 border-l-white' : 'border-r-0 -left-4 border-r-white'} top-1/2 -translate-y-1/2`}></div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-center ${isExpanded ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} transition-all duration-300 w-10 h-10 rounded-full shadow-xl hover:shadow-2xl focus:outline-none overflow-hidden transform hover:scale-110 active:scale-95`}
          aria-label={text.tooltip}
          style={{ 
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)'
          }}
        >
          {/* WhatsApp Icon Container */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Animated Pulse Rings */}
            <div className="absolute inset-0 z-0">
              <span className="absolute inset-0 rounded-full animate-ping opacity-80" 
                    style={{ 
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      animationDuration: '1.5s'
                    }}></span>
            </div>
            
            <div className="absolute inset-0 z-0">
              <span className="absolute inset-1 rounded-full animate-ping opacity-60" 
                    style={{ 
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      animationDuration: '2.2s',
                      animationDelay: '0.4s'
                    }}></span>
            </div>
            
            {/* Active Glow Effect - Changed from white to blue */}
            <div className="absolute inset-1 rounded-full bg-red-500 opacity-20 z-0 animate-pulse"
                 style={{ animationDuration: '1.2s' }}></div>
            
            {/* Icon Container with Rotation - Reduced size */}
            <div className="relative z-10 group-hover:rotate-12 transform transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white drop-shadow-lg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </div>
        </button>
        
        {/* Expanded Contact Card */}
        <div 
          className={`${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} origin-bottom-right transition-all duration-300 absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} bg-white rounded-lg shadow-xl p-4 w-72`}
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700 transform transition-transform hover:rotate-90 duration-300"
            aria-label={isRTL ? "إغلاق" : "Close"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Card Content */}
          <div className={`flex items-center mb-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* WhatsApp Icon */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-3 shadow-md" 
                 style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}>
              <div className="flex items-center justify-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </div>
            
            <div className={`flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="font-bold text-neutral-800">{isRTL ? 'تواصل معنا' : 'Contact Us'}</h3>
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
            className="block w-full text-white font-medium py-3 px-4 rounded-md text-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
          >
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} animate-bounce`}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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