import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Premium Mechanics Overalls | Oil-Resistant Workwear | UNEOM Saudi Arabia',
  description: 'Heavy-duty mechanics overalls designed for Saudi automotive and industrial sectors. Features oil-resistant fabric, reinforced knees, multiple tool pockets, and adjustable waist for maximum comfort and protection in demanding environments.',
  keywords: 'mechanics overalls Saudi Arabia, automotive workwear Riyadh, oil-resistant coveralls, industrial mechanic uniform, Saudi garage workwear, heavy-duty mechanics clothing, automotive repair PPE, durable mechanics coveralls KSA',
  openGraph: {
    title: 'Premium Mechanics Overalls | Oil-Resistant Workwear | UNEOM Saudi Arabia',
    description: 'Heavy-duty mechanics overalls designed for Saudi automotive and industrial sectors. Features oil-resistant fabric, reinforced knees, multiple tool pockets, and adjustable waist for maximum comfort and protection in demanding environments.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial-coverall.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Premium Mechanics Overalls'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/mechanics-overalls',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/mechanics-overalls',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MechanicsOverallsPage() {
  // Use params to get product data
  const params = {
    category: 'industrial-uniforms',
    product: 'mechanics-overalls'
  };
  
  return (
    <>
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Premium Mechanics Overalls",
            "image": [
              "https://uneom.com/images/products/industrial-coverall.jpg",
              "https://uneom.com/images/industries/Factory_Industrial/industrial-coverall-pro.webp",
              "https://uneom.com/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg"
            ],
            "description": "Heavy-duty mechanics overalls engineered for Saudi Arabia's automotive and industrial maintenance sectors. Features oil and chemical-resistant fabric, CORDURA® reinforced knees and elbows, multiple specialized tool pockets, and bi-swing back for maximum mobility during complex mechanical tasks.",
            "sku": "UNEOM-MO-350",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/mechanics-overalls",
              "priceCurrency": "SAR",
              "price": "329",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "112"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
} 