"use client";

import React from 'react';
import Image from 'next/image';
import { getLocalizedImagePath } from '@/lib/utils/imageLoader';

export interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  logo?: string;
  locale?: string;
}

/**
 * TestimonialCard component for displaying client testimonials
 */
const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  quote,
  image,
  logo,
  locale = 'en'}) => {
  const rtl = locale === 'ar';
  const localizedImage = getLocalizedImagePath(image, locale as 'en' | 'ar');
  const localizedLogo = logo ? getLocalizedImagePath(logo, locale as 'en' | 'ar') : null;
  
  return (
    <div
      className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md p-6 h-full flex flex-col"
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <div className="mb-6">
        <svg
          className={`h-8 w-8 text-primary-400 mb-4 ${rtl ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className={`text-neutral-700 italic relative z-10 ${rtl ? 'text-right' : ''}`}>{quote}</p>
      </div>
      
      <div className="mt-auto flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={localizedImage}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className={`${rtl ? 'mr-4' : 'ml-4'}`}>
          <h4 className="font-bold text-neutral-900">{name}</h4>
          <p className="text-sm text-neutral-500">
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
        
        {localizedLogo && (
          <div className={`${rtl ? 'mr-auto' : 'ml-auto'} flex-shrink-0`}>
            <div className="relative h-8 w-auto">
              <Image
                src={localizedLogo}
                alt={company}
                width={100}
                height={32}
                className="object-contain h-8"
                style={{ maxWidth: '100px' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard; 