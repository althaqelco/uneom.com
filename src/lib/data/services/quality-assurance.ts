import type { Service } from './index';

export const qualityAssurance: Service = {
  slug: 'quality-assurance',
  nameEn: 'Quality Assurance',
  nameAr: 'ضمان الجودة',
  summary: 'Multi-stage inspection from fabric to finished garment — and a 12-month warranty.',
  summaryAr: 'فحص متعدد المراحل من القماش إلى القطعة النهائية — وضمان لمدة 12 شهراً.',
  description: 'Fabric weight and weave testing, colour-fastness lab, seam-strength QC, and pre-ship inspection. Every garment ships with a serial number and 12-month performance guarantee.',
  descriptionAr: 'اختبار وزن ونسيج القماش، مختبر ثبات الألوان، فحص جودة قوة الخياطة، وفحص ما قبل الشحن. كل قطعة تُشحن برقم تسلسلي وضمان أداء لمدة 12 شهراً.',
  outcome: { value: '12 months', label: 'performance warranty' },
  outcomeAr: { value: '12 شهراً', label: 'ضمان الأداء' }
};
