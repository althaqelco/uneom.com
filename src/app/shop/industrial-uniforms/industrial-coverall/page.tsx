'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

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

export default function IndustrialCoverallPage() {
  const locale = 'en';
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'industrial-coverall',
    name: 'Heavy-Duty Industrial Coverall',
    price: 'SAR 189',
    basePrice: 189,
    rating: 4.7,
    reviewCount: 87,
    description: 'Professional-grade industrial coveralls designed for demanding work environments in Saudi Arabia. Engineered for safety, durability, and comfort during long shifts in manufacturing, oil & gas, and construction sectors.',
    features: [
      'Flame-resistant and oil-repellent fabric for enhanced safety',
      'Reinforced seams and stress points for maximum durability',
      'Multiple utility pockets for tools and equipment',
      'Ergonomic design with action back for improved mobility',
      'Adjustable waist and cuffs for personalized fit',
      'Reflective strips for increased visibility in low light conditions',
      'Hidden two-way heavy-duty zipper with storm flap',
      'Designed to comply with Saudi industrial safety regulations'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton Twill, 260 gsm' },
      { name: 'Safety Features', value: 'Flame-resistant, Oil-repellent, Anti-static properties' },
      { name: 'Closure Type', value: 'Heavy-duty two-way zipper with storm flap' },
      { name: 'Pockets', value: '6 (2 chest, 2 side, 2 rear)' },
      { name: 'Care Instructions', value: 'Industrial washing machine safe, tumble dry low' },
      { name: 'Available Sizes', value: 'S - 4XL' },
      { name: 'Colors', value: 'Navy Blue, Royal Blue, Gray, Khaki, Orange' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' }
    ],
    images: [
      { src: '/images/three-warehouse-worker-in-industrial-workplace-inspecting-work-2023-11-27-04-53-52-utc.jpg', alt: 'Industrial Coverall - Front View' },
      { src: '/images/industrial-worker-using-multimeter-tester-2023-11-27-05-25-54-utc.jpg', alt: 'Industrial Coverall - Side View' },
      { src: '/images/happy-doctor-smiling-at-the-camera-on-a-green-screen-chroma-key-SBI-349602091.jpg', alt: 'Industrial Coverall - Back View' },
      { src: '/images/industrial-worker-wearing-safety-mask-in-factory-2023-11-27-05-32-22-utc.jpg', alt: 'Industrial Coverall - Detail View' }
    ],
    category: 'Industrial Uniforms',
    categorySlug: 'industrial-uniforms',
    inStock: true,
    minOrderQuantity: 10,
    estimatedDelivery: '2-3 weeks',
    colors: [
      { name: 'Navy Blue', value: '#0a1845', inStock: true },
      { name: 'Royal Blue', value: '#1a4b8c', inStock: true },
      { name: 'Gray', value: '#6a6a6a', inStock: true },
      { name: 'Khaki', value: '#c3b091', inStock: true },
      { name: 'Orange', value: '#ff7518', inStock: true }
    ],
    sizes: [
      { name: 'S', description: 'Small (36-38")', inStock: true },
      { name: 'M', description: 'Medium (40-42")', inStock: true },
      { name: 'L', description: 'Large (44-46")', inStock: true },
      { name: 'XL', description: 'Extra Large (48-50")', inStock: true },
      { name: '2XL', description: '2X Large (52-54")', inStock: true },
      { name: '3XL', description: '3X Large (56-58")', inStock: true },
      { name: '4XL', description: '4X Large (60-62")', inStock: true }
    ],
    customizationOptions: [
      { name: 'Company Logo Embroidery', price: 'SAR 35 per coverall' },
      { name: 'Employee Name Embroidery', price: 'SAR 20 per coverall' },
      { name: 'Custom Reflective Strips', price: 'SAR 25 per coverall' },
      { name: 'Additional Pockets', price: 'SAR 15 per pocket' },
      { name: 'Special Safety Features', price: 'Starting at SAR 40 per coverall' }
    ],
    bulkPricing: [
      { quantity: '10-49', pricePerUnit: 'SAR 189' },
      { quantity: '50-99', pricePerUnit: 'SAR 169' },
      { quantity: '100-499', pricePerUnit: 'SAR 149' },
      { quantity: '500+', pricePerUnit: 'SAR 129' }
    ],
    relatedProducts: [
      {
        id: 'safety-vest',
        name: 'High-Visibility Safety Vest',
        image: '/images/industrial-worker-using-multimeter-tester-2023-11-27-05-25-54-utc.jpg',
        price: 'From SAR 59',
        href: '/shop/industrial-uniforms/safety-vest'
      },
      {
        id: 'work-pants',
        name: 'Heavy-Duty Work Pants',
        image: '/images/three-warehouse-worker-in-industrial-workplace-inspecting-work-2023-11-27-04-53-52-utc.jpg',
        price: 'From SAR 119',
        href: '/shop/industrial-uniforms/work-pants'
      },
      {
        id: 'industrial-jacket',
        name: 'Insulated Industrial Jacket',
        image: '/images/industrial-worker-wearing-safety-mask-in-factory-2023-11-27-05-32-22-utc.jpg',
        price: 'From SAR 229',
        href: '/shop/industrial-uniforms/industrial-jacket'
      }
    ]
  };
  
  // Customer reviews separate from product object
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      content: "These coveralls have exceeded our expectations. The durability is impressive, even in the harshest oil field conditions. Our team has been using them for 6 months with no visible wear.",
      author: "Ahmed Al-Saud, Operations Manager",
      date: "June 15, 2023"
    },
    {
      id: 2,
      rating: 4,
      content: "Great quality and compliance with safety standards. The customization with our company logo looks professional. Only suggestion would be to add more color options.",
      author: "Khalid Ibrahim, Safety Supervisor",
      date: "August 3, 2023"
    },
    {
      id: 3,
      rating: 5,
      content: "The fit is perfect and the fabric quality is excellent. These coveralls keep our workers safe and comfortable in high-temperature environments. Will definitely order again.",
      author: "Mohammed Al-Qahtani, Procurement Director",
      date: "October 12, 2023"
    }
  ];
  
  // Size chart
  const sizeChart = {
    measurements: [
      { size: 'S', chest: '36-38"', waist: '30-32"', inseam: '30"', sleeve: '33"' },
      { size: 'M', chest: '40-42"', waist: '34-36"', inseam: '31"', sleeve: '34"' },
      { size: 'L', chest: '44-46"', waist: '38-40"', inseam: '32"', sleeve: '35"' },
      { size: 'XL', chest: '48-50"', waist: '42-44"', inseam: '33"', sleeve: '36"' },
      { size: '2XL', chest: '52-54"', waist: '46-48"', inseam: '34"', sleeve: '37"' },
      { size: '3XL', chest: '56-58"', waist: '50-52"', inseam: '35"', sleeve: '38"' },
      { size: '4XL', chest: '60-62"', waist: '54-56"', inseam: '36"', sleeve: '39"' },
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
      return 'SAR ' + ((product.basePrice * 0.68) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'SAR ' + ((product.basePrice * 0.79) * quantity).toLocaleString();
    } else if (quantity >= 50) {
      return 'SAR ' + ((product.basePrice * 0.89) * quantity).toLocaleString();
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
                  <Link href="/shop/industrial-uniforms" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    Industrial Uniforms
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
                      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-bold">Industrial Coverall Size Chart</h2>
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
                                <th className="px-4 py-2 border">Inseam</th>
                                <th className="px-4 py-2 border">Sleeve</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.measurements.map((size, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-4 py-2 border font-medium">{size.size}</td>
                                  <td className="px-4 py-2 border">{size.chest}</td>
                                  <td className="px-4 py-2 border">{size.waist}</td>
                                  <td className="px-4 py-2 border">{size.inseam}</td>
                                  <td className="px-4 py-2 border">{size.sleeve}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 text-sm text-gray-500">
                          <p>All measurements are in inches. For best fit, measure over appropriate clothing. For industrial coveralls, we recommend ordering one size larger than your regular clothing size to allow for movement and layering.</p>
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
                  <p className="mt-2 text-sm text-gray-500">Contact us for more information on custom branding and safety feature options.</p>
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
                  Our Heavy-Duty Industrial Coveralls are engineered specifically for the demanding industrial environments 
                  in Saudi Arabia. These coveralls provide excellent protection for workers in manufacturing, oil and gas, 
                  construction, and other industrial sectors where safety and durability are paramount.
            </p>
            <p>
                  Crafted from premium 65% polyester and 35% cotton twill fabric at 260 gsm, these coveralls offer the 
                  perfect balance of durability, comfort, and protection. The fabric has been treated with flame-resistant 
                  and oil-repellent properties to enhance worker safety in hazardous environments.
            </p>
            <p>
                  The ergonomic design features an action back that allows for full range of motion, crucial for workers 
                  who need to bend, reach, and move throughout their shifts. Multiple utility pockets provide convenient 
                  storage for tools and equipment, while the reinforced seams and stress points ensure these coveralls 
                  can withstand heavy use in demanding conditions.
            </p>
            <p>
                  Safety features include reflective strips for increased visibility in low-light conditions and 
                  anti-static properties to prevent spark hazards. The hidden two-way heavy-duty zipper with storm 
                  flap provides easy access while maintaining protection.
            </p>
            <p>
                  These coveralls comply with Saudi industrial safety regulations and are manufactured locally to 
                  ensure they meet the specific requirements of the Saudi industrial sector, including adaptations 
                  for the local climate and working conditions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Customer Reviews */}
      <section className="py-12">
        <Container>
          <SectionHeading centered>Customer Reviews</SectionHeading>
          <div className="mt-8 space-y-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
                    </div>
                    <p className="text-gray-800 mb-3">{review.content}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{review.author}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Bulk Pricing */}
      <section className="py-12 bg-gray-50">
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
            <p className="text-sm text-gray-500 mt-4">All prices are in Saudi Riyal (SAR). Contact us for custom quotes on orders exceeding 500 units or for specialized industrial requirements.</p>
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-12">
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
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Industrial Uniforms for Your Workforce?</h2>
              <p className="text-gray-700 mb-6">Get a personalized quote for your manufacturing, construction, or industrial company's uniform requirements, including customization and safety features.</p>
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