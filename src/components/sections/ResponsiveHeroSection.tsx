/**
 * ResponsiveHeroSection Component
 * قسم البطل المتجاوب
 * 
 * A fully responsive, AI-optimized hero section with:
 * - Mobile-first design
 * - Optimized images for all devices
 * - Accessibility features
 * - RTL support for Arabic
 * - Schema.org markup
 * - Voice search optimization
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import OptimizedImage, { RESPONSIVE_SIZES } from '@/components/ui/OptimizedImage';

interface HeroButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

interface HeroStat {
  value: string;
  label: string;
  icon?: string;
}

interface ResponsiveHeroSectionProps {
  // Content
  headline: string;
  subheadline?: string;
  description: string;
  
  // Images
  backgroundImage?: string;
  foregroundImage?: string;
  mobileImage?: string;
  
  // CTAs
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
  
  // Stats
  stats?: HeroStat[];
  
  // Trust signals
  trustBadges?: { icon: string; text: string }[];
  
  // Configuration
  locale?: 'en' | 'ar';
  theme?: 'light' | 'dark' | 'gradient';
  gradientColors?: string;
  height?: 'full' | 'large' | 'medium' | 'small';
  alignment?: 'left' | 'center' | 'right';
  
  // Schema
  includeSchema?: boolean;
  schemaType?: 'WebPage' | 'Product' | 'Service' | 'Organization';
  
  // Additional
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveHeroSection: React.FC<ResponsiveHeroSectionProps> = ({
  headline,
  subheadline,
  description,
  backgroundImage,
  foregroundImage,
  mobileImage,
  primaryButton,
  secondaryButton,
  stats,
  trustBadges,
  locale = 'en',
  theme = 'gradient',
  gradientColors = 'from-blue-900 via-blue-800 to-blue-700',
  height = 'large',
  alignment = 'center',
  includeSchema = true,
  schemaType = 'WebPage',
  className = '',
  children
}) => {
  const isRTL = locale === 'ar';
  
  // Height classes
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh] md:min-h-[90vh]',
    medium: 'min-h-[60vh] md:min-h-[70vh]',
    small: 'min-h-[40vh] md:min-h-[50vh]'
  };
  
  // Alignment classes
  const alignmentClasses = {
    left: isRTL ? 'text-right items-end' : 'text-left items-start',
    center: 'text-center items-center',
    right: isRTL ? 'text-left items-start' : 'text-right items-end'
  };
  
  // Theme classes
  const themeClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: `bg-gradient-to-br ${gradientColors} text-white`
  };
  
  // Button variant classes
  const buttonVariantClasses = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white hover:bg-white hover:text-gray-900 text-white'
  };
  
  // Generate schema
  const generateSchema = () => {
    if (!includeSchema) return null;
    
    const schema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: headline,
      description: description,
      url: typeof window !== 'undefined' ? window.location.href : 'https://uneom.com',
      ...(backgroundImage && {
        image: backgroundImage.startsWith('http') ? backgroundImage : `https://uneom.com${backgroundImage}`
      }),
      publisher: {
        '@type': 'Organization',
        name: 'UNEOM',
        logo: {
          '@type': 'ImageObject',
          url: 'https://uneom.com/images/uneom-logo.png'
        }
      },
      // Speakable for voice search
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.hero-headline', '.hero-description']
      }
    };
    
    return (
      <Script
        id="hero-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  };
  
  return (
    <section 
      className={`
        relative ${heightClasses[height]} ${themeClasses[theme]}
        flex items-center overflow-hidden
        ${className}
      `}
      dir={isRTL ? 'rtl' : 'ltr'}
      aria-label={isRTL ? 'القسم الرئيسي' : 'Hero Section'}
    >
      {/* Background Image - Desktop */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          {/* Desktop image */}
          <div className="hidden md:block absolute inset-0">
            <OptimizedImage
              src={backgroundImage}
              alt={headline}
              fill
              priority
              sizes={RESPONSIVE_SIZES.hero}
              objectFit="cover"
              quality={90}
            />
          </div>
          
          {/* Mobile image */}
          <div className="md:hidden absolute inset-0">
            <OptimizedImage
              src={mobileImage || backgroundImage}
              alt={headline}
              fill
              priority
              sizes="100vw"
              objectFit="cover"
              quality={85}
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
        </div>
      )}
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`
          flex flex-col ${alignmentClasses[alignment]}
          max-w-4xl ${alignment === 'center' ? 'mx-auto' : ''}
          py-12 md:py-16 lg:py-20
        `}>
          
          {/* Headline - Optimized for AI/Voice Search */}
          <h1 
            className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            // Speakable content marker
            data-speakable="true"
          >
            {headline}
          </h1>
          
          {/* Subheadline */}
          {subheadline && (
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 opacity-90 font-medium">
              {subheadline}
            </h2>
          )}
          
          {/* Description - Optimized for Featured Snippets */}
          <p 
            className="hero-description text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed"
            data-speakable="true"
          >
            {description}
          </p>
          
          {/* CTA Buttons - Mobile Optimized */}
          <div className={`
            flex flex-col sm:flex-row gap-3 sm:gap-4
            ${alignment === 'center' ? 'justify-center' : ''}
            w-full sm:w-auto
          `}>
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className={`
                  ${buttonVariantClasses[primaryButton.variant]}
                  px-6 py-3 sm:px-8 sm:py-4
                  rounded-lg font-bold text-base sm:text-lg
                  transition-all duration-300 transform hover:scale-105
                  inline-flex items-center justify-center gap-2
                  w-full sm:w-auto
                `}
              >
                {primaryButton.icon}
                {primaryButton.text}
              </Link>
            )}
            
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`
                  ${buttonVariantClasses[secondaryButton.variant]}
                  px-6 py-3 sm:px-8 sm:py-4
                  rounded-lg font-bold text-base sm:text-lg
                  transition-all duration-300
                  inline-flex items-center justify-center gap-2
                  w-full sm:w-auto
                `}
              >
                {secondaryButton.icon}
                {secondaryButton.text}
              </Link>
            )}
          </div>
          
          {/* Stats - Responsive Grid */}
          {stats && stats.length > 0 && (
            <div className={`
              grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
              mt-8 md:mt-12 pt-6 md:pt-8
              border-t border-white/20
              w-full max-w-4xl
              ${alignment === 'center' ? 'mx-auto' : ''}
            `}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center px-2"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1">
                    {stat.icon && <span className="mr-1">{stat.icon}</span>}
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm opacity-80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Trust Badges - Mobile Scrollable */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="mt-6 md:mt-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
              <div className="flex gap-4 md:gap-6 justify-start md:justify-center min-w-max md:min-w-0">
                {trustBadges.map((badge, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 whitespace-nowrap"
                  >
                    <span className="text-lg">{badge.icon}</span>
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Additional Content */}
          {children}
        </div>
        
        {/* Foreground Image - Optional */}
        {foregroundImage && (
          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 max-w-md">
            <OptimizedImage
              src={foregroundImage}
              alt={headline}
              width={400}
              height={500}
              sizes={RESPONSIVE_SIZES.halfWidth}
              objectFit="contain"
              priority
            />
          </div>
        )}
      </div>
      
      {/* Scroll Indicator - Mobile */}
      {height === 'full' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <svg 
            className="w-6 h-6 opacity-70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      )}
      
      {/* Schema Markup */}
      {generateSchema()}
    </section>
  );
};

export default ResponsiveHeroSection;







