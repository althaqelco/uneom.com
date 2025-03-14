"use client";

import React, { ReactNode } from 'react';

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
  const isRtl = locale === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';
  const textAlignment = isRtl ? 'text-right' : 'text-left';
  
  return (
    <div dir={dir} className={`${textAlignment} ${className}`}>
      {children}
    </div>
  );
};

export default RTLWrapper; 