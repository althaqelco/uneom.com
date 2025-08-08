import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  BoltIcon,
  UserIcon,
  TrophyIcon // Assuming TrophyIcon is the correct replacement for CrownIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'بدلات تنفيذية عصرية | ملابس عمل معاصرة | بدلات شركات بقصة ضيقة | يونيوم',
  description: 'بدلات تنفيذية عصرية بتصميم معاصر وقصة ضيقة. مثالية لقادة الأعمال التقدميين وبيئات الشركات الحديثة في المملكة العربية السعودية.',
  keywords: 'بدلات تنفيذية عصرية السعودية, بدلات عمل معاصرة المملكة, ملابس شركات بقصة ضيقة, ملابس عمل حديثة, ملابس تنفيذية تقدمية',
  openGraph: {
    title: 'بدلات تنفيذية عصرية | ملابس عمل معاصرة | بدلات شركات بقصة ضيقة | يونيوم',
    description: 'بدلات تنفيذية عصرية بتصميم معاصر وقصة ضيقة. مثالية لقادة الأعمال التقدميين وبيئات الشركات الحديثة.',
    images: ['/images/products/corporate/modern-executive-suits.jpg']}}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'تصميم معاصر',
    description: 'تصميم عصري بخطوط نظيفة وقصات معاصرة تعكس قيادة الأعمال التقدمية.'
  },
  {
    icon: SparklesIcon,
    title: 'أقمشة فاخرة',
    description: 'أقمشة صوف عالية الأداء بتقنية التمدد للراحة والحركة في بيئات العمل الديناميكية.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'خياطة بقصة ضيقة',
    description: 'تصميم بقصة ضيقة مفصل بخبرة يخلق صورة ظلية حادة وعصرية دون المساس بالراحة.'
  },
  {
    icon: UserIcon,
    title: 'تصميم متعدد الاستخدامات',
    description: 'تصميم قابل للتكيف مناسب لغرف الاجتماعات واجتماعات العملاء وفعاليات التواصل التجارية الحديثة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '60% صوف، 35% بوليستر، 5% إيلاستين' },
  { label: 'الوزن', value: '240 جم/م²' },
  { label: 'الألوان المتاحة', value: 'رمادي فحمي، أزرق كحلي، رمادي غامق، أزرق ليلي' },
  { label: 'المقاسات', value: '46-60 (مقاسات أوروبية)' },
  { label: 'نوع القصة', value: 'قصة ضيقة بتقنية التمدد' },
  { label: 'تعليمات العناية', value: 'يوصى بالتنظيف الجاف، مقاوم للتجعد' },
  { label: 'التخصيص', value: 'شعار الشركة، تطريز الاسم، اختلافات الألوان' }
]

const includedItems = [
  'جاكيت بدلة عصري بقصة ضيقة وياقات معاصرة',
  'بنطلون مطابق بواجهة مسطحة وحزام خصر مطاطي',
  'قميص رسمي فاخر بياقة عصرية',
  'ربطة عنق حريرية عصرية بنقش هندسي',
  'حقيبة ملابس فاخرة بعلامة الشركة التجارية',
  'بطاقة تعليمات العناية',
  'دليل قياس احترافي',
  'أزرار أكمام عصرية (ترقية اختيارية)'
]

const businessOccasions = [
  {
    name: 'اجتماعات تنفيذية',
    description: 'مثالية لاجتماعات العمل والعروض التقديمية رفيعة المستوى',
    icon: '💼'
  },
  {
    name: 'عروض العملاء',
    description: 'مثالية لإبهار العملاء وإتمام الصفقات الهامة',
    icon: '📊'
  },
  {
    name: 'فعاليات الشركات',
    description: 'ملابس أنيقة لوظائف الشركة وفعاليات التواصل',
    icon: '🏢'
  },
  {
    name: 'سفر الأعمال',
    description: 'تصميم مقاوم للتجعد مثالي لرحلات العمل',
    icon: '✈️'
  }
]

const relatedProducts = [
  {
    name: 'بدلة عمل فاخرة',
    image: '/images/products/corporate/premium-business-suit.jpg',
    href: '/ar/shop/corporate/executive-suits/premium-business/',
    price: 'من 680 ريال سعودي'
  },
  {
    name: 'بدلة تنفيذية كلاسيكية',
    image: '/images/products/corporate/classic-executive-suit.jpg',
    href: '/ar/shop/corporate/executive-suits/classic/',
    price: 'من 580 ريال سعودي'
  },
  {
    name: 'قميص رسمي عصري',
    image: '/images/products/corporate/modern-dress-shirt.jpg',
    href: '/ar/shop/corporate/business-shirts/modern-fit/',
    price: 'من 180 ريال سعودي'
  }
]

