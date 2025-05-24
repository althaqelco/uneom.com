'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Script from 'next/script';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export function IndustrialSafetyVestClientPage() {
  // These parameters are used to fetch the product data
  const params = {
    category: 'high-visibility-clothing',
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
            "name": "UNEOM Premium Industrial Safety Vest",
            "image": [
              "https://uneom.com/images/products/industrial-safety-vest.webp",
              "https://uneom.com/images/products/industrial-safety-vest-alt1.webp",
              "https://uneom.com/images/products/industrial-safety-vest-alt2.webp"
            ],
            "description": "Professional-grade industrial safety vest designed for Saudi Arabian work environments. Features ANSI/ISEA 107 Class 2 compliance, heat-resistant reflective tape, and durable materials suited for extreme desert conditions.",
            "sku": "UNEOM-ISV-2023",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "AggregateOffer",
              "url": "https://uneom.com/shop/high-visibility-clothing/industrial-safety-vest",
              "priceCurrency": "SAR",
              "lowPrice": "89",
              "highPrice": "149",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "76"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading subtitle="Engineered Protection for Saudi Arabian Industrial Environments">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ANSI/ISEA 107 Compliant Industrial Safety Vests</h1>
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Advanced Safety Solutions for Saudi Arabia's Demanding Workplaces</h2>
              <p>
                UNEOM's industrial safety vests represent the pinnacle of high-visibility protection for workers in Saudi Arabia's most challenging environments. Designed specifically for the unique demands of construction sites, oil and gas facilities, manufacturing plants, and infrastructure projects throughout the Kingdom, our safety vests combine superior visibility, exceptional durability, and comfort-focused design to ensure workers remain both safe and productive in any conditions.
              </p>
              
              <h3>ANSI/ISEA 107 Compliant Protection</h3>
              <p>
                Our industrial safety vests meet or exceed all requirements of ANSI/ISEA 107-2020 standards for Class 2 high-visibility safety apparel, ensuring compliance with international safety protocols and Saudi Arabian workplace regulations. This compliance is essential for companies operating in the Kingdom who must adhere to both local safety requirements and international standards, especially those working with multinational corporations or on government projects.
              </p>
              <p>
                Each vest features a minimum of 755 cm² of background material and 201 cm² of retroreflective material, strategically positioned to maintain 360° visibility in all work conditions. The reflective material maintains its effectiveness even after repeated washing or exposure to the harsh Saudi climate, with photometric performance exceeding 330 cd/lx/m² for maximum nighttime visibility.
              </p>
              
              <h3>Engineered for Saudi Arabian Conditions</h3>
              <p>
                Unlike standard safety vests designed for temperate climates, UNEOM's industrial safety vests are specifically engineered to perform in Saudi Arabia's extreme environment:
              </p>
              <ul>
                <li>Heat-resistant construction that maintains structural integrity in temperatures exceeding 50°C, common during summer months in industrial zones of Jubail, Yanbu, and Ras Al-Khair</li>
                <li>UV-stabilized fabrics rated at UPF 50+ that resist degradation from intense desert sunlight, ensuring the fluorescent colors maintain their visibility properties throughout the vest's service life</li>
                <li>Moisture-wicking technologies that help manage worker comfort during high-humidity conditions in coastal industrial areas like Jeddah and Dammam</li>
                <li>Sand-resistant treatments that prevent dust accumulation on reflective surfaces, a critical consideration for maintaining visibility during Saudi Arabia's frequent dust storms</li>
                <li>Specialized flame-resistant options for petrochemical environments that comply with both ANSI 107 visibility standards and flame resistance requirements</li>
                <li>Enhanced breathability features including strategically placed mesh panels to maximize airflow while maintaining required coverage</li>
                <li>Quick-release breakaway options specifically designed for oil and gas environments where entanglement hazards are present</li>
              </ul>
              
              <h3>Industry-Specific Customizations</h3>
              <p>
                Our industrial safety vests are available with specialized features tailored to specific industries operating in Saudi Arabia:
              </p>
              <h4>Oil & Gas Sector</h4>
              <ul>
                <li>Flame-resistant models compliant with NFPA 2112 standards for flash fire protection</li>
                <li>Anti-static properties meeting ATEX requirements for explosive atmospheres</li>
                <li>Chemical-resistant options for refinery and processing plant environments</li>
                <li>Integration with fall protection harnesses for elevated work platforms</li>
                <li>Specialized pockets for gas monitors and emergency response equipment</li>
              </ul>
              
              <h4>Construction & Infrastructure</h4>
              <ul>
                <li>Reinforced wear points for extended durability in abrasive environments</li>
                <li>Multiple tool pockets and equipment attachment points</li>
                <li>ID badge holders and credential windows</li>
                <li>Compatible with hydration systems for outdoor work in extreme heat</li>
                <li>Extended sizing options for proper fit over winter clothing during cooler months</li>
              </ul>
              
              <h4>Manufacturing & Logistics</h4>
              <ul>
                <li>RFID-enabled options for automated personnel tracking and security</li>
                <li>Enhanced breathability designs for indoor high-temperature environments</li>
                <li>Machine-washable construction for industrial laundry compatibility</li>
                <li>QR code options for quick access to safety information or worker credentials</li>
                <li>Department color-coding options for visual management in large facilities</li>
              </ul>
              
              <h3>Professional Branding & Compliance Options</h3>
              <p>
                UNEOM offers extensive customization options to meet corporate identity requirements while maintaining safety compliance:
              </p>
              <ul>
                <li>Company logo application using ANSI-compliant heat transfer or embroidery techniques that don't compromise reflective properties</li>
                <li>Arabic and English text application for worker identification, position, and emergency information</li>
                <li>Corporate color matching within the parameters of safety standards</li>
                <li>Serialized numbering for inventory management and compliance tracking</li>
                <li>Department-specific color coding or markings for visual management</li>
              </ul>
              
              <h3>Compliance with Saudi Arabian Standards</h3>
              <p>
                Our industrial safety vests comply with all relevant Saudi Arabian workplace safety regulations, including:
              </p>
              <ul>
                <li>Saudi Aramco Engineering Standards (SAES) for high-visibility clothing</li>
                <li>Saudi Arabian Standards Organization (SASO) requirements</li>
                <li>General Organization for Social Insurance (GOSI) workplace safety guidelines</li>
                <li>Ministry of Labor occupational safety requirements</li>
                <li>Civil Defense emergency response visibility standards</li>
                <li>SABIC contractor safety requirements</li>
              </ul>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Request a Consultation for Your Safety Vest Requirements</h3>
                <p className="mb-6">
                  Our industrial safety specialists can assess your specific workplace hazards and recommend the appropriate safety vest specifications for your operations in Riyadh, Jeddah, Dammam, or any industrial city in Saudi Arabia.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Our Industrial Safety Team
                    </Button>
                  </Link>
                </div>
              </div>
              
              <h3>Volume Orders & Corporate Programs</h3>
              <p>
                UNEOM specializes in providing industrial safety vests for large-scale operations throughout Saudi Arabia. Our dedicated account managers work directly with safety officers, procurement teams, and compliance managers to develop comprehensive safety apparel programs that address specific workplace hazards.
              </p>
              <p>
                Our local manufacturing facilities in Saudi Arabia offer faster delivery times, responsive service for both initial orders and replacements, and the ability to quickly address changing safety requirements or emergency situations. We maintain extensive inventory of core safety vest styles, enabling us to respond rapidly to urgent needs that may arise during inspections or regulatory changes.
              </p>
              
              <h3>Warranty & Quality Assurance</h3>
              <p>
                Every UNEOM industrial safety vest undergoes rigorous quality testing before delivery, including:
              </p>
              <ul>
                <li>Photometric testing of reflective materials to verify compliance with visibility standards</li>
                <li>Colorimetric evaluation to ensure fluorescent fabrics meet chromaticity requirements</li>
                <li>Tensile strength testing of all critical seams and attachment points</li>
                <li>Wash durability testing to simulate industrial laundering conditions</li>
                <li>UV exposure testing to verify color retention in desert conditions</li>
              </ul>
              <p>
                Our industrial safety vests carry a comprehensive warranty against manufacturing defects, with documented compliance certification provided for each order to support workplace safety audits and regulatory inspections.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// Add default export for backward compatibility
export default IndustrialSafetyVestClientPage; 