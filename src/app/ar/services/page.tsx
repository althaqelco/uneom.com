import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ClientMotion from '@/components/ui/ClientMotion';

interface ServiceInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
  benefits: string[];
}

export const metadata: Metadata = {
  title: 'خدماتنا | يونيوم - حلول الزي الموحد المبتكرة',
  description: 'نقدم حلول شاملة للزي الموحد للشركات والمؤسسات في المملكة العربية السعودية. تعرف على خدماتنا المتميزة في التصميم والإنتاج والتوريد.',
  alternates: {
    canonical: 'https://uneom.com/ar/services',
    languages: {
      'en': 'https://uneom.com/services',
    },
  },
};

export default function ServicesPageArabic() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // Services content in Arabic
  const services: ServiceInfo[] = [
    {
      id: 'program-management',
      name: 'إدارة برامج الزي الموحد',
      description: 'حلول شاملة لإدارة برنامج الزي الموحد الخاص بمؤسستك من البداية إلى النهاية.',
      image: '/images/services/program-management.jpg',
      href: '/ar/services/program-management',
      benefits: [
        'تحليل احتياجات المؤسسة والموظفين',
        'إنشاء أنظمة وسياسات الزي الموحد',
        'إدارة المخزون والتوزيع',
        'تتبع وتحليل البيانات',
        'خدمة الدعم المستمر للموظفين',
      ]
    },
    {
      id: 'custom-design',
      name: 'تصميم الزي الموحد حسب الطلب',
      description: 'تصميمات فريدة تعكس هوية علامتك التجارية وتعزز صورتك المؤسسية.',
      image: '/images/services/custom-design.jpg',
      href: '/ar/services/custom-design',
      benefits: [
        'مصممون محترفون بخبرة في الزي المؤسسي',
        'تصميمات تناسب ثقافة وقيم المملكة',
        'خيارات متعددة للأقمشة والألوان',
        'اهتمام بالتفاصيل والجودة العالية',
        'تصميمات عملية تناسب بيئة العمل',
      ]
    },
    {
      id: 'bulk-ordering',
      name: 'طلبات الشراء بالجملة',
      description: 'حلول فعالة من حيث التكلفة لطلبات الزي الموحد بكميات كبيرة مع ضمان الجودة.',
      image: '/images/services/bulk-ordering.jpg',
      href: '/ar/services/bulk-ordering',
      benefits: [
        'أسعار تنافسية للطلبات الكبيرة',
        'خيارات متعددة للشخصنة والتطريز',
        'عمليات إنتاج سريعة وفعالة',
        'جدولة مرنة للتسليم',
        'خدمة متابعة ما بعد البيع',
      ]
    },
    {
      id: 'measuring-services',
      name: 'خدمات القياس',
      description: 'نضمن ملاءمة مثالية لجميع الموظفين من خلال خدمات القياس الاحترافية.',
      image: '/images/services/measuring-services.jpg',
      href: '/ar/services/measuring-services',
      benefits: [
        'فرق قياس متخصصة للرجال والنساء',
        'معدات قياس عالية الدقة',
        'جلسات قياس جماعية في موقع العمل',
        'نظام تتبع المقاسات الإلكتروني',
        'خدمة التعديل والضبط',
      ]
    },
    {
      id: 'uniform-policy',
      name: 'سياسات الزي الموحد',
      description: 'نساعدك في تطوير وتنفيذ سياسات زي موحد فعالة تتوافق مع أهداف مؤسستك.',
      image: '/images/services/uniform-policy.jpg',
      href: '/ar/services/uniform-policy',
      benefits: [
        'تحليل احتياجات المؤسسة والصناعة',
        'صياغة سياسات شاملة وواضحة',
        'التوافق مع اللوائح المحلية',
        'استراتيجيات التواصل والتدريب',
        'مراجعة وتحديث دوري للسياسات',
      ]
    }
  ];
  
  return (
    <>
      <section className="bg-gradient-to-b from-neutral-100 to-white py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
            <p className="text-xl text-neutral-700 mb-8">
              نقدم مجموعة شاملة من خدمات الزي الموحد المصممة خصيصًا لتلبية احتياجات مؤسستك
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                href={service.href}
                key={service.id}
                className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
} 
