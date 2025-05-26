import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheckIcon,
  CogIcon,
  FireIcon,
  BeakerIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'التطورات الحديثة في الملابس الواقية الصناعية | يونيوم للزي الموحد',
  description: 'اكتشف أحدث التطورات والابتكارات في مجال الملابس الواقية الصناعية في المملكة العربية السعودية. تقنيات متقدمة لحماية العمال في البيئات الصناعية الخطرة.',
  keywords: 'الملابس الواقية الصناعية, تطورات الأمان الصناعي, معدات الحماية الشخصية, السلامة المهنية السعودية, الابتكار في الملابس الواقية, تقنيات الحماية المتقدمة',
  openGraph: {
    title: 'التطورات الحديثة في الملابس الواقية الصناعية | يونيوم',
    description: 'أحدث الابتكارات في مجال الملابس الواقية الصناعية لضمان أقصى درجات الأمان للعمال',
    images: ['/images/blog/industrial-protective-advances.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/blog/industrial-protective-clothing-advances/',
    languages: {
      'en': 'https://uneom.com/blog/industrial-protective-clothing-advances/',
      'ar': 'https://uneom.com/ar/blog/industrial-protective-clothing-advances/',
    },
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'التطورات الحديثة في الملابس الواقية الصناعية',
  description: 'دليل شامل حول أحدث التطورات والابتكارات في مجال الملابس الواقية الصناعية في المملكة العربية السعودية',
  image: [
    'https://uneom.com/images/blog/industrial-protective-advances.jpg',
    'https://uneom.com/images/categories/Industrial_Manufacturing_Uniforms.png',
    'https://uneom.com/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg'
  ],
  author: {
    '@type': 'Person',
    name: 'د. أحمد الصناعي',
    url: 'https://uneom.com/ar/authors/ahmed-industrial'
  },
  publisher: {
    '@type': 'Organization',
    name: 'يونيوم للزي الموحد',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/logos/ar/uneom-logo.png'
    }
  },
  datePublished: '2025-05-26',
  dateModified: '2025-05-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/ar/blog/industrial-protective-clothing-advances/'
  },
  articleSection: 'الصناعة والتصنيع',
  keywords: ['الملابس الواقية الصناعية', 'السلامة المهنية', 'الابتكار الصناعي', 'معدات الحماية الشخصية'],
  inLanguage: 'ar-SA'
}

