import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  SunIcon,
  ShieldCheckIcon,
  HeartIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم زي رياضي | ملابس رياضية مدرسية | طقم تربية بدنية عالي الأداء | يونيوم',
  description: 'طقم زي رياضي عالي الأداء للأنشطة الرياضية المدرسية. أقمشة ماصة للرطوبة وقابلة للتنفس مثالية لحصص التربية البدنية والأنشطة الرياضية في المدارس السعودية.',
  keywords: 'زي رياضي السعودية, طقم تربية بدنية مدرسي, ملابس رياضية طلاب, ملابس رياضة مدرسية, ملابس رياضية أداء المملكة, أزياء رياضية طلابية',
  openGraph: {
    title: 'طقم زي رياضي | ملابس رياضية مدرسية | طقم تربية بدنية عالي الأداء | يونيوم',
    description: 'طقم زي رياضي عالي الأداء للأنشطة الرياضية المدرسية. أقمشة ماصة للرطوبة وقابلة للتنفس مثالية لحصص التربية البدنية.',
    images: ['/images/products/education/sports-uniform-set.jpg']}}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'قماش عالي الأداء',
    description: 'تقنية متقدمة لامتصاص الرطوبة تحافظ على جفاف الطلاب وراحتهم أثناء الأنشطة البدنية المكثفة.'
  },
  {
    icon: SunIcon,
    title: 'حماية من الأشعة فوق البنفسجية',
    description: 'حماية مدمجة من الأشعة فوق البنفسجية تحمي الطلاب من أشعة الشمس الضارة أثناء الرياضات الخارجية.'
  },
  {
    icon: FireIcon,
    title: 'تقنية التجفيف السريع',
    description: 'مواد سريعة التجفيف تضمن الراحة والنظافة طوال جلسات التربية البدنية الممتدة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'تصميم متين',
    description: 'بناء معزز يتحمل الأنشطة الرياضية القاسية ودورات الغسيل المتكررة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'خليط 85% بوليستر، 15% إيلاستين' },
  { label: 'الوزن', value: '140 جرام لكل متر مربع' },
  { label: 'الألوان المتاحة', value: 'كحلي/أبيض، أحمر/أبيض، أخضر/أبيض، أسود/رمادي' },
  { label: 'المقاسات', value: 'عمر 6-18 سنة (XS-XL)' },
  { label: 'تعليمات العناية', value: 'غسيل بارد في الغسالة، يفضل التجفيف بالهواء' },
  { label: 'المميزات الخاصة', value: 'امتصاص الرطوبة، حماية UV، مقاوم للروائح' }
]

const includedItems = [
  'قميص بولو أداء مع شعار المدرسة',
  'شورت رياضي مع حزام خصر مطاطي',
  'جوارب رياضية ماصة للرطوبة',
  'جاكيت رياضي اختياري للطقس البارد',
  'بطاقة تعليمات العناية',
  'دليل المقاسات للحصول على أفضل ملاءمة'
]

const sportsActivities = [
  {
    name: 'كرة القدم',
    description: 'مثالي للتدريب والمباريات الخارجية',
    icon: '⚽'
  },
  {
    name: 'كرة السلة',
    description: 'مناسب لملاعب كرة السلة الداخلية والتدريب',
    icon: '🏀'
  },
  {
    name: 'ألعاب القوى',
    description: 'محسن للجري والمسابقات الرياضية',
    icon: '🏃'
  },
  {
    name: 'التربية البدنية العامة',
    description: 'مناسب لجميع أنشطة التربية البدنية',
    icon: '🏃‍♀️'
  }
]

const relatedProducts = [
  {
    name: 'طقم مدرسي فاخر للبنين',
    image: '/images/products/education/premium-boys-school-set.jpg',
    href: '/ar/shop/education/school-uniforms/premium-boys-set/',
    price: 'من 220 ريال سعودي'
  },
  {
    name: 'طقم مدرسي كلاسيكي للبنات',
    image: '/images/products/education/classic-girls-school-set.jpg',
    href: '/ar/shop/education/school-uniforms/classic-girls-set/',
    price: 'من 180 ريال سعودي'
  },
  {
    name: 'معدات التدريب الرياضي',
    image: '/images/products/education/athletic-training-gear.jpg',
    href: '/ar/shop/education/sports-equipment/training-gear/',
    price: 'من 95 ريال سعودي'
  }
]

export default function SportsUniformSetPageAR() {
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
            <span className="text-gray-900">طقم رياضي</span>
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
                  src="/images/products/education/sports-uniform-set.jpg"
                  alt="طقم زي رياضي"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-1.jpg"
                    alt="تفاصيل قميص البولو"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-2.jpg"
                    alt="تفاصيل الشورت"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-3.jpg"
                    alt="الجاكيت الرياضي"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-4.jpg"
                    alt="الطقم الرياضي الكامل"
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
                <span className="mr-2 text-sm text-gray-600">(156 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                طقم زي رياضي
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                زي رياضي عالي الأداء مصمم للرياضة المدرسية وأنشطة التربية البدنية. 
                يتميز بتقنية متقدمة لامتصاص الرطوبة وحماية من الأشعة فوق البنفسجية للراحة والأمان الأمثل.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 120 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للطقم</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر تركيبة الألوان</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" defaultChecked />
                    <span>كحلي / أبيض</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" />
                    <span>أحمر / أبيض</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" />
                    <span>أخضر / أبيض</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" />
                    <span>أسود / رمادي</span>
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
                    <span>قماش ماص للرطوبة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>حماية من الأشعة فوق البنفسجية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تقنية مقاومة الروائح</span>
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
            مميزات الأداء للطلاب النشطين
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

      {/* Sports Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي لجميع الأنشطة الرياضية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsActivities.map((activity, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-gray-600">{activity.description}</p>
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

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أكمل مجموعة الأزياء المدرسية
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
            جهز مدرستك بأزياء رياضية عالية الأداء
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل مع متخصصي التعليم لدينا للحصول على أسعار الكميات للأزياء الرياضية عالية الأداء. 
            حافظ على راحة طلابك وحمايتهم أثناء جميع الأنشطة الرياضية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              احصل على عرض أزياء رياضية
              <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              تواصل مع متخصص التربية البدنية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}