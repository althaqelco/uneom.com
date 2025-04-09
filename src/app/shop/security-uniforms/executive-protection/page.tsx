import React from 'react';
import ClientPage from '../../[category]/[product]/ClientPage';
import { getProductById } from '@/lib/data/products';

// Generate static params for all product pages
export const generateStaticParams = () => {
  return [
    {
      category: 'security-uniforms',
      product: 'executive-protection'
    }
  ];
}

export default function ExecutiveProtectionPage() {
  // This is a server component that imports the client component
  // All the logic and UI is in the ClientPage component
  // This pattern allows for static site generation with dynamic client components
  return <ClientPage params={{ category: 'security-uniforms', product: 'executive-protection' }} />;
} 