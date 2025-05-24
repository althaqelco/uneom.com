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

export default function MedicalScrubsClientPage() {
  const locale = 'ar';
  
  // Medical scrubs products in Arabic
  const products: Product[] = [
    {
      id: 'premium-scrubs-set',
      name: 'طقم ملابس طبية فاخرة',
      description: 'مجموعة ملابس طبية احترافية مصنوعة من نسيج مضاد للميكروبات، مصممة للراحة أثناء المناوبات الطويلة.',
      price: 'من 399 ريال',
      image: '/images/product-placeholder.jpg',
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
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/medical-scrubs/performance-lab-coat',
      features: ['تقنية ستين شيلد™', 'مرونة مريحة', 'تصميم احترافي', 'جيوب مقواة'],
      colors: ['أبيض', 'أزرق فاتح']
    },
    {
      id: 'comfort-fit-scrubs',
      name: 'ملابس طبية مريحة',
      description: 'ملابس طبية خفيفة وتسمح بالتنفس مصممة لمناخ المملكة العربية السعودية مع خصائص طاردة للرطوبة.',
      price: 'من 299 ريال',
      image: '/images/product-placeholder.jpg',
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
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/medical-scrubs/premium-surgical-gowns',
      features: ['مقاومة للسوائل', 'مادة خفيفة الوزن', 'إغلاق قابل للتعديل', 'خيارات معقمة متاحة'],
      colors: ['أزرق', 'أخضر']
    },
    {
      id: 'modern-nursing-uniforms',
      name: 'أزياء تمريض عصرية',
      description: 'أزياء تمريض معاصرة تجمع بين المظهر الاحترافي والتصميم الوظيفي.',
      price: 'من 329 ريال',
      image: '/images/product-placeholder.jpg',
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
      image: '/images/product-placeholder.jpg',
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

      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-placeholder.jpg"
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
                src="/images/default-placeholder.jpg"
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
                className="bg-white rounded-lg shadow border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      جديد
                    </div>
                  )}
                  {product.isBestseller && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                      الأكثر مبيعًا
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 text-right mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-sm text-right mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-primary-600 font-bold">{product.price}</div>
                    <Link 
                      href={product.href}
                      className="bg-primary-100 hover:bg-primary-200 text-primary-800 px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              href="/ar/shop/medical-scrubs/all" 
              variant="outline"
            >
              عرض جميع المنتجات الطبية
            </Button>
          </div>
        </Container>
      </div>
      
      {/* Call to Action */}
      <div className="bg-primary-800 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              حلول مخصصة لمؤسسات الرعاية الصحية
            </h2>
            <p className="text-xl text-white/80 mb-8">
              نقدم برامج زي موحد كاملة للمستشفيات والعيادات ومرافق الرعاية الصحية بجميع أحجامها. تواصل معنا لمناقشة احتياجات مؤسستك الخاصة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact?category=medical-scrubs" 
                variant="primary" 
                size="lg"
              >
                طلب استشارة مجانية
              </Button>
              <Button 
                href="/ar/quote" 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                طلب عرض سعر
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 