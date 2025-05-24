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
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Mechanics Overalls | Oil-Resistant Workwear</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Mechanics Overalls | Oil-Resistant Workwear</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Mechanics Overalls | Oil-Resistant Workwear</h1>
      
        <Container>
          <SectionHeading subtitle="Engineered Protection for Automotive and Industrial Maintenance Professionals">
            Premium Mechanics Overalls
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Advanced Workwear for Saudi Arabia's Demanding Mechanical Environments</h2>
              <p>
                UNEOM's mechanics overalls represent the ultimate solution for professionals working in Saudi Arabia's automotive repair shops, industrial maintenance departments, and manufacturing facilities. Engineered specifically for the unique challenges faced by mechanics and maintenance personnel in the Kingdom, our overalls combine superior protection against oils, chemicals, and abrasion with exceptional comfort and mobility features essential for complex mechanical tasks.
              </p>
              
              <h3>Superior Protection for Mechanical Work</h3>
              <p>
                Our premium mechanics overalls are constructed with advanced fabrics that provide comprehensive protection against the specific hazards found in Saudi Arabian mechanical environments:
              </p>
              <ul>
                <li>Oil and hydrocarbon-resistant fabric that repels automotive fluids, lubricants, and fuel while maintaining breathability in warm workshop environments</li>
                <li>Chemical splash protection that guards against batteries acids, cleaning solvents, and other corrosive substances commonly used in Saudi automotive and industrial facilities</li>
                <li>300g/m² heavyweight twill construction with enhanced tensile strength that resists tears and punctures from sharp edges and metal components</li>
                <li>Flame-resistant options available for mechanics working in petroleum processing facilities and other high-risk environments in compliance with Saudi Aramco safety requirements</li>
                <li>Anti-static properties that reduce the risk of spark generation in environments where flammable materials are present</li>
                <li>CORDURA® reinforced knees and elbows that provide up to 25 times the abrasion resistance of standard workwear fabrics</li>
              </ul>
              
              <h3>Designed for Saudi Arabian Working Conditions</h3>
              <p>
                Unlike standard mechanics overalls, UNEOM's premium workwear is specifically engineered to perform in the unique working conditions found in Saudi Arabia:
              </p>
              <ul>
                <li>Enhanced breathability with strategically placed ventilation panels to combat high workshop temperatures common in Riyadh, Jeddah, and Dammam</li>
                <li>Moisture-wicking properties that help maintain comfort during physically demanding tasks in non-climate-controlled environments</li>
                <li>Extended sizing options to accommodate layering needs during cooler winter months in northern regions of the Kingdom</li>
                <li>Color options specifically selected to minimize visible staining from oils and dirt while maintaining professional appearance in Saudi Arabian workplace environments</li>
                <li>UV-resistant fabrics that maintain their integrity even when mechanics must perform outdoor repairs in intense sunlight</li>
                <li>Quick-drying properties essential for industrial laundry systems commonly used by major Saudi automotive and maintenance operations</li>
              </ul>
              
              <h3>Ergonomic Features for Maximum Productivity</h3>
              <p>
                UNEOM understands the complex physical demands placed on mechanics in Saudi Arabia's automotive and industrial sectors. Our overalls include advanced ergonomic features designed to enhance mobility and reduce fatigue during long shifts:
              </p>
              <ul>
                <li>Bi-swing back design that expands to accommodate reaching and stretching movements when working on elevated equipment or underneath vehicles</li>
                <li>Articulated knees with expansion pleats that provide unrestricted movement when crouching, kneeling, or climbing</li>
                <li>Adjustable elastic waist and side tabs that ensure a secure fit across various body types while allowing for natural movement</li>
                <li>Gusseted crotch construction that eliminates fabric binding and increases comfort during active work</li>
                <li>Strategic seam placement that minimizes pressure points when leaning against hard surfaces or equipment</li>
                <li>Lightweight yet durable YKK zippers and closures designed for one-handed operation in tight spaces</li>
                <li>Adjustable cuffs with secure closures to prevent intrusion of debris while working underneath vehicles</li>
              </ul>
              
              <h3>Specialized Storage Solutions for Mechanics</h3>
              <p>
                Our mechanics overalls feature a comprehensive storage system designed specifically for the tools and equipment used in Saudi Arabian automotive and maintenance environments:
              </p>
              <ul>
                <li>20+ strategically positioned pockets designed through consultation with working mechanics throughout the Kingdom</li>
                <li>Reinforced hammer loop and wrench pockets positioned for ideal weight distribution</li>
                <li>Specialized compartments for digital diagnostic tools and tablets increasingly used in modern Saudi automotive workshops</li>
                <li>Secure zippered pockets for valuable small parts and fasteners</li>
                <li>Easy-access chest pockets with transparent ID window compatible with Saudi workplace security requirements</li>
                <li>Dedicated smartphone pocket with cable routing channel for communication while working</li>
                <li>Removable PALS/MOLLE attachment system for customizable tool organization</li>
                <li>Integrated ruler pocket specifically sized for standard measuring tools</li>
              </ul>
              
              <h3>Customization for Saudi Automotive Businesses</h3>
              <p>
                UNEOM offers extensive customization options for our mechanics overalls to meet the specific needs of automotive businesses throughout Saudi Arabia:
              </p>
              <ul>
                <li>Corporate branding with durable embroidery that withstands industrial laundering</li>
                <li>Technician name and certification level embroidery in both Arabic and English</li>
                <li>Department color-coding system for visual management in large facilities</li>
                <li>Integration of dealership or automotive brand colors</li>
                <li>Specialized pocket configurations based on specific maintenance specialties</li>
                <li>RFID tag integration for tool inventory control and technician tracking</li>
                <li>Enhanced high-visibility options for roadside service personnel</li>
                <li>Custom sizing program for accurate fit across diverse workforce demographics</li>
              </ul>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Request a Consultation for Your Mechanics Workwear Program</h3>
                <p className="mb-6">
                  Our automotive workwear specialists can conduct an assessment of your specific mechanical environment in Riyadh, Jeddah, Dammam, or any location in Saudi Arabia to develop customized mechanics overalls that meet your exact operational requirements.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Our Automotive Workwear Team
                    </Button>
                  </Link>
                </div>
              </div>
              
              <h3>Compliance with Saudi Standards</h3>
              <p>
                Our mechanics overalls comply with all relevant Saudi Arabian workplace safety regulations and industry standards:
              </p>
              <ul>
                <li>Saudi Aramco Engineering Standards for maintenance personnel workwear</li>
                <li>Saudi Arabian Standards Organization (SASO) requirements for industrial workwear</li>
                <li>General Organization for Social Insurance (GOSI) workplace safety guidelines</li>
                <li>Ministry of Labor occupational safety requirements for automotive sector</li>
                <li>International standards including EN ISO 13688:2013 for protective clothing</li>
                <li>EN 14325 standards for chemical protective clothing when applicable</li>
              </ul>
              
              <h3>Bulk Programs for Automotive Businesses</h3>
              <p>
                UNEOM specializes in providing mechanics overalls for automotive dealerships, fleet maintenance operations, and industrial maintenance departments throughout Saudi Arabia. Our dedicated account managers work directly with fleet managers, workshop supervisors, and procurement teams to develop comprehensive workwear programs that enhance safety, productivity, and professional image.
              </p>
              <p>
                With local manufacturing facilities in Saudi Arabia, we offer faster delivery times, responsive service for both initial orders and replacements, and the ability to quickly address changing requirements. Our inventory management system can integrate with your operations for streamlined reordering processes, particularly valuable for large automotive operations with multiple locations throughout the Kingdom.
              </p>
              
              <h3>Quality Assurance and Durability</h3>
              <p>
                Every pair of UNEOM mechanics overalls undergoes rigorous quality testing designed to simulate the challenging conditions found in Saudi Arabian automotive and industrial environments:
              </p>
              <ul>
                <li>Hydrocarbon resistance testing to verify performance against oils and fuels</li>
                <li>Martindale abrasion testing to ensure durability in high-wear areas</li>
                <li>Tensile strength testing for all critical seams and stress points</li>
                <li>Wash durability testing simulating a minimum of 50 industrial laundering cycles</li>
                <li>Color fastness testing to verify appearance retention after repeated exposure to automotive chemicals</li>
                <li>Ergonomic movement testing performed by working mechanics to verify comfort and functionality</li>
              </ul>
              <p>
                Our mechanics overalls are designed to maintain their protective properties and professional appearance for a minimum of 18 months of daily use in demanding Saudi automotive and industrial environments, offering exceptional value and performance for your workwear investment.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 