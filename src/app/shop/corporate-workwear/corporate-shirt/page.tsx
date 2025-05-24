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

export default function CorporateShirtPage() {
  const locale = 'en';
  
  // Product data
  const product = {
    id: 'corporate-shirt',
    name: 'Corporate Shirt',
    rating: 4.7,
    reviews: 45,
    price: 'SAR 149',
    description: 'High-quality business shirt designed for professional office environments in Saudi Arabia. Featuring easy-care fabric and modern fit, this corporate shirt maintains a professional appearance throughout the workday while providing comfort in air-conditioned offices.',
    details: 'Our premium Corporate Shirt is crafted to meet the demands of Saudi business environments, offering a perfect balance of professionalism and comfort. Made from high-quality cotton blend fabric with moisture-wicking properties, these shirts maintain a crisp, fresh appearance even during long workdays. Each shirt features meticulous stitching, reinforced buttons, and a tailored fit that presents a polished image without sacrificing mobility.',
    features: [
      'Easy-care fabric that stays crisp throughout the day',
      'Moisture-wicking properties ideal for Saudi climate',
      'Comfort stretch for unrestricted movement',
      'Wrinkle-resistant technology for a professional look',
      'Reinforced buttons and stitching for durability',
      'Available in classic and modern fits'
    ],
    specifications: [
      { name: 'Material', value: '60% Cotton, 37% Polyester, 3% Elastane' },
      { name: 'Weight', value: '120 gsm (lightweight, suitable for year-round wear)' },
      { name: 'Care', value: 'Machine washable, easy iron' },
      { name: 'Features', value: 'Split back yoke, reinforced collar, adjustable cuffs' },
      { name: 'Made in', value: 'Saudi Arabia' }
    ],
    images: [
      '/images/corporate/corporate_uniform.jpg',
      '/images/corporate/corporate_brand.jpg',
      '/images/corporate/corporate_custom_logo.jpg',
    ],
    colors: [
      { name: 'White', value: '#ffffff', primary: true },
      { name: 'Light Blue', value: '#b3d9ff', primary: false },
      { name: 'Light Grey', value: '#d9d9d9', primary: false },
      { name: 'Pink', value: '#ffb3d9', primary: false }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    customizationOptions: [
      'Company logo embroidery',
      'Custom collar and cuff styles',
      'Button color customization',
      'Department color coding',
      'Name embroidery options'
    ],
    minOrder: 10,
    estimatedDelivery: '2-3 weeks'
  };
  
  // State for selected color, size, image, and quantity
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to 'L'
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
                <h2 className="text-sm font-medium text-gray-900">Color</h2>
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
                <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
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
                  <span className="ml-2 text-sm text-gray-500">Minimum order: {product.minOrder} units</span>
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
                  Request Sample
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
                Customize your Corporate Shirts to align with your company brand and specific requirements:
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
                <h3 className="text-lg font-medium text-gray-900">Bulk Orders & Corporate Programs</h3>
                <p className="mt-2 text-gray-600">
                  For larger teams or company-wide uniform programs, we offer volume discounts and simplified reordering options.
                </p>
                <div className="mt-4">
                  <Button variant="primary">Inquire About Bulk Orders</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    
      </div>
  );
} 