/**
 * Schema.org JSON-LD generators per master-plan-v11 §4.
 *
 * CRN and VAT are UNEOM's verified business identifiers.
 * All other values (address, phone, etc.) are confirmed.
 */

import { SAUDI_CITIES } from '@/lib/data/saudi-cities';

const SITE = 'https://uneom.com';
const ORG_ID = `${SITE}/#organization`;

// UNEOM verified business identifiers (confirmed 2026-05-11)
const REAL = {
  CRN: '4030253566',
  VAT: '311280328300003',
  FOUNDED: '2013',
  STREET: 'King Fahd Road',
  POSTAL_CODE: '11451',
  PHONE: '+966564612017',
  EMAIL: 'info@uneom.com',
  ISO_9001: 'ISO 9001:2015',
  OEKO_TEX: 'OEKO-TEX Standard 100'
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'UNEOM',
    alternateName: 'يونيوم',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/images/uneom-logo.png`, width: 600, height: 200 },
    image: `${SITE}/images/uneom-og-image.jpg`,
    telephone: REAL.PHONE,
    email: REAL.EMAIL,
    foundingDate: REAL.FOUNDED,
    address: {
      '@type': 'PostalAddress',
      streetAddress: REAL.STREET,
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: REAL.POSTAL_CODE,
      addressCountry: 'SA'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 24.7136, longitude: 46.6753 },
    taxID: REAL.VAT,
    vatID: REAL.VAT,
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'CRN', name: 'Saudi Commercial Registration', value: REAL.CRN, url: `https://mc.gov.sa/ar/eServices/Pages/Commercial-data.aspx?cr=${REAL.CRN}` },
      { '@type': 'PropertyValue', propertyID: 'VAT', value: REAL.VAT, url: 'https://zatca.gov.sa' }
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: REAL.ISO_9001 },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: REAL.OEKO_TEX }
    ],
    areaServed: SAUDI_CITIES.map(c => ({
      '@type': 'City',
      name: c.nameEn,
      geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng }
    })),
    knowsAbout: [
      'Healthcare uniforms', 'Hospitality attire', 'Aviation uniforms',
      'Corporate workwear', 'Education uniforms', 'Industrial uniforms',
      'Security uniforms', 'Retail uniforms', 'Custom uniform design',
      'Bulk uniform manufacturing', 'Saudi uniform standards'
    ],
    sameAs: [
      'https://www.linkedin.com/company/uneom',
      'https://twitter.com/uneom_sa',
      'https://www.instagram.com/uneom_sa'
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: REAL.PHONE, contactType: 'customer service', areaServed: 'SA', availableLanguage: ['Arabic', 'English'] },
      { '@type': 'ContactPoint', telephone: REAL.PHONE, contactType: 'sales', areaServed: 'SA', availableLanguage: ['Arabic', 'English'] }
    ]
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE,
    name: 'UNEOM',
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'ar-SA'],
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function localBusinessSchema(citySlug: string) {
  const city = SAUDI_CITIES.find(c => c.slug === citySlug);
  if (!city) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}/locations/${city.slug}/#business`,
    name: `UNEOM — ${city.nameEn}`,
    image: `${SITE}/images/cities/hero-${city.slug}.avif`,
    url: `${SITE}/locations/${city.slug}/`,
    telephone: REAL.PHONE,
    priceRange: 'SAR 100-2000',
    address: { '@type': 'PostalAddress', addressLocality: city.nameEn, addressRegion: city.region, addressCountry: 'SA' },
    geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '18:00' }
    ],
    paymentAccepted: ['Mada', 'STC Pay', 'Apple Pay', 'SADAD', 'Bank Transfer'],
    currenciesAccepted: 'SAR',
    parentOrganization: { '@id': ORG_ID }
  };
}

export interface BreadcrumbItem { name: string; path: string; }

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`
    }))
  };
}

export function serviceSchema(slug: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/services/${slug}/#service`,
    name,
    description,
    provider: { '@id': ORG_ID },
    areaServed: SAUDI_CITIES.map(c => ({ '@type': 'City', name: c.nameEn })),
    audience: { '@type': 'BusinessAudience', name: 'Saudi enterprises' }
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

// JsonLd component lives in @/lib/seo/JsonLd.tsx (separate JSX module).
