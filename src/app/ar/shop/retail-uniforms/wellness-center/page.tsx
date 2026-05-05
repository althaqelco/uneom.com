import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء المراكز الرياضية والصحية | يونيوم للياقة البدنية',
  titleAr: 'أزياء المراكز الرياضية والصحية | يونيوم للياقة البدنية',
  description: 'أزياء رياضية عالية الأداء للمراكز الصحية، صالات الجيم، والنوادي في السعودية. قمصان بولو طاردة للعرق، بناطيل رياضية، وملابس المدربين الشخصيين.',
  descriptionAr: 'أزياء رياضية عالية الأداء للمراكز الصحية، صالات الجيم، والنوادي في السعودية. قمصان بولو طاردة للعرق، بناطيل رياضية، وملابس المدربين الشخصيين.',
  keywords: ['أزياء النوادي الصحية', 'ملابس مدربي الجيم', 'يونيفورم مراكز اللياقة', 'قمصان رياضية للموظفين', 'ملابس الأندية في السعودية'],
  keywordsAr: ['أزياء النوادي الصحية', 'ملابس مدربي الجيم', 'يونيفورم مراكز اللياقة', 'قمصان رياضية للموظفين', 'ملابس الأندية في السعودية'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/retail-uniforms/wellness-center'
});

export const dynamic = 'force-static';

export default function WellnessCenterUniformsPageAr() {
  return (
    <>
      <section className="bg-sky-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء التجزئة', href: '/ar/shop/retail-uniforms' },
            { label: 'المراكز الرياضية', href: '/ar/shop/retail-uniforms/wellness-center' }
          ]} className="text-sky-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أزياء <span className="text-sky-400">المراكز الرياضية</span> والصحية
            </h1>
            <p className="text-xl text-sky-100">
              ملابس نشطة تعمل بجد مثل فريقك. أزياء رياضية عالية الأداء وطاردة للعرق مصممة خصيصاً لصالات الجيم، النوادي الصحية، ومراكز اللياقة في السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">ملابس فريق مدفوعة بالأداء</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  في قطاع اللياقة البدنية والنوادي الصحية المتنامي بسرعة في السعودية، يعتبر موظفوك التجسيد الحي لالتزام علامتك التجارية بالصحة والنشاط والحيوية.
                </p>
                <p>
                  مجموعة المراكز الصحية من يونيوم تسد الفجوة بين الزي الوظيفي الاحترافي والملابس الرياضية الفاخرة. نحن نوفر للمدربين الشخصيين، مدربي المجموعات، وموظفي الاستقبال أزياء تفرض الاحترام وتوفر في الوقت ذاته حرية جسدية كاملة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">مميزات التشكيلة الرياضية</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>إدارة متقدمة للرطوبة:</strong> أقمشة (Dry-Fit) حصرية تسحب العرق بسرعة بعيداً عن الجسم، مما يحافظ على جفاف المدربين خلال الجلسات الشاقة.</li>
                  <li><strong>تقنية مضادة للروائح:</strong> معالجة متكاملة بأيونات الفضة تقضي على البكتيريا المسببة للروائح الكريهة وتدوم طويلاً.</li>
                  <li><strong>قمصان وتيشيرتات رياضية:</strong> تتميز بأكمام راجلان (Raglan) لتعزيز حركة الكتفين، وخياطة مسطحة (Flatlock) لمنع احتكاك الجلد.</li>
                  <li><strong>بناطيل وشورتات مرنة:</strong> بناطيل تدريب ممتازة وشورتات رياضية قابلة للتمدد في 4 اتجاهات مزودة بجيوب آمنة بسحابات لحفظ المفاتيح وساعات التوقيت.</li>
                </ul>
              </div>
            </div>
            <div className="bg-sky-50 p-8 rounded-xl border border-sky-200">
              <h3 className="text-2xl font-bold mb-6 text-sky-900">تجهيز فريق النادي الخاص بك</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-sky-800 mb-1">اسم النادي / الجيم</label>
                  <input type="text" className="w-full p-3 border border-sky-300 rounded-md focus:ring-sky-500 focus:border-sky-500" placeholder="أدخل اسم المركز الرياضي" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-sky-800 mb-1">تكوين فريق العمل</label>
                  <select className="w-full p-3 border border-sky-300 rounded-md focus:ring-sky-500 focus:border-sky-500">
                    <option>مدربين شخصيين (ملابس رياضية Activewear)</option>
                    <option>استقبال ومبيعات (كاجوال ذكي Smart Casual)</option>
                    <option>صيانة ونظافة</option>
                    <option>تجهيز شامل لجميع موظفي النادي</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-sky-800 mb-1">متطلبات طباعة الشعار</label>
                  <select className="w-full p-3 border border-sky-300 rounded-md focus:ring-sky-500 focus:border-sky-500">
                    <option>تطريز شعار صغير على الصدر</option>
                    <option>طباعة حريرية كبيرة على الظهر (Screen Print)</option>
                    <option>نقل حراري عاكس (أسلوب رياضي احترافي)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-sky-600 text-white font-bold py-3 rounded-md hover:bg-sky-700 transition">
                  طلب كتالوج الملابس الرياضية
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
