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
// SEO 2026 OPTIMIZED METADATA - ARABIC
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'سكراب طبي وزي رعاية صحية في السعودية | يونيوم - أفضل ملابس طبية',
  titleAr: 'سكراب طبي وزي رعاية صحية في السعودية | يونيوم - أفضل ملابس طبية',
  description: 'Buy premium medical scrubs & healthcare uniforms in Saudi Arabia. Antimicrobial fabrics for hospitals in Riyadh, Jeddah, Dammam. Nursing uniforms, lab coats, medical hijab.',
  descriptionAr: 'اشتري أفضل سكراب طبي وزي رعاية صحية في السعودية. أقمشة مضادة للبكتيريا معتمدة من وزارة الصحة. للمستشفيات والعيادات في الرياض وجدة والدمام. زي تمريض، معاطف مختبر، حجاب طبي. توصيل سريع وأسعار تنافسية!',
  keywords: [
    'medical scrubs saudi arabia',
    'healthcare uniforms ksa',
    'hospital uniforms riyadh',
    'UNEOM healthcare',
  ],
  keywordsAr: [
    // الكلمات الرئيسية - نية تجارية عالية
    'سكراب طبي السعودية',
    'ملابس طبية الرياض',
    'زي مستشفى السعودية',
    'شراء سكراب طبي',
    'زي رعاية صحية',
    'سكراب جدة',
    'سكراب الدمام',
    
    // أنواع المنتجات
    'زي ممرضات السعودية',
    'معطف طبيب الرياض',
    'ملابس جراحية',
    'معطف مختبر',
    'حجاب طبي',
    'سكراب مضاد للبكتيريا',
    
    // الميزات
    'ملابس طبية مضادة للميكروبات',
    'سكراب مريح',
    'ملابس طبية تنفس',
    
    // المواقع
    'زي مستشفى الرياض',
    'ملابس طبية جدة',
    'سكراب الدمام',
    'زي طبي مكة',
    
    // Long-tail
    'أفضل سكراب طبي السعودية',
    'شراء زي تمريض أونلاين',
    'سكراب طبي بالجملة',
    'مورد ملابس مستشفى',
    
    // العلامة التجارية
    'يونيوم سكراب طبي',
    'يونيوم زي رعاية صحية',
  ],
  locale: 'ar',
  pageType: 'industry',
  path: '/ar/industries/healthcare',
  image: '/images/industries/healthcare-uniforms-saudi-ar.jpg',
  imageAlt: 'سكراب طبي وزي رعاية صحية في السعودية - يونيوم',
  aiSummary: 'UNEOM provides premium medical uniforms and healthcare scrubs in Saudi Arabia for hospitals, clinics, and labs.',
  aiSummaryAr: 'توفر يونيوم أفضل سكراب طبي وأزياء الرعاية الصحية في السعودية. تشمل منتجاتنا سكراب طبي للممرضات والأطباء، معاطف المختبر، ملابس جراحية، حجاب طبي، وزي تمريض. جميع الأقمشة مضادة للميكروبات بتقنية الأيونات الفضية وتلبي معايير وزارة الصحة السعودية. نخدم أكثر من 200 مستشفى وعيادة في الرياض وجدة والدمام وجميع مدن السعودية. طلبات بالجملة مع تخصيص وتطريز شعار المستشفى. جودة معتمدة ISO مع توصيل 48 ساعة.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA - ARABIC
