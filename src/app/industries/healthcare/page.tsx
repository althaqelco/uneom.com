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
  title: 'أزياء طبية عالية الجودة | سكرابز ويونيفورم طبي في السعودية | يونيوم',
  description: 'أزياء طبية متخصصة وسكرابز عالية الجودة للمستشفيات والعيادات في السعودية. أقمشة مضادة للبكتيريا ومريحة للمناخ السعودي مع توصيل سريع لجميع المدن.',
  keywords: 'أزياء طبية السعودية, سكرابز طبية الرياض, يونيفورم مستشفيات, أزياء تمريض, معاطف طبية, medical scrubs Saudi, nursing uniforms Riyadh, healthcare uniforms KSA',
  openGraph: {
    title: 'أزياء طبية عالية الجودة | سكرابز ويونيفورم طبي في السعودية',
    description: 'أزياء طبية متخصصة للقطاع الصحي السعودي. جودة عالية وراحة متقدمة للعاملين في المستشفيات والعيادات.',
    url: 'https://uneom.com/industries/healthcare/',
    siteName: 'Uneom - يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/hero-healthcare-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء طبية عالية الجودة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/industries/healthcare/',
    languages: {
      'en-SA': 'https://uneom.com/industries/healthcare/',
      'ar-SA': 'https://uneom.com/ar/industries/healthcare/',
      'x-default': 'https://uneom.com/industries/healthcare/'
    }
  }
};

export const dynamic = 'force-static';

// Featured healthcare products with updated images
const featuredProducts = [
  {
    id: '1',
    name: 'سكرابز طبية فاخرة | Premium Medical Scrubs',
    image: '/images/products/scrubs-set.jpg',
    price: 'من 189 ريال | From SAR 189',
    href: '/shop/medical-scrubs/premium-medical-scrubs/',
    category: 'سكرابز طبية | Medical Scrubs'
  },
  {
    id: '2',
    name: 'معاطف طبية احترافية | Professional Lab Coats',
    image: '/images/products/lab-coat.jpg',
    price: 'من 249 ريال | From SAR 249',
    href: '/shop/medical-scrubs/professional-lab-coat/',
    category: 'معاطف طبية | Lab Coats'
  },
  {
    id: '3',
    name: 'أزياء تمريض مريحة | Nursing Uniforms',
    image: '/images/products/nursing-uniform.jpg',
    price: 'من 169 ريال | From SAR 169',
    href: '/shop/medical-scrubs/nursing-scrubs/',
    category: 'أزياء تمريض | Nursing Uniforms'
  }
];

// Healthcare benefits - bilingual
const healthcareBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'حماية مضادة للبكتيريا | Antimicrobial Protection',
    description: 'علاجات متقدمة مضادة للبكتيريا تمنع نمو البكتيريا وتحافظ على معايير النظافة - Advanced antimicrobial treatments that inhibit bacterial growth.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'إدارة الرطوبة | Moisture Management',
    description: 'أقمشة تطرد الرطوبة تحافظ على جفاف وراحة المختصين الطبيين في البيئات الصعبة - Moisture-wicking fabrics for comfort.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'راحة ومتانة | Comfort & Durability',
    description: 'تصاميم مريحة مع نقاط تقوية لضمان الراحة والمظهر المهني الدائم - Ergonomic designs with reinforced stress points.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'متوافق مع المعايير | Compliance Ready',
    description: 'جميع الأزياء تلبي لوائح الصحة السعودية والمعايير الدولية للبيئات الطبية - Meets Saudi healthcare regulations.'
  }
];

