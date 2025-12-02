import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  ChartBarIcon,
  LightBulbIcon,
  GlobeAltIcon,
  CpuChipIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HeartIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'اتجاهات الزي الموحد 2025: ما الجديد في السوق السعودي | تحليل خبراء يونيوم',
  description: 'دليل شامل لأحدث اتجاهات الزي الموحد في المملكة العربية السعودية لعام 2025. اكتشف الابتكارات في الأقمشة الذكية والمواد المستدامة وحلول ملابس العمل المتوافقة مع رؤية 2030 لقطاعات الرعاية الصحية والضيافة والشركات والصناعة.',
  keywords: 'اتجاهات الزي الموحد 2025, زي موحد السعودية, ابتكارات ملابس العمل, الأقمشة الذكية السعودية, رؤية 2030 الأزياء, الملابس المهنية, زي الشركات الرياض, زي الرعاية الصحية, زي الضيافة جدة, اتجاهات الملابس الصناعية',
  openGraph: {
    title: 'اتجاهات الزي الموحد 2025: ما الجديد في السوق السعودي',
    description: 'تحليل خبراء لأحدث اتجاهات وابتكارات الزي الموحد التي تحول السوق السعودي في 2025',
    images: ['/images/blog/textile-innovations.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-01-15T08:00:00Z',
    authors: ['فريق خبراء يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/uniform-trends-2025-saudi-market/',
    languages: {
      'en': '/blog/uniform-trends-2025-saudi-market/',
      'ar': '/ar/blog/uniform-trends-2025-saudi-market/',
    }
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'اتجاهات الزي الموحد 2025: ما الجديد في السوق السعودي',
  description: 'دليل شامل لأحدث اتجاهات الزي الموحد في المملكة العربية السعودية لعام 2025',
  image: 'https://uneom.com/images/blog/textile-innovations.jpg',
  author: {
    '@type': 'Organization',
    name: 'يونيوم',
    url: 'https://uneom.com/ar'
  },
  publisher: {
    '@type': 'Organization',
    name: 'يونيوم',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/uneom-logo.png'
    }
  },
  datePublished: '2025-01-15T08:00:00Z',
  dateModified: '2025-01-15T08:00:00Z',
  inLanguage: 'ar',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/ar/blog/uniform-trends-2025-saudi-market/'
  }
}

const tableOfContents = [
  { id: 'overview', title: 'نظرة عامة على السوق 2025' },
  { id: 'smart-fabrics', title: 'ثورة الأقمشة الذكية' },
  { id: 'sustainability', title: 'الاستدامة والمواد الصديقة للبيئة' },
  { id: 'cultural-integration', title: 'التكامل الثقافي والأزياء المحتشمة' },
  { id: 'sector-trends', title: 'اتجاهات القطاعات المختلفة' },
  { id: 'technology', title: 'التكامل التقني' },
  { id: 'vision-2030', title: 'التوافق مع رؤية 2030' },
  { id: 'implementation', title: 'دليل التنفيذ' }
]

const keyTrends = [
  {
    icon: CpuChipIcon,
    title: 'المنسوجات الذكية وتكامل إنترنت الأشياء',
    description: 'أزياء موحدة مدمجة بأجهزة استشعار لمراقبة الصحة وتنظيم درجة الحرارة وتتبع الأداء في الوقت الفعلي.',
    growth: '+45%',
    adoption: 'انتشار مبكر'
  },
  {
    icon: GlobeAltIcon,
    title: 'المواد المستدامة والمعاد تدويرها',
    description: 'البوليستر الحيوي والبلاستيك المعاد تدويره من المحيطات والقطن العضوي أصبحت معيارية في خطوط الزي الفاخر.',
    growth: '+62%',
    adoption: 'نمو سريع'
  },
  {
    icon: SparklesIcon,
    title: 'الأقمشة المضادة للميكروبات والتنظيف الذاتي',
    description: 'معالجات متقدمة تقلل نمو البكتيريا والروائح، مما يطيل عمر الملابس ويحسن النظافة.',
    growth: '+38%',
    adoption: 'سائد'
  },
  {
    icon: ShieldCheckIcon,
    title: 'ميزات السلامة المحسنة',
    description: 'حماية مدمجة من الأشعة فوق البنفسجية ومقاومة اللهب وعناصر عالية الرؤية تلبي معايير السلامة الدولية.',
    growth: '+29%',
    adoption: 'قياسي'
  }
]

