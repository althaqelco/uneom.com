import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

// ============================================
// SEO 2026 OPTIMIZED METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'School Uniforms Saudi Arabia | Student & Teacher Uniforms - UNEOM',
  titleAr: 'الزي المدرسي في السعودية | زي الطلاب والمعلمين - يونيوم',
  description: 'Buy quality school uniforms in Saudi Arabia. Student uniforms for boys & girls, teacher attire, PE uniforms. For schools in Riyadh, Jeddah, Dammam. Bulk orders, custom designs, affordable prices!',
  descriptionAr: 'اشتري أفضل زي مدرسي في السعودية. زي طلاب بنين وبنات، زي معلمين، زي رياضة. للمدارس في الرياض وجدة والدمام. طلبات بالجملة، تصاميم مخصصة، أسعار منافسة!',
  keywords: [
    'school uniforms saudi arabia',
    'student uniforms riyadh',
    'school uniform supplier ksa',
    'boys school uniform saudi',
    'girls school uniform saudi',
    'teacher uniforms saudi arabia',
    'PE uniforms schools',
    'international school uniforms',
    'private school uniforms riyadh',
    'bulk school uniforms order',
    'custom school uniforms',
    'UNEOM school uniforms',
  ],
  keywordsAr: [
    'زي مدرسي السعودية',
    'يونيفورم مدارس الرياض',
    'زي طلاب',
    'زي طالبات',
    'زي معلمين',
    'زي رياضة مدرسي',
    'مورد زي مدرسي',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/education',
  image: '/images/industries/education-uniforms-saudi.jpg',
  imageAlt: 'School Uniforms in Saudi Arabia - UNEOM Education Uniforms',
  aiSummary: 'UNEOM provides quality school uniforms in Saudi Arabia for students and teachers. Our products include boys school uniforms, girls school uniforms (including hijab options), PE and sports uniforms, teacher and faculty attire, and staff uniforms. We serve 200+ schools in Riyadh, Jeddah, Dammam including international schools, private schools, and government schools. Custom designs with school logos and colors available. Bulk order discounts, durable fabrics for active kids, and comfortable fits for all ages.',
  aiSummaryAr: 'توفر يونيوم زي مدرسي عالي الجودة في السعودية للطلاب والمعلمين. تشمل منتجاتنا زي الطلاب الذكور والإناث وزي الرياضة وزي المعلمين. نخدم أكثر من 200 مدرسة في الرياض وجدة والدمام.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const educationFAQs = [
  {
    question: 'What types of school uniforms does UNEOM offer in Saudi Arabia?',
    questionAr: 'ما أنواع الزي المدرسي التي تقدمها يونيوم في السعودية؟',
    answer: 'UNEOM offers comprehensive school uniforms in Saudi Arabia including: Boys School Uniforms (shirts, trousers, blazers, ties), Girls School Uniforms (dresses, skirts, blouses, abayas, hijabs), PE & Sports Uniforms (tracksuits, shorts, t-shirts), Teacher & Faculty Attire (professional clothing for educators), Staff Uniforms (for administrative and support staff), and Graduation Attire (caps, gowns for ceremonies). All uniforms can be customized with school logos, colors, and specific designs.',
    answerAr: 'تقدم يونيوم زي مدرسي شامل في السعودية يشمل: زي الطلاب الذكور (قمصان، بناطيل، بليزرات، ربطات عنق)، زي الطالبات (فساتين، تنانير، بلوزات، عباءات، حجاب)، زي الرياضة (بدلات رياضية، شورتات، تيشيرتات)، زي المعلمين والأساتذة، زي الموظفين، وزي التخرج. جميع الأزياء قابلة للتخصيص بشعار المدرسة وألوانها.'
  },
  {
    question: 'Does UNEOM supply uniforms to international schools?',
    questionAr: 'هل توفر يونيوم الزي للمدارس العالمية؟',
    answer: 'Yes, UNEOM is a trusted uniform supplier for international schools in Saudi Arabia. We serve many leading international schools in Riyadh, Jeddah, and across the Kingdom. We understand the specific requirements of international curricula (British, American, IB) and provide uniforms that meet those standards while ensuring comfort in Saudi Arabia\'s climate.',
    answerAr: 'نعم، يونيوم مورد موثوق للزي المدرسي للمدارس العالمية في السعودية. نخدم العديد من المدارس العالمية الرائدة في الرياض وجدة وجميع أنحاء المملكة. نفهم المتطلبات الخاصة للمناهج العالمية (البريطانية، الأمريكية، IB) ونقدم أزياء تلبي تلك المعايير مع ضمان الراحة في مناخ السعودية.'
  },
  {
    question: 'What is the price of school uniforms in Saudi Arabia?',
    questionAr: 'ما أسعار الزي المدرسي في السعودية؟',
    answer: 'UNEOM school uniform pricing is competitive and varies by item. Basic school shirts start from SAR 49. School trousers/skirts start from SAR 59. Complete uniform sets start from SAR 149. PE uniforms start from SAR 79. For bulk school orders (100+ students), we offer discounts up to 25%. Contact us for a custom quote for your school.',
    answerAr: 'أسعار الزي المدرسي من يونيوم تنافسية وتختلف حسب القطعة. القمصان المدرسية تبدأ من 49 ريال. البناطيل/التنانير من 59 ريال. الأطقم الكاملة من 149 ريال. زي الرياضة من 79 ريال. للطلبات المدرسية بالجملة (100+ طالب) نقدم خصومات تصل إلى 25%.'
  },
  {
    question: 'Can UNEOM add school logos to uniforms?',
    questionAr: 'هل يمكن ليونيوم إضافة شعار المدرسة على الزي؟',
    answer: 'Yes! Custom branding is a core service. We offer professional embroidery for school logos, screen printing for PE uniforms, woven badges and patches, custom colors matching school guidelines, and house colors for different groups. Our branding is durable and maintains quality through repeated washing.',
    answerAr: 'نعم! التصميم المخصص خدمة أساسية. نقدم التطريز المهني لشعارات المدارس، الطباعة الحريرية لزي الرياضة، الشارات المنسوجة، الألوان المخصصة حسب إرشادات المدرسة، وألوان المنازل للمجموعات المختلفة. العلامة التجارية لدينا متينة وتحافظ على الجودة عبر الغسيل المتكرر.'
  },
  {
    question: 'How fast can UNEOM deliver school uniforms?',
    questionAr: 'كم تستغرق يونيوم في توصيل الزي المدرسي؟',
    answer: 'UNEOM offers competitive delivery times. Stock items are available within 5-7 business days. Custom school uniforms take 10-15 business days. For back-to-school season, we recommend ordering 4-6 weeks in advance. Rush service is available for urgent needs. We deliver nationwide.',
    answerAr: 'تقدم يونيوم مواعيد توصيل تنافسية. المنتجات المتوفرة خلال 5-7 أيام عمل. الزي المخصص يستغرق 10-15 يوم عمل. لموسم العودة للمدارس، ننصح بالطلب قبل 4-6 أسابيع. الخدمة السريعة متاحة للاحتياجات العاجلة. نوصل لجميع أنحاء المملكة.'
  },
  {
    question: 'Are UNEOM school uniforms suitable for Saudi Arabia\'s climate?',
    questionAr: 'هل زي يونيوم المدرسي مناسب لمناخ السعودية؟',
    answer: 'Yes, all UNEOM school uniforms are designed specifically for Saudi Arabia\'s hot climate. We use breathable cotton-polyester blends, moisture-wicking fabrics, and lightweight materials that keep students comfortable throughout the school day. We also offer seasonal variations for winter months.',
    answerAr: 'نعم، جميع أزياء يونيوم المدرسية مصممة خصيصاً لمناخ السعودية الحار. نستخدم خلطات القطن-البوليستر القابلة للتنفس، الأقمشة الماصة للرطوبة، والمواد الخفيفة التي تبقي الطلاب مرتاحين طوال اليوم الدراسي. نقدم أيضاً تنويعات موسمية لأشهر الشتاء.'
  },
];

