import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  ShieldCheckIcon, 
  CogIcon, 
  FireIcon, 
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'أفرول صيانة شديد التحمل | ملابس عمل صناعية متينة | UNEOM',
  description: 'يوفر أفرول الصيانة شديد التحمل من UNEOM أقصى حماية ومتانة للأعمال الصناعية الشاقة في المملكة العربية السعودية. تتوفر خيارات مقاومة للهب ومعززة.',
  keywords: 'أفرول شديد التحمل, زي صيانة, ملابس عمل صناعية, أفرول متين, أفرول مقاوم للهب, صيانة مصانع سعودية, أفرول واقٍ, ملابس عمل UNEOM',
  openGraph: {
    title: 'أفرول صيانة شديد التحمل | UNEOM',
    description: 'حماية ومتانة قصوى لمتخصصي الصيانة الصناعية في المملكة العربية السعودية.',
    images: ['/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'حماية قصوى لكامل الجسم',
    description: 'يوفر تغطية شاملة ضد الأوساخ والشحوم والأتربة ومخاطر العمل البسيطة.'
  },
  {
    icon: CogIcon,
    title: 'متانة فائقة',
    description: 'مصنوع من أقمشة فائقة القوة ودرزات معززة لتحمل أصعب مهام الصيانة.'
  },
  {
    icon: FireIcon,
    title: 'خيارات مقاومة للهب',
    description: 'متوفر بمواد معالجة لمقاومة اللهب تلبي معايير السلامة الصناعية للبيئات الخطرة.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'عملي للفنيين',
    description: 'جيوب أدوات متعددة، حلقات للمعدات، وتصميم سهل الوصول للعمل بكفاءة.'
  }
]

const specifications = [
  { label: 'خيارات القماش', value: 'قطن دريل شديد التحمل (280-320 جم/م²)، مزيج بولي-قطن، أقمشة معالجة مقاومة للهب (مثال: Proban®, Pyrovatex®)' },
  { label: 'التعزيزات', value: 'درزات مزدوجة/ثلاثية، تثبيت إضافي عند نقاط الضغط، رقع ركبة معززة، سحابات شديدة التحمل' },
  { label: 'الألوان المتاحة', value: 'كحلي، برتقالي، أحمر، رمادي، كاكي (ألوان مخصصة متاحة للطلبات الكبيرة)' },
  { label: 'المقاسات', value: 'S - 6XL، مع خيارات للمقاسات العادية والطويلة' },
  { label: 'الميزات الرئيسية', value: 'ظهر عملي للمرونة، خصر مرن، جيوب متعددة على الصدر والساق والذراع، واجهة أمامية بكباسين مخفية' },
  { label: 'امتثال السلامة', value: 'خيارات لـ EN ISO 11612 (مقاومة اللهب)، EN ISO 20471 (عالية الوضوح)، EN 1149 (مضادة للكهرباء الساكنة)' },
  { label: 'التخصيص', value: 'تطريز/طباعة، شريط عاكس، تكوينات جيوب مخصصة، حلقات بطاقة هوية' }
]

const includedItems = [
  'أفرول صيانة شديد التحمل',
  'غطاء رأس اختياري قابل للفصل',
  'دليل العناية بملابس العمل الصناعية من UNEOM',
  'شهادة المطابقة (للإصدارات المقاومة للهب/المتخصصة)'
]

const idealForSectors = [
  { name: 'صيانة النفط والغاز', icon: FireIcon },
  { name: 'إصلاح الآلات الثقيلة', icon: CogIcon },
  { name: 'صيانة المنشآت الصناعية', icon: UserGroupIcon },
  { name: 'اللحام والتصنيع المعدني', icon: ShieldCheckIcon },
  { name: 'صيانة السيارات والأساطيل', icon: WrenchScrewdriverIcon }
]

