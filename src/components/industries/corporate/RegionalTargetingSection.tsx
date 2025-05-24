/**
 * Regional Targeting Section for Corporate Industry Page
 * 
 * This component provides:
 * - Region-specific content for major Saudi business centers
 * - Local testimonials from corporate clients in each region
 * - City-specific business compliance information
 * - Content tailored to corporate culture in different Saudi regions
 */

import React from 'react';
import { useRouter } from 'next/router';
import OptimizedImage from '@/components/images/OptimizedImage';

const RegionalTargetingSection: React.FC = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  // Region-specific data for corporate sector
  const regions = [
    {
      id: 'riyadh',
      nameEn: 'Riyadh',
      nameAr: 'الرياض',
      imageUrl: '/images/locations/riyadh/corporate.jpg',
      descriptionEn: 'As the business capital of Saudi Arabia, Riyadh hosts numerous corporate headquarters requiring professional uniforms that reflect the city\'s status as a modern business hub. We serve major financial institutions, government organizations, and multinational corporations.',
      descriptionAr: 'بصفتها العاصمة التجارية للمملكة العربية السعودية، تستضيف الرياض العديد من المقرات الرئيسية للشركات التي تتطلب زيًا موحدًا احترافيًا يعكس مكانة المدينة كمركز أعمال حديث. نحن نخدم المؤسسات المالية الكبرى والمنظمات الحكومية والشركات متعددة الجنسيات.',
      testimonialEn: '"UNEOM provided exceptional corporate uniforms for our entire staff across three office locations in Riyadh. Their attention to detail and understanding of our brand guidelines exceeded our expectations." - Khalid Al-Saadi, HR Director, Al-Rajhi Capital',
      testimonialAr: '"قدمت يونيوم زيًا موحدًا استثنائيًا للشركات لجميع موظفينا عبر ثلاثة مواقع مكتبية في الرياض. لقد تجاوز اهتمامهم بالتفاصيل وفهمهم لإرشادات علامتنا التجارية توقعاتنا." - خالد السعدي، مدير الموارد البشرية، الراجحي كابيتال'
    },
    {
      id: 'jeddah',
      nameEn: 'Jeddah',
      nameAr: 'جدة',
      imageUrl: '/images/locations/jeddah/corporate.jpg',
      descriptionEn: 'Jeddah\'s corporate landscape combines traditional business values with international commerce as Saudi Arabia\'s gateway port city. Our corporate uniforms for Jeddah businesses blend professionalism with comfort suitable for the coastal climate.',
      descriptionAr: 'يجمع المشهد المؤسسي في جدة بين قيم الأعمال التقليدية والتجارة الدولية باعتبارها مدينة ميناء بوابة المملكة العربية السعودية. تمزج أزياءنا الموحدة للشركات في جدة بين الاحتراف والراحة المناسبة للمناخ الساحلي.',
      testimonialEn: '"We selected UNEOM to outfit our customer service team with professional uniforms that work well in Jeddah\'s climate while maintaining a polished appearance. The results have been outstanding." - Layla Badreddine, Operations Manager, Red Sea Development Company',
      testimonialAr: '"لقد اخترنا يونيوم لتجهيز فريق خدمة العملاء لدينا بزي موحد احترافي يعمل بشكل جيد في مناخ جدة مع الحفاظ على مظهر أنيق. كانت النتائج رائعة." - ليلى بدر الدين، مديرة العمليات، شركة البحر الأحمر للتطوير'
    },
    {
      id: 'dammam',
      nameEn: 'Dammam',
      nameAr: 'الدمام',
      imageUrl: '/images/locations/dammam/corporate.jpg',
      descriptionEn: 'The Eastern Province\'s industrial hub requires corporate uniforms that bridge office environments with industrial settings. Our Dammam clients include oil companies, logistics firms, and manufacturing businesses requiring versatile professional attire.',
      descriptionAr: 'يتطلب المركز الصناعي في المنطقة الشرقية زيًا موحدًا للشركات يربط بين بيئات المكاتب والإعدادات الصناعية. يشمل عملاؤنا في الدمام شركات النفط وشركات الخدمات اللوجستية والشركات الصناعية التي تتطلب ملابس مهنية متعددة الاستخدامات.',
      testimonialEn: '"UNEOM created custom corporate uniforms for our office staff that coordinate with our field technicians\' workwear, creating a cohesive brand identity across all divisions." - Engineer Hassan Al-Shamrani, Administrative Director, Eastern Petrochemical Company',
      testimonialAr: '"ابتكرت يونيوم زيًا موحدًا مخصصًا للشركات لموظفي مكتبنا يتناسق مع ملابس العمل الخاصة بفنيي الميدان لدينا، مما يخلق هوية موحدة للعلامة التجارية عبر جميع الأقسام." - المهندس حسن الشمراني، المدير الإداري، شركة الشرق للبتروكيماويات'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic 
              ? 'خدمات الزي الموحد للشركات في المدن الرئيسية'
              : 'Corporate Uniform Services in Major Cities'}
          </h2>
          <p className="text-xl text-gray-600">
            {isArabic 
              ? 'نوفر حلول الزي الموحد للشركات المصممة خصيصًا لتلبية الاحتياجات المحددة للشركات في جميع أنحاء المملكة'
              : 'We provide corporate uniform solutions tailored to meet the specific needs of businesses across the Kingdom'}
          </p>
        </div>
        
        <div className="space-y-12 mt-8">
          {regions.map((region) => (
            <div key={region.id} className={`flex flex-col md:flex-row items-start gap-8 pb-8 border-b border-gray-200 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/3">
                <OptimizedImage
                  src={region.imageUrl}
                  alt={isArabic ? `زي موحد للشركات في ${region.nameAr}` : `Corporate uniforms in ${region.nameEn}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              
              <div className={`md:w-2/3 ${textAlign}`}>
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  {isArabic ? region.nameAr : region.nameEn}
                </h3>
                <p className="text-gray-700 mb-6">
                  {isArabic ? region.descriptionAr : region.descriptionEn}
                </p>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500 italic">
                  <p className="text-gray-700">
                    {isArabic ? region.testimonialAr : region.testimonialEn}
                  </p>
                </div>
                
                <div className="mt-6">
                  <a 
                    href={`/${isArabic ? 'ar' : 'en'}/locations/${region.id}/`} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {isArabic ? `معرفة المزيد عن خدماتنا في ${region.nameAr}` : `Learn more about our services in ${region.nameEn}`}
                    <svg className={`w-4 h-4 ml-2 ${isArabic ? 'transform rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalTargetingSection;
