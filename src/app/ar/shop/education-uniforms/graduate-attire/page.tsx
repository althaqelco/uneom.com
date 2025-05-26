import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  CalendarDaysIcon 
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'


export const metadata: Metadata = {
  title: 'ملابس التخرج | أرواب وقبعات وأوشحة التخرج | يونيوم',
  description: 'ملابس تخرج عالية الجودة تشمل الأرواب والقبعات والشراشيب والأوشحة للجامعات والكليات والمدارس في المملكة العربية السعودية. احتفل بالإنجازات بزي أكاديمي مميز.',
  keywords: 'ملابس تخرج, أرواب تخرج السعودية, قبعات أكاديمية السعودية, أوشحة تخرج, زي جامعي, حفل تخرج مدرسي',
  openGraph: {
    title: 'ملابس التخرج | أرواب وقبعات وأوشحة التخرج | يونيوم',
    description: 'احتفل بالمعالم الأكاديمية مع ملابس التخرج الفاخرة لدينا. تتوفر الأرواب والقبعات والأوشحة والإكسسوارات.',
    images: ['/images/products/education/graduate-attire-main.jpg'],
  },
}

const attireComponents = [
  {
    name: 'أرواب التخرج',
    description: 'أرواب عالية الجودة بلمسة نهائية مطفية أو ساتان متوفرة بألوان متنوعة لتتناسب مع العلامة التجارية للمؤسسة. خيارات لمستويات أكاديمية مختلفة.',
    image: '/images/products/education/graduation-gowns.jpg',
    features: ['أقمشة متينة ومريحة', 'أكتاف مطوية وأكمام كاملة', 'مجموعة متنوعة من الألوان والتشطيبات']
  },
  {
    name: 'القبعات والشراشيب (مربعات التخرج)',
    description: 'قبعات مربعة كلاسيكية مع شراشيب منسقة الألوان. خيارات لتعليقات السنة وألوان شراشيب مخصصة.',
    image: '/images/products/education/graduation-caps-tassels.jpg',
    features: ['بنية قوية', 'مقاس مريح', 'مجموعة واسعة من ألوان الشراشيب']
  },
  {
    name: 'الأوشحة والوشاحات الأكاديمية',
    description: 'أوشحة ووشاحات خاصة بالدرجة مبطنة بألوان المؤسسة ومخمل يشير إلى مجال الدراسة. تتوفر أيضًا وشاحات التكريم.',
    image: '/images/products/education/academic-hoods-stoles.jpg',
    features: ['تمثيل دقيق لألوان الدرجة', 'مخمل وساتان فاخر', 'خيارات تطريز مخصصة']
  }
]

const whyChooseUneomGraduationAttire = [
  {
    icon: AcademicCapIcon,
    title: 'زي أكاديمي أصيل',
    description: 'تلتزم ملابسنا بالمعايير الأكاديمية التقليدية، مما يضمن مظهرًا مميزًا ومناسبًا لخريجيكم.'
  },
  {
    icon: SparklesIcon,
    title: 'مواد عالية الجودة',
    description: 'نستخدم أقمشة وتقنيات بناء عالية الجودة للأرواب والإكسسوارات التي تبدو رائعة وتدوم كتذكارات.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'التخصيص والعلامة التجارية',
    description: 'خصص ملابس التخرج الخاصة بك بألوان المؤسسة وشعاراتها وتطريز مخصص لتعكس هوية مدرستك.'
  },
  {
    icon: UserGroupIcon,
    title: 'إدارة الطلبات بالجملة والبرامج',
    description: 'حلول فعالة للطلبات الكبيرة، بما في ذلك التعبئة الفردية والمساعدة في التوزيع للمؤسسات.'
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
            <Link href="/ar/shop/education-uniforms/" className="hover:text-blue-600">أزياء التعليم</Link>
            <span>/</span>
            <span className="text-gray-900">ملابس التخرج</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/banners/graduation-ceremony-banner.jpg" 
            alt="خلفية حفل تخرج"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AcademicCapIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ملابس تخرج مميزة
          </h1>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            احتفل بالإنجازات الأكاديمية مع مجموعتنا المتميزة من أرواب وقبعات وأوشحة وإكسسوارات التخرج. مثالية للجامعات والكليات والمدارس في جميع أنحاء المملكة العربية السعودية.
          </p>
          <Link
            href="/ar/quote/?category=graduate-attire"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            اطلب عرض أسعار مؤسسي
          </Link>
        </div>
      </section>

      {/* Attire Components Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              زي أكاديمي كامل
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل ما يحتاجه خريجوك للاحتفال بلحظتهم الخاصة بفخر وكرامة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attireComponents.map((component) => (
              <div key={component.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-72 w-full">
                  <Image
                    src={component.image}
                    alt={component.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{component.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{component.description}</p>
                  <ul className="space-y-2 mb-6">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              معيار يونيوم لملابس التخرج
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نقدم زيًا أكاديميًا أصيلًا وعالي الجودة لجعل كل حفل تخرج لا يُنسى.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomGraduationAttire.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customization & Bulk Orders Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarDaysIcon className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            زي مخصص لمؤسستك
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            تأكد من تمثيل هوية مؤسستك بشكل مثالي. نقدم تخصيصًا شاملاً للأرواب والأوشحة والوشاحات والشراشيب، بما في ذلك مطابقة ألوان محددة، وتطريز الشعارات، وعناصر تصميم فريدة. يمكن لفريقنا إدارة الطلبات بالجملة بكفاءة، مما يوفر تجربة سلسة لمدرستك أو جامعتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/services/custom-design/#academic-regalia"
              className="bg-indigo-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg inline-flex items-center"
            >
              ناقش التخصيص
              <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              href="/ar/quote/?category=bulk-graduation-attire"
              className="border-2 border-indigo-600 text-indigo-600 px-10 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-lg"
            >
              اطلب معلومات الطلبات بالجملة
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            احتفل بخريجيك بأناقة
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            متخصصونا مستعدون لمساعدتك في اختيار أو تصميم ملابس التخرج المثالية لمؤسستك. اتصل بنا للحصول على استشارة أو عرض أسعار مفصل.
          </p>
          <Link
            href="/ar/contact/"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
          >
            اتصل بمتخصصي التخرج لدينا
          </Link>
        </div>
      </section>
    </div>
  )
}