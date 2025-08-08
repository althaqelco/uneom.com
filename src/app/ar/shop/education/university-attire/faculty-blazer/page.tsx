import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'بليزر أكاديمي للأساتذة | زي أعضاء هيئة التدريس | أزياء جامعية | يونيوم',
  description: 'بليزر فاخر لأساتذة الجامعات وأعضاء هيئة التدريس الأكاديمية. تصميم راقي مع خليط صوف فاخر، مثالي للمحاضرات والمؤتمرات والفعاليات الأكاديمية الرسمية.',
  keywords: 'بليزر أساتذة السعودية, زي أستاذ جامعي, أزياء أعضاء هيئة التدريس, بليزر مهني المملكة, ملابس جامعية, أزياء أكاديمية رسمية',
  openGraph: {
    title: 'بليزر أكاديمي للأساتذة | زي أعضاء هيئة التدريس | أزياء جامعية | يونيوم',
    description: 'بليزر فاخر لأساتذة الجامعات وأعضاء هيئة التدريس الأكاديمية. تصميم راقي مع خليط صوف فاخر، مثالي للفعاليات الأكاديمية.',
    images: ['/images/products/education/faculty-professional-blazer.jpg']}}

const productFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'التميز الأكاديمي',
    description: 'مصمم ليعكس هيبة ومهنية مؤسسات التعليم العالي.'
  },
  {
    icon: SparklesIcon,
    title: 'مواد فاخرة',
    description: 'قماش صوف فاخر مخلوط مع انسدال فائق وراحة للارتداء طوال اليوم.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'قصة مفصلة',
    description: 'مفصل بخبرة للحصول على شكل أنيق يفرض الاحترام والهيبة.'
  },
  {
    icon: UserIcon,
    title: 'تصميم مهني',
    description: 'تصميم أكاديمي كلاسيكي مناسب للمحاضرات والمؤتمرات والفعاليات الجامعية الرسمية.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: '70% صوف، 25% بوليستر، 5% إيلاستين' },
  { label: 'الوزن', value: '280 جرام لكل متر مربع' },
  { label: 'الألوان المتاحة', value: 'أزرق كحلي، رمادي فحمي، أسود، عنابي' },
  { label: 'المقاسات', value: 'XS-4XL (مقاسات أوروبية)' },
  { label: 'تعليمات العناية', value: 'تنظيف جاف فقط، يُنصح بالكي المهني' },
  { label: 'التخصيص', value: 'شعار الجامعة، شارات الأقسام، تخصيص شخصي' }
]

const includedItems = [
  'بليزر صوف فاخر مخلوط بتصميم جامعي',
  'منديل جيب مطابق (اختياري)',
  'تطريز شعار الجامعة',
  'حقيبة ملابس احترافية',
  'بطاقة تعليمات العناية',
  'دليل تعديلات الخياطة'
]

const academicOccasions = [
  {
    name: 'المحاضرات والندوات',
    description: 'مثالي للتدريس اليومي والعروض الأكاديمية',
    icon: '👨‍🏫'
  },
  {
    name: 'المؤتمرات',
    description: 'مناسب للمؤتمرات الأكاديمية والندوات العلمية',
    icon: '🎓'
  },
  {
    name: 'حفلات التخرج',
    description: 'زي أنيق لفعاليات التخرج والاحتفالات',
    icon: '🎓'
  },
  {
    name: 'اجتماعات مجلس الإدارة',
    description: 'مظهر مهني للاجتماعات الإدارية',
    icon: '📋'
  }
]

const relatedProducts = [
  {
    name: 'قميص أكاديمي رسمي',
    image: '/images/products/education/academic-dress-shirt.jpg',
    href: '/ar/shop/education/university-attire/dress-shirt/',
    price: 'من 180 ريال سعودي'
  },
  {
    name: 'مجموعة ربطات عنق جامعية',
    image: '/images/products/education/university-tie-collection.jpg',
    href: '/ar/shop/education/university-attire/tie-collection/',
    price: 'من 85 ريال سعودي'
  },
  {
    name: 'بنطلون أكاديمي',
    image: '/images/products/education/academic-trousers.jpg',
    href: '/ar/shop/education/university-attire/trousers/',
    price: 'من 220 ريال سعودي'
  }
]

export default function FacultyBlazerPageAR() {
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
            <Link href="/ar/shop/education/university-attire/" className="hover:text-blue-600">الأزياء الجامعية</Link>
            <span>/</span>
            <span className="text-gray-900">بليزر أكاديمي</span>
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
                  src="/images/products/education/faculty-professional-blazer.jpg"
                  alt="بليزر أكاديمي للأساتذة"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-1.jpg"
                    alt="تفاصيل مقدمة البليزر"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-2.jpg"
                    alt="الياقة والأزرار"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-3.jpg"
                    alt="شعار الجامعة"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-4.jpg"
                    alt="المنظر الخلفي"
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
                <span className="mr-2 text-sm text-gray-600">(73 تقييم)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                بليزر أكاديمي للأساتذة
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                بليزر أكاديمي أنيق مصنوع لأعضاء هيئة التدريس الجامعي والمهنيين الأكاديميين. 
                يتميز ببناء صوف فاخر مخلوط وتصميم كلاسيكي مثالي للمحاضرات والمؤتمرات والفعاليات الأكاديمية الرسمية.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">من 350 ريال سعودي</span>
                <span className="text-lg text-gray-500 mr-2">للقطعة</span>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">اختر اللون</h3>
                <div className="flex space-x-3 space-x-reverse">
                  <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-red-900 border-2 border-gray-300 hover:border-blue-500"></button>
                </div>
              </div>

              {/* Customization Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">خيارات التخصيص</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" defaultChecked />
                    <span>تطريز شعار الجامعة</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>شارة القسم</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>تطريز الاسم الشخصي</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2" />
                    <span>منديل جيب مطابق</span>
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
                    <span>خياطة احترافية</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                    <span>تطريز مخصص</span>
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
            مصمم للتميز الأكاديمي
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

      {/* Academic Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي لكل مناسبة أكاديمية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicOccasions.map((occasion, index) => (
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ما يشمله المنتج</h2>
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

      {/* Academic Prestige Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ارتق بحضورك الأكاديمي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              بليزرنا الأكاديمي أكثر من مجرد ملابس—إنه رمز للإنجاز الأكاديمي والتميز المهني. 
              مصمم لفرض الاحترام في قاعات المحاضرات وقاعات الاجتماعات والمؤتمرات الأكاديمية.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingLibraryIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">التراث الجامعي</h3>
              <p className="text-gray-600">
                تصميم أكاديمي كلاسيكي يكرم تقاليد وهيبة مؤسسات التعليم العالي.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">الهيبة المهنية</h3>
              <p className="text-gray-600">
                تصميم أنيق يعزز حضورك المهني ومصداقيتك الأكاديمية.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">حرفية فاخرة</h3>
              <p className="text-gray-600">
                مواد فاخرة وخياطة خبيرة تضمن جودة دائمة وأناقة خالدة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أكمل خزانة ملابسك الأكاديمية
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
            جهز أعضاء هيئة التدريس بالتميز المهني
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل مع متخصصينا الأكاديميين للحصول على أسعار الكميات وخيارات التخصيص لأعضاء هيئة التدريس بجامعتك. 
            عزز الصورة المهنية لمؤسستك بأزياء أكاديمية فاخرة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              احصل على عرض أعضاء هيئة التدريس
              <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              href="/ar/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              تواصل مع متخصص أكاديمي
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}