import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Professional Supervisor Industrial Uniforms | Premium B2B Workwear | UNEOM',
  description: 'UNEOM\'s supervisor industrial uniforms provide distinguished, professional attire for management in Saudi industrial environments. Premium fabrics, custom branding options, and durable construction for daily site supervision.',
  keywords: 'supervisor industrial uniforms Saudi Arabia, management workwear, site supervisor attire, industrial team lead uniforms, branded supervisor clothing, professional industrial apparel, Saudi construction management uniform, oil and gas supervisor workwear',
  openGraph: {
    title: 'Professional Supervisor Industrial Uniforms | Distinguished Management Attire for Saudi Industry',
    description: 'Premium supervisor uniforms designed for Saudi industrial leadership. Distinguished styling with superior comfort, professional appearance, and practical functionality. Available with customized branding and multiple pocket configurations for site management needs.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/supervisor-uniform-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Supervisor Industrial Uniform'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/supervisor-industrial-uniform',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/supervisor-industrial-uniform',
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

export default function SupervisorUniformPage() {
  // Use params to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'supervisor-industrial-uniform'
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
            "name": "UNEOM Professional Supervisor Industrial Uniform",
            "image": [
              "https://uneom.com/images/products/industrial/supervisor-uniform-1.jpg",
              "https://uneom.com/images/products/industrial/supervisor-uniform-2.jpg",
              "https://uneom.com/images/products/industrial/supervisor-uniform-3.jpg"
            ],
            "description": "Premium supervisor industrial uniforms designed for Saudi industrial leadership, featuring distinguished styling, superior comfort, and practical functionality for site management. Available with customized branding options.",
            "sku": "UNEOM-SUP-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/supervisor-industrial-uniform",
              "priceCurrency": "SAR",
              "price": "520",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
}
