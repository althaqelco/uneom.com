import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أزياء التعليم | حلول الزي المدرسي والجامعي | يونيوم',
  description: 'حلول شاملة لأزياء التعليم للمدارس والجامعات والمؤسسات التعليمية في المملكة العربية السعودية. أزياء طلابية عالية الجودة وملابس أعضاء هيئة التدريس والموظفين مصممة للراحة والمتانة.',
  keywords: 'أزياء تعليمية, زي مدرسي السعودية, ملابس جامعية, ملابس طلابية, أزياء أعضاء هيئة التدريس, ملابس مؤسسات تعليمية',
  openGraph: {
    title: 'أزياء التعليم | حلول الزي المدرسي والجامعي | يونيوم',
    description: 'حلول أزياء تعليمية شاملة لجميع المستويات التعليمية في المملكة العربية السعودية، من رياض الأطفال إلى الجامعة.',
    images: ['/images/industries/education/hero-education-uniforms.jpg'],
  },
}

const educationSegments = [
  {
    icon: BookOpenIcon,
    title: 'الأزياء المدرسية',
    description: 'حلول زي شاملة للمدارس الابتدائية والثانوية',
    features: ['أزياء الطلاب', 'ملابس الرياضة والتربية البدنية', 'تنويعات موسمية', 'تصاميم تتكيف مع النمو'],
    link: '/ar/shop/education-uniforms/'
  },
  {
    icon: AcademicCapIcon,
    title: 'الملابس الجامعية',
    description: 'ملابس مهنية لمؤسسات التعليم العالي',
    features: ['سترات أعضاء هيئة التدريس', 'ملابس التخرج', 'أزياء إدارية', 'ملابس احتفالية'],
    link: '/ar/shop/education-uniforms/university-attire/'
  },
  {
    icon: UserGroupIcon,
    title: 'أزياء الموظفين',
    description: 'أزياء مهنية لموظفي الدعم التعليمي',
    features: ['أزياء المعلمين', 'ملابس إدارية', 'ملابس موظفي الدعم', 'أزياء الصيانة'],
    link: '/ar/shop/education-uniforms/staff-uniforms/'
  },
  {
    icon: BuildingLibraryIcon,
    title: 'العلامة التجارية المؤسسية',
    description: 'حلول علامة تجارية مخصصة للمؤسسات التعليمية',
    features: ['تطريز الشعار', 'ألوان المدرسة', 'تصاميم مخصصة', 'اتساق العلامة التجارية'],
    link: '/ar/services/custom-design/#education'
  }
]

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'الجودة والمتانة',
    description: 'أقمشة عالية الجودة مصممة لتحمل الاستخدام اليومي والغسيل المتكرر مع الحفاظ على المظهر.'
  },
  {
    icon: SparklesIcon,
    title: 'الراحة والوظائف',
    description: 'تصاميم مريحة تسمح بحرية الحركة في بيئات التعلم النشطة.'
  },
  {
    icon: UserGroupIcon,
    title: 'مقاسات شاملة',
    description: 'مجموعة شاملة من المقاسات لاستيعاب جميع الطلاب وأعضاء الهيئة براحة.'
  },
  {
    icon: AcademicCapIcon,
    title: 'التركيز التعليمي',
    description: 'تصاميم تعزز التركيز على التعلم مع بناء فخر المدرسة وهوية المجتمع.'
  }
]

const caseStudies = [
  {
    title: 'المدرسة الدولية بالرياض',
    description: 'برنامج زي شامل لـ 1,200 طالب عبر جميع المراحل الدراسية',
    results: ['95% رضا أولياء الأمور', '30% تقليل في وقت التحضير الصباحي', 'تعزيز هوية المدرسة'],
    image: '/images/industries/education/case-study-1.jpg'
  },
  {
    title: 'جامعة الملك سعود',
    description: 'تنفيذ زي أعضاء هيئة التدريس والموظفين الإداريين',
    results: ['مظهر مهني', 'اتساق العلامة التجارية', 'تحسن رضا الموظفين'],
    image: '/images/industries/education/case-study-2.jpg'
  }
]

export default function EducationIndustryPageAR() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Link href="/ar/" className="hover:text-blue-600">الرئيسية</Link>
            <span>/</span>
            <Link href="/ar/industries/" className="hover:text-blue-600">الصناعات</Link>
            <span>/</span>
            <span className="text-gray-900">التعليم</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/industries/education/hero-education-uniforms.jpg"
            alt="خلفية أزياء التعليم"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AcademicCapIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            حلول أزياء التعليم
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            حلول أزياء شاملة للمؤسسات التعليمية في جميع أنحاء المملكة العربية السعودية، من رياض الأطفال إلى المستوى الجامعي، مصممة لتعزيز التعلم والفخر المؤسسي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?industry=education"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار تعليمي
            </Link>
            <Link
              href="/ar/contact/?subject=Education Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              اتصل بمتخصص التعليم
            </Link>
          </div>
        </div>
      </section>

      {/* Education Segments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              حلول أزياء تعليمية شاملة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              من التعليم المبكر إلى مؤسسات التعليم العالي، نوفر حلول أزياء شاملة لكل مستوى تعليمي.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationSegments.map((segment) => (
              <div key={segment.title} className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <segment.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{segment.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{segment.description}</p>
                <ul className="space-y-2 mb-6">
                  {segment.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link
                    href={segment.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    استكشف الخيارات
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختار يونيوم لأزياء التعليم
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نفهم الاحتياجات الفريدة للمؤسسات التعليمية ونقدم حلولاً تدعم بيئات التعلم.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قصص نجاح تعليمية
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              شاهد كيف ساعدنا المؤسسات التعليمية في جميع أنحاء المملكة العربية السعودية على تنفيذ برامج أزياء ناجحة.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white border rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">النتائج:</h4>
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
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
            هل أنت مستعد لتحويل مؤسستك التعليمية؟
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي أزياء التعليم لدينا لمناقشة احتياجات مؤسستك واحصل على اقتراح حل مخصص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?industry=education"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار تعليمي
            </Link>
            <Link
              href="/ar/shop/education-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              تصفح منتجات التعليم
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}