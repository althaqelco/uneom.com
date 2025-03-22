"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/sections/corporate/ImageGallery';

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
    <div>
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
        <div className="container mx-auto px-4 relative z-10">
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
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery locale={locale} />

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Elevate Your Corporate Image with Professional Uniform Solutions
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact our corporate uniform specialists to discuss your organization's specific requirements
            </p>
            <Link 
              href={content.cta.url}
              className="bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              {content.cta.text}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 