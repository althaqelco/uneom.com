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
  title: 'قمصان بولو شركات كلاسيكية | بولو بيكيه تقليدي | يونيوم',
  description: 'قمصان بولو شركات كلاسيكية خالدة. مصنوعة من مزيج قطن بيكيه متين، توفر الراحة ومظهرًا كاجوال أنيقًا احترافيًا للفرق في المملكة العربية السعودية.',
  keywords: 'قمصان بولو كلاسيكية, بولو بيكيه شركات, قمصان بولو تقليدية السعودية, قمصان بولو للفرق, بولو كاجوال مريح',
  openGraph: {
    title: 'قمصان بولو شركات كلاسيكية | بولو بيكيه تقليدي | يونيوم',
    description: 'قمصان بولو بيكيه كلاسيكية متينة ومريحة، مثالية لمظهر شركات كاجوال أنيق وخالد.',
    images: ['/images/products/corporate/classic-polo-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: UserIcon,
    title: 'تصميم كلاسيكي خالد',
    description: 'تصميم بولو تقليدي مع قصة مريحة، ياقة وأصفاد مضلعة، وفتحة كلاسيكية بزرين أو ثلاثة.'
  },
  {
    icon: SparklesIcon,
    title: 'قماش بيكيه متين',
    description: 'مصنوع من قطن بيكيه عالي الجودة أو مزيج قطن وبوليستر للتهوية والراحة والارتداء الدائم.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'مصممة لتدوم طويلاً',
    description: 'خياطة معززة وجودة تصنيع تضمن تحمل هذه القمصان البولو للارتداء والغسيل المنتظم.'
  },
  {
    icon: TagIcon,
    title: 'ممتازة للعلامات التجارية',
    description: 'قماش مثالي للتطريز أو طباعة الشاشة، مثالية لهوية الشركات وأزياء الفرق الموحدة.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '65% قطن، 35% بوليستر بيكيه (نموذجي، يختلف حسب الطراز)' },
  { label: 'الوزن', value: '180-220 جم/م²' },
  { label: 'الألوان المتاحة', value: 'مجموعة واسعة تشمل الكحلي، الأسود، الأبيض، الأزرق الملكي، الأحمر، الأخضر، الرمادي، إلخ.' },
  { label: 'المقاسات', value: 'XS-5XL (تتوفر قصات للجنسين ومحددة للجنس)' },
  { label: 'الميزات', value: 'ياقة وأصفاد مضلعة، فتحات جانبية، شريط رقبة مسجل' },
  { label: 'تعليمات العناية', value: 'غسيل آلي دافئ، تجفيف متوسط، كي بارد إذا لزم الأمر' },
  { label: 'التخصيص', value: 'تطريز، طباعة شاشة، مطابقة ألوان مخصصة للطلبات الكبيرة' }
]

const includedItems = [
  'قميص بولو شركات كلاسيكي',
  'زر احتياطي اختياري',
  'تغليف بوليباغ قياسي'
]

const occasions = [
  {
    name: 'ملابس كاجوال أنيقة يومية',
    description: 'مريحة واحترافية لملابس المكتب اليومية.',
    icon: '👔'
  },
  {
    name: 'أزياء موحدة للفرق',
    description: 'اخلق مظهرًا موحدًا يحمل علامتك التجارية لموظفيك.',
    icon: '👥'
  },
  {
    name: 'فعاليات الشركات والمعارض التجارية',
    description: 'احترافية ودودة لتمثيل شركتك.',
    icon: '🏢'
  },
  {
    name: 'هدايا ترويجية',
    description: 'ملابس عالية الجودة تحمل علامتك التجارية للتسويق.',
    icon: '🎁'
  }
]

const relatedProducts = [
  {
    name: 'قمصان بولو عالية الأداء',
    image: '/images/products/corporate/performance-polo-shirts.jpg',
    href: '/ar/shop/corporate/casual-polo/performance/',
    price: 'من 90 ريال سعودي'
  },
  {
    name: 'بولو شركات فاخر',
    image: '/images/products/corporate/premium-corporate-polos.jpg',
    href: '/ar/shop/corporate/casual-polo/premium-corporate/',
    price: 'من 120 ريال سعودي'
  },
  {
    name: 'قمصان عمل كلاسيكية',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/classic/',
    price: 'من 120 ريال سعودي'
  }
]

export default function ClassicPoloPageAR() {
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
            <span className="text-gray-900">كلاسيكي</span>
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
                  src="/images/products/corporate/classic-polo-main.jpg"
                  alt="قميص بولو شركات كلاسيكي"
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
                      src={`/images/products/corporate/classic-polo-detail-${i}.jpg`}
                      alt={`تفاصيل بولو كلاسيكي ${i}`}
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
                  <StarIcon className="h-5 w-5 text-yellow-400" /> 
                </div>
                <span className="mr-2 text-sm text-gray-600">(320 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                قمصان بولو شركات كلاسيكية
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                تقدم قمصان البولو الكلاسيكية للشركات مظهرًا كاجوال أنيقًا وخالدًا. مصنوعة من أقمشة بيكيه مريحة ومتينة، وهي مثالية لأزياء الفرق الموحدة وفعاليات الشركات والملابس المهنية اليومية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 75 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للقميص</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'].map((size) => (
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
                  {['كحلي', 'أسود', 'أبيض', 'أزرق ملكي', 'أحمر', 'رمادي'].map(color => (
                    <button key={color} className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color === 'أبيض' ? 'white' : color === 'أسود' ? 'black' : color.toLowerCase().replace(' ', '-')}-500 border`}></span>
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
                    <span>قماش بيكيه متين</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>قصة كلاسيكية مريحة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>مجموعة ألوان واسعة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>مثالية للتطريز</span>
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
            لماذا تتميز قمصان البولو الكلاسيكية لدينا
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
            متعددة الاستخدامات لمختلف احتياجات الشركات
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">المواصفات التفصيلية</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ما الذي تستلمه</h2>
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">خيارات العلامات التجارية المخصصة</h3>
                <p className="text-blue-600 mb-4">
                  عزز هوية شركتك بإضافة شعارك أو نص مخصص من خلال خدمات التطريز أو طباعة الشاشة الاحترافية لدينا.
                </p>
                <Link href="/ar/services/custom-design/#embroidery-printing" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  تعرف على العلامات التجارية <ArrowRightIcon className="mr-1 h-4 w-4 rotate-180" />
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
            اكتشف أنماط بولو وملابس شركات أخرى
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
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جهز فريقك بقمصان بولو كلاسيكية واحترافية
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            تعتبر قمصان البولو الكلاسيكية للشركات خيارًا موثوقًا به لمظهر فريق ذكي وموحد. اتصل بنا للحصول على أسعار الكميات الكبيرة والتخصيص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?item=classic-polo"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار للكميات
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors text-lg"
            >
              اتصل بفريقنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}