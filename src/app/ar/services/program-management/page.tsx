import { Metadata } from 'next';
import EnhancedProgramManagementClient from './EnhancedProgramManagementClient';

export const metadata: Metadata = {
  title: 'إدارة برامج الأزياء الموحدة | يونيوم السعودية',
  description: 'خدمات إدارة برامج الأزياء الموحدة للشركات في السعودية. تخطيط استراتيجي، إدارة موردين، مراقبة جودة، توفير تكاليف. 150+ برنامج، 97% رضا، 10+ سنوات خبرة.',
  keywords: 'إدارة برامج الأزياء, حلول أزياء الشركات, إدارة موحدة, برامج أزياء السعودية, تخطيط أزياء, إدارة توريد الأزياء, استشارات أزياء الشركات, إدارة مخزون الأزياء, دعم فني للأزياء',
  openGraph: {
    title: 'إدارة برامج الأزياء الموحدة | يونيوم السعودية',
    description: 'حلول متكاملة لإدارة برامج الأزياء الموحدة للشركات والمؤسسات، من التخطيط والتصميم إلى التوريد والمتابعة.',
    url: 'https://uneom.com/ar/services/program-management/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/service-overview.jpg', // Replace with a relevant image for program management
        width: 1200,
        height: 630,
        alt: 'إدارة برامج الأزياء الموحدة من يونيوم السعودية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/services/program-management/',
    languages: {
      'en': 'https://uneom.com/services/program-management/', // Assuming English version exists or will exist
      'ar': 'https://uneom.com/ar/services/program-management/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export default function ProgramManagementPage() {
  return <EnhancedProgramManagementClient />;
}
