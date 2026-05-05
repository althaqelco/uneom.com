import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'سترات السلامة العاكسة | معدات الحماية الصناعية يونيوم',
  titleAr: 'سترات السلامة العاكسة | معدات الحماية الصناعية يونيوم',
  description: 'سترات سلامة عاكسة مطابقة لمواصفات الأوشا (OSHA) و (EN ISO 20471) لعمال المقاولات والمصانع والخدمات اللوجستية في السعودية. يتوفر طباعة الشعار المخصص.',
  descriptionAr: 'سترات سلامة عاكسة مطابقة لمواصفات الأوشا (OSHA) و (EN ISO 20471) لعمال المقاولات والمصانع والخدمات اللوجستية في السعودية. يتوفر طباعة الشعار المخصص.',
  keywords: ['سترات السلامة', 'فيست عاكس', 'معدات الحماية الشخصية', 'سترات مهندسين', 'ملابس السلامة المهنية', 'سترات عاكسة للضوء'],
  keywordsAr: ['سترات السلامة', 'فيست عاكس', 'معدات الحماية الشخصية', 'سترات مهندسين', 'ملابس السلامة المهنية', 'سترات عاكسة للضوء'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/safety-vests'
});

export const dynamic = 'force-static';

export default function SafetyVestsPageAr() {
  return (
    <>
      <section className="bg-neutral-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'سترات السلامة', href: '/ar/shop/industrial-uniforms/safety-vests' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              سترات السلامة <span className="text-red-500">العاكسة (Hi-Vis)</span>
            </h1>
            <p className="text-xl text-neutral-300">
              خط الدفاع الأول في مواقع العمل النشطة. سترات عاكسة صناعية مصممة لتلبية معايير السلامة الدولية الصارمة لقطاعات البناء والخدمات اللوجستية في السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">حماية فائقة في البيئات عالية الخطورة</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  الرؤية الواضحة تعني إنقاذ الأرواح. تم تصميم مجموعة سترات السلامة من يونيوم خصيصاً لتحمل بيئات العمل الشاقة في المشاريع السعودية العملاقة، من نيوم إلى البحر الأحمر.
                </p>
                <p>
                  تتوافق ستراتنا بالكامل مع معايير الأوشا (OSHA) و (EN ISO 20471)، وتتميز بأشرطة عاكسة من نوع 3M Scotchlite™ التي تضمن أقصى درجات الرؤية للعمال سواء في النهار أو في ظروف الإضاءة المنخفضة ليلاً.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">المواصفات الفنية</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>فئات الحماية (Class 2 & 3):</strong> خيارات متعددة تناسب مختلف سرعات المركبات المحيطة ومستويات الخطر في الموقع.</li>
                  <li><strong>نسيج شبكي (Mesh):</strong> نسيج قابل للتنفس بالكامل، مثالي لمقاومة حرارة الصيف الشديدة في السعودية دون المساومة على السلامة.</li>
                  <li><strong>تصميم متعدد الجيوب:</strong> جيوب مخصصة لحمل البطاقات التعريفية (ID)، أجهزة الاتصال اللاسلكي (الراديو)، والهواتف الذكية بأمان.</li>
                  <li><strong>سحابات شديدة التحمل:</strong> إغلاق أمامي قوي مصمم لتحمل التعرض المستمر للغبار والرمال في مواقع العمل المفتوحة.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">طلبات التوريد الصناعية للشركات</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">اسم شركة المقاولات/المصنع</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">الكمية المطلوبة</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>50-200 سترة</option>
                    <option>201-1000 سترة</option>
                    <option>أكثر من 1000 سترة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">التخصيص والطباعة</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>بدون طباعة</option>
                    <option>طباعة شعار الشركة (Screen Print)</option>
                    <option>طباعة المسمى الوظيفي على الظهر (مثل: مهندس، سلامة)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition">
                  طلب تسعيرة تجارية
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
