import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CloudIcon, 
  ShieldCheckIcon, 
  SunIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  ClockIcon,
  EyeIcon,
  FireIcon,
  UserGroupIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم الحماية من الطقس - إكسسوارات أمنية متخصصة | يونيوم',
  description: 'طقم شامل للحماية من الطقس مصمم لرجال الأمن والحراسة في جميع الظروف الجوية. مقاوم للمطر والرياح والحرارة في المملكة العربية السعودية',
  keywords: 'طقم حماية طقس، إكسسوارات أمنية، حماية من المطر، ملابس أمنية، معدات أمن، طقس سيء، المملكة العربية السعودية، الرياض، جدة',
  openGraph: {
    title: 'طقم الحماية من الطقس - إكسسوارات أمنية متخصصة | يونيوم',
    description: 'طقم شامل للحماية من الطقس مصمم لرجال الأمن والحراسة في جميع الظروف الجوية',
    images: ['/images/products/security/weather-protection-kit-ar.jpg'],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-accessories/weather-protection-kit/',
    languages: {
      'en': 'https://uneom.com/shop/security-accessories/weather-protection-kit/',
      'ar': 'https://uneom.com/ar/shop/security-accessories/weather-protection-kit/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'طقم الحماية من الطقس',
  description: 'طقم شامل للحماية من الطقس مصمم لرجال الأمن والحراسة في جميع الظروف الجوية',
  image: [
    'https://uneom.com/images/products/security/weather-protection-kit-main.jpg',
    'https://uneom.com/images/products/security/weather-protection-kit-components.jpg',
    'https://uneom.com/images/products/security/weather-protection-kit-action.jpg'
  ],
  brand: {
    '@type': 'Brand',
    name: 'يونيوم'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'يونيوم',
    url: 'https://uneom.com/ar/'
  },
  category: 'إكسسوارات أمنية',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم'
    },
    url: 'https://uneom.com/ar/shop/security-accessories/weather-protection-kit/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '112',
    bestRating: '5',
    worstRating: '1'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'المكونات',
      value: '9 قطع للحماية الشاملة'
    },
    {
      '@type': 'PropertyValue',
      name: 'المقاومة',
      value: 'مقاوم للماء والرياح والحرارة'
    },
    {
      '@type': 'PropertyValue',
      name: 'الاستخدام',
      value: 'جميع الظروف الجوية'
    }
  ]
}

