import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "دراسة حالة تطور صالون الفخامة | أزياء موحدة فاخرة للسبا | UNEOM المملكة العربية السعودية | يونيوم",
  description: "كيف ساعدت UNEOM في تحويل صالون تجميل راقي في الرياض من خلال الأزياء الموحدة المصممة خصيصًا للموظفين والتي رفعت من تصور العلامة التجارية واحترافية الموظفين مع الحفاظ على المعايير الثقافية السعودية.",
  alternates: {
    canonical: 'https://uneom.com/ar/case-studies/luxury-salon-evolution/',
    languages: {
      'en': 'https://uneom.com/case-studies/luxury-salon-evolution/',
      'ar-SA': 'https://uneom.com/ar/case-studies/luxury-salon-evolution/',
      'x-default': 'https://uneom.com/case-studies/luxury-salon-evolution/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
