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

export default function AviationUniformsPage() {
  const locale = 'ar';
  
  // Aviation uniform products
  const products: Product[] = [
    {
      id: 'pilot-uniform',
      name: 'زي الطيار',
      description: 'زي طيار احترافي عالي الجودة مصمم للراحة والأناقة، يتميز بتفاصيل مميزة ونسيج فاخر.',
      price: 'من 599 ريال',
      image: '/images/Aviation_Uniforms.png',
      href: '/ar/shop/aviation-uniforms/pilot-uniform',
      features: ['نسيج فاخر', 'تفاصيل دقيقة', 'مظهر احترافي', 'مريح للرحلات الطويلة'],
      colors: ['أسود', 'أزرق داكن'],
      isBestseller: true
    },
    {
      id: 'flight-attendant-uniform',
      name: 'زي مضيف الطيران',
      description: 'زي مضيف طيران أنيق مصمم للراحة طوال الرحلة، مع تصميم عملي يسمح بحرية الحركة أثناء الخدمة.',
      price: 'من 449 ريال',
      image: '/images/Portrait_of_Flight_attendant.png',
      href: '/ar/shop/aviation-uniforms/flight-attendant-uniform',
      features: ['مقاوم للتجعد', 'سهل العناية', 'تصميم مريح', 'مظهر احترافي'],
      colors: ['أزرق داكن', 'أسود', 'أحمر', 'رمادي'],
      isNew: true
    },
    {
      id: 'ground-crew-uniform',
      name: 'زي طاقم الأرض',
      description: 'زي متين وعملي مصمم لطاقم الأرض، يجمع بين المتانة والراحة والوظائف العملية.',
      price: 'من 349 ريال',
      image: '/images/happy-ground-crew-worker-with-flag-at-the-airport-SBI-300817391.jpg',
      href: '/ar/shop/aviation-uniforms/ground-crew-uniform',
      features: ['متين', 'مقاوم للطقس', 'تصميم عملي', 'جيوب متعددة'],
      colors: ['أصفر/أسود', 'برتقالي/كحلي', 'أخضر', 'أزرق']
    },
    {
      id: 'aviation-security-uniform',
      name: 'زي أمن الطيران',
      description: 'زي رسمي وعملي مصمم لفرق أمن الطيران، يجمع بين المظهر السلطوي والراحة العملية.',
      price: 'من 399 ريال',
      image: '/images/african-american-security-staff-working-at-airport-SBI-338134198.jpg',
      href: '/ar/shop/aviation-uniforms/aviation-security-uniform',
      features: ['تصميم رسمي', 'مريح للمناوبات الطويلة', 'نسيج متين', 'جيوب وظيفية'],
      colors: ['أسود', 'كحلي', 'رمادي داكن']
    },
    {
      id: 'aircraft-maintenance-uniform',
      name: 'زي صيانة الطائرات',
      description: 'زي متخصص مصمم لفرق صيانة الطائرات، يوفر الحماية والراحة والوظائف العملية.',
      price: 'من 329 ريال',
      image: '/images/engineers-discussing-in-airplane-hangar-SBI-300973677.jpg',
      href: '/ar/shop/aviation-uniforms/aircraft-maintenance-uniform',
      features: ['مقاوم للزيت والوقود', 'متين', 'جيوب متعددة للأدوات', 'تصميم مريح'],
      colors: ['أزرق داكن', 'رمادي', 'أسود']
    },
    {
      id: 'airline-office-uniform',
      name: 'زي مكتب شركة الطيران',
      description: 'زي أنيق للعاملين في مكاتب شركات الطيران، مصمم للمحافظة على هوية العلامة التجارية مع توفير الراحة طوال اليوم.',
      price: 'من 379 ريال',
      image: '/images/middle-eastern-pilot-walking-at-airport-with-pilot-ca-SBI-313431393.jpg',
      href: '/ar/shop/aviation-uniforms/airline-office-uniform',
      features: ['تصميم أنيق', 'نسيج مريح', 'علامة تجارية موحدة', 'سهل العناية'],
      colors: ['كحلي', 'أسود', 'رمادي', 'أبيض']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'cabin-crew', name: 'طاقم الطائرة' },
    { id: 'pilots', name: 'الطيارين' },
    { id: 'ground-crew', name: 'طاقم الأرض' },
    { id: 'maintenance', name: 'الصيانة' },
    { id: 'security', name: 'الأمن' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <SectionHeading centered>أزياء الطيران</SectionHeading>
              <p className="mt-4 text-lg text-gray-600">
                أزياء طيران احترافية وأنيقة مصممة لمختلف الوظائف في قطاع الطيران.
                تقدم مجموعتنا للطيران جودة ممتازة ومظهر احترافي وراحة عملية.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/Aviation_Uniforms.png"
                  alt="مجموعة أزياء الطيران"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl mr-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">أزياء طيران متميزة</h2>
                    <p className="text-white/90 text-lg mb-6">
                      ارتقِ بشركة الطيران الخاصة بك مع أزيائنا عالية الجودة،
                      المصممة للأناقة والراحة والمظهر الاحترافي.
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
                    متخصصو أزياء الطيران لدينا جاهزون لمساعدتك في طلبات الجملة وخيارات التخصيص.
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
                <h2 className="text-2xl font-bold">مجموعة الطيران</h2>
                
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
            <h2 className="text-3xl font-bold mb-4">بحاجة إلى أزياء طيران مخصصة؟</h2>
            <p className="text-lg text-white/80 mb-8">
              نقدم خدمات التصميم المخصص وخيارات طلبات الجملة لشركات الطيران بمختلف الأحجام.
              اتصل بفريقنا لمناقشة متطلباتك الخاصة واحتياجات العلامة التجارية.
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