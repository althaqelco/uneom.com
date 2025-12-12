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
  title: 'Corporate Uniforms & Business Attire Saudi Arabia | Office Workwear - UNEOM',
  titleAr: 'زي الشركات والملابس الرسمية في السعودية | ملابس المكاتب - يونيوم',
  description: 'Premium corporate uniforms & business attire in Saudi Arabia. Professional office uniforms for banks, companies, government in Riyadh, Jeddah. Executive suits, office wear, polo shirts. Custom branding!',
  descriptionAr: 'أفضل زي شركات وملابس رسمية في السعودية. زي مكاتب للبنوك والشركات والحكومة. بدلات تنفيذية، ملابس مكتبية، قمصان بولو. تصميم مخصص بشعار الشركة!',
  keywords: [
    'corporate uniforms saudi arabia',
    'business attire riyadh',
    'office uniforms ksa',
    'company uniforms jeddah',
    'professional workwear saudi',
    'executive suits riyadh',
    'bank uniforms saudi arabia',
    'government uniforms ksa',
    'corporate polo shirts',
    'office dress code uniforms',
    'custom corporate uniforms',
    'bulk business attire order',
    'UNEOM corporate uniforms',
  ],
  keywordsAr: [
    'زي شركات السعودية',
    'ملابس رسمية الرياض',
    'زي مكاتب السعودية',
    'بدلات تنفيذية جدة',
    'زي البنوك السعودية',
    'زي الحكومة السعودية',
    'يونيوم شركات',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/corporate',
  image: '/images/industries/corporate-uniforms-saudi.jpg',
  imageAlt: 'Corporate Uniforms and Business Attire in Saudi Arabia - UNEOM',
  aiSummary: 'UNEOM provides premium corporate uniforms and business attire in Saudi Arabia. Our products include executive business suits, professional office uniforms, corporate polo shirts, bank employee uniforms, government staff attire, and reception uniforms. We serve 500+ companies in Riyadh, Jeddah, Dammam including banks, corporations, government entities, and businesses. All uniforms can be customized with company logos and brand colors. ISO certified quality with bulk order discounts.',
  aiSummaryAr: 'توفر يونيوم أفضل زي شركات وملابس رسمية في السعودية. تشمل منتجاتنا بدلات تنفيذية، زي مكاتب، قمصان بولو، زي البنوك، زي الحكومة. نخدم أكثر من 500 شركة في الرياض وجدة والدمام.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const corporateFAQs = [
  {
    question: 'What types of corporate uniforms does UNEOM offer in Saudi Arabia?',
    questionAr: 'ما أنواع زي الشركات التي تقدمها يونيوم في السعودية؟',
    answer: 'UNEOM offers comprehensive corporate uniforms in Saudi Arabia including: Executive Business Suits (tailored suits for management), Professional Office Uniforms (shirts, trousers, skirts, blazers), Corporate Polo Shirts (branded polo shirts for casual offices), Bank Employee Uniforms (formal attire for banking sector), Government Staff Attire (uniforms for government entities), Reception & Front Desk Uniforms, Sales Team Uniforms, and Smart Casual Workwear. All uniforms can be customized with your company logo, brand colors, and specific design requirements.',
    answerAr: 'تقدم يونيوم أزياء شركات شاملة في السعودية تشمل: بدلات تنفيذية للإدارة، زي مكاتب مهني، قمصان بولو مؤسسية، زي موظفي البنوك، زي موظفي الحكومة، زي الاستقبال، زي فريق المبيعات، وملابس العمل الكاجوال الأنيق. جميع الأزياء قابلة للتخصيص بشعار شركتك وألوان علامتك التجارية.'
  },
  {
    question: 'Does UNEOM supply uniforms to banks and financial institutions?',
    questionAr: 'هل توفر يونيوم الأزياء للبنوك والمؤسسات المالية؟',
    answer: 'Yes, UNEOM is a trusted uniform supplier for major banks and financial institutions in Saudi Arabia. We serve several leading banks with formal business attire that reflects their corporate image. Our bank uniform solutions include formal suits and blazers for branch managers, professional shirts and blouses for tellers, coordinated uniforms for customer service staff, and executive wear for senior management. We understand the importance of projecting trust and professionalism in the financial sector.',
    answerAr: 'نعم، يونيوم مورد موثوق للأزياء للبنوك والمؤسسات المالية الكبرى في السعودية. نخدم عدة بنوك رائدة بملابس رسمية تعكس صورتهم المؤسسية. تشمل حلول زي البنوك لدينا بدلات رسمية لمديري الفروع، قمصان مهنية للصرافين، أزياء منسقة لموظفي خدمة العملاء، وملابس تنفيذية للإدارة العليا.'
  },
  {
    question: 'What is the price range for corporate uniforms?',
    questionAr: 'ما نطاق أسعار زي الشركات؟',
    answer: 'UNEOM corporate uniform pricing varies based on the product type and quantity. Corporate polo shirts start from SAR 89. Professional office shirts start from SAR 129. Office uniforms (complete set) start from SAR 299. Executive blazers start from SAR 399. Business suits start from SAR 799. For bulk orders (100+ pieces), we offer significant discounts up to 30%. Contact us for a customized quote for your company.',
    answerAr: 'تختلف أسعار زي الشركات من يونيوم حسب نوع المنتج والكمية. قمصان البولو المؤسسية تبدأ من 89 ريال. القمصان المهنية من 129 ريال. زي المكاتب (طقم كامل) من 299 ريال. البليزرات التنفيذية من 399 ريال. البدلات الرسمية من 799 ريال. للطلبات بالجملة (100+ قطعة) نقدم خصومات تصل إلى 30%.'
  },
  {
    question: 'Can UNEOM add our company logo to corporate uniforms?',
    questionAr: 'هل يمكن ليونيوم إضافة شعار شركتنا على الزي؟',
    answer: 'Absolutely! Custom branding is a core service at UNEOM. We offer professional embroidery for logos on shirts, suits, and polos, screen printing for larger designs, woven labels and custom tags, color matching to your brand guidelines, name badges and position identification, and complete brand identity integration. Our branding maintains quality through repeated washing and professional use.',
    answerAr: 'بالتأكيد! التصميم المخصص بالعلامة التجارية خدمة أساسية في يونيوم. نقدم التطريز المهني للشعارات على القمصان والبدلات والبولو، الطباعة الحريرية للتصاميم الكبيرة، الملصقات المنسوجة والعلامات المخصصة، مطابقة الألوان حسب إرشادات علامتك التجارية، شارات الأسماء وتحديد المناصب.'
  },
  {
    question: 'How fast can UNEOM deliver corporate uniforms?',
    questionAr: 'كم تستغرق يونيوم في توصيل زي الشركات؟',
    answer: 'UNEOM offers competitive delivery times for corporate uniforms. Stock items are available within 5-7 business days. Custom branded uniforms take 10-14 business days. Large corporate orders (500+ pieces) require 15-21 business days. For urgent needs, we offer Rush Service with 48-72 hour delivery for stock items. We deliver nationwide to Riyadh, Jeddah, Dammam, and all Saudi cities.',
    answerAr: 'تقدم يونيوم مواعيد توصيل تنافسية لزي الشركات. المنتجات المتوفرة خلال 5-7 أيام عمل. الأزياء المخصصة بالعلامة التجارية تستغرق 10-14 يوم عمل. الطلبات الكبيرة للشركات (500+ قطعة) تتطلب 15-21 يوم عمل. للاحتياجات العاجلة، نقدم خدمة سريعة بتوصيل 48-72 ساعة.'
  },
  {
    question: 'Does UNEOM offer uniform management programs for companies?',
    questionAr: 'هل تقدم يونيوم برامج إدارة الأزياء للشركات؟',
    answer: 'Yes, UNEOM offers comprehensive uniform management programs designed for large corporations. Our programs include automatic inventory replenishment, size exchange for new employees, regular quality inspections, scheduled bulk ordering with guaranteed pricing, and dedicated corporate account managers. This is ideal for companies with 100+ employees looking to streamline uniform management.',
    answerAr: 'نعم، تقدم يونيوم برامج شاملة لإدارة الأزياء مصممة للشركات الكبيرة. تشمل برامجنا: تجديد المخزون التلقائي، تبديل المقاسات للموظفين الجدد، فحوصات الجودة المنتظمة، طلبات بالجملة مجدولة بأسعار مضمونة، ومديري حسابات مخصصين للشركات.'
  },
];

