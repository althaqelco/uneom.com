'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface IndustryInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function IndustriesPageArabic() {
  const locale = 'ar';
  
  // Arabic content for featured industries
  const featuredIndustries: IndustryInfo[] = [
    {
      id: 'healthcare',
      name: 'الرعاية الصحية',
      description: 'أزياء طبية وملابس رعاية صحية عالية الجودة مصممة للمستشفيات والعيادات والمرافق الطبية في المملكة العربية السعودية.',
      image: '/images/industries/healthcare-feature.jpg',
      href: '/ar/industries/healthcare'
    },
    {
      id: 'aviation',
      name: 'الطيران',
      description: 'أزياء فاخرة للطيارين وطاقم الضيافة تمثل شركة طيرانك بتميز وراحة.',
      image: '/images/industries/aviation-feature.jpg',
      href: '/ar/industries/aviation'
    },
    {
      id: 'hospitality',
      name: 'الضيافة',
      description: 'أزياء أنيقة وعملية للفنادق والمطاعم وخدمات الضيافة في جميع أنحاء المملكة العربية السعودية.',
      image: '/images/industries/hospitality-feature.jpg',
      href: '/ar/industries/hospitality'
    }
  ];
  
  const additionalIndustries: IndustryInfo[] = [
    {
      id: 'corporate',
      name: 'الشركات',
      description: 'ملابس وأزياء احترافية للشركات مصممة خصيصًا لبيئات الأعمال السعودية.',
      image: '/images/industries/corporate-feature.jpg',
      href: '/ar/industries/corporate'
    },
    {
      id: 'education',
      name: 'التعليم',
      description: 'أزياء متينة ومريحة للمدارس والجامعات والمؤسسات التعليمية.',
      image: '/images/industries/education-feature.jpg',
      href: '/ar/industries/education'
    },
    {
      id: 'manufacturing',
      name: 'التصنيع',
      description: 'ملابس عمل متوافقة مع معايير السلامة ومصممة للبيئات الصناعية مع مراعاة مناخ المملكة العربية السعودية.',
      image: '/images/industries/manufacturing-feature.jpg',
      href: '/ar/industries/manufacturing'
    },
    {
      id: 'security',
      name: 'الأمن',
      description: 'أزياء أمنية احترافية تعكس السلطة مع توفير الراحة والوظائف العملية.',
      image: '/images/industries/security-feature.jpg',
      href: '/ar/industries/security'
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <Image
            src="/images/industries/industries-hero.jpg"
            alt="قطاعات يونيوم"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">القطاعات التي نخدمها</h1>
            <p className="text-xl opacity-90 mb-8">
              حلول أزياء متخصصة مصممة لتلبية الاحتياجات الفريدة لمختلف القطاعات في المملكة العربية السعودية
            </p>
            <Button
              href="/ar/contact"
              variant="primary"
              size="lg"
            >
              طلب استشارة للقطاع
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="مصممة لأماكن العمل والمناخ السعودي"
              >
                حلول أزياء متخصصة حسب القطاع
              </SectionHeading>
              <div className="prose max-w-none">
                <p className="mb-4">
                  في يونيوم، نفهم أن القطاعات المختلفة لديها متطلبات فريدة للأزياء. لذلك طورنا مجموعات متخصصة لكل قطاع نخدمه، مع مراعاة ليس فقط المعايير المهنية ولكن أيضًا الاحتياجات المحددة لأماكن العمل في المملكة العربية السعودية وظروف المناخ.
                </p>
                <p>
                  يتمتع فريقنا بخبرة واسعة في العمل مع المؤسسات في قطاعات الرعاية الصحية والطيران والضيافة والشركات والتعليم والتصنيع والأمن. نجمع بين أفضل الممارسات العالمية والخبرة المحلية لتقديم حلول أزياء متخصصة تتناسب تمامًا مع متطلبات قطاعك.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/industries/industry-expertise.jpg"
                  alt="خبرة يونيوم في القطاعات"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Featured Industries */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            subtitle="مجموعات الأزياء المتخصصة للقطاعات الرئيسية"
            centered
          >
            القطاعات المميزة
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredIndustries.map((industry) => (
              <div 
                key={industry.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <Link href={industry.href} className="block relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    <Link 
                      href={industry.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {industry.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{industry.description}</p>
                  <Link 
                    href={industry.href}
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    استكشاف الحلول
                    <svg 
                      className="mr-2 h-5 w-5 transform rotate-180"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* All Industries Grid */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            subtitle="حلول أزياء شاملة لكل قطاع"
            centered
          >
            المزيد من القطاعات التي نخدمها
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {additionalIndustries.map((industry) => (
              <div 
                key={industry.id}
                className="group bg-neutral-50 rounded-lg overflow-hidden hover:bg-neutral-100 transition-colors duration-300 flex flex-col h-full"
              >
                <Link href={industry.href} className="block relative">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    <Link 
                      href={industry.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {industry.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{industry.description}</p>
                  <Link 
                    href={industry.href}
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    عرض التفاصيل
                    <svg 
                      className="mr-2 h-5 w-5 transform rotate-180"
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Industry Comparison */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            subtitle="ابحث عن أفضل برنامج للأزياء المناسب لقطاعك المحدد"
            centered
          >
            مقارنة حلول القطاعات
          </SectionHeading>
          
          <div className="overflow-hidden shadow-lg rounded-lg mt-12">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="py-4 px-6 text-right">القطاع</th>
                    <th className="py-4 px-6 text-right">الميزات الرئيسية</th>
                    <th className="py-4 px-6 text-right">المواد</th>
                    <th className="py-4 px-6 text-right">التخصيص</th>
                    <th className="py-4 px-6 text-right">التفاصيل</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-4 px-6 font-medium">الرعاية الصحية</td>
                    <td className="py-4 px-6">مضاد للميكروبات، مقاوم للسوائل، التركيز على الراحة</td>
                    <td className="py-4 px-6">مزيج البوليستر الطبي، القطن</td>
                    <td className="py-4 px-6">ترميز الألوان حسب القسم، شعارات مطرزة</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/ar/industries/healthcare"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        عرض
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-4 px-6 font-medium">الطيران</td>
                    <td className="py-4 px-6">مظهر احترافي، مقاوم للتجعد</td>
                    <td className="py-4 px-6">مزيج الصوف الفاخر، البوليستر</td>
                    <td className="py-4 px-6">علامة تجارية للشركة، شارات الرتب</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/ar/industries/aviation"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        عرض
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">الضيافة</td>
                    <td className="py-4 px-6">أنيق، مقاوم للبقع، سهل العناية</td>
                    <td className="py-4 px-6">أقمشة مريحة ومرنة، مزيج فاخر</td>
                    <td className="py-4 px-6">مطابقة ألوان العلامة التجارية، إكسسوارات مخصصة</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/ar/industries/hospitality"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        عرض
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-4 px-6 font-medium">الشركات</td>
                    <td className="py-4 px-6">احترافي، قابل للتنفس، مناسب للمكاتب</td>
                    <td className="py-4 px-6">مزيج القطن عالي الجودة، أقمشة الأداء</td>
                    <td className="py-4 px-6">دمج هوية الشركة، تصميم تنفيذي</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/ar/industries/corporate"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        عرض
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">لم تجد قطاعك؟</h2>
            <p className="text-lg mb-8 opacity-90">
              نطور حلول أزياء مخصصة لجميع أنواع الشركات في المملكة العربية السعودية. تواصل مع فريقنا لمناقشة متطلبات قطاعك المحددة.
            </p>
            <Button
              href="/ar/contact"
              variant="secondary"
              size="lg"
            >
              طلب حل مخصص للقطاع
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
} 
