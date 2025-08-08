import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  CloudIcon,
  SunIcon,
  BeakerIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  CogIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'جاكيت دورية أمنية مقاوم للطقس | حماية لجميع الأحوال الجوية | UNEOM',
  description: 'يوفر الجاكيت الأمني المقاوم للطقس للدورية من UNEOM حماية فائقة ضد الظروف الجوية القاسية لعمليات الدورية الأمنية في المملكة العربية السعودية. ملابس خارجية أمنية متطورة لجميع الأحوال الجوية.',
  keywords: 'جاكيت أمني مقاوم للطقس, جاكيت دورية لجميع الأحوال الجوية, جاكيت أمني مقاوم للماء, معدات أمنية للحماية من الطقس, أزياء مقاومة للطقس سعودية, ملابس أمنية لجميع الأحوال الجوية UNEOM',
  openGraph: {
    title: 'جاكيت دورية أمنية مقاوم للطقس | UNEOM',
    description: 'جاكيت دورية أمنية متطور مقاوم للطقس مصمم للحماية من جميع الأحوال الجوية في عمليات الدورية الأمنية في المملكة العربية السعودية.',
    images: ['/images/products/security/weather-resistant-jacket-main.jpg']}}

const productFeatures = [
  {
    icon: CloudIcon,
    title: 'حماية من الطقس',
    description: 'مواد متطورة مقاومة للماء والرياح توفر حماية كاملة ضد المطر والرياح والظروف الجوية القاسية.'
  },
  {
    icon: SunIcon,
    title: 'مقاومة الأشعة فوق البنفسجية',
    description: 'حماية مدمجة من الأشعة فوق البنفسجية ومواد مقاومة للحرارة مصممة لشمس المملكة العربية السعودية الشديدة ودرجات الحرارة العالية.'
  },
  {
    icon: BeakerIcon,
    title: 'تقنية قابلة للتنفس',
    description: 'أنظمة متطورة لامتصاص الرطوبة والتهوية تحافظ على الراحة في الطقس القاسي مع ضمان الحماية.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'بناء متين',
    description: 'خياطة معززة ومواد شديدة التحمل مبنية لتحمل الظروف الجوية القاسية والاستخدام المكثف.'
  }
]

const specifications = [
  { label: 'تركيب المواد', value: 'نسيج ريبستوب مقاوم للماء مع خياطة محكمة وتقنية غشاء قابل للتنفس' },
  { label: 'حماية الطقس', value: 'مقاوم للماء (10,000مم)، مقاوم للرياح، مقاوم للأشعة فوق البنفسجية (UPF 50+)، نطاق درجة الحرارة -10°م إلى +50°م' },
  { label: 'الوزن', value: '1.1-1.6 كجم حسب المقاس ومستوى العزل' },
  { label: 'نطاق المقاسات', value: 'XS - 4XL مع أساور عاصفة قابلة للتعديل وحافة بحبل سحب' },
  { label: 'خيارات الألوان', value: 'أسود عاصفة، رمادي طقس، بني صحراوي، أصفر عالي الرؤية (خيارات عاكسة متاحة)' },
  { label: 'تكوين الجيوب', value: '8-10 جيوب محكمة ضد الطقس، رفرف عاصفة، سحابات مقاومة للماء' },
  { label: 'الميزات الخاصة', value: 'غطاء رأس قابل للإزالة، سحابات تهوية، أساور عاصفة، شرائط عاكسة، حلقات راديو' }
]

const includedItems = [
  'جاكيت دورية أمنية مقاوم للطقس',
  'غطاء رأس معزول قابل للإزالة',
  'مضبطات أساور العاصفة',
  'أغطية جيوب مقاومة للماء',
  'عناصر أمان عاكسة',
  'دليل معدات الطقس من UNEOM',
  'تعليمات الصيانة'
]

const weatherConditions = [
  { name: 'مطر غزير', icon: CloudIcon },
  { name: 'رياح قوية', icon: BeakerIcon },
  { name: 'حرارة شديدة', icon: SunIcon },
  { name: 'عواصف ترابية', icon: CogIcon },
  { name: 'طقس بارد', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'سترة تكتيكية احترافية',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/ar/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'بنطلون مقاوم للطقس',
    image: '/images/products/security/weather-resistant-pants-main.jpg',
    href: '/ar/shop/security-uniforms/security-patrol-pants/weather-resistant/',
    price: 'ابتداءً من 200 ر.س'
  },
  {
    name: 'طقم حماية من الطقس',
    image: '/images/products/security/weather-protection-kit.jpg',
    href: '/ar/shop/security-accessories/weather-protection-kit/',
    price: 'ابتداءً من 150 ر.س'
  }
]

