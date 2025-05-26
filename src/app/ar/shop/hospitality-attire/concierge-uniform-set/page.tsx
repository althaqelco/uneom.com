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
  TrophyIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم زي كونسيرج فاخر | أزياء موظفي الفنادق الراقية | ملابس ضيافة تنفيذية | يونيوم',
  description: 'طقم زي كونسيرج فاخر للفنادق الراقية وأماكن الضيافة المتميزة. تصميم أنيق مع لمسات ذهبية، مثالي لموظفي الاستقبال وخدمات الضيوف وموظفي الضيافة المتميزة.',
  keywords: 'زي كونسيرج السعودية, أزياء موظفي فنادق فاخرة, أزياء ضيافة راقية المملكة, ملابس كونسيرج تنفيذية, زي استقبال فندق, أزياء خدمة VIP',
  openGraph: {
    title: 'طقم زي كونسيرج فاخر | أزياء موظفي الفنادق الراقية | ملابس ضيافة تنفيذية | يونيوم',
    description: 'طقم زي كونسيرج فاخر للفنادق الراقية وأماكن الضيافة المتميزة. تصميم أنيق مع لمسات ذهبية لموظفي الضيافة المتميزة.',
    images: ['/images/products/hospitality/luxury-concierge-uniform-set.jpg'],
  },
}

