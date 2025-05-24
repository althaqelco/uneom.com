'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function IndustrialUniformsClientPage() {
  const locale = 'ar';
  
  // فئات المنتجات الصناعية
  const categories = [
    {
      id: 'industrial-coverall',
      name: 'بدلة العمل الصناعية',
      href: '/ar/shop/industrial-uniforms/industrial-coverall',
      image: '/images/default-placeholder.jpg',
      description: 'بدلات عمل صناعية عالية المتانة مصممة للبيئات الصناعية الشاقة، مع مميزات للسلامة والراحة طوال فترات العمل الطويلة.'
    },
    {
      id: 'safety-vest',
      name: 'سترة السلامة عالية الوضوح',
      href: '/ar/shop/industrial-uniforms/safety-vest',
      image: '/images/default-placeholder.jpg',
      description: 'سترات سلامة بألوان عاكسة مصممة للاستخدام في بيئات العمل منخفضة الإضاءة، مع أشرطة عاكسة وميزات سلامة متطورة.'
    },
    {
      id: 'work-pants',
      name: 'بنطلون العمل الصناعي',
      href: '/ar/shop/industrial-uniforms/work-pants',
      image: '/images/default-placeholder.jpg',
      description: 'بناطيل عمل قوية مصنوعة من نسيج متين ومقاوم للتمزق، مع جيوب متعددة الاستخدامات لتخزين المعدات والأدوات.'
    },
    {
      id: 'industrial-jacket',
      name: 'جاكيت العمل الصناعي',
      href: '/ar/shop/industrial-uniforms/industrial-jacket',
      image: '/images/default-placeholder.jpg',
      description: 'جاكيت عمل شتوي مبطن مصمم لتوفير الدفء والحماية في البيئات الصناعية الباردة، مع ميزات مقاومة للماء والرياح.'
    }
  ];
  
  // القطاعات الصناعية
  const sectors = [
    {
      id: 'oil-gas',
      name: 'قطاع النفط والغاز',
      description: 'ملابس عمل متخصصة تلبي أعلى معايير السلامة لبيئات النفط والغاز، مصممة لتحمل الظروف القاسية والتعرض للمواد الكيميائية.'
    },
    {
      id: 'construction',
      name: 'قطاع البناء والإنشاءات',
      description: 'زي عمل متين ومريح للعاملين في مواقع البناء، يوفر الحماية ويتوافق مع معايير السلامة المهنية في المملكة العربية السعودية.'
    },
    {
      id: 'manufacturing',
      name: 'قطاع التصنيع',
      description: 'ملابس عمل مصممة خصيصًا لبيئات المصانع المختلفة، توفر حماية متكاملة للعاملين مع مرونة حركة مثالية أثناء الإنتاج.'
    },
    {
      id: 'warehousing',
      name: 'قطاع المستودعات والتخزين',
      description: 'أزياء عملية للعاملين في المستودعات ومراكز التوزيع، مريحة ومتينة مع ميزات تحسن الإنتاجية وتضمن السلامة.'
    }
  ];
  
  // ميزات الملابس الصناعية
  const features = [
    {
      id: 'safety',
      name: 'معايير السلامة العالية',
      description: 'تصميمات متوافقة مع متطلبات السلامة المهنية السعودية والعالمية، مع ميزات مثل الأشرطة العاكسة، ومقاومة اللهب، والحماية ضد المخاطر المختلفة.'
    },
    {
      id: 'durability',
      name: 'متانة استثنائية',
      description: 'أقمشة عالية الجودة وخياطة معززة في مناطق الضغط لضمان مقاومة التآكل والتمزق، مع عمر افتراضي طويل حتى مع الاستخدام المكثف.'
    },
    {
      id: 'comfort',
      name: 'راحة متكاملة',
      description: 'تصميمات مدروسة لتوفير أقصى درجات الراحة أثناء فترات العمل الطويلة، مع تقنيات التهوية ومرونة الحركة المناسبة للبيئة السعودية.'
    },
    {
      id: 'customization',
      name: 'خيارات التخصيص',
      description: 'إمكانية إضافة شعار الشركة والتطريز والعلامات المخصصة، مع اختيار الألوان والمقاسات المناسبة لهوية مؤسستك.'
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
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/default-placeholder.jpg"
            alt="الملابس الصناعية والزي الموحد للقطاعات الصناعية"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <Container className="relative z-10 py-20 md:py-28">
          <div className="max-w-3xl text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ملابس وأزياء العمل الصناعية للشركات في المملكة العربية السعودية | زي قطاعات النفط والغاز والمصانع والإنشاءات</h1>
            <p className="text-xl mb-8">
              أزياء عمل متينة ومريحة للقطاعات الصناعية في المملكة العربية السعودية، مصممة خصيصًا لتلبية متطلبات السلامة والأداء في البيئات الصناعية المختلفة.
            </p>
            <div className="flex gap-4 justify-end">
              <Button 
                href="/ar/contact" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                طلب استشارة
              </Button>
              <Button 
                href="#industrial-products" 
                variant="primary"
              >
                استعراض المنتجات
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Intro Section */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-right">
              <SectionHeading>أزياء موحدة للقطاعات الصناعية</SectionHeading>
              <div className="prose prose-lg max-w-none text-right">
                <p>
                  تقدم يونيوم مجموعة متكاملة من ملابس العمل الصناعية المصممة خصيصًا للشركات السعودية العاملة في مختلف القطاعات الصناعية. تجمع منتجاتنا بين الالتزام بأعلى معايير السلامة المهنية والراحة المثالية للعاملين في الظروف المختلفة.
                </p>
                <p>
                  سواء كنت تبحث عن بدلات عمل كاملة، سترات سلامة، ملابس مقاومة للحرارة، أو أي نوع آخر من الأزياء الصناعية المتخصصة، فإن منتجاتنا مصممة لتلبية المتطلبات الخاصة لقطاعك الصناعي مع مراعاة ظروف العمل في المملكة العربية السعودية.
                </p>
                <p>
                  نفخر بتقديم حلول متكاملة تشمل التصميم المخصص، والتوريد بكميات كبيرة، وخدمات تطريز الشعارات، مع ضمان الامتثال لمعايير السلامة المحلية والعالمية.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  href="/ar/contact?industry=industrial" 
                  variant="primary"
                >
                  استفسر عن برنامج الزي الموحد الصناعي
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="عامل يرتدي ملابس صناعية في بيئة عمل"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Products Section */}
      <section id="industrial-products" className="py-12 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading centered>منتجات الملابس الصناعية</SectionHeading>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            اكتشف مجموعتنا المتميزة من الأزياء الصناعية المصممة لتوفير الحماية والراحة والمتانة في مختلف بيئات العمل الصناعية. جميع منتجاتنا تلبي أعلى معايير السلامة والجودة.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-right">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{category.description}</p>
                    <div className="flex justify-end">
                      <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                        عرض التفاصيل
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Industrial Sectors */}
      <section className="py-12 md:py-20 bg-white">
        <Container>
          <SectionHeading centered>حلول مخصصة لمختلف القطاعات الصناعية</SectionHeading>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            نقدم ملابس وأزياء موحدة مصممة خصيصًا لتلبية احتياجات كل قطاع صناعي، مع مراعاة متطلبات السلامة الخاصة وبيئة العمل المحددة.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {sectors.map((sector) => (
              <div key={sector.id} className="text-right">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.name}</h3>
                <p className="text-gray-700">{sector.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <Container>
          <SectionHeading centered>مميزات ملابسنا الصناعية</SectionHeading>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            صممت أزياؤنا الصناعية لتقديم أفضل تجربة ممكنة للعاملين، مع التركيز على الجودة والمتانة والراحة والامتثال لمعايير السلامة.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-5 text-right">
                <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتجهيز فريق عملك بأفضل الملابس الصناعية؟</h2>
            <p className="text-xl mb-8 text-white/80">
              تواصل معنا اليوم لمناقشة احتياجات مؤسستك الصناعية واستكشاف مجموعتنا الكاملة من الحلول المخصصة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/quote" 
                variant="primary"
              >
                طلب عرض أسعار
              </Button>
              <Button 
                href="/ar/contact" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary-700"
              >
                تحدث مع مستشار
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 