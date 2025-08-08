import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CalendarIcon,
  UserIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'أفضل أقمشة الزي المدرسي: دليل شامل لاختيار الأقمشة المناسبة للطلاب | UNEOM',
  description: 'اكتشف أفضل أنواع الأقمشة للزي المدرسي في السعودية. دليل شامل يغطي الراحة، المتانة، سهولة العناية والمعايير الصحية للأقمشة المدرسية.',
  keywords: 'أقمشة الزي المدرسي, أقمشة مدرسية عالية الجودة, زي مدرسي مريح, أقمشة مقاومة للبقع, زي مدرسي سعودي, أقمشة تعليمية',
  openGraph: {
    title: 'أفضل أقمشة الزي المدرسي: دليل شامل للاختيار الصحيح',
    description: 'دليل متخصص لاختيار أفضل أقمشة الزي المدرسي التي تجمع بين الراحة والمتانة',
    images: ['/images/education/school-uniform-fabric-guide.jpg']}}

const fabricTypes = [
  {
    icon: ShieldCheckIcon,
    title: 'القطن المخلوط عالي الجودة',
    description: 'مزيج مثالي من القطن والبوليستر يوفر الراحة والمتانة معاً',
    benefits: ['تهوية ممتازة', 'مقاوم للتجعد', 'سهل العناية', 'متين وطويل الأمد'],
    percentage: '60% قطن، 40% بوليستر',
    color: 'blue'
  },
  {
    icon: SparklesIcon,
    title: 'الأقمشة المقاومة للبقع',
    description: 'تقنية متقدمة تحمي الزي من البقع والأوساخ اليومية',
    benefits: ['حماية من البقع', 'سهولة التنظيف', 'احتفاظ بالألوان', 'مقاوم للماء'],
    percentage: 'طلاء واقي متقدم',
    color: 'green'
  },
  {
    icon: BeakerIcon,
    title: 'الأقمشة المضادة للبكتيريا',
    description: 'معالجة خاصة تمنع نمو البكتيريا وتحافظ على النظافة',
    benefits: ['مضاد للبكتيريا', 'منع الروائح', 'صحي وآمن', 'مناسب للحساسية'],
    percentage: 'معالجة فضية نانوية',
    color: 'purple'
  },
  {
    icon: CpuChipIcon,
    title: 'الأقمشة الذكية المتكيفة',
    description: 'تقنية حديثة تتكيف مع درجة حرارة الجسم والطقس',
    benefits: ['تنظيم الحرارة', 'امتصاص الرطوبة', 'جفاف سريع', 'راحة طوال اليوم'],
    percentage: 'ألياف ذكية متقدمة',
    color: 'indigo'
  }
]

const ageGroups = [
  {
    age: 'المرحلة الابتدائية (6-11 سنة)',
    requirements: ['أقمشة ناعمة على البشرة', 'مقاومة للبقع العالية', 'ألوان زاهية ثابتة', 'سهولة الحركة واللعب'],
    recommendedFabric: 'القطن المخلوط مع معالجة مقاومة البقع',
    icon: '🎒'
  },
  {
    age: 'المرحلة المتوسطة (12-14 سنة)',
    requirements: ['متانة عالية للأنشطة', 'مقاومة التمزق', 'سهولة العناية', 'مظهر أنيق ومهذب'],
    recommendedFabric: 'مزيج القطن والبوليستر المقوى',
    icon: '📚'
  },
  {
    age: 'المرحلة الثانوية (15-18 سنة)',
    requirements: ['مظهر احترافي', 'راحة طوال اليوم', 'مقاومة التجعد', 'ثبات الألوان'],
    recommendedFabric: 'الأقمشة الذكية المتكيفة',
    icon: '🎓'
  }
]

const careInstructions = [
  {
    title: 'الغسيل الصحيح',
    steps: ['استخدم الماء البارد أو الفاتر', 'اقلب القطعة قبل الغسيل', 'استخدم منظف لطيف', 'تجنب المبيض القوي'],
    icon: '🧺'
  },
  {
    title: 'التجفيف المناسب',
    steps: ['جفف في الهواء الطلق', 'تجنب أشعة الشمس المباشرة', 'استخدم المجفف على حرارة منخفضة', 'أخرج القطع وهي رطبة قليلاً'],
    icon: '☀️'
  },
  {
    title: 'الكي والتخزين',
    steps: ['اكوِ على حرارة متوسطة', 'استخدم قماش واقي للطباعة', 'علق القطع بعد الكي', 'احفظ في مكان جاف ومهوى'],
    icon: '👔'
  }
]

