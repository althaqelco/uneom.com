import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BoltIcon,
  CloudIcon,
  ClockIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  EyeIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'سترة أمنية تكتيكية خفيفة الوزن | معدات حماية رشيقة | UNEOM',
  description: 'توفر السترة الأمنية التكتيكية خفيفة الوزن من UNEOM حركة مثلى وحماية للعمليات الأمنية الرشيقة في المملكة العربية السعودية. معدات تكتيكية متطورة خفيفة الوزن للمهام الممتدة.',
  keywords: 'سترة تكتيكية خفيفة الوزن, معدات أمنية رشيقة, سترة تكتيكية متحركة, سترة حماية خفيفة, معدات أمنية سعودية, معدات تكتيكية رشيقة UNEOM, سترة أمنية للحركة',
  openGraph: {
    title: 'سترة أمنية تكتيكية خفيفة الوزن | UNEOM',
    description: 'سترة أمنية تكتيكية متطورة خفيفة الوزن مصممة لأقصى حركة ورشاقة في العمليات الأمنية في المملكة العربية السعودية.',
    images: ['/images/products/security/lightweight-tactical-vest-main.jpg']}}

const productFeatures = [
  {
    icon: CloudIcon,
    title: 'تصميم فائق الخفة',
    description: 'مواد متطورة وهندسة توفر أقصى حماية مع تقليل الوزن لتعزيز الحركة والراحة.'
  },
  {
    icon: BoltIcon,
    title: 'حركة محسنة',
    description: 'تصميم مريح وبناء مرن يسمح بحركة غير مقيدة أثناء العمليات الأمنية الديناميكية.'
  },
  {
    icon: ClockIcon,
    title: 'راحة ممتدة',
    description: 'مواد قابلة للتنفس وتقنية امتصاص الرطوبة تضمن الراحة أثناء المهام والدوريات طويلة المدى.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'حماية موثوقة',
    description: 'خفيف الوزن لا يعني حماية مضعفة - يحافظ على قدرات مقاومة الرصاص والطعن الأساسية.'
  }
]

const specifications = [
  { label: 'تركيب المواد', value: 'كوردورا 500D فائق الخفة مع تعزيز ألياف متطور وبطانة امتصاص الرطوبة' },
  { label: 'مستوى الحماية', value: 'متوافق مع NIJ المستوى IIA/II، إدراجات درع ناعم، خيارات مقاومة الطعن متاحة' },
  { label: 'الوزن', value: '0.8-1.4 كجم حسب مستوى الحماية والتكوين' },
  { label: 'نطاق المقاسات', value: 'XS - 4XL مع نظام ملاءمة دقيق وألواح جانبية مرنة' },
  { label: 'خيارات الألوان', value: 'أسود، كحلي، رمادي، كاكي (ألوان منخفضة الوضوح للعمليات السرية)' },
  { label: 'تكوين الجيوب', value: '6-10 جيوب مبسطة، خيارات حمل مخفية، تصميم منخفض الوضوح' },
  { label: 'الميزات الخاصة', value: 'نظام تحرير سريع، صديق للإخفاء، ألواح شبكية قابلة للتنفس، منخفض الوضوح' }
]

const includedItems = [
  'سترة أمنية تكتيكية خفيفة الوزن',
  'إدراجات درع ناعم (المستوى IIA)',
  'ألواح جانبية قابلة للتعديل',
  'أبازيم تحرير سريع',
  'إكسسوارات الإخفاء',
  'دليل المعدات خفيفة الوزن من UNEOM',
  'دليل تدريب الحركة'
]

const idealForOperations = [
  { name: 'عمليات الدورية', icon: UserGroupIcon },
  { name: 'الأمن السري', icon: EyeIcon },
  { name: 'أمن الفعاليات', icon: CogIcon },
  { name: 'الاستجابة المتحركة', icon: BoltIcon },
  { name: 'المهام الممتدة', icon: ClockIcon }
]

const relatedProducts = [
  {
    name: 'سترة تكتيكية احترافية',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/ar/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'جاكيت دورية أمنية',
    image: '/images/products/security/security-patrol-jacket-main.jpg',
    href: '/ar/shop/security-uniforms/security-patrol-jacket/professional/',
    price: 'ابتداءً من 280 ر.س'
  },
  {
    name: 'إكسسوارات خفيفة الوزن',
    image: '/images/products/security/lightweight-accessories-kit.jpg',
    href: '/ar/shop/security-accessories/lightweight-kit/',
    price: 'ابتداءً من 120 ر.س'
  }
]

export default function LightweightTacticalVestPageAR() {
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
            <span className="text-gray-900">سترة تكتيكية خفيفة الوزن</span>
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
                  src="/images/products/security/lightweight-tactical-vest-main.jpg"
                  alt="سترة أمنية تكتيكية خفيفة الوزن"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-500 cursor-pointer">
                    <Image
                      src={`/images/products/security/lightweight-tactical-vest-detail-${i}.jpg`}
                      alt={`تفاصيل السترة التكتيكية خفيفة الوزن ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(مفضل للعمليات المتحركة)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                سترة أمنية تكتيكية خفيفة الوزن
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                اعظم رشاقتك التشغيلية مع السترة الأمنية التكتيكية خفيفة الوزن من UNEOM. مهندسة لمتخصصي الأمن الذين يحتاجون حركة مثلى دون التنازل عن الحماية، هذه السترة مثالية للمهام الممتدة والعمليات الديناميكية في القطاع الأمني السعودي.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 280 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للسترة الواحدة</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-r-4 border-blue-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CloudIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-blue-700">
                      <strong>حماية محسنة للحركة:</strong> سترتنا خفيفة الوزن توفر حماية أساسية مع تعظيم الحركة للعمليات الرشيقة. <Link href="/ar/resources/lightweight-tactical-guide" className="font-medium underline hover:text-blue-800">عرض دليل التكتيكي خفيف الوزن</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=lightweight-tactical-vest"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر للفريق المتحرك
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <CloudIcon className="h-5 w-5 ml-2 text-blue-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى الطقم المتحرك
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">مزايا الحركة:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>فائق الخفة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حركة محسنة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة ممتدة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية موثوقة</span>
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
            مهندسة للعمليات الأمنية الرشيقة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Operations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالية للعمليات الأمنية المتحركة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForOperations.map((operation, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <operation.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{operation.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات السترة التكتيكية خفيفة الوزن
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ميزات متطورة خفيفة الوزن</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تشمل حزمة الحركة الكاملة</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">وعد الحركة من UNEOM</h4>
                <p className="text-sm text-blue-600">
                  كل سترة تكتيكية خفيفة الوزن مصممة لتعظيم الحركة التشغيلية مع الحفاظ على الحماية الأساسية للعمليات الأمنية الديناميكية.
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
            أكمل طقمك الأمني المتحرك
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            عزز رشاقتك التشغيلية مع المعدات خفيفة الوزن من UNEOM
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            انضم إلى فرق الأمن المتحركة في جميع أنحاء المملكة العربية السعودية الذين يثقون في UNEOM لاحتياجات المعدات التكتيكية خفيفة الوزن. اختبر التوازن المثالي بين الحماية والحركة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Lightweight+Tactical+Equipment+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر متخصص معدات الحركة
            </Link>
            <Link
              href="/ar/services/lightweight-tactical-program"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              برامج التكتيكي خفيف الوزن
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}