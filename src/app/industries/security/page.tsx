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
  title: 'Security Guard Uniforms Saudi Arabia | Guard & Police Attire - UNEOM',
  titleAr: 'زي حراسة أمنية السعودية | ملابس الأمن والحراسة - يونيوم',
  description: 'Premium security uniforms in Saudi Arabia. Guard uniforms, security officer attire, tactical wear for private security, malls, events in Riyadh, Jeddah, Dammam. Professional appearance, durable fabrics!',
  descriptionAr: 'أفضل زي أمني في السعودية. زي حراسة، ملابس ضباط الأمن للشركات الأمنية والمولات والفعاليات. مظهر احترافي وأقمشة متينة!',
  keywords: [
    'security uniforms saudi arabia',
    'guard uniforms riyadh',
    'security officer attire ksa',
    'private security uniforms',
    'mall security uniforms saudi',
    'event security uniforms',
    'tactical security wear',
    'security company uniforms',
    'UNEOM security uniforms',
  ],
  keywordsAr: [
    'زي أمن السعودية',
    'زي حراسة الرياض',
    'ملابس حراس الأمن',
    'زي شركات أمنية',
    'زي أمن المولات',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/security',
  image: '/images/industries/security-uniforms-saudi.jpg',
  imageAlt: 'Security Guard Uniforms in Saudi Arabia - UNEOM',
  aiSummary: 'UNEOM provides premium security uniforms in Saudi Arabia. Our products include security guard uniforms, tactical wear, mall security attire, event security uniforms, and corporate security clothing. Serving private security companies, malls, hotels, and organizations in Riyadh, Jeddah, Dammam. Professional appearance with durable, comfortable fabrics. Custom branding with company logos available.',
  aiSummaryAr: 'توفر يونيوم أفضل أزياء الأمن في السعودية. تشمل منتجاتنا زي الحراسة الأمنية، الملابس التكتيكية، زي أمن المولات، زي أمن الفعاليات. نخدم شركات الأمن الخاصة والمولات والفنادق.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const securityFAQs = [
  {
    question: 'What types of security uniforms does UNEOM offer in Saudi Arabia?',
    questionAr: 'ما أنواع أزياء الأمن التي تقدمها يونيوم في السعودية؟',
    answer: 'UNEOM offers comprehensive security uniforms in Saudi Arabia including: Security Guard Uniforms (shirts, trousers, complete sets), Tactical Security Wear (cargo pants, tactical shirts), Mall Security Uniforms (professional appearance for retail environments), Event Security Attire (temporary and permanent event staff), Corporate Security Clothing (executive protection uniforms), Security Accessories (belts, caps, ties, badges), and Custom Security Uniforms with company branding.',
    answerAr: 'تقدم يونيوم أزياء أمنية شاملة في السعودية تشمل: زي الحراسة الأمنية (قمصان، بناطيل، أطقم كاملة)، الملابس التكتيكية، زي أمن المولات، زي أمن الفعاليات، ملابس الأمن المؤسسي، إكسسوارات الأمن، وأزياء أمنية مخصصة بعلامة الشركة التجارية.'
  },
  {
    question: 'Does UNEOM supply uniforms to private security companies?',
    questionAr: 'هل توفر يونيوم الأزياء لشركات الأمن الخاصة؟',
    answer: 'Yes, UNEOM is a trusted uniform supplier for private security companies across Saudi Arabia. We serve many leading security firms providing complete uniform solutions. Our security uniforms project authority and professionalism while ensuring comfort during long duty hours. We offer bulk pricing for security companies.',
    answerAr: 'نعم، يونيوم مورد موثوق للأزياء لشركات الأمن الخاصة في جميع أنحاء السعودية. نخدم العديد من شركات الأمن الرائدة بحلول أزياء كاملة. أزياء الأمن لدينا تعكس السلطة والاحترافية مع ضمان الراحة خلال ساعات الخدمة الطويلة.'
  },
  {
    question: 'What is the price of security guard uniforms?',
    questionAr: 'ما سعر زي الحراسة الأمنية؟',
    answer: 'UNEOM security uniform pricing is competitive. Basic security shirts start from SAR 89. Security trousers start from SAR 99. Complete uniform sets start from SAR 249. Tactical wear starts from SAR 199. For bulk orders (50+ pieces), we offer discounts up to 25%.',
    answerAr: 'أسعار زي الأمن من يونيوم تنافسية. قمصان الأمن تبدأ من 89 ريال. البناطيل من 99 ريال. الأطقم الكاملة من 249 ريال. الملابس التكتيكية من 199 ريال. للطلبات بالجملة (50+ قطعة) نقدم خصومات تصل إلى 25%.'
  },
  {
    question: 'Can security uniforms be customized with company logos?',
    questionAr: 'هل يمكن تخصيص أزياء الأمن بشعار الشركة؟',
    answer: 'Yes! Custom branding is essential for security uniforms. We offer embroidered company logos, rank insignia and badges, reflective name tapes, custom color schemes, and department identification. Professional branding enhances authority and company identity.',
    answerAr: 'نعم! التصميم المخصص ضروري لأزياء الأمن. نقدم شعارات الشركة المطرزة، شارات الرتب، أشرطة الأسماء العاكسة، مخططات الألوان المخصصة، وتحديد الأقسام.'
  },
  {
    question: 'How durable are UNEOM security uniforms?',
    questionAr: 'ما مدى متانة أزياء يونيوم الأمنية؟',
    answer: 'UNEOM security uniforms are built for durability. We use reinforced stitching at stress points, heavy-duty fabric blends that resist wear, stain-resistant treatments for easy maintenance, and fade-resistant dyes for long-lasting appearance. Our uniforms maintain professional appearance through daily wear and frequent washing.',
    answerAr: 'أزياء يونيوم الأمنية مصممة للمتانة. نستخدم خياطة معززة في نقاط الإجهاد، خلطات أقمشة ثقيلة مقاومة للتآكل، معالجات مقاومة للبقع للصيانة السهلة، وصبغات مقاومة للبهتان للمظهر الدائم.'
  },
  {
    question: 'How fast can UNEOM deliver security uniforms?',
    questionAr: 'كم تستغرق يونيوم في توصيل أزياء الأمن؟',
    answer: 'UNEOM offers quick delivery for security uniforms. Stock items within 5-7 business days. Custom branded uniforms take 10-14 business days. Large security company orders require 14-21 business days. Rush service available for urgent staffing needs. Delivery nationwide.',
    answerAr: 'تقدم يونيوم توصيل سريع لأزياء الأمن. المنتجات المتوفرة خلال 5-7 أيام عمل. الأزياء المخصصة تستغرق 10-14 يوم عمل. طلبات شركات الأمن الكبيرة تتطلب 14-21 يوم عمل. الخدمة السريعة متاحة للاحتياجات العاجلة.'
  },
];

