'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function FlameResistantWorkwearPage() {
  const locale = 'en';
  const router = useRouter();
  
  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className="bg-neutral-50 py-8">
        <Container>
          {/* Breadcrumbs */}
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/shop' },
                { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
                { label: 'Flame Resistant Workwear', href: '#' },
              ]}
              locale={locale}
            />
          </div>
          
          <button 
            onClick={handleBack}
            className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            <span>Back</span>
          </button>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src="/images/products/flame-resistant-workwear.webp"
                alt="Flame Resistant Workwear"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-primary-600 font-medium mb-2">Advanced Protection for Hazardous Environments</h4>
              <h1 className="text-3xl font-bold mb-4">Flame Resistant Workwear Set</h1>
              <p className="text-xl font-semibold text-neutral-900 mb-4">SAR 549 - 749</p>
              <p className="text-neutral-600">
                High-quality flame and heat-resistant workwear set, specifically designed for workers in petroleum and electrical industries. 
                Provides maximum protection while maintaining comfort and performance.
              </p>
            </div>

            {/* Product Code */}
            <div className="py-4 border-t border-b border-neutral-200">
              <p className="text-neutral-600">
                <span className="font-medium">Product Code:</span> FR-SET-2023
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="w-full sm:w-auto">
                Add to Quote
              </Button>
              
              <Link href="/contact" passHref>
                <Button variant="outline" className="w-full sm:w-auto">
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <div className="prose max-w-none">
            <h2>Product Description</h2>
            <p>
              The Flame Resistant Workwear Set is the optimal solution for workers in industrial environments exposed 
              to flame and high heat hazards. Specifically designed according to the highest global safety standards 
              to ensure protection for workers in oil, gas, petrochemical, and electrical industries in Saudi Arabia.
            </p>
            
            <p>
              This set is manufactured from advanced inherently flame-resistant materials that self-extinguish when 
              the flame source is removed. The set provides superior protection against thermal flash and radiant 
              heat hazards, while maintaining flame-resistant properties even after repeated washing.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
} 