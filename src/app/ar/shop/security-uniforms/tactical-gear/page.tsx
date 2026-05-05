import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'المعدات التكتيكية والأمنية | يونيوم السعودية',
  titleAr: 'المعدات التكتيكية والأمنية | يونيوم السعودية',
  description: 'معدات تكتيكية وأمنية احترافية في السعودية. اكتشف أحزمة المهام، الأحذية التكتيكية، وحقائب الحفظ، وإكسسوارات الأمن عالية الأداء لحراس الأمن والشركات.',
  descriptionAr: 'معدات تكتيكية وأمنية احترافية في السعودية. اكتشف أحزمة المهام، الأحذية التكتيكية، وحقائب الحفظ، وإكسسوارات الأمن عالية الأداء لحراس الأمن والشركات.',
  keywords: ['معدات تكتيكية', 'تجهيزات أمنية', 'حزام مهام', 'بسطار تكتيكي', 'معدات حراس أمن', 'إكسسوارات عسكرية'],
  keywordsAr: ['معدات تكتيكية', 'تجهيزات أمنية', 'حزام مهام', 'بسطار تكتيكي', 'معدات حراس أمن', 'إكسسوارات عسكرية'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/security-uniforms/tactical-gear'
});

export const dynamic = 'force-static';

export default function TacticalGearPageAr() {
  return (
    <>
      <section className="bg-slate-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الأمني', href: '/ar/shop/security-uniforms' },
            { label: 'المعدات التكتيكية', href: '/ar/shop/security-uniforms/tactical-gear' }
          ]} className="text-slate-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              المعدات التكتيكية <span className="text-slate-400">والتجهيزات الأمنية</span>
            </h1>
            <p className="text-xl text-slate-300">
              أكمل الزي الأمني لفريقك بأحدث المعدات التكتيكية الاحترافية. تجهيزات عالية التحمل مصممة للاستجابة السريعة والجاهزية التشغيلية في المملكة العربية السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">التفوق التشغيلي في أدق التفاصيل</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  تعتمد فعالية رجل الأمن بشكل كبير على المعدات التي يحملها. توفر يونيوم تشكيلة شاملة من المعدات التكتيكية المصممة لتتكامل بسلاسة مع أزيائنا الأمنية، مما يضمن تجهيز الأفراد بالكامل للتعامل مع أي موقف أمني في السعودية.
                </p>
                <p>
                  بدءاً من أحزمة المهام عالية الثبات وصولاً إلى الأحذية التكتيكية (البساطير) خفيفة الوزن المصممة للدوريات الطويلة، تلبي معداتنا المعايير الصارمة المطلوبة من قِبل شركات الأمن الخاص وفرق الحماية الشخصية.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">التجهيزات التكتيكية الأساسية</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>أحزمة المهام (Duty Belts):</strong> خيارات من النايلون المقاوم والجلد، تتميز بمشابك أمان مزدوجة ونقاط تثبيت نموذجية لأجهزة الراديو، الكشافات، والأصفاد.</li>
                  <li><strong>الأحذية التكتيكية (بساطير):</strong> أحذية خفيفة الوزن، مضادة للانزلاق، مزودة بسحابات جانبية لسرعة الارتداء، ودعم معزز للكاحل للوقوف لساعات طويلة.</li>
                  <li><strong>كشافات وحقائب حفظ:</strong> كشافات تكتيكية عالية الإضاءة من الألمنيوم المستخدم في الطيران مع حقائب مخصصة للتثبيت على الحزام.</li>
                  <li><strong>إكسسوارات الاتصال:</strong> سماعات أذن مخفية، أحزمة تثبيت أجهزة الراديو، وسترات تكتيكية مصممة لتسهيل التنسيق الفوري بين أفراد الفريق.</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">تجهيز الفرق الأمنية</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">الشركة الأمنية / المنشأة</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">نوع المعدات المطلوبة</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>أطقم تكتيكية كاملة (أحزمة + أحذية + معدات)</option>
                    <option>أحزمة مهام وحقائب حفظ فقط</option>
                    <option>أحذية تكتيكية (بساطير) فقط</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">عدد الأفراد (الكمية)</label>
                  <input type="number" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="مثال: 100" dir="ltr" />
                </div>
                <button type="button" className="w-full bg-slate-800 text-white font-bold py-3 rounded-md hover:bg-slate-900 transition">
                  طلب تسعيرة المعدات التكتيكية
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
