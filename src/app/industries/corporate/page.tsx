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
  title: 'الأزياء المؤسسية | يونيفورم شركات احترافي السعودية | يونيوم',
  description: 'أزياء مؤسسية راقية واحترافية للشركات والمؤسسات السعودية. يونيفورم شركات يعزز الهوية المؤسسية ويعكس الاحترافية والتميز في بيئة العمل مع جودة عالمية وتصميم أنيق.',
  keywords: 'أزياء شركات السعودية, يونيفورم مؤسسي الرياض, زي موظفين شركات, أزياء مكاتب احترافية, corporate uniforms Saudi, business attire Riyadh, office uniforms KSA',
  openGraph: {
    title: 'الأزياء المؤسسية | يونيفورم شركات احترافي السعودية',
    description: 'أزياء مؤسسية راقية تعزز الهوية المؤسسية وتعكس الاحترافية والتميز في بيئة العمل. جودة عالمية وتصميم أنيق للشركات السعودية.',
    url: 'https://uneom.com/industries/corporate/',
    siteName: 'Uneom - يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/hero-corporate-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء مؤسسية احترافية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/industries/corporate/',
    languages: {
      'en-SA': 'https://uneom.com/industries/corporate/',
      'ar-SA': 'https://uneom.com/ar/industries/corporate/',
      'x-default': 'https://uneom.com/industries/corporate/'
    }
  }
};

export const dynamic = 'force-static';

// Featured corporate products with updated images
const featuredProducts = [
  {
    id: '1',
    name: 'بدلات تنفيذية راقية | Executive Business Suits',
    image: '/images/products/corporate-suit-executive.jpg',
    price: 'من 799 ريال | From SAR 799',
    href: '/shop/corporate/executive-business-suits/',
    category: 'أزياء تنفيذية | Executive Wear'
  },
  {
    id: '2',
    name: 'قمصان وبلوزات مهنية | Professional Shirts & Blouses',
    image: '/images/business-professionals-meeting.jpg',
    price: 'من 149 ريال | From SAR 149',
    href: '/shop/corporate/professional-shirts/',
    category: 'قمصان مؤسسية | Business Shirts'
  },
  {
    id: '3',
    name: 'بولو شركات أنيق | Corporate Polo Shirts',
    image: '/images/products/corporate-polo-shirts.jpg',
    price: 'من 89 ريال | From SAR 89',
    href: '/shop/corporate/corporate-polo/',
    category: 'الزي اليومي | Casual Corporate'
  }
];

// Corporate benefits - bilingual
const corporateBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'تناسق الهوية المؤسسية | Brand Consistency',
    description: 'صورة مؤسسية موحدة تعزز هوية علامتك التجارية وقيمها عبر جميع الأقسام والفروع - Unified corporate image reinforcing brand identity.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'مظهر مهني متميز | Professional Image',
    description: 'رفع مستوى المظهر المهني للشركة وترك انطباع إيجابي لدى العملاء والشركاء - Elevate professional appearance and create positive impressions.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'رضا الموظفين | Employee Satisfaction',
    description: 'أزياء مريحة ومناسبة تعزز ثقة الموظفين ورضاهم في بيئة العمل - Comfortable uniforms boosting employee confidence and satisfaction.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: 'كفاءة التكلفة | Cost Efficiency',
    description: 'عملية شراء مبسطة ومزايا الطلب بالجملة التي تقلل التكاليف الإجمالية للأزياء - Streamlined procurement reducing overall costs.'
  }
];

// Premium fabrics for corporate
const corporateFabrics = [
  {
    name: 'أقمشة مؤسسية فاخرة | Premium Corporate Fabrics',
    description: 'خلطات صوف وبوليستر فاخرة مقاومة للتجعد مع مظهر مهني راقي ومتانة عالية - Premium wool-polyester blends with professional appearance',
    image: '/images/fabric-cotton-blends.webp'
  },
  {
    name: 'تقنية مقاومة التجعد | Anti-Wrinkle Technology',
    description: 'تقنيات متقدمة تحافظ على المظهر المهني طوال اليوم دون الحاجة للكي المتكرر - Advanced technology maintaining professional appearance all day',
    image: '/images/uneom_moisture_wicking.webp'
  },
  {
    name: 'حماية من البقع | Stain Protection',
    description: 'معالجة خاصة للأقمشة تقاوم البقع وتسهل التنظيف للحفاظ على المظهر المهني - Special fabric treatment for professional appearance',
    image: '/images/uneom_antimicrobial_treatment.webp'
  }
];

