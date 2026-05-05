import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'سترات السلامة العاكسة | فيست المهندسين والعمال يونيوم',
  titleAr: 'سترات السلامة العاكسة | فيست المهندسين والعمال يونيوم',
  description: 'سترات سلامة عاكسة (فيست) خفيفة الوزن بأشرطة عاكسة ممتازة. معدات حماية شخصية أساسية لمواقع البناء، اللوجستيات، وإدارة المرور في السعودية.',
  descriptionAr: 'سترات سلامة عاكسة (فيست) خفيفة الوزن بأشرطة عاكسة ممتازة. معدات حماية شخصية أساسية لمواقع البناء، اللوجستيات، وإدارة المرور في السعودية.',
  keywords: ['فيست عاكس', 'سترات مهندسين عاكسة', 'سترة سلامة مرور', 'فيست أصفر نيون', 'معدات حماية شخصية (PPE)'],
  keywordsAr: ['فيست عاكس', 'سترات مهندسين عاكسة', 'سترة سلامة مرور', 'فيست أصفر نيون', 'معدات حماية شخصية (PPE)'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/high-visibility-vest'
});

export const dynamic = 'force-static';

export default function HighVisibilityVestPageAr() {
  return (
    <>
      <section className="bg-red-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'الفيست العاكس', href: '/ar/shop/industrial-uniforms/high-visibility-vest' }
          ]} className="text-red-300 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              سترات السلامة <span className="text-red-500">العاكسة (الفيست)</span>
            </h1>
            <p className="text-xl text-red-100">
              الرؤية الأساسية خفيفة الوزن. سترات عاكسة عالية الجودة مصممة للحفاظ على وضوح وسلامة القوى العاملة لديك في مواقع البناء ومناطق المرور الكثيف في جميع أنحاء المملكة.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">حماية خفيفة الوزن، أقصى درجات الوضوح</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  غالباً ما تكون سترة السلامة (الفيست) هي القطعة الأكثر أهمية والأكثر تطلباً من معدات الحماية الشخصية (PPE) في أي موقع عمل نشط. توفر سترات يونيوم العاكسة تمييزاً بصرياً فورياً للعمال دون إضافة عبء حراري خلال صيف السعودية الحار.
                </p>
                <p>
                  بدءاً من السترات الشبكية البسيطة للزوار المؤقتين للموقع، وصولاً إلى سترات المهندسين التنفيذية متعددة الجيوب، نحن نوفر مجموعة كاملة من حلول الرؤية والسلامة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">أنواع السترات وميزاتها</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>السترات الشبكية القياسية (Standard Mesh):</strong> نسيج شبكي (100% بوليستر) فائق التهوية، مثالي لظروف الحرارة الشديدة. مزود بإغلاق بشريط فيلكرو (Velcro) أساسي وعملي.</li>
                  <li><strong>سترات المهندسين والمشرفين (Executive Vests):</strong> واجهة صلبة مع ظهر شبكي. تتضمن سحاباً أمامياً متيناً، جيب شفاف للبطاقة التعريفية (ID)، فتحات للأقلام، وجيوب كبيرة لحمل المخططات وأجهزة التابلت.</li>
                  <li><strong>تصاميم ثنائية اللون (Two-Tone):</strong> تجمع بين الأصفر النيون والبرتقالي لتعزيز التباين البصري أثناء النهار مقابل الخلفيات المعقدة في مواقع البناء.</li>
                  <li><strong>طباعة الشعار المخصص:</strong> مساحة طباعة كبيرة في الخلف لطباعة شعار شركتك أو شعارات السلامة (مثل: "السلامة أولاً" - "Safety First").</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold mb-6 text-red-900">طلبات التوريد للمقاولات</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-red-800 mb-1">اسم الشركة / المقاول</label>
                  <input type="text" className="w-full p-3 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-red-800 mb-1">نمط السترة المطلوبة</label>
                  <select className="w-full p-3 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
                    <option>سترة شبكية خفيفة (إغلاق فيلكرو)</option>
                    <option>سترة مهندسين متعددة الجيوب (إغلاق سحاب)</option>
                    <option>نمط المرور / الشرطة (مربعات عاكسة)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-red-800 mb-1">الكمية التقديرية</label>
                  <select className="w-full p-3 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
                    <option>100 - 500 سترة</option>
                    <option>500 - 2,000 سترة</option>
                    <option>أكثر من 2,000 سترة</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition">
                  طلب أسعار الجملة للكميات
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
