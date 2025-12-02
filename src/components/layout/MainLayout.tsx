"use client";

import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  locale?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

/**
 * MainLayout Component
 * 
 * NOTE: Header and Footer are now handled by LayoutWrapper in the root layout.
 * This component is kept for backward compatibility with existing page imports.
 * It now acts as a simple pass-through wrapper.
 */
const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  locale = 'en',
  hideHeader = false,
  hideFooter = false
}) => {
  // Simply pass through children
  // Header/Footer are now handled by LayoutWrapper in the root layout
  return <>{children}</>;
};

export default MainLayout;
