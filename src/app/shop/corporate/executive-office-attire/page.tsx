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

export default function ExecutiveOfficeAttirePage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(20);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'executive-office-attire',
    name: 'Executive Office Attire',
    price: 'From SAR 695',
    basePrice: "695",
    rating: 4.8,
    reviews: 72,
    description: 'Premium corporate attire designed specifically for Saudi business environments, combining professional elegance with cultural sensitivity and climate-appropriate comfort.',
    longDescription: 'Our Executive Office Attire collection represents the perfect balance of international business standards and Saudi cultural values. Each garment is meticulously tailored from premium fabrics that maintain a pristine appearance throughout demanding workdays while providing exceptional comfort in climate-controlled office environments. The collection offers versatile options for executives at all levels, from daily office wear to formal meeting attire, with thoughtful details that convey professionalism and attention to detail. We\'ve carefully considered both traditional preferences and contemporary business needs in creating a collection that enhances corporate identity while respecting individual dignity.',
    features: [
      'Premium Italian and Egyptian cotton blends with subtle stretch for comfort',
      'Advanced wrinkle-resistant and stain-repellent fabric technologies',
      'Breathable construction optimized for climate-controlled environments',
      'Reinforced stitching at stress points for extended garment lifespan',
      'Modern tailoring with modest, culturally respectful silhouettes',
      'Hidden interior pockets for secure storage of small electronics and documents',
      'Specialized cuts allowing freedom of movement while maintaining crisp appearance'
    ],
    specifications: [
      { name: 'Material', value: 'Premium cotton blends (80% cotton, 18% polyester, 2% elastane)' },
      { name: 'Weight', value: 'Medium weight (180-220 gsm)' },
      { name: 'Care Instructions', value: 'Dry clean recommended, machine washable on gentle cycle' },
      { name: 'Available Sizes', value: 'XS to 3XL (men\'s and women\'s cuts)' },
      { name: 'Colors', value: '6 professional colors coordinated for corporate environments' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Corporate logos, custom color matching, bespoke tailoring' }
    ],
    images: [
      { src: '/images/avatar-placeholder.jpg', alt: 'Business executives in premium office attire during meeting' },
      { src: '/images/products/corporate-suit-executive.jpg', alt: 'Corporate professional in tailored executive suit' },
      { src: '/images/products/corporate-suit-executive.jpg', alt: 'Saudi business executive in traditional-modern fusion attire' },
      { src: '/images/products/corporate-suit-executive.jpg', alt: 'Saudi businesswoman in professional corporate attire with hijab' }
    ],
    category: 'Corporate',
    categorySlug: 'corporate',
    inStock: true,
    minOrder: 20,
    leadTime: '21-30 days',
    customization: true,
    variants: [
      { name: 'Executive Standard Set', price: 'SAR 695' },
      { name: 'Premium Executive Collection', price: 'SAR 895' },
      { name: 'Business Meeting Ensemble', price: 'SAR 795' },
      { name: 'Modest Professional Set (Women)', price: 'SAR 745' },
      { name: 'Traditional-Modern Fusion Set', price: 'SAR 845' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#1a2942', image: '/images/products/corporate-suit-executive.jpg' },
      { name: 'Charcoal Grey', value: '#36454f', image: '/images/products/corporate-suit-executive.jpg' },
      { name: 'Black', value: '#000000', image: '/images/products/corporate-suit-executive.jpg' },
      { name: 'Dark Brown', value: '#3e2723', image: '/images/products/corporate-suit-executive.jpg' },
      { name: 'Light Grey', value: '#b0b0b0', image: '/images/products/corporate-suit-executive.jpg' },
      { name: 'Sand', value: '#c2b280', image: '/images/products/corporate-suit-executive.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (0-2)',
      'S': 'Small (4-6)',
      'M': 'Medium (8-10)',
      'L': 'Large (12-14)',
      'XL': 'Extra Large (16-18)',
      '2XL': 'Double Extra Large (20-22)',
      '3XL': 'Triple Extra Large (24-26)'
    },
    testimonials: [
      {
        quote: "UNEOM's executive attire has become our corporate standard across our Saudi offices. The quality of tailoring and fabrics is exceptional, and their understanding of Saudi business culture ensures our staff present the perfect balance of professionalism and cultural respect.",
        author: "Khalid Al-Majid",
        position: "Vice President of Operations",
        company: "Saudi International Banking Group",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "We've implemented UNEOM's corporate attire program across our entire organization, from entry-level to C-suite. The consistent quality, attention to detail, and ability to incorporate our branding elements subtly has strengthened our corporate identity while providing our employees with comfortable, professional attire.",
        author: "Norah Al-Sheikh",
        position: "Director of Corporate Culture",
        company: "Advanced Saudi Technologies",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Corporate', url: '/shop/corporate' },
    { name: 'Executive Office Attire', url: '#', current: true }
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
              <h3 className="text-sm font-medium text-neutral-900">Corporate Collection Variants</h3>
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
        
        {/* Corporate Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Corporate Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Executive Office Attire is designed to meet the exacting standards of Saudi corporate environments, with special attention to professional impression, cultural sensitivity, and functionality in modern business settings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Professional Impression</h4>
                <p className="text-sm text-neutral-600">Meticulously tailored garments that project authority and competence, with structured silhouettes and premium fabrics that maintain their appearance throughout demanding business days.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Cultural Sensitivity</h4>
                <p className="text-sm text-neutral-600">Thoughtfully designed options that respect Saudi cultural values while incorporating international business standards, including modest cuts and traditional-modern fusion elements.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Business Functionality</h4>
                <p className="text-sm text-neutral-600">Practical features integrated seamlessly into elegant designs, including document-friendly pockets, climate-appropriate fabrics, and construction that allows comfortable movement during long meetings.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Corporate Customization Section */}
        <div className="mt-16">
          <SectionHeading>Corporate Identity Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-700 mb-4">
                We offer comprehensive corporate identity solutions for businesses throughout Saudi Arabia. From subtle logo integration to complete corporate wardrobe systems, our specialized corporate team collaborates with executives and HR departments to develop attire programs that enhance company culture and external perception.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Brand Integration</h4>
                  <p className="text-sm">Subtle incorporation of brand elements through custom color matching, embroidered logos, and coordinated accessory options that reinforce corporate identity.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Hierarchical Systems</h4>
                  <p className="text-sm">Distinguished attire options for different organizational levels while maintaining cohesive corporate identity, from entry-level to C-suite executives.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Department Coordination</h4>
                  <p className="text-sm">Coordinated yet distinct attire systems for different departments that maintain overall corporate coherence while addressing specific functional needs.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Cultural Adaptation</h4>
                  <p className="text-sm">Expert adaptation of international corporate standards to Saudi cultural contexts, creating professional environments that honor both global business and local traditions.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Corporate Consultation</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/products/corporate-suit-executive.jpg" 
                alt="Corporate executives in custom-tailored business attire" 
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
                  <h3 className="text-xl font-semibold">Corporate Attire Size Chart</h3>
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
                        <th className="p-2 text-left">Shoulder (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XS</td>
                        <td className="p-2">86-91</td>
                        <td className="p-2">71-76</td>
                        <td className="p-2">84-89</td>
                        <td className="p-2">40-41</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">92-97</td>
                        <td className="p-2">77-82</td>
                        <td className="p-2">90-95</td>
                        <td className="p-2">42-43</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">98-103</td>
                        <td className="p-2">83-88</td>
                        <td className="p-2">96-101</td>
                        <td className="p-2">44-45</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">104-109</td>
                        <td className="p-2">89-94</td>
                        <td className="p-2">102-107</td>
                        <td className="p-2">46-47</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">110-115</td>
                        <td className="p-2">95-100</td>
                        <td className="p-2">108-113</td>
                        <td className="p-2">48-49</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">116-121</td>
                        <td className="p-2">101-106</td>
                        <td className="p-2">114-119</td>
                        <td className="p-2">50-51</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">122-127</td>
                        <td className="p-2">107-112</td>
                        <td className="p-2">120-125</td>
                        <td className="p-2">52-53</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: These measurements are general guidelines. For corporate programs, we offer comprehensive 
                    measurement services for all employees. Our bespoke tailoring ensures perfect fit even for 
                    non-standard sizes. Custom adjustments are available for individual preferences and requirements.
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