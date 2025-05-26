import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'معايير السلامة للزي الأمني في المملكة العربية السعودية | يونيوم',
  description: 'دليل شامل لمعايير السلامة والجودة المطلوبة في الأزياء الأمنية وفقاً للوائح السعودية ومعايير السلامة المهنية الدولية',
  keywords: 'معايير السلامة، الزي الأمني، لوائح السلامة، معايير الجودة، الأمن والسلامة، المملكة العربية السعودية',
  openGraph: {
    title: 'معايير السلامة للزي الأمني في المملكة العربية السعودية | يونيوم',
    description: 'دليل شامل لمعايير السلامة والجودة المطلوبة في الأزياء الأمنية',
    images: ['/images/blog/security-uniform-safety-standards-ar.jpg'],
    locale: 'ar_SA',
    type: 'article',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/blog/security-uniform-safety-standards/',
    languages: {
      'en': 'https://uneom.com/blog/security-uniform-safety-standards/',
      'ar': 'https://uneom.com/ar/blog/security-uniform-safety-standards/',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'معايير السلامة للزي الأمني في المملكة العربية السعودية',
  description: 'دليل شامل لمعايير السلامة والجودة المطلوبة في الأزياء الأمنية وفقاً للوائح السعودية ومعايير السلامة المهنية الدولية',
  image: 'https://uneom.com/images/blog/security-uniform-safety-standards-ar.jpg',
  author: {
    '@type': 'Organization',
    name: 'يونيوم',
    url: 'https://uneom.com/ar/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'يونيوم',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/logo.png',
    },
  },
  datePublished: '2025-05-26',
  dateModified: '2025-05-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/ar/blog/security-uniform-safety-standards/',
  },
  inLanguage: 'ar-SA',
  about: [
    {
      '@type': 'Thing',
      name: 'معايير السلامة',
    },
    {
      '@type': 'Thing', 
      name: 'الزي الأمني',
    },
  ],
}

export default function SecurityUniformSafetyStandardsAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
          <Image
            src="/images/blog/security-uniform-safety-standards-hero.jpg"
            alt="معايير السلامة للزي الأمني"
            fill
            className="object-cover -z-10"
            priority
          />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                معايير السلامة
                <span className="block text-blue-400">للزي الأمني</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                دليل شامل لمعايير السلامة والجودة المطلوبة في الأزياء الأمنية وفقاً للوائح السعودية
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">
                  معايير سعودية
                </span>
                <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">
                  سلامة مهنية
                </span>
                <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">
                  جودة عالية
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                تلعب معايير السلامة في الأزياء الأمنية دوراً محورياً في ضمان حماية رجال الأمن وتعزيز فعاليتهم في أداء مهامهم. في المملكة العربية السعودية، تخضع الأزياء الأمنية لمعايير صارمة تضمن أعلى مستويات الجودة والسلامة، مما يساهم في تحقيق رؤية المملكة 2030 في مجال الأمن والسلامة.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  أهمية معايير السلامة في الزي الأمني
                </h3>
                <p className="text-blue-800">
                  تضمن معايير السلامة حماية رجال الأمن من المخاطر المهنية وتعزز من قدرتهم على أداء واجباتهم بكفاءة وثقة، مما ينعكس إيجابياً على الأمن العام في المملكة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Standards Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                المعايير الأساسية للسلامة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تعرف على المعايير الأساسية التي يجب توفرها في الأزياء الأمنية لضمان السلامة والحماية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Material Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <CogIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">معايير المواد</h3>
                <p className="text-gray-600 mb-4">
                  مواد عالية الجودة مقاومة للتمزق والاحتكاك مع خصائص مضادة للبكتيريا
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• مقاومة التآكل والتمزق</li>
                  <li>• خصائص مضادة للميكروبات</li>
                  <li>• تهوية مناسبة</li>
                </ul>
              </div>

              {/* Visibility Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                  <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">معايير الرؤية</h3>
                <p className="text-gray-600 mb-4">
                  ألوان وعلامات عاكسة تضمن الرؤية الواضحة في جميع الظروف والأوقات
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• شرائط عاكسة عالية الجودة</li>
                  <li>• ألوان متباينة واضحة</li>
                  <li>• رؤية ليلية محسّنة</li>
                </ul>
              </div>

              {/* Protection Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <ShieldCheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">معايير الحماية</h3>
                <p className="text-gray-600 mb-4">
                  حماية شاملة من العوامل البيئية والمخاطر المهنية المختلفة
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• مقاومة الطقس والرطوبة</li>
                  <li>• حماية من الأشعة فوق البنفسجية</li>
                  <li>• مقاومة الحرارة المعتدلة</li>
                </ul>
              </div>

              {/* Comfort Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <UserGroupIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">معايير الراحة</h3>
                <p className="text-gray-600 mb-4">
                  تصميم مريح يسمح بحرية الحركة والأداء الأمثل لفترات طويلة
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• قصات مريحة ومرنة</li>
                  <li>• تهوية مناسبة</li>
                  <li>• خفة الوزن</li>
                </ul>
              </div>

              {/* Quality Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <DocumentCheckIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">معايير الجودة</h3>
                <p className="text-gray-600 mb-4">
                  اختبارات جودة صارمة تضمن المتانة والأداء طويل المدى
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• اختبارات المتانة</li>
                  <li>• فحص الخياطة والتشطيب</li>
                  <li>• ضمان الجودة الشامل</li>
                </ul>
              </div>

              {/* Compliance Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <ClipboardDocumentListIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">معايير الامتثال</h3>
                <p className="text-gray-600 mb-4">
                  التوافق مع اللوائح السعودية والمعايير الدولية للسلامة المهنية
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• معايير SASO السعودية</li>
                  <li>• معايير ISO الدولية</li>
                  <li>• شهادات الجودة المعتمدة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Saudi Regulations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                اللوائح السعودية للأزياء الأمنية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نظرة على اللوائح والمعايير المحلية التي تحكم صناعة الأزياء الأمنية في المملكة
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/blog/saudi-security-regulations.jpg"
                  alt="اللوائح السعودية للأزياء الأمنية"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div className="border-r-4 border-green-500 pr-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">هيئة المواصفات والمقاييس (SASO)</h3>
                  <p className="text-gray-600">
                    تحدد المعايير الأساسية لجودة المواد والتصنيع والسلامة في الأزياء الأمنية
                  </p>
                </div>
                
                <div className="border-r-4 border-blue-500 pr-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">وزارة الداخلية</h3>
                  <p className="text-gray-600">
                    تضع المتطلبات الخاصة بالمظهر والوظائف الأمنية للأزياء الرسمية
                  </p>
                </div>
                
                <div className="border-r-4 border-purple-500 pr-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">المؤسسة العامة للتأمينات الاجتماعية</h3>
                  <p className="text-gray-600">
                    تحدد معايير السلامة المهنية وحماية العاملين في القطاع الأمني
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing and Certification */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                الاختبارات والشهادات المطلوبة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                عمليات الاختبار والفحص التي تضمن مطابقة الأزياء الأمنية للمعايير المطلوبة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">اختبار المواد</h3>
                <p className="text-gray-600 text-sm">
                  فحص جودة الأقمشة ومقاومتها للعوامل المختلفة
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">اختبار الأداء</h3>
                <p className="text-gray-600 text-sm">
                  تقييم الراحة والمرونة والوظائف العملية
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">اختبار السلامة</h3>
                <p className="text-gray-600 text-sm">
                  فحص مستويات الحماية والأمان المطلوبة
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">الشهادة النهائية</h3>
                <p className="text-gray-600 text-sm">
                  إصدار شهادات المطابقة والجودة المعتمدة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أفضل الممارسات في اختيار الزي الأمني
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إرشادات عملية لضمان اختيار الأزياء الأمنية المناسبة والآمنة
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">معايير الاختيار</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">تحديد المتطلبات الوظيفية</h4>
                    <p className="text-gray-600">تحديد طبيعة العمل والمخاطر المحتملة لاختيار الحماية المناسبة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">فحص الشهادات والمطابقة</h4>
                    <p className="text-gray-600">التأكد من حصول المنتج على الشهادات المطلوبة من الجهات المعتمدة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">اختبار الراحة والملاءمة</h4>
                    <p className="text-gray-600">التأكد من ملاءمة المقاسات والراحة أثناء الحركة والعمل</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">تقييم التكلفة الإجمالية</h4>
                    <p className="text-gray-600">حساب التكلفة الشاملة بما في ذلك الصيانة والاستبدال</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">قائمة فحص السلامة</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">شهادة مطابقة SASO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">اختبار مقاومة التمزق</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">فحص العناصر العاكسة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">تقييم الراحة والمرونة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">فحص جودة الخياطة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">اختبار مقاومة الطقس</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              احصل على أزياء أمنية تلبي أعلى معايير السلامة
            </h2>
            <p className="text-xl mb-8 opacity-90">
              تواصل مع خبرائنا للحصول على استشارة مجانية حول أفضل الحلول الأمنية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/quote/"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                احصل على عرض سعر مخصص
              </Link>
              <Link
                href="/ar/shop/security-uniforms/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                تصفح الأزياء الأمنية
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              مقالات ذات صلة
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/ar/blog/security-uniform-psychology/" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src="/images/blog/security-uniform-psychology.jpg"
                    alt="علم نفس الزي الأمني"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      علم نفس الزي الأمني وتأثيره
                    </h3>
                    <p className="text-gray-600">
                      كيف يؤثر تصميم الزي الأمني على سلوك الجمهور وثقتهم في رجال الأمن
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/ar/blog/security-equipment-maintenance/" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src="/images/blog/security-equipment-maintenance.jpg"
                    alt="صيانة المعدات الأمنية"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      صيانة وإدارة المعدات الأمنية
                    </h3>
                    <p className="text-gray-600">
                      أفضل الممارسات للحفاظ على جودة وفعالية الأزياء والمعدات الأمنية
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/ar/blog/modern-security-technologies/" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src="/images/blog/modern-security-technologies.jpg"
                    alt="التقنيات الأمنية الحديثة"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      التقنيات الأمنية الحديثة
                    </h3>
                    <p className="text-gray-600">
                      أحدث التطورات التكنولوجية في مجال الأمن والحماية
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}