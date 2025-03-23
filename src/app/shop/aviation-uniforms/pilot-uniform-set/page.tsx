import React from 'react';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';

export default function PilotUniformSetPage() {
  // This function is needed to match the expected ClientPage props structure
  const params = {
    category: 'aviation-uniforms',
    product: 'pilot-uniform-set'
  };
  
  return <ClientPage params={params} />;
} 