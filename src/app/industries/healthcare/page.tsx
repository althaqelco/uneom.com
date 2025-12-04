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
  title: 'Medical Uniforms & Scrubs Saudi Arabia | Healthcare Workwear - UNEOM',
  titleAr: 'الزي الطبي والسكراب في السعودية | ملابس الرعاية الصحية - يونيوم',
  description: 'Buy premium medical scrubs & healthcare uniforms in Saudi Arabia. Antimicrobial fabrics, MOH approved, for hospitals, clinics & labs in Riyadh, Jeddah, Dammam. Nursing uniforms, lab coats, surgical gowns. Get free quote!',
  descriptionAr: 'اشتري أفضل سكراب طبي وزي رعاية صحية في السعودية. أقمشة مضادة للبكتيريا، معتمد من وزارة الصحة. للمستشفيات والعيادات والمختبرات. زي تمريض، معاطف مختبر، ملابس جراحية. احصل على عرض سعر مجاني!',
  keywords: [
    // Primary - High Commercial Intent
    'medical scrubs saudi arabia',
    'medical uniforms riyadh',
    'hospital uniforms saudi',
    'healthcare uniforms ksa',
    'buy scrubs riyadh',
    'medical scrubs jeddah',
    
    // Product Types
    'nursing uniforms saudi arabia',
    'lab coats riyadh',
    'surgical gowns ksa',
    'doctor coats saudi',
    'medical hijab',
    'antimicrobial scrubs',
    
    // Features
    'antimicrobial medical uniforms',
    'comfortable scrubs',
    'breathable medical wear',
    'moisture wicking scrubs',
    
    // Location-based
    'hospital uniforms riyadh',
    'clinic uniforms jeddah',
    'medical wear dammam',
    'healthcare uniforms mecca',
    
    // Long-tail
    'best medical scrubs saudi arabia',
    'buy nursing uniforms online ksa',
    'custom hospital uniforms saudi',
    'bulk medical scrubs order',
    
    // Brand
    'UNEOM medical scrubs',
    'UNEOM healthcare uniforms',
  ],
  keywordsAr: [
    'سكراب طبي السعودية',
    'ملابس طبية الرياض',
    'زي مستشفى السعودية',
    'زي ممرضات السعودية',
    'معطف طبيب',
    'سكراب جدة',
    'زي رعاية صحية',
    'ملابس طبية مضادة للبكتيريا',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/healthcare',
  image: '/images/industries/healthcare-uniforms-saudi.jpg',
  imageAlt: 'Medical Uniforms and Scrubs in Saudi Arabia - UNEOM Healthcare Workwear',
  aiSummary: 'UNEOM provides premium medical uniforms and healthcare scrubs in Saudi Arabia. Our products include medical scrubs for nurses and doctors, lab coats, surgical gowns, medical hijabs, and nursing uniforms. All fabrics feature antimicrobial treatment, moisture-wicking technology, and meet Saudi MOH standards. Serving 200+ hospitals and clinics in Riyadh, Jeddah, Dammam, and all Saudi cities. Bulk orders welcome with custom branding options. ISO certified quality with 48-hour delivery.',
  aiSummaryAr: 'توفر يونيوم أفضل الأزياء الطبية وسكراب الرعاية الصحية في السعودية. تشمل منتجاتنا سكراب طبي للممرضات والأطباء، معاطف المختبر، ملابس جراحية، حجاب طبي، وزي تمريض. جميع الأقمشة تتميز بالمعالجة المضادة للميكروبات وتقنية امتصاص الرطوبة وتلبي معايير وزارة الصحة السعودية.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA - AI SEARCH OPTIMIZED
// ============================================
const healthcareFAQs = [
  {
    question: 'What types of medical uniforms does UNEOM offer in Saudi Arabia?',
    questionAr: 'ما أنواع الأزياء الطبية التي تقدمها يونيوم في السعودية؟',
    answer: 'UNEOM offers a comprehensive range of medical uniforms in Saudi Arabia including: Premium Medical Scrubs (tops, pants, scrub sets), Professional Lab Coats (short and long sleeves), Nursing Uniforms (scrub dresses, nursing tops), Surgical Gowns and Caps, Medical Hijabs (designed for healthcare settings), Doctor Coats and Consultant Attire, Medical Accessories (surgical caps, masks, shoe covers). All products are available in various colors and sizes, with customization options for hospital branding.',
    answerAr: 'تقدم يونيوم مجموعة شاملة من الأزياء الطبية في السعودية تشمل: السكراب الطبي الفاخر، معاطف المختبر المهنية، زي التمريض، الملابس الجراحية والقبعات، الحجاب الطبي، معاطف الأطباء والاستشاريين، الإكسسوارات الطبية. جميع المنتجات متوفرة بألوان ومقاسات متنوعة مع خيارات التخصيص.'
  },
  {
    question: 'Are UNEOM medical scrubs antimicrobial?',
    questionAr: 'هل سكراب يونيوم الطبي مضاد للميكروبات؟',
    answer: 'Yes, UNEOM medical scrubs feature advanced antimicrobial technology. Our fabrics are treated with silver-ion antimicrobial agents that provide lasting protection against bacteria, fungi, and odor-causing microorganisms. This treatment remains effective through multiple wash cycles (up to 50+ washes) and meets international healthcare standards. This is especially important for Saudi healthcare facilities that require the highest hygiene standards.',
    answerAr: 'نعم، يتميز سكراب يونيوم الطبي بتقنية مضادة للميكروبات متطورة. تُعالج أقمشتنا بعوامل مضادة للميكروبات بالأيونات الفضية التي توفر حماية دائمة ضد البكتيريا والفطريات والكائنات المسببة للروائح. تظل هذه المعالجة فعالة خلال دورات غسيل متعددة (أكثر من 50 غسلة) وتلبي المعايير الدولية للرعاية الصحية.'
  },
  {
    question: 'Does UNEOM supply medical uniforms to hospitals in Riyadh?',
    questionAr: 'هل توفر يونيوم الأزياء الطبية للمستشفيات في الرياض؟',
    answer: 'Yes, UNEOM is a trusted medical uniform supplier for hospitals and healthcare facilities in Riyadh. We currently serve over 200 healthcare facilities across Saudi Arabia, including major hospitals, private clinics, medical centers, and laboratories in Riyadh. We offer bulk ordering with volume discounts, custom embroidery with hospital logos, dedicated account management for healthcare clients, and express 48-hour delivery for urgent needs.',
    answerAr: 'نعم، يونيوم هي مورد موثوق للأزياء الطبية للمستشفيات والمرافق الصحية في الرياض. نخدم حالياً أكثر من 200 مرفق صحي في جميع أنحاء السعودية، بما في ذلك المستشفيات الكبرى والعيادات الخاصة والمراكز الطبية والمختبرات في الرياض. نقدم طلبات بالجملة مع خصومات، تطريز مخصص بشعارات المستشفيات، إدارة حسابات مخصصة، وتوصيل سريع 48 ساعة.'
  },
  {
    question: 'What is the price of medical scrubs in Saudi Arabia?',
    questionAr: 'ما سعر السكراب الطبي في السعودية؟',
    answer: 'UNEOM medical scrubs pricing in Saudi Arabia is competitive and varies based on the product type and quantity. Basic medical scrubs start from SAR 149 per set. Premium antimicrobial scrubs range from SAR 189-249. Lab coats start from SAR 179. Nursing uniforms start from SAR 169. For bulk orders (50+ pieces), we offer significant discounts of up to 30%. Contact us for a custom quote tailored to your healthcare facility\'s needs.',
    answerAr: 'أسعار السكراب الطبي من يونيوم في السعودية تنافسية وتختلف حسب نوع المنتج والكمية. السكراب الطبي الأساسي يبدأ من 149 ريال للطقم. السكراب المضاد للميكروبات من 189-249 ريال. معاطف المختبر من 179 ريال. زي التمريض من 169 ريال. للطلبات بالجملة (50+ قطعة) نقدم خصومات تصل إلى 30%.'
  },
  {
    question: 'Do you offer medical hijab for healthcare workers?',
    questionAr: 'هل توفرون حجاب طبي للعاملات في الرعاية الصحية؟',
    answer: 'Yes, UNEOM offers specially designed medical hijabs for healthcare workers in Saudi Arabia. Our medical hijabs feature quick-dry, antimicrobial fabric that meets healthcare hygiene standards. They are designed for comfort during long shifts, easy to wear and secure (no pins needed), available in colors matching scrub sets, and designed to stay in place during patient care activities. These medical hijabs are particularly popular among nursing staff and female doctors in Saudi hospitals.',
    answerAr: 'نعم، تقدم يونيوم حجاباً طبياً مصمماً خصيصاً للعاملات في الرعاية الصحية في السعودية. يتميز حجابنا الطبي بقماش سريع الجفاف ومضاد للميكروبات يلبي معايير النظافة الصحية. مصمم للراحة خلال المناوبات الطويلة، سهل الارتداء والتثبيت (بدون دبابيس)، متوفر بألوان تناسب أطقم السكراب، ومصمم ليظل ثابتاً أثناء أنشطة رعاية المرضى.'
  },
  {
    question: 'Can UNEOM provide custom embroidery on medical uniforms?',
    questionAr: 'هل يمكن ليونيوم توفير تطريز مخصص على الأزياء الطبية؟',
    answer: 'Absolutely! UNEOM specializes in custom embroidery and branding for medical uniforms. We offer hospital logo embroidery, department identification, staff name badges, color-coded uniforms by department, custom designs for hospital branding, and embroidery on all uniform types (scrubs, lab coats, hijabs). Our embroidery is durable and maintains quality through industrial laundering. This service is particularly popular with private hospitals and clinics in Riyadh and Jeddah.',
    answerAr: 'بالتأكيد! تتخصص يونيوم في التطريز المخصص والعلامات التجارية للأزياء الطبية. نقدم تطريز شعار المستشفى، تحديد القسم، شارات أسماء الموظفين، أزياء مرمزة بالألوان حسب القسم، تصاميم مخصصة للعلامة التجارية، والتطريز على جميع أنواع الأزياء. التطريز لدينا متين ويحافظ على الجودة عبر الغسيل الصناعي.'
  },
  {
    question: 'How fast can UNEOM deliver medical uniforms in Saudi Arabia?',
    questionAr: 'كم تستغرق يونيوم في توصيل الأزياء الطبية في السعودية؟',
    answer: 'UNEOM offers fast delivery of medical uniforms across Saudi Arabia. Standard delivery takes 5-7 business days for stock items. Express delivery is available within 48-72 hours for urgent hospital needs. Bulk custom orders typically take 10-15 business days. We deliver to all Saudi cities including Riyadh, Jeddah, Dammam, Mecca, Medina, and nationwide. Free shipping is available for orders over SAR 2,000.',
    answerAr: 'تقدم يونيوم توصيل سريع للأزياء الطبية في جميع أنحاء السعودية. التوصيل القياسي يستغرق 5-7 أيام عمل للمنتجات المتوفرة. التوصيل السريع متاح خلال 48-72 ساعة للاحتياجات العاجلة. الطلبات المخصصة بالجملة تستغرق 10-15 يوم عمل. نوصل لجميع مدن السعودية. شحن مجاني للطلبات فوق 2,000 ريال.'
  },
  {
    question: 'Are UNEOM medical uniforms compliant with Saudi MOH standards?',
    questionAr: 'هل أزياء يونيوم الطبية متوافقة مع معايير وزارة الصحة السعودية؟',
    answer: 'Yes, all UNEOM medical uniforms are designed and manufactured to comply with Saudi Ministry of Health (MOH) standards and international healthcare regulations. Our products are ISO 9001:2015 certified, OEKO-TEX Standard 100 certified (safe fabrics), meet infection control guidelines, and are compliant with Saudi SASO standards. We regularly update our products to meet evolving healthcare regulations in the Kingdom.',
    answerAr: 'نعم، جميع أزياء يونيوم الطبية مصممة ومصنعة للامتثال لمعايير وزارة الصحة السعودية واللوائح الدولية للرعاية الصحية. منتجاتنا معتمدة ISO 9001:2015، معتمدة OEKO-TEX Standard 100 (أقمشة آمنة)، تلبي إرشادات مكافحة العدوى، ومتوافقة مع معايير SASO السعودية. نحدث منتجاتنا بانتظام لتلبية اللوائح الصحية المتطورة في المملكة.'
  },
  {
    question: 'What fabrics are used in UNEOM medical scrubs?',
    questionAr: 'ما الأقمشة المستخدمة في سكراب يونيوم الطبي؟',
    answer: 'UNEOM medical scrubs are made from premium healthcare-grade fabrics specifically selected for medical environments. Our fabric options include: Polyester-Cotton blends (65/35) for durability and comfort, 100% Polyester moisture-wicking fabric for high-activity roles, Antimicrobial treated fabrics with silver-ion technology, Stretch fabrics for enhanced mobility, and Fluid-resistant fabrics for surgical settings. All fabrics are tested for colorfastness, shrink resistance, and durability through industrial laundering.',
    answerAr: 'سكراب يونيوم الطبي مصنوع من أقمشة فاخرة بدرجة طبية مختارة خصيصاً للبيئات الطبية. تشمل خيارات الأقمشة: خلطات البوليستر-القطن (65/35) للمتانة والراحة، بوليستر 100% ماص للرطوبة، أقمشة معالجة مضادة للميكروبات، أقمشة مطاطة للمرونة، وأقمشة مقاومة للسوائل للإعدادات الجراحية. جميع الأقمشة مختبرة للثبات اللوني ومقاومة الانكماش والمتانة.'
  },
  {
    question: 'Does UNEOM offer uniform management programs for hospitals?',
    questionAr: 'هل تقدم يونيوم برامج إدارة الأزياء للمستشفيات؟',
    answer: 'Yes, UNEOM offers comprehensive uniform management programs designed specifically for hospitals and healthcare facilities in Saudi Arabia. Our programs include automatic inventory replenishment, size exchange for new hires, regular quality inspections, scheduled bulk ordering with guaranteed pricing, laundry service coordination, and dedicated hospital account managers. This service is ideal for large hospitals looking to streamline their uniform operations and reduce administrative burden.',
    answerAr: 'نعم، تقدم يونيوم برامج شاملة لإدارة الأزياء مصممة خصيصاً للمستشفيات والمرافق الصحية في السعودية. تشمل برامجنا: تجديد المخزون التلقائي، تبديل المقاسات للموظفين الجدد، فحوصات الجودة المنتظمة، طلبات بالجملة مجدولة بأسعار مضمونة، تنسيق خدمة الغسيل، ومديري حسابات مخصصين للمستشفيات.'
  },
];

// ============================================
// FEATURED PRODUCTS DATA
// ============================================
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Medical Scrubs',
    description: 'Antimicrobial, moisture-wicking scrubs for nurses and medical staff. Available in 12 colors.',
    image: '/images/products/scrubs-set.jpg',
    price: 'From SAR 189',
    href: '/shop/medical-scrubs/premium-medical-scrubs/',
    category: 'Medical Scrubs',
    features: ['Antimicrobial', 'Moisture-wicking', '4-way stretch']
  },
  {
    id: '2',
    name: 'Professional Lab Coats',
    description: 'Premium lab coats for doctors and consultants. Long & short sleeve options.',
    image: '/images/products/lab-coat.jpg',
    price: 'From SAR 179',
    href: '/shop/medical-scrubs/professional-lab-coat/',
    category: 'Lab Coats',
    features: ['Stain-resistant', 'Professional fit', 'Multiple pockets']
  },
  {
    id: '3',
    name: 'Nursing Uniforms',
    description: 'Elegant and practical nursing uniforms designed for Saudi healthcare workers.',
    image: '/images/products/nursing-uniform.jpg',
    price: 'From SAR 169',
    href: '/shop/medical-scrubs/nursing-scrubs/',
    category: 'Nursing Uniforms',
    features: ['Comfortable fit', 'Easy care', 'Professional look']
  },
  {
    id: '4',
    name: 'Medical Hijab',
    description: 'Specially designed antimicrobial hijab for healthcare settings.',
    image: '/images/healthcare/medical_hijab_uniform.jpg',
    price: 'From SAR 79',
    href: '/shop/medical-scrubs/medical-hijab/',
    category: 'Medical Hijab',
    features: ['Quick-dry', 'Secure fit', 'Antimicrobial']
  },
  {
    id: '5',
    name: 'Surgical Gowns',
    description: 'Fluid-resistant surgical gowns for operating rooms and procedures.',
    image: '/images/products/surgical-gown.jpg',
    price: 'From SAR 149',
    href: '/shop/medical-scrubs/surgical-gowns/',
    category: 'Surgical Wear',
    features: ['Fluid-resistant', 'Sterile options', 'Full coverage']
  },
  {
    id: '6',
    name: 'Doctor Coats',
    description: 'Premium consultant coats for physicians and specialists.',
    image: '/images/products/doctor-coat.jpg',
    price: 'From SAR 249',
    href: '/shop/medical-scrubs/doctor-coats/',
    category: 'Doctor Attire',
    features: ['Premium fabric', 'Executive style', 'Custom embroidery']
  },
];

