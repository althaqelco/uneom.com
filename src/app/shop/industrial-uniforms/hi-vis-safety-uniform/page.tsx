'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Product Data (Ideally fetched, but defined here for now)
const product = {
  id: "hi-vis-safety-uniform",
  name: "Hi-Vis Safety Uniform",
  description: "ANSI/ISEA 107 Class 3-compliant high-visibility garments with 360° advanced reflective elements designed for Saudi construction, roadwork, and night shift industrial operations.",
  image: "/images/industries/manufacturing/manufacturing_uniform_product3.jpg",
  features: [
    "Visibility Range: 300+ meters in darkness",
    "360° Reflective Technology with 5cm+ strips",
    "UV Protection: UPF 40+",
    "Moisture Management Technology"
  ],
  price: "SAR 429 - 549",
  badge: "Enhanced Visibility",
  category: "Industrial Uniforms",
  categoryHref: "/shop/industrial-uniforms"
};

export default function HiVisSafetyUniformPage() {
  const locale = 'en'; // Set locale for components

  const handleProductInquiry = (productName: string) => {
    const message = `Hello UNEOM, I'm interested in the ${productName}. Could you provide more details, customization options, and bulk pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971558164922?text=${encodedMessage}`; // Replace with actual number if different
    window.open(whatsappUrl, '_blank');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      {/* Basic SEO */}
      <title>{product.name} - {product.category} | UNEOM</title>
      
      <Container className="py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.category, href: product.categoryHref },
          { label: product.name, href: `/shop/industrial-uniforms/${product.id}` } 
        ]} />

        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Product Image */}
          <motion.div variants={fadeInUp} className="aspect-square relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-secondary-500 text-secondary-900 px-3 py-1 rounded-full text-sm font-semibold">
                {product.badge}
              </span>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-3 font-heading">
              {product.name}
            </h1>
            <p className="text-lg text-neutral-600 mb-6">
              {product.description}
            </p>
            
            {/* Price */}
            <p className="text-2xl font-semibold text-primary-700 mb-6">
              {product.price} 
              <span className="text-sm text-neutral-500 ml-1">(Price varies based on quantity & customization)</span>
            </p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-neutral-800 mb-3">Key Features & Specifications:</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Placeholder Sections */}

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => handleProductInquiry(product.name)} 
                variant="primary" 
                size="lg"
                className="flex-grow justify-center items-center gap-2"
              >
                <FaWhatsapp /> Request Quote via WhatsApp
              </Button>
              <Button 
                href="/contact"
                variant="outline" 
                size="lg"
                className="flex-grow justify-center"
              >
                Contact Sales
              </Button>
            </div>

            {/* Additional Info/Links */}
            <div className="mt-8 text-sm text-neutral-500">
              <p>Need bulk ordering or specific customizations? <a href="/services/bulk-ordering" className="text-primary-600 hover:underline">Learn more</a> or contact us.</p>
              <p>Category: <a href={product.categoryHref} className="text-primary-600 hover:underline">{product.category}</a></p>
            </div>
          </motion.div>
        </motion.div>

        {/* Optional: Related Products Section */}
        
      </Container>
    </>
  );
} 