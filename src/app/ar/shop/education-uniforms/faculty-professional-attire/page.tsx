'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import { generateProductWhatsAppUrl } from '@/utils/whatsapp';
import { FaWhatsapp, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function FacultyProfessionalAttireArabicPage() {
  const locale = 'ar';
  const [selectedColor, setSelectedColor] = useState('كحلي');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');
  const [showRequestForm, setShowRequestForm] = useState(false);
  
  const product = {
    id: "faculty-professional-attire",
    name: "زي مهني للأساتذة",
    description: "زي رسمي أنيق للأساتذة في الجامعات والمؤسسات التعليمية يجمع بين الأناقة المهنية والراحة العملية.",
    price: "ريال 450",
    minOrder: 10,
    colors: [
      { name: "كحلي", value: "#1a2456" },
      { name: "رمادي غامق", value: "#333333" },
      { name: "أسود", value: "#000000" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      {
        title: "أقمشة فاخرة",
        description: "مصنوع من أقمشة عالية الجودة تدوم طويلاً وتوفر مظهراً أنيقاً"
      },
      {
        title: "مناسب للمناخ",
        description: "مصمم ليناسب المناخ في المملكة العربية السعودية مع الحفاظ على المظهر الرسمي"
      },
      {
        title: "تصميم مريح",
        description: "قصات مريحة تسمح بحرية الحركة مع الحفاظ على المظهر الرسمي"
      },
      {
        title: "سهل العناية",
        description: "قماش مقاوم للتجعد ويحتفظ بشكله حتى بعد الغسيل المتكرر"
      }
    ],
    specifications: [
      { name: "المادة", value: "65% بوليستر، 35% قطن" },
      { name: "الوزن", value: "180 جم/م²" },
      { name: "التصميم", value: "أنيق ومهني مع خياطة متقنة" },
      { name: "الأزرار", value: "أزرار عالية الجودة بلون متناسق" },
      { name: "الخياطة", value: "مضاعفة في جميع نقاط الضغط لمتانة إضافية" },
      { name: "المقاسات", value: "من XS إلى 3XL مع إمكانية التخصيص" }
    ]
  };

  const whatsappProduct = () => {
    const message = `استفسار عن: ${product.name}\nاللون: ${selectedColor}\nالمقاس: ${selectedSize}`;
    const url = generateProductWhatsAppUrl(message);
    window.open(url, '_blank');
  };

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
      transition: { duration: 0.5 }
    }
  };

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: '/images/products/faculty-attire.webp',
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: product.price.replace('ريال ', ''),
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <main>
      {/* Add product schema for SEO */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <script type="application/ld+json">
            ${JSON.stringify(productSchema)}
          </script>
        `
      }} />

      {/* Breadcrumbs and navigation */}
      <div className="bg-neutral-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المتجر', href: '/ar/shop' },
              { label: 'أزياء تعليمية', href: '/ar/shop/education-uniforms' },
              { label: product.name, href: '#' },
            ]}
            className="mb-6"
          />
        </Container>
      </div>

      <Container className="py-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:flex-row-reverse"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Product Image Gallery */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src="/images/products/faculty-attire.webp"
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-white border border-neutral-200 cursor-pointer hover:border-primary-300 transition-colors">
                  <Image
                    src={`/images/products/faculty-attire-${index + 1}.webp`}
                    alt={`${product.name} - صورة ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div variants={itemVariants} className="space-y-8 text-right">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center justify-end mb-2">
                <span className="text-xs text-neutral-500 ml-2">4.8 (45 تقييم)</span>
                <div className="flex text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <p className="text-lg text-neutral-700">
                {product.description}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex justify-between items-end mb-6">
                <div className="text-sm text-neutral-600">
                  الحد الأدنى للطلب: <span className="font-medium">{product.minOrder} قطع</span>
                </div>
                <div>
                  <div className="text-sm text-neutral-600 mb-1">السعر الأساسي</div>
                  <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6 text-right">
                <div className="text-sm font-medium text-neutral-900 mb-3">اللون: {selectedColor}</div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
                      title={color.name}
                    >
                      <span className="sr-only">{color.name}</span>
                      <span
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color.value }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <Link 
                    href="/ar/resources/size-guide" 
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    دليل المقاسات
                  </Link>
                  <div className="text-sm font-medium text-neutral-900">المقاس: {selectedSize}</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 border rounded-md ${
                        selectedSize === size
                          ? 'bg-primary-50 border-primary-500 text-primary-700'
                          : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  variant="secondary"
                  className="flex-1 flex items-center justify-center"
                  onClick={whatsappProduct}
                >
                  <FaWhatsapp className="ml-2" />
                  استفسار عبر الواتساب
                </Button>
                <AddToQuoteButton
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: "/images/products/faculty-attire.webp"
                  }}
                  color={selectedColor}
                  size={selectedSize}
                  className="flex-1"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional product details sections would go here */}
      </Container>
        </main>
  );
} 