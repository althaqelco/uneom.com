'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function SurgicalScrubsClient() {
  const locale = 'ar';
  const isRTL = locale === 'ar';
  
  // Product variants
  const colors = ['أخضر فاتح', 'أزرق فاتح', 'أبيض', 'رمادي'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
  
  // State for selected options
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${isRTL ? 'order-2' : 'order-1'}`}>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                أزياء جراحية متطورة ذات أداء عالي
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                ملابس طبية مصممة خصيصًا لبيئات غرف العمليات، مصنوعة من أقمشة مضادة للميكروبات ومقاومة للسوائل، توفر أقصى درجات الراحة والحماية للكوادر الطبية.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  طلب عرض سعر
                </Button>
                <Button variant="outline" size="lg">
                  عرض المواصفات التفصيلية
                </Button>
              </div>
            </div>
            <div className={`${isRTL ? 'order-1' : 'order-2'} relative h-80 md:h-96`}>
              <Image
                src="/images/products/surgical-scrubs.jpg"
                alt="أزياء جراحية متطورة"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </div>
      
      {/* Product Details Section */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <SectionHeading className="mb-4">ميزات الأزياء الجراحية</SectionHeading>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary-500 rounded-full p-1 mt-1 mr-2">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>قماش مضاد للميكروبات يقلل من خطر انتقال العدوى</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-500 rounded-full p-1 mt-1 mr-2">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>تقنية مقاومة للسوائل تحمي من التلوث وتبقيك جافًا</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-500 rounded-full p-1 mt-1 mr-2">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>تصميم مريح مع قابلية للتهوية لساعات عمل طويلة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-500 rounded-full p-1 mt-1 mr-2">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>جيوب متعددة لحمل المعدات الأساسية بشكل آمن</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-500 rounded-full p-1 mt-1 mr-2">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>مصممة وفق معايير الرعاية الصحية السعودية والعالمية</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">اختر لون الزي:</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedColor === color 
                          ? 'bg-primary-50 border-primary-600 text-primary-700' 
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">اختر المقاس:</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size 
                          ? 'bg-primary-50 border-primary-600 text-primary-700' 
                          : 'border-gray-300 hover:border-primary-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button variant="primary" size="lg" className="w-full">
                طلب عرض سعر مخصص
              </Button>
            </div>
            
            <div>
              <SectionHeading className="mb-4">مواصفات الأزياء الجراحية</SectionHeading>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="font-semibold">المادة</h3>
                  <p>مزيج بوليستر وقطن معالج بتقنية ضد البكتيريا، 55% قطن، 45% بوليستر</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="font-semibold">الوزن والمتانة</h3>
                  <p>نسيج متوسط الوزن (180-200 غرام/م²) مُصمم للاستخدام المتكرر</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="font-semibold">المميزات التقنية</h3>
                  <p>مقاومة للسوائل، مضادة للميكروبات، سهلة التنظيف، متينة بعد غسلها متكرراً</p>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="font-semibold">الحجم والتوافق</h3>
                  <p>تصميم مريح وواسع بما يكفي لحرية الحركة، مع خيار التصميم بمقاسات خاصة</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">خيارات التخصيص</h3>
                  <p>إمكانية إضافة شعار المستشفى، اسم الطبيب، والقسم الطبي بتطريز عالي الجودة</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-gray-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <SectionHeading>استفسر عن طلبات الشراء بالجملة</SectionHeading>
            <p className="text-lg text-gray-700 mb-8">
              نقدم أسعاراً تنافسية للطلبات بالجملة للمستشفيات والمراكز الطبية. تواصل معنا للحصول على عرض سعر مخصص حسب احتياجاتك الخاصة.
            </p>
            <Button variant="primary" size="lg">
              اطلب عرض سعر الآن
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
} 