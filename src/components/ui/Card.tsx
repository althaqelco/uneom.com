import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  locale?: string;
  variant?: 'default' | 'outline' | 'filled';
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

/**
 * Card component for displaying content in a container with styling options
 */
const Card = ({
  children,
  className,
  locale = 'en',
  variant = 'default',
  padding = 'medium',
  shadow = 'md',
  rounded = 'md',
  ...props
}: CardProps) => {
  const rtl = locale === 'ar';
  
  // Create classes based on props
  const variantClasses = {
    default: 'bg-white border border-neutral-200',
    outline: 'bg-white border border-neutral-300',
    filled: 'bg-neutral-50 border border-neutral-100',
  };
  
  const paddingClasses = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-5',
    large: 'p-7',
  };
  
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };
  
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };
  
  return (
    <div
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        shadowClasses[shadow],
        roundedClasses[rounded],
        rtl ? 'rtl' : '',
        className
      )}
      dir={rtl ? 'rtl' : 'ltr'}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 