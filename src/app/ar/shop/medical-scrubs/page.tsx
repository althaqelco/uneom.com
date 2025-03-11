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

export default function MedicalScrubsPageArabic() {
  const locale = 'ar';
  
  // Medical scrubs products in Arabic
  const products: Product[] = [
    {
      id: 'premium-scrubs-set',
      name: 'طقم ملابس طبية فاخرة',
      description: 'مجموعة ملابس طبية احترافية مصنوعة من نسيج مضاد للميكروبات، مصممة للراحة أثناء المناوبات الطويلة.',
      price: 'من 399 ريال',
      image: '/images/shop/products/medical-scrubs-1.jpg',
      href: '/ar/shop/medical-scrubs/premium-scrubs-set',
      features: ['نسيج مضاد للميكروبات', 'طارد للرطوبة', 'مقاوم للتجعد', 'جيوب متعددة'],
      colors: ['أزرق فيروزي', 'كحلي', 'نبيذي', 'رمادي', 'أسود'],
      isNew: true
    },
    {
      id: 'performance-lab-coat',
      name: 'معطف مختبر عالي الأداء',
      description: 'معطف مختبر احترافي بتصميم عصري ووظيفي للمتخصصين في الرعاية الصحية.',
      price: 'من 349 ريال',
      image: '/images/shop/products/medical-scrubs-2.jpg',
      href: '/ar/shop/medical-scrubs/performance-lab-coat',
      features: ['تقنية ستين شيلد™', 'مرونة مريحة', 'تصميم احترافي', 'جيوب مقواة'],
      colors: ['أبيض', 'أزرق فاتح']
    },
    {
      id: 'comfort-fit-scrubs',
      name: 'ملابس طبية مريحة',
      description: 'ملابس طبية خفيفة وتسمح بالتنفس مصممة لمناخ المملكة العربية السعودية مع خصائص طاردة للرطوبة.',
      price: 'من 299 ريال',
      image: '/images/shop/products/medical-scrubs-3.jpg',
      href: '/ar/shop/medical-scrubs/comfort-fit-scrubs',
      features: ['قماش كلايمت كنترول™', 'ملائمة مريحة', 'مقاومة للبهتان', 'سهلة العناية'],
      colors: ['أزرق فاتح', 'أزرق سماوي', 'أخضر زيتوني', 'أزرق ملكي', 'عنابي'],
      isBestseller: true
    },
    {
      id: 'premium-surgical-gowns',
      name: 'عباءات جراحية فاخرة',
      description: 'عباءات جراحية عالية الأداء مع حماية مقاومة للسوائل وملائمة مريحة.',
      price: 'من 279 ريال',
      image: '/images/shop/products/medical-scrubs-4.jpg',
      href: '/ar/shop/medical-scrubs/premium-surgical-gowns',
      features: ['مقاومة للسوائل', 'مادة خفيفة الوزن', 'إغلاق قابل للتعديل', 'خيارات معقمة متاحة'],
      colors: ['أزرق', 'أخضر']
    },
    {
      id: 'modern-nursing-uniforms',
      name: 'أزياء تمريض عصرية',
      description: 'أزياء تمريض معاصرة تجمع بين المظهر الاحترافي والتصميم الوظيفي.',
      price: 'من 329 ريال',
      image: '/images/shop/products/medical-scrubs-5.jpg',
      href: '/ar/shop/medical-scrubs/modern-nursing-uniforms',
      features: ['مظهر احترافي', 'ألواح مرنة', 'تكوين جيوب متعدد', 'سهلة التنظيف'],
      colors: ['أبيض', 'كحلي', 'أسود', 'نبيذي'],
      isNew: true
    },
    {
      id: 'clinical-uniform-set',
      name: 'طقم أزياء عيادات طبية',
      description: 'طقم أزياء كامل مصمم للعيادات والمرافق العلاجية مع خيارات تخصيص العلامة التجارية.',
      price: 'من 459 ريال',
      image: '/images/shop/products/medical-scrubs-6.jpg',
      href: '/ar/shop/medical-scrubs/clinical-uniform-set',
      features: ['طقم كامل', 'تخصيص العلامة التجارية', 'بنية متينة', 'مظهر احترافي'],
      colors: ['خيارات متعددة متاحة'],
      isBestseller: true
    }
  ];
  
  // Category features in Arabic
  const categoryFeatures = [
    {
      title: 'حماية مضادة للميكروبات',
      description: 'تتميز أزياؤنا الطبية بتكنولوجيا مضادة للميكروبات متطورة تساعد في تقليل انتشار البكتيريا ومسببات الأمراض.',
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'أقمشة مناسبة للمناخ',
      description: 'أقمشة مصممة خصيصًا للحفاظ على الراحة في مناخ المملكة العربية السعودية الحار مع الحفاظ على المظهر الاحترافي.',
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: 'خيارات التخصيص',
      description: 'خيارات سهلة للعلامة التجارية بما في ذلك شعارات المستشفى وألوان الأقسام والتطريز بالأسماء لمظهر احترافي موحد.',
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: 'خصومات للطلبات بالجملة',
      description: 'أسعار خاصة لمرافق الرعاية الصحية التي تطلب بكميات كبيرة، مع إدارة حسابات مخصصة للمستشفيات الكبيرة.',
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shop/categories/medical-scrubs-hero.jpg"
            alt="الأزياء والملابس الطبية"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-900/60"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-6 text-right">
              أزياء طبية احترافية
            </h1>
            <p className="text-xl text-white/90 mb-8 text-right">
              ملابس طبية وأزياء عالية الجودة مصممة للمتخصصين في الرعاية الصحية في المملكة العربية السعودية.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button 
                href="#products" 
                variant="primary" 
                size="lg"
              >
                عرض المنتجات
              </Button>
              <Button 
                href="/ar/contact?category=medical-scrubs" 
                variant="secondary" 
                size="lg"
              >
                طلب عرض سعر للمستشفيات
              </Button>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Category Introduction */}
      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading as="h2" className="text-right">
                أزياء طبية لمرافق الرعاية الصحية السعودية
              </SectionHeading>
              <p className="text-lg text-neutral-700 mb-4 text-right">
                توفر يونيوم أزياء طبية فاخرة مصممة خصيصًا لاحتياجات مرافق الرعاية الصحية في المملكة العربية السعودية. تجمع ملابسنا الطبية بين المظهر الاحترافي وعناصر التصميم الوظيفية التي تعزز الراحة أثناء المناوبات الطويلة.
              </p>
              <p className="text-lg text-neutral-700 mb-6 text-right">
                جميع أزياؤنا الطبية مصنوعة من أقمشة مضادة للميكروبات تساعد في الحفاظ على معايير النظافة مع توفير الراحة في مناخ المملكة العربية السعودية. نقدم خيارات تخصيص بما في ذلك علامة المستشفى التجارية، وترميز الأقسام بالألوان، والمقاسات لجميع أفراد الطاقم.
              </p>
              <div className="flex justify-end">
                <Button 
                  href="/ar/contact?category=medical-scrubs" 
                  variant="primary"
                >
                  تواصل مع متخصص الرعاية الصحية
                </Button>
              </div>
            </div>
            <div className="relative h-96 order-1 md:order-2">
              <Image
                src="/images/shop/categories/medical-scrubs-intro.jpg"
                alt="أزياء طبية احترافية"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </div>
      
      {/* Category Features */}
      <div className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered>
            مزايا الأزياء الطبية من يونيوم
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {categoryFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-right">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      
      {/* Products Section */}
      <div id="products" className="py-16 bg-white">
        <Container>
          <SectionHeading centered>
            مجموعة الأزياء الطبية لدينا
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-200"
              >
                <Link href={product.href} className="block relative">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
                        جديد
                      </div>
                    )}
                    {product.isBestseller && (
                      <div className="absolute top-4 right-4 bg-amber-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
                        الأكثر مبيعًا
                      </div>
                    )}
                  </div>
                </Link>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 text-right">
                    <Link 
                      href={product.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2 text-right">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-neutral-500 mb-2 text-right">الألوان المتاحة:</div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {product.colors?.map((color, colorIndex) => (
                        <span 
                          key={colorIndex}
                          className="inline-block bg-neutral-100 text-neutral-700 text-xs rounded-full py-1 px-2"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      href={product.href}
                      className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                    >
                      عرض التفاصيل
                      <svg 
                        className="mr-2 h-5 w-5 transform rotate-180"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <span className="font-semibold text-lg">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              href="/ar/contact?category=medical-scrubs"
              variant="primary"
              size="lg"
            >
              طلب حل مخصص للمستشفيات
            </Button>
          </div>
        </Container>
      </div>
      
      {/* Hospital Ordering Section */}
      <div className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-right">طلبات المستشفيات والعيادات بالجملة</h2>
              <p className="text-lg mb-6 opacity-90 text-right">
                نحن متخصصون في تجهيز مرافق الرعاية الصحية بالكامل بأزياء طبية متناسقة وعالية الجودة. تتضمن عملية الطلب بالجملة لدينا:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start justify-end">
                  <span>خدمة قياس مجانية في الموقع للموظفين</span>
                  <svg className="w-6 h-6 text-white ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </li>
                <li className="flex items-start justify-end">
                  <span>ترميز الأقسام بالألوان وخيارات التحديد</span>
                  <svg className="w-6 h-6 text-white ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </li>
                <li className="flex items-start justify-end">
                  <span>تطريز الشعار ودمج العلامة التجارية للمستشفى</span>
                  <svg className="w-6 h-6 text-white ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </li>
                <li className="flex items-start justify-end">
                  <span>إدارة المخزون وبرامج الاستبدال</span>
                  <svg className="w-6 h-6 text-white ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </li>
                <li className="flex items-start justify-end">
                  <span>التسعير على أساس الحجم مع شروط دفع مرنة</span>
                  <svg className="w-6 h-6 text-white ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </li>
              </ul>
              <div className="flex justify-end">
                <Button
                  href="/ar/contact?category=medical-scrubs&bulk=true"
                  variant="secondary"
                  size="lg"
                >
                  جدولة استشارة للمستشفى
                </Button>
              </div>
            </div>
            <div className="relative h-96 order-1 md:order-2">
              <Image
                src="/images/shop/categories/hospital-team.jpg"
                alt="فريق المستشفى في أزياء يونيوم"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </div>
      
      {/* Testimonial */}
      <div className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-primary-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-neutral-800 mb-5">
                "لقد أدت شراكتنا مع يونيوم لتوفير الأزياء الطبية لمستشفانا إلى تحسين كبير في رضا الموظفين وتصور المرضى. تعمل الأقمشة المضادة للميكروبات بشكل استثنائي في بيئتنا المزدحمة، وسمحت لنا خيارات التخصيص بترميز الأقسام بشكل فعال."
              </p>
              <cite className="not-italic">
                <div className="font-semibold text-neutral-900">د. عبدالله المحمود</div>
                <div className="text-neutral-500 text-sm mt-1">المدير الطبي، مستشفى الرعاية الملكية، الرياض</div>
              </cite>
            </blockquote>
          </div>
        </Container>
      </div>
    </>
  );
} 