'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import SectionHeading from '@/components/ui/SectionHeading';
import SchemaMarkup from '@/components/SchemaMarkup';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function FlameResistantWorkwearClientPage() {
  const locale = 'en';
  const router = useRouter();
  
  const handleBack = () => {
    router.back();
  };

  // These parameters are used to fetch the product data
  const params = {
    category: 'industrial-uniforms',
    product: 'flame-resistant-workwear'
  };

  // Product schema for structured data
  const productSchema = {
    "@type": "Product",
    "name": "UNEOM Premium Flame-Resistant Workwear Set",
    "image": [
      "https://uneom.com/images/products/flame-resistant-workwear.webp",
      "https://uneom.com/images/products/flame-resistant-workwear-alt1.webp",
      "https://uneom.com/images/products/flame-resistant-workwear-alt2.webp"
    ],
    "description": "Professional-grade flame-resistant workwear set designed specifically for oil, gas, and petrochemical industries in Saudi Arabia. Featuring inherent FR fabric that maintains protective properties even after repeated industrial laundering, with NFPA 2112 compliance and Saudi Aramco approval.",
    "sku": "UNEOM-FR-SET-2023",
    "brand": {
      "@type": "Brand",
      "name": "UNEOM"
    },
    "manufacturer": "UNEOM Professional Workwear",
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://uneom.com/shop/industrial-uniforms/flame-resistant-workwear",
      "priceCurrency": "SAR",
      "lowPrice": "549",
      "highPrice": "749",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "83"
    }
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

      {/* Add schema markup */}
      <SchemaMarkup 
        type="product"
        data={productSchema}
        pageUrl="https://uneom.com/shop/industrial-uniforms/flame-resistant-workwear"
      />
      
      <div className="bg-neutral-50 py-8">
        <Container>
          {/* Breadcrumbs */}
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/shop' },
                { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
                { label: 'Flame Resistant Workwear', href: '#' },
              ]}
              locale={locale}
            />
          </div>
          
          <button 
            onClick={handleBack}
            className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            <span>Back</span>
          </button>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src="/images/products/flame-resistant-workwear.webp"
                alt="Flame Resistant Workwear"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-primary-600 font-medium mb-2">Advanced Protection for Hazardous Environments</h4>
              <h1 className="text-3xl font-bold mb-4">Flame Resistant Workwear Set</h1>
              <p className="text-xl font-semibold text-neutral-900 mb-4">SAR 549 - 749</p>
              <p className="text-neutral-600">
                High-quality flame and heat-resistant workwear set, specifically designed for workers in petroleum and electrical industries. 
                Provides maximum protection while maintaining comfort and performance.
              </p>
            </div>

            {/* Product Code */}
            <div className="py-4 border-t border-b border-neutral-200">
              <p className="text-neutral-600">
                <span className="font-medium">Product Code:</span> FR-SET-2023
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="w-full sm:w-auto">
                Add to Quote
              </Button>
              
              <Link href="/contact" passHref>
                <Button variant="outline" className="w-full sm:w-auto">
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <div className="prose max-w-none">
            <h2>Product Description</h2>
            <p>
              The Flame Resistant Workwear Set is the optimal solution for workers in industrial environments exposed 
              to flame and high heat hazards. Specifically designed according to the highest global safety standards 
              to ensure protection for workers in oil, gas, petrochemical, and electrical industries in Saudi Arabia.
            </p>
            
            <p>
              This set is manufactured from advanced inherently flame-resistant materials that self-extinguish when 
              the flame source is removed. The set provides superior protection against thermal flash and radiant 
              heat hazards, while maintaining flame-resistant properties even after repeated washing.
            </p>
          </div>
        </div>
      </Container>
      
      {/* Main product page component */}
      <ClientPage params={params} />
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading subtitle="Industry-Leading Protection for Saudi Arabia's Oil, Gas, and Petrochemical Sectors">
            Premium Flame-Resistant Workwear
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Superior Protection Engineered for the Most Hazardous Industrial Environments</h2>
              <p>
                UNEOM's Premium Flame-Resistant Workwear represents the culmination of advanced protective technology specifically engineered for Saudi Arabia's most hazardous industrial sectors. Developed in collaboration with safety experts from the Kingdom's leading energy companies, these specialized garments provide reliable protection against flash fires, arc flash, and molten metal splatter while maintaining exceptional comfort in Saudi Arabia's demanding climate conditions.
              </p>
              
              <h3>Advanced Inherent FR Technology</h3>
              <p>
                Unlike conventional treated FR clothing that relies on chemical applications that can degrade over time, UNEOM's Premium Flame-Resistant Workwear features proprietary inherent FR fabric technology where protection is built directly into the molecular structure of the fibers. This revolutionary approach delivers several critical advantages for Saudi industrial operations:
              </p>
              <ul>
                <li>Permanent flame-resistant properties that cannot be washed out, worn away, or diminished over the garment's lifetime</li>
                <li>Self-extinguishing performance that stops burning within 2 seconds after flame removal, preventing continued burning that leads to severe injuries</li>
                <li>Superior arc flash protection with ATPV (Arc Thermal Performance Value) ratings from 8 cal/cm² to 40 cal/cm² depending on the specific model</li>
                <li>Consistent protection even after 100+ industrial laundering cycles, a crucial benefit for Saudi industrial operations with intensive work schedules</li>
                <li>Verified compliance with NFPA 2112 standard for flash fire protection and NFPA 70E for electrical arc flash hazards</li>
                <li>Multi-hazard protection including resistance to molten metal splash, a common hazard in Saudi Arabia's expanding metallurgical sector</li>
                <li>Inherent anti-static properties that meet the requirements for ATEX environments in petrochemical facilities throughout the Kingdom</li>
                <li>Heat stress reduction through advanced moisture management and breathable construction, critical for workers in Saudi Arabia's extreme climate</li>
              </ul>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg border border-primary-100">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Saudi Aramco Approved Protection</h3>
                <p className="mb-4">
                  Our Premium Flame-Resistant Workwear is officially approved for use in Saudi Aramco facilities, meeting or exceeding all Saudi Aramco Engineering Standards (SAES) for protective clothing in hazardous environments. This approval ensures that workers wearing our FR garments are compliant with the stringent safety protocols established by Saudi Arabia's largest employer.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="bg-white px-4 py-2 rounded shadow-sm text-xs font-medium text-neutral-700">
                    SAES-A-010 Compliant
                  </div>
                  <div className="bg-white px-4 py-2 rounded shadow-sm text-xs font-medium text-neutral-700">
                    NFPA 2112 Certified
                  </div>
                  <div className="bg-white px-4 py-2 rounded shadow-sm text-xs font-medium text-neutral-700">
                    NFPA 70E Arc Flash Rated
                  </div>
                  <div className="bg-white px-4 py-2 rounded shadow-sm text-xs font-medium text-neutral-700">
                    ISO 11612 Compliant
                  </div>
                </div>
              </div>
              
              <h3>Industry-Specific Customization for Saudi Arabian Work Environments</h3>
              <p>
                Understanding the diverse needs of industrial sectors across Saudi Arabia, UNEOM offers extensive customization options for our Premium Flame-Resistant Workwear:
              </p>
              
              <h4>Oil & Gas Industry</h4>
              <p>
                For Saudi Aramco, SABIC, and other energy sector operations, our FR workwear features high-visibility elements, specialized pocket configurations for digital tools, and reinforced areas for increased durability in field operations. Available in corporate colors with approved logo placement according to Saudi petroleum industry standards.
              </p>
              
              <h4>Electrical Utilities & Infrastructure</h4>
              <p>
                For SEC (Saudi Electricity Company) and related contractors, our electrical-specific FR garments provide enhanced arc flash protection with specialized features for tools and equipment used by electrical workers throughout the Kingdom's expanding power infrastructure projects.
              </p>
              
              <h4>Petrochemical Processing</h4>
              <p>
                For Yanbu, Jubail, and other industrial cities' petrochemical operations, our FR workwear incorporates chemical splash resistance alongside flame protection, with specialized designs that accommodate respiratory equipment and other essential PPE used in Saudi Arabia's world-class petrochemical facilities.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 