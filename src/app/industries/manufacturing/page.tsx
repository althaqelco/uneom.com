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
  title: 'Industrial Uniforms & Safety Workwear Saudi Arabia | Factory Clothing - UNEOM',
  titleAr: 'الأزياء الصناعية وملابس السلامة في السعودية | ملابس المصانع - يونيوم',
  description: 'Premium industrial uniforms & safety workwear in Saudi Arabia. Flame resistant, high-visibility, protective clothing for factories, oil & gas, construction in Riyadh, Jeddah, Dammam. SASO compliant!',
  descriptionAr: 'أفضل أزياء صناعية وملابس سلامة في السعودية. ملابس مقاومة للحريق، عاكسة، واقية للمصانع والنفط والغاز والبناء. متوافقة مع SASO!',
  keywords: [
    'industrial uniforms saudi arabia',
    'safety workwear riyadh',
    'factory uniforms ksa',
    'flame resistant clothing saudi',
    'high visibility workwear',
    'construction uniforms jeddah',
    'oil gas uniforms saudi arabia',
    'protective clothing ksa',
    'coveralls saudi arabia',
    'SASO approved workwear',
    'UNEOM industrial uniforms',
  ],
  keywordsAr: [
    'أزياء صناعية السعودية',
    'ملابس سلامة الرياض',
    'زي مصانع السعودية',
    'ملابس مقاومة للحريق',
    'ملابس عاكسة',
    'أفرول السعودية',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/manufacturing',
  image: '/images/industries/industrial-uniforms-saudi.jpg',
  imageAlt: 'Industrial Uniforms and Safety Workwear in Saudi Arabia - UNEOM',
  aiSummary: 'UNEOM provides premium industrial uniforms and safety workwear in Saudi Arabia. Our products include flame resistant coveralls, high visibility vests, construction uniforms, oil & gas workwear, factory uniforms, and protective clothing. SASO compliant, meeting Saudi safety regulations. Serving factories, refineries, construction sites in Riyadh, Jeddah, Dammam. Bulk orders welcome.',
  aiSummaryAr: 'توفر يونيوم أفضل أزياء صناعية وملابس سلامة في السعودية. تشمل منتجاتنا أفرول مقاوم للحريق، سترات عاكسة، زي بناء، ملابس النفط والغاز. متوافقة مع SASO.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const manufacturingFAQs = [
  {
    question: 'What types of industrial uniforms does UNEOM offer in Saudi Arabia?',
    questionAr: 'ما أنواع الأزياء الصناعية التي تقدمها يونيوم في السعودية؟',
    answer: 'UNEOM offers comprehensive industrial uniforms in Saudi Arabia including: Flame Resistant Coveralls (for oil & gas, welding), High Visibility Workwear (vests, jackets, trousers), Construction Uniforms (durable workwear for sites), Factory Uniforms (comfortable daily wear), Protective Clothing (chemical resistant, anti-static), Safety Accessories (helmets, gloves, boots), and Custom Industrial Uniforms. All products meet SASO standards and international safety regulations.',
    answerAr: 'تقدم يونيوم أزياء صناعية شاملة في السعودية تشمل: أفرول مقاوم للحريق للنفط والغاز واللحام، ملابس عاكسة عالية الوضوح، زي البناء، زي المصانع، ملابس واقية، إكسسوارات السلامة، وأزياء صناعية مخصصة. جميع المنتجات تلبي معايير SASO واللوائح الدولية للسلامة.'
  },
  {
    question: 'Are UNEOM industrial uniforms SASO compliant?',
    questionAr: 'هل أزياء يونيوم الصناعية متوافقة مع SASO؟',
    answer: 'Yes, all UNEOM industrial uniforms meet SASO (Saudi Standards, Metrology and Quality Organization) requirements. We are also ISO 9001:2015 certified. Our flame resistant clothing meets international standards for thermal protection. High visibility wear meets EN ISO 20471 standards. We provide certification documentation for all safety-rated products.',
    answerAr: 'نعم، جميع أزياء يونيوم الصناعية تلبي متطلبات SASO. نحن أيضاً معتمدون ISO 9001:2015. ملابسنا المقاومة للحريق تلبي المعايير الدولية للحماية الحرارية. الملابس العاكسة تلبي معايير EN ISO 20471. نقدم وثائق الشهادات لجميع المنتجات المصنفة للسلامة.'
  },
  {
    question: 'What is the price of industrial coveralls in Saudi Arabia?',
    questionAr: 'ما سعر الأفرول الصناعي في السعودية؟',
    answer: 'UNEOM industrial uniform pricing varies by product type. Basic work coveralls start from SAR 149. Flame resistant coveralls start from SAR 299. High visibility workwear starts from SAR 99. Construction uniforms start from SAR 179. For bulk orders (50+ pieces), we offer discounts up to 25%. Contact us for custom quotes.',
    answerAr: 'تختلف أسعار الأزياء الصناعية من يونيوم حسب نوع المنتج. الأفرول الأساسي يبدأ من 149 ريال. الأفرول المقاوم للحريق من 299 ريال. الملابس العاكسة من 99 ريال. زي البناء من 179 ريال. للطلبات بالجملة (50+ قطعة) نقدم خصومات تصل إلى 25%.'
  },
  {
    question: 'Does UNEOM supply uniforms to oil and gas companies?',
    questionAr: 'هل توفر يونيوم الأزياء لشركات النفط والغاز؟',
    answer: 'Yes, UNEOM is a trusted supplier for oil and gas companies in Saudi Arabia. We provide flame resistant coveralls, anti-static clothing, high visibility workwear, and specialized PPE. Our products meet the strict safety requirements of the petroleum industry and are used by major oil & gas companies.',
    answerAr: 'نعم، يونيوم مورد موثوق لشركات النفط والغاز في السعودية. نقدم أفرول مقاوم للحريق، ملابس مضادة للكهرباء الساكنة، ملابس عاكسة، ومعدات حماية شخصية متخصصة. منتجاتنا تلبي متطلبات السلامة الصارمة لصناعة البترول.'
  },
  {
    question: 'Can UNEOM add company logos to industrial uniforms?',
    questionAr: 'هل يمكن ليونيوم إضافة شعارات الشركات على الأزياء الصناعية؟',
    answer: 'Yes! We offer custom branding on industrial uniforms including heat transfer logos for flame resistant clothing, embroidery for regular workwear, reflective logo printing for high visibility wear, and name badges and ID patches. All branding maintains safety ratings and durability.',
    answerAr: 'نعم! نقدم التصميم المخصص على الأزياء الصناعية تشمل نقل حراري للشعارات على الملابس المقاومة للحريق، تطريز للملابس العادية، طباعة شعار عاكسة للملابس عالية الوضوح، وشارات الأسماء. جميع العلامات تحافظ على تصنيفات السلامة والمتانة.'
  },
  {
    question: 'How fast can UNEOM deliver industrial uniforms?',
    questionAr: 'كم تستغرق يونيوم في توصيل الأزياء الصناعية؟',
    answer: 'UNEOM offers competitive delivery for industrial uniforms. Stock items are available within 5-7 business days. Custom branded uniforms take 10-15 business days. Large industrial orders require 15-21 business days. Rush service available for urgent plant needs. Delivery nationwide including industrial areas.',
    answerAr: 'تقدم يونيوم توصيل تنافسي للأزياء الصناعية. المنتجات المتوفرة خلال 5-7 أيام عمل. الأزياء المخصصة تستغرق 10-15 يوم عمل. الطلبات الكبيرة تتطلب 15-21 يوم عمل. الخدمة السريعة متاحة للاحتياجات العاجلة. التوصيل لجميع أنحاء المملكة بما فيها المناطق الصناعية.'
  },
];

