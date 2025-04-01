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

export default function PremiumHotelUniformsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Rich Burgundy');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'premium-hotel-uniforms',
    name: 'Premium Hotel Staff Uniforms',
    price: 'From SAR 799',
    basePrice: "799",
    rating: 4.9,
    reviews: 112,
    description: 'Elegant and durable staff uniforms designed for luxury hotels, blending modern Arabian aesthetics with practical functionality.',
    longDescription: 'Our Premium Hotel Staff Uniform collection is designed specifically for Saudi Arabia\'s elite hospitality sector. Each piece combines timeless elegance with practical functionality, creating a refined yet comfortable uniform solution for luxury hotels and resorts. The premium fabric blend withstands frequent washing while maintaining its sophisticated appearance, and the designs accommodate the Kingdom\'s cultural requirements while projecting the high standards expected in 5-star establishments.',
    features: [
      'Luxury poly-wool blend with stretch for comfort during long shifts',
      'Soil release and stain resistant fabric technology',
      'Perspiration-resistant properties ideal for Saudi climate',
      'Reinforced seams for extended durability in high-activity roles',
      'Modest yet elegant design suitable for Saudi luxury hotels',
      'Available in both Western and traditional Saudi-inspired styles',
      'Specialized designs for front desk, concierge, housekeeping, and management'
    ],
    specifications: [
      { name: 'Material', value: '60% Polyester, 35% Wool, 5% Elastane' },
      { name: 'Weight', value: 'Medium weight (220-240 gsm)' },
      { name: 'Care Instructions', value: 'Industrial and home laundry safe' },
      { name: 'Available Sizes', value: 'XS - 4XL' },
      { name: 'Colors', value: 'Rich Burgundy, Royal Gold, Deep Navy, Emerald Green, Classic Black' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Hotel logos, staff names, department color coding' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Hotel reception staff in premium uniforms' },
      { src: '/images/default-placeholder.jpg', alt: 'Concierge in premium hotel uniform' },
      { src: '/images/default-placeholder.jpg', alt: 'Housekeeping staff in professional uniforms' },
      { src: '/images/default-placeholder.jpg', alt: 'Hotel manager in executive uniform greeting guests' }
    ],
    category: 'Hospitality Attire',
    categorySlug: 'hospitality-attire',
    inStock: true,
    minOrder: 10,
    leadTime: '14-21 days',
    customization: true,
    variants: [
      { name: 'Front Desk Staff Uniform Set', price: 'SAR 799' },
      { name: 'Concierge Uniform Set', price: 'SAR 899' },
      { name: 'Housekeeping Staff Uniform', price: 'SAR 649' },
      { name: 'Management Executive Uniform', price: 'SAR 1,199' }
    ],
    colors: [
      { name: 'Rich Burgundy', value: '#800020', image: '/images/default-placeholder.jpg' },
      { name: 'Royal Gold', value: '#caa548', image: '/images/default-placeholder.jpg' },
      { name: 'Deep Navy', value: '#1a2942', image: '/images/default-placeholder.jpg' },
      { name: 'Emerald Green', value: '#2e5d4b', image: '/images/default-placeholder.jpg' },
      { name: 'Classic Black', value: '#232323', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (EU 40-42)',
      'S': 'Small (EU 44-46)',
      'M': 'Medium (EU 48-50)',
      'L': 'Large (EU 52-54)',
      'XL': 'Extra Large (EU 56-58)',
      'XXL': 'Double Extra Large (EU 60-62)',
      '3XL': 'Triple Extra Large (EU 64-66)',
      '4XL': 'Quadruple Extra Large (EU 68-70)'
    },
    testimonials: [
      {
        quote: "The uniforms UNEOM created for our staff have received countless compliments from guests. The quality is exceptional, and they've maintained their appearance perfectly despite daily use in our busy hotel.",
        author: "Abdullah Al-Mansour",
        position: "General Manager",
        company: "Royal Palms Riyadh Hotel",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "Working with UNEOM has significantly simplified our uniform management. The fabric quality is outstanding - showing minimal wear even after months of constant use, and their design team understood our need to balance traditional Saudi elegance with modern hospitality standards.",
        author: "Nadia Al-Harbi",
        position: "Executive Housekeeper",
        company: "Jeddah Grand Resort & Spa",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Hospitality Attire', url: '/shop/hospitality-attire' },
    { name: 'Premium Hotel Staff Uniforms', url: '#', current: true }
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
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: product.basePrice,
        image: product.images[0].src
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
              <h3 className="text-sm font-medium text-neutral-900">Staff Role Variants</h3>
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
        
        {/* Hospitality Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Hospitality Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Premium Hotel Staff Uniforms are designed to reflect the elegance and sophistication expected in Saudi Arabia's 
              luxury hospitality sector. Every detail is crafted to enhance your hotel's brand image while ensuring staff comfort 
              and confidence throughout demanding shifts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Brand Representation</h4>
                <p className="text-sm text-neutral-600">Uniforms that project your hotel's quality standards and aesthetic, creating a consistent visual identity throughout guest interactions.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Practical Functionality</h4>
                <p className="text-sm text-neutral-600">Ergonomic designs with strategic stretch panels and reinforcement in high-stress areas for staff comfort during long shifts.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Cultural Sensitivity</h4>
                <p className="text-sm text-neutral-600">Modest yet contemporary designs that respect Saudi cultural values while projecting international luxury standards.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hotel Branding Section */}
        <div className="mt-16">
          <SectionHeading>Hotel Branding & Customization</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-700 mb-4">
                We offer extensive customization options to ensure your hotel staff uniforms perfectly reflect your brand identity.
                From custom colors that match your interior design to embroidered logos and personalized name badges, our design team 
                works closely with your management to create a cohesive visual identity across all departments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Property Branding</h4>
                  <p className="text-sm">Custom embroidery, woven labels, and specialized buttons featuring your hotel logo and identity.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Department Distinction</h4>
                  <p className="text-sm">Color coding, style variations, and specialized accessories to distinguish between roles and departments.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Staff Personalization</h4>
                  <p className="text-sm">Name embroidery, position identification, and language badges to enhance guest communication.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Custom Fabric Selection</h4>
                  <p className="text-sm">Specialized fabrics, textures, and patterns that complement your property's aesthetic.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Hotel Customization</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/default-placeholder.jpg" 
                alt="Luxury hotel staff in coordinated customized uniforms" 
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
                quote={testimonial.quote}
                name={testimonial.author}
                role={testimonial.position}
                company={testimonial.company}
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
                  <h3 className="text-xl font-semibold">Hotel Uniform Size Chart</h3>
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
                        <th className="p-2 text-left">Hip (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XS</td>
                        <td className="p-2">86-90</td>
                        <td className="p-2">70-74</td>
                        <td className="p-2">90-94</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">91-96</td>
                        <td className="p-2">75-80</td>
                        <td className="p-2">95-100</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">97-102</td>
                        <td className="p-2">81-86</td>
                        <td className="p-2">101-106</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">103-108</td>
                        <td className="p-2">87-92</td>
                        <td className="p-2">107-112</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">109-114</td>
                        <td className="p-2">93-98</td>
                        <td className="p-2">113-118</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XXL</td>
                        <td className="p-2">115-120</td>
                        <td className="p-2">99-104</td>
                        <td className="p-2">119-124</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">121-126</td>
                        <td className="p-2">105-110</td>
                        <td className="p-2">125-130</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">127-132</td>
                        <td className="p-2">111-116</td>
                        <td className="p-2">131-136</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: For hotels, we recommend our on-site measurement service to ensure perfect fits for all staff members.
                    Custom sizing is available for staff with non-standard measurements.
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