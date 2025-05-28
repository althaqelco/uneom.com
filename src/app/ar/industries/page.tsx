import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { 
  BuildingOfficeIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  PaperAirplaneIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'القطاعات التي نخدمها | الأزياء المهنية لكل قطاع | يونيوم',
  description: 'اكتشف حلول الأزياء المتخصصة للرعاية الصحية والشركات والأمن والتصنيع والتعليم والضيافة والطيران والتجارة في جميع أنحاء المملكة العربية السعودية.',
  keywords: 'الأزياء المهنية حسب القطاع، أزياء الرعاية الصحية، الملابس المؤسسية، الأزياء الأمنية، ملابس العمل الصناعية، الأزياء المدرسية السعودية',
  openGraph: {
    title: 'القطاعات التي نخدمها | الأزياء المهنية | يونيوم',
    description: 'حلول الأزياء المتخصصة المصممة خصيصاً لكل قطاع صناعي في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/industries/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og/industries-overview-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'نظرة عامة على قطاعات يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'القطاعات التي نخدمها | الأزياء المهنية | يونيوم',
    description: 'حلول الأزياء المتخصصة لكل قطاع صناعي في المملكة العربية السعودية.',
    images: ['https://uneom.com/images/og/industries-overview-ar.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/',
    languages: {
      'ar-SA': 'https://uneom.com/ar/industries/',
      'en-US': 'https://uneom.com/industries/'
    }
  }
}

const industries = [
  {
    name: 'الرعاية الصحية',
    href: '/ar/industries/healthcare/',
    icon: HeartIcon,
    description: 'سكرابات طبية ومعاطف مختبرات وأزياء رعاية صحية مصممة للراحة والنظافة.',
    features: ['أقمشة مضادة للميكروبات', 'مواد سهلة العناية', 'مظهر مهني'],
    color: 'bg-red-50 hover:bg-red-100 border-red-200',
    iconColor: 'text-red-600'
  },
  {
    name: 'الشركات',
    href: '/ar/industries/corporate/',
    icon: BuildingOfficeIcon,
    description: 'ملابس عمل مهنية تعكس علامة شركتك التجارية وقيمها.',
    features: ['علامة تجارية مخصصة', 'أقمشة فاخرة', 'قصة مفصلة'],
    color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    name: 'الأمن',
    href: '/ar/industries/security/',
    icon: ShieldCheckIcon,
    description: 'أزياء أمنية متينة مصممة للحماية والمظهر المهني.',
    features: ['خيارات عالية الوضوح', 'ميزات تكتيكية', 'مقاومة الطقس'],
    color: 'bg-gray-50 hover:bg-gray-100 border-gray-200',
    iconColor: 'text-gray-600'
  },
  {
    name: 'التصنيع',
    href: '/ar/industries/manufacturing/',
    icon: WrenchScrewdriverIcon,
    description: 'ملابس عمل صناعية مصممة للسلامة والمتانة والراحة.',
    features: ['امتثال السلامة', 'مقاومة اللهب', 'بناء قوي'],
    color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
    iconColor: 'text-orange-600'
  },
  {
    name: 'التعليم',
    href: '/ar/industries/education/',
    icon: AcademicCapIcon,
    description: 'أزياء مدرسية وملابس الطاقم التعليمي التي تعزز الوحدة والمهنية.',
    features: ['تصاميم مناسبة للعمر', 'مواد متينة', 'صيانة سهلة'],
    color: 'bg-green-50 hover:bg-green-100 border-green-200',
    iconColor: 'text-green-600'
  },
  {
    name: 'الضيافة',
    href: '/ar/industries/hospitality/',
    icon: HomeModernIcon,
    description: 'أزياء ضيافة أنيقة للفنادق والمطاعم وصناعات الخدمات.',
    features: ['تصاميم أنيقة', 'مقاومة البقع', 'قصة مريحة'],
    color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
    iconColor: 'text-purple-600'
  },
  {
    name: 'الطيران',
    href: '/ar/industries/aviation/',
    icon: PaperAirplaneIcon,
    description: 'أزياء طيران مهنية تلبي المعايير واللوائح الدولية.',
    features: ['امتثال اللوائح', 'مظهر مهني', 'راحة على الارتفاع'],
    color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
    iconColor: 'text-indigo-600'
  },
  {
    name: 'التجارة',
    href: '/ar/industries/retail-shops/',
    icon: BuildingStorefrontIcon,
    description: 'أزياء تجارية تعزز هوية العلامة التجارية وتجربة العملاء.',
    features: ['تخصيص العلامة التجارية', 'تصميم موجه للعملاء', 'أنماط متنوعة'],
    color: 'bg-pink-50 hover:bg-pink-100 border-pink-200',
    iconColor: 'text-pink-600'
  }
]

const stats = [
  { number: '+15', label: 'سنة من الخبرة' },
  { number: '+500', label: 'شركة تم خدمتها' },
  { number: '8', label: 'قطاعات صناعية' },
  { number: '+50,000', label: 'زي تم تسليمه' }
]

export default function IndustriesPageAr() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              القطاعات التي نخدمها
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              حلول الأزياء المتخصصة المصممة خصيصاً لكل قطاع صناعي في جميع أنحاء المملكة العربية السعودية
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الأزياء المهنية لكل قطاع
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              من الرعاية الصحية إلى الضيافة، نحن نفهم المتطلبات الفريدة لكل صناعة 
              ونقدم أزياء تلبي أعلى معايير الجودة والراحة والمهنية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href}>
                <Card className={`p-8 h-full transition-all duration-300 border-2 ${industry.color} group cursor-pointer`}>
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className={`p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow`}>
                      <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {industry.description}
                      </p>
                      <ul className="space-y-2">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                        اعرف المزيد
                        <svg className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose UNEOM Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              لماذا تختار يونيوم لقطاعك؟
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">خبرة صناعية</h3>
                <p className="text-gray-600">
                  فهم عميق للمتطلبات واللوائح الفريدة لكل صناعة.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WrenchScrewdriverIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">حلول مخصصة</h3>
                <p className="text-gray-600">
                  برامج أزياء مصممة خصيصاً لاحتياجات عملك المحددة.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">ضمان الجودة</h3>
                <p className="text-gray-600">
                  تصنيع معتمد من ISO يضمن جودة ومتانة ثابتة.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل أنت مستعد لتحويل مظهر فريقك؟
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              احصل على عرض أسعار مخصص لمتطلبات الأزياء الخاصة بقطاعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/quote/"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                طلب عرض أسعار
              </Link>
              <Link
                href="/ar/contact/"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
