import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أزياء الأمن التي تفرض السلطة وتبني الثقة | يونيوم السعودية',
  description: 'دليل شامل لأزياء الأمن في المملكة العربية السعودية. تعلم كيف تبني الملابس الأمنية الاحترافية السلطة وتعزز السلامة وتخلق الثقة. يغطي أمن الشركات والفعاليات والمجمعات السكنية وحماية الشخصيات.',
  keywords: 'أزياء الأمن السعودية, زي الحراسة, ملابس أمن الشركات, زي أمن الفعاليات, أزياء حماية الشخصيات, قواعد لباس الأمن, ملابس أمنية احترافية, أزياء أمن المنشآت الرياض',
  openGraph: {
    title: 'أزياء الأمن التي تفرض السلطة وتبني الثقة',
    description: 'كيف تعزز الأزياء الأمنية الاحترافية السلامة وتبني الثقة في السعودية',
    images: ['/images/security/security_uniform_background.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: '/ar/blog/security-uniforms-authority-trust/',
    languages: {
      'en': '/blog/security-uniforms-authority-trust/',
      'ar': '/ar/blog/security-uniforms-authority-trust/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'سيكولوجية أزياء الأمن' },
  { id: 'authority-factors', title: 'عناصر بناء السلطة' },
  { id: 'sector-guide', title: 'متطلبات القطاعات' },
  { id: 'design-principles', title: 'مبادئ التصميم' },
  { id: 'fabric-technology', title: 'أقمشة الأداء' },
  { id: 'saudi-regulations', title: 'الأنظمة والترخيص السعودي' },
  { id: 'implementation', title: 'دليل التنفيذ' }
]

const authorityFactors = [
  {
    factor: 'سيكولوجية الألوان',
    impact: 'الألوان الداكنة (كحلي، أسود) تنقل السلطة والاحترافية',
    research: 'تُظهر الدراسات أن الأزياء الداكنة تزيد معدلات الامتثال بنسبة 25%',
    application: 'الألوان الأساسية: كحلي، أسود، رمادي داكن'
  },
  {
    factor: 'المقاس والبنية',
    impact: 'الأزياء المناسبة والمنظمة تعكس الكفاءة والجاهزية',
    research: 'الأزياء المناسبة تحسن الاحترافية المدركة بنسبة 40%',
    application: 'قصات مفصلة، أكتاف معززة، صورة ظلية احترافية'
  },
  {
    factor: 'الشارات والأوسمة',
    impact: 'العلامات الرسمية تؤسس الشرعية ووضوح الدور',
    research: 'الأوراق الاعتماد المرئية تزيد تعاون الجمهور بنسبة 35%',
    application: 'شارات الشركة، مؤشرات الرتبة، عرض الشهادات'
  },
  {
    factor: 'النظافة والحالة',
    impact: 'الأزياء المُعتنى بها تشير للاهتمام بالتفاصيل والانضباط',
    research: 'حالة الزي تؤثر على تقييمات الثقة بنسبة تصل إلى 50%',
    application: 'جداول استبدال منتظمة، تنظيف احترافي'
  }
]

const sectorRequirements = [
  {
    sector: 'أمن الشركات والمنشآت التجارية',
    description: 'حماية منشآت الأعمال والمكاتب والممتلكات التجارية',
    uniformElements: [
      'بليزر احترافي أو جاكيت بدلة',
      'قميص رسمي بشعار الشركة',
      'بنطلون رسمي مع حزام',
      'أحذية رسمية ملمعة',
      'شارة هوية وجهاز اتصال'
    ],
    colorSchemes: 'كحلي، رمادي فحمي، أسود - ألوان مؤسسية',
    specialFeatures: 'تصميم محتشم، مظهر تكتيكي بسيط',
    image: '/images/security/corporate-security-officers.jpg'
  },
  {
    sector: 'الفعاليات وإدارة الحشود',
    description: 'إدارة الحشود في الحفلات والفعاليات الرياضية والتجمعات',
    uniformElements: [
      'سترة أو بولو عالي الرؤية',
      'بنطلون تكتيكي مريح',
      'أحذية داعمة للوقوف',
      'سماعة اتصال',
      'طبقات مناسبة للطقس'
    ],
    colorSchemes: 'ألوان ساطعة للرؤية - أصفر، برتقالي مع أسود',
    specialFeatures: 'رؤية عالية، راحة للوقوف الممتد',
    image: '/images/security/saudi-events-security.jpg'
  },
  {
    sector: 'أمن المجمعات السكنية',
    description: 'حماية المجتمعات السكنية والمجمعات الخاصة',
    uniformElements: [
      'زي كاجوال أنيق (بولو/قميص)',
      'بنطلون خدمة مريح',
      'ملابس خارجية لكل الأحوال الجوية',
      'معدات البوابة/الدورية',
      'كشاف وجهاز لاسلكي'
    ],
    colorSchemes: 'ألوان ودودة - أزرق فاتح، كاكي مع لمسات كحلية',
    specialFeatures: 'مظهر ودود لكن ذو سلطة',
    image: '/images/security/security_uniform_background.jpg'
  },
  {
    sector: 'حماية الشخصيات والتنفيذيين',
    description: 'الحماية القريبة للشخصيات البارزة والتنفيذيين',
    uniformElements: [
      'ملابس رسمية (بدلة)',
      'معدات اتصال مخفية',
      'مؤشرات أمنية مرئية بسيطة',
      'إكسسوارات احترافية',
      'أحذية مناسبة للتنقل'
    ],
    colorSchemes: 'ألوان رسمية - بدل داكنة، قمصان بيضاء/زرقاء',
    specialFeatures: 'الاندماج مع البيئة التنفيذية، وظائف مخفية',
    image: '/images/security/vip-close-protection.jpg'
  },
  {
    sector: 'أمن المواقع الصناعية',
    description: 'تأمين المنشآت الصناعية ومواقع البناء والنفط والغاز',
    uniformElements: [
      'سترة سلامة عالية الرؤية',
      'أحذية سلامة (مقدمة فولاذية)',
      'خوذة صلبة حيث مطلوب',
      'زي عمل متين',
      'معدات حماية حسب متطلبات الموقع'
    ],
    colorSchemes: 'برتقالي/أصفر عالي الرؤية مع شرائط عاكسة',
    specialFeatures: 'امتثال السلامة، المتانة، الحماية من الطقس',
    image: '/images/security/industrial-site-security.jpg'
  },
  {
    sector: 'أمن التجزئة ومنع الخسائر',
    description: 'منع السرقة وضمان السلامة في بيئات التجزئة',
    uniformElements: [
      'ملابس مدنية أو زي المتجر',
      'جهاز اتصال محتشم',
      'أحذية مريحة',
      'معدات أمنية مرئية بسيطة',
      'تعريف المتجر'
    ],
    colorSchemes: 'يطابق زي المتجر أو كاجوال رسمي',
    specialFeatures: 'الاندماج مع بيئة التجزئة، ودود للعملاء',
    image: '/images/security/mall-retail-security.jpg'
  }
]

const designPrinciples = [
  {
    principle: 'الوظيفة أولاً',
    description: 'يجب أن تدعم الأزياء واجبات الأمن بدون قيود',
    elements: [
      'حرية الحركة لحالات الاستجابة',
      'وضع جيوب استراتيجي للمعدات',
      'مناطق معززة لنقاط التآكل',
      'وصول سهل لأجهزة الاتصال',
      'مريح للمناوبات الممتدة'
    ]
  },
  {
    principle: 'المظهر الاحترافي',
    description: 'إظهار السلطة مع البقاء ودوداً',
    elements: [
      'خطوط نظيفة وصورة ظلية منظمة',
      'مقاس مناسب - ليس ضيقاً أو فضفاضاً جداً',
      'مظهر متسق عبر الفريق',
      'مواد عالية الجودة تحافظ على المظهر',
      'دعم معايير النظافة الشخصية'
    ]
  },
  {
    principle: 'التكيف مع المناخ',
    description: 'مناخ السعودية يتطلب اعتباراً خاصاً',
    elements: [
      'أقمشة تنفسية للخدمة الخارجية',
      'طبقات أساسية ماصة للرطوبة',
      'حماية من الشمس للمناطق المكشوفة',
      'نظام طبقات لانتقالات التكييف',
      'خيارات خفيفة لكن احترافية'
    ]
  },
  {
    principle: 'تكامل السلامة',
    description: 'ميزات سلامة مدمجة لحماية الضابط',
    elements: [
      'خيارات عالية الرؤية عند الحاجة',
      'عناصر عاكسة للخدمة الليلية',
      'خيارات مقاومة للطعن متوفرة',
      'حلقات راديو وتثبيت المعدات',
      'ميزات تحرير سريع عند الحاجة'
    ]
  }
]

const fabricTechnologies = [
  {
    technology: 'خلطات البوليستر الماصة للرطوبة',
    benefits: ['تبقي الضباط جافين', 'تجفيف سريع', 'تحافظ على المظهر الاحترافي'],
    bestFor: 'جميع أدوار الأمن، خاصة الخدمة الخارجية',
    durability: 'عالية - تحافظ على الأداء بعد الغسيل المتكرر'
  },
  {
    technology: 'أقمشة الريبستوب',
    benefits: ['مقاومة للتمزق', 'خفيفة الوزن', 'بناء متين'],
    bestFor: 'الأزياء التكتيكية وأزياء الدوريات',
    durability: 'عالية جداً - مصممة للظروف الصعبة'
  },
  {
    technology: 'أقمشة الأداء المرنة',
    benefits: ['نطاق حركة كامل', 'مقاس مريح', 'مظهر احترافي'],
    bestFor: 'الحماية القريبة وأمن الشركات',
    durability: 'عالية - تحتفظ بالشكل والمرونة'
  },
  {
    technology: 'معالجات الحماية من الأشعة فوق البنفسجية',
    benefits: ['حماية من الشمس', 'تقليل امتصاص الحرارة', 'حماية لون القماش'],
    bestFor: 'مواقع الأمن الخارجية',
    durability: 'متوسطة - قد تتطلب إعادة تطبيق بعد الاستخدام المطول'
  },
  {
    technology: 'تشطيبات مضادة للميكروبات',
    benefits: ['التحكم في الرائحة', 'تعزيز النظافة', 'راحة ارتداء ممتدة'],
    bestFor: 'المناوبات الطويلة والأدوار عالية النشاط',
    durability: 'متوسطة-عالية - تدوم أكثر من 50 دورة غسيل'
  }
]

const saudiRegulations = [
  {
    regulation: 'ترخيص خدمات الأمن',
    authority: 'وزارة الداخلية - قطاع الأمن الخاص',
    requirements: [
      'شركات أمن مرخصة فقط',
      'أفراد أمن مسجلين',
      'تصاميم زي معتمدة',
      'تعريف الشركة مرئي',
      'لا تشابه مع العسكري/الشرطة'
    ]
  },
  {
    regulation: 'عملية اعتماد الزي',
    authority: 'هيئة خدمات الأمن',
    requirements: [
      'تقديم تصميم الزي للموافقة',
      'تمييز واضح عن القوات الرسمية',
      'شعار/اسم الشركة مرئي بوضوح',
      'أنظمة ألوان ضمن الإرشادات',
      'موافقة نظام الشارات والرتب'
    ]
  },
  {
    regulation: 'قيود المعدات',
    authority: 'جهات تنظيمية متنوعة',
    requirements: [
      'تصاريح أسلحة حيث ينطبق',
      'ترخيص معدات الاتصال',
      'متطلبات علامات المركبات',
      'معايير المعدات الواقية',
      'شهادة الإسعافات الأولية'
    ]
  }
]

const implementationSteps = [
  {
    phase: 'التقييم',
    timeline: '2-4 أسابيع',
    activities: [
      'تحليل أدوار ومتطلبات الأمن',
      'مراجعة احتياجات الامتثال التنظيمي',
      'تقييم ظروف المناخ والخدمة',
      'تقييم أداء الزي الحالي',
      'جمع ملاحظات الموظفين وبيانات المقاسات'
    ]
  },
  {
    phase: 'التصميم والموافقة',
    timeline: '4-6 أسابيع',
    activities: [
      'تطوير مواصفات الزي',
      'إنشاء نماذج التصميم',
      'التقديم للموافقة التنظيمية',
      'اختيار الأقمشة والإكسسوارات',
      'إنهاء أنظمة الألوان والعلامة التجارية'
    ]
  },
  {
    phase: 'الإنتاج والجودة',
    timeline: '6-8 أسابيع',
    activities: [
      'إنتاج العينات والاختبار',
      'إجراءات مراقبة الجودة',
      'الإنتاج بالجملة',
      'توريد الإكسسوارات والمعدات',
      'إعداد إدارة المخزون'
    ]
  },
  {
    phase: 'التوزيع والتدريب',
    timeline: '2-4 أسابيع',
    activities: [
      'جلسات قياس فردية',
      'تدريب العناية بالزي',
      'إحاطة معايير المظهر',
      'التوزيع والتوثيق',
      'نظام جمع الملاحظات'
    ]
  }
]

export default function SecurityUniformsAuthorityTrustPageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm">
            <li><Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/ar/blog" className="text-gray-500 hover:text-gray-700">المدونة</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">أزياء الأمن والسلطة والثقة</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/security_uniform_background.jpg"
            alt="أزياء الأمن"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-slate-500/20 text-slate-300 px-4 py-1.5 rounded-full text-sm font-medium border border-slate-400/30">
                الأمن
              </span>
              <span className="bg-gray-500/20 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-400/30">
                السلطة الاحترافية
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء الأمن التي تفرض السلطة وتبني الثقة
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              اكتشف كيف تعزز الأزياء الأمنية الاحترافية السلامة 
              وتفرض السلطة وتبني الثقة عبر قطاعات الأمن المتنوعة في السعودية.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الأمن يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>12 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 أغسطس 2025</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TagIcon className="h-5 w-5 text-slate-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-slate-600 hover:bg-slate-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-slate-700 to-gray-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">شريك أزياء أمنية؟</h3>
                <p className="text-sm text-slate-300 mb-4">
                  يونيوم تخدم أكثر من 100 شركة أمن في السعودية.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors"
                >
                  احصل على عرض سعر أمني
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">سيكولوجية أزياء الأمن</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في قطاع الأمن سريع النمو في المملكة العربية السعودية، تخدم الأزياء وظيفة حرجة 
                تتجاوز مجرد التعريف. إنها أدوات نفسية قوية تؤسس السلطة 
                وتبني الثقة وتعزز فعالية أفراد الأمن في كل بيئة—من 
                الأبراج التجارية في الرياض إلى الفعاليات الكبرى في جدة.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/security/security_uniform_background.jpg"
                  alt="أزياء أمنية احترافية"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="h-6 w-6" />
                  إحصائيات صناعة الأمن السعودية
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-slate-600">+150 ألف</div>
                    <div className="text-sm text-gray-600">فرد أمن في المملكة</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-600">15 مليار ريال</div>
                    <div className="text-sm text-gray-600">قيمة سوق الأمن</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-600">+500</div>
                    <div className="text-sm text-gray-600">شركة أمن مرخصة</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-600">25%</div>
                    <div className="text-sm text-gray-600">معدل النمو السنوي</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Authority Factors */}
            <section id="authority-factors" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عناصر بناء السلطة</h2>
              
              <div className="space-y-4">
                {authorityFactors.map((factor, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{factor.factor}</h3>
                    <p className="text-gray-600 mb-3">{factor.impact}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <span className="text-sm text-blue-700"><strong>البحث:</strong> {factor.research}</span>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <span className="text-sm text-green-700"><strong>التطبيق:</strong> {factor.application}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sector Guide */}
            <section id="sector-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">متطلبات القطاعات</h2>
              
              <div className="space-y-8">
                {sectorRequirements.map((sector, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto md:order-2">
                        <Image
                          src={sector.image}
                          alt={sector.sector}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.sector}</h3>
                        <p className="text-gray-600 mb-4">{sector.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">عناصر الزي:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                              {sector.uniformElements.map((element, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                                  <span>{element}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <span className="text-xs font-semibold text-gray-500">الألوان:</span>
                              <p className="text-sm text-gray-700">{sector.colorSchemes}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <span className="text-xs font-semibold text-gray-500">الميزات:</span>
                              <p className="text-sm text-gray-700">{sector.specialFeatures}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Design Principles */}
            <section id="design-principles" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مبادئ التصميم</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designPrinciples.map((principle, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">{principle.principle}</h3>
                    <p className="text-sm text-slate-600 mb-4">{principle.description}</p>
                    <ul className="space-y-2">
                      {principle.elements.map((element, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircleIcon className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          <span>{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Saudi Regulations */}
            <section id="saudi-regulations" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الأنظمة والترخيص السعودي</h2>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
                <div className="flex items-start gap-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">إشعار امتثال مهم</h3>
                    <p className="text-sm text-red-800">
                      جميع أزياء الأمن في المملكة العربية السعودية يجب أن تكون معتمدة من الجهات المختصة. 
                      العمل بأزياء غير متوافقة قد يؤدي إلى غرامات وإلغاء الترخيص.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {saudiRegulations.map((reg, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{reg.regulation}</h3>
                    <p className="text-sm text-gray-500 mb-4">الجهة: {reg.authority}</p>
                    <ul className="space-y-2">
                      {reg.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <LockClosedIcon className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل التنفيذ</h2>
              
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">{step.phase}</h3>
                        <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                          {step.timeline}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-slate-700 to-gray-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">جهّز فريق الأمن لديك للنجاح</h2>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  يونيوم هي مزود أزياء الأمن الموثوق في المملكة العربية السعودية، 
                  تخدم شركات الأمن الكبرى بحلول أزياء متوافقة واحترافية ومتينة.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة أمنية
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/security"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول الأمن
                  </Link>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  )
}
