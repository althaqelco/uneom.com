import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  FlagIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أزياء الشركات وثقافة العلامة التجارية: بناء الهوية في بيئات العمل السعودية | يونيوم',
  description: 'دليل شامل لأزياء الشركات وثقافة العلامة التجارية في المملكة العربية السعودية. تعلم كيف تعزز الملابس المهنية هوية الشركة وترفع معنويات الموظفين وتخلق تجارب علامة تجارية متماسكة. مع ميزة خاصة عن احتفالات اليوم الوطني السعودي.',
  keywords: 'أزياء الشركات السعودية, زي الموظفين, ملابس العمل الرياض, زي الشركات, هوية العلامة التجارية, أزياء اليوم الوطني السعودي, قواعد اللباس المهني, ثقافة مكان العمل, زي المكتب',
  openGraph: {
    title: 'أزياء الشركات وثقافة العلامة التجارية: بناء الهوية في بيئات العمل السعودية',
    description: 'كيف تعزز برامج الزي الاستراتيجية هوية العلامة التجارية وثقافة مكان العمل',
    images: ['/images/corporate/corporate_uniform_formal.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: '/ar/blog/corporate-uniforms-brand-culture/',
    languages: {
      'en': '/blog/corporate-uniforms-brand-culture/',
      'ar': '/ar/blog/corporate-uniforms-brand-culture/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'قوة أزياء الشركات' },
  { id: 'brand-benefits', title: 'فوائد هوية العلامة التجارية' },
  { id: 'employee-impact', title: 'التأثير على الموظفين' },
  { id: 'design-guide', title: 'دليل التصميم والأسلوب' },
  { id: 'national-day', title: 'خاص باليوم الوطني السعودي' },
  { id: 'implementation', title: 'استراتيجية التنفيذ' },
  { id: 'roi', title: 'العائد على الاستثمار' }
]

const brandBenefits = [
  {
    benefit: 'اتساق العلامة البصرية',
    description: 'تخلق الأزياء هوية بصرية متماسكة عبر جميع نقاط اتصال العملاء',
    impact: '78% من العملاء يربطون جودة الزي بجودة الخدمة',
    examples: 'الاستقبال، فرق المبيعات، موظفو الخدمة، الإدارة'
  },
  {
    benefit: 'الصورة الاحترافية',
    description: 'الأزياء المصممة جيداً تعكس الكفاءة والجدارة بالثقة والاهتمام بالتفاصيل',
    impact: 'تقييمات ثقة أعلى بنسبة 65% للموظفين بالزي مقابل اللباس العادي',
    examples: 'اجتماعات العملاء، المعارض التجارية، خدمة العملاء'
  },
  {
    benefit: 'تمييز العلامة التجارية',
    description: 'الأزياء المميزة تساعد الشركات على التميز في الأسواق التنافسية',
    impact: 'تذكر أفضل للعلامة بنسبة 40% مع برامج الزي المتسقة',
    examples: 'التجزئة، الضيافة، الخدمات المالية'
  },
  {
    benefit: 'التواصل الثقافي',
    description: 'تعكس الأزياء وتعزز قيم وثقافة الشركة',
    impact: '55% من الموظفين يشعرون بارتباط أكبر برسالة الشركة عند ارتداء الزي',
    examples: 'التركيز على الابتكار، التقليدية، التمحور حول العميل'
  }
]

const employeeImpacts = [
  {
    category: 'الفوائد النفسية',
    impacts: [
      { item: 'تقليل إرهاق القرار', stat: 'توفير 15 دقيقة يومياً' },
      { item: 'زيادة الثقة', stat: 'تحسن بنسبة 42%' },
      { item: 'هوية فريق أقوى', stat: '60% يشعرون بارتباط أكبر' },
      { item: 'المساواة بين الأدوار', stat: '85% يقدرون المعاملة المتساوية' }
    ]
  },
  {
    category: 'الفوائد العملية',
    impacts: [
      { item: 'توفير تكاليف الملابس', stat: '+3000 ريال سنوياً' },
      { item: 'ضغط صباحي أقل', stat: '73% يبلغون عن صباح أسهل' },
      { item: 'مظهر احترافي', stat: '100% مظهر متسق' },
      { item: 'تحديد واضح للدور', stat: 'تحسين خدمة العملاء' }
    ]
  },
  {
    category: 'الفوائد الثقافية',
    impacts: [
      { item: 'خيارات لباس محتشم', stat: 'تصاميم متوافقة مع الحجاب' },
      { item: 'ملاءمة ثقافية', stat: 'معايير الأعمال السعودية' },
      { item: 'دمج الفخر الوطني', stat: 'خيارات للمناسبات الخاصة' },
      { item: 'مقاسات شاملة', stat: 'نطاق كامل متوفر' }
    ]
  }
]

const styleGuide = [
  {
    category: 'الإدارة التنفيذية والعليا',
    description: 'ملابس أعمال فاخرة تعكس القيادة والسلطة',
    elements: [
      'بدل مفصلة بألوان داكنة (كحلي، فحمي، أسود)',
      'قمصان رسمية عالية الجودة (أبيض، أزرق فاتح)',
      'ربطات عنق حريرية بألوان الشركة الدقيقة',
      'إكسسوارات جلدية عالية الجودة',
      'خيارات محتشمة للمديرات التنفيذيات'
    ],
    image: '/images/corporate/corporate_uniform_formal.jpg'
  },
  {
    category: 'الموظفون الذين يتعاملون مع العملاء',
    description: 'ملابس مهنية لكن ودودة للتفاعلات مع العملاء',
    elements: [
      'بليزرات أو سترات بالعلامة التجارية',
      'قمصان أو بلوزات بألوان الشركة',
      'بناطيل أو تنانير عالية الجودة',
      'شارات الأسماء ودبابيس الشركة',
      'أحذية مريحة لكن مهنية'
    ],
    image: '/images/corporate/corporate_uniform_professional.jpg'
  },
  {
    category: 'الإدارية والدعم',
    description: 'كاجوال أعمال أنيق يعزز الإنتاجية والراحة',
    elements: [
      'قمصان بولو بشعار الشركة',
      'بناطيل كاكي أو رسمية داكنة',
      'كارديجان أو سترة اختيارية',
      'أحذية مريحة',
      'وضع جيوب عملي'
    ],
    image: '/images/corporate/corporate_uniform_service.jpg'
  },
  {
    category: 'الفني والعمليات',
    description: 'ملابس عمل وظيفية تحافظ على معايير العلامة التجارية',
    elements: [
      'قمصان عمل متينة بالعلامة التجارية',
      'بناطيل عمل أو كارجو وظيفية',
      'أحذية سلامة حيث مطلوب',
      'خيارات عالية الرؤية إذا لزم الأمر',
      'طبقات مناسبة للطقس'
    ],
    image: '/images/corporate/corporate_uniform_work.jpg'
  }
]

const nationalDayFeatures = [
  {
    element: 'دمج اللون الأخضر',
    description: 'الأخضر السعودي مدمج باحترام في عناصر الزي',
    options: ['ربطات عنق/أوشحة خضراء', 'مناديل جيب خضراء', 'دبابيس خضراء', 'شارات أسماء بحواف خضراء']
  },
  {
    element: 'الرموز الوطنية',
    description: 'عرض لائق للفخر الوطني السعودي',
    options: ['دبابيس العلم السعودي', 'شارات رؤية 2030', 'إكسسوارات الشعار الوطني', 'عناصر "أحب السعودية"']
  },
  {
    element: 'العناصر التقليدية',
    description: 'خيارات لدمج اللباس السعودي التقليدي',
    options: ['خيار الثوب للموظفين الذكور', 'خيارات العباية للموظفات', 'أنماط تقليدية في الإكسسوارات', 'جاكيتات مستوحاة من البشت']
  },
  {
    element: 'مجموعات خاصة',
    description: 'عناصر زي محدودة الإصدار لليوم الوطني',
    options: ['قمصان بولو تذكارية', 'أوشحة إصدار خاص', 'شارات اليوم الوطني', 'مجموعات احتفال الفريق']
  }
]

const implementationPhases = [
  {
    phase: 'الاكتشاف والتخطيط',
    duration: '2-4 أسابيع',
    activities: [
      'مقابلات أصحاب المصلحة وجمع المتطلبات',
      'تقييم الزي الحالي (إن وجد)',
      'جمع ملاحظات الموظفين',
      'تحديد الميزانية والجدول الزمني',
      'تطوير معايير اختيار الموردين'
    ]
  },
  {
    phase: 'تطوير التصميم',
    duration: '4-6 أسابيع',
    activities: [
      'التوافق مع العلامة التجارية واستكشاف الأسلوب',
      'اختيار واختبار الأقمشة',
      'تطوير نطاق المقاسات',
      'إنشاء النماذج وجمع الملاحظات',
      'الموافقة النهائية على التصميم'
    ]
  },
  {
    phase: 'الإنتاج والجودة',
    duration: '6-8 أسابيع',
    activities: [
      'إنتاج العينات والموافقة',
      'الإنتاج بالجملة مع فحوصات الجودة',
      'فرز المقاسات والتغليف',
      'إعداد إدارة المخزون',
      'تخطيط التوزيع'
    ]
  },
  {
    phase: 'التوزيع والتدريب',
    duration: '2-4 أسابيع',
    activities: [
      'جلسات قياس الموظفين',
      'تجربة الزي والتعديلات',
      'تدريب العناية والصيانة',
      'التواصل بشأن السياسة',
      'إنشاء آلية الملاحظات'
    ]
  },
  {
    phase: 'الإدارة المستمرة',
    duration: 'مستمر',
    activities: [
      'إعداد الموظفين الجدد',
      'دورات الاستبدال والتجديد',
      'مراقبة الجودة',
      'دمج ملاحظات الموظفين',
      'مراجعة البرنامج السنوية'
    ]
  }
]

const roiFactors = [
  {
    factor: 'القيمة التسويقية',
    calculation: 'الموظفون بالزي يخلقون آلاف انطباعات العلامة يومياً',
    annualValue: '+50,000 ريال قيمة إعلانية معادلة',
    notes: 'بناءً على حسابات تعرض العملاء'
  },
  {
    factor: 'الاحتفاظ بالموظفين',
    calculation: 'تقليل الدوران من هوية شركة أقوى',
    annualValue: '+30,000 ريال توفير لكل موظف محتفظ به',
    notes: 'توفير تكاليف التوظيف والتدريب'
  },
  {
    factor: 'كفاءة الوقت',
    calculation: '15 دقيقة توفير لكل موظف يومياً',
    annualValue: '+15,000 ريال قيمة إنتاجية لكل موظف',
    notes: 'بناءً على تقليل إرهاق القرار'
  },
  {
    factor: 'ثقة العملاء',
    calculation: 'معدلات تحويل أعلى من المظهر الاحترافي',
    annualValue: '5-15% تحسن محتمل في المبيعات',
    notes: 'خاصة في الأدوار المواجهة للعملاء'
  }
]

export default function CorporateUniformsBrandCulturePageAr() {
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
            <li><span className="text-gray-900 font-medium">أزياء الشركات وثقافة العلامة التجارية</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/corporate/corporate_uniform_formal.jpg"
            alt="أزياء الشركات"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">
                الشركات
              </span>
              <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                🇸🇦 خاص باليوم الوطني
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء الشركات وثقافة العلامة التجارية: بناء الهوية في بيئات العمل السعودية
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              اكتشف كيف تعزز برامج الزي الاستراتيجية هوية الشركة 
              وترفع معنويات الموظفين وتخلق تجارب علامة تجارية قوية—مع أفكار خاصة 
              للاحتفال باليوم الوطني السعودي.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الشركات يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>14 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 سبتمبر 2025</span>
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

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">شريك أزياء شركات؟</h3>
                <p className="text-sm text-blue-100 mb-4">
                  يونيوم تخدم الشركات السعودية الرائدة ببرامج زي مخصصة.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  احصل على عرض سعر للشركات
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قوة أزياء الشركات</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في مشهد الأعمال الديناميكي في المملكة العربية السعودية، تطورت أزياء الشركات من 
                قواعد لباس بسيطة إلى أصول علامة تجارية استراتيجية. مع تحول رؤية 2030 لاقتصاد المملكة، 
                تدرك الشركات أن برامج الزي المصممة جيداً تخلق انطباعات دائمة 
                وتعزز ثقافة مكان العمل وتحقق نتائج أعمال قابلة للقياس.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/corporate/corporate_uniform_formal.jpg"
                  alt="أزياء شركات احترافية"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <BuildingOffice2Icon className="h-6 w-6" />
                  إحصائيات قطاع الشركات السعودي
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">+1 مليون</div>
                    <div className="text-sm text-gray-600">شركة في المملكة</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">13 مليون</div>
                    <div className="text-sm text-gray-600">عامل قطاع خاص</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">72%</div>
                    <div className="text-sm text-gray-600">مع برامج زي</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">2 مليار ريال</div>
                    <div className="text-sm text-gray-600">سوق أزياء الشركات</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Benefits */}
            <section id="brand-benefits" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">فوائد هوية العلامة التجارية</h2>
              
              <div className="space-y-4">
                {brandBenefits.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.benefit}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-3">
                        <span className="text-sm text-green-700"><strong>الأثر:</strong> {item.impact}</span>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <span className="text-sm text-blue-700"><strong>الأمثلة:</strong> {item.examples}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Employee Impact */}
            <section id="employee-impact" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">التأثير على الموظفين</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {employeeImpacts.map((category, index) => (
                  <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <h3 className="font-bold text-indigo-900 mb-4">{category.category}</h3>
                    <div className="space-y-3">
                      {category.impacts.map((impact, i) => (
                        <div key={i} className="bg-white rounded-lg p-3">
                          <div className="font-medium text-gray-800">{impact.item}</div>
                          <div className="text-sm text-indigo-600">{impact.stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* National Day Special */}
            <section id="national-day" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FlagIcon className="h-8 w-8 text-green-600" />
                خاص باليوم الوطني السعودي 🇸🇦
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  23 سبتمبر هو وقت للفخر والاحتفال الوطني. يمكن لأزياء الشركات أن 
                  تكرم هذا اليوم الخاص مع الحفاظ على الاحترافية. إليك كيفية دمج 
                  روح اليوم الوطني السعودي في برنامج الزي الخاص بك.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nationalDayFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="font-bold text-green-900 mb-2">{feature.element}</h3>
                      <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.options.map((option, i) => (
                          <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">استراتيجية التنفيذ</h2>
              
              <div className="space-y-6">
                {implementationPhases.map((phase, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ROI */}
            <section id="roi" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">العائد على الاستثمار</h2>
              
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">العامل</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">الحساب</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">القيمة السنوية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {roiFactors.map((factor, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{factor.factor}</td>
                        <td className="px-6 py-4 text-gray-600">{factor.calculation}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">{factor.annualValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">حوّل صورة شركتك</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تتشارك مع الشركات السعودية الرائدة لإنشاء برامج أزياء 
                  تعزز هوية العلامة التجارية وترفع رضا الموظفين.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة للشركات
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/corporate"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول الشركات
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
