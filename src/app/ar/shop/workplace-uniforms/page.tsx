'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SearchBar from '@/components/shop/SearchBar';

export default function WorkplaceUniformsPageArabic() {
  const locale = 'ar';
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    priceRange: [0, 3000],
    colors: [],
    sizes: [],
    inStock: true
  });
  
  // Workplace uniforms products in Arabic
  const products = [
    {
      id: 'executive-suits',
      name: 'بدلات تنفيذية مصممة',
      price: 'من ١,٢٩٩ ريال',
      image: '/images/corporate-man-in-suit.jpg',
      rating: 4.9,
      reviews: 87,
      description: 'بدلات مصممة فاخرة للمدراء التنفيذيين الذين يتطلبون الأناقة والراحة والمظهر المهني المتميز.',
      href: '/ar/shop/workplace-uniforms/executive-suits'
    },
    {
      id: 'corporate-shirts',
      name: 'قمصان مؤسسية فاخرة',
      price: 'من ٢٤٩ ريال',
      image: '/images/corporate-shirts.jpg',
      rating: 4.7,
      reviews: 124,
      description: 'قمصان مؤسسية عالية الجودة بمجموعة متنوعة من الألوان، تتميز بقماش يمتص الرطوبة وخصائص سهلة العناية للارتداء المهني اليومي.',
      href: '/ar/shop/workplace-uniforms/corporate-shirts'
    },
    {
      id: 'office-blazers',
      name: 'سترات مكتبية احترافية',
      price: 'من ٨٩٩ ريال',
      image: '/images/office-blazers.jpg',
      rating: 4.6,
      reviews: 58,
      description: 'سترات أنيقة ومريحة للمهنيين في مجال الأعمال، متوفرة بأنماط متنوعة مناسبة للبيئات المؤسسية السعودية.',
      href: '/ar/shop/workplace-uniforms/office-blazers'
    },
    {
      id: 'executive-abayas',
      name: 'عباءات تنفيذية محتشمة',
      price: 'من ٧٩٩ ريال',
      image: '/images/executive-abayas.jpg',
      rating: 4.8,
      reviews: 92,
      description: 'عباءات مهنية مصممة خصيصًا للبيئات المؤسسية، تجمع بين الحشمة التقليدية وجماليات الأعمال المعاصرة.',
      href: '/ar/shop/workplace-uniforms/executive-abayas'
    },
    {
      id: 'formal-trousers',
      name: 'بناطيل رسمية للشركات',
      price: 'من ٣٩٩ ريال',
      image: '/images/formal-trousers.jpg',
      rating: 4.5,
      reviews: 77,
      description: 'بناطيل رسمية متينة مع قماش مرن مريح، مصممة لأيام طويلة في بيئة المكتب.',
      href: '/ar/shop/workplace-uniforms/formal-trousers'
    },
    {
      id: 'corporate-skirts',
      name: 'تنانير مهنية محتشمة',
      price: 'من ٣٤٩ ريال',
      image: '/images/corporate-skirts.jpg',
      rating: 4.6,
      reviews: 64,
      description: 'تنانير بطول مهني مصممة للبيئات المؤسسية، تحافظ على الحشمة مع توفير مظهر أنيق للأعمال.',
      href: '/ar/shop/workplace-uniforms/corporate-skirts'
    }
  ];

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'ملابس العمل', href: '#' }
  ];

  const toggleView = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  return (
    <>
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">ملابس العمل</h1>
          <p className="mt-3 text-lg text-neutral-700">
            ملابس مؤسسية احترافية للشركات السعودية، من البدلات التنفيذية إلى ملابس المكتب اليومية.
            تجمع ملابس العمل لدينا بين المظهر المهني والراحة لساعات العمل الطويلة.
          </p>
        </div>
        
        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="w-full sm:w-auto flex gap-2">
            <button 
              className={`p-2 rounded ${view === 'grid' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-500'}`}
              onClick={() => toggleView('grid')}
              aria-label="عرض الشبكة"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              className={`p-2 rounded ${view === 'list' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-500'}`}
              onClick={() => toggleView('list')}
              aria-label="عرض القائمة"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="flex items-center gap-1 px-3 py-2 border border-neutral-300 rounded bg-white text-neutral-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span>تصفية</span>
            </button>
          </div>
          <div className="w-full sm:w-64">
            <SearchBar placeholder="ابحث عن ملابس العمل..." locale={locale} />
          </div>
        </div>
        
        {/* Featured Product Banner */}
        <div className="mt-8 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 to-primary-800/40 z-10"></div>
          <Image 
            src="/images/corporate-team.jpg"
            alt="فريق مؤسسي يرتدي ملابس مهنية"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">حلول متكاملة لملابس الشركات</h2>
            <p className="text-white/90 max-w-lg mb-4">
              برامج شاملة لملابس العمل مصممة للشركات السعودية، 
              من الإدارة التنفيذية إلى موظفي المكاتب. أنشئ صورة مؤسسية متماسكة مع ملابسنا عالية الجودة.
            </p>
            <div>
              <Link href="/ar/contact">
                <Button variant="secondary">طلب استشارة مؤسسية</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Products Grid/List */}
        <div className="mt-12">
          <SectionHeading>مجموعة ملابس العمل</SectionHeading>
          
          {view === 'grid' ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      <Link href={product.href} className="text-neutral-900 hover:text-primary-700">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-primary-700 font-medium mt-1">{product.price}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-neutral-600 mr-2 text-sm">{product.rating} ({product.reviews} تقييم)</span>
                      </div>
                    </div>
                    <p className="mt-3 text-neutral-600 text-sm line-clamp-2">{product.description}</p>
                    <div className="mt-4">
                      <Link href={product.href}>
                        <Button variant="primary" fullWidth>عرض التفاصيل</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="flex flex-col sm:flex-row-reverse gap-6 p-4 border border-neutral-200 rounded-lg"
                >
                  <div className="sm:w-48 h-48 relative rounded-md overflow-hidden">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      <Link href={product.href} className="text-neutral-900 hover:text-primary-700">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-primary-700 font-medium mt-1">{product.price}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-neutral-600 mr-2 text-sm">{product.rating} ({product.reviews} تقييم)</span>
                      </div>
                    </div>
                    <p className="mt-3 text-neutral-600">{product.description}</p>
                    <div className="mt-4">
                      <Link href={product.href}>
                        <Button variant="outline">عرض التفاصيل</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Corporate Program Section */}
        <div className="mt-16 bg-neutral-50 p-6 md:p-8 rounded-lg">
          <SectionHeading>برامج ملابس الشركات</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image 
                src="/images/corporate-program.jpg" 
                alt="برنامج ملابس مؤسسية" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-neutral-700">
                تقدم برامج ملابس الشركات لدينا حلولًا شاملة للشركات السعودية التي تتطلع إلى إنشاء
                هوية مرئية مهنية ومتسقة. من القيادة التنفيذية إلى موظفي الخطوط الأمامية،
                نقوم بإنشاء مجموعات ملابس متماسكة تعكس قيم شركتك وهوية العلامة التجارية.
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-3">فوائد البرنامج</h3>
              <ul className="space-y-2">
                {[
                  'مظهر مهني متسق عبر جميع الأقسام',
                  'خصومات للطلبات الكبيرة للتنفيذ على مستوى الشركة',
                  'خيارات التخصيص والتطريز للعلامة التجارية',
                  'جدولة إعادة التزويد المنتظمة',
                  'خدمات القياس في الموقع لفريقك',
                  'حلول متخصصة للبيئات المؤسسية السعودية'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/ar/services/program-management">
                  <Button variant="primary">تعرف على برامجنا</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customization Options */}
        <div className="mt-16">
          <SectionHeading>خيارات تخصيص ملابس العمل</SectionHeading>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'الهوية المؤسسية',
                description: 'تطريز وطباعة مخصصة لشعارات الشركة والرموز التعريفية.',
                icon: '🏢'
              },
              {
                title: 'اختيار الأقمشة',
                description: 'اختر من بين الأقمشة الفاخرة المناسبة للمناخ السعودي وبيئات المكاتب.',
                icon: '🧵'
              },
              {
                title: 'مطابقة الألوان',
                description: 'مطابقة الملابس مع نظام ألوان شركتك لاتساق العلامة التجارية.',
                icon: '🎨'
              },
              {
                title: 'قياسات مخصصة',
                description: 'قياسات مصممة للحصول على مقاس مثالي لجميع أفراد الطاقم.',
                icon: '📏'
              }
            ].map((option, index) => (
              <div key={index} className="p-6 border border-neutral-200 rounded-lg">
                <div className="text-3xl mb-3">{option.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-neutral-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/ar/contact">
              <Button variant="secondary">طلب خيارات التخصيص</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
} 