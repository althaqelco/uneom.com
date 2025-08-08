import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FireIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'زي الطباخ | ملابس مطبخ احترافية | يونيوم',
  description: 'أزياء طباخين احترافية مصممة للمطابخ التجارية والمطاعم. ملابس مطبخ عالية الجودة مقاومة للحرارة والبقع مع تصميم مريح للعمل الطويل في المملكة العربية السعودية.',
  keywords: 'زي طباخ, ملابس مطبخ, زي شيف السعودية, ملابس طبخ احترافية, زي مطعم',
  openGraph: {
    title: 'زي الطباخ | ملابس مطبخ احترافية | يونيوم',
    description: 'أزياء طباخين احترافية مصممة للمطابخ التجارية مع مقاومة الحرارة والبقع وراحة العمل الطويل.',
    images: ['/images/hospitality/chef-uniform-professional.jpg']}}

const uniformFeatures = [
  {
    icon: FireIcon,
    title: 'مقاوم للحرارة',
    description: 'أقمشة مقاومة للحرارة تحمي من الحروق والحرارة العالية في المطبخ.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'مقاوم للبقع',
    description: 'معالجة خاصة للأقمشة تقاوم البقع والزيوت وسهولة التنظيف.'
  },
  {
    icon: SparklesIcon,
    title: 'تصميم احترافي',
    description: 'مظهر أنيق ومهني يعكس جودة المطعم ومستوى الخدمة.'
  },
  {
    icon: StarIcon,
    title: 'راحة طوال اليوم',
    description: 'تصميم مريح يسمح بحرية الحركة أثناء العمل الطويل في المطبخ.'
  }
]

const chefStyles = [
  {
    name: 'الزي التقليدي الأبيض',
    description: 'الزي الكلاسيكي للطباخين بالأبيض الناصع مع القبعة التقليدية',
    features: ['قميص أبيض مزدوج الصدر', 'بنطلون أبيض مريح', 'قبعة طباخ تقليدية', 'مريلة قابلة للإزالة']
  },
  {
    name: 'الزي العصري الملون',
    description: 'تصاميم عصرية بألوان متنوعة تناسب المطاعم الحديثة',
    features: ['ألوان متنوعة حسب الطلب', 'تصميم عصري أنيق', 'خامات متطورة', 'تفاصيل مميزة']
  },
  {
    name: 'زي المطبخ المفتوح',
    description: 'تصميم خاص للمطابخ المفتوحة التي يراها العملاء',
    features: ['مظهر أنيق للعرض', 'خامات فاخرة', 'تصميم مميز', 'راحة وأناقة']
  },
  {
    name: 'زي الطباخ التنفيذي',
    description: 'زي مميز للطباخين التنفيذيين ورؤساء المطابخ',
    features: ['تصميم تنفيذي مميز', 'خامات فاخرة', 'تفاصيل ذهبية', 'شارات الرتبة']
  }
]

export default function ChefUniformPageAR() {
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
            <span className="text-gray-900">زي الطباخ</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hospitality/chef-uniform-professional.jpg"
            alt="خلفية زي الطباخ"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FireIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            زي الطباخ الاحترافي
          </h1>
          <p className="text-xl text-orange-200 mb-10 max-w-3xl mx-auto">
            أزياء طباخين عالية الجودة مصممة للمطابخ التجارية والمطاعم، مقاومة للحرارة والبقع مع راحة استثنائية للعمل الطويل.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=chef-uniform"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار
            </Link>
            <Link
              href="/ar/contact/?subject=Chef Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              اتصل بمتخصص
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
                ملابس مطبخ احترافية عالية الجودة
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم أزياء الطباخين لدينا خصيصًا للمطابخ التجارية والمطاعم الراقية. نحن نفهم التحديات التي يواجهها الطباخون يوميًا، لذلك نوفر ملابس تجمع بين الحماية والراحة والمظهر الاحترافي.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">حماية من الحرارة</h3>
                    <p className="text-gray-600">أقمشة مقاومة للحرارة تحمي من الحروق والحرارة العالية</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">سهولة التنظيف</h3>
                    <p className="text-gray-600">معالجة خاصة تقاوم البقع وتسهل عملية الغسيل</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">راحة استثنائية</h3>
                    <p className="text-gray-600">تصميم مريح يسمح بحرية الحركة أثناء العمل</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hospitality/chef-uniform-professional.jpg"
                alt="تفاصيل زي الطباخ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الميزات الرئيسية لزي الطباخ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل جانب مصمم لتلبية احتياجات المطابخ التجارية والطباخين المحترفين.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Styles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أنواع أزياء الطباخين
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مجموعة متنوعة من التصاميم لتناسب جميع أنواع المطابخ والمطاعم.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chefStyles.map((style) => (
              <div key={style.name} className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{style.name}</h3>
                <p className="text-gray-600 mb-4">{style.description}</p>
                <ul className="space-y-2">
                  {style.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            خيارات التخصيص
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            صمم أزياء الطباخين لتتناسب مع هوية مطعمك ومتطلباتك الخاصة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">التصميم والألوان</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• ألوان مخصصة حسب هوية المطعم</li>
                <li>• تطريز الشعار والاسم</li>
                <li>• تصاميم خاصة للمطابخ المفتوحة</li>
                <li>• أزرار وتفاصيل مخصصة</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">المقاسات والخامات</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• جميع المقاسات متوفرة</li>
                <li>• خامات متنوعة حسب الاستخدام</li>
                <li>• قياسات مخصصة</li>
                <li>• خيارات الأكمام والياقات</li>
              </ul>
            </div>
          </div>
          <Link
            href="/ar/services/custom-design/#chef-uniform"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-lg inline-flex items-center"
          >
            ناقش التصميم المخصص
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ارتقِ بمطبخك إلى المستوى التالي
          </h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي ملابس الضيافة لدينا لمناقشة احتياجات مطعمك واحصل على عرض أسعار مخصص لأزياء الطباخين.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=chef-uniform"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار الآن
            </Link>
            <Link
              href="/ar/shop/hospitality-attire/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              عرض جميع ملابس الضيافة
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}