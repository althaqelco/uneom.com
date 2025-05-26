import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowLeftIcon, // For RTL
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  HandRaisedIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي ممرضات احترافي | طقم سكرابز تمريض كامل | UNEOM',
  description: 'يوفر زي الممرضات الاحترافي من UNEOM الراحة والمتانة والأناقة لمتخصصي التمريض في المملكة العربية السعودية. أطقم سكرابز تمريض كاملة مصممة للتميز في الرعاية الصحية.',
  keywords: 'زي ممرضات, سكرابز تمريض, زي رعاية صحية, ملابس تمريض طبية, زي ممرضات سعودي, ملابس تمريض احترافية, سكرابز طبية UNEOM, أطقم زي تمريض',
  openGraph: {
    title: 'زي ممرضات احترافي | UNEOM',
    description: 'أطقم زي تمريض كاملة مصممة للراحة والوظائف العملية والمظهر الاحترافي في المرافق الصحية السعودية.',
    images: ['/images/products/medical/nurse-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: HeartIcon,
    title: 'تصميم محوره المريض',
    description: 'مصمم بعناية مع وضع رعاية المريض في الاعتبار، يتميز بجيوب سهلة الوصول وقصة مريحة للنوبات الطويلة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'مكافحة العدوى',
    description: 'معالجة قماش مضادة للميكروبات وخصائص سهولة العناية تدعم بروتوكولات الوقاية من العدوى.'
  },
  {
    icon: ClockIcon,
    title: 'راحة 12 ساعة',
    description: 'مهندس للارتداء المطول مع قماش ماص للرطوبة وتصميم مريح للراحة طوال اليوم.'
  },
  {
    icon: UserGroupIcon,
    title: 'تنسيق الفريق',
    description: 'متوفر بألوان وأنماط منسقة لدعم تحديد الفريق والوحدة المهنية.'
  }
]

const specifications = [
  { label: 'تركيب القماش', value: 'مزيج بولي-قطن فاخر (65% بوليستر، 35% قطن) مع معالجة مضادة للميكروبات' },
  { label: 'الوزن', value: '180-220 جم/م² للراحة والمتانة المثلى' },
  { label: 'مكونات الطقم', value: 'بلوزة تمريض، بنطلون تمريض، كارديجان اختياري، قميص داخلي اختياري' },
  { label: 'الأنماط المتاحة', value: 'بلوزة V، رقبة دائرية، لف وهمي، بنطلون مستقيم، نمط جوجر' },
  { label: 'الألوان', value: 'كحلي، أزرق سماوي، أبيض، عنابي، تيل (ألوان مخصصة للمرافق)' },
  { label: 'المقاسات', value: 'XS - 4XL، مع خيارات صغيرة وعادية وطويلة' },
  { label: 'الميزات الخاصة', value: 'فتحات جانبية، رباط قابل للتعديل، نقاط ضغط معززة، مقاوم للبهتان' }
]

const includedItems = [
  'بلوزة تمريض احترافية',
  'بنطلون تمريض مطابق',
  'دليل العناية بالزي الصحي من UNEOM',
  'تعليمات المقاسات والقياس المهنية',
  'معلومات العناية المضادة للميكروبات'
]

const idealForNursingRoles = [
  { name: 'الممرضات المسجلات', icon: HeartIcon },
  { name: 'الممرضات المرخصات العمليات', icon: HandRaisedIcon },
  { name: 'طلاب التمريض', icon: AcademicCapIcon },
  { name: 'الممرضات المسؤولات', icon: UserGroupIcon },
  { name: 'ممرضات التخصص', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'معاطف مختبر احترافية',
    image: '/images/products/medical/lab-coats-main.jpg',
    href: '/ar/shop/medical-scrubs/lab-coats/',
    price: 'ابتداءً من 160 ر.س'
  },
  {
    name: 'سكرابز جراحية',
    image: '/images/products/medical/surgical-scrubs-main.jpg',
    href: '/ar/shop/medical-scrubs/surgical-scrubs/',
    price: 'ابتداءً من 200 ر.س'
  },
  {
    name: 'طقم إكسسوارات طبية',
    image: '/images/products/medical/medical-accessories-kit.jpg',
    href: '/ar/shop/medical-accessories/professional-kit/',
    price: 'ابتداءً من 120 ر.س'
  }
]

