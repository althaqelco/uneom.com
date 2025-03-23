import React from 'react';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';

export default function GroundCrewUniformPage() {
  // This function is needed to match the expected ClientPage props structure
  const params = {
    category: 'aviation-uniforms',
    product: 'ground-crew-uniform'
  };
  
  return <ClientPage params={params} />;
} 