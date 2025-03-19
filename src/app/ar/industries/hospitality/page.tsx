'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

// تعريف أنواع البيانات
interface ProductFeature {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
  features?: string[];
}

interface RelatedItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

// Componente personalizado para mostrar productos - not needed as IndustryPageLayout handles rendering
const ProductsSection = ({ products, isRtl }: { products: ProductFeature[], isRtl: boolean }) => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{isRtl ? "منتجات اليونيفورم لدينا" : "Our Uniform Products"}</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            {isRtl ? "مجموعة متكاملة من يونيفورم الضيافة بمعايير عالمية وتصاميم عصرية" : "Complete collection of hospitality uniforms with international standards and modern designs"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  <Link href={product.href} className="hover:text-primary-600 transition-colors duration-300">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-neutral-600 mb-4 flex-grow">
                  {product.description}
                </p>
                
                {product.features && product.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">
                      {isRtl ? "المميزات:" : "Features:"}
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {product.features.map((feature: string, idx: number) => (
                        <li key={idx} className="text-sm text-neutral-600 flex items-center">
                          <span className="text-primary-500 mr-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Link href={product.href} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  {isRtl ? 'استكشاف المنتج' : 'Explore Product'}
                  {isRtl ? (
                    <svg className="mr-2 h-5 w-5 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Componente personalizado para mostrar contenido relacionado - not needed as IndustryPageLayout handles rendering
const RelatedContentSection = ({ content, isRtl }: { content: RelatedItem[], isRtl: boolean }) => {
  return (
    <section className="py-16 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{isRtl ? "محتوى ذو صلة" : "Related Content"}</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            {isRtl ? "تعرف على المزيد حول يونيفورم الضيافة من خلال مقالاتنا المتخصصة" : "Learn more about hospitality uniforms through our specialized articles"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.map((item: RelatedItem, index: number) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <Link href={item.link} className="block relative">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors duration-300 flex items-center">
                    {isRtl ? "اقرأ المزيد" : "Read More"}
                    {isRtl ? (
                      <svg className="mr-1 h-4 w-4 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const Page = () => {
  const isRtl = true;

  // بيانات المنتجات - these are mapped directly to the industryData products property
  const products: ProductFeature[] = [
    {
      id: '1',
      name: 'يونيفورم استقبال الفنادق الفاخر',
      description: 'يونيفورم احترافي مصمم خصيصًا لموظفي الاستقبال في الفنادق الفاخرة، يجمع بين الأناقة والعملية ويعكس فخامة المنشأة السياحية. مناسب للفنادق من فئة الخمس نجوم والمنتجعات الراقية.',
      image: '/images/hospitality/hospitality_uniform_receiption_hotel.jpg',
      href: '/ar/shop/hospitality-attire/reception-staff-uniform',
      features: ['قماش مقاوم للتجاعيد', 'تناسب مريح', 'متوفر بألوان متعددة', 'مقاوم للبقع', 'تطريز شعار الفندق', 'استايل عصري', 'خيارات أزرار ذهبية أو فضية']
    },
    {
      id: '2',
      name: 'يونيفورم الشيف التنفيذي الفاخر',
      description: 'تصميم احترافي عالي الجودة للشيفات والطهاة التنفيذيين في المطاعم والفنادق الفاخرة. مصنوع من أفضل أنواع القطن المقاوم للحرارة والبقع، ويتميز بالراحة خلال ساعات العمل الطويلة.',
      image: '/images/hospitality/hospitality_uniform_chef.jpg',
      href: '/ar/shop/culinary-uniforms/executive-chef-coat',
      features: ['قطن مصري عالي الجودة', 'أزرار مزدوجة للأمان', 'مقاوم للحرارة والبقع', 'تهوية ممتازة', 'سهل التنظيف', 'متوفر بعدة ألوان', 'تطريز اسم الشيف']
    },
    {
      id: '3',
      name: 'يونيفورم خدمة الغرف الاحترافي',
      description: 'يونيفورم مريح وعملي لفريق خدمة الغرف، يعكس مستوى الخدمة الراقية مع مراعاة سهولة الحركة. مصمم لتحمل طبيعة العمل الشاقة مع الحفاظ على المظهر الأنيق طوال اليوم العملي.',
      image: '/images/hospitality/housekeeping-uniform.jpg',
      href: '/ar/shop/hospitality-attire/housekeeping-uniform',
      features: ['سهل التنظيف', 'متين ويدوم طويلًا', 'جيوب عملية', 'مريح للحركة', 'مقاوم للبقع', 'أقمشة متنفسة', 'تصميم ممتاز للراحة أثناء العمل']
    },
    {
      id: '4',
      name: 'يونيفورم المطاعم والمقاهي الأنيق',
      description: 'تشكيلة متكاملة من يونيفورم الخدمة للمطاعم والمقاهي بتصاميم عصرية وخامات عالية الجودة. يشمل يونيفورم النادل، المضيف، والباريستا بتصاميم تناسب مختلف أنواع المطاعم.',
      image: '/images/hospitality/hospitality_uniform.jpg',
      href: '/ar/shop/hospitality-attire/restaurant-staff-uniform',
      features: ['مقاوم للبقع', 'سهل العناية', 'تصميم أنيق', 'خيارات متنوعة', 'مريول احترافي', 'قمصان وبناطيل متناسقة', 'ربطات عنق وأوشحة']
    },
    {
      id: '5',
      name: 'يونيفورم الطهاة والمطبخ المتكامل',
      description: 'يونيفورم احترافي للطهاة وطاقم المطبخ مصمم وفق أعلى معايير السلامة والجودة العالمية. يشمل جاكيت الشيف، بنطلون، غطاء الرأس، والمريول بخامات تتحمل بيئة المطبخ الحارة.',
      image: '/images/hospitality/chef-uniform.jpg',
      href: '/ar/shop/culinary-uniforms/executive-chef-coat',
      features: ['مقاوم للحرارة', 'قطن 100%', 'سهل التنظيف', 'متوفر بمقاسات متعددة', 'مقاوم للزيوت', 'تصميم مريح للحركة', 'أزرار مزدوجة للأمان']
    },
    {
      id: '6',
      name: 'يونيفورم النوادي الصحية والسبا الفاخر',
      description: 'يونيفورم مصمم خصيصًا للنوادي الصحية والسبا، يجمع بين الراحة والأناقة مع خامات صديقة للبشرة. مثالي للمعالجين وموظفي الاستقبال والمدربين في المنتجعات الصحية الراقية.',
      image: '/images/hospitality/spa-uniform.jpg',
      href: '/ar/shop/hospitality-attire/luxury-hotel-uniform',
      features: ['قطن عضوي', 'مريح للبشرة', 'سهل الحركة', 'عصري وأنيق', 'أقمشة ناعمة', 'ألوان هادئة', 'مقاوم للزيوت العطرية']
    },
    {
      id: '7',
      name: 'يونيفورم المنتجعات السياحية المميز',
      description: 'تشكيلة خاصة من يونيفورم المنتجعات السياحية بتصاميم تعكس الطابع الترفيهي مع الحفاظ على المهنية. خيارات متنوعة تناسب العاملين في مناطق البحر والمسابح والمرافق الترفيهية.',
      image: '/images/hospitality/resort-uniform.jpg',
      href: '/ar/shop/hospitality-attire/resort-staff-attire',
      features: ['مقاوم للماء', 'خامات طبيعية', 'ألوان زاهية', 'سهل التنظيف', 'حماية من أشعة الشمس', 'تجفيف سريع', 'خفيف الوزن للبيئات الحارة']
    },
    {
      id: '8',
      name: 'يونيفورم موظفي الكونسيرج الرسمي',
      description: 'يونيفورم أنيق ورسمي لموظفي الكونسيرج والخدمات في الفنادق الفاخرة، مصمم ليعكس رقي وتميز الخدمة المقدمة للنزلاء. تصميم كلاسيكي فاخر بلمسات عصرية.',
      image: '/images/hospitality/concierge-uniform.jpg',
      href: '/ar/shop/hospitality-attire/concierge-uniform',
      features: ['قماش فاخر', 'بدلة رسمية كاملة', 'شارات مخصصة', 'ألوان كلاسيكية', 'قبعة تقليدية', 'أزرار معدنية', 'جودة عالية للاستخدام اليومي']
    },
    {
      id: '9',
      name: 'يونيفورم قاعات المؤتمرات والاحتفالات',
      description: 'يونيفورم خاص بطاقم قاعات المؤتمرات والاحتفالات والمناسبات في الفنادق والمنتجعات، بتصميم أنيق ورسمي يناسب طبيعة الفعاليات الرسمية والاحتفالات الكبرى.',
      image: '/images/hospitality/event-staff-uniform.jpg',
      href: '/ar/shop/hospitality-attire/premium-hotel-uniforms',
      features: ['مظهر احترافي', 'سهولة الحركة', 'أقمشة مريحة', 'تناسق مع ديكور القاعات', 'متوفر بلونين', 'مقاومة للاتساخ', 'خيارات للجنسين']
    }
  ];

  // المحتوى ذو الصلة - these are mapped directly to the industryData relatedContent property
  const relatedContent: RelatedItem[] = [
    {
      title: 'كيفية اختيار يونيفورم الضيافة المناسب لفندقك',
      description: 'دليل شامل لاختيار اليونيفورم المناسب للفنادق بناءً على معايير الجودة والراحة والمظهر الاحترافي ونوع الفندق وطبيعة خدماته.',
      image: '/images/hospitality/blog-1.jpg',
      link: '/ar/blog/choosing-hospitality-uniforms'
    },
    {
      title: 'أحدث اتجاهات يونيفورم المطاعم لعام 2023',
      description: 'تعرف على أحدث صيحات يونيفورم المطاعم والمقاهي وكيفية مواكبة التصاميم العصرية التي تجمع بين الأناقة والعملية.',
      image: '/images/hospitality/blog-2.jpg',
      link: '/ar/blog/restaurant-uniform-trends'
    },
    {
      title: 'دور اليونيفورم في تعزيز هوية العلامة التجارية للفنادق',
      description: 'كيف يساهم اليونيفورم المميز في تعزيز الهوية البصرية للفنادق وترسيخ صورتها في أذهان العملاء وتحسين التجربة الكلية للضيوف.',
      image: '/images/hospitality/blog-3.jpg',
      link: '/ar/blog/uniform-brand-identity'
    },
    {
      title: 'أفضل الأقمشة المستخدمة في يونيفورم الضيافة والفنادق',
      description: 'استعراض لأجود أنواع الأقمشة المستخدمة في صناعة يونيفورم الضيافة، ومميزات كل منها وملاءمتها لبيئات العمل المختلفة في قطاع الفنادق.',
      image: '/images/hospitality/blog-4.jpg',
      link: '/ar/blog/hospitality-uniform-fabrics'
    },
    {
      title: 'إرشادات العناية بيونيفورم الضيافة لإطالة عمره الافتراضي',
      description: 'نصائح عملية للحفاظ على جودة ومظهر يونيفورم الفنادق والمطاعم مع الاستخدام اليومي والغسيل المتكرر في بيئات العمل المختلفة.',
      image: '/images/hospitality/blog-5.jpg',
      link: '/ar/blog/hospitality-uniform-care'
    },
    {
      title: 'كيف تختار يونيفورم يناسب الطابع الثقافي لمطعمك أو فندقك',
      description: 'دليل متكامل لاختيار تصاميم يونيفورم تعكس الطابع الثقافي والتراثي للمطاعم والفنادق ذات الطابع المحلي أو العالمي المميز.',
      image: '/images/hospitality/blog-6.jpg',
      link: '/ar/blog/cultural-hospitality-uniforms'
    }
  ];

  return (
    <IndustryPageLayout
      locale="ar"
      skipMainLayout={true}
      industryData={{
        title: "يونيفورم احترافي للضيافة والفنادق",
        subtitle: "تشكيلة واسعة من يونيفورم الضيافة بأعلى معايير الجودة تناسب الفنادق والمطاعم والمنتجعات",
        heroImage: "/images/hospitality/hero-bg.jpg",
        introduction: {
          title: "يونيفورم الضيافة بمعايير عالمية",
          content: `<div class="prose max-w-none">
<h2 class="text-2xl font-bold mt-6 mb-4 text-primary-800">يونيفورم الضيافة والفنادق في المملكة العربية السعودية</h2>

<div class="flex flex-col md:flex-row gap-6 items-center mb-6">
  <div class="md:w-2/3">
    <p>نوفر تشكيلة متكاملة من <strong>يونيفورم الضيافة والفنادق</strong> المصممة وفق أعلى المعايير العالمية، وباستخدام أجود أنواع الأقمشة التي تضمن الراحة والمتانة والمظهر الاحترافي. تهدف منتجاتنا إلى الارتقاء بصورة منشآت الضيافة في المملكة من خلال توفير <a href="/ar/shop/hospitality-attire" class="text-primary-600 hover:underline">أزياء موحدة احترافية</a> تعكس مستوى الخدمة الراقية التي تقدمها.</p>

    <p class="mt-4">تشمل منتجاتنا جميع احتياجات قطاع الضيافة بدءًا من <a href="/ar/shop/hospitality-attire/reception-staff-uniform" class="text-primary-600 hover:underline">يونيفورم الاستقبال والكونسيرج</a>، ومرورًا <a href="/ar/shop/hospitality-attire/housekeeping-uniform" class="text-primary-600 hover:underline">بيونيفورم خدمة الغرف</a> والمطاعم، وصولًا إلى <a href="/ar/shop/culinary-uniforms/executive-chef-coat" class="text-primary-600 hover:underline">يونيفورم المطابخ والشيفات</a>.</p>
  </div>
  <div class="md:w-1/3 relative rounded-lg overflow-hidden shadow-lg">
    <img src="/images/hospitality/hospitality_uniform_hotel.jpg" alt="يونيفورم فندقي احترافي" class="w-full h-auto rounded-lg" />
  </div>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4 text-primary-800">لماذا تعتبر اليونيفورمات ضرورية في قطاع الضيافة؟</h2>

<p>تتميز <strong>يونيفورمات الضيافة</strong> لدينا بالمزج المثالي بين الأناقة والراحة والمتانة، مما يساعد فريق العمل على تقديم خدمة استثنائية مع الحفاظ على المظهر الاحترافي طوال فترة العمل. نحن ندرك أن <strong>اليونيفورم ليس مجرد زي موحد</strong>، بل هو انعكاس لهوية العلامة التجارية وجزء أساسي من تجربة الضيوف في الفنادق والمنتجعات والمطاعم.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="bg-neutral-50 p-4 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">تعزيز الهوية البصرية</h3>
    <p>يساهم <strong>الزي الموحد المميز</strong> في تعزيز هوية العلامة التجارية للفندق أو المطعم، مما يخلق انطباعاً موحداً ومميزاً لدى الضيوف. من خلال تصاميم تتماشى مع ديكور وألوان المنشأة، نساعدك على خلق تجربة بصرية متكاملة للضيوف.</p>
  </div>
  <div class="bg-neutral-50 p-4 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">تحسين تجربة الموظف</h3>
    <p>توفر <strong>يونيفورمات الضيافة</strong> عالية الجودة تجربة مريحة للموظفين خلال ساعات العمل الطويلة، مما ينعكس إيجاباً على أدائهم ومستوى الخدمة المقدمة. نصمم <a href="/ar/blog/employee-comfort-hospitality-uniforms" class="text-primary-600 hover:underline">أزياء تراعي راحة الموظف</a> وحرية الحركة والمظهر الأنيق.</p>
  </div>
</div>

<div class="my-8 bg-white rounded-lg overflow-hidden shadow-md">
  <div class="relative h-64 md:h-80">
    <img src="/images/hospitality/hospitality_uniform_receiption_hotel.jpg" alt="يونيفورم استقبال الفنادق الفاخر" class="w-full h-full object-cover" />
  </div>
  <div class="p-4 bg-neutral-50">
    <p class="text-sm text-neutral-600 text-center">فريق استقبال فندقي يرتدي يونيفورم أنيق يعكس فخامة المنشأة السياحية</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4 text-primary-800">نهجنا المتكامل في تصميم وتوريد يونيفورم الضيافة</h2>

<p>في <strong>يونيفورم</strong>، نلتزم بتوفير حلول متكاملة تناسب احتياجات منشآت الضيافة بمختلف أحجامها، من الفنادق الفاخرة ذات الخمس نجوم إلى المطاعم العائلية والمقاهي المتخصصة. نحرص على مواكبة <a href="/ar/blog/restaurant-uniform-trends" class="text-primary-600 hover:underline">أحدث صيحات الموضة العالمية</a> في مجال يونيفورم الضيافة مع الحفاظ على الطابع المحلي الذي يناسب المملكة العربية السعودية.</p>

<div class="my-6 bg-primary-50 p-5 rounded-lg border border-primary-100">
  <h3 class="text-xl font-bold text-primary-800 mb-3">عملية التصميم والتنفيذ</h3>
  <ul class="list-disc list-inside space-y-2 text-neutral-700">
    <li><strong class="text-primary-700">الاستشارة الأولية:</strong> نعمل معك لفهم احتياجات منشأتك وهويتها البصرية وميزانيتها المخصصة لليونيفورم.</li>
    <li><strong class="text-primary-700">التصميم المخصص:</strong> نقدم تصاميم مخصصة تتناسب مع طبيعة عمل كل قسم وتعكس هوية علامتك التجارية.</li>
    <li><strong class="text-primary-700">اختيار الأقمشة:</strong> نساعدك في اختيار <a href="/ar/blog/hospitality-uniform-fabrics" class="text-primary-600 hover:underline">أنسب أنواع الأقمشة</a> لكل نوع من أنواع اليونيفورم بما يتناسب مع طبيعة العمل والاستخدام.</li>
    <li><strong class="text-primary-700">التصنيع عالي الجودة:</strong> نلتزم بمعايير صارمة في التصنيع لضمان منتجات عالية الجودة وطويلة العمر.</li>
    <li><strong class="text-primary-700">التسليم والمتابعة:</strong> نوفر خدمة توصيل سريعة لجميع مناطق المملكة مع متابعة ما بعد البيع لضمان رضاكم التام.</li>
  </ul>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4 text-primary-800">أنواع يونيفورم الضيافة التي نوفرها</h2>

<div class="flex flex-col md:flex-row-reverse gap-6 items-center mb-6">
  <div class="md:w-1/2">
    <h3 class="text-xl font-semibold mt-2 mb-3 text-primary-700">يونيفورم استقبال الفنادق</h3>

    <p>يعتبر <strong>موظفو الاستقبال</strong> أول نقطة اتصال بين الفندق والضيوف، لذا نحرص على تصميم <a href="/ar/shop/hospitality-attire/reception-staff-uniform" class="text-primary-600 hover:underline">يونيفورمات استقبال</a> أنيقة ومميزة تعكس فخامة المنشأة وتترك انطباعاً أولياً إيجابياً لدى النزلاء. تتميز يونيفورمات الاستقبال لدينا بـ:</p>

    <ul class="list-disc list-inside mb-4 mr-4 space-y-1">
      <li>تصاميم كلاسيكية وعصرية تتناسب مع مستوى وطراز الفندق</li>
      <li>أقمشة راقية مقاومة للتجاعيد والبقع</li>
      <li>إمكانية تطريز شعار الفندق بدقة عالية</li>
      <li>تناسب مثالي يضمن أناقة الموظفين طوال فترة العمل</li>
    </ul>
  </div>
  <div class="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
    <img src="/images/hospitality/concierge-uniform.jpg" alt="يونيفورم موظفي الكونسيرج الرسمي" class="w-full h-auto" />
  </div>
</div>

<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="col-span-2">
    <h3 class="text-xl font-semibold mt-2 mb-3 text-primary-700">يونيفورم المطاعم والمقاهي</h3>

    <p>تتطلب <strong>المطاعم والمقاهي</strong> يونيفورمات عملية وأنيقة في آن واحد. توفر <a href="/ar/shop/hospitality-attire/restaurant-staff-uniform" class="text-primary-600 hover:underline">تشكيلتنا من يونيفورمات المطاعم</a> الخيار المثالي لجميع أنواع المطاعم، من المطابخ العالمية الفاخرة إلى المقاهي العصرية والمطاعم الشعبية. تشمل مجموعتنا يونيفورمات لـ:</p>

    <ul class="list-disc list-inside mb-4 mr-4 space-y-1">
      <li>النوادل والمضيفين</li>
      <li>الباريستا والبارتندر</li>
      <li>مديري المطاعم والمشرفين</li>
      <li>موظفي الكاشير والاستقبال</li>
    </ul>

    <p>جميع يونيفورماتنا مصممة مع التركيز على المتانة ومقاومة البقع، مع الاحتفاظ بالمظهر الأنيق حتى خلال ساعات العمل المزدحمة.</p>
  </div>
  <div class="col-span-1 flex items-center">
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img src="/images/hospitality/hospitality_uniform.jpg" alt="يونيفورم المطاعم والمقاهي الأنيق" class="w-full h-auto" />
    </div>
  </div>
</div>

<div class="my-8 bg-white rounded-lg overflow-hidden shadow-md">
  <div class="relative h-64 md:h-80">
    <img src="/images/hospitality/hospitality_uniform_chef.jpg" alt="يونيفورم الشيف التنفيذي الفاخر" class="w-full h-full object-cover" />
  </div>
  <div class="p-4 bg-neutral-50">
    <p class="text-sm text-neutral-600 text-center">يونيفورم احترافي للشيفات التنفيذيين في المطاعم والفنادق الفاخرة</p>
  </div>
</div>

<h3 class="text-xl font-semibold mt-6 mb-3 text-primary-700">يونيفورم المطبخ والشيفات</h3>

<p>في بيئة المطبخ المليئة بالتحديات، يحتاج <strong>الطهاة والشيفات</strong> إلى <a href="/ar/shop/culinary-uniforms/executive-chef-coat" class="text-primary-600 hover:underline">يونيفورمات مصممة خصيصاً</a> لتلبية متطلبات العمل في ظروف درجات الحرارة العالية والحركة المستمرة. توفر يونيفورماتنا للمطابخ:</p>

<ul class="list-disc list-inside mb-4 mr-4 space-y-1">
  <li>جاكيتات الشيف المصنوعة من قطن 100% مقاوم للحرارة</li>
  <li>بناطيل المطبخ المريحة والعملية</li>
  <li>قبعات الطهاة بتصاميم كلاسيكية وعصرية</li>
  <li>المرايل والمناديل ذات الجودة العالية</li>
  <li>قمصان وسترات مساعدي الطهاة</li>
</ul>

<p>جميع يونيفورمات المطبخ لدينا مصممة للتعامل مع متطلبات بيئة المطبخ المكثفة مع الحفاظ على الراحة وسهولة الحركة للطهاة خلال ساعات العمل الطويلة.</p>

<div class="flex flex-col md:flex-row gap-6 items-center my-8">
  <div class="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
    <img src="/images/hospitality/housekeeping-uniform.jpg" alt="يونيفورم خدمة الغرف والتدبير الفندقي" class="w-full h-auto" />
  </div>
  <div class="md:w-1/2">
    <h3 class="text-xl font-semibold mt-2 mb-3 text-primary-700">يونيفورم خدمة الغرف والتدبير الفندقي</h3>

    <p>يقوم <strong>فريق خدمة الغرف والتدبير الفندقي</strong> بعمل حيوي يتطلب حركة مستمرة وتعامل مع مواد التنظيف المختلفة. لذا، صممنا <a href="/ar/shop/hospitality-attire/housekeeping-uniform" class="text-primary-600 hover:underline">يونيفورمات مخصصة لهذا القطاع</a> تجمع بين العملية والمظهر المهني الأنيق:</p>

    <ul class="list-disc list-inside mb-4 mr-4 space-y-1">
      <li>فساتين وبدلات التدبير الفندقي المريحة</li>
      <li>قمصان وبناطيل التنظيف العملية</li>
      <li>أقمشة متينة مقاومة للاتساخ وسهلة التنظيف</li>
      <li>جيوب عملية متعددة للاستخدامات المختلفة</li>
      <li>تصاميم تسمح بحرية الحركة الكاملة</li>
    </ul>
  </div>
</div>

<h3 class="text-xl font-semibold mt-6 mb-3 text-primary-700">يونيفورم المنتجعات والنوادي الصحية</h3>

<p>تتميز <strong>المنتجعات والنوادي الصحية</strong> بطابع خاص يجمع بين الفخامة والراحة. نقدم <a href="/ar/shop/hospitality-attire/luxury-hotel-uniform" class="text-primary-600 hover:underline">يونيفورمات مصممة خصيصاً</a> لهذه البيئات لتعكس الأجواء الهادئة والراقية:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
  <div>
    <ul class="list-disc list-inside mb-4 mr-4 space-y-1">
      <li>يونيفورمات المعالجين والمدلكين من أقمشة طبيعية مريحة للبشرة</li>
      <li>أزياء موظفي الاستقبال في السبا والنوادي الصحية</li>
      <li>يونيفورمات المدربين الرياضيين والمرشدين</li>
      <li>ألوان هادئة تعكس أجواء الاسترخاء والراحة</li>
    </ul>
  </div>
  <div>
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img src="/images/hospitality/spa-uniform.jpg" alt="يونيفورم النوادي الصحية والسبا الفاخر" class="w-full h-auto" />
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4 text-primary-800">التصميم المخصص لليونيفورم حسب هوية العلامة التجارية</h2>

<p>نقدم خدمات <strong>تصميم وتصنيع اليونيفورم</strong> بما يتوافق مع الهوية البصرية لعلامتك التجارية، مع إمكانية تخصيص الألوان والشعارات والتصاميم حسب متطلباتك. يمكننا دمج عناصر هويتك البصرية في تصميم اليونيفورم من خلال:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div class="bg-neutral-50 p-4 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">تطريز الشعارات والرموز</h3>
    <p>نقدم خدمة تطريز عالية الدقة لشعار منشأتك على جميع قطع اليونيفورم، مما يعزز من هوية علامتك التجارية ويضفي لمسة احترافية على الزي الموحد.</p>
  </div>
  <div class="bg-neutral-50 p-4 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">اختيار الألوان المميزة</h3>
    <p>يمكننا تصميم اليونيفورم باستخدام الألوان الرئيسية لعلامتك التجارية لخلق تناسق بصري بين يونيفورم الموظفين وباقي عناصر هوية المنشأة.</p>
  </div>
  <div class="bg-neutral-50 p-4 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">تفاصيل مخصصة</h3>
    <p>نضيف لمسات مميزة مثل الأزرار المخصصة، والأشرطة الزخرفية، والتفاصيل المميزة التي تعكس الطابع الفريد لمنشأتك وتميزها عن المنافسين.</p>
  </div>
</div>

<div class="my-8 bg-white rounded-lg overflow-hidden shadow-md">
  <div class="relative h-64 md:h-80">
    <img src="/images/hospitality/resort-uniform.jpg" alt="يونيفورم المنتجعات السياحية المميز" class="w-full h-full object-cover" />
  </div>
  <div class="p-4 bg-neutral-50">
    <p class="text-sm text-neutral-600 text-center">يونيفورم مخصص للمنتجعات السياحية يعكس الطابع الترفيهي مع الحفاظ على المهنية</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4 text-primary-800">خدماتنا الإضافية لقطاع الضيافة</h2>

<p>بالإضافة إلى توفير اليونيفورمات عالية الجودة، نقدم مجموعة من الخدمات الإضافية لدعم قطاع الضيافة:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="border border-primary-100 rounded-lg p-4">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">خدمة الصيانة والتعديل</h3>
    <p>نوفر خدمات صيانة وتعديل اليونيفورمات لإطالة عمرها الافتراضي وضمان ظهورها بمظهر مثالي دائماً، مع إمكانية إجراء تعديلات للمقاسات عند الحاجة.</p>
  </div>
  <div class="border border-primary-100 rounded-lg p-4">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">التجديد الموسمي</h3>
    <p>نقدم استشارات لتجديد يونيفورمات منشأتك بشكل موسمي أو دوري لمواكبة أحدث الصيحات وتحديث مظهر الفريق بما يحافظ على جاذبية المكان.</p>
  </div>
  <div class="border border-primary-100 rounded-lg p-4">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">نظام إدارة المخزون</h3>
    <p>نساعدك في إدارة مخزون اليونيفورم الخاص بمنشأتك بكفاءة من خلال نظام متابعة متطور يضمن توفر المقاسات المطلوبة للموظفين الجدد وعمليات الاستبدال.</p>
  </div>
  <div class="border border-primary-100 rounded-lg p-4">
    <h3 class="text-lg font-semibold text-primary-700 mb-2">ورش عمل للموظفين</h3>
    <p>نقدم ورش عمل للموظفين حول كيفية العناية باليونيفورم والحفاظ عليه في أفضل حالة، مما يساهم في إطالة عمره الافتراضي وتحسين مظهر الفريق.</p>
  </div>
</div>

<h2 class="text-2xl font-bold mt-8 mb-4 text-primary-800">لماذا تختار يونيفورم لتجهيز منشأتك الفندقية؟</h2>

<p>تقدم شركتنا تجربة متكاملة في توريد <strong>ملابس العمل الموحدة لقطاع الضيافة</strong> في المملكة العربية السعودية، مع التزامنا بأعلى معايير الجودة والخدمة:</p>

<ul class="list-disc list-inside mb-4 mr-4 space-y-2">
  <li><strong class="text-primary-700">خبرة واسعة:</strong> نمتلك خبرة تمتد لسنوات في مجال تصميم وتوريد يونيفورمات الضيافة للعديد من الفنادق والمطاعم المرموقة في المملكة.</li>
  <li><strong class="text-primary-700">مواكبة أحدث الصيحات:</strong> نحرص على متابعة <a href="/ar/blog/restaurant-uniform-trends" class="text-primary-600 hover:underline">أحدث اتجاهات يونيفورم الضيافة العالمية</a> وتطبيقها بما يتناسب مع السوق السعودي.</li>
  <li><strong class="text-primary-700">الالتزام بالمواعيد:</strong> نلتزم بجداول التسليم المتفق عليها مع عملائنا، ونوفر خدمة شحن سريعة لجميع مناطق المملكة.</li>
  <li><strong class="text-primary-700">خدمة عملاء متميزة:</strong> فريق خدمة العملاء لدينا متاح دائماً للإجابة على استفساراتكم وتلبية احتياجاتكم بكفاءة عالية.</li>
  <li><strong class="text-primary-700">أسعار تنافسية:</strong> نقدم خيارات متعددة تناسب مختلف الميزانيات مع الحفاظ على مستوى الجودة العالي.</li>
</ul>

<div class="my-8 bg-white rounded-lg overflow-hidden shadow-md">
  <div class="relative h-64 md:h-80">
    <img src="/images/hospitality/event-staff-uniform.jpg" alt="يونيفورم قاعات المؤتمرات والاحتفالات" class="w-full h-full object-cover" />
  </div>
  <div class="p-4 bg-neutral-50">
    <p class="text-sm text-neutral-600 text-center">يونيفورم احترافي لفريق عمل قاعات المؤتمرات والاحتفالات في الفنادق والمنتجعات</p>
  </div>
</div>

<div class="mt-8 mb-6 bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
  <h3 class="text-xl font-bold text-primary-800 mb-3">جاهزون لرفع مستوى يونيفورم الضيافة في منشأتك؟</h3>
  <p class="mb-4">تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك من يونيفورم الضيافة.</p>
  <a href="/ar/contact" class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">احصل على استشارة مجانية</a>
</div>
</div>`,
          image: "/images/hospitality/hospitality_uniform_hotel.jpg"
        },
        benefits: [
          {
            title: "جودة عالمية",
            description: "نستخدم أفضل أنواع الأقمشة والخامات العالمية لضمان يونيفورم عالي الجودة يدوم طويلًا حتى مع الاستخدام اليومي المكثف والغسيل المتكرر في بيئات الضيافة.",
            icon: "🏆"
          },
          {
            title: "تصميم مخصص",
            description: "تصميم يونيفورم خاص بمؤسستك يعكس هويتك التجارية ويحقق متطلباتك الفريدة، مع فريق متخصص من المصممين لتقديم تجربة تصميم احترافية متكاملة.",
            icon: "✂️"
          },
          {
            title: "توصيل سريع",
            description: "نلتزم بمواعيد التسليم المحددة مع خدمة شحن سريعة لجميع مناطق المملكة، ونوفر خيارات تسليم عاجلة للطلبات ذات الأولوية العالية.",
            icon: "🚚"
          },
          {
            title: "تشكيلة متنوعة",
            description: "مجموعة واسعة من التصاميم والقصات والألوان تناسب كافة الأذواق والاحتياجات، مع تحديث مستمر لمواكبة أحدث اتجاهات الموضة في قطاع الضيافة.",
            icon: "👕"
          },
          {
            title: "خدمة متكاملة",
            description: "من التصميم إلى التصنيع والتسليم، نقدم حلول يونيفورم متكاملة بسهولة، مع فريق دعم فني متخصص لمساعدتك في كل خطوة من عملية الطلب والتوريد.",
            icon: "💼"
          },
          {
            title: "دعم ما بعد البيع",
            description: "خدمة عملاء احترافية وضمان جودة شامل مع إمكانية التعديل والصيانة، ونظام متابعة دقيق لضمان رضاكم التام عن المنتجات والخدمات المقدمة.",
            icon: "🛠️"
          },
          {
            title: "مقاومة التآكل",
            description: "أقمشة خاصة مقاومة للتآكل والبلى تضمن عمرًا أطول لليونيفورم حتى مع الاستخدام اليومي المكثف في بيئات العمل المختلفة في قطاع الضيافة.",
            icon: "⚡"
          },
          {
            title: "مقاومة البقع",
            description: "تقنيات متطورة في معالجة الأقمشة لجعلها مقاومة للبقع والسوائل، مما يجعلها مثالية لبيئات المطاعم والفنادق وأماكن تقديم الطعام.",
            icon: "💧"
          },
          {
            title: "الراحة والمرونة",
            description: "تصاميم مدروسة تراعي راحة الموظف خلال ساعات العمل الطويلة، مع أقمشة مرنة تسمح بحرية الحركة وتقلل من الإجهاد البدني.",
            icon: "🌿"
          },
          {
            title: "حلول موسمية",
            description: "مجموعات متخصصة لمختلف المواسم والمناسبات، سواء للصيف أو الشتاء أو للمهرجانات والفعاليات الخاصة التي تتطلب يونيفورم مميز.",
            icon: "🗓️"
          }
        ],
        // Correctly formatted arrays for the IndustryPageLayout component
        products: products,
        relatedContent: relatedContent,
    testimonials: [
      {
            id: "1",
            quote: "كان التعامل مع شركة يونيفورم تجربة رائعة من البداية إلى النهاية. قدموا لنا منتجات عالية الجودة تتناسب تمامًا مع هوية فندقنا، وكان الالتزام بمواعيد التسليم مثاليًا. ساعدنا فريق التصميم المحترف في اختيار التصاميم والألوان التي تعكس الطابع الفاخر لفندقنا خمس نجوم.",
            author: "أحمد الشمري",
            position: "مدير عمليات",
            company: "فندق الريتز كارلتون - الرياض"
          },
          {
            id: "2",
            quote: "نتعامل مع شركة يونيفورم منذ أكثر من خمس سنوات، وما يميزهم هو جودة منتجاتهم الثابتة والخدمة الممتازة والمرونة في تلبية احتياجاتنا المتغيرة. لقد ساهم اليونيفورم الذي صمموه لمطاعمنا في تعزيز صورتنا لدى العملاء وزيادة ثقتهم في خدماتنا، كما أن الموظفين يشعرون بالراحة والفخر عند ارتدائه.",
            author: "سارة المهندي",
            position: "مديرة الموارد البشرية",
            company: "سلسلة مطاعم الذواقة - جدة"
          },
          {
            id: "3",
            quote: "وجدنا في يونيفورم شريكًا حقيقيًا يفهم متطلبات قطاع الضيافة والفندقة. اليونيفورم الذي صمموه لفريقنا نال إعجاب الضيوف والموظفين على حد سواء. ما أعجبني بشكل خاص هو اهتمامهم بأدق التفاصيل، واستخدامهم لأقمشة عالية الجودة مقاومة للبقع ومريحة، مما جعل موظفينا يتحركون بحرية وراحة خلال ساعات العمل الطويلة.",
            author: "خالد العتيبي",
        position: "المدير العام",
            company: "منتجع الشاطئ الذهبي - الخبر"
          },
          {
            id: "4",
            quote: "كمجموعة فنادق متوسطة الحجم، كنا نبحث عن حل متكامل ليونيفورم يمزج بين الجودة والسعر المناسب. قدمت لنا شركة يونيفورم حلاً شاملاً لجميع أقسام الفندق مع مرونة في الكميات والمقاسات. تميزت الخدمة بالسرعة والدقة في التنفيذ، والأهم من ذلك هو جودة المنتجات التي صمدت أمام الاستخدام اليومي المكثف.",
            author: "فيصل الدوسري",
            position: "مالك",
            company: "مجموعة فنادق النخبة - المنطقة الشرقية"
          },
          {
            id: "5",
            quote: "نحن نقدم تجربة ضيافة سعودية أصيلة في مطاعمنا، وكان التحدي إيجاد يونيفورم يعكس هذه الهوية التراثية مع لمسة عصرية. فاق فريق يونيفورم توقعاتنا بتصميم خاص يمزج بين العناصر التراثية السعودية والأناقة العصرية. تلقينا إشادة من عملائنا على التناسق بين ديكور المطعم ويونيفورم الموظفين، مما عزز من التجربة الكلية للضيوف.",
            author: "نورة القحطاني",
            position: "مديرة التسويق",
            company: "سلسلة مطاعم أصالة - الرياض وجدة"
          }
        ],
    cta: {
          title: "ارفع مستوى تجربة الضيافة في منشأتك مع يونيفورم احترافي يعكس هويتك",
          description: "تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك من يونيفورم الضيافة. فريقنا من الخبراء جاهز لمساعدتك في اختيار التصاميم والأقمشة المناسبة لمنشأتك السياحية، مع خيارات متعددة تناسب مختلف الميزانيات والأذواق.",
          buttonText: "احصل على عرض سعر مجاني",
          buttonHref: "/ar/contact",
          buttonUrl: "/ar/contact" // Added alternative field that might be used by the component
        },
        seoKeywords: "يونيفورم الضيافة، يونيفورم الفنادق، يونيفورم المطاعم، يونيفورم فنادق، ملابس الضيافة، زي موحد للفنادق، زي موحد للمطاعم، يونيفورم شيف، يونيفورم استقبال الفنادق، يونيفورم خدمة الغرف، يونيفورم المنتجعات، يونيفورم كونسيرج، يونيفورم سبا، قميص نادل، بدلة شيف، ملابس عمل فندقية، موردي يونيفورم الضيافة، تصنيع يونيفورم الفنادق، شركات يونيفورم فندقي، زي موحد للمطاعم الراقية، يونيفورم ضيافة احترافي، ملابس ضيافة عالية الجودة في السعودية"
      }}
    />
  );
};

export default Page; 
