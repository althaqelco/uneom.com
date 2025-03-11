/**
 * Schema.org Organization markup for UNEOM
 * @returns Organization schema object
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com',
    logo: 'https://uneom.com/images/uneom-logo.png',
    description: 'Saudi Arabia\'s Leading Provider of Professional Uniforms & Scrubs for Businesses',
    sameAs: [
      'https://www.facebook.com/uneom',
      'https://www.twitter.com/uneom',
      'https://www.instagram.com/uneom',
      'https://www.linkedin.com/company/uneom',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Abdulaziz Road',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh',
      postalCode: '12345',
      addressCountry: 'SA',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971558164922',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
  };
}

/**
 * Schema.org markup for a local business
 * @returns LocalBusiness schema object
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'UNEOM',
    image: 'https://uneom.com/images/uneom-logo.png',
    '@id': 'https://uneom.com',
    url: 'https://uneom.com',
    telephone: '+971558164922',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Abdulaziz Road',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh',
      postalCode: '12345',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
    ],
  };
} 