'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function PilotUniformPage() {
  const locale = 'en';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'pilot-uniform',
    name: 'Professional Pilot Uniform',
    price: 'SAR 1,599',
    basePrice: 1599,
    rating: 4.9,
    reviews: 42,
    description: 'Premium professional pilot uniform designed for Saudi airlines and aviation companies. Features a distinguished design, premium materials, and meets international aviation standards while accommodating Saudi climate conditions.',
    features: [
      'Tailored from premium wool-blend fabric for a crisp, professional appearance',
      'Advanced wrinkle-resistant properties to maintain appearance during long shifts',
      'Breathable design optimized for Saudi aviation environments',
      'Gold-plated buttons and wing pins with customizable airline logo options',
      'Ergonomically designed for comfort during extended flight duties',
      'Available with Saudi and international aviation rank designations',
      'Multiple internal and external pockets designed for pilot accessories and documents'
    ],
    specifications: [
      { name: 'Material', value: '70% Wool, 30% Polyester blend for jacket & trousers' },
      { name: 'Shirt Material', value: '100% Premium Cotton, anti-microbial treated' },
      { name: 'Weight', value: 'Medium weight (250 gsm for jacket, 120 gsm for shirt)' },
      { name: 'Care Instructions', value: 'Dry clean recommended for jacket, machine washable shirt' },
      { name: 'Available Sizes', value: '46-60 (European sizing)' },
      { name: 'Colors', value: 'Navy Blue, Black (as per airline requirements)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Airline logo embroidery, rank stripes, name badges' }
    ],
    images: [
      { src: '/images/cheerful-flight-attendant-standing-in-airport-term-2024-10-18-08-12-48-utc.jpg', alt: 'Professional Pilot Uniform - Front View' },
      { src: '/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg', alt: 'Professional Pilot Uniform - Side View' },
      { src: '/images/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg', alt: 'Pilot Uniform Accessories' },
      { src: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg', alt: 'Complete Pilot Uniform Set' }
    ],
    category: 'Aviation Uniforms',
    categorySlug: 'aviation-uniforms',
    inStock: true,
    minOrderQuantity: 3,
    estimatedDelivery: '3-4 weeks',
    colors: [
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Black', value: '#000000' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56', '58', '60'],
    customizationOptions: [
      { name: 'Airline Logo Embroidery', price: 'SAR 75 per uniform' },
      { name: 'Captain Rank Stripes (4 bars)', price: 'SAR 65 per set' },
      { name: 'First Officer Rank Stripes (3 bars)', price: 'SAR 55 per set' },
      { name: 'Second Officer Rank Stripes (2 bars)', price: 'SAR 45 per set' },
      { name: 'Name Badge', price: 'SAR 35 per piece' }
    ],
    bulkPricing: [
      { quantity: '3-9', pricePerUnit: 'SAR 1,599' },
      { quantity: '10-24', pricePerUnit: 'SAR 1,499' },
      { quantity: '25-49', pricePerUnit: 'SAR 1,399' },
      { quantity: '50+', pricePerUnit: 'SAR 1,299' }
    ],
    relatedProducts: [
      {
        id: 'airline-crew-uniform',
        name: 'Airline Crew Uniform',
        image: '/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg',
        price: 'From SAR 1,299',
        href: '/shop/aviation-uniforms/airline-crew-uniform'
      },
      {
        id: 'ground-staff-uniform',
        name: 'Ground Staff Uniform',
        image: '/images/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg',
        price: 'From SAR 899',
        href: '/shop/aviation-uniforms/ground-staff-uniform'
      },
      {
        id: 'aviation-accessories',
        name: 'Aviation Accessories Pack',
        image: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg',
        price: 'From SAR 349',
        href: '/shop/aviation-uniforms/aviation-accessories'
      }
    ]
  };
  
  // Size chart
  const sizeChart = {
    european: [
      { size: '46', chest: '36"', waist: '30"', shoulder: '17.5"', sleeve: '24"' },
      { size: '48', chest: '38"', waist: '32"', shoulder: '18"', sleeve: '24.5"' },
      { size: '50', chest: '40"', waist: '34"', shoulder: '18.5"', sleeve: '25"' },
      { size: '52', chest: '42"', waist: '36"', shoulder: '19"', sleeve: '25.5"' },
      { size: '54', chest: '44"', waist: '38"', shoulder: '19.5"', sleeve: '26"' },
      { size: '56', chest: '46"', waist: '40"', shoulder: '20"', sleeve: '26.5"' },
      { size: '58', chest: '48"', waist: '42"', shoulder: '20.5"', sleeve: '27"' },
      { size: '60', chest: '50"', waist: '44"', shoulder: '21"', sleeve: '27.5"' },
    ]
  };
  
  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  
  // Handle add to quote
  const handleAddToQuote = () => {
    // In a real application, this would add the product to a quote cart
    console.log('Added to quote:', {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    
    alert('Product added to your quote request.');
  };
  
  // Generate pricing display based on quantity
  const getPriceDisplay = () => {
    if (quantity >= 50) {
      return 'SAR ' + ((product.basePrice * 0.81) * quantity).toLocaleString();
    } else if (quantity >= 25) {
      return 'SAR ' + ((product.basePrice * 0.87) * quantity).toLocaleString();
    } else if (quantity >= 10) {
      return 'SAR ' + ((product.basePrice * 0.94) * quantity).toLocaleString();
    } else {
      return 'SAR ' + (product.basePrice * quantity).toLocaleString();
    }
  };
  
  return (
    <MainLayout locale={locale}>
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
                  <Link href="/shop/aviation-uniforms" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    Aviation Uniforms
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
                  src={product.images[activeImage].src}
                  alt={product.images[activeImage].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 transition-colors
                      ${activeImage === index ? 'border-primary-600' : 'border-transparent hover:border-primary-400'}`}
                    onClick={() => setActiveImage(index)}
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
              
              <p className="text-2xl font-bold text-gray-900 mb-4">{product.price}</p>
              
              <div className="prose prose-sm mb-8">
                <p>{product.description}</p>
              </div>
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 focus:outline-none
                          ${selectedColor === color.name ? 'border-primary-600' : 'border-gray-300'}`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-900">Size (European)</h3>
                    <button 
                      onClick={() => setShowSizeChart(!showSizeChart)}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      Size chart
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm font-medium rounded-md border focus:outline-none
                          ${selectedSize === size 
                            ? 'border-primary-600 bg-primary-50 text-primary-700' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  
                  {/* Size Chart Modal */}
                  {showSizeChart && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-bold">European Size Chart (Men's Suits)</h2>
                          <button 
                            onClick={() => setShowSizeChart(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-gray-700">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-2 border">EU Size</th>
                                <th className="px-4 py-2 border">Chest</th>
                                <th className="px-4 py-2 border">Waist</th>
                                <th className="px-4 py-2 border">Shoulder</th>
                                <th className="px-4 py-2 border">Sleeve</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.european.map((size, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-4 py-2 border font-medium">{size.size}</td>
                                  <td className="px-4 py-2 border">{size.chest}</td>
                                  <td className="px-4 py-2 border">{size.waist}</td>
                                  <td className="px-4 py-2 border">{size.shoulder}</td>
                                  <td className="px-4 py-2 border">{size.sleeve}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 text-sm text-gray-500">
                          <p>All measurements are in inches. For best results, have your measurements taken by a professional tailor for the most accurate fit.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  <span className="ml-3 text-sm text-gray-500">Minimum order: {product.minOrderQuantity} units</span>
                </div>
              </div>
              
              {/* Total Price */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Price (estimated):</span>
                  <span className="text-xl font-bold text-primary-700">{getPriceDisplay()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Final price will be confirmed in quote</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToQuote}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  Add to Quote
                </Button>
                <Link href="/contact" className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Request Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Custom Options */}
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Customization Options</h3>
                  <ul className="space-y-2">
                    {product.customizationOptions.map((option, index) => (
                      <li key={index} className="flex justify-between text-gray-700">
                        <span>{option.name}</span>
                        <span className="text-gray-500">{option.price}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Contact us for more information on customization options and airline-specific requirements.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <div className="px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <h3 className="mt-6">Product Specifications</h3>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full border-collapse">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-2 px-4 border border-gray-200 font-medium">{spec.name}</td>
                          <td className="py-2 px-4 border border-gray-200">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <h3 className="mt-6">Product Description</h3>
                <p>
                  Our Professional Pilot Uniform is specifically designed for Saudi Arabian airlines and aviation companies, 
                  combining international aviation standards with local requirements and considerations.
                </p>
                <p>
                  The jacket and trousers are crafted from a premium wool-polyester blend that maintains its shape and 
                  appearance through long flight duties and varying climate conditions. The included shirts are made from 
                  high-quality, breathable cotton with anti-microbial treatment for freshness during extended wear.
                </p>
                <p>
                  Each uniform comes with standard rank designations that can be customized according to airline specifications.
                  The gold-plated buttons and wing pins add a distinguished touch to the uniform, while the multiple pockets 
                  are strategically placed for pilot essentials like documents, pens, and personal items.
                </p>
                <p>
                  The uniform is designed to project authority and professionalism while providing comfort during long shifts 
                  in the cockpit. The fabric is optimized for the Saudi climate, offering breathability while maintaining a 
                  crisp, professional appearance.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Bulk Pricing */}
      <section className="py-12">
        <Container>
          <SectionHeading centered>Volume Pricing</SectionHeading>
          <p className="text-center text-gray-700 mb-8">Benefit from significant savings with our volume pricing structure.</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 border text-left">Quantity</th>
                    <th className="px-6 py-3 border text-right">Price Per Unit</th>
                    <th className="px-6 py-3 border text-right">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {product.bulkPricing.map((tier, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3 border">{tier.quantity} units</td>
                      <td className="px-6 py-3 border text-right">{tier.pricePerUnit}</td>
                      <td className="px-6 py-3 border text-right text-green-600">
                        {index === 0 ? '-' : `${(100 - (parseInt(tier.pricePerUnit.replace('SAR ', '').replace(',', '')) / parseInt(product.bulkPricing[0].pricePerUnit.replace('SAR ', '').replace(',', '')) * 100)).toFixed(0)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">All prices are in Saudi Riyal (SAR). Contact us for custom quotes on orders exceeding 50 units or for airline-specific fleet requirements.</p>
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <Container>
            <SectionHeading centered>Related Products</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {product.relatedProducts.map((relatedProduct, index) => (
                <Link href={relatedProduct.href} key={index} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mt-1 group-hover:text-primary-600 transition-colors duration-200">{relatedProduct.name}</h3>
                      <p className="text-primary-600 font-medium mt-2">{relatedProduct.price}</p>
                      <span className="text-sm text-primary-600 group-hover:text-primary-500 transition-colors duration-200 flex items-center mt-3">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
      
      {/* Quick Quote Form */}
      <section className="py-12">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Aviation Uniforms for Your Airline?</h2>
              <p className="text-gray-700 mb-6">Get a personalized quote for your airline's uniform requirements, including custom branding options and fleet-wide deployment.</p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 