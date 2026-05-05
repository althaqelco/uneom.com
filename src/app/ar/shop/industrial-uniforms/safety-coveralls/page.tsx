import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أفرولات السلامة المهنية | ملابس عمال المصانع والمقاولات يونيوم',
  titleAr: 'أفرولات السلامة المهنية | ملابس عمال المصانع والمقاولات يونيوم',
  description: 'أفرولات سلامة مهنية متينة (بولي-قطن) لعمال المقاولات العامة، التصنيع، وفرق الصيانة في السعودية. مصممة لتحمل ظروف العمل القاسية بأسعار تنافسية.',
  descriptionAr: 'أفرولات سلامة مهنية متينة (بولي-قطن) لعمال المقاولات العامة، التصنيع، وفرق الصيانة في السعودية. مصممة لتحمل ظروف العمل القاسية بأسعار تنافسية.',
  keywords: ['أفرول سلامة', 'بدلة عمل قطعة واحدة', 'ملابس عمال المقاولات', 'أفرول ميكانيكي', 'أفرول قطن', 'زي عمال مصانع'],
  keywordsAr: ['أفرول سلامة', 'بدلة عمل قطعة واحدة', 'ملابس عمال المقاولات', 'أفرول ميكانيكي', 'أفرول قطن', 'زي عمال مصانع'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/safety-coveralls'
});

export const dynamic = 'force-static';

export default function SafetyCoverallsPageAr() {
  return (
    <>
      <section className="bg-slate-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'أفرولات السلامة', href: '/ar/shop/industrial-uniforms/safety-coveralls' }
          ]} className="text-slate-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أفرولات <span className="text-amber-500">السلامة المهنية العامة</span>
            </h1>
            <p className="text-xl text-slate-300">
              العمود الفقري للقوى العاملة الصناعية في السعودية. أفرولات متينة، عملية، وجيدة التهوية مصممة لتوفير الحماية اليومية في قطاعات المقاولات العامة، الصيانة، والتصنيع.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">صُممت لتحمل المشقة اليومية</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  ليس كل عمل يتطلب بدلات متخصصة مقاومة للحريق (FR) أو الكيماويات، ولكن كل عامل يستحق حماية متينة ومريحة ضد الأوساخ، الشحوم، والخدوش الطفيفة. تعتبر أفرولات السلامة العامة من يونيوم المعيار الصناعي لقطاعات البناء والصيانة الواسعة في المملكة العربية السعودية.
                </p>
                <p>
                  مصنوعة من مزيج البوليستر والقطن عالي الجودة (عادة 65% بوليستر / 35% قطن)، توفر هذه الأفرولات التوازن المثالي بين المتانة طويلة الأمد والتهوية المريحة في البيئات الحارة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">مميزات الأفرول الصناعي</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>بنية معززة:</strong> خياطة ثلاثية (Triple-stitched) للدرزات الرئيسية وتعزيز بنقاط تثبيت (Bar-tacking) في جميع مناطق الضغط العالي (الجيوب، بين الفخذين، وتحت الإبط) لمنع التمزق أثناء العمل البدني الشاق.</li>
                  <li><strong>تخزين وظيفي:</strong> مزود بـ 6 جيوب أو أكثر، بما في ذلك جيب مخصص لأدوات القياس (Rule pocket)، فتحات للأقلام على الكم، وجيوب صدر آمنة للهواتف الذكية أو أجهزة الراديو.</li>
                  <li><strong>حرية الحركة:</strong> تصميم يتميز بخصر خلفي مطاطي وظهر ذو طيات حركية (Action back) يسمح للعمال بالانحناء والتمدد دون أي قيود مزعجة.</li>
                  <li><strong>قابلية التخصيص:</strong> متوفرة بمجموعة واسعة من ألوان الشركات (أزرق، كحلي، برتقالي، رمادي، أحمر) مع إمكانية إضافة التطريز المخصص أو الطباعة الحريرية لشعار شركتك.</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">طلبات عقود المقاولات والجملة</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">اسم الشركة / المقاول</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">وزن وسماكة القماش المفضلة</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>وزن خفيف (للصيف / الأماكن المغلقة) - 190 جرام/م²</option>
                    <option>وزن متوسط (لكل الفصول) - 240 جرام/م²</option>
                    <option>وزن ثقيل (للشتاء / الأعمال الشاقة جداً) - أكثر من 300 جرام/م²</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">الكمية المطلوبة</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>100 - 500 أفرول</option>
                    <option>500 - 2000 أفرول</option>
                    <option>أكثر من 2000 أفرول</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  طلب تسعيرة الكميات والعينات
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
