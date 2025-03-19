/**
 * Schema.org Organization markup for UNEOM
 * Optimized for SEO with comprehensive structured data
 */
export function getOrganizationSchema(locale: string = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://uneom.com/#organization',
    name: locale === 'ar' ? 'يونيوم - زي موحد مهني' : 'UNEOM - Professional Uniforms',
    alternateName: locale === 'ar' ? 'UNEOM' : 'يونيوم',
    url: 'https://uneom.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/uneom-logo.png',
      width: 180,
      height: 60
    },
    description: locale === 'ar' 
      ? 'المزود الرائد للزي الموحد والملابس المهنية في المملكة العربية السعودية'
      : 'Leading provider of professional uniforms and corporate workwear in Saudi Arabia',
    slogan: locale === 'ar'
      ? 'ارتقِ بمظهر فريقك مع زي موحد عالي الجودة'
      : 'Elevate your team with premium quality uniforms',
    foundingDate: '2015',
    foundingLocation: {
      '@type': 'Place',
      name: 'Riyadh, Saudi Arabia'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road, Al Faisaliyah Tower, 25th Floor',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: '12212',
      addressCountry: {
        '@type': 'Country',
        name: locale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'
      }
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.6909617,
      longitude: 46.6851237
    },
    telephone: '+971558164922',
    email: 'info@uneom.com',
    sameAs: [
      'https://www.facebook.com/uneom',
      'https://twitter.com/uneom',
      'https://www.instagram.com/uneom_sa',
      'https://www.linkedin.com/company/uneom'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971558164922',
        contactType: 'customer service',
        areaServed: [
          {
            '@type': 'Country',
            name: locale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'
          }
        ],
        availableLanguage: [
          {
            '@type': 'Language',
            name: locale === 'ar' ? 'العربية' : 'Arabic'
          },
          {
            '@type': 'Language',
            name: 'English'
          }
        ]
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971558164922',
        contactType: 'sales',
        areaServed: [
          {
            '@type': 'Country',
            name: locale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'
          }
        ],
        availableLanguage: [
          {
            '@type': 'Language',
            name: locale === 'ar' ? 'العربية' : 'Arabic'
          },
          {
            '@type': 'Language',
            name: 'English'
          }
        ]
      }
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: locale === 'ar' ? 'يونيفورم طبي وملابس للرعاية الصحية' : 'Medical Scrubs & Healthcare Uniforms'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: locale === 'ar' ? 'يونيفورم للطيران' : 'Aviation Uniforms'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: locale === 'ar' ? 'يونيفورم الضيافة والفنادق' : 'Hospitality & Hotel Uniforms'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: locale === 'ar' ? 'يونيفورم الشركات' : 'Corporate Uniforms'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: locale === 'ar' ? 'يونيفورم المدارس والمؤسسات التعليمية' : 'School & Educational Uniforms'
        }
      }
    ],
    brand: {
      '@type': 'Brand',
      name: 'UNEOM',
      logo: 'https://uneom.com/images/uneom-logo.png'
    },
    areaServed: {
      '@type': 'Country',
      name: locale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'ar' ? 'كتالوج منتجات يونيوم' : 'UNEOM Product Catalog',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: locale === 'ar' ? 'يونيفورم الرعاية الصحية' : 'Healthcare Uniforms',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: locale === 'ar' ? 'ملابس طبية ممتازة' : 'Premium Medical Scrubs'
              }
            }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: locale === 'ar' ? 'يونيفورم الطيران' : 'Aviation Uniforms',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Product',
                name: locale === 'ar' ? 'زي طاقم الطائرة الكلاسيكي' : 'Classic Airline Crew Uniform'
              }
            }
          ]
        }
      ]
    }
  };
}

export default getOrganizationSchema;

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