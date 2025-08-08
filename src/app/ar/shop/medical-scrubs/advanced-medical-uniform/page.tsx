import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  BeakerIcon,
  SparklesIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي طبي متقدم - أزياء طبية عالية الجودة | يونيوم',
  description: 'زي طبي متقدم مصمم خصيصاً للمهنيين الطبيين، يجمع بين الراحة والحماية والأناقة المهنية في المملكة العربية السعودية',
  keywords: 'زي طبي، سكرابز طبية، ملابس طبية، زي مستشفى، ملابس تمريض، أزياء طبية، المملكة العربية السعودية',
  openGraph: {
    title: 'زي طبي متقدم - أزياء طبية عالية الجودة | يونيوم',
    description: 'زي طبي متقدم مصمم خصيصاً للمهنيين الطبيين، يجمع بين الراحة والحماية والأناقة المهنية',
    images: ['/images/products/medical/advanced-medical-uniform-ar.jpg'],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/medical-scrubs/advanced-medical-uniform/',
    languages: {
      'en': 'https://uneom.com/shop/medical-scrubs/advanced-medical-uniform/',
      'ar': 'https://uneom.com/ar/shop/medical-scrubs/advanced-medical-uniform/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'زي طبي متقدم',
  description: 'زي طبي متقدم مصمم خصيصاً للمهنيين الطبيين، يجمع بين الراحة والحماية والأناقة المهنية',
  image: [
    'https://uneom.com/images/products/medical/advanced-medical-uniform-main.jpg',
    'https://uneom.com/images/products/medical/advanced-medical-uniform-details.jpg',
    'https://uneom.com/images/products/medical/advanced-medical-uniform-colors.jpg'
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
  category: 'الأزياء الطبية',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'يونيوم'
    },
    url: 'https://uneom.com/ar/shop/medical-scrubs/advanced-medical-uniform/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156',
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
        name: 'د. فاطمة الزهراني'
      },
      reviewBody: 'زي طبي ممتاز ومريح جداً، جودة عالية ومناسب للعمل الطويل في المستشفى'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'المادة',
      value: 'قطن مخلوط بالبوليستر'
    },
    {
      '@type': 'PropertyValue',
      name: 'الخصائص',
      value: 'مضاد للبكتيريا ومقاوم للبقع'
    },
    {
      '@type': 'PropertyValue',
      name: 'العناية',
      value: 'قابل للغسيل في الغسالة'
    }
  ]
}

