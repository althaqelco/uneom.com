import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'يونيوم | تصنيع وتوريد الزي الموحد والأزياء المهنية في السعودية',
  description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية. نخدم القطاعات الطبية والطيران والضيافة والشركات بأعلى معايير الجودة. خدمة شاملة في جميع أنحاء المملكة.',
  keywords: 'الأزياء المهنية السعودية, الزي الموحد, يونيوم, أزياء طبية, أزياء الطيران, الأزياء الصناعية, أزياء الضيافة, الأزياء التعليمية, أزياء الأمن, تصنيع الأزياء المهنية, الزي المدرسي, سكرابز طبية, أزياء المستشفيات, الرياض, جدة, الدمام',
  // NOTE: no `alternates` at layout level on purpose — a layout canonical is
  // inherited by every /ar/* page that lacks its own and would mass-
  // canonicalize them to the Arabic homepage. The /ar homepage gets its
  // canonical + hreflang from generateMetadata2026 in src/app/ar/page.tsx.
  openGraph: {
    title: 'يونيوم | تصنيع وتوريد الزي الموحد والأزياء المهنية في السعودية',
    description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية. نخدم القطاعات الطبية والطيران والضيافة والشركات بأعلى معايير الجودة.',
    url: 'https://uneom.com/ar/',
    siteName: 'يونيوم للأزياء المهنية',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The LayoutWrapper in root layout handles Arabic header/footer
  // based on the path, so we just pass children through
  return <>{children}</>;
}
