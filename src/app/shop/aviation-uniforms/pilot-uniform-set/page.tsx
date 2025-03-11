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

export default function PilotUniformSetPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('52');
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'pilot-uniform-set',
    name: 'Premium Pilot Uniform Set',
    price: 'From SAR 1,899',
    basePrice: 1899,
    rating: 4.8,
    reviews: 93,
    description: 'Professional-grade pilot uniforms designed for comfort, durability, and a distinguished appearance for airline professionals.',
    longDescription: 'Our Premium Pilot Uniform Sets are crafted specifically for Saudi Arabia\'s aviation industry, combining international aviation standards with local requirements. Made from premium polyester wool blend that maintains sharpness while offering comfort during long flights, these uniforms feature wrinkle-resistant technology and moisture-wicking properties. The set includes a tailored jacket with epaulets, professional trousers, and a crisp long-sleeve shirt with appropriate insignia placement options.',
    features: [
      'Premium 150s polyester-wool blend for comfort and durability',
      'Wrinkle and stain-resistant fabric technology',
      'Moisture-wicking properties for comfort in varied cabin environments',
      'Reinforced stitching at stress points for extended wear',
      'Saudi aviation authority compliant design',
      'UV protection for high-altitude flying',
      'Hidden stretch panels for mobility during cockpit operations'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Wool' },
      { name: 'Weight', value: 'Medium weight (240-260 gsm)' },
      { name: 'Care Instructions', value: 'Dry clean recommended, machine washable on gentle cycle' },
      { name: 'Available Sizes', value: '46 - 62 (European sizing)' },
      { name: 'Colors', value: 'Navy Blue, Black' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Airline logos, rank insignia, name embroidery' }
    ],
    images: [
      { src: '/images/SAUDIA-pilots-flying-airplane-cockpit-SBI-342346123.jpg', alt: 'Saudi pilots in premium uniform in cockpit' },
      { src: '/images/pilot-and-flight-attendant-walking-through-airport-SBI-300731574.jpg', alt: 'Pilot in premium uniform walking through airport' },
      { src: '/images/pilot-adjusting-uniform-SBI-304638237.jpg', alt: 'Close-up of pilot uniform details' },
      { src: '/images/group-of-professional-airline-crew-members-SBI-305823640.jpg', alt: 'Group of aviation professionals in uniform' }
    ],
    category: 'Aviation Uniforms',
    categorySlug: 'aviation-uniforms',
    inStock: true,
    minOrder: 5,
    leadTime: '21-30 days',
    customization: true,
    variants: [
      { name: 'Captain Uniform Set', price: 'SAR 1,899' },
      { name: 'First Officer Uniform Set', price: 'SAR 1,799' },
      { name: 'Second Officer Uniform Set', price: 'SAR 1,699' },
      { name: 'Complete Set with Winter Overcoat', price: 'SAR 2,499' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#1a2942', image: '/images/fabrics/navy-wool.jpg' },
      { name: 'Black', value: '#232323', image: '/images/fabrics/black-wool.jpg' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56', '58', '60', '62'],
    sizeEquivalents: {
      '46': 'EU 46 (Chest: 92cm)',
      '48': 'EU 48 (Chest: 96cm)',
      '50': 'EU 50 (Chest: 100cm)',
      '52': 'EU 52 (Chest: 104cm)',
      '54': 'EU 54 (Chest: 108cm)',
      '56': 'EU 56 (Chest: 112cm)',
      '58': 'EU 58 (Chest: 116cm)',
      '60': 'EU 60 (Chest: 120cm)',
      '62': 'EU 62 (Chest: 124cm)'
    },
    testimonials: [
      {
        quote: "UNEOM's pilot uniforms have set a new standard for our airline. The quality and attention to detail reflect the professionalism we expect from our flight crew. The fabric performs exceptionally well even on our longest routes.",
        author: "Capt. Khalid Al-Mansour",
        position: "Chief Pilot",
        company: "Saudia Airlines",
        image: "/images/testimonials/capt-khalid.jpg"
      },
      {
        quote: "After switching to UNEOM for our pilot uniforms, we've received numerous compliments from both passengers and crew. The durability is impressive, and the custom elements perfectly represent our airline's brand identity.",
        author: "Mohammed Al-Qahtani",
        position: "VP of Operations",
        company: "flynas",
        image: "/images/testimonials/mohammed-qa.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Aviation Uniforms', url: '/shop/aviation-uniforms' },
    { name: 'Premium Pilot Uniform Set', url: '#', current: true }
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
        price: product.basePrice.toString(),
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
              <div className="mt-2 grid grid-cols-3 gap-2">
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
        
        {/* Aviation Standards Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Aviation Standards & Compliance</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Premium Pilot Uniform Sets adhere to international aviation standards while meeting the specific 
              requirements of Saudi aviation authorities. Each uniform undergoes rigorous quality control to ensure 
              compliance with industry regulations and airline-specific guidelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">GACA Compliant</h4>
                <p className="text-sm text-neutral-600">Meets all General Authority of Civil Aviation (Saudi Arabia) requirements for professional pilot attire.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">IATA Standards</h4>
                <p className="text-sm text-neutral-600">Conforms to International Air Transport Association professional appearance guidelines.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Airline Branding Adaptable</h4>
                <p className="text-sm text-neutral-600">Designed to incorporate airline-specific branding elements while maintaining regulatory compliance.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Airline Customization Section */}
        <div className="mt-16">
          <SectionHeading>Airline Customization Options</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-neutral-700 mb-4">
                We offer extensive customization options for airlines of all sizes. From incorporating your airline's 
                branding elements to ensuring proper rank insignia, our pilot uniforms can be tailored to meet your 
                specific requirements while maintaining professional standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Airline Branding</h4>
                  <p className="text-sm">Custom embroidery of airline logos, specialized buttons, and unique trim colors.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Rank Insignia</h4>
                  <p className="text-sm">Proper epaulet stripes and wing badges according to rank and airline standards.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Name Tags & Credentials</h4>
                  <p className="text-sm">Integration of airline-approved name tags and credential holders.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Bulk Airline Programs</h4>
                  <p className="text-sm">Complete outfitting services for entire flight crews with inventory management.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Airline Customization</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/images/pilots-in-cockpit-of-commercial-airplane-SBI-301200845.jpg" 
                alt="Professional pilots in customized airline uniforms" 
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
                  <h3 className="text-xl font-semibold">Pilot Uniform Size Chart</h3>
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
                        <th className="p-2 text-left">Size (EU)</th>
                        <th className="p-2 text-left">Chest (cm)</th>
                        <th className="p-2 text-left">Waist (cm)</th>
                        <th className="p-2 text-left">Sleeve (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">46</td>
                        <td className="p-2">92</td>
                        <td className="p-2">78</td>
                        <td className="p-2">59</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">48</td>
                        <td className="p-2">96</td>
                        <td className="p-2">82</td>
                        <td className="p-2">60</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">50</td>
                        <td className="p-2">100</td>
                        <td className="p-2">86</td>
                        <td className="p-2">61</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">52</td>
                        <td className="p-2">104</td>
                        <td className="p-2">90</td>
                        <td className="p-2">62</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">54</td>
                        <td className="p-2">108</td>
                        <td className="p-2">94</td>
                        <td className="p-2">63</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">56</td>
                        <td className="p-2">112</td>
                        <td className="p-2">98</td>
                        <td className="p-2">64</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">58</td>
                        <td className="p-2">116</td>
                        <td className="p-2">102</td>
                        <td className="p-2">65</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">60</td>
                        <td className="p-2">120</td>
                        <td className="p-2">106</td>
                        <td className="p-2">66</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">62</td>
                        <td className="p-2">124</td>
                        <td className="p-2">110</td>
                        <td className="p-2">67</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-neutral-500">
                    Note: For the best fit, we recommend professional measurement service which we provide to airline clients.
                    Custom sizing is available for pilots with non-standard measurements.
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