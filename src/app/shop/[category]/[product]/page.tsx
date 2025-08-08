import React from 'react';
import ClientPage from './ClientPage';import { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export async function generateMetadata(
  { params: { category, product } }: { 
    params: { category: string; product: string } 
  }
): Promise<Metadata> {
  // You might fetch data here for dynamic metadata
  // const data = await fetchData(params.category);
  
  // Get the page name from the URL parameter
  const pageName = category;
  const formattedPageName = pageName
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
    
  return {
    title: `${formattedPageName} | UNEOM Saudi Arabia`,
    description: `Explore our premium ${formattedPageName} collection. UNEOM provides high-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.`,
    keywords: [
      pageName.toLowerCase(),
      'uniform',
      'professional clothing',
      'UNEOM',
      'Saudi Arabia',
      'workwear',
      'corporate attire'
    ],
    openGraph: {
      title: `${formattedPageName} | UNEOM Saudi Arabia`,
      description: `Explore our premium ${formattedPageName} collection. UNEOM provides high-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.`,
      url: `https://uneom.com/shop/${pageName}`,
      siteName: 'UNEOM',
      images: [
        {
          url: `https://uneom.com/images/products/${pageName.replace(/\//g, '-')}.webp`,
          width: 1200,
          height: 630,
          alt: `${formattedPageName} - UNEOM Saudi Arabia`
        }
      ],
      locale: 'en_US'
    }
  };
}

interface PageProps {
  params: {
    category: string;
    product: string;
  };
}

// This generates all possible static paths during build time
export async function generateStaticParams() {
  // Define all possible categories and products
  return [
    { category: 'medical-scrubs', product: 'premium-scrubs-set' },
    { category: 'medical-scrubs', product: 'antimicrobial-scrubs' },
    { category: 'medical-scrubs', product: 'premium-medical-scrubs' },
    { category: 'medical-scrubs', product: 'surgical-scrubs' },
    { category: 'medical-scrubs', product: 'nursing-scrubs' },
    { category: 'medical-scrubs', product: 'executive-medical-uniforms' },
    { category: 'medical-scrubs', product: 'medical-lab-coats' },
    { category: 'medical-scrubs', product: 'premium-surgical-gowns' },
    { category: 'medical-scrubs', product: 'executive-medical-uniform' },
    { category: 'medical-scrubs', product: 'medical-lab-coat' },
    { category: 'medical-scrubs', product: 'professional-lab-coat' },
    { category: 'aviation-uniforms', product: 'airline-crew-uniform' },
    { category: 'aviation-uniforms', product: 'pilot-uniform' },
    { category: 'aviation-uniforms', product: 'pilot-uniform-set' },
    { category: 'aviation-uniforms', product: 'flight-attendant-dress' },
    { category: 'aviation-uniforms', product: 'aviation-blazer' },
    { category: 'aviation-uniforms', product: 'ground-crew-uniform' },
    { category: 'aviation-uniforms', product: 'airline-service-vest' },
    { category: 'hospitality-attire', product: 'luxury-hotel-uniform' },
    { category: 'hospitality-attire', product: 'premium-hotel-uniforms' },
    { category: 'hospitality-attire', product: 'housekeeping-uniform' },
    { category: 'hospitality-attire', product: 'concierge-uniform' },
    { category: 'hospitality-attire', product: 'reception-staff-uniform' },
    { category: 'hospitality-attire', product: 'restaurant-staff-uniform' },
    { category: 'hospitality-attire', product: 'resort-staff-attire' },
    { category: 'industrial-uniforms', product: 'industrial-coverall' },
    { category: 'industrial-uniforms', product: 'industrial-coverall-pro' },
    { category: 'industrial-uniforms', product: 'mechanics-overalls' },
    { category: 'industrial-uniforms', product: 'flame-resistant-workwear' },
    { category: 'industrial-uniforms', product: 'hi-vis-safety-uniform' },
    { category: 'industrial-uniforms', product: 'safety-helmet-pro' },
    { category: 'corporate-workwear', product: 'executive-suit' },
    { category: 'security-uniforms', product: 'security-officer-uniform' },
    { category: 'security-uniforms', product: 'tactical-security-uniforms' },
    { category: 'security-uniforms', product: 'executive-protection' },
    { category: 'security-uniforms', product: 'mall-security' },
    { category: 'corporate', product: 'executive-office-attire' },
    { category: 'culinary-uniforms', product: 'executive-chef-coat' },
    { category: 'manufacturing-attire', product: 'industrial-protective-uniforms' },
    { category: 'education-uniforms', product: 'premium-school-uniforms' },
    { category: 'workplace-uniforms', product: 'executive-suits' },
    { category: 'retail-uniforms', product: 'luxury-retail-collection' },
    { category: 'retail-uniforms', product: 'customer-service' },
    { category: 'retail-uniforms', product: 'store-staff' },
    { category: 'retail-uniforms', product: 'beauty-salon' },
  ];
}

export default function ProductDetailPage({ params }: PageProps) {
  return <ClientPage params={params} />;
} 