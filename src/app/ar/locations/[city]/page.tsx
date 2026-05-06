import React from 'react';
import { locations } from '@/lib/data/locations';
import ClientPage from '@/app/locations/[city]/ClientPage';
import { Metadata } from 'next';

export async function generateMetadata(
  { params: { city } }: { 
    params: { city: string } 
  }
): Promise<Metadata> {
  const location = locations.find(l => l.id === city);
  
  if (!location) {
    return {
      title: 'الموقع غير موجود | يونيوم',
    };
  }
    
  return {
    title: `مورد زي موحد في ${location.nameAr} | يونيوم السعودية`,
    description: `المورد الرائد للأزياء الموحدة في ${location.nameAr}، المملكة العربية السعودية. سكراب طبي، زي شركات، وأزياء ضيافة متميزة في ${location.nameAr}.`,
    openGraph: {
      title: `مورد زي موحد في ${location.nameAr} | يونيوم`,
      description: `أزياء موحدة متميزة في ${location.nameAr}. أزياء طبية، شركات، وضيافة.`,
      url: `https://uneom.com/ar/locations/${city}`,
      siteName: 'UNEOM',
      images: [
        {
          url: `https://uneom.com${location.image}`,
          width: 1200,
          height: 630,
          alt: location.imageAltAr
        }
      ],
      locale: 'ar'
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