// ============================================
// BENEFITS DATA
// ============================================
const healthcareBenefits = [
  {
    icon: '🦠',
    title: 'Antimicrobial Protection',
    description: 'Advanced silver-ion antimicrobial treatment that inhibits bacterial growth and maintains hygiene standards in healthcare environments. Effective for 50+ wash cycles.',
  },
  {
    icon: '💧',
    title: 'Moisture Management',
    description: 'Moisture-wicking fabrics keep healthcare professionals dry and comfortable during demanding 12+ hour shifts in Saudi Arabia\'s climate.',
  },
  {
    icon: '♻️',
    title: 'Easy Care & Durability',
    description: 'Wrinkle-resistant, quick-dry fabrics that maintain professional appearance. Designed to withstand industrial laundering and frequent use.',
  },
  {
    icon: '✅',
    title: 'MOH Compliant',
    description: 'All uniforms meet Saudi Ministry of Health regulations, SASO standards, and international healthcare guidelines. ISO 9001 certified.',
  },
];

// ============================================
// HEALTHCARE PAGE COMPONENT
// ============================================
export default function HealthcareIndustryPage() {
  return (
    <>
      {/* SEO 2026 Structured Data */}
      <SEO2026
        title="Medical Uniforms & Scrubs Saudi Arabia"
        titleAr="الزي الطبي والسكراب في السعودية"
        description="UNEOM provides premium medical scrubs and healthcare uniforms in Saudi Arabia for hospitals, clinics, and labs."
        descriptionAr="توفر يونيوم أفضل سكراب طبي وأزياء رعاية صحية في السعودية للمستشفيات والعيادات والمختبرات."
        locale="en"
        pageType="industry"
        mainEntity="Medical Uniforms and Healthcare Scrubs"
        mainEntityAr="الأزياء الطبية وسكراب الرعاية الصحية"
        primaryImage="/images/industries/healthcare-uniforms-saudi.jpg"
        primaryImageAlt="Medical Uniforms and Scrubs in Saudi Arabia"
        faqs={healthcareFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Healthcare', nameAr: 'الرعاية الصحية', url: '/industries/healthcare' },
        ]}
        conversationalKeywords={[
          'where to buy medical scrubs in Riyadh',
          'best hospital uniforms Saudi Arabia',
          'antimicrobial scrubs supplier',
          'nursing uniforms near me',
          'medical hijab for nurses',
        ]}
        voiceSearchQueries={[
          'Find medical scrubs in Riyadh',
          'Order hospital uniforms Saudi Arabia',
          'Buy nursing uniforms online',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100', 'MOH Compliant', 'SASO Certified']}
        clientCount={200}
        yearsInBusiness={20}
        industry="Healthcare"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/patterns/medical-pattern.svg')] opacity-5"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Healthcare', href: '/industries/healthcare' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400">✓</span>
                <span className="text-sm font-medium">Trusted by 200+ Healthcare Facilities in Saudi Arabia</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Uniforms & Scrubs in{' '}
                <span className="bg-gradient-to-r from-green-300 to-teal-300 text-transparent bg-clip-text">
                  Saudi Arabia
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                Premium healthcare uniforms designed for Saudi Arabia's medical professionals. 
                Antimicrobial fabrics, MOH compliant, with fast delivery to Riyadh, Jeddah, Dammam & all cities.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🦠 Antimicrobial</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">✅ MOH Approved</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 48hr Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏆 ISO Certified</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=healthcare"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0"
                >
                  Get Free Healthcare Quote →
                </Button>
                <Button 
                  href="/shop/medical-scrubs"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Shop Medical Scrubs
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-healthcare-uniforms.jpg"
                  alt="Healthcare professionals wearing UNEOM medical uniforms in Saudi Arabia hospital"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Hospitals & Clinics Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Key Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="Why Saudi Healthcare Facilities Choose UNEOM" centered>
              Advanced Features for Healthcare Professionals
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {healthcareBenefits.map((benefit, index) => (
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
            <SectionHeading subtitle="Our Healthcare Uniform Collection" centered>
              Premium Medical Uniforms & Scrubs
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
                    
                    {/* Features */}
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
              <Button href="/shop/medical-scrubs" variant="primary" size="lg">
                View All Healthcare Products
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              Healthcare Uniforms FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {healthcareFAQs.slice(0, 6).map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 
                    className="text-lg font-bold text-gray-900 mb-3"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <div 
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Upgrade Your Healthcare Uniforms?
              </h2>
              <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">
                Join 200+ healthcare facilities across Saudi Arabia that trust UNEOM for their medical uniform needs. 
                Get a free consultation and custom quote today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quote?industry=healthcare" 
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Get Free Healthcare Quote →
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all duration-300"
                >
                  Contact Us Now
                </Link>
              </div>
              
              {/* Quick Contact */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <span>📞 +971 55 816 4922</span>
                <span>📧 healthcare@uneom.com</span>
                <span>📍 Riyadh | Jeddah | Dammam</span>
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
            href="/ar/industries/healthcare"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
