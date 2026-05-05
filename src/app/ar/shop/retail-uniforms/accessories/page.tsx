import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'إكسسوارات الزي الموحد لقطاع التجزئة | يونيوم السعودية',
  titleAr: 'إكسسوارات الزي الموحد لقطاع التجزئة | يونيوم السعودية',
  description: 'أكمل إطلالة موظفي التجزئة بإكسسوارات فاخرة. شارات أسماء مخصصة، أربطة عنق، أوشحة، وأحزمة مصممة لتعزيز الهوية البصرية لعلامتك التجارية في السعودية.',
  descriptionAr: 'أكمل إطلالة موظفي التجزئة بإكسسوارات فاخرة. شارات أسماء مخصصة، أربطة عنق، أوشحة، وأحزمة مصممة لتعزيز الهوية البصرية لعلامتك التجارية في السعودية.',
  keywords: ['إكسسوارات الزي الموحد', 'شارات أسماء الموظفين', 'كرافتات للشركات', 'سكارف موظفات', 'إكسسوارات المبيعات', 'هوية العلامة التجارية'],
  keywordsAr: ['إكسسوارات الزي الموحد', 'شارات أسماء الموظفين', 'كرافتات للشركات', 'سكارف موظفات', 'إكسسوارات المبيعات', 'هوية العلامة التجارية'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/retail-uniforms/accessories'
});

export const dynamic = 'force-static';

export default function RetailAccessoriesPageAr() {
  return (
    <>
      <section className="bg-fuchsia-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء التجزئة', href: '/ar/shop/retail-uniforms' },
            { label: 'الإكسسوارات', href: '/ar/shop/retail-uniforms/accessories' }
          ]} className="text-fuchsia-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              إكسسوارات <span className="text-fuchsia-400">الزي الموحد</span> للتجزئة
            </h1>
            <p className="text-xl text-fuchsia-100">
              التفاصيل التي تعرّف علامتك التجارية. إكسسوارات مخصصة فاخرة لإكمال مظهر فريقك وترك انطباع لا يُنسى لدى عملائك.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">الكمال يكمن في التفاصيل</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  الزي الموحد يكون قوياً بقوة اللمسات النهائية التي تزينه. في سوق التجزئة السعودي شديد التنافسية، يمكن لأدق التفاصيل - مثل وشاح متطابق الألوان بدقة أو شارة اسم معدنية مصقولة - أن ترفع بشكل كبير من القيمة المدركة لعلامتك التجارية في عيون المتسوقين.
                </p>
                <p>
                  تقدم يونيوم مجموعة شاملة من إكسسوارات الزي الموحد المصممة خصيصاً للموظفين الذين يتعاملون مباشرة مع الجمهور في البوتيكات، الأسواق المركزية، وسلاسل التجزئة الفاخرة.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">مجموعة الإكسسوارات الخاصة بنا</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>شارات الأسماء المخصصة (Name Badges):</strong> متوفرة بالمعدن المصقول، الأكريليك الفاخر، أو الخيزران الصديق للبيئة، وتتميز بمشابك مغناطيسية قوية لمنع إتلاف نسيج القمصان.</li>
                  <li><strong>أربطة العنق والأوشحة (Ties & Scarves):</strong> مصبوغة خصيصاً بألوان بانتون (Pantone) الدقيقة لعلامتك التجارية، مع إمكانية طباعة شعار خفي (Subtle Pattern) يضفي لمسة من الرقي.</li>
                  <li><strong>أشرطة التعليق (Lanyards):</strong> أشرطة تعليق بطاقات متينة تحمل شعار الشركة، مزودة بمشبك أمان سريع الفتح، مثالية لموظفي الهايبر ماركت ومتاجر الإلكترونيات.</li>
                  <li><strong>الأحزمة الجلدية:</strong> أحزمة موحدة من الجلد الطبيعي باللونين الأسود والبني لضمان مظهر متماسك واحترافي من الأعلى إلى الأسفل.</li>
                </ul>
              </div>
            </div>
            <div className="bg-fuchsia-50 p-8 rounded-xl border border-fuchsia-200">
              <h3 className="text-2xl font-bold mb-6 text-fuchsia-900">خصص إكسسوارات علامتك التجارية</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-fuchsia-800 mb-1">اسم العلامة التجارية / المتجر</label>
                  <input type="text" className="w-full p-3 border border-fuchsia-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500" placeholder="أدخل اسم علامتك التجارية" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-fuchsia-800 mb-1">نوع الإكسسوار المطلوب</label>
                  <select className="w-full p-3 border border-fuchsia-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500">
                    <option>شارات الأسماء (مغناطيس/دبوس)</option>
                    <option>أوشحة حريرية وأربطة عنق مخصصة</option>
                    <option>أشرطة تعليق البطاقات (Lanyards)</option>
                    <option>طقم إكسسوارات متكامل</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-fuchsia-800 mb-1">إرفاق دليل الهوية البصرية (اختياري)</label>
                  <input type="file" className="w-full p-2 border border-fuchsia-300 rounded-md text-sm bg-white" />
                </div>
                <button type="button" className="w-full bg-fuchsia-600 text-white font-bold py-3 rounded-md hover:bg-fuchsia-700 transition">
                  طلب كتالوج الإكسسوارات والأسعار
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
