import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
  HeartIcon,
  BeakerIcon,
  CogIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'طقم الزي الطبي الإكلينيكي | يونيوم للأزياء الطبية المتخصصة',
  description: 'طقم زي طبي إكلينيكي متكامل مصمم خصيصاً للأطباء والممرضين في البيئات الإكلينيكية. جودة عالية، راحة فائقة، ومقاومة للبقع والبكتيريا.',
  keywords: 'طقم زي طبي إكلينيكي, أزياء طبية سعودية, زي أطباء, زي ممرضين, أزياء مستشفيات, زي طبي مقاوم للبكتيريا',
  openGraph: {
    title: 'طقم الزي الطبي الإكلينيكي | يونيوم',
    description: 'طقم زي طبي إكلينيكي متكامل للمهنيين الطبيين',
    images: ['/images/products/clinical-uniform-set.jpg'],
    locale: 'ar_SA'},
  alternates: {
    canonical: '/ar/shop/medical-scrubs/clinical-uniform-set/',
    languages: {
      'en': '/shop/medical-scrubs/clinical-uniform-set/',
      'ar': '/ar/shop/medical-scrubs/clinical-uniform-set/'}}}

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'مقاومة البكتيريا والفيروسات',
    description: 'نسيج معالج بتقنية مضادة للميكروبات لحماية فائقة'
  },
  {
    icon: HeartIcon,
    title: 'راحة طوال اليوم',
    description: 'تصميم مريح يوفر حرية الحركة خلال المناوبات الطويلة'
  },
  {
    icon: BeakerIcon,
    title: 'مقاوم للبقع والسوائل',
    description: 'معالجة خاصة تمنع تسرب السوائل وتسهل التنظيف'
  },
  {
    icon: CogIcon,
    title: 'تصميم وظيفي متقدم',
    description: 'جيوب متعددة وتفاصيل مدروسة لتلبية احتياجات العمل الطبي'
  }
]

const setComponents = [
  {
    item: 'بلوزة طبية علوية',
    description: 'بلوزة بتصميم V-neck مع جيوب صدرية وجانبية',
    features: [
      'قصة مريحة وأنيقة',
      'جيوب متعددة الأحجام',
      'أكمام قابلة للتعديل',
      'خامة مسامية وناعمة'
    ]
  },
  {
    item: 'بنطلون طبي',
    description: 'بنطلون بخصر مطاطي وتصميم مريح للحركة',
    features: [
      'خصر مطاطي قابل للتعديل',
      'جيوب جانبية وخلفية',
      'قصة مستقيمة مريحة',
      'حماية من التمزق'
    ]
  },
  {
    item: 'معطف طبي قصير',
    description: 'معطف طبي أبيض بطول متوسط للاستخدام الإكلينيكي',
    features: [
      'أزرار معدنية مقاومة للصدأ',
      'جيوب صدرية وجانبية',
      'تهوية خلفية للراحة',
      'طوق مقوى ومريح'
    ]
  }
]

const specifications = [
  { label: 'تركيب النسيج', value: '65% بوليستر، 35% قطن مخلوط' },
  { label: 'الوزن', value: '200 جرام لكل متر مربع' },
  { label: 'الألوان المتاحة', value: 'أبيض، أزرق فاتح، أخضر نعناعي، رمادي' },
  { label: 'المقاسات', value: 'من XS إلى 4XL (مقاسات خاصة متاحة)' },
  { label: 'المعايير الطبية', value: 'ISO 13485، CE المعتمد' },
  { label: 'مقاومة البكتيريا', value: 'معالجة مضادة للميكروبات' },
  { label: 'مقاومة الانكماش', value: 'أقل من 3% بعد الغسيل' },
  { label: 'حماية من الأشعة', value: 'UPF 30+ حماية من الشمس' }
]

const colorOptions = [
  {
    name: 'الأبيض الطبي',
    description: 'اللون التقليدي للبيئات الطبية، يعكس النظافة والمهنية',
    suitability: 'المستشفيات، العيادات، المختبرات الطبية'
  },
  {
    name: 'الأزرق الفاتح',
    description: 'لون مهدئ ومريح للمرضى، يقلل من التوتر',
    suitability: 'أقسام الأطفال، العيادات النفسية، مراكز التأهيل'
  },
  {
    name: 'الأخضر النعناعي',
    description: 'لون منعش يرمز للشفاء والطبيعة',
    suitability: 'غرف العمليات، أقسام الطوارئ، العناية المركزة'
  },
  {
    name: 'الرمادي الطبي',
    description: 'لون عملي وأنيق، يخفي البقع الطفيفة',
    suitability: 'المختبرات، أقسام الأشعة، الصيدليات'
  }
]

const careInstructions = [
  'اغسل بالماء البارد (30 درجة مئوية كحد أقصى)',
  'استخدم منظف طبي معتمد',
  'تجنب المبيض والمنعمات',
  'جفف على حرارة منخفضة',
  'اكوِ على حرارة متوسطة عند الحاجة',
  'التنظيف المهني موصى به للبقع الصعبة'
]