const sectorTrends = [
  {
    sector: 'الرعاية الصحية',
    icon: HeartIcon,
    color: 'blue',
    trends: [
      'سكراب مضاد للميكروبات بتقنية أيونات الفضة',
      'معاطف مختبر مقاومة للسوائل بأغشية تنفسية',
      'أنظمة تحديد الأقسام بالألوان',
      'خيارات حجاب للطاقم النسائي',
      'أزياء مزودة بتقنية RFID لتتبع الموظفين'
    ],
    marketSize: '850 مليون ريال',
    growth: '+18% سنوياً',
    image: '/images/healthcare/healthcare_medical_uniform.jpg'
  },
  {
    sector: 'الضيافة',
    icon: BuildingOffice2Icon,
    color: 'amber',
    trends: [
      'أقمشة فاخرة مستدامة للفنادق الخمس نجوم',
      'مواد متكيفة مع المناخ للموظفين الخارجيين',
      'تصاميم مزج ثقافي تعكس التراث السعودي',
      'معالجات مقاومة للبقع لموظفي الأغذية والمشروبات',
      'أقمشة سريعة الجفاف للسبا والعافية'
    ],
    marketSize: '620 مليون ريال',
    growth: '+24% سنوياً',
    image: '/images/hospitality/hospitality_uniform_hotel_service.jpg'
  },
  {
    sector: 'الشركات',
    icon: BuildingOffice2Icon,
    color: 'gray',
    trends: [
      'أقمشة مرنة للراحة طوال اليوم',
      'مواد أداء مقاومة للتجاعيد',
      'أنظمة زي موحد معيارية قابلة للتخصيص',
      'مجموعات ملابس تنفيذية مستدامة',
      'مزج الكاجوال الذكي لبيئات العمل الحديثة'
    ],
    marketSize: '480 مليون ريال',
    growth: '+15% سنوياً',
    image: '/images/corporate/corporate_brand.jpg'
  },
  {
    sector: 'الصناعة',
    icon: TruckIcon,
    color: 'orange',
    trends: [
      'تقنية التبريد لبيئات الحرارة الشديدة',
      'ابتكارات مقاومة القوس الكهربائي واللهب',
      'تصاميم مريحة تقلل إرهاق مكان العمل',
      'مواد ذكية عالية الرؤية',
      'أجهزة سلامة قابلة للارتداء مدمجة'
    ],
    marketSize: '720 مليون ريال',
    growth: '+21% سنوياً',
    image: '/images/industrial/saudi-safety-standards.jpg'
  },
  {
    sector: 'التعليم',
    icon: AcademicCapIcon,
    color: 'green',
    trends: [
      'أقمشة متينة مع برامج ضمان ممتدة',
      'تصاميم تتكيف مع نمو الطلاب',
      'مبادرات الزي المدرسي المستدام',
      'ملابس خارجية واقية من الأشعة فوق البنفسجية',
      'مكافحة التنمر من خلال المقاسات الشاملة'
    ],
    marketSize: '380 مليون ريال',
    growth: '+12% سنوياً',
    image: '/images/education/premium-school-uniforms.jpg'
  }
]

const smartFabricFeatures = [
  {
    feature: 'تنظيم درجة الحرارة',
    description: 'مواد تغيير الطور التي تمتص وتخزن وتطلق الحرارة للحفاظ على درجة حرارة الجسم المثلى',
    benefit: 'تقليل الإجهاد الحراري بنسبة تصل إلى 40%',
    applications: ['العمال الصناعيون', 'الأمن الخارجي', 'موظفو المطبخ']
  },
  {
    feature: 'إدارة الرطوبة',
    description: 'تقنية امتصاص متقدمة تنقل العرق بعيداً عن الجسم للتبخر السريع',
    benefit: 'يبقي العمال جافين ومرتاحين',
    applications: ['الرعاية الصحية', 'الضيافة', 'الرياضة']
  },
  {
    feature: 'مراقبة الصحة',
    description: 'أجهزة استشعار مدمجة تتتبع معدل ضربات القلب ودرجة حرارة الجسم ومستويات التعب',
    benefit: 'إنذار مبكر للمشاكل الصحية',
    applications: ['السلامة الصناعية', 'الأمن', 'الرعاية الصحية']
  },
  {
    feature: 'الحماية من الأشعة فوق البنفسجية',
    description: 'حماية مدمجة UPF 50+ تظل فعالة عبر دورات غسيل متعددة',
    benefit: 'تقليل مخاطر سرطان الجلد للعمال الخارجيين',
    applications: ['البناء', 'الزراعة', 'الفعاليات']
  }
]

