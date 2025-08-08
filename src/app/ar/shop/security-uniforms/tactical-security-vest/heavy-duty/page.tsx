import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  FireIcon,
  CogIcon,
  BoltIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'سترة أمنية تكتيكية للخدمة الشاقة | معدات حماية قصوى | UNEOM',
  description: 'توفر السترة الأمنية التكتيكية للخدمة الشاقة من UNEOM أقصى حماية ومتانة للعمليات الأمنية عالية المخاطر في المملكة العربية السعودية. معدات تكتيكية بمواصفات عسكرية للظروف القاسية.',
  keywords: 'سترة تكتيكية للخدمة الشاقة, معدات أمنية حماية قصوى, سترة تكتيكية بمواصفات عسكرية, معدات أمنية عالية المخاطر, معدات تكتيكية سعودية, سترة أمنية شاقة UNEOM, سترة حماية قصوى',
  openGraph: {
    title: 'سترة أمنية تكتيكية للخدمة الشاقة | UNEOM',
    description: 'سترة أمنية تكتيكية بمواصفات عسكرية مصممة لأقصى حماية في العمليات الأمنية عالية المخاطر في المملكة العربية السعودية.',
    images: ['/images/products/security/heavy-duty-tactical-vest-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'حماية قصوى',
    description: 'حماية بمواصفات عسكرية مع ألواح مقاومة للرصاص معززة ومقاومة متعددة التهديدات للعمليات الأمنية القاسية.'
  },
  {
    icon: FireIcon,
    title: 'متانة قصوى',
    description: 'مبنية لتحمل الظروف القاسية مع مواد مقاومة للهب ونقاط ضغط معززة للأداء طويل المدى.'
  },
  {
    icon: CogIcon,
    title: 'نظام معياري',
    description: 'نظام MOLLE قابل للتخصيص بالكامل مع نقاط ربط واسعة لتكوين المعدات الخاصة بالمهمة.'
  },
  {
    icon: BoltIcon,
    title: 'نشر سريع',
    description: 'تصميم ارتداء سريع مع أنظمة تحرير طوارئ للنشر السريع وحالات الطوارئ.'
  }
]

const specifications = [
  { label: 'تركيب المواد', value: 'كوردورا 1000D بمواصفات عسكرية مع تعزيز كيفلار وطلاء مقاوم للهب' },
  { label: 'مستوى الحماية', value: 'متوافق مع NIJ المستوى IIIA+، حماية متعددة التهديدات تشمل مقاومة الطعن والوخز' },
  { label: 'الوزن', value: '2.1-3.2 كجم حسب تكوين الدرع والإكسسوارات' },
  { label: 'نطاق المقاسات', value: 'XS - 5XL مع أنظمة جذع وكتف قابلة للتعديل بالكامل' },
  { label: 'خيارات الألوان', value: 'أسود تكتيكي، أخضر OD، بني كويوت، MultiCam (أنماط مخصصة متاحة)' },
  { label: 'تكوين الجيوب', value: '12-16 جيب معياري، نظام ترطيب متكامل، منافذ اتصال' },
  { label: 'الميزات الخاصة', value: 'متوافق مع MOLLE/PALS، مقبض سحب، تحرير طوارئ، توافق مع الرؤية الليلية' }
]

const includedItems = [
  'سترة أمنية تكتيكية للخدمة الشاقة',
  'إدراجات لوحة مقاومة للرصاص (المستوى IIIA)',
  'نظام جيوب معياري',
  'نظام تحرير طوارئ',
  'مجموعة مقبض السحب',
  'دليل المعدات التكتيكية من UNEOM',
  'دليل القياس المهني'
]

const idealForOperations = [
  { name: 'الأمن عالي المخاطر', icon: ExclamationTriangleIcon },
  { name: 'حماية الشخصيات المهمة', icon: ShieldCheckIcon },
  { name: 'مكافحة الإرهاب', icon: BoltIcon },
  { name: 'العمليات الخاصة', icon: CogIcon },
  { name: 'الاستجابة للطوارئ', icon: WrenchScrewdriverIcon }
]

