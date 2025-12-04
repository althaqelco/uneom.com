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

export default function TacticalSecurityUniformsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Tactical Black');
  const [selectedSize, setSelectedSize] = useState<string | null>('L');
  const [quantity, setQuantity] = useState(10);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'tactical-security-uniforms',
    name: 'Tactical Security Uniforms',
    price: 'From SAR 899',
    basePrice: "899",
    rating: 4.9,
    reviews: 76,
    description: 'Professional-grade tactical security uniforms designed for durability, functionality, and authoritative appearance for security personnel in Saudi Arabia.',
    longDescription: 'Our Tactical Security Uniforms are engineered specifically for Saudi Arabia\'s demanding security sector. These uniforms combine robust construction with practical design elements that support the daily activities of security professionals. Featuring advanced fabric technology that withstands extreme conditions while maintaining comfort, these uniforms project authority while accommodating the Kingdom\'s climate and cultural requirements. Multiple pockets, reinforced stress points, and specialized accessory attachment options make these uniforms ideal for both public and private security operations.',
    features: [
      'Ripstop tactical fabric with enhanced durability',
      'UV protection and moisture-wicking properties',
      'Hidden stretch panels for mobility during operations',
      'Reinforced stitching and stress points',
      'Multiple tactical pockets and gear attachment points',
      'Reflective elements for night visibility (optional)',
      'Compatible with standard security equipment and accessories'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton Ripstop' },
      { name: 'Weight', value: 'Medium weight (240 gsm)' },
      { name: 'Care Instructions', value: 'Machine washable, industrial laundry safe' },
      { name: 'Available Sizes', value: 'S - 4XL' },
      { name: 'Colors', value: 'Tactical Black, Navy, Desert Tan, Olive Green' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Company logos, name patches, rank insignia' }
    ],
    images: [
      { src: '/images/products/industrial-coverall.jpg', alt: 'Security personnel in tactical uniform' },
      { src: '/images/products/industrial-coverall.jpg', alt: 'Security officer on patrol in tactical uniform' },
      { src: '/images/security/security_team_professional.jpg', alt: 'Close-up of tactical security uniform details' },
      { src: '/images/security/security_team_professional.jpg', alt: 'Security team in coordinated tactical uniforms' }
    ],
    category: 'Security Uniforms',
    categorySlug: 'security-uniforms',
    inStock: true,
    minOrder: 10,
    leadTime: '14-21 days',
    customization: true,
    variants: [
      { name: 'Standard Security Uniform Set', price: 'SAR 899' },
      { name: 'Tactical Response Uniform', price: 'SAR 1,099' },
      { name: 'Supervisor Security Uniform', price: 'SAR 1,199' },
      { name: 'Command Staff Uniform', price: 'SAR 1,499' }
    ],
    colors: [
      { name: 'Tactical Black', value: '#252525', image: '/images/products/industrial-coverall.jpg' },
      { name: 'Navy', value: '#1a2942', image: '/images/products/industrial-coverall.jpg' },
      { name: 'Desert Tan', value: '#d2b48c', image: '/images/products/industrial-coverall.jpg' },
      { name: 'Olive Green', value: '#556b2f', image: '/images/products/industrial-coverall.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    sizeEquivalents: {
      'S': 'Small (Chest: 96-101cm)',
      'M': 'Medium (Chest: 102-107cm)',
      'L': 'Large (Chest: 108-113cm)',
      'XL': 'Extra Large (Chest: 114-119cm)',
      'XXL': 'Double Extra Large (Chest: 120-125cm)',
      '3XL': 'Triple Extra Large (Chest: 126-131cm)',
      '4XL': 'Quadruple Extra Large (Chest: 132-137cm)'
    },
    testimonials: [
      {
        quote: "UNEOM's tactical uniforms have significantly improved our security team's operational efficiency. The durability is exceptional even under the harsh conditions our officers face daily, and the customized features perfectly accommodate our equipment requirements.",
        author: "Khalid Al-Otaibi",
        position: "Security Director",
        company: "Al Mamlaka Security Services",
        image: "/images/security/security_team_professional.jpg"
      },
      {
        quote: "After switching to UNEOM's tactical uniforms, we've noticed a marked improvement in officer comfort during long shifts. The authoritative appearance has enhanced our professional image, while the robust construction stands up to the demands of daily security operations.",
        author: "Fahad Al-Qahtani",
        position: "Operations Manager",
        company: "Riyadh Protective Services",
        image: "/images/security/security_team_professional.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Security Uniforms', url: '/shop/security-uniforms' },
    { name: 'Tactical Security Uniforms', url: '#', current: true }
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
        
        {/* Security Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Security Operational Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Tactical Security Uniforms are designed to enhance operational capabilities for security personnel in Saudi Arabia. 
              Every element is engineered to support the demanding requirements of security operations while projecting authority 
              and professionalism.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Operational Functionality</h4>
                <p className="text-sm text-neutral-600">Strategic pocket placement, durable materials, and ergonomic design enabling efficient performance during security operations.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Environmental Adaptation</h4>
                <p className="text-sm text-neutral-600">Climate-appropriate fabric technology that performs in Saudi Arabia's varied environments, from air-conditioned facilities to outdoor deployments.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Professional Authority</h4>
                <p className="text-sm text-neutral-600">Commanding appearance that establishes instant recognition and appropriate authority, enhancing security presence and deterrence.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security Company Customization Section */}
        <div className="mt-16">
          <SectionHeading>Security Company Customization</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-700 mb-4">
                We offer comprehensive customization options for security companies of all sizes. From company branding to 
                rank identification systems, our security uniforms can be tailored to meet your specific operational requirements 
                while maintaining a cohesive and professional appearance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Company Branding</h4>
                  <p className="text-sm">Embroidered logos, woven patches, and branded accessories that reinforce your security company's identity.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Rank Identification</h4>
                  <p className="text-sm">Custom insignia, epaulets, and badging systems to clearly designate personnel hierarchy and authority levels.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Equipment Integration</h4>
                  <p className="text-sm">Specialized accommodations for security equipment, communication devices, and site-specific tools.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Deployment Optimization</h4>
                  <p className="text-sm">Variant designs for different security contexts, from retail settings to high-security facilities.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Security Customization</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/security/security_team_professional.jpg" 
                alt="Professional security team in customized tactical uniforms" 
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
                  <h3 className="text-xl font-semibold">Security Uniform Size Chart</h3>
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
                        <th className="p-2 text-left">Height Range (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">96-101</td>
                        <td className="p-2">81-86</td>
                        <td className="p-2">165-170</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">102-107</td>
                        <td className="p-2">87-92</td>
                        <td className="p-2">170-175</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">108-113</td>
                        <td className="p-2">93-98</td>
                        <td className="p-2">175-180</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">114-119</td>
                        <td className="p-2">99-104</td>
                        <td className="p-2">180-185</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XXL</td>
                        <td className="p-2">120-125</td>
                        <td className="p-2">105-110</td>
                        <td className="p-2">185-190</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">126-131</td>
                        <td className="p-2">111-116</td>
                        <td className="p-2">190-195</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">132-137</td>
                        <td className="p-2">117-122</td>
                        <td className="p-2">195-200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: For security companies, we recommend our professional measurement service to ensure proper fit for all personnel.
                    We also offer proportional sizing for different build types (athletic, standard, and full).
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