export default function AdvancedMedicalUniformAr() {
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
              <Link href="/ar/shop/medical-scrubs/" className="hover:text-blue-600">الأزياء الطبية</Link>
              <span>/</span>
              <span className="text-gray-900">زي طبي متقدم</span>
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
                    src="/images/products/medical/advanced-medical-uniform-main.jpg"
                    alt="زي طبي متقدم - الصورة الرئيسية"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/medical/advanced-medical-uniform-details.jpg"
                      alt="تفاصيل الزي الطبي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/medical/advanced-medical-uniform-colors.jpg"
                      alt="ألوان الزي الطبي"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/medical/advanced-medical-uniform-features.jpg"
                      alt="مميزات الزي الطبي"
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
                    زي طبي متقدم
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    زي طبي عالي الجودة مصمم خصيصاً للمهنيين الطبيين، يجمع بين الراحة القصوى والحماية المتقدمة والأناقة المهنية
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
                    <span className="text-sm text-gray-600">(156 تقييم)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">المميزات الطبية المتقدمة</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <BeakerIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">مضاد للبكتيريا</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SparklesIcon className="w-6 h-6 text-green-500" />
                      <span className="text-blue-800">مقاوم للبقع</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HeartIcon className="w-6 h-6 text-red-500" />
                      <span className="text-blue-800">راحة طوال اليوم</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-purple-500" />
                      <span className="text-blue-800">حماية متقدمة</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                  <div className="grid grid-cols-6 gap-3">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className="border-2 border-gray-300 rounded-lg py-3 text-center font-semibold hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون</h3>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-blue-500 rounded-full border-4 border-blue-200"></button>
                    <button className="w-12 h-12 bg-green-500 rounded-full border-4 border-transparent hover:border-green-300"></button>
                    <button className="w-12 h-12 bg-purple-500 rounded-full border-4 border-transparent hover:border-purple-300"></button>
                    <button className="w-12 h-12 bg-pink-500 rounded-full border-4 border-transparent hover:border-pink-300"></button>
                    <button className="w-12 h-12 bg-gray-600 rounded-full border-4 border-transparent hover:border-gray-300"></button>
                    <button className="w-12 h-12 bg-white rounded-full border-4 border-transparent hover:border-gray-300 shadow-md"></button>
                  </div>
                </div>

                {/* Set Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">خيارات الطقم</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="set" className="w-4 h-4 text-blue-600" defaultChecked />
                      <div>
                        <span className="font-medium">بلوزة فقط</span>
                        <p className="text-sm text-gray-600">بلوزة طبية متقدمة</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="set" className="w-4 h-4 text-blue-600" />
                      <div>
                        <span className="font-medium">بنطلون فقط</span>
                        <p className="text-sm text-gray-600">بنطلون طبي مريح</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="set" className="w-4 h-4 text-blue-600" />
                      <div>
                        <span className="font-medium">طقم كامل</span>
                        <p className="text-sm text-gray-600">بلوزة + بنطلون (خصم 15%)</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    طلب عرض سعر للمستشفيات
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
                    <p className="text-sm text-green-600">للطلبات أكثر من 200 ريال</p>
                  </div>
                </div>

                {/* Medical Certification */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
                  <BeakerIcon className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-800">معتمد طبياً</p>
                    <p className="text-sm text-blue-600">مطابق للمعايير الطبية السعودية</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات الطبية</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">المادة</span>
                    <span className="text-gray-600">65% قطن + 35% بوليستر</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الوزن</span>
                    <span className="text-gray-600">180 جرام/متر مربع</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الخصائص</span>
                    <span className="text-gray-600">مضاد للبكتيريا</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">مقاومة البقع</span>
                    <span className="text-gray-600">عالية</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">العناية</span>
                    <span className="text-gray-600">قابل للغسيل 60°م</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">الألوان المتاحة</span>
                    <span className="text-gray-600">6 ألوان</span>
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
                      <h4 className="font-semibold text-gray-900">راحة استثنائية</h4>
                      <p className="text-gray-600">قماش مرن ومسامي يوفر راحة طوال اليوم</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">حماية متقدمة</h4>
                      <p className="text-gray-600">مقاوم للبكتيريا والفيروسات والبقع</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">تصميم عملي</h4>
                      <p className="text-gray-600">جيوب متعددة ومناسبة للأدوات الطبية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">سهولة العناية</h4>
                      <p className="text-gray-600">قابل للغسيل المتكرر مع الحفاظ على الجودة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">مظهر مهني</h4>
                      <p className="text-gray-600">تصميم أنيق يعكس الاحترافية الطبية</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">مجالات الاستخدام</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">المستشفيات العامة</h4>
                    <p className="text-blue-800 text-sm">مناسب لجميع الأقسام الطبية والجراحية</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">العيادات الخاصة</h4>
                    <p className="text-green-800 text-sm">مثالي للعيادات والمراكز الطبية</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">المختبرات الطبية</h4>
                    <p className="text-purple-800 text-sm">حماية إضافية للعمل في المختبرات</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-900 mb-2">طب الأسنان</h4>
                    <p className="text-pink-800 text-sm">مقاوم للمواد الكيميائية المستخدمة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">دليل المقاسات</h2>
              <p className="text-xl text-gray-600">اختر المقاس المناسب لضمان الراحة المثلى</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">مقاسات البلوزة</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-right py-3">المقاس</th>
                        <th className="text-right py-3">الصدر (سم)</th>
                        <th className="text-right py-3">الطول (سم)</th>
                        <th className="text-right py-3">الكم (سم)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XS</td>
                        <td className="py-3">86-90</td>
                        <td className="py-3">62</td>
                        <td className="py-3">58</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">S</td>
                        <td className="py-3">90-94</td>
                        <td className="py-3">64</td>
                        <td className="py-3">60</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">M</td>
                        <td className="py-3">94-98</td>
                        <td className="py-3">66</td>
                        <td className="py-3">62</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">L</td>
                        <td className="py-3">98-102</td>
                        <td className="py-3">68</td>
                        <td className="py-3">64</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XL</td>
                        <td className="py-3">102-106</td>
                        <td className="py-3">70</td>
                        <td className="py-3">66</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">XXL</td>
                        <td className="py-3">106-110</td>
                        <td className="py-3">72</td>
                        <td className="py-3">68</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">مقاسات البنطلون</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-right py-3">المقاس</th>
                        <th className="text-right py-3">الخصر (سم)</th>
                        <th className="text-right py-3">الورك (سم)</th>
                        <th className="text-right py-3">الطول (سم)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XS</td>
                        <td className="py-3">66-70</td>
                        <td className="py-3">90-94</td>
                        <td className="py-3">100</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">S</td>
                        <td className="py-3">70-74</td>
                        <td className="py-3">94-98</td>
                        <td className="py-3">102</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">M</td>
                        <td className="py-3">74-78</td>
                        <td className="py-3">98-102</td>
                        <td className="py-3">104</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">L</td>
                        <td className="py-3">78-82</td>
                        <td className="py-3">102-106</td>
                        <td className="py-3">106</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XL</td>
                        <td className="py-3">82-86</td>
                        <td className="py-3">106-110</td>
                        <td className="py-3">108</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">XXL</td>
                        <td className="py-3">86-90</td>
                        <td className="py-3">110-114</td>
                        <td className="py-3">110</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">آراء المهنيين الطبيين</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "زي طبي ممتاز ومريح جداً، جودة عالية ومناسب للعمل الطويل في المستشفى. أنصح به بشدة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">د. فاطمة الزهراني</p>
                  <p>طبيبة باطنية - مستشفى الملك فيصل</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "قماش ممتاز ومقاوم للبقع، سهل التنظيف ويحافظ على شكله بعد الغسيل المتكرر."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">أ. سارة المطيري</p>
                  <p>ممرضة أولى - مستشفى الملك عبدالعزيز</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "تصميم عملي وأنيق، الجيوب مفيدة جداً والقماش مريح حتى في الأجواء الحارة."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">د. أحمد الغامدي</p>
                  <p>طبيب طوارئ - مستشفى الملك خالد</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جهز فريقك الطبي بأفضل الأزياء
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على أزياء طبية عالية الجودة تضمن الراحة والحماية والمظهر المهني
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
                طلب عرض سعر للمستشفيات
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}