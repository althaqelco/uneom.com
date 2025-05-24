/**
 * Regional Targeting Section for Healthcare Industry Page
 * 
 * This component provides:
 * - Region-specific content for major Saudi cities
 * - Local testimonials from healthcare institutions in each region
 * - City-specific healthcare requirements and compliance information
 * - Targeted information for healthcare professionals in different regions
 */

import React from 'react';
import { useRouter } from 'next/router';
import OptimizedImage from '@/components/images/OptimizedImage';

const RegionalTargetingSection: React.FC = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  // Region-specific data
  const regions = [
    {
      id: 'riyadh',
      nameEn: 'Riyadh',
      nameAr: 'الرياض',
      imageUrl: '/images/locations/riyadh/healthcare.jpg',
      descriptionEn: 'Our healthcare uniforms meet the specific requirements of Riyadh\'s leading hospitals and clinics, with attention to the needs of King Faisal Specialist Hospital, King Khalid University Hospital, and other major medical institutions.',
      descriptionAr: 'تلبي أزياء الرعاية الصحية لدينا المتطلبات المحددة لمستشفيات وعيادات الرياض الرائدة، مع الاهتمام باحتياجات مستشفى الملك فيصل التخصصي، ومستشفى الملك خالد الجامعي، وغيرها من المؤسسات الطبية الكبرى.',
      testimonialEn: '"UNEOM has been our trusted uniform provider for over 5 years. Their healthcare uniforms are durable, comfortable, and comply with all our infection control standards." - Dr. Abdullah Al-Qahtani, Medical Director, Riyadh Medical Complex',
      testimonialAr: '"كانت يونيوم مزود الزي الموحد الموثوق به لدينا لأكثر من 5 سنوات. أزياء الرعاية الصحية الخاصة بهم متينة ومريحة وتتوافق مع جميع معايير مكافحة العدوى لدينا." - د. عبدالله القحطاني، المدير الطبي، مجمع الرياض الطبي'
    },
    {
      id: 'jeddah',
      nameEn: 'Jeddah',
      nameAr: 'جدة',
      imageUrl: '/images/locations/jeddah/healthcare.jpg',
      descriptionEn: 'Our Jeddah healthcare clients benefit from our quick delivery and specialized uniform solutions tailored for the coastal climate, serving King Abdulaziz University Hospital, Saudi German Hospital, and many private clinics in the western region.',
      descriptionAr: 'يستفيد عملاؤنا في مجال الرعاية الصحية في جدة من التسليم السريع وحلول الزي الموحد المتخصصة المصممة للمناخ الساحلي، والتي تخدم مستشفى جامعة الملك عبدالعزيز، والمستشفى السعودي الألماني، والعديد من العيادات الخاصة في المنطقة الغربية.',
      testimonialEn: '"The quality of UNEOM\'s medical uniforms has exceeded our expectations. Their fabrics are perfect for Jeddah\'s climate while maintaining professional appearance." - Nurse Fatima Al-Harbi, Head Nurse, International Medical Center Jeddah',
      testimonialAr: '"تجاوزت جودة الأزياء الطبية من يونيوم توقعاتنا. أقمشتهم مثالية لمناخ جدة مع الحفاظ على المظهر المهني." - الممرضة فاطمة الحربي، رئيسة الممرضات، المركز الطبي الدولي جدة'
    },
    {
      id: 'dammam',
      nameEn: 'Dammam',
      nameAr: 'الدمام',
      imageUrl: '/images/locations/dammam/healthcare.jpg',
      descriptionEn: 'Healthcare facilities in Dammam and the Eastern Province rely on our specialized uniforms designed for the oil industry medical facilities, including those at Saudi Aramco, Royal Commission Hospital, and regional medical centers.',
      descriptionAr: 'تعتمد مرافق الرعاية الصحية في الدمام والمنطقة الشرقية على أزيائنا المتخصصة المصممة للمرافق الطبية في صناعة النفط، بما في ذلك المرافق التابعة لشركة أرامكو السعودية، ومستشفى الهيئة الملكية، والمراكز الطبية الإقليمية.',
      testimonialEn: '"UNEOM understands the unique requirements of healthcare providers in industrial environments. Their uniforms offer the durability and safety features our medical team needs." - Dr. Mohammed Al-Otaibi, Health & Safety Director, Eastern Province Medical Services',
      testimonialAr: '"تتفهم يونيوم المتطلبات الفريدة لمقدمي الرعاية الصحية في البيئات الصناعية. توفر أزياؤهم الموحدة ميزات المتانة والسلامة التي يحتاجها فريقنا الطبي." - د. محمد العتيبي، مدير الصحة والسلامة، خدمات المنطقة الشرقية الطبية'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic 
              ? 'خدماتنا في أنحاء المملكة العربية السعودية'
              : 'Our Services Across Saudi Arabia'}
          </h2>
          <p className="text-xl text-gray-600">
            {isArabic 
              ? 'نوفر حلول الزي الموحد للرعاية الصحية المصممة خصيصًا لتلبية الاحتياجات المحددة للمناطق المختلفة في المملكة'
              : 'We provide healthcare uniform solutions tailored to meet the specific needs of different regions in the Kingdom'}
          </p>
        </div>
        
        <div className="space-y-12 mt-8">
          {regions.map((region) => (
            <div key={region.id} className={`flex flex-col md:flex-row items-start gap-8 pb-8 border-b border-gray-200 ${isArabic ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/3">
                <OptimizedImage
                  src={region.imageUrl}
                  alt={isArabic ? `زي موحد للرعاية الصحية في ${region.nameAr}` : `Healthcare uniforms in ${region.nameEn}`}
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