// Fabric technologies with Arabic
const fabricTechnologies = [
  {
    name: 'العلاج المضاد للبكتيريا | Antimicrobial Treatment',
    description: 'تقنية الأيونات الفضية التي توفر حماية دائمة ضد البكتيريا والروائح - Silver-ion technology for lasting protection',
    image: '/images/uneom_antimicrobial_treatment.webp'
  },
  {
    name: 'طرد الرطوبة | Moisture Wicking',
    description: 'خلطات البوليستر المتقدمة التي تنقل الرطوبة بعيداً عن الجلد - Advanced polyester blends that move moisture away',
    image: '/images/uneom_moisture_wicking.webp'
  },
  {
    name: 'إزالة البقع | Stain Release',
    description: 'علاجات خاصة للأقمشة تجعل التنظيف أسهل وتحافظ على المظهر - Special fabric treatments for easier cleaning',
    image: '/images/fabric-cotton-blends.webp'
  }
];

export default function HealthcareIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="أزياء طبية عالية الجودة | سكرابز ويونيفورم طبي في السعودية | يونيوم"
        description="أزياء طبية متخصصة وسكرابز عالية الجودة للمستشفيات والعيادات في السعودية. أقمشة مضادة للبكتيريا ومريحة للمناخ السعودي."
        keywords={[
          'أزياء طبية السعودية',
          'سكرابز طبية الرياض',
          'يونيفورم مستشفيات',
          'أزياء تمريض',
          'معاطف طبية',
          'medical scrubs Saudi',
          'nursing uniforms Riyadh',
          'healthcare uniforms KSA'
        ]}
        author="فريق خبراء يونيوم الطبي | UNEOM Healthcare Team"
        expertise="الأزياء الطبية والسكرابز المتخصصة | Healthcare Uniforms & Medical Scrubs"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/healthcare/"
        locale="ar"
        trustSignals={[
          'معتمدون ISO 9001 للجودة الطبية',
          'أكثر من 200 مستشفى يثق بنا',
          'أقمشة مضادة للبكتيريا معتمدة',
          'توصيل سريع لجميع مدن المملكة'
        ]}
      />

      {/* UPDATED Hero Section according to 2025 plan */}
      <section className="medical-hero bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'الصناعات | Industries', href: '/industries' },
              { label: 'القطاع الطبي | Healthcare', href: '/industries/healthcare' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              {/* UPDATED H1 according to the plan */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                أزياء طبية عالية الجودة | سكرابز ويونيفورم طبي في السعودية
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                الأزياء الطبية الأكثر ثقة في المملكة العربية السعودية
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                يونيوم تقدم مجموعة شاملة من الأزياء الطبية المصممة خصيصاً للمناخ السعودي 
                والمعايير الصحية الصارمة. نخدم أكثر من 200 مستشفى وعيادة في المملكة.
              </p>
              
              {/* Medical Features */}
              <div className="medical-features grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="feature text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">🦠</span>
                  <h3 className="font-semibold mb-1">أقمشة مضادة للبكتيريا</h3>
                  <p className="text-sm text-blue-200">حماية متقدمة ضد العدوى</p>
                </div>
                
                <div className="feature text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">💧</span>
                  <h3 className="font-semibold mb-1">تقنية امتصاص الرطوبة</h3>
                  <p className="text-sm text-blue-200">راحة في المناخ السعودي</p>
                </div>
                
                <div className="feature text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">🧽</span>
                  <h3 className="font-semibold mb-1">سهولة العناية</h3>
                  <p className="text-sm text-blue-200">مقاومة للبقع وسريعة الجفاف</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=healthcare"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  احصل على عرض سعر طبي مجاني
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  تصفح المنتجات الطبية
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-healthcare-uniforms.jpg"
                  alt="ممرضات سعوديات يرتدن أزياء طبية عالية الجودة من يونيوم"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Image gallery thumbnails */}
              <div className="image-gallery grid grid-cols-3 gap-4 mt-6">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/nursing-uniform.jpg"
                    alt="يونيفورم تمريض أنيق ومريح"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/lab-coat.jpg"
                    alt="معطف طبي أبيض فاخر للأطباء"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/scrubs-set.jpg"
                    alt="طقم سكرابز طبي كامل بألوان مختلفة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI-Optimized Q&A Section for medical uniforms */}
      <section className="medical-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول الأزياء الطبية في السعودية
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-blue-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                ما هي أفضل أنواع الأقمشة للأزياء الطبية في السعودية؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تستخدم أجود أنواع الأقمشة المناسبة للمناخ السعودي:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>أقمشة قطنية مخلوطة بالبوليستر (65% قطن، 35% بوليستر)</li>
                    <li>تقنيات مضادة للبكتيريا باستخدام أيونات الفضة</li>
                    <li>خصائص طرد الرطوبة للراحة في الحر</li>
                    <li>مقاومة البقع والتجعد</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-green-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                أين يمكن شراء سكرابز طبية عالية الجودة في الرياض؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم الرياض</strong> هي الخيار الأمثل للسكرابز الطبية:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>✅ توصيل مجاني خلال 24 ساعة في الرياض</li>
                    <li>✅ أكثر من 50 مستشفى في العاصمة يثق بنا</li>
                    <li>✅ خصومات خاصة للمستشفيات والعيادات</li>
                    <li>✅ خدمة عملاء متخصصة باللغة العربية</li>
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
                <SectionHeading subtitle="أزياء طبية احترافية | Professional Medical Attire">
                  التميز في الأزياء الطبية
                  <span className="block text-lg mt-2 text-gray-600">Excellence in Healthcare Uniforms</span>
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في يونيوم، نتفهم أن المختصين الطبيين يحتاجون إلى أزياء تعمل بجد مثلهم. 
                  مجموعة الأزياء الطبية لدينا تجمع بين تقنية الأقمشة المتطورة والتصميم المهني 
                  لإنتاج أزياء طبية تلبي المتطلبات الصعبة للمرافق الصحية السعودية.
                </p>
                <p className="text-gray-600 mb-8">
                  من العلاجات المضادة للبكتيريا التي تحافظ على معايير النظافة إلى الأقمشة الطاردة للرطوبة 
                  التي تضمن الراحة أثناء المناوبات الطويلة، كل تفصيل مصمم مع وضع المختصين الطبيين في الاعتبار.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  ناقش متطلباتك الطبية | Discuss Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/scrubs-set.jpg"
                  alt="طقم سكرابز طبي فاخر من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Updated Key Benefits with bilingual content */}
          <section className="mb-16">
            <SectionHeading subtitle="لماذا تختار أزياء يونيوم الطبية | Why Choose Uneom Healthcare Uniforms" centered>
              مميزات متقدمة للمختصين الطبيين
              <span className="block text-lg mt-2 text-gray-600">Advanced Features for Healthcare Professionals</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {healthcareBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Medical Products Section */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="مجموعتنا الطبية | Our Healthcare Collection" centered>
              منتجات طبية مميزة
              <span className="block text-lg mt-2 text-gray-600">Featured Medical Uniforms</span>
            </SectionHeading>
            
            <div className="medical-products">
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
                        {product.category === 'سكرابز طبية | Medical Scrubs' ? 
                          'تصاميم مريحة وعملية للممرضات والممرضين' :
                          product.category === 'معاطف طبية | Lab Coats' ?
                          'معاطف فاخرة للأطباء والاستشاريين' :
                          'أزياء تمريض أنيقة وعملية'
                        }
                      </p>
                      <div className="features-list mb-4">
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>✅ أقمشة قطنية مختلطة عالية الجودة</li>
                          <li>✅ مقاومة للبكتيريا والبقع</li>
                          <li>✅ تصميم مريح للحركة الطويلة</li>
                          <li>✅ ألوان متنوعة حسب التخصص</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-600">{product.price}</span>
                        <Link href={product.href} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          اطلب الآن
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/medical-scrubs/" variant="primary" size="lg">
                عرض جميع المنتجات الطبية | View All Healthcare Products
              </Button>
            </div>
          </section>

          {/* Updated Fabric Technologies */}
          <section className="mb-16">
            <SectionHeading subtitle="تقنية الأقمشة المتقدمة | Advanced Fabric Technology" centered>
              الابتكار في المنسوجات الطبية
              <span className="block text-lg mt-2 text-gray-600">Innovation in Medical Textiles</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {fabricTechnologies.map((tech, index) => (
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

          {/* Medical Testimonials - Arabic Focus */}
          <section className="medical-testimonials mb-16">
            <SectionHeading subtitle="قصص نجاح العملاء | Client Success Stories" centered>
              موثوق من المختصين الطبيين
              <span className="block text-lg mt-2 text-gray-600">Trusted by Healthcare Professionals</span>
            </SectionHeading>
            
            <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">د.ف</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">د. فاطمة أحمد</h4>
                    <p className="text-sm text-gray-500">ممرضة رئيسية - مستشفى الملك فهد</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "أزياء يونيوم الطبية مريحة جداً خلال المناوبات الطويلة ولا تحتاج صيانة معقدة. 
                  الجودة ممتازة ومقاومة للبقع."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">د.ع</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">د. عمر السعيد</h4>
                    <p className="text-sm text-gray-500">استشاري جراحة - مستشفى سعود الطبية</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "جودة الأقمشة ممتازة ومقاومة للبقع. نوصي بها لجميع المستشفيات. 
                  التصميم مهني ومريح للعمل الطويل."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">د.ن</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">د. نورا المطيري</h4>
                    <p className="text-sm text-gray-500">مديرة التمريض - مجمع الدمام الطبي</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "خيارات التخصيص الممتازة سمحت لنا بالحفاظ على هوية المستشفى 
                  مع ضمان الامتثال للوائح الصحية."
                </p>
              </blockquote>
            </div>
          </section>

          {/* Enhanced Customization Section */}
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="customization-options">
                <SectionHeading subtitle="حلول مخصصة | Tailored Solutions">
                  أزياء طبية مخصصة
                  <span className="block text-lg mt-2 text-gray-600">Custom Healthcare Uniforms</span>
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  كل مرفق صحي له متطلبات فريدة. خدمات التخصيص لدينا تضمن أن تعكس أزيائكم 
                  علامتكم التجارية مع تلبية الاحتياجات الوظيفية المحددة.
                </p>
                <div className="customization-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-800">خيارات التخصيص:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        تطريز مخصص ووضع الشعارات
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        ترميز الألوان حسب القسم
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        تكوينات جيوب متخصصة
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        مقاسات من XS إلى 5XL
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-800">المميزات الطبية:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        أقمشة مضادة للبكتيريا معتمدة
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        مقاومة للسوائل والبقع
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        سهولة الغسيل والتعقيم
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        متوافق مع معايير وزارة الصحة
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <Button href="/services/custom-design/" variant="primary" size="lg">
                    استكشف التخصيص | Explore Customization
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/hospitality_uniform_concierge.jpg"
                  alt="أزياء طبية مخصصة عالية الجودة"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Final Enhanced CTA */}
          <section className="medical-cta text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-12">
            <div className="cta-content max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                هل تحتاج أزياء طبية لمستشفى أو عيادة؟
                <span className="block text-xl md:text-2xl mt-4 text-blue-100">
                  Ready to Upgrade Your Healthcare Uniforms?
                </span>
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك.
                انضم إلى مئات المرافق الصحية في المملكة التي تثق بيونيوم.
              </p>
              
              <div className="cta-actions flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/quote?industry=healthcare" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  احصل على عرض سعر مجاني
                </Link>
                <Link 
                  href="tel:+966112345678" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-lg transition-all duration-300"
                >
                  اتصل بنا الآن
                </Link>
              </div>
              
              <div className="cta-features grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="feature">
                  <span className="block text-2xl mb-2">🚚</span>
                  <span className="text-sm">توصيل خلال 48 ساعة</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">✅</span>
                  <span className="text-sm">ضمان الجودة</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">💰</span>
                  <span className="text-sm">أسعار تنافسية</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🎯</span>
                  <span className="text-sm">خدمة عملاء متميزة</span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}