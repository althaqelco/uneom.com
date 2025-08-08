import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'زي الطباخ الفاخر | ملابس مطبخ راقية | يونيوم',
  description: 'أزياء طباخين فاخرة مصممة للمطاعم الراقية والفنادق الفخمة. ملابس مطبخ عالية الجودة بخامات فاخرة وتصميم أنيق للطباخين المحترفين في المملكة العربية السعودية.',
  keywords: 'زي طباخ فاخر, ملابس مطبخ راقية, زي شيف فاخر السعودية, ملابس طبخ فخمة, زي مطعم راقي',
  openGraph: {
    title: 'زي الطباخ الفاخر | ملابس مطبخ راقية | يونيوم',
    description: 'أزياء طباخين فاخرة بخامات عالية الجودة وتصميم أنيق للمطاعم الراقية والفنادق الفخمة.',
    images: ['/images/hospitality/premium-chef-uniform.jpg']}}

const premiumFeatures = [
  {
    icon: StarIcon,
    title: 'خامات فاخرة',
    description: 'أقمشة عالية الجودة مستوردة من أفضل المصانع العالمية مع ملمس ناعم ومتانة استثنائية.'
  },
  {
    icon: FireIcon,
    title: 'تقنيات متقدمة',
    description: 'معالجة متطورة مقاومة للحرارة والبقع مع خصائص مضادة للبكتيريا والروائح.'
  },
  {
    icon: SparklesIcon,
    title: 'تصميم أنيق',
    description: 'تصميم عصري أنيق يعكس مستوى المطعم الراقي مع تفاصيل مميزة وخياطة دقيقة.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'حماية متقدمة',
    description: 'حماية فائقة من الحرارة والسوائل الساخنة مع راحة استثنائية للعمل الطويل.'
  }
]

const premiumStyles = [
  {
    name: 'الزي التنفيذي الفاخر',
    description: 'للطباخين التنفيذيين ورؤساء المطابخ في المطاعم الراقية',
    features: ['خامات فاخرة مستوردة', 'تطريز ذهبي مميز', 'أزرار معدنية راقية', 'قصة تنفيذية أنيقة'],
    price: 'حسب الطلب'
  },
  {
    name: 'زي المطبخ المفتوح الفاخر',
    description: 'تصميم خاص للمطابخ المفتوحة في المطاعم الفاخرة',
    features: ['مظهر أنيق للعرض', 'خامات فاخرة مقاومة للبقع', 'تصميم عصري مميز', 'راحة وأناقة متناهية'],
    price: 'حسب الطلب'
  },
  {
    name: 'الزي الكلاسيكي الفاخر',
    description: 'الزي التقليدي بلمسة فاخرة للمطاعم التراثية الراقية',
    features: ['أبيض ناصع فاخر', 'قبعة طباخ تقليدية راقية', 'خياطة يدوية دقيقة', 'تفاصيل كلاسيكية أنيقة'],
    price: 'حسب الطلب'
  }
]

const luxuryBenefits = [
  'خامات مستوردة عالية الجودة',
  'تصميم مخصص حسب هوية المطعم',
  'خياطة يدوية دقيقة',
  'ضمان الجودة والمتانة',
  'خدمة ما بعد البيع المميزة',
  'تسليم سريع ومضمون'
]

export default function PremiumChefUniformPageAR() {
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
            <span className="text-gray-900">زي الطباخ الفاخر</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hospitality/premium-chef-uniform.jpg"
            alt="خلفية زي الطباخ الفاخر"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarSolidIcon key={i} className="h-8 w-8 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            زي الطباخ الفاخر
          </h1>
          <p className="text-xl text-amber-200 mb-10 max-w-3xl mx-auto">
            أزياء طباخين فاخرة مصممة للمطاعم الراقية والفنادق الفخمة، بخامات عالية الجودة وتصميم أنيق يعكس مستوى الخدمة المتميز.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=premium-chef-uniform"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار فاخر
            </Link>
            <Link
              href="/ar/contact/?subject=Premium Chef Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors text-lg"
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
                الفخامة تلتقي بالوظائف
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم أزياء الطباخين الفاخرة لدينا للمطاعم الراقية والفنادق الفخمة التي تسعى لتقديم تجربة استثنائية. نحن نجمع بين أفضل الخامات العالمية والتصميم الأنيق والوظائف المتقدمة لنقدم لك زي طباخ يعكس مستوى مطعمك الراقي.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">خامات مستوردة فاخرة</h3>
                    <p className="text-gray-600">أقمشة عالية الجودة من أفضل المصانع العالمية</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">تصميم مخصص</h3>
                    <p className="text-gray-600">تصميم فريد يعكس هوية مطعمك ومستوى خدمتك</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">خياطة يدوية دقيقة</h3>
                    <p className="text-gray-600">حرفية عالية في التنفيذ مع اهتمام بأدق التفاصيل</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hospitality/premium-chef-uniform.jpg"
                alt="تفاصيل زي الطباخ الفاخر"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ميزات الزي الفاخر
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل تفصيلة مصممة لتقديم تجربة فاخرة تليق بمستوى مطعمك الراقي.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Styles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مجموعة الأزياء الفاخرة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تشكيلة متنوعة من الأزياء الفاخرة لتناسب جميع أنواع المطاعم الراقية.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {premiumStyles.map((style) => (
              <div key={style.name} className="bg-white border-2 border-amber-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{style.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{style.description}</p>
                <ul className="space-y-2 mb-6">
                  {style.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-lg font-semibold text-amber-600 mb-4">{style.price}</p>
                  <Link
                    href="/ar/quote/?category=premium-chef-uniform"
                    className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                  >
                    طلب عرض أسعار
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Benefits */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            لماذا تختار الزي الفاخر؟
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            استثمر في صورة مطعمك مع أزياء طباخين تعكس مستوى الخدمة المتميز الذي تقدمه.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {luxuryBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          <Link
            href="/ar/services/custom-design/#premium-chef-uniform"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-lg inline-flex items-center"
          >
            استشارة تصميم فاخر
            <ArrowRightIcon className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ارتقِ بمطعمك إلى مستوى الفخامة
          </h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي الأزياء الفاخرة لدينا لمناقشة احتياجات مطعمك الراقي واحصل على استشارة مجانية وعرض أسعار مخصص.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=premium-chef-uniform"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار فاخر
            </Link>
            <Link
              href="/ar/shop/hospitality-attire/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors text-lg"
            >
              عرض جميع ملابس الضيافة
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}