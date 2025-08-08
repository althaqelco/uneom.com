import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  UserGroupIcon,
  ShieldCheckIcon, 
  ClockIcon,
  CurrencyDollarIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي خط الإنتاج القياسي | ملابس عمل موثوقة للتصنيع | UNEOM',
  description: 'يوفر زي خط الإنتاج القياسي من UNEOM حماية وراحة موثوقة لعمال التصنيع في المملكة العربية السعودية. حل فعال من حيث التكلفة لمرافق الإنتاج واسعة النطاق.',
  keywords: 'زي إنتاج قياسي, ملابس عمل تصنيع, ملابس خط الإنتاج, زي مصانع, تصنيع سعودي, ملابس عمل فعالة التكلفة, زي صناعي UNEOM',
  openGraph: {
    title: 'زي خط الإنتاج القياسي | UNEOM',
    description: 'أزياء موثوقة وفعالة من حيث التكلفة مصممة لعمليات خط الإنتاج القياسية في مرافق التصنيع السعودية.',
    images: ['/images/products/industrial/standard-production-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: CurrencyDollarIcon,
    title: 'حل فعال من حيث التكلفة',
    description: 'قيمة ممتازة مقابل المال دون التنازل عن ميزات الجودة والسلامة الأساسية.'
  },
  {
    icon: UserGroupIcon,
    title: 'مصمم للفرق',
    description: 'مثالي لفرق الإنتاج الكبيرة مع مقاسات متسقة ومزايا الطلبات بالجملة.'
  },
  {
    icon: ClockIcon,
    title: 'راحة طوال اليوم',
    description: 'قصة مريحة مصممة للارتداء المطول خلال نوبات الإنتاج الطويلة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'حماية أساسية',
    description: 'يوفر حماية أساسية ضد مخاطر مكان العمل والتلوث.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'مزيج بولي-قطن (65% بوليستر، 35% قطن)، 200-220 جم/م²' },
  { label: 'الأنماط المتاحة', value: 'قميص عمل، بنطلون عمل، أفرول، مئزر، غطاء شعر' },
  { label: 'خيارات الألوان', value: 'كحلي، رمادي، أبيض، كاكي (ألوان مخصصة متاحة للطلبات الكبيرة)' },
  { label: 'المقاسات', value: 'XS - 4XL، قصة قياسية مع ميزات قابلة للتعديل' },
  { label: 'الميزات الرئيسية', value: 'جيوب صدر، جيوب جانبية، درزات معززة، قماش سهل العناية' },
  { label: 'الامتثال', value: 'يلبي معايير السلامة الصناعية الأساسية، مناسب للتصنيع العام' },
  { label: 'التخصيص', value: 'تطريز الشعار، بطاقات الأسماء، شرائط عاكسة (اختياري)' }
]

const includedItems = [
  'زي خط الإنتاج القياسي (قميص/بنطلون أو أفرول)',
  'تعليمات العناية الأساسية',
  'دليل ملابس العمل القياسية من UNEOM',
  'جدول مقاسات الطلبات بالجملة'
]

const idealForIndustries = [
  { name: 'التصنيع العام', icon: UserGroupIcon },
  { name: 'خطوط التجميع', icon: AdjustmentsHorizontalIcon },
  { name: 'عمليات التعبئة والتغليف', icon: TagIcon },
  { name: 'مراقبة الجودة', icon: ShieldCheckIcon },
  { name: 'عمليات المستودعات', icon: ClockIcon }
]

const relatedProducts = [
  {
    name: 'زي خط الإنتاج شديد التحمل',
    image: '/images/products/industrial/heavy-duty-production-uniform-main.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/heavy-duty/',
    price: 'ابتداءً من 180 ر.س'
  },
  {
    name: 'زي إنتاج الغرف النظيفة',
    image: '/images/products/industrial/clean-room-uniform-main.jpg',
    href: '/ar/shop/manufacturing-workwear/production-line-uniform/clean-room/',
    price: 'ابتداءً من 220 ر.س'
  },
  {
    name: 'سترة سلامة صناعية',
    image: '/images/products/industrial/industrial-safety-vest.jpg',
    href: '/ar/shop/high-visibility-clothing/industrial-safety-vest/',
    price: 'ابتداءً من 75 ر.س'
  }
]

export default function StandardProductionUniformPageAR() {
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
            <Link href="/ar/shop/manufacturing-workwear/production-line-uniform/" className="hover:text-blue-600">زي خط الإنتاج</Link>
            <span>/</span>
            <span className="text-gray-900">قياسي</span>
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
                  src="/images/products/industrial/standard-production-uniform-main.jpg"
                  alt="زي خط الإنتاج القياسي"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-green-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/standard-production-detail-${i}.jpg`}
                      alt={`تفاصيل زي الإنتاج القياسي ${i}`}
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
                  {[...Array(4)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                  <StarIcon className="h-5 w-5 text-gray-300" />
                </div>
                <span className="mr-2 text-sm text-gray-600">(موثوق وفعال من حيث التكلفة)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي خط الإنتاج القياسي
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                جهز فريق الإنتاج لديك بأزياء UNEOM القياسية الموثوقة. مصممة لعمليات التصنيع العامة، هذه الأزياء توفر حماية وراحة أساسية بقيمة ممتازة لمرافق الإنتاج السعودية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">ابتداءً من 120 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للزي الواحد</span>
              </div>
              
              <div className="p-4 bg-green-50 border-r-4 border-green-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CurrencyDollarIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-green-700">
                      <strong>توفير الطلبات بالجملة:</strong> خصومات كبيرة متاحة لفرق الإنتاج الكبيرة. <Link href="/ar/contact?subject=Bulk+Production+Uniform+Pricing" className="font-medium underline hover:text-green-800">احصل على أسعار الكميات</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=standard-production-uniform"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر بالجملة
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 ml-2 text-red-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى خطة الإنتاج
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">المزايا الرئيسية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حل فعال من حيث التكلفة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>تصميم صديق للفريق</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة طوال اليوم</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>حماية أساسية</span>
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
            حماية موثوقة للعمليات القياسية
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

      {/* Ideal For Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي لعمليات التصنيع القياسية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForIndustries.map((industry, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <industry.icon className="h-10 w-10 text-green-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات زي الإنتاج القياسي
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">يشمل طلبك</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">وعد القيمة من UNEOM</h4>
                <p className="text-sm text-blue-600">
                  أزياء الإنتاج القياسية لدينا توفر جودة وراحة موثوقة بأسعار تنافسية، مثالية لعمليات التصنيع واسعة النطاق.
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
            طور أزياء خط الإنتاج لديك
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
            جهز فريق الإنتاج لديك بأزياء UNEOM الموثوقة
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            احصل على أفضل قيمة لاحتياجات زي خط الإنتاج لديك. اتصل بـ UNEOM للحصول على أسعار تنافسية بالجملة وتسليم سريع في جميع أنحاء المملكة العربية السعودية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Standard+Production+Uniform+Inquiry"
              className="bg-white text-green-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              احصل على أسعار الجملة
            </Link>
            <Link
              href="/ar/services/uniform-program-management"
              className="border-2 border-green-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 hover:border-white transition-colors text-lg"
            >
              خدمات برنامج الزي الموحد
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}