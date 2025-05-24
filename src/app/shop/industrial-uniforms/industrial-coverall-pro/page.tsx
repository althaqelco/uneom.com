'use client';

import React, { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import ColorSwatch from '@/components/shop/ColorSwatch';
import SizeSelector from '@/components/shop/SizeSelector';
import FeaturesGrid from '@/components/shop/FeaturesGrid';
import RelatedProducts from '@/components/shop/RelatedProducts';
import OrderRequirements from '@/components/shop/OrderRequirements';
import CustomizationOptions from '@/components/shop/CustomizationOptions';
import RequestInfoForm from '@/components/forms/RequestInfoForm';
import { StarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface Size {
  name: string;
  description: string;
  inStock: boolean;
}

interface Color {
  name: string;
  value: string;
  inStock: boolean;
}

export default function IndustrialCoverallProPage() {
  const locale = 'en';
  
  // Product data
  const product = {
    id: "industrial-coverall-pro",
    category: "industrial-uniforms",
    categoryName: "Industrial Workwear",
    name: "Heavy Duty Industrial Coverall",
    tagline: "Durable Protection for Demanding Environments",
    shortDescription: "Durable two-tone coverall suitable for factory environments and industrial settings",
    longDescription: "Our Heavy Duty Industrial Coverall is designed for professionals working in factory environments, manufacturing facilities, and industrial settings. This premium coverall offers exceptional durability, comfort, and protection for workers in demanding conditions. The two-tone design combines style with functionality, while the reinforced seams and strategic pocket placement ensure practicality in everyday use.",
    price: "SAR 289",
    minOrder: 15,
    mainImage: "/images/banner-placeholder.jpg",
    additionalImages: [
      "/images/product-placeholder.jpg",
      "/images/product-placeholder.jpg",
      "/images/product-placeholder.jpg"
    ],
    colors: [
      { name: "Black/Gray", value: "#333333" },
      { name: "Navy/Royal", value: "#1a3a5f" },
      { name: "Brown/Khaki", value: "#5d4037" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      {
        title: "Durable Construction",
        description: "Made with heavyweight 240 GSM polycotton blend fabric for exceptional durability",
        icon: "shield-check"
      },
      {
        title: "Safety Features",
        description: "Includes reflective strips for enhanced visibility in low-light conditions",
        icon: "eye"
      },
      {
        title: "Practical Design",
        description: "Multiple pockets including chest, side, and back for convenient tool storage",
        icon: "inbox-stack"
      },
      {
        title: "Comfort Focus",
        description: "Action-back design and elastic waist inserts for improved mobility and comfort",
        icon: "check-badge"
      },
      {
        title: "Easy Maintenance",
        description: "Industrial wash compatible with soil-release finish for easy cleaning",
        icon: "sparkles"
      },
      {
        title: "Climate Adapted",
        description: "Breathable fabric suitable for Saudi Arabia's climate conditions",
        icon: "sun"
      }
    ],
    specifications: [
      { name: "Material", value: "65% Polyester, 35% Cotton" },
      { name: "Weight", value: "240 GSM" },
      { name: "Closure", value: "Heavy-duty zipper with press stud cover" },
      { name: "Pockets", value: "8 multi-purpose pockets" },
      { name: "Safety Features", value: "Reflective strips on chest, back, and arms" },
      { name: "Washing", value: "Industrial laundry compatible" },
      { name: "Customization", value: "Available for embroidery and company branding" }
    ],
    customizationOptions: [
      { 
        name: "Company Logo Embroidery", 
        description: "Add your company logo embroidered on chest and/or back",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "Name/Department Tags", 
        description: "Add employee name or department identification",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "Reflective Striping", 
        description: "Additional reflective strips for enhanced visibility",
        image: "/images/default-placeholder.jpg"
      },
      { 
        name: "Pocket Customization", 
        description: "Modify pocket configuration based on specific needs",
        image: "/images/default-placeholder.jpg"
      }
    ],
    relatedProducts: [
      {
        id: "industrial-safety-vest",
        name: "High-Visibility Safety Vest",
        image: "/images/product-placeholder.jpg",
        price: "SAR 89",
        href: "/shop/industrial-uniforms/industrial-safety-vest"
      },
      {
        id: "welding-apron",
        name: "Heat-Resistant Welding Apron",
        image: "/images/product-placeholder.jpg",
        price: "SAR 159",
        href: "/shop/industrial-uniforms/welding-apron"
      },
      {
        id: "mechanics-overalls",
        name: "Mechanic's Premium Overalls",
        image: "/images/product-placeholder.jpg",
        price: "SAR 269",
        href: "/shop/industrial-uniforms/mechanics-overalls"
      }
    ],
    detailedDescription: `<p>Our Heavy Duty Industrial Coverall is specifically engineered for the demanding work environments found in Saudi Arabia's industrial sector. Created with a focus on durability, protection, and comfort, this coverall excels in factory environments, manufacturing facilities, construction sites, and maintenance operations.</p>
    
    <p>The two-tone design offers a professional appearance while concealing stains and dirt. Strategic reinforcements at high-stress points ensure this garment withstands regular use in challenging conditions. We've incorporated feedback from industrial workers to include practical features like the action-back design for improved mobility and multiple pockets for convenient tool storage.</p>
    
    <p>The heavyweight 240 GSM polycotton blend provides excellent tear and abrasion resistance while maintaining breathability in hot working conditions. Reflective strips on the chest, back, and arms enhance visibility in low-light environments, adding an essential safety feature for workers.</p>
    
    <p>This coverall is designed to meet Saudi Arabian workplace safety standards and can be customized with your company branding, making it an ideal choice for businesses looking to maintain a professional and consistent workforce appearance while prioritizing employee safety and comfort.</p>`
  };
  
  // State for selected options
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(product.minOrder);
  const [activeTab, setActiveTab] = useState('description');
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

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
    <div className="bg-white">
    
      <div className="bg-neutral-50 py-4">
        <Container>
          <div className="flex items-center text-sm text-neutral-600">
            <Link href="/shop" className="hover:text-primary-600 transition-colors">
              Shop
            </Link>
            <span className="mx-2">•</span>
            <Link href="/shop/industrial-uniforms" className="hover:text-primary-600 transition-colors">
              Industrial Uniforms
            </Link>
            <span className="mx-2">•</span>
            <span className="text-primary-700 font-medium">Heavy Duty Industrial Coverall</span>
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
                  <p className="text-sm font-medium text-neutral-900">Size: {selectedSize}</p>
                  <button
                    onClick={() => setShowSizeChart(true)}
                    className="text-sm text-primary-600 font-medium"
                  >
                    Size Chart
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 border rounded-md ${
                        selectedSize === size
                          ? 'border-primary-600 bg-primary-50 text-primary-600'
                          : 'border-neutral-300 text-neutral-700 hover:border-neutral-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <AddToQuoteButton product={product} className="flex-1" />
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
                  Enhance your industrial coveralls with these customization options to perfectly match your company's requirements and brand identity:
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
              <RequestInfoForm
                productName={product.name}
                productId={product.id}
                onClose={() => setShowRequestForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    
      </div>
  );
} 