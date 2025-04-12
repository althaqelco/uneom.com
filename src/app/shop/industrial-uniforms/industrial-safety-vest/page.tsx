import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'High-Visibility Industrial Safety Vest | ANSI/ISEA 107 Class 2 | UNEOM Saudi Arabia',
  description: 'Premium industrial safety vests with 360° reflective strips for Saudi construction, oil & gas, and manufacturing sectors. Heat-resistant, ANSI/ISEA 107 Class 2 certified with customizable company branding.',
  keywords: 'industrial safety vest Saudi Arabia, hi-vis construction vest, reflective workwear Riyadh, ANSI certified safety vest KSA, oil and gas safety equipment, manufacturing PPE Saudi, customizable safety vests, industrial workwear Saudi Arabia',
  openGraph: {
    title: 'High-Visibility Industrial Safety Vest | ANSI/ISEA 107 Class 2 | UNEOM Saudi Arabia',
    description: 'Premium industrial safety vests with 360° reflective strips for Saudi construction, oil & gas, and manufacturing sectors. Heat-resistant, ANSI/ISEA 107 Class 2 certified with customizable company branding.',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Safety Vest for Saudi workplaces'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/industrial-safety-vest',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/industrial-safety-vest',
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

export default function IndustrialSafetyVestPage() {
  // Use params to get product data
  const params = {
    category: 'industrial-uniforms',
    product: 'industrial-safety-vest'
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
            "name": "UNEOM High-Visibility Industrial Safety Vest",
            "image": [
              "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_2.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_3.webp"
            ],
            "description": "Premium industrial safety vest with 360° high-visibility reflective strips, designed for extreme conditions in Saudi Arabian industrial environments. ANSI/ISEA 107 Class 2 certified with customizable company branding options.",
            "sku": "UNEOM-ISV-200",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/industrial-safety-vest",
              "priceCurrency": "SAR",
              "price": "189",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "95"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
} 