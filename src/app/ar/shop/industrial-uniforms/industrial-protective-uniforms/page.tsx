import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'ملابس وأفرولات الحماية الصناعية | يونيوم للزي المهني',
  titleAr: 'ملابس وأفرولات الحماية الصناعية | يونيوم للزي المهني',
  description: 'أفرولات وملابس حماية عالية الأداء لقطاعات الصناعة الثقيلة، التصنيع، والمقاولات. أزياء مقاومة للشرر الكهربائي والرذاذ الكيميائي في السعودية.',
  descriptionAr: 'أفرولات وملابس حماية عالية الأداء لقطاعات الصناعة الثقيلة، التصنيع، والمقاولات. أزياء مقاومة للشرر الكهربائي والرذاذ الكيميائي في السعودية.',
  keywords: ['أفرول صناعي', 'ملابس حماية مهنية', 'زي عمال المصانع', 'أفرول مقاوم للكيماويات', 'ملابس السلامة والمقاولات'],
  keywordsAr: ['أفرول صناعي', 'ملابس حماية مهنية', 'زي عمال المصانع', 'أفرول مقاوم للكيماويات', 'ملابس السلامة والمقاولات'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/industrial-protective-uniforms'
});

export const dynamic = 'force-static';

export default function IndustrialProtectiveUniformsPageAr() {
  return (
    <>
      <section className="bg-neutral-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'ملابس الحماية الصناعية', href: '/ar/shop/industrial-uniforms/industrial-protective-uniforms' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ملابس وأفرولات <span className="text-amber-500">الحماية الصناعية</span>
            </h1>
            <p className="text-xl text-neutral-300">
              صُممت لأقسى بيئات العمل. أفرولات وأطقم عمل صناعية عالية التحمل توفر حماية غير مسبوقة للقوى العاملة في القطاعات الصناعية السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">أمان ومتانة بلا مساومة</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  تتطلب العمليات الصناعية في المملكة ملابس عمل قادرة على تحمل الإجهاد البدني الشديد، والمواد الخطرة، والظروف المناخية القاسية. تم تصميم سلسلة "الحماية الصناعية" من يونيوم لتلبية هذه التحديات بدقة.
                </p>
                <p>
                  يغطي نطاقنا الشامل كل شيء بدءاً من الأفرولات القياسية (بولي-قطن) لقطاع التصنيع العام، وصولاً إلى الملابس المتخصصة المقاومة للوميض القوسي (Arc-flash) والرذاذ الكيميائي.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">أبرز مواصفات المجموعة</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>أفرولات الخدمة الشاقة:</strong> طبقات خياطة مزدوجة وثلاثية (Double/Triple Stitching) مع تعزيز نقاط الضغط (Bar-tacking) لضمان عمر افتراضي طويل حتى في المهن القاسية.</li>
                  <li><strong>أطقم العمل المكونة من قطعتين:</strong> سترات وبناطيل كارغو متطابقة توفر مرونة هائلة للميكانيكيين، الفنيين، وعمال خطوط التجميع.</li>
                  <li><strong>حماية متخصصة (خياري):</strong> أقمشة معالجة لصد الزيوت، طاردة للمياه، ومضادة للشحنات الساكنة (متوافقة مع معيار EN 1149).</li>
                  <li><strong>تصميم مريح (Ergonomic):</strong> ظهر ذو طيات حركية (Action-back) وخصر مطاطي يتيحان نطاق حركة كامل أثناء التسلق أو رفع الأحمال الثقيلة.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">صمم برنامج ملابس العمل لشركتك</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">القطاع الصناعي</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>الصناعات الثقيلة والتصنيع</option>
                    <option>السيارات والطيران</option>
                    <option>التعدين والحفر</option>
                    <option>المقاولات العامة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">الخطر الأساسي في الموقع</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>التمزق والأوساخ العامة (الغبار)</option>
                    <option>الرذاذ الكيميائي والزيوت</option>
                    <option>الشرر الكهربائي / الكهرباء الساكنة</option>
                    <option>الحرارة وشرر اللحام</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">عدد العمال/الفنيين</label>
                  <input type="number" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="مثال: 500" dir="ltr" />
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  التواصل مع المبيعات التقنية
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
