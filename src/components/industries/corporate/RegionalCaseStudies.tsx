/**
 * Regional Case Studies Component for Corporate Industry
 * 
 * This component enhances our local SEO strategy by showcasing region-specific
 * success stories and case studies for corporate uniform solutions in key Saudi cities.
 * The content is optimized for regional keywords and includes structured data markup.
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBuilding, FaUsers, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

interface CaseStudy {
  id: string;
  title: string;
  titleAr: string;
  city: string;
  cityAr: string;
  sector: string;
  sectorAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  result: string;
  resultAr: string;
  imageUrl: string;
  clientLogo?: string;
  employeeCount: number;
  uniformCount: number;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'banking-riyadh',
    title: 'Premium Corporate Uniforms for Leading Riyadh Bank',
    titleAr: 'أزياء موحدة فاخرة لبنك رائد في الرياض',
    city: 'Riyadh',
    cityAr: 'الرياض',
    sector: 'Banking & Finance',
    sectorAr: 'البنوك والتمويل',
    challenge: 'Creating a distinctive uniform solution for 2,500+ employees across 120 branches that reflects the bank\'s premium brand while ensuring comfort in Riyadh\'s climate.',
    challengeAr: 'إنشاء حل زي موحد مميز لأكثر من 2,500 موظف عبر 120 فرعًا يعكس العلامة التجارية الفاخرة للبنك مع ضمان الراحة في مناخ الرياض.',
    solution: 'Developed a multi-piece collection using premium cooling fabrics with moisture-wicking technology, featuring the bank\'s corporate colors and subtle traditional Saudi design elements.',
    solutionAr: 'قمنا بتطوير مجموعة متعددة القطع باستخدام أقمشة تبريد فاخرة مع تقنية امتصاص الرطوبة، تتميز بألوان الشركة وعناصر تصميم سعودية تقليدية دقيقة.',
    result: '98% employee satisfaction rate, 23% increase in customer perception of professionalism, and fabric technology that reduced uniform replacement by 40%.',
    resultAr: 'معدل رضا الموظفين 98٪، زيادة بنسبة 23٪ في إدراك العملاء للاحترافية، وتقنية القماش التي قللت من استبدال الزي الموحد بنسبة 40٪.',
    imageUrl: '/images/case-studies/riyadh-bank-uniforms.jpg',
    clientLogo: '/images/clients/riyadh-bank-logo.png',
    employeeCount: 2500,
    uniformCount: 7500
  },
  {
    id: 'telecom-jeddah',
    title: 'Modern Retail Staff Uniforms for Jeddah Telecom Giant',
    titleAr: 'أزياء موحدة عصرية لموظفي التجزئة لشركة اتصالات عملاقة في جدة',
    city: 'Jeddah',
    cityAr: 'جدة',
    sector: 'Telecommunications',
    sectorAr: 'الاتصالات',
    challenge: 'Designing versatile uniforms for 1,800 retail staff across 85 Jeddah locations that accommodate both male and female employees while maintaining brand consistency.',
    challengeAr: 'تصميم أزياء متعددة الاستخدامات لـ 1,800 موظف تجزئة عبر 85 موقعًا في جدة تستوعب كلاً من الموظفين والموظفات مع الحفاظ على اتساق العلامة التجارية.',
    solution: 'Created a coordinated collection with modular pieces that work together in multiple combinations, with special attention to modest yet modern designs for female staff.',
    solutionAr: 'أنشأنا مجموعة منسقة مع قطع معيارية تعمل معًا في مجموعات متعددة، مع اهتمام خاص بتصاميم متواضعة وعصرية للموظفات.',
    result: 'Improved brand recognition by 35%, reduced inventory complexity by 45%, and received industry recognition for inclusive uniform design.',
    resultAr: 'تحسين التعرف على العلامة التجارية بنسبة 35٪، وتقليل تعقيد المخزون بنسبة 45٪، والحصول على اعتراف الصناعة لتصميم الزي الموحد الشامل.',
    imageUrl: '/images/case-studies/jeddah-telecom-uniforms.jpg',
    clientLogo: '/images/clients/jeddah-telecom-logo.png',
    employeeCount: 1800,
    uniformCount: 5400
  },
  {
    id: 'oil-dammam',
    title: 'Executive and Office Uniforms for Dammam Energy Corporation',
    titleAr: 'أزياء تنفيذية ومكتبية لشركة الطاقة في الدمام',
    city: 'Dammam',
    cityAr: 'الدمام',
    sector: 'Energy & Oil',
    sectorAr: 'الطاقة والنفط',
    challenge: 'Developing a unified corporate identity through uniforms for 3,200 office and executive staff while differentiating between departments and seniority levels.',
    challengeAr: 'تطوير هوية مؤسسية موحدة من خلال الأزياء الموحدة لـ 3,200 موظف مكتبي وتنفيذي مع التمييز بين الإدارات ومستويات الأقدمية.',
    solution: 'Implemented a sophisticated color-coding system with premium fabric variations for different departments, incorporating subtle elements to denote seniority.',
    solutionAr: 'نفذنا نظامًا متطورًا للترميز اللوني مع اختلافات في الأقمشة الفاخرة للإدارات المختلفة، مع دمج عناصر دقيقة للإشارة إلى الأقدمية.',
    result: 'Created visual harmony across the organization, improved internal navigation by 60%, and strengthened corporate identity in the competitive Dammam energy sector.',
    resultAr: 'خلق انسجام بصري في جميع أنحاء المنظمة، وتحسين التنقل الداخلي بنسبة 60٪، وتعزيز الهوية المؤسسية في قطاع الطاقة التنافسي في الدمام.',
    imageUrl: '/images/case-studies/dammam-energy-uniforms.jpg',
    clientLogo: '/images/clients/dammam-energy-logo.png',
    employeeCount: 3200,
    uniformCount: 9600
  }
];

const RegionalCaseStudies: React.FC = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {isArabic 
              ? 'قصص نجاح الزي الموحد للشركات في المدن السعودية' 
              : 'Corporate Uniform Success Stories Across Saudi Cities'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isArabic 
              ? 'اكتشف كيف ساعدت حلول يونيوم للزي الموحد الشركات الرائدة في مختلف المدن السعودية على تعزيز هويتها المؤسسية وتحسين الأداء المهني.' 
              : 'Discover how UNEOM uniform solutions have helped leading companies across Saudi cities enhance their corporate identity and improve professional performance.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={study.imageUrl}
                  alt={isArabic ? study.titleAr : study.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center mb-2">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{isArabic ? study.cityAr : study.city}</span>
                    </div>
                    <h3 className="text-xl font-bold">
                      {isArabic ? study.titleAr : study.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaBuilding className="text-blue-600 mr-2" />
                  <span className="font-medium">
                    {isArabic ? study.sectorAr : study.sector}
                  </span>
                </div>
                
                <h4 className="font-semibold mb-2">
                  {isArabic ? 'التحدي:' : 'Challenge:'}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {isArabic ? study.challengeAr : study.challenge}
                </p>
                
                <h4 className="font-semibold mb-2">
                  {isArabic ? 'الحل:' : 'Solution:'}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {isArabic ? study.solutionAr : study.solution}
                </p>
                
                <h4 className="font-semibold mb-2">
                  {isArabic ? 'النتيجة:' : 'Result:'}
                </h4>
                <p className="text-gray-600 mb-6 text-sm">
                  {isArabic ? study.resultAr : study.result}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <FaUsers className="text-blue-600 mr-2" />
                    <span className="text-sm">
                      {study.employeeCount.toLocaleString()}+ {isArabic ? 'موظف' : 'employees'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2" />
                    <span className="text-sm">
                      {study.uniformCount.toLocaleString()}+ {isArabic ? 'قطعة' : 'uniforms'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <Link 
                  href={`/${isArabic ? 'ar/' : ''}industries/corporate/case-studies/${study.id}`}
                  className="text-blue-600 font-medium hover:underline flex items-center justify-center"
                >
                  {isArabic ? 'قراءة دراسة الحالة الكاملة' : 'Read Full Case Study'}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href={`/${isArabic ? 'ar/' : ''}industries/corporate/case-studies`}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            {isArabic ? 'عرض جميع قصص النجاح الإقليمية' : 'View All Regional Success Stories'}
          </Link>
        </div>
      </div>
      
      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': caseStudies.map((study, index) => ({
              '@type': 'ListItem',
              'position': index + 1,
              'item': {
                '@type': 'Article',
                'name': isArabic ? study.titleAr : study.title,
                'headline': isArabic ? study.titleAr : study.title,
                'description': isArabic ? study.challengeAr : study.challenge,
                'image': study.imageUrl,
                'author': {
                  '@type': 'Organization',
                  'name': 'UNEOM Uniform Solutions',
                  'url': 'https://www.uneom.com'
                },
                'publisher': {
                  '@type': 'Organization',
                  'name': 'UNEOM Uniform Solutions',
                  'logo': {
                    '@type': 'ImageObject',
                    'url': 'https://www.uneom.com/logo.png'
                  }
                },
                'contentLocation': {
                  '@type': 'Place',
                  'name': isArabic ? study.cityAr : study.city,
                  'address': {
                    '@type': 'PostalAddress',
                    'addressRegion': isArabic ? study.cityAr : study.city,
                    'addressCountry': isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
                  }
                }
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default RegionalCaseStudies;
