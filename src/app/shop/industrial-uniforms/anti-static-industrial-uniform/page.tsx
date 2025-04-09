import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Anti-Static Industrial Uniforms | ESD Protection for Saudi Workplaces | UNEOM',
  description: 'UNEOM\'s premium anti-static industrial uniforms provide superior ESD protection for Saudi oil, gas, and electronics manufacturing environments. ISO 61340-5-1 certified with static dissipative fibers and comfortable design.',
  keywords: 'anti-static uniforms Saudi Arabia, ESD protective workwear, static dissipative industrial clothing, electronics manufacturing PPE, oil and gas safety uniform, clean room garments Saudi, ISO 61340 certified uniform, ATEX compliant workwear',
  openGraph: {
    title: 'Anti-Static Industrial Uniforms | Superior ESD Protection for Sensitive Environments',
    description: 'Engineered for Saudi Arabia\'s demanding industrial environments where electrostatic discharge poses serious risks. Features carbon-core thread technology, static dissipative fibers, and conductive grid design. Certified to ISO 61340-5-1 and ATEX standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/antistatic-uniform-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Anti-Static Industrial Uniform'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/anti-static-industrial-uniform',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/anti-static-industrial-uniform',
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

export default function AntiStaticUniformPage() {
  // Use params to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'anti-static-industrial-uniform'
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
            "name": "UNEOM Premium Anti-Static Industrial Uniform",
            "image": [
              "https://uneom.com/images/products/industrial/antistatic-uniform-1.jpg",
              "https://uneom.com/images/products/industrial/antistatic-uniform-2.jpg",
              "https://uneom.com/images/products/industrial/antistatic-uniform-3.jpg"
            ],
            "description": "Advanced anti-static industrial uniforms engineered for Saudi oil, gas, and electronics manufacturing environments, featuring carbon-core thread technology and static dissipative fibers. ISO 61340-5-1 and ATEX certified.",
            "sku": "UNEOM-AS-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/anti-static-industrial-uniform",
              "priceCurrency": "SAR",
              "price": "480",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "73"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
}
