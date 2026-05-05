import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أحذية السلامة المهنية والسيفتي شوز | معدات الحماية يونيوم',
  titleAr: 'أحذية السلامة المهنية والسيفتي شوز | معدات الحماية يونيوم',
  description: 'أحذية سلامة مهنية (سيفتي شوز) بمقدمة فولاذية لعمال الصناعة، المقاولات، والبتروكيماويات في السعودية. أحذية مقاومة للانزلاق والحرارة العالية والزيوت.',
  descriptionAr: 'أحذية سلامة مهنية (سيفتي شوز) بمقدمة فولاذية لعمال الصناعة، المقاولات، والبتروكيماويات في السعودية. أحذية مقاومة للانزلاق والحرارة العالية والزيوت.',
  keywords: ['سيفتي شوز', 'أحذية سلامة مهنية', 'حذاء سيفتي بمقدمة فولاذية', 'أحذية صناعية', 'أحذية مقاومة للانزلاق', 'حذاء عمل سعودي'],
  keywordsAr: ['سيفتي شوز', 'أحذية سلامة مهنية', 'حذاء سيفتي بمقدمة فولاذية', 'أحذية صناعية', 'أحذية مقاومة للانزلاق', 'حذاء عمل سعودي'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/work-boots'
});

export const dynamic = 'force-static';

export default function WorkBootsPageAr() {
  return (
    <>
      <section className="bg-neutral-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'أحذية السلامة', href: '/ar/shop/industrial-uniforms/work-boots' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أحذية السلامة المهنية <span className="text-amber-500">(سيفتي شوز)</span>
            </h1>
            <p className="text-xl text-neutral-300">
              حماية من الأساس. أحذية عمل متينة مزودة بمقدمة فولاذية أو مركبة، مصممة هندسياً لحماية القدمين من الصدمات، الثقوب، ومخاطر الانزلاق في أقسى بيئات العمل.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">حماية متكاملة للقدمين</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  إصابات القدم في مواقع العمل مكلفة ومؤلمة. توفر يونيوم مجموعة قوية من أحذية السلامة المتوافقة مع معايير (CE EN ISO 20345)، مما يضمن أقصى درجات الحماية للعاملين في القطاعات الصناعية والمقاولات في المملكة العربية السعودية.
                </p>
                <p>
                  من مواقع البناء الشاقة إلى محطات البتروكيماويات، تجمع أحذيتنا بين المتانة القاسية والدعم المريح المصمم خصيصاً لتحمل ورديات العمل التي تصل إلى 12 ساعة متواصلة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">الميزات الأساسية</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>الحماية من الصدمات (Impact Protection):</strong> الاختيار بين المقدمة الفولاذية التقليدية (Steel-toe) أو المقدمة المركبة خفيفة الوزن (Composite-toe) التي لا تُصدر إنذاراً في بوابات كشف المعادن.</li>
                  <li><strong>نعل متوسط مقاوم للثقب (Puncture Resistant):</strong> ألواح من الكيفلار أو الصلب مدمجة في النعل لمنع الإصابات الناتجة عن اختراق الأجسام الحادة كالمسامير.</li>
                  <li><strong>تكنولوجيا النعل الخارجي:</strong> نعل مزدوج الكثافة (PU/Rubber) يوفر مقاومة فائقة للانزلاق، وللزيوت والمواد الكيميائية، ويتحمل درجات حرارة تصل إلى 300 درجة مئوية.</li>
                  <li><strong>الراحة والنظافة:</strong> بطانة داخلية مضادة للبكتيريا ونعال EVA ممتصة للصدمات لتقليل الإجهاد في الركبتين وأسفل الظهر.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">برامج توريد الأحذية للشركات</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">اسم الشركة</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">القطاع</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>المقاولات والبناء</option>
                    <option>النفط والغاز والبتروكيماويات</option>
                    <option>الخدمات اللوجستية والمستودعات</option>
                    <option>الصناعة والتصنيع</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">الحجم السنوي المتوقع</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>100 - 500 زوج</option>
                    <option>500 - 2000 زوج</option>
                    <option>أكثر من 2000 زوج</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  طلب الكتالوج والأسعار
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
