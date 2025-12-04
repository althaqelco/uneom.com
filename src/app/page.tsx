import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';
import Link from 'next/link';
import Image from 'next/image';

// ============================================
// SEO 2026 OPTIMIZED METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'Leading Uniform Manufacturer in Saudi Arabia | Professional Workwear Since 2003',
  titleAr: 'الرائد في تصنيع الزي الموحد في السعودية | أزياء مهنية منذ 2003',
  description: 'UNEOM is Saudi Arabia\'s #1 uniform manufacturer. Premium medical scrubs, corporate uniforms, hospitality attire, industrial workwear & school uniforms. ISO certified, nationwide delivery to Riyadh, Jeddah, Dammam. Get free quote today!',
  descriptionAr: 'يونيوم الشركة الأولى في تصنيع الزي الموحد في السعودية. سكراب طبي، زي شركات، ملابس ضيافة، ملابس سلامة صناعية، زي مدرسي. شهادة ISO، توصيل لجميع المدن. احصل على عرض سعر مجاني!',
  keywords: [
    // Primary Keywords - High Commercial Intent
    'uniform manufacturer saudi arabia',
    'uniforms saudi arabia',
    'uniform supplier ksa',
    'professional uniforms riyadh',
    'workwear saudi arabia',
    
    // Medical/Healthcare
    'medical scrubs saudi arabia',
    'hospital uniforms riyadh',
    'healthcare uniforms ksa',
    'scrubs supplier saudi',
    'nursing uniforms riyadh',
    
    // Corporate
    'corporate uniforms saudi arabia',
    'business uniforms riyadh',
    'office uniforms jeddah',
    'company uniforms ksa',
    
    // Hospitality
    'hotel uniforms saudi arabia',
    'restaurant uniforms riyadh',
    'hospitality attire ksa',
    'chef uniforms saudi',
    
    // Industrial
    'industrial uniforms saudi arabia',
    'safety workwear ksa',
    'factory uniforms riyadh',
    'protective clothing saudi',
    
    // Education
    'school uniforms saudi arabia',
    'student uniforms riyadh',
    'teacher uniforms ksa',
    
    // Location-based
    'uniforms riyadh',
    'uniforms jeddah',
    'uniforms dammam',
    'uniforms mecca',
    'uniforms medina',
    
    // Brand
    'UNEOM',
    'UNEOM uniforms',
    'uneom saudi arabia',
  ],
  keywordsAr: [
    'يونيفورم السعودية',
    'زي موحد الرياض',
    'مورد يونيفورم',
    'سكراب طبي السعودية',
    'زي فنادق السعودية',
    'ملابس سلامة السعودية',
    'زي شركات جدة',
    'زي مدرسي الرياض',
    'يونيوم',
    'أفضل شركة يونيفورم السعودية',
  ],
  locale: 'en',
  pageType: 'home',
  path: '/',
  image: '/images/og/uneom-homepage-2026.jpg',
  imageAlt: 'UNEOM - Leading Uniform Manufacturer in Saudi Arabia - Professional Workwear',
  aiSummary: 'UNEOM is Saudi Arabia\'s leading professional uniform manufacturer since 2003. We provide premium quality uniforms for healthcare (medical scrubs, nursing uniforms), hospitality (hotel, restaurant), corporate (business suits, office wear), industrial (safety workwear, protective clothing), and education sectors (school uniforms). ISO 9001 certified with nationwide delivery to all Saudi cities including Riyadh, Jeddah, Dammam, Mecca, and Medina. Over 500 satisfied clients and 50,000+ uniforms delivered. Custom design services available with embroidery and branding options.',
  aiSummaryAr: 'يونيوم هي الشركة الرائدة في تصنيع الزي الموحد في السعودية منذ 2003. نقدم أزياء مهنية عالية الجودة للقطاعات الطبية والضيافة والشركات والصناعة والتعليم. شهادة ISO 9001 مع التوصيل لجميع مدن السعودية. أكثر من 500 عميل راضٍ و50,000+ قطعة مسلمة.'
});

