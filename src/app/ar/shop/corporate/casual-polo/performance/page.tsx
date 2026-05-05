import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  SunIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'قمصان بولو عالية الأداء | بولو شركات يمتص الرطوبة | يونيوم',
  description: 'قمصان بولو عالية الأداء للمهنيين النشطين. تتميز بأقمشة تمتص الرطوبة، وحماية من الأشعة فوق البنفسجية، وتصاميم تسمح بالتهوية لتوفير أقصى درجات الراحة والأناقة في المملكة العربية السعودية.',
  keywords: 'قمصان بولو عالية الأداء, بولو يمتص الرطوبة, ملابس شركات نشطة السعودية, قمصان بولو حماية من الأشعة فوق البنفسجية, بولو فرق يسمح بالتهوية',
  openGraph: {
    title: 'قمصان بولو عالية الأداء | بولو شركات يمتص الرطوبة | يونيوم',
    description: 'حافظ على برودتك وجفافك واحترافك مع قمصان البولو عالية الأداء، المصممة لبيئات الشركات النشطة.',
    images: ['/images/products/corporate/performance-polo-main.jpg']}}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'امتصاص متقدم للرطوبة',
    description: 'تبقيك باردًا وجافًا عن طريق سحب العرق بعيدًا عن الجسم، مثالية للأدوار النشطة والمناخات الدافئة.'
  },
  {
    icon: SunIcon,
    title: 'تسمح بالتهوية وخفيفة الوزن',
    description: 'أقمشة مصممة تسمح بأقصى تدفق للهواء وشعور خفيف الوزن لراحة طوال اليوم.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'خيارات حماية من الأشعة فوق البنفسجية',
    description: 'تقدم أنماط مختارة حماية UPF لحماية البشرة من أشعة الشمس الضارة أثناء الأنشطة الخارجية.'
  },
  {
    icon: SparklesIcon,
    title: 'متينة وسهلة العناية',
    description: 'مقاومة للانكماش والبهتان والتجعد، مما يضمن مظهرًا احترافيًا دائمًا بأقل قدر من الصيانة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '100% بوليستر محبوك عالي الأداء أو مزيج بوليستر-سباندكس' },
  { label: 'التقنية', value: 'امتصاص الرطوبة، تجفيف سريع، مضاد للرائحة (في أنماط مختارة)، UPF 30-50+' },
  { label: 'الألوان المتاحة', value: 'ألوان رياضية نابضة بالحياة، درجات ألوان شركات كلاسيكية، خيارات مخصصة' },
  { label: 'المقاسات', value: 'S-4XL (تتوفر قصات رياضية وقياسية)' },
  { label: 'الميزات', value: 'ملصق بدون علامة للراحة، قصة رياضية، درزات كتف معززة' },
  { label: 'تعليمات العناية', value: 'غسيل آلي بارد، تجفيف منخفض، لا تستخدم منعم الأقمشة' },
  { label: 'التخصيص', value: 'تطريز مناسب للأداء، شعارات نقل حراري، لوحات ألوان مخصصة' }
]

const includedItems = [
  'قميص بولو عالي الأداء',
  'دليل العناية بالقماش التقني',
  'تغليف قابل لإعادة التدوير'
]

const occasions = [
  {
    name: 'فعاليات الشركات الخارجية',
    description: 'ابق مرتاحًا ومحميًا أثناء نزهات الشركة أو أيام الجولف.',
    icon: '⛳'
  },
  {
    name: 'أدوار الفرق النشطة',
    description: 'مثالية للموظفين الذين يتنقلون باستمرار أو يعملون في بيئات دافئة.',
    icon: '🏃'
  },
  {
    name: 'الفرق والأندية الرياضية',
    description: 'ملابس احترافية وعملية لفرق الشركات الرياضية.',
    icon: '🏅'
  },
  {
    name: 'ملابس ترويجية نشطة',
    description: 'ملابس عالية القيمة تحمل علامتك التجارية لمبادرات الصحة والعافية.',
    icon: '💪'
  }
]

const relatedProducts = [
  {
    name: 'بولو شركات كلاسيكي',
    image: '/images/products/corporate/classic-polo-shirts.jpg',
    href: '/ar/shop/corporate/casual-polo/classic/',
    price: 'من 75 ريال سعودي'
  },
  {
    name: 'بولو شركات فاخر',
    image: '/images/products/corporate/premium-corporate-polos.jpg',
    href: '/ar/shop/corporate/casual-polo/premium-corporate/',
    price: 'من 120 ريال سعودي'
  },
  {
    name: 'تيشيرتات عالية الأداء',
    image: '/images/products/corporate/performance-tshirts.jpg', // Placeholder
    href: '/ar/shop/corporate/casual-polo', // Placeholder
    price: 'من 60 ريال سعودي'
  }
]

export default function PerformancePoloPageAR() {
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
            <Link href="/ar/shop/corporate/casual-polo/" className="hover:text-blue-600">قمصان بولو كاجوال</Link>
            <span>/</span>
            <span className="text-gray-900">عالي الأداء</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/corporate/performance-polo-main.jpg"
                  alt="قميص بولو عالي الأداء"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={`/images/products/corporate/performance-polo-detail-${i}.jpg`}
                      alt={`تفاصيل بولو عالي الأداء ${i}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="mr-2 text-sm text-gray-600">(185 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قمصان بولو عالية الأداء
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                مصممة للمهنيين النشطين، تجمع قمصان البولو عالية الأداء بين الأناقة وتقنية الأقمشة المتقدمة. حافظ على برودتك وجفافك وراحتك سواء كنت في المكتب أو في فعالية أو أثناء التنقل.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 90 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للقميص</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
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
                <div className="flex flex-wrap gap-3">
                  {['أزرق كهربائي', 'جرافيت', 'أبيض', 'أحمر', 'أخضر غابي', 'فضي'].map(color => (
                    <button key={color} className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color === 'أبيض' ? 'white' : color === 'فضي' ? 'silver' : color.toLowerCase().replace(' ', '-')}-500 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>ألوان مخصصة...</span>
                    </button>
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
                    <span>قماش يمتص الرطوبة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>يسمح بالتهوية وخفيف الوزن</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>حماية من الأشعة فوق البنفسجية متاحة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تقنية مضادة للرائحة</span>
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
            مصممة لأقصى أداء وراحة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow">
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

      {/* Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالية لأنماط حياة الشركات النشطة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات التقنية</h2>
              <div className="space-y-4 bg-white p-6 rounded-lg shadow">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600 text-left">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ما يتضمنه المنتج</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">علامات تجارية عالية الأداء</h3>
                <p className="text-blue-600 mb-4">
                  قمصان البولو عالية الأداء مناسبة لتقنيات العلامات التجارية المتخصصة مثل النقل الحراري، مما يضمن ظهور شعارك بشكل حاد وبقائه متينًا حتى مع الاستخدام النشط.
                </p>
                <Link href="/ar/services/custom-design/#performance-branding" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  اكتشف العلامات التجارية عالية الأداء <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            اكتشف المزيد من ملابس الشركات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ارتقِ بأداء وأناقة فريقك
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            جهز فريقك بقمصان البولو عالية الأداء. مثالية للأدوار النشطة، أو رياضات الشركات، أو لمظهر يومي مريح واحترافي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?item=performance-polo"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار بولو الأداء
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              استشر خبرائنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}