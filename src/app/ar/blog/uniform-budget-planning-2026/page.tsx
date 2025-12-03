import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CurrencyDollarIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  CalculatorIcon,
  ChartBarIcon,
  CalendarIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'التخطيط لميزانية الزي الموحد 2026: دليل شامل للمؤسسات السعودية | يونيوم',
  description: 'دليل استراتيجي للتخطيط لميزانية الزي الموحد لعام 2026. تعرف على عوامل التكلفة، حسابات العائد على الاستثمار، استراتيجيات الشراء، وكيفية تحسين إنفاق الزي للمؤسسات السعودية.',
  keywords: 'ميزانية الزي الموحد 2026, تخطيط ميزانية ملابس العمل, تكاليف الزي المؤسسي السعودية, استراتيجية شراء الزي, عائد استثمار الزي, تحسين تكلفة الزي',
  openGraph: {
    title: 'التخطيط لميزانية الزي الموحد 2026: دليل شامل للمؤسسات السعودية',
    description: 'نهج استراتيجي لتخطيط وتحسين ميزانيات الزي الموحد للعام القادم',
    images: ['/images/corporate/corporate_brand.jpg'],
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2025-12-15T08:00:00Z',
    authors: ['فريق المالية يونيوم'],
  },
  alternates: {
    canonical: '/ar/blog/uniform-budget-planning-2026/',
    languages: {
      'en': '/blog/uniform-budget-planning-2026/',
      'ar': '/ar/blog/uniform-budget-planning-2026/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'أهمية التخطيط الاستراتيجي' },
  { id: 'cost-factors', title: 'عوامل التكلفة الرئيسية' },
  { id: 'budget-calculator', title: 'نطاقات الميزانية' },
  { id: 'roi-analysis', title: 'تحليل العائد على الاستثمار' },
  { id: 'procurement', title: 'استراتيجيات الشراء' },
  { id: 'timeline', title: 'الجدول الزمني 2026' },
  { id: 'common-mistakes', title: 'أخطاء يجب تجنبها' }
]

const costFactors = [
  { factor: 'متطلبات الكمية', weight: 'عالي', description: 'إجمالي عدد الأزياء المطلوبة بناءً على عدد الموظفين ودورات الاستبدال', considerations: ['عدد الموظفين الحالي', 'التوظيف المتوقع 2026', 'أزياء لكل موظف (3-5 عادة)', 'تنويعات الأقسام'] },
  { factor: 'اختيار مستوى الجودة', weight: 'عالي', description: 'الاختيار بين درجات الزي الاقتصادي أو القياسي أو الفاخر', considerations: ['توقعات الصناعة', 'متطلبات المتانة', 'موقع العلامة التجارية', 'تفضيلات الموظفين'] },
  { factor: 'مستوى التخصيص', weight: 'متوسط', description: 'مدى عناصر العلامة التجارية والتطريز والتصميم الخاص', considerations: ['تعقيد الشعار', 'تطريز الأسماء', 'ترميز ألوان الأقسام', 'تصاميم خاصة'] },
  { factor: 'مواصفات المواد', weight: 'متوسط', description: 'تقنية الأقمشة ومتطلبات الاستدامة والميزات الخاصة', considerations: ['التكيف المناخي', 'متطلبات السلامة', 'أهداف الاستدامة', 'ميزات الراحة'] }
]

const budgetRanges = [
  { sector: 'المكاتب المؤسسية', perEmployee: '800-2,000 ريال', items: '3-4 قطع', replacement: 'سنوي', notes: 'أعلى للأدوار أمام العملاء' },
  { sector: 'الرعاية الصحية', perEmployee: '1,200-3,000 ريال', items: '5-7 قطع', replacement: '6-9 أشهر', notes: 'يشمل معدات الحماية المتخصصة' },
  { sector: 'الضيافة', perEmployee: '1,500-4,000 ريال', items: '4-6 قطع', replacement: '8-12 شهر', notes: 'يختلف حسب تصنيف النجوم' },
  { sector: 'الصناعي', perEmployee: '2,000-5,000 ريال', items: '4-5 قطع', replacement: '3-6 أشهر', notes: 'شهادات السلامة مطلوبة' },
  { sector: 'التجزئة', perEmployee: '600-1,500 ريال', items: '3-4 قطع', replacement: 'سنوي', notes: 'تنويعات موسمية تنطبق' },
  { sector: 'التعليم', perEmployee: '500-1,200 ريال', items: '3-4 قطع', replacement: 'سنوي', notes: 'المعلمين والموظفين مجتمعين' }
]

const roiFactors = [
  { category: 'قيمة العلامة التجارية', benefits: ['المظهر المهني يزيد ثقة العملاء', 'رسائل علامة تجارية متسقة', 'تمييز تنافسي', 'تعزيز الصورة المؤسسية'], measurable: 'استطلاعات إدراك العملاء، تقييمات قيمة العلامة' },
  { category: 'تأثير الموظفين', benefits: ['تقليل تكاليف الملابس الشخصية للموظفين', 'تحسين وحدة الفريق والروح المعنوية', 'تبسيط قرارات قواعد اللباس', 'تعزيز الرضا الوظيفي'], measurable: 'درجات رضا الموظفين، معدلات الاحتفاظ' },
  { category: 'الكفاءة التشغيلية', benefits: ['تبسيط عملية الشراء', 'تقليل الوقت على إدارة المظهر', 'إدارة مخزون موحدة', 'تبسيط التأهيل'], measurable: 'توفير وقت الموارد البشرية، كفاءة الشراء' },
  { category: 'السلامة والامتثال', benefits: ['تلبية متطلبات السلامة الصناعية', 'تقليل مخاطر إصابات العمل', 'ضمان الامتثال التنظيمي', 'تحسين أقساط التأمين'], measurable: 'معدلات الحوادث، نتائج تدقيق الامتثال' }
]

const planningTimeline = [
  { month: 'أكتوبر 2025', phase: 'التقييم', activities: ['مراجعة برنامج الزي الحالي', 'جمع ملاحظات الأقسام', 'تحليل إنفاق 2025', 'تحديد مجالات التحسين'] },
  { month: 'نوفمبر 2025', phase: 'التخطيط', activities: ['تحديد متطلبات 2026', 'تحديد معايير الجودة', 'وضع معايير الميزانية', 'تحديد الموردين المحتملين'] },
  { month: 'ديسمبر 2025', phase: 'الشراء', activities: ['إصدار طلبات العروض', 'تقييم العروض', 'التفاوض على الشروط', 'تحديد تخصيص الميزانية النهائي'] },
  { month: 'يناير 2026', phase: 'التعاقد', activities: ['توقيع اتفاقيات الموردين', 'تحديد المواصفات النهائية', 'وضع جدول التسليم', 'إعداد أنظمة المخزون'] },
  { month: 'فبراير 2026', phase: 'الإنتاج', activities: ['الموافقة على العينات', 'بدء الإنتاج بالجملة', 'فحوصات ضمان الجودة', 'إعداد خطة التوزيع'] },
  { month: 'مارس 2026', phase: 'الطرح', activities: ['قياس/تجربة الموظفين', 'التوزيع حسب القسم', 'التدريب على العناية', 'بدء جمع الملاحظات'] }
]

const commonMistakes = [
  { mistake: 'التقليل من احتياجات الاستبدال', impact: 'تجاوز الميزانية منتصف العام', solution: 'بناء احتياطي 15-20% للاستبدالات والتوظيف الجديد والتلف' },
  { mistake: 'تجاهل التكاليف الخفية', impact: 'نفقات غير متوقعة', solution: 'تضمين التعديلات والغسيل والتخزين والتوزيع في التخطيط' },
  { mistake: 'اختيار السعر على الجودة', impact: 'تكاليف أعلى على المدى الطويل', solution: 'حساب التكلفة الإجمالية للملكية شاملة تكرار الاستبدال' },
  { mistake: 'دورة تخطيط متأخرة', impact: 'طلبات عاجلة، تسعير مرتفع', solution: 'البدء بالتخطيط قبل 6 أشهر من السنة المالية' },
  { mistake: 'نهج موحد للجميع', impact: 'ملاءمة سيئة، هدر', solution: 'الاستثمار في برامج القياس المناسبة وخيارات شاملة للمقاسات' },
  { mistake: 'إهمال مدخلات الموظفين', impact: 'انخفاض التبني، شكاوى', solution: 'استطلاع الموظفين حول تفضيلات الراحة والوظائف' }
]

export default function UniformBudgetPlanning2026PageAr() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm">
            <li><Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/ar/blog" className="text-gray-500 hover:text-gray-700">المدونة</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">التخطيط لميزانية الزي 2026</span></li>
          </ol>
        </div>
      </nav>

      <header className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/corporate/corporate_brand.jpg" alt="تخطيط الميزانية" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">📊 دليل التخطيط</span>
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-400/30">2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">التخطيط لميزانية الزي الموحد 2026</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">دليل استراتيجي شامل للتخطيط والتخصيص وتحسين ميزانية الزي الموحد للعام القادم.</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2"><UserIcon className="h-5 w-5" /><span>فريق المالية يونيوم</span></div>
              <div className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /><span>16 دقيقة قراءة</span></div>
              <div className="flex items-center gap-2"><TagIcon className="h-5 w-5" /><span>15 ديسمبر 2025</span></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><TagIcon className="h-5 w-5 text-blue-600" />فهرس المحتويات</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a key={index} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all">{item.title}</a>
                  ))}
                </nav>
              </div>
              <div className="mt-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">تحتاج مساعدة بالميزانية؟</h3>
                <p className="text-sm text-blue-100 mb-4">يونيوم توفر استشارة مجانية لميزانية الزي الموحد.</p>
                <Link href="/ar/contact" className="block text-center bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors">احصل على عرض مجاني</Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-3 lg:order-1 prose prose-lg max-w-none">
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">أهمية التخطيط الاستراتيجي</h2>
              <p className="text-gray-700 leading-relaxed mb-6">التخطيط الفعال لميزانية الزي هو أكثر من مجرد تخصيص أموال—إنه تمرين استراتيجي يؤثر على إدراك العلامة التجارية ورضا الموظفين والكفاءة التشغيلية والامتثال. مع اقترابنا من 2026، تواجه المؤسسات السعودية اعتبارات فريدة تشمل التوافق مع رؤية 2030 ومتطلبات الاستدامة واحتياجات القوى العاملة المتطورة.</p>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-3">لماذا تبدأ التخطيط الآن؟</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-blue-800"><CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" /><span>التخطيط المبكر يضمن تسعيراً وتوافراً أفضل</span></li>
                  <li className="flex items-start gap-2 text-blue-800"><CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" /><span>يتيح وقتاً لمدخلات أصحاب المصلحة</span></li>
                  <li className="flex items-start gap-2 text-blue-800"><CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" /><span>يمكّن من مفاوضات الموردين الاستراتيجية</span></li>
                  <li className="flex items-start gap-2 text-blue-800"><CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5" /><span>يتجنب الطلبات العاجلة والتسعير المرتفع</span></li>
                </ul>
              </div>
            </section>

            <section id="cost-factors" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">عوامل التكلفة الرئيسية</h2>
              <div className="space-y-6">
                {costFactors.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{item.factor}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.weight === 'عالي' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>تأثير {item.weight}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.considerations.map((c, i) => (<span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">{c}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="budget-calculator" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">نطاقات الميزانية حسب القطاع</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">القطاع</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">للموظف</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">القطع</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">الاستبدال</th>
                      <th className="text-right px-4 py-3 font-bold text-gray-900">ملاحظات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {budgetRanges.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">{item.sector}</td>
                        <td className="px-4 py-3"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium">{item.perEmployee}</span></td>
                        <td className="px-4 py-3 text-gray-600">{item.items}</td>
                        <td className="px-4 py-3 text-gray-600">{item.replacement}</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="roi-analysis" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تحليل العائد على الاستثمار</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roiFactors.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <ChartBarIcon className="h-6 w-6 text-blue-600" />
                      <h3 className="font-bold text-blue-900">{item.category}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-800"><CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" /><span>{benefit}</span></li>
                      ))}
                    </ul>
                    <p className="text-xs text-blue-700 bg-white rounded-lg p-2"><strong>قابل للقياس:</strong> {item.measurable}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="timeline" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">الجدول الزمني للتخطيط 2026</h2>
              <div className="space-y-4">
                {planningTimeline.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <CalendarIcon className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-bold text-gray-900">{item.month}</h3>
                        <p className="text-blue-600 text-sm font-medium">{item.phase}</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.activities.map((activity, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" /><span>{activity}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="common-mistakes" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">أخطاء شائعة يجب تجنبها</h2>
              <div className="space-y-4">
                {commonMistakes.map((item, index) => (
                  <div key={index} className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <div className="flex items-start gap-3">
                      <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-amber-900 mb-1">{item.mistake}</h3>
                        <p className="text-amber-800 text-sm mb-2"><strong>التأثير:</strong> {item.impact}</p>
                        <p className="text-amber-700 text-sm bg-white rounded-lg p-2"><strong>الحل:</strong> {item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">📊 احصل على تقييم الميزانية المجاني</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">يونيوم توفر استشارات مجانية لميزانية الزي للمؤسسات السعودية. دع خبراءنا يساعدونك على التخطيط بذكاء لـ 2026.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/ar/contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">طلب تقييم<ArrowLeftIcon className="h-5 w-5" /></Link>
                  <Link href="/ar/quote" className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">احصل على عرض فوري</Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}