const featuredProducts = [
  {
    id: '1',
    name: 'Flame Resistant Coveralls',
    description: 'FR coveralls for oil & gas, welding, and high-heat environments. NFPA compliant.',
    image: '/images/products/fr-coverall.jpg',
    price: 'From SAR 299',
    href: '/shop/industrial-uniforms/fr-coveralls/',
    category: 'FR Workwear',
    features: ['Flame resistant', 'Arc rated', 'NFPA compliant']
  },
  {
    id: '2',
    name: 'High Visibility Workwear',
    description: 'Class 3 high-vis vests, jackets, and trousers for construction and roadwork.',
    image: '/images/products/hi-vis-vest.jpg',
    price: 'From SAR 99',
    href: '/shop/industrial-uniforms/hi-vis-workwear/',
    category: 'Hi-Vis',
    features: ['EN ISO 20471', 'Reflective strips', 'Breathable']
  },
  {
    id: '3',
    name: 'Industrial Coveralls',
    description: 'Durable work coveralls for factories and manufacturing environments.',
    image: '/images/products/industrial-coverall.jpg',
    price: 'From SAR 149',
    href: '/shop/industrial-uniforms/coveralls/',
    category: 'Coveralls',
    features: ['Heavy duty', 'Multiple pockets', 'Easy access']
  },
  {
    id: '4',
    name: 'Construction Uniforms',
    description: 'Tough workwear for construction sites. Built to last.',
    image: '/images/products/construction-uniform.jpg',
    price: 'From SAR 179',
    href: '/shop/industrial-uniforms/construction/',
    category: 'Construction',
    features: ['Reinforced knees', 'Tool loops', 'Durable fabric']
  },
  {
    id: '5',
    name: 'Anti-Static Workwear',
    description: 'ESD safe clothing for electronics manufacturing and sensitive environments.',
    image: '/images/products/anti-static-uniform.jpg',
    price: 'From SAR 199',
    href: '/shop/industrial-uniforms/anti-static/',
    category: 'ESD Safe',
    features: ['Static dissipative', 'Grounding strap', 'Cleanroom rated']
  },
  {
    id: '6',
    name: 'Chemical Resistant Suits',
    description: 'Protective suits for chemical handling and hazardous materials.',
    image: '/images/products/chemical-suit.jpg',
    price: 'From SAR 349',
    href: '/shop/industrial-uniforms/chemical-resistant/',
    category: 'Chemical Protection',
    features: ['Chemical resistant', 'Sealed seams', 'Full protection']
  },
];

