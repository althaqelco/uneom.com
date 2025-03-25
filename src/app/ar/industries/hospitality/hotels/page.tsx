import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaTshirt, FaUsers, FaShippingFast, FaStar } from 'react-icons/fa';

export default function HotelsPage() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                أزياء فندقية فاخرة للضيافة السعودية
              </h1>
              <p className="text-lg md:text-xl mb-8">
                ارتقِ بتجربة الخدمة في فندقك مع أزياء موحدة فاخرة مصممة خصيصًا تجمع بين الأناقة والراحة والحساسية الثقافية السعودية.
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
                src="/images/hospitality/hospitality_uniform_hotel.jpg" 
                alt="طاقم الفندق في أزياء فاخرة"
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
            لماذا تختار الفنادق السعودية يونيوم للأزياء الموحدة للموظفين
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaTshirt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                مواد فاخرة
              </h3>
              <p className="text-gray-600 text-center">
                أقمشة متميزة تحافظ على مظهرها خلال المناوبات الطويلة مع توفير أقصى قدر من الراحة.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                تصميم مخصص
              </h3>
              <p className="text-gray-600 text-center">
                أزياء مصممة خصيصًا تعكس هوية العلامة التجارية لفندقك والقيم الثقافية السعودية.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaShippingFast className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                توريد موثوق
              </h3>
              <p className="text-gray-600 text-center">
                إدارة مخزون متسقة تضمن عدم نفاد أزياء الموظفين في فندقك أبدًا.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                خبرة محلية
              </h3>
              <p className="text-gray-600 text-center">
                فهم عميق لمعايير الضيافة السعودية ومتطلبات اللباس الثقافية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Uniform Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
            حلول كاملة للأزياء الفندقية
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            توفر يونيوم مجموعات شاملة من الأزياء الموحدة لكل دور في فندقك، من مكتب الاستقبال إلى خدمة الغرف.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front Desk */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_receiption_hotel.jpg" 
                  alt="أزياء موظفي الاستقبال"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">مكتب الاستقبال والاستقبال</h3>
                <p className="text-gray-600 mb-4">
                  ملابس أنيقة واحترافية تخلق انطباعًا أوليًا رائعًا للضيوف.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">سترات وبدلات مصممة</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">فساتين احترافية</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">إكسسوارات مخصصة</span>
                  </li>
                </ul>
                <Link 
                  href="/ar/shop/hospitality-attire/front-desk-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  عرض المجموعة
                </Link>
              </div>
            </div>
            
            {/* Concierge */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform_hotel_service.jpg" 
                  alt="أزياء الكونسيرج وحمالي الأمتعة"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">الكونسيرج وخدمة الأمتعة</h3>
                <p className="text-gray-600 mb-4">
                  أزياء مميزة تساعد الضيوف على تحديد موظفي الخدمة الرئيسيين بسهولة.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">ملابس الكونسيرج المميزة</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">أزياء خدمة الأمتعة</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">ملابس خدمة الباركن والبواب</span>
                  </li>
                </ul>
                <Link 
                  href="/ar/shop/hospitality-attire/concierge-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  عرض المجموعة
                </Link>
              </div>
            </div>
            
            {/* Housekeeping */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/hospitality/hospitality_uniform.jpg" 
                  alt="أزياء طاقم خدمة الغرف"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">خدمة الغرف وخدمة الطوابق</h3>
                <p className="text-gray-600 mb-4">
                  أزياء عملية ومريحة مصممة لسهولة الحركة والمتانة.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">ملابس خدمة الغرف</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">أزياء خدمة الطعام بالغرف</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 ml-2" />
                    <span className="text-gray-700">ملابس فريق الصيانة</span>
                  </li>
                </ul>
                <Link 
                  href="/ar/shop/hospitality-attire/housekeeping-uniform" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  عرض المجموعة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Hotel Uniform Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                المميزات الفاخرة لأزياء الفنادق لدينا
              </h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-gray-800">أقمشة مناسبة للمناخ</h3>
                    <p className="text-gray-600">
                      أقمشة مختارة خصيصًا تؤدي أداءً استثنائيًا في مناخ المملكة العربية السعودية، مما يحافظ على راحة الموظفين على مدار العام.
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
                    <h3 className="text-lg font-semibold text-gray-800">تصاميم مناسبة ثقافيًا</h3>
                    <p className="text-gray-600">
                      أزياء مصممة بحساسية ثقافية وخيارات تحترم قواعد اللباس الإسلامية مع الحفاظ على الاحترافية.
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
                    <h3 className="text-lg font-semibold text-gray-800">تشطيبات وتفاصيل فاخرة</h3>
                    <p className="text-gray-600">
                      اهتمام دقيق بالتفاصيل في كل زي موحد، من الدرزات المقواة إلى تطريز شعار فندقك بمحاذاة مثالية.
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
                    <h3 className="text-lg font-semibold text-gray-800">سهولة العناية</h3>
                    <p className="text-gray-600">
                      أقمشة وتصاميم تحافظ على مظهرها من خلال دورات غسيل متعددة، مما يوفر تكاليف الاستبدال.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden order-first lg:order-last">
              <Image 
                src="/images/hospitality/hospitality_uniform_hotel.jpg" 
                alt="طاقم الفندق الفاخر في أزياء يونيوم"
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
            هل أنت مستعد لتحويل الصورة المهنية لفندقك؟
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            اتصل بيونيوم اليوم للحصول على استشارة حول احتياجات الزي الموحد لفندقك. نحن نخدم الفنادق والمنتجعات الفاخرة في جميع أنحاء المملكة العربية السعودية.
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