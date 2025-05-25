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

export default function NursingScrubsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Ceil Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'nursing-scrubs',
    name: 'Premium Nursing Scrubs',
    price: 'From SAR 245',
    basePrice: "245",
    rating: 4.9,
    reviews: 128,
    description: 'Premium nursing scrubs designed specifically for nurses in Saudi Arabia, featuring advanced comfort features, antimicrobial protection, and modest designs that respect cultural preferences.',
    longDescription: 'Our Premium Nursing Scrubs are expertly designed to meet the unique requirements of nursing staff in Saudi healthcare environments. Each piece combines advanced antimicrobial technology with exceptional comfort features that support intensive nursing work during long shifts. The innovative fabric blend provides exceptional durability while maintaining a professional appearance throughout demanding workdays. Thoughtfully designed with Saudi cultural sensitivities in mind, these scrubs include modest options with adjustable features, ensuring complete comfort and confidence for all nursing staff. Strategically placed pockets and specialized compartments provide efficient storage for essential nursing tools and devices, enhancing workflow and productivity.',
    features: [
      'Advanced antimicrobial technology eliminates 99.9% of bacteria',
      'Four-way stretch fabric allows unrestricted movement during patient care',
      'Moisture-wicking technology keeps staff cool during long shifts',
      'Strategic mesh ventilation zones for enhanced breathability',
      'Reinforced stitching at stress points for extended garment life',
      'Fade-resistant colors maintain vibrancy despite frequent hospital laundering',
      'Multiple specialized pockets designed for nursing tools and devices'
    ],
    specifications: [
      { name: 'Material', value: '72% Polyester, 21% Rayon, 7% Spandex with antimicrobial treatment' },
      { name: 'Weight', value: 'Medium weight (175-195 gsm)' },
      { name: 'Care Instructions', value: 'Hospital-grade washing compatible' },
      { name: 'Available Sizes', value: 'XS to 4XL (Men\'s and Women\'s cuts)' },
      { name: 'Colors', value: '10 professional colors (compatible with department coding systems)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization Options', value: 'Hospital logos, name embroidery, department color coding' }
    ],
    images: [
      { src: '/images/products/nursing-uniform.jpg', alt: 'Nursing staff wearing premium scrubs at hospital station' },
      { src: '/images/healthcare/healthcare_nurce_uniform.jpg', alt: 'Nurse and doctor in premium medical attire during consultation' },
      { src: '/images/healthcare/2_pices_nurce_uniform.jpg', alt: 'Nurse wearing comfortable scrubs checking patient record' },
      { src: '/images/healthcare/medical_hijab_uniform.jpg', alt: 'Hijabi nurse wearing culturally appropriate nursing scrubs' }
    ],
    category: 'Medical Scrubs',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 30,
    leadTime: '14-21 days',
    customization: true,
    variants: [
      { name: 'Standard Nursing Set', price: 'SAR 245' },
      { name: 'Premium Nursing Set', price: 'SAR 295' },
      { name: 'Enhanced Modesty Set', price: 'SAR 275' },
      { name: 'Hijab-Compatible Set', price: 'SAR 285' },
      { name: 'Maternity Nursing Scrubs', price: 'SAR 305' }
    ],
    colors: [
      { name: 'Ceil Blue', value: '#92a1cf', image: '/images/healthcare/healthcare_nurce_uniform.jpg' },
      { name: 'Navy', value: '#000080', image: '/images/healthcare/healthcare_medical_uniform.jpg' },
      { name: 'Caribbean Blue', value: '#0086cb', image: '/images/products/nursing-uniform.jpg' },
      { name: 'Wine', value: '#722f37', image: '/images/healthcare/2_pices_nurce_uniform.jpg' },
      { name: 'Pewter', value: '#8e8e8e', image: '/images/healthcare/healthcare_medical_doctor_uniform.jpg' },
      { name: 'Hunter Green', value: '#355e3b', image: '/images/healthcare/medical_hijab_uniform.jpg' },
      { name: 'Royal Blue', value: '#4169e1', image: '/images/healthcare/healthcare_nurce_uniform.jpg' },
      { name: 'Black', value: '#000000', image: '/images/healthcare/healthcare_medical_uniform.jpg' },
      { name: 'Eggplant', value: '#614051', image: '/images/products/nursing-uniform.jpg' },
      { name: 'Rose Pink', value: '#e8909c', image: '/images/healthcare/2_pices_nurce_uniform.jpg' }
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
        quote: "Uneom's nursing scrubs have completely transformed our staff's daily experience. The antimicrobial properties provide essential protection, and the comfort during our 12-hour shifts is unmatched. The modest design options have been particularly appreciated by our diverse nursing team.",
        author: "Nora Al-Mansour",
        position: "Chief Nursing Officer",
        company: "King Salman Medical City",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "After standardizing with Uneom nursing scrubs across our hospital network, we've seen marked improvements in staff satisfaction and professional appearance. The department color coding system has facilitated patient interactions, and the durability despite constant laundering is exceptional.",
        author: "Dr. Faisal Al-Juhani",
        position: "Executive Director of Nursing",
        company: "National Healthcare Group",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
    { name: 'Nursing Scrubs', url: '#', current: true }
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
              <h3 className="text-sm font-medium text-neutral-900">Nursing Set Options</h3>
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
        
        {/* Nursing Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Nursing Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Premium Nursing Scrubs are designed to meet the exacting requirements of nursing staff in Saudi healthcare environments, with special attention to infection control, professional comfort, and cultural sensitivity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Infection Prevention</h4>
                <p className="text-sm text-neutral-600">Antimicrobial technology permanently integrated into the fabric provides continuous protection against pathogens, maintaining effectiveness through repeated hospital laundering cycles.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Nursing Comfort</h4>
                <p className="text-sm text-neutral-600">Engineered with four-way stretch fabric and strategic ventilation zones to enhance movement and comfort during extended shifts, reducing fatigue and supporting optimal performance.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Cultural Consideration</h4>
                <p className="text-sm text-neutral-600">Thoughtfully designed options that respect Saudi cultural requirements, including hijab-compatible scrubs and appropriate modest variations for all nursing staff regardless of gender.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nursing Scrubs Customization */}
        <div className="mt-16">
          <SectionHeading>Nursing Scrubs Customization Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/healthcare/healthcare_nurce_uniform.jpg"
                  alt="Nursing staff in customized scrubs" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                We provide comprehensive customization solutions for nursing departments across Saudi Arabia. From hospital identity to role-specific designs, our healthcare-specialized team works with nursing leadership to develop uniform programs that enhance professional identity and practical functionality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Hospital Identity</h4>
                  <p className="text-sm">Precise logo application, custom color palettes aligned with hospital identity, and consistent design elements across all nursing levels.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Role Distinction</h4>
                  <p className="text-sm">Color coding systems for quick visual identification of nursing specialties and roles, improving patient communication and department efficiency.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Specialty Modifications</h4>
                  <p className="text-sm">Specialized pocket configurations, tool holders, and functional adjustments for different nursing specialties from pediatrics to critical care.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Hierarchy Indication</h4>
                  <p className="text-sm">Visual distinction elements between nursing assistants, registered nurses, nurse practitioners, and nursing leadership through subtle design variations.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Nursing Scrubs Consultation</Button>
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
                  <h3 className="text-xl font-semibold">Nursing Scrubs Size Chart</h3>
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
                    Note: These measurements are general guidelines. For the most accurate fit, we recommend our 
                    professional measurement service for healthcare institutions. We also offer custom tailoring 
                    for non-standard sizes to ensure all nursing staff receive appropriately fitting scrubs that 
                    support their important work.
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