// ============================================
// PRODUCTS DATA
// ============================================
const featuredProducts = [
  {
    id: '1',
    name: 'Boys School Uniform Set',
    description: 'Complete uniform set for boys: shirt, trousers, and tie. Multiple sizes available.',
    image: '/images/products/boys-school-uniform.jpg',
    price: 'From SAR 149',
    href: '/shop/education-uniforms/boys-uniforms/',
    category: 'Boys Uniforms',
    features: ['Breathable cotton', 'Durable fabric', 'Easy care']
  },
  {
    id: '2',
    name: 'Girls School Uniform Set',
    description: 'Elegant uniform set for girls: dress/skirt, blouse. Modest options available.',
    image: '/images/products/girls-school-uniform.jpg',
    price: 'From SAR 159',
    href: '/shop/education-uniforms/girls-uniforms/',
    category: 'Girls Uniforms',
    features: ['Modest design', 'Comfortable fit', 'School colors']
  },
  {
    id: '3',
    name: 'PE & Sports Uniforms',
    description: 'Comfortable tracksuits and sports wear for physical education.',
    image: '/images/products/pe-uniform.jpg',
    price: 'From SAR 79',
    href: '/shop/education-uniforms/pe-uniforms/',
    category: 'PE Uniforms',
    features: ['Stretchy fabric', 'Quick dry', 'Athletic fit']
  },
  {
    id: '4',
    name: 'Teacher Professional Attire',
    description: 'Professional clothing for teachers and faculty members.',
    image: '/images/products/teacher-uniform.jpg',
    price: 'From SAR 199',
    href: '/shop/education-uniforms/teacher-uniforms/',
    category: 'Teacher Wear',
    features: ['Professional look', 'Comfortable', 'Smart design']
  },
  {
    id: '5',
    name: 'School Blazers',
    description: 'Smart blazers with school logo embroidery for formal occasions.',
    image: '/images/products/school-blazer.jpg',
    price: 'From SAR 179',
    href: '/shop/education-uniforms/blazers/',
    category: 'Formal Wear',
    features: ['Logo embroidery', 'Premium fabric', 'Classic design']
  },
  {
    id: '6',
    name: 'School Hijab Collection',
    description: 'Comfortable school hijabs in school colors for female students.',
    image: '/images/products/school-hijab.jpg',
    price: 'From SAR 39',
    href: '/shop/education-uniforms/hijabs/',
    category: 'Accessories',
    features: ['Breathable fabric', 'Easy wear', 'Multiple colors']
  },
];