const featuredProducts = [
  {
    id: '1',
    name: 'Security Guard Uniform Set',
    description: 'Complete uniform set: shirt, trousers, belt. Professional appearance for guards.',
    image: '/images/products/security-uniform.jpg',
    price: 'From SAR 249',
    href: '/shop/security-uniforms/guard-uniform/',
    category: 'Guard Uniforms',
    features: ['Professional look', 'Comfortable fit', 'Durable fabric']
  },
  {
    id: '2',
    name: 'Tactical Security Wear',
    description: 'Tactical cargo pants and shirts for active security roles.',
    image: '/images/products/tactical-security.jpg',
    price: 'From SAR 199',
    href: '/shop/security-uniforms/tactical-wear/',
    category: 'Tactical',
    features: ['Multiple pockets', 'Reinforced knees', 'Flexible movement']
  },
  {
    id: '3',
    name: 'Mall Security Uniforms',
    description: 'Smart uniforms for retail security staff with professional appearance.',
    image: '/images/products/mall-security.jpg',
    price: 'From SAR 229',
    href: '/shop/security-uniforms/mall-security/',
    category: 'Retail Security',
    features: ['Smart design', 'Comfortable', 'Retail friendly']
  },
  {
    id: '4',
    name: 'Event Security Attire',
    description: 'Visible security uniforms for events, concerts, and gatherings.',
    image: '/images/products/event-security.jpg',
    price: 'From SAR 179',
    href: '/shop/security-uniforms/event-security/',
    category: 'Event Security',
    features: ['High visibility', 'Easy identification', 'Crowd control']
  },
  {
    id: '5',
    name: 'Security Supervisor Uniform',
    description: 'Distinguished uniforms for security supervisors and managers.',
    image: '/images/products/security-supervisor.jpg',
    price: 'From SAR 349',
    href: '/shop/security-uniforms/supervisor/',
    category: 'Supervisor',
    features: ['Authority appearance', 'Premium fabric', 'Rank insignia']
  },
  {
    id: '6',
    name: 'Security Accessories',
    description: 'Belts, caps, ties, badges, and essential security accessories.',
    image: '/images/products/security-accessories.jpg',
    price: 'From SAR 49',
    href: '/shop/security-uniforms/accessories/',
    category: 'Accessories',
    features: ['Complete look', 'Durable materials', 'Professional finish']
  },
];

