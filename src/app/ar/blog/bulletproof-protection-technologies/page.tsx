import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  EyeIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'تقنيات الحماية المضادة للرصاص: دليل شامل للأمن المتقدم | مدونة يونيوم',
  description: 'اكتشف أحدث تقنيات الحماية المضادة للرصاص والدروع الواقية المستخدمة في الأمن والحماية. دليل شامل عن المواد والتقنيات المتطورة في صناعة الحماية الشخصية.',
  keywords: 'تقنيات الحماية المضادة للرصاص, الدروع الواقية, الأمن المتقدم, الحماية الشخصية, تقنيات الأمان السعودية',
  openGraph: {
    title: 'تقنيات الحماية المضادة للرصاص: دليل شامل للأمن المتقدم',
    description: 'دليل شامل عن أحدث تقنيات الحماية المضادة للرصاص والدروع الواقية',
    images: ['/images/blog/bulletproof-protection-technologies.jpg'],
    locale: 'ar_SA'},
  alternates: {
    canonical: '/ar/blog/bulletproof-protection-technologies/',
    languages: {
      'en': '/blog/bulletproof-protection-technologies/',
      'ar': '/ar/blog/bulletproof-protection-technologies/'}}}

const tableOfContents = [
  { id: 'introduction', title: 'مقدمة عن تقنيات الحماية المضادة للرصاص' },
  { id: 'materials', title: 'المواد المستخدمة في الدروع الواقية' },
  { id: 'levels', title: 'مستويات الحماية والمعايير الدولية' },
  { id: 'applications', title: 'التطبيقات في القطاع الأمني' },
  { id: 'innovations', title: 'الابتكارات الحديثة في التقنيات' },
  { id: 'future', title: 'مستقبل تقنيات الحماية' }
]

const protectionLevels = [
  {
    level: 'المستوى IIA',
    description: 'حماية من الرصاص منخفض السرعة',
    applications: 'الأمن المدني والحراسة العامة'
  },
  {
    level: 'المستوى II',
    description: 'حماية من رصاص الأسلحة الخفيفة',
    applications: 'قوات الأمن والشرطة'
  },
  {
    level: 'المستوى IIIA',
    description: 'حماية من رصاص الأسلحة المتوسطة',
    applications: 'الحماية الشخصية للشخصيات المهمة'
  },
  {
    level: 'المستوى III',
    description: 'حماية من رصاص البنادق',
    applications: 'القوات الخاصة والعمليات التكتيكية'
  }
]

const materials = [
  {
    name: 'الكيفلار (Kevlar)',
    properties: 'خفيف الوزن، مرن، مقاوم للحرارة',
    usage: 'السترات الواقية الشخصية'
  },
  {
    name: 'البولي إيثيلين فائق الوزن الجزيئي',
    properties: 'خفيف جداً، مقاوم للماء، متين',
    usage: 'الدروع الحديثة والخوذات'
  },
  {
    name: 'السيراميك المتقدم',
    properties: 'صلب جداً، مقاوم للاختراق',
    usage: 'الألواح الصلبة في الدروع'
  },
  {
    name: 'ألياف الكربون',
    properties: 'قوي، خفيف، مقاوم للتآكل',
    usage: 'الدروع المتطورة والمركبات المدرعة'
  }
]

export default function BulletproofProtectionTechnologiesPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/ar" className="hover:text-blue-600">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link href="/ar/blog" className="hover:text-blue-600">المدونة</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">تقنيات الحماية المضادة للرصاص</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                تقنيات متقدمة
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                دليل شامل
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              تقنيات الحماية المضادة للرصاص: دليل شامل للأمن المتقدم
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              استكشف أحدث التطورات في تقنيات الحماية المضادة للرصاص والدروع الواقية المستخدمة في القطاع الأمني
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>د. أحمد الزهراني</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>15 دقيقة قراءة</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>2,847 مشاهدة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">محتويات المقال</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/blog/bulletproof-protection-technologies.jpg"
                alt="تقنيات الحماية المضادة للرصاص"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة عن تقنيات الحماية المضادة للرصاص</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تشهد تقنيات الحماية المضادة للرصاص تطوراً مستمراً في عالم الأمن والحماية الشخصية. هذه التقنيات المتقدمة تلعب دوراً حيوياً في حماية الأفراد العاملين في القطاعات الأمنية والعسكرية، بالإضافة إلى الشخصيات المهمة التي تحتاج لحماية خاصة.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    في المملكة العربية السعودية، تزداد أهمية هذه التقنيات مع التطور المستمر في القطاع الأمني ومتطلبات الحماية المتقدمة. من خلال هذا الدليل الشامل، سنستكشف أحدث التطورات والابتكارات في مجال الحماية المضادة للرصاص.
                  </p>
                </section>

                <section id="materials" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">المواد المستخدمة في الدروع الواقية</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تعتمد فعالية الدروع الواقية على نوعية المواد المستخدمة في تصنيعها. كل مادة لها خصائص فريدة تجعلها مناسبة لتطبيقات معينة:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {materials.map((material, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{material.name}</h3>
                        <p className="text-sm text-gray-600 mb-2"><strong>الخصائص:</strong> {material.properties}</p>
                        <p className="text-sm text-gray-600"><strong>الاستخدام:</strong> {material.usage}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="levels" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">مستويات الحماية والمعايير الدولية</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تصنف الدروع الواقية حسب مستويات الحماية المختلفة وفقاً للمعايير الدولية. كل مستوى مصمم لمواجهة تهديدات محددة:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {protectionLevels.map((level, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{level.level}</h3>
                        <p className="text-gray-700 mb-2">{level.description}</p>
                        <p className="text-sm text-blue-600"><strong>التطبيقات:</strong> {level.applications}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="applications" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">التطبيقات في القطاع الأمني</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تستخدم تقنيات الحماية المضادة للرصاص في مجالات متعددة داخل القطاع الأمني:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li><strong>قوات الأمن الخاصة:</strong> السترات الواقية المتقدمة للعمليات عالية المخاطر</li>
                    <li><strong>الحماية الشخصية:</strong> دروع خفيفة الوزن للحراس الشخصيين</li>
                    <li><strong>أمن المطارات:</strong> معدات حماية للعاملين في المناطق الحساسة</li>
                    <li><strong>أمن البنوك:</strong> دروع واقية لحماية الموظفين والعملاء</li>
                    <li><strong>المركبات المدرعة:</strong> تقنيات حماية متطورة للسيارات الأمنية</li>
                  </ul>
                </section>

                <section id="innovations" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">الابتكارات الحديثة في التقنيات</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تشهد صناعة الحماية المضادة للرصاص ابتكارات مستمرة تهدف إلى تحسين الفعالية وتقليل الوزن:
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3">التقنيات الناشئة:</h3>
                    <ul className="list-disc list-inside text-blue-800 space-y-2">
                      <li>الألياف النانوية فائقة القوة</li>
                      <li>المواد الذكية التي تتفاعل مع التهديد</li>
                      <li>الدروع السائلة القابلة للتصلب</li>
                      <li>تقنيات الطباعة ثلاثية الأبعاد للدروع المخصصة</li>
                    </ul>
                  </div>
                </section>

                <section id="future" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">مستقبل تقنيات الحماية</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    يتجه مستقبل تقنيات الحماية المضادة للرصاص نحو تطوير حلول أكثر ذكاءً وفعالية. نتوقع رؤية:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>دروع أخف وزناً بحماية أقوى</li>
                    <li>تقنيات الحماية التكيفية</li>
                    <li>دمج أجهزة الاستشعار والذكاء الاصطناعي</li>
                    <li>مواد صديقة للبيئة وقابلة للتدوير</li>
                    <li>حلول حماية شخصية مدمجة في الملابس العادية</li>
                  </ul>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">هل تحتاج لحلول حماية متقدمة؟</h3>
                  <p className="text-gray-700 mb-4">
                    يونيوم تقدم أحدث تقنيات الحماية والأزياء الأمنية المتطورة للقطاع الأمني في السعودية.
                  </p>
                  <Link 
                    href="/ar/shop/security-uniforms"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    استكشف منتجاتنا الأمنية
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/ar/blog/security-uniform-safety-standards" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/security-uniform-standards.jpg"
                      alt="معايير السلامة في الأزياء الأمنية"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">معايير السلامة في الأزياء الأمنية</h4>
                      <p className="text-gray-600 text-sm">دليل شامل عن معايير السلامة والجودة في تصنيع الأزياء الأمنية</p>
                    </div>
                  </div>
                </Link>
                <Link href="/ar/blog/smart-security-uniforms-future" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/smart-security-uniforms.jpg"
                      alt="مستقبل الأزياء الأمنية الذكية"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">مستقبل الأزياء الأمنية الذكية</h4>
                      <p className="text-gray-600 text-sm">استكشف التقنيات الذكية المدمجة في أزياء الأمن المستقبلية</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}