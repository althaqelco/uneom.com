import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'معايير الأمن والسلامة المهنية في ملابس المصانع | مدونة يونيوم',
  titleAr: 'معايير الأمن والسلامة المهنية في ملابس المصانع | مدونة يونيوم',
  description: 'تعرف على معايير الأمن والسلامة المهنية (OSHA) المطبقة في تفصيل وتصميم ملابس العمال في المصانع والمنشآت الصناعية في المملكة العربية السعودية.',
  descriptionAr: 'تعرف على معايير الأمن والسلامة المهنية (OSHA) المطبقة في تفصيل وتصميم ملابس العمال في المصانع والمنشآت الصناعية في المملكة العربية السعودية.',
  keywords: ['industrial safety standards saudi arabia', 'osha compliant workwear ksa', 'factory worker uniform safety', 'fire retardant clothing riyadh'],
  keywordsAr: ['معايير السلامة المهنية', 'أزياء المصانع السعودية', 'ملابس مقاومة للحريق', 'متطلبات الأوشا للزي', 'أفرول مصانع آمن'],
  locale: 'ar', 
  pageType: 'article', 
  path: '/ar/blog/industrial-safety-standards'
});

export const dynamic = 'force-static';

export default function IndustrialSafetyBlogPageAr() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-900 via-orange-900 to-red-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المدونة', href: '/ar/blog' }, 
            { label: 'معايير السلامة الصناعية', href: '/ar/blog/industrial-safety-standards' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أكثر من مجرد زي: <span className="text-orange-400">معايير السلامة</span> في ملابس المصانع
            </h1>
            <p className="text-xl text-orange-200 leading-relaxed">
              كيف يحمي الزي الموحد أرواح العمال في المنشآت الصناعية؟ دليلك لفهم معايير السلامة (FR، Hi-Vis، OSHA) المطبقة في يونيوم لقطاع الصناعة السعودي.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg prose-red text-gray-800">
            <p className="lead text-xl text-gray-600 font-medium">
              في بيئات العمل المكتبي، يكون الهدف الأساسي للزي هو الأناقة والهوية. لكن خلف أسوار المصانع والمقاولات ومحطات الطاقة، الزي الموحد (Workwear) هو "معدات حماية شخصية" (PPE) تفصل بين العامل والإصابات الخطيرة.
            </p>

            <h2 className="text-2xl font-bold text-red-900 mt-10 mb-4 border-b pb-2">1. الأقمشة المقاومة للاشتعال (FR - Flame Retardant)</h2>
            <p>
              للعاملين في قطاعات البتروكيماويات، اللحام، أو الكهرباء عالي الجهد، القماش العادي قد يكون مميتاً إذا تعرض لشرارة. نعتمد في يونيوم على توفير أفرولات (Coveralls) مصنوعة من أقمشة معالجة كيميائياً (Treated FR) أو أقمشة خصائصها الفيزيائية مقاومة للنار (Inherent FR) مثل الكيفلار والآراميد.
            </p>
            <p>
              هذه الأقمشة مصممة بحيث "تطفئ نفسها ذاتياً" بمجرد الابتعاد عن مصدر اللهب، ولا تذوب لتلتصق بالجلد (كما يفعل البوليستر العادي).
            </p>

            <h2 className="text-2xl font-bold text-red-900 mt-10 mb-4 border-b pb-2">2. الرؤية العالية الجودة (Hi-Vis / EN ISO 20471)</h2>
            <p>
              حوادث الدهس بواسطة الرافعات الشوكية والمعدات الثقيلة من أعلى مسببات الإصابات في المستودعات والمصانع. الحل الجذري هو الملابس ذات الرؤية العالية:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li>استخدام ألوان فلورية (Fluorescent) مثل الأصفر والبرتقالي الساطع لتعكس الضوء فوق البنفسجي في النهار.</li>
              <li>دمج أشرطة عاكسة (Reflective Tapes) من علامات معتمدة مثل (3M) لتعكس أضواء المركبات بقوة في بيئات العمل الليلية أو المظلمة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-900 mt-10 mb-4 border-b pb-2">3. التصميم الآمن هيكلياً</h2>
            <p>
              السلامة ليست فقط في نوع القماش، بل في طريقة الخياطة والتفصيل:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li><strong>الجيوب المغلقة:</strong> يُمنع استخدام الجيوب المفتوحة للخارج في ملابس خطوط الإنتاج لتجنب التقاطها بواسطة الآلات الدوارة. نستخدم سحابات وأزرار ضغط مخفية (Concealed Studs).</li>
              <li><strong>الخياطة الثلاثية (Triple Stitching):</strong> للمناطق المعرضة لضغط كبير مثل منطقة الفخذين والكتف، لضمان عدم تمزق الزي أثناء رفع الأحمال الثقيلة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-900 mt-10 mb-4 border-b pb-2">الامتثال التشريعي في المملكة</h2>
            <p>
              مع تزايد الرقابة على السلامة المهنية من قِبل وزارة الموارد البشرية والتنمية الاجتماعية والدفاع المدني، أصبح توفير ملابس عمل مطابقة لمعايير السلامة ضرورة قانونية وأخلاقية لحماية القوى العاملة، وتجنب المخالفات وإيقاف العمل.
            </p>

            <div className="bg-red-50 p-8 rounded-xl border border-red-100 mt-12 text-center">
              <h3 className="text-2xl font-bold text-red-900 mb-4">استثمر في سلامة عمالك مع يونيوم</h3>
              <p className="text-red-800 mb-6">
                نحن نفهم التعقيدات التقنية لملابس الأمن والسلامة (PPE). فريقنا مستعد لتوريد أفرولات وأطقم صناعية مطابقة لأعلى المعايير العالمية لحماية فريقك.
              </p>
              <Link href="/ar/shop/manufacturing-workwear" className="inline-block bg-red-700 text-white px-8 py-3 rounded-md font-medium hover:bg-red-800 transition-colors">
                تصفح قسم الملابس الصناعية والمقاولات
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
