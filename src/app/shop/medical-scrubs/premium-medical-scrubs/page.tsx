'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import ColorSwatch from '@/components/shop/ColorSwatch';

export default function PremiumMedicalScrubsPage() {
  const locale = 'en';
  const [selectedColor, setSelectedColor] = useState('Sky Blue');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Product data
  const product = {
    id: "premium-medical-scrubs",
    category: "medical-scrubs",
    categoryName: "Healthcare Uniforms",
    name: "Premium Medical Scrubs",
    tagline: "High-Performance Healthcare Attire for Medical Professionals",
    shortDescription: "High-quality medical scrubs in various colors for healthcare professionals",
    longDescription: "Our Premium Medical Scrubs provide healthcare professionals with exceptional comfort, durability, and professional appearance. Designed specifically for the Saudi Arabian healthcare environment, these scrubs feature antimicrobial properties, moisture-wicking fabric, and practical pocket configurations for all medical staff needs.",
    price: "SAR 179",
    minOrder: 20,
    mainImage: "/images/default-placeholder.jpg",
    additionalImages: [
      "/images/product-placeholder.jpg",
      "/images/product-placeholder.jpg",
      "/images/product-placeholder.jpg"
    ],
    colors: [
      { name: "Sky Blue", value: "#87CEEB" },
      { name: "Surgical Green", value: "#168269" },
      { name: "Navy", value: "#000080" },
      { name: "Gray", value: "#808080" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      {
        title: "Antimicrobial Fabric",
        description: "Built-in antimicrobial properties that inhibit bacteria growth and reduce odor",
        icon: "shield-check"
      },
      {
        title: "Moisture-Wicking",
        description: "Advanced fabric technology that pulls moisture away from the body for all-day comfort",
        icon: "sparkles"
      },
      {
        title: "Durable Construction",
        description: "Reinforced stitching and high-quality fabric ensure long-lasting performance",
        icon: "check-badge"
      },
      {
        title: "Practical Design",
        description: "Multiple strategically placed pockets for essential medical tools and accessories",
        icon: "inbox-stack"
      },
      {
        title: "Comfort Fit",
        description: "Ergonomic design with stretch panels allowing full range of movement during shifts",
        icon: "heart"
      },
      {
        title: "Easy Maintenance",
        description: "Wrinkle-resistant and easy-care fabric that withstands frequent industrial laundering",
        icon: "check-circle"
      }
    ],
    specifications: [
      { name: "Material", value: "65% Polyester, 35% Cotton with Antimicrobial Treatment" },
      { name: "Weight", value: "180 GSM" },
      { name: "Closure", value: "Drawstring pants, V-neck top" },
      { name: "Pockets", value: "6 functional pockets (3 top, 3 pants)" },
      { name: "Care", value: "Machine washable, industrial laundry compatible" },
      { name: "Features", value: "Antimicrobial, moisture-wicking, fluid-resistant" }
    ],
    customizationOptions: [
      { 
        name: "Hospital/Clinic Logo", 
        description: "Add your institution's logo embroidered on chest or sleeve",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "Name Embroidery", 
        description: "Personnel name and credentials embroidered for identification",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "Department Color Coding", 
        description: "Color options to designate different departments or roles",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "Custom Pocket Configuration", 
        description: "Modify pocket placement based on specific department needs",
        image: "/images/default-placeholder.jpg"
      }
    ],
    relatedProducts: [
      {
        id: "surgical-scrubs",
        name: "Surgical Scrubs Set",
        image: "/images/product-placeholder.jpg",
        price: "SAR 199",
        href: "/shop/medical-scrubs/surgical-scrubs"
      },
      {
        id: "lab-coats",
        name: "Professional Lab Coat",
        image: "/images/product-placeholder.jpg",
        price: "SAR 229",
        href: "/shop/medical-scrubs/lab-coats"
      },
      {
        id: "nurse-uniform",
        name: "Premium Nurse Uniform",
        image: "/images/product-placeholder.jpg",
        price: "SAR 189",
        href: "/shop/medical-scrubs/nurse-uniform"
      }
    ],
    detailedDescription: `<p>Our Premium Medical Scrubs set a new standard for healthcare attire in Saudi Arabia's medical facilities. Developed with input from healthcare professionals, these scrubs combine the highest quality materials with practical design features to meet the demanding needs of medical environments.</p>
    
    <p>The antimicrobial fabric technology provides an added layer of protection in healthcare settings, while the moisture-wicking properties ensure comfort during long shifts. Each set is constructed with reinforced seams at high-stress points to withstand the rigors of daily use and frequent laundering.</p>
    
    <p>The thoughtful design includes multiple pockets strategically placed for convenient access to essential tools and instruments. The ergonomic cut allows full range of motion for medical professionals who are constantly on the move, while maintaining a professional and polished appearance.</p>
    
    <p>Available in a range of colors suitable for departmental color-coding, our Premium Medical Scrubs can be customized with your institution's logo and staff identification. The fabric meets international healthcare standards while being specifically adapted for Saudi Arabian healthcare environments.</p>`
  };

  // Size selector component
  const SizeSelector = ({ sizes, selectedSize, onChange }: { sizes: string[]; selectedSize: string; onChange: (size: string) => void }) => (
    <div className="grid grid-cols-7 gap-2">
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
  const FeaturesGrid = ({ features, columns = 3 }: { features: any[]; columns: number }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
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
  const RelatedProducts = ({ products }: { products: any[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  const OrderRequirements = ({ minOrder, className = "" }: { minOrder: number; className?: string }) => (
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
          <p className="text-neutral-600">2-3 weeks for standard orders<br />1-2 weeks for rush orders</p>
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
    <>
      <div className="bg-neutral-50 py-4">
        <Container>
          <div className="flex items-center text-sm text-neutral-600">
            <Link href="/shop" className="hover:text-primary-600 transition-colors">
              Shop
            </Link>
            <span className="mx-2">•</span>
            <Link href="/shop/medical-scrubs" className="hover:text-primary-600 transition-colors">
              Medical Scrubs
            </Link>
            <span className="mx-2">•</span>
            <span className="text-primary-700 font-medium">Premium Medical Scrubs</span>
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
                <h3 className="text-sm font-medium text-neutral-900 mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-2">
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
                  Enhance your medical scrubs with these customization options to perfectly match your healthcare institution's requirements:
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
          <FeaturesGrid features={product.features} columns={3} />
        </div>

        {/* Order Requirements */}
        <OrderRequirements minOrder={product.minOrder} className="mt-16" />

        {/* Related Products */}
        <div className="mt-16">
          <SectionHeading as="h2" className="mb-8">
            Related Products
          </SectionHeading>
          <RelatedProducts products={product.relatedProducts} />
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
                  Please fill out the form below to request more information about our Premium Medical Scrubs. Our healthcare uniform specialists will get back to you shortly.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Healthcare Facility</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Contact Person</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">Position/Department</label>
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
                    <label className="block text-sm font-medium text-neutral-700">Specific Requirements</label>
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
    </>
  );
} 