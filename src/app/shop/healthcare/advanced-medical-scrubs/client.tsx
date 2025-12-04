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
import Head from 'next/head';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function AdvancedMedicalScrubsClientPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Royal Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'advanced-medical-scrubs',
    name: 'Advanced Medical Scrubs',
    price: 'From SAR 289',
    basePrice: "289",
    rating: 4.9,
    reviews: 142,
    description: 'Premium medical scrubs designed for healthcare professionals in Saudi Arabia, featuring antimicrobial technology, superior comfort, and professional appearance.',
    longDescription: 'Our Advanced Medical Scrubs represent the pinnacle of healthcare attire, engineered specifically for the demands of Saudi Arabian medical environments. These scrubs combine cutting-edge antimicrobial technology with moisture-wicking fabrics to provide exceptional protection and comfort during long shifts. The innovative design incorporates strategic ventilation zones to enhance cooling in climate-controlled hospital settings, while maintaining a pristine professional appearance throughout the day. Each garment undergoes rigorous quality control to ensure superior durability through repeated industrial laundering processes, while preserving color integrity and shape.',
    features: [
      'Advanced antimicrobial silver ion technology eliminating 99.9% of bacteria',
      'Four-way stretch fabric providing unrestricted movement during medical procedures',
      'Moisture-wicking technology keeping professionals cool and comfortable',
      'Strategic mesh ventilation zones enhancing breathability in critical areas',
      'Reinforced stitching at high-stress points for extended garment lifespan',
      'Fade-resistant color technology withstanding rigorous hospital laundering',
      'Multiple specialized pockets designed for medical instruments and devices'
    ],
    specifications: [
      { name: 'Material', value: '74% Polyester, 20% Rayon, 6% Spandex with antimicrobial treatment' },
      { name: 'Weight', value: 'Medium weight (180-200 gsm)' },
      { name: 'Care Instructions', value: 'Hospital-grade laundering compatible' },
      { name: 'Available Sizes', value: 'XS to 4XL (men\'s and women\'s cuts)' },
      { name: 'Colors', value: '8 professional colors (department-coding compatible)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Hospital logos, name embroidery, department color coding' }
    ],
    images: [
      { src: '/images/healthcare/full_clothes_doctor_uniform.jpg', alt: 'Doctor wearing advanced medical scrubs during consultation' },
      { src: '/images/healthcare/nurce_uniform.jpg', alt: 'Nurses in advanced medical scrubs at hospital station' },
      { src: '/images/healthcare/healthcare_medical_doctor.jpg', alt: 'Surgical team wearing specialized medical attire in operating theater' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'Muslim female doctor in hijab-compatible medical scrubs' }
    ],
    category: 'Healthcare',
    categorySlug: 'healthcare',
    inStock: true,
    minOrder: 30,
    leadTime: '14-21 days',
    customization: true,
    variants: [
      { name: 'Standard Medical Scrub Set', price: 'SAR 289' },
      { name: 'Premium Surgical Scrub Set', price: 'SAR 345' },
      { name: 'Executive Medical Set', price: 'SAR 395' },
      { name: 'Hijab-Compatible Set', price: 'SAR 329' },
      { name: 'Maternity Medical Scrubs', price: 'SAR 339' }
    ],
    colors: [
      { name: 'Royal Blue', value: '#4169e1', image: '/images/healthcare/nurce_uniform.jpg' },
      { name: 'Surgical Green', value: '#2e8b57', image: '/images/healthcare/full_clothes_doctor_uniform.jpg' },
      { name: 'Burgundy', value: '#800020', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'Navy', value: '#000080', image: '/images/healthcare/nurce_uniform.jpg' },
      { name: 'Ceil Blue', value: '#92a1cf', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'Black', value: '#000000', image: '/images/healthcare/full_clothes_doctor_uniform.jpg' },
      { name: 'Pewter', value: '#8e8e8e', image: '/images/healthcare/nurce_uniform.jpg' },
      { name: 'Wine', value: '#722f37', image: '/images/healthcare/medical_hijab_uniform.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (0-2)',
      'S': 'Small (4-6)',
      'M': 'Medium (8-10)',
      'L': 'Large (12-14)',
      'XL': 'Extra Large (16-18)',
      '2XL': 'Double Extra Large (20-22)',
      '3XL': 'Triple Extra Large (24-26)',
      '4XL': 'Quadruple Extra Large (28-30)'
    },
    testimonials: [
      {
        quote: "UNEOM's advanced medical scrubs have transformed our staff's experience. The antimicrobial properties provide an added layer of protection, and the comfort during 12-hour shifts is unmatched. The fabric maintains a professional appearance even after repeated hospital laundering.",
        author: "Dr. Fatima Al-Zahrani",
        position: "Chief of Medical Staff",
        company: "King Fahd Medical City",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      },
      {
        quote: "After standardizing with UNEOM's medical scrubs across our facilities, we've noticed a significant improvement in staff satisfaction and professional appearance. The department color-coding system has improved visual identification, and the custom features for different specialties have been widely appreciated.",
        author: "Ahmad Al-Nasser",
        position: "Director of Procurement",
        company: "Saudi German Hospitals Group",
        image: "/images/healthcare/healthcare_medical_doctor.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Healthcare', url: '/shop/healthcare' },
    { name: 'Advanced Medical Scrubs', url: '#', current: true }
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
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Structured data for SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Advanced Medical Scrubs by UNEOM",
            "image": [
              "https://uneom.com/images/healthcare/full_clothes_doctor_uniform.jpg",
              "https://uneom.com/images/healthcare/nurce_uniform.jpg",
              "https://uneom.com/images/healthcare/healthcare_medical_doctor.jpg"
            ],
            "description": "Premium medical scrubs designed for healthcare professionals in Saudi Arabia, featuring antimicrobial technology, superior comfort, and professional appearance. Our Advanced Medical Scrubs represent the pinnacle of healthcare attire, engineered specifically for the demands of Saudi Arabian medical environments.",
            "sku": "UNEOM-AMS-100",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Attire",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/healthcare/advanced-medical-scrubs",
              "priceCurrency": "SAR",
              "price": "289",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "142"
            }
          })
        }}
      />
    
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
                <h3 className="text-sm font-medium text-neutral-900">Medical Set Variants</h3>
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
          
          {/* Medical Excellence Section */}
          <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
            <SectionHeading>Healthcare Excellence</SectionHeading>
            <div className="mt-4">
              <p className="text-neutral-700 mb-4">
                Our Advanced Medical Scrubs are designed to meet the rigorous demands of Saudi Arabia's healthcare environments, with special attention to infection control, professional appearance, and comfort during extended shifts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">Infection Control</h4>
                  <p className="text-sm text-neutral-600">Advanced antimicrobial technology woven directly into the fabric provides lasting protection against harmful pathogens, even after repeated industrial laundering cycles.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">Professional Comfort</h4>
                  <p className="text-sm text-neutral-600">Engineered with four-way stretch fabric and strategic ventilation zones to enhance movement and comfort during long shifts in climate-controlled hospital environments.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">Cultural Adaptability</h4>
                  <p className="text-sm text-neutral-600">Thoughtfully designed options that respect Saudi cultural requirements, including hijab-compatible scrub sets and modest fit varieties for all healthcare professionals.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Healthcare Customization Section */}
          <div className="mt-16">
            <SectionHeading>Healthcare Customization Program</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-neutral-700 mb-4">
                  We offer comprehensive customization solutions for healthcare institutions throughout Saudi Arabia. From hospital branding to departmental color-coding systems, our specialized healthcare team works closely with medical administrators to develop uniform programs that enhance professionalism and functionality.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Institutional Branding</h4>
                    <p className="text-sm">Precise logo application, custom color palettes, and consistent branding elements across all staff levels and departments.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Department Identification</h4>
                    <p className="text-sm">Color-coding systems for quick visual identification of departments, with consistent application across all facilities.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Specialty Adaptations</h4>
                    <p className="text-sm">Specialized pocket configurations, instrument holders, and functional modifications for different medical specialties.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Staff Hierarchy Systems</h4>
                    <p className="text-sm">Visual distinction elements between administrative, nurse, physician, and support staff through consistent design elements.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button variant="primary">Request Healthcare Customization</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="Healthcare professionals in customized medical attire" 
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
                    <h3 className="text-xl font-semibold">Medical Scrub Size Chart</h3>
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
                          <td className="p-2">82-87</td>
                          <td className="p-2">63-67</td>
                          <td className="p-2">89-93</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">S</td>
                          <td className="p-2">88-93</td>
                          <td className="p-2">68-72</td>
                          <td className="p-2">94-98</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">M</td>
                          <td className="p-2">94-99</td>
                          <td className="p-2">73-77</td>
                          <td className="p-2">99-103</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">L</td>
                          <td className="p-2">100-105</td>
                          <td className="p-2">78-82</td>
                          <td className="p-2">104-108</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">XL</td>
                          <td className="p-2">106-111</td>
                          <td className="p-2">83-88</td>
                          <td className="p-2">109-114</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">2XL</td>
                          <td className="p-2">112-117</td>
                          <td className="p-2">89-94</td>
                          <td className="p-2">115-120</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">3XL</td>
                          <td className="p-2">118-123</td>
                          <td className="p-2">95-100</td>
                          <td className="p-2">121-126</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium">4XL</td>
                          <td className="p-2">124-129</td>
                          <td className="p-2">101-106</td>
                          <td className="p-2">127-132</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-neutral-500">
                      Note: These measurements are general guidelines. For the most accurate fit, we recommend our professional measurement service 
                      for healthcare institutions. We also offer tailoring services for non-standard sizes to ensure all medical professionals 
                      have properly fitting attire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
        
        {/* Enhanced Product Description Section */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading subtitle="Engineered for Healthcare Excellence in Saudi Arabia">
              Advanced Medical Scrubs
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-10">
              <div className="prose prose-lg mx-auto">
                <h2>Specialized Healthcare Attire for Saudi Arabian Medical Environments</h2>
                <p>
                  UNEOM's Advanced Medical Scrubs represent a revolutionary approach to healthcare attire, specifically engineered to meet the unique demands of medical facilities throughout the Kingdom of Saudi Arabia. From leading hospitals in Riyadh and Jeddah to specialized clinics in Dammam and Al Khobar, our medical scrubs combine cutting-edge antimicrobial technology with culturally appropriate design to deliver unmatched performance for healthcare professionals.
                </p>
                
                <h3>Advanced Antimicrobial Protection</h3>
                <p>
                  In healthcare environments where infection control is paramount, our medical scrubs provide an additional layer of protection through innovative fabric technology:
                </p>
                <ul>
                  <li>Silver ion antimicrobial technology that eliminates 99.9% of bacteria, reducing cross-contamination risks between patients</li>
                  <li>Fluid-resistant fabric barrier that provides protection against splashes, spills, and unexpected exposure to bodily fluids</li>
                  <li>Persistent antimicrobial properties that maintain effectiveness through more than 100 industrial washing cycles</li>
                  <li>Laboratory-tested effectiveness against common healthcare-associated pathogens including MRSA and C. difficile</li>
                  <li>Non-leaching antimicrobial treatment that doesn't irritate skin during extended wear periods</li>
                  <li>Odor-control technology that neutralizes unwanted odors during long hospital shifts</li>
                  <li>Quick-dry properties that minimize moisture retention where pathogens can multiply</li>
                </ul>
                
                <h3>Superior Comfort for Extended Healthcare Shifts</h3>
                <p>
                  Our medical scrubs are tailored to meet the unique challenges of Saudi Arabian healthcare environments. We understand the importance of combining professional appearance with practical functionality in the Kingdom's premier medical facilities. Our scrubs feature reinforced stitching at high-stress points to withstand the rigorous demands of fast-paced hospital settings, while our fade-resistant color technology ensures they maintain their professional appearance even after repeated industrial laundering processes.
                </p>
                
                <h3>Customization Options for Saudi Medical Institutions</h3>
                <p>
                  UNEOM provides extensive customization options for our medical scrubs, allowing healthcare institutions to integrate their corporate identity while maintaining safety compliance. Our customization options include:
                </p>
                <ul>
                  <li>Hospital logo embroidery or heat transfer application</li>
                  <li>Department color-coding for easy identification</li>
                  <li>Name and position labeling</li>
                  <li>Custom pocket configurations for specific workflow requirements</li>
                  <li>Industry-specific modifications for specialized tools and equipment</li>
                  <li>Hijab-compatible designs for female healthcare professionals</li>
                </ul>
                
                <h3>Compliance with Saudi and International Standards</h3>
                <p>
                  All UNEOM medical scrubs are manufactured to meet or exceed Saudi Arabian and international safety standards, including:
                </p>
                <ul>
                  <li>Saudi Food and Drug Authority (SFDA) requirements</li>
                  <li>AAMI PB70 liquid barrier performance for protective apparel</li>
                  <li>ASTM F2407 specifications for surgical gowns</li>
                  <li>ISO 13688 protective clothing standards</li>
                  <li>Hospital-specific infection control guidelines</li>
                </ul>
                
                <h3>Bulk Ordering for Healthcare Institutions</h3>
                <p>
                  UNEOM specializes in providing medical uniform solutions for large-scale operations across Saudi Arabia. Our specialized healthcare uniform consultants work directly with medical directors, procurement teams, and HR departments to develop comprehensive uniform programs that meet your safety requirements while optimizing cost efficiency. With production facilities in Saudi Arabia, we offer faster delivery times and responsive service for initial orders and replacements.
                </p>
                
                <p>
                  Contact our healthcare uniform specialists today to discuss your institution's requirements or to request samples of our Advanced Medical Scrubs. Our team is available for on-site consultations at your facility in Riyadh, Jeddah, Dammam, or any city in Saudi Arabia.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
} 