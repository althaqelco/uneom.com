import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOfficeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'البدلة التنفيذية للضيافة | ملابس إدارية فاخرة للفنادق | يونيوم',
  description: 'بدلات تنفيذية فاخرة للإدارة العليا في الفنادق والمنتجعات. ملابس إدارية راقية تعكس مستوى الخدمة المتميز والاحترافية في قطاع الضيافة بالمملكة العربية السعودية.',
  keywords: 'بدلة تنفيذية ضيافة, ملابس إدارية فنادق, بدلة مدير فندق السعودية, ملابس تنفيذية راقية, زي إداري فاخر',
  openGraph: {
    title: 'البدلة التنفيذية للضيافة | ملابس إدارية فاخرة للفنادق | يونيوم',
    description: 'بدلات تنفيذية راقية مصممة للإدارة العليا في قطاع الضيافة مع أعلى معايير الجودة والأناقة.',
    images: ['/images/hospitality/executive-hospitality-suit.jpg'],
  },
}

const executiveFeatures = [
  {
    icon: BuildingOfficeIcon,
    title: 'تصميم تنفيذي راقي',
    description: 'قصة أنيقة ومهنية تعكس المكانة التنفيذية والاحترافية في قطاع الضيافة.'
  },
  {
    icon: SparklesIcon,
    title: 'خامات فاخرة',
    description: 'أقمشة عالية الجودة مستوردة من أفضل المصانع العالمية مع ملمس ناعم ومظهر أنيق.'
  },
  {
    icon: UserGroupIcon,
    title: 'انطباع احترافي',
    description: 'تصميم يترك انطباعًا إيجابيًا لدى الضيوف ويعكس مستوى الخدمة المتميز.'
  },
  {
    icon: StarIcon,
    title: 'راحة طوال اليوم',
    description: 'تصميم مريح يسمح بحرية الحركة أثناء المهام الإدارية والاجتماعات الطويلة.'
  }
]

const executiveStyles = [
  {
    name: 'البدلة التنفيذية الكلاسيكية',
    description: 'تصميم كلاسيكي أنيق للمدراء التنفيذيين في الفنادق الراقية',
    features: ['قصة كلاسيكية أنيقة', 'ألوان محافظة راقية', 'خياطة دقيقة', 'تفاصيل تقليدية مميزة'],
    occasions: ['الاجتماعات الرسمية', 'استقبال الضيوف المهمين', 'المناسبات الرسمية']
  },
  {
    name: 'البدلة التنفيذية العصرية',
    description: 'تصميم عصري متطور للإدارة الحديثة في المنتجعات والفنادق',
    features: ['قصة عصرية أنيقة', 'ألوان عصرية متنوعة', 'تصميم مبتكر', 'لمسات حديثة مميزة'],
    occasions: ['الاجتماعات التنفيذية', 'المؤتمرات', 'الفعاليات الحديثة']
  },
  {
    name: 'البدلة التنفيذية الفاخرة',
    description: 'أعلى مستويات الفخامة للإدارة العليا في الفنادق الفخمة',
    features: ['خامات فاخرة مستوردة', 'خياطة يدوية دقيقة', 'تفاصيل ذهبية', 'تصميم حصري مميز'],
    occasions: ['المناسبات الخاصة', 'استقبال الشخصيات المهمة', 'الفعاليات الفاخرة']
  }
]

const customizationOptions = [
  'تطريز الشعار والاسم بخيوط ذهبية',
  'اختيار الألوان حسب هوية الفندق',
  'قياسات مخصصة دقيقة',
  'خيارات الأقمشة الفاخرة',
  'تفاصيل مخصصة (أزرار، بطانة، إلخ)',
  'إكسسوارات مطابقة (ربطة عنق، جيب مربع)'
]

export default function ExecutiveHospitalitySuitPageAR() {
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
            <Link href="/ar/shop/hospitality-attire/" className="hover:text-blue-600">ملابس الضيافة</Link>
            <span>/</span>
            <span className="text-gray-900">البدلة التنفيذية للضيافة</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hospitality/executive-hospitality-suit.jpg"
            alt="خلفية البدلة التنفيذية للضيافة"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BuildingOfficeIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            البدلة التنفيذية للضيافة
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto">
            بدلات تنفيذية فاخرة مصممة للإدارة العليا في الفنادق والمنتجعات، تجمع بين الأناقة والاحترافية لتعكس مستوى الخدمة المتميز.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=executive-hospitality-suit"
              className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار تنفيذي
            </Link>
            <Link
              href="/ar/contact/?subject=Executive Hospitality Suit Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors text-lg"
            >
              استشارة مجانية
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                الأناقة التنفيذية في قطاع الضيافة
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم البدلات التنفيذية لدينا خصيصًا للإدارة العليا في قطاع الضيافة. نحن نفهم أهمية الانطباع الأول والمظهر الاحترافي في صناعة الضيافة، لذلك نقدم بدلات تجمع بين أعلى معايير الجودة والأناقة والراحة.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">مظهر تنفيذي مميز</h3>
                    <p className="text-gray-600">تصميم يعكس المكانة التنفيذية والاحترافية</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">خامات فاخرة</h3>
                    <p className="text-gray-600">أقمشة عالية الجودة مستوردة من أفضل المصانع</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">راحة استثنائية</h3>
                    <p className="text-gray-600">تصميم مريح للاجتماعات والمهام الطويلة</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hospitality/executive-hospitality-suit.jpg"
                alt="تفاصيل البدلة التنفيذية للضيافة"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ميزات البدلة التنفيذية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل تفصيلة مصممة لتعكس المستوى التنفيذي والاحترافية في قطاع الضيافة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Styles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مجموعة البدلات التنفيذية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تشكيلة متنوعة من البدلات التنفيذية لتناسب جميع المناسبات والمستويات الإدارية.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {executiveStyles.map((style) => (
              <div key={style.name} className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{style.name}</h3>
                <p className="text-gray-600 mb-4">{style.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">المميزات:</h4>
                  <ul className="space-y-1">
                    {style.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">المناسبات:</h4>
                  <ul className="space-y-1">
                    {style.occasions.map((occasion, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <StarSolidIcon className="h-4 w-4 text-yellow-500 ml-2 flex-shrink-0" />
                        {occasion}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <Link
                    href="/ar/quote/?category=executive-hospitality-suit"
                    className="bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                  >
                    طلب عرض أسعار
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            خيارات التخصيص التنفيذية
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            صمم بدلتك التنفيذية لتعكس هوية فندقك ومكانتك الإدارية بأدق التفاصيل.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {customizationOptions.map((option, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
          <Link
            href="/ar/services/custom-design/#executive-hospitality-suit"
            className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors text-lg inline-flex items-center"
          >
            استشارة تصميم تنفيذي
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            اعكس مكانتك التنفيذية
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي الأزياء التنفيذية لدينا لمناقشة احتياجاتك الإدارية واحصل على استشارة مجانية وعرض أسعار مخصص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=executive-hospitality-suit"
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار تنفيذي
            </Link>
            <Link
              href="/ar/shop/hospitality-attire/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors text-lg"
            >
              عرض جميع ملابس الضيافة
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}