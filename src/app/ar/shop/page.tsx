// Server Component
import { Metadata } from 'next';
import ClientShopPage from './ClientShopPage';

// SEO metadata for the page
export const metadata: Metadata = {
  title: 'متجر الزي المهني | المورد الرائد للزي الموحد في المملكة العربية السعودية',
  description: 'تسوق الزي المهني عالي الجودة من المورد الرائد في المملكة العربية السعودية. أزياء الرعاية الصحية والطيران والضيافة والشركات متوفرة.',
  keywords: 'متجر الزي الموحد، شراء الزي الموحد، المملكة العربية السعودية، الزي المهني، متجر الزي الموحد عبر الإنترنت، أزياء الشركات',
  openGraph: {
    title: 'متجر الزي المهني | المورد الرائد للزي الموحد في المملكة العربية السعودية',
    description: 'تسوق الزي المهني عالي الجودة من المورد الرائد في المملكة العربية السعودية',
    locale: 'ar',
    type: 'website'
  }
};

export default function ShopPage() {
  return <ClientShopPage />;
} 