import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HeartIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'تطور السكراب الطبي: من الوظيفية إلى الأناقة المهنية | يونيوم السعودية',
  description: 'دليل شامل لتطور السكراب الطبي في المملكة العربية السعودية. استكشف أحدث الابتكارات في أزياء الرعاية الصحية والأقمشة المضادة للميكروبات والملابس الطبية المحتشمة ومعايير مكافحة العدوى للمستشفيات والعيادات في الرياض وجدة وعبر المملكة.',
  keywords: 'السكراب الطبي السعودية, أزياء الرعاية الصحية, زي المستشفيات الرياض, سكراب التمريض السعودي, زي الأطباء, ملابس طبية مضادة للميكروبات, زي صحي محتشم, زي طبي حجاب, أزياء مكافحة العدوى, أزياء JCI',
  openGraph: {
    title: 'تطور السكراب الطبي: من الوظيفية إلى الأناقة المهنية',
    description: 'كيف تحول الأزياء الطبية رعاية المرضى واحترافية الموظفين في قطاع الرعاية الصحية السعودي',
    images: ['/images/healthcare/healthcare_medical_uniform.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: '/ar/blog/medical-scrubs-evolution-saudi/',
    languages: {
      'en': '/blog/medical-scrubs-evolution-saudi/',
      'ar': '/ar/blog/medical-scrubs-evolution-saudi/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'ثورة الزي الصحي' },
  { id: 'modern-innovations', title: 'ابتكارات الأقمشة الحديثة' },
  { id: 'infection-control', title: 'معايير مكافحة العدوى' },
  { id: 'modest-medical', title: 'الملابس الطبية المحتشمة' },
  { id: 'department-guide', title: 'دليل الأقسام' },
  { id: 'color-psychology', title: 'سيكولوجية الألوان' },
  { id: 'future-trends', title: 'مستقبل الأزياء الطبية' }
]

const fabricInnovations = [
  {
    technology: 'أيون الفضة المضاد للميكروبات',
    description: 'أيونات فضة مدمجة تدمر البكتيريا وتمنع الرائحة',
    benefits: ['يقتل 99.9% من البكتيريا', 'يدوم أكثر من 75 غسلة', 'يقلل خطر العدوى'],
    applications: 'مناطق الاتصال العالي: الطوارئ، العناية المركزة، الجراحة'
  },
  {
    technology: 'تقنية حاجز السوائل',
    description: 'حواجز مجهرية تصد السوائل مع الحفاظ على التنفس',
    benefits: ['يحجب الدم وسوائل الجسم', 'يبقى مريحاً', 'سهل التنظيف'],
    applications: 'الجراحة، الولادة، الإصابات'
  },
  {
    technology: 'أداء امتصاص الرطوبة',
    description: 'ألياف متقدمة تسحب الرطوبة بعيداً عن الجلد',
    benefits: ['يبقي الموظفين جافين', 'يقلل الإرهاق', 'ينظم درجة الحرارة'],
    applications: 'جميع الأقسام، خاصة الأدوار عالية النشاط'
  },
  {
    technology: 'قماش مرن 4 اتجاهات',
    description: 'مواد مرنة تتحرك مع الجسم',
    benefits: ['حرية الحركة', 'يحتفظ بالشكل', 'يقلل الإجهاد'],
    applications: 'التمريض، العلاج الطبيعي، الطوارئ'
  },
  {
    technology: 'تشطيب مقاوم للتجاعيد',
    description: 'معالجات تحافظ على مظهر أنيق طوال المناوبات',
    benefits: ['مظهر احترافي', 'كوي أقل', 'متين'],
    applications: 'الإدارة، الأدوار المواجهة للمرضى'
  }
]

const departmentGuide = [
  {
    department: 'الطوارئ والإصابات',
    requirements: ['مواد مقاومة للسوائل', 'ألوان عالية الرؤية', 'بناء معزز', 'خصائص تجفيف سريع'],
    recommendedColors: 'أحمر أو عنابي للتعرف السريع',
    specialFeatures: 'جيوب متعددة، حلقات شارة الهوية، ركب معززة',
    image: '/images/healthcare/healthcare_medical_uniform.jpg'
  },
  {
    department: 'الجراحة وغرفة العمليات',
    requirements: ['متوافق مع التعقيم', 'قماش منخفض الوبر', 'مريح للإجراءات الطويلة', 'مناسب لدرجة الحرارة'],
    recommendedColors: 'أخضر أو أزرق لتقليل إجهاد العين',
    specialFeatures: 'أصفاد محكمة، خيارات يمكن التخلص منها، مضاد للميكروبات',
    image: '/images/products/medical/premium-surgical-gowns.jpg'
  },
  {
    department: 'التمريض ورعاية المرضى',
    requirements: ['مريح لمناوبات 12 ساعة', 'سهولة الحركة', 'مظهر احترافي', 'مقاوم للبقع'],
    recommendedColors: 'كحلي، أزرق سماوي، أو حسب القسم',
    specialFeatures: 'جيوب عملية، فتحات أقلام، حوامل شارات',
    image: '/images/healthcare/healthcare_nurce_uniform.jpg'
  },
  {
    department: 'المختبر والتشخيص',
    requirements: ['مقاوم للمواد الكيميائية', 'سهل التطهير', 'تغطية كاملة', 'تصميم محتشم'],
    recommendedColors: 'أبيض أو ألوان فاتحة لإظهار التلوث',
    specialFeatures: 'إغلاقات كبس، أصفاد الأكمام، خيارات معطف المختبر',
    image: '/images/products/medical/lab-coat.jpg'
  },
  {
    department: 'الإدارة والاستقبال',
    requirements: ['مظهر احترافي', 'مريح لعمل المكتب', 'تمثيل العلامة التجارية', 'خيارات محتشمة'],
    recommendedColors: 'ألوان مؤسسية متوافقة مع علامة المستشفى',
    specialFeatures: 'قصات مفصلة، قصات محتشمة، تفاصيل أنيقة',
    image: '/images/corporate/corporate_uniform_formal.jpg'
  }
]

const modestMedicalOptions = [
  {
    garment: 'الحجاب الطبي',
    features: ['قماش مضاد للميكروبات', 'ثبات آمن للإجراءات', 'ألوان متطابقة مع السكراب', 'مادة سريعة الجفاف'],
    considerations: 'يجب ألا يتداخل مع السماعة الطبية أو معدات الحماية'
  },
  {
    garment: 'ملابس داخلية بأكمام طويلة',
    features: ['امتصاص الرطوبة', 'محكمة لكن محتشمة', 'تكمل أعلى السكراب', 'أطوال متعددة'],
    considerations: 'الأصفاد يجب أن تسمح بنظافة اليدين الصحيحة'
  },
  {
    garment: 'أعلى بطول ممتد',
    features: ['تغطية بطول الورك', 'قصة احترافية', 'جيوب عملية', 'تنوع في خطوط الرقبة'],
    considerations: 'يجب ألا يقيد الحركة أو يعلق في المعدات'
  },
  {
    garment: 'سراويل سكراب واسعة',
    features: ['قصة محتشمة', 'خصر مطاطي مريح', 'قماش متين', 'طول مناسب'],
    considerations: 'يجب تقصيرها لمنع خطر التعثر'
  }
]

const colorPsychology = [
  {
    color: 'أزرق (سماوي/كحلي)',
    psychological: 'ثقة، هدوء، احترافية',
    practical: 'يخفي البقع، يقلل القلق',
    commonUse: 'التمريض، الأجنحة العامة'
  },
  {
    color: 'أخضر (مريمية/جراحي)',
    psychological: 'شفاء، توازن، طبيعة',
    practical: 'يقلل إجهاد العين في الجراحة',
    commonUse: 'غرف العمليات، التعافي'
  },
  {
    color: 'أبيض',
    psychological: 'نظافة، نقاء، سلطة',
    practical: 'يُظهر التلوث بوضوح',
    commonUse: 'الأطباء، فنيو المختبر'
  },
  {
    color: 'عنابي/كستنائي',
    psychological: 'طوارئ، أهمية، قوة',
    practical: 'يخفي بقع الدم',
    commonUse: 'الطوارئ، الإصابات'
  },
  {
    color: 'بنفسجي',
    psychological: 'رحمة، كرامة، تخصص',
    practical: 'تعريف مميز',
    commonUse: 'الأورام، الرعاية التلطيفية'
  }
]

const infectionControlStandards = [
  {
    standard: 'اختيار القماش',
    requirements: [
      'نسيج محكم لمنع اختراق المسببات المرضية',
      'سطح أملس لا يأوي البكتيريا',
      'يتحمل الغسيل بدرجة حرارة عالية (60+ درجة مئوية)',
      'متوافق مع المنظفات الطبية'
    ]
  },
  {
    standard: 'بروتوكول الغسيل',
    requirements: [
      'تغيير الزي يومياً موصى به',
      'غسيل المستشفى مفضل على الغسيل المنزلي',
      'فصل العناصر الملوثة',
      'إجراءات تعبئة ونقل صحيحة'
    ]
  },
  {
    standard: 'المقاس والتغطية',
    requirements: [
      'تغطية مناسبة بدون قماش زائد',
      'أكمام تسمح بنظافة اليدين الصحيحة',
      'لا إكسسوارات متدلية أو خيوط فضفاضة',
      'إغلاقات آمنة تبقى مثبتة'
    ]
  },
  {
    standard: 'جدول الاستبدال',
    requirements: [
      'فحص منتظم للتآكل والتلف',
      'استبدال فوري للعناصر الممزقة',
      'إنهاء الخدمة بعد التآكل الظاهر',
      'تجديد الزي سنوياً موصى به'
    ]
  }
]

const futureTrends = [
  {
    trend: 'الأقمشة الذكية',
    description: 'منسوجات مدمجة بأجهزة استشعار لمراقبة الصحة واكتشاف التلوث',
    timeline: '2025-2027',
    impact: 'تنبيهات سلامة فورية، جمع بيانات المرضى'
  },
  {
    trend: 'المواد المستدامة',
    description: 'أقمشة صديقة للبيئة من مواد معاد تدويرها مع إدارة دورة حياة كاملة',
    timeline: '2024-2026',
    impact: 'تقليل البصمة البيئية، اقتصاد دائري'
  },
  {
    trend: 'تقنية المقاس الشخصي',
    description: 'مسح الجسم ثلاثي الأبعاد لأزياء مناسبة تماماً',
    timeline: '2025-2028',
    impact: 'راحة أفضل، تقليل هدر الزي'
  },
  {
    trend: 'أقمشة التعقيم الذاتي',
    description: 'مواد تدمر المسببات المرضية باستمرار بدون غسيل',
    timeline: '2026-2030',
    impact: 'حماية مستمرة، تقليل الغسيل'
  }
]

export default function MedicalScrubsEvolutionPageAr() {
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
            <li><span className="text-gray-900 font-medium">تطور السكراب الطبي</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/healthcare/healthcare_medical_uniform.jpg"
            alt="تطور السكراب الطبي"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">
                الرعاية الصحية
              </span>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium border border-cyan-400/30">
                الأزياء الطبية
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              تطور السكراب الطبي: من الوظيفية إلى الأناقة المهنية
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              اكتشف كيف تحولت الأزياء الطبية من ملابس واقية بسيطة إلى 
              ملابس مهنية متطورة تعزز رعاية المرضى وثقة الموظفين 
              في منشآت الرعاية الصحية عالمية المستوى في المملكة العربية السعودية.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>فريق الرعاية الصحية يونيوم</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>14 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>1 يونيو 2025</span>
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
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">أزياء رعاية صحية؟</h3>
                <p className="text-sm text-blue-100 mb-4">
                  يونيوم تخدم أكثر من 50 مستشفى في المملكة بأزياء معتمدة من JCI.
                </p>
                <Link
                  href="/ar/contact"
                  className="block text-center bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  طلب عرض سعر صحي
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ثورة الزي الصحي</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                في قطاع الرعاية الصحية المتقدم بسرعة في المملكة العربية السعودية، تطورت الأزياء الطبية 
                من ملابس واقية بسيطة إلى ملابس مهنية متطورة. سكراب اليوم يجمع بين 
                تقنية الأقمشة المتطورة وميزات مكافحة العدوى والجماليات المهنية - 
                كل ذلك مع احترام القيم الثقافية وتعزيز ثقة المرضى.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/healthcare/healthcare_medical_uniform.jpg"
                  alt="متخصصون طبيون حديثون بالسكراب"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <HeartIcon className="h-6 w-6" />
                  الرعاية الصحية السعودية بالأرقام
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">+500</div>
                    <div className="text-sm text-gray-600">مستشفى في المملكة</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">+200 ألف</div>
                    <div className="text-sm text-gray-600">عامل رعاية صحية</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">+45</div>
                    <div className="text-sm text-gray-600">منشأة معتمدة JCI</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">180 مليار ريال</div>
                    <div className="text-sm text-gray-600">إنفاق الرعاية الصحية 2025</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Modern Innovations */}
            <section id="modern-innovations" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ابتكارات الأقمشة الحديثة</h2>
              
              <div className="space-y-6">
                {fabricInnovations.map((innovation, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900 text-lg">{innovation.technology}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {innovation.applications}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{innovation.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {innovation.benefits.map((benefit, i) => (
                        <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Infection Control */}
            <section id="infection-control" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">معايير مكافحة العدوى</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infectionControlStandards.map((standard, index) => (
                  <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                      <ShieldCheckIcon className="h-5 w-5" />
                      {standard.standard}
                    </h3>
                    <ul className="space-y-2">
                      {standard.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                          <CheckCircleIcon className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Modest Medical */}
            <section id="modest-medical" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الملابس الطبية المحتشمة</h2>
              
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/healthcare/healthcare_hijab_doctor.jpg"
                  alt="الملابس الطبية المحتشمة"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modestMedicalOptions.map((option, index) => (
                  <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-3">{option.garment}</h3>
                    <ul className="space-y-2 mb-4">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-purple-800">
                          <CheckCircleIcon className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-sm text-purple-700">
                        <strong>ملاحظة:</strong> {option.considerations}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Department Guide */}
            <section id="department-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل الأقسام</h2>
              
              <div className="space-y-6">
                {departmentGuide.map((dept, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-auto md:order-2">
                        <Image
                          src={dept.image}
                          alt={dept.department}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:order-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.department}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">المتطلبات:</h4>
                            <ul className="space-y-1">
                              {dept.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm mb-2"><strong>الألوان:</strong> {dept.recommendedColors}</p>
                            <p className="text-sm"><strong>الميزات:</strong> {dept.specialFeatures}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Color Psychology */}
            <section id="color-psychology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">سيكولوجية الألوان في الرعاية الصحية</h2>
              
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">اللون</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">التأثير النفسي</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">الفائدة العملية</th>
                      <th className="text-right px-6 py-4 font-bold text-gray-900">الاستخدام الشائع</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {colorPsychology.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.color}</td>
                        <td className="px-6 py-4 text-gray-600">{item.psychological}</td>
                        <td className="px-6 py-4 text-gray-600">{item.practical}</td>
                        <td className="px-6 py-4 text-gray-600">{item.commonUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Future Trends */}
            <section id="future-trends" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مستقبل الأزياء الطبية</h2>
              
              <div className="space-y-4">
                {futureTrends.map((trend, index) => (
                  <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-indigo-900">{trend.trend}</h3>
                      <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                        {trend.timeline}
                      </span>
                    </div>
                    <p className="text-indigo-800 mb-3">{trend.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-indigo-700 font-medium">الأثر: {trend.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">طوّر أزياء الرعاية الصحية لديك</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  يونيوم تشارك المستشفيات السعودية الرائدة لتوفير أزياء معتمدة من JCI 
                  ومعتمدة لمكافحة العدوى تعزز رعاية المرضى واحترافية الموظفين.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/ar/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                  >
                    طلب استشارة صحية
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/ar/industries/healthcare"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    عرض حلول الرعاية الصحية
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
