import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "قوالب سياسات الأزياء الموحدة | تحميل مجاني | موارد يونيوم",
  description: "حمل قوالب سياسات الأزياء الموحدة المجانية للرعاية الصحية والشركات والضيافة والقطاعات الصناعية. إرشادات شاملة وقوائم تنفيذ للمؤسسات السعودية.",
  alternates: {
    canonical: 'https://uneom.com/ar/resources/policy-templates/',
    languages: {
      'en': 'https://uneom.com/resources/policy-templates/',
      'ar-SA': 'https://uneom.com/ar/resources/policy-templates/',
      'x-default': 'https://uneom.com/resources/policy-templates/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
