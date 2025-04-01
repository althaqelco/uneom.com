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

export default function PremiumSchoolUniformsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(50);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'premium-school-uniforms',
    name: 'Premium School Uniforms',
    price: 'From SAR 249',
    basePrice: "249",
    rating: 4.8,
    reviews: 156,
    description: 'High-quality school uniforms designed specifically for Saudi educational institutions, combining durability, comfort, and cultural appropriateness.',
    longDescription: 'Our Premium School Uniforms are crafted with the specific needs of Saudi Arabian educational institutions in mind. Each uniform combines exceptional durability for active students with comfort features that make them suitable for daily wear throughout the academic year. The designs respect Saudi cultural values while offering contemporary styling that creates a sense of belonging and pride. Available in various configurations for different school levels and seasons, our uniforms feature stain-resistant, easy-care fabrics that withstand frequent washing while maintaining their appearance.',
    features: [
      'High-density poly-cotton blend (65/35) for extended durability',
      'Stain and wrinkle-resistant fabric technology',
      'Reinforced stitching at stress points',
      'Breathable and lightweight for Saudi climate',
      'Fade-resistant colorfastness even after numerous washes',
      'Modest design in accordance with cultural requirements',
      'Adjustable features to accommodate student growth'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton' },
      { name: 'Weight', value: 'Medium weight (180-200 gsm)' },
      { name: 'Care Instructions', value: 'Machine washable, tumble dry low' },
      { name: 'Available Sizes', value: 'Ages 4-18 (multiple size ranges)' },
      { name: 'Colors', value: 'Navy Blue, White, Light Blue, Black, Beige' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'School logos, name embroidery, custom colors' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Saudi students wearing premium school uniforms in classroom' },
      { src: '/images/default-placeholder.jpg', alt: 'Teacher and students in school uniforms' },
      { src: '/images/default-placeholder.jpg', alt: 'Group of Saudi students in coordinated uniforms' },
      { src: '/images/default-placeholder.jpg', alt: 'Saudi schoolgirl in premium uniform' }
    ],
    category: 'Education Uniforms',
    categorySlug: 'education-uniforms',
    inStock: true,
    minOrder: 50,
    leadTime: '21-30 days',
    customization: true,
    variants: [
      { name: 'Elementary School Set (Boys)', price: 'SAR 249' },
      { name: 'Elementary School Set (Girls)', price: 'SAR 249' },
      { name: 'Middle School Set (Boys)', price: 'SAR 279' },
      { name: 'Middle School Set (Girls)', price: 'SAR 279' },
      { name: 'High School Set (Boys)', price: 'SAR 299' },
      { name: 'High School Set (Girls)', price: 'SAR 299' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#1a2942', image: '/images/default-placeholder.jpg' },
      { name: 'White', value: '#ffffff', image: '/images/default-placeholder.jpg' },
      { name: 'Light Blue', value: '#add8e6', image: '/images/default-placeholder.jpg' },
      { name: 'Black', value: '#222222', image: '/images/default-placeholder.jpg' },
      { name: 'Beige', value: '#f5f5dc', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['4-5', '6-7', '8-9', '10-11', '12-13', '14-15', '16-18'],
    sizeEquivalents: {
      '4-5': 'Ages 4-5 (XXS)',
      '6-7': 'Ages 6-7 (XS)',
      '8-9': 'Ages 8-9 (S)',
      '10-11': 'Ages 10-11 (M)',
      '12-13': 'Ages 12-13 (L)',
      '14-15': 'Ages 14-15 (XL)',
      '16-18': 'Ages 16-18 (XXL)'
    },
    testimonials: [
      {
        quote: "UNEOM's school uniforms have transformed our institution's appearance. The quality is outstanding, and they've maintained their appearance even after a full academic year of daily wear. Our students and parents are extremely satisfied.",
        author: "Dr. Abdullah Al-Sayed",
        position: "Principal",
        company: "Al Manar International School",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "Working with UNEOM has simplified our uniform program management tremendously. Their fabrics stand up to the active lifestyles of our students, and their design team successfully incorporated our traditional values with contemporary educational needs.",
        author: "Fatima Al-Otaibi",
        position: "Administrative Director",
        company: "Riyadh Modern Academy",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Education Uniforms', url: '/shop/education-uniforms' },
    { name: 'Premium School Uniforms', url: '#', current: true }
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
        
        {/* Educational Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Educational Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Premium School Uniforms are designed to enhance the educational experience by providing students with 
              comfortable, practical attire that fosters a sense of belonging and pride. Every aspect of our uniforms is 
              created with the needs of Saudi educational institutions in mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Identity & Belonging</h4>
                <p className="text-sm text-neutral-600">Uniforms that promote school identity and create a sense of community and belonging among students.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Practical Durability</h4>
                <p className="text-sm text-neutral-600">Designed for the active lifestyles of students with reinforced construction at stress points and easy-care fabrics.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Cultural Sensitivity</h4>
                <p className="text-sm text-neutral-600">Thoughtfully designed to honor Saudi cultural values while providing comfortable, contemporary educational attire.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* School Customization Section */}
        <div className="mt-16">
          <SectionHeading>School Customization Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-700 mb-4">
                We offer comprehensive customization options for educational institutions of all levels. From incorporating 
                your school's identity through logos and colors to developing complete uniform systems for different grade levels, 
                our design team works closely with administrators to create uniform solutions that reflect your institution's vision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">School Identity</h4>
                  <p className="text-sm">Custom embroidery, woven badges, and color schemes that incorporate your school's brand and traditions.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Grade Level Distinction</h4>
                  <p className="text-sm">Color coding, style variations, and accessory systems to distinguish between grade levels and academic achievements.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Seasonal Adaptation</h4>
                  <p className="text-sm">Summer and winter uniform variations designed for Saudi Arabia's climate conditions throughout the academic year.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Complete Uniform System</h4>
                  <p className="text-sm">Coordinated everyday wear, physical education attire, and special occasion uniforms for a complete school identity.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request School Customization</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/default-placeholder.jpg" 
                alt="Saudi students in customized school uniforms" 
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
                  <h3 className="text-xl font-semibold">School Uniform Size Chart</h3>
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
                        <th className="p-2 text-left">Age</th>
                        <th className="p-2 text-left">Height (cm)</th>
                        <th className="p-2 text-left">Chest (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4-5</td>
                        <td className="p-2">4-5 years</td>
                        <td className="p-2">104-110</td>
                        <td className="p-2">58-61</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">6-7</td>
                        <td className="p-2">6-7 years</td>
                        <td className="p-2">116-122</td>
                        <td className="p-2">63-65</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">8-9</td>
                        <td className="p-2">8-9 years</td>
                        <td className="p-2">128-134</td>
                        <td className="p-2">67-70</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">10-11</td>
                        <td className="p-2">10-11 years</td>
                        <td className="p-2">140-146</td>
                        <td className="p-2">73-77</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">12-13</td>
                        <td className="p-2">12-13 years</td>
                        <td className="p-2">152-158</td>
                        <td className="p-2">82-85</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">14-15</td>
                        <td className="p-2">14-15 years</td>
                        <td className="p-2">164-170</td>
                        <td className="p-2">88-92</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">16-18</td>
                        <td className="p-2">16-18 years</td>
                        <td className="p-2">174-180</td>
                        <td className="p-2">96-102</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: These measurements are general guidelines. For the best fit, we recommend our school measurement service 
                    for accurate sizing of all students. We also offer adjustable features to accommodate growth throughout the school year.
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