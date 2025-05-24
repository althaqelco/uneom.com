'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SEO from '@/components/SEO';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ArabicTermsOfServicePage() {
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <SEO
        title="شروط الخدمة | يونيوم لتصنيع الأزياء الموحدة"
        description="اقرأ شروط خدمة يونيوم لتصنيع وتوريد الأزياء الموحدة في المملكة العربية السعودية. تعرف على سياساتنا والضمانات وشروط الخدمة."
        canonicalUrl="https://uneom.com/ar/terms/"
      />

      {/* قسم البطل */}
      <section className="relative py-20 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              شروط الخدمة
            </h1>
            <p className="text-xl text-white/90 mb-4">
              الشروط والأحكام التي تحكم استخدام خدمات تصنيع الأزياء الموحدة من يونيوم.
            </p>
            <p className="text-lg text-white/80">
              آخر تحديث: يناير 2024
            </p>
          </div>
        </Container>
      </section>

      {/* محتوى الشروط */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* الموافقة على الشروط */}
            <div className="mb-12">
              <SectionHeading as="h2">الموافقة على الشروط</SectionHeading>
              <p>
                تشكل شروط الخدمة هذه ("الشروط") اتفاقية ملزمة قانونياً بينك وبين يونيوم ("الشركة" أو "نحن" أو "شركتنا" أو "لنا") فيما يتعلق باستخدامك لخدمات تصنيع وتوريد الأزياء الموحدة وموقعنا الإلكتروني والخدمات ذات الصلة (مجتمعة، "الخدمات").
              </p>
              <p>
                بالوصول إلى خدماتنا أو استخدامها أو تقديم الطلبات أو الدخول في علاقات تجارية مع يونيوم، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على هذه الشروط، فلا يجوز لك استخدام خدماتنا.
              </p>
            </div>

            {/* وصف خدماتنا */}
            <div className="mb-12">
              <SectionHeading as="h2">خدماتنا</SectionHeading>
              <p>تقدم يونيوم خدمات شاملة لتصنيع وتوريد الأزياء الموحدة، بما في ذلك:</p>
              <ul>
                <li>تصميم وتصنيع الأزياء الموحدة المخصصة لمختلف الصناعات</li>
                <li>منتجات الأزياء الموحدة القياسية وعناصر الكتالوج</li>
                <li>توريد الأقمشة والاستشارة في المواد</li>
                <li>خدمات العلامة التجارية والتخصيص (التطريز، الطباعة، إلخ)</li>
                <li>استشارة المقاسات وخدمات القياس</li>
                <li>تنسيق التسليم واللوجستيات</li>
                <li>دعم ما بعد البيع وخدمات الضمان</li>
              </ul>
              <p>
                تركز خدماتنا بشكل أساسي على السوق السعودي ومنطقة مجلس التعاون الخليجي، مع مرافق التصنيع والمكاتب الموجودة في المملكة العربية السعودية.
              </p>
            </div>

            {/* الطلبات والعروض */}
            <div className="mb-12">
              <SectionHeading as="h2">الطلبات والعروض</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">عملية العروض</h3>
              <ul>
                <li>جميع العروض صالحة لمدة 30 يوماً ما لم يُنص على خلاف ذلك</li>
                <li>الأسعار قابلة للتغيير بناءً على تكاليف المواد والمواصفات وظروف السوق</li>
                <li>العروض هي تقديرات وقد تختلف الأسعار النهائية بناءً على المتطلبات الفعلية</li>
                <li>قد تطبق رسوم التصميم المخصص للتطوير الفريد للأزياء الموحدة</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">قبول الطلبات</h3>
              <ul>
                <li>الطلبات خاضعة لقبولنا وتأكيدنا</li>
                <li>نحتفظ بالحق في رفض الطلبات التي لا تلبي معايير الجودة أو القدرات لدينا</li>
                <li>تطبق كميات الطلب الدنيا على معظم المنتجات والخدمات</li>
                <li>قد تخضع تعديلات الطلبات لرسوم إضافية وتعديلات في الجدول الزمني</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">الجدول الزمني للإنتاج</h3>
              <ul>
                <li>أوقات الإنتاج القياسية تتراوح من 2-8 أسابيع حسب تعقيد المنتج</li>
                <li>يمكن استيعاب الطلبات العاجلة مقابل رسوم إضافية</li>
                <li>تواريخ التسليم تقديرية وقد تتأثر بتوفر المواد أو الظروف غير المتوقعة</li>
                <li>سنخطرك فوراً بأي تأخير كبير</li>
              </ul>
            </div>

            {/* شروط الدفع */}
            <div className="mb-12">
              <SectionHeading as="h2">شروط الدفع</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">طرق الدفع</h3>
              <p>نقبل طرق الدفع التالية:</p>
              <ul>
                <li>التحويلات المصرفية بالريال السعودي</li>
                <li>خطابات الاعتماد للطلبات الكبيرة</li>
                <li>الحسابات المؤسسية المعتمدة مع شروط ائتمان محددة</li>
                <li>المدفوعات النقدية للطلبات الصغيرة (حسب تقديرنا)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">جدول الدفع</h3>
              <ul>
                <li><strong>الطلبات القياسية:</strong> 50% دفعة مقدمة عند تأكيد الطلب، 50% قبل التسليم</li>
                <li><strong>الطلبات الكبيرة:</strong> جدول دفع يتم التفاوض عليه بناءً على حجم الطلب والجدول الزمني</li>
                <li><strong>العملاء الثابتون:</strong> قد تتوفر شروط دفع صافي 30 يوماً مع الائتمان المعتمد</li>
                <li><strong>مشاريع التصميم المخصص:</strong> رسوم التصميم مستحقة عند بدء المشروع</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">المدفوعات المتأخرة</h3>
              <p>
                قد تطبق رسوم الدفع المتأخر بنسبة 1.5% شهرياً على المبالغ المتأخرة. نحتفظ بالحق في تعليق الخدمات للحسابات ذات الأرصدة المستحقة التي تتجاوز 60 يوماً.
              </p>
            </div>

            {/* ضمان الجودة والضمانات */}
            <div className="mb-12">
              <SectionHeading as="h2">ضمان الجودة والضمانات</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">معايير الجودة</h3>
              <p>جميع منتجات يونيوم مصنعة لتلبية:</p>
              <ul>
                <li>معايير إدارة الجودة ISO 9001:2015</li>
                <li>معيار OEKO-TEX Standard 100 لسلامة المنسوجات</li>
                <li>متطلبات علامة الجودة السعودية</li>
                <li>معايير السلامة والأداء الخاصة بالصناعة</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">ضمان المنتج</h3>
              <ul>
                <li><strong>عيوب التصنيع:</strong> ضمان 90 يوماً ضد العيوب في المواد والصناعة</li>
                <li><strong>ثبات اللون:</strong> ضمان ضد البهتان المفرط تحت الاستخدام والعناية العادية</li>
                <li><strong>مشاكل المقاسات:</strong> تبديل مجاني للمقاسات خلال 30 يوماً من التسليم (مع شروط)</li>
                <li><strong>المنتجات المخصصة:</strong> تطبق شروط ضمان محدودة على العناصر المصممة خصيصاً</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">استثناءات الضمان</h3>
              <p>الضمانات لا تغطي:</p>
              <ul>
                <li>التآكل والتلف العادي من الاستخدام المنتظم</li>
                <li>الضرر من العناية أو التنظيف غير الصحيح</li>
                <li>التعديلات التي يقوم بها أطراف ثالثة</li>
                <li>المنتجات المستخدمة خارج الغرض المقصود</li>
              </ul>
            </div>

            {/* التسليم ومخاطر الخسارة */}
            <div className="mb-12">
              <SectionHeading as="h2">التسليم ومخاطر الخسارة</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">شروط التسليم</h3>
              <ul>
                <li>يتم التسليم إلى العنوان المحدد في طلبك</li>
                <li>تنتقل مخاطر الخسارة إليك عند التسليم</li>
                <li>تواريخ التسليم تقديرية وغير مضمونة</li>
                <li>قد تطبق رسوم إضافية للشحن السريع أو متطلبات التسليم الخاصة</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">الفحص والقبول</h3>
              <ul>
                <li>يجب فحص المنتجات خلال 7 أيام من التسليم</li>
                <li>يجب الإبلاغ عن مطالبات أضرار الشحن خلال 48 ساعة</li>
                <li>يجب الإبلاغ عن مشاكل الجودة خلال 14 يوماً من التسليم</li>
                <li>عدم الإبلاغ عن المشاكل خلال الأطر الزمنية المحددة قد يبطل مطالبات الضمان</li>
              </ul>
            </div>

            {/* الملكية الفكرية */}
            <div className="mb-12">
              <SectionHeading as="h2">الملكية الفكرية</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">تصاميم وشعارات العملاء</h3>
              <ul>
                <li>تحتفظ بملكية شعاراتك وتصاميمك وعناصر علامتك التجارية</li>
                <li>تمنحنا ترخيصاً لاستخدام ملكيتك الفكرية فقط لتنفيذ طلباتك</li>
                <li>تضمن أن لديك حقوق في جميع التصاميم والشعارات المقدمة لنا</li>
                <li>تعوضنا ضد المطالبات المتعلقة بملكيتك الفكرية</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">الملكية الفكرية ليونيوم</h3>
              <ul>
                <li>تصاميمنا وأنماطنا وعملياتنا المملوكة تبقى ملكيتنا</li>
                <li>لا يجوز لك إعادة إنتاج أو توزيع تصاميمنا المملوكة دون إذن</li>
                <li>محتوى موقعنا الإلكتروني وشعاراتنا ومواردنا محمية بقوانين حقوق الطبع والنشر والعلامات التجارية</li>
              </ul>
            </div>

            {/* تحديد المسؤولية */}
            <div className="mb-12">
              <SectionHeading as="h2">تحديد المسؤولية</SectionHeading>
              <p>
                إلى أقصى حد يسمح به القانون، لن تتجاوز المسؤولية الإجمالية ليونيوم عن أي مطالبات تنشأ من أو تتعلق بخدماتنا المبلغ الإجمالي المدفوع من قبلك للمنتجات أو الخدمات المحددة التي تؤدي إلى المطالبة.
              </p>
              <p>
                لن نكون مسؤولين عن الأضرار غير المباشرة أو العرضية أو الخاصة أو التبعية أو العقابية، بما في ذلك على سبيل المثال لا الحصر فقدان الأرباح أو انقطاع الأعمال أو فقدان البيانات، حتى لو تم إخطارنا بإمكانية حدوث مثل هذه الأضرار.
              </p>
            </div>

            {/* القوة القاهرة */}
            <div className="mb-12">
              <SectionHeading as="h2">القوة القاهرة</SectionHeading>
              <p>
                لن نكون مسؤولين عن أي تأخير أو فشل في أداء التزاماتنا بسبب ظروف خارجة عن سيطرتنا المعقولة، بما في ذلك على سبيل المثال لا الحصر:
              </p>
              <ul>
                <li>الكوارث الطبيعية أو الأوبئة أو حالات الطوارئ الصحية العامة</li>
                <li>الإجراءات الحكومية أو اللوائح أو القيود التجارية</li>
                <li>نزاعات العمل أو الإضرابات أو اضطرابات سلسلة التوريد</li>
                <li>نقص المواد أو أعطال معدات التصنيع</li>
                <li>تأخير النقل أو اضطرابات اللوجستيات</li>
              </ul>
            </div>

            {/* القانون الحاكم */}
            <div className="mb-12">
              <SectionHeading as="h2">القانون الحاكم وحل النزاعات</SectionHeading>
              <p>
                تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاعات تنشأ من أو تتعلق بهذه الشروط أو خدماتنا يجب حلها من خلال:
              </p>
              <ol>
                <li><strong>التفاوض المباشر:</strong> مناقشات بحسن نية بين الأطراف</li>
                <li><strong>الوساطة:</strong> وساطة غير ملزمة من خلال وسيط متفق عليه بشكل متبادل</li>
                <li><strong>التحكيم:</strong> تحكيم ملزم تحت قانون التحكيم التجاري السعودي</li>
              </ol>
              <p>
                يكون مقر التحكيم في الرياض، المملكة العربية السعودية، وتجرى الإجراءات باللغة العربية أو الإنجليزية كما هو متفق عليه بشكل متبادل.
              </p>
            </div>

            {/* تعديلات الشروط */}
            <div className="mb-12">
              <SectionHeading as="h2">تعديلات الشروط</SectionHeading>
              <p>
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستصبح التغييرات سارية فوراً عند النشر على موقعنا الإلكتروني. استمرار استخدامك لخدماتنا بعد نشر التغييرات يشكل قبولاً للشروط المعدلة.
              </p>
              <p>
                للتغييرات المهمة التي تؤثر بشكل كبير على حقوقك أو التزاماتك، سنقدم إشعاراً معقولاً من خلال البريد الإلكتروني أو وسائل أخرى مناسبة.
              </p>
            </div>

            {/* معلومات الاتصال */}
            <div className="mb-12">
              <SectionHeading as="h2">معلومات الاتصال</SectionHeading>
              <p>للأسئلة حول هذه الشروط أو خدماتنا، يرجى الاتصال بنا:</p>
              
              <div className="bg-neutral-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-4">القسم القانوني - يونيوم</h3>
                <div className="space-y-2">
                  <p><strong>البريد الإلكتروني:</strong> legal@uneom.com</p>
                  <p><strong>الهاتف:</strong> +971 55 816 4922</p>
                  <p><strong>العنوان:</strong> شارع العليا، حي العليا، الرياض 12213، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* قسم الدعوة للعمل */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">مستعد لبدء مشروع الأزياء الموحدة الخاص بك؟</h2>
            <p className="text-lg text-neutral-700 mb-8">
              اتصل بفريقنا لمناقشة متطلبات الأزياء الموحدة الخاصة بك والحصول على عرض أسعار مفصل.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/contact"
                className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                اتصل بنا
              </Link>
              <Link
                href="/ar/quote"
                className="inline-block bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 px-8 py-3 rounded-md font-medium text-lg transition-colors duration-200"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}