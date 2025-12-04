'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ReceptionUniformPage() {
  const locale = 'en';
  
  // Product data
  const product = {
    id: 'reception-uniform',
    name: 'Reception Uniform Set',
    rating: 4.9,
    reviews: 26,
    price: 'SAR 299',
    description: 'Complete front desk uniform set designed for receptionist and customer-facing staff in corporate environments across Saudi Arabia. This professional ensemble creates a lasting first impression while providing comfort and functionality for daily front-desk duties.',
    details: 'Our Reception Uniform Set is meticulously designed to create the perfect first impression for your business in Saudi Arabia. This comprehensive package includes a tailored blazer, coordinated shirt/blouse, and matching bottom piece, creating a cohesive professional appearance for your front-desk staff. Each component is crafted from premium fabrics that balance sophistication with comfort for those long hours greeting and assisting visitors. Available in male and female styles with modest options suitable for Saudi business environments.',
    features: [
      'Complete uniform set with coordinated pieces',
      'Professional design ideal for corporate front desks',
      'Premium fabrics with subtle corporate detailing',
      'Stain-resistant treatment for high-traffic areas',
      'Comfort features for extended standing and sitting',
      'Modest design options for Saudi business settings'
    ],
    specifications: [
      { name: 'Jacket Material', value: '70% Polyester, 28% Viscose, 2% Elastane' },
      { name: 'Shirt/Blouse Material', value: '65% Cotton, 35% Polyester' },
      { name: 'Bottom Material', value: '65% Polyester, 33% Viscose, 2% Elastane' },
      { name: 'Care', value: 'Dry clean recommended for jacket, machine washable shirts/bottoms' },
      { name: 'Features', value: 'Coordinated set, corporate-ready design, modest options available' },
      { name: 'Made in', value: 'Saudi Arabia' }
    ],
    images: [
      '/images/corporate/corporate_uniform.jpg',
      '/images/corporate/corporate_comoany.jpg',
      '/images/corporate/corporate_custom_logo.jpg',
    ],
    colors: [
      { name: 'Navy & Light Blue', value: '#1f3a63', primary: true },
      { name: 'Charcoal & White', value: '#515a5a', primary: false },
      { name: 'Burgundy & Cream', value: '#800020', primary: false },
      { name: 'Black & Grey', value: '#17202a', primary: false }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    customizationOptions: [
      'Corporate logo embroidery on jacket',
      'Custom color combinations to match brand identity',
      'Name badges and corporate accessories',
      'Scarf or tie options in corporate colors',
      'Modest and traditional Saudi options available'
    ],
    minOrder: 5,
    estimatedDelivery: '3-4 weeks'
  };
  
  // State for selected color, size, image, and quantity
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to 'M'
  const [currentImage, setCurrentImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(product.minOrder);
  
  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= product.minOrder) {
      setQuantity(value);
    }
  };
  
  // Render star rating
  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
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
                  <Link href="/shop/corporate-workwear" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">Corporate Workwear</Link>
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
      
      {/* Product Display */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image 
                  src={currentImage} 
                  alt={product.name} 
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-24 cursor-pointer rounded-md ${currentImage === image ? 'ring-2 ring-primary-500' : 'border border-gray-200'}`}
                    onClick={() => setCurrentImage(image)}
                  >
                    <Image 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex items-center">
                    {renderRating(product.rating)}
                  </div>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                <p className="mt-2 text-2xl font-semibold text-gray-900">{product.price}</p>
              </div>
              
              <div>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {/* Color Selection */}
              <div>
                <h2 className="text-sm font-medium text-gray-900">Color Combination</h2>
                <div className="mt-2 flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <div
                      key={color.name}
                      className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ${selectedColor.name === color.name ? 'ring-2 ring-primary-500' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span
                        className="h-8 w-8 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.value }}
                      />
                      {selectedColor.name === color.name && (
                        <span className="absolute top-[-8px] right-[-8px] bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          <IoMdCheckmark />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">{selectedColor.name}</p>
              </div>
              
              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">Size guide</a>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className={`flex items-center justify-center rounded-md border py-2 px-3 text-sm font-medium cursor-pointer ${
                        selectedSize === size
                          ? 'border-transparent bg-primary-600 text-white'
                          : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div>
                <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
                <div className="mt-2 flex items-center">
                  <input
                    type="number"
                    min={product.minOrder}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-500">Minimum order: {product.minOrder} sets</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button 
                  variant="primary" 
                  className="flex-1 py-3"
                >
                  Add to Quote
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 py-3"
                >
                  Request Design Consultation
                </Button>
              </div>
              
              {/* Estimated Delivery */}
              <div className="text-sm text-gray-600">
                <p>Estimated delivery time: {product.estimatedDelivery}</p>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <a href="#details" className="border-primary-500 text-primary-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Details</a>
                <a href="#specifications" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Specifications</a>
                <a href="#customization" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Customization</a>
              </nav>
            </div>
            
            {/* Details Tab */}
            <div id="details" className="py-6">
              <SectionHeading>Product Details</SectionHeading>
              <p className="mt-4 text-gray-700">
                {product.details}
              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Features</h3>
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <IoMdCheckmark className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Specifications Tab */}
            <div id="specifications" className="py-6 border-t border-gray-200">
              <SectionHeading>Specifications</SectionHeading>
              <div className="mt-4">
                <table className="min-w-full divide-y divide-gray-300">
                  <tbody className="divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 w-1/4">{spec.name}</td>
                        <td className="py-4 px-3 text-sm text-gray-500">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Customization Tab */}
            <div id="customization" className="py-6 border-t border-gray-200">
              <SectionHeading>Customization Options</SectionHeading>
              <p className="mt-4 text-gray-700">
                Customize your Reception Uniform Sets to create a cohesive brand experience for your visitors:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {product.customizationOptions.map((option, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <IoMdCheckmark className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{option}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Corporate Identity Program</h3>
                <p className="mt-2 text-gray-600">
                  Let our design team create a comprehensive front desk uniform program aligned with your corporate identity and brand standards.
                </p>
                <div className="mt-4">
                  <Button variant="primary">Schedule Design Consultation</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-16">
            <SectionHeading>Complete Your Corporate Look</SectionHeading>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src="/images/corporate/corporate_business_uniform.jpg"
                    alt="Executive Blazer"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href="/shop/corporate-workwear/executive-blazer">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Executive Blazer
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Premium corporate attire</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">SAR 359</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src="/images/corporate/corporate_uniform_office.jpg"
                    alt="Corporate Shirt"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href="/shop/corporate-workwear/corporate-shirt">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Corporate Shirt
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Professional business shirt</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">SAR 149</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src="/images/corporate/corporate_uniform_formal.jpg"
                    alt="Office Trousers"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href="/shop/corporate-workwear/office-trouser">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Office Trousers
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Professional daily wear</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">SAR 179</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src="/images/corporate/corporate_brand.jpg"
                    alt="Corporate Identity Package"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href="/services/custom-design">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Corporate Identity Package
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Complete branding solution</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Custom</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    
      </div>
  );
} 