// ============================================
const healthcareFAQsAr = [
  {
    question: 'ما أنواع الأزياء الطبية التي تقدمها يونيوم في السعودية؟',
    questionAr: 'ما أنواع الأزياء الطبية التي تقدمها يونيوم في السعودية؟',
    answer: 'UNEOM offers comprehensive medical uniforms including scrubs, lab coats, nursing uniforms, surgical gowns, medical hijabs, and doctor coats.',
    answerAr: 'تقدم يونيوم مجموعة شاملة من الأزياء الطبية في السعودية تشمل: السكراب الطبي الفاخر (قمصان، بناطيل، أطقم كاملة)، معاطف المختبر المهنية (أكمام قصيرة وطويلة)، زي التمريض (فساتين سكراب، قمصان تمريض)، الملابس الجراحية والقبعات، الحجاب الطبي (مصمم خصيصاً للبيئات الصحية)، معاطف الأطباء والاستشاريين، الإكسسوارات الطبية (قبعات جراحية، كمامات، أغطية أحذية). جميع المنتجات متوفرة بألوان ومقاسات متنوعة مع خيارات التخصيص بشعار المستشفى.'
  },
  {
    question: 'هل سكراب يونيوم الطبي مضاد للميكروبات؟',
    questionAr: 'هل سكراب يونيوم الطبي مضاد للميكروبات؟',
    answer: 'Yes, UNEOM scrubs feature advanced silver-ion antimicrobial technology effective for 50+ wash cycles.',
    answerAr: 'نعم، يتميز سكراب يونيوم الطبي بتقنية مضادة للميكروبات متطورة. تُعالج أقمشتنا بعوامل مضادة للميكروبات بالأيونات الفضية التي توفر حماية دائمة ضد البكتيريا والفطريات والكائنات المسببة للروائح. تظل هذه المعالجة فعالة خلال دورات غسيل متعددة (أكثر من 50 غسلة) وتلبي المعايير الدولية للرعاية الصحية. هذا مهم بشكل خاص للمرافق الصحية السعودية التي تتطلب أعلى معايير النظافة.'
  },
  {
    question: 'هل توفر يونيوم الأزياء الطبية للمستشفيات في الرياض؟',
    questionAr: 'هل توفر يونيوم الأزياء الطبية للمستشفيات في الرياض؟',
    answer: 'Yes, UNEOM supplies 200+ healthcare facilities in Riyadh with bulk orders, custom embroidery, and 48-hour delivery.',
    answerAr: 'نعم، يونيوم هي مورد موثوق للأزياء الطبية للمستشفيات والمرافق الصحية في الرياض. نخدم حالياً أكثر من 200 مرفق صحي في جميع أنحاء السعودية، بما في ذلك المستشفيات الكبرى والعيادات الخاصة والمراكز الطبية والمختبرات في الرياض. نقدم طلبات بالجملة مع خصومات كبيرة، تطريز مخصص بشعارات المستشفيات، إدارة حسابات مخصصة لعملاء الرعاية الصحية، وتوصيل سريع 48 ساعة للاحتياجات العاجلة.'
  },
  {
    question: 'ما سعر السكراب الطبي في السعودية؟',
    questionAr: 'ما سعر السكراب الطبي في السعودية؟',
    answer: 'Basic scrubs from SAR 149, premium antimicrobial from SAR 189-249, with up to 30% bulk discounts.',
    answerAr: 'أسعار السكراب الطبي من يونيوم في السعودية تنافسية وتختلف حسب نوع المنتج والكمية. السكراب الطبي الأساسي يبدأ من 149 ريال للطقم. السكراب المضاد للميكروبات الفاخر يتراوح من 189-249 ريال. معاطف المختبر تبدأ من 179 ريال. زي التمريض يبدأ من 169 ريال. للطلبات بالجملة (50+ قطعة) نقدم خصومات كبيرة تصل إلى 30%. تواصل معنا للحصول على عرض سعر مخصص.'
  },
  {
    question: 'هل توفرون حجاب طبي للعاملات في الرعاية الصحية؟',
    questionAr: 'هل توفرون حجاب طبي للعاملات في الرعاية الصحية؟',
    answer: 'Yes, UNEOM offers antimicrobial medical hijabs designed for healthcare settings, quick-dry and secure fit.',
    answerAr: 'نعم، تقدم يونيوم حجاباً طبياً مصمماً خصيصاً للعاملات في الرعاية الصحية في السعودية. يتميز حجابنا الطبي بقماش سريع الجفاف ومضاد للميكروبات يلبي معايير النظافة الصحية. مصمم للراحة خلال المناوبات الطويلة، سهل الارتداء والتثبيت (بدون دبابيس)، متوفر بألوان تناسب أطقم السكراب، ومصمم ليظل ثابتاً أثناء أنشطة رعاية المرضى. الحجاب الطبي شائع بشكل خاص لدى طاقم التمريض والطبيبات في المستشفيات السعودية.'
  },
  {
    question: 'كم تستغرق يونيوم في توصيل الأزياء الطبية في السعودية؟',
    questionAr: 'كم تستغرق يونيوم في توصيل الأزياء الطبية في السعودية؟',
    answer: 'Standard 5-7 days, Express 48-72 hours, free shipping on orders over SAR 2,000.',
    answerAr: 'تقدم يونيوم توصيل سريع للأزياء الطبية في جميع أنحاء السعودية. التوصيل القياسي يستغرق 5-7 أيام عمل للمنتجات المتوفرة في المخزون. التوصيل السريع متاح خلال 48-72 ساعة للاحتياجات العاجلة للمستشفيات. الطلبات المخصصة بالجملة تستغرق عادة 10-15 يوم عمل. نوصل لجميع مدن السعودية بما فيها الرياض وجدة والدمام ومكة والمدينة. شحن مجاني للطلبات فوق 2,000 ريال.'
  },
  {
    question: 'هل أزياء يونيوم الطبية متوافقة مع معايير وزارة الصحة السعودية؟',
    questionAr: 'هل أزياء يونيوم الطبية متوافقة مع معايير وزارة الصحة السعودية؟',
    answer: 'Yes, ISO 9001:2015 certified, OEKO-TEX certified, MOH and SASO compliant.',
    answerAr: 'نعم، جميع أزياء يونيوم الطبية مصممة ومصنعة للامتثال لمعايير وزارة الصحة السعودية واللوائح الدولية للرعاية الصحية. منتجاتنا معتمدة ISO 9001:2015 لنظم إدارة الجودة، معتمدة OEKO-TEX Standard 100 (أقمشة آمنة وخالية من المواد الضارة)، تلبي إرشادات مكافحة العدوى، ومتوافقة مع معايير SASO السعودية. نحدث منتجاتنا بانتظام لتلبية اللوائح الصحية المتطورة في المملكة.'
  },
  {
    question: 'هل تقدم يونيوم تطريز مخصص على الأزياء الطبية؟',
    questionAr: 'هل تقدم يونيوم تطريز مخصص على الأزياء الطبية؟',
    answer: 'Yes, we offer hospital logo embroidery, department identification, and staff name badges.',
    answerAr: 'بالتأكيد! تتخصص يونيوم في التطريز المخصص والعلامات التجارية للأزياء الطبية. نقدم تطريز شعار المستشفى، تحديد القسم، شارات أسماء الموظفين، أزياء مرمزة بالألوان حسب القسم، تصاميم مخصصة للعلامة التجارية للمستشفى، والتطريز على جميع أنواع الأزياء (السكراب، معاطف المختبر، الحجاب). التطريز لدينا متين ويحافظ على الجودة عبر الغسيل الصناعي. هذه الخدمة شائعة بشكل خاص لدى المستشفيات والعيادات الخاصة في الرياض وجدة.'
  },
];

