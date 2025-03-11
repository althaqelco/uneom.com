"use client";

import React, { ReactNode } from 'react';
import { isRTL } from '@/lib/i18n/config';

interface RTLWrapperProps {
  children: ReactNode;
  locale: string;
  className?: string;
}

/**
 * A wrapper component that handles RTL layout for Arabic content
 * Adds appropriate direction and text alignment based on locale
 */
const RTLWrapper: React.FC<RTLWrapperProps> = ({
  children,
  locale,
  className = '',
}) => {
  const dir = isRTL(locale) ? 'rtl' : 'ltr';
  const textAlignment = isRTL(locale) ? 'text-right' : 'text-left';
  
  return (
    <div dir={dir} className={`${textAlignment} ${className}`}>
      {children}
    </div>
  );
};

export default RTLWrapper; 