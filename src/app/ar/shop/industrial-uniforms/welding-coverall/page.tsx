import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أفرولات لحام ومرايل جلدية | معدات الحماية الشاقة يونيوم',
  titleAr: 'أفرولات لحام ومرايل جلدية | معدات الحماية الشاقة يونيوم',
  description: 'أفرولات لحام للخدمة الشاقة، ومرايل جلدية مقاومة لشرر اللحام والمعادن المنصهرة. ملابس عمل معتمدة (EN ISO 11611) لعمال تشكيل المعادن في السعودية.',
  descriptionAr: 'أفرولات لحام للخدمة الشاقة، ومرايل جلدية مقاومة لشرر اللحام والمعادن المنصهرة. ملابس عمل معتمدة (EN ISO 11611) لعمال تشكيل المعادن في السعودية.',
  keywords: ['أفرول لحام', 'مريلة جلد للحدادين', 'ملابس لحام', 'بدلة ضد شرر اللحام', 'واقي جلد لحام'],
  keywordsAr: ['أفرول لحام', 'مريلة جلد للحدادين', 'ملابس لحام', 'بدلة ضد شرر اللحام', 'واقي جلد لحام'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/welding-coverall'
});

export const dynamic = 'force-static';

export default function WeldingCoverallPageAr() {
  return (
    <>
      <section className="bg-stone-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'معدات اللحام', href: '/ar/shop/industrial-uniforms/welding-coverall' }
          ]} className="text-stone-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أفرولات <span className="text-amber-600">اللحام للخدمة الشاقة</span>
            </h1>
            <p className="text-xl text-stone-300">
              دفاع لا يمكن اختراقه ضد الحرارة الشديدة والمعادن المنصهرة. ملابس لحام معتمدة (EN ISO 11611) مصممة خصيصاً لقطاعات التصنيع الثقيل وتشكيل المعادن في السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">صُممت لأقسى البيئات</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  تفرض أعمال اللحام وتشكيل المعادن مخاطر فريدة لا تستطيع الملابس الصناعية العادية تحملها. توفر يونيوم معدات حماية شخصية متخصصة للحامين، مصممة لحمايتهم من الحرارة الإشعاعية، رذاذ المعادن المنصهرة، والأشعة فوق البنفسجية الشديدة.
                </p>
                <p>
                  تتوافق مجموعة اللحام لدينا مع معايير (EN ISO 11611) للفئة 1 والفئة 2، مما يوفر مستويات حماية متدرجة اعتماداً على تقنيات اللحام المستخدمة (TIG، MIG، MAG، أو اللحام الهيكلي الثقيل).
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">مميزات الحماية المتقدمة</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>جلد البقر الفاخر:</strong> للحصول على أقصى مقاومة لشرر اللحام، نقدم مرايل جلدية شديدة التحمل، أكمام، وأغطية أحذية (Gaiters) تشكل درعاً منيعاً.</li>
                  <li><strong>قطن (FR) المعالج:</strong> أفرولات من القطن عالي الكثافة (أكثر من 320 جرام/متر مربع) المقاوم للهب، توفر المرونة والتهوية مع مقاومة فعالة للشرر وخبث اللحام.</li>
                  <li><strong>خياطة بالكيفلار (Kevlar®):</strong> تمت خياطة جميع اللحامات الحساسة بخيوط الكيفلار المقاومة للحرارة لمنع تمزق البدلة أو تفككها تحت الإجهاد الحراري الشديد.</li>
                  <li><strong>تصميم استراتيجي:</strong> تتميز بأزرار كبس مخفية وجيوب مائلة مصممة خصيصاً لمنع تراكم الشرر أو القطع الساخنة في طيات القماش.</li>
                </ul>
              </div>
            </div>
            <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
              <h3 className="text-2xl font-bold mb-6 text-stone-900">تجهيز ورش التصنيع واللحام</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">اسم الشركة / الورشة</label>
                  <input type="text" className="w-full p-3 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500" placeholder="أدخل اسم المنشأة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">نوع اللحام الممارس (المخاطر)</label>
                  <select className="w-full p-3 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500">
                    <option>لحام خفيف TIG / لحام غاز (الفئة 1)</option>
                    <option>لحام ثقيل MIG / بلازما (الفئة 2)</option>
                    <option>تصنيع مختلط / قطع معادن</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">المعدات المطلوبة</label>
                  <select className="w-full p-3 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500">
                    <option>أفرولات لحام قطنية (FR)</option>
                    <option>مرايل جلدية وأكمام حماية فقط</option>
                    <option>أطقم لحام متكاملة (أفرول + واقيات جلدية)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  طلب تسعيرة فنية
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