export default function WeatherResistantSecurityPatrolJacketPageAR() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Link href="/ar/" className="hover:text-blue-600">الرئيسية</Link>
            <span>/</span>
            <Link href="/ar/shop/" className="hover:text-blue-600">المتجر</Link>
            <span>/</span>
            <Link href="/ar/shop/security-uniforms/" className="hover:text-blue-600">الأزياء الأمنية</Link>
            <span>/</span>
            <span className="text-gray-900">جاكيت دورية أمنية مقاوم للطقس</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/security/weather-resistant-jacket-main.jpg"
                  alt="جاكيت دورية أمنية مقاوم للطقس"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-green-600 cursor-pointer">
                    <Image
                      src={`/images/products/security/weather-resistant-jacket-detail-${i}.jpg`}
                      alt={`تفاصيل الجاكيت المقاوم للطقس ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="mr-2 text-sm text-gray-600">(أداء مختبر لجميع الأحوال الجوية)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                جاكيت دورية أمنية مقاوم للطقس
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                اقهر أي حالة طقس مع الجاكيت الأمني المقاوم للطقس للدورية من UNEOM. مهندس لتقلبات المناخ القاسية في المملكة العربية السعودية، هذا الجاكيت المتطور لجميع الأحوال الجوية يوفر حماية لا تتزعزع مع الحفاظ على الراحة والوظائف لمتخصصي الأمن.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">ابتداءً من 380 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للجاكيت الواحد</span>
              </div>
              
              <div className="p-4 bg-green-50 border-r-4 border-green-600 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CloudIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-green-700">
                      <strong>حماية لجميع الأحوال الجوية:</strong> جاكيتنا المقاوم للطقس يوفر حماية كاملة ضد الظروف الجوية القاسية في المملكة العربية السعودية. <Link href="/ar/resources/weather-protection-guide" className="font-medium underline hover:text-green-800">عرض دليل الحماية من الطقس</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=weather-resistant-security-patrol-jacket"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر للحماية من الطقس
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <CloudIcon className="h-5 w-5 ml-2 text-green-600" /> {/* Changed mr to ml for RTL */}
                  أضف إلى طقم الطقس
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">ميزات الحماية من الطقس:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية من الطقس</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مقاومة الأشعة فوق البنفسجية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>تقنية قابلة للتنفس</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>بناء متين</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مهندس للظروف الجوية القاسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Conditions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            حماية ضد جميع الظروف الجوية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {weatherConditions.map((condition, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <condition.icon className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{condition.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات الجاكيت المقاوم للطقس
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ميزات الحماية المتطورة من الطقس</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{spec.label}:</span>
                    <span className="text-gray-600 text-left">{spec.value}</span> {/* Changed text-right to text-left for RTL */}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تشمل حزمة الحماية الكاملة من الطقس</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">وعد الحماية من الطقس من UNEOM</h4>
                <p className="text-sm text-green-600">
                  كل جاكيت مقاوم للطقس مختبر في ظروف قاسية لضمان حماية موثوقة ضد أقسى تحديات الطقس في المملكة العربية السعودية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أكمل طقم الحماية من الطقس
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">{product.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
                  >
                    عرض المنتج
                    <ArrowLeftIcon className="mr-2 h-4 w-4" /> {/* Changed ml to mr and ArrowRight to ArrowLeft for RTL */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            اقهر أي طقس مع الحماية لجميع الأحوال الجوية من UNEOM
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            انضم إلى متخصصي الأمن في جميع أنحاء المملكة العربية السعودية الذين يثقون في UNEOM لاحتياجات الحماية من الطقس. اختبر الحماية التي لا تتزعزع ضد الظروف الجوية القاسية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Weather+Protection+Equipment+Inquiry"
              className="bg-white text-green-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر متخصص الحماية من الطقس
            </Link>
            <Link
              href="/ar/services/weather-protection-program"
              className="border-2 border-green-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 hover:border-white transition-colors text-lg"
            >
              برامج الحماية من الطقس
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}