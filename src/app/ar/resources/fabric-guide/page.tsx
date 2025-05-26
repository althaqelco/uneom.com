import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SwatchIcon, 
  BeakerIcon, 
  ShieldCheckIcon,
  SparklesIcon,
  FireIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'دليل الأقمشة الشامل للأزياء المهنية | موارد يونيوم',
  description: 'دليل شامل لاختيار الأقمشة المناسبة للأزياء المهنية. تعرف على القطن والبوليستر والخلطات والأقمشة المتخصصة للرعاية الصحية والشركات والاستخدام الصناعي.',
  keywords: 'دليل الأقمشة, أقمشة الأزياء الموحدة, أزياء القطن, أزياء البوليستر, خلطات الأقمشة, أقمشة الرعاية الصحية, أقمشة الشركات, أقمشة صناعية, خصائص الأقمشة',
  openGraph: {
    title: 'دليل الأقمشة الشامل للأزياء المهنية',
    description: 'كل ما تحتاج لمعرفته حول اختيار الأقمشة المناسبة لأزيائك',
    images: ['/images/resources/fabric-guide-preview.jpg'],
  },
}

const fabricTypes = [
  {
    id: 'cotton',
    name: 'القطن',
    description: 'ألياف طبيعية معروفة بالراحة وقابلية التنفس',
    icon: SparklesIcon,
    properties: {
      comfort: 95,
      durability: 75,
      breathability: 90,
      easycare: 70,
      costeffective: 85
    },
    pros: [
      'تهوية ممتازة',
      'ناعم ومريح',
      'مضاد للحساسية',
      'يمتص الرطوبة جيداً',
      'سهل الصبغ'
    ],
    cons: [
      'يتجعد بسهولة',
      'ينكمش عند الغسيل',
      'يبهت مع الوقت',
      'وقت تجفيف أطول'
    ],
    bestFor: ['الأزياء الطبية', 'الملابس الشركات غير الرسمية', 'الملابس الداخلية', 'أزياء المناخ الحار'],
    careInstructions: [
      'اغسل بالماء البارد',
      'استخدم منظف خفيف',
      'جفف على حرارة منخفضة',
      'اكوِ وهو رطب قليلاً'
    ],
    price: '$$',
    sustainability: 'عالي - ألياف طبيعية قابلة للتحلل'
  },
  {
    id: 'polyester',
    name: 'البوليستر',
    description: 'ألياف صناعية توفر المتانة والعناية السهلة',
    icon: ShieldCheckIcon,
    properties: {
      comfort: 70,
      durability: 95,
      breathability: 60,
      easycare: 95,
      costeffective: 90
    },
    pros: [
      'متين جداً',
      'مقاوم للتجعد',
      'احتفاظ بالألوان',
      'سريع الجفاف',
      'مقاوم للبقع'
    ],
    cons: [
      'أقل تهوية',
      'قد يبدو صناعياً',
      'تراكم الكهرباء الساكنة',
      'احتفاظ بالروائح'
    ],
    bestFor: ['الأزياء الصناعية', 'الملابس الخارجية', 'العناصر عالية الاستخدام', 'متطلبات العناية السهلة'],
    careInstructions: [
      'اغسل بالماء الدافئ',
      'استخدم منعم الأقمشة',
      'جفف على حرارة متوسطة',
      'اكوِ على درجة منخفضة'
    ],
    price: '$',
    sustainability: 'متوسط - صناعي قابل لإعادة التدوير'
  },
  {
    id: 'cotton-poly',
    name: 'خليط القطن-البوليستر',
    description: 'يجمع أفضل ما في الألياف الطبيعية والصناعية',
    icon: BeakerIcon,
    properties: {
      comfort: 85,
      durability: 85,
      breathability: 75,
      easycare: 85,
      costeffective: 85
    },
    pros: [
      'خصائص متوازنة',
      'انكماش أقل',
      'متانة جيدة',
      'ارتداء مريح',
      'صيانة سهلة'
    ],
    cons: [
      'تهوية متوسطة',
      'إمكانية تكوين كرات صغيرة',
      'ملمس أقل طبيعية'
    ],
    bestFor: ['قمصان الشركات', 'الأزياء الطبية', 'ملابس العمل العامة', 'الأزياء متعددة الأغراض'],
    careInstructions: [
      'اغسل بالماء الدافئ',
      'منظف عادي',
      'جفف على حرارة متوسطة',
      'اكوِ على حرارة متوسطة'
    ],
    price: '$$',
    sustainability: 'متوسط - تركيب مختلط'
  },
  {
    id: 'performance',
    name: 'أقمشة الأداء',
    description: 'خلطات صناعية متقدمة بخصائص متخصصة',
    icon: FireIcon,
    properties: {
      comfort: 80,
      durability: 90,
      breathability: 85,
      easycare: 90,
      costeffective: 70
    },
    pros: [
      'طارد للرطوبة',
      'خصائص مضادة للميكروبات',
      'حماية من الأشعة فوق البنفسجية',
      'تنظيم درجة الحرارة',
      'مقاومة البقع'
    ],
    cons: [
      'تكلفة أعلى',
      'ملمس صناعي',
      'متطلبات عناية خاصة'
    ],
    bestFor: ['الأزياء الطبية', 'الملابس الرياضية', 'الأزياء الخارجية', 'احتياجات الأداء العالي'],
    careInstructions: [
      'اتبع ملصق العناية',
      'استخدم منظف متخصص',
      'التجفيف بالهواء مفضل',
      'لا تستخدم منعم الأقمشة'
    ],
    price: '$$$',
    sustainability: 'متغير - يعتمد على التركيب'
  }
]