const sustainabilityInitiatives = [
  {
    initiative: 'بلاستيك المحيطات المعاد تدويره',
    description: 'تحويل نفايات المحيطات المجمعة إلى ألياف بوليستر عالية الأداء',
    impact: 'تحويل أكثر من 500 طن من المحيطات سنوياً',
    available: 'الربع الأول 2025'
  },
  {
    initiative: 'برنامج القطن العضوي',
    description: 'شراكة مع مبادرات زراعية سعودية للقطن العضوي المزروع محلياً',
    impact: 'انخفاض 60% في استخدام المياه',
    available: 'متوفر الآن'
  },
  {
    initiative: 'نموذج الاقتصاد الدائري',
    description: 'برامج استرجاع تضمن إعادة التدوير والارتقاء بالزي الموحد المستعمل',
    impact: 'التزام بصفر نفايات بحلول 2027',
    available: 'برنامج تجريبي'
  },
  {
    initiative: 'الإنتاج المحايد للكربون',
    description: 'منشآت تصنيع تعمل بالطاقة المتجددة مع برامج تعويض',
    impact: 'صفر انبعاثات صافية بحلول 2026',
    available: 'قيد التنفيذ'
  }
]

const vision2030Alignment = [
  {
    goal: 'التنويع الاقتصادي',
    contribution: 'دعم التصنيع المحلي للمنسوجات وتقليل الاعتماد على الاستيراد',
    metric: '40% محتوى محلي بحلول 2025'
  },
  {
    goal: 'السياحة والترفيه',
    contribution: 'أزياء ضيافة عالمية المستوى تدعم المشاريع العملاقة',
    metric: 'خدمة نيوم والبحر الأحمر والقدية'
  },
  {
    goal: 'تحول الرعاية الصحية',
    contribution: 'أزياء طبية متقدمة تلبي المعايير الدولية',
    metric: 'حلول متوافقة مع JCI'
  },
  {
    goal: 'الاستدامة',
    contribution: 'مواد صديقة للبيئة وممارسات الاقتصاد الدائري',
    metric: '50% مواد مستدامة بحلول 2026'
  }
]