// ============================================
// FAQ DATA - AI SEARCH OPTIMIZED
// ============================================
const homeFAQs = [
  {
    question: 'What types of uniforms does UNEOM manufacture in Saudi Arabia?',
    questionAr: 'ما أنواع الزي الموحد التي تصنعها يونيوم في السعودية؟',
    answer: 'UNEOM manufactures a comprehensive range of professional uniforms in Saudi Arabia including: Medical & Healthcare uniforms (scrubs, nursing uniforms, lab coats, surgical gowns), Hospitality uniforms (hotel staff, restaurant, chef wear, housekeeping), Corporate uniforms (business suits, office wear, executive attire), Industrial uniforms (safety workwear, protective clothing, factory uniforms), Security uniforms (guard uniforms, protective gear), Aviation uniforms (airline crew, pilot uniforms), and Education uniforms (school uniforms, teacher attire). All products are made with premium fabrics and can be customized with your company logo and branding.',
    answerAr: 'تصنع يونيوم مجموعة شاملة من الأزياء المهنية في السعودية تشمل: الأزياء الطبية (سكراب، زي تمريض، معاطف مختبر)، أزياء الضيافة (موظفي الفنادق، المطاعم، الطهاة)، الأزياء المؤسسية (بدلات رسمية، ملابس مكتبية)، الأزياء الصناعية (ملابس السلامة، الملابس الواقية)، أزياء الأمن، أزياء الطيران، والزي المدرسي. جميع المنتجات مصنوعة من أقمشة فاخرة ويمكن تخصيصها بشعار شركتك.'
  },
  {
    question: 'Does UNEOM deliver uniforms across all Saudi Arabia cities?',
    questionAr: 'هل توصل يونيوم الزي الموحد لجميع مدن السعودية؟',
    answer: 'Yes, UNEOM provides fast and reliable nationwide delivery across all Saudi Arabia cities. We have primary service centers in Riyadh (our headquarters), Jeddah, and Dammam, with coverage extending to Mecca, Medina, Khobar, Dhahran, Tabuk, Abha, and all other cities. We offer 48-hour express delivery for urgent orders and free shipping on bulk orders exceeding 50 pieces. Our logistics network ensures your uniforms arrive on time, every time.',
    answerAr: 'نعم، توفر يونيوم توصيل سريع وموثوق لجميع مدن السعودية. لدينا مراكز خدمة رئيسية في الرياض (المقر الرئيسي)، جدة، والدمام، مع تغطية تمتد لمكة والمدينة والخبر والظهران وتبوك وأبها وجميع المدن الأخرى. نقدم توصيل سريع خلال 48 ساعة للطلبات العاجلة وشحن مجاني للطلبات بالجملة.'
  },
  {
    question: 'Can UNEOM create custom uniforms with company logo and branding?',
    questionAr: 'هل يمكن ليونيوم تصميم زي موحد مخصص بشعار الشركة؟',
    answer: 'Absolutely! Custom branding and logo integration is one of UNEOM\'s core specialties. We offer multiple customization services including: Professional embroidery (logos, names, badges), Screen printing for large designs, Heat transfer for detailed graphics, Woven labels and tags, Custom color matching to your brand guidelines, and Complete uniform design services from concept to production. Our design team works closely with you to ensure your uniforms perfectly represent your brand identity and corporate image.',
    answerAr: 'بالتأكيد! التصميم المخصص ودمج الشعارات من تخصصات يونيوم الأساسية. نقدم خدمات تخصيص متعددة تشمل: التطريز الاحترافي (الشعارات، الأسماء، الشارات)، الطباعة الحريرية، نقل الحرارة، الملصقات المنسوجة، مطابقة الألوان حسب هوية علامتك التجارية، وخدمات تصميم كاملة من المفهوم إلى الإنتاج.'
  },
  {
    question: 'What is the minimum order quantity for bulk uniform orders?',
    questionAr: 'ما الحد الأدنى لطلبات الزي الموحد بالجملة؟',
    answer: 'UNEOM offers flexible ordering options to accommodate businesses of all sizes. Our minimum order starts from just 10 pieces for most standard products. For bulk orders of 50+ pieces, we offer significant volume discounts of up to 30% off regular pricing. Corporate clients with ongoing uniform needs can enroll in our Uniform Management Program which offers even better pricing, automatic replenishment, and dedicated account management. Contact us for a custom quote based on your specific requirements.',
    answerAr: 'تقدم يونيوم خيارات طلب مرنة لتناسب الشركات من جميع الأحجام. الحد الأدنى للطلب يبدأ من 10 قطع فقط لمعظم المنتجات القياسية. للطلبات بالجملة من 50 قطعة فأكثر، نقدم خصومات كبيرة تصل إلى 30%. يمكن للعملاء من الشركات الاستفادة من برنامج إدارة الزي الموحد بأسعار أفضل. تواصل معنا للحصول على عرض سعر مخصص.'
  },
  {
    question: 'Is UNEOM ISO certified for quality management?',
    questionAr: 'هل يونيوم معتمدة بشهادة ISO للجودة؟',
    answer: 'Yes, UNEOM maintains rigorous quality standards and holds multiple international certifications. We are ISO 9001:2015 certified for Quality Management Systems, ensuring consistent quality across all our products and processes. We also hold OEKO-TEX Standard 100 certification, guaranteeing that all our fabrics are tested and certified to be free from harmful substances. Additionally, our manufacturing processes comply with Saudi SASO standards and international labor and safety regulations.',
    answerAr: 'نعم، تحافظ يونيوم على معايير جودة صارمة وتحمل شهادات دولية متعددة. نحن معتمدون بشهادة ISO 9001:2015 لنظم إدارة الجودة. كما نحمل شهادة OEKO-TEX Standard 100 التي تضمن خلو جميع أقمشتنا من المواد الضارة. بالإضافة إلى ذلك، عمليات التصنيع لدينا تمتثل لمعايير SASO السعودية واللوائح الدولية.'
  },
  {
    question: 'What is the typical turnaround time for uniform orders?',
    questionAr: 'ما المدة المعتادة لتسليم طلبات الزي الموحد؟',
    answer: 'UNEOM offers competitive turnaround times tailored to your needs: Standard orders (10-50 pieces) are typically completed within 7-10 business days. Bulk orders (50-500 pieces) take 10-15 business days. Large corporate orders (500+ pieces) are completed within 15-25 business days depending on customization complexity. For urgent requirements, we offer Rush Service with 48-72 hour turnaround for additional fees. Custom design projects may require additional time for sampling and approval.',
    answerAr: 'تقدم يونيوم مواعيد تسليم تنافسية: الطلبات القياسية (10-50 قطعة) تكتمل خلال 7-10 أيام عمل. الطلبات بالجملة (50-500 قطعة) تستغرق 10-15 يوم عمل. الطلبات الكبيرة للشركات (500+ قطعة) تكتمل خلال 15-25 يوم عمل. للمتطلبات العاجلة، نقدم خدمة سريعة بمدة 48-72 ساعة برسوم إضافية.'
  },
  {
    question: 'What fabrics does UNEOM use for professional uniforms?',
    questionAr: 'ما الأقمشة التي تستخدمها يونيوم للزي المهني؟',
    answer: 'UNEOM uses only premium quality fabrics selected for durability, comfort, and professional appearance. Our fabric selection includes: Cotton and cotton blends for breathability and comfort, Polyester blends for durability and easy care, Antimicrobial fabrics for healthcare settings, Flame-resistant materials for industrial use, Moisture-wicking performance fabrics, Wrinkle-resistant materials for corporate wear, and Eco-friendly sustainable fabric options. All fabrics undergo rigorous quality testing and are certified safe for prolonged wear.',
    answerAr: 'تستخدم يونيوم أقمشة فاخرة فقط مختارة للمتانة والراحة والمظهر المهني. تشمل مجموعة الأقمشة لدينا: القطن وخلطاته للتنفس والراحة، خلطات البوليستر للمتانة، الأقمشة المضادة للميكروبات للقطاع الصحي، المواد المقاومة للحريق للاستخدام الصناعي، أقمشة الأداء الماصة للرطوبة، المواد المقاومة للتجاعيد، وخيارات الأقمشة المستدامة الصديقة للبيئة.'
  },
  {
    question: 'How can I request a quote from UNEOM?',
    questionAr: 'كيف يمكنني طلب عرض سعر من يونيوم؟',
    answer: 'Requesting a quote from UNEOM is quick and easy. You can: 1) Fill out our online quote form at uneom.com/quote with your requirements, 2) Call us directly at +971 55 816 4922 for immediate assistance, 3) Email us at info@uneom.com with your specifications, or 4) Visit our showrooms in Riyadh, Jeddah, or Dammam. Our sales team typically responds within 2-4 hours during business days. For faster service, please include: type of uniforms needed, quantity, customization requirements, and preferred delivery timeline.',
    answerAr: 'طلب عرض سعر من يونيوم سريع وسهل. يمكنك: 1) ملء نموذج عرض السعر على uneom.com/ar/quote، 2) الاتصال بنا مباشرة للمساعدة الفورية، 3) مراسلتنا عبر البريد الإلكتروني info@uneom.com، أو 4) زيارة صالات العرض في الرياض أو جدة أو الدمام. يستجيب فريق المبيعات عادة خلال 2-4 ساعات. للحصول على خدمة أسرع، يرجى تضمين: نوع الزي المطلوب، الكمية، متطلبات التخصيص، والجدول الزمني للتسليم.'
  },
  {
    question: 'Does UNEOM offer uniform rental or leasing programs?',
    questionAr: 'هل تقدم يونيوم برامج تأجير الزي الموحد؟',
    answer: 'Yes, UNEOM offers comprehensive uniform management solutions beyond just manufacturing. Our Uniform Management Program includes: Rental/leasing options for businesses preferring operating expenses over capital investment, Regular maintenance and laundry services, Automatic replacement of worn items, Inventory management and tracking, Size exchange programs for staff changes, and Seasonal uniform rotation services. This program is particularly popular with hotels, hospitals, and large corporations seeking to streamline their uniform operations.',
    answerAr: 'نعم، تقدم يونيوم حلول إدارة زي موحد شاملة تتجاوز التصنيع فقط. يشمل برنامج إدارة الزي الموحد: خيارات الإيجار للشركات، خدمات الصيانة والغسيل المنتظمة، الاستبدال التلقائي للقطع البالية، إدارة المخزون والتتبع، برامج تبديل المقاسات، وخدمات تدوير الزي الموسمي. هذا البرنامج شائع بشكل خاص لدى الفنادق والمستشفيات والشركات الكبيرة.'
  },
  {
    question: 'What makes UNEOM different from other uniform suppliers in Saudi Arabia?',
    questionAr: 'ما الذي يميز يونيوم عن موردي الزي الموحد الآخرين في السعودية؟',
    answer: 'UNEOM stands out as Saudi Arabia\'s premier uniform manufacturer for several key reasons: 1) Experience: Over 20 years of expertise since 2003, serving 500+ satisfied clients. 2) Quality: ISO 9001:2015 and OEKO-TEX certified products with rigorous quality control. 3) Local Manufacturing: Made in Saudi Arabia, supporting local economy and ensuring faster delivery. 4) Custom Solutions: Full design and customization services from concept to delivery. 5) Comprehensive Range: One-stop shop for all industries from healthcare to hospitality. 6) Fast Delivery: 48-hour express service and nationwide coverage. 7) Competitive Pricing: Factory-direct pricing with bulk discounts. 8) After-Sales Support: Dedicated account managers and warranty coverage.',
    answerAr: 'تتميز يونيوم كأفضل مصنع زي موحد في السعودية لعدة أسباب: 1) الخبرة: أكثر من 20 عاماً منذ 2003، نخدم 500+ عميل راضٍ. 2) الجودة: شهادات ISO 9001:2015 و OEKO-TEX. 3) التصنيع المحلي: صنع في السعودية مما يدعم الاقتصاد المحلي. 4) الحلول المخصصة: خدمات تصميم كاملة. 5) النطاق الشامل: حلول لجميع القطاعات. 6) التوصيل السريع: خدمة 48 ساعة وتغطية على مستوى المملكة. 7) الأسعار التنافسية: أسعار مباشرة من المصنع مع خصومات. 8) دعم ما بعد البيع: مديرو حسابات مخصصون وتغطية ضمان.'
  },
];

