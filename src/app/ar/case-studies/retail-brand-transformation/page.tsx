'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

export default function RetailBrandTransformationPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="دراسة حالة: تحول العلامة التجارية للتجزئة | نجاح متجر الأزياء الراقية | يونيوم"
        description="دراسة حالة شاملة لتحول ناجح لعلامة تجارية في قطاع التجزئة السعودي من خلال تطوير الزي الموحد والهوية البصرية. زيادة المبيعات بنسبة 45% خلال 8 أشهر."
        canonicalUrl="https://uneom.com/ar/case-studies/retail-brand-transformation/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg"
            alt="تحول العلامة التجارية للتجزئة"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'دراسات الحالة', href: '/ar/case-studies' },
              { label: 'تحول العلامة التجارية للتجزئة', href: '/ar/case-studies/retail-brand-transformation' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              دراسة حالة نجاح
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              تحول جذري لعلامة تجارية في قطاع التجزئة: من الركود إلى النمو المتسارع
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-3xl">
              كيف حققت سلسلة متاجر الأزياء "أناقة الخليج" نمواً استثنائياً بنسبة 45% في المبيعات خلال 8 أشهر من خلال إعادة تصميم الهوية البصرية والزي الموحد.
            </p>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>8 أشهر</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>+45% نمو المبيعات</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>12 فرع في الرياض وجدة</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* ملخص تنفيذي */}
            <section className="mb-16">
              <div className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">الملخص التنفيذي</h2>
                <p className="text-blue-800 text-lg leading-relaxed mb-4">
                  واجهت سلسلة متاجر "أناقة الخليج" تحديات كبيرة في عام 2023، حيث انخفضت مبيعاتها بنسبة 20% وتراجعت حصتها السوقية أمام المنافسين الجدد. من خلال شراكة استراتيجية مع يونيوم، تم تطوير استراتيجية شاملة لتحويل الهوية البصرية والزي الموحد، مما أدى إلى تحقيق نتائج استثنائية تجاوزت كل التوقعات.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                    <div className="text-sm text-gray-600">زيادة المبيعات</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                    <div className="text-sm text-gray-600">تحسن رضا العملاء</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
                    <div className="text-sm text-gray-600">زيادة العملاء الجدد</div>
                  </div>
                </div>
              </div>
            </section>

            {/* خلفية العميل */}
            <section className="mb-16">
              <SectionHeading subtitle="خلفية العميل">
                سلسلة متاجر أناقة الخليج
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    تأسست سلسلة متاجر "أناقة الخليج" في عام 2018 كعلامة تجارية متخصصة في الأزياء النسائية الراقية في المملكة العربية السعودية. بدأت السلسلة بفرع واحد في الرياض وتوسعت تدريجياً لتصل إلى 12 فرعاً في الرياض وجدة.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">تخصص في الأزياء النسائية الراقية والعبايات المطرزة</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">12 فرع في مدينتي الرياض وجدة</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">أكثر من 150 موظف في جميع الفروع</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">عضوية في غرفة التجارة السعودية</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg"
                    alt="متجر أناقة الخليج"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* التحديات */}
            <section className="mb-16">
              <SectionHeading subtitle="التحديات المواجهة">
                أزمة الهوية والتنافسية
              </SectionHeading>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                في منتصف عام 2023، واجهت سلسلة "أناقة الخليج" تحديات جوهرية هددت استمراريتها في السوق التنافسي:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-red-800">التحديات التجارية</h4>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      انخفاض المبيعات بنسبة 20% خلال 6 أشهر
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      تراجع عدد العملاء المترددين على المتاجر
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      منافسة شديدة من العلامات التجارية الجديدة
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      تقييمات عملاء منخفضة (3.2 من 5 نجوم)
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-orange-800">التحديات التشغيلية</h4>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      عدم وضوح الهوية البصرية للعلامة التجارية
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      تباين في مظهر الموظفين بين الفروع
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13-732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      صعوبة في تمييز الموظفين عن العملاء
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      انخفاض معنويات الموظفين وانتمائهم
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">شهادة المدير العام</h4>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "كنا نواجه أزمة حقيقية في الهوية. عملاؤنا لم يعودوا يميزوننا عن المنافسين، وموظفونا فقدوا الشعور بالانتماء للعلامة التجارية. كان لدينا منتجات رائعة لكن لم نكن نوصل رسالتنا بوضوح."
                </blockquote>
                <cite className="text-gray-600 text-sm mt-2 block">- نورا الأحمد، المدير العام لسلسلة أناقة الخليج</cite>
              </div>
            </section>

            {/* الحل */}
            <section className="mb-16">
              <SectionHeading subtitle="الحل المتكامل">
                استراتيجية التحول الشاملة
              </SectionHeading>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                بعد دراسة معمقة للتحديات، طور فريق يونيوم استراتيجية شاملة تركز على ثلاثة محاور رئيسية لإعادة بناء الهوية التجارية:
              </p>

              <div className="space-y-8 mb-12">
                <div className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-blue-800">المحور الأول: إعادة تصميم الهوية البصرية</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">تطوير الشعار والألوان</h5>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• شعار جديد يعكس الأناقة والتراث الخليجي</li>
                        <li>• لوحة ألوان متطورة (ذهبي، أزرق ملكي، أبيض)</li>
                        <li>• خطوط عربية أنيقة ومقروءة</li>
                        <li>• عناصر بصرية مستوحاة من التراث</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">تطبيق الهوية</h5>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• تصميم واجهات المتاجر الجديدة</li>
                        <li>• أكياس التسوق والمواد التسويقية</li>
                        <li>• اللافتات الداخلية والخارجية</li>
                        <li>• المنصات الرقمية ووسائل التواصل</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-r-4 border-green-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-green-800">المحور الثاني: تصميم الزي الموحد المتطور</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">مواصفات التصميم</h5>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• أقمشة فاخرة مريحة وأنيقة</li>
                        <li>• تصميم محتشم يتماشى مع القيم المحلية</li>
                        <li>• ألوان متدرجة حسب المستوى الوظيفي</li>
                        <li>• إكسسوارات مطابقة للهوية البصرية</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">التخصيص والتطبيق</h5>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• قياسات شخصية لكل موظفة</li>
                        <li>• تطريز الأسماء والمناصب</li>
                        <li>• دليل استخدام شامل للزي</li>
                        <li>• برنامج صيانة واستبدال منتظم</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-r-4 border-purple-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-purple-800">المحور الثالث: التدريب وإدارة التغيير</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-purple-700">برامج التدريب</h5>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• ورش عمل حول الهوية التجارية الجديدة</li>
                        <li>• تدريب على آداب ارتداء الزي الموحد</li>
                        <li>• تطوير مهارات خدمة العملاء</li>
                        <li>• بناء الثقة والانتماء للعلامة التجارية</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-purple-700">إدارة التغيير</h5>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• تطبيق تدريجي على مدى 3 أشهر</li>
                        <li>• جلسات تغذية راجعة منتظمة</li>
                        <li>• نظام حوافز للالتزام بالمعايير</li>
                        <li>• مراقبة وتقييم مستمر للنتائج</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* التطبيق */}
            <section className="mb-16">
              <SectionHeading subtitle="مراحل التطبيق">
                خطة تنفيذ متدرجة ومدروسة
              </SectionHeading>
              
              <div className="relative">
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">1</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الأولى: البحث والتحليل (شهر واحد)</h4>
                      <p className="text-gray-600 mb-3">دراسة شاملة للسوق والعملاء والمنافسين لفهم التحديات والفرص المتاحة.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• استطلاعات رأي العملاء والموظفين</li>
                        <li>• تحليل المنافسين والاتجاهات السوقية</li>
                        <li>• تقييم الهوية البصرية الحالية</li>
                        <li>• وضع الأهداف والمؤشرات المطلوبة</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">2</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الثانية: التصميم والتطوير (شهرين)</h4>
                      <p className="text-gray-600 mb-3">تطوير الهوية البصرية الجديدة وتصميم الزي الموحد بالتعاون مع فريق العمل.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• تصميم الشعار والهوية البصرية الجديدة</li>
                        <li>• تطوير نماذج أولية للزي الموحد</li>
                        <li>• اختبار التصاميم مع مجموعة مختارة</li>
                        <li>• تحسين التصاميم بناءً على التغذية الراجعة</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">3</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الثالثة: التطبيق التجريبي (شهر واحد)</h4>
                      <p className="text-gray-600 mb-3">تطبيق التغييرات في فرعين رئيسيين لاختبار الفعالية وقياس النتائج الأولية.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• تطبيق الهوية الجديدة في فرعي الرياض الرئيسي وجدة</li>
                        <li>• تدريب الموظفين على المعايير الجديدة</li>
                        <li>• مراقبة ردود أفعال العملاء والموظفين</li>
                        <li>• جمع البيانات وتحليل النتائج الأولية</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">4</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الرابعة: التوسع الشامل (4 أشهر)</h4>
                      <p className="text-gray-600 mb-3">تطبيق التغييرات على جميع الفروع مع المتابعة المستمرة والتحسين.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• تطبيق الهوية الجديدة في جميع الفروع</li>
                        <li>• تدريب شامل لجميع الموظفين</li>
                        <li>• حملة تسويقية للإعلان عن التجديد</li>
                        <li>• مراقبة مستمرة وتحسين دوري</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* النتائج */}
            <section className="mb-16">
              <SectionHeading subtitle="النتائج المحققة">
                نجاح يفوق كل التوقعات
              </SectionHeading>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                بعد 8 أشهر من تطبيق الاستراتيجية الجديدة، حققت سلسلة "أناقة الخليج" نتائج استثنائية تجاوزت كل التوقعات المحددة في بداية المشروع:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
                  <div className="text-green-800 font-semibold mb-1">زيادة المبيعات</div>
                  <div className="text-green-600 text-sm">مقارنة بالفترة السابقة</div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                  <div className="text-blue-800 font-semibold mb-1">تحسن رضا العملاء</div>
                  <div className="text-blue-600 text-sm">من 3.2 إلى 4.7 نجوم</div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">35%</div>
                  <div className="text-purple-800 font-semibold mb-1">زيادة العملاء الجدد</div>
                  <div className="text-purple-600 text-sm">عملاء جدد شهرياً</div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
                  <div className="text-orange-800 font-semibold mb-1">تحسن معنويات الموظفين</div>
                  <div className="text-orange-600 text-sm">حسب استطلاع داخلي</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">المؤشرات المالية</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">إجمالي المبيعات الشهرية</span>
                      <span className="font-semibold text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">متوسط قيمة المشتريات</span>
                      <span className="font-semibold text-green-600">+28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">معدل تكرار الزيارات</span>
                      <span className="font-semibold text-green-600">+52%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">هامش الربح</span>
                      <span className="font-semibold text-green-600">+18%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">مؤشرات تجربة العملاء</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">تقييم رضا العملاء</span>
                      <span className="font-semibold text-blue-600">4.7/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">معدل التوصية للآخرين</span>
                      <span className="font-semibold text-blue-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">وقت الخدمة المتوسط</span>
                      <span className="font-semibold text-blue-600">-30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">معدل الشكاوى</span>
                      <span className="font-semibold text-blue-600">-65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* شهادات */}
            <section className="mb-16">
              <SectionHeading subtitle="شهادات النجاح">
                آراء العملاء والموظفين
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-blue-800 italic mb-4">
                    "التغيير كان مذهلاً! الآن أشعر بالثقة عندما أدخل المتجر، والموظفات يبدون أكثر احترافية وأناقة. أصبحت أتسوق هنا بانتظام."
                  </blockquote>
                  <cite className="text-blue-600 text-sm">- سارة المطيري، عميلة دائمة</cite>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-green-800 italic mb-4">
                    "أشعر بالفخر عندما أرتدي الزي الجديد. إنه أنيق ومريح، والعملاء يتعاملون معي باحترام أكبر. أصبحت أحب عملي أكثر."
                  </blockquote>
                  <cite className="text-green-600 text-sm">- فاطمة الزهراني، مستشارة مبيعات</cite>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">شهادة الإدارة</h4>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "النتائج تجاوزت كل توقعاتنا. لم نحقق فقط زيادة في المبيعات، بل استعدنا ثقة عملائنا وفخر موظفينا. الاستثمار في الهوية البصرية والزي الموحد كان من أفضل القرارات التي اتخذناها."
                </blockquote>
                <cite className="text-gray-600 text-sm">- نورا الأحمد، المدير العام لسلسلة أناقة الخليج</cite>
              </div>
            </section>

            {/* الدروس المستفادة */}
            <section className="mb-16">
              <SectionHeading subtitle="الدروس المستفادة">
                رؤى قيمة للنجاح المستدام
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">أهمية الهوية البصرية المتماسكة</h4>
                    <p className="text-blue-700 text-sm">الاتساق في جميع عناصر الهوية البصرية يخلق انطباعاً قوياً ومتماسكاً لدى العملاء.</p>
                  </div>
                  
                  <div className="bg-green-50 border-r-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">تأثير الزي على معنويات الموظفين</h4>
                    <p className="text-green-700 text-sm">الزي الأنيق والمريح يعزز ثقة الموظفين بأنفسهم وانتماءهم للعلامة التجارية.</p>
                  </div>
                  
                  <div className="bg-purple-50 border-r-4 border-purple-500 p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">ضرورة إشراك الموظفين في التغيير</h4>
                    <p className="text-purple-700 text-sm">إشراك الموظفين في عملية التصميم والتطوير يضمن قبولهم وحماسهم للتغيير.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 border-r-4 border-orange-500 p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">قيمة التطبيق التدريجي</h4>
                    <p className="text-orange-700 text-sm">التطبيق التدريجي يسمح بالتعلم والتحسين المستمر دون مخاطر كبيرة.</p>
                  </div>
                  
                  <div className="bg-red-50 border-r-4 border-red-500 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">أهمية القياس والمتابعة</h4>
                    <p className="text-red-700 text-sm">وضع مؤشرات أداء واضحة ومراقبتها باستمرار ضروري لضمان النجاح.</p>
                  </div>
                  
                  <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">التوازن بين التراث والحداثة</h4>
                    <p className="text-yellow-700 text-sm">احترام القيم المحلية مع تطبيق أحدث اتجاهات التصميم يحقق قبولاً واسعاً.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* الخلاصة */}
            <section className="mb-16">
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">نجاح يلهم المستقبل</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  تجربة سلسلة "أناقة الخليج" تؤكد أن الاستثمار في الهوية البصرية والزي الموحد ليس مجرد تحسين شكلي، بل استراتيجية تجارية ذكية تحقق نتائج ملموسة ومستدامة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/ar/contact" variant="primary" size="lg">
                    ابدأ تحول علامتك التجارية
                  </Button>
                  <Button href="/ar/case-studies" variant="outline" size="lg">
                    استعرض المزيد من دراسات الحالة
                  </Button>
                </div>
              </div>
            </section>

          </div>
        </Container>
      </main>
    </div>
  );
}