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

export default function PremiumSurgicalGownsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Surgical Green');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'premium-surgical-gowns',
    name: 'Premium Surgical Gowns',
    price: 'From SAR 349',
    basePrice: "349",
    rating: 4.9,
    reviews: 142,
    description: 'High-performance surgical gowns designed for comfort, protection, and sterility in operating environments.',
    longDescription: 'Our Premium Surgical Gowns are engineered for Saudi Arabia\'s most demanding surgical environments. Made with a specialized multi-layer fabric that provides outstanding fluid resistance while maintaining breathability, these gowns offer superior protection for surgeons and surgical staff during lengthy procedures. The ergonomic design ensures full range of motion, while reinforced seams and critical zones provide additional protection where it\'s needed most.',
    features: [
      'AAMI Level 4 fluid resistance for maximum protection',
      'Breathable multi-layer fabric technology to prevent overheating',
      'Reinforced chest and sleeves for critical protection zones',
      'Ultrasonic welded seams for enhanced fluid barrier',
      'Comfortable elastic cuffs with thumb loops for secure coverage',
      'Extended wraparound design for full back coverage',
      'Sterile and individually packaged options available'
    ],
    specifications: [
      { name: 'Material', value: 'SMS Polypropylene with fluid-resistant coating' },
      { name: 'Weight', value: 'Lightweight (45 gsm)' },
      { name: 'Compliance', value: 'AAMI PB70 Level 4, ISO 13485 certified' },
      { name: 'Available Sizes', value: 'S, M, L, XL, XXL' },
      { name: 'Colors', value: 'Surgical Green, Royal Blue, Navy' },
      { name: 'Sterility', value: 'Available in sterile and non-sterile options' },
      { name: 'Packaging', value: 'Individual packs or bulk options available' }
    ],
    images: [
      { src: '/images/avatar-placeholder.jpg', alt: 'Surgical team wearing premium gowns' },
      { src: '/images/default-placeholder.jpg', alt: 'Surgeons in premium gowns during operation' },
      { src: '/images/default-placeholder.jpg', alt: 'Close-up of premium surgical gown fabric and details' },
      { src: '/images/default-placeholder.jpg', alt: 'Healthcare professional in premium surgical attire' }
    ],
    category: 'Healthcare Apparel',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 10,
    leadTime: '7-10 days',
    customization: true,
    variants: [
      { name: 'Standard Surgical Gown', price: 'SAR 349' },
      { name: 'Reinforced Surgical Gown', price: 'SAR 399' },
      { name: 'Sterile Packaged Gown', price: 'SAR 429' },
      { name: 'Custom Hospital Logo Gown', price: 'SAR 469' }
    ],
    colors: [
      { name: 'Surgical Green', value: '#2d8659', image: '/images/default-placeholder.jpg' },
      { name: 'Royal Blue', value: '#1e4d8c', image: '/images/default-placeholder.jpg' },
      { name: 'Navy', value: '#0a1e3c', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizeEquivalents: {
      'S': 'Small (Height: 160-170cm)',
      'M': 'Medium (Height: 170-180cm)',
      'L': 'Large (Height: 180-185cm)',
      'XL': 'Extra Large (Height: 185-190cm)',
      'XXL': 'Double Extra Large (Height: 190-200cm)'
    },
    testimonials: [
      {
        quote: "We've been using UNEOM's premium surgical gowns for over a year now, and the difference in quality is remarkable. Our surgeons particularly appreciate the improved comfort during long procedures.",
        author: "Dr. Mohammed Al-Harbi",
        position: "Chief of Surgery",
        company: "King Faisal Specialist Hospital",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "The level of protection these gowns provide is exceptional. The reinforced zones offer extra peace of mind, and the fabric remains breathable even during the most intense procedures.",
        author: "Dr. Sarah Al-Qahtani",
        position: "Head of Surgical Nursing",
        company: "Saudi German Hospital",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
    { name: 'Premium Surgical Gowns', url: '#', current: true }
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
              <h3 className="text-sm font-medium text-neutral-900">Gown Variants</h3>
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
              <div className="mt-2 grid grid-cols-5 gap-2">
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
        
        {/* Hospital Compliance Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Hospital Compliance & Certification</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Premium Surgical Gowns meet the highest standards for healthcare environments in Saudi Arabia and comply with
              international medical regulations. Each gown undergoes rigorous testing for fluid resistance, barrier protection,
              and durability to ensure consistent performance in critical surgical settings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">AAMI PB70 Level 4</h4>
                <p className="text-sm text-neutral-600">Highest level of fluid and microbial barrier protection for critical zones, meeting international standards.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">ISO 13485 Certified</h4>
                <p className="text-sm text-neutral-600">Manufactured under a quality management system specifically designed for medical devices and related services.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">SFDA Approved</h4>
                <p className="text-sm text-neutral-600">Compliant with Saudi Food and Drug Authority requirements for medical textiles and surgical equipment.</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/resources/compliance-guide">
                <Button variant="outline">Download Compliance Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Customization Section */}
        <div className="mt-16">
          <SectionHeading>Hospital Customization Options</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-700 mb-4">
                We offer extensive customization options for hospitals and medical facilities. From color-coding 
                by department to hospital logo embroidery, our surgical gowns can be tailored to meet your specific requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Hospital Branding</h4>
                  <p className="text-sm">Custom logo embroidery or heat-sealed printing of hospital identification.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Department Color-Coding</h4>
                  <p className="text-sm">Special colors or color accents to identify specific departments or personnel roles.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Specialized Sizing</h4>
                  <p className="text-sm">Custom sizing options available for non-standard requirements.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Bulk Hospital Programs</h4>
                  <p className="text-sm">Volume discounts and inventory management solutions for hospitals.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Hospital Customization</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/avatar-placeholder.jpg" 
                alt="Customized surgical gowns for hospital teams" 
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
                  <h3 className="text-xl font-semibold">Surgical Gown Size Chart</h3>
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
                        <th className="p-2 text-left">Standard</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product.sizeEquivalents).map(([size, equivalent]) => (
                        <tr key={size} className="border-b">
                          <td className="p-2 font-medium">{size}</td>
                          <td className="p-2">{equivalent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: Sizes are approximate and may vary slightly by style. For best results, we recommend trying on gowns to ensure proper fit.
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