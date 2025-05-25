'use client';

import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const GridIcon = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

export const ListIcon = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

export const FilterIcon = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const Icons: React.FC<IconProps> = ({ name, className = '', size = 24 }) => {
  const renderIcon = () => {
    switch (name) {
      case 'check':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
      case 'star':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        );
      case 'star-outline':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        );
      case 'shopping-cart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        );
      case 'arrow-right':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        );
      case 'arrow-left':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        );
      case 'grid':
        return <GridIcon size={size} className={className} />;
      case 'list':
        return <ListIcon size={size} className={className} />;
      case 'filter':
        return <FilterIcon size={size} className={className} />;
      case 'compliance-shield':
        return (
          <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="32" cy="32" r="30" fill="#1a365d" stroke="#2d5a87" strokeWidth="2"/>
            <path d="M32 8L48 16V32C48 44 32 56 32 56C32 56 16 44 16 32V16L32 8Z" fill="#ffd700"/>
            <path d="M24 30L30 36L40 26" stroke="#1a365d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'brand-identity-aviation':
        return (
          <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="32" cy="32" r="30" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2"/>
            <path d="M32 12L48 28H40V44H24V28H16L32 12Z" fill="#fff"/>
            <circle cx="32" cy="32" r="3" fill="#0ea5e9"/>
            <path d="M20 48h24M28 52h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'modest-design-saudi':
        return (
          <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="32" cy="32" r="30" fill="#1a365d" stroke="#2d5a87" strokeWidth="2"/>
            <path d="M32 8C40 8 48 16 48 24V40C48 48 40 56 32 56C24 56 16 48 16 40V24C16 16 24 8 32 8Z" fill="#ffd700"/>
            <path d="M24 20h16v8H24zM20 32h24v4H20z" fill="#1a365d"/>
            <circle cx="28" cy="24" r="2" fill="#1a365d"/>
            <circle cx="36" cy="24" r="2" fill="#1a365d"/>
          </svg>
        );
      case 'fabric-tech-performance':
        return (
          <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="32" cy="32" r="30" fill="#1a365d" stroke="#2d5a87" strokeWidth="2"/>
            <rect x="16" y="16" width="32" height="32" rx="4" fill="#ffd700"/>
            <path d="M20 20h24v24H20z" fill="#1a365d" opacity="0.1"/>
            <path d="M24 28h16M24 32h16M24 36h12" stroke="#1a365d" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="48" cy="16" r="6" fill="#ffd700"/>
            <path d="M45 16h6M48 13v6" stroke="#1a365d" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'saudi-expertise':
        return (
          <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect width="64" height="64" rx="12" fill="#0f5132"/>
            <rect x="12" y="16" width="40" height="24" fill="#198754"/>
            <path d="M20 28c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4v-8z" fill="#ffffff"/>
            <path d="M28 30l2 2 4-4" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="16" y="44" width="32" height="4" fill="#ffffff"/>
            <circle cx="48" cy="12" r="6" fill="#ffd700"/>
            <path d="M48 8l1.5 3h3.5l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3.5z" fill="#0f5132"/>
          </svg>
        );
      case 'brand-aligned':
        return (
          <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="32" cy="32" r="30" fill="#1a365d" stroke="#2d5a87" strokeWidth="2"/>
            <rect x="16" y="16" width="32" height="32" rx="8" fill="#ffd700"/>
            <circle cx="32" cy="32" r="12" fill="#1a365d"/>
            <path d="M28 28L32 32L36 28M28 36L32 32L36 36" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        );
    }
  };

  return renderIcon();
};

export default Icons; 