const securityBenefits = [
  {
    icon: '🛡️',
    title: 'Authority & Presence',
    description: 'Uniforms designed to project authority and command respect. Professional appearance enhances security presence.',
  },
  {
    icon: '💪',
    title: 'Durability',
    description: 'Heavy-duty fabrics and reinforced construction built to withstand active duty and frequent use.',
  },
  {
    icon: '😊',
    title: 'Comfort',
    description: 'Ergonomic designs and breathable fabrics ensure comfort during long security shifts.',
  },
  {
    icon: '👔',
    title: 'Custom Branding',
    description: 'Professional branding with company logos, rank insignia, and custom designs.',
  },
];

// ============================================
// SECURITY PAGE COMPONENT
// ============================================
export default function SecurityIndustryPage() {
  return (
    <>
      <SEO2026
        title="Security Guard Uniforms Saudi Arabia"
        titleAr="زي الحراسة الأمنية في السعودية"
        description="UNEOM provides professional security uniforms for guards and security companies in Saudi Arabia."
        descriptionAr="توفر يونيوم أزياء أمنية احترافية للحراس وشركات الأمن في السعودية."
        locale="en"
        pageType="industry"
        mainEntity="Security Uniforms and Guard Attire"
        mainEntityAr="أزياء الأمن وملابس الحراسة"
        primaryImage="/images/industries/security-uniforms-saudi.jpg"
        primaryImageAlt="Security Guard Uniforms in Saudi Arabia"
        faqs={securityFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Security', nameAr: 'الأمن', url: '/industries/security' },
        ]}
        conversationalKeywords={[
          'where to buy security uniforms Saudi Arabia',
          'guard uniform supplier Riyadh',
        ]}
        voiceSearchQueries={[
          'Find security uniforms in Riyadh',
          'Order guard uniforms Saudi Arabia',
        ]}
        certifications={['ISO 9001:2015']}
        clientCount={150}
        yearsInBusiness={20}
        industry="Security"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Security', href: '/industries/security' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-red-400">🛡️</span>
                <span className="text-sm font-medium">Trusted by 150+ Security Companies in Saudi Arabia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Security Guard Uniforms in{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
                  Saudi Arabia
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
                Professional security uniforms for guards, malls, and events. 
                Authority appearance with durable, comfortable fabrics.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🛡️ Authority Look</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">💪 Durable</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">👔 Custom Branding</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 Fast Delivery</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=security"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold border-0"
                >
                  Get Free Security Quote →
                </Button>
                <Button 
                  href="/shop/security-uniforms"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Shop Security Uniforms
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/industries/security/hero-security.jpg"
                  alt="Security guards wearing UNEOM uniforms in Saudi Arabia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-red-600">150+</div>
                <div className="text-sm text-gray-600">Security Companies</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="Why Security Companies Choose UNEOM" centered>
              Professional Security Uniforms
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {securityBenefits.map((benefit, index) => (
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
            <SectionHeading subtitle="Our Security Collection" centered>
              Security Guard Uniforms & Attire
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} in Saudi Arabia`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{feature}</span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-lg font-bold text-red-600">{product.price}</span>
                      <Link href={product.href} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/security-uniforms" variant="primary" size="lg">View All Security Products</Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Security Uniforms FAQ</SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {securityFAQs.slice(0, 6).map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-slate-800 to-gray-800 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Outfit Your Security Team?</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-gray-300">
              Join 150+ security companies across Saudi Arabia that trust UNEOM for professional uniforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?industry=security" className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg">
                Get Free Security Quote →
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-xl transition-all duration-300">
                Contact Us Now
              </Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/industries/security" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
