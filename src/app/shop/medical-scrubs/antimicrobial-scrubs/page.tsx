'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Product data - normally would come from a database or API
const productData = {
  id: 'antimicrobial-scrubs',
  name: 'Antimicrobial Scrubs',
  price: 'SAR 279',
  rating: 4.7,
  reviews: 98,
  description: 'Advanced antimicrobial scrubs designed specifically for healthcare environments where infection control is paramount. Features silver-ion technology for long-lasting protection.',
  longDescription: 'Our Antimicrobial Scrubs are designed for healthcare professionals working in environments where infection control is critical. The fabric is treated with silver-ion technology that provides lasting antimicrobial protection even after repeated industrial washing. These scrubs are ideal for surgical departments, ICUs, isolation units, and other high-risk areas in Saudi healthcare facilities.',
  features: [
    'Silver-ion antimicrobial technology that lasts the lifetime of the garment',
    'Fluid-resistant fabric provides additional protection',
    'Breathable material for comfort during long shifts',
    'Reinforced seams in high-stress areas for durability',
    'Multiple pockets designed for medical equipment accessibility',
    'Available in multiple colors to meet department coding requirements',
    'Holds up to industrial laundering and sterilization processes'
  ],
  specifications: [
    { name: 'Material', value: '60% Cotton, 35% Polyester, 5% Elastane' },
    { name: 'Weight', value: 'Medium weight (180 gsm)' },
    { name: 'Care Instructions', value: 'Machine washable, industrial laundry safe up to 75°C' },
    { name: 'Available Sizes', value: 'XS - 4XL' },
    { name: 'Colors', value: '8 options including surgical green, blue, and white' },
    { name: 'Country of Manufacture', value: 'Saudi Arabia' },
    { name: 'Certifications', value: 'ISO 20743 (Antimicrobial effectiveness)' }
  ],
  images: [
    { src: '/images/products/scrubs-set.jpg', alt: 'Antimicrobial Scrubs Front View' },
    { src: '/images/healthcare/healthcare_medical_uniform.jpg', alt: 'Medical professionals wearing Antimicrobial Scrubs' },
    { src: '/images/healthcare/healthcare_nurce_uniform.jpg', alt: 'Antimicrobial Fabric Close-up' },
    { src: '/images/healthcare/healthcare_medical_doctor_uniform.jpg', alt: 'Fluid-resistant Fabric Demonstration' }
  ],
  category: 'Medical Scrubs',
  categorySlug: 'medical-scrubs',
  inStock: true,
  minOrderQuantity: 5,
  bulkPricing: [
    { quantity: '5-24', price: 'SAR 279' },
    { quantity: '25-99', price: 'SAR 259' },
    { quantity: '100-499', price: 'SAR 239' },
    { quantity: '500+', price: 'SAR 219' }
  ],
  customizationOptions: [
    'Hospital/Clinic logo embroidery',
    'Name and credentials embroidery',
    'Department color coding',
    'Custom pocket configurations',
    'RFID tag integration for inventory management'
  ],
  relatedProducts: [
    { id: 'premium-scrubs-set', name: 'Premium Scrubs Set', image: '/images/products/scrubs-set.jpg', price: 'SAR 249', link: '/images/products/scrubs-set.jpg', price: 'SAR 269', link: '/images/products/scrubs-set.jpg', price: 'SAR 199', link: '/shop/medical-scrubs/professional-lab-coat' }
  ]
};