// ============================================
// PAGE CONTENT
// ============================================
const content = {
  hero: {
    badge: 'Saudi Arabia\'s #1 Uniform Manufacturer',
    title: 'Premium Professional Uniforms & Workwear',
    subtitle: 'Trusted by 500+ organizations across Saudi Arabia. ISO certified quality, nationwide delivery, custom designs.',
    cta: 'Get Free Quote',
    secondaryCta: 'View Products'
  },
  stats: [
    { value: '500+', label: 'Satisfied Clients', icon: '👥' },
    { value: '50K+', label: 'Uniforms Delivered', icon: '👔' },
    { value: '13', label: 'Cities Served', icon: '📍' },
    { value: '20+', label: 'Years Experience', icon: '🏆' },
  ],
  trustSignals: [
    { title: 'ISO 9001 Certified', icon: '🏆', desc: 'Quality Management' },
    { title: 'Made in Saudi Arabia', icon: '🇸🇦', desc: 'Local Manufacturing' },
    { title: '48-Hour Delivery', icon: '🚚', desc: 'Express Service' },
    { title: '12-Month Warranty', icon: '🛡️', desc: 'Quality Guarantee' },
  ],
  industries: [
    { name: 'Healthcare', nameAr: 'الرعاية الصحية', slug: 'healthcare', icon: '🏥', color: 'blue' },
    { name: 'Hospitality', nameAr: 'الضيافة', slug: 'hospitality', icon: '🏨', color: 'orange' },
    { name: 'Corporate', nameAr: 'الشركات', slug: 'corporate', icon: '🏢', color: 'gray' },
    { name: 'Aviation', nameAr: 'الطيران', slug: 'aviation', icon: '✈️', color: 'sky' },
    { name: 'Education', nameAr: 'التعليم', slug: 'education', icon: '🎓', color: 'green' },
    { name: 'Manufacturing', nameAr: 'التصنيع', slug: 'manufacturing', icon: '🏭', color: 'yellow' },
    { name: 'Security', nameAr: 'الأمن', slug: 'security', icon: '🛡️', color: 'red' },
    { name: 'Retail', nameAr: 'التجزئة', slug: 'retail-shops', icon: '🛍️', color: 'purple' },
  ],
};

