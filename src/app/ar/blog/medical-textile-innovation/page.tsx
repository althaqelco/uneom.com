import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CogIcon,
  CalendarIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'ابتكارات النسيج الطبي: ثورة في الأزياء الصحية في المملكة العربية السعودية | مدونة UNEOM',
  description: 'استكشف أحدث الابتكارات في النسيج الطبي وكيف تحول الأزياء الصحية في المملكة العربية السعودية. من الأقمشة المضادة للميكروبات إلى النسيج الذكي، اكتشف مستقبل الملابس الطبية.',
  keywords: 'ابتكارات النسيج الطبي, الأزياء الصحية, الأقمشة المضادة للميكروبات, النسيج الذكي, الرعاية الصحية السعودية, تقنية الملابس الطبية, ابتكارات UNEOM, اتجاهات النسيج الصحي',
  openGraph: {
    title: 'ابتكارات النسيج الطبي: ثورة في الأزياء الصحية',
    description: 'اكتشف كيف تحول ابتكارات النسيج المتطورة الأزياء الصحية في المرافق الطبية السعودية.',
    images: ['/images/blog/medical-textile-innovation-hero.jpg']}}

const innovations = [
  {
    icon: ShieldCheckIcon,
    title: 'تقنية مضادة للميكروبات',
    description: 'أقمشة متطورة مشبعة بأيونات الفضة والنحاس تحارب البكتيريا والفيروسات بفعالية',
    benefits: ['تقليل 99.9% من مسببات الأمراض', 'حماية طويلة المدى', 'مكافحة الروائح']
  },
  {
    icon: SparklesIcon,
    title: 'إدارة الرطوبة',
    description: 'أنظمة أقمشة ذكية تنظم درجة الحرارة والرطوبة للراحة المثلى',
    benefits: ['تهوية محسنة', 'خصائص سريعة الجفاف', 'تنظيم درجة الحرارة']
  },
  {
    icon: CogIcon,
    title: 'النسيج الذكي',
    description: 'أقمشة مدمجة مع أجهزة استشعار وتقنيات لمراقبة الصحة والسلامة',
    benefits: ['مراقبة العلامات الحيوية', 'تنبيهات بيئية', 'تكامل البيانات']
  },
  {
    icon: BeakerIcon,
    title: 'مواد مستدامة',
    description: 'أقمشة صديقة للبيئة مصنوعة من مواد معاد تدويرها وعمليات مستدامة',
    benefits: ['تقليل التأثير البيئي', 'خيارات قابلة للتحلل', 'دعم الاقتصاد الدائري']
  }
]

export default function MedicalTextileInnovationBlogAR() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ابتكارات النسيج الطبي: ثورة في الأزياء الصحية
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            اكتشف كيف تحول تقنيات النسيج المتطورة الأزياء الصحية في المملكة العربية السعودية، وتعزز السلامة والراحة والأداء للمتخصصين الطبيين.
          </p>
          <div className="flex items-center justify-center space-x-6 space-x-reverse text-blue-200 text-sm">
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 ml-2" />
              <span>15 ديسمبر 2024</span>
            </div>
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 ml-2" />
              <span>فريق البحث UNEOM</span>
            </div>
            <div className="flex items-center">
              <TagIcon className="h-5 w-5 ml-2" />
              <span>ابتكارات الرعاية الصحية</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            تشهد صناعة الرعاية الصحية في المملكة العربية السعودية ثورة تقنية، والنسيج الطبي في مقدمة هذا التحول. مع استمرار المملكة في الاستثمار في البنية التحتية للرعاية الصحية عالمية المستوى من خلال رؤية 2030، لم يكن الطلب على الأزياء الطبية المبتكرة التي تعزز السلامة والراحة والأداء أعلى من أي وقت مضى.
          </p>
          
          <div className="bg-blue-50 border-r-4 border-blue-500 p-6 my-8 rounded-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">رؤية رئيسية</h3>
            <p className="text-blue-700">
              ابتكارات النسيج الطبي ليست فقط حول الراحة—إنها حول خلق بيئة رعاية صحية أكثر أماناً وكفاءة تحمي المرضى والعاملين في الرعاية الصحية مع دعم أهداف التميز في الرعاية الصحية في المملكة العربية السعودية.
            </p>
          </div>
        </div>

        {/* Innovation Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">تقنيات النسيج الثورية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full ml-4">
                    <innovation.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{innovation.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{innovation.description}</p>
                <ul className="space-y-2">
                  {innovation.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">مستقبل النسيج الطبي في المملكة العربية السعودية</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              مع استمرار المملكة العربية السعودية في ترسيخ مكانتها كرائدة عالمية في الرعاية الصحية، تشكل عدة اتجاهات ناشئة مستقبل النسيج الطبي:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. التكامل مع الصحة الرقمية</h3>
            <p className="text-gray-700 mb-6">
              النسيج الذكي المدمج مع أجهزة استشعار إنترنت الأشياء سيمكن من المراقبة الصحية في الوقت الفعلي، مما يسمح للمرافق الصحية بتتبع صحة الموظفين والظروف البيئية بشكل مستمر.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. الأزياء الطبية المخصصة</h3>
            <p className="text-gray-700 mb-6">
              تقنيات التصنيع المتقدمة ستمكن من أزياء مخصصة مصممة حسب احتياجات العاملين في الرعاية الصحية الفردية، مما يحسن الراحة والأداء.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. النسيج الصحي المستدام</h3>
            <p className="text-gray-700 mb-6">
              تماشياً مع أهداف الاستدامة في المملكة العربية السعودية، ستصبح النسيج الطبي الصديق للبيئة المصنوع من مواد معاد تدويرها والمصمم لمبادئ الاقتصاد الدائري معياراً.
            </p>
          </div>
        </section>

        {/* UNEOM Innovation */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">التزام UNEOM بالابتكار</h2>
            <p className="text-blue-100 mb-6">
              في UNEOM، نحن لا نتبع هذه الاتجاهات فحسب—بل نساعد في خلقها. يعمل فريق البحث والتطوير لدينا بشكل وثيق مع المرافق الصحية السعودية لتطوير حلول زي متطورة تلبي الاحتياجات الفريدة للمتخصصين الطبيين في المملكة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">شريك في الرعاية الصحية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">تقنيات أقمشة مبتكرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200">فعالية مضادة للميكروبات</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">هل أنت مستعد لابتكار أزيائك الصحية؟</h3>
          <p className="text-gray-700 mb-6">
            اكتشف كيف يمكن لحلول النسيج الطبي المبتكرة من UNEOM أن تحول برنامج الزي في مرفقك الصحي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Medical+Textile+Innovation+Inquiry"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              جدولة استشارة الابتكار
            </Link>
            <Link
              href="/ar/shop/medical-scrubs/"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              استكشف الأزياء الطبية
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}