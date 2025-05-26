import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أزياء الممرضات المهنية | الأزياء الطبية للممرضات | يونيوم',
  description: 'اكتشف أزياء الممرضات الفاخرة من يونيوم المصممة للراحة والمتانة والمظهر المهني. مثالية للممرضات في المرافق الصحية بالمملكة العربية السعودية.',
  keywords: 'أزياء الممرضات, الأزياء الطبية للممرضات, الأزياء الطبية, ملابس الرعاية الصحية, الأزياء المهنية للممرضات, الأزياء المضادة للميكروبات, أزياء الممرضات السعودية',
  openGraph: {
    title: 'أزياء الممرضات المهنية | يونيوم',
    description: 'أزياء الممرضات الفاخرة للتميز في الرعاية الصحية بالمملكة العربية السعودية',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'],
  },
}

const features = [
  {
    icon: HeartIcon,
    title: 'الراحة أولاً',
    description: 'مصممة للمناوبات التي تزيد عن 12 ساعة مع أقمشة قابلة للتنفس وقصة مريحة'
  },
  {
    icon: ShieldCheckIcon,
    title: 'حماية مضادة للميكروبات',
    description: 'معالجة متقدمة للأقمشة تمنع نمو البكتيريا والروائح'
  },
  {
    icon: ClockIcon,
    title: 'بناء متين',
    description: 'خياطة معززة ومواد عالية الجودة للاستخدام طويل المدى'
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'قصة مثالية',
    description: 'مقاسات وقصات متعددة لضمان الراحة لكل نوع جسم'
  }
]

const products = [
  {
    id: 1,
    name: 'طقم الأزياء الطبية الكلاسيكي',
    price: 'من 220 ريال سعودي',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['قميص بياقة V', 'بنطلون بخصر مطاطي', 'جيوب متعددة', 'قماش سهل العناية'],
    colors: ['أزرق كحلي', 'أزرق سماوي', 'أبيض', 'أزرق مخضر']
  },
  {
    id: 2,
    name: 'الطقم المضاد للميكروبات الفاخر',
    price: 'من 280 ريال سعودي',
    image: '/images/doctor-SBI-300813580.jpg',
    features: ['معالجة مضادة للميكروبات', 'طارد للرطوبة', 'مقاوم للبقع', 'قصة مهنية'],
    colors: ['أزرق ملكي', 'أخضر صيادي', 'نبيذي', 'أسود']
  },
  {
    id: 3,
    name: 'زي الممرضات التنفيذي',
    price: 'من 350 ريال سعودي',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['قصة مفصلة', 'قماش فاخر', 'تفاصيل مطرزة', 'تصميم مهني'],
    colors: ['رمادي فحمي', 'بنفسجي غامق', 'أخضر غابات', 'عنابي']
  }
]

const testimonials = [
  {
    name: 'الممرضة سارة المحمود',
    role: 'ممرضة العناية المركزة',
    hospital: 'مدينة الملك عبدالعزيز الطبية',
    content: 'هذه الأزياء مريحة بشكل لا يصدق خلال المناوبات الطويلة. القماش يتنفس جيداً ويحافظ على مظهره المهني.',
    rating: 5
  },
  {
    name: 'الممرضة أمل الراشد',
    role: 'ممرضة أطفال',
    hospital: 'مستشفى الملك فيصل التخصصي',
    content: 'الخصائص المضادة للميكروبات تعطيني الثقة في مكافحة العدوى. بالإضافة إلى أنها تبدو مهنية وتشعر بالراحة.',
    rating: 5
  }
]

const sizingGuide = [
  { size: 'XS', chest: '81-86 سم', waist: '61-66 سم', hip: '86-91 سم' },
  { size: 'S', chest: '86-91 سم', waist: '66-71 سم', hip: '91-97 سم' },
  { size: 'M', chest: '91-97 سم', waist: '71-76 سم', hip: '97-102 سم' },
  { size: 'L', chest: '97-102 سم', waist: '76-81 سم', hip: '102-107 سم' },
  { size: 'XL', chest: '102-107 سم', waist: '81-86 سم', hip: '107-112 سم' },
  { size: 'XXL', chest: '107-112 سم', waist: '86-91 سم', hip: '112-117 سم' }
]

export default function NurseUniformPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  أزياء الممرضات
                  <span className="text-teal-600 block">المهنية</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  مصممة لأبطال الرعاية الصحية. تجمع أزياء الممرضات لدينا بين الراحة والمتانة 
                  والمظهر المهني لدعمك خلال كل مناوبة.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/ar/quote"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  طلب عرض سعر
                </Link>
                <Link 
                  href="/ar/contact"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                  alt="زي الممرضات المهني للمهنيين الصحيين"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <HeartIcon className="h-6 w-6 text-red-500" />
                  <span className="font-semibold text-gray-900">معتمد من الممرضات</span>
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
              لماذا تختار الممرضات يونيوم
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              أزياء الممرضات لدينا مصممة خصيصاً لتلبية الاحتياجات الصعبة 
              للمهنيين الصحيين في المملكة العربية السعودية.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-teal-600" />
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
              مجموعة أزياء الممرضات لدينا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر من مجموعتنا من أزياء الممرضات المهنية، كل منها مصمم 
              للراحة والمتانة والأناقة.
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
                  <p className="text-2xl font-bold text-teal-600 mb-4">
                    {product.price}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">الألوان المتاحة:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/ar/quote"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 text-center block"
                  >
                    احصل على عرض سعر
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              دليل المقاسات
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اعثر على قصتك المثالية مع دليل المقاسات الشامل لدينا.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-right">المقاس</th>
                  <th className="px-6 py-4 text-right">الصدر</th>
                  <th className="px-6 py-4 text-right">الخصر</th>
                  <th className="px-6 py-4 text-right">الورك</th>
                </tr>
              </thead>
              <tbody>
                {sizingGuide.map((size, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold">{size.size}</td>
                    <td className="px-6 py-4">{size.chest}</td>
                    <td className="px-6 py-4">{size.waist}</td>
                    <td className="px-6 py-4">{size.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ما تقوله الممرضات عنا
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استمع إلى المهنيات في التمريض في جميع أنحاء المملكة العربية السعودية اللواتي يثقن في أزياء يونيوم.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
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
                  <p className="text-sm text-teal-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل أنت مستعدة لترقية أزياء التمريض الخاصة بك؟
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            انضمي إلى آلاف الممرضات اللواتي يثقن في يونيوم للحصول على أزياء مريحة ومهنية 
            ومتينة. احصلي على عرض السعر المخصص اليوم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/quote"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              احصلي على عرض سعر مخصص
            </Link>
            <Link
              href="/ar/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              عرض جميع الأزياء الطبية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}