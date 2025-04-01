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

export default function MedicalLabCoatsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('White');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(25);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'medical-lab-coats',
    name: 'Premium Medical Lab Coats',
    price: 'From SAR 295',
    basePrice: "295",
    rating: 4.8,
    reviews: 87,
    description: 'Professional-grade medical lab coats designed for healthcare professionals in Saudi Arabia, featuring antimicrobial protection, enhanced comfort, and customizable options to meet facility requirements.',
    longDescription: 'Our Premium Medical Lab Coats are crafted with precision to meet the demanding standards of healthcare facilities throughout the Kingdom. Each coat features advanced antimicrobial fabric technology that inhibits the growth of bacteria, providing essential protection in clinical environments. The tailored fit combines professional appearance with functional design, offering strategic pocket placement for medical tools and personal items. Enhanced with soil-release properties, these coats maintain their pristine appearance even with repeated laundering. Available in unisex and gender-specific cuts with options for modest designs that comply with cultural preferences, our lab coats provide the perfect blend of professionalism, protection, and comfort for Saudi healthcare providers.',
    features: [
      'Advanced antimicrobial fabric technology inhibits bacterial growth',
      'Soil-release finish ensures stains wash out easily',
      'Wrinkle-resistant material maintains a professional appearance all day',
      'Breathable fabric blend optimized for the Saudi climate',
      'Reinforced seams and stress points for extended durability',
      'Tailored fit with strategic pocket placement for clinical tools',
      'Available in modest designs with adjustable features',
      'Customizable with embroidered names, credentials, and facility logos'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton with antimicrobial treatment' },
      { name: 'Weight', value: 'Medium weight (200-230 gsm)' },
      { name: 'Length Options', value: 'Short (30"), Standard (38"), Long (42")' },
      { name: 'Available Sizes', value: 'XS to 5XL (Men\'s and Women\'s cuts)' },
      { name: 'Colors', value: 'White, Light Blue, Navy, Black, Grey (facility-specific colors available)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization Options', value: 'Hospital logos, name/credential embroidery, department color coding' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Doctor wearing premium white lab coat with stethoscope' },
      { src: '/images/default-placeholder.jpg', alt: 'Female physician in professional lab coat in hospital setting' },
      { src: '/images/default-placeholder.jpg', alt: 'Medical professionals in lab coats during consultation' },
      { src: '/images/default-placeholder.jpg', alt: 'Saudi healthcare professional in tailored lab coat' }
    ],
    category: 'Medical Scrubs',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 25,
    leadTime: '10-15 days',
    customization: true,
    variants: [
      { name: 'Standard Lab Coat', price: 'SAR 295' },
      { name: 'Executive Lab Coat', price: 'SAR 345' },
      { name: 'Student Lab Coat', price: 'SAR 265' },
      { name: 'Consultation Coat', price: 'SAR 325' },
      { name: 'Enhanced Modesty Design', price: 'SAR 315' }
    ],
    colors: [
      { name: 'White', value: '#FFFFFF', image: '/images/default-placeholder.jpg' },
      { name: 'Light Blue', value: '#ADD8E6', image: '/images/default-placeholder.jpg' },
      { name: 'Navy', value: '#000080', image: '/images/default-placeholder.jpg' },
      { name: 'Black', value: '#000000', image: '/images/default-placeholder.jpg' },
      { name: 'Grey', value: '#808080', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    sizeEquivalents: {
      'XS': 'Extra Small (0-2)',
      'S': 'Small (4-6)',
      'M': 'Medium (8-10)',
      'L': 'Large (12-14)',
      'XL': 'Extra Large (16-18)',
      '2XL': 'Double XL (20-22)',
      '3XL': 'Triple XL (24-26)',
      '4XL': 'Quadruple XL (28-30)',
      '5XL': 'Quintuple XL (32-34)'
    },
    testimonials: [
      {
        quote: "The quality of Uneom's lab coats significantly exceeds what we've used previously. The antimicrobial protection gives our staff confidence, especially in high-risk departments. The embroidery customization with our institution's logo and staff credentials has created a more cohesive professional appearance across all our facilities.",
        author: "Dr. Abdullah Al-Qahtani",
        position: "Medical Director",
        company: "King Fahad Medical City",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "After switching to Uneom's premium lab coats, we've received numerous compliments from patients about our staff's professional appearance. The modest design options have been particularly valuable for our female physicians, and the durability through repeated laundering has made these coats a cost-effective choice for our hospital network.",
        author: "Dr. Samar Al-Zamil",
        position: "Chief of Medical Staff",
        company: "Saudi German Hospital Group",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
    { name: 'Medical Lab Coats', url: '#', current: true }
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
              <h3 className="text-sm font-medium text-neutral-900">Lab Coat Options</h3>
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
        
        {/* Clinical Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Clinical Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Premium Medical Lab Coats are designed to meet the professional standards expected in Saudi healthcare environments, with special attention to infection control, professional appearance, and practical functionality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Infection Control</h4>
                <p className="text-sm text-neutral-600">Advanced antimicrobial technology integrated into the fabric provides continuous protection against pathogens, while soil-release properties ensure contaminants wash away completely.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Professional Image</h4>
                <p className="text-sm text-neutral-600">Tailored fit and wrinkle-resistant fabric maintain a crisp, authoritative appearance throughout demanding clinical days, enhancing patient confidence and facility reputation.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Practical Design</h4>
                <p className="text-sm text-neutral-600">Strategic pocket placement accommodates medical tools, personal devices, and reference materials, while durable construction withstands the rigors of clinical environments.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customization Section */}
        <div className="mt-16">
          <SectionHeading>Medical Lab Coat Customization Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/default-placeholder.jpg" 
                  alt="Medical professionals in customized lab coats" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                We provide comprehensive customization solutions for healthcare facilities across Saudi Arabia. From institutional branding to department-specific designs, our specialized team works with medical leadership to develop lab coat programs that enhance professional identity and meet facility-specific requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Institutional Branding</h4>
                  <p className="text-sm">Precise logo application, embroidered names and credentials, and consistent design elements that reinforce institutional identity and professionalism.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Department Coding</h4>
                  <p className="text-sm">Color accents and trim options that visually distinguish between medical specialties and departments, improving patient navigation and facility organization.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Clinical Adaptations</h4>
                  <p className="text-sm">Modified designs for specific clinical environments, including specialized pockets for surgical departments, infectious disease units, and research laboratories.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Professional Hierarchy</h4>
                  <p className="text-sm">Visual distinction between medical students, residents, attending physicians, and departmental leadership through subtle design variations and premium finishing options.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Lab Coat Consultation</Button>
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
                  <h3 className="text-xl font-semibold">Medical Lab Coat Size Chart</h3>
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
                        <th className="p-2 text-left">Shoulder (cm)</th>
                        <th className="p-2 text-left">Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XS</td>
                        <td className="p-2">94-98</td>
                        <td className="p-2">42-43</td>
                        <td className="p-2">90-92</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">S</td>
                        <td className="p-2">99-103</td>
                        <td className="p-2">44-45</td>
                        <td className="p-2">93-95</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">M</td>
                        <td className="p-2">104-108</td>
                        <td className="p-2">46-47</td>
                        <td className="p-2">96-98</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">L</td>
                        <td className="p-2">109-113</td>
                        <td className="p-2">48-49</td>
                        <td className="p-2">99-101</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">XL</td>
                        <td className="p-2">114-118</td>
                        <td className="p-2">50-51</td>
                        <td className="p-2">102-104</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">2XL</td>
                        <td className="p-2">119-123</td>
                        <td className="p-2">52-53</td>
                        <td className="p-2">105-107</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">3XL</td>
                        <td className="p-2">124-128</td>
                        <td className="p-2">54-55</td>
                        <td className="p-2">108-110</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">4XL</td>
                        <td className="p-2">129-133</td>
                        <td className="p-2">56-57</td>
                        <td className="p-2">111-113</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">5XL</td>
                        <td className="p-2">134-138</td>
                        <td className="p-2">58-59</td>
                        <td className="p-2">114-116</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: These measurements are general guidelines. For the most accurate fit, we recommend our 
                    professional measurement service for healthcare institutions. Custom sizing and length options 
                    are available to accommodate all medical staff requirements.
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