export default function CorporateIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="الأزياء المؤسسية | يونيفورم شركات احترافي السعودية | يونيوم"
        description="أزياء مؤسسية راقية واحترافية للشركات والمؤسسات السعودية. يونيفورم يعزز الهوية المؤسسية ويعكس الاحترافية والتميز."
        keywords={[
          'أزياء شركات السعودية',
          'يونيفورم مؤسسي الرياض',
          'زي موظفين شركات',
          'أزياء مكاتب احترافية',
          'corporate uniforms Saudi',
          'business attire Riyadh',
          'office uniforms KSA'
        ]}
        author="فريق خبراء يونيوم للشركات | UNEOM Corporate Team"
        expertise="الأزياء المؤسسية وأزياء الشركات | Corporate Uniforms & Business Attire"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/corporate/"
        locale="ar"
        trustSignals={[
          'نخدم أكبر الشركات في المملكة',
          'أكثر من 300 مؤسسة تثق بنا',
          'تصاميم تعزز الهوية المؤسسية',
          'جودة احترافية ومعايير عالمية'
        ]}
      />

      {/* UPDATED Hero Section according to 2025 plan */}
      <section className="corporate-hero bg-gradient-to-br from-gray-800 via-blue-900 to-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'الصناعات | Industries', href: '/industries' },
              { label: 'الشركات | Corporate', href: '/industries/corporate' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              {/* UPDATED H1 according to the plan */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                الأزياء المؤسسية | يونيفورم شركات احترافي السعودية
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                أزياء تعكس الاحترافية والتميز في بيئة الأعمال السعودية
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                نصمم أزياء مؤسسية راقية تعزز الهوية المؤسسية وتعكس قيم الشركة. 
                نخدم الشركات الكبرى والمؤسسات الحكومية والبنوك في جميع أنحاء المملكة 
                لنضمن مظهراً مهنياً متميزاً يليق بمكانة الأعمال السعودية.
              </p>
              
              {/* Corporate Stats */}
              <div className="corporate-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">300+</span>
                  <span className="text-sm md:text-base text-blue-200">شركة ومؤسسة</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">50,000+</span>
                  <span className="text-sm md:text-base text-blue-200">زي مؤسسي سنوياً</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">500</span>
                  <span className="text-sm md:text-base text-blue-200">عميل راضي</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=corporate"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  احصل على عرض سعر مؤسسي مجاني
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  تصفح الأزياء المؤسسية
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-corporate-uniforms.jpg"
                  alt="موظفو شركة في بيئة مؤسسية يرتدون أزياء احترافية أنيقة من يونيوم"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Image gallery thumbnails */}
              <div className="image-gallery grid grid-cols-3 gap-4 mt-6">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate-suit-executive.jpg"
                    alt="بدلة تنفيذية راقية للمدراء والقيادات"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/business-professionals-meeting.jpg"
                    alt="فريق عمل مؤسسي في اجتماع بأزياء مهنية"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate-polo-shirts.jpg"
                    alt="قمصان بولو مؤسسية للزي اليومي"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI-Optimized Q&A Section for corporate uniforms */}
      <section className="corporate-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول الأزياء المؤسسية في السعودية
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-gray-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                ما هي أفضل أزياء الشركات والمؤسسات في السعودية؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تقدم أفضل الأزياء المؤسسية في السعودية:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>تصاميم مؤسسية راقية تعزز الهوية المهنية</li>
                    <li>أقمشة فاخرة مقاومة للتجعد ومناسبة لبيئة المكاتب</li>
                    <li>خدمة أكثر من 300 شركة ومؤسسة في المملكة</li>
                    <li>تخصيص كامل للشعارات والألوان المؤسسية</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-blue-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                كيف يمكن تخصيص الأزياء المؤسسية حسب هوية الشركة؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تقدم خدمات تخصيص شاملة للأزياء المؤسسية:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>🏢 تطريز شعار الشركة والهوية البصرية</li>
                    <li>🎨 ألوان مؤسسية مطابقة لهوية العلامة التجارية</li>
                    <li>👔 تصاميم مختلفة للمناصب (تنفيذي، إداري، موظف)</li>
                    <li>🏷️ تطريز الأسماء والمناصب والأقسام</li>
                    <li>📏 قصات مناسبة للثقافة المؤسسية والمهنية</li>
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
                <SectionHeading subtitle="أزياء مؤسسية احترافية | Professional Corporate Attire">
                  بناء الهوية المؤسسية من خلال الأزياء
                  <span className="block text-lg mt-2 text-gray-600">Building Corporate Identity Through Uniforms</span>
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في يونيوم، نفهم أن الزي المؤسسي أكثر من مجرد ملابس - إنه أداة قوية لبناء العلامة التجارية ووحدة الفريق. 
                  مجموعة الأزياء المؤسسية لدينا تجمع بين الجماليات المهنية والوظائف العملية 
                  لإنتاج أزياء تمثل قيم ومعايير شركتك.
                </p>
                <p className="text-gray-600 mb-8">
                  من قاعات الاجتماعات التنفيذية إلى الأدوار المواجهة للعملاء، 
                  أزياؤنا مصممة لترك انطباع دائم مع ضمان الراحة والثقة لفريقك.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  ناقش احتياجاتك المؤسسية | Discuss Corporate Needs
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/corporate-suit-executive.jpg"
                  alt="مدير تنفيذي يرتدي بدلة مؤسسية راقية من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Updated Key Benefits with bilingual content */}
          <section className="mb-16">
            <SectionHeading subtitle="لماذا تختار أزياء يونيوم المؤسسية | Why Choose Uneom Corporate Uniforms" centered>
              التميز في العلامة التجارية المؤسسية
              <span className="block text-lg mt-2 text-gray-600">Excellence in Corporate Branding</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {corporateBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Corporate Products Section */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="مجموعة الأزياء المؤسسية | Our Corporate Collection" centered>
              أزياء مؤسسية مميزة
              <span className="block text-lg mt-2 text-gray-600">Featured Corporate Uniforms</span>
            </SectionHeading>
            
            <div className="corporate-products">
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
                        {product.category === 'أزياء تنفيذية | Executive Wear' ? 
                          'بدلات فاخرة للمدراء والقيادات التنفيذية' :
                          product.category === 'قمصان مؤسسية | Business Shirts' ?
                          'قمصان وبلوزات مهنية أنيقة لبيئة المكاتب' :
                          'قمصان بولو مريحة للزي اليومي في الشركات'
                        }
                      </p>
                      <div className="features-list mb-4">
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>🏢 أقمشة مؤسسية فاخرة ومقاومة للتجعد</li>
                          <li>🇸🇦 تصميم يعكس الطابع المؤسسي السعودي</li>
                          <li>🎖️ تطريز الشعارات والهوية المؤسسية</li>
                          <li>👔 راحة ومهنية طوال ساعات العمل</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-700">{product.price}</span>
                        <Link href={product.href} className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                          اطلب الآن
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                عرض جميع الأزياء المؤسسية | View All Corporate Uniforms
              </Button>
            </div>
          </section>

          {/* Updated Fabric Technologies */}
          <section className="mb-16">
            <SectionHeading subtitle="تقنيات الأقمشة المتخصصة | Specialized Fabric Technologies" centered>
              الابتكار في أقمشة الأعمال
              <span className="block text-lg mt-2 text-gray-600">Innovation in Business Textiles</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {corporateFabrics.map((tech, index) => (
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

          {/* Corporate Testimonials - Arabic Focus */}
          <section className="corporate-testimonials mb-16">
            <SectionHeading subtitle="شهادات الشركاء المؤسسيين | Corporate Partners Testimonials" centered>
              موثوق من الشركات والمؤسسات الرائدة
              <span className="block text-lg mt-2 text-gray-600">Trusted by Leading Companies & Organizations</span>
            </SectionHeading>
            
            <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-700 font-semibold">م.ع</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">محمد العتيبي</h4>
                    <p className="text-sm text-gray-500">المدير التنفيذي - شركة سابك</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "أزياء يونيوم ساعدت في تعزيز الهوية المؤسسية لشركتنا. الجودة والتصميم المهني 
                  يعكس مكانة سابك كشركة رائدة في القطاع الصناعي."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-semibold">س.ر</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">سارة الراشد</h4>
                    <p className="text-sm text-gray-500">مديرة الموارد البشرية - البنك الأهلي</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "التصاميم المخصصة لفرق العمل المصرفية تجمع بين الأناقة المهنية والراحة. 
                  الموظفون يشعرون بالثقة والمهنية، والعملاء يلاحظون التميز في المظهر."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-700 font-semibold">أ.ح</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">أحمد الحميدان</h4>
                    <p className="text-sm text-gray-500">نائب الرئيس - أرامكو السعودية</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "شراكتنا مع يونيوم أضافت لمسة من الأناقة والاحترافية لفرق العمل. 
                  جودة التنفيذ والالتزام بالمواعيد يجعلهم الخيار الأمثل للشركات الكبرى."
                </p>
              </blockquote>
            </div>
          </section>

          {/* Enhanced Client Showcase */}
          <section className="corporate-clients mb-16">
            <SectionHeading subtitle="شركاء النجاح في القطاع المؤسسي السعودي | Corporate Success Partners" centered>
              نخدم رائدي الأعمال في المملكة
              <span className="block text-lg mt-2 text-gray-600">Serving Business Leaders in the Kingdom</span>
            </SectionHeading>
            
            <div className="clients-showcase mt-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="client-sector">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">🏢 الشركات الكبرى</h3>
                  <div className="space-y-4">
                    <div className="client-item p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">شركة أرامكو السعودية</h4>
                      <p className="text-gray-700">أزياء جميع المستويات من التنفيذية للفنية</p>
                    </div>
                    <div className="client-item p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">شركة سابك</h4>
                      <p className="text-gray-700">أزياء مؤسسية للمجمعات الصناعية</p>
                    </div>
                    <div className="client-item p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">مجموعة بن لادن</h4>
                      <p className="text-gray-700">تصاميم مخصصة للقطاع الإنشائي</p>
                    </div>
                  </div>
                </div>
                
                <div className="client-sector">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800">🏦 البنوك والمؤسسات المالية</h3>
                  <div className="space-y-4">
                    <div className="client-item p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">البنك الأهلي السعودي</h4>
                      <p className="text-blue-700">أزياء مصرفية راقية لجميع الفروع</p>
                    </div>
                    <div className="client-item p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">بنك الراجحي</h4>
                      <p className="text-blue-700">تصاميم مؤسسية إسلامية</p>
                    </div>
                    <div className="client-item p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">البنك السعودي للاستثمار</h4>
                      <p className="text-blue-700">أزياء استثمارية احترافية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Enhanced CTA */}
          <section className="corporate-cta text-center bg-gradient-to-r from-gray-700 to-blue-800 text-white rounded-2xl p-12">
            <div className="cta-content max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                هل تحتاج أزياء مؤسسية لشركة أو مؤسسة؟
                <span className="block text-xl md:text-2xl mt-4 text-blue-100">
                  Ready to Elevate Your Corporate Image?
                </span>
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                احصل على استشارة مجانية وعرض سعر مخصص للمشروع المؤسسي الخاص بك.
                انضم إلى أكثر من 300 شركة ومؤسسة تثق بيونيوم في المملكة.
              </p>
              
              <div className="cta-actions flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/quote?industry=corporate" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  احصل على عرض سعر مؤسسي مجاني
                </Link>
                <Link 
                  href="tel:+966112345678" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-lg transition-all duration-300"
                >
                  اتصل بخبراء الشركات
                </Link>
              </div>
              
              <div className="cta-features grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="feature">
                  <span className="block text-2xl mb-2">🏢</span>
                  <span className="text-sm">هوية مؤسسية متميزة</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🇸🇦</span>
                  <span className="text-sm">يعكس الطابع السعودي المهني</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">⭐</span>
                  <span className="text-sm">جودة احترافية عالمية</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🚚</span>
                  <span className="text-sm">تسليم سريع لجميع الفروع</span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}