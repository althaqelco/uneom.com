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
  features?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function CorporateAttireClientPage() {
  const locale = 'ar';
  
  // Corporate attire products
  const products: Product[] = [
    {
      id: 'business-suits',
      name: 'بدلات رسمية',
      description: 'بدلات رسمية فاخرة للشركات مصنوعة من أجود أنواع الأقمشة، مناسبة للمدراء والتنفيذيين.',
      price: 'من 899 ريال',
      image: '/images/products/corporate-suit-executive.jpg',
      href: '/ar/shop/corporate-attire/business-suits',
      features: ['تصاميم أنيقة', 'جودة عالية', 'خيارات متنوعة', 'تكمل الزي الرسمي'],
      colors: ['متعددة']
    }
  ];
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'جميع الفئات' },
    { id: 'mens', name: 'رجالي' },
    { id: 'womens', name: 'نسائي' },
    { id: 'executive', name: 'تنفيذي' },
    { id: 'office', name: 'مكتبي' },
    { id: 'accessories', name: 'إكسسوارات' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">الزي الموحد للشركات | أزياء مكتبية رسمية وبدلات عمل أنيقة | يونيوم المملكة العربية السعودية</h1>
              <p className="mt-4 text-lg text-gray-600">
                أزياء شركات عالية الجودة مصممة لتعزيز الهوية المؤسسية وتوفير مظهر احترافي متناسق.
                توفر مجموعتنا من الأزياء المكتبية والبدلات الرسمية الراحة والأناقة لموظفي الشركات والمؤسسات السعودية.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/products/corporate-suit-executive.jpg"
                  alt="مجموعة أزياء الشركات"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl mr-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ارتقِ بهوية شركتك</h2>
                    <p className="text-white/90 text-lg mb-6">
                      أزياء احترافية تعكس قيم مؤسستك وتعزز روح الفريق بين الموظفين،
                      مصممة لتلبية احتياجات بيئة العمل السعودية.
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
                <h3 className="font-bold text-lg mb-4">الفئات</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button className="text-gray-700 hover:text-primary-600 transition w-full text-right py-1">
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">خدمة التخصيص</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    نقدم خدمة تصميم وتفصيل أزياء شركات مخصصة تتوافق مع هوية علامتك التجارية.
                  </p>
                  <Button href="/ar/contact" fullWidth variant="outline">
                    استفسر الآن
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">مجموعة أزياء الشركات</h2>
                
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
      
      {/* Customization Section */}
      <section className="bg-gray-100 py-16">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <Image 
                    src="/images/products/corporate-suit-executive.jpg"
                    alt="خدمة تخصيص أزياء الشركات"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <SectionHeading>خدمة تخصيص أزياء الشركات</SectionHeading>
              <p className="mt-4 text-gray-600">
                نقدم في يونيوم خدمة متكاملة لتصميم وتنفيذ أزياء شركات مخصصة تعكس هوية علامتك التجارية وتعزز صورة مؤسستك.
                خدماتنا تشمل:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>تصميم مخصص يتناسب مع هوية علامتك التجارية وقيم شركتك</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>خيارات متعددة من الأقمشة عالية الجودة المناسبة للمناخ السعودي</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>إضافة شعار شركتك وألوانها المؤسسية على جميع القطع</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>تطوير سياسة للزي الموحد تلبي احتياجات شركتك وثقافتها المؤسسية</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>إدارة متكاملة للمقاسات وضمان التناسب المثالي لجميع الموظفين</p>
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/ar/contact" variant="primary">
                  احصل على استشارة مجانية
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>لماذا تختار أزياء الشركات من يونيوم؟</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">جودة استثنائية</h3>
              <p className="text-gray-600 text-sm">
                نستخدم أفضل الأقمشة والخامات لضمان الراحة والمتانة والمظهر الأنيق لفترات طويلة.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">تخصيص كامل</h3>
              <p className="text-gray-600 text-sm">
                نوفر خدمات تصميم وتنفيذ أزياء مخصصة تعكس هوية شركتك وتميزها عن المنافسين.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">خدمة متكاملة</h3>
              <p className="text-gray-600 text-sm">
                من التصميم إلى التسليم، نقدم خدمة شاملة تتضمن القياسات، التوصيل، والصيانة المستمرة.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">توريد مستمر</h3>
              <p className="text-gray-600 text-sm">
                نضمن توفير احتياجات شركتك المستمرة من الزي الموحد بنفس الجودة والمواصفات دائمًا.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">تعزيز هوية شركتك من خلال الزي الموحد</h2>
            <p className="text-lg text-white/80 mb-8">
              دعنا نساعدك في تطوير زي موحد يعزز ثقافة شركتك ويعكس قيمها المؤسسية.
              تواصل معنا اليوم للحصول على استشارة مجانية ومناقشة احتياجات شركتك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/ar/quote" variant="primary">
                طلب عرض سعر
              </Button>
              <Button href="/ar/contact" variant="secondary">
                تحدث مع مستشار
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 