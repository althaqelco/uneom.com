'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface ResourceInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function ResourcesPageArabic() {
  const locale = 'ar';
  
  // Resources content in Arabic
  const resourceCategories = [
    {
      title: 'الأقمشة والمواد',
      resources: [
        {
          id: 'fabric-guide',
          name: 'دليل الأقمشة',
          description: 'دليل شامل لأقمشة ومواد الزي الموحد، بما في ذلك خصائص الأداء والتطبيقات المثالية.',
          image: '/images/blog/sustainable-uniforms.jpg',
          href: '/ar/resources/fabric-guide'
        },
        {
          id: 'fabric-technology',
          name: 'تقنية الأقمشة',
          description: 'استكشف تقنيات النسيج المبتكرة التي تعزز الراحة والمتانة والوظائف للأزياء الموحدة الحديثة.',
          image: '/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg',
          href: '/ar/resources/fabric-technology'
        }
      ]
    },
    {
      title: 'المقاسات والتناسب',
      resources: [
        {
          id: 'size-guide',
          name: 'دليل المقاسات',
          description: 'مخططات مقاسات مفصلة وتعليمات القياس لضمان أزياء موحدة مناسبة تمامًا لجميع أنواع الجسم.',
          image: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg',
          href: '/ar/resources/size-guide'
        },
        {
          id: 'fit-optimization',
          name: 'تحسين التناسب',
          description: 'تعرف على كيفية تحسين تناسب الزي الموحد لتحقيق أقصى قدر من الراحة والمظهر المهني في جميع أنحاء مؤسستك.',
          image: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg',
          href: '/ar/resources/fit-optimization'
        }
      ]
    },
    {
      title: 'الشراء والإدارة',
      resources: [
        {
          id: 'procurement-guide',
          name: 'دليل الشراء',
          description: 'أفضل الممارسات لشراء الزي الموحد بكفاءة، من تقييم الاحتياجات إلى التسليم والتنفيذ.',
          image: '/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg',
          href: '/ar/resources/procurement-guide'
        },
        {
          id: 'policy-templates',
          name: 'قوالب سياسة الزي الموحد',
          description: 'قوالب قابلة للتخصيص لتطوير سياسات وإرشادات شاملة للزي الموحد للشركات.',
          image: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg',
          href: '/ar/resources/policy-templates'
        }
      ]
    }
  ];
  
  const educationalResources = [
    {
      id: 'blog',
      name: 'مدونة الصناعة',
      description: 'ابق على اطلاع بأحدث الاتجاهات والرؤى وأفضل الممارسات في إدارة وتصميم الزي الموحد.',
      image: '/images/blog/healthcare-uniforms.jpg',
      href: '/ar/blog'
    },
    {
      id: 'case-studies',
      name: 'دراسات الحالة',
      description: 'أمثلة واقعية توضح كيف حلت حلول الزي الموحد لدينا التحديات للمؤسسات عبر الصناعات المختلفة.',
      image: '/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg',
      href: '/ar/resources/case-studies'
    },
    {
      id: 'webinars',
      name: 'الندوات عبر الإنترنت والفعاليات',
      description: 'انضم إلى ندواتنا التعليمية عبر الإنترنت وفعاليات الصناعة لتعميق معرفتك والتواصل مع النظراء.',
      image: '/images/4k-top-view-of-little-asian-students-with-uniforms-reading-book-in-library-together-SBI-351422735.jpg',
      href: '/ar/resources/events'
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <Image
            src="/images/blog/sustainable-uniforms.jpg"
            alt="موارد يونيوم"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">مركز معرفة الأزياء الموحدة</h1>
            <p className="text-xl opacity-90 mb-8">
              موارد خبيرة لمساعدتك على تحسين برنامج الزي الموحد الخاص بك واتخاذ قرارات مستنيرة
            </p>
          </div>
        </Container>
      </section>
      
      {/* Resources Categories Sections */}
      {resourceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <Container>
            <SectionHeading centered>
              {category.title}
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {category.resources.map((resource) => (
                <div 
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 flex flex-col h-full"
                >
                  <div className="h-48 relative">
                    <Image
                      src={resource.image}
                      alt={resource.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3">{resource.name}</h3>
                    <p className="text-neutral-600 mb-6 flex-grow">{resource.description}</p>
                    <Link 
                      href={resource.href} 
                      className="text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200 inline-block"
                    >
                      معرفة المزيد ←
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}
      
      {/* Educational Resources Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>
            الموارد التعليمية
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {educationalResources.map((resource) => (
              <div 
                key={resource.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 flex flex-col h-full"
              >
                <div className="h-48 relative">
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{resource.name}</h3>
                  <p className="text-neutral-600 mb-6 flex-grow">{resource.description}</p>
                  <Link 
                    href={resource.href} 
                    className="text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200 inline-block"
                  >
                    استكشاف ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لم تجد ما تبحث عنه؟</h2>
            <p className="text-xl opacity-90 mb-8">
              مستشارو الزي الموحد لدينا مستعدون للإجابة على أسئلتك المحددة وتقديم إرشادات مخصصة لمؤسستك.
            </p>
            <Button
              href="/ar/contact"
              variant="secondary"
              size="lg"
            >
              تواصل مع خبرائنا
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
} 
