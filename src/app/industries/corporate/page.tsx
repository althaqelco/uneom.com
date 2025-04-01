"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/sections/corporate/ImageGallery';
import Container from '@/components/ui/Container';

// Related products section
const RelatedProducts = () => {
  const products = [
    {
      id: 'executive-blazer',
      name: 'Executive Blazer',
      description: 'Premium tailored blazer for corporate executives and management personnel.',
      image: '/images/default-placeholder.jpg',
      href: '/shop/corporate-workwear/executive-blazer',
    },
    {
      id: 'corporate-shirt',
      name: 'Corporate Shirt',
      description: 'High-quality business shirt designed for professional office environments.',
      image: '/images/default-placeholder.jpg',
      href: '/shop/corporate-workwear/corporate-shirt',
    },
    {
      id: 'office-trouser',
      name: 'Office Trousers',
      description: 'Professional trousers designed for daily office wear with comfortable fit.',
      image: '/images/default-placeholder.jpg',
      href: '/shop/corporate-workwear/office-trouser',
    },
    {
      id: 'reception-uniform',
      name: 'Reception Uniform Set',
      description: 'Complete front desk uniform set designed for receptionist staff.',
      image: '/images/avatar-placeholder.jpg',
      href: '/shop/corporate-workwear/reception-uniform',
    },
  ];

  return (
    <div className="bg-white">
    <section className="py-16 bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Explore Our Corporate Uniform Collection
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover our premium business attire designed for professional workplace environments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <Link
                  href={product.href}
                  className="text-primary-600 font-medium hover:text-primary-800 transition-colors duration-300"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop/corporate-workwear"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            View All Corporate Products
          </Link>
        </div>
      </Container>
    </section>
      </div>
  );
};

export default function CorporatePage() {
  const locale = 'en';
  
  // Content for the English version
  const content = {
    title: "Professional Corporate Uniforms & Business Attire in Saudi Arabia",
    subtitle: "Tailored business attire for corporate environments that balance professionalism with Saudi workplace culture",
    intro: [
      "In Saudi Arabia's rapidly evolving business landscape, corporate attire plays a crucial role in establishing professional credibility and reinforcing brand identity. UNEOM delivers premium corporate uniform solutions that help organizations maintain a polished and consistent image while respecting Saudi cultural values.",
      "Our corporate collections include tailored suits, business shirts, blouses, formal dresses, and workplace accessories designed to project professionalism while ensuring comfort throughout the workday. Each piece is crafted from high-quality fabrics selected specifically for Saudi Arabia's climate and corporate environments."
    ],
    benefits: [
      {
        title: "Professional Brand Representation",
        description: "Cohesive corporate attire that reinforces your organization's visual identity and projects a unified professional image to clients and partners."
      },
      {
        title: "Saudi Business Culture Expertise",
        description: "Designs that respect Saudi workplace norms and cultural values while maintaining international business standards."
      },
      {
        title: "Climate-Appropriate Fabrics",
        description: "Premium materials selected for comfort in Saudi Arabia's climate and air-conditioned office environments."
      }
    ],
    cta: {
      text: "Request a Quote",
      url: "/quote"
    },
    gallery: {
      title: "Corporate Uniforms Gallery"
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <div className="relative min-h-[40vh] flex items-center bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-24">
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <Image
              src="/images/corporate/corporate_uniform_formal.jpg"
              alt={content.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <Container>
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
              <p className="text-xl opacity-90 mb-8">{content.subtitle}</p>
              <Link 
                href={content.cta.url}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                {content.cta.text}
              </Link>
            </motion.div>
          </Container>
        </section>
      </div>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div>
                {content.intro.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/corporate/corporate_business_uniform.jpg"
                alt="Corporate Uniform"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              UNEOM Corporate Uniform Benefits
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We provide corporate attire solutions that combine elegance, comfort, and durability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.2, duration: 0.5 } 
                  }
                }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {content.gallery.title}
            </h2>
          </motion.div>
          <ImageGallery locale={locale} />
        </Container>
      </section>

      {/* Include Related Products section */}
      <RelatedProducts />

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-700 text-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Elevate Your Corporate Image?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your corporate uniform requirements and discover how UNEOM can help your organization make a professional impression.
            </p>
            <Link 
              href={content.cta.url}
              className="inline-block bg-white text-primary-700 hover:bg-neutral-100 px-8 py-4 rounded-md font-medium transition-colors duration-300 text-lg"
            >
              {content.cta.text}
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
} 