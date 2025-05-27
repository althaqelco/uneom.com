/**
 * Schema.org Markup Generator
 * 
 * This utility generates structured data markup for various page types.
 * It helps address several SEO issues identified in the Screaming Frog report
 * by implementing rich, structured data for search engines.
 */

// Types for Schema.org markup
export interface AddressSchema {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
}

export interface GeoCoordinatesSchema {
  '@type': 'GeoCoordinates';
  latitude: string;
  longitude: string;
}

export interface OpeningHoursSchema {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
}

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness' | string;
  '@id'?: string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  image?: string | string[];
  priceRange?: string;
  currenciesAccepted?: string;
  paymentAccepted?: string;
  address: AddressSchema;
  geo?: GeoCoordinatesSchema;
  openingHoursSpecification?: OpeningHoursSchema[];
  sameAs?: string[];
}

export interface BreadcrumbItemSchema {
  '@type': 'ListItem';
  position: number;
  item: {
    '@id': string;
    name: string;
  };
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbItemSchema[];
}

export interface FAQItemSchema {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: FAQItemSchema[];
}

/**
 * Generate a local business schema for a location page
 */
export function generateLocalBusinessSchema(
  cityName: string,
  address: {
    street: string;
    district?: string;
    city: string;
    postalCode?: string;
    region?: string;
    country: string;
  },
  contactInfo: {
    phone: string;
    email?: string;
  },
  businessHours?: {
    days: string;
    hours: string;
  }[],
  description?: string,
  image?: string,
  coordinates?: {
    latitude: string;
    longitude: string;
  },
  sameAs?: string[]
): LocalBusinessSchema {
  // Format the full address
  const formattedAddress = [
    address.street,
    address.district,
    address.city,
    address.postalCode,
    address.region,
    address.country
  ].filter(Boolean).join(', ');

  // Unique identifier for this location
  const locationId = cityName.toLowerCase().replace(/\s+/g, '-');
  
  // Format opening hours
  const openingHours: OpeningHoursSchema[] | undefined = businessHours?.map(hours => {
    const [opens, closes] = hours.hours.split('-').map(time => time.trim());
    
    // Split the days string into an array
    const daysArray = hours.days.split(',').map(day => day.trim());
    
    return {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: daysArray,
      opens: opens,
      closes: closes
    };
  });

  const schema: LocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://uneom.com/locations/${locationId}#business`,
    name: `UNEOM ${cityName}`,
    description: description || `UNEOM professional uniform provider in ${cityName}, Saudi Arabia.`,
    url: `https://uneom.com/locations/${locationId}/`,
    telephone: contactInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region || 'Riyadh Province', // Default region if not provided
      postalCode: address.postalCode,
      addressCountry: 'SA' // Assuming SA for all UNEOM locations
    },
    priceRange: '$$', // Example, adjust as needed
    currenciesAccepted: 'SAR',
    paymentAccepted: 'Cash, Credit Card',
  };

  if (contactInfo.email) {
    schema.email = contactInfo.email;
  }

  schema.image = image ? (image.startsWith('http') ? image : `https://uneom.com${image}`) : 'https://uneom.com/images/locations/default-location.jpg';
  
  if (coordinates) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: coordinates.latitude,
      longitude: coordinates.longitude
    };
  }

  if (openingHours && openingHours.length > 0) {
    schema.openingHoursSpecification = openingHours;
  }

  schema.sameAs = sameAs || [
    'https://www.facebook.com/uneom',
    'https://www.instagram.com/uneom',
    'https://twitter.com/uneom'
  ];

  return schema;
}

/**
 * Generate breadcrumb schema for a page
 */
export function generateBreadcrumbSchema(
  breadcrumbs: {
    name: string;
    url: string;
  }[]
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url.startsWith('http') ? item.url : `https://uneom.com${item.url}`,
        name: item.name
      }
    }))
  };
}

/**
 * Generate FAQ schema for a page
 */
export function generateFAQSchema(
  faqs: {
    question: string;
    answer: string;
  }[]
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate WebPage schema for a page
 */
export function generateWebPageSchema(
  url: string,
  title: string,
  description: string,
  datePublished?: string,
  dateModified?: string,
  image?: string,
  speakable?: {
    cssSelector: string;
  },
  language: 'en-SA' | 'ar-SA' = 'en-SA'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url: url,
    name: title,
    description: description,
    inLanguage: language,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: image ? (image.startsWith('http') ? image : `https://uneom.com${image}`) : undefined,
    speakable: speakable ? {
      '@type': 'SpeakableSpecification',
      cssSelector: speakable.cssSelector
    } : undefined,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://uneom.com/#website',
      name: 'UNEOM',
      url: 'https://uneom.com/'
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://uneom.com/#organization',
      name: 'UNEOM',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uneom.com/images/logo.png'
      }
    }
  };
}

/**
 * Generate service schema for a service page
 */
export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  image?: string,
  provider?: {
    name: string;
    url: string;
  },
  areaServed?: string | string[],
  serviceType?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    url: url,
    image: image ? (image.startsWith('http') ? image : `https://uneom.com${image}`) : undefined,
    provider: provider ? {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url
    } : {
      '@type': 'Organization',
      name: 'UNEOM',
      url: 'https://uneom.com/'
    },
    areaServed: areaServed || 'Saudi Arabia',
    serviceType: serviceType || 'Uniform Provision'
  };
}

export default {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  generateServiceSchema
};
