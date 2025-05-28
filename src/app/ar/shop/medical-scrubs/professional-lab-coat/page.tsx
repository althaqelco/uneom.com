import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  SwatchIcon,
  ScissorsIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'معطف المختبر المهني | يونيوم للأزياء الطبية المتخصصة',
  description: 'اكتشف معطف المختبر المهني من يونيوم - مصنوع من أجود الخامات الطبية مع تصميم عصري ومريح للأطباء والمختصين في السعودية. جودة استثنائية ومقاومة للبقع.',
  keywords: 'معطف مختبر طبي, معطف طبي مهني, زي طبي السعودية, معطف أطباء عالي الجودة, معطف مختبر أبيض',
  openGraph: {
    title: 'معطف المختبر المهني | يونيوم',
    description: 'معطف مختبر طبي عالي الجودة مصمم خصيصاً للمهنيين الصحيين',
    images: ['/images/products/professional-lab-coat.jpg'],
    locale: 'ar_SA',
  },
  alternates: {
    canonical: '/ar/shop/medical-scrubs/professional-lab-coat/',
    languages: {
      'en': '/shop/medical-scrubs/professional-lab-coat/',
      'ar': '/ar/shop/medical-scrubs/professional-lab-coat/',
    },
  },
}

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'مقاوم للبقع والسوائل',
    description: 'نسيج متطور يقاوم البقع والسوائل الطبية مع سهولة التنظيف'
  },
  {
    icon: SparklesIcon,
    title: 'مضاد للبكتيريا',
    description: 'معالج بتقنية مضادة للبكتيريا لحماية إضافية في البيئة الطبية'
  },
  {
    icon: HeartIcon,
    title: 'تصميم مريح',
    description: 'قصة مريحة تسمح بحرية الحركة أثناء العمل الطبي'
  },
  {
    icon: SwatchIcon,
    title: 'ألوان متعددة',
    description: 'متوفر بألوان مختلفة لتناسب احتياجات المؤسسات الطبية'
  }
]

const specifications = [
  { label: 'المادة', value: 'قطن مخلوط عالي الجودة 65% قطن، 35% بوليستر' },
  { label: 'الوزن', value: '180 جرام/متر مربع' },
  { label: 'المقاسات المتوفرة', value: 'XS إلى 5XL' },
  { label: 'الألوان', value: 'أبيض، أزرق فاتح، أخضر طبي، رمادي' },
  { label: 'الجيوب', value: '3 جيوب أمامية + جيب صدر' },
  { label: 'الإغلاق', value: 'أزرار مخفية أو سحاب حسب الطلب' },
  { label: 'العناية', value: 'قابل للغسل في الغسالة حتى 60 درجة' },
  { label: 'الضمان', value: 'ضمان الجودة لمدة 12 شهر' }
]

const testimonials = [
  {
    name: 'د. سارة المطيري',
    role: 'استشارية أمراض باطنة',
    content: 'معطف ممتاز، مريح جداً ويحافظ على شكله حتى بعد الغسيل المتكرر. الجودة عالية والتصميم أنيق',
    rating: 5,
    hospital: 'مستشفى الملك فهد'
  },
  {
    name: 'د. أحمد الزهراني',
    role: 'طبيب مختبرات',
    content: 'أفضل معطف استخدمته، مقاوم للبقع بشكل ممتاز ولا يحتاج لكي كثير. أنصح به بشدة',
    rating: 5,
    hospital: 'مجمع الملك سلمان الطبي'
  }
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']
const colors = [
  { name: 'أبيض كلاسيكي', code: '#FFFFFF', popular: true },
  { name: 'أزرق طبي', code: '#4A90E2', popular: true },
  { name: 'أخضر مستشفى', code: '#27AE60', popular: false },
  { name: 'رمادي فاتح', code: '#BDC3C7', popular: false }
]

export default function ProfessionalLabCoatPage() {
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
            <Link href="/ar/shop/medical-scrubs" className="hover:text-blue-600">الأزياء الطبية</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">معطف المختبر المهني</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  الأكثر مبيعاً
                </span>
                <span className="mr-2 text-sm text-gray-600">متوفر بجميع المقاسات</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                معطف المختبر المهني
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                معطف مختبر طبي عالي الجودة مصمم خصيصاً للأطباء والمختصين في المختبرات والمستشفيات. مصنوع من أجود الخامات مع تقنيات متطورة لمقاومة البقع والبكتيريا.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="mr-2 text-sm text-gray-600">(243 تقييم)</span>
                <span className="mr-4 text-sm text-green-600 font-medium">98% رضا العملاء</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  طلب عرض سعر
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  عينة مجانية
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/professional-lab-coat.jpg"
                alt="معطف المختبر المهني"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <SparklesIcon className="h-8 w-8 text-blue-500" />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-900">مضاد للبكتيريا</p>
                    <p className="text-sm text-gray-600">حماية متقدمة</p>
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
              مميزات معطف المختبر المهني
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مصمم بأحدث التقنيات لتوفير الراحة والحماية والأناقة للمهنيين الصحيين
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

      {/* Colors and Sizes Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                الألوان المتوفرة
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                اختر من مجموعة الألوان المتوفرة لتناسب احتياجات مؤسستك الطبية
              </p>
              <div className="grid grid-cols-2 gap-4">
                {colors.map((color, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-gray-300 ml-3"
                      style={{ backgroundColor: color.code }}
                    ></div>
                    <div>
                      <p className="font-medium text-gray-900">{color.name}</p>
                      {color.popular && (
                        <span className="text-xs text-blue-600 font-medium">الأكثر طلباً</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                المقاسات المتوفرة
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                جميع المقاسات متوفرة من XS إلى 5XL لضمان الراحة المثلى
              </p>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size, index) => (
                  <div key={index} className="text-center p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <span className="font-semibold text-gray-900">{size}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>نصيحة:</strong> للحصول على أفضل مقاس، يرجى الرجوع إلى دليل المقاسات أو طلب عينة للتجربة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المواصفات التقنية
            </h2>
            <p className="text-lg text-gray-600">
              تفاصيل شاملة عن معطف المختبر المهني
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-900">{spec.label}:</span>
                  <span className="text-gray-600 text-left">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              آراء الأطباء والمختصين
            </h2>
            <p className="text-lg text-gray-600">
              ما يقوله المهنيون الصحيون عن معطف المختبر المهني
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
                  <p className="text-xs text-blue-600">{testimonial.hospital}</p>
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
            احصل على معطف المختبر المهني اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            انضم إلى آلاف الأطباء والمختصين الذين يثقون في جودة منتجاتنا
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
            <Link href="/ar/shop/medical-accessories/professional-kit" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/medical-professional-kit.jpg"
                  alt="طقم الأدوات الطبية المهنية"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">طقم الأدوات الطبية المهنية</h3>
                  <p className="text-gray-600 text-sm">مجموعة شاملة من الأدوات الطبية</p>
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