import type { Service } from './index';

export const bulkOrdering: Service = {
  slug: 'bulk-ordering',
  nameEn: 'Bulk Ordering',
  nameAr: 'الطلبات بالجملة',
  summary: 'Volume programmes from 50 to 50,000 units with consistent fit and on-time delivery.',
  summaryAr: 'برامج بأحجام من 50 إلى 50,000 وحدة مع قياسات متناسقة وتسليم في الوقت المحدّد.',
  description: 'Dedicated production blocks, in-house cutting and sewing, multi-stage QC, and direct-to-site delivery anywhere in Saudi Arabia. Lead times 14–21 days for repeat programmes, 21–35 for new designs.',
  descriptionAr: 'خطوط إنتاج مخصصة، قص وخياطة داخلية، فحص جودة متعدد المراحل، وتسليم مباشر للموقع في أي مكان بالمملكة العربية السعودية. أوقات التسليم 14-21 يوماً للبرامج المتكررة، و21-35 يوماً للتصاميم الجديدة.',
  outcome: { value: '14–35 days', label: 'production lead time' },
  outcomeAr: { value: '14-35 يوماً', label: 'وقت التنفيذ للإنتاج' }
};
