"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import ClientMotion from '@/components/ui/ClientMotion';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface ServiceInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
  benefits: string[];
}

export default function ServicesClientPage() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // Services content in Arabic
  const services: ServiceInfo[] = [
    {
      id: 'program-management',
      name: 'إدارة برامج الزي الموحد',
      description: 'حلول شاملة لإدارة برنامج الزي الموحد الخاص بمؤسستك من البداية إلى النهاية.',
      image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
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
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
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
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
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
      image: '/images/services/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg',
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
      image: '/images/product-placeholder.jpg',
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

  // Client-side routing redirection (carried over from client-page.tsx)
  React.useEffect(() => {
    // Ensure we're on the correct route with trailing slash
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      
      if (pathname === '/ar/services') {
        // Use direct window.location replace for more immediate effect
        window.location.replace('/ar/services/');
      }
    }
  }, []);
  
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform services","custom uniform design","uniform manufacturing"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

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