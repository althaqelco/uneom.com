'use client';

import React from 'react';

interface SmartHeadingProps {
  children: React.ReactNode;
  level?: 2 | 3 | 4 | 5 | 6;
  className?: string;
  centered?: boolean;
}

/**
 * SmartHeading component - Use for all headings that are not the primary H1
 * Enforces proper heading hierarchy (h2-h6) for semantic HTML structure
 */
const SmartHeading: React.FC<SmartHeadingProps> = ({ 
  children, 
  level = 2, 
  className = '', 
  centered = false 
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  // Classes based on heading level
  const sizeClasses = {
    2: 'text-2xl md:text-3xl font-bold mb-5',
    3: 'text-xl md:text-2xl font-bold mb-4',
    4: 'text-lg md:text-xl font-bold mb-3',
    5: 'text-base md:text-lg font-bold mb-2',
    6: 'text-sm md:text-base font-bold mb-2',
  };
  
  return (
    <Tag 
      className={`${sizeClasses[level]} 
      ${centered ? 'text-center mx-auto' : ''} 
      ${className}`}
    >
      {children}
    </Tag>
  );
};

export default SmartHeading; 