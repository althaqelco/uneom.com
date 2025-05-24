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
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional Supervisor Industrial Uniforms | Premium B2B Workwear</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional Supervisor Industrial Uniforms | Premium B2B Workwear</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional Supervisor Industrial Uniforms | Premium B2B Workwear</h1>
      
        <Container>
          <SectionHeading subtitle="Distinguished Attire for Saudi Arabia's Industrial Leadership">
            Professional Supervisor Industrial Uniforms
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Executive-Grade Workwear for Industrial Management</h2>
              <p>
                UNEOM's Supervisor Industrial Uniforms represent the premier solution for management personnel across Saudi Arabia's diverse industrial sectors. Designed specifically for professionals who bridge the gap between executive leadership and frontline operations, these distinctive uniforms project authority and competence while providing the practical functionality needed for daily site supervision in demanding Saudi industrial environments.
              </p>
              
              <h3>Distinguished Professional Appearance</h3>
              <p>
                Unlike standard workwear, our supervisor uniforms are engineered to create an immediate visual distinction that signifies leadership status within industrial hierarchies:
              </p>
              <ul>
                <li>Premium fabric with a refined finish that maintains a professional appearance throughout demanding workdays in Saudi facilities</li>
                <li>Distinctive color options that align with established industrial management conventions while complying with corporate identity guidelines</li>
                <li>Strategic contrast elements and refined detailing that distinguish supervision personnel from general workforce</li>
                <li>Enhanced cut and tailoring that creates a more formal silhouette while maintaining necessary range of motion</li>
                <li>Additional styling options including epaulets, contrast collars, or cuff details that denote leadership status</li>
                <li>Higher-grade button and closure systems that enhance the premium appearance and durability</li>
              </ul>
              
              <h3>Engineered for Saudi Arabian Management Requirements</h3>
              <p>
                UNEOM's supervisor uniforms are specially developed to address the unique requirements of industrial management roles throughout the Kingdom:
              </p>
              <ul>
                <li>Advanced temperature regulation fabrics engineered for Saudi Arabia's climate while providing enhanced durability suitable for daily site visits</li>
                <li>Moisture-wicking technologies that maintain a professional appearance during transitions between air-conditioned offices and production environments</li>
                <li>Enhanced breathability strategically implemented while maintaining formal appearance essential for management authority</li>
                <li>Durable press treatments that minimize wrinkles and maintain professional appearance throughout long supervision days</li>
                <li>Soil-release finishes that protect against common industrial contaminants while simplifying maintenance</li>
                <li>Antistatic properties essential for supervision in electronics manufacturing, petrochemical facilities, and other sensitive environments</li>
                <li>Optional flame-resistant models available for supervisors in oil and gas, petrochemical, and high-risk industrial environments</li>
              </ul>
              
              <h3>Practical Functionality for Site Management</h3>
              <p>
                While projecting management authority, our supervisor uniforms maintain essential practical features for active industrial oversight:
              </p>
              <ul>
                <li>Purpose-designed pocket configuration for documentation, digital devices, and supervision equipment</li>
                <li>Secure inner pockets for confidential materials, credentials and authorization documents</li>
                <li>Tablet-compatible compartments for accessing digital plans, specifications, and compliance records during inspections</li>
                <li>Reinforced clip points for ID badges, authorization credentials, and emergency response equipment</li>
                <li>Articulated design allowing comfortable movement during site inspections, client tours, and emergency response</li>
                <li>Optional high-visibility elements that can be deployed during site visits to high-risk or regulated areas</li>
                <li>Compatibility with required PPE layers while maintaining professional appearance</li>
              </ul>
              
              <h3>Industry-Specific Customizations</h3>
              <p>
                UNEOM offers specialized supervisor uniform variants tailored to specific Saudi industrial sectors:
              </p>
              
              <h4>Oil & Gas Leadership</h4>
              <ul>
                <li>Optional FR-rated construction compliant with Saudi Aramco standards for management personnel</li>
                <li>Enhanced high-visibility elements that meet safety requirements while maintaining executive appearance</li>
                <li>Chemical splash protection essential for supervision in processing areas</li>
                <li>Heat-resistant properties for management overseeing operations in extreme temperature environments</li>
                <li>Specialized pocket systems for hazard monitoring equipment, communication devices, and emergency protocols</li>
              </ul>
              
              <h4>Construction & Project Management</h4>
              <ul>
                <li>Enhanced durability for regular site visits across challenging construction environments</li>
                <li>Weather-adaptive features for supervisors who transition between office settings and outdoor construction sites</li>
                <li>Specialized storage for project documentation, plans, and inspection equipment</li>
                <li>Optional integrated high-visibility elements for safety compliance during site visits</li>
                <li>Enhanced soil resistance for maintaining professional appearance during frequent construction site inspections</li>
              </ul>
              
              <h4>Manufacturing Leadership</h4>
              <ul>
                <li>Clean-room compatible options for supervision in sensitive manufacturing environments</li>
                <li>ESD-safe variants for electronics and precision manufacturing oversight</li>
                <li>Enhanced chemical resistance for supervision in industrial processing environments</li>
                <li>Specialized configuration for quality control equipment and documentation</li>
                <li>Containment features that prevent foreign object contamination of production lines</li>
              </ul>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg border border-primary-100">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Corporate Identity Integration</h3>
                <p className="mb-4">
                  UNEOM's supervisor uniforms are fully customizable to integrate with established corporate identity systems while maintaining professional distinction:
                </p>
                <ul className="mb-6">
                  <li>Precision color matching to corporate standards for brand consistency</li>
                  <li>Premium embroidery of corporate logos, division identification, and individual titles</li>
                  <li>Custom collar styles, pocket configurations, and design elements that align with organizational identity</li>
                  <li>Integration of corporate values through thoughtful design elements</li>
                  <li>Hierarchical design systems that visually differentiate multiple levels of supervision and management</li>
                </ul>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Request Corporate Uniform Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <h3>Comprehensive Management Uniform Programs</h3>
              <p>
                For large-scale operations throughout Saudi Arabia, UNEOM offers complete supervisor uniform programs that extend beyond simply supplying garments:
              </p>
              <ul>
                <li>Comprehensive needs assessment to determine specific requirements across management levels</li>
                <li>Development of hierarchical uniform systems that visually communicate organizational structure</li>
                <li>Integration with existing workforce uniform programs for visual consistency</li>
                <li>Simplified procurement processes with dedicated account management</li>
                <li>Stock management ensuring availability of all sizes and variants</li>
                <li>Accelerated replacement service essential for management personnel</li>
                <li>Optional laundering and maintenance programs to maintain professional appearance</li>
                <li>Regular program review and optimization based on real-world feedback</li>
              </ul>
              
              <h3>Quality and Durability for Daily Professional Use</h3>
              <p>
                Each UNEOM supervisor uniform undergoes rigorous quality testing to ensure exceptional performance in Saudi Arabian industrial environments:
              </p>
              <ul>
                <li>Enhanced seam strength testing simulating the movements of active supervision roles</li>
                <li>Colorfastness testing guaranteeing appearance retention after repeated industrial laundering</li>
                <li>Abrasion resistance testing ensuring durability in contact with industrial equipment and structures</li>
                <li>Dimensional stability verification confirming proper fit retention through the garment lifecycle</li>
                <li>Performance verification in simulated Saudi environmental conditions</li>
                <li>Comprehensive certification documentation for compliance with relevant standards</li>
              </ul>
              
              <p className="text-lg font-medium mt-8">
                With UNEOM's Professional Supervisor Industrial Uniforms, Saudi industrial organizations can provide their management personnel with workwear that clearly communicates leadership status while delivering the practical functionality needed for effective industrial supervision. Our commitment to quality, comfort, and professional appearance makes UNEOM the trusted choice for management uniforms throughout the Kingdom of Saudi Arabia.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
