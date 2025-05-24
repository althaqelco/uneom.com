import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

// Generate Arabic-specific metadata
const baseMetadata = generateMetadata({
  locale: 'ar',
  page: 'home'
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: baseMetadata.metadataBase,
  // We can't use 'other' with custom font preloading due to type constraints
  // This will be handled by ArabicOptimizer component instead
}; 