import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'دليل الأقمشة الطبية المعتمدة لملابس الرعاية الصحية | يونيوم',
  titleAr: 'دليل الأقمشة الطبية المعتمدة لملابس الرعاية الصحية | يونيوم',
  description: 'دليل شامل لأنواع الأقمشة الطبية المعتمدة لتصنيع السكراب واللاب كوت في السعودية. تعرف على الأقمشة المضادة للميكروبات، الطاردة للسوائل، ومواصفات تحمل التعقيم الصناعي.',
  descriptionAr: 'دليل شامل لأنواع الأقمشة الطبية المعتمدة لتصنيع السكراب واللاب كوت في السعودية. تعرف على الأقمشة المضادة للميكروبات، الطاردة للسوائل، ومواصفات تحمل التعقيم الصناعي.',
  keywords: ['healthcare fabric guide saudi arabia', 'medical scrubs material specs', 'antimicrobial uniform fabric', 'lab coat textiles'],
  keywordsAr: ['دليل الأقمشة الطبية', 'قماش سكراب طبي', 'مواصفات قماش اللاب كوت', 'أقمشة مضادة للبكتيريا', 'أقمشة مستشفيات'],
  locale: 'ar', 
  pageType: 'article', 
  path: '/ar/resources/fabric-guide/healthcare'
});

export const dynamic = 'force-static';

export default function HealthcareFabricGuidePageAr() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-900 via-emerald-800 to-cyan-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'الموارد', href: '/ar/resources' }, 
            { label: 'دليل الأقمشة', href: '/ar/resources/fabric-guide' }, 
            { label: 'أقمشة الرعاية الصحية', href: '/ar/resources/fabric-guide/healthcare' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              دليل الأقمشة <span className="text-teal-300">الطبية</span> المعتمدة
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              المواصفات التقنية والمعايير العالمية للأقمشة المستخدمة في تصنيع ملابس الرعاية الصحية للمستشفيات والعيادات في السعودية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg prose-emerald text-gray-800">
            <p className="lead text-xl text-gray-600 font-medium">
              في قطاع الرعاية الصحية، لا تقتصر وظيفة الزي الموحد على المظهر الاحترافي فقط، بل هو "درع وقاية" خط الدفاع الأول للطواقم الطبية ضد انتقال العدوى والسوائل الخطرة. في يونيوم، نعتمد على أقمشة تلبي أدق معايير الصحة العالمية.
            </p>

            <h2 className="text-2xl font-bold text-teal-900 mt-10 mb-4 border-b pb-2">1. الأقمشة المضادة للميكروبات (Antimicrobial Fabrics)</h2>
            <p>
              تعتبر التقنية المضادة للميكروبات أساسية في المستشفيات. نستخدم أقمشة معالجة بأيونات الفضة (Silver-ion technology) التي تعمل على:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li>تثبيط نمو البكتيريا والفطريات على سطح السكراب.</li>
              <li>منع انتقال العدوى المكتسبة من المستشفيات (HAIs).</li>
              <li>القضاء على الروائح الكريهة الناتجة عن البكتيريا أثناء نوبات العمل الطويلة المجهدة.</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal-900 mt-10 mb-4 border-b pb-2">2. الأقمشة الطاردة للسوائل (Fluid-Repellent / Resistant)</h2>
            <p>
              مخصصة لأطقم الجراحة والعاملين في غرف الطوارئ والمختبرات. تتميز هذه الأقمشة بتغطيتها بطبقة (Teflon) أو معالجات كيميائية دقيقة تجعل السوائل (كالدم، المحاليل، والكواشف الكيميائية) تنزلق عن القماش بدلاً من امتصاصها، مما يوفر وقاية حاسمة للطبيب.
            </p>

            <h2 className="text-2xl font-bold text-teal-900 mt-10 mb-4 border-b pb-2">3. نسيج اللاب كوت ناصع البياض (Optical White Retention)</h2>
            <p>
              أكبر تحدي يواجه معاطف الأطباء والمختبرات هو الاصفرار مع تكرار الغسيل. نستخدم في يونيوم أقمشة بولي-قطن (Poly-Cotton Blends) عالية الكثافة مدعمة بتقنية (Optical Brighteners) التي تضمن بقاء اللاب كوت ناصع البياض حتى بعد تعرضه لدورات التعقيم الحراري العالية.
            </p>

            <h2 className="text-2xl font-bold text-teal-900 mt-10 mb-4 border-b pb-2">4. المرونة والراحة بأربعة اتجاهات (4-Way Stretch)</h2>
            <p>
              نظراً لطبيعة عمل الكوادر الطبية التي تتطلب الحركة السريعة والانحناء المستمر، نقدم أقمشة السكراب الفاخرة الممزوجة بنسبة دقيقة من الـ (Spandex) أو (Elastane) لتوفر مرونة تتمدد في جميع الاتجاهات دون أن تفقد القماش شكله العام أو يتعرض للترهل.
            </p>

            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 mt-12">
              <h3 className="text-xl font-bold text-teal-900 mb-3">تجهيز مستشفاك بأفضل الأقمشة</h3>
              <p className="text-teal-800 mb-4">
                تختلف احتياجات الأقمشة بين أقسام المستشفى (الطوارئ يختلف عن العيادات الخارجية). فريق يونيوم جاهز لتقديم استشارة فنية لتحديد الأقمشة الأنسب لكل قسم.
              </p>
              <Link href="/ar/contact" className="inline-block bg-teal-800 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-900 transition-colors">
                طلب استشارة لمدراء المشتريات الطبية
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
