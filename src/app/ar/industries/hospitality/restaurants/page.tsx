import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaTshirt, FaUsers, FaShippingFast, FaStar } from 'react-icons/fa';

export default function RestaurantsPage() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                أزياء مطاعم احترافية للمطاعم السعودية
              </h1>
              <p className="text-lg md:text-xl mb-8">
                ارتقِ بالمظهر الاحترافي لمطعمك مع زي موحد عالي الجودة ومصمم خصيصًا لتعزيز راحة الموظفين وتحسين أجواء تناول الطعام.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/ar/quote" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md transition duration-300"
                >
                  طلب عرض سعر
                </Link>
                <Link 
                  href="/ar/shop/hospitality-attire" 
                  className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-md transition duration-300"
                >
                  استكشاف الأزياء
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src="/images/hospitality/hospitality_uniform_resturant.jpg" 
                alt="طاقم المطعم في زي موحد احترافي"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UNEOM Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            لماذا تختار المطاعم السعودية يونيوم للأزياء الموحدة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaTshirt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                جودة متميزة
              </h3>
              <p className="text-gray-600 text-center">
                أقمشة متينة ومقاومة للبقع مصممة خصيصًا لتلبية متطلبات بيئات المطاعم.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                تصميم مخصص للعلامة التجارية
              </h3>
              <p className="text-gray-600 text-center">
                دمج ألوان مطعمك وشعاره وهوية علامتك التجارية في كل عنصر من الزي الموحد.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaShippingFast className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                توصيل سريع
              </h3>
              <p className="text-gray-600 text-center">
                مواعيد تسليم سريعة وتوصيل موثوق في جميع أنحاء المملكة العربية السعودية، بما في ذلك خيارات الاستعجال.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                خبرة سعودية
              </h3>
              <p className="text-gray-600 text-center">
                فهم عميق لمتطلبات صناعة المطاعم في المملكة العربية السعودية والتفضيلات الثقافية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Uniform Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
            فئات أزياء المطاعم
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            توفر يونيوم مجموعة كاملة من أزياء المطاعم لكل دور في مؤسستك، من موظفي الواجهة إلى طاقم المطبخ.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front of House */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_receiption_hotel.jpg" 
                  alt="أزياء موظفي الواجهة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">موظفي الواجهة</h3>
                <p className="text-gray-600 mb-4">
                  أزياء أنيقة ومريحة للمضيفين والنادلين وطاقم الخدمة تعكس أجواء مطعمك.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">صدريات وتيشيرتات للنادلين</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">أزياء المضيفين والمضيفات</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">قمصان وبلوزات بشعار المطعم</span>
                  </li>
                </ul>
                <Link 
                  href="/ar/shop/hospitality-attire/restaurant-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  عرض المجموعة
                </Link>
              </div>
            </div>
            
            {/* Kitchen Staff */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_chef.jpg" 
                  alt="أزياء طاقم المطبخ"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">طاقم المطبخ</h3>
                <p className="text-gray-600 mb-4">
                  أزياء احترافية مقاومة للحرارة للطهاة وطاقم المطبخ مصممة للراحة في البيئات الحارة.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">معاطف وسترات الطهاة</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">بناطيل ومرايل المطبخ</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">معدات مقاومة للحرارة</span>
                  </li>
                </ul>
                <Link 
                  href="/ar/shop/culinary-uniforms" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  عرض المجموعة
                </Link>
              </div>
            </div>
            
            {/* Management */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_resturant_2.jpg" 
                  alt="أزياء إدارة المطعم"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">فريق الإدارة</h3>
                <p className="text-gray-600 mb-4">
                  ملابس مميزة للمديرين والمشرفين تنقل السلطة مع الحفاظ على هوية علامتك التجارية.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">بدلات وسترات للمديرين</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">ملابس المشرفين</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">إكسسوارات فاخرة</span>
                  </li>
                </ul>
                <Link 
                  href="/ar/shop/corporate-attire" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  عرض المجموعة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Restaurant Uniform Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                المميزات الفاخرة لأزياء المطاعم لدينا
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-gray-800">أقمشة مقاومة للبقع</h3>
                    <p className="text-gray-600">
                      تتميز أزياء المطاعم لدينا بتقنيات متقدمة مقاومة للبقع تصد الانسكابات وتسهل التنظيف.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-gray-800">مواد قابلة للتنفس</h3>
                    <p className="text-gray-600">
                      مصممة لمناخ المملكة العربية السعودية، تستخدم أزياءنا أقمشة قابلة للتنفس تحافظ على راحة الموظفين خلال المناوبات الطويلة.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-gray-800">تطريز مخصص للعلامة التجارية</h3>
                    <p className="text-gray-600">
                      دمج شعار مطعمك وعناصر العلامة التجارية مع خدمات التطريز والطباعة عالية الجودة التي نقدمها.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-gray-800">خصائص مضادة للبكتيريا</h3>
                    <p className="text-gray-600">
                      تتضمن العديد من أزياء المطاعم لدينا معالجات مضادة للميكروبات تثبط الروائح ونمو البكتيريا.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden order-first lg:order-last">
              <Image 
                src="/images/hospitality/hospitality_uniform_resturant.jpg" 
                alt="طاقم المطعم في أزياء يونيوم"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            هل أنت مستعد للارتقاء بالصورة المهنية لمطعمك؟
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            اتصل بيونيوم اليوم للحصول على استشارة حول احتياجات زي المطعم الخاص بك. نحن نخدم مؤسسات تناول الطعام في جميع أنحاء المملكة العربية السعودية.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ar/quote" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md transition duration-300"
            >
              طلب عرض سعر
            </Link>
            <Link 
              href="/ar/contact" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 