const productFeatures = [
  {
    icon: TrophyIcon,
    title: 'تصميم فاخر',
    description: 'تصميم أنيق مع لمسات ذهبية راقية وتفاصيل أنيقة تعكس هيبة الضيافة الفاخرة.'
  },
  {
    icon: SparklesIcon,
    title: 'مواد فاخرة',
    description: 'قماش صوف عالي الجودة مخلوط مع انسدال فائق وراحة للارتداء المهني طوال اليوم.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'خياطة تنفيذية',
    description: 'مفصل بخبرة للحصول على شكل مميز يفرض الاحترام ويعكس الهيبة.'
  },
  {
    icon: UserIcon,
    title: 'تصميم يركز على الضيوف',
    description: 'مظهر مهني مصمم لتعزيز ثقة الضيوف وخلق تجارب خدمة لا تُنسى.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '65% صوف، 30% بوليستر، 5% إيلاستين' },
  { label: 'الوزن', value: '260 جرام لكل متر مربع' },
  { label: 'الألوان المتاحة', value: 'كحلي مع ذهبي، رمادي مع فضي، عنابي مع ذهبي، أسود مع ذهبي' },
  { label: 'المقاسات', value: 'XS-4XL (مقاسات أوروبية)' },
  { label: 'تعليمات العناية', value: 'تنظيف جاف فقط، يُنصح بالكي المهني' },
  { label: 'التخصيص', value: 'شعار الفندق، شارات الأسماء، شعارات الأقسام، لمسات ذهبية/فضية' }
]

const includedItems = [
  'بليزر صوف فاخر مخلوط مع لمسات ذهبية',
  'بنطلون رسمي مطابق مع خط جانبي',
  'قميص أبيض مقرمش مع أكمام فرنسية',
  'ربطة عنق حريرية بألوان الفندق',
  'شارة اسم ودبابيس مطلية بالذهب',
  'حقيبة ملابس احترافية',
  'بطاقة تعليمات العناية',
  'منديل جيب أبيض'
]

const serviceAreas = [
  {
    name: 'استقبال المقدمة',
    description: 'مثالي لاستقبال الفنادق الفاخرة وخدمات تسجيل الوصول',
    icon: '🏨'
  },
  {
    name: 'علاقات الضيوف',
    description: 'مناسب لخدمات الضيوف وإدارة الضيافة المتميزة',
    icon: '👥'
  },
  {
    name: 'خدمات الكونسيرج',
    description: 'زي أنيق للكونسيرج ومساعدة الضيوف',
    icon: '🎩'
  },
  {
    name: 'الفعاليات التنفيذية',
    description: 'مظهر مهني للفعاليات الراقية والمناسبات',
    icon: '🎭'
  }
]

const relatedProducts = [
  {
    name: 'بدلة ضيافة تنفيذية',
    image: '/images/products/hospitality/executive-hospitality-suit.jpg',
    href: '/ar/shop/hospitality-attire/executive-hospitality-suit/',
    price: 'من 420 ريال سعودي'
  },
  {
    name: 'زي شيف فاخر',
    image: '/images/products/hospitality/premium-chef-uniform.jpg',
    href: '/ar/shop/hospitality-attire/premium-chef-uniform/',
    price: 'من 280 ريال سعودي'
  },
  {
    name: 'زي فندق فاخر',
    image: '/images/products/hospitality/luxury-hotel-uniform.jpg',
    href: '/ar/shop/hospitality-attire/luxury-hotel-uniform/',
    price: 'من 320 ريال سعودي'
  }
]

export default function ConciergeUniformSetPageAR() {
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
            <Link href="/ar/shop/hospitality-attire/" className="hover:text-blue-600">أزياء الضيافة</Link>
            <span>/</span>
            <span className="text-gray-900">طقم زي كونسيرج</span>
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
                  src="/images/products/hospitality/luxury-concierge-uniform-set.jpg"
                  alt="طقم زي كونسيرج فاخر"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-blazer-detail.jpg"
                    alt="بليزر مع لمسات ذهبية"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-trousers-detail.jpg"
                    alt="تفاصيل البنطلون الرسمي"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-accessories.jpg"
                    alt="الإكسسوارات والشارات"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-full-set.jpg"
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
                طقم زي كونسيرج فاخر
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                طقم زي كونسيرج فاخر مصمم للفنادق الراقية وأماكن الضيافة المتميزة. 
                يتميز بتصميم أنيق مع لمسات ذهبية وبناء صوف فاخر مخلوط للحصول على أقصى درجات الأناقة المهنية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 480 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للطقم الكامل</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر المقاس</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون واللمسات</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" defaultChecked />
                    <span>أزرق كحلي مع لمسات ذهبية</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" />
                    <span>رمادي فحمي مع لمسات فضية</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" />
                    <span>عنابي مع لمسات ذهبية</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="ml-2" />
                    <span>أسود مع لمسات ذهبية</span>
                  </label>
                </div>
              </div>

              {/* Customization Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">خيارات التخصيص</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" defaultChecked />
                    <span>تطريز شعار الفندق</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>شارة اسم شخصية</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>شعار القسم</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>ربطة عنق مخصصة بألوان الفندق</span>
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
                    <span>صوف فاخر مخلوط</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تفاصيل لمسات ذهبية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>طقم كامل مشمول</span>
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
            مصمم للتميز في الضيافة الفاخرة
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

      {/* Service Areas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي لمناطق الخدمة الراقية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-gray-600">{area.description}</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">يشمل الطقم الكامل</h2>
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

      {/* Luxury Experience Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ارتق بتجربة ضيوفك
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              طقم زي الكونسيرج الفاخر لدينا مصمم لخلق انطباع فوري بالأناقة والمهنية. 
              كل تفصيلة تعكس المعايير الراقية التي يتوقعها ضيوفك من الضيافة الفاخرة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">حضور فاخر</h3>
              <p className="text-gray-600">
                تصميم راقي ينقل فوراً معايير الفخامة لمؤسستك.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">تميز العلامة التجارية</h3>
              <p className="text-gray-600">
                تصميم أنيق يعزز صورة علامة فندقك التجارية وثقة الضيوف.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">حرفية راقية</h3>
              <p className="text-gray-600">
                مواد استثنائية وخياطة خبيرة تضمن جودة دائمة وأناقة خالدة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أكمل مجموعة الضيافة الخاصة بك
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
            جهز فندقك الفاخر بأزياء كونسيرج راقية
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل مع متخصصي الضيافة لدينا للحصول على أسعار الكميات وخيارات التخصيص لفندقك الفاخر. 
            اخلق انطباعاً أولاً لا يُنسى مع أزياء كونسيرج راقية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              احصل على عرض فاخر
              <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              تواصل مع متخصص الضيافة
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}