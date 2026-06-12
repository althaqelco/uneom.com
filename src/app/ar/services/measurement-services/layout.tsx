import type { Metadata } from 'next';

// Server layout carries metadata: the page in this segment is a client
// component and cannot export metadata itself.
export const metadata: Metadata = {
  title: 'خدمات قياس الزي الموحد في الموقع | يونيوم',
  description: 'قياس احترافي في موقع منشأتك في السعودية — مقاسات دقيقة لكل موظف، استبدالات أقل، وتسليم أسرع لبرنامج الزي الموحد.',
  alternates: {
    canonical: 'https://uneom.com/ar/services/measurement-services/',
    languages: {
      'en': 'https://uneom.com/services/measurement-services/',
      'ar-SA': 'https://uneom.com/ar/services/measurement-services/',
      'x-default': 'https://uneom.com/services/measurement-services/',
    },
  },
  openGraph: {
    title: 'خدمات قياس الزي الموحد في الموقع | يونيوم',
    description: 'قياس احترافي في موقع منشأتك في السعودية — مقاسات دقيقة لكل موظف، استبدالات أقل، وتسليم أسرع.',
    url: 'https://uneom.com/ar/services/measurement-services/',
    siteName: 'UNEOM',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function ServiceSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
