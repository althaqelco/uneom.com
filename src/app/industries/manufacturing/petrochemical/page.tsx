'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaIndustry, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Page Data
const pageData = {
  hero: {
    title: "Petrochemical Industry Solutions",
    subtitle: "Advanced Safety Workwear for Saudi Arabia's Petrochemical Sector",
    image: "/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg"},
  stats: [
    { value: "ISO 11612", label: "Fire Protection" },
    { value: "NFPA 2112", label: "FR Standards" },
    { value: "EN 13034", label: "Chemical Protection" },
    { value: "24/7", label: "Support" },
  ],
  features: [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Chemical Resistance",
      description: "Advanced fabric technology providing protection against harsh chemicals and corrosive substances."
    },
    {
      icon: <FaIndustry className="w-6 h-6" />,
      title: "Flame Resistant",
      description: "FR-rated materials meeting international safety standards for petrochemical environments."
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Comfort Focus",
      description: "Engineered for extended wear in high-temperature petrochemical facilities."
    }
  ],
  products: [
    {
      name: "Premium FR Coverall",
      image: "/images/industries/manufacturing/manufacturing_uniform_product2.jpg",
      features: ["Chemical Splash Protection", "Anti-Static Properties", "High Visibility Elements"]
    },
    {
      name: "Chemical Resistant Set",
      image: "/images/industries/manufacturing/manufacturing_uniform_product1.jpg",
      features: ["Acid Resistant Fabric", "Reinforced Seams", "Moisture Management"]
    }
  ]
};

export default function PetrochemicalPage() {
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
    <main>
      <Container className="py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Petrochemical', href: '/industries/manufacturing/petrochemical' }
        ]} />

        {/* Hero Section */}
        <motion.div 
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 font-heading">
              {pageData.hero.title}
            </h1>
            <p className="text-xl text-neutral-600">
              {pageData.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/contact" 
                variant="primary"
                size="lg"
                className="flex items-center justify-center gap-2"
              >
                Request Consultation <FaArrowRight />
              </Button>
              <Button 
                href="/products/petrochemical"
                variant="outline"
                size="lg"
              >
                View Products
              </Button>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={pageData.hero.image}
              alt="Petrochemical Industry Workwear"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {pageData.stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="text-center space-y-2"
            >
              <div className="text-2xl font-bold text-primary-700">{stat.value}</div>
              <div className="text-neutral-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="Engineered for Petrochemical Safety"
            centered={true}
          >
            Industry-Specific Features
          </SectionHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageData.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Products Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="Specialized for Petrochemical Industry"
            centered={true}
          >
            Featured Products
          </SectionHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pageData.products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">{product.name}</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-neutral-600">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-primary-50 rounded-2xl p-8 md:p-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading">
              Ready to Enhance Your Petrochemical Safety?
            </h2>
            <p className="text-lg text-neutral-600">
              Contact us for a customized solution that meets your specific requirements and safety standards.
            </p>
            <Button 
              href="/contact"
              variant="primary"
              size="lg"
              className="mt-4"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
        </main>
  );
} 