// ============================================
// PRODUCTS DATA
// ============================================
const featuredProducts = [
  {
    id: '1',
    name: 'Executive Business Suits',
    description: 'Premium tailored suits for executives and management. Italian fabrics, professional fit.',
    image: '/images/products/corporate-suit-executive.jpg',
    price: 'From SAR 799',
    href: '/shop/corporate-workwear/business-suits/',
    category: 'Executive Wear',
    features: ['Italian fabric', 'Custom tailoring', 'Premium finish']
  },
  {
    id: '2',
    name: 'Professional Office Uniforms',
    description: 'Elegant office attire for all staff levels. Shirts, trousers, skirts, blazers.',
    image: '/images/products/corporate-office-uniform.jpg',
    price: 'From SAR 299',
    href: '/shop/corporate-workwear/office-uniforms/',
    category: 'Office Uniforms',
    features: ['Wrinkle-resistant', 'Comfortable fit', 'Professional look']
  },
  {
    id: '3',
    name: 'Corporate Polo Collection',
    description: 'Smart casual corporate wear for modern workplaces. Branded polo shirts.',
    image: '/images/products/corporate-polo.jpg',
    price: 'From SAR 89',
    href: '/shop/corporate-workwear/polo-shirts/',
    category: 'Smart Casual',
    features: ['Breathable cotton', 'Logo embroidery', 'Multiple colors']
  },
  {
    id: '4',
    name: 'Bank & Finance Uniforms',
    description: 'Formal attire for banking and financial sector employees.',
    image: '/images/products/bank-uniform.jpg',
    price: 'From SAR 399',
    href: '/shop/corporate-workwear/bank-uniforms/',
    category: 'Banking',
    features: ['Formal design', 'Trust-building', 'Brand integration']
  },
  {
    id: '5',
    name: 'Reception Uniforms',
    description: 'Elegant uniforms for reception and front desk staff.',
    image: '/images/products/reception-uniform.jpg',
    price: 'From SAR 249',
    href: '/shop/corporate-workwear/reception-uniforms/',
    category: 'Front Desk',
    features: ['Elegant design', 'First impressions', 'Custom branding']
  },
  {
    id: '6',
    name: 'Government Staff Attire',
    description: 'Professional uniforms for government entities and public sector.',
    image: '/images/products/government-uniform.jpg',
    price: 'From SAR 349',
    href: '/shop/corporate-workwear/government-uniforms/',
    category: 'Government',
    features: ['Official appearance', 'Durable fabric', 'Regulation compliant']
  },
];

