import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Ar | Terms Of Service | يونيوم المملكة العربية السعودية',
  description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
  keywords: ['زي موحد', 'ملابس مهنية', 'يونيوم', 'المملكة العربية السعودية', 'ar | terms of service'],
  openGraph: {
    title: 'Ar | Terms Of Service | يونيوم المملكة العربية السعودية',
    description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
    url: 'https://uneom.com/ar/terms-of-service/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Ar | Terms Of Service - يونيوم المملكة العربية السعودية'
      }
    ],
    locale: 'ar'
  }
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">شروط الخدمة</h1>
            <p className="text-lg md:text-xl">
              تحكم الشروط والأحكام التالية استخدامك لمنتجات وخدمات يونيوم
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <p className="text-gray-600 mb-6">
                  آخر تحديث: 15 يونيو 2023
                </p>
                <p>
                  مرحبًا بك في يونيوم ("الشركة"، "نحن"، "خاصتنا"، "نا"). تحكم شروط الخدمة هذه ("الشروط") وصولك إلى واستخدام موقع يونيوم الإلكتروني ومنتجاته وخدماته. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. قبول الشروط</h2>
                <p>
                  من خلال الوصول إلى أو استخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط وسياسة الخصوصية الخاصة بنا. إذا كنت لا توافق على هذه الشروط، فلا يجوز لك الوصول إلى أو استخدام خدماتنا.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. وصف الخدمات</h2>
                <p>
                  يونيوم هي شركة توريد أزياء موحدة للشركات توفر أزياءً موحدة مهنية وملابس طبية للشركات في جميع أنحاء المملكة العربية السعودية. تشمل خدماتنا:
                </p>
                <ul className="list-disc pr-6 mt-3 space-y-2">
                  <li>تصميم وتصنيع أزياء موحدة مخصصة</li>
                  <li>طلبات الأزياء الموحدة بالجملة للشركات</li>
                  <li>إدارة برنامج الزي الموحد</li>
                  <li>استشارات الزي الموحد للشركات</li>
                  <li>خدمات التوصيل والتوزيع داخل المملكة العربية السعودية</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. تسجيل الحساب</h2>
                <p>
                  للوصول إلى ميزات معينة من خدماتنا، قد تحتاج إلى التسجيل للحصول على حساب. أنت توافق على تقديم معلومات دقيقة وحديثة وكاملة أثناء عملية التسجيل وتحديث هذه المعلومات للحفاظ على دقتها وحداثتها واكتمالها.
                </p>
                <p className="mt-3">
                  أنت مسؤول عن حماية كلمة المرور الخاصة بك وعن جميع الأنشطة التي تحدث تحت حسابك. أنت توافق على إخطارنا على الفور بأي استخدام غير مصرح به لحسابك.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. شروط الطلب والدفع</h2>
                <p>
                  تخضع جميع الطلبات للقبول من قبل يونيوم. نحتفظ بالحق في رفض أي طلب لأي سبب.
                </p>
                <p className="mt-3">
                  أسعار منتجاتنا وخدماتنا قابلة للتغيير دون إشعار. نحتفظ بالحق في تعديل أو إيقاف أي منتج أو خدمة دون إشعار في أي وقت.
                </p>
                <p className="mt-3">
                  شروط الدفع هي كالتالي:
                </p>
                <ul className="list-disc pr-6 mt-3 space-y-2">
                  <li>للطلبات العادية: دفعة مقدمة بنسبة 50٪ عند تأكيد الطلب، ونسبة 50٪ المتبقية قبل الشحن</li>
                  <li>للتصاميم المخصصة: قد يتم تطبيق رسوم تصميم وهي غير قابلة للاسترداد</li>
                  <li>لطلبات الجملة: يمكن التفاوض على شروط الدفع على أساس كل حالة على حدة</li>
                  <li>للطلبات المتكررة: سيتم تحديد شروط الدفع في اتفاقية منفصلة</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. التسليم والشحن</h2>
                <p>
                  ستبذل يونيوم كل جهد ممكن لتسليم المنتجات وفقًا لأوقات التسليم المقدرة، ولكننا لا نضمن تواريخ تسليم محددة. إطارات زمنية للشحن والتسليم هي تقديرات فقط.
                </p>
                <p className="mt-3">
                  مخاطر الفقدان وملكية المنتجات المشتراة من يونيوم تنتقل إليك عند تسليم المنتجات إلى شركة الشحن.
                </p>
                <p className="mt-3">
                  للتسليم داخل المملكة العربية السعودية، نستخدم شركاء شحن ذوي سمعة طيبة. قد يكون الشحن الدولي متاحًا عند الطلب ويخضع لرسوم إضافية ومتطلبات جمركية.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. الإرجاع والاسترداد</h2>
                <p>
                  نظرًا للطبيعة المخصصة للعديد من منتجاتنا، فإن عمليات الإرجاع محدودة وتخضع للشروط التالية:
                </p>
                <ul className="list-disc pr-6 mt-3 space-y-2">
                  <li>العناصر المخزنة: يمكن إرجاعها خلال 14 يومًا من الاستلام إذا كانت غير مستخدمة، في العبوة الأصلية، ومع الملصقات المرفقة</li>
                  <li>العناصر المخصصة: لا يمكن إرجاعها إلا إذا كان هناك عيب في التصنيع</li>
                  <li>المنتجات المعيبة: يجب الإبلاغ عنها خلال 7 أيام من الاستلام مع دليل مصور</li>
                </ul>
                <p className="mt-3">
                  يجب أن تتم الموافقة على جميع عمليات الإرجاع من قبل يونيوم قبل الشحن. لن يتم قبول المرتجعات غير المصرح بها.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. الملكية الفكرية</h2>
                <p>
                  جميع المحتويات على موقعنا الإلكتروني، بما في ذلك النصوص والرسومات والشعارات والصور والبرامج، هي ملك ليونيوم أو موردي المحتوى لديها ومحمية بموجب قوانين حقوق النشر السعودية والدولية.
                </p>
                <p className="mt-3">
                  للتصاميم المخصصة: ما لم يتفق على خلاف ذلك كتابة، تحتفظ يونيوم بملكية جميع التصاميم والأنماط والأعمال الفنية التي تم إنشاؤها للعملاء. يتم منح العملاء ترخيصًا غير حصري لاستخدام التصاميم على المنتجات المشتراة من يونيوم.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. حدود المسؤولية</h2>
                <p>
                  لن تكون يونيوم مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر، فقدان الأرباح أو البيانات أو الاستخدام أو الشهرة أو الخسائر غير الملموسة الأخرى، الناتجة عن (1) وصولك إلى أو استخدامك أو عدم قدرتك على الوصول إلى أو استخدام الخدمات؛ (2) أي سلوك أو محتوى لأي طرف ثالث في الخدمات؛ (3) أي محتوى تم الحصول عليه من الخدمات؛ و (4) الوصول غير المصرح به أو الاستخدام أو التغيير في عمليات إرسالك أو محتواك.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. القانون الحاكم</h2>
                <p>
                  تخضع هذه الشروط وتفسر وفقًا لقوانين المملكة العربية السعودية، بغض النظر عن أحكام تنازع القوانين.
                </p>
                <p className="mt-3">
                  يخضع أي نزاع ينشأ عن أو يتعلق بهذه الشروط للاختصاص القضائي الحصري لمحاكم المملكة العربية السعودية.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. التغييرات في الشروط</h2>
                <p>
                  نحتفظ بالحق، وفقًا لتقديرنا الخاص، في تعديل أو استبدال هذه الشروط في أي وقت. إذا كان التعديل جوهريًا، فسنقدم إشعارًا لمدة 30 يومًا على الأقل قبل دخول أي شروط جديدة حيز التنفيذ. سيتم تحديد ما يشكل تغييرًا جوهريًا وفقًا لتقديرنا الخاص.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. اتصل بنا</h2>
                <p>
                  إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على:
                </p>
                <div className="mt-3">
                  <p>يونيوم المملكة العربية السعودية</p>
                  <p>البريد الإلكتروني: legal@uneom.com</p>
                  <p>هاتف: +966 13 XXX XXXX</p>
                  <p>العنوان: بوابة الأعمال، الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">هل لديك أسئلة حول شروطنا؟</h2>
            <p className="text-lg text-gray-600 mb-8">
              فريق خدمة العملاء لدينا جاهز لمساعدتك في أي استفسارات بخصوص شروط الخدمة لدينا.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ar/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                اتصل بنا
              </Link>
              <Link 
                href="/ar/privacy-policy" 
                className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition duration-300"
              >
                عرض سياسة الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 