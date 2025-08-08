import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء ضيافة فاخرة | يونيفورم فنادق ومطاعم السعودية | يونيوم',
  description: 'أزياء ضيافة راقية وفاخرة للفنادق والمطاعم والمنتجعات في السعودية. يونيفورم موظفي الفنادق والمطاعم يعكس الطابع السعودي الأصيل والضيافة العربية مع جودة عالمية.',
  keywords: 'أزياء فنادق السعودية, يونيفورم مطاعم الرياض, زي موظفي فنادق, أزياء ضيافة فاخرة, hospitality uniforms Saudi, hotel uniforms Riyadh, restaurant uniforms KSA',
  openGraph: {
    title: 'أزياء ضيافة فاخرة | يونيفورم فنادق ومطاعم السعودية',
    description: 'أزياء ضيافة راقية تعكس الطابع السعودي الأصيل والضيافة العربية المتميزة. جودة عالمية وتصميم أنيق لقطاع الضيافة.',
    url: 'https://uneom.com/industries/hospitality/',
    siteName: 'Uneom - يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/industries/hospitality.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء ضيافة فاخرة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/industries/hospitality/',
    languages: {
      'en-SA': 'https://uneom.com/industries/hospitality/',
      'ar-SA': 'https://uneom.com/ar/industries/hospitality/',
      'x-default': 'https://uneom.com/industries/hospitality/'
    }
  }
};

export const dynamic = 'force-static';

// Featured hospitality products with updated images
const featuredProducts = [
  {
    id: '1',
    name: 'زي الاستقبال الفاخر | Luxury Concierge Uniform',
    image: '/images/hospitality_uniform_concierge.jpg',
    price: 'من 449 ريال | From SAR 449',
    href: '/shop/hospitality-attire/luxury-concierge-uniform/',
    category: 'أزياء الاستقبال | Concierge Uniforms'
  },
  {
    id: '2',
    name: 'يونيفورم فندق راقي | Premium Hotel Staff Uniform',
    image: '/images/products/hotel-uniform.jpg',
    price: 'من 329 ريال | From SAR 329',
    href: '/shop/hospitality-attire/premium-hotel-uniform/',
    category: 'أزياء الفنادق | Hotel Uniforms'
  },
  {
    id: '3',
    name: 'زي شيف احترافي | Professional Chef Uniform',
    image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
    price: 'من 299 ريال | From SAR 299',
    href: '/shop/hospitality-attire/professional-chef-uniform/',
    category: 'أزياء المطابخ | Chef Uniforms'
  }
];

// Hospitality benefits - bilingual
const hospitalityBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'تعزيز هوية العلامة التجارية | Brand Enhancement',
    description: 'أزياء تعكس أناقة وفخامة العلامة التجارية للفندق أو المطعم وتترك انطباعاً لا يُنسى لدى الضيوف - Professional uniforms that elevate brand image.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'راحة طوال اليوم | All-Day Comfort',
    description: 'تصاميم مريحة وأقمشة قابلة للتنفس تضمن راحة الموظفين أثناء المناوبات الطويلة في بيئة الضيافة - Ergonomic designs for long shifts.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'مقاومة البقع والعناية السهلة | Easy Maintenance',
    description: 'أقمشة مقاومة للبقع وسهلة العناية تحافظ على المظهر المهني مع أقل متطلبات صيانة - Stain-resistant and easy-care fabrics.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'وحدة الفريق والهوية | Team Unity',
    description: 'تصاميم موحدة تعزز هوية الفريق والمعايير المهنية عبر جميع أقسام الضيافة - Cohesive designs promoting team identity.'
  }
];

// Premium fabrics for hospitality
const hospitalityFabrics = [
  {
    name: 'أقمشة الضيافة الفاخرة | Premium Hospitality Fabrics',
    description: 'خلطات قطن وبوليستر فاخرة مقاومة للتجعد والبقع مع ملمس ناعم ومظهر أنيق - Premium cotton-polyester blends with elegant appearance',
    image: '/images/fabric-cotton-blends.webp'
  },
  {
    name: 'تقنية مقاومة البقع | Stain-Resistant Technology',
    description: 'معالجة خاصة للأقمشة تقاوم البقع الصعبة وتسهل التنظيف للحفاظ على المظهر المهني - Special fabric treatment for professional appearance',
    image: '/images/uneom_antimicrobial_treatment.webp'
  },
  {
    name: 'تقنية التحكم في الرطوبة | Moisture Control Technology',
    description: 'أقمشة ذكية تطرد الرطوبة وتحافظ على الجفاف والراحة في بيئات العمل الحارة - Smart fabrics for moisture management',
    image: '/images/uneom_moisture_wicking.webp'
  }
];

