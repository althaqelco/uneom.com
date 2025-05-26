import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'طقم الزي المدرسي الفاخر للأولاد | ملابس طلابية عالية الجودة | يونيوم',
  description: 'أطقم زي مدرسي فاخرة للأولاد بخامات عالية الجودة وبناء متين وقصة مريحة. حلول زي شاملة للمدارس السعودية بتصاميم عصرية وقيم تقليدية.',
  keywords: 'زي مدرسي فاخر للأولاد, طقم زي طلابي السعودية, ملابس مدرسية للأولاد, ملابس مدرسية عالية الجودة, أزياء تعليمية',
  openGraph: {
    title: 'طقم الزي المدرسي الفاخر للأولاد | ملابس طلابية عالية الجودة | يونيوم',
    description: 'أطقم زي مدرسي عالية الجودة مصممة خصيصًا للأولاد، تجمع بين الراحة والمتانة والأناقة.',
    images: ['/images/education/premium-boys-uniform.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: SparklesIcon,
    title: 'خامات فاخرة',
    description: 'خلطات قطنية عالية الجودة ناعمة ومسامية وتحافظ على مظهرها بعد الغسيل المتكرر.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'بناء متين',
    description: 'خياطة معززة وجودة عالية مصممة لتحمل الحياة المدرسية النشطة والغسيل المتكرر.'
  },
  {
    icon: AcademicCapIcon,
    title: 'تصميم جاهز للمدرسة',
    description: 'مظهر مهني يلبي قواعد اللباس المدرسي مع السماح بحرية الحركة للأنشطة التعليمية.'
  },
  {
    icon: StarIcon,
    title: 'قصة تتكيف مع النمو',
    description: 'مقاسات مدروسة وميزات قابلة للتعديل لاستيعاب نمو الطلاب طوال العام الدراسي.'
  }
]

const setIncludes = [
  {
    item: 'قميص رسمي',
    description: 'قميص من خليط القطن الفاخر مع ياقة مناسبة وإغلاق بالأزرار',
    features: ['قماش مقاوم للتجعد', 'مادة سهلة العناية', 'قصة مريحة', 'مكان شعار المدرسة']
  },
  {
    item: 'بنطلون رسمي',
    description: 'بنطلون مفصل جيداً بقصة مناسبة ومظهر مهني',
    features: ['خصر قابل للتعديل', 'ركب معززة', 'تصميم الجيوب', 'حاشية قابلة للتعديل']
  },
  {
    item: 'ربطة عنق مدرسية',
    description: 'ربطة عنق منسقة بألوان ونقشة المدرسة',
    features: ['خيار مربوط مسبقاً متاح', 'قماش متين', 'صيانة سهلة', 'طول مناسب']
  },
  {
    item: 'سترة اختيارية',
    description: 'سترة مطابقة للمناسبات الرسمية والطقس البارد',
    features: ['تطريز شعار المدرسة', 'بطانة عالية الجودة', 'قصة مناسبة', 'ملابس موسمية']
  }
]

const sizeGuide = [
  { age: '6-7 سنوات', chest: '66-71 سم', waist: '58-61 سم', height: '116-122 سم' },
  { age: '8-9 سنوات', chest: '71-76 سم', waist: '61-64 سم', height: '122-128 سم' },
  { age: '10-11 سنة', chest: '76-81 سم', waist: '64-67 سم', height: '128-134 سم' },
  { age: '12-13 سنة', chest: '81-86 سم', waist: '67-70 سم', height: '134-140 سم' },
  { age: '14-15 سنة', chest: '86-91 سم', waist: '70-73 سم', height: '140-146 سم' },
  { age: '16-17 سنة', chest: '91-96 سم', waist: '73-76 سم', height: '146-152 سم' }
]

export default function PremiumBoysSetPageAR() {
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
            <Link href="/ar/shop/education/" className="hover:text-blue-600">التعليم</Link>
            <span>/</span>
            <Link href="/ar/shop/education/school-uniforms/" className="hover:text-blue-600">الأزياء المدرسية</Link>
            <span>/</span>
            <span className="text-gray-900">طقم الأولاد الفاخر</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/premium-boys-uniform.jpg"
            alt="خلفية الزي المدرسي الفاخر للأولاد"
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
            طقم الزي المدرسي الفاخر للأولاد
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            أطقم زي مدرسي عالية الجودة مصممة للأولاد، تجمع بين المواد الفاخرة والبناء المتين والقصة المريحة للطالب العصري.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=premium-boys-uniform"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              طلب عرض أسعار
            </Link>
            <Link
              href="/ar/contact/?subject=Premium Boys Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
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
                التميز في تصميم الزي المدرسي
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                تم تصميم أطقم الزي المدرسي الفاخرة للأولاد لدينا بعناية فائقة وجودة يثق بها الآباء والمدارس. كل طقم مصمم لتوفير الراحة والمتانة والمظهر المهني الذي يدعم البيئة التعليمية مع السماح للأولاد بالحركة بحرية وثقة طوال يومهم الدراسي.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">مواد فاخرة</h3>
                    <p className="text-gray-600">خلطات قطنية عالية الجودة للراحة والمتانة</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">مظهر مهني</h3>
                    <p className="text-gray-600">تصميم أنيق ومفصل جيداً يلبي معايير المدرسة</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 ml-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">عناية سهلة</h3>
                    <p className="text-gray-600">قابل للغسيل في الغسالة مع خصائص مقاومة التجعد</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/premium-boys-uniform.jpg"
                alt="تفاصيل الزي المدرسي الفاخر للأولاد"
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
              مميزات الزي الفاخر
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل جانب مصمم لتوفير أفضل تجربة زي مدرسي للأولاد.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Set Includes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              الطقم الكامل يشمل
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              كل ما هو مطلوب لمظهر زي مدرسي كامل ومهني.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {setIncludes.map((item) => (
              <div key={item.item} className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.item}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
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

      {/* Size Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              دليل المقاسات
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اعثر على القصة المثالية لطالبك مع دليل المقاسات الشامل لدينا.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-right">الفئة العمرية</th>
                  <th className="px-6 py-3 text-right">الصدر (سم)</th>
                  <th className="px-6 py-3 text-right">الخصر (سم)</th>
                  <th className="px-6 py-3 text-right">الطول (سم)</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((size, index) => (
                  <tr key={size.age} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold">{size.age}</td>
                    <td className="px-6 py-4">{size.chest}</td>
                    <td className="px-6 py-4">{size.waist}</td>
                    <td className="px-6 py-4">{size.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            استثمر في أزياء تعليمية عالية الجودة
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            اتصل بمتخصصي الأزياء التعليمية لدينا لمناقشة احتياجات مدرستك واحصل على عرض أسعار مخصص لأطقم الأولاد الفاخرة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ar/quote/?category=premium-boys-uniform"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              احصل على عرض أسعار مدرسي
            </Link>
            <Link
              href="/ar/shop/education/school-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              عرض جميع الأزياء المدرسية
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}