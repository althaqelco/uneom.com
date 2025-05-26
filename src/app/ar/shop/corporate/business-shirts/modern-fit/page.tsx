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
  BoltIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'قمصان عمل بقصة عصرية | قمصان شركات معاصرة | يونيوم',
  description: 'قمصان عمل أنيقة وعصرية بقصة ضيقة. صورة ظلية مفصلة، أقمشة مطاطية، وتصاميم معاصرة لمظهر احترافي تقدمي في المملكة العربية السعودية.',
  keywords: 'قمصان عمل بقصة عصرية, قمصان شركات معاصرة, قمصان رسمية بقصة ضيقة, ملابس مهنية السعودية, ملابس عمل أنيقة',
  openGraph: {
    title: 'قمصان عمل بقصة عصرية | قمصان شركات معاصرة | يونيوم',
    description: 'احصل على مظهر احترافي حاد مع قمصان العمل ذات القصة العصرية. مصممة للمديرين التنفيذيين التقدميين اليوم.',
    images: ['/images/products/corporate/modern-fit-shirts-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'صورة ظلية عصرية مفصلة',
    description: 'قصة معاصرة مدببة قليلاً توفر مظهرًا حادًا ومصقولًا دون أن تكون مقيدة.'
  },
  {
    icon: SparklesIcon,
    title: 'أقمشة مطاطية عالية الأداء',
    description: 'مصنوعة من مزيج قطن مبتكر مع مطاط لتعزيز الراحة والحركة والأداء طوال اليوم.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'تفاصيل تصميم معاصرة',
    description: 'تتميز بأنماط ياقة عصرية، وأصفاد مصقولة، وعناصر تصميم دقيقة لمظهر أنيق.'
  },
  {
    icon: UserIcon,
    title: 'احترافية متعددة الاستخدامات',
    description: 'مثالية لمجموعة من إعدادات الشركات، من ملابس المكتب اليومية إلى عروض العملاء الهامة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '97% قطن، 3% إيلاستين (يختلف حسب الطراز)' },
  { label: 'الوزن', value: '110-130 جم/م²' },
  { label: 'الألوان المتاحة', value: 'أبيض، أزرق سماوي، كحلي، فحمي، أسود، نقوش دقيقة، خطوط رفيعة' },
  { label: 'المقاسات', value: 'S-XXL (قصة أضيق - تحقق من جدول المقاسات)' },
  { label: 'أنواع الياقات', value: 'منتشرة، مقطوعة، بأزرار سفلية مخفية' },
  { label: 'تعليمات العناية', value: 'غسيل آلي بارد، تجفيف منخفض أو تعليق ليجف، كي خفيف إذا لزم الأمر' },
  { label: 'التخصيص', value: 'تطريز الشعار، خياطة أزرار متباينة، ملصقات مخصصة' }
]

const includedItems = [
  'قميص عمل بقصة عصرية',
  'دعامات ياقة قابلة للإزالة',
  'تغليف صديق للبيئة',
  'دليل أناقة لمظهر الشركات الحديث'
]

const occasions = [
  {
    name: 'بيئات مكتب ديناميكية',
    description: 'حافظ على أناقتك وراحتك في أماكن العمل سريعة الخطى.',
    icon: '🏢'
  },
  {
    name: 'أدوار مواجهة العملاء',
    description: 'اترك انطباعًا قويًا ومعاصرًا.',
    icon: '🤝'
  },
  {
    name: 'إعدادات عمل كاجوال',
    description: 'ينتقل بسهولة من الرسمي إلى الكاجوال الأنيق.',
    icon: '🕶️' 
  },
  {
    name: 'فعاليات التواصل',
    description: 'اظهر بمظهر مصقول ودود.',
    icon: '💬'
  }
]

const relatedProducts = [
  {
    name: 'قمصان عمل بقصة كلاسيكية',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/classic/',
    price: 'من 120 ريال سعودي'
  },
  {
    name: 'قمصان رسمية فاخرة',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/premium-dress/',
    price: 'من 250 ريال سعودي'
  },
  {
    name: 'بدلات تنفيذية عصرية',
    image: '/images/products/corporate/modern-executive-suits.jpg',
    href: '/ar/shop/corporate/executive-suits/modern/',
    price: 'من 620 ريال سعودي'
  }
]

export default function ModernFitShirtsPageAR() {
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
            <span className="text-gray-900">قصة عصرية</span>
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
                  src="/images/products/corporate/modern-fit-shirts-main.jpg"
                  alt="قميص عمل بقصة عصرية"
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
                      src={`/images/products/corporate/modern-shirt-detail-${i}.jpg`}
                      alt={`تفاصيل قميص عصري ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(212 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قمصان عمل بقصة عصرية
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                ارتقِ بخزانة ملابسك المهنية مع قمصان العمل ذات القصة العصرية. مصممة بصورة ظلية معاصرة وأقمشة مطاطية عالية الأداء لمظهر حاد وأنيق ومريح طوال اليوم.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 150 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للقميص</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 px-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">ملاحظة: القصة العصرية هي قصة أضيق. يرجى الرجوع إلى جدول المقاسات.</p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون</h3>
                <div className="flex flex-wrap gap-3">
                  {['أبيض', 'أزرق سماوي', 'كحلي', 'فحمي', 'أسود'].map(color => (
                    <button key={color} className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color === 'أبيض' ? 'white' : color === 'أزرق سماوي' ? 'sky-blue' : color === 'كحلي' ? 'navy' : color === 'فحمي' ? 'charcoal' : 'black'}-500 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>نقوش دقيقة...</span>
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
                    <span>قصة عصرية مفصلة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>قماش مطاطي عالي الأداء</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تصميم معاصر</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>مثالية للمهنيين الديناميكيين</span>
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
            الميزات الرئيسية لقمصاننا ذات القصة العصرية
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
            مصممة للمشهد المهني الحديث
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">نسقها مع بدلات عصرية</h3>
                <p className="text-blue-600 mb-4">
                  أكمل مظهرك المهني المعاصر بتنسيق هذه القمصان ذات القصة العصرية مع مجموعتنا من البدلات التنفيذية العصرية للحصول على طقم متناسق وأنيق.
                </p>
                <Link href="/ar/shop/corporate/executive-suits/modern/" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  اكتشف البدلات العصرية <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180" />
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
            أكمل خزانة ملابسك المهنية
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
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ارتقِ إلى الاحترافية العصرية اليوم
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            هل أنت مستعد لتعزيز صورة شركتك مع قمصان العمل ذات القصة العصرية؟ اتصل بنا لطلبات الكميات الكبيرة، أو التخصيص، أو للحصول على مشورة الخبراء.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار للشركات
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              تحدث إلى متخصص
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}