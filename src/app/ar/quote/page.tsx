import type { Metadata } from 'next';
import { INDUSTRIES } from '@/lib/data/industries';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'طلب عرض سعر — مقترح برنامج UNEOM',
  description: 'أخبرنا عن برنامج الزي الموحّد الخاص بك. UNEOM يردّ خلال يوم عمل واحد بعيّنات قماش وخيارات تصميم ومقترح برنامج.',
  alternates: { canonical: 'https://uneom.com/ar/quote/' }
};

export default function ArQuotePage() {
  const schema = webPageSchema({ path: '/ar/quote/', name: 'طلب عرض سعر — UNEOM', description: 'أرسل ملخص برنامج الزي الموحّد. UNEOM يردّ خلال يوم عمل واحد.' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'طلب عرض سعر', path: '/ar/quote/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow="ملخّص البرنامج"
          title={<>أربعة أسئلة. <span className="text-accent-700">يوم عمل واحد.</span></>}
          lead="عيّنات قماش تُشحَن، خيارات تصميم مُجمَّعة، ومقترح برنامج في صندوق بريدك قبل شروق الشمس التالي."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="mx-auto max-w-2xl">
          <form action="/api/quote" method="POST" className="card p-8 lg:p-10 space-y-6">
            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-sm font-semibold text-navy-900">ما هو القطاع؟</label>
              <p className="text-xs text-ink-400 mt-1">نُكيّف المقترح وفق الجهات التنظيمية لقطاعك.</p>
              <select id="industry" name="industry" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
                <option value="">اختر القطاع...</option>
                {INDUSTRIES.map(i => (
                  <option key={i.slug} value={i.slug}>{i.nameAr}</option>
                ))}
              </select>
            </div>

            {/* Headcount */}
            <div>
              <label htmlFor="headcount" className="block text-sm font-semibold text-navy-900">كم عدد الموظفين؟</label>
              <p className="text-xs text-ink-400 mt-1">اقتصاديات البرنامج تتغيّر عند 200 و1000 و5000 موظف.</p>
              <select id="headcount" name="headcount" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
                <option value="">اختر النطاق...</option>
                <option value="50-199">50 – 199 موظفاً</option>
                <option value="200-999">200 – 999 موظفاً</option>
                <option value="1000-4999">1,000 – 4,999 موظفاً</option>
                <option value="5000+">5,000+ موظف</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-navy-900">المدينة الرئيسية للعمليات</label>
              <p className="text-xs text-ink-400 mt-1">إذا كانت متعددة المدن، اختر الأكبر. سنغطّي الباقي.</p>
              <select id="city" name="city" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
                <option value="">اختر مدينة...</option>
                {SAUDI_CITIES.map(c => (
                  <option key={c.slug} value={c.slug}>{c.nameAr} — {c.region}</option>
                ))}
              </select>
            </div>

            <div className="border-t border-ink-100 pt-6">
              <p className="text-sm font-semibold text-navy-900">بياناتك</p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-ink-500">الاسم</label>
                  <input id="name" name="name" type="text" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-ink-500">الشركة</label>
                  <input id="company" name="company" type="text" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ink-500">البريد الإلكتروني للعمل</label>
                  <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-ink-500">الهاتف (اختياري)</label>
                  <input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="notes" className="block text-xs font-medium text-ink-500">شيء محدّد؟</label>
                <textarea id="notes" name="notes" rows={3} placeholder="برنامج قائم، تاريخ إطلاق مستهدف، تصاميم مخصّصة..." className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full text-base">
              أرسل الملخّص ←
            </button>

            <p className="text-xs text-ink-400 text-center">
              سنردّ خلال يوم عمل واحد. بلا رسائل تسويقية.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
