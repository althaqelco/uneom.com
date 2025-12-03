import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowPathIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'اقتصاد الدوران في صناعة الزي الموحد: إعادة التدوير والاستدامة | يونيوم',
  description: 'دليل شامل لممارسات الاقتصاد الدائري في صناعة الزي الموحد. تعرف على إعادة تدوير المنسوجات، برامج استرجاع الزي، المواد المستدامة، وكيف تتبنى الشركات السعودية مبادئ الموضة الدائرية.',
  keywords: 'اقتصاد دوران الزي الموحد, إعادة تدوير المنسوجات السعودية, ملابس العمل المستدامة, برامج إعادة تدوير الزي, أزياء صديقة للبيئة, استدامة رؤية 2030, حلول الزي الأخضر',
  openGraph: {
    title: 'اقتصاد الدوران في صناعة الزي الموحد: إعادة التدوير والاستدامة',
    description: 'كيف تُحدث الشركات السعودية ثورة في إدارة الزي من خلال مبادئ الاقتصاد الدائري',
    images: ['/images/blog/sustainable-uniform.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-11-01T08:00:00Z',
    authors: ['فريق الاستدامة يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/circular-economy-uniforms/',
    languages: {
      'en': '/blog/circular-economy-uniforms/',
      'ar': '/ar/blog/circular-economy-uniforms/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'ثورة الدوران' },
  { id: 'principles', title: 'مبادئ الدوران الأساسية' },
  { id: 'lifecycle', title: 'إدارة دورة حياة الزي' },
  { id: 'materials', title: 'المواد المستدامة' },
  { id: 'programs', title: 'برامج الاسترجاع والتدوير' },
  { id: 'business-case', title: 'الجدوى الاقتصادية' }
]

const circularStats = [
  { stat: '92%', description: 'من نفايات المنسوجات يمكن تحويلها عن المطامر بالممارسات الدائرية', source: 'مؤسسة إيلين ماك آرثر' },
  { stat: '70%', description: 'تقليل في البصمة الكربونية ممكن مع مواد الزي المعاد تدويرها', source: 'تقرير Textile Exchange' },
  { stat: '2.4 مليار ريال', description: 'وفورات سنوية محتملة في صناعة النسيج السعودية', source: 'صندوق التنمية الصناعية السعودي' },
  { stat: '5x', description: 'عمر مفيد أطول للأزياء مع برامج الصيانة المناسبة', source: 'دراسة دورة حياة يونيوم' }
]

const circularPrinciples = [
  { principle: 'التصميم للعمر الطويل', description: 'إنشاء أزياء تدوم أطول من خلال مواد عالية الجودة وتصميم خالد', practices: ['نقاط إجهاد معززة', 'معايير خياطة عالية الجودة', 'اختيار أقمشة متينة', 'أنماط كلاسيكية خالدة'] },
  { principle: 'التصميم لقابلية إعادة التدوير', description: 'استخدام مواد وطرق بناء تمكن من إعادة التدوير في نهاية الحياة', practices: ['بناء من مادة واحدة', 'مكونات قابلة للفصل بسهولة', 'ألياف طبيعية أو قابلة للتدوير', 'حد أدنى من المواد المختلطة'] },
  { principle: 'الإصلاح والصيانة', description: 'إطالة عمر الزي من خلال العناية المهنية وخدمات الإصلاح', practices: ['برامج صيانة منتظمة', 'خدمات إصلاح مهنية', 'استبدال الأزرار والسحابات', 'تعديلات لتغييرات المقاس'] },
  { principle: 'إعادة الاستخدام وإعادة التوزيع', description: 'إيجاد حياة ثانية للأزياء التي لم يعد المستخدمون الأصليون بحاجة إليها', practices: ['نقل بين الأقسام', 'التبرع للجمعيات الخيرية', 'برامج إعادة التدوير الارتقائي', 'منصات إعادة البيع'] },
  { principle: 'إعادة التدوير والتجديد', description: 'تحويل الأزياء منتهية الصلاحية إلى مواد أو منتجات جديدة', practices: ['إعادة تدوير الألياف إلى ألياف', 'تحويل إلى عزل', 'خرق صناعية', 'إنشاء منتجات جديدة'] }
]

const sustainableMaterials = [
  { material: 'البوليستر المعاد تدويره (rPET)', source: 'زجاجات بلاستيك ما بعد الاستهلاك', benefits: ['يقلل نفايات البلاستيك', 'بصمة كربونية أقل', 'أداء معادل', 'متاح على نطاق واسع'], bestFor: 'الأزياء المؤسسية، الملابس الخارجية' },
  { material: 'القطن العضوي', source: 'زراعة عضوية معتمدة', benefits: ['لا مبيدات ضارة', 'تحسين صحة التربة', 'سلامة العمال', 'قابل للتحلل'], bestFor: 'الرعاية الصحية، الضيافة' },
  { material: 'TENCEL™ ليوسيل', source: 'خشب محصود بشكل مستدام', benefits: ['إنتاج بحلقة مغلقة', 'قابل للتحلل', 'ناعم وقابل للتنفس', 'إدارة الرطوبة'], bestFor: 'الملابس الرسمية، الضيافة' },
  { material: 'القطن المعاد تدويره', source: 'نفايات قطن ما قبل/بعد الاستهلاك', benefits: ['يحول نفايات المنسوجات', 'يوفر الماء', 'يقلل الطلب على الخام', 'ملمس قطن أصيل'], bestFor: 'الأزياء الكاجوال، ملابس العمل' }
]

const businessCase = [
  { benefit: 'تقليل التكاليف', metrics: ['15-25% انخفاض في التكلفة الإجمالية للملكية', 'تقليل تكاليف التخلص', 'إيرادات إعادة التدوير المحتملة', 'تكاليف مواد أقل مع المحتوى المعاد تدويره'] },
  { benefit: 'قيمة العلامة التجارية', metrics: ['تعزيز السمعة المؤسسية', 'تحسين درجة ESG', 'فخر الموظفين والاحتفاظ', 'توافق تفضيلات العملاء'] },
  { benefit: 'الامتثال', metrics: ['متقدم على اللوائح', 'جاهزية مسؤولية المنتج الممتدة', 'مزايا المناقصات الحكومية', 'توافق المعايير الدولية'] },
  { benefit: 'تخفيف المخاطر', metrics: ['مرونة سلسلة التوريد', 'حماية من تقلب الأسعار', 'أمن الموارد', 'تقليل المخاطر التنظيمية'] }
]

export default function CircularEconomyUniformsPageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm">
            <li><Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/ar/blog" className="text-gray-500 hover:text-gray-700">المدونة</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">اقتصاد الدوران في الزي الموحد</span></li>
          </ol>
        </div>
      </nav>

      <header className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog/sustainable-uniform.jpg" alt="الأزياء المستدامة" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">♻️ الاستدامة</span>
              <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-400/30">الاقتصاد الدائري</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">اقتصاد الدوران في صناعة الزي الموحد</h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">ثورة في إدارة الزي من خلال إعادة التدوير وإعادة الاستخدام والممارسات المستدامة. دليل شامل للمؤسسات السعودية التي تتبنى الدوران.</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-emerald-200">
              <div className="flex items-center gap-2"><UserIcon className="h-5 w-5" /><span>فريق الاستدامة يونيوم</span></div>
              <div className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /><span>15 دقيقة قراءة</span></div>
              <div className="flex items-center gap-2"><TagIcon className="h-5 w-5" /><span>1 نوفمبر 2025</span></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><TagIcon className="h-5 w-5 text-emerald-600" />فهرس المحتويات</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a key={index} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg px-3 py-2 transition-all">{item.title}</a>
                  ))}
                </nav>
              </div>
              <div className="mt-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">انتقل للدوران اليوم</h3>
                <p className="text-sm text-emerald-100 mb-4">يونيوم تساعد المؤسسات على تنفيذ برامج الزي الدائرية.</p>
                <Link href="/ar/contact" className="block text-center bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-colors">ابدأ الآن</Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ثورة الدوران</h2>
              <p className="text-gray-700 leading-relaxed mb-6">نموذج "أخذ-اصنع-تخلص" التقليدي لإدارة الزي لم يعد مستداماً. مع الوعي البيئي المتزايد والتزامات رؤية السعودية 2030 بالاستدامة، تتبنى المؤسسات مبادئ الاقتصاد الدائري لتحويل كيفية تصميم الأزياء واستخدامها وإدارتها في نهاية حياتها.</p>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image src="/images/blog/sustainable-uniform.jpg" alt="أزياء الاقتصاد الدائري" width={800} height={450} className="w-full object-cover" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {circularStats.map((item, index) => (
                  <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">{item.stat}</div>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">المصدر: {item.source}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="principles" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">مبادئ الدوران الأساسية</h2>
              <div className="space-y-6">
                {circularPrinciples.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-emerald-100 p-2 rounded-lg"><ArrowPathIcon className="h-6 w-6 text-emerald-600" /></div>
                      <h3 className="font-bold text-gray-900">{item.principle}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.practices.map((practice, i) => (<span key={i} className="bg-emerald-50 px-3 py-1 rounded-full text-xs text-emerald-700 border border-emerald-200">{practice}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="materials" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">المواد المستدامة</h2>
              <div className="space-y-6">
                {sustainableMaterials.map((mat, index) => (
                  <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-emerald-900">{mat.material}</h3>
                      <span className="bg-white px-3 py-1 rounded-full text-xs text-emerald-700 border border-emerald-300">{mat.source}</span>
                    </div>
                    <p className="text-emerald-800 mb-4"><strong>الأفضل لـ:</strong> {mat.bestFor}</p>
                    <div className="flex flex-wrap gap-2">
                      {mat.benefits.map((benefit, i) => (<span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-emerald-700">{benefit}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="business-case" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الجدوى الاقتصادية للدوران</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessCase.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <CurrencyDollarIcon className="h-6 w-6 text-emerald-600" />
                      <h3 className="font-bold text-gray-900">{item.benefit}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.metrics.map((metric, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircleIcon className="h-4 w-4 text-emerald-500 flex-shrink-0" /><span>{metric}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">♻️ ابدأ رحلتك الدائرية</h2>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">يونيوم تساعد المؤسسات السعودية على تنفيذ برامج الزي الدائرية التي تقلل الأثر البيئي مع تحسين النتائج النهائية.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/ar/contact" className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2">طلب استشارة<ArrowLeftIcon className="h-5 w-5" /></Link>
                  <Link href="/ar/services/sustainable-uniforms" className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">تعرف على الاستدامة</Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}


