/**
 * Corporate Uniforms FAQ Section
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
        question: 'What types of corporate uniforms does UNEOM offer?',
        answer: 'UNEOM offers a comprehensive range of corporate uniforms including executive suits, business shirts, corporate blazers, front desk uniforms, business trousers, and corporate accessories. All our products can be customized to match your brand identity and specific requirements.'
      },
      {
        question: 'How can corporate uniforms benefit my company?',
        answer: 'Corporate uniforms provide numerous benefits including strengthened brand identity, a consistent professional image, increased employee comfort, improved durability compared to regular business attire, and customization options for different departments or positions. They also promote team unity and make employees easily identifiable to customers.'
      },
      {
        question: 'Can UNEOM customize uniforms with our company logo and colors?',
        answer: 'Yes, customization is one of our specialties. We can incorporate your company logo, colors, and other brand elements into your corporate uniforms. This includes embroidery, screen printing, custom buttons, colored stitching, and other personalization options to ensure your uniforms perfectly represent your brand.'
      },
      {
        question: 'What fabrics do you use for corporate uniforms?',
        answer: 'We use a variety of high-quality fabrics selected for comfort, durability, and professional appearance. Our options include premium wool blends for suits and blazers, cotton-polyester blends for shirts that minimize wrinkling, stretch fabrics for comfort, and breathable materials suitable for Saudi Arabia\'s climate. All fabrics undergo quality testing to ensure they maintain their appearance after repeated washing.'
      },
      {
        question: 'How long does it take to fulfill a corporate uniform order?',
        answer: 'The timeline depends on the order size, customization requirements, and current production schedule. Typically, standard orders are fulfilled within 3-4 weeks. Custom designs or large volume orders may take 5-6 weeks. Rush orders can be accommodated in some cases with an additional fee. We\'ll provide a specific timeframe when you place your order.'
      },
      {
        question: 'Do you offer uniform maintenance or replacement programs?',
        answer: 'Yes, we offer comprehensive uniform management programs that include regular maintenance, repairs, and scheduled replacements. These programs help extend the life of your uniforms while ensuring your team always looks professional. We can also provide care guidelines and arrange for professional cleaning services if needed.'
      }
    ],
    ar: [
      {
        question: 'ما هي أنواع الزي الموحد للشركات التي تقدمها يونيوم؟',
        answer: 'تقدم يونيوم مجموعة شاملة من الزي الموحد للشركات بما في ذلك البدلات التنفيذية وقمصان العمل والسترات الرسمية وزي موحد لمكتب الاستقبال والبناطيل الرسمية وإكسسوارات الشركات. يمكن تخصيص جميع منتجاتنا لتتناسب مع هوية علامتك التجارية ومتطلباتك الخاصة.'
      },
      {
        question: 'كيف يمكن أن يفيد الزي الموحد للشركات شركتي؟',
        answer: 'يوفر الزي الموحد للشركات العديد من الفوائد بما في ذلك تعزيز هوية العلامة التجارية، وصورة احترافية متسقة، وزيادة راحة الموظفين، وتحسين المتانة مقارنة بملابس العمل العادية، وخيارات التخصيص لمختلف الإدارات أو المناصب. كما أنها تعزز وحدة الفريق وتجعل الموظفين يمكن تمييزهم بسهولة من قبل العملاء.'
      },
      {
        question: 'هل يمكن ليونيوم تخصيص الزي الموحد بشعار وألوان شركتنا؟',
        answer: 'نعم، التخصيص هو أحد تخصصاتنا. يمكننا دمج شعار شركتك وألوانها وعناصر العلامة التجارية الأخرى في الزي الموحد للشركات. يشمل ذلك التطريز والطباعة على الشاشة والأزرار المخصصة والخياطة الملونة وخيارات التخصيص الأخرى لضمان أن الزي الموحد يمثل علامتك التجارية بشكل مثالي.'
      },
      {
        question: 'ما هي الأقمشة التي تستخدمونها للزي الموحد للشركات؟',
        answer: 'نستخدم مجموعة متنوعة من الأقمشة عالية الجودة المختارة للراحة والمتانة والمظهر المهني. تشمل خياراتنا مزيج الصوف الممتاز للبدلات والسترات، ومزيج القطن والبوليستر للقمصان التي تقلل من التجعد، والأقمشة المرنة للراحة، والمواد القابلة للتنفس المناسبة لمناخ المملكة العربية السعودية. تخضع جميع الأقمشة لاختبار الجودة للتأكد من أنها تحافظ على مظهرها بعد الغسيل المتكرر.'
      },
      {
        question: 'كم من الوقت يستغرق تنفيذ طلب الزي الموحد للشركات؟',
        answer: 'يعتمد الجدول الزمني على حجم الطلب ومتطلبات التخصيص وجدول الإنتاج الحالي. عادةً، يتم تنفيذ الطلبات القياسية في غضون 3-4 أسابيع. قد تستغرق التصميمات المخصصة أو طلبات الحجم الكبير 5-6 أسابيع. يمكن استيعاب الطلبات العاجلة في بعض الحالات برسوم إضافية. سنقدم إطارًا زمنيًا محددًا عند تقديم طلبك.'
      },
      {
        question: 'هل تقدمون برامج صيانة أو استبدال للزي الموحد؟',
        answer: 'نعم، نقدم برامج شاملة لإدارة الزي الموحد تشمل الصيانة المنتظمة والإصلاحات والاستبدالات المجدولة. تساعد هذه البرامج في إطالة عمر الزي الموحد الخاص بك مع ضمان أن فريقك يبدو دائمًا محترفًا. يمكننا أيضًا تقديم إرشادات العناية وترتيب خدمات التنظيف المهنية إذا لزم الأمر.'
      }
    ]
  };
  
  const content = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about our corporate uniforms'
    },
    ar: {
      title: 'الأسئلة المتكررة',
      subtitle: 'ابحث عن إجابات للأسئلة الشائعة حول الزي الموحد للشركات'
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
