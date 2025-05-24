import type { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import { products } from '@/lib/data/products';
import Script from 'next/script';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Find product data for SEO metadata
const productData = products.find(p => p.category === 'industrial-uniforms' && p.id === 'industrial-jacket');

export const metadata: Metadata = {
  title: 'Premium Industrial Safety Jacket | Fire Resistant | UNEOM Saudi Arabia',
  description: 'High-performance industrial safety jackets with fire-resistant properties, reflective elements & durable construction for workplace safety. Made in Saudi Arabia.',
  keywords: 'industrial safety jacket, fire resistant workwear, reflective safety clothing, Saudi Arabia workwear, industrial uniform supplier Riyadh, flame retardant jacket',
  openGraph: {
    title: 'Premium Industrial Safety Jacket | Fire Resistant | UNEOM Saudi Arabia',
    description: 'High-performance industrial safety jackets with fire-resistant properties, reflective elements & durable construction for workplace safety. Made in Saudi Arabia.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial-safety-jacket-main.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Safety Jacket',
      }
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/industrial-jacket',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/industrial-jacket',
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

export default function ProductPage() {
  // Use metadata from params to filter products and get specific product data
  const params = {
    category: 'industrial-uniforms',
    product: 'industrial-jacket'
  };
  
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Industrial Safety Jacket",
            "image": [
              "https://uneom.com/images/products/industrial-safety-jacket-main.jpg",
              "https://uneom.com/images/products/industrial-safety-jacket-alt1.jpg",
              "https://uneom.com/images/products/industrial-safety-jacket-alt2.jpg"
            ],
            "description": "High-performance industrial safety jacket with fire-resistant properties, reflective elements, and durable construction for workplace safety.",
            "sku": "IND-SAF-JKT-001",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/industrial-jacket",
              "priceCurrency": "SAR",
              "price": "499",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "42"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />

      {/* Enhanced Product Description Section */}
      <section className="py-12 bg-neutral-50">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Industrial Safety Jacket | Fire Resistant</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Industrial Safety Jacket | Fire Resistant</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Industrial Safety Jacket | Fire Resistant</h1>
      
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading centered={true}>
              UNEOM Industrial Safety Jacket
            </SectionHeading>
            <div className="prose prose-lg mx-auto">
              <h2>Premium Fire-Resistant Industrial Workwear for Saudi Industries</h2>
              <p>
                UNEOM's industrial safety jacket is specifically engineered for the demanding environments of Saudi Arabia's industrial sector. Designed to meet the highest safety standards while providing exceptional comfort and durability, our industrial jackets are trusted by leading companies in oil and gas, manufacturing, construction, and petrochemical industries across Riyadh, Jeddah, Dammam, and industrial cities throughout the Kingdom.
              </p>
              
              <h3>Advanced Safety Features for High-Risk Industrial Environments</h3>
              <p>
                Each UNEOM industrial safety jacket incorporates multiple layers of protection to ensure worker safety in hazardous conditions. The outer shell features flame-resistant fabric that meets international safety standards including NFPA 2112 and ISO 11612, providing critical protection against flash fires and heat exposure. High-visibility reflective strips compliant with ANSI/ISEA 107 standards enhance worker visibility in low-light conditions, while reinforced stitching at stress points ensures the jacket maintains its integrity during intensive use.
              </p>
              
              <h3>Engineered for Saudi Arabia's Industrial Conditions</h3>
              <p>
                Our industrial jackets are specifically designed to address the unique challenges of Saudi Arabia's industrial environments. The fabric technology balances fire resistance with breathability, helping workers stay comfortable during long shifts in hot conditions. The moisture-wicking inner lining draws sweat away from the body, while strategic ventilation zones improve airflow without compromising safety. These features make UNEOM industrial jackets particularly well-suited for Saudi Arabia's climate while maintaining full compliance with Royal Commission for Jubail and Yanbu (RCJY) safety requirements.
              </p>
              
              <h3>Customization Options for Saudi Companies</h3>
              <p>
                UNEOM offers extensive customization options for industrial safety jackets, allowing companies to incorporate their corporate identity while maintaining safety compliance. Options include:
              </p>
              <ul>
                <li>Company logo embroidery or heat-transfer application</li>
                <li>Department color-coding for easy identification</li>
                <li>Worker name and position labeling</li>
                <li>Custom pocket configurations based on job requirements</li>
                <li>Industry-specific modifications for specialized tools and equipment</li>
              </ul>
              
              <h3>Compliance with Saudi and International Safety Standards</h3>
              <p>
                All UNEOM industrial safety jackets are manufactured to meet or exceed both Saudi and international safety standards, including:
              </p>
              <ul>
                <li>SASO (Saudi Standards, Metrology and Quality Organization) requirements</li>
                <li>NFPA 2112 (Standard on Flame-Resistant Clothing)</li>
                <li>ISO 11612 (Protective clothing against heat and flame)</li>
                <li>ANSI/ISEA 107 (High-visibility safety apparel)</li>
                <li>Aramco Contractor Safety Requirements</li>
                <li>SABIC Safety Standards</li>
              </ul>
              
              <h3>Bulk Ordering for Industrial Companies</h3>
              <p>
                UNEOM specializes in providing industrial uniform solutions for large-scale operations across Saudi Arabia. Our dedicated industrial uniform consultants work directly with safety managers, procurement teams, and HR departments to develop comprehensive uniform programs that address your specific safety requirements while optimizing cost efficiency. With production facilities in Saudi Arabia, we offer faster delivery times and responsive service for both initial orders and replacements.
              </p>
              
              <p>
                Contact our industrial uniform specialists today to discuss your company's requirements or to request samples of our industrial safety jackets. Our team is available to conduct on-site consultations at your facility in Riyadh, Jeddah, Dammam, or any industrial city in Saudi Arabia.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 