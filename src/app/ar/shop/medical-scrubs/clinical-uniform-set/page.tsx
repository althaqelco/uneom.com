import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أطقم السكراب الطبي والعيادات | يونيوم',
  titleAr: 'أطقم السكراب الطبي والعيادات | يونيوم',
  description: 'أطقم سكراب طبي متكاملة للأطباء والممرضين والكوادر الصحية في السعودية. اكتشف أزياء عيادات مقاومة للبكتيريا والتجعد بتصاميم مريحة وعملية وتتمدد في 4 اتجاهات.',
  descriptionAr: 'أطقم سكراب طبي متكاملة للأطباء والممرضين والكوادر الصحية في السعودية. اكتشف أزياء عيادات مقاومة للبكتيريا والتجعد بتصاميم مريحة وعملية وتتمدد في 4 اتجاهات.',
  keywords: ['سكراب طبي', 'أطقم عيادات', 'زي تمريض', 'ملابس أطباء', 'سكراب مقاوم للبكتيريا', 'أزياء طبية في السعودية'],
  keywordsAr: ['سكراب طبي', 'أطقم عيادات', 'زي تمريض', 'ملابس أطباء', 'سكراب مقاوم للبكتيريا', 'أزياء طبية في السعودية'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/medical-scrubs/clinical-uniform-set'
});

export const dynamic = 'force-static';

export default function ClinicalUniformSetPageAr() {
  return (
    <>
      <section className="bg-teal-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الملابس الطبية', href: '/ar/shop/medical-scrubs' },
            { label: 'أطقم العيادات', href: '/ar/shop/medical-scrubs/clinical-uniform-set' }
          ]} className="text-teal-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أطقم <span className="text-teal-400">العيادات والسكراب الطبي</span>
            </h1>
            <p className="text-xl text-teal-100">
              ملابس طبية متطورة مصممة لأبطال الرعاية الصحية. أطقم سكراب متناسقة (قميص وبنطلون) تتميز بتقنيات مضادة للبكتيريا وقماش يتمدد في أربعة اتجاهات لراحة لا مثيل لها.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">الجيل الجديد من السكراب الطبي</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  يعمل المتخصصون في الرعاية الصحية في السعودية في ورديات طويلة ومجهدة حيث تعتبر الراحة والنظافة أمراً لا يقبل المساومة. تم تصميم أطقم العيادات من يونيوم لتتحرك معك، موفرة أداءً رياضياً داخل بيئة العيادة الاحترافية.
                </p>
                <p>
                  تتوفر أطقمنا المتكاملة بمجموعة واسعة من الألوان المعتمدة في المستشفيات (مثل العنابي، الكحلي، والأخضر الجراحي)، مما يضمن مظهراً موحداً واحترافياً لجميع أقسام المستشفى دون عناء البحث عن قطع متطابقة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">تكنولوجيا النسيج المتقدمة</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>مضاد للبكتيريا (SILVADUR™):</strong> معالج تقنياً لمنع نمو البكتيريا والروائح، مما يحافظ على انتعاشك طوال مناوبة الـ 12 ساعة.</li>
                  <li><strong>تمدد مرن في 4 اتجاهات (4-Way Stretch):</strong> مزيج فاخر من البوليستر، الرايون، والسباندكس يمنحك حرية حركة استثنائية أثناء الانحناء أو الحركة السريعة.</li>
                  <li><strong>مقاومة للسوائل (Fluid-Resistant):</strong> لمسة نهائية مصممة لصد رذاذ السوائل والقطرات، للحفاظ على جفافك وحمايتك في اللحظات الحرجة.</li>
                  <li><strong>عناية سهلة خالية من التجعد:</strong> أخرجها من المجفف وارتدِها فوراً—لا حاجة للكي المجهد بعد يوم عمل طويل.</li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
              <h3 className="text-2xl font-bold mb-6 text-teal-900">تجهيز المستشفيات والعيادات المجمعة</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-teal-800 mb-1">اسم المنشأة الطبية</label>
                  <input type="text" className="w-full p-3 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500" placeholder="أدخل اسم المستشفى أو العيادة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-teal-800 mb-1">القسم</label>
                  <select className="w-full p-3 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500">
                    <option>التمريض</option>
                    <option>الجراحة / الطوارئ</option>
                    <option>عيادات الأسنان / التجميل</option>
                    <option>تجهيز المستشفى بالكامل (جميع الأقسام)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-teal-800 mb-1">هل يتطلب نظام ألوان (Color Coding)؟</label>
                  <select className="w-full p-3 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500">
                    <option>نعم (ألوان مختلفة لكل قسم)</option>
                    <option>لا (لون موحد للجميع)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-teal-600 text-white font-bold py-3 rounded-md hover:bg-teal-700 transition">
                  طلب عينات مجانية وتسعيرة
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}