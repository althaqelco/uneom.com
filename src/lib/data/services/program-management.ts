import type { Service } from './index';

export const programManagement: Service = {
  slug: 'program-management',
  nameEn: 'Programme Management',
  nameAr: 'إدارة البرامج',
  summary: 'Joiner kits, leaver returns, replacement cycles, and inventory management — handled.',
  summaryAr: 'أطقم الموظفين الجدد، إرجاعات المغادرين، دورات الاستبدال، وإدارة المخزون — نُديرها بالكامل.',
  description: 'A single point of contact for everything uniform: new-hire onboarding kits, exit returns, scheduled rotations, on-site fittings, and inventory dashboards. Ideal for headcounts above 200.',
  descriptionAr: 'نقطة اتصال واحدة لكل ما يخص الأزياء: أطقم تأهيل الموظفين الجدد، إرجاعات المغادرين، تدوير مجدول، قياسات في الموقع، ولوحات معلومات للمخزون. مثالية لأعداد الموظفين فوق 200.',
  outcome: { value: '48 hours', label: 'joiner-kit dispatch nationwide' },
  outcomeAr: { value: '48 ساعة', label: 'إرسال أطقم الموظفين الجددทั่ว المملكة' }
};
