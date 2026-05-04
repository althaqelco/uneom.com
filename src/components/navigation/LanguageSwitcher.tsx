/**
 * LanguageSwitcher — Smart Bilingual Toggle
 * 
 * Detects the current path and switches between EN/AR versions.
 * Handles all route patterns:
 * - / ↔ /ar
 * - /quote ↔ /ar/quote
 * - /locations/riyadh ↔ /ar/locations/riyadh
 * - /locations/riyadh/healthcare ↔ /ar/locations/riyadh/healthcare
 */
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  variant?: 'button' | 'text' | 'flag';
  className?: string;
}

export function LanguageSwitcher({ variant = 'button', className = '' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  const isArabic = pathname.startsWith('/ar');
  const targetPath = isArabic 
    ? pathname.replace(/^\/ar/, '') || '/'
    : `/ar${pathname}`;

  const targetLang = isArabic ? 'English' : 'العربية';
  const targetFlag = isArabic ? '🇬🇧' : '🇸🇦';

  if (variant === 'flag') {
    return (
      <Link
        href={targetPath}
        className={`text-2xl hover:scale-110 transition-transform ${className}`}
        title={targetLang}
        hrefLang={isArabic ? 'en' : 'ar'}
      >
        {targetFlag}
      </Link>
    );
  }

  if (variant === 'text') {
    return (
      <Link
        href={targetPath}
        className={`text-sm font-medium hover:underline ${className}`}
        hrefLang={isArabic ? 'en' : 'ar'}
      >
        {targetFlag} {targetLang}
      </Link>
    );
  }

  // Default: button
  return (
    <Link
      href={targetPath}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium transition-colors ${className}`}
      hrefLang={isArabic ? 'en' : 'ar'}
    >
      <span>{targetFlag}</span>
      <span>{targetLang}</span>
    </Link>
  );
}
