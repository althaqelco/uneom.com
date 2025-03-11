/**
 * Schema.org Product markup
 * @param product The product data
 * @returns Product schema object
 */
export function getProductSchema(product: {
  id: string;
  name: string;
  description: string;
  image: string;
  category?: string;
  brand?: string;
  price?: number;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  reviewCount?: number;
  ratingValue?: number;
}) {
  const {
    id,
    name,
    description,
    image,
    category = 'Uniform',
    brand = 'UNEOM',
    price,
    availability = 'InStock',
    reviewCount,
    ratingValue,
  } = product;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: Array.isArray(image) ? image : [image],
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    category,
    offers: {
      '@type': 'Offer',
      availability: `https://schema.org/${availability}`,
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'UNEOM',
      },
    },
  };

  // Add price if available
  if (price) {
    schema.offers.price = price;
    schema.offers.priceCurrency = 'SAR';
  }

  // Add reviews if available
  if (reviewCount && ratingValue) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
    };
  }

  return schema;
}

/**
 * Schema.org ItemList markup for product lists
 * @param products Array of product data
 * @returns ItemList schema object
 */
export function getProductListSchema(products: Array<{
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        url: product.url,
      },
    })),
  };
} 