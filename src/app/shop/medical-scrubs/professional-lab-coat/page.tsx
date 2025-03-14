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
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TestimonialCard from '@/components/ui/TestimonialCard';

export default function ProfessionalLabCoatPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Classic White');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(20);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details with SEO-optimized content
  const product = {
    id: 'professional-lab-coat',
    name: 'Professional Elite Lab Coat',
    price: 'From SAR 325',
    basePrice: "325",
    rating: 4.9,
    reviews: 112,
    description: 'Premium professional lab coats designed for healthcare executives and specialists in Saudi Arabia, featuring luxurious fabric, prestigious detailing, and superior antimicrobial protection perfect for clinical environments.',
    longDescription: 'Our Professional Elite Lab Coat represents the pinnacle of clinical professionalism, meticulously designed for physicians, consultants, and healthcare executives throughout Saudi Arabia. Each coat is crafted using premium 100% Egyptian cotton blend fabric that provides exceptional softness and breathability while maintaining a crisp, professional appearance through long clinical days. The enhanced antimicrobial treatment exceeds industry standards, providing continuous protection against pathogens in high-risk environments. Distinguished by its tailored fit, elegant lapel design, and reinforced precision stitching, this professional lab coat communicates authority and expertise. Strategic placement of functional pockets, including specialized compartments for digital devices and medical instruments, enhances everyday utility. Available in both traditional and modern silhouettes, with the option for discreet modest design elements, these premium lab coats establish a clear professional presence while ensuring compliance with Saudi healthcare facility standards.',
    features: [
      'Premium 100% Egyptian cotton blend with advanced antimicrobial protection',
      'Sophisticated tailored fit with distinctive professional design elements',
      'Reinforced precision stitching at stress points for extended durability',
      'Climate-optimized breathable fabric keeps professionals cool in Saudi facilities',
      'Strategic professional-grade pockets for medical and digital instruments',
      'Wrinkle-resistant treatment maintains pristine appearance throughout clinical days',
      'Distinguished styling appropriate for consultants and healthcare leadership',
      'Customizable with embroidered credentials, name, and institutional branding'
    ],
    specifications: [
      { name: 'Material', value: '70% Egyptian Cotton, 30% Premium Polyester with enhanced antimicrobial treatment' },
      { name: 'Weight', value: 'Premium weight (220-250 gsm)' },
      { name: 'Length Options', value: 'Consultation (34"), Executive (40"), Leadership (44")' },
      { name: 'Available Sizes', value: 'XS to 5XL (Men\'s and Women\'s tailored cuts)' },
      { name: 'Colors', value: 'Classic White, Ivory White, Executive Navy, Prestigious Black, Silver Grey (custom colors available)' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization Options', value: 'Institutional embroidery, credential embroidery, professional piping, custom pocket configurations' }
    ],
    images: [
      { src: '/images/doctor-professional-lab-coat-consultation-SBI-300198271.jpg', alt: 'Medical consultant wearing premium professional lab coat during patient consultation' },
      { src: '/images/female-doctor-executive-lab-coat-SBI-300876391.jpg', alt: 'Female healthcare executive in tailored professional lab coat at medical center' },
      { src: '/images/hospital-directors-meeting-SBI-300912478.jpg', alt: 'Hospital directors in professional lab coats during executive medical meeting' },
      { src: '/images/saudi-physician-professional-attire-SBI-301345621.jpg', alt: 'Saudi specialist physician in premium professional lab coat with medical team' }
    ],
    category: 'Medical Scrubs',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 20,
    leadTime: '12-15 days',
    customization: true,
    variants: [
      { name: 'Consultant Professional Coat', price: 'SAR 325' },
      { name: 'Executive Professional Coat', price: 'SAR 375' },
      { name: 'Specialist Professional Set', price: 'SAR 395' },
      { name: 'Professional Leadership Coat', price: 'SAR 425' },
      { name: 'Department Chairman Attire', price: 'SAR 450' }
    ],
    colors: [
      { name: 'Classic White', value: '#FFFFFF', image: '/images/fabrics/classic-white-professional.jpg' },
      { name: 'Ivory White', value: '#FFFFF0', image: '/images/fabrics/ivory-white-professional.jpg' },
      { name: 'Executive Navy', value: '#000080', image: '/images/fabrics/executive-navy-professional.jpg' },
      { name: 'Prestigious Black', value: '#000000', image: '/images/fabrics/prestigious-black-professional.jpg' },
      { name: 'Silver Grey', value: '#C0C0C0', image: '/images/fabrics/silver-grey-professional.jpg' }
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
        quote: "The Professional Elite Lab Coats from Uneom have transformed our hospital's executive appearance. The quality immediately distinguishes our consulting physicians, and patients consistently comment on the professional impression they create. The Egyptian cotton blend provides exceptional comfort during long consultation days, while the antimicrobial protection gives our specialists added confidence in high-risk departments.",
        author: "Prof. Dr. Ibrahim Al-Sharif",
        position: "Chief Medical Officer",
        company: "Royal Saudi Medical Complex",
        image: "/images/testimonials/ibrahim-s.jpg"
      },
      {
        quote: "After implementing Uneom's Professional Elite Lab Coats for our department chairs and consultants, we've observed a measurable improvement in patient confidence and professional presence. The tailored fit and distinguished styling create an immediate impression of expertise and authority. The fabric quality maintains its pristine appearance even with intensive wear, and the customized embroidery options allow us to clearly differentiate our specialists.",
        author: "Dr. Nora Al-Qahtani",
        position: "Head of Executive Medicine",
        company: "King Abdullah Medical City",
        image: "/images/testimonials/nora-q.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
    { name: 'Professional Lab Coat', url: '#', current: true }
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
    <MainLayout locale={locale}>
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
              <h3 className="text-sm font-medium text-neutral-900">Professional Coat Options</h3>
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
        
        {/* Professional Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Professional Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Professional Elite Lab Coats are engineered to meet the exacting standards expected of medical leaders in Saudi healthcare environments, with special attention to professional presentation, executive comfort, and institutional alignment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Distinguished Presentation</h4>
                <p className="text-sm text-neutral-600">Premium fabric selection, meticulous tailoring, and distinguished styling create an immediate impression of expertise and authority, enhancing professional presence in clinical and administrative settings.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Executive Comfort</h4>
                <p className="text-sm text-neutral-600">Egyptian cotton blend fabric combines luxury with practicality, providing exceptional softness, breathability, and climate-appropriate comfort during long consultation sessions and leadership meetings.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Institutional Representation</h4>
                <p className="text-sm text-neutral-600">Customization options including precise institutional embroidery, credential display, and departmental identification establish clear organizational hierarchy and reinforce facility branding standards.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Professional Attire Program */}
        <div className="mt-16">
          <SectionHeading>Professional Distinction Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/images/hospital-executive-meeting-SBI-300574321.jpg" 
                  alt="Hospital executives in professional lab coats during leadership meeting" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                We offer comprehensive professional distinction programs for healthcare institutions across Saudi Arabia. From leadership identification to departmental differentiation, our specialized team works with medical directors to develop professional attire systems that enhance organizational structure and reflect institutional excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Professional Hierarchy</h4>
                  <p className="text-sm">Clear visual differentiation between specialists, consultants, department chairs, and executive leadership through deliberate design elements that communicate authority levels and improve organizational recognition.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Credential Presentation</h4>
                  <p className="text-sm">Precision embroidery systems for professional qualifications, specialties, and credentials that enhance patient confidence and facilitate immediate recognition of medical expertise and specialist roles.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Institutional Excellence</h4>
                  <p className="text-sm">Premium customization options including institutional branding, departmental color coding, and specialized design elements that reinforce facility identity and communicate excellence in healthcare delivery.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Executive Functionality</h4>
                  <p className="text-sm">Advanced pocket configurations and design adaptations that accommodate the dual demands of clinical consultation and administrative leadership, supporting the multifaceted responsibilities of healthcare executives.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Professional Attire Consultation</Button>
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
                  <h3 className="text-xl font-semibold">Professional Lab Coat Size Chart</h3>
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
                    Note: These measurements are general guidelines. For professional lab coats, 
                    we recommend our executive measurement service to ensure a precise, 
                    tailored appearance appropriate for leadership roles. Custom sizing and length options 
                    are available to accommodate individual professional preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </MainLayout>
  );
} 