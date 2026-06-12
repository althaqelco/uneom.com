import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "دراسة حالة عيادة المستشفى التجميلية | أزياء طبية تجميلية | UNEOM المملكة العربية السعودية | يونيوم",
  description: "كيف ساعدت UNEOM مستشفى متميز في جدة على رفع مستوى خدمات عياداته التجميلية من خلال أزياء موحدة طبية متطورة تجمع بين المعايير الطبية والأناقة",
  alternates: {
    canonical: 'https://uneom.com/ar/case-studies/hospital-aesthetic-clinic/',
    languages: {
      'en': 'https://uneom.com/case-studies/hospital-aesthetic-clinic/',
      'ar-SA': 'https://uneom.com/ar/case-studies/hospital-aesthetic-clinic/',
      'x-default': 'https://uneom.com/case-studies/hospital-aesthetic-clinic/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
