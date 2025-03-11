import React from 'react';
import { clearBrowserData } from '@/lib/utils';

interface ClearDataButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
}

/**
 * A button component that clears browser cookies, localStorage, and cache when clicked
 */
export default function ClearDataButton({ 
  className = "", 
  label = "Clear Browser Data", 
  onClick 
}: ClearDataButtonProps) {
  
  const handleClick = () => {
    clearBrowserData();
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors ${className}`}
      aria-label="Clear browser data"
    >
      {label}
    </button>
  );
} 