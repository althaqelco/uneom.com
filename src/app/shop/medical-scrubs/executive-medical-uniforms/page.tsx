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

export default function ExecutiveMedicalUniformsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(20);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'executive-medical-uniforms',
    name: 'Executive Medical Uniforms',
    price: 'From SAR 395',
    basePrice: "395",
    rating: 4.9,
    reviews: 76,
    description: 'Premium executive medical uniforms designed for healthcare leaders in Saudi Arabia, featuring elegant styling, premium fabrics, and distinctive details that convey authority and professionalism in clinical settings.',
    longDescription: 'Our Executive Medical Uniforms are meticulously crafted for healthcare leaders and administrative professionals who require a distinguished appearance while maintaining clinical functionality. Each garment features premium fabrics with enhanced durability, antimicrobial protection, and superior comfort for long administrative days. The tailored fit and elegant styling convey authority and professionalism, while thoughtful details like reinforced pockets, specialized compartments for digital devices, and strategic ventilation enhance everyday functionality. Available in both traditional and modern cuts with modest design options reflecting Saudi cultural preferences, these executive uniforms establish a clear visual hierarchy while maintaining cohesive branding across your healthcare facility.',
    features: [
      'Premium fabric blend with enhanced antimicrobial protection',
      'Distinguished tailoring and elegant styling that conveys leadership',
      'Enhanced durability for everyday professional wear',
      'Breathable construction optimized for the Saudi climate',
      'Strategic pocket placement for medical and administrative tools',
      'Available in traditional and contemporary silhouettes',
      'Modest design options compatible with Saudi cultural preferences',
      'Customizable with embroidered names, credentials, and facility logos'
    ],
    specifications: [
      { name: 'Material', value: '78% Polyester, 20% Cotton, 2% Spandex with antimicrobial treatment' },
      { name: 'Weight', value: 'Medium-Heavy weight (220-250 gsm)' },
      { name: 'Design Options', value: 'Executive Coat, Professional Tunic, Leadership Scrub Set' },
      { name: 'Available Sizes', value: 'XS to 4XL (Men\'s and Women\'s cuts)' },
      { name: 'Colors', value: 'Navy, Black, Burgundy, Charcoal Grey, Royal Blue (custom colors available)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization Options', value: 'Institution logos, name/credential embroidery, leadership indicators' }
    ],
    images: [
      { src: '/images/product-placeholder.jpg', alt: 'Healthcare executive wearing premium navy medical uniform' },
      { src: '/images/product-placeholder.jpg', alt: 'Female healthcare leader in professional executive medical attire' },
      { src: '/images/default-placeholder.jpg', alt: 'Medical administrators in executive uniforms during leadership meeting' },
      { src: '/images/default-placeholder.jpg', alt: 'Saudi medical director in tailored executive uniform with staff' }
    ],
    category: 'Medical Scrubs',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 20,
    leadTime: '14-21 days',
    customization: true,
    variants: [
      { name: 'Executive Physician Coat', price: 'SAR 395' },
      { name: 'Administrative Tunic Set', price: 'SAR 425' },
      { name: 'Leadership Scrub Ensemble', price: 'SAR 445' },
      { name: 'Director\'s Lab Coat', price: 'SAR 415' },
      { name: 'Department Chief Attire', price: 'SAR 465' }
    ],
    colors: [
      { name: 'Navy', value: '#000080', image: '/images/product-placeholder.jpg' },
      { name: 'Black', value: '#000000', image: '/images/product-placeholder.jpg' },
      { name: 'Burgundy', value: '#800020', image: '/images/product-placeholder.jpg' },
      { name: 'Charcoal Grey', value: '#36454F', image: '/images/product-placeholder.jpg' },
      { name: 'Royal Blue', value: '#4169E1', image: '/images/product-placeholder.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (0-2)',
      'S': 'Small (4-6)',
      'M': 'Medium (8-10)',
      'L': 'Large (12-14)',
      'XL': 'Extra Large (16-18)',
      '2XL': 'Double XL (20-22)',
      '3XL': 'Triple XL (24-26)',
      '4XL': 'Quadruple XL (28-30)'
    },
    testimonials: [
      {
        quote: "The quality and distinction of Uneom's executive medical uniforms have significantly elevated our leadership team's professional image. The elegant styling combined with practical features perfectly balances our administrative and clinical requirements. The customized embroidery with our hospital logo and leadership designation creates clear visual hierarchy within our organization.",
        author: "Dr. Mohammed Al-Harbi",
        position: "Hospital CEO",
        company: "Kingdom Advanced Medical Center",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "After implementing Uneom's executive medical uniform program for our administrative team, we've noticed improved patient confidence and staff cohesion. The modest design options have been particularly appreciated by our female executives, and the premium quality ensures these uniforms maintain their distinguished appearance despite our demanding healthcare environment.",
        author: "Dr. Hana Al-Rasheed",
        position: "Medical Director",
        company: "International Medical Complex",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
    { name: 'Executive Medical Uniforms', url: '#', current: true }
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
              <h3 className="text-sm font-medium text-neutral-900">Executive Uniform Options</h3>
              <div className="mt-2 space-y-2">
                {product.variants.map((variant) => (
                  <div key={variant.name} className="flex justify-between items-center p-3 border border-neutral-200 rounded-md">
                    <span className="text-primary-600">{variant.price}</span>
                    <span className="font-medium">{variant.name}</span>
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
              <h3 className="text-sm font-medium text-neutral-900">Quantity (Minimum: {product.minOrder})</h3>
              <div className="mt-2 flex items-center">
                <input
                  type="number"
                  min={product.minOrder}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-neutral-300 rounded-md px-3 py-2 w-20 text-center"
                />
                <span className="ml-2 text-neutral-500">pieces</span>
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
        
        {/* Leadership Distinction Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Leadership Distinction</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Executive Medical Uniforms are designed to distinguish healthcare leaders while maintaining the professional standards expected in Saudi healthcare environments, with special attention to authority signaling, operational functionality, and cultural appropriateness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Professional Authority</h4>
                <p className="text-sm text-neutral-600">Distinguished tailoring, premium materials, and subtle status indicators create a naturally authoritative presence that enhances leadership recognition and patient confidence in clinical settings.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Executive Functionality</h4>
                <p className="text-sm text-neutral-600">Specialized pocket configurations, device accommodation, and administrative tool storage combine with clinical functionality to support the dual operational requirements of healthcare leadership roles.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Cultural Alignment</h4>
                <p className="text-sm text-neutral-600">Thoughtfully designed options that respect Saudi cultural expectations, including modest cuts and traditional elements that maintain cultural appropriateness while signaling professional standing.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Healthcare Leadership Section */}
        <div className="mt-16">
          <SectionHeading>Healthcare Leadership Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/avatar-placeholder.jpg" 
                  alt="Healthcare leadership team in executive medical uniforms" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                We provide comprehensive leadership uniform programs for healthcare institutions across Saudi Arabia. From administrative differentiation to hierarchical clarity, our specialized team works with hospital executives to develop uniform systems that enhance organizational structure while maintaining institutional identity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Hierarchical Clarity</h4>
                  <p className="text-sm">Clear visual differentiation between department chiefs, medical directors, and executive leadership through deliberate design elements that signal authority levels and improve organizational navigation.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Administrative Distinction</h4>
                  <p className="text-sm">Elegant styling that visually separates administrative and clinical leadership while maintaining cohesive organizational identity through coordinated design elements and branding indicators.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Institutional Branding</h4>
                  <p className="text-sm">Custom embroidery, color applications, and material selections that reinforce institutional identity across leadership levels while maintaining the professional gravitas expected of healthcare executives.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Dual Functionality</h4>
                  <p className="text-sm">Hybrid designs that accommodate both administrative responsibilities and clinical engagement, with thoughtful features that support leadership's diverse operational requirements.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Executive Uniform Consultation</Button>
                </Link>
              </div>
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
                  <h3 className="text-xl font-semibold">Executive Medical Uniform Size Chart</h3>
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
                        <td className="p-2">88-93</td>
                        <td className="p-2">70-75</td>
                        <td className="p-2">94-99</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">94-99</td>
                        <td className="p-2">76-81</td>
                        <td className="p-2">100-105</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">100-105</td>
                        <td className="p-2">82-87</td>
                        <td className="p-2">106-111</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">106-111</td>
                        <td className="p-2">88-93</td>
                        <td className="p-2">112-117</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">112-117</td>
                        <td className="p-2">94-99</td>
                        <td className="p-2">118-123</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">118-123</td>
                        <td className="p-2">100-105</td>
                        <td className="p-2">124-129</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">124-129</td>
                        <td className="p-2">106-111</td>
                        <td className="p-2">130-135</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">130-135</td>
                        <td className="p-2">112-117</td>
                        <td className="p-2">136-141</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: These measurements are general guidelines. For executive medical uniforms, 
                    we highly recommend our professional measurement service to ensure a precise, 
                    tailored appearance appropriate for leadership roles. Custom tailoring options 
                    are available to accommodate individual preferences and requirements.
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