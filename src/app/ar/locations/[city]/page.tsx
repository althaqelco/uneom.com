import React from 'react';
import { locations } from '@/lib/data/locations';
import { SAUDI_CITIES, getCityBySlug } from '@/lib/data/saudi-cities';
import ClientPage from '@/app/locations/[city]/ClientPage';
import CityHub from '@/components/locations/CityHub';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Arabic twin of /locations/[city]: rich office cities render ClientPage,
// every other SAUDI_CITIES slug renders the server CityHub fallback, and
// unknown slugs return a real 404 (the previous version soft-404ed with
// "الموقع غير موجود" at HTTP 200 across 19 cities).

function cityAlternates(city: string) {
  return {
    canonical: `https://uneom.com/ar/locations/${city}/`,
    languages: {
      'en': `https://uneom.com/locations/${city}/`,
      'ar-SA': `https://uneom.com/ar/locations/${city}/`,
      'x-default': `https://uneom.com/locations/${city}/`,
    },
  };
}

export async function generateMetadata(
  { params: { city } }: {
    params: { city: string }
  }
): Promise<Metadata> {
  const location = locations.find(l => l.id === city);

  if (location) {
    return {
      title: `مورد زي موحد في ${location.nameAr} | يونيوم السعودية`,
      description: `المورد الرائد للأزياء الموحدة في ${location.nameAr}، المملكة العربية السعودية. سكراب طبي، زي شركات، وأزياء ضيافة متميزة في ${location.nameAr}.`,
      alternates: cityAlternates(city),
      openGraph: {
        title: `مورد زي موحد في ${location.nameAr} | يونيوم`,
        description: `أزياء موحدة متميزة في ${location.nameAr}. أزياء طبية، شركات، وضيافة.`,
        url: `https://uneom.com/ar/locations/${city}/`,
        siteName: 'UNEOM',
        images: [
          {
            url: `https://uneom.com${location.image}`,
            width: 1200,
            height: 630,
            alt: location.imageAltAr
          }
        ],
        locale: 'ar_SA'
      }
    };
  }

  const saudiCity = getCityBySlug(city);
  if (saudiCity) {
    return {
      title: `الزي الموحد في ${saudiCity.nameAr} | تصنيع وتوريد | يونيوم`,
      description: `توريد الأزياء المهنية في ${saudiCity.nameAr} (${saudiCity.regionAr}): سكراب طبي، زي شركات وضيافة وملابس سلامة صناعية مع تطريز الشعار وتسليم موثوق.`,
      alternates: cityAlternates(city),
      openGraph: {
        title: `الزي الموحد في ${saudiCity.nameAr} | يونيوم`,
        description: `توريد الأزياء المهنية لكل القطاعات في ${saudiCity.nameAr} — جاهزون لطلبات الجملة.`,
        url: `https://uneom.com/ar/locations/${city}/`,
        siteName: 'UNEOM',
        locale: 'ar_SA'
      }
    };
  }

  return { title: 'الموقع غير موجود | يونيوم' };
}

export async function generateStaticParams() {
  const slugs = new Set<string>([
    ...locations.map(l => l.id),
    ...SAUDI_CITIES.map(c => c.slug),
  ]);
  return Array.from(slugs).map(city => ({ city }));
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const location = locations.find(l => l.id === params.city);
  if (location) return <ClientPage params={params} />;

  const saudiCity = getCityBySlug(params.city);
  if (saudiCity) return <CityHub city={saudiCity} locale="ar" />;

  notFound();
}
