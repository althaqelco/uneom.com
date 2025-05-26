import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'معاطف المختبرات الطبية الفاخرة | الأزياء الطبية المهنية | يونيوم',
  description: 'اكتشف معاطف المختبرات الطبية الفاخرة من يونيوم المصممة للمهنيين الصحيين في المملكة العربية السعودية. مضادة للميكروبات، مريحة، ومفصلة بمهنية للأطباء والممرضين والطاقم الطبي.',
  keywords: 'معاطف المختبرات الطبية, الأزياء الطبية, معاطف الأطباء, الملابس الطبية, معاطف مضادة للميكروبات, الأزياء الطبية المهنية, الأزياء الطبية السعودية',
  openGraph: {
    title: 'معاطف المختبرات الطبية الفاخرة | يونيوم',
    description: 'معاطف المختبرات الطبية المهنية للتميز في الرعاية الصحية بالمملكة العربية السعودية',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'],
  },
}

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'حماية مضادة للميكروبات',
    description: 'معالجة متقدمة للأقمشة تمنع نمو البكتيريا وتحافظ على معايير النظافة'
  },
  {
    icon: BeakerIcon,
    title: 'مقاومة للمواد الكيميائية',
    description: 'أقمشة معالجة خصيصاً لمقاومة البقع والانسكابات الكيميائية في بيئات المختبرات'
  },
  {
    icon: SparklesIcon,
    title: 'سهولة العناية',
    description: 'قابلة للغسيل في الغسالة مع خصائص ثبات اللون ومقاومة التجاعيد'
  },
  {
    icon: UserGroupIcon,
    title: 'قصة مهنية',
    description: 'قصات مفصلة للرجال والنساء مع راحة في الحركة'
  }
]

const products = [
  {
    id: 1,
    name: 'معطف المختبر الأبيض الكلاسيكي',
    price: 'من 180 ريال سعودي',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['قطن 100%', 'ثلاثة جيوب', 'إغلاق بالأزرار', 'طول الركبة']
  },
  {
    id: 2,
    name: 'المعطف المضاد للميكروبات الفاخر',
    price: 'من 250 ريال سعودي',
    image: '/images/doctor-SBI-300813580.jpg',
    features: ['معالجة مضادة للميكروبات', 'مقاوم للبقع', 'أربعة جيوب', 'أكمام قابلة للتعديل']
  },
  {
    id: 3,
    name: 'معطف المختبر التنفيذي',
    price: 'من 320 ريال سعودي',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['قماش فاخر', 'شعار مطرز', 'خمسة جيوب', 'قصة مفصلة']
  }
]

const testimonials = [
  {
    name: 'د. أحمد الراشد',
    role: 'كبير الأطباء',
    hospital: 'مستشفى الملك فيصل التخصصي',
    content: 'جودة وراحة معاطف يونيوم استثنائية. مثالية للمناوبات الطويلة.',
    rating: 5
  },
  {
    name: 'د. فاطمة الزهراء',
    role: 'مديرة المختبر',
    hospital: 'مستشفى الحرس الوطني',
    content: 'الخصائص المضادة للميكروبات والمظهر المهني يجعل هذه المعاطف مثالية لمختبرنا.',
    rating: 5
  }
]

export default function LabCoatsPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  معاطف المختبرات
                  <span className="text-blue-600 block">الطبية الفاخرة</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  الأزياء الطبية المهنية المصممة للتميز. حماية مضادة للميكروبات، راحة فائقة، 
                  ومظهر مهني للمهنيين الطبيين في جميع أنحاء المملكة العربية السعودية.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/ar/quote"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  طلب عرض سعر
                </Link>
                <Link 
                  href="/ar/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                  alt="معطف المختبر الطبي المهني للمهنيين الصحيين"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="font-semibold text-gray-900">معتمد ISO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختار معاطف المختبرات لدينا؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مصممة للمهنيين الصحيين الذين يطالبون بأعلى معايير الجودة والراحة والحماية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مجموعة معاطف المختبرات لدينا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر من مجموعتنا من معاطف المختبرات المهنية، كل منها مصمم لتلبية 
              متطلبات وتفضيلات الرعاية الصحية المحددة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/ar/quote"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center block"
                  >
                    احصل على عرض سعر
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              موثوق من قبل المهنيين الصحيين
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اطلع على ما يقوله المهنيون الطبيون في جميع أنحاء المملكة العربية السعودية عن معاطف المختبرات لدينا.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4 justify-end">
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
                  <p className="text-sm text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل أنت مستعد لترقية ملابسك الطبية؟
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المهنيين الصحيين الذين يثقون في يونيوم للحصول على أزيائهم الطبية. 
            احصل على عرض سعر مخصص اليوم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              احصل على عرض سعر مخصص
            </Link>
            <Link
              href="/ar/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              عرض جميع الأزياء الطبية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}