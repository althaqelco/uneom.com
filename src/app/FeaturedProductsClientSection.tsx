'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define the type for a single product (adjust properties as needed based on actual data)
interface Product {
  id: string;
  category: string;
  categoryName: string;
  name: string;
  shortDescription: string;
  price: string;
  minOrder: number;
  image: string;
  colors: Array<{ name: string; value: string }>;
  href: string;
}

interface FeaturedProductsClientSectionProps {
  products: Product[];
}

// Animation variants (copied from page.tsx)
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
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0] // Example cubic bezier easing
    }
  }
};

export default function FeaturedProductsClientSection({ products }: FeaturedProductsClientSectionProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <SectionHeading className="text-center mb-12">Featured Uniform Solutions</SectionHeading>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link href={product.href}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                      <span className="text-white text-sm font-semibold py-1 px-3 border border-white rounded-full">
                        View Details
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-primary-600 font-medium uppercase mb-1">{product.categoryName}</p>
                  <h3 className="font-semibold text-neutral-800 mb-1 group-hover:text-primary-700 transition-colors text-base leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-2 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold text-neutral-800">{product.price}</p>
                      <div className="flex space-x-1">
                        {product.colors.slice(0, 3).map((color) => (
                          <span
                            key={color.name}
                            className="block w-3 h-3 rounded-full border border-neutral-300"
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                          ></span>
                        ))}
                        {product.colors.length > 3 && (
                           <span className="text-xs text-neutral-500">+{product.colors.length - 3}</span>
                        )}
                      </div>
                  </div>
                  {/* <p className="text-xs text-neutral-500 mt-1">Min. Order: {product.minOrder}</p> */}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 