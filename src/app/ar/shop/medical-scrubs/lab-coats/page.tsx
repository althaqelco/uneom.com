import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BeakerIcon,
  UserIcon,
  SparklesIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'معاطف مختبر احترافية | زي مختبرات طبية | UNEOM',
  description: 'توفر معاطف المختبر الاحترافية من UNEOM حماية وراحة فائقة للمتخصصين الطبيين في المملكة العربية السعودية. أزياء مختبرات عالية الجودة مصممة للتميز في الرعاية الصحية.',
  keywords: 'معاطف مختبر, زي مختبرات طبية, ملابس رعاية صحية, ملابس مختبر احترافية, زي طبي سعودي, ملابس مختبرات, سكرابز طبية UNEOM, معاطف أطباء',
  openGraph: {
    title: 'معاطف مختبر احترافية للمتخصصين الطبيين | UNEOM',
    description: 'معاطف مختبر فاخرة مصممة للمتخصصين الطبيين وفنيي المختبرات في المرافق الصحية السعودية.',
    images: ['/images/products/medical/lab-coats-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'حماية فائقة',
    description: 'حماية متقدمة من الأقمشة ضد الانسكابات والبقع والتلوث في بيئات المختبرات.'
  },
  {
    icon: BeakerIcon,
    title: 'محسن للمختبرات',
    description: 'مصمم خصيصاً لعمل المختبرات مع خصائص مقاومة للمواد الكيميائية وسهولة التنظيف.'
  },
  {
    icon: SparklesIcon,
    title: 'مظهر احترافي',
    description: 'مظهر نظيف ومقرمش يحافظ على الاحترافية طوال النوبات الطويلة.'
  },
  {
    icon: UserIcon,
    title: 'راحة وحرية حركة',
    description: 'تصميم مريح يسمح بنطاق حركة كامل للإجراءات المختبرية الدقيقة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '100% قطن أو مزيج بولي-قطن (65% بوليستر، 35% قطن)' },
  { label: 'الوزن', value: '200-240 جم/م² للمتانة والراحة' },
  { label: 'الأنماط المتاحة', value: 'معطف مختبر تقليدي، معطف استشارة، معطف مختبر للجنسين، معطف نسائي مفصل' },
  { label: 'خيارات الطول', value: 'طول الركبة (37")، منتصف الفخذ (32")، طول الورك (28")' },
  { label: 'الألوان', value: 'أبيض كلاسيكي، أزرق فاتح، كحلي (ألوان مخصصة متاحة)' },
  { label: 'المقاسات', value: 'XS - 5XL، مع خيارات صغيرة وطويلة' },
  { label: 'الميزات الرئيسية', value: 'جيوب متعددة، فتحات أقلام، جيب لوحي، أساور قابلة للتعديل، درزات معززة' }
]

const includedItems = [
  'معطف مختبر احترافي',
  'تعليمات العناية للملابس الطبية',
  'دليل الزي الصحي من UNEOM',
  'جدول المقاسات ودليل القياس'
]

const idealForProfessionals = [
  { name: 'الأطباء', icon: UserIcon },
  { name: 'فنيو المختبرات', icon: BeakerIcon },
  { name: 'علماء الأبحاث', icon: MagnifyingGlassIcon },
  { name: 'طلاب الطب', icon: AcademicCapIcon },
  { name: 'متخصصو الرعاية الصحية', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'طقم زي ممرضة',
    image: '/images/products/medical/nurse-uniform-main.jpg',
    href: '/ar/shop/medical-scrubs/nurse-uniform/',
    price: 'ابتداءً من 180 ر.س'
  },
  {
    name: 'سكرابز طبية فاخرة',
    image: '/images/products/medical/premium-medical-scrubs-main.jpg',
    href: '/ar/shop/medical-scrubs/premium-medical-scrubs/',
    price: 'ابتداءً من 220 ر.س'
  },
  {
    name: 'سكرابز جراحية',
    image: '/images/products/medical/surgical-scrubs-main.jpg',
    href: '/ar/shop/medical-scrubs/surgical-scrubs/',
    price: 'ابتداءً من 200 ر.س'
  }
]

export default function LabCoatsPageAR() {
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
            <Link href="/ar/shop/medical-scrubs/" className="hover:text-blue-600">السكرابز الطبية</Link>
            <span>/</span>
            <span className="text-gray-900">معاطف المختبر</span>
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
                  src="/images/products/medical/lab-coats-main.jpg"
                  alt="معاطف مختبر احترافية"
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
                      src={`/images/products/medical/lab-coat-detail-${i}.jpg`}
                      alt={`تفاصيل معطف المختبر ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(موثوق من قبل المتخصصين الصحيين)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                معاطف مختبر احترافية
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ارتق بصورتك المهنية مع معاطف المختبر الفاخرة من UNEOM. مصممة للمتخصصين الطبيين وفنيي المختبرات في المملكة العربية السعودية، تجمع معاطف المختبر لدينا بين الحماية الفائقة والراحة الاستثنائية والأناقة.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">ابتداءً من 160 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">لمعطف المختبر الواحد</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-r-4 border-blue-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-blue-700">
                      <strong>جودة درجة الرعاية الصحية:</strong> معاطف المختبر لدينا تلبي معايير الرعاية الصحية الصارمة للسلامة والنظافة. <Link href="/ar/resources/healthcare-uniform-standards" className="font-medium underline hover:text-blue-800">تعرف على معايير الزي الطبي</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=lab-coats"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر صحي
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى خطة الزي الطبي
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">المزايا المهنية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية فائقة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>محسن للمختبرات</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مظهر احترافي</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة وحرية حركة</span>
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
            مصمم للتميز في الرعاية الصحية
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

      {/* Ideal For Professionals Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            موثوق من قبل المتخصصين الصحيين في جميع أنحاء المملكة العربية السعودية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForProfessionals.map((professional, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <professional.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{professional.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات معطف المختبر
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ميزات المواد والتصميم</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">تشمل الحزمة المهنية</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">معيار UNEOM للرعاية الصحية</h4>
                <p className="text-sm text-green-600">
                  معاطف المختبر لدينا مصممة لتلبية أعلى معايير الاحترافية في الرعاية الصحية، تجمع بين الوظائف العملية والمظهر المصقول.
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
            أكمل مجموعة الزي الطبي لديك
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
            ارتق بصورتك المهنية مع معاطف المختبر من UNEOM
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            انضم إلى آلاف المتخصصين في الرعاية الصحية في جميع أنحاء المملكة العربية السعودية الذين يثقون في UNEOM لاحتياجات الزي الطبي. اختبر المزيج المثالي من الحماية والراحة والاحترافية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Lab+Coat+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر متخصص الرعاية الصحية
            </Link>
            <Link
              href="/ar/services/healthcare-uniform-program"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              برامج الزي الصحي
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}