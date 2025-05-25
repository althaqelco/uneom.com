'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

export default function FactorySafetyImprovementPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="دراسة حالة: تحسين السلامة في المصانع | تقليل الحوادث بنسبة 70% | يونيوم"
        description="دراسة حالة شاملة لتحسين السلامة المهنية في مصنع الحديد والصلب السعودي من خلال تطوير الأزياء الواقية وأنظمة السلامة. تقليل الحوادث بنسبة 70% خلال 6 أشهر."
        canonicalUrl="https://uneom.com/ar/case-studies/factory-safety-improvement/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
            alt="تحسين السلامة في المصانع"
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
              { label: 'تحسين السلامة في المصانع', href: '/ar/case-studies/factory-safety-improvement' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              دراسة حالة سلامة مهنية
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              ثورة في السلامة المهنية: كيف قلل مصنع الحديد والصلب الحوادث بنسبة 70%
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-3xl">
              قصة نجاح ملهمة لمصنع "الحديد المتطور" في الدمام، الذي حقق تحسناً جذرياً في السلامة المهنية من خلال تطوير شامل للأزياء الواقية وأنظمة السلامة.
            </p>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>6 أشهر</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>-70% تقليل الحوادث</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>800 عامل في الدمام</span>
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
              <div className="bg-red-50 border-r-4 border-red-500 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-red-900">الملخص التنفيذي</h2>
                <p className="text-red-800 text-lg leading-relaxed mb-4">
                  واجه مصنع "الحديد المتطور" في الدمام أزمة سلامة حقيقية في عام 2024، حيث سجل 45 حادث عمل خلال النصف الأول من العام، مما هدد سمعة الشركة وعرض العمال للخطر. من خلال شراكة استراتيجية مع يونيوم، تم تطوير برنامج شامل لتحسين السلامة المهنية حقق نتائج استثنائية.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                    <div className="text-sm text-gray-600">تقليل الحوادث</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">تحسن الامتثال للسلامة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                    <div className="text-sm text-gray-600">رضا العمال عن الأزياء الجديدة</div>
                  </div>
                </div>
              </div>
            </section>

            {/* خلفية المصنع */}
            <section className="mb-16">
              <SectionHeading subtitle="خلفية المصنع">
                مصنع الحديد المتطور - الدمام
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    تأسس مصنع "الحديد المتطور" في عام 2015 في المنطقة الصناعية بالدمام كأحد أكبر مصانع إنتاج الحديد والصلب في المنطقة الشرقية. يعمل المصنع على مدار الساعة بثلاث ورديات ويوظف أكثر من 800 عامل من مختلف الجنسيات.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">إنتاج سنوي: 500,000 طن من الحديد والصلب</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">800+ عامل في ثلاث ورديات</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">15 خط إنتاج متطور</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3"></div>
                      <span className="text-gray-700">شهادة ISO 45001 للسلامة المهنية</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                    alt="مصنع الحديد المتطور"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* التحديات */}
            <section className="mb-16">
              <SectionHeading subtitle="التحديات الحرجة">
                أزمة السلامة المهنية
              </SectionHeading>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                في النصف الأول من عام 2024، واجه المصنع تحديات خطيرة في السلامة المهنية هددت استمراريته وسمعته:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-red-800">إحصائيات الحوادث المقلقة</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-red-700">إجمالي الحوادث (6 أشهر)</span>
                      <span className="font-bold text-red-600">45 حادث</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-700">إصابات خطيرة</span>
                      <span className="font-bold text-red-600">12 إصابة</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-700">أيام عمل مفقودة</span>
                      <span className="font-bold text-red-600">340 يوم</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-red-700">تكلفة الحوادث</span>
                      <span className="font-bold text-red-600">2.8 مليون ريال</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-orange-800">أسباب الحوادث الرئيسية</h4>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      أزياء واقية قديمة وغير مناسبة (40%)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      عدم وضوح أنظمة السلامة (25%)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      نقص التدريب على السلامة (20%)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      عوامل بيئية وتقنية (15%)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">شهادة مدير السلامة</h4>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "كنا في أزمة حقيقية. الحوادث تتزايد والعمال يفقدون الثقة في أنظمة السلامة. الأزياء الواقية القديمة لم تعد تلبي احتياجات بيئة العمل الحديثة، وكان لدينا ضغط كبير من الجهات الرقابية لتحسين الأوضاع بسرعة."
                </blockquote>
                <cite className="text-gray-600 text-sm mt-2 block">- محمد الشهري، مدير السلامة المهنية</cite>
              </div>
            </section>

            {/* الحل */}
            <section className="mb-16">
              <SectionHeading subtitle="الحل الشامل">
                برنامج تحسين السلامة المتكامل
              </SectionHeading>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                بعد تقييم شامل للوضع، طور فريق يونيوم برنامجاً متكاملاً لتحسين السلامة المهنية يركز على أربعة محاور رئيسية:
              </p>

              <div className="space-y-8 mb-12">
                <div className="bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-blue-800">المحور الأول: تطوير الأزياء الواقية المتقدمة</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">مواصفات تقنية متطورة</h5>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• مقاومة للحرارة حتى 1000°م</li>
                        <li>• حماية من الشرر والمعادن المنصهرة</li>
                        <li>• مقاومة للتمزق والثقب</li>
                        <li>• تهوية محسنة للراحة</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">تصميم مريح وعملي</h5>
                      <ul className="text-blue-600 text-sm space-y-1">
                        <li>• قصة مريحة تسمح بحرية الحركة</li>
                        <li>• جيوب متعددة للأدوات</li>
                        <li>• سحابات وأزرار مقاومة للحرارة</li>
                        <li>• أحزمة أمان مدمجة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-r-4 border-green-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-green-800">المحور الثاني: نظام ترميز الألوان للسلامة</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">ترميز الأدوار</h5>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• أحمر - فريق الطوارئ والإطفاء</li>
                        <li>• أصفر - مشغلو المعدات الثقيلة</li>
                        <li>• أزرق - العمال المهرة</li>
                        <li>• أبيض - المشرفون والمهندسون</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">ترميز المناطق</h5>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• شرائط عاكسة للمناطق الخطرة</li>
                        <li>• ألوان فلوريسنتية للرؤية الليلية</li>
                        <li>• رموز خاصة لكل قسم</li>
                        <li>• علامات تحذيرية واضحة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-r-4 border-purple-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-purple-800">المحور الثالث: برنامج التدريب المكثف</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-purple-700">تدريب نظري</h5>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• أساسيات السلامة المهنية</li>
                        <li>• استخدام الأزياء الواقية</li>
                        <li>• إجراءات الطوارئ</li>
                        <li>• التعرف على المخاطر</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-purple-700">تدريب عملي</h5>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• محاكاة حالات الطوارئ</li>
                        <li>• استخدام معدات الإطفاء</li>
                        <li>• الإسعافات الأولية</li>
                        <li>• تقييم المخاطر الميدانية</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-r-4 border-orange-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-orange-800">المحور الرابع: أنظمة المراقبة والتقييم</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-orange-700">مراقبة مستمرة</h5>
                      <ul className="text-orange-600 text-sm space-y-1">
                        <li>• كاميرات مراقبة ذكية</li>
                        <li>• أجهزة استشعار للمخاطر</li>
                        <li>• تقارير يومية للسلامة</li>
                        <li>• تحليل البيانات والاتجاهات</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-orange-700">تقييم دوري</h5>
                      <ul className="text-orange-600 text-sm space-y-1">
                        <li>• تفتيش أسبوعي للأزياء</li>
                        <li>• اختبارات السلامة الشهرية</li>
                        <li>• مراجعة الإجراءات ربع السنوية</li>
                        <li>• تحديث المعايير سنوياً</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* التطبيق */}
            <section className="mb-16">
              <SectionHeading subtitle="مراحل التطبيق">
                تنفيذ متدرج ومنهجي
              </SectionHeading>
              
              <div className="relative">
                <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">1</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الأولى: التقييم والتحليل (أسبوعين)</h4>
                      <p className="text-gray-600 mb-3">تقييم شامل للوضع الحالي وتحديد نقاط الضعف والمخاطر الرئيسية.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• تحليل إحصائيات الحوادث السابقة</li>
                        <li>• فحص الأزياء الواقية الحالية</li>
                        <li>• تقييم إجراءات السلامة الموجودة</li>
                        <li>• استطلاع آراء العمال والمشرفين</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">2</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الثانية: التصميم والتطوير (شهر واحد)</h4>
                      <p className="text-gray-600 mb-3">تطوير الأزياء الواقية الجديدة وأنظمة السلامة المحسنة.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• تصميم الأزياء الواقية المتخصصة</li>
                        <li>• تطوير نظام ترميز الألوان</li>
                        <li>• إعداد مواد التدريب</li>
                        <li>• اختبار النماذج الأولية</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">3</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الثالثة: التطبيق التجريبي (شهر واحد)</h4>
                      <p className="text-gray-600 mb-3">تطبيق النظام الجديد في قسم واحد لاختبار الفعالية.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• تطبيق في قسم الصهر (الأعلى خطورة)</li>
                        <li>• تدريب 150 عامل على النظام الجديد</li>
                        <li>• مراقبة مكثفة للنتائج</li>
                        <li>• جمع التغذية الراجعة والتحسين</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold relative z-10">4</div>
                    <div className="mr-6">
                      <h4 className="text-lg font-semibold mb-2">المرحلة الرابعة: التوسع الشامل (3 أشهر)</h4>
                      <p className="text-gray-600 mb-3">تطبيق النظام على جميع أقسام المصنع مع المتابعة المستمرة.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• تطبيق تدريجي في جميع الأقسام</li>
                        <li>• تدريب جميع العمال (800 عامل)</li>
                        <li>• تركيب أنظمة المراقبة الذكية</li>
                        <li>• إطلاق برنامج التحسين المستمر</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* النتائج */}
            <section className="mb-16">
              <SectionHeading subtitle="النتائج المذهلة">
                تحسن جذري في السلامة المهنية
              </SectionHeading>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                بعد 6 أشهر من تطبيق البرنامج الشامل، حقق مصنع "الحديد المتطور" نتائج استثنائية فاقت كل التوقعات:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
                  <div className="text-green-800 font-semibold mb-1">تقليل الحوادث</div>
                  <div className="text-green-600 text-sm">من 45 إلى 13 حادث</div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-blue-800 font-semibold mb-1">تحسن الامتثال</div>
                  <div className="text-blue-600 text-sm">لمعايير السلامة</div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                  <div className="text-purple-800 font-semibold mb-1">رضا العمال</div>
                  <div className="text-purple-600 text-sm">عن الأزياء الجديدة</div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">60%</div>
                  <div className="text-orange-800 font-semibold mb-1">تقليل التكاليف</div>
                  <div className="text-orange-600 text-sm">المرتبطة بالحوادث</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">مؤشرات السلامة</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">الحوادث الخطيرة</span>
                      <span className="font-semibold text-green-600">-83%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">أيام العمل المفقودة</span>
                      <span className="font-semibold text-green-600">-75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">سرعة الاستجابة للطوارئ</span>
                      <span className="font-semibold text-green-600">+65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">معدل الامتثال للسلامة</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">المؤشرات التشغيلية</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">الإنتاجية العامة</span>
                      <span className="font-semibold text-blue-600">+15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">معنويات العمال</span>
                      <span className="font-semibold text-blue-600">+40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">معدل دوران الموظفين</span>
                      <span className="font-semibold text-blue-600">-30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">توفير في التكاليف</span>
                      <span className="font-semibold text-blue-600">1.8 مليون ريال</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* شهادات */}
            <section className="mb-16">
              <SectionHeading subtitle="شهادات النجاح">
                آراء العمال والإدارة
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
                    "الزي الجديد مريح جداً ويحميني بشكل أفضل من الحرارة والشرر. أشعر بالأمان أكثر في عملي، والألوان الجديدة تساعدني في التعرف على زملائي بسرعة."
                  </blockquote>
                  <cite className="text-blue-600 text-sm">- أحمد العتيبي، عامل صهر</cite>
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
                    "التحسن في السلامة واضح جداً. العمال أصبحوا أكثر التزاماً بإجراءات السلامة، ونظام الألوان الجديد سهل علينا الإشراف والتنسيق بين الفرق."
                  </blockquote>
                  <cite className="text-green-600 text-sm">- خالد المطيري، مشرف الإنتاج</cite>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">شهادة الإدارة العليا</h4>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  "النتائج تجاوزت كل توقعاتنا. لم نحقق فقط تحسناً في السلامة، بل أيضاً في الإنتاجية ومعنويات العمال. الاستثمار في السلامة المهنية أثبت أنه استثمار ذكي يحقق عوائد على جميع المستويات."
                </blockquote>
                <cite className="text-gray-600 text-sm">- عبدالله الدوسري، المدير العام لمصنع الحديد المتطور</cite>
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
                    <h4 className="font-semibold text-blue-800 mb-2">أهمية التقييم الشامل</h4>
                    <p className="text-blue-700 text-sm">فهم الأسباب الجذرية للمشاكل ضروري لوضع حلول فعالة ومستدامة.</p>
                  </div>
                  
                  <div className="bg-green-50 border-r-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">قوة التدريب المكثف</h4>
                    <p className="text-green-700 text-sm">الاستثمار في تدريب العمال يحقق عوائد كبيرة في السلامة والإنتاجية.</p>
                  </div>
                  
                  <div className="bg-purple-50 border-r-4 border-purple-500 p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">أهمية إشراك العمال</h4>
                    <p className="text-purple-700 text-sm">إشراك العمال في تطوير الحلول يضمن قبولها وتطبيقها بفعالية.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 border-r-4 border-orange-500 p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">قيمة التطبيق التدريجي</h4>
                    <p className="text-orange-700 text-sm">التطبيق المرحلي يسمح بالتعلم والتحسين دون تعطيل العمليات.</p>
                  </div>
                  
                  <div className="bg-red-50 border-r-4 border-red-500 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">ضرورة المراقبة المستمرة</h4>
                    <p className="text-red-700 text-sm">أنظمة المراقبة والتقييم المستمر ضرورية لضمان استدامة النتائج.</p>
                  </div>
                  
                  <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">الاستثمار في التقنية</h4>
                    <p className="text-yellow-700 text-sm">التقنيات المتقدمة في الأزياء والمراقبة تحقق نتائج أفضل.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* الخلاصة */}
            <section className="mb-16">
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">نجاح يلهم الصناعة</h2>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  تجربة مصنع "الحديد المتطور" تؤكد أن الاستثمار في السلامة المهنية ليس فقط التزاماً أخلاقياً، بل استراتيجية تجارية ذكية تحقق نتائج ملموسة على جميع المستويات.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/ar/contact" variant="primary" size="lg">
                    ابدأ برنامج السلامة المهنية
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