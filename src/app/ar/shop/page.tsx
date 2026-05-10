import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/data/products';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';

export const metadata: Metadata = {
  title: 'المتجر — منتجات رئيسية عبر جميع القطاعات الـ 8',
  description: '8 تصنيفات منتجات، 16 منتجاً رئيسياً. أزياء موحّدة بمستوى برامج مُصمَّمة لعملاء B2B السعوديين في الرعاية الصحية والضيافة والطيران والتصنيع وما بعدها.',
  alternates: { canonical: 'https://uneom.com/ar/shop/' }
};

export default function ArShopHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'المتجر', path: '/ar/shop/' }]} />

      <section className="container-page section-tight">
        <SectionHeader
          eyebrow={`${PRODUCT_CATEGORIES.length} تصنيف · ${PRODUCTS.length} منتج رئيسي`}
          title={<>منتجات رئيسية. <span className="text-accent-700">اقتصاديات البرامج.</span></>}
          lead="UNEOM مشغّل برامج وليس متجراً للكتالوجات — لكن كل برنامج يبدأ بمنتج رئيسي. هذه الملابس الأكثر طلباً عبر القطاعات الثمانية."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map(cat => (
            <Link key={cat.slug} href={`/ar/shop/${cat.slug}/`} className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-navy-800">
              <div className="absolute inset-0">
                <picture>
                  <source type="image/avif" srcSet={`/images/${cat.hero}.avif`} />
                  <source type="image/webp" srcSet={`/images/${cat.hero}.webp`} />
                  <img src={`/images/${cat.hero}.avif`} alt={`UNEOM ${cat.nameAr}`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" width={1920} height={1080} />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" aria-hidden />
              </div>
              <div className="relative z-10 p-6 text-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300">التصنيف</div>
                <h3 className="mt-2 text-xl font-bold balance">{cat.nameAr}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-2 pretty">{cat.summaryAr}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="البرامج تبدأ من 50 وحدة. الكتالوجات تنتهي هنا." body="نموذج UNEOM هو عقود برامج متعددة السنوات، لا طلبات فردية. كل صفحة تصنيف تقود إلى محادثة برنامج." primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }} />
      </section>
    </>
  );
}
