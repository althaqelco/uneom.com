import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Hospital Aesthetic Clinic Case Study | Medical Uniforms | UNEOM Saudi Arabia",
  description: "How UNEOM designed premium medical uniforms for a leading Jeddah hospital aesthetic clinic, enhancing patient trust and staff professionalism while meeting Saudi healthcare standards.",
  alternates: {
    canonical: 'https://uneom.com/case-studies/hospital-aesthetic-clinic/',
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
