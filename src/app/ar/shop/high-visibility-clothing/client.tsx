'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
}

export default function HighVisibilityClothingClientPage() {
  const products = [
    {
      id: 'industrial-safety-vest',
      name: 'سترة سلامة صناعية',
      description: 'سترة سلامة عالية الرؤية متوافقة مع معيار ANSI/ISEA 107، مناسبة لمواقع العمل والإنشاءات والصناعة.',
      price: 'من 199 ريال',
      image: '/images/products/industrial-coverall.jpg',
      href: '/ar/shop/high-visibility-clothing/industrial-safety-vest'
    },
    {
      id: 'reflective-jackets',
      name: 'جاكيتات عاكسة',
      description: 'جاكيتات عالية الرؤية مع عاكسات متطورة، مقاومة للماء والرياح، مناسبة للعمل في جميع الظروف الجوية.',
      price: 'من 349 ريال',
      image: '/images/products/industrial-coverall.jpg',
      href: '/ar/shop/high-visibility-clothing/reflective-jackets'
    }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold text-center">ملابس عالية الرؤية</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product) => (
              <Link 
                href={product.href} 
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
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
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <span className="font-medium text-gray-900">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 