const educationBenefits = [
  {
    icon: '📚',
    title: 'Quality & Durability',
    description: 'High-quality fabrics designed to withstand daily wear and frequent washing. Perfect for active students.',
  },
  {
    icon: '🌡️',
    title: 'Climate Comfort',
    description: 'Breathable fabrics optimized for Saudi Arabia\'s hot climate. Keeps students comfortable all day.',
  },
  {
    icon: '👥',
    title: 'Inclusive Sizing',
    description: 'Comprehensive size ranges from kindergarten to high school. Growth-friendly designs available.',
  },
  {
    icon: '🎓',
    title: 'School Pride',
    description: 'Custom designs with school logos and colors that build community identity and school pride.',
  },
];

// ============================================
// EDUCATION PAGE COMPONENT
// ============================================
export default function EducationIndustryPage() {
  return (
    <>
      <SEO2026
        title="School Uniforms Saudi Arabia"
        titleAr="الزي المدرسي في السعودية"
        description="UNEOM provides quality school uniforms for students and teachers in Saudi Arabia."
        descriptionAr="توفر يونيوم زي مدرسي عالي الجودة للطلاب والمعلمين في السعودية."
        locale="en"
        pageType="industry"
        mainEntity="School Uniforms and Education Attire"
        mainEntityAr="الزي المدرسي وملابس التعليم"
        primaryImage="/images/industries/education-uniforms-saudi.jpg"
        primaryImageAlt="School Uniforms in Saudi Arabia"
        faqs={educationFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Education', nameAr: 'التعليم', url: '/industries/education' },
        ]}
        conversationalKeywords={[
          'where to buy school uniforms Saudi Arabia',
          'best school uniform supplier Riyadh',
          'student uniforms near me',
        ]}
        voiceSearchQueries={[
          'Find school uniforms in Riyadh',
          'Order student uniforms online',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={200}
        yearsInBusiness={20}
        industry="Education"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Education', href: '/industries/education' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400">🎓</span>
                <span className="text-sm font-medium">Trusted by 200+ Schools in Saudi Arabia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                School Uniforms in{' '}
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">
                  Saudi Arabia
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-2xl">
                Quality school uniforms for students and teachers. 
                Comfortable, durable, and designed for Saudi Arabia's climate.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">📚 Quality Fabrics</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🎨 Custom Logos</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 Fast Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">💰 Bulk Discounts</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=education"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold border-0"
                >
                  Get Free School Quote →
                </Button>
                <Button 
                  href="/shop/education-uniforms"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-900"
                >
                  Shop School Uniforms
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/industries/education/hero-education-uniforms.jpg"
                  alt="Students wearing UNEOM school uniforms in Saudi Arabia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-sm text-gray-600">Schools Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="Why Schools Choose UNEOM" centered>
              Benefits for Your School
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {educationBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Products */}
          <section id="featured-products" className="mb-20">
            <SectionHeading subtitle="Our School Uniform Collection" centered>
              Quality Education Uniforms
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.category} in Saudi Arabia`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                      <Link 
                        href={product.href} 
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/education-uniforms" variant="primary" size="lg">
                View All School Uniforms
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              School Uniforms FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {educationFAQs.slice(0, 6).map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-green-700 to-emerald-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Outfit Your School?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-green-100">
              Join 200+ schools across Saudi Arabia that trust UNEOM for quality school uniforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote?industry=education" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 shadow-lg"
              >
                Get Free School Quote →
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold rounded-xl transition-all duration-300"
              >
                Contact Us Now
              </Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/industries/education" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
