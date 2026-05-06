import React from 'react';
import { locations } from '@/lib/data/locations';
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export async function generateMetadata(
  { params: { city } }: { 
    params: { city: string } 
  }
): Promise<Metadata> {
  const location = locations.find(l => l.id === city);
  
  if (!location) {
    return {
      title: 'Location Not Found | UNEOM',
    };
  }
    
  return {
    title: `${location.nameEn} Uniform Supplier | UNEOM Saudi Arabia`,
    description: `Leading uniform supplier in ${location.nameEn}, Saudi Arabia. Premium medical scrubs, corporate uniforms, and hospitality attire in ${location.nameEn}.`,
    openGraph: {
      title: `${location.nameEn} Uniform Supplier | UNEOM`,
      description: `Premium uniforms in ${location.nameEn}. Medical, corporate, and hospitality attire.`,
      url: `https://uneom.com/locations/${city}`,
      siteName: 'UNEOM',
      images: [
        {
          url: `https://uneom.com${location.image}`,
          width: 1200,
          height: 630,
          alt: location.imageAltEn
        }
      ],
      locale: 'en'
    }
  };
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.id,
  }));
}

export default function LocationPage({ params }: { params: { city: string } }) {
  return <ClientPage params={params} />;
}