const testimonials = [
  {
    name: 'د. فاطمة الزهراني',
    role: 'طبيبة باطنية',
    content: 'طقم رائع يوفر الراحة والمهنية. النسيج ممتاز ومقاوم للبقع، والتصميم عملي جداً للعمل اليومي.',
    rating: 5,
    hospital: 'مستشفى الملك فهد'
  },
  {
    name: 'أ. محمد العتيبي',
    role: 'ممرض أول',
    content: 'أفضل طقم طبي استخدمته. مريح جداً خلال المناوبات الطويلة والجيوب عملية ومفيدة.',
    rating: 5,
    hospital: 'مجمع الملك سلمان الطبي'
  }
]

const applications = [
  {
    icon: AcademicCapIcon,
    title: 'المستشفيات العامة',
    description: 'مثالي للأطباء والممرضين في جميع الأقسام الطبية'
  },
  {
    icon: HeartIcon,
    title: 'العيادات التخصصية',
    description: 'مناسب للعيادات الخاصة ومراكز الرعاية الصحية'
  },
  {
    icon: BeakerIcon,
    title: 'المختبرات الطبية',
    description: 'حماية ممتازة للعاملين في المختبرات والتحاليل'
  },
  {
    icon: ShieldCheckIcon,
    title: 'مراكز الطوارئ',
    description: 'تصميم يتحمل ضغط العمل في أقسام الطوارئ'
  }
]

export default function ClinicalUniformSetPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/ar" className="hover:text-blue-600">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link href="/ar/shop" className="hover:text-blue-600">المتجر</Link>
            <span className="mx-2">/</span>
            <Link href="/ar/shop/medical-scrubs" className="hover:text-blue-600">الأزياء الطبية</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">طقم الزي الطبي الإكلينيكي</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  طقم متكامل
                </span>
                <span className="mr-2 text-sm text-gray-600">للمهنيين الطبيين</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                طقم الزي الطبي الإكلينيكي
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                طقم زي طبي إكلينيكي متكامل مصمم خصيصاً للأطباء والممرضين في البيئات الطبية المتخصصة. يجمع بين الراحة والمهنية والحماية الفائقة.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="mr-2 text-sm text-gray-600">(156 تقييم)</span>
                <span className="mr-4 text-sm text-green-600 font-medium">98% رضا العملاء</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  طلب عرض سعر
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  دليل المقاسات
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/clinical-uniform-set.jpg"
                alt="طقم الزي الطبي الإكلينيكي"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <HeartIcon className="h-8 w-8 text-blue-500" />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-900">جودة طبية</p>
                    <p className="text-sm text-gray-600">معتمد دولياً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مميزات الطقم الطبي الإكلينيكي
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مصمم خصيصاً لتلبية احتياجات المهنيين الطبيين في البيئات الإكلينيكية المتطلبة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Set Components Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مكونات الطقم الطبي
            </h2>
            <p className="text-lg text-gray-600">
              طقم متكامل يشمل جميع القطع الأساسية للعمل الطبي المهني
            </p>
          </div>
          <div className="space-y-8">
            {setComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {component.item}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {component.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {component.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 ml-3" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={`/images/products/clinical-${index + 1}.jpg`}
                      alt={component.item}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Color Options Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الألوان المتاحة
            </h2>
            <p className="text-lg text-gray-600">
              اختر اللون المناسب لبيئة العمل الطبية الخاصة بك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorOptions.map((color, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {color.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {color.description}
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-blue-600"><strong>مناسب لـ:</strong> {color.suitability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مجالات الاستخدام
            </h2>
            <p className="text-lg text-gray-600">
              مناسب لجميع البيئات الطبية والإكلينيكية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <application.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {application.title}
                </h3>
                <p className="text-gray-600">
                  {application.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المواصفات التقنية
            </h2>
            <p className="text-lg text-gray-600">
              مواصفات مفصلة للطقم الطبي الإكلينيكي
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-900">{spec.label}:</span>
                  <span className="text-gray-600 text-left">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              تعليمات العناية
            </h2>
            <p className="text-lg text-gray-600">
              العناية الصحيحة تضمن طول عمر الطقم والحفاظ على جودته
            </p>
          </div>
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careInstructions.map((instruction, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3" />
                  <span className="text-gray-700">{instruction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              آراء المهنيين الطبيين
            </h2>
            <p className="text-lg text-gray-600">
              تقييمات حقيقية من الأطباء والممرضين الذين يثقون في يونيوم
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ارتقِ بمستوى مهنيتك الطبية
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            انضم إلى مئات المهنيين الطبيين الذين يثقون في يونيوم لاحتياجاتهم من الأزياء الطبية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              احصل على عرض سعر مخصص
            </button>
            <Link 
              href="/ar/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              تواصل مع فريق المبيعات
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            منتجات طبية ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/ar/shop/medical-scrubs/professional-lab-coat" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/professional-lab-coat.jpg"
                  alt="معطف المختبر المهني"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">معطف المختبر المهني</h3>
                  <p className="text-gray-600 text-sm">معطف طبي فاخر للأطباء والمختصين</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/medical-scrubs/surgical-scrubs" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/surgical-scrubs.jpg"
                  alt="أزياء غرفة العمليات"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">أزياء غرفة العمليات</h3>
                  <p className="text-gray-600 text-sm">أزياء معقمة لغرف العمليات</p>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/medical-accessories" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/medical-accessories.jpg"
                  alt="إكسسوارات طبية"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">إكسسوارات طبية</h3>
                  <p className="text-gray-600 text-sm">إكسسوارات مكملة للزي الطبي</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}