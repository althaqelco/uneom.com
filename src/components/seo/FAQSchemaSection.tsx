/**
 * FAQ Schema Section Component
 * 
 * This component renders FAQ content with proper semantic markup and
 * includes Schema.org structured data for rich snippets in search results.
 * 
 * It helps with:
 * 1. Implementing FAQ rich snippets to improve SERP visibility
 * 2. Structuring content for better accessibility and usability
 * 3. Targeting long-tail keywords via Q&A content
 * 4. Providing consistent FAQ formatting across the site
 */

import React from 'react';
import { useSafeRouter } from '@/lib/hooks/useSafeRouter';
import StructuredData from '@/components/seo/StructuredData';
import { generateFAQSchema } from '@/lib/seo/schema-generator';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaSectionProps {
  faqs: FAQItem[];
  title?: string;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
}

const FAQSchemaSection: React.FC<FAQSchemaSectionProps> = ({
  faqs,
  title,
  className = 'my-8',
  itemClassName = 'mb-4 border-b pb-4',
  titleClassName = 'text-2xl font-bold mb-6',
  questionClassName = 'text-lg font-semibold mb-2',
  answerClassName = 'text-gray-700'
}) => {
  const router = useSafeRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';
  
  // Don't render if no FAQs provided
  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Generate FAQ schema
  const faqSchema = generateFAQSchema(
    faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  );
  
  // Get default title based on locale
  const defaultTitle = isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions';
  const sectionTitle = title || defaultTitle;
  
  return (
    <section 
      className={`faq-section ${className}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
      aria-labelledby="faq-heading"
    >
      {/* Add structured data for FAQ */}
      <StructuredData
        type="FAQPage"
        data={faqSchema}
        language={locale}
      />
      
      <h2 id="faq-heading" className={titleClassName}>{sectionTitle}</h2>
      
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={itemClassName}
            itemScope 
            itemType="https://schema.org/Question"
          >
            <h3 
              className={questionClassName} 
              itemProp="name"
            >
              {faq.question}
            </h3>
            
            <div 
              className={answerClassName} 
              itemScope 
              itemProp="acceptedAnswer" 
              itemType="https://schema.org/Answer"
            >
              <div itemProp="text">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Example FAQ data for corporate uniforms
export const getCorporateUniformFAQs = (locale: string = 'en'): FAQItem[] => {
  if (locale === 'ar') {
    return [
      {
        question: 'كيف يمكنني طلب أزياء موحدة للشركة؟',
        answer: 'يمكنك طلب أزياء موحدة للشركة من خلال ملء نموذج الطلب عبر الإنترنت أو الاتصال بنا مباشرة. سيقوم فريقنا بترتيب استشارة لفهم احتياجاتك والمساعدة في اختيار التصاميم والأقمشة المناسبة لبيئة العمل الخاصة بك.'
      },
      {
        question: 'كم من الوقت يستغرق إنتاج الأزياء الموحدة للشركات؟',
        answer: 'تعتمد أوقات الإنتاج على حجم الطلب والتصاميم المحددة. بشكل عام، يمكن أن تتراوح من 2-4 أسابيع للطلبات القياسية و 4-8 أسابيع للأزياء المخصصة بالكامل. نحن نقدم أيضًا خدمات متسارعة للمواعيد النهائية العاجلة.'
      },
      {
        question: 'هل توفرون خدمات تصميم مخصصة للأزياء الموحدة للشركات؟',
        answer: 'نعم، لدينا فريق متخصص من المصممين المحترفين الذين يمكنهم إنشاء أزياء موحدة مخصصة تتوافق مع هوية علامتك التجارية. نحن نقدم خدمات التصميم الكاملة بدءًا من المفهوم الأولي وحتى الإنتاج النهائي.'
      },
      {
        question: 'ما هي أنواع الأقمشة التي توصون بها للأزياء الموحدة في المناخ السعودي؟',
        answer: 'للمناخ السعودي، نوصي بالأقمشة التي تتميز بالتنفس مثل مزيج القطن (بنسبة 60% قطن و 40% بوليستر) للملابس اليومية، والأقمشة المعالجة بتقنية الترطيب للبيئات الخارجية. نستخدم أيضًا أقمشة متخصصة مثل CoolMax و Tencel للراحة القصوى في درجات الحرارة المرتفعة.'
      },
      {
        question: 'هل يمكنكم توفير أزياء موحدة لموظفين بمقاسات غير قياسية؟',
        answer: 'نعم، نحن نقدم خدمات تفصيل للمقاسات الخاصة. يمكننا استيعاب جميع أنواع الجسم والأحجام لضمان حصول جميع الموظفين على زي مريح ومناسب. كما نقدم خدمة قياسات في الموقع للشركات الكبيرة.'
      }
    ];
  }
  
  return [
    {
      question: 'How can I order corporate uniforms?',
      answer: 'You can order corporate uniforms by filling out our online request form or contacting us directly. Our team will arrange a consultation to understand your needs and help select designs and fabrics appropriate for your work environment.'
    },
    {
      question: 'How long does it take to produce corporate uniforms?',
      answer: 'Production times depend on order volume and specific designs. Generally, they can range from 2-4 weeks for standard orders and 4-8 weeks for fully customized uniforms. We also offer expedited services for urgent deadlines.'
    },
    {
      question: 'Do you provide custom design services for corporate uniforms?',
      answer: 'Yes, we have a specialized team of professional designers who can create custom uniforms that align with your brand identity. We offer full design services from initial concept to final production.'
    },
    {
      question: 'What types of fabrics do you recommend for uniforms in the Saudi climate?',
      answer: 'For the Saudi climate, we recommend breathable fabrics such as cotton blends (60% cotton, 40% polyester) for everyday wear, and moisture-wicking treated fabrics for outdoor environments. We also use specialized fabrics like CoolMax and Tencel for maximum comfort in high temperatures.'
    },
    {
      question: 'Can you provide uniforms for employees with non-standard sizes?',
      answer: 'Yes, we offer tailoring services for special sizes. We can accommodate all body types and sizes to ensure all employees receive comfortable and proper-fitting uniforms. We also provide on-site measurement services for large companies.'
    }
  ];
};

// Example FAQ data for healthcare uniforms
export const getHealthcareUniformFAQs = (locale: string = 'en'): FAQItem[] => {
  if (locale === 'ar') {
    return [
      {
        question: 'ما الذي يجعل الأزياء الطبية من يونيوم مميزة؟',
        answer: 'تتميز أزياؤنا الطبية بأقمشة مضادة للميكروبات، ومقاومة للبقع، وسهلة العناية. تم تصميمها خصيصًا للبيئة الصحية السعودية مع مراعاة الراحة خلال المناوبات الطويلة وتلبية معايير النظافة الصارمة.'
      },
      {
        question: 'هل أزياؤكم الطبية متوافقة مع معايير وزارة الصحة السعودية؟',
        answer: 'نعم، جميع أزيائنا الطبية متوافقة تمامًا مع إرشادات وزارة الصحة السعودية ومعايير الصناعة العالمية. نحن نضمن أن تكون منتجاتنا متوافقة مع متطلبات الجودة والسلامة للعاملين في مجال الرعاية الصحية.'
      },
      {
        question: 'كيف يمكننا الحفاظ على نظافة الأزياء الطبية بشكل فعال؟',
        answer: 'نوصي بالغسل بالماء الدافئ (60 درجة مئوية) باستخدام منظف خالٍ من العطور. يمكن استخدام المبيضات القائمة على الكلور للأقمشة البيضاء، بينما يجب تجنبها للألوان. تجنب استخدام منعم الأقمشة لأنه قد يقلل من فعالية خصائص مقاومة البقع والميكروبات.'
      },
      {
        question: 'هل تقدمون برامج استبدال للمستشفيات والعيادات الكبيرة؟',
        answer: 'نعم، لدينا برامج استبدال مخصصة للمؤسسات الصحية الكبيرة. يمكننا إنشاء جدول تجديد دوري يضمن أن يكون لدى موظفيك دائمًا أزياء عالية الجودة وتعكس الاحترافية. اتصل بفريق المبيعات لدينا لمناقشة الخيارات المتاحة لمؤسستك.'
      },
      {
        question: 'ما هي خيارات التخصيص المتاحة للأزياء الطبية؟',
        answer: 'نقدم مجموعة واسعة من خيارات التخصيص بما في ذلك التطريز بشعار المستشفى أو العيادة، والطباعة على الأزياء، وتصميمات الجيوب المخصصة، وتفاصيل الألوان المميزة، والقصات المختلفة. يمكننا أيضًا تطوير ألوان مخصصة تتطابق مع هوية علامتك التجارية.'
      }
    ];
  }
  
  return [
    {
      question: 'What makes UNEOM medical uniforms special?',
      answer: 'Our medical uniforms feature antimicrobial fabrics, stain resistance, and easy care properties. They are specifically designed for the Saudi healthcare environment with consideration for comfort during long shifts and meeting stringent hygiene standards.'
    },
    {
      question: 'Are your medical uniforms compliant with Saudi Ministry of Health standards?',
      answer: 'Yes, all our medical uniforms are fully compliant with Saudi Ministry of Health guidelines and global industry standards. We ensure our products meet quality and safety requirements for healthcare professionals.'
    },
    {
      question: 'How can we effectively maintain the cleanliness of medical uniforms?',
      answer: 'We recommend washing in warm water (60°C) using fragrance-free detergent. Chlorine-based bleach can be used for white fabrics, while it should be avoided for colors. Avoid fabric softeners as they may reduce the effectiveness of stain and microbial resistant properties.'
    },
    {
      question: 'Do you offer replacement programs for large hospitals and clinics?',
      answer: 'Yes, we have custom replacement programs for large healthcare institutions. We can create a periodic refresh schedule ensuring your staff always has high-quality uniforms that reflect professionalism. Contact our sales team to discuss options for your institution.'
    },
    {
      question: 'What customization options are available for medical uniforms?',
      answer: 'We offer a wide range of customization options including embroidery with hospital or clinic logos, uniform printing, custom pocket designs, color accent details, and different cuts. We can also develop custom colors to match your brand identity.'
    }
  ];
};

export default FAQSchemaSection;