const specialtyFabrics = [
  {
    name: 'القطن المضاد للميكروبات',
    description: 'قطن معالج بمواد مضادة للميكروبات',
    applications: ['الرعاية الصحية', 'خدمات الطعام', 'رعاية الأطفال'],
    benefits: ['التحكم في الروائح', 'مقاومة البكتيريا', 'تعزيز النظافة']
  },
  {
    name: 'مقاوم اللهب',
    description: 'أقمشة معالجة أو مقاومة للهب بطبيعتها',
    applications: ['الصناعة', 'النفط والغاز', 'الأعمال الكهربائية'],
    benefits: ['امتثال السلامة', 'حماية من الحرارة', 'حماية من القوس الكهربائي']
  },
  {
    name: 'عالي الوضوح',
    description: 'ألوان زاهية مع شرائط عاكسة',
    applications: ['البناء', 'التحكم في المرور', 'خدمات الطوارئ'],
    benefits: ['سلامة العمال', 'تعزيز الرؤية', 'معايير الامتثال']
  },
  {
    name: 'طارد الرطوبة',
    description: 'أقمشة تسحب الرطوبة بعيداً عن الجلد',
    applications: ['الرعاية الصحية', 'خدمات الطعام', 'العمل النشط'],
    benefits: ['الراحة', 'تنظيم درجة الحرارة', 'تقليل نمو البكتيريا']
  }
]

const fabricSelection = [
  {
    industry: 'الرعاية الصحية',
    requirements: ['مضاد للميكروبات', 'سهولة التنظيف', 'الراحة', 'المظهر المهني'],
    recommended: ['خلطات القطن', 'أقمشة الأداء', 'المعالجات المضادة للميكروبات'],
    avoid: ['القطن الخالص (الانكماش)', 'الأقمشة الثقيلة', 'أقمشة صعبة العناية']
  },
  {
    industry: 'الشركات',
    requirements: ['المظهر المهني', 'مقاومة التجعد', 'احتفاظ بالألوان', 'الراحة'],
    recommended: ['خلطات القطن-البوليستر', 'خلطات الصوف', 'أقمشة الأداء الرسمية'],
    avoid: ['الأقمشة غير الرسمية', 'مواد عالية الصيانة', 'المظهر الصناعي المفرط']
  },
  {
    industry: 'الصناعة',
    requirements: ['المتانة', 'ميزات السلامة', 'سهولة العناية', 'فعالية التكلفة'],
    recommended: ['القطن الثقيل', 'خلطات البوليستر', 'أقمشة السلامة المتخصصة'],
    avoid: ['الأقمشة الرقيقة', 'المواد خفيفة الوزن', 'الخيارات عالية التكلفة']
  },
  {
    industry: 'الضيافة',
    requirements: ['المظهر المهني', 'مقاومة البقع', 'الراحة', 'سهولة العناية'],
    recommended: ['خلطات القطن-البوليستر', 'أقمشة الأداء', 'المعالجات المقاومة للبقع'],
    avoid: ['الأبيض الخالص (التلطيخ)', 'أقمشة صعبة العناية', 'مواد غير مريحة']
  }
]

const sustainabilityGuide = [
  {
    level: 'الأكثر استدامة',
    fabrics: ['القطن العضوي', 'القنب', 'الكتان', 'البوليستر المعاد تدويره'],
    benefits: ['قابل للتحلل', 'تأثير بيئي منخفض', 'موارد متجددة'],
    considerations: ['تكلفة أعلى', 'توفر محدود', 'احتياجات عناية خاصة']
  },
  {
    level: 'مستدام بشكل معتدل',
    fabrics: ['القطن التقليدي', 'خلطات القطن', 'تينسل/مودال'],
    benefits: ['ألياف طبيعية', 'مكونات قابلة للتحلل', 'أداء جيد'],
    considerations: ['استخدام المياه', 'المعالجة الكيميائية', 'قابلية إعادة التدوير المختلطة']
  },
  {
    level: 'أقل استدامة',
    fabrics: ['البوليستر البكر', 'النايلون', 'الأكريليك'],
    benefits: ['المتانة', 'ميزات الأداء', 'فعالية التكلفة'],
    considerations: ['غير قابل للتحلل', 'مبني على البترول', 'تساقط البلاستيك الدقيق']
  }
]

