/**
 * Schema.org Product markup - Optimized for better e-commerce SEO
 * @param product The product data
 * @returns Product schema object
 */
export function getProductSchema(product: {
  id: string;
  name: string;
  description: string;
  image: string | string[];
  category?: string;
  subCategory?: string;
  brand?: string;
  price?: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  sku?: string;
  mpn?: string;
  reviewCount?: number;
  ratingValue?: number;
  url?: string;
  features?: string[];
  colors?: {name: string; value: string}[];
  sizes?: string[];
  material?: string;
  weight?: {value: number; unit: string};
  dimensions?: {width: number; height: number; depth: number; unit: string};
  locale?: string;
}) {
  const {
    id,
    name,
    description,
    image,
    category = 'Uniform',
    subCategory,
    brand = 'UNEOM',
    price,
    priceCurrency = 'SAR',
    availability = 'InStock',
    sku,
    mpn,
    reviewCount,
    ratingValue,
    url = `https://uneom.com/shop/products/${id}`,
    features,
    colors,
    sizes,
    material,
    weight,
    dimensions,
    locale = 'en'
  } = product;

  const isArabic = locale === 'ar';
  const organizationName = isArabic ? 'يونيوم' : 'UNEOM';

  // Construct image array properly
  const imageArray = Array.isArray(image) ? image : [image];
  const imageObjects = imageArray.map(img => ({
    '@type': 'ImageObject',
    url: img.startsWith('http') ? img : `https://uneom.com${img}`
  }));

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://uneom.com/product/${id}#product`,
    name,
    description,
    image: imageObjects,
    brand: {
      '@type': 'Brand',
      name: brand,
      logo: 'https://uneom.com/images/uneom-logo.png'
    },
    offers: {
      '@type': 'Offer',
      url,
      itemCondition: 'https://schema.org/NewCondition',
      availability: `https://schema.org/${availability}`,
      seller: {
        '@type': 'Organization',
        name: organizationName,
        url: 'https://uneom.com'
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          currency: priceCurrency,
          value: 0.00
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          businessDays: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 5,
            unitCode: 'DAY'
          }
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'SA'
        }
      }
    }
  };

  // Add additional structured metadata if available
  if (category) {
    schema.category = category;
  }

  if (subCategory) {
    schema.subCategory = subCategory;
  }

  // Add price if available
  if (price) {
    schema.offers.price = price;
    schema.offers.priceCurrency = priceCurrency;
  }

  // Add product identifiers if available
  if (sku) {
    schema.sku = sku;
  }

  if (mpn) {
    schema.mpn = mpn;
  }

  // Add reviews if available
  if (reviewCount && ratingValue) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1
    };
  }

  // Add product features
  if (features && features.length > 0) {
    schema.additionalProperty = features.map(feature => ({
      '@type': 'PropertyValue',
      name: 'feature',
      value: feature
    }));
  }

  // Add available colors
  if (colors && colors.length > 0) {
    const colorProperty = {
      '@type': 'PropertyValue',
      name: isArabic ? 'الألوان المتاحة' : 'Available Colors',
      value: colors.map(color => color.name).join(', ')
    };
    
    schema.additionalProperty = schema.additionalProperty || [];
    schema.additionalProperty.push(colorProperty);
  }

  // Add available sizes
  if (sizes && sizes.length > 0) {
    const sizeProperty = {
      '@type': 'PropertyValue',
      name: isArabic ? 'المقاسات المتاحة' : 'Available Sizes',
      value: sizes.join(', ')
    };
    
    schema.additionalProperty = schema.additionalProperty || [];
    schema.additionalProperty.push(sizeProperty);
  }

  // Add material
  if (material) {
    schema.material = material;
  }

  // Add weight if available
  if (weight) {
    const weightProperty = {
      '@type': 'PropertyValue',
      name: isArabic ? 'الوزن' : 'Weight',
      value: `${weight.value} ${weight.unit}`
    };
    
    schema.additionalProperty = schema.additionalProperty || [];
    schema.additionalProperty.push(weightProperty);
  }

  // Add dimensions if available
  if (dimensions) {
    const dimensionValue = `${dimensions.width}×${dimensions.height}×${dimensions.depth} ${dimensions.unit}`;
    const dimensionProperty = {
      '@type': 'PropertyValue',
      name: isArabic ? 'الأبعاد' : 'Dimensions',
      value: dimensionValue
    };
    
    schema.additionalProperty = schema.additionalProperty || [];
    schema.additionalProperty.push(dimensionProperty);
  }

  return schema;
}

/**
 * Schema.org ItemList markup for product lists
 * Enhanced for better product discovery and SEO
 * @param products Array of product data
 * @returns ItemList schema object
 */
export function getProductListSchema(products: Array<{
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  price?: number;
  locale?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `https://uneom.com/product/${product.id}#product`,
        name: product.name,
        description: product.description,
        image: {
          '@type': 'ImageObject',
          url: product.image.startsWith('http') ? product.image : `https://uneom.com${product.image}`
        },
        url: product.url.startsWith('http') ? product.url : `https://uneom.com${product.url}`,
        ...(product.category && { category: product.category }),
        ...(product.price && { 
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'SAR',
            availability: 'https://schema.org/InStock',
            url: product.url.startsWith('http') ? product.url : `https://uneom.com${product.url}`
          }
        }),
        brand: {
          '@type': 'Brand',
          name: product.locale === 'ar' ? 'يونيوم' : 'UNEOM'
        }
      }
    }))
  };
}

export default {
  getProductSchema,
  getProductListSchema
}; 