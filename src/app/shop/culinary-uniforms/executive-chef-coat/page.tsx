'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ExecutiveChefCoatPage() {
  const locale = 'en';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Product details
  const product = {
    id: 'executive-chef-coat',
    name: 'Executive Chef Coat',
    price: 'SAR 289',
    basePrice: 289,
    rating: 4.8,
    reviews: 63,
    description: 'Premium executive chef coat designed for professional kitchens in Saudi Arabia\'s leading hotels and restaurants. Features elegant styling, high-quality fabric, and practical design elements for comfort during long shifts.',
    features: [
      'Crafted from premium 100% Egyptian cotton for superior comfort and breathability',
      'Double-breasted design with hidden snap closures for quick changing',
      'Moisture-wicking technology to keep cool in hot kitchen environments',
      'Reinforced seams and stress points for extended durability',
      'Thermometer pocket on left sleeve for convenient tool access',
      'Reversible front to conceal stains during service',
      'Available in classic white and black options',
      'Specially designed for the Saudi culinary environment'
    ],
    specifications: [
      { name: 'Material', value: '100% Egyptian Cotton, 240 gsm' },
      { name: 'Closure Type', value: 'Hidden snap buttons with crossover front' },
      { name: 'Care Instructions', value: 'Machine washable, industrial laundry safe' },
      { name: 'Available Sizes', value: 'XS - 4XL' },
      { name: 'Colors', value: 'Classic White, Black' },
      { name: 'Sleeve Length', value: 'Long sleeve with adjustable cuffs' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Embroidery options for name and restaurant logo' }
    ],
    images: [
      { src: '/images/hospitality/premium-chef-uniform.jpg', alt: 'Executive Chef Coat - Front View' },
      { src: '/images/hospitality/chef-uniform-professional.jpg', alt: 'Executive Chef Coat - Side View' },
      { src: '/images/hospitality/chef-uniform-design.jpg', alt: 'Chef Coat Detail' },
      { src: '/images/hospitality/restaurant-chef-uniforms.jpg', alt: 'Complete Chef Uniform' }
    ],
    category: 'Culinary Uniforms',
    categorySlug: 'culinary-uniforms',
    inStock: true,
    minOrderQuantity: 5,
    estimatedDelivery: '1-2 weeks',
    colors: [
      { name: 'Classic White', value: '#FFFFFF' },
      { name: 'Black', value: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    customizationOptions: [
      { name: 'Name Embroidery', price: 'SAR 25 per coat' },
      { name: 'Restaurant Logo Embroidery (Small)', price: 'SAR 45 per coat' },
      { name: 'Restaurant Logo Embroidery (Large)', price: 'SAR 65 per coat' },
      { name: 'Custom Color Piping', price: 'SAR 35 per coat' },
      { name: 'Custom Buttons', price: 'SAR 30 per coat' }
    ],
    bulkPricing: [
      { quantity: '5-24', pricePerUnit: 'SAR 289' },
      { quantity: '25-99', pricePerUnit: 'SAR 259' },
      { quantity: '100-499', pricePerUnit: 'SAR 239' },
      { quantity: '500+', pricePerUnit: 'SAR 219' }
    ],
    relatedProducts: [
      {
        id: 'chef-pants',
        name: 'Professional Chef Pants',
        image: '/images/hospitality/chef-coat-maintenance.jpg',
        price: 'From SAR 129',
        href: '/shop/culinary-uniforms/chef-apron'
      }
    ]
  };

  // Size chart
  const sizeChart = {
    unisex: [
      { size: 'XS', chest: '34-36"', shoulder: '16"', sleeve: '32"', length: '28"' },
      { size: 'S', chest: '36-38"', shoulder: '17"', sleeve: '33"', length: '29"' },
      { size: 'M', chest: '38-40"', shoulder: '18"', sleeve: '33.5"', length: '30"' },
      { size: 'L', chest: '40-42"', shoulder: '19"', sleeve: '34"', length: '31"' },
      { size: 'XL', chest: '42-44"', shoulder: '20"', sleeve: '34.5"', length: '32"' },
      { size: '2XL', chest: '44-46"', shoulder: '21"', sleeve: '35"', length: '33"' },
      { size: '3XL', chest: '46-48"', shoulder: '22"', sleeve: '35.5"', length: '34"' },
      { size: '4XL', chest: '48-50"', shoulder: '23"', sleeve: '36"', length: '35"' },
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
      return 'SAR ' + ((product.basePrice * 0.83) * quantity).toLocaleString();
    } else if (quantity >= 25) {
      return 'SAR ' + ((product.basePrice * 0.90) * quantity).toLocaleString();
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <Link href="/shop" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">Shop</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <Link href="/shop/culinary-uniforms" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    Culinary Uniforms
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
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
                          <h2 className="text-xl font-bold">Chef Coat Size Chart</h2>
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
                                <th className="px-4 py-2 border">Shoulder</th>
                                <th className="px-4 py-2 border">Sleeve</th>
                                <th className="px-4 py-2 border">Length</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.unisex.map((size, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-4 py-2 border font-medium">{size.size}</td>
                                  <td className="px-4 py-2 border">{size.chest}</td>
                                  <td className="px-4 py-2 border">{size.shoulder}</td>
                                  <td className="px-4 py-2 border">{size.sleeve}</td>
                                  <td className="px-4 py-2 border">{size.length}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-6 text-sm text-gray-500">
                          <p>All measurements are in inches. For best results, measure an existing chef coat that fits well and compare to these measurements.</p>
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
                  <p className="mt-2 text-sm text-gray-500">Contact us for more information on custom embroidery and branding options.</p>
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
                  Our Executive Chef Coat is the finest culinary garment in our collection, designed specifically for executive chefs
                  and culinary leaders in Saudi Arabia's premier hotels, restaurants, and catering establishments.
                </p>
                <p>
                  Crafted from 100% premium Egyptian cotton at 240 gsm, this coat offers exceptional breathability, comfort, and durability
                  that withstands the rigors of professional kitchens. The fabric has been specially treated to resist stains and maintain
                  its pristine appearance through multiple industrial washings.
                </p>
                <p>
                  The classic double-breasted design with hidden snap closures allows for quick changing between services while maintaining
                  the elegant traditional look. When one side becomes stained, simply reverse the front to maintain a professional appearance.
                  The thermometer pocket on the left sleeve provides convenient access to essential tools.
                </p>
                <p>
                  Available in classic white for traditional kitchens and black for modern culinary establishments, this coat can be
                  customized with name embroidery and restaurant logos to enhance your brand identity. The design accommodates the
                  Saudi culinary environment with enhanced breathability and moisture-wicking properties to keep chefs comfortable
                  even in hot kitchen conditions.
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
                        {index === 0 ? '-' : `${(100 - (parseInt(tier.pricePerUnit.replace('SAR ', '')) / parseInt(product.bulkPricing[0].pricePerUnit.replace('SAR ', '')) * 100)).toFixed(0)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">All prices are in Saudi Riyal (SAR). Contact us for custom quotes on orders exceeding 500 units or for hotel and restaurant chain requirements.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Culinary Uniforms for Your Establishment?</h2>
              <p className="text-gray-700 mb-6">Get a personalized quote for your restaurant, hotel, or catering company's culinary uniform requirements, including custom branding and embroidery options.</p>
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