const corporateBenefits = [
  {
    icon: '🏢',
    title: 'Brand Consistency',
    description: 'Unified corporate appearance that strengthens your brand identity and creates a professional impression with clients and partners.',
  },
  {
    icon: '👔',
    title: 'Professional Image',
    description: 'High-quality uniforms that reflect excellence and professionalism, enhancing your company\'s reputation in the market.',
  },
  {
    icon: '😊',
    title: 'Employee Satisfaction',
    description: 'Quality uniforms that employees are proud to wear, boosting morale, team unity, and workplace satisfaction.',
  },
  {
    icon: '💰',
    title: 'Cost Efficiency',
    description: 'Bulk ordering options and durable materials provide long-term cost savings. Volume discounts up to 30%.',
  },
];

// ============================================
// CORPORATE PAGE COMPONENT
// ============================================
export default function CorporateIndustryPage() {
  return (
    <>
      <SEO2026
        title="Corporate Uniforms & Business Attire Saudi Arabia"
        titleAr="زي الشركات والملابس الرسمية في السعودية"
        description="UNEOM provides premium corporate uniforms for companies, banks, and government in Saudi Arabia."
        descriptionAr="توفر يونيوم أفضل زي شركات للبنوك والشركات والحكومة في السعودية."
        locale="en"
        pageType="industry"
        mainEntity="Corporate Uniforms and Business Attire"
        mainEntityAr="زي الشركات والملابس الرسمية"
        primaryImage="/images/industries/corporate-uniforms-saudi.jpg"
        primaryImageAlt="Corporate Uniforms in Saudi Arabia"
        faqs={corporateFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Corporate', nameAr: 'الشركات', url: '/industries/corporate' },
        ]}
        conversationalKeywords={[
          'where to buy corporate uniforms Saudi Arabia',
          'best business attire supplier Riyadh',
          'office uniforms near me',
        ]}
        voiceSearchQueries={[
          'Find corporate uniforms in Riyadh',
          'Order business suits Saudi Arabia',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={500}
        yearsInBusiness={20}
        industry="Corporate"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Corporate', href: '/industries/corporate' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-blue-400">✓</span>
                <span className="text-sm font-medium">Trusted by 500+ Companies in Saudi Arabia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Corporate Uniforms & Business Attire in{' '}
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 text-transparent bg-clip-text">
                  Saudi Arabia
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl">
                Premium corporate uniforms for banks, companies, and government entities. 
                Enhance your brand with professional attire that reflects excellence.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">👔 Executive Quality</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏢 Brand Integration</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 Fast Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">💰 Bulk Discounts</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=corporate"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold border-0"
                >
                  Get Free Corporate Quote →
                </Button>
                <Button 
                  href="/shop/corporate-workwear"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Shop Corporate Collection
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/men-shaking-hands-over-business-meeting-2025-01-25-05-47-49-utc.jpg"
                  alt="Business professionals wearing UNEOM corporate uniforms in Saudi Arabia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Companies Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="Why Saudi Companies Choose UNEOM" centered>
              Benefits for Your Business
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {corporateBenefits.map((benefit, index) => (
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
            <SectionHeading subtitle="Our Corporate Collection" centered>
              Premium Corporate Uniforms
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
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                      <Link 
                        href={product.href} 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate-workwear" variant="primary" size="lg">
                View All Corporate Products
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              Corporate Uniforms FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {corporateFAQs.slice(0, 6).map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-gray-800 to-blue-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Corporate Image?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-gray-300">
              Join 500+ companies across Saudi Arabia that trust UNEOM for their professional attire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote?industry=corporate" 
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
              >
                Get Free Corporate Quote →
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-xl transition-all duration-300"
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
          <Link href="/ar/industries/corporate" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