// ============================================
// FEATURED PRODUCTS DATA - ARABIC
// ============================================
const featuredProducts = [
  {
    id: '1',
    name: 'السكراب الطبي الفاخر',
    description: 'سكراب مضاد للميكروبات وماص للرطوبة للممرضات والطاقم الطبي. متوفر بـ 12 لون.',
    image: '/images/healthcare/scrubs-collections.jpg',
    price: 'يبدأ من 189 ريال',
    href: '/ar/shop/medical-scrubs/premium-medical-scrubs/',
    category: 'السكراب الطبي',
    features: ['مضاد للميكروبات', 'ماص للرطوبة', 'مرن 4 اتجاهات']
  },
  {
    id: '2',
    name: 'معاطف المختبر المهنية',
    description: 'معاطف مختبر فاخرة للأطباء والاستشاريين. أكمام طويلة وقصيرة.',
    image: '/images/products/lab-coat.jpg',
    price: 'يبدأ من 179 ريال',
    href: '/ar/shop/medical-scrubs/professional-lab-coat/',
    category: 'معاطف المختبر',
    features: ['مقاوم للبقع', 'قصة مهنية', 'جيوب متعددة']
  },
  {
    id: '3',
    name: 'زي التمريض',
    description: 'أزياء تمريض أنيقة وعملية مصممة للعاملات في الرعاية الصحية السعودية.',
    image: '/images/products/nursing-uniform.jpg',
    price: 'يبدأ من 169 ريال',
    href: '/ar/shop/medical-scrubs/nursing-scrubs/',
    category: 'زي التمريض',
    features: ['قصة مريحة', 'سهل العناية', 'مظهر مهني']
  },
  {
    id: '4',
    name: 'الحجاب الطبي',
    description: 'حجاب طبي مضاد للميكروبات مصمم خصيصاً للبيئات الصحية.',
    image: '/images/healthcare/medical_hijab_uniform.jpg',
    price: 'يبدأ من 79 ريال',
    href: '/ar/shop/medical-scrubs/medical-hijab/',
    category: 'الحجاب الطبي',
    features: ['سريع الجفاف', 'تثبيت آمن', 'مضاد للميكروبات']
  },
  {
    id: '5',
    name: 'الملابس الجراحية',
    description: 'ملابس جراحية مقاومة للسوائل لغرف العمليات والإجراءات.',
    image: '/images/products/surgical-gown.jpg',
    price: 'يبدأ من 149 ريال',
    href: '/ar/shop/medical-scrubs/surgical-gowns/',
    category: 'الملابس الجراحية',
    features: ['مقاومة للسوائل', 'خيارات معقمة', 'تغطية كاملة']
  },
  {
    id: '6',
    name: 'معاطف الأطباء',
    description: 'معاطف استشاريين فاخرة للأطباء والمتخصصين.',
    image: '/images/products/doctor-coat.jpg',
    price: 'يبدأ من 249 ريال',
    href: '/ar/shop/medical-scrubs/doctor-coats/',
    category: 'ملابس الأطباء',
    features: ['قماش فاخر', 'أسلوب تنفيذي', 'تطريز مخصص']
  },
];

