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
  TrophyIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'قمصان بولو شركات فاخرة | بولو كاجوال فاخر | يونيوم',
  description: 'ارتقِ بملابس الشركات الكاجوال مع قمصان البولو الفاخرة. مصنوعة من أقمشة فاخرة مثل القطن المرسيري، وتتميز بتفاصيل مصقولة لمظهر أنيق في المملكة العربية السعودية.',
  keywords: 'قمصان بولو فاخرة, بولو شركات فاخر, بولو قطن مرسيري السعودية, بولو كاجوال تنفيذي, بولو فرق راقي',
  openGraph: {
    title: 'قمصان بولو شركات فاخرة | بولو كاجوال فاخر | يونيوم',
    description: 'جرب الجودة الفائقة والأناقة المصقولة مع قمصان البولو الفاخرة للشركات، المصممة لمظهر كاجوال مميز.',
    images: ['/images/products/corporate/premium-polo-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: TrophyIcon,
    title: 'أقمشة فاخرة',
    description: 'مصنوعة من أجود المواد مثل القطن المرسيري أو الخلطات الفاخرة لنعومة ولمعان وشعور استثنائي.'
  },
  {
    icon: SparklesIcon,
    title: 'تفاصيل مصقولة',
    description: 'عناصر تصميم أنيقة تشمل أزرار عالية الجودة، ياقات أنيقة، وخياطة دقيقة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'متانة وراحة معززة',
    description: 'تصنيع فائق يضمن ارتداءً دائمًا مع توفير راحة لا مثيل لها للمهني المتميز.'
  },
  {
    icon: UserIcon,
    title: 'صورة شركة راقية',
    description: 'يعكس صورة من الجودة والاهتمام بالتفاصيل، مثالي للملابس التنفيذية الكاجوال وفعاليات كبار الشخصيات.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '100% قطن مرسيري، قطن بيما، أو مزيج قطن فاخر' },
  { label: 'الوزن', value: '160-200 جم/م²' },
  { label: 'الألوان المتاحة', value: 'درجات ألوان جواهر غنية، ألوان محايدة أنيقة، ألوان شركات كلاسيكية مع خيارات صباغة مخصصة' },
  { label: 'المقاسات', value: 'S-3XL (تتوفر قصات مفصلة وكلاسيكية)' },
  { label: 'الميزات', value: 'ياقة من نفس القماش، أزرار فاخرة (مثل تأثير عرق اللؤلؤ)، أصفاد مضلعة دقيقة' },
  { label: 'تعليمات العناية', value: 'غسيل آلي بارد دورة لطيفة، تجفيف مسطح أو تجفيف منخفض، كي بارد' },
  { label: 'التخصيص', value: 'تطريز شعار دقيق، تفاصيل فتحة أزرار مخصصة، أطراف متباينة' }
]

const includedItems = [
  'قميص بولو شركات فاخر',
  'حقيبة ملابس فاخرة (اختياري)',
  'بطاقة العناية بالقماش'
]

const occasions = [
  {
    name: 'أيام الجمعة الكاجوال التنفيذية',
    description: 'خيار أنيق ومريح في نفس الوقت لقادة الأعمال.',
    icon: '👔'
  },
  {
    name: 'فعاليات الشركات رفيعة المستوى',
    description: 'اترك انطباعًا مصقولًا في التجمعات الهامة.',
    icon: '⭐' 
  },
  {
    name: 'ترفيه العملاء وأيام الجولف',
    description: 'اجمع بين الراحة وانطباع الجودة.',
    icon: '⛳'
  },
  {
    name: 'ملابس الفرق المتميزة',
    description: 'جهز أعضاء فريقك الرئيسيين بملابس كاجوال مميزة.',
    icon: '🏆'
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
    name: 'قمصان بولو عالية الأداء',
    image: '/images/products/corporate/performance-polo-shirts.jpg',
    href: '/ar/shop/corporate/casual-polo/performance/',
    price: 'من 90 ريال سعودي'
  },
  {
    name: 'قمصان رسمية فاخرة',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/premium-dress/',
    price: 'من 250 ريال سعودي'
  }
]

export default function PremiumPoloPageAR() {
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
            <span className="text-gray-900">فاخر للشركات</span>
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
                  src="/images/products/corporate/premium-polo-main.jpg"
                  alt="قميص بولو شركات فاخر"
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
                      src={`/images/products/corporate/premium-polo-detail-${i}.jpg`}
                      alt={`تفاصيل بولو فاخر ${i}`}
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
                <span className="mr-2 text-sm text-gray-600">(125 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قمصان بولو شركات فاخرة
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                انغمس في الجودة الفائقة والأناقة المصقولة لقمصان البولو الفاخرة للشركات. مصنوعة من أقمشة فاخرة مع اهتمام دقيق بالتفاصيل، تقدم هذه القمصان البولو مظهرًا كاجوال أنيقًا وراقيًا للمهنيين المميزين.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 120 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للقميص</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
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
                  {['كحلي عميق', 'أبيض لؤلؤي', 'عنابي', 'فحمي مرقط', 'أخضر غابي'].map(color => (
                    <button key={color} className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color.split(' ')[0].toLowerCase()}-700 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>خيارات صباغة مخصصة...</span>
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
                    <span>قطن مرسيري فاخر</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تفاصيل مصقولة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>راحة وشعور فائقان</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>أناقة شركات راقية</span>
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
            جرب جودة لا هوادة فيها
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
            مثالية لإعدادات الشركات المتميزة
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات الفاخرة</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">عبوتك الفاخرة</h2>
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">خيارات علامات تجارية مفصلة</h3>
                <p className="text-blue-600 mb-4">
                  للحصول على لمسة حصرية حقًا، ضع في اعتبارك المونوغرام الدقيق، أو الأقمشة المصبوغة خصيصًا، أو تفاصيل فتحة الأزرار الفريدة لتعكس المكانة المتميزة لعلامتك التجارية.
                </p>
                <Link href="/ar/services/custom-design/#premium-customization" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  اكتشف التخصيص الفاخر <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180" />
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
            اكتشف أساسيات شركات أخرى
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
      <section className="py-16 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            حدد حضورك التنفيذي مع قمصان البولو الفاخرة
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            استثمر في أرقى ملابس الشركات الكاجوال. اتصل بخبراء الملابس الفاخرة لدينا للحصول على خدمة شخصية ومناقشة احتياجات فريقك التنفيذي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?item=premium-polo"
              className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار فاخر
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors text-lg"
            >
              تحدث إلى خبير
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}