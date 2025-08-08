import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  ClockIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  LockClosedIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم أمني محترف - معدات الأمن المتكاملة | يونيوم',
  description: 'طقم أمني محترف شامل يضم جميع المعدات والإكسسوارات الضرورية لرجال الأمن والحراسة في المملكة العربية السعودية',
  keywords: 'طقم أمني، معدات أمن، إكسسوارات أمنية، حراسة، أمن وحماية، معدات الأمن، المملكة العربية السعودية',
  openGraph: {
    title: 'طقم أمني محترف - معدات الأمن المتكاملة | يونيوم',
    description: 'طقم أمني محترف شامل يضم جميع المعدات والإكسسوارات الضرورية لرجال الأمن والحراسة',
    images: ['/images/products/security/professional-security-kit-ar.jpg'],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-accessories/professional-kit/',
    languages: {
      'en': 'https://uneom.com/shop/security-accessories/professional-kit/',
      'ar': 'https://uneom.com/ar/shop/security-accessories/professional-kit/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'طقم أمني محترف',
  description: 'طقم أمني محترف شامل يضم جميع المعدات والإكسسوارات الضرورية لرجال الأمن والحراسة',
  image: [
    'https://uneom.com/images/products/security/professional-security-kit-main.jpg',
    'https://uneom.com/images/products/security/professional-security-kit-contents.jpg',
    'https://uneom.com/images/products/security/professional-security-kit-features.jpg'
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
  category: 'معدات الأمن والحراسة',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم'
    },
    url: 'https://uneom.com/ar/shop/security-accessories/professional-kit/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'سعد الغامدي'
      },
      reviewBody: 'طقم ممتاز ومتكامل، جودة عالية وجميع المعدات ضرورية للعمل الأمني'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'عدد القطع',
      value: '12 قطعة'
    },
    {
      '@type': 'PropertyValue',
      name: 'المواد',
      value: 'جلد طبيعي ومعادن مقاومة للصدأ'
    },
    {
      '@type': 'PropertyValue',
      name: 'الضمان',
      value: 'سنتان'
    }
  ]
}

export default function ProfessionalSecurityKitAr() {
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
              <Link href="/ar/shop/security-accessories/" className="hover:text-blue-600">إكسسوارات الأمن</Link>
              <span>/</span>
              <span className="text-gray-900">طقم أمني محترف</span>
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
                    src="/images/products/security/professional-security-kit-main.jpg"
                    alt="طقم أمني محترف - الصورة الرئيسية"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/professional-security-kit-contents.jpg"
                      alt="محتويات الطقم الأمني"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/professional-security-kit-features.jpg"
                      alt="مميزات الطقم الأمني"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/professional-security-kit-case.jpg"
                      alt="حقيبة الطقم الأمني"
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    طقم أمني محترف
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    طقم شامل ومتكامل يضم جميع المعدات والإكسسوارات الضرورية لرجال الأمن والحراسة المحترفين
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(89 تقييم)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">المميزات الرئيسية</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">12 قطعة متكاملة</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <LockClosedIcon className="w-6 h-6 text-green-500" />
                      <span className="text-blue-800">جودة احترافية عالية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-6 h-6 text-purple-500" />
                      <span className="text-blue-800">تصميم عملي ومريح</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BoltIcon className="w-6 h-6 text-yellow-500" />
                      <span className="text-blue-800">مقاوم للاستخدام المكثف</span>
                    </div>
                  </div>
                </div>

                {/* Kit Contents */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">محتويات الطقم</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حزام أمني جلدي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة هاتف لاسلكي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة مفاتيح</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة كشاف يدوي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة أقلام</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة دفتر ملاحظات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة بطاقة هوية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حافظة أكياس بلاستيكية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حلقات معدنية للمفاتيح</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>مشابك متعددة الاستخدام</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>حقيبة حمل مقاومة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>دليل الاستخدام</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    طلب عرض سعر مخصص
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                    إضافة إلى قائمة الطلبات
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">شحن مجاني</p>
                    <p className="text-sm text-green-600">للطلبات أكثر من 300 ريال</p>
                  </div>
                </div>

                {/* Warranty Info */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-800">ضمان سنتان</p>
                    <p className="text-sm text-blue-600">ضمان شامل على جميع القطع</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات التقنية</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">عدد القطع</span>
                    <span className="text-gray-600">12 قطعة</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">مادة الحزام</span>
                    <span className="text-gray-600">جلد طبيعي عالي الجودة</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المشابك</span>
                    <span className="text-gray-600">معدن مقاوم للصدأ</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">اللون</span>
                    <span className="text-gray-600">أسود احترافي</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المقاسات</span>
                    <span className="text-gray-600">قابل للتعديل</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الضمان</span>
                    <span className="text-gray-600">سنتان شاملة</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المميزات والفوائد</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">تصميم احترافي</h4>
                      <p className="text-gray-600">مظهر أنيق ومهني يناسب جميع بيئات العمل الأمني</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">راحة في الاستخدام</h4>
                      <p className="text-gray-600">تصميم مريح يسمح بحرية الحركة أثناء العمل</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">تنظيم مثالي</h4>
                      <p className="text-gray-600">حافظات منظمة لجميع المعدات والأدوات الضرورية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">متانة عالية</h4>
                      <p className="text-gray-600">مواد عالية الجودة تتحمل الاستخدام المكثف</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">سهولة الصيانة</h4>
                      <p className="text-gray-600">سهل التنظيف والصيانة مع الحفاظ على المظهر</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مجالات الاستخدام</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">الأمن الخاص</h4>
                    <p className="text-blue-800 text-sm">مثالي لشركات الأمن والحراسة الخاصة</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">أمن المنشآت</h4>
                    <p className="text-green-800 text-sm">حراسة المباني والمجمعات التجارية</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">الأمن الصناعي</h4>
                    <p className="text-purple-800 text-sm">حماية المصانع والمنشآت الصناعية</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">أمن الفعاليات</h4>
                    <p className="text-orange-800 text-sm">تأمين المؤتمرات والفعاليات الخاصة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">آراء العملاء</h2>
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
                  "طقم ممتاز ومتكامل، جودة عالية وجميع المعدات ضرورية للعمل الأمني. أنصح به بشدة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">سعد الغامدي</p>
                  <p>ضابط أمن - شركة الراجحي</p>
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
                  "تنظيم رائع وجودة ممتازة. الحزام مريح جداً والحافظات عملية ومفيدة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">فهد العتيبي</p>
                  <p>رئيس أمن - مجمع العثيم</p>
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
                  "استثمار ممتاز للعاملين في مجال الأمن. جودة احترافية وسعر مناسب."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">خالد الشهري</p>
                  <p>مدير أمن - مستشفى الملك فهد</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جهز فريقك الأمني بأفضل المعدات
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على طقم أمني محترف لضمان أداء متميز وحماية فعالة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/contact/"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                تواصل معنا
              </Link>
              <Link
                href="/ar/quote/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}