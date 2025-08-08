import React from 'react';
import { Metadata } from 'next';
import EnhancedCorporateProgramsClient from './EnhancedCorporateProgramsClient';

export const metadata: Metadata = {
  title: 'البرامج المؤسسية للشركات | يونيوم السعودية - حلول شاملة للأزياء الموحدة',
  description: 'برامج مؤسسية متخصصة للشركات في السعودية. إدارة شاملة، توفير 35%، شراكات استراتيجية. 500+ برنامج، 96% رضا، 200,000+ موظف، 12+ سنة خبرة، حلول مخصصة، برامج تدريب.',
  keywords: 'برامج مؤسسية، حلول شركات، أزياء موحدة شركات، برامج شراكة، إدارة أزياء، حلول مؤسسية، برامج تدريب، خدمات شركات، برامج صيانة، حلول سعودية، برامج تطوير، خدمات مؤسسية، إدارة متكاملة',
  openGraph: {
    title: 'البرامج المؤسسية للشركات | يونيوم السعودية',
    description: 'برامج مؤسسية متخصصة للشركات في السعودية. حلول شاملة تدير جميع احتياجات الأزياء الموحدة مع ضمان التوفير والجودة والالتزام.',
    url: 'https://uneom.com/ar/services/corporate-programs/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
        width: 1200,
        height: 630,
        alt: 'البرامج المؤسسية للشركات من يونيوم - حلول شاملة للأزياء الموحدة'},
    ]},
  alternates: {
    canonical: 'https://uneom.com/ar/services/corporate-programs/',
    languages: {
      'en': 'https://uneom.com/services/corporate-programs/',
      'ar': 'https://uneom.com/ar/services/corporate-programs/'}},
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

export default function CorporateProgramsServicePage() {
  return <EnhancedCorporateProgramsClient />;
}