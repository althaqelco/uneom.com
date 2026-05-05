import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'أفرولات السلامة العاكسة | ملابس عمال عالية الوضوح يونيوم',
  titleAr: 'أفرولات السلامة العاكسة | ملابس عمال عالية الوضوح يونيوم',
  description: 'أفرولات سلامة عاكسة (الفئة 3) للورديات الليلية وبيئات الإضاءة المنخفضة. ملابس عمل عالية الوضوح لقطاعات الخدمات اللوجستية والمقاولات في السعودية مطابقة للمواصفات العالمية.',
  descriptionAr: 'أفرولات سلامة عاكسة (الفئة 3) للورديات الليلية وبيئات الإضاءة المنخفضة. ملابس عمل عالية الوضوح لقطاعات الخدمات اللوجستية والمقاولات في السعودية مطابقة للمواصفات العالمية.',
  keywords: ['أفرول عاكس', 'ملابس عالية الوضوح', 'بدلة عمل ليلية', 'أفرول سلامة عاكس', 'زي مهندسين عاكس'],
  keywordsAr: ['أفرول عاكس', 'ملابس عالية الوضوح', 'بدلة عمل ليلية', 'أفرول سلامة عاكس', 'زي مهندسين عاكس'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/industrial-uniforms/high-visibility-coverall'
});

export const dynamic = 'force-static';

export default function HighVisibilityCoverallPageAr() {
  return (
    <>
      <section className="bg-lime-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'الزي الصناعي', href: '/ar/shop/industrial-uniforms' },
            { label: 'أفرولات عاكسة', href: '/ar/shop/industrial-uniforms/high-visibility-coverall' }
          ]} className="text-lime-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              أفرولات السلامة <span className="text-lime-500">العاكسة (عالية الوضوح)</span>
            </h1>
            <p className="text-xl text-lime-100">
              أقصى درجات الوضوح لأقصى درجات الأمان. أفرولات معتمدة (EN ISO 20471 الفئة 3) مصممة للحفاظ على سلامة القوى العاملة لديك أثناء الورديات الليلية وفي مناطق المرور الكثيف.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">ابرز في الظلام لحماية فريقك</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  بالنسبة للقطاعات التي تعمل على مدار الساعة، تشكل ظروف الإضاءة المنخفضة خطراً جسيماً على الأفراد على الأرض. تم تصميم أفرولات يونيوم العاكسة وعالية الوضوح لضمان رؤية العمال بوضوح تام من قِبل سائقي المركبات ومعدات الحفر الثقيلة من جميع الزوايا (360 درجة).
                </p>
                <p>
                  مثالية لطواقم المطارات (Tarmac)، صيانة الطرق السريعة، ومشاريع البناء الليلية في المملكة العربية السعودية، حيث تجمع ملابسنا العاكسة بين المتانة القصوى والانعكاسية التي تنقذ الأرواح.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">مميزات الأداء العاكس</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>اعتماد الفئة الثالثة (Class 3):</strong> أعلى مستوى من حماية الرؤية بموجب معيار (EN ISO 20471)، حيث يوفر أقصى مساحة من النسيج الفلورسنتي (الفسفوري) والشريط العاكس.</li>
                  <li><strong>أشرطة 3M™ Scotchlite™ الفاخرة:</strong> أشرطة مزدوجة على الجذع، الذراعين، والساقين تحافظ على خصائصها العاكسة للضوء حتى بعد الغسيل الصناعي المتكرر والمكثف.</li>
                  <li><strong>تكنولوجيا الأصباغ الفلورية:</strong> أصباغ نيون صفراء وبرتقالية عالية الدقة معالجة لمقاومة البهتان تحت شمس السعودية القاسية خلال العمل النهاري.</li>
                  <li><strong>ألواح التباين المقاومة للأوساخ:</strong> دمج قماش كحلي أو أسود بشكل استراتيجي في المناطق الأكثر عرضة للأوساخ (الركبتين وأساور الأكمام) للحفاظ على مظهر احترافي ونظيف لفترة أطول.</li>
                </ul>
              </div>
            </div>
            <div className="bg-lime-50 p-8 rounded-xl border border-lime-200">
              <h3 className="text-2xl font-bold mb-6 text-lime-900">تأمين طاقم العمل الليلي</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-lime-800 mb-1">اسم الشركة / المقاول</label>
                  <input type="text" className="w-full p-3 border border-lime-300 rounded-md focus:ring-lime-500 focus:border-lime-500" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-lime-800 mb-1">بيئة العمل الأساسية</label>
                  <select className="w-full p-3 border border-lime-300 rounded-md focus:ring-lime-500 focus:border-lime-500">
                    <option>إنشاء وصيانة الطرق السريعة</option>
                    <option>ساحات المطارات / الطيران</option>
                    <option>الخدمات اللوجستية والمستودعات الليلية</option>
                    <option>أعمال المقاولات الليلية العامة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-lime-800 mb-1">اللون الأساسي المفضل</label>
                  <select className="w-full p-3 border border-lime-300 rounded-md focus:ring-lime-500 focus:border-lime-500">
                    <option>أصفر نيون (قياسي)</option>
                    <option>برتقالي نيون</option>
                    <option>لونين مدمجين (نيون + كحلي داكن)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-lime-600 text-white font-bold py-3 rounded-md hover:bg-lime-700 transition">
                  طلب أسعار الكميات التجارية
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