const relatedProducts = [
  {
    name: 'زي صيانة كهربائية',
    image: '/images/products/industrial/electrical-maintenance-uniform.jpg',
    href: '/ar/shop/manufacturing-workwear/maintenance-uniform/electrical-maintenance/',
    price: 'ابتداءً من 280 ر.س'
  },
  {
    name: 'طقم زي صيانة ميكانيكية',
    image: '/images/products/industrial/mechanical-maintenance-set.jpg',
    href: '/ar/shop/manufacturing-workwear/maintenance-uniform/mechanical-set/',
    price: 'ابتداءً من 250 ر.س'
  },
  {
    name: 'أحذية سلامة صناعية',
    image: '/images/products/footwear/industrial-safety-boots.jpg', // صورة مؤقتة
    href: '/ar/shop/safety-footwear/industrial-boots/', // رابط مؤقت
    price: 'ابتداءً من 180 ر.س'
  }
]

export default function HeavyDutyCoverallPageAR() {
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
            <Link href="/ar/shop/manufacturing-workwear/" className="hover:text-blue-600">ملابس عمل التصنيع</Link>
            <span>/</span>
            <Link href="/ar/shop/manufacturing-workwear/maintenance-uniform/" className="hover:text-blue-600">زي الصيانة</Link>
            <span>/</span>
            <span className="text-gray-900">أفرول شديد التحمل</span>
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
                  src="/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg"
                  alt="أفرول صيانة شديد التحمل"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-red-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/heavy-duty-coverall-detail-${i}.jpg`}
                      alt={`تفاصيل أفرول شديد التحمل ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(الأعلى تقييمًا للمتانة والحماية)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                أفرول صيانة شديد التحمل
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                عندما تتطلب المهمة أقصى درجات الحماية والمرونة، فإن أفرول الصيانة شديد التحمل من UNEOM هو الخيار الأمثل. مصمم لأصعب مهام الصيانة الصناعية في المملكة العربية السعودية، ويوفر متانة وميزات سلامة فائقة.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-red-600">ابتداءً من 290 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للوحدة</span>
              </div>
              
              <div className="p-4 bg-red-50 border-r-4 border-red-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FireIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-red-700">
                      <strong>خيارات مقاومة للهب متاحة:</strong> احمِ فريقك في البيئات عالية الخطورة. استفسر عن أفرولاتنا المعالجة لمقاومة اللهب. <Link href="/ar/contact?subject=FR+Coverall+Inquiry" className="font-medium underline hover:text-red-800">اطلب المواصفات المقاومة للهب</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=heavy-duty-maintenance-coverall"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex-1 text-center"
                >
                  اطلب عرض سعر للكميات
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى قائمة معدات الوقاية الشخصية
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">مزايا الحماية الرئيسية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية كاملة للجسم من المخاطر</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>بنية فائقة المتانة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مقاومة اختيارية للهب</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>عملي للفنيين</span>
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
            مصمم للظروف الصناعية القاسية
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

      {/* Ideal For Sectors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            موثوق به من قبل متخصصي الصيانة في مختلف القطاعات السعودية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForSectors.map((sector, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <sector.icon className="h-10 w-10 text-red-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{sector.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات أفرول الصيانة شديد التحمل
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تفاصيل المواد والمتانة</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ما يتضمنه طلبك</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-700 mb-2">ضمان UNEOM للجودة الصناعية</h4>
                <p className="text-sm text-orange-600">
                  صُممت أفرولاتنا شديدة التحمل لتتجاوز التوقعات في المتانة وطول العمر، مما يوفر حماية موثوقة يوماً بعد يوم.
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
            أكمل معدات الوقاية الشخصية لفريق الصيانة لديك
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
            استثمر في حماية لا تهاون فيها لطاقم الصيانة لديك
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            أفرولات UNEOM شديدة التحمل هي المعيار الصناعي للسلامة والمتانة في المملكة العربية السعودية. اتصل بنا لتجهيز فريقك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Heavy-Duty+Coverall+Inquiry"
              className="bg-white text-red-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              احصل على عرض سعر لفريقك
            </Link>
            <Link
              href="/ar/services/ppe-program-management" // رابط مؤقت
              className="border-2 border-red-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-600 hover:border-white transition-colors text-lg"
            >
              تعرف على برامج معدات الوقاية الشخصية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}