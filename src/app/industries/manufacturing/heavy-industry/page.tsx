'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHardHat, FaTools, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';

// Page Data
const pageData = {
  hero: {
    title: "Heavy Industry Uniform Solutions",
    subtitle: "Advanced Safety Workwear for Saudi Arabia's Industrial Sector",
    image: "/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg",
  },
  stats: [
    { value: "ISO 20471", label: "High Visibility" },
    { value: "EN 388", label: "Impact Protection" },
    { value: "ISO 11611", label: "Welding Safety" },
    { value: "100%", label: "Saudi Made" },
  ],
  features: [
    {
      icon: <FaHardHat className="w-6 h-6" />,
      title: "Impact Protection",
      description: "Enhanced protective features designed for heavy machinery environments and industrial operations."
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: "Durability Focus",
      description: "Heavy-duty materials and reinforced construction for extended wear in demanding conditions."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Multi-Hazard Protection",
      description: "Comprehensive protection against mechanical risks, heat, and industrial hazards."
    }
  ],
  products: [
    {
      name: "Heavy-Duty Coverall",
      image: "/images/industries/manufacturing/manufacturing_uniform_full.jpg",
      features: ["Impact-resistant panels", "High visibility elements", "Multiple tool pockets"]
    },
    {
      name: "Industrial Safety Set",
      image: "/images/industries/manufacturing/manufacturing_uniform_variation.jpg",
      features: ["Reinforced knee areas", "Breathable fabric", "Anti-static properties"]
    }
  ],
  applications: [
    {
      title: "Steel Manufacturing",
      description: "Specialized protection for high-temperature environments",
      image: "/images/industries/manufacturing/manufacturing_uniform_basic.jpg"
    },
    {
      title: "Heavy Machinery",
      description: "Enhanced durability for mechanical work",
      image: "/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg"
    },
    {
      title: "Industrial Processing",
      description: "Complete coverage for various industrial applications",
      image: "/images/industries/manufacturing/manufacturing_uniform_perpare.jpg"
    }
  ]
};

export default function HeavyIndustryPage() {
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
      <Container className="py-8 md:py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Heavy Industry', href: '/industries/manufacturing/heavy-industry' }
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
                href="/products/heavy-industry"
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
              alt="Heavy Industry Workwear"
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
            subtitle="Engineered for Industrial Safety"
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
            subtitle="Specialized for Heavy Industry"
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
                        <FaShieldAlt className="text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="Tailored Solutions for Different Sectors"
            centered={true}
          >
            Industry Applications
          </SectionHeading>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageData.applications.map((app, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">{app.title}</h3>
                  <p className="text-neutral-600">{app.description}</p>
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
              Ready to Enhance Your Industrial Safety?
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
    </>
  );
} 