const saudiStandards = [
  {
    title: 'معايير الجودة السعودية',
    description: 'جميع أقمشتنا تلتزم بمعايير الجودة السعودية SASO',
    icon: '🏆'
  },
  {
    title: 'المناخ السعودي',
    description: 'أقمشة مصممة خصيصاً لتناسب المناخ الحار والجاف',
    icon: '🌡️'
  },
  {
    title: 'القيم الثقافية',
    description: 'تصاميم تحترم القيم والتقاليد السعودية الأصيلة',
    icon: '🕌'
  }
]

export default function FabricsStudentUniformsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">مايو 25، 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">فريق خبراء UNEOM</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              أفضل أقمشة الزي المدرسي:
              <span className="text-blue-600 block">دليل شامل للاختيار الصحيح</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              اكتشف كيفية اختيار أفضل أنواع الأقمشة للزي المدرسي التي تجمع بين الراحة والمتانة والأناقة، 
              مع مراعاة المناخ السعودي والمعايير التعليمية الحديثة.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/shop/education-uniforms"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                تصفح الأزياء المدرسية
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                استشارة مجانية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  لماذا يهم اختيار القماش المناسب؟
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  يقضي الطلاب ساعات طويلة في زيهم المدرسي، لذا يجب أن يكون القماش مريحاً ومتيناً وصحياً. 
                  الاختيار الصحيح للقماش يؤثر على راحة الطالب، أداءه الأكاديمي، وثقته بنفسه.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  في المناخ السعودي الحار، تصبح خصائص القماش أكثر أهمية، حيث نحتاج لأقمشة تتنفس جيداً 
                  وتحافظ على برودة الجسم مع الحفاظ على المظهر الأنيق طوال اليوم الدراسي.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/education/school-uniform-fabric-guide.jpg"
                    alt="دليل أقمشة الزي المدرسي عالية الجودة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أنواع الأقمشة المتقدمة للزي المدرسي
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تقنيات حديثة في صناعة الأقمشة تضمن أفضل تجربة للطلاب
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {fabricTypes.map((fabric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <fabric.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {fabric.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {fabric.description}
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {fabric.percentage}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">المزايا الرئيسية:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {fabric.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              اختيار القماش حسب المرحلة العمرية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              كل مرحلة عمرية لها احتياجات خاصة من الأقمشة
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {group.age}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">المتطلبات:</p>
                    <ul className="space-y-1">
                      {group.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-700 mb-1">القماش المُوصى به:</p>
                    <p className="text-sm text-gray-700">{group.recommendedFabric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              دليل العناية بالأقمشة المدرسية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نصائح مهمة للحفاظ على جودة ومظهر الزي المدرسي
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careInstructions.map((instruction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{instruction.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {instruction.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {instruction.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold ml-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                معايير الجودة في السعودية
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                التزامنا بأعلى معايير الجودة والمناسبة للبيئة السعودية
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {saudiStandards.map((standard, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{standard.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            احصل على أفضل أقمشة الزي المدرسي
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            تواصل مع خبرائنا للحصول على استشارة مجانية واختيار أفضل الأقمشة 
            التي تناسب احتياجات مدرستك ومتطلبات طلابك.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              احصل على عرض سعر
              <ArrowRightIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/shop/education-uniforms"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              تصفح المجموعة التعليمية
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مقالات ذات صلة
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/blog/uniforms-modern-education" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/education/modern-education-uniforms.jpg"
                    alt="الزي المدرسي في التعليم الحديث"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    الزي المدرسي في التعليم الحديث
                  </h3>
                  <p className="text-gray-600 text-sm">
                    كيف يساهم الزي المدرسي في تحسين البيئة التعليمية والأداء الأكاديمي.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/sustainable-school-uniforms-saudi" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/education/sustainable-school-uniforms.jpg"
                    alt="الزي المدرسي المستدام في السعودية"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    الزي المدرسي المستدام
                  </h3>
                  <p className="text-gray-600 text-sm">
                    الاتجاه نحو الأقمشة الصديقة للبيئة في صناعة الزي المدرسي.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/education-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/education/premium-school-uniforms.jpg"
                    alt="Premium School Uniform Collection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Premium School Uniform Collection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover our distinguished collection of high-quality school uniforms.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}