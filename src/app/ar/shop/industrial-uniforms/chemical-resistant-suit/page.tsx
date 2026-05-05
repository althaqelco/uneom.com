import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'بدل الحماية من المواد الكيميائية | ملابس البتروكيماويات يونيوم',
  titleAr: 'بدل الحماية من المواد الكيميائية | ملابس البتروكيماويات يونيوم',
  description: 'بدل وأفرولات مقاومة للمواد الكيميائية مطابقة لمعيار (EN 13034) لقطاعات البتروكيماويات والمختبرات في السعودية. حماية مؤكدة ضد رذاذ وتناثر السوائل الكيميائية والأحماض.',
  descriptionAr: 'بدل وأفرولات مقاومة للمواد الكيميائية مطابقة لمعيار (EN 13034) لقطاعات البتروكيماويات والمختبرات في السعودية. حماية مؤكدة ضد رذاذ وتناثر السوائل الكيميائية والأحماض.',
  keywords: ['بدلة مقاومة للكيماويات', 'ملابس البتروكيماويات', 'أفرول ضد الأسيد', 'ملابس مختبرات', 'حماية كيميائية', 'زي أرامكو'],
  keywordsAr: ['بدلة مقاومة للكيماويات', 'ملابس البتروكيماويات', 'أفرول ضد الأسيد', 'ملابس مختبرات', 'حماية كيميائية', 'زي أرامكو'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/chemical-resistant-suit'
});

export const dynamic = 'force-static';

export default function ChemicalResistantSuitPageAr() {
  return (
    <>
      <section className="bg-emerald-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'مقاوم للكيماويات', href: '/ar/shop/industrial-uniforms/chemical-resistant-suit' }
          ]} className="text-emerald-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              بدل وأفرولات <span className="text-emerald-400">مقاومة للمواد الكيميائية</span>
            </h1>
            <p className="text-xl text-emerald-100">
              حماية بالغة الأهمية للبيئات عالية الخطورة. ملابس عمل متخصصة مصممة لحماية العمال من السوائل الكيميائية، الأحماض، والتناثر الخطر في قطاع البتروكيماويات السعودي.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">الدفاع الأول ضد الرذاذ الكيميائي</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  تتطلب الصناعات البتروكيماوية، الدوائية، والتصنيعية المزدهرة في المملكة العربية السعودية معايير سلامة لا تقبل المساومة. صُممت بدل الحماية الكيميائية من يونيوم لتكون حاجزاً موثوقاً بين القوى العاملة لديك والمواد الخطرة.
                </p>
                <p>
                  ملابسنا معتمدة وفقاً لمعيار (EN 13034 - Type 6)، مما يوفر أداء حماية محدد ضد السوائل الكيميائية، ويضمن سلامة العمال أثناء التعرض العرضي للرذاذ الخفيف أو التناثر.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">حماية نسيجية متقدمة</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>معالجة الفلوروكربون:</strong> تتم معالجة النسيج بطبقة طاردة متخصصة تجبر السوائل الخطرة، الزيوت، والأحماض على التكور والانزلاق فوراً بدلاً من امتصاصها.</li>
                  <li><strong>سلامة اللحامات:</strong> مصممة بخياطة محكمة أو لحامات مغطاة بشريط (Taped seams) لمنع تسلل المواد الكيميائية عبر ثقوب الإبر.</li>
                  <li><strong>خيارات متعددة المخاطر (Multi-norm):</strong> تتوفر إصدارات تجمع بين المقاومة الكيميائية وخصائص منع الكهرباء الساكنة (EN 1149) ومقاومة اللهب (EN ISO 11612).</li>
                  <li><strong>حواجز قابلة للتنفس:</strong> على الرغم من مستوى الحماية العالي، يحافظ النسيج على نفاذية الهواء لمنع الإجهاد الحراري (Heat stress) المعتاد في مناخ السعودية القاسي.</li>
                </ul>
              </div>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
              <h3 className="text-2xl font-bold mb-6 text-emerald-900">تجهيز المحطة / المصنع</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-emerald-800 mb-1">اسم الشركة / المنشأة</label>
                  <input type="text" className="w-full p-3 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="أدخل اسم المنشأة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-emerald-800 mb-1">المخاطر الكيميائية الأساسية</label>
                  <input type="text" className="w-full p-3 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="مثال: مذيبات، أحماض، زيوت هيدروليكية" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-emerald-800 mb-1">الكمية المطلوبة</label>
                  <select className="w-full p-3 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500">
                    <option>50 - 200 بدلة</option>
                    <option>200 - 1000 بدلة</option>
                    <option>أكثر من 1000 بدلة</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-md hover:bg-emerald-700 transition">
                  طلب المواصفات الفنية المعتمدة
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