export default function FabricGuidePageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              دليل الأقمشة الشامل
              <span className="text-purple-600 block">للأزياء المهنية</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              اتخذ قرارات مدروسة حول أقمشة الأزياء الموحدة مع دليلنا الشامل. 
              تعرف على الخصائص وتعليمات العناية وأفضل التطبيقات لأنواع الأقمشة المختلفة 
              في المناخات السعودية.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#fabric-types"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                استكشف الأقمشة
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                احصل على استشارة خبير
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Types Section */}
      <section id="fabric-types" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أنواع الأقمشة الرئيسية
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فهم خصائص أنواع الأقمشة المختلفة يساعدك في اختيار 
              الخيار الأفضل لاحتياجات الأزياء الموحدة المحددة.
            </p>
          </div>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {fabricTypes.map((fabric) => (
              <div key={fabric.id} className="bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Fabric Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 space-x-reverse mb-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <fabric.icon className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{fabric.name}</h3>
                        <p className="text-gray-600">{fabric.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">نطاق السعر:</span>
                        <span className="text-purple-600 font-semibold">{fabric.price}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">الاستدامة:</span>
                        <p className="text-sm text-gray-600 mt-1">{fabric.sustainability}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Properties Chart */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">الخصائص</h4>
                    <div className="space-y-3">
                      {Object.entries(fabric.properties).map(([property, value]) => {
                        const propertyNames = {
                          comfort: 'الراحة',
                          durability: 'المتانة',
                          breathability: 'التهوية',
                          easycare: 'سهولة العناية',
                          costeffective: 'فعالية التكلفة'
                        };
                        return (
                          <div key={property} className="flex items-center space-x-3 space-x-reverse">
                            <span className="text-sm font-medium text-gray-700 w-24">
                              {propertyNames[property as keyof typeof propertyNames]}:
                            </span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${value}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 w-8">{value}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Pros & Cons */}
                  <div className="lg:col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 ml-2" />
                          المزايا
                        </h4>
                        <ul className="space-y-1">
                          {fabric.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 ml-2">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <MagnifyingGlassIcon className="h-5 w-5 text-orange-500 ml-2" />
                          الاعتبارات
                        </h4>
                        <ul className="space-y-1">
                          {fabric.cons.map((con, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-orange-500 ml-2">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-gray-200 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">الأفضل لـ:</h4>
                    <div className="flex flex-wrap gap-2">
                      {fabric.bestFor.map((use, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">تعليمات العناية:</h4>
                    <div className="flex flex-wrap gap-2">
                      {fabric.careInstructions.map((instruction, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {instruction}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Fabrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              معالجات الأقمشة المتخصصة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              معالجات أقمشة متقدمة تضيف خصائص محددة للتطبيقات المتخصصة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {specialtyFabrics.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {specialty.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {specialty.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">التطبيقات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {specialty.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">الفوائد:</h4>
                    <ul className="space-y-1">
                      {specialty.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Selection Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              اختيار الأقمشة حسب الصناعة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر الأقمشة المناسبة بناءً على متطلبات وتحديات صناعتك المحددة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {fabricSelection.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.industry}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">المتطلبات الرئيسية:</h4>
                    <ul className="space-y-1">
                      {industry.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <StarIcon className="h-4 w-4 text-yellow-500 ml-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">الأقمشة الموصى بها:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.recommended.map((fabric, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">تجنب:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.avoid.map((fabric, idx) => (
                        <span key={idx} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              دليل الاستدامة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اتخذ خيارات واعية بيئياً مع تصنيفات استدامة الأقمشة لدينا.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {sustainabilityGuide.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className={`w-4 h-4 rounded-full ${
                    index === 0 ? 'bg-green-500' : 
                    index === 1 ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {level.level}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">الأقمشة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.fabrics.map((fabric, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded ${
                          index === 0 ? 'bg-green-100 text-green-800' :
                          index === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">الفوائد:</h4>
                    <ul className="space-y-1">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">الاعتبارات:</h4>
                    <ul className="space-y-1">
                      {level.considerations.map((consideration, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <MagnifyingGlassIcon className="h-4 w-4 text-orange-500 ml-2 mt-0.5 flex-shrink-0" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            تحتاج مساعدة في اختيار القماش المناسب؟
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            خبراء الأقمشة لدينا يمكنهم مساعدتك في اختيار المواد المثالية لمتطلبات 
            الأزياء الموحدة المحددة ومناخك واعتبارات الميزانية.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              استشر خبراءنا
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/ar/shop"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              تصفح أقمشتنا
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              موارد ذات صلة
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/ar/resources/policy-templates" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <SwatchIcon className="h-16 w-16 text-purple-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    قوالب السياسات
                  </h3>
                  <p className="text-gray-600 text-sm">
                    حمل قوالب سياسات الأزياء الموحدة التي تتضمن مواصفات الأقمشة.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/blog/sustainable-healthcare-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="الأزياء الطبية المستدامة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    الأقمشة المستدامة
                  </h3>
                  <p className="text-gray-600 text-sm">
                    تعرف على خيارات الأقمشة الصديقة للبيئة للأزياء الطبية.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/services/fabric-selection" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="خدمة اختيار الأقمشة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    خدمة اختيار الأقمشة
                  </h3>
                  <p className="text-gray-600 text-sm">
                    خدمات استشارة واختيار الأقمشة المهنية.
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