export default function HospitalityIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="أزياء ضيافة فاخرة | يونيفورم فنادق ومطاعم السعودية | يونيوم"
        description="أزياء ضيافة راقية وفاخرة للفنادق والمطاعم والمنتجعات في السعودية. يونيفورم يعكس الطابع السعودي الأصيل والضيافة العربية."
        keywords={[
          'أزياء فنادق السعودية',
          'يونيفورم مطاعم الرياض',
          'زي موظفي فنادق',
          'أزياء ضيافة فاخرة',
          'hospitality uniforms Saudi',
          'hotel uniforms Riyadh',
          'restaurant uniforms KSA'
        ]}
        author="فريق خبراء يونيوم للضيافة | UNEOM Hospitality Team"
        expertise="أزياء الضيافة والفنادق والمطاعم | Hospitality & Hotel Restaurant Uniforms"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/hospitality/"
        locale="ar"
        trustSignals={[
          'نخدم أفخم الفنادق في المملكة',
          'أكثر من 100 مطعم ومقهى يثق بنا',
          'تصاميم تعكس الضيافة العربية الأصيلة',
          'جودة فاخرة ومعايير دولية'
        ]}
      />

      {/* UPDATED Hero Section according to 2025 plan */}
      <section className="hospitality-hero bg-gradient-to-br from-orange-800 via-amber-700 to-yellow-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'الصناعات | Industries', href: '/industries' },
              { label: 'الضيافة | Hospitality', href: '/industries/hospitality' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              {/* UPDATED H1 according to the plan */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                أزياء ضيافة فاخرة | يونيفورم فنادق ومطاعم السعودية
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-orange-200">
                أزياء ضيافة تعكس كرم وأصالة الضيافة السعودية
              </h2>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                نصمم أزياء ضيافة فاخرة تجمع بين الأناقة العالمية والطابع السعودي الأصيل. 
                نخدم الفنادق الفاخرة والمطاعم الراقية والمنتجعات في جميع أنحاء المملكة 
                لتعكس مستوى الضيافة العربية المتميزة.
              </p>
              
              {/* Hospitality Stats */}
              <div className="hospitality-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">150+</span>
                  <span className="text-sm md:text-base text-orange-200">فندق ومطعم</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">25,000+</span>
                  <span className="text-sm md:text-base text-orange-200">زي ضيافة سنوياً</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm md:text-base text-orange-200">تقييم العملاء</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=hospitality"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  احصل على عرض سعر ضيافة مجاني
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-900"
                >
                  تصفح أزياء الضيافة
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/industries/hospitality.jpg"
                  alt="موظفو ضيافة في فندق فاخر يرتدون أزياء أنيقة من يونيوم"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Image gallery thumbnails */}
              <div className="image-gallery grid grid-cols-3 gap-4 mt-6">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hospitality_uniform_concierge.jpg"
                    alt="زي استقبال فاخر لموظفي الفنادق"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hotel-uniform.jpg"
                    alt="يونيفورم فندق راقي يعكس الطابع السعودي"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg"
                    alt="زي شيف احترافي للمطابخ الفاخرة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI-Optimized Q&A Section for hospitality uniforms */}
      <section className="hospitality-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول أزياء الضيافة في السعودية
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-orange-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                ما هي أفضل أزياء الفنادق والمطاعم في السعودية؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تقدم أفضل أزياء الضيافة في السعودية:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>تصاميم فاخرة تعكس الضيافة العربية الأصيلة</li>
                    <li>أقمشة عالية الجودة مقاومة للبقع وسهلة العناية</li>
                    <li>خدمة أكثر من 150 فندق ومطعم في المملكة</li>
                    <li>تخصيص كامل للشعارات والألوان حسب العلامة التجارية</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-yellow-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                كيف يمكن تخصيص أزياء الفنادق حسب هوية العلامة التجارية؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تقدم خدمات تخصيص شاملة لأزياء الضيافة:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>🏨 تطريز شعار الفندق أو المطعم بدقة عالية</li>
                    <li>🎨 ألوان مخصصة تتماشى مع هوية العلامة التجارية</li>
                    <li>👕 تصاميم مختلفة لكل قسم (استقبال، مطعم، تنظيف)</li>
                    <li>🏷️ تطريز الأسماء والمناصب والأقسام</li>
                    <li>📏 قصات مناسبة للثقافة السعودية والراحة</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Updated Introduction with Arabic focus */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="أزياء ضيافة احترافية | Professional Hospitality Attire">
                  التميز في ضيافة المملكة
                  <span className="block text-lg mt-2 text-gray-600">Excellence in Kingdom's Hospitality</span>
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في يونيوم، نتفهم أن قطاع الضيافة هو واجهة المملكة أمام العالم. 
                  نصمم أزياء ضيافة فاخرة تجمع بين كرم الضيافة العربية والأناقة العالمية، 
                  مع ضمان الراحة والمهنية لجميع موظفي الفنادق والمطاعم والمنتجعات.
                </p>
                <p className="text-gray-600 mb-8">
                  من أقمشة فاخرة مقاومة للبقع إلى تفاصيل تطريز دقيقة تعكس الطابع السعودي، 
                  كل عنصر مصمم ليعكس مستوى الضيافة الراقية والتميز في الخدمة.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  ناقش مشروع الضيافة | Discuss Hospitality Project
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hospitality_uniform_concierge.jpg"
                  alt="موظف استقبال في فندق فاخر يرتدي زي أنيق من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Updated Key Benefits with bilingual content */}
          <section className="mb-16">
            <SectionHeading subtitle="لماذا تختار أزياء يونيوم للضيافة | Why Choose Uneom Hospitality Uniforms" centered>
              مميزات متقدمة لقطاع الضيافة
              <span className="block text-lg mt-2 text-gray-600">Advanced Features for Hospitality Industry</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {hospitalityBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Hospitality Products Section */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="مجموعة أزياء الضيافة | Our Hospitality Collection" centered>
              أزياء ضيافة مميزة
              <span className="block text-lg mt-2 text-gray-600">Featured Hospitality Uniforms</span>
            </SectionHeading>
            
            <div className="hospitality-products">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="product-category bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {product.category === 'أزياء الاستقبال | Concierge Uniforms' ? 
                          'تصاميم فاخرة لموظفي الاستقبال والضيافة' :
                          product.category === 'أزياء الفنادق | Hotel Uniforms' ?
                          'أزياء فندقية أنيقة لجميع الأقسام' :
                          'أزياء مطابخ احترافية للشيفات والطباخين'
                        }
                      </p>
                      <div className="features-list mb-4">
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>🏨 أقمشة فاخرة مقاومة للبقع</li>
                          <li>🇸🇦 تصميم يعكس الطابع السعودي</li>
                          <li>🎖️ تطريز الشعارات بدقة عالية</li>
                          <li>👔 راحة طوال ساعات العمل</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-orange-600">{product.price}</span>
                        <Link href={product.href} className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                          اطلب الآن
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/hospitality-attire/" variant="primary" size="lg">
                عرض جميع أزياء الضيافة | View All Hospitality Uniforms
              </Button>
            </div>
          </section>

          {/* Updated Fabric Technologies */}
          <section className="mb-16">
            <SectionHeading subtitle="تقنيات الأقمشة المتخصصة | Specialized Fabric Technologies" centered>
              الابتكار في أقمشة الضيافة
              <span className="block text-lg mt-2 text-gray-600">Innovation in Hospitality Textiles</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {hospitalityFabrics.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hospitality Testimonials - Arabic Focus */}
          <section className="hospitality-testimonials mb-16">
            <SectionHeading subtitle="شهادات شركاء الضيافة | Hospitality Partners Testimonials" centered>
              موثوق من الفنادق والمطاعم الرائدة
              <span className="block text-lg mt-2 text-gray-600">Trusted by Leading Hotels & Restaurants</span>
            </SectionHeading>
            
            <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">أ.س</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">أحمد السعدون</h4>
                    <p className="text-sm text-gray-500">مدير عام - فندق الفيصلية</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "أزياء يونيوم ساعدت في تعزيز الهوية البصرية لفندقنا. جودة الأقمشة والتصميم الأنيق 
                  يعكس مستوى الضيافة الراقية التي نقدمها لضيوفنا."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 font-semibold">ف.م</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">فاطمة المريخي</h4>
                    <p className="text-sm text-gray-500">مديرة المطاعم - مجموعة النخيل</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "التصاميم المخصصة لطاقم المطعم تجمع بين الأناقة والعملية بشكل مثالي. 
                  الموظفون يشعرون بالراحة والثقة، والضيوف يلاحظون المظهر المهني المتميز."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-600 font-semibold">خ.ع</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">خالد العتيبي</h4>
                    <p className="text-sm text-gray-500">المدير التنفيذي - منتجع أمالا</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "شراكتنا مع يونيوم أضافت لمسة من الأناقة والاحترافية لمنتجعنا. 
                  جودة التنفيذ والتفاصيل الدقيقة تعكس مستوى الخدمة الفاخرة التي نقدمها."
                </p>
              </blockquote>
            </div>
          </section>

          {/* Enhanced Client Showcase */}
          <section className="hospitality-clients mb-16">
            <SectionHeading subtitle="شركاء النجاح في قطاع الضيافة السعودي | Hospitality Success Partners" centered>
              نخدم رائدي الضيافة في المملكة
              <span className="block text-lg mt-2 text-gray-600">Serving Hospitality Leaders in the Kingdom</span>
            </SectionHeading>
            
            <div className="clients-showcase mt-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="client-sector">
                  <h3 className="text-2xl font-bold mb-6 text-orange-800">🏨 الفنادق الفاخرة</h3>
                  <div className="space-y-4">
                    <div className="client-item p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-900">فندق الفيصلية</h4>
                      <p className="text-orange-700">أزياء جميع الأقسام من الاستقبال للخدمات</p>
                    </div>
                    <div className="client-item p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-900">منتجع أمالا</h4>
                      <p className="text-orange-700">تصاميم مخصصة للمنتجع الفاخر</p>
                    </div>
                    <div className="client-item p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-900">فندق الريتز كارلتون</h4>
                      <p className="text-orange-700">أزياء راقية تعكس مستوى الخدمة العالمي</p>
                    </div>
                  </div>
                </div>
                
                <div className="client-sector">
                  <h3 className="text-2xl font-bold mb-6 text-amber-800">🍽️ المطاعم والمقاهي</h3>
                  <div className="space-y-4">
                    <div className="client-item p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold text-amber-900">مطاعم النخيل</h4>
                      <p className="text-amber-700">أزياء طباخين ونُدل متخصصة</p>
                    </div>
                    <div className="client-item p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold text-amber-900">مجموعة مطاعم الأصالة</h4>
                      <p className="text-amber-700">تصاميم تعكس التراث السعودي</p>
                    </div>
                    <div className="client-item p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold text-amber-900">مقاهي الدانة</h4>
                      <p className="text-amber-700">أزياء عصرية لطاقم المقاهي</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Enhanced CTA */}
          <section className="hospitality-cta text-center bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-12">
            <div className="cta-content max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                هل تحتاج أزياء ضيافة لفندق أو مطعم أو منتجع؟
                <span className="block text-xl md:text-2xl mt-4 text-orange-100">
                  Ready to Elevate Your Hospitality Brand?
                </span>
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                احصل على استشارة مجانية وعرض سعر مخصص لمشروع الضيافة الخاص بك.
                انضم إلى أكثر من 150 فندق ومطعم يثق بيونيوم في المملكة.
              </p>
              
              <div className="cta-actions flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/quote?industry=hospitality" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  احصل على عرض سعر ضيافة مجاني
                </Link>
                <Link 
                  href="tel:+966112345678" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-900 font-bold rounded-lg transition-all duration-300"
                >
                  اتصل بخبراء الضيافة
                </Link>
              </div>
              
              <div className="cta-features grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="feature">
                  <span className="block text-2xl mb-2">🏨</span>
                  <span className="text-sm">ضيافة فاخرة ومتميزة</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🇸🇦</span>
                  <span className="text-sm">تصميم يعكس الطابع السعودي</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">⭐</span>
                  <span className="text-sm">جودة فاخرة عالمية</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🚚</span>
                  <span className="text-sm">تسليم سريع لجميع المدن</span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}