export default function UniformTrends2025PageAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white" dir="rtl">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4 border-b" aria-label="مسار التنقل">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 space-x-reverse text-sm">
              <li><Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><Link href="/ar/blog" className="text-gray-500 hover:text-gray-700">المدونة</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><span className="text-gray-900 font-medium">اتجاهات الزي الموحد 2025</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/blog/textile-innovations.jpg"
              alt="اتجاهات الزي الموحد 2025"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">
                  تقرير اتجاهات 2025
                </span>
                <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                  تحليل السوق
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                اتجاهات الزي الموحد 2025: ما الجديد في السوق السعودي
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                تحليل شامل للابتكارات والتقنيات والتحولات السوقية 
                التي تغير الأزياء الموحدة المهنية عبر الصناعات الرئيسية في المملكة العربية السعودية في 2025.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>فريق أبحاث يونيوم</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>15 دقيقة قراءة</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  <span>15 يناير 2025</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-1 lg:order-2">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TagIcon className="h-5 w-5 text-blue-600" />
                    فهرس المحتويات
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">أبرز أرقام السوق</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">3.05 مليار ريال</div>
                      <div className="text-sm text-blue-700">إجمالي حجم السوق 2025</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">+19%</div>
                      <div className="text-sm text-green-700">نمو سنوي</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">45%</div>
                      <div className="text-sm text-purple-700">تبني الأقمشة الذكية</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
              
              {/* Overview Section */}
              <section id="overview" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ChartBarIcon className="h-8 w-8 text-blue-600" />
                  نظرة عامة على السوق 2025
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  يشهد سوق الزي الموحد في المملكة العربية السعودية تحولاً غير مسبوق في عام 2025، 
                  مدفوعاً بمبادرات رؤية 2030 والتطورات التقنية وتوقعات القوى العاملة المتطورة. 
                  مع قيمة سوقية إجمالية تتجاوز 3 مليارات ريال، تشهد الصناعة تحولاً كبيراً 
                  نحو حلول ملابس العمل الذكية والمستدامة والمتكاملة ثقافياً.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  {keyTrends.map((trend, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-xl">
                          <trend.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{trend.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{trend.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              نمو {trend.growth}
                            </span>
                            <span className="text-xs text-gray-500">{trend.adoption}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border-r-4 border-amber-400 p-6 rounded-l-xl my-8">
                  <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <LightBulbIcon className="h-5 w-5" />
                    رؤية الخبراء
                  </h4>
                  <p className="text-amber-800">
                    "إن تقاطع متطلبات الاستدامة والتحول الرقمي والمشاريع العملاقة في المملكة العربية السعودية 
                    يخلق عاصفة مثالية لابتكار الزي الموحد. الشركات التي تتبنى هذه الاتجاهات الآن 
                    ستحقق مزايا تنافسية كبيرة في السنوات القادمة."
                  </p>
                  <p className="text-amber-700 text-sm mt-2">— فريق أبحاث يونيوم للسوق</p>
                </div>
              </section>

              {/* Smart Fabrics Section */}
              <section id="smart-fabrics" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ثورة الأقمشة الذكية</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  يشهد عام 2025 التبني السائد للمنسوجات الذكية في الأزياء الموحدة المهنية. 
                  تدمج هذه المواد المتقدمة التكنولوجيا بسلاسة في هياكل الأقمشة، 
                  مما يوفر وظائف غير مسبوقة مع الحفاظ على الراحة والمظهر المهني.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/industrial/smart-safety-clothing.jpg"
                    alt="تقنية الأقمشة الذكية في الأزياء"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  {smartFabricFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.feature}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                          ✓ {feature.benefit}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {feature.applications.map((app, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sustainability Section */}
              <section id="sustainability" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">الاستدامة والمواد الصديقة للبيئة</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  انتقلت المسؤولية البيئية من خيار إلى ضرورة في صناعة الزي الموحد بالمملكة العربية السعودية. 
                  مدفوعة بأهداف استدامة رؤية 2030 ومعايير المسؤولية المؤسسية العالمية، 
                  يتبنى المصنعون بسرعة الممارسات الصديقة للبيئة.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/blog/sustainable-trends.jpg"
                    alt="مواد الزي الموحد المستدامة"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sustainabilityInitiatives.map((item, index) => (
                    <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-green-900">{item.initiative}</h3>
                        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          {item.available}
                        </span>
                      </div>
                      <p className="text-green-800 text-sm mb-3">{item.description}</p>
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <span className="text-green-700 font-medium text-sm">الأثر: {item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cultural Integration Section */}
              <section id="cultural-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">التكامل الثقافي والأزياء المحتشمة</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  تستمر المتطلبات الثقافية الفريدة للمملكة العربية السعودية في دفع الابتكار في الملابس المهنية المحتشمة. 
                  يشهد عام 2025 تطورات كبيرة في الجمع بين القيم التقليدية والتصميم المعاصر والوظائف.
                </p>

                <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-6">التطورات الرئيسية في الملابس المهنية المحتشمة</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">حلول الحجاب للرعاية الصحية</h4>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>خيارات حجاب مضادة للميكروبات تلبي معايير مكافحة العدوى</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>تصاميم سريعة التثبيت للحالات الطارئة</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>خيارات مرمزة بالألوان لتحديد الأقسام</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">مجموعات الشركات المحتشمة</h4>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>عباءات مفصلة مع تكامل العلامة التجارية للشركات</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>بدلات محتشمة احترافية بقصات عصرية</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>ملابس محتشمة متكيفة مع المناخ للفعاليات الخارجية</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sector Trends Section */}
              <section id="sector-trends" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">اتجاهات القطاعات المختلفة</h2>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  يقدم كل قطاع في اقتصاد المملكة العربية السعودية تحديات وفرصاً فريدة 
                  لابتكار الزي الموحد. إليك تفصيل الاتجاهات حسب الصناعة:
                </p>

                <div className="space-y-8">
                  {sectorTrends.map((sector, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-64 md:h-auto md:order-2">
                          <Image
                            src={sector.image}
                            alt={`أزياء ${sector.sector}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6 md:order-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                              <sector.icon className={`h-7 w-7 text-${sector.color}-600`} />
                              {sector.sector}
                            </h3>
                            <div className="text-left">
                              <div className="text-lg font-bold text-gray-900">{sector.marketSize}</div>
                              <div className="text-sm text-green-600 font-medium">{sector.growth}</div>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {sector.trends.map((trend, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{trend}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Vision 2030 Section */}
              <section id="vision-2030" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">التوافق مع رؤية 2030</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  تلعب صناعة الزي الموحد دوراً حاسماً في دعم أهداف رؤية 2030 للمملكة العربية السعودية. 
                  إليك كيف تتوافق اتجاهات الصناعة مع الأهداف الوطنية:
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/blog/vision-2030.jpg"
                    alt="رؤية 2030 والأزياء الموحدة"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vision2030Alignment.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h3 className="font-bold text-green-900 mb-2">{item.goal}</h3>
                      <p className="text-green-800 text-sm mb-4">{item.contribution}</p>
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <span className="text-green-700 font-bold">{item.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Section */}
              <section id="implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل التنفيذ</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  للمنظمات التي تتطلع لتبني اتجاهات 2025، إليك خارطة طريق عملية للتنفيذ:
                </p>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">مرحلة التقييم (الشهر 1-2)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• تدقيق مخزون الزي الموحد الحالي ودورة حياته</li>
                          <li>• استطلاع احتياجات راحة الموظفين والوظائف</li>
                          <li>• تحديد أولويات الاستدامة والتكنولوجيا</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">البرنامج التجريبي (الشهر 3-4)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• اختيار قسم للتنفيذ التجريبي</li>
                          <li>• اختبار المواد والتقنيات الجديدة</li>
                          <li>• جمع الملاحظات وقياس الأداء</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">التطبيق الكامل (الشهر 5-8)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• تنفيذ مرحلي عبر الأقسام</li>
                          <li>• تدريب الموظفين على العناية بالزي وميزاته الجديدة</li>
                          <li>• إنشاء أنظمة مراقبة وملاحظات</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">التحسين (مستمر)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• مراجعة منتظمة وتحسين مستمر</li>
                          <li>• تتبع العائد على الاستثمار ومقاييس الاستدامة</li>
                          <li>• البقاء على اطلاع بالتقنيات الناشئة</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">هل أنت مستعد لتبني اتجاهات الزي الموحد 2025؟</h2>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    يونيوم هي الشركة الرائدة في المملكة العربية السعودية في توفير حلول الزي الموحد المبتكرة. 
                    فريقنا من الخبراء جاهز لمساعدتك في تنفيذ أحدث الاتجاهات المصممة خصيصاً 
                    لصناعتك ومتطلباتك.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/ar/contact"
                      className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                      طلب استشارة
                      <ArrowLeftIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/ar/shop"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      تصفح المنتجات
                    </Link>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/ar/blog/sustainable-uniforms-2024-trends" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/sustainable-uniforms-2024.jpg"
                      alt="الأزياء المستدامة"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      اتجاهات الزي الموحد المستدام 2024
                    </h3>
                    <p className="text-gray-600 text-sm">
                      استكشف ابتكارات ملابس العمل الصديقة للبيئة وممارسات الاقتصاد الدائري.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/ar/blog/medical-textile-innovation" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/healthcare-uniforms.jpg"
                      alt="المنسوجات الطبية"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      ابتكار المنسوجات الطبية
                    </h3>
                    <p className="text-gray-600 text-sm">
                      أقمشة الرعاية الصحية المتقدمة تحول رعاية المرضى وسلامة الموظفين.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/ar/blog/industrial-protective-clothing-advances" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/industrial-protective-clothing.jpg"
                      alt="ملابس العمل الصناعية"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      تطورات الملابس الصناعية الواقية
                    </h3>
                    <p className="text-gray-600 text-sm">
                      أحدث ابتكارات السلامة التي تحمي القوى العاملة الصناعية في المملكة.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
