'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
  features?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function HealthcarePage() {
  const locale = 'ar';
  
  // Healthcare products
  const products: Product[] = [
    {
      id: 'advanced-medical-scrubs',
      name: 'سكرب طبي متطور',
      description: 'سكرب طبي ممتاز مصمم للعاملين في مجال الرعاية الصحية، يتميز بنسيج مضاد للميكروبات وراحة فائقة.',
      price: 'من 249 ريال',
      image: '/images/Healthcare_Uniforms.png',
      href: '/ar/shop/healthcare/advanced-medical-scrubs',
      features: ['نسيج مضاد للميكروبات', 'مقاوم للرطوبة', 'مقاوم للتجعد', 'جيوب متعددة'],
      colors: ['كحلي', 'أزرق فاتح', 'تركواز', 'أسود', 'نبيذي'],
      isBestseller: true
    },
    {
      id: 'premium-lab-coat',
      name: 'معطف مختبر فاخر',
      description: 'معطف مختبر عالي الجودة مصمم للمهنيين الطبيين، يتميز بنسيج متين ومظهر احترافي.',
      price: 'من 199 ريال',
      image: '/images/doctor-SBI-300813580.jpg',
      href: '/ar/shop/healthcare/premium-lab-coat',
      features: ['مقاوم للبقع', 'نسيج متين', 'مظهر احترافي', 'جيوب متعددة'],
      colors: ['أبيض', 'أزرق فاتح'],
      isNew: true
    },
    {
      id: 'nursing-uniform',
      name: 'زي التمريض',
      description: 'زي تمريض مريح وعملي مصمم للاستخدام اليومي في بيئات الرعاية الصحية.',
      price: 'من 179 ريال',
      image: '/images/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
      href: '/ar/shop/healthcare/nursing-uniform',
      features: ['تصميم مريح', 'سهل العناية', 'نسيج متين', 'مظهر احترافي'],
      colors: ['أبيض', 'أزرق فاتح', 'وردي', 'كحلي']
    },
    {
      id: 'surgical-scrubs',
      name: 'ملابس العمليات الجراحية',
      description: 'ملابس جراحية متخصصة مصممة لبيئات غرف العمليات، تتميز بخصائص مضادة للميكروبات.',
      price: 'من 269 ريال',
      image: '/images/three-surgeons-busy-with-a-patient-SBI-300908245.jpg',
      href: '/ar/shop/healthcare/surgical-scrubs',
      features: ['مضاد للميكروبات', 'مقاوم للسوائل', 'تصميم مريح', 'ميزات خاصة بغرف العمليات'],
      colors: ['أخضر جراحي', 'أزرق جراحي', 'كحلي']
    },
    {
      id: 'medical-uniform-set',
      name: 'طقم زي طبي متكامل',
      description: 'طقم زي طبي كامل مصمم لمهنيي الرعاية الصحية، يشمل قميص وبنطلون ومعطف مختبر.',
      price: 'من 349 ريال',
      image: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg',
      href: '/ar/shop/healthcare/medical-uniform-set',
      features: ['طقم كامل', 'تصميم متناسق', 'نسيج ممتاز', 'مظهر احترافي'],
      colors: ['خيارات متعددة متاحة']
    },
    {
      id: 'dental-uniform',
      name: 'زي طب الأسنان',
      description: 'زي متخصص مصمم لأطباء الأسنان، يتميز بخصائص مضادة للميكروبات وتصميم مريح.',
      price: 'من 229 ريال',
      image: '/images/happy-doctor-smiling-at-the-camera-on-a-green-screen-chroma-key-SBI-349602091.jpg',
      href: '/ar/shop/healthcare/dental-uniform',
      features: ['مضاد للميكروبات', 'مقاوم للبقع', 'تصميم مريح', 'مظهر احترافي'],
      colors: ['أبيض', 'أزرق فاتح', 'كحلي', 'أسود']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'doctors', name: 'الأطباء' },
    { id: 'nurses', name: 'التمريض' },
    { id: 'surgeons', name: 'الجراحين' },
    { id: 'dental', name: 'طب الأسنان' },
    { id: 'laboratory', name: 'المختبرات' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <SectionHeading centered>أزياء الرعاية الصحية</SectionHeading>
              <p className="mt-4 text-lg text-gray-600">
                أزياء طبية احترافية ومريحة مصممة للعاملين في مجال الرعاية الصحية.
                تقدم مجموعتنا الطبية جودة ممتازة، خصائص مضادة للميكروبات، ومظهرًا احترافيًا.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg"
                  alt="مجموعة أزياء الرعاية الصحية"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl mr-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">أزياء طبية احترافية</h2>
                    <p className="text-white/90 text-lg mb-6">
                      ارتقِ بمنشأتك الطبية مع أزياء الرعاية الصحية ذات الجودة الممتازة،
                      المصممة للراحة، المتانة، والمظهر الاحترافي.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="/ar/quote" variant="primary">
                        طلب عرض سعر
                      </Button>
                      <Button href="/ar/contact" variant="outline">
                        اتصل بنا
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Products Section */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">الأقسام</h3>
                <ul className="space-y-2">
                  {departments.map((dept) => (
                    <li key={dept.id}>
                      <button className="text-gray-700 hover:text-primary-600 transition w-full text-right py-1">
                        {dept.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">بحاجة للمساعدة؟</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    متخصصو أزياء الرعاية الصحية لدينا جاهزون لمساعدتك في طلبات الجملة وخيارات التخصيص.
                  </p>
                  <Button href="/ar/contact" fullWidth variant="outline">
                    اتصل بنا
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">مجموعة الرعاية الصحية</h2>
                
                {/* Mobile Filters Button */}
                <button className="md:hidden bg-white rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700">
                  الفلاتر
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Link 
                    href={product.href} 
                    key={product.id}
                    className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                          جديد
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                          الأكثر مبيعًا
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{product.price}</span>
                        <span className="text-primary-600 group-hover:-translate-x-1 transition-transform duration-300 inline-flex items-center">
                          عرض التفاصيل
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">بحاجة إلى أزياء طبية مخصصة؟</h2>
            <p className="text-lg text-white/80 mb-8">
              نقدم خدمات التصميم المخصص وخيارات طلبات الجملة لمرافق الرعاية الصحية بمختلف الأحجام.
              اتصل بفريقنا لمناقشة متطلباتك الخاصة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/ar/quote" variant="primary">
                طلب عرض سعر
              </Button>
              <Button href="/ar/services/custom-design" variant="outline">
                خدمات التصميم المخصص
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 