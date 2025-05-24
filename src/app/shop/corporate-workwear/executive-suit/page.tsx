'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ExecutiveSuitPage() {
  const locale = 'en';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'executive-suit',
    name: 'Premium Executive Suit',
    price: 'SAR 899',
    basePrice: 899,
    rating: 4.9,
    reviewCount: 54,
    description: 'Premium executive suit tailored for Saudi corporate professionals. Combining modern styling with traditional elements for a distinguished professional appearance suitable for executive meetings and formal corporate events.',
    features: [
      'Crafted from premium Italian wool blend for superior comfort and refined appearance',
      'Tailored fit with structured shoulders for a distinguished silhouette',
      'Breathable fabric technology adapted to Saudi corporate environments',
      'Stain and wrinkle-resistant finish for day-long professional appearance',
      'Available in matching sets for consistent corporate team presentation',
      'Customizable with corporate identity elements and subtle branding',
      'Available for both men and women with appropriate cultural considerations'
    ],
    specifications: [
      { name: 'Material', value: '85% wool, 15% performance blend with premium finish' },
      { name: 'Weight', value: 'Medium-weight (260-280 gsm)' },
      { name: 'Care Instructions', value: 'Dry clean only, press with medium heat' },
      { name: 'Available Sizes', value: '46-60 (EU) for men, 36-50 (EU) for women' },
      { name: 'Colors', value: 'Navy Blue, Charcoal Gray, Black, and custom corporate colors' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia with Italian fabrics' },
      { name: 'Customization', value: 'Corporate logo embroidery, name embroidery, custom lining' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Premium Executive Suit - Front View' },
      { src: '/images/avatar-placeholder.jpg', alt: 'Executive Team Wearing Corporate Suits' },
      { src: '/images/default-placeholder.jpg', alt: 'Executive Suit Side View' },
      { src: '/images/default-placeholder.jpg', alt: 'Corporate Meeting With Executive Suits' }
    ],
    category: 'Corporate Workwear',
    categorySlug: 'corporate-workwear',
    inStock: true,
    minOrderQuantity: 5,
    estimatedDelivery: '3-4 weeks',
    colors: [
      { name: 'Navy Blue', value: '#0a192f', inStock: true },
      { name: 'Charcoal Gray', value: '#36454f', inStock: true },
      { name: 'Black', value: '#000000', inStock: true },
      { name: 'Dark Brown', value: '#3b2f2f', inStock: true }
    ],
    sizes: [
      { name: '46', description: 'EU Size 46', inStock: true },
      { name: '48', description: 'EU Size 48', inStock: true },
      { name: '50', description: 'EU Size 50', inStock: true },
      { name: '52', description: 'EU Size 52', inStock: true },
      { name: '54', description: 'EU Size 54', inStock: true },
      { name: '56', description: 'EU Size 56', inStock: true },
      { name: '58', description: 'EU Size 58', inStock: true },
      { name: '60', description: 'EU Size 60', inStock: true }
    ],
    customizationOptions: [
      { name: 'Corporate Logo Embroidery', price: 'SAR 75 per suit' },
      { name: 'Name Embroidery', price: 'SAR 35 per suit' },
      { name: 'Custom Lining', price: 'SAR 120 per suit' },
      { name: 'Monogrammed Buttons', price: 'SAR 90 per suit' },
      { name: 'Corporate Color Matching', price: 'SAR 150 per order' }
    ],
    bulkPricing: [
      { quantity: '5-19', pricePerUnit: 'SAR 899' },
      { quantity: '20-49', pricePerUnit: 'SAR 849' },
      { quantity: '50-99', pricePerUnit: 'SAR 799' },
      { quantity: '100+', pricePerUnit: 'SAR 749' }
    ],
    relatedProducts: [
      {
        id: 'executive-shirt',
        name: 'Premium Corporate Shirt',
        image: '/images/default-placeholder.jpg',
        price: 'From SAR 249',
        href: '/shop/corporate-workwear/executive-shirt'
      },
      {
        id: 'corporate-blazer',
        name: 'Women\'s Corporate Blazer',
        image: '/images/avatar-placeholder.jpg',
        price: 'From SAR 599',
        href: '/shop/corporate-workwear/corporate-blazer'
      },
      {
        id: 'formal-trousers',
        name: 'Premium Formal Trousers',
        image: '/images/default-placeholder.jpg',
        price: 'From SAR 349',
        href: '/shop/corporate-workwear/formal-trousers'
      }
    ]
  };
  
  // Size chart
  const sizeChart = {
    men: [
      { size: '46', chest: '36"', waist: '30"', shoulder: '17"', sleeve: '23.5"' },
      { size: '48', chest: '38"', waist: '32"', shoulder: '17.5"', sleeve: '24"' },
      { size: '50', chest: '40"', waist: '34"', shoulder: '18"', sleeve: '24.5"' },
      { size: '52', chest: '42"', waist: '36"', shoulder: '18.5"', sleeve: '25"' },
      { size: '54', chest: '44"', waist: '38"', shoulder: '19"', sleeve: '25.5"' },
      { size: '56', chest: '46"', waist: '40"', shoulder: '19.5"', sleeve: '26"' },
      { size: '58', chest: '48"', waist: '42"', shoulder: '20"', sleeve: '26.5"' },
      { size: '60', chest: '50"', waist: '44"', shoulder: '20.5"', sleeve: '27"' }
    ],
    women: [
      { size: '36', bust: '34"', waist: '26.5"', hip: '36.5"', shoulder: '15"' },
      { size: '38', bust: '35"', waist: '28"', hip: '38"', shoulder: '15.25"' },
      { size: '40', bust: '36.5"', waist: '29.5"', hip: '39.5"', shoulder: '15.5"' },
      { size: '42', bust: '38"', waist: '31"', hip: '41"', shoulder: '15.75"' },
      { size: '44', bust: '39.5"', waist: '32.5"', hip: '42.5"', shoulder: '16"' },
      { size: '46', bust: '41"', waist: '34"', hip: '44"', shoulder: '16.25"' },
      { size: '48', bust: '43"', waist: '36"', hip: '46"', shoulder: '16.5"' },
      { size: '50', bust: '45"', waist: '38"', hip: '48"', shoulder: '17"' }
    ]
  };
  
  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= product.minOrderQuantity) {
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
    if (quantity >= 100) {
      return 'SAR ' + ((product.basePrice * 0.83) * quantity).toLocaleString();
    } else if (quantity >= 50) {
      return 'SAR ' + ((product.basePrice * 0.89) * quantity).toLocaleString();
    } else if (quantity >= 20) {
      return 'SAR ' + ((product.basePrice * 0.94) * quantity).toLocaleString();
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
                  <Link href="/shop/corporate-workwear" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    Corporate Workwear
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
                <span className="text-gray-600 ml-2">{product.rating} ({product.reviewCount} reviews)</span>
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
                        disabled={!color.inStock}
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
                        onClick={() => setSelectedSize(size.name)}
                        className={`px-4 py-2 text-sm font-medium rounded-md border focus:outline-none
                          ${selectedSize === size.name 
                            ? 'border-primary-600 bg-primary-50 text-primary-700' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                        disabled={!size.inStock}
                        title={size.description}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                  
                  {/* Size Chart Modal */}
                  {showSizeChart && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-bold">Executive Suit Size Chart</h2>
                          <button 
                            onClick={() => setShowSizeChart(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="space-y-8">
                          <div>
                            <h3 className="text-lg font-medium mb-3">Men's Sizes (EU)</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm text-gray-700">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 border">Size</th>
                                    <th className="px-4 py-2 border">Chest</th>
                                    <th className="px-4 py-2 border">Waist</th>
                                    <th className="px-4 py-2 border">Shoulder</th>
                                    <th className="px-4 py-2 border">Sleeve</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sizeChart.men.map((size, index) => (
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
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Women's Sizes (EU)</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm text-gray-700">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 border">Size</th>
                                    <th className="px-4 py-2 border">Bust</th>
                                    <th className="px-4 py-2 border">Waist</th>
                                    <th className="px-4 py-2 border">Hip</th>
                                    <th className="px-4 py-2 border">Shoulder</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sizeChart.women.map((size, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                      <td className="px-4 py-2 border font-medium">{size.size}</td>
                                      <td className="px-4 py-2 border">{size.bust}</td>
                                      <td className="px-4 py-2 border">{size.waist}</td>
                                      <td className="px-4 py-2 border">{size.hip}</td>
                                      <td className="px-4 py-2 border">{size.shoulder}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-sm text-gray-500">
                          <p>All measurements are in inches. For executive suits, we recommend professional measuring by our team to ensure the perfect fit. We offer alteration services to ensure your corporate uniforms fit impeccably.</p>
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
                    min={product.minOrderQuantity}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  <span className="ml-3 text-sm text-gray-500">Minimum order: {product.minOrderQuantity} suits</span>
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
                  <p className="mt-2 text-sm text-gray-500">Contact us for more information on corporate branding and special design requirements for your executive team.</p>
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
                  Our Premium Executive Suit sets a new standard for corporate attire in Saudi Arabia, 
                  where professional presentation is paramount. Crafted specifically for executives and 
                  senior management, these suits blend timeless elegance with modern business sensibilities.
                </p>
                <p>
                  The premium Italian wool blend fabric delivers exceptional comfort while maintaining a 
                  structured, authoritative appearance throughout long business days. The tailored silhouette 
                  projects confidence and success in every corporate setting, from boardroom meetings to 
                  client presentations.
                </p>
                <p>
                  Each suit incorporates thoughtful design elements that consider the Saudi business environment, 
                  including breathable construction for comfort in air-conditioned offices and stain-resistant 
                  technology that maintains an impeccable appearance throughout demanding schedules.
                </p>
                <p>
                  Available for both men and women with appropriate cultural considerations, our executive suits 
                  can be customized with corporate branding elements, from subtle logo embroidery to custom linings 
                  in corporate colors. For senior management teams, we offer coordinated suiting programs that 
                  ensure a cohesive and distinguished corporate appearance.
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
          <p className="text-center text-gray-700 mb-8">Benefit from economies of scale with our volume pricing structure for corporate uniform programs.</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 border text-left">Quantity</th>
                    <th className="px-6 py-3 border text-right">Price Per Suit</th>
                    <th className="px-6 py-3 border text-right">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {product.bulkPricing.map((tier, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-3 border">{tier.quantity} suits</td>
                      <td className="px-6 py-3 border text-right">{tier.pricePerUnit}</td>
                      <td className="px-6 py-3 border text-right text-green-600">
                        {index === 0 ? '-' : `${(100 - (parseInt(tier.pricePerUnit.replace('SAR ', '')) / parseInt(product.bulkPricing[0].pricePerUnit.replace('SAR ', '')) * 100)).toFixed(0)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">All prices are in Saudi Riyal (SAR). Contact us for custom executive uniform programs and corporate pricing for quantities exceeding 100 units.</p>
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
      
      {/* Corporate Program CTA */}
      <section className="py-12">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Corporate Uniforms for Your Organization?</h2>
              <p className="text-gray-700 mb-6">Our corporate uniform specialists can develop a comprehensive uniform program tailored to your company's brand identity, organizational structure, and specific requirements.</p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request Corporate Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    
      </div>
  );
} 