export default function IndustrialProtectiveClothingAdvancesAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      <article className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-l from-blue-900 via-slate-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full backdrop-blur-sm">
                  <ShieldCheckIcon className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                التطورات الحديثة في
                <span className="text-blue-300 block">الملابس الواقية الصناعية</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                استكشف أحدث الابتكارات والتقنيات المتطورة في مجال الحماية الصناعية التي تضمن أقصى درجات الأمان للعمال في البيئات الخطرة
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-blue-600/30 rounded-full backdrop-blur-sm">السلامة المهنية</span>
                <span className="px-4 py-2 bg-green-600/30 rounded-full backdrop-blur-sm">الابتكار التقني</span>
                <span className="px-4 py-2 bg-purple-600/30 rounded-full backdrop-blur-sm">الحماية المتقدمة</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <CogIcon className="w-8 h-8 text-blue-600 ml-3" />
                    مقدمة حول التطورات الصناعية
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    تشهد صناعة الملابس الواقية في المملكة العربية السعودية تطوراً مستمراً ومتسارعاً، خاصة مع تزايد الاستثمارات في القطاعات الصناعية الثقيلة مثل البتروكيماويات والتعدين والطاقة. هذه التطورات لا تقتصر على تحسين مستويات الحماية فحسب، بل تشمل أيضاً تعزيز الراحة والكفاءة التشغيلية للعمال.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    في إطار رؤية المملكة 2030 والتوجه نحو التنويع الاقتصادي، تلعب الملابس الواقية المتطورة دوراً محورياً في ضمان استدامة العمليات الصناعية وحماية الثروة البشرية، مما يساهم في تحقيق أهداف التنمية المستدامة.
                  </p>
                </div>
              </div>

              {/* Key Innovations */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  الابتكارات الرئيسية في الملابس الواقية
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <FireIcon className="w-8 h-8 text-red-600 ml-3" />
                      <h3 className="text-xl font-bold text-gray-900">المقاومة الحرارية المتقدمة</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      تطوير أقمشة جديدة قادرة على تحمل درجات حرارة تصل إلى 1200 درجة مئوية، مع الحفاظ على مرونة الحركة والتهوية الطبيعية للجسم.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <BeakerIcon className="w-8 h-8 text-green-600 ml-3" />
                      <h3 className="text-xl font-bold text-gray-900">المقاومة الكيميائية الشاملة</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      ابتكار طبقات حماية متعددة تقاوم أكثر من 200 مادة كيميائية مختلفة، مع تقنيات التنظيف الذاتي والمضادة للبكتيريا.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <ChartBarIcon className="w-8 h-8 text-blue-600 ml-3" />
                      <h3 className="text-xl font-bold text-gray-900">أنظمة المراقبة الذكية</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      دمج أجهزة استشعار ذكية لمراقبة العلامات الحيوية والتعرض للمخاطر في الوقت الفعلي، مع إرسال تنبيهات فورية للإدارة.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <ArrowTrendingUpIcon className="w-8 h-8 text-purple-600 ml-3" />
                      <h3 className="text-xl font-bold text-gray-900">التحسين المستمر</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      استخدام الذكاء الاصطناعي لتحليل بيانات الاستخدام وتطوير تحسينات مستمرة في التصميم والوظائف الحمائية.
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-12">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
                    alt="عامل يرتدي ملابس واقية متطورة في بيئة صناعية"
                    width={800}
                    height={500}
                    className="w-full h-96 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 right-6 text-white">
                    <p className="text-sm font-medium">عامل يستخدم أحدث تقنيات الحماية الصناعية</p>
                  </div>
                </div>
              </div>

              {/* Saudi Market Focus */}
              <div className="bg-gradient-to-l from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  التطبيقات في السوق السعودي
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CogIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">القطاع البتروكيماوي</h3>
                    <p className="text-gray-700 text-sm">
                      حماية متقدمة ضد المواد الكيميائية الخطرة والغازات السامة في مصافي أرامكو والشركات التابعة
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FireIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">صناعة المعادن</h3>
                    <p className="text-gray-700 text-sm">
                      ملابس مقاومة للحرارة العالية والشرر المعدني في مصانع الحديد والصلب والألمنيوم
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheckIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">مشاريع نيوم</h3>
                    <p className="text-gray-700 text-sm">
                      تقنيات حماية مستقبلية للعمال في مشاريع المدن الذكية والطاقة المتجددة
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety Standards */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 ml-3" />
                  معايير السلامة والجودة
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">معايير SASO السعودية</h3>
                      <p className="text-gray-700">الامتثال الكامل لمعايير الهيئة السعودية للمواصفات والمقاييس والجودة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">شهادات ISO الدولية</h3>
                      <p className="text-gray-700">حاصلة على شهادات ISO 45001 لإدارة السلامة والصحة المهنية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 ml-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">اختبارات الجودة المتقدمة</h3>
                      <p className="text-gray-700">فحوصات شاملة في مختبرات معتمدة لضمان أعلى مستويات الحماية والمتانة</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Trends */}
              <div className="bg-gradient-to-l from-blue-900 to-purple-900 text-white rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">اتجاهات المستقبل</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">التقنيات الناشئة</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-blue-300 ml-2" />
                        النانو تكنولوجي في الأقمشة الواقية
                      </li>
                      <li className="flex items-center">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-blue-300 ml-2" />
                        الذكاء الاصطناعي في أنظمة الإنذار المبكر
                      </li>
                      <li className="flex items-center">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-blue-300 ml-2" />
                        المواد الذكية ذاتية الإصلاح
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">التطبيقات المستقبلية</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-green-300 ml-2" />
                        الواقع المعزز في التدريب على السلامة
                      </li>
                      <li className="flex items-center">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-green-300 ml-2" />
                        أنظمة التبريد الذكية المدمجة
                      </li>
                      <li className="flex items-center">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-green-300 ml-2" />
                        التخصيص الشخصي باستخدام البيانات الحيوية
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-l from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">احصل على أحدث حلول الحماية الصناعية</h2>
                <p className="text-xl mb-6 opacity-90">
                  تواصل مع خبرائنا لاستكشاف أفضل الحلول الواقية لمنشأتك الصناعية
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/ar/quote"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    احصل على عرض سعر
                  </Link>
                  <Link
                    href="/ar/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    تواصل معنا
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </article>
    </>
  )
}