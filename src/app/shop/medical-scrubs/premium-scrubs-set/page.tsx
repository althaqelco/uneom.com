'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function PremiumScrubsSetPage() {
  const locale = 'en';
  
  // Product details (This would normally come from a database or API)
  const product = {
    id: 'premium-scrubs-set',
    name: 'Premium Scrubs Set',
    price: 'From SAR 249',
    basePrice: 249,
    rating: 4.8,
    reviews: 124,
    description: 'High-performance medical scrubs designed for healthcare professionals who require comfort, durability, and a professional appearance.',
    longDescription: 'Designed specifically for the Saudi healthcare environment, our Premium Scrubs Set combines advanced fabric technology with thoughtful design features that healthcare professionals appreciate. The fabric is lightweight yet durable, with moisture-wicking properties to keep you comfortable throughout long shifts in air-conditioned facilities. Antimicrobial treatment helps reduce odor and enhance hygiene in clinical settings.',
    features: [
      'Antimicrobial fabric treatment for enhanced hygiene',
      'Moisture-wicking material keeps you cool and dry',
      'Reinforced stitching at stress points for extended durability',
      'Ergonomic design allows full range of motion',
      'Multiple functional pockets for medical tools and accessories',
      'Available in a range of colors to match facility requirements',
      'Easy-care fabric maintains appearance after industrial washing'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton' },
      { name: 'Weight', value: 'Medium weight (170 gsm)' },
      { name: 'Care Instructions', value: 'Machine washable, industrial laundry safe' },
      { name: 'Available Sizes', value: 'XS - 4XL' },
      { name: 'Colors', value: '12 options including white, navy, ceil blue, teal' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Custom Options', value: 'Embroidery, custom sizing, color matching' }
    ],
    images: [
      { src: '/images/products/scrubs-set.jpg', alt: 'Premium Scrubs Set Front View' },
      { src: '/images/healthcare/healthcare_medical_uniform.jpg', alt: 'Premium Scrubs Set Worn by Medical Professionals' },
      { src: '/images/healthcare/healthcare_nurce_uniform.jpg', alt: 'Premium Scrubs Set in Use' },
      { src: '/images/healthcare/healthcare_medical_doctor.jpg', alt: 'Medical Team Wearing Scrubs' }
    ],
    category: 'Healthcare Apparel',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrderQuantity: 5,
    estimatedDelivery: '1-2 weeks',
    customizationOptions: [
      { name: 'Hospital Logo Embroidery', price: 'SAR 39 per uniform' },
      { name: 'Name Embroidery', price: 'SAR 19 per uniform' },
      { name: 'Custom Colors', price: 'SAR 79 per order' },
      { name: 'RFID Tracking Integration', price: 'SAR 49 per uniform' }
    ],
    bulkPricing: [
      { quantity: '5-24', pricePerUnit: 'SAR 249' },
      { quantity: '25-99', pricePerUnit: 'SAR 229' },
      { quantity: '100-499', pricePerUnit: 'SAR 209' },
      { quantity: '500+', pricePerUnit: 'SAR 189' }
    ],
    relatedProducts: [
      {
        id: 'antimicrobial-scrubs',
        name: 'Antimicrobial Scrubs',
        image: '/images/healthcare/healthcare_medical_uniform.jpg',
        price: 'From SAR 269',
        href: '/shop/medical-scrubs/surgical-scrubs'
      }
    ]
  };
  
  // Size chart
  const sizeChart = {
    unisex: [
      { size: 'XS', chest: '34"', waist: '28"', hip: '36"', inseam: '30"' },
      { size: 'S', chest: '36"', waist: '30"', hip: '38"', inseam: '30"' },
      { size: 'M', chest: '38"', waist: '32"', hip: '40"', inseam: '31"' },
      { size: 'L', chest: '40"', waist: '34"', hip: '42"', inseam: '31"' },
      { size: 'XL', chest: '42"', waist: '36"', hip: '44"', inseam: '32"' },
      { size: '2XL', chest: '44"', waist: '38"', hip: '46"', inseam: '32"' },
      { size: '3XL', chest: '46"', waist: '40"', hip: '48"', inseam: '32"' },
      { size: '4XL', chest: '48"', waist: '42"', hip: '50"', inseam: '33"' },
    ]
  };
  
  return (
    <div className="bg-white">
    
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm text-gray-700 hover:text-primary-600">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/shop" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">Shop</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/shop/medical-scrubs" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    Medical Scrubs
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* Product Details Section */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative h-24 rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary-500 transition-colors"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <span className="text-sm text-primary-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
              </div>
              
              <p className="text-2xl font-bold text-gray-900 mb-6">{product.price}</p>
              
              <div className="prose prose-sm mb-6">
                <p>{product.description}</p>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-sky-500 cursor-pointer border-2 border-white ring-2 ring-primary-500"></div>
                  <div className="w-8 h-8 rounded-full bg-navy-800 cursor-pointer border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-white cursor-pointer border-2 border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-teal-500 cursor-pointer border-2 border-white"></div>
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <button className="text-sm text-primary-600 hover:text-primary-500">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                  {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'].map((size) => (
                    <div 
                      key={size}
                      className="border rounded-md py-2 px-3 text-center text-sm cursor-pointer hover:border-primary-500 hover:text-primary-600 transition-colors"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity (Minimum: {product.minOrderQuantity})</h3>
                <div className="flex">
                  <input
                    type="number"
                    min={product.minOrderQuantity}
                    defaultValue={product.minOrderQuantity}
                    className="w-20 border border-gray-300 rounded-md py-2 px-3 text-center"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">For orders over 500 units, please contact us directly for special pricing.</p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-8">
                <Button variant="primary" className="flex-1 py-3 justify-center">
                  Add to Quote
                </Button>
                <Button variant="outline" className="flex-1 py-3 justify-center">
                  Request Samples
                </Button>
              </div>
              
              {/* Delivery Info */}
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Estimated delivery: {product.estimatedDelivery}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free delivery on orders over SAR 5,000</span>
                </div>
              </div>
              
              {/* Custom Requirements */}
              <div className="mb-6">
                <label htmlFor="custom-requirements" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Requirements
                </label>
                <textarea
                  id="custom-requirements"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm placeholder-gray-400"
                  placeholder="Please specify any custom requirements for your order (e.g., logo placement, color preferences, size distribution, etc.)."
                ></textarea>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button className="text-primary-600 border-b-2 border-primary-600 py-4 px-6 font-medium text-sm">
                  Description
                </button>
                <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm">
                  Specifications
                </button>
                <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm">
                  Size Chart
                </button>
                <button className="text-gray-500 hover:text-gray-700 py-4 px-6 font-medium text-sm">
                  Bulk Pricing
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="mb-4">{product.longDescription}</p>
                
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <h3>Customization Options</h3>
                <p>UNEOM offers extensive customization for medical scrubs to meet your healthcare facility's specific requirements:</p>
                <ul>
                  {product.customizationOptions.map((option, index) => (
                    <li key={index}><strong>{option.name}</strong>: {option.price}</li>
                  ))}
                </ul>
                
                <h3>Perfect For</h3>
                <ul>
                  <li>Hospitals and medical centers</li>
                  <li>Clinics and private practices</li>
                  <li>Dental offices</li>
                  <li>Veterinary clinics</li>
                  <li>Medical laboratories</li>
                  <li>Healthcare educational institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Specifications and Size Chart (Hidden by default) */}
      
      {/* Related Products */}
      <section className="py-12">
        <Container>
          <SectionHeading>You May Also Like</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {product.relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={relatedProduct.href} className="group">
                <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium text-gray-900">{relatedProduct.price}</span>
                      <span className="text-primary-600 text-sm font-medium group-hover:underline">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Custom Medical Uniforms?</h2>
                <p className="text-gray-600 mb-6">
                  Our team specializes in creating custom medical uniforms that meet the specific requirements of your healthcare facility. From hospital branding to department color coding, we handle the entire process from design to delivery.
                </p>
                <Button variant="primary" href="/contact?subject=Custom%20Medical%20Uniforms">
                  Request a Consultation
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto bg-gray-100">
                <Image
                  src="/images/healthcare/healthcare_medical_doctor.jpg"
                  alt="Custom Medical Uniform Design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    
      </div>
  );
}