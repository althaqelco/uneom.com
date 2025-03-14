'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import SizeChartModal from '@/components/shop/SizeChartModal';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TestimonialCard from '@/components/ui/TestimonialCard';

export default function ExecutiveSuitsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'executive-suits',
    name: 'Executive Tailored Suits',
    price: 'From SAR 1,299',
    basePrice: "1299",
    rating: 4.9,
    reviews: 87,
    description: 'Premium tailored suits designed for corporate executives who require sophistication, comfort, and a distinguished professional appearance.',
    longDescription: 'Our Executive Tailored Suits are designed specifically for corporate environments in Saudi Arabia, combining modern aesthetics with traditional values. The fabric is premium wool blend with subtle stretch for comfort during long workdays in air-conditioned offices. The tailoring offers a distinguished silhouette while respecting cultural norms, perfect for executives representing Saudi businesses on both domestic and international stages.',
    features: [
      'Premium wool blend fabric (80% wool, 18% polyester, 2% elastane)',
      'Modern fit with subtle stretch for comfort and movement',
      'Hand-finished details for distinguished appearance',
      'Saudi-appropriate conservative styling',
      'Stain and wrinkle resistant fabric technology',
      'Optional matching waistcoat for formal settings',
      'Designed for year-round wear in air-conditioned environments'
    ],
    specifications: [
      { name: 'Material', value: '80% Wool, 18% Polyester, 2% Elastane' },
      { name: 'Weight', value: 'Medium weight (240-260 gsm)' },
      { name: 'Care Instructions', value: 'Dry clean only' },
      { name: 'Available Sizes', value: '46 - 62 (European sizing)' },
      { name: 'Colors', value: 'Navy Blue, Charcoal Grey, Classic Black, Deep Brown' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Custom Options', value: 'Bespoke tailoring, corporate branding, monogramming' }
    ],
    images: [
      { src: '/images/corporate-man-in-suit.jpg', alt: 'Executive Tailored Suit Front View' },
      { src: '/images/corporate-woman-in-suit.jpg', alt: 'Executive Tailored Suit for Women' },
      { src: '/images/executive-team-in-suits.jpg', alt: 'Executive Team in Tailored Suits' },
      { src: '/images/suit-fabric-detail.jpg', alt: 'Premium Fabric Detail' }
    ],
    category: 'Corporate Apparel',
    categorySlug: 'workplace-uniforms',
    inStock: true,
    minOrder: 5,
    leadTime: '14-21 days',
    customization: true,
    variants: [
      { name: 'Two-piece Suit', price: 'SAR 1,299' },
      { name: 'Three-piece Suit (with Waistcoat)', price: 'SAR 1,599' },
      { name: 'Executive Package (2 Suits, 3 Shirts)', price: 'SAR 2,899' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#1a2942', image: '/images/fabrics/navy-wool.jpg' },
      { name: 'Charcoal Grey', value: '#36454f', image: '/images/fabrics/charcoal-wool.jpg' },
      { name: 'Classic Black', value: '#232323', image: '/images/fabrics/black-wool.jpg' },
      { name: 'Deep Brown', value: '#5d4037', image: '/images/fabrics/brown-wool.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56', '58', '60', '62'],
    sizeEquivalents: {
      '46': 'S (EU 46)',
      '48': 'M (EU 48)',
      '50': 'M (EU 50)',
      '52': 'L (EU 52)',
      '54': 'L (EU 54)',
      '56': 'XL (EU 56)',
      '58': 'XXL (EU 58)',
      '60': '3XL (EU 60)',
      '62': '4XL (EU 62)'
    },
    testimonials: [
      {
        quote: "UNEOM's executive suits have become our standard for corporate representation. The quality is impeccable, and they've mastered the balance between modern style and cultural appropriateness.",
        author: "Ahmad Al-Saud",
        position: "HR Director, Saudi Investment Bank",
        image: "/images/testimonials/ahmad.jpg"
      },
      {
        quote: "As a female executive in Saudi Arabia, finding appropriate yet stylish business attire has always been challenging. UNEOM's executive collection solves this perfectly with modest yet sophisticated designs.",
        author: "Noura Al-Qasabi",
        position: "VP of Operations, Aramco",
        image: "/images/testimonials/noura.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Workplace Uniforms', href: '/shop/workplace-uniforms' },
    { name: 'Executive Tailored Suits', href: '#', current: true }
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
    <MainLayout locale={locale}>
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs.map(item => ({
          label: item.name,
          href: item.href
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
              <h3 className="text-sm font-medium text-neutral-900">Style Variants</h3>
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
                quantity={quantity}
                color={selectedColor || undefined}
                size={selectedSize || undefined}
              />
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-16">
          <SectionHeading centered={false}>Product Details</SectionHeading>
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
        
        {/* Customization Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading centered={false}>Executive Styling</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Executive Tailored Suits can be customized to match your corporate identity and specific requirements. 
              From corporate branding and custom measurements to special fabric selections, we offer a range of options 
              to ensure your executive team presents a cohesive and distinguished professional image.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Corporate Branding</h4>
                <p className="text-sm text-neutral-600">Subtle logo embroidery, custom buttons, or unique lining featuring your company colors and logo.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Measurement Services</h4>
                <p className="text-sm text-neutral-600">On-site professional measurement service for your executive team to ensure perfect fit for every individual.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Premium Fabric Options</h4>
                <p className="text-sm text-neutral-600">Selection of premium fabrics including Italian wool, high-performance technical fabrics, and luxury blends.</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="secondary">Contact For Customization Options</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16">
          <SectionHeading centered={false}>Client Testimonials</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.testimonials.map((testimonial, index) => {
              // Extract company from position if available
              const positionParts = testimonial.position.split(', ');
              const company = positionParts.length > 1 ? positionParts[1] : '';
              
              return (
                <TestimonialCard 
                  key={index}
                  id={index}
                  name={testimonial.author}
                  role={positionParts[0]}
                  company={company}
                  quote={testimonial.quote}
                  image={testimonial.image}
                />
              );
            })}
          </div>
        </div>
        
        {/* Size Chart Modal */}
        <SizeChartModal
          isOpen={showSizeChart}
          onClose={() => setShowSizeChart(false)}
          title="Executive Suits Size Chart"
          sizes={Object.entries(product.sizeEquivalents).map(([size, description]) => ({
            size,
            chest: description,
            waist: '-',
            hips: '-'
          }))}
        />
      </Container>
    </MainLayout>
  );
} 