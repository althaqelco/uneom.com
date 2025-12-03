import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Housekeeping Uniforms | Hotel Cleaning Staff Attire | UNEOM',
  titleAr: 'زي التدبير المنزلي | ملابس طاقم النظافة بالفندق | يونيوم',
  description: 'Durable housekeeping uniforms for Saudi hotels and resorts. Comfortable tunics, practical dresses, easy-care fabrics. For cleaning staff, room attendants.',
  descriptionAr: 'زي تدبير منزلي متين لفنادق ومنتجعات السعودية. سترات مريحة، فساتين عملية، أقمشة سهلة العناية.',
  keywords: [
    'housekeeping uniform saudi',
    'hotel cleaning staff attire',
    'room attendant uniform',
    'cleaning staff dress',
    'hotel housekeeping riyadh',
    'maid uniform saudi arabia',
  ],
  keywordsAr: [
    'زي تدبير منزلي السعودية',
    'ملابس طاقم التنظيف',
    'زي خادمات الفندق',
  ],
  locale: 'en',
  pageType: 'product',
  path: '/shop/hospitality-attire/housekeeping-uniform',
  image: '/images/products/housekeeping-uniform.jpg',
  imageAlt: 'Housekeeping Uniform by UNEOM',
  aiSummary: 'UNEOM housekeeping uniforms for Saudi hotels. Includes: Tunics, dresses, aprons. Features: Durable polyester-cotton, stain-resistant, easy-care, comfortable fit. Colors: Gray, burgundy, navy. Sizes: S-3XL. Price: Starting 149 SAR. Practical pocket designs. MOQ: 20 pieces.',
  productInfo: {
    name: 'Housekeeping Uniform',
    price: 149,
    currency: 'SAR',
    availability: 'InStock',
    category: 'Hospitality Uniforms',
  },
});
