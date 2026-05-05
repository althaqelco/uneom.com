import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء المطاعم ومقدمي الطعام | يونيوم',
  titleAr: 'أزياء المطاعم ومقدمي الطعام | يونيوم',
  description: 'أزياء احترافية مقاومة للبقع لموظفي المطاعم وقطاع الأغذية والمشروبات في السعودية. اكتشف قمصان الندل، المرايل، وسترات الطهاة عالية التحمل من يونيوم.',
  descriptionAr: 'أزياء احترافية مقاومة للبقع لموظفي المطاعم وقطاع الأغذية والمشروبات في السعودية. اكتشف قمصان الندل، المرايل، وسترات الطهاة عالية التحمل من يونيوم.',
  keywords: ['زي المطاعم', 'يونيفورم مقدمي الطعام', 'أزياء المقاهي', 'ملابس مطاعم مقاومة للبقع', 'قمصان الجرسونات'],
  keywordsAr: ['زي المطاعم', 'يونيفورم مقدمي الطعام', 'أزياء المقاهي', 'ملابس مطاعم مقاومة للبقع', 'قمصان الجرسونات'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/hospitality-attire/restaurant-uniform'
});

export const dynamic = 'force-static';

export default function RestaurantUniformPageAr() {
  return (
    <>
      <section className="bg-neutral-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء الضيافة', href: '/ar/shop/hospitality-attire' },
            { label: 'أزياء المطاعم', href: '/ar/shop/hospitality-attire/restaurant-uniform' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أزياء <span className="text-amber-500">المطاعم ومقدمي الطعام</span>
            </h1>
            <p className="text-xl text-neutral-300">
              أزياء متينة، مقاومة للبقع، وأنيقة لموظفي المطاعم الفاخرة، المقاهي، وقطاع الأغذية والمشروبات. مصممة لتحمل بيئة العمل السريعة والحيوية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">الأداء العالي يلتقي بالأناقة</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  في قطاع الأغذية والمشروبات، يواجه الزي الموحد تحديات يومية من الانسكابات والحرارة والحركة المستمرة. تم هندسة مجموعة أزياء المطاعم لدينا لتحمل هذه الظروف القاسية مع الحفاظ على مظهر نقي وجذاب للعملاء.
                </p>
                <p>
                  سواء كنت تجهز فريق الندل (Waiters) في مطعم فاخر، أو الباريستا في مقهى عصري، توفر يونيوم حلولاً شاملة ومخصصة للسوق السعودي تلبي أعلى المعايير.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">تشكيلة منتجاتنا</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>قمصان الخدمة:</strong> معالجة بتقنية التيفلون (Teflon™) لمقاومة استثنائية للبقع والسوائل.</li>
                  <li><strong>المرايل الاحترافية (Aprons):</strong> متوفرة بتصاميم متعددة (للخصر، الصدر، وأحزمة متقاطعة) مع خياطة معززة في نقاط الضغط لضمان عمر أطول.</li>
                  <li><strong>بناطيل العمل:</strong> مزودة بأحزمة خصر مطاطية مخفية لتوفير أقصى درجات الراحة خلال الورديات الطويلة.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">اطلب تسعيرة لتجهيز مطعمك</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">اسم المطعم / المقهى</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="أدخل اسم النشاط" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">عدد الموظفين</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>1-20 موظفاً</option>
                    <option>21-50 موظفاً</option>
                    <option>50+ موظف</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">رقم الهاتف</label>
                  <input type="tel" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="05X XXX XXXX" dir="ltr" />
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  طلب عرض أسعار للكميات
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
