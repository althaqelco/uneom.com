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

export default function HospitalityAttirePage() {
  const locale = 'ar';
  
  // Hospitality attire products
  const products: Product[] = [
    {
      id: 'luxury-hotel-uniform',
      name: 'زي فندق فاخر',
      description: 'زي فندقي فاخر مصمم للفنادق ذات الخمس نجوم، يتميز بنسيج فاخر وتفاصيل راقية وتصميم أنيق.',
      price: 'من 499 ريال',
      image: '/images/Hospitality_Uniforms.png',
      href: '/ar/shop/hospitality-attire/luxury-hotel-uniform',
      features: ['نسيج فاخر', 'تفاصيل راقية', 'مظهر احترافي', 'مريح للارتداء'],
      colors: ['أسود', 'رمادي داكن', 'نبيذي', 'أزرق داكن'],
      isBestseller: true
    },
    {
      id: 'restaurant-staff-uniform',
      name: 'زي طاقم المطعم',
      description: 'زي احترافي مصمم للمطاعم ومؤسسات تقديم الطعام، يجمع بين الأناقة والعملية.',
      price: 'من 349 ريال',
      image: '/images/staff-of-modern-restaurant-in-uniforms-SBI-301172246.jpg',
      href: '/ar/shop/hospitality-attire/restaurant-staff-uniform',
      features: ['مقاوم للبقع', 'سهل العناية', 'تصميم مريح', 'مظهر احترافي'],
      colors: ['أسود', 'أبيض', 'بورجوندي', 'أزرق'],
      isNew: true
    },
    {
      id: 'chef-uniform',
      name: 'زي الشيف',
      description: 'زي شيف احترافي مصمم للمطابخ، يوفر الراحة والحماية مع الحفاظ على المظهر الاحترافي.',
      price: 'من 379 ريال',
      image: '/images/female-arabic-chef-standing-in-a-kitchen-SBI-301212559.jpg',
      href: '/ar/shop/hospitality-attire/chef-uniform',
      features: ['قماش متين', 'مقاوم للحرارة', 'مريح', 'تصميم عملي'],
      colors: ['أبيض', 'أسود', 'رمادي']
    },
    {
      id: 'concierge-uniform',
      name: 'زي الكونسيرج',
      description: 'زي كونسيرج أنيق مصمم للفنادق الراقية، يتميز بتفاصيل دقيقة وتصميم فاخر.',
      price: 'من 449 ريال',
      image: '/images/Arab-concierge-SBI-301173096.jpg',
      href: '/ar/shop/hospitality-attire/concierge-uniform',
      features: ['تصميم أنيق', 'تفاصيل دقيقة', 'نسيج فاخر', 'مظهر احترافي'],
      colors: ['أحمر', 'أزرق داكن', 'أخضر داكن', 'أسود']
    },
    {
      id: 'housekeeping-uniform',
      name: 'زي التدبير المنزلي',
      description: 'زي عملي مصمم لفريق التدبير المنزلي في الفنادق، يجمع بين الوظائف العملية والمظهر المهني.',
      price: 'من 299 ريال',
      image: '/images/young-woman-walking-at-hotel-corridor-SBI-306282723.jpg',
      href: '/ar/shop/hospitality-attire/housekeeping-uniform',
      features: ['قماش متين', 'سهل العناية', 'جيوب متعددة', 'مريح للحركة'],
      colors: ['أزرق فاتح', 'رمادي', 'أخضر فاتح']
    },
    {
      id: 'resort-staff-uniform',
      name: 'زي طاقم المنتجع',
      description: 'زي مصمم لطاقم المنتجعات وأماكن الترفيه، يتميز بألوان زاهية ونسيج مريح.',
      price: 'من 329 ريال',
      image: '/images/hotel-manager-welcoming-couple-SBI-305098732.jpg',
      href: '/ar/shop/hospitality-attire/resort-staff-uniform',
      features: ['نسيج قابل للتنفس', 'سهل العناية', 'تصميم عصري', 'مريح للمناخ الحار'],
      colors: ['أبيض/أزرق', 'بيج/خاكي', 'تركواز/أبيض']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'hotels', name: 'الفنادق' },
    { id: 'restaurants', name: 'المطاعم' },
    { id: 'kitchen', name: 'المطبخ' },
    { id: 'front-desk', name: 'الاستقبال' },
    { id: 'housekeeping', name: 'التدبير المنزلي' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <SectionHeading centered>أزياء الضيافة</SectionHeading>
              <p className="mt-4 text-lg text-gray-600">
                أزياء ضيافة أنيقة واحترافية مصممة للفنادق والمطاعم ومؤسسات الضيافة.
                تقدم مجموعتنا للضيافة جودة ممتازة وأناقة ومتانة لتعزيز صورة علامتك التجارية.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/Hospitality_Uniforms.png"
                  alt="مجموعة أزياء الضيافة"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl mr-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">أناقة ضيافة استثنائية</h2>
                    <p className="text-white/90 text-lg mb-6">
                      ارتقِ بمؤسسة الضيافة الخاصة بك مع أزيائنا عالية الجودة،
                      المصممة لتعزيز هوية علامتك التجارية وتحسين تجربة الضيوف.
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
                    متخصصو أزياء الضيافة لدينا جاهزون لمساعدتك في طلبات الجملة وخيارات التخصيص.
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
                <h2 className="text-2xl font-bold">مجموعة الضيافة</h2>
                
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
            <h2 className="text-3xl font-bold mb-4">بحاجة إلى أزياء ضيافة مخصصة؟</h2>
            <p className="text-lg text-white/80 mb-8">
              نقدم خدمات التصميم المخصص وخيارات طلبات الجملة لمؤسسات الضيافة بمختلف الأحجام.
              اتصل بفريقنا لمناقشة احتياجات العلامة التجارية الخاصة بك.
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