export default function AntimicrobialScrubsPage() {
  const locale = 'en';
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedQuantity, setSelectedQuantity] = React.useState(productData.minOrderQuantity || 1);
  const [activeTab, setActiveTab] = React.useState('description');
  
  return (
    <div className="bg-white">
    
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm text-gray-700 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/shop" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    Shop
                  </Link>
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
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">
                    Antimicrobial Scrubs
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 md:py-12 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={productData.images[selectedImage].src}
                  alt={productData.images[selectedImage].alt}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-primary-600' : 'border-transparent'}`}
                    aria-label={`View ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="w-full lg:w-1/2">
              <div className="mb-2">
                <Link href={`/shop/${productData.categorySlug}`} className="text-sm text-primary-600 hover:underline">
                  {productData.category}
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(productData.rating) ? 'text-yellow-400' : 'text-neutral-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-neutral-600 ml-2">{productData.rating} ({productData.reviews} reviews)</span>
              </div>
              
              <p className="text-2xl font-semibold text-neutral-900 mb-6">{productData.price}</p>
              
              <div className="mb-6">
                <p className="text-neutral-700">{productData.description}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                  Quantity (Minimum: {productData.minOrderQuantity})
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setSelectedQuantity(Math.max(productData.minOrderQuantity, selectedQuantity - 1))}
                    className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-3 py-2 rounded-l-md"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min={productData.minOrderQuantity}
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(Math.max(productData.minOrderQuantity, parseInt(e.target.value) || productData.minOrderQuantity))}
                    className="w-16 text-center py-2 border-t border-b border-neutral-300 focus:outline-none"
                  />
                  <button
                    onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                    className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-3 py-2 rounded-r-md"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col space-y-4 mb-8">
                <Button href="/quote" className="w-full justify-center">
                  Add to Quote
                </Button>
                <Button href="/contact" variant="outline" className="w-full justify-center">
                  Request Custom Options
                </Button>
              </div>
              
              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {productData.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bulk Pricing Preview */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Bulk Pricing Available</h3>
                <div className="grid grid-cols-2 gap-4">
                  {productData.bulkPricing.slice(0, 2).map((pricing, index) => (
                    <div key={index} className="bg-neutral-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-neutral-800">{pricing.quantity} units</p>
                      <p className="text-lg font-semibold text-primary-600">{pricing.price}/unit</p>
                    </div>
                  ))}
                </div>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-3">
                  View all bulk pricing options
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-neutral-50">
        <Container>
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 text-lg font-medium transition-colors duration-200 ${activeTab === 'description' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`pb-4 text-lg font-medium transition-colors duration-200 ${activeTab === 'specifications' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('customization')}
                className={`pb-4 text-lg font-medium transition-colors duration-200 ${activeTab === 'customization' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
              >
                Customization
              </button>
            </div>
          </div>
          
          <div>
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-lg mb-6">{productData.longDescription}</p>
                <h3 className="text-xl font-semibold mb-4">Features & Benefits</h3>
                <ul className="space-y-3">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <tbody className="divide-y divide-neutral-200">
                      {productData.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                          <td className="px-6 py-4 text-sm font-medium text-neutral-900 whitespace-nowrap">
                            {spec.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-neutral-700 whitespace-normal">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Bulk Pricing Table */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Bulk Pricing</h3>
                  <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <table className="min-w-full divide-y divide-neutral-200">
                      <thead className="bg-neutral-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Quantity Range
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Price Per Unit
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Savings
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-neutral-200">
                        {productData.bulkPricing.map((pricing, index) => {
                          // Calculate savings percentage compared to base price
                          const basePrice = parseInt(productData.bulkPricing[0].price.replace(/\D/g, ''));
                          const currentPrice = parseInt(pricing.price.replace(/\D/g, ''));
                          const savings = index === 0 ? 0 : Math.round(((basePrice - currentPrice) / basePrice) * 100);
                          
                          return (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                                {pricing.quantity} units
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                {pricing.price}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                {index === 0 ? 'Base Price' : `Save ${savings}%`}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'customization' && (
              <div>
                <p className="text-lg mb-8">We offer a range of customization options to tailor your uniforms to your specific requirements.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
                    <ul className="space-y-3">
                      {productData.customizationOptions.map((option, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Custom Order Process</h3>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold mr-3">
                          1
                        </div>
                        <span>Initial consultation to discuss your requirements</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold mr-3">
                          2
                        </div>
                        <span>Design proposal and material samples</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold mr-3">
                          3
                        </div>
                        <span>Prototype development and approval</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold mr-3">
                          4
                        </div>
                        <span>Bulk production and quality assurance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold mr-3">
                          5
                        </div>
                        <span>Delivery and after-sales support</span>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Request Custom Options</h3>
                  <p className="mb-6">Contact our team to discuss custom requirements for your organization.</p>
                  <Button href="/contact?product=antimicrobial-scrubs" className="w-auto">
                    Contact Sales Team
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      <section className="py-12 bg-white">
        <Container>
          <SectionHeading>Related Products</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {productData.relatedProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 transition-shadow hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={product.link} className="text-neutral-900 hover:text-primary-600 transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">{product.price}</p>
                  <Link href={product.link} className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    
      </div>
  );
} 