const relatedProducts = [
  {
    name: 'سترة تكتيكية احترافية',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/ar/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'ابتداءً من 350 ر.س'
  },
  {
    name: 'جاكيت أمني تكتيكي',
    image: '/images/products/security/tactical-security-jacket-main.jpg',
    href: '/ar/shop/security-uniforms/security-patrol-jacket/tactical/',
    price: 'ابتداءً من 320 ر.س'
  },
  {
    name: 'طقم إكسسوارات تكتيكية',
    image: '/images/products/security/tactical-accessories-kit.jpg',
    href: '/ar/shop/security-accessories/tactical-kit/',
    price: 'ابتداءً من 200 ر.س'
  }
]

export default function HeavyDutyTacticalVestPageAR() {
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
            <span className="text-gray-900">سترة تكتيكية للخدمة الشاقة</span>
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
                  src="/images/products/security/heavy-duty-tactical-vest-main.jpg"
                  alt="سترة أمنية تكتيكية للخدمة الشاقة"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-red-600 cursor-pointer">
                    <Image
                      src={`/images/products/security/heavy-duty-tactical-vest-detail-${i}.jpg`}
                      alt={`تفاصيل السترة التكتيكية للخدمة الشاقة ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(أداء بمواصفات عسكرية)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                سترة أمنية تكتيكية للخدمة الشاقة
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                هيمن على العمليات الأمنية عالية المخاطر مع السترة الأمنية التكتيكية للخدمة الشاقة من UNEOM. مهندسة للظروف القاسية والحماية القصوى، هذه السترة بمواصفات عسكرية توفر أمناً لا يتزعزع للعمليات الأكثر تطلباً في القطاع الأمني السعودي.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-red-600">ابتداءً من 450 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للسترة الواحدة</span>
              </div>
              
              <div className="p-4 bg-red-50 border-r-4 border-red-600 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-red-700">
                      <strong>حماية بمواصفات عسكرية:</strong> هذه السترة تلبي المواصفات العسكرية للبيئات عالية التهديد. <Link href="/ar/resources/tactical-equipment-standards" className="font-medium underline hover:text-red-800">عرض معايير المعدات التكتيكية</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=heavy-duty-tactical-vest"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر للفريق التكتيكي
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <FireIcon className="h-5 w-5 ml-2 text-red-600" /> {/* Changed mr to ml for RTL */}
                  أضف إلى الترسانة التكتيكية
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">المزايا التكتيكية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية قصوى</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>متانة قصوى</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>نظام معياري</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>نشر سريع</span>
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
            مهندسة للعمليات الأمنية القاسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-red-600" />
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
            مبنية للعمليات الأمنية عالية المخاطر
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForOperations.map((operation, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <operation.icon className="h-10 w-10 text-red-600 mx-auto mb-3" />
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
            مواصفات السترة التكتيكية للخدمة الشاقة
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ميزات بمواصفات عسكرية</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تشمل الحزمة التكتيكية الكاملة</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="text-lg font-semibold text-red-700 mb-2">ضمان التكتيكي من UNEOM</h4>
                <p className="text-sm text-red-600">
                  كل سترة تكتيكية للخدمة الشاقة مبنية بمواصفات عسكرية، مما يضمن أقصى حماية وموثوقية في أكثر العمليات الأمنية تطلباً.
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
            أكمل ترسانتك التكتيكية
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600">{product.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            هيمن على العمليات عالية المخاطر مع المعدات بمواصفات عسكرية من UNEOM
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            انضم إلى قوات الأمن النخبة في جميع أنحاء المملكة العربية السعودية الذين يثقون في UNEOM لعملياتهم الأكثر أهمية. اختبر الحماية التي لا تتزعزع والتفوق التكتيكي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Tactical+Equipment+Inquiry"
              className="bg-white text-red-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر خبير المعدات التكتيكية
            </Link>
            <Link
              href="/ar/services/tactical-equipment-program"
              className="border-2 border-red-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-600 hover:border-white transition-colors text-lg"
            >
              برامج المعدات التكتيكية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}