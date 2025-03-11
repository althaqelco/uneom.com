"use client";

import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  decoration?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  subtitle,
  centered = false,
  className = '',
  as = 'h2',
  decoration = true,
}) => {
  const textAlign = centered ? 'text-center' : 'text-left';
  
  const baseClasses = 'font-heading font-bold text-neutral-900';
  const sizeClasses = {
    h1: 'text-4xl sm:text-5xl lg:text-6xl',
    h2: 'text-3xl sm:text-4xl',
    h3: 'text-2xl sm:text-3xl',
    h4: 'text-xl sm:text-2xl',
  };
  
  const HeadingTag = as;
  
  return (
    <div className={`mb-8 ${textAlign} ${className}`}>
      <HeadingTag className={`${baseClasses} ${sizeClasses[as]} relative`}>
        {children}
        {decoration && centered && (
          <span className="block h-1 w-24 bg-primary-500 mx-auto mt-4"></span>
        )}
        {decoration && !centered && (
          <span className="block h-1 w-24 bg-primary-500 mt-4"></span>
        )}
      </HeadingTag>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 