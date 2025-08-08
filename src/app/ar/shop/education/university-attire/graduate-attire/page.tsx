import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  TrophyIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  GiftIcon,
  CameraIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'أزياء الخريجين الجامعية | ملابس التخرج الأكاديمية | UNEOM',
  description: 'اكتشف مجموعة أزياء الخريجين الجامعية من UNEOM. ملابس التخرج الأكاديمية الفاخرة للاحتفالات الجامعية في المملكة العربية السعودية. عباءات التخرج والقبعات الأكاديمية بأعلى جودة لتخليد لحظات النجاح المتميزة.',
  keywords: 'أزياء الخريجين الجامعية, ملابس التخرج الأكاديمية, عباءات التخرج السعودية, قبعات التخرج الجامعي, أزياء حفل التخرج, ملابس التخرج UNEOM, عباءات أكاديمية فاخرة',
  openGraph: {
    title: 'أزياء الخريجين الجامعية | UNEOM',
    description: 'ملابس التخرج الأكاديمية الفاخرة للاحتفالات الجامعية في المملكة العربية السعودية.',
    images: ['/images/products/education/graduate-attire-main.jpg']}}

const productFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'تصميم أكاديمي تقليدي',
    description: 'عباءات وقبعات تخرج مصممة وفقاً للتقاليد الأكاديمية العالمية مع لمسات تتناسب مع الثقافة السعودية.'
  },
  {
    icon: TrophyIcon,
    title: 'جودة احتفالية فاخرة',
    description: 'أقمشة فاخرة وتشطيبات أنيقة تليق بأهمية لحظة التخرج وتضمن إطلالة مميزة في الصور التذكارية.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'مقاسات دقيقة ومريحة',
    description: 'قياسات دقيقة ومدروسة تضمن الراحة والأناقة طوال حفل التخرج مع حرية الحركة الكاملة.'
  },
  {
    icon: SparklesIcon,
    title: 'تخصيص حسب الجامعة',
    description: 'إمكانية تخصيص الألوان والشعارات والتفاصيل حسب كل جامعة وكلية ودرجة التخرج.'
  }
]

const specifications = [
  { label: 'تركيب الأقمشة', value: 'بوليستر فاخر مقاوم للتجاعيد، أقمشة أكاديمية تقليدية، بطانة حريرية' },
  { label: 'مكونات الزي', value: 'عباءة التخرج، قبعة أكاديمية، شرابة التخرج، غطاء الرأس (للنساء)' },
  { label: 'درجات التخرج', value: 'بكالوريوس، ماجستير، دكتوراه، دبلوم عالي، شهادات مهنية' },
  { label: 'نطاق المقاسات', value: 'جميع المقاسات من XS إلى 4XL للرجال والنساء' },
  { label: 'خيارات الألوان', value: 'ألوان الجامعة الرسمية، أسود تقليدي، كحلي، ألوان الكليات المختلفة' },
  { label: 'التفاصيل الأكاديمية', value: 'شعار الجامعة المطرز، ألوان الكلية، رموز الدرجة العلمية' },
  { label: 'الإكسسوارات', value: 'شرابة ملونة، دبوس الجامعة، شهادة تقدير، حقيبة حفظ فاخرة' }
]

const includedItems = [
  'عباءة التخرج الأكاديمية الفاخرة',
  'قبعة التخرج الأكاديمية التقليدية',
  'شرابة التخرج بألوان الكلية',
  'غطاء رأس أكاديمي (للنساء)',
  'دبوس الجامعة التذكاري',
  'حقيبة حفظ فاخرة',
  'دليل ارتداء الزي الأكاديمي',
  'شهادة تقدير من UNEOM'
]

const graduationLevels = [
  { name: 'البكالوريوس', icon: StarIcon },
  { name: 'الماجستير', icon: TrophyIcon },
  { name: 'الدكتوراه', icon: AcademicCapIcon },
  { name: 'الدبلوم العالي', icon: GiftIcon },
  { name: 'الشهادات المهنية', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'أزياء موظفي الجامعات',
    image: '/images/products/education/university-staff-uniform-main.jpg',
    href: '/ar/shop/education/university-attire/staff-uniform/',
    price: 'ابتداءً من 320 ر.س'
  },
  {
    name: 'إكسسوارات التخرج',
    image: '/images/products/education/graduation-accessories-main.jpg',
    href: '/ar/shop/education/graduation-accessories/',
    price: 'ابتداءً من 80 ر.س'
  },
  {
    name: 'أزياء أكاديمية خاصة',
    image: '/images/products/education/special-academic-attire-main.jpg',
    href: '/ar/shop/education/special-academic-attire/',
    price: 'ابتداءً من 500 ر.س'
  }
]

