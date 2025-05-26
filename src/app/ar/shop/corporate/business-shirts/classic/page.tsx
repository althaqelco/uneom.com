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
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'قمصان عمل بقصة كلاسيكية | قمصان شركات تقليدية | يونيوم',
  description: 'اكتشف قمصان العمل ذات القصة الكلاسيكية. أناقة خالدة، أقمشة مريحة، وتصنيع متين لمظهر احترافي في بيئات الشركات التقليدية في المملكة العربية السعودية.',
  keywords: 'قمصان عمل بقصة كلاسيكية, قمصان شركات تقليدية, قمصان رسمية رجالية كلاسيكية, ملابس مهنية السعودية, قمصان عمل مريحة',
  openGraph: {
    title: 'قمصان عمل بقصة كلاسيكية | قمصان شركات تقليدية | يونيوم',
    description: 'أناقة خالدة وراحة مع قمصان العمل ذات القصة الكلاسيكية. مثالية لبيئات الشركات التقليدية.',
    images: ['/images/products/corporate/classic-fit-shirts-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: UserIcon,
    title: 'قصة كلاسيكية واسعة',
    description: 'قصة تقليدية مريحة تسمح بسهولة الحركة طوال يوم العمل.'
  },
  {
    icon: SparklesIcon,
    title: 'أقمشة عالية الجودة',
    description: 'مصنوعة من مزيج قطن متين ومسامي، مما يضمن الراحة وطول العمر.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'تصميم خالد',
    description: 'أنماط ياقة تقليدية وتفاصيل تصميم كلاسيكية مناسبة لأي بيئة مهنية.'
  },
  {
    icon: TagIcon,
    title: 'خيارات سهلة العناية',
    description: 'العديد من القمصان تتميز بلمسات نهائية سهلة العناية أو مقاومة للتجعد للراحة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '60% قطن، 40% بوليستر (يختلف حسب الطراز)' },
  { label: 'الوزن', value: '120-140 جم/م²' },
  { label: 'الألوان المتاحة', value: 'أبيض، أزرق فاتح، كحلي، فحمي، أسود، أنماط مخططة ومربعات' },
  { label: 'المقاسات', value: 'S-5XL (مقاسات أمريكية قياسية)' },
  { label: 'أنواع الياقات', value: 'مدببة، منتشرة، بأزرار سفلية' },
  { label: 'تعليمات العناية', value: 'غسيل آلي دافئ، تجفيف منخفض، أو تنظيف جاف' },
  { label: 'التخصيص', value: 'تطريز الشعار، المونوغرام، خياطة متباينة' }
]

const includedItems = [
  'قميص عمل بقصة كلاسيكية',
  'دعامات ياقة (حيثما ينطبق)',
  'تغليف احترافي',
  'بطاقة تعليمات العناية'
]

const occasions = [
  {
    name: 'ملابس مكتب يومية',
    description: 'مريحة واحترافية للعمل اليومي.',
    icon: '👔'
  },
  {
    name: 'اجتماعات العملاء',
    description: 'تقدم صورة مصقولة وموثوقة.',
    icon: '🤝'
  },
  {
    name: 'فعاليات الشركات',
    description: 'مناسبة للتجمعات التجارية الرسمية والمؤتمرات.',
    icon: '🏢'
  },
  {
    name: 'أزياء موحدة للفرق',
    description: 'مظهر متناسق واحترافي لفريقك بأكمله.',
    icon: '👥'
  }
]

const relatedProducts = [
  {
    name: 'قمصان عمل بقصة عصرية',
    image: '/images/products/corporate/modern-fit-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/modern-fit/',
    price: 'من 150 ريال سعودي'
  },
  {
    name: 'قمصان رسمية فاخرة',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/premium-dress/',
    price: 'من 250 ريال سعودي'
  },
  {
    name: 'بدلات تنفيذية كلاسيكية',
    image: '/images/products/corporate/classic-executive-suit.jpg',
    href: '/ar/shop/corporate/executive-suits/classic/',
    price: 'من 580 ريال سعودي'
  }
]

export default function ClassicFitShirtsPageAR() {
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
            <Link href="/ar/shop/corporate/business-shirts/" className="hover:text-blue-600">قمصان العمل</Link>
            <span>/</span>
            <span className="text-gray-900">قصة كلاسيكية</span>
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
                  src="/images/products/corporate/classic-fit-shirts-main.jpg"
                  alt="قميص عمل بقصة كلاسيكية"
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
                      src={`/images/products/corporate/classic-shirt-detail-${i}.jpg`}
                      alt={`تفاصيل قميص كلاسيكي ${i}`}
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
                  {[...Array(4)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                  <StarIcon className="h-5 w-5 text-yellow-400" /> {/* Example for 4.5 stars */}
                </div>
                <span className="mr-2 text-sm text-gray-600">(158 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قمصان عمل بقصة كلاسيكية
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                استمتع بالأناقة الخالدة والراحة الاستثنائية مع قمصان العمل ذات القصة الكلاسيكية. مصممة للمهني المتميز الذي يقدر الأناقة التقليدية والمقاس المريح.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 120 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للقميص</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'].map((size) => (
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
                  {['أبيض', 'أزرق فاتح', 'كحلي', 'فحمي'].map(color => (
                    <button key={color} className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color === 'أبيض' ? 'white' : color === 'أزرق فاتح' ? 'lightblue' : color === 'كحلي' ? 'navy' : 'charcoal'}-500 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>ألوان أخرى...</span>
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
                    <span>قصة كلاسيكية مريحة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>مزيج قطن متين</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>خيارات سهلة العناية</span>
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
            سمات قمصاننا ذات القصة الكلاسيكية
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
            مثالية لكل مناسبة مهنية
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">مواصفات المنتج</h2>
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">التخصيص متاح</h3>
                <p className="text-blue-600 mb-4">
                  اجعل هذه القمصان الكلاسيكية خاصة بك حقًا. نقدم تطريز الشعار، والمونوغرام، وخيارات للخياطة المتباينة أو أزرار فريدة لتتماشى مع علامتك التجارية.
                </p>
                <Link href="/ar/services/custom-design" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  تعرف على المزيد حول التخصيص <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180" />
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
            اكتشف أنماط قمصان عمل أخرى
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            استثمر في الاحترافية الخالدة مع قمصان القصة الكلاسيكية
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تأكد من أن فريقك يبدو مصقولًا واحترافيًا. اتصل بنا لطلبات الكميات الكبيرة، أو التخصيص، أو لمناقشة احتياجات ملابس شركتك المحددة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض سعر
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              اتصل بالمبيعات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}