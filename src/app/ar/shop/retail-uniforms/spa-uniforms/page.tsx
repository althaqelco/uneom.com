import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء السبا والصالونات الفاخرة | يونيوم لملابس التجميل',
  titleAr: 'أزياء السبا والصالونات الفاخرة | يونيوم لملابس التجميل',
  description: 'أزياء فاخرة لصالونات التجميل ومراكز السبا في السعودية. اكتشف سترات وبناطيل أنيقة مقاومة للمواد الكيميائية ومبيضات الشعر مصممة خصيصاً لأخصائيات التجميل.',
  descriptionAr: 'أزياء فاخرة لصالونات التجميل ومراكز السبا في السعودية. اكتشف سترات وبناطيل أنيقة مقاومة للمواد الكيميائية ومبيضات الشعر مصممة خصيصاً لأخصائيات التجميل.',
  keywords: ['أزياء السبا', 'يونيفورم صالون تجميل', 'ملابس أخصائية تجميل', 'سترات مقاومة للمبيضات', 'ملابس مراكز التجميل'],
  keywordsAr: ['أزياء السبا', 'يونيفورم صالون تجميل', 'ملابس أخصائية تجميل', 'سترات مقاومة للمبيضات', 'ملابس مراكز التجميل'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/retail-uniforms/spa-uniforms'
});

export const dynamic = 'force-static';

export default function SpaUniformsPageAr() {
  return (
    <>
      <section className="bg-rose-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء التجزئة', href: '/ar/shop/retail-uniforms' },
            { label: 'أزياء السبا والصالونات', href: '/ar/shop/retail-uniforms/spa-uniforms' }
          ]} className="text-rose-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أزياء <span className="text-rose-400">السبا وصالونات التجميل</span> الفاخرة
            </h1>
            <p className="text-xl text-rose-100">
              أناقة في كل حركة. سترات وبناطيل فاخرة مصممة لتزويد أخصائيات التجميل وموظفي الصالونات بأقصى درجات الراحة، حرية الحركة، والمقاومة للمواد الكيميائية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">الاسترخاء يبدأ من مظهر فريقك</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  في قطاع التجميل والعناية بالبشرة، الأجواء العامة هي كل شيء. يلعب مظهر طاقم العمل دوراً حاسماً في إيصال رسالة النظافة، الفخامة، والهدوء (Zen) لعملائك بمجرد دخولهم للمركز.
                </p>
                <p>
                  تم تصميم مجموعة السبا والصالونات من يونيوم بدقة وعناية لتناسب قطاع التجميل في السعودية، حيث تقدم توازناً مثالياً بين الجماليات الراقية والأداء العملي الشاق.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">لماذا تختار مجموعة السبا من يونيوم؟</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>أقمشة مقاومة للمبيضات (Bleach-Resistant):</strong> مواد معالجة خصيصاً لتحمل التعرض المستمر لبيروكسيد الهيدروجين والمواد الكيميائية المستخدمة في صبغات الشعر دون أن تفقد لونها.</li>
                  <li><strong>تقنية التمدد المزدوج (Bi-Stretch):</strong> أقمشة تتمدد طولياً وعرضياً، مما يمنح أخصائيات المساج والعلاج الطبيعي نطاق حركة كامل وبدون قيود.</li>
                  <li><strong>قصّات أنيقة ومحتشمة:</strong> سترات بتصميم غير متماثل (Asymmetrical)، ياقات صينية (Mandarin Collars)، وبناطيل مصممة لتناسب مختلف أشكال الأجسام مع الحفاظ على الحشمة والمظهر الاحترافي.</li>
                  <li><strong>راحة قابلة للتنفس:</strong> خصائص طرد الرطوبة (Moisture-wicking) تحافظ على جفاف وبرودة الطاقم أثناء الجلسات العلاجية المكثفة.</li>
                </ul>
              </div>
            </div>
            <div className="bg-rose-50 p-8 rounded-xl border border-rose-200">
              <h3 className="text-2xl font-bold mb-6 text-rose-900">تجهيز مركز التجميل الخاص بك</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-rose-800 mb-1">اسم الصالون / السبا</label>
                  <input type="text" className="w-full p-3 border border-rose-300 rounded-md focus:ring-rose-500 focus:border-rose-500" placeholder="أدخل اسم النشاط تجاري" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-rose-800 mb-1">الأقسام المطلوبة</label>
                  <select className="w-full p-3 border border-rose-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                    <option>أخصائيات المساج والعلاج</option>
                    <option>مصففات الشعر (يحتاج قماش مقاوم للمبيضات)</option>
                    <option>أخصائيات البشرة والتجميل</option>
                    <option>موظفات الاستقبال والإدارة</option>
                    <option>تجهيز المركز بالكامل</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-rose-800 mb-1">تفضيلات الألوان</label>
                  <select className="w-full p-3 border border-rose-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                    <option>أسود كلاسيكي (مقاوم للمبيضات)</option>
                    <option>ألوان ترابية دافئة (زيتي، رملي، طيني)</option>
                    <option>أبيض طبي نقي</option>
                    <option>لون مخصص حسب هوية العلامة التجارية</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-rose-600 text-white font-bold py-3 rounded-md hover:bg-rose-700 transition">
                  طلب عينات الأقمشة والكتالوج
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
