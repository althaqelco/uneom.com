import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  TruckIcon, 
  CheckCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'طقم الأدوات الطبية المهنية | يونيوم للزي الطبي المتخصص',
  description: 'اكتشف طقم الأدوات الطبية المهنية من يونيوم - مجموعة شاملة من الأدوات الطبية عالية الجودة للمهنيين الصحيين في السعودية. جودة استثنائية وتصميم مبتكر.',
  keywords: 'طقم أدوات طبية, أدوات طبية مهنية, معدات طبية السعودية, أدوات طبية عالية الجودة, طقم طبي متكامل',
  openGraph: {
    title: 'طقم الأدوات الطبية المهنية | يونيوم',
    description: 'طقم شامل من الأدوات الطبية المهنية عالية الجودة للمهنيين الصحيين',
    images: ['/images/products/medical-professional-kit.jpg'],
    locale: 'ar_SA',
  },
  alternates: {
    canonical: '/ar/shop/medical-accessories/professional-kit/',
    languages: {
      'en': '/shop/medical-accessories/professional-kit/',
      'ar': '/ar/shop/medical-accessories/professional-kit/',
    },
  },
}

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'جودة طبية معتمدة',
    description: 'مصنوع من مواد طبية عالية الجودة ومعتمدة دولياً'
  },
  {
    icon: HeartIcon,
    title: 'تصميم مريح',
    description: 'مصمم خصيصاً لراحة المهنيين الصحيين أثناء العمل'
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'مجموعة شاملة',
    description: 'يحتوي على جميع الأدوات الأساسية للعمل الطبي اليومي'
  },
  {
    icon: CogIcon,
    title: 'سهولة الاستخدام',
    description: 'أدوات عملية ومصممة لسهولة الاستخدام والتنظيف'
  }
]

const kitContents = [
  'سماعة طبية عالية الجودة',
  'مقياس ضغط الدم الرقمي',
  'مقياس حرارة رقمي',
  'مصباح فحص LED',
  'مقص طبي من الستانلس ستيل',
  'ملقط طبي متعدد الاستخدامات',
  'حقيبة تنظيم مقاومة للماء',
  'دليل الاستخدام باللغة العربية'
]

const testimonials = [
  {
    name: 'د. فاطمة الأحمد',
    role: 'طبيبة عامة',
    content: 'طقم ممتاز وشامل، جودة الأدوات عالية جداً وتساعدني في عملي اليومي',
    rating: 5
  },
  {
    name: 'أ. محمد السالم',
    role: 'ممرض أول',
    content: 'أفضل استثمار قمت به، الأدوات عملية ومتينة والحقيبة منظمة بشكل ممتاز',
    rating: 5
  }
]

export default function MedicalProfessionalKitPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/ar" className="hover:text-blue-600">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link href="/ar/shop" className="hover:text-blue-600">المتجر</Link>
            <span className="mx-2">/</span>
            <Link href="/ar/shop/medical-accessories" className="hover:text-blue-600">الإكسسوارات الطبية</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">طقم الأدوات المهنية</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  جديد
                </span>
                <span className="mr-2 text-sm text-gray-600">متوفر الآن</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                طقم الأدوات الطبية المهنية
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                مجموعة شاملة من الأدوات الطبية عالية الجودة المصممة خصيصاً للمهنيين الصحيين في السعودية. جودة استثنائية وتصميم مبتكر يلبي احتياجاتك المهنية.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="mr-2 text-sm text-gray-600">(127 تقييم)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  طلب عرض سعر
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  تحميل الكتالوج
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/medical-professional-kit.jpg"
                alt="طقم الأدوات الطبية المهنية"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-8 w-8 text-green-500" />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-900">ضمان الجودة</p>
                    <p className="text-sm text-gray-600">معتمد دولياً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مميزات طقم الأدوات المهنية
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مصمم خصيصاً لتلبية احتياجات المهنيين الصحيين مع أعلى معايير الجودة والأمان
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kit Contents Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                محتويات الطقم
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                يحتوي طقم الأدوات المهنية على جميع الأدوات الأساسية التي يحتاجها المهني الصحي في عمله اليومي
              </p>
              <div className="space-y-4">
                {kitContents.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/medical-kit-contents.jpg"
                alt="محتويات طقم الأدوات الطبية"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              آراء عملائنا
            </h2>
            <p className="text-lg text-gray-600">
              ما يقوله المهنيون الصحيون عن طقم الأدوات المهنية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            احصل على طقم الأدوات المهنية اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            انضم إلى آلاف المهنيين الصحيين الذين يثقون في جودة منتجاتنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              طلب عرض سعر مخصص
            </button>
            <Link 
              href="/ar/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            منتجات ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/ar/shop/medical-scrubs/professional-lab-coat" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/medical-lab-coat.jpg"
                  alt="معطف المختبر المهني"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">معطف المختبر المهني</h3>
                  <p className="text-gray-600 text-sm">معطف طبي عالي الجودة للمهنيين</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/medical-scrubs/clinical-uniform-set" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/clinical-uniform.jpg"
                  alt="طقم الزي الطبي الإكلينيكي"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">طقم الزي الطبي الإكلينيكي</h3>
                  <p className="text-gray-600 text-sm">طقم متكامل للعمل الطبي</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/healthcare-accessories" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/healthcare-accessories.jpg"
                  alt="إكسسوارات الرعاية الصحية"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">إكسسوارات الرعاية الصحية</h3>
                  <p className="text-gray-600 text-sm">مجموعة شاملة من الإكسسوارات الطبية</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}