const manufacturingBenefits = [
  {
    icon: '🔥',
    title: 'Fire & Heat Protection',
    description: 'Flame resistant and heat-protective workwear meeting international safety standards for high-risk environments.',
  },
  {
    icon: '👁️',
    title: 'High Visibility',
    description: 'EN ISO 20471 compliant high-vis workwear ensuring worker visibility in all conditions.',
  },
  {
    icon: '🛡️',
    title: 'SASO Compliant',
    description: 'All products meet Saudi SASO standards and international safety regulations.',
  },
  {
    icon: '💪',
    title: 'Durability',
    description: 'Heavy-duty construction designed to withstand demanding industrial environments.',
  },
];

// ============================================
// MANUFACTURING PAGE COMPONENT
// ============================================
export default function ManufacturingIndustryPage() {
  return (
    <>
      <SEO2026
        title="Industrial Uniforms & Safety Workwear Saudi Arabia"
        titleAr="الأزياء الصناعية وملابس السلامة في السعودية"
        description="UNEOM provides industrial uniforms and safety workwear for factories and construction in Saudi Arabia."
        descriptionAr="توفر يونيوم أزياء صناعية وملابس سلامة للمصانع والبناء في السعودية."
        locale="en"
        pageType="industry"
        mainEntity="Industrial Uniforms and Safety Workwear"
        mainEntityAr="الأزياء الصناعية وملابس السلامة"
        primaryImage="/images/industries/industrial-uniforms-saudi.jpg"
        primaryImageAlt="Industrial Uniforms in Saudi Arabia"
        faqs={manufacturingFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Manufacturing', nameAr: 'التصنيع', url: '/industries/manufacturing' },
        ]}
        conversationalKeywords={[
          'where to buy industrial uniforms Saudi Arabia',
          'safety workwear supplier Riyadh',
          'flame resistant coveralls near me',
        ]}
        voiceSearchQueries={[
          'Find industrial uniforms in Riyadh',
          'Order safety workwear Saudi Arabia',
        ]}
        certifications={['ISO 9001:2015', 'SASO Approved', 'EN ISO 20471']}
        clientCount={300}
        yearsInBusiness={20}
        industry="Manufacturing"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-800 via-orange-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Manufacturing', href: '/industries/manufacturing' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400">🏭</span>
                <span className="text-sm font-medium">SASO Compliant Industrial Workwear</span>
        </div>
              
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Industrial Uniforms & Safety Workwear in{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                  Saudi Arabia
                </span>
          </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed max-w-2xl">
                Premium safety workwear for factories, oil & gas, and construction. 
                Flame resistant, high visibility, SASO compliant.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🔥 FR Certified</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">👁️ High Visibility</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🛡️ SASO Compliant</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">💪 Heavy Duty</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=manufacturing"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold border-0"
                >
                  Get Free Industrial Quote →
                </Button>
                <Button 
                  href="/shop/industrial-uniforms"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-900"
                >
                  Shop Safety Workwear
          </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/industries/manufacturing/hero-industrial.jpg"
                  alt="Industrial workers wearing UNEOM safety uniforms in Saudi Arabia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-orange-600">300+</div>
                <div className="text-sm text-gray-600">Industrial Clients</div>
              </div>
            </div>
                </div>
        </Container>
      </section>
      
      <main className="py-16">
        <Container>
          {/* Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="Why Industries Choose UNEOM" centered>
              Safety-First Industrial Workwear
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {manufacturingBenefits.map((benefit, index) => (
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
            <SectionHeading subtitle="Our Industrial Collection" centered>
              Safety Workwear & Industrial Uniforms
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
                    <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="text-lg font-bold text-orange-600">{product.price}</span>
                      <Link 
                        href={product.href} 
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/industrial-uniforms" variant="primary" size="lg">
                View All Industrial Products
              </Button>
            </div>
      </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              Industrial Uniforms FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {manufacturingFAQs.slice(0, 6).map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-orange-700 to-red-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Outfit Your Workforce?</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-orange-100">
              Join 300+ industrial companies across Saudi Arabia that trust UNEOM for safety workwear.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?industry=manufacturing" className="inline-flex items-center px-8 py-4 bg-white text-orange-700 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 shadow-lg">
                Get Free Industrial Quote →
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-900 font-bold rounded-xl transition-all duration-300">
                Contact Us Now
              </Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/industries/manufacturing" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
} 
