import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  UserGroupIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import AddToQuoteButton from '@/components/shop/AddToQuoteButton'

export const metadata: Metadata = {
  title: 'أزياء الموظفين التعليمية | الزي المهني للمؤسسات التعليمية | يونيوم',
  description: 'اكتشف مجموعتنا المتميزة من أزياء الموظفين التعليمية المصممة خصيصاً للمؤسسات التعليمية السعودية. أزياء مهنية عالية الجودة للإداريين والمعلمين وموظفي الدعم.',
  keywords: 'أزياء الموظفين التعليمية, الزي المدرسي للموظفين, أزياء المعلمين, الزي الإداري المدرسي, الأزياء التعليمية المهنية',
  openGraph: {
    title: 'أزياء الموظفين التعليمية | الزي المهني للمؤسسات التعليمية | يونيوم',
    description: 'أزياء مهنية عالية الجودة للموظفين في المؤسسات التعليمية السعودية',
    images: ['/images/products/education-staff-uniforms.jpg'],
  },
}

const staffProducts = [
  {
    id: 'teacher-uniform',
    name: 'زي المعلمين المهني',
    price: 'ريال 320',
    image: '/images/products/teacher-uniform.jpg',
    rating: 4.8,
    reviews: 142,
    description: 'زي مهني أنيق ومريح للمعلمين والمعلمات',
    features: ['قماش مقاوم للتجاعيد', 'تصميم عملي', 'ألوان متعددة', 'سهولة العناية']
  },
  {
    id: 'admin-suit',
    name: 'بدلة إدارية راقية',
    price: 'ريال 450',
    image: '/images/products/admin-suit.jpg',
    rating: 4.9,
    reviews: 89,
    description: 'بدلة رسمية للإداريين والمديرين في المؤسسات التعليمية',
    features: ['قماش صوف مخلوط', 'قصة احترافية', 'تطريز مخصص', 'جودة عالية']
  },
  {
    id: 'support-staff',
    name: 'زي موظفي الدعم',
    price: 'ريال 240',
    image: '/images/products/support-staff-uniform.jpg',
    rating: 4.7,
    reviews: 156,
    description: 'زي عملي ومريح لموظفي الدعم والخدمات',
    features: ['قماش متين', 'تصميم عملي', 'جيوب متعددة', 'مقاوم للبقع']
  }
]

