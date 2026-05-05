import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أفرولات مقاومة للحريق (FR) | ملابس السلامة يونيوم',
  titleAr: 'أفرولات مقاومة للحريق (FR) | ملابس السلامة يونيوم',
  description: 'أفرولات معتمدة مقاومة للحريق (FR) لقطاع النفط والغاز في السعودية. ملابس واقية مطابقة لمعيار (EN ISO 11612) لتوفير أقصى درجات السلامة من الحرائق والوميض.',
  descriptionAr: 'أفرولات معتمدة مقاومة للحريق (FR) لقطاع النفط والغاز في السعودية. ملابس واقية مطابقة لمعيار (EN ISO 11612) لتوفير أقصى درجات السلامة من الحرائق والوميض.',
  keywords: ['أفرول مقاوم للحريق', 'ملابس (FR)', 'زي أرامكو المعتمد', 'أفرول ضد النار', 'ملابس قطاع الغاز والنفط'],
  keywordsAr: ['أفرول مقاوم للحريق', 'ملابس (FR)', 'زي أرامكو المعتمد', 'أفرول ضد النار', 'ملابس قطاع الغاز والنفط'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/flame-resistant-coverall'
});

export const dynamic = 'force-static';

export default function FlameResistantCoverallPageAr() {
  return (
    <>
      <section className="bg-orange-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'مقاوم للحريق (FR)', href: '/ar/shop/industrial-uniforms/flame-resistant-coverall' }
          ]} className="text-orange-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أفرولات <span className="text-orange-500">مقاومة للحريق (FR)</span>
            </h1>
            <p className="text-xl text-orange-100">
              خط الدفاع الأخير والمنقذ للحياة. ملابس أمان معتمدة مقاومة للحريق والوميض الحراري، مصممة هندسياً خصيصاً لقطاعات النفط والغاز والطاقة في السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">حماية حرارية تنقذ الأرواح</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  في قطاعات الطاقة والكهرباء، يمكن أن يكون لجزء من الثانية من التعرض للوميض الناري (Flash Fire) أو القوس الكهربائي (Arc Flash) عواقب وخيمة. صُممت مجموعة الملابس المقاومة للحريق (FR) من يونيوم لتنطفئ ذاتياً فور إزالة مصدر الاشتعال، مما يمنع تفاقم إصابات الحروق ويمنح العامل فرصة حرجة للهروب.
                </p>
                <p>
                  تم اختبار أفرولاتنا بصرامة لتتجاوز معايير (EN ISO 11612) و (NFPA 2112) ومواصفات السلامة المعتمدة لدى كبرى شركات الطاقة مثل أرامكو وسابك.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">أبرز تقنيات الـ FR لدينا</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>المقاومة المتأصلة مقابل المعالجة (Inherent vs Treated):</strong> اختر بين الأقمشة المقاومة للحريق بطبيعتها (مثل مزيج المودأكريليك/الآراميد حيث لا تتلاشى الحماية بالغسيل أبداً)، أو القطن المعالج (Treated FR 100%) عالي الجودة لراحة وتبريد أفضل.</li>
                  <li><strong>الحماية من القوس الكهربائي (ATPV):</strong> أزياء معتمدة للحماية من الأقواس الكهربائية بتصنيفات (cal/cm²) متعددة لحماية عمال المرافق الكهربائية (متوافقة مع NFPA 70E).</li>
                  <li><strong>خردوات آمنة من النيران:</strong> تم تصنيعها باستخدام سحابات نحاسية ثقيلة مبطنة بشريط نومكس (Nomex®) المضاد للاشتعال، وخياطة بالكامل بخيوط مقاومة للحريق.</li>
                  <li><strong>أشرطة عاكسة للضوء (FR Reflective):</strong> أشرطة عاكسة معتمدة (FR) لضمان الرؤية الليلية دون المساس بالسلامة الحرارية الشاملة للثوب.</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
              <h3 className="text-2xl font-bold mb-6 text-orange-900">تأمين القوى العاملة</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-orange-800 mb-1">الشركة المشغلة / المقاول</label>
                  <input type="text" className="w-full p-3 border border-orange-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-orange-800 mb-1">معيار السلامة المطلوب</label>
                  <select className="w-full p-3 border border-orange-300 rounded-md focus:ring-orange-500 focus:border-orange-500">
                    <option>EN ISO 11612 (حريق عام)</option>
                    <option>NFPA 2112 (وميض ناري لقطاع النفط)</option>
                    <option>NFPA 70E (قوس كهربائي Arc Flash)</option>
                    <option>معايير أرامكو السعودية</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-orange-800 mb-1">حجم الطلب</label>
                  <select className="w-full p-3 border border-orange-300 rounded-md focus:ring-orange-500 focus:border-orange-500">
                    <option>100 - 500 قطعة</option>
                    <option>500 - 2000 قطعة</option>
                    <option>أكثر من 2000 قطعة</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-orange-600 text-white font-bold py-3 rounded-md hover:bg-orange-700 transition">
                  طلب شهادات الاعتماد والتسعيرة
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
