import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'أزياء موظفي الجامعات | ملابس أكاديمية احترافية | UNEOM',
  description: 'اكتشف مجموعة أزياء موظفي الجامعات من UNEOM. ملابس أكاديمية احترافية مصممة خصيصاً لموظفي الجامعات والمؤسسات التعليمية في المملكة العربية السعودية. جودة عالية وتصميم أنيق يعكس الهوية الأكاديمية المتميزة.',
  keywords: 'أزياء موظفي الجامعات, ملابس أكاديمية احترافية, أزياء جامعية سعودية, ملابس موظفي التعليم العالي, أزياء إدارية جامعية, ملابس أكاديمية UNEOM, أزياء مؤسسات تعليمية',
  openGraph: {
    title: 'أزياء موظفي الجامعات | UNEOM',
    description: 'ملابس أكاديمية احترافية مصممة خصيصاً لموظفي الجامعات والمؤسسات التعليمية في المملكة العربية السعودية.',
    images: ['/images/products/education/university-staff-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'تصميم أكاديمي متميز',
    description: 'تصاميم أنيقة ومهنية تعكس الطابع الأكاديمي المتميز وتعزز الهوية المؤسسية للجامعات والمؤسسات التعليمية.'
  },
  {
    icon: UserGroupIcon,
    title: 'مناسبة لجميع الأقسام',
    description: 'تصاميم متنوعة تناسب موظفي الإدارة، المكتبات، الخدمات الطلابية، والأقسام الأكاديمية المختلفة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'جودة وراحة فائقة',
    description: 'أقمشة عالية الجودة مريحة للاستخدام اليومي، مقاومة للتجاعيد وسهلة العناية والصيانة.'
  },
  {
    icon: SparklesIcon,
    title: 'إمكانية التخصيص',
    description: 'خيارات تخصيص متنوعة تشمل شعار الجامعة، الألوان المؤسسية، والتفاصيل الخاصة بكل قسم أو كلية.'
  }
]

const specifications = [
  { label: 'تركيب الأقمشة', value: 'قطن مخلوط عالي الجودة، بوليستر مقاوم للتجاعيد، أقمشة قابلة للتنفس' },
  { label: 'أنواع الأزياء', value: 'قمصان رسمية، بلوزات أنيقة، بدلات إدارية، سترات أكاديمية، فساتين مهنية' },
  { label: 'خيارات التصميم', value: 'تصميم كلاسيكي، عصري، محافظ، مناسب للثقافة السعودية' },
  { label: 'نطاق المقاسات', value: 'جميع المقاسات للرجال والنساء من XS إلى 4XL' },
  { label: 'خيارات الألوان', value: 'ألوان الجامعة الرسمية، أزرق أكاديمي، رمادي، أبيض، ألوان مخصصة' },
  { label: 'التفاصيل المميزة', value: 'شعار الجامعة المطرز، أزرار مخصصة، جيوب وظيفية، تفاصيل أكاديمية' },
  { label: 'العناية والصيانة', value: 'قابلة للغسيل في الغسالة، مقاومة للبقع، سهلة الكي' }
]

const includedItems = [
  'زي موظف جامعي كامل (قميص/بلوزة + بنطلون/تنورة)',
  'سترة أكاديمية (حسب المنصب)',
  'شارة الجامعة المطرزة',
  'دليل الزي الرسمي',
  'كيس حفظ مخصص',
  'دليل العناية والصيانة',
  'ضمان الجودة لمدة سنة واحدة'
]

const universityDepartments = [
  { name: 'الإدارة الأكاديمية', icon: BuildingLibraryIcon },
  { name: 'المكتبات الجامعية', icon: BookOpenIcon },
  { name: 'الخدمات الطلابية', icon: UserGroupIcon },
  { name: 'تقنية المعلومات', icon: ComputerDesktopIcon },
  { name: 'الشؤون الإدارية', icon: ClipboardDocumentListIcon }
]

