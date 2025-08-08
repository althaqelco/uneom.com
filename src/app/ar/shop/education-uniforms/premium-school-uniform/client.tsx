'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateProductWhatsAppUrl } from '@/utils/whatsapp';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function PremiumSchoolUniformClientPage() {
  const locale = 'ar';
  const [selectedColor, setSelectedColor] = useState('أزرق داكن');
  const [selectedSize, setSelectedSize] = useState('M');
  
  const product = {
    id: "premium-school-uniform",
    name: "زي مدرسي فاخر",
    description: "زي مدرسي فاخر مصمم خصيصًا للمؤسسات التعليمية في المملكة العربية السعودية، يتميز بجودة عالية وراحة مثالية للطلاب.",
    price: "ريال 350",
    minOrder: 20,
    colors: [
      { name: "أزرق داكن", value: "#1a3a6c" },
      { name: "أخضر زيتوني", value: "#4b5320" },
      { name: "بورجندي", value: "#800020" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      {
        title: "أقمشة ممتازة",
        description: "مصنوع من مزيج من القطن والبوليستر لتوفير متانة عالية وراحة في الارتداء"
      },
      {
        title: "مقاوم للتجعد",
        description: "معالج خصيصًا ليبقى أنيقًا طوال اليوم الدراسي دون تجعد أو تكرمش"
      },
      {
        title: "سهل العناية",
        description: "يمكن غسله في الغسالة ويجف بسرعة مع الحفاظ على شكله الأصلي"
      },
      {
        title: "متانة استثنائية",
        description: "مصمم ليتحمل الاستخدام اليومي المكثف طوال العام الدراسي"
      }
    ],
    specifications: [
      { name: "المادة", value: "65% بوليستر، 35% قطن" },
      { name: "الوزن", value: "180 جم/م²" },
      { name: "المقاومة للانكماش", value: "أقل من 3%" },
      { name: "ثبات اللون", value: "ممتاز (4.5 من 5)" },
      { name: "خيارات التخصيص", value: "شعار المدرسة، الاسم، الرقم التسلسلي" }
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

  // Product JSON-LD
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: '/images/products/premium-school-uniform.webp',
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
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

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
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-neutral-200">
              <Image
                src="/images/products/premium-school-uniform.webp"
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
                    src={`/images/products/premium-school-uniform-${index + 1}.webp`}
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
                <span className="text-xs text-neutral-500 ml-2">4.9 (62 تقييم)</span>
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
                    image: '/images/products/premium-school-uniform.webp'
                  }}
                  color={selectedColor}
                  size={selectedSize}
                  quantity={1}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <SectionHeading>المميزات</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {product.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <SectionHeading>المواصفات</SectionHeading>
          <div className="mt-8 bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100">
            <table className="w-full text-right">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr key={index} className={index !== 0 ? 'border-t border-neutral-100' : ''}>
                    <th className="py-4 px-6 bg-neutral-50 text-neutral-700 font-medium">{spec.name}</th>
                    <td className="py-4 px-6 text-neutral-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                هل تحتاج إلى تفاصيل أكثر؟
              </h2>
              <p className="text-primary-700 mb-8 max-w-2xl mx-auto">
                نوفر خدمة التخصيص الكاملة للأزياء المدرسية حسب متطلبات وألوان مدرستك. 
                يمكننا إضافة الشعارات المدرسية والأسماء والأرقام التسلسلية حسب الحاجة.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/ar/contact" variant="primary">
                  تواصل معنا
                </Button>
                <Button href="/ar/quote" variant="secondary">
                  طلب عرض سعر
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <SectionHeading>منتجات ذات صلة</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                id: 'student-athletic-wear',
                name: 'ملابس رياضية للطلاب',
                price: 'ريال 250',
                image: '/images/products/student-athletic-wear.webp'
              },
              {
                id: 'faculty-professional-attire',
                name: 'زي الهيئة التدريسية',
                price: 'ريال 450',
                image: '/images/products/faculty-professional-attire.webp'
              },
              {
                id: 'school-blazer',
                name: 'سترة مدرسية',
                price: 'ريال 320',
                image: '/images/products/school-blazer.webp'
              },
              {
                id: 'student-formal-uniform',
                name: 'زي رسمي للطلاب',
                price: 'ريال 380',
                image: '/images/products/student-formal-uniform.webp'
              }
            ].map(product => (
              <Link 
                href={`/ar/shop/education-uniforms/${product.id}`}
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-neutral-900">{product.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}