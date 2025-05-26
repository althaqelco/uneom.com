import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أزياء موظفي المدارس | ملابس الإدارة والدعم | يونيوم',
  description: 'أزياء موحدة احترافية ومريحة لجميع موظفي المدارس، بما في ذلك الإدارة وموظفي الدعم وأعضاء هيئة التدريس. خيارات متينة وأنيقة وقابلة للتخصيص للمؤسسات التعليمية في المملكة العربية السعودية.',
  keywords: 'أزياء موظفي المدارس, ملابس إدارة التعليم, أزياء موظفي الدعم السعودية, أزياء هيئة التدريس, ملابس إدارية مدرسية',
  openGraph: {
    title: 'أزياء موظفي المدارس | ملابس الإدارة والدعم | يونيوم',
    description: 'جهز فريق مدرستك بالكامل بأزياء موحدة احترافية ومريحة. خيارات للإدارة والدعم وأعضاء هيئة التدريس.',
    images: ['/images/products/education/school-staff-uniforms-main.jpg'],
  },
}

const staffUniformTypes = [
  {
    name: 'ملابس الموظفين الإداريين',
    description: 'بدلات وسترات وقمصان وفساتين احترافية لموظفي المكاتب والإدارة، تعكس السلطة والكفاءة.',
    image: '/images/products/education/admin-staff-uniforms.jpg',
    features: ['قصات مفصلة', 'أقمشة احترافية متينة', 'مجموعة واسعة من الأنماط الرسمية'],
    link: '#admin-attire' 
  },
  {
    name: 'أزياء موظفي الدعم',
    description: 'أزياء موحدة عملية ومريحة لموظفي الصيانة والكافتيريا والأمن وأدوار الدعم الأخرى، مما يضمن الأداء الوظيفي والمظهر الأنيق.',
    image: '/images/products/education/support-staff-uniforms.jpg',
    features: ['أقمشة سهلة العناية', 'تصاميم وظيفية', 'خيارات للرؤية العالية'],
    link: '#support-uniforms'
  },
  {
    name: 'أزياء هيئة التدريس والمعلمين',
    description: 'ملابس ذكية ومريحة للمعلمين، بما في ذلك القمصان والبلوزات والسراويل والتنانير الاحترافية والخيارات المحتشمة.',
    image: '/images/products/education/faculty-uniforms.jpg', 
    features: ['مريحة للارتداء طوال اليوم', 'مظهر احترافي ودود', 'تنوع في الأنماط'],
    link: '/ar/shop/education-uniforms/faculty-professional-attire/'
  }
]

const whyChooseUneomStaffUniforms = [
  {
    icon: UserGroupIcon,
    title: 'صورة مدرسية موحدة',
    description: 'اخلق مظهرًا متماسكًا واحترافيًا عبر جميع الأقسام، مما يعزز علامة مدرستك التجارية وقيمها.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'المتانة والتطبيق العملي',
    description: 'أزياءنا الموحدة مصنوعة من مواد عالية الجودة ومتينة مصممة لتحمل الاستخدام اليومي والحفاظ على مظهر أنيق.'
  },
  {
    icon: SparklesIcon,
    title: 'الراحة والأناقة',
    description: 'نحن نوازن بين الاحترافية والراحة، مما يضمن شعور الموظفين بالرضا والمظهر الأفضل طوال اليوم الدراسي.'
  },
  {
    icon: AcademicCapIcon, 
    title: 'تخصيص لمدرستك',
    description: 'خيارات تخصيص واسعة تشمل تطريز الشعار، ومطابقة الألوان، ومتطلبات التصميم المحددة لتلبية هوية مدرستك الفريدة.'
  }
]

export default function SchoolStaffUniformsPageAR() {
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
            <Link href="/ar/shop/education-uniforms/" className="hover:text-blue-600">أزياء التعليم</Link>
            <span>/</span>
            <span className="text-gray-900">أزياء موظفي المدارس</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/education-banner.jpg" 
            alt="خلفية أزياء التعليم"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            أزياء موظفي المدارس الاحترافية
          </h1>
          <p className="text-xl text-green-50 mb-10 max-w-3xl mx-auto">
            جهز فريق مدرستك بالكامل - من الإدارة وموظفي الدعم إلى هيئة التدريس - بأزياء موحدة عالية الجودة ومريحة واحترافية تعكس معايير مؤسستك.
          </p>
          <Link
            href="/ar/quote/?category=school-staff-uniforms"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            اطلب عرض أسعار لمدرستك
          </Link>
        </div>
      </section>

      {/* Staff Uniform Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              حلول أزياء موحدة لكل دور في المدرسة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نقدم حلول أزياء موحدة مصممة خصيصًا لجميع أعضاء مجتمعك التعليمي.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffUniformTypes.map((uniformType) => (
              <div key={uniformType.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={uniformType.image}
                    alt={uniformType.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{uniformType.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{uniformType.description}</p>
                  <ul className="space-y-2 mb-6">
                    {uniformType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={uniformType.link}
                    className="mt-auto bg-emerald-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center"
                  >
                    {uniformType.link.startsWith('/') ? 'عرض الخيارات' : 'اعرف المزيد'}
                    <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا يونيوم لأزياء موظفي مدرستك؟
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              شارك معنا لخلق مظهر احترافي ومريح وموحد لجميع موظفي مدرستك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomStaffUniforms.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization & Consultation Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image 
            src="/images/icons/education-customization.svg" 
            alt="أيقونة تخصيص الزي المدرسي" 
            width={80} 
            height={80} 
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            برامج أزياء موحدة مصممة خصيصًا للمؤسسات التعليمية
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            نحن ندرك أن لكل مدرسة احتياجات فريدة. يعمل فريقنا بشكل وثيق مع المؤسسات التعليمية لتطوير برامج أزياء موحدة شاملة تلبي احتياجات جميع الموظفين، مما يضمن اتساق العلامة التجارية والراحة والاحترافية. من استشارة التصميم الأولية إلى التسليم النهائي، نحن شريكك الموثوق به.
          </p>
          <Link
            href="/ar/services/custom-design/"
            className="bg-green-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg inline-flex items-center"
          >
            ناقش احتياجات مدرستك
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ابدأ مع أزياء موظفي مدرستك
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي أزياء التعليم لدينا اليوم للحصول على استشارة، أو لعرض العينات، أو لتلقي عرض أسعار مفصل لمدرستك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact/"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-lg"
            >
              اتصل بمتخصص التعليم
            </Link>
            <Link
              href="/ar/shop/education-uniforms/premium-school-uniform/" 
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-lg"
            >
              عرض أزياء الطلاب
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}