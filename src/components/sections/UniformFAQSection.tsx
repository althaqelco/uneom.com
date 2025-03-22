import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "Where can I buy high-quality uniforms in Saudi Arabia?",
    answer: "UNEOM is Saudi Arabia's leading uniform supplier with premium uniforms available in Riyadh, Jeddah, Dammam, and all major cities. We offer healthcare, corporate, hospitality, and industrial uniforms with nationwide delivery."
  },
  {
    question: "What are the best healthcare uniforms available in Riyadh?",
    answer: "UNEOM offers premium healthcare uniforms in Riyadh that combine durability, comfort, and professional appearance. Our medical scrubs and uniforms are designed specifically for healthcare professionals in Saudi Arabian hospitals and clinics."
  },
  {
    question: "How can I customize corporate uniforms for my company in Jeddah?",
    answer: "UNEOM provides complete corporate uniform customization services in Jeddah. Our team works with you to design uniforms that match your brand identity, including custom embroidery, color selection, and material choices to ensure your staff represents your company professionally."
  },
  {
    question: "What are the most durable industrial uniforms available in Dammam?",
    answer: "UNEOM's industrial uniforms in Dammam are engineered for maximum durability in harsh environments. Our industrial workwear features reinforced stitching, high-quality fabrics that resist tears and stains, and designs that comply with Saudi safety regulations."
  },
  {
    question: "How quickly can I get hospitality uniforms delivered in Saudi Arabia?",
    answer: "UNEOM offers fast delivery of hospitality uniforms throughout Saudi Arabia. Standard delivery takes 3-5 business days, while express delivery options are available for urgent requirements. We maintain large inventory levels of hospitality uniforms to ensure quick fulfillment for hotels and restaurants across all Saudi cities."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-lg"
        onClick={onClick}
      >
        <span>{question}</span>
        {isOpen ? <FiChevronUp className="text-primary" /> : <FiChevronDown className="text-primary" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-gray-600"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const UniformFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeading
          subtitle="Find answers to common questions about our premium uniform collections available across Saudi Arabia"
          centered
        >
          Frequently Asked Questions About Uniforms in Saudi Arabia
        </SectionHeading>
        <div className="max-w-3xl mx-auto mt-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UniformFAQSection; 