const relatedProducts = [
  {
    name: 'أزياء الخريجين الجامعية',
    image: '/images/products/education/graduate-attire-main.jpg',
    href: '/ar/shop/education/university-attire/graduate-attire/',
    price: 'ابتداءً من 400 ر.س'
  },
  {
    name: 'أزياء المعلمين',
    image: '/images/products/education/teacher-uniform-main.jpg',
    href: '/ar/shop/education/staff-uniforms/teacher-uniform/',
    price: 'ابتداءً من 250 ر.س'
  },
  {
    name: 'بدلات إدارية تعليمية',
    image: '/images/products/education/admin-suit-main.jpg',
    href: '/ar/shop/education/staff-uniforms/admin-suit/',
    price: 'ابتداءً من 600 ر.س'
  }
]

export default function UniversityStaffUniformPageAR() {
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
            <span className="text-gray-900">أزياء موظفي الجامعات</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-purple-400" />)}
                </div>
                <span className="mr-3 text-purple-400 font-medium">الخيار الأول للجامعات السعودية</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                أزياء موظفي
                <span className="text-purple-400 block">الجامعات الاحترافية</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                اكتشف مجموعة الأزياء الأكاديمية المتميزة المصممة خصيصاً لموظفي الجامعات والمؤسسات التعليمية. تصاميم أنيقة ومهنية تعكس الهوية الأكاديمية المتميزة في المملكة العربية السعودية.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/ar/quote?product=university-staff-uniform"
                  className="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-400 transition-colors text-center"
                >
                  احصل على عرض سعر للجامعة
                </Link>
                <Link
                  href="/ar/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  استشارة أكاديمية مجانية
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/education/university-staff-uniform-hero.jpg"
                  alt="أزياء موظفي الجامعات الاحترافية"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">+50</div>
                  <div className="text-sm">جامعة ومؤسسة</div>
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
              لماذا تختار أزياءنا الأكاديمية؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تصاميم مهنية متميزة تعكس الطابع الأكاديمي وتعزز الهوية المؤسسية للجامعات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-purple-600" />
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
            معرض الأزياء الأكاديمية
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/education/university-staff-uniform-${i}.jpg`}
                    alt={`زي موظف جامعي ${i}`}
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

      {/* University Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            مناسبة لجميع الأقسام الجامعية
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {universityDepartments.map((department, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <department.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{department.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">مواصفات الأزياء الأكاديمية</h3>
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
            
            <div className="bg-purple-50 p-10 rounded-xl border border-purple-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">تشمل الحزمة الأكاديمية</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-purple-600 ml-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-purple-100 rounded-lg border border-purple-300">
                <h4 className="text-xl font-bold text-purple-800 mb-3">ضمان الجودة الأكاديمية</h4>
                <p className="text-purple-700">
                  نضمن جودة عالية ومتانة لمدة سنة كاملة، مع خدمة صيانة مجانية وإمكانية التعديل حسب الحاجة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            أسعار تنافسية للمؤسسات التعليمية
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">ابتداءً من 320 ر.س</div>
              <div className="text-xl text-gray-600">للزي الواحد شامل التخصيص</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">زي إداري</div>
                <div className="text-lg text-gray-600">320 - 450 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">زي أكاديمي</div>
                <div className="text-lg text-gray-600">380 - 520 ر.س</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">زي تنفيذي</div>
                <div className="text-lg text-gray-600">450 - 600 ر.س</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold text-purple-800 mb-2">خصومات خاصة للجامعات</h4>
              <p className="text-purple-700">خصم 15% للطلبات أكثر من 50 قطعة | خصم 25% للطلبات أكثر من 100 قطعة</p>
            </div>
            
            <Link
              href="/ar/quote?product=university-staff-uniform"
              className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-purple-700 transition-colors inline-block"
            >
              احصل على عرض سعر للجامعة
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            أكمل الهوية الأكاديمية
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">{product.name}</h3>
                  <p className="text-purple-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            عزز الهوية الأكاديمية لجامعتك
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            تواصل مع خبرائنا للحصول على استشارة مجانية وتصميم أزياء أكاديمية مخصصة تعكس هوية جامعتك المتميزة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=University+Staff+Uniform+Consultation"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              استشارة أكاديمية مجانية
            </Link>
            <Link
              href="/ar/shop/education/"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              تصفح الأزياء التعليمية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}