export default function WeatherProtectionKitAr() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50" dir="rtl">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/ar/" className="hover:text-blue-600">الرئيسية</Link>
              <span>/</span>
              <Link href="/ar/shop/" className="hover:text-blue-600">المتجر</Link>
              <span>/</span>
              <Link href="/ar/shop/security-accessories/" className="hover:text-blue-600">إكسسوارات أمنية</Link>
              <span>/</span>
              <span className="text-gray-900">طقم الحماية من الطقس</span>
            </div>
          </div>
        </nav>

        {/* Product Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/security/weather-protection-kit-main.jpg"
                    alt="طقم الحماية من الطقس - الصورة الرئيسية"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/weather-protection-kit-components.jpg"
                      alt="مكونات طقم الحماية"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/weather-protection-kit-action.jpg"
                      alt="الطقم أثناء الاستخدام"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/weather-protection-kit-details.jpg"
                      alt="تفاصيل طقم الحماية"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CloudIcon className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      حماية شاملة من الطقس
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    طقم الحماية من الطقس
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    طقم شامل للحماية من جميع الظروف الجوية مصمم خصيصاً لرجال الأمن والحراسة، يوفر الحماية الكاملة من المطر والرياح والحرارة والبرد
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(112 تقييم)</span>
                  </div>
                </div>

                {/* Weather Protection Features */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">مميزات الحماية من الطقس</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CloudIcon className="w-6 h-6 text-blue-600" />
                      <span className="text-blue-800">مقاوم للمطر</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SunIcon className="w-6 h-6 text-yellow-600" />
                      <span className="text-blue-800">حماية من الحرارة</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-6 h-6 text-cyan-600" />
                      <span className="text-blue-800">رؤية واضحة</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">حماية شاملة</span>
                    </div>
                  </div>
                </div>

                {/* Kit Components */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">مكونات الطقم (9 قطع)</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">معطف مقاوم للمطر</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">بنطلون مقاوم للماء</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">قبعة واقية</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">قفازات مقاومة للماء</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">أحذية مطاطية</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">نظارات واقية</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">كمامة تنفس</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">حقيبة تخزين</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      <span className="text-gray-800">دليل الاستخدام</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className="border-2 border-gray-300 rounded-lg py-3 text-center font-semibold hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weather Conditions */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">مناسب للظروف الجوية</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CloudIcon className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-800">المطر الغزير</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SunIcon className="w-6 h-6 text-yellow-600" />
                      <span className="text-gray-800">الحرارة العالية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-6 h-6 text-gray-600" />
                      <span className="text-gray-800">الرياح القوية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BeakerIcon className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-800">العواصف الترابية</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    طلب عرض سعر للطقم الكامل
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                    إضافة إلى قائمة الطلبات
                  </button>
                </div>

                {/* Service Features */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                    <TruckIcon className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">تسليم سريع</p>
                      <p className="text-sm text-green-600">خلال 2-4 أيام عمل</p>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg flex items-center gap-3">
                    <ClockIcon className="w-6 h-6 text-orange-600" />
                    <div>
                      <p className="font-semibold text-orange-800">ضمان شامل</p>
                      <p className="text-sm text-orange-600">ضمان سنة كاملة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مواصفات الطقم</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">عدد القطع</span>
                    <span className="text-gray-600">9 قطع</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المادة</span>
                    <span className="text-gray-600">مواد مقاومة للماء</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">مقاومة الماء</span>
                    <span className="text-gray-600">IPX6</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">درجة الحرارة</span>
                    <span className="text-gray-600">-20°C إلى +50°C</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الوزن</span>
                    <span className="text-gray-600">2.5 كيلوجرام</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المعايير</span>
                    <span className="text-gray-600">EN 343, ISO 20471</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مميزات الحماية</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">حماية شاملة</h4>
                      <p className="text-gray-600">حماية كاملة من جميع الظروف الجوية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">مقاومة فائقة</h4>
                      <p className="text-gray-600">مقاوم للماء والرياح والأتربة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">راحة الاستخدام</h4>
                      <p className="text-gray-600">تصميم مريح لساعات العمل الطويلة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">سهولة التخزين</h4>
                      <p className="text-gray-600">حقيبة تخزين مدمجة ومنظمة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">متانة عالية</h4>
                      <p className="text-gray-600">مواد عالية الجودة تتحمل الاستخدام الشاق</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مجالات الاستخدام</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">الدوريات الخارجية</h4>
                    <p className="text-blue-800 text-sm">للدوريات الأمنية في الطقس السيء</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 mb-2">حراسة المنشآت</h4>
                    <p className="text-cyan-800 text-sm">لحراسة المنشآت الخارجية</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">العمليات الطارئة</h4>
                    <p className="text-gray-800 text-sm">للاستجابة السريعة في الطوارئ</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">المهام الخاصة</h4>
                    <p className="text-green-800 text-sm">للمهام الأمنية في البيئات القاسية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">آراء رجال الأمن</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "طقم ممتاز للعمل في الطقس السيء، حماية شاملة ومريح جداً. أنصح به لجميع رجال الأمن."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">سعد الغامدي</p>
                  <p>رجل أمن - دورية خارجية</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                    <StarIcon className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-600">4/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "جودة عالية ومقاومة ممتازة للماء، ساعدني كثيراً أثناء موسم الأمطار. طقم شامل ومفيد."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">عبدالله الحربي</p>
                  <p>حارس أمن - منشأة صناعية</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "طقم احترافي بمواصفات عالية، يوفر الحماية الكاملة في جميع الظروف. استثمار ممتاز."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">محمد القحطاني</p>
                  <p>مشرف أمن - مجمع تجاري</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              احمِ فريقك من جميع الظروف الجوية
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على طقم الحماية الشامل من الطقس لضمان سلامة وراحة رجال الأمن
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <PhoneIcon className="w-6 h-6" />
                طلب عرض سعر فوري
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                استشارة مجانية
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}