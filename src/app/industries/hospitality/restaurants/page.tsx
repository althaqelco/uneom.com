import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaTshirt, FaUsers, FaShippingFast, FaStar } from 'react-icons/fa';

export default function RestaurantsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Premium Restaurant Uniforms for Saudi Arabian Dining
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Elevate your restaurant's professional image with high-quality, custom uniforms that enhance both staff comfort and your dining atmosphere.
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
                src="/images/hospitality/hospitality_uniform_resturant.jpg" 
                alt="Restaurant Staff in Professional Uniforms"
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
            Why Saudi Restaurants Choose UNEOM for Uniforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaTshirt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Premium Quality
              </h3>
              <p className="text-gray-600 text-center">
                Durable, stain-resistant fabrics designed specifically for the demands of restaurant environments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Custom Branding
              </h3>
              <p className="text-gray-600 text-center">
                Incorporate your restaurant's colors, logo, and brand identity into every uniform element.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaShippingFast className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-center">
                Quick turnaround times and reliable delivery throughout Saudi Arabia, including rush options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                Saudi Expertise
              </h3>
              <p className="text-gray-600 text-center">
                Deep understanding of Saudi Arabian restaurant industry requirements and cultural preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Uniform Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
            Restaurant Uniform Categories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            UNEOM offers a complete range of restaurant uniforms for every role in your establishment, from front-of-house to kitchen staff.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front of House */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_receiption_hotel.jpg" 
                  alt="Front of House Staff Uniforms"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Front of House Staff</h3>
                <p className="text-gray-600 mb-4">
                  Elegant, comfortable uniforms for hosts, servers, and waitstaff that reflect your restaurant's ambiance.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Server vests & aprons</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Host/Hostess attire</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Branded shirts & blouses</span>
                  </li>
                </ul>
                <Link 
                  href="/shop/hospitality-attire/restaurant-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
            
            {/* Kitchen Staff */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_chef.jpg" 
                  alt="Kitchen Staff Uniforms"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Kitchen Staff</h3>
                <p className="text-gray-600 mb-4">
                  Professional, heat-resistant uniforms for chefs and kitchen staff designed for comfort in hot environments.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Chef coats & jackets</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Kitchen pants & aprons</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Heat-resistant gear</span>
                  </li>
                </ul>
                <Link 
                  href="/shop/culinary-uniforms" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
            
            {/* Management */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_resturant_2.jpg" 
                  alt="Restaurant Management Uniforms"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Management Team</h3>
                <p className="text-gray-600 mb-4">
                  Distinguished attire for managers and supervisors that conveys authority while maintaining your brand aesthetic.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Manager suits & blazers</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Supervisor attire</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span className="text-gray-700">Premium accessories</span>
                  </li>
                </ul>
                <Link 
                  href="/shop/corporate-attire" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Restaurant Uniform Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Premium Features of Our Restaurant Uniforms
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Stain-Resistant Fabrics</h3>
                    <p className="text-gray-600">
                      Our restaurant uniforms feature advanced stain-resistant technologies that repel spills and make cleaning easier.
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
                    <h3 className="text-lg font-semibold text-gray-800">Breathable Materials</h3>
                    <p className="text-gray-600">
                      Designed for Saudi Arabia's climate, our uniforms use breathable fabrics that keep staff comfortable during long shifts.
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
                    <h3 className="text-lg font-semibold text-gray-800">Custom Embroidery & Branding</h3>
                    <p className="text-gray-600">
                      Incorporate your restaurant's logo and branding elements with our high-quality embroidery and printing services.
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
                    <h3 className="text-lg font-semibold text-gray-800">Antimicrobial Properties</h3>
                    <p className="text-gray-600">
                      Many of our restaurant uniforms include antimicrobial treatments that inhibit odor and bacterial growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/hospitality/hospitality_uniform_resturant.jpg" 
                alt="Restaurant Staff in UNEOM Uniforms"
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
            Ready to Elevate Your Restaurant's Professional Image?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact UNEOM today for a consultation about your restaurant uniform needs. We serve dining establishments across Saudi Arabia.
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