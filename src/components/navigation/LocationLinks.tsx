/**
 * LocationLinks — Navigation internal linking module
 * 
 * Provides a reusable internal linking grid for locations
 * that can be embedded in the main navigation or footer.
 * This component powers the PageRank flow from navigation
 * to all 24 city pages and the /locations hub.
 */
import React from 'react';
import Link from 'next/link';

interface LocationLinksProps {
  locale?: 'en' | 'ar';
  variant?: 'nav' | 'footer' | 'sidebar';
  maxCities?: number;
}

const TOP_CITIES = [
  { nameEn: 'Riyadh', nameAr: 'الرياض', slug: 'riyadh' },
  { nameEn: 'Jeddah', nameAr: 'جدة', slug: 'jeddah' },
  { nameEn: 'Dammam', nameAr: 'الدمام', slug: 'dammam' },
  { nameEn: 'Mecca', nameAr: 'مكة المكرمة', slug: 'mecca' },
  { nameEn: 'Medina', nameAr: 'المدينة المنورة', slug: 'medina' },
  { nameEn: 'Khobar', nameAr: 'الخبر', slug: 'khobar' },
  { nameEn: 'Tabuk', nameAr: 'تبوك', slug: 'tabuk' },
  { nameEn: 'Abha', nameAr: 'أبها', slug: 'abha' },
];

export function LocationLinks({ locale = 'en', variant = 'footer', maxCities = 8 }: LocationLinksProps) {
  const isAr = locale === 'ar';
  const prefix = isAr ? '/ar' : '';
  const cities = TOP_CITIES.slice(0, maxCities);

  if (variant === 'nav') {
    return (
      <div className="grid grid-cols-2 gap-2 p-4 min-w-[280px]">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`${prefix}/locations/${city.slug}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm text-gray-700 hover:text-blue-600"
          >
            <span className="text-xs">📍</span>
            <span className="font-medium">{isAr ? city.nameAr : city.nameEn}</span>
          </Link>
        ))}
        <Link
          href={`${prefix}/locations`}
          className="col-span-2 text-center text-sm text-blue-600 hover:text-blue-700 font-semibold py-2 border-t border-gray-100 mt-2"
        >
          {isAr ? 'جميع المدن ←' : 'All 24 Cities →'}
        </Link>
      </div>
    );
  }

  // Footer variant
  return (
    <div>
      <h4 className="font-bold text-gray-900 mb-3 text-sm">
        {isAr ? 'مواقعنا' : 'Our Locations'}
      </h4>
      <ul className="space-y-1.5">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link
              href={`${prefix}/locations/${city.slug}`}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isAr ? city.nameAr : city.nameEn}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`${prefix}/locations`}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {isAr ? 'جميع المواقع ←' : 'All Locations →'}
          </Link>
        </li>
      </ul>
    </div>
  );
}
