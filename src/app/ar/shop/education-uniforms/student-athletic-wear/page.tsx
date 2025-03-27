'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaStar, FaRegStar } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateProductWhatsAppUrl } from '@/utils/whatsapp';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';

export default function StudentAthleticWearArabicPage() {
  // State for product options
  const locale = 'ar';
  const [selectedColor, setSelectedColor] = useState('أزرق');
  const [selectedSize, setSelectedSize] = useState('M');
  
  // Product data
  const product = {
    id: "student-athletic-wear",
    name: "ملابس رياضية للطلاب",
    description: "ملابس رياضية عالية الجودة مصممة خصيصًا للطلاب في المملكة العربية السعودية، توفر الراحة والأداء الممتاز أثناء الأنشطة الرياضية.",
    price: "ريال 299",
    minOrder: 15,
    colors: [
      { name: "أزرق", value: "#1e40af" },
      { name: "أحمر", value: "#b91c1c" },
      { name: "أخضر", value: "#15803d" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      {
        title: "أقمشة تقنية متطورة",
        description: "مصنوعة من أقمشة خاصة تمتص العرق وتوفر التهوية المناسبة للمناخ السعودي"
      },
      {
        title: "مقاومة للأشعة فوق البنفسجية",
        description: "توفر حماية UPF 50+ ضد أشعة الشمس الضارة، مناسبة للأنشطة الخارجية"
      },
      {
        title: "متانة استثنائية",
        description: "مصممة لتحمل الاستخدام المكثف والغسيل المتكرر مع الحفاظ على الشكل واللون"
      },
      {
        title: "مرونة حركة مثالية",
        description: "نسيج مرن رباعي الاتجاهات يسمح بحرية الحركة الكاملة أثناء الأنشطة الرياضية"
      }
    ],
    specifications: [
      { name: "المادة", value: "90% بوليستر، 10% إيلاستين" },
      { name: "الخصائص", value: "سريع الجفاف، مقاوم للبكتيريا، مضاد للرائحة" },
      { name: "الوزن", value: "خفيف (150 جم/م²)" },
      { name: "الألوان المتاحة", value: "أزرق، أحمر، أخضر (خيارات مخصصة متاحة للطلبات الكبيرة)" },
      { name: "التخصيص", value: "شعار المدرسة، اسم المدرسة، ألوان مخصصة" }
    ]
  };

  const whatsappProduct = () => {
    const message = `استفسار عن: ${product.name}\nاللون: ${selectedColor}\nالمقاس: ${selectedSize}`;
    const url = generateProductWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  // Product JSON-LD
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: '/images/products/student-athletic-wear.webp',
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: product.price.replace('ريال ', ''),
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src="/images/products/student-athletic-wear.webp"
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
                    src={`/images/products/student-athletic-wear-${index + 1}.webp`}
                    alt={`${product.name} - صورة ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8 text-right">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center justify-end mb-2">
                <span className="text-xs text-neutral-500 ml-2">4.6 (38 تقييم)</span>
                <div className="flex text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
              </div>
              <p className="text-lg text-neutral-700">
                {product.description}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex justify-between items-end mb-6">
                <div className="text-sm text-neutral-600">
                  الحد الأدنى للطلب: <span className="font-medium">{product.minOrder} قطعة</span>
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
                <div className="grid grid-cols-6 gap-2">
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
                    image: "/images/products/student-athletic-wear.webp"
                  }}
                  color={selectedColor}
                  size={selectedSize}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-16">
          <SectionHeading>مميزات ملابسنا الرياضية</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-right">{feature.title}</h3>
                <p className="text-neutral-700 text-right">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16">
          <SectionHeading>المواصفات</SectionHeading>
          <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden mt-8">
            <div className="divide-y divide-neutral-200">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex p-4 text-right">
                  <div className="w-1/3 font-semibold text-neutral-900">{spec.name}</div>
                  <div className="w-2/3 text-neutral-700">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* School Program Section */}
        <div className="mt-16 bg-neutral-50 p-8 rounded-lg">
          <SectionHeading>برنامج الملابس الرياضية للمدارس</SectionHeading>
          <div className="mt-6">
            <p className="text-lg text-neutral-700 mb-6 text-right">
              نقدم برامج متكاملة للملابس الرياضية المدرسية تشمل تصميمًا مخصصًا وإنتاجًا عالي الجودة وتوصيلًا فعالًا. يمكننا تخصيص الملابس الرياضية بألوان المدرسة وشعارها لتعزيز هوية المدرسة وروح الفريق بين الطلاب.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-lg mb-2 text-right">تصميم مخصص</h3>
                <p className="text-sm text-neutral-700 text-right">نعمل معك لتصميم ملابس رياضية تعكس هوية مدرستك ومتطلبات برنامجك الرياضي.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-lg mb-2 text-right">خصومات للطلبات الكبيرة</h3>
                <p className="text-sm text-neutral-700 text-right">نقدم أسعارًا تنافسية وخصومات للمدارس بناءً على حجم الطلب والكميات.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-lg mb-2 text-right">دعم مستمر</h3>
                <p className="text-sm text-neutral-700 text-right">نقدم خدمة عملاء متميزة وسهولة إعادة الطلب للقطع الإضافية طوال العام.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                className="flex items-center justify-center"
                onClick={whatsappProduct}
              >
                <FaWhatsapp className="ml-2" />
                تواصل للحصول على عرض سعر للمدارس
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
} 