import React from 'react';

const UniformFAQData = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I buy high-quality uniforms in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UNEOM is Saudi Arabia's leading uniform supplier with premium uniforms available in Riyadh, Jeddah, Dammam, and all major cities. We offer healthcare, corporate, hospitality, and industrial uniforms with nationwide delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best healthcare uniforms available in Riyadh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UNEOM offers premium healthcare uniforms in Riyadh that combine durability, comfort, and professional appearance. Our medical scrubs and uniforms are designed specifically for healthcare professionals in Saudi Arabian hospitals and clinics."
        }
      },
      {
        "@type": "Question",
        "name": "How can I customize corporate uniforms for my company in Jeddah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UNEOM provides complete corporate uniform customization services in Jeddah. Our team works with you to design uniforms that match your brand identity, including custom embroidery, color selection, and material choices to ensure your staff represents your company professionally."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most durable industrial uniforms available in Dammam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UNEOM's industrial uniforms in Dammam are engineered for maximum durability in harsh environments. Our industrial workwear features reinforced stitching, high-quality fabrics that resist tears and stains, and designs that comply with Saudi safety regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get hospitality uniforms delivered in Saudi Arabia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UNEOM offers fast delivery of hospitality uniforms throughout Saudi Arabia. Standard delivery takes 3-5 business days, while express delivery options are available for urgent requirements. We maintain large inventory levels of hospitality uniforms to ensure quick fulfillment for hotels and restaurants across all Saudi cities."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};

export default UniformFAQData; 