const colors = [
  { name: 'أزرق كحلي', value: '#1e3a8a', available: true },
  { name: 'رمادي فحمي', value: '#374151', available: true },
  { name: 'بني فاتح', value: '#92400e', available: true },
  { name: 'أخضر داكن', value: '#166534', available: false }
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']

const features = [
  {
    icon: UserGroupIcon,
    title: 'تصميم مهني',
    description: 'مصمم خصيصاً لبيئة العمل التعليمية مع مراعاة الراحة والأناقة'
  },
  {
    icon: ShieldCheckIcon,
    title: 'جودة مضمونة',
    description: 'خامات عالية الجودة وتصنيع متقن يضمن المتانة والمظهر المهني'
  },
  {
    icon: SparklesIcon,
    title: 'تطريز مخصص',
    description: 'إمكانية إضافة شعار المؤسسة والأسماء بتطريز احترافي'
  },
  {
    icon: CheckCircleIcon,
    title: 'راحة طوال اليوم',
    description: 'تصميم مريح يناسب طبيعة العمل في البيئة التعليمية'
  }
]

export default function StaffUniformsPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumbs */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4 space-x-reverse">
              <li>
                <Link href="/ar" className="text-gray-500 hover:text-gray-700">الرئيسية</Link>
              </li>
              <li>
                <ArrowLeftIcon className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <Link href="/ar/shop" className="text-gray-500 hover:text-gray-700">المتجر</Link>
              </li>
              <li>
                <ArrowLeftIcon className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <Link href="/ar/shop/education-uniforms" className="text-gray-500 hover:text-gray-700">الأزياء التعليمية</Link>
              </li>
              <li>
                <ArrowLeftIcon className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <span className="text-gray-900 font-medium">أزياء الموظفين</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 mb-12 text-white">
            <div className="max-w-4xl">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-12 w-12 text-blue-300 ml-4" />
                <h1 className="text-4xl md:text-5xl font-bold">أزياء الموظفين التعليمية</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                مجموعة متميزة من الأزياء المهنية المصممة خصيصاً للموظفين في المؤسسات التعليمية السعودية. 
                من أزياء المعلمين إلى البدل الإدارية، نوفر ملابس مهنية تعكس التميز والاحترافية.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">أزياء المعلمين</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">البدل الإدارية</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">أزياء الدعم</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">أزياء الموظفين المميزة</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIconSolid
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="mr-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews} تقييم)
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2">المميزات الرئيسية:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <AddToQuoteButton 
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">خيارات التخصيص</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">الألوان المتاحة</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className={`w-8 h-8 rounded-full border-2 border-gray-300 ${
                          !color.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-gray-500'
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-8">المقاسات المتوفرة</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium hover:border-gray-500 cursor-pointer"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">التطريز المخصص</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">شعار المؤسسة</h4>
                      <p className="text-gray-600 text-sm">تطريز شعار المدرسة أو الجامعة على الصدر أو الكم</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">شارات القسم</h4>
                      <p className="text-gray-600 text-sm">شارات خاصة بالأقسام والإدارات المختلفة</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">الأسماء الشخصية</h4>
                      <p className="text-gray-600 text-sm">تطريز الأسماء الشخصية للمعلمين والموظفين</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">لماذا تختار أزياءنا التعليمية</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Educational Partnerships */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">شريك موثوق للمؤسسات التعليمية الرائدة</h2>
              <p className="text-lg text-gray-700 mb-8">
                نفخر بخدمة المؤسسات التعليمية المرموقة في جميع أنحاء المملكة العربية السعودية، 
                ونوفر أزياء مهنية عالية الجودة تلبي أعلى معايير التميز والاحترافية.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">200+ مؤسسة تعليمية</h3>
                  <p className="text-gray-600">نخدم المدارس والجامعات في جميع أنحاء المملكة</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <StarIcon className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">15+ سنة خبرة</h3>
                  <p className="text-gray-600">خبرة طويلة في تصميم الأزياء التعليمية</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">رضا 100%</h3>
                  <p className="text-gray-600">ضمان الجودة والخدمة المتميزة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">جاهز لتطوير صورة مؤسستك التعليمية؟</h2>
              <p className="text-xl mb-8 text-primary-100">
                تواصل مع خبراء الأزياء التعليمية لدينا للحصول على استشارة شخصية وعرض أسعار مخصص.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/ar/contact" 
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  احصل على عرض أسعار
                </Link>
                <Link 
                  href="/ar/resources/size-guide" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  دليل المقاسات
                </Link>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">منتجات ذات صلة</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">الأزياء المدرسية المميزة</h3>
                  <p className="text-gray-600 text-sm mb-4">أزياء عالية الجودة للطلاب في جميع المراحل</p>
                  <Link href="/ar/shop/education-uniforms/premium-school-uniforms" className="text-primary-600 hover:text-primary-700 font-medium">
                    عرض التفاصيل ←
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">الأزياء الجامعية</h3>
                  <p className="text-gray-600 text-sm mb-4">ملابس أكاديمية راقية لأعضاء هيئة التدريس</p>
                  <Link href="/ar/shop/education-uniforms/faculty-professional-attire" className="text-primary-600 hover:text-primary-700 font-medium">
                    عرض التفاصيل ←
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">الملابس الرياضية الطلابية</h3>
                  <p className="text-gray-600 text-sm mb-4">ملابس رياضية مريحة للأنشطة المدرسية</p>
                  <Link href="/ar/shop/education-uniforms/student-athletic-wear" className="text-primary-600 hover:text-primary-700 font-medium">
                    عرض التفاصيل ←
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}