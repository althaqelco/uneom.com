import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/ServerSEO';
import FlameResistantWorkwearClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = generateMetadata({
  title: 'Premium Flame-Resistant Workwear | NFPA 2112 Compliant | UNEOM Saudi Arabia',
  description: 'Professional-grade flame-resistant workwear for oil, gas, and petrochemical industries in Saudi Arabia. NFPA 2112 compliant with inherent FR protection that withstands repeated washing.',
  keywords: ['flame-resistant workwear Saudi Arabia', 'FR clothing oil gas industry', 'NFPA 2112 compliant workwear KSA', 'fire resistant uniform Riyadh', 'petrochemical protective clothing', 'inherent FR fabric', 'Saudi Aramco approved FR'],
  path: '/shop/industrial-uniforms/flame-resistant-workwear',
  locale: 'en',
  imageUrl: '/images/products/flame-resistant-workwear.webp',
});

export default function FlameResistantWorkwearPage() {
  return <FlameResistantWorkwearClientPage />;
} 