export default function NurseUniformPageAR() {
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
            <Link href="/ar/shop/medical-scrubs/" className="hover:text-blue-600">السكرابز الطبية</Link>
            <span>/</span>
            <span className="text-gray-900">زي ممرضات</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/medical/nurse-uniform-main.jpg"
                  alt="زي ممرضات احترافي"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-pink-500 cursor-pointer">
                    <Image
                      src={`/images/products/medical/nurse-uniform-detail-${i}.jpg`}
                      alt={`تفاصيل زي الممرضات ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="mr-2 text-sm text-gray-600">(مفضل من قبل متخصصي التمريض)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                زي ممرضات احترافي
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                عزز تميزك في التمريض مع زي الممرضات الاحترافي من UNEOM. مصمم خصيصاً لمتخصصي التمريض في المملكة العربية السعودية، يجمع زينا بين الراحة والوظائف العملية والمظهر الاحترافي لدعم تفانيك في رعاية المرضى.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-pink-600">ابتداءً من 180 ر.س</span>
                <span className="text-lg text-gray-500 mr-2">للطقم الكامل</span>
              </div>
              
              <div className="p-4 bg-pink-50 border-r-4 border-pink-500 mb-6 rounded-md"> {/* Changed border-l to border-r for RTL */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <HeartIcon className="h-6 w-6 text-pink-500" aria-hidden="true" />
                  </div>
                  <div className="mr-3"> {/* Changed ml to mr for RTL */}
                    <p className="text-sm text-pink-700">
                      <strong>دعم التميز في التمريض:</strong> أزياؤنا مصممة لدعم ممارستك المهنية في التمريض بالراحة والوظائف العملية. <Link href="/ar/resources/nursing-uniform-guide" className="font-medium underline hover:text-pink-800">عرض دليل زي التمريض</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/ar/quote?product=nurse-uniform"
                  className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex-1 text-center"
                >
                  احصل على عرض سعر لفريق التمريض
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <SparklesIcon className="h-5 w-5 ml-2 text-pink-500" /> {/* Changed mr to ml for RTL */}
                  أضف إلى خزانة التمريض
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">مزايا التمريض المهنية:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>تصميم محوره المريض</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>مكافحة العدوى</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>راحة 12 ساعة</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" /> {/* Changed mr to ml for RTL */}
                    <span>تنسيق الفريق</span>
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
            مصمم للتميز في التمريض
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Nursing Roles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مثالي لجميع متخصصي التمريض
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForNursingRoles.map((role, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <role.icon className="h-10 w-10 text-pink-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{role.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            مواصفات زي الممرضات
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ميزات المواد والتصميم</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{spec.label}:</span>
                    <span className="text-gray-600 text-left">{spec.value}</span> {/* Changed text-right to text-left for RTL */}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">يشمل طقم التمريض الكامل</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" /> {/* Changed mr to ml for RTL */}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h4 className="text-lg font-semibold text-pink-700 mb-2">وعد التمريض من UNEOM</h4>
                <p className="text-sm text-pink-600">
                  كل زي ممرضات مصمم مع وضع مهنة التمريض في الاعتبار، يدعم التزامك برعاية المرضى بالراحة والاحترافية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            أكمل خزانة ملابس الرعاية الصحية المهنية لديك
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600">{product.name}</h3>
                  <p className="text-pink-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
                  >
                    عرض المنتج
                    <ArrowLeftIcon className="mr-2 h-4 w-4" /> {/* Changed ml to mr and ArrowRight to ArrowLeft for RTL */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ادعم تميزك في التمريض مع الأزياء الاحترافية من UNEOM
          </h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
            انضم إلى آلاف متخصصي التمريض في جميع أنحاء المملكة العربية السعودية الذين يثقون في UNEOM لاحتياجات الزي الموحد. اختبر المزيج المثالي من الراحة والوظائف العملية والمظهر الاحترافي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact?subject=Nurse+Uniform+Inquiry"
              className="bg-white text-pink-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              استشر متخصص زي التمريض
            </Link>
            <Link
              href="/ar/services/healthcare-uniform-program"
              className="border-2 border-pink-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-pink-600 hover:border-white transition-colors text-lg"
            >
              برامج الزي الصحي
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}