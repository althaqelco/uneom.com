"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface LogoProps {
  locale?: string;
  inverted?: boolean;
  width?: number;
  height?: number;
  className?: string;
  linkClassName?: string;
  withLink?: boolean;
}

/**
 * Logo component that displays the appropriate logo based on locale
 * Handles both English and Arabic versions of the UNEOM logo
 */
export default function Logo({
  locale = 'en',
  inverted = false,
  width = 170,
  height = 52,
  className = 'h-10 w-auto',
  linkClassName = 'flex items-center',
  withLink = true,
}: LogoProps) {
  const isArabic = locale === 'ar';
  
  // Select logo file based on locale and inverted option
  const logoPath = isArabic 
    ? '/images/uneom-logo-ar.png'  // Arabic logo - use the specific Arabic logo file
    : '/images/uneom-logo-en.png'; // English logo - use the specific English logo file
  
  const logoAlt = isArabic ? 'يونيوم' : 'UNEOM';
  
  const logoImage = (
    <OptimizedImage
      src={logoPath}
      alt={logoAlt}
      width={width}
      height={height}
      className={`${className} ${inverted ? 'invert' : ''}`}
      fallbackSrc="/images/logos/default-logo.png"
      priority
    />
  );
  
  // Optionally wrap logo in a link
  if (withLink) {
    return (
      <Link href={isArabic ? '/ar' : '/'} className={`${linkClassName} ${isArabic ? 'ml-auto mr-0' : ''}`}>
        {logoImage}
      </Link>
    );
  }
  
  return logoImage;
} 