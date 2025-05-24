import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Premium Leather Welding Apron | Heat & Flame Resistant | UNEOM Saudi Arabia',
  description: 'Heavy-duty leather welding aprons designed for Saudi industrial environments. Heat and spark resistant with reinforced stitching, adjustable straps, and customizable options for welding professionals.',
  keywords: 'welding apron Saudi Arabia, leather welding protection, heat resistant workwear Riyadh, industrial welding gear, flame resistant apron, welding safety equipment KSA, customizable welding protection, industrial safety gear Saudi',
  openGraph: {
    title: 'Premium Leather Welding Apron | Heat & Flame Resistant | UNEOM Saudi Arabia',
    description: 'Heavy-duty leather welding aprons designed for Saudi industrial environments. Heat and spark resistant with reinforced stitching, adjustable straps, and customizable options for welding professionals.',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_1.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Premium Leather Welding Apron for industrial use'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/welding-apron',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/welding-apron',
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

export default function WeldingApronPage() {
  // Use params to get product data
  const params = {
    category: 'industrial-uniforms',
    product: 'welding-apron'
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
            "name": "UNEOM Premium Leather Welding Apron",
            "image": [
              "https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_2.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_3.webp"
            ],
            "description": "Heavy-duty split cowhide leather welding apron with flame-resistant properties, designed for maximum protection in high-heat industrial environments. Features reinforced stitching, adjustable neck and waist straps, and multiple tool pockets for Saudi Arabian welding professionals.",
            "sku": "UNEOM-WA-300",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/welding-apron",
              "priceCurrency": "SAR",
              "price": "249",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "78"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Leather Welding Apron | Heat & Flame Resistant</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Leather Welding Apron | Heat & Flame Resistant</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Leather Welding Apron | Heat & Flame Resistant</h1>
      
        <Container>
          <SectionHeading centered={true}>
            UNEOM Premium Leather Welding Aprons
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Professional-Grade Welding Protection for Saudi Arabian Industries</h2>
              <p>
                UNEOM's premium leather welding aprons are engineered specifically for the demanding welding environments found throughout Saudi Arabia's industrial sectors. Our heavy-duty welding protection is trusted by professionals in oil and gas, manufacturing, construction, and fabrication workshops across Riyadh, Jeddah, Dammam, and industrial cities throughout the Kingdom.
              </p>
              
              <h3>Superior Heat and Spark Protection</h3>
              <p>
                Each UNEOM welding apron is crafted from premium split cowhide leather with a thickness of 1.2-1.4mm, providing exceptional resistance to sparks, spatter, and heat up to 200°C. The flame-resistant properties ensure protection during intense welding operations, while the reinforced stitching with Kevlar thread enhances durability in high-stress areas.
              </p>
              <p>
                Our aprons feature a specialized treatment that maintains flexibility even after prolonged exposure to heat, preventing the cracking and stiffening common in lower-quality welding gear. This ensures comfort during long shifts while maintaining essential protection against molten metal splashes and UV radiation from welding arcs.
              </p>
              
              <h3>Engineered for Saudi Arabian Welding Environments</h3>
              <p>
                UNEOM welding aprons are specifically designed to address the challenges faced by welders in Saudi Arabia:
              </p>
              <ul>
                <li>Extended coverage (36" x 24") for comprehensive protection in high-heat industrial settings</li>
                <li>Heat-dissipating design to reduce body temperature in Saudi Arabia's hot climate</li>
                <li>Reinforced chest protection for vertical welding applications common in infrastructure projects</li>
                <li>Adjustable cross-back straps that distribute weight evenly to reduce neck strain during long shifts</li>
                <li>Strategic tool pockets positioned for easy access while maintaining safety protocols</li>
                <li>Oil-resistant properties for welding in petrochemical environments</li>
              </ul>
              
              <h3>Compliant with Local and International Standards</h3>
              <p>
                Our premium welding aprons meet or exceed all relevant safety standards, including:
              </p>
              <ul>
                <li>ISO 11611:2015 for protective clothing for welding and allied processes</li>
                <li>EN ISO 11611:2015 Class 2 for protection against heat and flame</li>
                <li>ASTM F2302 for flame resistant welding protection</li>
                <li>Saudi Aramco Engineering Standards (SAES) for welding PPE</li>
                <li>SASO (Saudi Standards, Metrology and Quality Organization) requirements</li>
                <li>SABIC safety requirements for welding contractors</li>
              </ul>
              
              <h3>Customization Options for Saudi Companies</h3>
              <p>
                UNEOM offers extensive customization options for our welding aprons, including:
              </p>
              <ul>
                <li>Company logo embossing or heat-resistant embroidery</li>
                <li>Color-coded binding for department identification</li>
                <li>Custom pocket configurations based on specific tool requirements</li>
                <li>Extended sizing options for all body types</li>
                <li>Additional protective features such as leather sleeves or chest guards</li>
                <li>Integration with other PPE systems for comprehensive protection</li>
              </ul>
              
              <h3>Bulk Ordering for Industrial Operations</h3>
              <p>
                UNEOM specializes in providing welding PPE solutions for large-scale operations across Saudi Arabia. Our industrial safety consultants work directly with welding supervisors, safety managers, and procurement teams to develop comprehensive welding protection programs that address your specific workplace hazards while optimizing cost efficiency.
              </p>
              <p>
                With local production capabilities in Saudi Arabia, we offer faster delivery times and responsive service for both initial orders and replacements, ensuring your welding teams remain protected with minimal downtime.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-4">Request a Consultation for Your Welding PPE Requirements</h3>
                <p className="text-center mb-6">
                  Our welding protection specialists can conduct on-site assessments at your facility in Riyadh, Jeddah, Dammam, or any industrial city in Saudi Arabia. We'll help you determine the optimal welding protection solutions for your specific operations and compliance requirements.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Our Industrial Safety Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 