// ============================================
// BENEFITS DATA - ARABIC
// ============================================
const healthcareBenefits = [
  {
    icon: '🦠',
    title: 'حماية مضادة للميكروبات',
    description: 'معالجة متطورة بالأيونات الفضية تمنع نمو البكتيريا وتحافظ على معايير النظافة. فعالة لأكثر من 50 غسلة.',
  },
  {
    icon: '💧',
    title: 'إدارة الرطوبة',
    description: 'أقمشة ماصة للرطوبة تبقي المهنيين الصحيين جافين ومرتاحين خلال مناوبات 12+ ساعة في مناخ السعودية.',
  },
  {
    icon: '♻️',
    title: 'سهولة العناية والمتانة',
    description: 'أقمشة مقاومة للتجاعيد وسريعة الجفاف تحافظ على المظهر المهني. مصممة لتحمل الغسيل الصناعي.',
  },
  {
    icon: '✅',
    title: 'متوافق مع وزارة الصحة',
    description: 'جميع الأزياء تلبي لوائح وزارة الصحة السعودية ومعايير SASO والإرشادات الدولية. شهادة ISO 9001.',
  },
];

// ============================================
// ARABIC HEALTHCARE PAGE COMPONENT
// ============================================
export default function HealthcareIndustryPageAr() {
  return (
    <div dir="rtl">
      {/* SEO 2026 Structured Data */}
      <SEO2026
        title="سكراب طبي وزي رعاية صحية في السعودية"
        titleAr="سكراب طبي وزي رعاية صحية في السعودية"
        description="UNEOM provides premium medical scrubs and healthcare uniforms in Saudi Arabia."
        descriptionAr="توفر يونيوم أفضل سكراب طبي وأزياء رعاية صحية في السعودية للمستشفيات والعيادات والمختبرات."
        locale="ar"
        pageType="industry"
        mainEntity="Medical Uniforms and Healthcare Scrubs"
        mainEntityAr="سكراب طبي وزي رعاية صحية"
        primaryImage="/images/industries/healthcare-uniforms-saudi-ar.jpg"
        primaryImageAlt="سكراب طبي وزي رعاية صحية في السعودية"
        faqs={healthcareFAQsAr}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/ar/industries' },
          { name: 'Healthcare', nameAr: 'الرعاية الصحية', url: '/ar/industries/healthcare' },
        ]}
        conversationalKeywords={[
          'وين أشتري سكراب طبي في الرياض',
          'أفضل زي مستشفى السعودية',
          'مورد سكراب مضاد للبكتيريا',
          'زي تمريض قريب مني',
          'حجاب طبي للممرضات',
        ]}
        voiceSearchQueries={[
          'ابحث عن سكراب طبي في الرياض',
          'اطلب زي مستشفى السعودية',
          'اشتري زي تمريض أونلاين',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100', 'معتمد وزارة الصحة', 'معتمد SASO']}
        clientCount={200}
        yearsInBusiness={20}
        industry="Healthcare"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/patterns/medical-pattern.svg')] opacity-5"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'الصناعات', href: '/ar/industries' },
              { label: 'الرعاية الصحية', href: '/ar/industries/healthcare' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400">✓</span>
                <span className="text-sm font-medium">موثوق من أكثر من 200 مرفق صحي في السعودية</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                سكراب طبي وزي رعاية صحية في{' '}
                <span className="bg-gradient-to-r from-green-300 to-teal-300 text-transparent bg-clip-text">
                  السعودية
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                أزياء طبية فاخرة مصممة للمهنيين الصحيين في السعودية. 
                أقمشة مضادة للميكروبات، معتمدة من وزارة الصحة، مع توصيل سريع للرياض وجدة والدمام وجميع المدن.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🦠 مضاد للميكروبات</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">✅ معتمد وزارة الصحة</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 توصيل 48 ساعة</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏆 شهادة ISO</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/ar/quote?industry=healthcare"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0"
                >
                  احصل على عرض سعر مجاني ←
                </Button>
                <Button 
                  href="/ar/shop/medical-scrubs"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  تسوق السكراب الطبي
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-healthcare-uniforms.jpg"
                  alt="مهنيون صحيون يرتدون زي يونيوم الطبي في مستشفى سعودي"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-blue-600">+200</div>
                <div className="text-sm text-gray-600">مستشفى وعيادة نخدمها</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Key Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="لماذا تختار المرافق الصحية السعودية يونيوم" centered>
              مميزات متقدمة للمهنيين الصحيين
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
            <SectionHeading subtitle="مجموعة أزياء الرعاية الصحية" centered>
              سكراب طبي وأزياء صحية فاخرة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.category} في السعودية`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
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
                        عرض التفاصيل
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/medical-scrubs" variant="primary" size="lg">
                عرض جميع منتجات الرعاية الصحية
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>
              الأسئلة الشائعة حول الأزياء الطبية
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {healthcareFAQsAr.slice(0, 6).map((faq, index) => (
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
                    {faq.questionAr}
                  </h3>
                  <div 
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600 leading-relaxed" itemProp="text">
                      {faq.answerAr}
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
                هل أنت مستعد لترقية أزياء الرعاية الصحية؟
              </h2>
              <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">
                انضم إلى أكثر من 200 مرفق صحي في جميع أنحاء السعودية تثق في يونيوم لاحتياجات الأزياء الطبية. 
                احصل على استشارة مجانية وعرض سعر مخصص اليوم.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/ar/quote?industry=healthcare" 
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
                >
                  احصل على عرض سعر مجاني ←
                </Link>
                <Link 
                  href="/ar/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all duration-300"
                >
                  تواصل معنا الآن
                </Link>
              </div>
              
              {/* Quick Contact */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <span dir="ltr">📞 +971 55 816 4922</span>
                <span>📧 healthcare@uneom.com</span>
                <span>📍 الرياض | جدة | الدمام</span>
              </div>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in English</p>
          <Link
            href="/industries/healthcare"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇬🇧 English
          </Link>
        </div>
      </section>
    </div>
  );
}
