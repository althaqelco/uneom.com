import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Front Desk Uniforms | Hotel Reception Attire | UNEOM Saudi Arabia',
  titleAr: 'زي موظفي الاستقبال | ملابس استقبال الفندق | يونيوم السعودية',
  description: 'Premium front desk uniforms for Saudi hotels. Elegant blazers, professional suits, abayas for female staff. Custom branded with hotel logos. For reception, guest services.',
  descriptionAr: 'زي استقبال فاخر لفنادق السعودية. بليزر أنيق، بدلات احترافية، عباءات لموظفات. تخصيص بشعار الفندق.',
  keywords: [
    'front desk uniform saudi',
    'hotel reception attire',
    'receptionist uniform riyadh',
    'guest services uniform',
    'hotel staff blazer',
    'professional hotel uniform',
  ],
  keywordsAr: [
    'زي استقبال السعودية',
    'ملابس موظفي الفندق',
    'زي ريسبشن الرياض',
  ],
  locale: 'en',
  pageType: 'product',
  path: '/shop/hospitality-attire/front-desk-uniform',
  image: '/images/products/front-desk-uniform.jpg',
  imageAlt: 'Front Desk Uniform by UNEOM',
  aiSummary: 'UNEOM front desk uniforms for Saudi hotels. Includes: Blazers, tailored suits, elegant abayas. Features: Premium wool blends, wrinkle-resistant, professional appearance. Colors: Navy, burgundy, black, custom. Sizes: XS-3XL. Price: Starting 349 SAR. Custom embroidery and hotel branding included. MOQ: 10 pieces.',
  productInfo: {
    name: 'Front Desk Uniform',
    price: 349,
    currency: 'SAR',
    availability: 'InStock',
    category: 'Hospitality Uniforms',
  },
});
