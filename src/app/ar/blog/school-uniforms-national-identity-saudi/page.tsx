import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  FlagIcon,
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'الزي المدرسي والهوية الوطنية: كيف تعزز المدارس السعودية الانتماء | يونيوم',
  description: 'اكتشف كيف يعزز الزي المدرسي في المملكة العربية السعودية الهوية الوطنية والقيم الثقافية وانتماء الطلاب. دليل شامل عن مبادئ تصميم الزي والعناصر الثقافية والفوائد التعليمية للمدارس السعودية بما يتوافق مع رؤية 2030.',
  keywords: 'الزي المدرسي السعودي, الهوية الوطنية في التعليم, قواعد اللباس المدرسي, زي الطلاب السعودي, الأزياء التعليمية الرياض, إرشادات الملابس المدرسية, رؤية 2030 التعليم, الزي المدرسي الثقافي, زي المدارس الخاصة, زي المدارس الدولية السعودية',
  openGraph: {
    title: 'الزي المدرسي والهوية الوطنية: كيف تعزز المدارس السعودية الانتماء',
    description: 'كيف تستخدم المدارس السعودية الزي الموحد لتعزيز الفخر الوطني ووحدة الطلاب',
    images: ['/images/education/premium-school-uniforms.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: '/ar/blog/school-uniforms-national-identity-saudi/',
    languages: {
      'en': '/blog/school-uniforms-national-identity-saudi/',
      'ar': '/ar/blog/school-uniforms-national-identity-saudi/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'قوة الزي الموحد في التعليم' },
  { id: 'national-identity', title: 'الزي والهوية الوطنية' },
  { id: 'psychological-benefits', title: 'الفوائد النفسية' },
  { id: 'design-principles', title: 'مبادئ التصميم للمدارس السعودية' },
  { id: 'cultural-elements', title: 'دمج العناصر الثقافية' },
  { id: 'vision-2030', title: 'التوافق مع رؤية 2030' },
  { id: 'implementation', title: 'إرشادات التنفيذ' },
  { id: 'case-studies', title: 'قصص نجاح' }
]

const psychologicalBenefits = [
  {
    benefit: 'الشعور بالانتماء',
    description: 'يخلق الزي الموحد وحدة بصرية تساعد الطلاب على الشعور بأنهم جزء من مجتمع أكبر',
    research: 'تُظهر الدراسات أن 78% من الطلاب يبلغون عن ارتباط أقوى بالمدرسة عند ارتداء الزي الموحد',
    icon: HeartIcon
  },
  {
    benefit: 'تقليل الضغط الاجتماعي',
    description: 'يزيل المنافسة على أساس الملابس والفوارق الاجتماعية والاقتصادية',
    research: 'تُبلغ المدارس عن انخفاض 45% في التنمر المتعلق بالملابس بعد تطبيق الزي الموحد',
    icon: ShieldCheckIcon
  },
  {
    benefit: 'تعزيز التركيز',
    description: 'يقلل إرهاق القرار والتوتر الصباحي، مما يسمح بالتركيز على الدراسة',
    research: 'يُظهر الطلاب في مدارس الزي الموحد تحسناً بنسبة 12% في المشاركة الأكاديمية',
    icon: AcademicCapIcon
  },
  {
    benefit: 'الفخر والانضباط',
    description: 'ارتداء الزي الموحد يغرس الفخر بالمؤسسة ويعزز الانضباط الذاتي',
    research: '67% من المعلمين يلاحظون تحسن سلوك الطلاب في بيئات الزي الموحد',
    icon: StarIcon
  }
]

const nationalIdentityElements = [
  {
    element: 'رمزية الألوان',
    traditional: 'الأخضر السعودي يمثل التراث الإسلامي والهوية الوطنية',
    modern: 'الأبيض يرمز للنقاء والعلم السعودي',
    application: 'ألوان أساسية في تصميم الزي مع تفاصيل مميزة'
  },
  {
    element: 'الأنماط التقليدية',
    traditional: 'أنماط هندسية من الفن الإسلامي والعمارة السعودية',
    modern: 'دمج دقيق في التطريز والأزرار أو الحواف',
    application: 'شعارات وشارات المدرسة تضم زخارف تقليدية'
  },
  {
    element: 'التصميم المحتشم',
    traditional: 'احترام قواعد اللباس الإسلامي والقيم الثقافية',
    modern: 'قصات معاصرة توازن بين الاحتشام والراحة',
    application: 'أطوال مناسبة وتغطية وخيارات فضفاضة'
  },
  {
    element: 'جودة المواد',
    traditional: 'التميز يعكس مكانة المملكة العربية السعودية العالمية',
    modern: 'أقمشة فاخرة مناسبة للمناخ',
    application: 'مواد متينة ومريحة تدوم طوال العام الدراسي'
  }
]

const designPrinciples = [
  {
    principle: 'التكيف مع المناخ',
    description: 'يجب أن تتكيف التصاميم مع مناخ المملكة الحار',
    guidelines: [
      'أقمشة تنفسية وماصة للرطوبة',
      'مواد خفيفة لمعظم أوقات السنة',
      'طبقات اختيارية للفصول المكيفة',
      'أقمشة واقية من الأشعة فوق البنفسجية للأنشطة الخارجية'
    ]
  },
  {
    principle: 'معايير الاحتشام',
    description: 'يجب أن يحترم الزي متطلبات اللباس الإسلامي',
    guidelines: [
      'أطوال أكمام مناسبة (خيارات كاملة أو ثلاثة أرباع)',
      'تنانير/فساتين بطول الركبة أو أطول للفتيات',
      'قصات فضفاضة لا تكشف شكل الجسم',
      'تصاميم ياقة متوافقة مع الحجاب للطالبات'
    ]
  },
  {
    principle: 'المتانة والعملية',
    description: 'يجب أن يتحمل الزي المدرسي حياة الطلاب النشطة',
    guidelines: [
      'خياطة معززة ونقاط ضغط قوية',
      'أقمشة مقاومة للبقع وسهلة العناية',
      'مواد قابلة للغسيل في الغسالة',
      'أصباغ ثابتة الألوان لا تبهت'
    ]
  },
  {
    principle: 'تصميم مناسب للعمر',
    description: 'يجب أن يناسب الزي مراحل النمو المختلفة',
    guidelines: [
      'تصاميم مريحة ومرنة لطلاب الابتدائية',
      'مظهر أكثر تنظيماً للمرحلة المتوسطة',
      'مظهر احترافي لطلاب الثانوية',
      'إغلاقات سهلة للأطفال الصغار (فيلكرو، مطاط)'
    ]
  }
]

const vision2030Alignment = [
  {
    pillar: 'جودة الحياة',
    uniformContribution: 'الأزياء المريحة والمصممة جيداً تدعم رفاهية الطلاب وثقتهم',
    outcome: 'تحسين التجربة التعليمية ورضا الطلاب'
  },
  {
    pillar: 'الهوية الوطنية',
    uniformContribution: 'الأزياء التي تدمج عناصر ثقافية سعودية تعزز فخر التراث',
    outcome: 'الطلاب يطورون شعوراً قوياً بالانتماء الوطني'
  },
  {
    pillar: 'التنمية الاقتصادية',
    uniformContribution: 'دعم التصنيع المحلي للنسيج والتوظيف',
    outcome: 'المساهمة في تنويع الصناعة السعودية'
  },
  {
    pillar: 'التميز التعليمي',
    uniformContribution: 'معايير المظهر المهني تدعم التركيز الأكاديمي',
    outcome: 'بيئة ونتائج تعليمية محسنة'
  }
]

const schoolTypeGuidelines = [
  {
    type: 'المدارس الحكومية',
    characteristics: [
      'تصاميم موحدة عبر المملكة',
      'مواصفات وزارة التعليم',
      'مواد فعالة من حيث التكلفة ومتينة',
      'أنظمة ألوان تقليدية'
    ],
    image: '/images/education/uniform_school-2.jpg'
  },
  {
    type: 'المدارس الخاصة',
    characteristics: [
      'تصاميم مميزة تعكس هوية المدرسة',
      'أقمشة وتشطيبات عالية الجودة',
      'ألوان وعلامات تجارية مخصصة',
      'خيارات متعددة للزي (رسمي، رياضي، مناسبات)'
    ],
    image: '/images/education/premium-school-uniforms.jpg'
  },
  {
    type: 'المدارس الدولية',
    characteristics: [
      'توازن عناصر التصميم العالمية والمحلية',
      'حساسية ثقافية مع معايير دولية',
      'خيارات متعددة مناسبة للمناخ',
      'دمج جنسية المدرسة والسياق السعودي'
    ],
    image: '/images/education/modern-education-uniforms.jpg'
  }
]

const successStories = [
  {
    school: 'مدرسة خاصة رائدة، الرياض',
    challenge: 'إنشاء أزياء توازن بين التراث السعودي والبيئة التعليمية الحديثة',
    solution: 'طوّرنا خط أزياء يضم أنماط هندسية سعودية دقيقة في تصاميم عصرية',
    result: '92% رضا أولياء الأمور، تم تقديمها كبرنامج نموذجي من وزارة التعليم',
    image: '/images/education/uniform_educations_blog-1.jpg'
  },
  {
    school: 'مجموعة مدارس دولية، جدة',
    challenge: 'توحيد 5 فروع بخلفيات ثقافية مختلفة',
    solution: 'أنشأنا زياً أساسياً مع عناصر ثقافية وألوان منازل قابلة للتبديل',
    result: 'تحسن تماسك المجتمع المدرسي، انخفاض 30% في الشكاوى المتعلقة بالزي',
    image: '/images/education/uniform_educations_blog-2.jpg'
  }
]

export default function SchoolUniformsNationalIdentityPageAr() {
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
            <li><span className="text-gray-900 font-medium">الزي المدرسي والهوية الوطنية</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/premium-school-uniforms.jpg"
            alt="الزي المدرسي السعودي"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                التعليم
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">
                الهوية الوطنية
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              الزي المدرسي والهوية الوطنية: كيف تعزز المدارس السعودية الانتماء
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              استكشف الدور العميق للزي المدرسي في بناء الفخر الوطني 
              والتواصل الثقافي ووحدة الطلاب في التعليم السعودي.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق التعليم يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>12 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 مارس 2025</span>
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
                  <TagIcon className="h-5 w-5 text-green-600" />
                  فهرس المحتويات
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">تحتاج أزياء مدرسية؟</h3>
                <p className="text-sm text-green-100 mb-4">
                  يونيوم تخدم أكثر من 200 مدرسة في المملكة بأزياء عالية الجودة.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-green-50 transition-colors"
                >
                  احصل على عرض سعر
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قوة الزي الموحد في التعليم</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في المشهد التعليمي المتطور بالمملكة العربية السعودية، يخدم الزي المدرسي غرضاً 
                يتجاوز بكثير الامتثال لقواعد اللباس. إنه أداة قوية لبناء الهوية الوطنية 
                وتعزيز الانتماء وخلق بيئات تعليمية عادلة حيث يمكن للطلاب التركيز 
                على ما يهم أكثر—تعليمهم.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/education/premium-school-uniforms.jpg"
                  alt="طلاب سعوديون بالزي المدرسي"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <p className="text-gray-700 leading-relaxed">
                بينما تتقدم المملكة في تحقيق أهداف رؤية 2030 التعليمية، أصبح تصميم وتنفيذ 
                الزي المدرسي جزءاً لا يتجزأ من خلق تجارب تعليمية عالمية المستوى 
                تكرّم التراث السعودي مع إعداد الطلاب للمواطنة العالمية.
              </p>
            </section>

            {/* Psychological Benefits */}
            <section id="psychological-benefits" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الفوائد النفسية</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                تُظهر الأبحاث باستمرار التأثير النفسي الإيجابي لسياسات الزي المدرسي 
                المُنفذة بشكل جيد:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {psychologicalBenefits.map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <item.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-bold text-green-900">{item.benefit}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm text-green-700">{item.research}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* National Identity Elements */}
            <section id="national-identity" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الزي والهوية الوطنية</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                يمكن للزي المدرسي السعودي أن يدمج بعناية عناصر تعزز الهوية الوطنية 
                والفخر الثقافي:
              </p>

              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">العنصر</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">المعنى التقليدي</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">التطبيق الحديث</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {nationalIdentityElements.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.element}</td>
                        <td className="px-6 py-4 text-gray-600">{item.traditional}</td>
                        <td className="px-6 py-4 text-gray-600">{item.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Design Principles */}
            <section id="design-principles" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مبادئ التصميم للمدارس السعودية</h2>
              
              <div className="space-y-6">
                {designPrinciples.map((principle, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.principle}</h3>
                    <p className="text-gray-600 mb-4">{principle.description}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">الإرشادات:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {principle.guidelines.map((guideline, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{guideline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Vision 2030 */}
            <section id="vision-2030" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">التوافق مع رؤية 2030</h2>
              
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/blog/vision-2030.jpg"
                  alt="رؤية 2030 والتعليم"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vision2030Alignment.map((item, index) => (
                  <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <h3 className="font-bold text-emerald-900 mb-2">{item.pillar}</h3>
                    <p className="text-emerald-800 text-sm mb-3">{item.uniformContribution}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-emerald-700 text-sm font-medium">
                        النتيجة: {item.outcome}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* School Type Guidelines */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">إرشادات التنفيذ حسب نوع المدرسة</h2>
              
              <div className="space-y-6">
                {schoolTypeGuidelines.map((school, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-auto md:order-2">
                        <Image
                          src={school.image}
                          alt={school.type}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{school.type}</h3>
                        <ul className="space-y-2">
                          {school.characteristics.map((char, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Stories */}
            <section id="case-studies" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصص نجاح</h2>
              
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-4">{story.school}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-500">التحدي:</span>
                        <p className="text-gray-700">{story.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">الحل:</span>
                        <p className="text-gray-700">{story.solution}</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-3">
                        <span className="text-sm font-semibold text-green-800">النتيجة:</span>
                        <p className="text-green-700">{story.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">صمم أزياء تلهم الفخر</h2>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تشارك المدارس السعودية لإنشاء برامج زي موحد توازن 
                  بين القيم الثقافية وراحة الطلاب والتميز التعليمي.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة مدرسية
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/education"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول التعليم
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
