'use client';

import React from 'react';

interface MainHeadingProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

/**
 * MainHeading component - Use this for the primary H1 heading on each page
 * Ensures semantic HTML structure with a single H1 per page
 */
const MainHeading: React.FC<MainHeadingProps> = ({ 
  children, 
  className = '', 
  centered = false 
}) => {
  return (
    <h1 
      className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 
      ${centered ? 'text-center mx-auto' : ''} 
      ${className}`}
    >
      {children}
    </h1>
  );
};

export default MainHeading; 