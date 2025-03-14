'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function LuxuryHotelUniformPage() {
  const locale = 'en';
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Product data
  const product = {
    id: "luxury-hotel-uniform",
    category: "hospitality-attire",
    categoryName: "Luxury Hospitality",
    name: "Luxury Hotel Staff Uniform",
    tagline: "Elegant Front Desk Attire for Luxury Hotels and Resorts",
    shortDescription: "Elegant front desk attire with design accents for luxury hotels and resorts",
    longDescription: "Our Luxury Hotel Staff Uniform is specifically designed for front desk personnel, concierge teams, and customer-facing staff in luxury hotels and high-end resorts across Saudi Arabia. This premium uniform combines elegant design elements with practical features, creating a sophisticated look that represents your establishment's commitment to excellence.",
    price: "SAR 449",
    minOrder: 8,
    mainImage: "/images/Luxury_Hotel Staff_Uniform.png",
    additionalImages: [
      "/images/products/hotel-uniform-front.jpg",
      "/images/products/hotel-uniform-back.jpg",
      "/images/products/hotel-uniform-group.jpg"
    ],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Burgundy", value: "#800020" },
      { name: "Navy", value: "#000080" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      {
        title: "Premium Fabric",
        description: "Made with high-quality polyester blend fabric with slight stretch for comfort during long shifts",
        icon: "sparkles"
      },
      {
        title: "Professional Design",
        description: "Tailored silhouette with accent details that reflect luxury and sophistication",
        icon: "star"
      },
      {
        title: "Wrinkle Resistant",
        description: "Special finish that maintains a crisp, professional appearance throughout the workday",
        icon: "check-badge"
      },
      {
        title: "Customizable Accents",
        description: "Option to add gold or silver buttons, trims, and other accents to match your hotel's aesthetic",
        icon: "adjustments"
      },
      {
        title: "Cultural Sensitivity",
        description: "Design options that respect Saudi Arabian cultural norms while maintaining elegance",
        icon: "globe"
      },
      {
        title: "Comfortable Fit",
        description: "Ergonomic design for maximum comfort during extended guest interaction periods",
        icon: "heart"
      }
    ],
    specifications: [
      { name: "Material", value: "80% Polyester, 18% Rayon, 2% Spandex" },
      { name: "Weight", value: "180 GSM" },
      { name: "Closure", value: "Hidden button front with decorative buttons" },
      { name: "Pockets", value: "2 front pockets, 1 internal pocket" },
      { name: "Care", value: "Dry clean recommended, machine washable on gentle cycle" },
      { name: "Customization", value: "Available for hotel logo embroidery and accent customization" }
    ],
    customizationOptions: [
      { 
        name: "Hotel Logo Embroidery", 
        description: "Add your hotel logo embroidered on chest pocket or sleeve",
        image: "/images/customization/hotel-logo.jpg"
      },
      { 
        name: "Accent Color Selection", 
        description: "Choose from a range of accent colors to match your hotel's branding",
        image: "/images/customization/accent-colors.jpg"
      },
      { 
        name: "Button Style Options", 
        description: "Select from gold, silver, or covered button options",
        image: "/images/customization/button-options.jpg"
      },
      { 
        name: "Name Tag Integration", 
        description: "Options for integrating elegant name tags or badges",
        image: "/images/customization/name-tag-luxury.jpg"
      }
    ],
    relatedProducts: [
      {
        id: "concierge-uniform",
        name: "Luxury Concierge Uniform",
        image: "/images/products/concierge-uniform.jpg",
        price: "SAR 499",
        href: "/shop/hospitality-attire/concierge-uniform"
      },
      {
        id: "bellhop-uniform",
        name: "Premium Bellhop Uniform",
        image: "/images/products/bellhop-uniform.jpg",
        price: "SAR 399",
        href: "/shop/hospitality-attire/bellhop-uniform"
      },
      {
        id: "hotel-management-suit",
        name: "Hotel Management Suit",
        image: "/images/products/hotel-management-suit.jpg",
        price: "SAR 649",
        href: "/shop/hospitality-attire/hotel-management-suit"
      }
    ],
    detailedDescription: `<p>Elevate your hotel's image with our meticulously designed Luxury Hotel Staff Uniform. Crafted specifically for Saudi Arabia's growing luxury hospitality sector, this uniform represents the perfect balance of international standards and local sensibilities.</p>
    
    <p>The design focuses on creating a memorable first impression for guests while ensuring staff comfort during long shifts. The premium fabric blend incorporates a touch of stretch, allowing for freedom of movement while maintaining a structured, professional silhouette that distinguishes luxury establishments.</p>
    
    <p>Each uniform can be customized with your hotel's branding elements, from subtle logo embroidery to custom accent colors that match your interior design scheme. The tailoring includes thoughtful details like reinforced seams in high-stress areas and hidden pockets for practical functionality without compromising the elegant appearance.</p>
    
    <p>Our luxury hotel uniforms are designed with the Saudi Arabian hospitality industry in mind, offering appropriate options for all staff members while maintaining a consistent brand identity throughout your establishment. The material is selected to perform well in climate-controlled environments while being comfortable in the Kingdom's warm climate.</p>`
  };

  // Color swatch component
  // @ts-ignore - Temporarily suppress type errors
  const ColorSwatch = ({ color, selected, onClick }) => (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center ${selected ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
      title={color.name}
    >
      <span className="sr-only">{color.name}</span>
      <span
        className="w-8 h-8 rounded-full border border-neutral-200"
        style={{ backgroundColor: color.value }}
      />
    </button>
  );

  // Size selector component
  // @ts-ignore - Temporarily suppress type errors
  const SizeSelector = ({ sizes, selectedSize, onChange }) => (
    <div className="grid grid-cols-7 gap-2">
      {/* @ts-expect-error - Suppressing type check for size parameter */}
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className={`py-2 border rounded-md ${
            selectedSize === size 
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );

  // Features grid component
  // @ts-ignore - Temporarily suppress type errors
  const FeaturesGrid = ({ features, columns = 3 }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
      {/* @ts-expect-error - Suppressing type check for feature and index parameters */}
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            {/* Icon would go here - using placeholder */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
          <p className="text-neutral-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );

  // Related products component
  // @ts-ignore - Temporarily suppress type errors
  const RelatedProducts = ({ products }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* @ts-expect-error - Suppressing type check for product parameter */}
      {products.map((product) => (
        <Link
          key={product.id}
          href={product.href}
          className="group"
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 mb-4">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{product.price}</p>
        </Link>
      ))}
    </div>
  );

  // Order requirements component
  // @ts-ignore - Temporarily suppress type errors
  const OrderRequirements = ({ minOrder, className = "" }) => (
    <div className={`bg-neutral-50 rounded-2xl p-8 ${className}`}>
      <SectionHeading as="h2" className="mb-6">
        Ordering Information
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Minimum Order</h3>
          <p className="text-neutral-600">{minOrder} units per style and color</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Production Timeline</h3>
          <p className="text-neutral-600">3-4 weeks for standard orders<br />2-3 weeks for rush orders</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Payment Terms</h3>
          <p className="text-neutral-600">50% deposit upon order confirmation<br />50% before shipment</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button variant="primary">
          Request a Quote
        </Button>
      </div>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <MainLayout locale={locale}>
      <div className="bg-neutral-50 py-4">
        <Container>
          <div className="flex items-center text-sm text-neutral-600">
            <Link href="/shop" className="hover:text-primary-600 transition-colors">
              Shop
            </Link>
            <span className="mx-2">•</span>
            <Link href="/shop/hospitality-attire" className="hover:text-primary-600 transition-colors">
              Hospitality Attire
            </Link>
            <span className="mx-2">•</span>
            <span className="text-primary-700 font-medium">Luxury Hotel Staff Uniform</span>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Product Image Gallery */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.additionalImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer hover:border-primary-300 transition-colors">
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <div className="text-sm text-primary-700 font-medium mb-2">
                {product.categoryName}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-neutral-700">
                {product.tagline}
              </p>
            </div>

            <p className="text-lg text-neutral-800">
              {product.shortDescription}
            </p>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-sm text-neutral-600 mb-1">Starting Price</div>
                  <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                </div>
                <div className="text-sm text-neutral-600">
                  Min. Order: <span className="font-medium">{product.minOrder} units</span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <div className="text-sm font-medium text-neutral-900 mb-3">Color: {selectedColor}</div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <ColorSwatch
                      key={color.name}
                      color={color}
                      selected={selectedColor === color.name}
                      onClick={() => setSelectedColor(color.name)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm font-medium text-neutral-900">Size: {selectedSize}</div>
                  <button className="text-sm text-primary-600 hover:text-primary-700">Size Guide</button>
                </div>
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  variant="primary"
                  className="flex-1"
                >
                  Add to Quote
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => setShowRequestForm(true)}
                >
                  Request Information
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Details Tabs */}
        <div className="mt-16 border-t border-neutral-200 pt-8">
          <div className="flex space-x-8 border-b border-neutral-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 font-medium text-sm ${
                activeTab === 'description'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`pb-4 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('customization')}
              className={`pb-4 font-medium text-sm ${
                activeTab === 'customization'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Customization Options
            </button>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex">
                    <div className="w-1/3 font-medium text-neutral-900">{spec.name}</div>
                    <div className="w-2/3 text-neutral-700">{spec.value}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'customization' && (
              <div className="space-y-6">
                <p className="text-neutral-700">
                  Enhance your hotel staff uniforms with these customization options to perfectly match your establishment's branding and aesthetic:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.customizationOptions.map((option, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                        {option.image && (
                          <Image
                            src={option.image}
                            alt={option.name}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">{option.name}</h4>
                        <p className="text-sm text-neutral-600 mt-1">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-16 bg-neutral-50 rounded-2xl p-8">
          <SectionHeading as="h2" className="text-center mb-12">
            Key Features &amp; Benefits
          </SectionHeading>
          <FeaturesGrid features={product.features.map(feature => ({
            title: feature.title,
            description: feature.description
          }))} columns={3} />
        </div>

        {/* Order Requirements */}
        <OrderRequirements minOrder={product.minOrder} className="mt-16" />

        {/* Related Products */}
        <div className="mt-16">
          <SectionHeading as="h2" className="mb-8">
            Related Products
          </SectionHeading>
          <RelatedProducts products={product.relatedProducts.map(product => ({
            id: product.id,
            name: product.name,
            href: product.href,
            image: product.image,
            price: product.price
          }))} />
        </div>
      </Container>

      {/* Request Information Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Request Information</h3>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-700">
                  Please fill out the form below to request more information about this product. Our team will get back to you shortly.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Company Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Contact Person</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Email</label>
                    <input type="email" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Phone</label>
                    <input type="tel" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Estimated Quantity</label>
                    <input type="number" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Additional Information</label>
                    <textarea rows={4} className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="primary">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
} 