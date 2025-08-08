import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaCheck, FaTshirt, FaUsers, FaShippingFast, FaStar } from 'react-icons/fa';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Industries | Hospitality | Hotels | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'industries | hospitality | hotels'],
  openGraph: {
    title: 'Industries | Hospitality | Hotels | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/industries/hospitality/hotels/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Industries | Hospitality | Hotels - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};

export default function HotelsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Luxury Hotel Uniforms for Saudi Arabian Hospitality
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Elevate your hotel's service experience with premium, custom-designed uniforms that combine elegance, comfort, and Saudi cultural sensitivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/quote" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md transition duration-300"
                >
                  Request Quote
                </Link>
                <Link 
                  href="/shop/hospitality-attire" 
                  className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-md transition duration-300"
                >
                  Explore Uniforms
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/hospitality/hospitality_uniform_hotel.jpg" 
                alt="Hotel Staff in Luxury Uniforms"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UNEOM Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Why Saudi Hotels Choose UNEOM for Staff Uniforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaTshirt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Luxury Materials
              </h3>
              <p className="text-gray-600 text-center">
                Premium fabrics that maintain their appearance through long shifts while providing maximum comfort.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Bespoke Design
              </h3>
              <p className="text-gray-600 text-center">
                Custom-designed uniforms that reflect your hotel's brand identity and Saudi cultural values.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaShippingFast className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Reliable Supply
              </h3>
              <p className="text-gray-600 text-center">
                Consistent inventory management ensuring your hotel never runs short on staff uniforms.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Local Expertise
              </h3>
              <p className="text-gray-600 text-center">
                Deep understanding of Saudi Arabian hospitality standards and cultural dress requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Uniform Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
            Complete Hotel Uniform Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            UNEOM offers comprehensive uniform collections for every role in your hotel, from front desk to housekeeping.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front Desk */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_receiption_hotel.jpg" 
                  alt="Front Desk Staff Uniforms"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Front Desk & Reception</h3>
                <p className="text-gray-600 mb-4">
                  Sophisticated, professional attire that creates an outstanding first impression for guests.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Tailored blazers & suits</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Professional dresses</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Custom accessories</span>
                  </li>
                </ul>
                <Link 
                  href="/shop/hospitality-attire/front-desk-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
            
            {/* Concierge */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_hotel_service.jpg" 
                  alt="Concierge & Bellhop Uniforms"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Concierge & Bell Service</h3>
                <p className="text-gray-600 mb-4">
                  Distinguished uniforms that help guests identify key service personnel with ease.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Distinctive concierge attire</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Bell service uniforms</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Valet & doorman outfits</span>
                  </li>
                </ul>
                <Link 
                  href="/shop/hospitality-attire/concierge-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
            
            {/* Housekeeping */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform.jpg" 
                  alt="Housekeeping Staff Uniforms"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Housekeeping & Room Service</h3>
                <p className="text-gray-600 mb-4">
                  Practical, comfortable uniforms designed for ease of movement and durability.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Housekeeping attire</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Room service uniforms</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Maintenance staff clothing</span>
                  </li>
                </ul>
                <Link 
                  href="/shop/hospitality-attire/housekeeping-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Hotel Uniform Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Premium Features of Our Hotel Uniforms
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Climate-Optimized Fabrics</h3>
                    <p className="text-gray-600">
                      Specially selected fabrics that perform exceptionally well in Saudi Arabia's climate, keeping staff comfortable year-round.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Culturally Appropriate Designs</h3>
                    <p className="text-gray-600">
                      Uniforms designed with cultural sensitivity and options that respect Islamic dress codes while maintaining professionalism.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Premium Finishing & Detailing</h3>
                    <p className="text-gray-600">
                      Meticulous attention to detail in every uniform, from reinforced seams to perfectly aligned embroidery of your hotel's logo.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Easy-Care Properties</h3>
                    <p className="text-gray-600">
                      Fabrics and constructions that maintain their appearance through multiple laundering cycles, saving on replacement costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/hospitality/hospitality_uniform_hotel.jpg" 
                alt="Luxury Hotel Staff in UNEOM Uniforms"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Hotel's Professional Image?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact UNEOM today for a consultation about your hotel uniform needs. We serve luxury hotels and resorts across Saudi Arabia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/quote" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Request a Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 