export default function ModernExecutiveSuitsPageAR() {
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
            <Link href="/ar/shop/corporate/" className="hover:text-blue-600">ملابس الشركات</Link>
            <span>/</span>
            <Link href="/ar/shop/corporate/executive-suits/" className="hover:text-blue-600">البدلات التنفيذية</Link>
            <span>/</span>
            <span className="text-gray-900">عصرية</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/corporate/modern-executive-suits.jpg"
                  alt="بدلات تنفيذية عصرية"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-jacket.jpg"
                    alt="تفاصيل جاكيت بدلة عصري"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-trousers.jpg"
                    alt="بنطلون بقصة ضيقة"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-details.jpg"
                    alt="تفاصيل عصرية"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-full.jpg"
                    alt="بدلة عصرية كاملة"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="mr-2 text-sm text-gray-600">(127 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                بدلات تنفيذية عصرية
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                بدلات تنفيذية معاصرة مصممة لقائد الأعمال الحديث. 
                تتميز بخياطة بقصة ضيقة وتقنية التمدد وتصميم عصري مثالي لبيئات الشركات الديناميكية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 620 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للبدلة الكاملة</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['46', '48', '50', '52', '54', '56', '58', '60'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 px-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون</h3>
                <div className="flex space-x-3 space-x-reverse">
                  <button className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-950 border-2 border-gray-300 hover:border-blue-500"></button>
                </div>
              </div>

              {/* Fit Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">نوع القصة</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="fit" className="ml-2" defaultChecked />
                    <span>قصة ضيقة (موصى به)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="fit" className="ml-2" />
                    <span>قصة عصرية</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="fit" className="ml-2" />
                    <span>قصة مفصلة</span>
                  </label>
                </div>
              </div>

              {/* Customization Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">التخصيص</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>تطريز شعار الشركة</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>تطريز الاسم الشخصي</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>لون بطانة مخصص</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>ترقية أزرار أكمام فاخرة</span>
                  </label>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">الكمية</h3>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">-</button>
                  <span className="text-lg font-semibold">1</span>
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1">
                  إضافة إلى عرض السعر
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex-1">
                  <HeartIcon className="h-5 w-5 inline ml-2" />
                  حفظ لوقت لاحق
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تقنية التمدد</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>مقاوم للتجعد</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تصميم بقصة ضيقة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>خصومات للكميات الكبيرة</span>
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
            مصممة لقادة الأعمال العصريين
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالية لكل مناسبة عمل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessOccasions.map((occasion, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-4">{occasion.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{occasion.name}</h3>
                <p className="text-gray-600">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">مواصفات المنتج</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">البدلة الكاملة تشمل</h2>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Business Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أعد تعريف أسلوب العمل الحديث
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              بدلاتنا التنفيذية العصرية تجمع بين التصميم المعاصر والحرفية التقليدية. 
              مثالية لقادة الأعمال التقدميين الذين يقدرون الأناقة والأداء في ملابسهم المهنية.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">أداء ديناميكي</h3>
              <p className="text-gray-600">
                تقنية التمدد والقصة العصرية تضمن الراحة والحركة في بيئات العمل سريعة الخطى.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">تميز معاصر</h3>
              <p className="text-gray-600">
                تصميم عصري يعكس القيادة التقدمية ونهج الأعمال المستقبلي.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">جودة فاخرة</h3>
              <p className="text-gray-600">
                أقمشة عالية الأداء وخياطة خبيرة تضمن جودة دائمة ومظهرًا احترافيًا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أكمل خزانة ملابسك التنفيذية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    عرض التفاصيل
                    <ArrowRightIcon className="mr-2 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جهز فريقك التنفيذي ببدلات عمل عصرية
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل مع متخصصي الشركات لدينا للحصول على أسعار الكميات وخيارات التخصيص لفريقك التنفيذي. 
            ارتقِ بالصورة المهنية لشركتك بملابس عمل معاصرة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              احصل على عرض سعر تنفيذي
              <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              تواصل مع متخصص الشركات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}