import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserGroupIcon, 
  SunIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'قمصان بولو كاجوال للشركات | بولو فاخر وعالي الأداء | يونيوم',
  description: 'اكتشف مجموعتنا من قمصان البولو الكاجوال للشركات. قمصان بولو مريحة وأنيقة وقابلة للتخصيص، مثالية لمظهر شركات كاجوال أنيق، وفعاليات الفرق، والملابس الترويجية في المملكة العربية السعودية.',
  keywords: 'قمصان بولو شركات, بولو كاجوال السعودية, قمصان بولو عالية الأداء, بولو شركات فاخر, قمصان بولو للفرق, بولو مطرز السعودية',
  openGraph: {
    title: 'قمصان بولو كاجوال للشركات | بولو فاخر وعالي الأداء | يونيوم',
    description: 'قمصان بولو كاجوال أنيقة ومريحة للشركات. مثالية لبيئات العمل الكاجوال الأنيقة وعلامات الفرق التجارية.',
    images: ['/images/products/corporate/casual-polo-collection.jpg'],
  },
}

const poloCategories = [
  {
    name: 'بولو شركات كلاسيكي',
    description: 'تصاميم بولو خالدة مع أقمشة متينة، مثالية للملابس الكاجوال الأنيقة اليومية.',
    image: '/images/products/corporate/classic-polo-shirts.jpg',
    href: '/ar/shop/corporate/casual-polo/classic/',
    features: ['مزيج قطن بيكيه', 'ياقة وأزرار تقليدية', 'مجموعة ألوان واسعة']
  },
  {
    name: 'قمصان بولو عالية الأداء',
    description: 'مصممة بأقمشة تمتص الرطوبة وتسمح بالتهوية للمهنيين النشطين.',
    image: '/images/products/corporate/performance-polo-shirts.jpg',
    href: '/ar/shop/corporate/casual-polo/performance/',
    features: ['تقنية امتصاص الرطوبة', 'خيارات حماية من الأشعة فوق البنفسجية', 'خفيفة الوزن وتسمح بالتهوية']
  },
  {
    name: 'بولو شركات فاخر',
    description: 'مواد فاخرة وتفاصيل مصقولة لإطلالة كاجوال أنيقة وراقية.',
    image: '/images/products/corporate/premium-corporate-polos.jpg',
    href: '/ar/shop/corporate/casual-polo/premium-corporate/',
    features: ['قطن مرسيري أو مزيج فاخر', 'تفاصيل أنيقة', 'متانة وشعور معزز']
  }
]

const whyChooseUneomPolos = [
  {
    icon: SparklesIcon,
    title: 'أنماط متعددة الاستخدامات',
    description: 'مجموعة واسعة من قمصان البولو، من الكلاسيكية إلى الموجهة نحو الأداء، لتناسب مختلف احتياجات وتفضيلات الشركات.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'جودة ومتانة',
    description: 'مصنوعة من مواد وتقنيات عالية الجودة لضمان طول العمر والحفاظ على مظهر احترافي.'
  },
  {
    icon: SunIcon,
    title: 'راحة وقابلية للارتداء',
    description: 'مصممة للراحة طوال اليوم، مع خيارات للتهوية وامتصاص الرطوبة والتمدد للأدوار النشطة.'
  },
  {
    icon: UserGroupIcon,
    title: 'ممتازة للعلامات التجارية',
    description: 'قماش مثالي للتطريز أو الطباعة، مما يجعلها مثالية لأزياء الفرق والأنشطة الترويجية.'
  }
]

export default function CasualPoloPageAR() {
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
            <Link href="/ar/shop/corporate/" className="hover:text-blue-600">ملابس الشركات</Link>
            <span>/</span>
            <span className="text-gray-900">قمصان بولو كاجوال</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/polo-shirts-banner.jpg" 
            alt="خلفية قمصان بولو كاجوال"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            قمصان بولو كاجوال للشركات
          </h1>
          <p className="text-xl text-teal-50 mb-10 max-w-3xl mx-auto">
            احصل على مظهر أنيق ومريح واحترافي مع مجموعتنا المتنوعة من قمصان البولو الكاجوال للشركات. مثالية لعلامات الفرق التجارية والفعاليات أو الراحة اليومية في المملكة العربية السعودية.
          </p>
          <Link
            href="/ar/quote/?category=polo-shirts"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            احصل على عرض أسعار لفريقك
          </Link>
        </div>
      </section>

      {/* Polo Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              اكتشف مجموعات قمصان البولو لدينا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              من الراحة الكلاسيكية إلى ملابس الأداء العالي، اعثر على البولو المثالي لاحتياجات شركتك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {poloCategories.map((category) => (
              <div key={category.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.href}
                    className="mt-auto bg-teal-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
                  >
                    اكتشف {category.name}
                    <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Polos Section */}
      <section className="py-16 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ميزة يونيوم لقمصان البولو للشركات
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نقدم قمصان بولو تجمع بين الأناقة والراحة والتطبيق العملي، وهي مناسبة تمامًا لبيئة الشركات الحديثة.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomPolos.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Image 
            src="/images/icons/embroidery-machine.svg" 
            alt="أيقونة التطريز" 
            width={80} 
            height={80} 
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ضع علامتك التجارية على قمصان البولو: تطريز وطباعة مخصصة
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            اترك بصمتك مع قمصان بولو مخصصة تحمل علامتك التجارية. نقدم خدمات تطريز وطباعة عالية الجودة لعرض شعار شركتك أو اسم فريقك أو علامة فعاليتك التجارية بدقة وأناقة.
          </p>
          <Link
            href="/ar/services/custom-design/#embroidery-printing"
            className="bg-cyan-700 text-white px-10 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-colors text-lg inline-flex items-center"
          >
            اكتشف خيارات العلامات التجارية
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            اعثر على حل البولو المثالي لعملك
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            سواء للملابس اليومية أو فعاليات الشركات أو الأنشطة الترويجية، يمكن لفريقنا مساعدتك في اختيار أو إنشاء قمصان البولو المثالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact/"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg"
            >
              ناقش احتياجات البولو الخاصة بك
            </Link>
            <Link
              href="/ar/industries/corporate/"
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-lg"
            >
              عرض حلول الشركات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}