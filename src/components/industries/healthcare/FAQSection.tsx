/**
 * Healthcare Uniforms FAQ Section
 * 
 * This component implements:
 * - Schema.org FAQ structured data for rich snippets in search results
 * - Accordion-style UI for better UX and reduced initial page load
 * - Arabic and English language support with proper RTL handling
 */

import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggleFAQ: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  index, 
  isOpen, 
  toggleFAQ 
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => toggleFAQ(index)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const faqs = {
    en: [
      {
        question: 'What types of healthcare uniforms does UNEOM offer?',
        answer: 'UNEOM offers a comprehensive range of healthcare uniforms including doctor coats, nursing uniforms, medical scrubs, admin uniforms, patient gowns, and medical accessories. All our products are designed specifically for healthcare environments with a focus on durability, comfort, and infection control.'
      },
      {
        question: 'Are your healthcare uniforms designed for infection control?',
        answer: 'Yes, infection control is a top priority in our healthcare uniform design. We use antimicrobial fabrics that help reduce the spread of bacteria, and our uniforms are designed to withstand rigorous washing and sanitization protocols. The fabrics are chosen specifically for their ability to maintain integrity even after frequent washing at high temperatures required in healthcare settings.'
      },
      {
        question: 'Can you customize healthcare uniforms for different departments?',
        answer: 'Absolutely. We offer customization options including color-coding for different departments or roles, embroidery for names, credentials or facility logos, and specialized pockets or features based on specific departmental needs. This helps in easy identification of staff roles and improves overall efficiency in the healthcare facility.'
      },
      {
        question: 'What fabrics do you use for healthcare uniforms?',
        answer: 'We use a variety of high-performance fabrics specifically selected for healthcare environments. These include antimicrobial polyester-cotton blends, moisture-wicking fabrics that keep staff comfortable during long shifts, stretchy materials for freedom of movement, and specialized fabrics that resist staining from common medical substances. All fabrics meet international standards for medical uniform quality.'
      },
      {
        question: 'How do I determine the right size for healthcare uniforms?',
        answer: 'We provide detailed sizing guides for all our healthcare uniforms. For bulk orders, we can arrange for sample sizes to be sent to your facility for staff to try on before placing the full order. We also offer alteration services to ensure perfect fit for all staff members. Our customer service team is available to assist with any sizing questions.'
      },
      {
        question: 'Do you offer specialized uniforms for specific medical roles?',
        answer: 'Yes, we design specialized uniforms for specific medical roles including surgical staff, radiology technicians, dental professionals, laboratory staff, and more. These specialized uniforms take into account the unique requirements of each role, including mobility needs, protection requirements, and functional features like specialized pockets for equipment.'
      }
    ],
    ar: [
      {
        question: 'ما هي أنواع الزي الموحد للرعاية الصحية التي تقدمها يونيوم؟',
        answer: 'تقدم يونيوم مجموعة شاملة من الزي الموحد للرعاية الصحية بما في ذلك معاطف الأطباء وزي التمريض وملابس التعقيم الطبية وزي موظفي الإدارة وأثواب المرضى والإكسسوارات الطبية. تم تصميم جميع منتجاتنا خصيصًا لبيئات الرعاية الصحية مع التركيز على المتانة والراحة ومكافحة العدوى.'
      },
      {
        question: 'هل تم تصميم الزي الموحد للرعاية الصحية الخاص بكم لمكافحة العدوى؟',
        answer: 'نعم، تعد مكافحة العدوى أولوية قصوى في تصميم الزي الموحد للرعاية الصحية لدينا. نستخدم أقمشة مضادة للميكروبات تساعد على تقليل انتشار البكتيريا، وتم تصميم الزي الموحد لدينا ليتحمل بروتوكولات الغسيل والتعقيم الصارمة. تم اختيار الأقمشة خصيصًا لقدرتها على الحفاظ على سلامتها حتى بعد الغسيل المتكرر في درجات حرارة عالية مطلوبة في بيئات الرعاية الصحية.'
      },
      {
        question: 'هل يمكنكم تخصيص الزي الموحد للرعاية الصحية لمختلف الأقسام؟',
        answer: 'بالتأكيد. نقدم خيارات التخصيص بما في ذلك الترميز اللوني للأقسام أو الأدوار المختلفة، والتطريز للأسماء أو المؤهلات أو شعارات المنشأة، والجيوب أو الميزات المتخصصة بناءً على احتياجات قسم معين. يساعد هذا في التعرف بسهولة على أدوار الموظفين ويحسن الكفاءة العامة في منشأة الرعاية الصحية.'
      },
      {
        question: 'ما هي الأقمشة التي تستخدمونها للزي الموحد للرعاية الصحية؟',
        answer: 'نستخدم مجموعة متنوعة من الأقمشة عالية الأداء المختارة خصيصًا لبيئات الرعاية الصحية. وتشمل هذه مزيج البوليستر والقطن المضاد للميكروبات، والأقمشة الماصة للرطوبة التي تحافظ على راحة الموظفين أثناء المناوبات الطويلة، والمواد المرنة لحرية الحركة، والأقمشة المتخصصة التي تقاوم البقع من المواد الطبية الشائعة. تلبي جميع الأقمشة المعايير الدولية لجودة الزي الطبي الموحد.'
      },
      {
        question: 'كيف أحدد المقاس المناسب للزي الموحد للرعاية الصحية؟',
        answer: 'نقدم أدلة مفصلة للمقاسات لجميع الزي الموحد للرعاية الصحية لدينا. بالنسبة للطلبات بالجملة، يمكننا ترتيب إرسال عينات من المقاسات إلى منشأتك ليجربها الموظفون قبل تقديم الطلب الكامل. نقدم أيضًا خدمات التعديل لضمان المقاس المثالي لجميع الموظفين. فريق خدمة العملاء لدينا متاح للمساعدة في أي أسئلة تتعلق بالمقاسات.'
      },
      {
        question: 'هل تقدمون زياً موحداً متخصصاً لأدوار طبية محددة؟',
        answer: 'نعم، نصمم زياً موحداً متخصصاً لأدوار طبية محددة بما في ذلك طاقم الجراحة وفنيي الأشعة وأطباء الأسنان وموظفي المختبر والمزيد. يأخذ هذا الزي الموحد المتخصص في الاعتبار المتطلبات الفريدة لكل دور، بما في ذلك احتياجات التنقل ومتطلبات الحماية والميزات الوظيفية مثل الجيوب المتخصصة للمعدات.'
      }
    ]
  };
  
  const content = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about our healthcare uniforms'
    },
    ar: {
      title: 'الأسئلة المتكررة',
      subtitle: 'ابحث عن إجابات للأسئلة الشائعة حول الزي الموحد للرعاية الصحية'
    }
  };
  
  const t = content[isArabic ? 'ar' : 'en'];
  const faqList = faqs[isArabic ? 'ar' : 'en'];
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Create structured data for rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqList.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
  
  return (
    <section className="py-16 bg-white" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqList.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
      
      {/* Structured Data for FAQs (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default FAQSection;
