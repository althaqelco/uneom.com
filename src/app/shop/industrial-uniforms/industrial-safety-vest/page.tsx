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
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">High-Visibility Industrial Safety Vest | ANSI/ISEA 107 Class 2</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">High-Visibility Industrial Safety Vest | ANSI/ISEA 107 Class 2</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">High-Visibility Industrial Safety Vest | ANSI/ISEA 107 Class 2</h1>
      
        <Container>
          <SectionHeading centered={true}>
            UNEOM High-Visibility Industrial Safety Vests
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Premium Safety Vests for Saudi Arabia's Industrial Environments</h2>
              <p>
                UNEOM's high-visibility industrial safety vests are designed specifically for the demanding conditions of Saudi Arabian work environments. Our safety vests provide essential visibility and protection for workers in construction, oil and gas, manufacturing, and logistics sectors throughout Riyadh, Jeddah, Dammam, and industrial cities across the Kingdom.
              </p>
              
              <h3>Advanced Safety Features for Maximum Visibility</h3>
              <p>
                Each UNEOM safety vest incorporates 360° high-visibility reflective strips that exceed ANSI/ISEA 107 Class 2 standards, ensuring workers remain visible in all lighting conditions. The specialized reflective material maintains its properties even in the extreme heat of Saudi summer conditions, providing reliable visibility without degradation.
              </p>
              <p>
                Our vests feature lightweight, breathable mesh fabric designed to maximize comfort in hot working environments while providing the durability needed for industrial applications. The flame-resistant properties offer an additional layer of protection for workers in high-risk environments such as petrochemical facilities and construction sites.
              </p>
              
              <h3>Customized for Saudi Industrial Requirements</h3>
              <p>
                UNEOM safety vests are tailored to meet the specific needs of Saudi industrial sites:
              </p>
              <ul>
                <li>Heat-resistant materials that maintain integrity in extreme desert temperatures</li>
                <li>Enhanced visibility features for sandstorm conditions and low-light desert environments</li>
                <li>Multilingual safety information labels in both Arabic and English</li>
                <li>Adjustable closures that accommodate traditional Saudi workwear underneath</li>
                <li>Specialized pockets for identification cards required at Saudi industrial facilities</li>
                <li>Radio loops and tool attachments positioned for regional safety protocols</li>
              </ul>
              
              <h3>Compliant with Local and International Standards</h3>
              <p>
                Our industrial safety vests meet or exceed all relevant safety standards, including:
              </p>
              <ul>
                <li>ANSI/ISEA 107 Class 2 high-visibility standards</li>
                <li>Saudi Aramco Engineering Standards (SAES)</li>
                <li>SASO (Saudi Standards, Metrology and Quality Organization) requirements</li>
                <li>EN ISO 20471:2013 high-visibility clothing standards</li>
                <li>SABIC safety requirements for contractor PPE</li>
              </ul>
              
              <h3>Customization Options for Saudi Companies</h3>
              <p>
                UNEOM offers extensive customization options for our safety vests, including:
              </p>
              <ul>
                <li>Company logo printing or embroidery in compliance with corporate branding guidelines</li>
                <li>Department-specific color coding for easy identification within large facilities</li>
                <li>Job role identification with Arabic and English text options</li>
                <li>QR code integration for digital safety verification systems</li>
                <li>Custom pocket configurations for specific tool requirements</li>
                <li>Specialized attachment points for gas monitors and other safety equipment</li>
              </ul>
              
              <h3>Bulk Ordering for Industrial Operations</h3>
              <p>
                UNEOM specializes in providing safety equipment solutions for large-scale operations across Saudi Arabia. Our industrial uniform consultants work directly with safety managers, procurement teams, and compliance officers to develop comprehensive PPE programs that address your specific workplace hazards while optimizing cost efficiency.
              </p>
              <p>
                With manufacturing facilities in Saudi Arabia, we offer faster delivery times and responsive service for both initial orders and replacements, ensuring your workforce remains protected at all times with minimal downtime.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-4">Request a Consultation for Your Safety Vest Requirements</h3>
                <p className="text-center mb-6">
                  Our safety equipment specialists are available to conduct on-site assessments at your facility in Riyadh, Jeddah, Dammam, or any industrial city in Saudi Arabia. We'll help you determine the optimal safety vest specifications for your specific workplace hazards and compliance requirements.
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