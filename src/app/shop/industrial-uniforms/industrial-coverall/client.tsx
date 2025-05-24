'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Script from 'next/script';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Add SEO metadata
interface Size {
  name: string;
  description: string;
  inStock: boolean;
}

interface Color {
  name: string;
  value: string;
  inStock: boolean;
}

interface Review {
  id: number;
  rating: number;
  content: string;
  author: string;
  date: string;
}

// Add named export to match the import in page.tsx
export function IndustrialCoverallClientPage() {
  // These parameters are used to fetch the product data
  const params = {
    category: 'industrial-uniforms',
    product: 'industrial-coverall'
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
            "name": "Premium Fire-Resistant Industrial Coveralls",
            "image": [
              "https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_2.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_3.webp"
            ],
            "description": "High-quality, NFPA 2112-compliant fire-resistant coveralls designed specifically for Saudi Arabian industrial environments. Features include 88% cotton/12% nylon FR fabric with 9 oz. weight, flame-resistance rating of ATPV 12.4 cal/cm², strategically reinforced seams, and radio loops. Ideal for oil & gas, petrochemical, and manufacturing sectors.",
            "sku": "UNEOM-IC-100",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/industrial-coverall/",
              "priceCurrency": "SAR",
              "price": "349",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "92"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered={false}>
            <h2 className="text-3xl font-bold">Premium Fire-Resistant Industrial Coveralls</h2>
            <p className="text-xl text-gray-600 mt-2">Industry-Leading Protection for Saudi Arabia's Industrial Workforce</p>
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Superior Protection for Demanding Industrial Environments</h2>
              <p>
                UNEOM's fire-resistant industrial coveralls are engineered specifically for the demanding conditions faced by workers in Saudi Arabia's industrial sectors. Our FR coveralls provide essential protection for professionals in oil and gas, petrochemical plants, manufacturing facilities, and utility operations across Riyadh, Jeddah, Dammam, and industrial cities throughout the Kingdom.
              </p>
              
              <h3>Advanced Fire-Resistant Technology</h3>
              <p>
                Every UNEOM industrial coverall features our proprietary 88% cotton/12% nylon FR fabric with an optimal 9 oz. weight, delivering an impressive flame-resistance rating of ATPV 12.4 cal/cm². This specialized fabric maintains its flame-resistant properties for the life of the garment, even after repeated industrial laundering cycles. Our coveralls don't just meet the NFPA 2112 standard – they exceed it, providing reliable protection against flash fires and arc flash hazards common in Saudi industrial environments.
              </p>
              <p>
                The innovative moisture-wicking technology helps maintain body temperature regulation in Saudi Arabia's extreme climate conditions, while the breathable fabric construction allows air circulation to prevent heat stress during long shifts. All seams are reinforced with flame-resistant thread and strategically reinforced at high-stress points for exceptional durability.
              </p>
              
              <h3>Designed for Saudi Arabian Industrial Conditions</h3>
              <p>
                Our industrial coveralls are specifically engineered to address the challenges faced by industrial workers in Saudi Arabia:
              </p>
              <ul>
                <li>Enhanced UV protection for outdoor work in Saudi Arabia's intense sunlight</li>
                <li>Heat-dissipating design to reduce body temperature in hot desert environments</li>
                <li>Extended coverage with adjustable wrist and ankle closures to prevent sand infiltration</li>
                <li>Bi-swing back design and action elbows for unrestricted movement during industrial tasks</li>
                <li>Strategic placement of high-visibility reflective strips for low-light conditions</li>
                <li>Multiple specialized tool pockets designed for Saudi industrial regulations and equipment</li>
                <li>Radio loops and gas monitor attachment points per Saudi Aramco safety standards</li>
              </ul>
              
              <h3>Compliance with Local and International Standards</h3>
              <p>
                Our fire-resistant coveralls meet or exceed all relevant safety standards, including:
              </p>
              <ul>
                <li>NFPA 2112 Standard on Flame-Resistant Clothing for Industrial Personnel</li>
                <li>ASTM F1506 Standard for Arc Flash Protection</li>
                <li>Saudi Aramco Engineering Standards (SAES) for Protective Clothing</li>
                <li>Saudi Arabian Standards Organization (SASO) requirements</li>
                <li>EN ISO 11612:2015 for Heat and Flame Protection</li>
                <li>SABIC Safety Requirements for Contractor PPE</li>
              </ul>
              
              <h3>Customization Options for Saudi Companies</h3>
              <p>
                UNEOM offers extensive customization options for our industrial coveralls, including:
              </p>
              <ul>
                <li>Company logo embroidery or heat-resistant patches</li>
                <li>Department-specific color coding (red for operators, blue for maintenance, etc.)</li>
                <li>Name and position embroidery in both English and Arabic</li>
                <li>Custom pocket configurations based on tool requirements</li>
                <li>Enhanced high-visibility options for specific work environments</li>
                <li>Integration with other PPE systems for comprehensive protection</li>
                </ul>
                
              <h3>Bulk Orders for Industrial Operations</h3>
              <p>
                UNEOM specializes in providing fire-resistant coverall solutions for large-scale operations throughout Saudi Arabia. Our industrial safety consultants work directly with safety managers, procurement teams, and compliance officers to develop comprehensive protective clothing programs that address specific workplace hazards while optimizing cost-efficiency.
            </p>
            <p>
                With local manufacturing facilities in Saudi Arabia, we offer faster delivery times and responsive service for both initial orders and replacements, ensuring your workforce remains protected at all times with minimal downtime.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Request a Consultation for Your Industrial Coverall Requirements</h3>
                <p className="mb-6">
                  Our industrial safety specialists are available to conduct on-site assessments at your facility in Riyadh, Jeddah, Dammam, or any industrial city in Saudi Arabia. We'll help you determine the optimal fire-resistant coverall specifications for your specific workplace hazards and compliance requirements.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Our Industrial Safety Team
                    </Button>
                  </Link>
                </div>
              </div>
              
              <h3>Maintenance and Care Instructions</h3>
              <p>
                Proper care of fire-resistant coveralls is essential to maintain their protective properties. UNEOM provides comprehensive care guidelines and can recommend industrial laundry services in Saudi Arabia that specialize in FR garment processing. For operations with large workforces, we offer managed service programs that include regular inspection, repair, and replacement of damaged coveralls to ensure continuous protection.
              </p>
              
              <h3>Environmental Commitment</h3>
              <p>
                UNEOM is committed to sustainability in industrial workwear. Our coveralls are manufactured using processes that minimize water consumption and reduce chemical usage, important considerations in Saudi Arabia's water-conscious environment. We also offer end-of-life recycling programs for worn coveralls, supporting both corporate sustainability goals and Saudi Vision 2030 environmental initiatives.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// Add default export for backward compatibility
export default IndustrialCoverallClientPage; 