import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [
    { tag: 'corporate' },
    { tag: 'healthcare' },
    { tag: 'trends' }
  ];
}

type Props = {
  params: { tag: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = params;
  const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return {
    ...generateMetadata2026({
      title: `مقالات ${capitalizedTag} | مدونة يونيوم للأزياء المهنية`,
      titleAr: `مقالات ${capitalizedTag} | مدونة يونيوم للأزياء المهنية`,
      description: `اكتشف أحدث المقالات والنصائح والاتجاهات حول ${capitalizedTag} في مدونة يونيوم للأزياء الموحدة في السعودية.`,
      descriptionAr: `اكتشف أحدث المقالات والنصائح والاتجاهات حول ${capitalizedTag} في مدونة يونيوم للأزياء الموحدة في السعودية.`,
      keywords: ['مدونة', tag, 'زي موحد', 'السعودية'],
      keywordsAr: ['مدونة', tag, 'زي موحد', 'السعودية'],
      locale: 'ar',
      pageType: 'article',
      path: `/ar/blog/tag/${tag}`
    }),
    // Thin tag archives: keep out of the index, follow links to articles.
    robots: { index: false, follow: true },
  };
}

export default function BlogTagPage({ params }: Props) {
  const { tag } = params;
  const displayTag = tag === 'corporate' ? 'الشركات والأعمال' : 
                     tag === 'healthcare' ? 'الرعاية الصحية' : 
                     tag === 'trends' ? 'اتجاهات الصناعة' : tag;

  return (
    <>
      <section className="bg-primary-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المدونة', href: '/ar/blog' },
            { label: `وسم: ${displayTag}`, href: `/ar/blog/tag/${tag}` }
          ]} className="text-primary-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              مقالات حول: <span className="text-secondary-400">{displayTag}</span>
            </h1>
            <p className="text-xl text-primary-100">
              تصفح أحدث الأخبار والمقالات المتعلقة بـ {displayTag} في عالم الأزياء الموحدة والمهنية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-600 mb-4">قريباً</h2>
            <p className="text-neutral-500">جاري تحديث المقالات المتعلقة بهذا الوسم. يرجى العودة لاحقاً.</p>
          </div>
        </Container>
      </main>
    </>
  );
}