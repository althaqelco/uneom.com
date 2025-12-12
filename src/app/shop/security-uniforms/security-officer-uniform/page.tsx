'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function SecurityOfficerUniformPage() {
  const locale = 'en';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'security-officer-uniform',
    name: 'Professional Security Officer Uniform',
    price: 'SAR 329',
    basePrice: 329,
    rating: 4.7,
    reviews: 56,
    description: 'High-quality professional security officer uniform designed for durability, comfort and a commanding professional appearance. Made from premium materials to withstand daily wear in demanding security environments across Saudi Arabia.',
    features: [
      'Durable polyester-cotton blend fabric for extended service life',
      'Moisture-wicking properties for comfort in Saudi climate conditions',
      'Reinforced stitching at stress points for enhanced durability',
      'Multiple tactical pockets for equipment and accessories',
      'Reflective elements for enhanced visibility in low-light conditions',
      'Easy-care fabric maintains professional appearance after industrial washing',
      'Compatible with standard security accessories and equipment'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton Ripstop' },
      { name: 'Weight', value: 'Medium-heavy weight (210 gsm)' },
      { name: 'Care Instructions', value: 'Machine washable, industrial laundry safe' },
      { name: 'Available Sizes', value: 'S - 4XL' },
      { name: 'Colors', value: 'Black, Navy Blue, Khaki, Dark Green' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Custom Options', value: 'Company embroidery, name badges, shoulder patches' }
    ],
    images: [
      { src: '/images/products/safety-coveralls.jpg', alt: 'Professional Security Officer Uniform Front View' },
      { src: '/images/security/security_team_professional.jpg', alt: 'Security Officer Uniform on Model' },
      { src: '/images/products/safety-coveralls.jpg', alt: 'Security Officer Uniform Detail' },
      { src: '/images/products/safety-coveralls.jpg', alt: 'Security Accessories' }
    ],
    category: 'Security Uniforms',
    categorySlug: 'security-uniforms',
    inStock: true,
    minOrderQuantity: 10,
    estimatedDelivery: '2-3 weeks',
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Navy Blue', value: '#000080' },
      { name: 'Khaki', value: '#c3b091' },
      { name: 'Dark Green', value: '#006400' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    customizationOptions: [
      { name: 'Company Logo Embroidery', price: 'SAR 45 per uniform' },
      { name: 'Name Embroidery', price: 'SAR 25 per uniform' },
      { name: 'Shoulder Patches', price: 'SAR 35 per pair' },
      { name: 'Reflective Badge Holder', price: 'SAR 20 per uniform' }
    ],
    bulkPricing: [
      { quantity: '10-24', pricePerUnit: 'SAR 329' },
      { quantity: '25-99', pricePerUnit: 'SAR 299' },
      { quantity: '100-499', pricePerUnit: 'SAR 279' },
      { quantity: '500+', pricePerUnit: 'SAR 249' }
    ],
    relatedProducts: [
      {
        id: 'security-patrol-jacket',
        name: 'Security Patrol Jacket',
        image: '/images/products/safety-coveralls.jpg',
        price: 'From SAR 179',
        href: '/shop/security-uniforms/security-accessories-kit'
      }
    ]
  };
  
  // Size chart
  const sizeChart = {
    unisex: [
      { size: 'S', chest: '38"', waist: '32"', hip: '40"', inseam: '31"' },
      { size: 'M', chest: '40"', waist: '34"', hip: '42"', inseam: '31"' },
      { size: 'L', chest: '42"', waist: '36"', hip: '44"', inseam: '32"' },
      { size: 'XL', chest: '44"', waist: '38"', hip: '46"', inseam: '32"' },
      { size: '2XL', chest: '46"', waist: '40"', hip: '48"', inseam: '32"' },
      { size: '3XL', chest: '48"', waist: '42"', hip: '50"', inseam: '33"' },
      { size: '4XL', chest: '52"', waist: '46"', hip: '54"', inseam: '33"' },
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
    if (quantity >= 500) {
      return 'SAR ' + ((product.basePrice * 0.76) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'SAR ' + ((product.basePrice * 0.85) * quantity).toLocaleString();
    } else if (quantity >= 25) {
      return 'SAR ' + ((product.basePrice * 0.91) * quantity).toLocaleString();
    } else {
      return 'SAR ' + (product.basePrice * quantity).toLocaleString();
    }
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
                  <Link href="/shop/security-uniforms" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    Security Uniforms
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
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
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
                          <h2 className="text-xl font-bold">Size Chart</h2>
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
                                <th className="px-4 py-2 border">Size</th>
                                <th className="px-4 py-2 border">Chest</th>
                                <th className="px-4 py-2 border">Waist</th>
                                <th className="px-4 py-2 border">Hip</th>
                                <th className="px-4 py-2 border">Inseam</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.unisex.map((size, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-4 py-2 border font-medium">{size.size}</td>
                                  <td className="px-4 py-2 border">{size.chest}</td>
                                  <td className="px-4 py-2 border">{size.waist}</td>
                                  <td className="px-4 py-2 border">{size.hip}</td>
                                  <td className="px-4 py-2 border">{size.inseam}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 text-sm text-gray-500">
                          <p>All measurements are in inches. For best results, take your measurements over undergarments similar to those you will wear with your uniform.</p>
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
                  <p className="mt-4 text-sm text-gray-500">Contact us for more information on customization options.</p>
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
                        {index === 0 ? '-' : `${(100 - (parseInt(tier.pricePerUnit.replace('SAR ', '')) / parseInt(product.bulkPricing[0].pricePerUnit.replace('SAR ', '')) * 100)).toFixed(0)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">All prices are in Saudi Riyal (SAR). Contact us for custom quotes on orders exceeding 1,000 units.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Security Uniforms for Your Organization?</h2>
              <p className="text-gray-700 mb-6">Get a personalized quote for bulk orders of security uniforms with custom branding options and delivery schedule.</p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    
      </div>
  );
} 