export default function GraduateAttirePageAR() {
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
            <Link href="/ar/shop/education/" className="hover:text-blue-600">الأزياء التعليمية</Link>
            <span>/</span>
            <Link href="/ar/shop/education/university-attire/" className="hover:text-blue-600">الأزياء الجامعية</Link>
            <span>/</span>
            <span className="text-gray-900">أزياء الخريجين</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-amber-400" />)}
                </div>
                <span className="mr-3 text-amber-400 font-medium">الخيار الأول لحفلات التخرج</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                أزياء الخريجين
                <span className="text-amber-400 block">الأكاديمية الفاخرة</span>
              </h1>
              
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                احتفل بإنجازك الأكاديمي مع مجموعة أزياء التخرج الفاخرة من UNEOM. عباءات وقبعات تخرج أنيقة مصممة لتخليد لحظات النجاح المتميزة في الجامعات السعودية.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ar/quote?product=graduate-attire"
                  className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors text-center"
                >
                  احجز أزياء التخرج
                </Link>
                <Link
                  href="/ar/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-colors text-center"
                >
                  استشارة مجانية
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/education/graduate-attire-hero.jpg"
                  alt="أزياء الخريجين الأكاديمية الفاخرة"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">+10,000</div>
                  <div className="text-sm">خريج سعيد</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار أزياء التخرج من UNEOM؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تصاميم أكاديمية فاخرة تليق بأهمية لحظة التخرج وتخلد ذكريات النجاح للأبد
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            معرض أزياء التخرج الفاخرة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/education/graduate-attire-${i}.jpg`}
                    alt={`زي تخرج أكاديمي ${i}`}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            أزياء لجميع الدرجات الأكاديمية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {graduationLevels.map((level, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <level.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{level.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Moments Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لحظات لا تُنسى تستحق الأفضل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              يوم التخرج هو تتويج لسنوات من الجهد والتفاني، ويستحق أزياء تليق بهذا الإنجاز العظيم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CameraIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">صور تذكارية مثالية</h3>
              <p className="text-gray-600">أزياء أنيقة تضمن إطلالة مميزة في جميع الصور التذكارية</p>
            </div>
            <div className="text-center">
              <HeartIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ذكريات عائلية خالدة</h3>
              <p className="text-gray-600">لحظات فخر واعتزاز تشاركها مع الأهل والأصدقاء</p>
            </div>
            <div className="text-center">
              <TrophyIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">احتفال بالإنجاز</h3>
              <p className="text-gray-600">تتويج مستحق لسنوات من الدراسة والتفوق الأكاديمي</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">مواصفات أزياء التخرج</h3>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-800 text-lg">{spec.label}:</span>
                      <span className="text-gray-600 text-left max-w-md">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-amber-50 p-10 rounded-xl border border-amber-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">تشمل حزمة التخرج الفاخرة</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-amber-600 ml-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-amber-100 rounded-lg border border-amber-300">
                <h4 className="text-xl font-bold text-amber-800 mb-3">ضمان اللحظة المثالية</h4>
                <p className="text-amber-700">
                  نضمن جودة استثنائية وإطلالة مثالية في يوم تخرجك، مع خدمة عملاء متخصصة لضمان رضاك التام.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            استثمر في ذكريات لا تُنسى
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">ابتداءً من 400 ر.س</div>
              <div className="text-xl text-gray-600">للزي الكامل مع جميع الإكسسوارات</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">بكالوريوس</div>
                <div className="text-lg text-gray-600">400 - 550 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">ماجستير</div>
                <div className="text-lg text-gray-600">500 - 650 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">دكتوراه</div>
                <div className="text-lg text-gray-600">600 - 800 ر.س</div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold text-amber-800 mb-2">عروض خاصة للجامعات</h4>
              <p className="text-amber-700">خصم 20% للطلبات الجماعية أكثر من 20 خريج | خدمة توصيل مجانية للجامعات</p>
            </div>
            
            <Link
              href="/ar/quote?product=graduate-attire"
              className="bg-amber-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-amber-700 transition-colors inline-block"
            >
              احجز أزياء التخرج الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            أكمل احتفالك الأكاديمي
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600">{product.name}</h3>
                  <p className="text-amber-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-flex items-center justify-center w-full"
                  >
                    عرض المنتج
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            اجعل يوم تخرجك لا يُنسى
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            احجز أزياء التخرج الفاخرة الآن واحتفل بإنجازك الأكاديمي بأناقة وفخر يليق بهذه اللحظة المميزة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Graduate+Attire+Booking"
              className="bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              احجز الآن
            </Link>
            <Link
              href="/ar/shop/education/"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              تصفح الأزياء التعليمية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}