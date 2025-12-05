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
  title: 'Hotel Uniforms & Hospitality Attire Saudi Arabia | Restaurant Workwear - UNEOM',
  titleAr: 'زي الفنادق والضيافة في السعودية | ملابس المطاعم - يونيوم',
  description: 'Premium hotel uniforms & hospitality attire in Saudi Arabia. Staff uniforms for 5-star hotels, restaurants, resorts in Riyadh, Jeddah, Mecca. Chef wear, concierge, housekeeping uniforms. Custom branding available!',
  descriptionAr: 'أفضل زي فنادق وأزياء ضيافة في السعودية. ملابس موظفين للفنادق 5 نجوم والمطاعم والمنتجعات. زي شيف، كونسيرج، تدبير منزلي. تصميم مخصص بشعار المؤسسة!',
  keywords: [
    // Primary Commercial
    'hotel uniforms saudi arabia',
    'hospitality uniforms riyadh',
    'restaurant uniforms ksa',
    'hotel staff attire jeddah',
    'hospitality workwear saudi',
    
    // Product Types
    'chef uniforms saudi arabia',
    'concierge uniforms riyadh',
    'housekeeping uniforms',
    'front desk uniforms',
    'waiter uniforms saudi',
    'resort staff uniforms',
    
    // Locations
    'hotel uniforms riyadh',
    'hospitality attire jeddah',
    'restaurant uniforms mecca',
    'hotel workwear medina',
    
    // Features
    'luxury hotel uniforms',
    '5 star hotel uniforms',
    'custom hotel uniforms',
    'branded hospitality attire',
    
    // Long-tail
    'best hotel uniform supplier saudi',
    'buy restaurant uniforms online ksa',
    'custom chef uniforms riyadh',
    
    // Brand
    'UNEOM hospitality uniforms',
  ],
  keywordsAr: [
    'زي فنادق السعودية',
    'يونيفورم ضيافة الرياض',
    'زي مطاعم السعودية',
    'ملابس موظفي الفنادق',
    'زي شيف السعودية',
    'زي كونسيرج',
    'زي تدبير منزلي',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/hospitality',
  image: '/images/industries/hospitality-uniforms-saudi.jpg',
  imageAlt: 'Hotel Uniforms and Hospitality Attire in Saudi Arabia - UNEOM',
  aiSummary: 'UNEOM provides premium hospitality uniforms and hotel staff attire in Saudi Arabia. Our products include uniforms for 5-star hotels, luxury resorts, restaurants, cafes, and hospitality venues. We offer chef uniforms, concierge attire, front desk uniforms, housekeeping wear, waiter/waitress uniforms, and valet uniforms. All designs can be customized with your brand logo and colors. Serving 100+ hotels and restaurants in Riyadh, Jeddah, Mecca, Medina, and all Saudi cities. ISO certified quality with elegant designs that enhance guest experience.',
  aiSummaryAr: 'توفر يونيوم أفضل أزياء الضيافة وملابس موظفي الفنادق في السعودية. تشمل منتجاتنا أزياء الفنادق 5 نجوم والمنتجعات الفاخرة والمطاعم والكافيهات. نقدم زي الشيف، زي الكونسيرج، زي الاستقبال، زي التدبير المنزلي، زي النادلين. جميع التصاميم قابلة للتخصيص بشعار مؤسستك وألوانها.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA - AI SEARCH OPTIMIZED
// ============================================
const hospitalityFAQs = [
  {
    question: 'What types of hospitality uniforms does UNEOM provide in Saudi Arabia?',
    questionAr: 'ما أنواع أزياء الضيافة التي توفرها يونيوم في السعودية؟',
    answer: 'UNEOM provides comprehensive hospitality uniforms for all hotel and restaurant staff in Saudi Arabia including: Front Desk & Concierge Uniforms (formal suits, blazers, elegant dresses), Chef & Kitchen Staff Uniforms (chef coats, chef pants, aprons, chef hats), Waiter & F&B Service Uniforms (vests, shirts, bow ties, formal trousers), Housekeeping Uniforms (comfortable dresses, tunics, practical workwear), Valet & Bellboy Uniforms (formal coats, caps, gloves), Spa & Wellness Staff Uniforms (relaxed yet professional attire), and Management & Executive Attire (premium suits and business wear). All uniforms are designed to reflect Saudi hospitality standards and can be fully customized with your brand identity.',
    answerAr: 'توفر يونيوم أزياء ضيافة شاملة لجميع موظفي الفنادق والمطاعم في السعودية تشمل: زي الاستقبال والكونسيرج، زي الطهاة وموظفي المطبخ، زي النادلين وخدمة الطعام، زي التدبير المنزلي، زي الخدم والبواب، زي موظفي السبا، وملابس الإدارة التنفيذية. جميع الأزياء مصممة لتعكس معايير الضيافة السعودية ويمكن تخصيصها بالكامل بهوية علامتك التجارية.'
  },
  {
    question: 'Does UNEOM supply uniforms to 5-star hotels in Riyadh and Jeddah?',
    questionAr: 'هل توفر يونيوم الأزياء للفنادق 5 نجوم في الرياض وجدة؟',
    answer: 'Yes, UNEOM is a trusted uniform supplier for luxury 5-star hotels in Riyadh, Jeddah, and across Saudi Arabia. We currently serve over 100 hospitality establishments including international hotel chains, boutique hotels, and luxury resorts. Our luxury hotel uniform solutions include premium fabric selection, custom tailoring to brand specifications, color matching to hotel aesthetics, embroidered logos and name badges, complete uniform programs from front-of-house to back-of-house, and dedicated account management for hotel clients.',
    answerAr: 'نعم، يونيوم مورد موثوق للأزياء للفنادق الفاخرة 5 نجوم في الرياض وجدة وجميع أنحاء السعودية. نخدم حالياً أكثر من 100 مؤسسة ضيافة تشمل سلاسل الفنادق العالمية والفنادق البوتيكية والمنتجعات الفاخرة. تشمل حلول زي الفنادق الفاخرة لدينا اختيار أقمشة فاخرة، تفصيل مخصص حسب مواصفات العلامة التجارية، مطابقة الألوان، شعارات مطرزة، وبرامج أزياء كاملة.'
  },
  {
    question: 'Can UNEOM create custom branded uniforms for our restaurant?',
    questionAr: 'هل يمكن ليونيوم تصميم أزياء مخصصة بعلامتنا التجارية لمطعمنا؟',
    answer: 'Absolutely! Custom branding is our specialty for restaurant uniforms. UNEOM offers complete customization services including logo embroidery on all uniform pieces, custom color schemes matching your restaurant theme, unique design elements that reflect your cuisine style, coordinated looks for all staff roles, name badges and position identification, seasonal uniform variations, and complete brand identity integration. We work closely with restaurant owners and brand managers to create uniforms that perfectly represent your dining concept.',
    answerAr: 'بالتأكيد! التصميم المخصص بالعلامة التجارية هو تخصصنا لأزياء المطاعم. تقدم يونيوم خدمات تخصيص كاملة تشمل تطريز الشعار على جميع قطع الزي، مخططات ألوان مخصصة تتناسب مع موضوع مطعمك، عناصر تصميم فريدة تعكس أسلوب مطبخك، مظاهر منسقة لجميع أدوار الموظفين، شارات الأسماء وتحديد المناصب.'
  },
  {
    question: 'What is the price range for hotel uniforms in Saudi Arabia?',
    questionAr: 'ما نطاق أسعار زي الفنادق في السعودية؟',
    answer: 'UNEOM hotel uniform pricing varies based on the uniform type and customization level. Housekeeping uniforms start from SAR 149. Waiter/waitress uniforms start from SAR 199. Front desk uniforms start from SAR 299. Chef uniforms (complete set) start from SAR 249. Concierge/bellboy uniforms start from SAR 349. Luxury executive uniforms start from SAR 499. For bulk orders (50+ pieces), we offer discounts up to 25%. Contact us for a custom quote tailored to your hotel\'s specific needs.',
    answerAr: 'تختلف أسعار زي الفنادق من يونيوم حسب نوع الزي ومستوى التخصيص. زي التدبير المنزلي يبدأ من 149 ريال. زي النادل/النادلة من 199 ريال. زي الاستقبال من 299 ريال. زي الشيف (طقم كامل) من 249 ريال. زي الكونسيرج/البواب من 349 ريال. زي التنفيذيين الفاخر من 499 ريال. للطلبات بالجملة (50+ قطعة) نقدم خصومات تصل إلى 25%.'
  },
  {
    question: 'Do you provide chef uniforms for restaurant kitchens?',
    questionAr: 'هل توفرون زي الطهاة لمطابخ المطاعم؟',
    answer: 'Yes, UNEOM provides professional chef uniforms for restaurant kitchens of all sizes. Our chef uniform collection includes Executive Chef Coats (double-breasted, premium cotton), Chef Pants (checked or solid, comfortable fit), Chef Aprons (bib style, waist style, full coverage), Chef Hats (traditional toque, skull caps, bandanas), Kitchen Crew Uniforms (cook coats, prep wear), and Chef Accessories (neckerchiefs, side towels). All chef uniforms feature breathable fabrics suitable for Saudi Arabia\'s hot kitchen environments, are stain-resistant and easy to clean, and meet food service hygiene standards.',
    answerAr: 'نعم، توفر يونيوم زي طهاة احترافي لمطابخ المطاعم بجميع الأحجام. تشمل مجموعة زي الطهاة لدينا معاطف الشيف التنفيذي، بناطيل الشيف، مآزر الشيف، قبعات الشيف، زي طاقم المطبخ، وإكسسوارات الشيف. جميع أزياء الطهاة تتميز بأقمشة تتنفس مناسبة لبيئات المطابخ الحارة في السعودية، مقاومة للبقع وسهلة التنظيف، وتلبي معايير النظافة الغذائية.'
  },
  {
    question: 'How quickly can UNEOM deliver hospitality uniforms?',
    questionAr: 'ما سرعة توصيل يونيوم لأزياء الضيافة؟',
    answer: 'UNEOM offers competitive delivery times for hospitality uniforms across Saudi Arabia. Stock items are available within 5-7 business days. Custom branded uniforms take 10-15 business days. Large hotel orders (200+ pieces) typically require 15-20 business days. For urgent hotel openings or events, we offer Rush Service with delivery in 48-72 hours for stock items and 7 days for custom orders (additional fees apply). We deliver to all Saudi cities including Riyadh, Jeddah, Dammam, Mecca, Medina, and nationwide.',
    answerAr: 'تقدم يونيوم مواعيد توصيل تنافسية لأزياء الضيافة في جميع أنحاء السعودية. المنتجات المتوفرة في المخزون خلال 5-7 أيام عمل. الأزياء المخصصة بالعلامة التجارية تستغرق 10-15 يوم عمل. طلبات الفنادق الكبيرة (200+ قطعة) تتطلب عادة 15-20 يوم عمل. للافتتاحات العاجلة أو المناسبات، نقدم خدمة سريعة بتوصيل 48-72 ساعة للمنتجات المتوفرة و7 أيام للطلبات المخصصة.'
  },
  {
    question: 'Does UNEOM provide uniforms for Hajj and Umrah hospitality staff?',
    questionAr: 'هل توفر يونيوم أزياء لموظفي ضيافة الحج والعمرة؟',
    answer: 'Yes, UNEOM specializes in uniforms for Hajj and Umrah hospitality services in Mecca and Medina. We understand the unique requirements of serving pilgrims and provide uniforms that are comfortable in hot weather with breathable fabrics, culturally appropriate and modest, easy to identify for pilgrim assistance, durable for extended service periods, and quick-dry for repeated washing. We serve hotels, transport services, catering companies, and tour operators during Hajj and Umrah seasons with special bulk pricing and expedited delivery.',
    answerAr: 'نعم، تتخصص يونيوم في أزياء خدمات ضيافة الحج والعمرة في مكة والمدينة. نفهم المتطلبات الفريدة لخدمة الحجاج ونقدم أزياء مريحة في الطقس الحار بأقمشة تتنفس، ملائمة ثقافياً ومحتشمة، سهلة التعريف لمساعدة الحجاج، متينة لفترات الخدمة الممتدة، وسريعة الجفاف للغسيل المتكرر.'
  },
  {
    question: 'What fabrics are best for hospitality uniforms in Saudi Arabia\'s climate?',
    questionAr: 'ما أفضل الأقمشة لأزياء الضيافة في مناخ السعودية؟',
    answer: 'For Saudi Arabia\'s hot climate, UNEOM recommends and uses the following fabrics for hospitality uniforms: Cotton-Polyester Blends (60/40 or 65/35) provide the best balance of breathability and durability. Moisture-Wicking Polyester keeps staff cool and dry during long shifts. Breathable Cotton for kitchen and back-of-house roles. Wrinkle-Free Fabrics maintain a polished appearance throughout service. Lightweight Tropical Wool for executive and management uniforms. All our hospitality fabrics are tested for comfort in air-conditioned interiors and hot outdoor environments typical in Saudi hotels.',
    answerAr: 'لمناخ السعودية الحار، توصي يونيوم وتستخدم الأقمشة التالية لأزياء الضيافة: خلطات القطن-البوليستر (60/40 أو 65/35) توفر أفضل توازن بين التنفس والمتانة. البوليستر الماص للرطوبة يبقي الموظفين باردين وجافين. القطن الذي يتنفس لأدوار المطبخ. الأقمشة المقاومة للتجاعيد تحافظ على المظهر الأنيق. الصوف الاستوائي الخفيف للزي التنفيذي.'
  },
];

// ============================================
// FEATURED PRODUCTS DATA
// ============================================
const featuredProducts = [
  {
    id: '1',
    name: 'Luxury Hotel Staff Uniforms',
    description: 'Elegant uniforms for 5-star hotels and luxury resorts. Complete front-of-house solutions.',
    image: '/images/hospitality_uniform_formal.jpg',
    price: 'From SAR 299',
    href: '/shop/hospitality-attire/luxury-hotel-uniform/',
    category: 'Hotel Uniforms',
    features: ['Premium fabrics', 'Custom branding', 'Elegant design']
  },
  {
    id: '2',
    name: 'Professional Chef Uniforms',
    description: 'Complete chef attire for restaurant kitchens. Breathable, stain-resistant, professional.',
    image: '/images/chef-uniform.jpg',
    price: 'From SAR 249',
    href: '/shop/hospitality-attire/chef-uniform/',
    category: 'Chef Wear',
    features: ['Breathable cotton', 'Stain-resistant', 'Heat-tolerant']
  },
  {
    id: '3',
    name: 'Restaurant Service Uniforms',
    description: 'Stylish waiter and waitress uniforms for fine dining and casual restaurants.',
    image: '/images/hospitality_uniform_waiter.jpg',
    price: 'From SAR 199',
    href: '/shop/hospitality-attire/restaurant-uniform/',
    category: 'Restaurant Uniforms',
    features: ['Wrinkle-free', 'Comfortable fit', 'Stain-resistant']
  },
  {
    id: '4',
    name: 'Concierge & Front Desk',
    description: 'Sophisticated uniforms for guest-facing staff. First impressions matter.',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg',
    price: 'From SAR 349',
    href: '/shop/hospitality-attire/concierge-uniform/',
    category: 'Front Desk',
    features: ['Executive style', 'Premium tailoring', 'Brand integration']
  },
  {
    id: '5',
    name: 'Housekeeping Uniforms',
    description: 'Practical and comfortable uniforms for housekeeping and cleaning staff.',
    image: '/images/hospitality/housekeeping-uniform.jpg',
    price: 'From SAR 149',
    href: '/shop/hospitality-attire/housekeeping-uniform/',
    category: 'Housekeeping',
    features: ['Easy movement', 'Durable fabric', 'Professional look']
  },
  {
    id: '6',
    name: 'Spa & Wellness Uniforms',
    description: 'Relaxed yet professional attire for spa therapists and wellness staff.',
    image: '/images/hospitality/spa-uniform.jpg',
    price: 'From SAR 189',
    href: '/shop/hospitality-attire/spa-uniform/',
    category: 'Spa Uniforms',
    features: ['Soft fabrics', 'Relaxed fit', 'Calming colors']
  },
];

// ============================================
// BENEFITS DATA
// ============================================
const hospitalityBenefits = [
  {
    icon: '⭐',
    title: 'Brand Enhancement',
    description: 'Uniforms that reflect your establishment\'s unique style and elevate your brand presence. First impressions matter in hospitality.',
  },
  {
    icon: '🌡️',
    title: 'Climate-Optimized',
    description: 'Breathable fabrics and moisture-wicking technology ensure staff comfort in Saudi Arabia\'s climate, whether indoors or outdoors.',
  },
  {
    icon: '✨',
    title: 'Easy Maintenance',
    description: 'Stain-resistant, wrinkle-free fabrics that maintain a polished appearance throughout long service hours and multiple washes.',
  },
  {
    icon: '👔',
    title: 'Custom Branding',
    description: 'Complete customization with your logo, colors, and design elements. Create a cohesive look across all staff roles.',
  },
];

// ============================================
// HOSPITALITY PAGE COMPONENT
// ============================================
export default function HospitalityIndustryPage() {
  return (
    <>
      {/* SEO 2026 Structured Data */}
      <SEO2026
        title="Hotel Uniforms & Hospitality Attire Saudi Arabia"
        titleAr="زي الفنادق والضيافة في السعودية"
        description="UNEOM provides premium hospitality uniforms for hotels, restaurants, and resorts in Saudi Arabia."
        descriptionAr="توفر يونيوم أفضل أزياء الضيافة للفنادق والمطاعم والمنتجعات في السعودية."
        locale="en"
        pageType="industry"
        mainEntity="Hospitality Uniforms and Hotel Staff Attire"
        mainEntityAr="أزياء الضيافة وملابس موظفي الفنادق"
        primaryImage="/images/industries/hospitality-uniforms-saudi.jpg"
        primaryImageAlt="Hotel Uniforms and Hospitality Attire in Saudi Arabia"
        faqs={hospitalityFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Hospitality', nameAr: 'الضيافة', url: '/industries/hospitality' },
        ]}
        conversationalKeywords={[
          'where to buy hotel uniforms in Saudi Arabia',
          'best restaurant uniform supplier Riyadh',
          'chef uniforms near me',
          'luxury hotel staff attire',
        ]}
        voiceSearchQueries={[
          'Find hotel uniforms in Riyadh',
          'Order restaurant uniforms Saudi Arabia',
          'Buy chef coats online',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={100}
        yearsInBusiness={20}
        industry="Hospitality"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/patterns/hospitality-pattern.svg')] opacity-5"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Hospitality', href: '/industries/hospitality' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm font-medium">Trusted by 100+ Hotels & Restaurants in Saudi Arabia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hotel Uniforms & Hospitality Attire in{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                  Saudi Arabia
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed max-w-2xl">
                Premium hospitality uniforms for 5-star hotels, restaurants, and resorts. 
                Elegant designs that enhance your brand and ensure staff comfort.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">⭐ 5-Star Quality</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">👔 Custom Branding</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 Fast Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">✨ Stain Resistant</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=hospitality"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold border-0"
                >
                  Get Free Hospitality Quote →
                </Button>
                <Button 
                  href="/shop/hospitality-attire"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  Shop Hospitality Collection
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hospitality_uniform_formal.jpg"
                  alt="Hotel staff wearing UNEOM premium hospitality uniforms in Saudi Arabia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-amber-600">100+</div>
                <div className="text-sm text-gray-600">Hotels & Restaurants Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Key Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="Why Saudi Hotels Choose UNEOM" centered>
              Benefits for Your Hospitality Business
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {hospitalityBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section id="featured-products" className="mb-20">
            <SectionHeading subtitle="Our Hospitality Collection" centered>
              Premium Hotel & Restaurant Uniforms
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
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="text-lg font-bold text-amber-600">{product.price}</span>
                      <Link 
                        href={product.href} 
                        className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/hospitality-attire" variant="primary" size="lg">
                View All Hospitality Products
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              Hospitality Uniforms FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {hospitalityFAQs.slice(0, 6).map((faq, index) => (
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

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Hospitality Brand?
              </h2>
              <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-amber-100">
                Join 100+ hotels and restaurants across Saudi Arabia that trust UNEOM for their hospitality uniform needs. 
                Get a free consultation and custom quote today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quote?industry=hospitality" 
                  className="inline-flex items-center px-8 py-4 bg-white text-amber-700 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Get Free Hospitality Quote →
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-900 font-bold rounded-xl transition-all duration-300"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link
            href="/ar/industries/hospitality"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
