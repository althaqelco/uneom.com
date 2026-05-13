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
    ],
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      '@id': `${SITE}/#return-policy`,
      applicableCountry: 'SA',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 14,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'UNEOM Uniform Programmes',
      url: `${SITE}/shop/`,
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Healthcare Uniforms', url: `${SITE}/shop/medical-scrubs/` },
        { '@type': 'OfferCatalog', name: 'Hospitality Uniforms', url: `${SITE}/shop/hospitality-attire/` },
        { '@type': 'OfferCatalog', name: 'Industrial Uniforms', url: `${SITE}/shop/industrial-uniforms/` },
        { '@type': 'OfferCatalog', name: 'Corporate Uniforms', url: `${SITE}/shop/corporate-workwear/` }
      ]
    }
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

/* ─── NEW GENERATORS ─── */

export function webPageSchema(opts: { path: string; name: string; description: string; dateModified?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}${opts.path}#webpage`,
    url: `${SITE}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'ar-SA'],
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {})
  };
}

export function aboutPageSchema(locale: 'en' | 'ar' = 'en') {
  const prefix = locale === 'ar' ? '/ar' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE}${prefix}/about/#webpage`,
    url: `${SITE}${prefix}/about/`,
    name: locale === 'ar' ? 'عن UNEOM — مصنّع الزي الموحّد السعودي منذ 2013' : 'About UNEOM — Saudi B2B Uniform Manufacturer Since 2013',
    description: locale === 'ar' ? 'شركة سعودية لتصنيع الزي الموحّد تأسّست عام 2013. معتمدون ISO 9001 + OEKO-TEX عبر 24 مدينة.' : 'Saudi-owned uniform manufacturer founded in 2013. ISO 9001 + OEKO-TEX certified, operating across 24 cities.',
    isPartOf: { '@id': `${SITE}/#website` },
    mainEntity: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en'
  };
}

export function contactPageSchema(locale: 'en' | 'ar' = 'en') {
  const prefix = locale === 'ar' ? '/ar' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE}${prefix}/contact/#webpage`,
    url: `${SITE}${prefix}/contact/`,
    name: locale === 'ar' ? 'تواصل مع UNEOM — فريق العمليات السعودي' : 'Contact UNEOM — Saudi Operations Team',
    description: locale === 'ar' ? 'تحدّث مباشرة مع فريق عمليات UNEOM. راسلنا على info@uneom.com أو اتصل على +966 56 461 2017.' : 'Talk to UNEOM operations directly. Email info@uneom.com or call +966 56 461 2017.',
    isPartOf: { '@id': `${SITE}/#website` },
    mainEntity: {
      '@id': ORG_ID,
      contactPoint: [
        { '@type': 'ContactPoint', telephone: REAL.PHONE, contactType: 'customer service', email: REAL.EMAIL, areaServed: 'SA', availableLanguage: ['Arabic', 'English'], hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '18:00' } }
      ]
    },
    publisher: { '@id': ORG_ID },
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en'
  };
}

export interface CollectionItem { name: string; url: string; description?: string; image?: string; }

export function collectionPageSchema(opts: { path: string; name: string; description: string; items: CollectionItem[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE}${opts.path}#webpage`,
    url: `${SITE}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'ar-SA'],
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: `${SITE}${item.url}`,
        ...(item.description ? { description: item.description } : {}),
        ...(item.image ? { image: `${SITE}${item.image}` } : {})
      }))
    }
  };
}

export function merchantReturnSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MerchantReturnPolicy',
    '@id': `${SITE}/#return-policy`,
    applicableCountry: 'SA',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 14,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn'
  };
}

export function warrantySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WarrantyPromise',
    '@id': `${SITE}/#warranty`,
    durationOfWarranty: { '@type': 'QuantitativeValue', value: 12, unitCode: 'MON' },
    warrantyScope: 'https://schema.org/WarrantyFullLifetime'
  };
}

/* ─── CASE STUDY ─── */

export interface CaseStudySchemaOpts {
  slug: string;
  title: string;
  summary: string;
  image: string;
  industry: string;
  city: string;
  outcomes: { metric: string; description: string }[];
  locale?: 'en' | 'ar';
}

export function caseStudySchema(opts: CaseStudySchemaOpts) {
  const prefix = opts.locale === 'ar' ? '/ar' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE}${prefix}/case-studies/${opts.slug}/#article`,
    headline: opts.title,
    description: opts.summary,
    image: `${SITE}${opts.image}`,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${SITE}${prefix}/case-studies/${opts.slug}/`,
    articleSection: opts.industry,
    inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en',
    about: {
      '@type': 'CreativeWork',
      name: opts.title,
      locationCreated: { '@type': 'City', name: opts.city },
      result: opts.outcomes.map(o => ({
        '@type': 'QuantitativeValue',
        name: o.description,
        value: o.metric
      }))
    }
  };
}

/* ─── JOB POSTING ─── */

export interface JobPostingOpts {
  title: string;
  city: string;
  team: string;
  type: string;
}

export function jobPostingSchema(jobs: JobPostingOpts[]) {
  return jobs.map(j => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: j.title,
    hiringOrganization: { '@id': ORG_ID },
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: j.city, addressCountry: 'SA' }
    },
    employmentType: j.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
    datePosted: '2026-01-15',
    validThrough: '2026-12-31',
    industry: 'Uniform Manufacturing',
    occupationalCategory: j.team
  }));
}

/* ─── RESOURCE / GUIDE ─── */

export function guideSchema(opts: { slug: string; title: string; summary: string; image?: string; locale?: 'en' | 'ar' }) {
  const prefix = opts.locale === 'ar' ? '/ar' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE}${prefix}/resources/${opts.slug}/#howto`,
    name: opts.title,
    description: opts.summary,
    ...(opts.image ? { image: `${SITE}${opts.image}` } : {}),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en'
  };
}

// JsonLd component lives in @/lib/seo/JsonLd.tsx (separate JSX module).
