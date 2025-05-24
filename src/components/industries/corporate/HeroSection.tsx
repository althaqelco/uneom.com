/**
 * Corporate Uniforms Hero Section
 * 
 * Optimized for Core Web Vitals with proper image handling
 * Uses the OptimizedImage component for LCP improvements
 */

import React from 'react';
import { useRouter } from 'next/router';
import OptimizedImage from '@/components/images/OptimizedImage';

const HeroSection: React.FC = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const content = {
    en: {
      title: 'Corporate Uniforms',
      subtitle: 'Elevate your brand with professional corporate uniforms',
      description: 'UNEOM provides premium quality corporate uniforms designed for comfort, durability, and brand representation. Our corporate uniforms help establish a professional image and foster team unity.',
      cta: 'Request a Quote'
    },
    ar: {
      title: 'زي موحد للشركات',
      subtitle: 'ارتقِ بعلامتك التجارية مع الزي الموحد المهني للشركات',
      description: 'توفر يونيوم زي موحد للشركات عالي الجودة مصمم للراحة والمتانة وتمثيل العلامة التجارية. يساعد الزي الموحد للشركات في تأسيس صورة احترافية وتعزيز وحدة الفريق.',
      cta: 'اطلب عرض سعر'
    }
  };
  
  const t = content[isArabic ? 'ar' : 'en'];
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className={`md:w-1/2 ${textAlign}`} dir={textDir}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 mb-6">
            {t.subtitle}
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {t.description}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            {t.cta}
          </button>
        </div>
        
        <div className="md:w-1/2 mt-10 md:mt-0">
          {/* Using OptimizedImage component for better Core Web Vitals */}
          <OptimizedImage
            src={`/images/industries/corporate/hero-banner-${isArabic ? 'ar' : 'en'}.jpg`}
            alt={isArabic ? 'زي موحد احترافي للشركات في المملكة العربية السعودية' : 'Professional corporate uniforms in Saudi Arabia'}
            width={800}
            height={600}
            priority={true} // This is an LCP element
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
