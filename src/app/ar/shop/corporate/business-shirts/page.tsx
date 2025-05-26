import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'قمصان عمل شركات | قمصان رسمية تنفيذية | يونيوم',
  description: 'اكتشف مجموعتنا من قمصان عمل الشركات. قمصان رسمية عالية الجودة، مريحة، وأنيقة للمديرين التنفيذيين والمهنيين في المملكة العربية السعودية. متوفرة بمقاسات وأقمشة متنوعة.',
  keywords: 'قمصان عمل شركات, قمصان رسمية تنفيذية, قمصان مهنية السعودية, قمصان عمل رجالية, قمصان عمل نسائية, ملابس شركات السعودية',
  openGraph: {
    title: 'قمصان عمل شركات | قمصان رسمية تنفيذية | يونيوم',
    description: 'قمصان عمل شركات عالية الجودة للمهنيين. خيارات أنيقة ومريحة متاحة.',
    images: ['/images/products/corporate/business-shirts-collection.jpg'],
  },
}

const shirtCategories = [
  {
    name: 'قمصان بقصة كلاسيكية',
    description: 'أناقة خالدة وراحة لبيئات العمل التقليدية.',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/classic/',
    features: ['قصة واسعة', 'أنماط ياقة تقليدية', 'أقمشة متينة']
  },
  {
    name: 'قمصان بقصة عصرية',
    description: 'تصميم معاصر مع صورة ظلية مفصلة لمظهر احترافي حاد.',
    image: '/images/products/corporate/modern-fit-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/modern-fit/',
    features: ['جسم مدبب قليلاً', 'خيارات ياقة عصرية', 'أقمشة مطاطية للحركة']
  },
  {
    name: 'قمصان رسمية فاخرة',
    description: 'أقمشة فاخرة وحرفية رائعة للمديرين التنفيذيين المميزين.',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/ar/shop/corporate/business-shirts/premium-dress/',
    features: ['قطن عالي الخيوط', 'أزرار من عرق اللؤلؤ', 'خياطة فائقة']
  }
]

const whyChooseUneomShirts = [
  {
    icon: SparklesIcon,
    title: 'أقمشة عالية الجودة',
    description: 'نحن نستورد قطنًا عالي الجودة ومزيجًا وأقمشة أداء لتوفير أقصى درجات الراحة والمتانة.'
  },
  {
    icon: UserIcon,
    title: 'مجموعة متنوعة من القصات والأنماط',
    description: 'من الكلاسيكي إلى العصري الضيق، اعثر على القميص المثالي الذي يناسب صورة شركتك وتفضيلاتك الشخصية.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'متانة وسهولة العناية',
    description: 'قمصاننا مصممة لتحمل الاستخدام اليومي والغسيل المتكرر، والعديد منها يتميز بخاصية سهولة العناية أو مقاومة التجعد.'
  },
  {
    icon: TagIcon,
    title: 'خيارات التخصيص',
    description: 'قم بتخصيص قمصان شركتك بتطريز الشعار، أو المونوغرام، أو اختيار ألوان محددة.'
  }
]

export default function BusinessShirtsPageAR() {
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
            <span className="text-gray-900">قمصان العمل</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/corporate-attire-banner.jpg" 
            alt="خلفية ملابس الشركات"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            قمصان عمل شركات
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            ارتقِ بصورتك المهنية مع مجموعتنا المتميزة من قمصان عمل الشركات. مصممة للراحة والأناقة والمتانة، قمصاننا مثالية لبيئة العمل الديناميكية اليوم في المملكة العربية السعودية.
          </p>
          <Link
            href="/ar/quote/"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            طلب عرض أسعار للكميات
          </Link>
        </div>
      </section>

      {/* Shirt Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              اكتشف مجموعات قمصان العمل لدينا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اعثر على النمط المثالي الذي يناسب صورة شركتك واحتياجات فريقك.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shirtCategories.map((category) => (
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
                    className="mt-auto bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
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

      {/* Why Choose Uneom Shirts Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختار يونيوم لقمصان شركتك؟
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن ملتزمون بتقديم قمصان عمل عالية الجودة وأنيقة ومريحة تلبي متطلبات المهنيين العصريين.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomShirts.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-blue-600" />
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
            src="/images/icons/customization-icon.svg" 
            alt="أيقونة التخصيص" 
            width={80} 
            height={80} 
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            مصممة خصيصًا لعلامتك التجارية: قمصان عمل مخصصة
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            عزز هوية شركتك بقمصان عمل مخصصة. نقدم تطريز الشعار، والمونوغرام، ومطابقة ألوان محددة، وتفاصيل تصميم فريدة لإنشاء قمصان تمثل علامتك التجارية بشكل مثالي.
          </p>
          <Link
            href="/ar/services/custom-design/"
            className="bg-indigo-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg inline-flex items-center"
          >
            تعرف على التخصيص
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            هل أنت مستعد لتجهيز فريقك؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            متخصصونا مستعدون لمساعدتك في اختيار قمصان العمل المثالية لمؤسستك. اتصل بنا اليوم للحصول على استشارة أو عرض أسعار شخصي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/contact/"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              اتصل بفريقنا
            </Link>
            <Link
              href="/ar/faq/"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              عرض الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}