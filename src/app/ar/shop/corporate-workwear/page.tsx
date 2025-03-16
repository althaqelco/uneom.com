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

export default function CorporateWorkwearPage() {
  const locale = 'ar';
  
  // Corporate workwear products
  const products: Product[] = [
    {
      id: 'executive-suit',
      name: 'بدلة تنفيذية',
      description: 'بدلة عمل أنيقة للمديرين التنفيذيين والمهنيين، مصممة من أقمشة فاخرة مع خيارات تخصيص متعددة.',
      price: 'من 899 ريال',
      image: '/images/corporate-workwear.jpg',
      href: '/ar/shop/corporate-workwear/executive-suit',
      features: ['قماش فاخر', 'قصة مثالية', 'مظهر احترافي', 'خيارات تخصيص'],
      colors: ['كحلي', 'رمادي', 'أسود', 'أزرق داكن'],
      isBestseller: true
    },
    {
      id: 'office-attire',
      name: 'زي مكتبي',
      description: 'زي مكتبي عملي وأنيق للموظفين، يجمع بين الراحة والمظهر الاحترافي المناسب لبيئة العمل.',
      price: 'من 549 ريال',
      image: '/images/corporate-workwear.jpg',
      href: '/ar/shop/corporate-workwear/office-attire',
      features: ['قماش مريح', 'سهل العناية', 'مظهر أنيق', 'متوفر بعدة ألوان'],
      colors: ['أبيض', 'أزرق فاتح', 'رمادي فاتح', 'بيج'],
      isNew: true
    },
    {
      id: 'corporate-shirts',
      name: 'قمصان شركات',
      description: 'قمصان رسمية عالية الجودة للشركات، متوفرة بخيارات متعددة للتطريز والطباعة لإضافة شعار الشركة.',
      price: 'من 199 ريال',
      image: '/images/corporate-workwear.jpg',
      href: '/ar/shop/corporate-workwear/corporate-shirts',
      features: ['قطن مصري', 'سهلة الكي', 'متينة', 'خيارات تطريز الشعار'],
      colors: ['أبيض', 'أزرق سماوي', 'أزرق داكن', 'رمادي']
    },
    {
      id: 'business-casual',
      name: 'ملابس عمل غير رسمية',
      description: 'مجموعة من الملابس غير الرسمية المناسبة لبيئات العمل ذات الطابع العصري، تجمع بين الأناقة والراحة.',
      price: 'من 349 ريال',
      image: '/images/corporate-workwear.jpg',
      href: '/ar/shop/corporate-workwear/business-casual',
      features: ['تصميم عصري', 'مريحة للارتداء طوال اليوم', 'سهلة المزج والتنسيق', 'مناسبة للعمل اليومي'],
      colors: ['متعددة']
    },
    {
      id: 'corporate-outerwear',
      name: 'ملابس خارجية للشركات',
      description: 'معاطف وسترات أنيقة مناسبة للاستخدام المهني، مع إمكانية إضافة شعار الشركة.',
      price: 'من 449 ريال',
      image: '/images/corporate-workwear.jpg',
      href: '/ar/shop/corporate-workwear/corporate-outerwear',
      features: ['مقاومة للماء', 'أنيقة', 'دافئة', 'مناسبة للتخصيص'],
      colors: ['أسود', 'كحلي', 'رمادي داكن', 'بني']
    },
    {
      id: 'corporate-accessories',
      name: 'إكسسوارات الشركات',
      description: 'مجموعة من الإكسسوارات المهنية بما في ذلك ربطات العنق والأوشحة وحاملات البطاقات التعريفية.',
      price: 'من 99 ريال',
      image: '/images/corporate-workwear.jpg',
      href: '/ar/shop/corporate-workwear/corporate-accessories',
      features: ['جودة عالية', 'تصميم أنيق', 'مناسبة للهدايا المؤسسية', 'خيارات تخصيص'],
      colors: ['متعددة']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'executive', name: 'تنفيذي' },
    { id: 'office', name: 'مكتبي' },
    { id: 'casual', name: 'غير رسمي' },
    { id: 'shirts', name: 'قمصان' },
    { id: 'accessories', name: 'إكسسوارات' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <SectionHeading centered>ملابس العمل للشركات</SectionHeading>
              <p className="mt-4 text-lg text-gray-600">
                ملابس عمل احترافية وأنيقة مصممة للشركات والمؤسسات.
                تقدم مجموعتنا من ملابس العمل للشركات مزيجًا مثاليًا من الأناقة والراحة والمتانة.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/corporate-workwear.jpg"
                  alt="مجموعة ملابس العمل للشركات"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl mr-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ارتقِ بهوية شركتك</h2>
                    <p className="text-white/90 text-lg mb-6">
                      ملابس عمل احترافية تعكس قيم شركتك وتعزز هويتها المؤسسية،
                      مصممة للراحة والأناقة والمتانة.
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
                    متخصصو ملابس الشركات لدينا جاهزون لمساعدتك في طلبات الجملة وخيارات التخصيص.
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
                <h2 className="text-2xl font-bold">مجموعة ملابس الشركات</h2>
                
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
            <h2 className="text-3xl font-bold mb-4">بحاجة إلى ملابس شركات مخصصة؟</h2>
            <p className="text-lg text-white/80 mb-8">
              نقدم خدمات التصميم المخصص وخيارات طلبات الجملة للشركات بمختلف الأحجام.
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