'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function AviationTestPage() {
  // Sample data for featured products
  const featuredProducts = [
    {
      id: "airline-crew-uniform",
      name: "Airline Crew Uniform",
      description: "Premium flight attendant uniforms with Islamic-compliant options for Saudi airlines",
      image: "/images/aviation/flightـattendantsـuniforms.jpg",
      price: "SAR 1,299",
      href: "/images/aviation/aviation_captin_uniform.jpg",
      price: "SAR 1,799",
      href: "/images/aviation/aviation_uniform_airline.jpg",
      price: "SAR 999",
      href: "/shop/aviation-uniforms/ground-crew-uniform",
      featured: true,
      badge: "Popular"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 bg-primary-600 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center">Aviation Uniforms Test Page</h1>
          <p className="text-xl text-center mt-4">This page is for testing the featured products section</p>
        </Container>
      </div>
      
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                variants={fadeIn}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    <Link
                      href={product.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {product.description}
                  </p>
                  {product.price && (
                    <div className="mb-4 text-lg font-bold text-primary-600">
                      {product.price}
                    </div>
                  )}
                  <div className="mt-auto">
                    <Link
                      href={product.href}
                      className="inline-block bg-primary-600 text-white px-4 py-2 rounded text-center w-full hover:bg-primary-700 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      <div className="py-12 bg-white">
        <Container>
          <div className="text-center">
            <Link 
              href="/industries/aviation" 
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Back to Aviation Page
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
} 