// ============================================
// HOMEPAGE COMPONENT
// ============================================
export default function HomePage() {
  return (
    <>
      {/* SEO 2026 Structured Data */}
      <SEO2026
        title="Leading Uniform Manufacturer in Saudi Arabia"
        titleAr="الرائد في تصنيع الزي الموحد في السعودية"
        description="UNEOM is Saudi Arabia's premier uniform manufacturer serving healthcare, hospitality, corporate, education, and industrial sectors with ISO certified quality."
        descriptionAr="يونيوم هي الشركة الرائدة في تصنيع الزي الموحد في السعودية، نخدم قطاعات الرعاية الصحية والضيافة والشركات والتعليم والصناعة بجودة معتمدة ISO."
        locale="en"
        pageType="home"
        mainEntity="Professional Uniform Manufacturing Company"
        mainEntityAr="شركة تصنيع الزي المهني"
        primaryImage="/images/og/uneom-homepage-2026.jpg"
        primaryImageAlt="UNEOM Professional Uniforms - Saudi Arabia's Leading Manufacturer"
        faqs={homeFAQs}
        breadcrumbs={[]}
        conversationalKeywords={[
          'where to buy uniforms in Saudi Arabia',
          'best uniform manufacturer in Riyadh',
          'medical scrubs supplier near me',
          'corporate uniform company Jeddah',
          'custom uniform design Saudi',
          'how much do uniforms cost in KSA',
          'who makes the best hospital uniforms',
          'where can I get hotel staff uniforms in Riyadh',
        ]}
        voiceSearchQueries={[
          'Find uniform supplier near me in Saudi Arabia',
          'Order medical scrubs online in Riyadh',
          'Get quote for company uniforms',
          'Buy hotel uniforms in Jeddah',
          'Best school uniform shop in Saudi',
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100', 'SASO Certified']}
        clientCount={500}
        yearsInBusiness={20}
      />
      
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-medium">{content.hero.badge}</span>
            </div>
            
            {/* Main Title - H1 for SEO */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block">Leading</span>
              <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 text-transparent bg-clip-text">
                {content.hero.title}
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 font-normal opacity-90">
                in Saudi Arabia
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              {content.hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/quote"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
              >
                {content.hero.cta}
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </Link>
              <Link
                href="/shop"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105"
              >
                {content.hero.secondaryCta}
              </Link>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {content.stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRUST SIGNALS */}
      {/* ============================================ */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {content.trustSignals.map((signal, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl md:text-4xl">{signal.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{signal.title}</h3>
                <p className="text-sm text-gray-500">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INDUSTRIES SECTION */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional Uniforms for Every Sector
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From healthcare to hospitality, we provide industry-specific uniform solutions designed for performance, comfort, and professional appearance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {content.industries.map((industry, index) => (
              <Link 
                key={index}
                href={`/industries/${industry.slug}`}
                className="group relative bg-gray-50 hover:bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-gray-200"
              >
                <div className="text-4xl md:text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">Professional Uniforms</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-blue-500">→</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Industries
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION - AI SEARCH OPTIMIZED */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about UNEOM professional uniforms and services in Saudi Arabia.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {homeFAQs.slice(0, 6).map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <div className="p-6">
                  <h3 
                    className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3"
                    itemProp="name"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <div 
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600 leading-relaxed pl-11" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              View All FAQs
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Elevate Your Team's Professional Image?
            </h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Get a custom quote for your organization's uniform needs. Free consultation, design services, and samples included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/50 hover:bg-white hover:text-blue-900 font-bold py-4 px-10 rounded-xl text-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Quick contact info */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+971 55 816 4922</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>info@uneom.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Riyadh, Jeddah, Dammam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LANGUAGE SWITCHER */}
      {/* ============================================ */}
      <section className="py-8 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Also available in Arabic | متوفر أيضاً باللغة العربية</p>
          <Link
            href="/ar"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            <span>🇸🇦</span>
            العربية
          </Link>
        </div>
      </section>
    </>
  );
}
