'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TestimonialCard from '@/components/ui/TestimonialCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function IndustrialProtectiveUniformsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('L');
  const [quantity, setQuantity] = useState(25);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'industrial-protective-uniforms',
    name: 'Industrial Protective Uniforms',
    price: 'From SAR 345',
    basePrice: "345",
    rating: 4.9,
    reviews: 87,
    description: 'High-performance protective uniforms designed for industrial environments in Saudi Arabia, offering superior safety, comfort, and durability in extreme conditions.',
    longDescription: 'Our Industrial Protective Uniforms are engineered specifically for the demanding industrial environments in Saudi Arabia. These uniforms combine advanced protection technologies with comfort features designed for extended wear in high-temperature settings. Each garment meets international safety standards while addressing the specific challenges of the Saudi industrial sector. The flame-resistant and heat-reflective properties protect workers in oil, gas, manufacturing, and construction industries, while moisture-wicking fabrics and ventilation zones help maintain comfort in the Kingdom\'s climate.',
    features: [
      'Flame-resistant fabric certified to NFPA 2112 and NFPA 70E standards',
      'Heat-reflective outer layer that reduces heat absorption by up to 40%',
      'Reinforced stitching with Kevlar thread for maximum durability',
      'Strategic ventilation zones for enhanced temperature regulation',
      'Oil and chemical-resistant treatment for additional protection',
      'High-visibility reflective strips meeting ANSI/ISEA 107 standards',
      'Ergonomic design allowing full range of motion during industrial operations'
    ],
    specifications: [
      { name: 'Material', value: '88% Cotton, 12% Nylon with FR Treatment' },
      { name: 'Weight', value: 'Heavy-duty (280-320 gsm)' },
      { name: 'Care Instructions', value: 'Industrial laundry compatible' },
      { name: 'Protection Level', value: 'HRC 2 (8 cal/cm²)' },
      { name: 'Standards Compliance', value: 'NFPA 2112, NFPA 70E, ANSI/ISEA 107' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Company logos, name patches, specialty pockets' }
    ],
    images: [
      { src: '/images/product-placeholder.jpg', alt: 'Workers in industrial protective uniforms in factory setting' },
      { src: '/images/product-placeholder.jpg', alt: 'Manufacturing worker in blue protective uniform' },
      { src: '/images/default-placeholder.jpg', alt: 'Saudi engineer in protective gear at industrial site' },
      { src: '/images/product-placeholder.jpg', alt: 'Female industrial worker in protective uniform' }
    ],
    category: 'Manufacturing Attire',
    categorySlug: 'manufacturing-attire',
    inStock: true,
    minOrder: 25,
    leadTime: '15-25 days',
    customization: true,
    variants: [
      { name: 'Standard Coverall', price: 'SAR 345' },
      { name: 'Enhanced FR Coverall', price: 'SAR 465' },
      { name: 'Two-Piece Work Set', price: 'SAR 425' },
      { name: 'Supervisor Ensemble', price: 'SAR 495' },
      { name: 'High-Heat Environment Suit', price: 'SAR 595' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#1a2942', image: '/images/default-placeholder.jpg' },
      { name: 'Safety Orange', value: '#ff6600', image: '/images/default-placeholder.jpg' },
      { name: 'Khaki', value: '#c3b091', image: '/images/default-placeholder.jpg' },
      { name: 'Grey', value: '#808080', image: '/images/default-placeholder.jpg' },
      { name: 'Royal Blue', value: '#4169e1', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    sizeEquivalents: {
      'S': 'Small (36-38)',
      'M': 'Medium (40-42)',
      'L': 'Large (44-46)',
      'XL': 'Extra Large (48-50)',
      '2XL': 'Double Extra Large (52-54)',
      '3XL': 'Triple Extra Large (56-58)',
      '4XL': 'Quadruple Extra Large (60-62)'
    },
    testimonials: [
      {
        quote: "UNEOM's industrial uniforms have dramatically improved our safety statistics. The heat-management features make a substantial difference in our petrochemical facilities, where ambient temperatures regularly exceed 40°C. The durability is outstanding, even with daily exposure to harsh conditions.",
        author: "Eng. Mohammed Al-Harbi",
        position: "Safety Director",
        company: "Saudi Petrochemical Industries",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "After switching to UNEOM's protective uniforms, we've seen significantly improved compliance with PPE requirements. Workers find them comfortable enough for 12-hour shifts, and the customized features for our specific tasks have enhanced both safety and efficiency.",
        author: "Sarah Al-Otaibi",
        position: "Operations Manager",
        company: "Gulf Manufacturing Solutions",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Manufacturing Attire', url: '/shop/manufacturing-attire' },
    { name: 'Industrial Protective Uniforms', url: '#', current: true }
  ];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= product.minOrder) {
      setQuantity(value);
    }
  };

  const handleAddToQuote = () => {
    if (selectedColor && selectedSize) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.basePrice,
        quantity: quantity,
        image: product.images[0].src,
        color: selectedColor,
        size: selectedSize
      });
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-white">
    
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs.map(item => ({
          label: item.name,
          href: item.url
        }))} />
        
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square relative overflow-hidden rounded-lg mb-4 bg-neutral-100">
              <Image 
                src={product.images[activeImage].src}
                alt={product.images[activeImage].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`aspect-square relative overflow-hidden rounded-md ${activeImage === index ? 'ring-2 ring-primary-600' : 'ring-1 ring-neutral-200'}`}
                  onClick={() => setActiveImage(index)}
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
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
            <p className="text-xl font-semibold text-primary-600 mt-2">{product.price}</p>
            
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-neutral-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-neutral-700">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">Uniform Variants</h3>
              <div className="mt-2 space-y-2">
                {product.variants.map((variant) => (
                  <div key={variant.name} className="flex justify-between items-center p-3 border border-neutral-200 rounded-md">
                    <span className="font-medium">{variant.name}</span>
                    <span className="text-primary-600">{variant.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">Colors</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-primary-600' : 'border-transparent'}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    onClick={() => handleColorSelect(color.name)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-neutral-900">Size</h3>
                <button 
                  type="button" 
                  className="text-primary-600 text-sm"
                  onClick={() => setShowSizeChart(true)}
                >
                  Size Chart
                </button>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 px-4 border rounded-md text-center ${
                      selectedSize === size 
                        ? 'border-primary-600 bg-primary-50 text-primary-600' 
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-neutral-900">Quantity (Min: {product.minOrder})</h3>
              <div className="mt-2 flex items-center">
                <input
                  type="number"
                  min={product.minOrder}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-neutral-300 rounded-md px-3 py-2 w-20 text-center"
                />
                <span className="ml-2 text-neutral-500">units</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-neutral-500 mb-2">Lead time: {product.leadTime}</p>
              <AddToQuoteButton 
                product={product}
                color={selectedColor || undefined}
                size={selectedSize || undefined}
                quantity={quantity}
              />
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-16">
          <SectionHeading>Product Details</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-neutral-700">{product.longDescription}</p>
              <h3 className="font-semibold text-lg mt-6 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Specifications</h3>
              <div className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 py-2 border-b border-neutral-200">
                    <span className="font-medium text-neutral-900">{spec.name}</span>
                    <span className="text-neutral-700">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Safety Standards Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Industry Safety Standards</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Industrial Protective Uniforms exceed safety standards while addressing the unique challenges of Saudi Arabian industrial environments. Each element is engineered to maximize protection without compromising comfort in high-temperature conditions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Flame Resistance</h4>
                <p className="text-sm text-neutral-600">NFPA 2112 and NFPA 70E certified fabrics that self-extinguish to prevent continuation of burn injuries during flash fire exposure.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Heat Management</h4>
                <p className="text-sm text-neutral-600">Advanced thermal regulation system designed specifically for Saudi Arabia's extreme temperatures, with heat-reflective outer layers and strategic ventilation.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Chemical Protection</h4>
                <p className="text-sm text-neutral-600">Specialized treatments that provide resistance against common industrial chemicals, oils, and hydrocarbons encountered in Saudi industrial environments.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customization Section */}
        <div className="mt-16">
          <SectionHeading>Industrial Customization Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-700 mb-4">
                We provide comprehensive customization options for companies in various industrial sectors. Working closely with safety directors and operations managers, we develop specialized protective uniform solutions tailored to specific industrial environments and tasks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Company Branding</h4>
                  <p className="text-sm">FR-compliant logo application, color schemes matching corporate identity, and department-specific identifiers.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Task-Specific Features</h4>
                  <p className="text-sm">Specialized pocket configurations, tool holders, communication device integration, and enhanced protection zones.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Environmental Adaptation</h4>
                  <p className="text-sm">Customized solutions for specific industrial environments such as high-heat zones, chemical processing areas, or confined spaces.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Safety Management System</h4>
                  <p className="text-sm">Integrated solutions with color-coding for clearance levels, emergency response roles, or specialized training certifications.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Industrial Customization</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/product-placeholder.jpg" 
                alt="Industrial workers in customized protective uniforms" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16">
          <SectionHeading>Client Testimonials</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                id={index}
                name={testimonial.author}
                role={testimonial.position}
                company={testimonial.company}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
        
        {/* Size Chart Modal */}
        {showSizeChart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Industrial Uniform Size Chart</h3>
                  <button onClick={() => setShowSizeChart(false)} className="text-neutral-500 hover:text-neutral-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-100">
                      <tr>
                        <th className="p-2 text-left">Size</th>
                        <th className="p-2 text-left">Chest (cm)</th>
                        <th className="p-2 text-left">Waist (cm)</th>
                        <th className="p-2 text-left">Inseam (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">91-97</td>
                        <td className="p-2">76-81</td>
                        <td className="p-2">76-79</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">102-107</td>
                        <td className="p-2">84-89</td>
                        <td className="p-2">79-81</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">112-117</td>
                        <td className="p-2">91-97</td>
                        <td className="p-2">81-84</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">122-127</td>
                        <td className="p-2">99-104</td>
                        <td className="p-2">84-86</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">132-137</td>
                        <td className="p-2">107-112</td>
                        <td className="p-2">86-89</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">142-147</td>
                        <td className="p-2">114-119</td>
                        <td className="p-2">89-91</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">152-157</td>
                        <td className="p-2">122-127</td>
                        <td className="p-2">91-94</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: These measurements are for general guidance. For critical safety equipment, we recommend our site measurement service 
                    for proper fitting. Custom sizing is available for specialized requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    
      </div>
  );
} 