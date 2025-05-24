'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useQuote } from '@/contexts/QuoteContext';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ExecutiveSuitsPage() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Toggle language
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  };
  
  // Product details
  const product = {
    id: 'executive-suits',
    name: 'Executive Tailored Suits',
    description: 'Premium tailored suits designed for corporate executives',
    basePrice: "1299",
    minOrder: 5,
    leadTime: '14-21 days',
    colors: [
      { name: 'Navy Blue', value: '#1a2942' },
      { name: 'Charcoal Grey', value: '#36454f' },
      { name: 'Classic Black', value: '#232323' }
    ],
    sizes: ['46', '48', '50', '52', '54', '56'],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Executive Suit' }
    ]
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= product.minOrder) {
      setQuantity(value);
    }
  };

  const handleAddToQuote = () => {
    if (selectedColor && selectedSize) {
      addItem({
        id: product.id,
        name: product.name,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: product.basePrice,
        image: product.images[0].src
      });
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-white">
      <Container className="py-8">
        <h1>Executive Suits</h1>
        <p>Premium quality executive suits for corporate environments</p>
        
        <div className="mt-6">
          <Button onClick={handleAddToQuote}>Add to Quote</Button>
        </div>
      </Container>
    </div>
  );
} 