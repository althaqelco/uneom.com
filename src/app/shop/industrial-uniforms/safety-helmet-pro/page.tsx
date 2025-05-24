import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization directly without using products.find()
export const metadata: Metadata = {
  title: 'Advanced Safety Helmet Pro | ANSI-Certified Industrial Head Protection | UNEOM',
  description: 'UNEOM\'s Advanced Safety Helmet Pro provides superior protection in Saudi industrial environments with Class E electrical insulation, UV resistance, and integrated cooling system. ANSI Z89.1 & SASO 1368 certified.',
  keywords: 'safety helmet Saudi Arabia, industrial head protection, construction safety equipment, ANSI certified helmet, electrical insulation helmet, UV-resistant safety helmet, customizable safety helmets, Saudi industrial PPE',
  openGraph: {
    title: 'Advanced Safety Helmet Pro | Industry-Leading Head Protection for Saudi Workplaces',
    description: 'Engineered for Saudi Arabia\'s demanding industrial environments. Class E electrical protection, UV-resistant, integrated cooling for extreme heat. Exceeds GCC & international safety standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/helmet-pro-1.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Advanced Safety Helmet Pro'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/safety-helmet-pro',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/safety-helmet-pro',
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

export default function SafetyHelmetProPage() {
  // Use metadata from params to filter products and get specific product data
  const params = {
    category: 'industrial-uniforms',
    product: 'safety-helmet-pro'
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
            "name": "UNEOM Advanced Safety Helmet Pro",
            "image": [
              "https://uneom.com/images/products/safety/helmet-pro-1.webp",
              "https://uneom.com/images/products/safety/helmet-pro-2.webp",
              "https://uneom.com/images/products/safety/helmet-pro-3.webp"
            ],
            "description": "Advanced impact-resistant safety helmet engineered for Saudi industrial and construction environments, featuring Class E electrical insulation and integrated cooling system.",
            "sku": "UNEOM-SH-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/safety-helmet-pro",
              "priceCurrency": "SAR",
              "price": "189",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "124"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Advanced Safety Helmet Pro | ANSI-Certified Industrial Head Protection</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Advanced Safety Helmet Pro | ANSI-Certified Industrial Head Protection</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Advanced Safety Helmet Pro | ANSI-Certified Industrial Head Protection</h1>
      
        <Container>
          <SectionHeading subtitle="Industry-Leading Protection for Saudi Arabia's Most Demanding Environments">
            Advanced Safety Helmet Pro
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Superior Head Protection Engineered for Saudi Industrial Conditions</h2>
              <p>
                UNEOM's Advanced Safety Helmet Pro represents the pinnacle of industrial head protection, specifically designed to meet the unique challenges faced by workers in Saudi Arabia's construction sites, oil and gas facilities, manufacturing plants, and electrical installations. Unlike standard safety helmets, our Advanced Safety Helmet Pro is engineered from the ground up to withstand the Kingdom's extreme conditions while providing uncompromising protection against impact, electrical hazards, and falling objects.
              </p>
              
              <h3>Revolutionary Impact Protection System</h3>
              <p>
                At the core of our Advanced Safety Helmet Pro is a proprietary multi-layer impact absorption system that exceeds both GCC and international safety standards:
              </p>
              <ul>
                <li>Advanced HDPE (High-Density Polyethylene) outer shell provides superior impact resistance while maintaining a lightweight profile (weighing just 380g)</li>
                <li>Patented honeycomb impact absorption layer that distributes force across a wider area, reducing impact transferred to the head by up to 40% compared to standard helmets</li>
                <li>Multi-point suspension system with precision adjustment for optimal fit across diverse head sizes and shapes</li>
                <li>Extended rear coverage provides additional protection for the occipital region, critical in industrial climbing and working at heights</li>
                <li>Impact rating exceeding ANSI Z89.1 Type I Class E requirements, with tested protection against impacts up to 100 joules</li>
                <li>Reinforced brim design that maintains structural integrity even after significant impacts</li>
                <li>Internal MIPS (Multi-directional Impact Protection System) technology to reduce rotational forces during angled impacts</li>
              </ul>
              
              <h3>Designed for Saudi Arabia's Extreme Climate</h3>
              <p>
                Every aspect of the Advanced Safety Helmet Pro is optimized for performance in the Kingdom's unique and challenging climate conditions:
              </p>
              <ul>
                <li>Advanced UV-resistant shell material maintains structural integrity even after years of exposure to intense Saudi desert sunlight</li>
                <li>Integrated ventilation system with 10 strategically positioned airflow channels that promote cooling without compromising safety</li>
                <li>Hydrophilic sweatband with moisture-wicking technology that can absorb up to 10 times its weight in perspiration</li>
                <li>Optional integrated cooling system that can maintain a temperature differential of up to 8°C between the helmet interior and ambient conditions</li>
                <li>Specialized heat-reflective exterior coating reduces surface temperature by up to 20% in direct sunlight</li>
                <li>Anti-static treatment prevents dust accumulation in sandy conditions common in Saudi industrial zones</li>
                <li>Materials tested to withstand temperature extremes from -10°C to 60°C without degradation or performance loss</li>
                <li>Special vent covers that prevent sand infiltration while maintaining airflow</li>
              </ul>
              
              <h3>Comprehensive Electrical Protection</h3>
              <p>
                Our Advanced Safety Helmet Pro provides industry-leading electrical protection, crucial for workers in Saudi Arabia's expanding energy sector:
              </p>
              <ul>
                <li>Class E electrical insulation with verified protection up to 20,000 volts, exceeding international safety standards</li>
                <li>Non-conductive adjustment systems and accessories to maintain electrical protection integrity</li>
                <li>Dielectric testing conducted at temperatures simulating Saudi summer conditions to ensure consistent protection</li>
                <li>Proprietary material formulation with enhanced electrical resistivity compared to conventional safety helmets</li>
                <li>Conforms to SASO electrical protection requirements for personal protective equipment</li>
                <li>Optional integrated arc flash face shield attachment points compatible with NFPA 70E requirements</li>
                <li>Anti-static properties to prevent dangerous spark generation in potentially explosive atmospheres</li>
              </ul>
              
              <h3>Ergonomic Comfort for Extended Wear</h3>
              <p>
                Understanding that comfort is essential for compliance, the Advanced Safety Helmet Pro includes numerous features designed to enhance wearability during long shifts in Saudi Arabian industrial environments:
              </p>
              <ul>
                <li>Four-point adjustable suspension system with precision ratchet adjustment (1mm increments) for a secure, personalized fit</li>
                <li>Ergonomically designed interior padding with pressure distribution technology</li>
                <li>Balanced weight distribution to reduce neck fatigue during extended wear</li>
                <li>Low-profile design compatible with additional PPE including face shields, hearing protection, and respiratory equipment</li>
                <li>Breathable interior with channels specifically designed to promote airflow in high-temperature environments</li>
                <li>Replaceable comfort pads in various thicknesses to customize fit</li>
                <li>Extended size range (53-64cm) with special sizing options available for a diverse workforce</li>
                <li>Optional winter liner attachment for cooler periods in northern regions of the Kingdom</li>
              </ul>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Request a Safety Assessment for Your Workplace</h3>
                <p className="mb-6">
                  Our safety specialists can conduct a comprehensive assessment of your facility in Riyadh, Jeddah, Dammam, or anywhere in Saudi Arabia to determine the optimal head protection solutions for your specific industrial hazards and environmental challenges.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Our Safety Experts
                    </Button>
                  </Link>
                </div>
              </div>
              
              <h3>Customization Options for Saudi Industrial Operations</h3>
              <p>
                UNEOM offers extensive customization options for our Advanced Safety Helmet Pro to meet the specific requirements of industrial operations throughout Saudi Arabia:
              </p>
              <ul>
                <li>Corporate branding with durable UV-resistant printing or embossing</li>
                <li>Department-specific color coding system for visual management and identification</li>
                <li>Reflective elements in customizable patterns for enhanced visibility in low-light conditions</li>
                <li>Integration of specialized attachments including cameras, lights, and communication systems</li>
                <li>RFID/NFC tag incorporation for access control and personnel tracking</li>
                <li>QR code integration for quick access to equipment information and inspection records</li>
                <li>Specialized holder systems for face shields and other accessories required in specific industrial operations</li>
                <li>Custom sizing programs for workforces with specific anthropometric requirements</li>
              </ul>
              
              <h3>Compliance with Saudi and International Standards</h3>
              <p>
                The Advanced Safety Helmet Pro is certified to meet or exceed all relevant safety standards applicable in Saudi Arabia:
              </p>
              <ul>
                <li>ANSI/ISEA Z89.1-2014 (Type I, Class E) for head protection</li>
                <li>EN 397:2012+A1:2012 European standard for industrial safety helmets</li>
                <li>Saudi Arabian Standards Organization (SASO) 1368 requirements</li>
                <li>Gulf Standardization Organization (GSO) technical regulations for PPE</li>
                <li>Saudi Aramco Engineering Standards (SAES) for head protection</li>
                <li>SABIC safety requirements for contractor PPE</li>
                <li>ISO 9001:2015 quality management system certification for manufacturing processes</li>
                <li>Relevant NFPA standards for electrical work and arc flash protection</li>
              </ul>
              
              <h3>Integrated Accessory System</h3>
              <p>
                The Advanced Safety Helmet Pro features a comprehensive accessory mounting system designed to integrate with other essential PPE required in Saudi industrial environments:
              </p>
              <ul>
                <li>Universal side slots compatible with a wide range of earmuffs and hearing protection</li>
                <li>Integrated attachment points for face shields with quick-connect/disconnect functionality</li>
                <li>Front mount for headlamps with secure positioning and cable management</li>
                <li>Compatible with leading brand respiratory protection systems</li>
                <li>Optional integrated eye protection with retractable mechanism</li>
                <li>Attachment system for neck shades critical in outdoor Saudi work environments</li>
                <li>Specialized mounting for communication systems used in complex industrial operations</li>
                <li>Compatibility with fall protection systems for work at heights</li>
              </ul>
              
              <h3>Bulk Programs for Industrial Operations</h3>
              <p>
                UNEOM specializes in providing comprehensive head protection solutions for large-scale industrial operations throughout Saudi Arabia. Our dedicated safety equipment specialists work directly with HSE managers, procurement teams, and operations leaders to develop customized head protection programs that address specific workplace hazards while optimizing cost efficiency.
              </p>
              <p>
                With local inventory in Saudi Arabia, we offer faster delivery times and responsive service for both initial orders and replacements. Our helmet management system can integrate with your safety operations for streamlined inspection scheduling, reordering processes, and compliance documentation—particularly valuable for large operations with multiple sites across the Kingdom.
              </p>
              
              <h3>Quality Assurance and Testing</h3>
              <p>
                Every Advanced Safety Helmet Pro undergoes rigorous quality testing designed to simulate the challenging conditions found in Saudi Arabian industrial environments:
              </p>
              <ul>
                <li>Impact testing at temperature extremes simulating both summer and winter conditions</li>
                <li>Accelerated UV aging to verify performance after extended exposure to Saudi sunlight</li>
                <li>Electrical insulation testing under high-humidity conditions</li>
                <li>Penetration resistance verification using multiple impact angles</li>
                <li>Retention system strength testing exceeding industry standards</li>
                <li>Chemical resistance evaluation against common industrial substances</li>
                <li>Comfort and wearability assessment through extended wear trials</li>
                <li>Compatibility testing with other PPE typically used in Saudi industrial settings</li>
              </ul>
              <p>
                This comprehensive testing ensures that the Advanced Safety Helmet Pro will maintain its protective capabilities throughout its service life, even under the most demanding conditions found in Saudi Arabian industrial environments.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 