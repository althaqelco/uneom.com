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

export default function SurgicalScrubsPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Surgical Green');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(30);
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Product details
  const product = {
    id: 'surgical-scrubs',
    name: 'Advanced Surgical Scrubs',
    price: 'From SAR 275',
    basePrice: "275",
    rating: 4.8,
    reviews: 92,
    description: 'High-performance surgical scrubs designed specifically for operating room environments in Saudi healthcare facilities, featuring advanced fluid-resistant technology, superior comfort, and sterile design principles.',
    longDescription: 'Our Advanced Surgical Scrubs are engineered for the demanding conditions of operating rooms in Saudi healthcare facilities. Each set incorporates state-of-the-art fluid-resistant technology that provides essential protection during surgical procedures, while maintaining breathability for extended comfort. The reinforced stitching at high-stress areas ensures durability through repeated sterilization cycles, while the specialized pocket configurations accommodate surgical tools without compromising sterile field principles. The antimicrobial treatment inhibits bacterial growth, providing an additional layer of protection in critical environments. Available in both traditional and modern silhouettes with options for modest design elements that respect Saudi cultural preferences, these surgical scrubs combine technical performance with the practical needs of surgical professionals.',
    features: [
      'Advanced fluid-resistant fabric technology for surgical environments',
      'Antimicrobial treatment that maintains effectiveness through sterilization',
      'Specialized reinforcement at high-stress seams and pocket corners',
      'Strategic ventilation zones for comfort during extended procedures',
      'Specialized pocket configurations that minimize particulate shedding',
      'Low-linting fabric to reduce contamination risk in sterile environments',
      'Designed for comfort during extended surgical procedures',
      'Available in modest designs with adjustable features'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton with fluid-resistant and antimicrobial treatment' },
      { name: 'Weight', value: 'Medium weight (180-200 gsm)' },
      { name: 'Care Instructions', value: 'Industrial sterilization compatible' },
      { name: 'Available Sizes', value: 'XS to 4XL (Men\'s and Women\'s cuts)' },
      { name: 'Colors', value: 'Surgical Green, Caribbean Blue, Ceil Blue, Navy, Royal Blue' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization Options', value: 'Hospital logos, department identification, surgeon name embroidery' }
    ],
    images: [
      { src: '/images/healthcare/dept-surgeons.jpg', alt: 'Surgical team wearing advanced scrubs in operating room' },
      { src: '/images/healthcare/healthcare_medical_doctor_uniform.jpg', alt: 'Surgeon and nurse in high-performance surgical attire preparing for procedure' },
      { src: '/images/healthcare/healthcare_medical_doctor.jpg', alt: 'Medical professionals in matching surgical scrubs during operation' },
      { src: '/images/healthcare/full_clothes_doctor_uniform.jpg', alt: 'Saudi surgeon in specialized surgical scrubs with team' }
    ],
    category: 'Medical Scrubs',
    categorySlug: 'medical-scrubs',
    inStock: true,
    minOrder: 30,
    leadTime: '14-21 days',
    customization: true,
    variants: [
      { name: 'Standard Surgical Scrub Set', price: 'SAR 275' },
      { name: 'Premium Surgical Set', price: 'SAR 325' },
      { name: 'Enhanced Sterile Set', price: 'SAR 345' },
      { name: 'Surgeon\'s Preference Set', price: 'SAR 295' },
      { name: 'Modest Design Surgical Set', price: 'SAR 285' }
    ],
    colors: [
      { name: 'Surgical Green', value: '#5cb85c', image: '/images/healthcare/healthcare_medical_uniform.jpg' },
      { name: 'Caribbean Blue', value: '#0086cb', image: '/images/healthcare/healthcare_medical_doctor_uniform.jpg' },
      { name: 'Ceil Blue', value: '#92a1cf', image: '/images/healthcare/full_clothes_doctor_uniform.jpg' },
      { name: 'Navy', value: '#000080', image: '/images/healthcare/healthcare_hijab_doctor.jpg' },
      { name: 'Royal Blue', value: '#4169e1', image: '/images/healthcare/scrubs-collections.jpg' }
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
        quote: "The performance of Uneom's surgical scrubs in our operating theaters has been exceptional. The fluid-resistant technology provides crucial protection during procedures, and the comfort during extended surgeries has received unanimous praise from our surgical staff. The fabric quality maintains integrity even after hundreds of industrial sterilization cycles.",
        author: "Dr. Khalid Al-Anazi",
        position: "Chief of Surgery",
        company: "King Faisal Specialist Hospital",
        image: "/images/clients/modern-arabic-businessman-SBI-300984397.jpg"
      },
      {
        quote: "After standardizing with Uneom's surgical scrubs across our network of operating facilities, we've documented a measurable improvement in staff comfort during long procedures. The modest design options have been particularly valuable for our female surgeons, and the customized embroidery helps maintain clear identification in surgical environments.",
        author: "Dr. Layla Al-Oraini",
        position: "Surgical Department Director",
        company: "Saudi German Hospitals Group",
        image: "/images/clients/adult-beautiful-muslim-woman-with-hijab-on-head-smiling-for-camera-in-room-SBI-351089408.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Medical Scrubs', url: '/shop/medical-scrubs' },
    { name: 'Surgical Scrubs', url: '#', current: true }
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
              <h3 className="text-sm font-medium text-neutral-900">Surgical Set Options</h3>
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
                    className={`py-2 px-4 border rounded-md text-center ${selectedSize === size
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

        {/* Surgical Excellence Section */}
        <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
          <SectionHeading>Surgical Excellence</SectionHeading>
          <div className="mt-4">
            <p className="text-neutral-700 mb-4">
              Our Advanced Surgical Scrubs are engineered to meet the exacting requirements of surgical environments in Saudi healthcare facilities, with special attention to sterility principles, surgical team comfort, and institutional standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Sterile Environment Protection</h4>
                <p className="text-sm text-neutral-600">Low-linting, fluid-resistant fabric with integrated antimicrobial technology minimizes contamination risks while providing essential protection during surgical procedures.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Surgical Team Comfort</h4>
                <p className="text-sm text-neutral-600">Strategically placed ventilation zones, four-way stretch fabric, and ergonomic designs enhance mobility and comfort during extended surgical procedures, reducing fatigue and supporting optimal performance.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold mb-2">Institutional Compliance</h4>
                <p className="text-sm text-neutral-600">Customizable features including facility branding, color-coding for department identification, and specialized pocket configurations that comply with institutional protocols for surgical attire.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Surgical Attire Program */}
        <div className="mt-16">
          <SectionHeading>Surgical Attire Program</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/healthcare/healthcare-hero.jpg"
                  alt="Surgical team in standardized scrubs preparing for operation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-neutral-700 mb-4">
                We provide comprehensive surgical attire programs for healthcare facilities throughout Saudi Arabia. From sterility standards to surgical team identification, our specialized team works with surgical departments to develop uniform protocols that enhance procedural safety and efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Team Identification</h4>
                  <p className="text-sm">Color-coding systems and customized embroidery that clearly identify surgical team roles, specialties, and departments, improving communication and procedural coordination.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Sterility Protocols</h4>
                  <p className="text-sm">Material selection and design features that comply with international and institutional sterility standards, with attention to particulate shedding, fluid resistance, and antimicrobial properties.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Specialty Adaptations</h4>
                  <p className="text-sm">Specialized design variations for surgical subspecialties, including orthopaedics, cardiothoracic, and neurosurgery, with attention to the specific operational requirements of each discipline.</p>
                </div>
                <div className="border border-neutral-200 rounded-md p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Cultural Consideration</h4>
                  <p className="text-sm">Thoughtfully designed options that respect Saudi cultural sensitivities while maintaining strict adherence to surgical standards, including modest design elements and gender-specific adaptations.</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="primary">Request Surgical Attire Consultation</Button>
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
                  <h3 className="text-xl font-semibold">Surgical Scrubs Size Chart</h3>
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
                    Note: These measurements are general guidelines. For surgical environments,
                    we recommend our professional measurement service for healthcare institutions
                    to ensure proper fit and comfort during extended procedures. Custom sizing is
                    available to accommodate individual surgical staff requirements.
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