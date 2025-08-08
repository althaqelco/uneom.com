import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  UserIcon,
  SunIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم مدرسي كلاسيكي للبنات | أزياء طالبات محتشمة ومريحة | يونيوم',
  description: 'طقم زي مدرسي كلاسيكي للبنات يتميز بتصاميم محتشمة وأقمشة قابلة للتنفس ومناسبة ثقافياً. مثالي للمدارس السعودية مع مواد مريحة ومتينة.',
  keywords: 'زي مدرسي بنات السعودية, أزياء طالبات محتشمة, طقم زي مدرسي كلاسيكي بنات, أزياء تعليمية محتشمة, ملابس طالبات المملكة, أزياء مدرسية إسلامية',
  openGraph: {
    title: 'طقم مدرسي كلاسيكي للبنات | أزياء طالبات محتشمة ومريحة | يونيوم',
    description: 'طقم زي مدرسي كلاسيكي للبنات يتميز بتصاميم محتشمة وأقمشة قابلة للتنفس ومناسبة ثقافياً. مثالي للمدارس السعودية.',
    images: ['/images/products/education/classic-girls-school-set.jpg']}}

const productFeatures = [
  {
    icon: UserIcon,
    title: 'تصميم محتشم',
    description: 'تصاميم مناسبة ثقافياً تلبي متطلبات الاحتشام الإسلامي مع الحفاظ على الأناقة والراحة.'
  },
  {
    icon: SunIcon,
    title: 'أقمشة قابلة للتنفس',
    description: 'مواد خفيفة وقابلة للتنفس مثالية للمناخ السعودي، تضمن الراحة طوال اليوم الدراسي.'
  },
  {
    icon: SparklesIcon,
    title: 'مواد ثابتة الألوان',
    description: 'أصباغ وأقمشة عالية الجودة تحافظ على ألوانها الزاهية غسلة بعد غسلة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'بناء متين',
    description: 'خياطة معززة وغرز عالية الجودة تضمن الاستخدام طويل المدى للطالبات النشطات.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'خليط 70% قطن، 30% بوليستر' },
  { label: 'الوزن', value: '160 جرام لكل متر مربع' },
  { label: 'الألوان المتاحة', value: 'أزرق كحلي، عنابي، أخضر غابات، أبيض' },
  { label: 'المقاسات', value: 'عمر 6-18 سنة (مقاس 26-44)' },
  { label: 'تعليمات العناية', value: 'غسيل دافئ في الغسالة، يفضل التجفيف على الحبل' },
  { label: 'مميزات الاحتشام', value: 'أكمام طويلة، طول مناسب، قصة فضفاضة' }
]

const includedItems = [
  'بلوزة محتشمة بأكمام طويلة مع ياقة مدرسية',
  'تنورة طويلة مع حزام خصر مريح',
  'حجاب مطابق بألوان المدرسة (اختياري)',
  'كارديجان مدرسي للطبقات',
  'بطاقة تعليمات العناية',
  'دليل تعديل المقاسات'
]

const relatedProducts = [
  {
    name: 'طقم مدرسي فاخر للبنين',
    image: '/images/products/education/premium-boys-school-set.jpg',
    href: '/ar/shop/education/school-uniforms/premium-boys-set/',
    price: 'من 220 ريال سعودي'
  },
  {
    name: 'طقم زي رياضي',
    image: '/images/products/education/sports-uniform-set.jpg',
    href: '/ar/shop/education/school-uniforms/sports-set/',
    price: 'من 120 ريال سعودي'
  },
  {
    name: 'بليزر أكاديمي للأساتذة',
    image: '/images/products/education/faculty-professional-blazer.jpg',
    href: '/ar/shop/education/university-attire/faculty-blazer/',
    price: 'من 350 ريال سعودي'
  }
]

export default function ClassicGirlsSchoolSetPageAR() {
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
            <Link href="/ar/shop/education/" className="hover:text-blue-600">التعليم</Link>
            <span>/</span>
            <Link href="/ar/shop/education/school-uniforms/" className="hover:text-blue-600">الأزياء المدرسية</Link>
            <span>/</span>
            <span className="text-gray-900">طقم كلاسيكي للبنات</span>
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
                  src="/images/products/education/classic-girls-school-set.jpg"
                  alt="طقم مدرسي كلاسيكي للبنات"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-1.jpg"
                    alt="تفاصيل البلوزة"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-2.jpg"
                    alt="تفاصيل التنورة"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-3.jpg"
                    alt="تفاصيل الكارديجان"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-4.jpg"
                    alt="الطقم الكامل"
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
                <span className="mr-2 text-sm text-gray-600">(89 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                طقم مدرسي كلاسيكي للبنات
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                طقم زي مدرسي أنيق ومحتشم مصمم خصيصاً للطالبات. 
                يتميز بتصاميم مناسبة ثقافياً مع أقمشة قابلة للتنفس مثالية للمناخ السعودي.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 180 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للطقم</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['26', '28', '30', '32', '34', '36', '38', '40', '42', '44'].map((size) => (
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
                  <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-red-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-green-800 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500"></button>
                </div>
              </div>

              {/* Hijab Option */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">خيار الحجاب</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <label className="flex items-center">
                    <input type="radio" name="hijab" className="ml-2" />
                    <span>يشمل حجاب مطابق</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="hijab" className="ml-2" defaultChecked />
                    <span>بدون حجاب</span>
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
                  إضافة للعرض
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex-1">
                  <HeartIcon className="h-5 w-5 inline ml-2" />
                  حفظ لاحقاً
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تصميم محتشم معتمد</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>قماش مناسب للمناخ</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>متوافق ثقافياً</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>خصومات الكميات متاحة</span>
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
            لماذا تختار طقمنا المدرسي الكلاسيكي للبنات
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

      {/* Product Details */}
      <section className="py-16">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ما يشمله الطقم</h2>
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

      {/* Cultural Compliance Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              تصميم مناسب ثقافياً
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              أزياءنا المدرسية الكلاسيكية للبنات مصممة باحترام عميق للقيم الإسلامية والأعراف الثقافية السعودية، 
              مما يضمن الاحتشام دون التنازل عن الأناقة أو الراحة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">تغطية محتشمة</h3>
              <p className="text-gray-600">
                تصميم تغطية كاملة مع طول أكمام وتنورة مناسب يلبي متطلبات الاحتشام الإسلامي.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SunIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">مناسب للمناخ</h3>
              <p className="text-gray-600">
                أقمشة قطنية مخلوطة قابلة للتنفس توفر الراحة في المناخ السعودي مع الحفاظ على الاحتشام.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">مواد عالية الجودة</h3>
              <p className="text-gray-600">
                أقمشة وخياطة عالية الجودة تحافظ على مظهرها واحتشامها خلال الاستخدام والغسيل المنتظم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أزياء تعليمية ذات صلة
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
            هل أنت مستعد لطلب أزياء مدرسية كلاسيكية؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل مع متخصصي التعليم لدينا للحصول على أسعار الكميات وخيارات التخصيص. 
            نضمن أن جميع الأزياء تلبي المتطلبات الثقافية والتعليمية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              احصل على عرض كميات
              <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              تواصل مع متخصص
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}