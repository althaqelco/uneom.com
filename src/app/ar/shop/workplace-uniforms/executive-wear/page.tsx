import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء الإدارة التنفيذية | بدلات رسمية للشركات يونيوم',
  titleAr: 'أزياء الإدارة التنفيذية | بدلات رسمية للشركات يونيوم',
  description: 'بدلات رسمية وأزياء إدارية فاخرة للإدارة التنفيذية في السعودية. اكتشف خدمة الخياطة المخصصة لقطاعات البنوك، الطيران، والضيافة الفاخرة لتعكس هيبة مؤسستك.',
  descriptionAr: 'بدلات رسمية وأزياء إدارية فاخرة للإدارة التنفيذية في السعودية. اكتشف خدمة الخياطة المخصصة لقطاعات البنوك، الطيران، والضيافة الفاخرة لتعكس هيبة مؤسستك.',
  keywords: ['أزياء الإدارة التنفيذية', 'بدلات رسمية للشركات', 'زي موظفي البنوك', 'ملابس الإدارة', 'تفصيل بدلات شركات'],
  keywordsAr: ['أزياء الإدارة التنفيذية', 'بدلات رسمية للشركات', 'زي موظفي البنوك', 'ملابس الإدارة', 'تفصيل بدلات شركات'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/workplace-uniforms/executive-wear'
});

export const dynamic = 'force-static';

export default function ExecutiveWearPageAr() {
  return (
    <>
      <section className="bg-zinc-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء العمل', href: '/ar/shop/workplace-uniforms' },
            { label: 'الإدارة التنفيذية', href: '/ar/shop/workplace-uniforms/executive-wear' }
          ]} className="text-zinc-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أزياء الإدارة التنفيذية <span className="text-yellow-500">والبدلات الرسمية</span>
            </h1>
            <p className="text-xl text-zinc-300">
              افرض هيبتك بتفصيل لا تشوبه شائبة. بدلات فاخرة مصممة خصيصاً (Bespoke) للإدارة العليا، قطاع البنوك، والضيافة الفاخرة في المملكة العربية السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">قوة المقاس المثالي</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  بالنسبة للإدارة التنفيذية والفرق التي تتعامل مباشرة مع كبار العملاء (VIP)، فإن الأزياء الموحدة الجاهزة لا تكفي. البدلة المصممة خصيصاً والمفصلة بدقة تنقل رسالة قوية من السلطة، الاهتمام بالتفاصيل، والجودة التي لا تقبل المساومة لعملائك.
                </p>
                <p>
                  يوفر قسم "أزياء الإدارة التنفيذية" في يونيوم تجربة تفصيل فاخرة لأرقى المؤسسات في المملكة العربية السعودية، من المؤسسات المالية الكبرى إلى فرق الطيران والضيافة الراقية.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">معيار الإدارة العليا</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>أقمشة عالمية فاخرة:</strong> مستوردة مباشرة من أعرق المصانع في إيطاليا وبريطانيا. نقدم صوف عالي الجودة (Super 120s إلى Super 150s) ينسدل بأناقة ويقاوم التجعد أثناء السفر واجتماعات العمل الطويلة.</li>
                  <li><strong>خدمة أخذ المقاسات في مقركم:</strong> يقوم الخياطون الخبراء لدينا بإجراء جلسات أخذ المقاسات (Fitting) داخل مقر شركتكم لتوفير وقت الإدارة ولضمان حصول كل مسؤول تنفيذي على مقاس مثالي وخالٍ من العيوب.</li>
                  <li><strong>تفاصيل مؤسسية دقيقة:</strong> تطريز الحروف الأولى (Monograms)، بطانات حريرية تحمل شعار الشركة المائي، وأقمشة مصبوغة خصيصاً لدمج هويتكم المؤسسية بمهارة في أرقى خطوط الموضة.</li>
                  <li><strong>خزانة ملابس متكاملة:</strong> لا نقتصر على البدلات، بل نوفر القمصان المفصلة، أربطة العنق الحريرية، والإكسسوارات الجلدية الفاخرة لإطلالة متكاملة.</li>
                </ul>
              </div>
            </div>
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">حجز جلسة أخذ مقاسات (VIP)</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-1">اسم المؤسسة / البنك</label>
                  <input type="text" className="w-full p-3 border border-zinc-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500" placeholder="أدخل اسم المؤسسة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-1">القطاع</label>
                  <select className="w-full p-3 border border-zinc-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500">
                    <option>البنوك والتمويل</option>
                    <option>الطيران / الخطوط الجوية</option>
                    <option>الضيافة الفاخرة / بروتوكول</option>
                    <option>الإدارة العليا للشركات (C-Suite)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-1">عدد التنفيذيين</label>
                  <select className="w-full p-3 border border-zinc-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500">
                    <option>1 - 10 مدراء</option>
                    <option>11 - 50 مدير ومسؤول</option>
                    <option>أكثر من 50 (تجهيز فروع كاملة)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-yellow-600 text-zinc-900 font-bold py-3 rounded-md hover:bg-yellow-500 transition">
                  طلب استشارة كبار العملاء
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
