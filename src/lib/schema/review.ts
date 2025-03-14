/**
 * Schema.org Review and Rating system
 * Helps with rich results in search and enhances product visibility
 */

/**
 * Generate schema markup for a single review
 * @param review Review data
 * @returns Review schema object
 */
export function getReviewSchema(review: {
  id: string;
  author: string;
  authorImage?: string;
  datePublished: string;
  reviewBody: string;
  ratingValue: number;
  productName: string;
  productId: string;
  productUrl?: string;
  productImage?: string;
  productBrand?: string;
  reviewLocation?: string;
  locale?: string;
}) {
  const { 
    author, 
    authorImage, 
    datePublished, 
    reviewBody, 
    ratingValue, 
    productName, 
    productId, 
    productUrl, 
    productImage,
    productBrand,
    reviewLocation,
    locale = 'en'
  } = review;

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: ratingValue,
      bestRating: 5,
      worstRating: 1
    },
    author: {
      '@type': 'Person',
      name: author,
      ...(authorImage && { image: authorImage })
    },
    datePublished,
    reviewBody,
    itemReviewed: {
      '@type': 'Product',
      name: productName,
      identifier: productId,
      ...(productUrl && { url: productUrl }),
      ...(productImage && { image: productImage }),
      ...(productBrand && { 
        brand: {
          '@type': 'Brand',
          name: productBrand
        }
      }),
      ...(reviewLocation && { 
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          availableAtOrFrom: {
            '@type': 'Place',
            name: reviewLocation
          }
        }
      })
    },
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en'
  };
}

/**
 * Generate aggregate rating schema for products with multiple reviews
 * @param productData Product data with aggregate rating
 * @returns AggregateRating schema object
 */
export function getAggregateRatingSchema(productData: {
  productName: string;
  productId: string;
  productUrl?: string;
  productImage?: string;
  productBrand?: string;
  ratingValue: number; 
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
  category?: string;
  description?: string;
  price?: number;
  priceCurrency?: string;
  availability?: string;
  locale?: string;
}) {
  const { 
    productName, 
    productId, 
    productUrl, 
    productImage, 
    productBrand,
    ratingValue,
    reviewCount,
    bestRating = 5,
    worstRating = 1,
    category,
    description,
    price,
    priceCurrency = 'SAR',
    availability = 'InStock',
    locale = 'en'
  } = productData;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    identifier: productId,
    ...(productUrl && { url: productUrl }),
    ...(productImage && { 
      image: Array.isArray(productImage) ? productImage : [productImage] 
    }),
    ...(productBrand && { 
      brand: {
        '@type': 'Brand',
        name: productBrand
      }
    }),
    ...(category && {
      category: category
    }),
    ...(description && {
      description: description
    }),
    ...(price !== undefined && {
      offers: {
        '@type': 'Offer',
        price: price,
        priceCurrency: priceCurrency,
        availability: `https://schema.org/${availability}`,
        url: productUrl || ''
      }
    }),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: worstRating
    },
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en'
  };
}

/**
 * Generate LocalBusiness Review schema for location-based businesses
 * @param businessData Business data with reviews
 * @returns LocalBusiness with AggregateRating schema
 */
export function getLocalBusinessReviewSchema(businessData: {
  businessName: string;
  businessType: string; // e.g., 'ClothingStore', 'TailorShop'
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  url?: string;
  image?: string | string[];
  priceRange?: string;
  openingHours?: string[];
  ratingValue: number;
  reviewCount: number;
  locale?: string;
}) {
  const {
    businessName,
    businessType,
    address,
    geo,
    telephone,
    url,
    image,
    priceRange,
    openingHours,
    ratingValue,
    reviewCount,
    locale = 'en'
  } = businessData;

  return {
    '@context': 'https://schema.org',
    '@type': businessType,
    name: businessName,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    }),
    ...(telephone && { telephone }),
    ...(url && { url }),
    ...(image && { 
      image: Array.isArray(image) ? image : [image] 
    }),
    ...(priceRange && { priceRange }),
    ...(openingHours && { openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0],
      opens: hours.split(' ')[1].split('-')[0],
      closes: hours.split(' ')[1].split('-')[1]
    }))}),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1
    },
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en'
  };
}

export default {
  getReviewSchema,
  getAggregateRatingSchema,
  getLocalBusinessReviewSchema
}; 