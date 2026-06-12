import React from 'react';
import { locations } from '@/lib/data/locations';
import { SAUDI_CITIES, getCityBySlug } from '@/lib/data/saudi-cities';
import ClientPage from './ClientPage';
import CityHub from '@/components/locations/CityHub';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Every city in SAUDI_CITIES must resolve here: the footer, the homepage
// city grid and 500+ pSEO cross-pages all link /locations/{city}/.
// Cities with a rich office profile (lib/data/locations.ts) render the
// full ClientPage; the rest render the server CityHub fallback.

function cityAlternates(city: string) {
  return {
    canonical: `https://uneom.com/locations/${city}/`,
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
      title: `${location.nameEn} Uniform Supplier | UNEOM Saudi Arabia`,
      description: `Leading uniform supplier in ${location.nameEn}, Saudi Arabia. Premium medical scrubs, corporate uniforms, and hospitality attire in ${location.nameEn}.`,
      alternates: cityAlternates(city),
      openGraph: {
        title: `${location.nameEn} Uniform Supplier | UNEOM`,
        description: `Premium uniforms in ${location.nameEn}. Medical, corporate, and hospitality attire.`,
        url: `https://uneom.com/locations/${city}/`,
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

  const saudiCity = getCityBySlug(city);
  if (saudiCity) {
    return {
      title: `Uniforms in ${saudiCity.nameEn} | Supplier & Manufacturer | UNEOM`,
      description: `Professional uniform supply in ${saudiCity.nameEn}, ${saudiCity.region}: medical scrubs, corporate, hospitality and industrial workwear with logo embroidery and reliable delivery.`,
      alternates: cityAlternates(city),
      openGraph: {
        title: `Uniforms in ${saudiCity.nameEn} | UNEOM`,
        description: `Professional uniform supply across ${saudiCity.nameEn} — every sector, bulk-ready.`,
        url: `https://uneom.com/locations/${city}/`,
        siteName: 'UNEOM',
        locale: 'en'
      }
    };
  }

  return { title: 'Location Not Found | UNEOM' };
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
  if (saudiCity) return <CityHub city={saudiCity} locale="en" />;

  // Real 404 — ClientPage's "Location Not Found" UI returns HTTP 200
  // (soft-404) and must never be the fallback for unknown slugs.
  notFound();
}
