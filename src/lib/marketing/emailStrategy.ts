/**
 * Email Marketing Strategy for UNEOM Website
 * This file contains email marketing templates, strategies, and utilities
 * to help with digital marketing efforts in both English and Arabic.
 */

export interface EmailTemplate {
  subject: string;
  preheader: string;
  heading: string;
  body: string;
  cta: {
    text: string;
    url: string;
  };
}

export interface EmailCampaign {
  name: string;
  description: string;
  audience: string[];
  templates: {
    en: EmailTemplate;
    ar: EmailTemplate;
  };
  frequency: 'one-time' | 'weekly' | 'monthly' | 'quarterly';
  triggerEvent?: string;
}

/**
 * Email marketing campaigns for different purposes
 */
export const emailCampaigns: Record<string, EmailCampaign> = {
  welcome: {
    name: 'Welcome Series',
    description: 'A series of emails to welcome new subscribers and introduce them to UNEOM services',
    audience: ['new_subscribers'],
    templates: {
      en: {
        subject: 'Welcome to UNEOM - Saudi Arabia\'s Leading Uniform Provider',
        preheader: 'Discover our professional uniform solutions for your business',
        heading: 'Welcome to UNEOM',
        body: `
          <p>Thank you for subscribing to UNEOM, Saudi Arabia's leading provider of professional uniforms and scrubs.</p>
          <p>We specialize in providing high-quality uniform solutions for healthcare, aviation, hospitality, and corporate sectors across the Kingdom.</p>
          <p>Here's what you can expect from us:</p>
          <ul>
            <li>Industry-specific uniform insights</li>
            <li>Exclusive offers for businesses</li>
            <li>Latest trends in professional attire</li>
            <li>Uniform management best practices</li>
          </ul>
          <p>We look forward to helping you elevate your organization's professional image.</p>
        `,
        cta: {
          text: 'Explore Our Services',
          url: 'https://uneom.com/services'
        }
      },
      ar: {
        subject: 'مرحباً بك في يونيوم - المزود الرائد للزي الموحد في المملكة العربية السعودية',
        preheader: 'اكتشف حلول الزي المهني لعملك',
        heading: 'مرحباً بك في يونيوم',
        body: `
          <p>شكراً لاشتراكك في يونيوم، المزود الرائد للزي المهني والملابس الطبية في المملكة العربية السعودية.</p>
          <p>نحن متخصصون في توفير حلول زي موحد عالية الجودة لقطاعات الرعاية الصحية والطيران والضيافة والشركات في جميع أنحاء المملكة.</p>
          <p>إليك ما يمكنك توقعه منا:</p>
          <ul>
            <li>رؤى متخصصة حول الزي الموحد لكل قطاع</li>
            <li>عروض حصرية للشركات</li>
            <li>أحدث اتجاهات الملابس المهنية</li>
            <li>أفضل ممارسات إدارة الزي الموحد</li>
          </ul>
          <p>نتطلع إلى مساعدتك في الارتقاء بالصورة المهنية لمؤسستك.</p>
        `,
        cta: {
          text: 'استكشف خدماتنا',
          url: 'https://uneom.com/ar/services'
        }
      }
    },
    frequency: 'one-time',
    triggerEvent: 'newsletter_signup'
  },
  
  monthlyInsights: {
    name: 'Monthly Uniform Insights',
    description: 'Monthly newsletter with industry insights, trends, and tips for uniform management',
    audience: ['all_subscribers', 'existing_customers'],
    templates: {
      en: {
        subject: 'UNEOM Monthly: Latest Uniform Trends and Industry Insights',
        preheader: 'Discover this month\'s uniform industry updates and expert tips',
        heading: 'Uniform Industry Insights',
        body: `
          <p>Stay updated with the latest trends and insights in the professional uniform industry.</p>
          <p>This month's highlights:</p>
          <ul>
            <li>Emerging fabric technologies for Saudi climate</li>
            <li>Uniform program management best practices</li>
            <li>Spotlight: Healthcare uniform innovations</li>
            <li>Customer success story: [Company Name]</li>
          </ul>
          <p>Read our latest blog posts for more detailed insights and expert advice.</p>
        `,
        cta: {
          text: 'Read Our Blog',
          url: 'https://uneom.com/blog'
        }
      },
      ar: {
        subject: 'نشرة يونيوم الشهرية: أحدث اتجاهات الزي الموحد ورؤى الصناعة',
        preheader: 'اكتشف تحديثات صناعة الزي الموحد ونصائح الخبراء لهذا الشهر',
        heading: 'رؤى صناعة الزي الموحد',
        body: `
          <p>ابق على اطلاع بأحدث الاتجاهات والرؤى في صناعة الزي المهني.</p>
          <p>أبرز ما في هذا الشهر:</p>
          <ul>
            <li>تقنيات الأقمشة الناشئة المناسبة للمناخ السعودي</li>
            <li>أفضل ممارسات إدارة برنامج الزي الموحد</li>
            <li>تسليط الضوء: ابتكارات الزي الطبي</li>
            <li>قصة نجاح العملاء: [اسم الشركة]</li>
          </ul>
          <p>اقرأ أحدث منشورات مدونتنا للحصول على رؤى أكثر تفصيلاً ونصائح الخبراء.</p>
        `,
        cta: {
          text: 'قراءة مدونتنا',
          url: 'https://uneom.com/ar/blog'
        }
      }
    },
    frequency: 'monthly'
  },
  
  quoteFollowUp: {
    name: 'Quote Request Follow-Up',
    description: 'Follow-up emails for customers who have requested a quote',
    audience: ['quote_requesters'],
    templates: {
      en: {
        subject: 'Your UNEOM Uniform Quote - Next Steps',
        preheader: 'Thank you for your interest in UNEOM uniform solutions',
        heading: 'Thank You for Your Quote Request',
        body: `
          <p>Thank you for requesting a quote from UNEOM for your uniform needs.</p>
          <p>Our team is working on preparing a customized solution based on your requirements. You can expect to receive your detailed quote within 48 hours.</p>
          <p>In the meantime, you might be interested in exploring:</p>
          <ul>
            <li>Our industry-specific uniform solutions</li>
            <li>Custom design and branding options</li>
            <li>Uniform program management services</li>
            <li>Client testimonials and case studies</li>
          </ul>
          <p>If you have any questions or need additional information, please don't hesitate to contact us.</p>
        `,
        cta: {
          text: 'Explore Our Solutions',
          url: 'https://uneom.com/industries'
        }
      },
      ar: {
        subject: 'عرض سعر الزي الموحد من يونيوم - الخطوات التالية',
        preheader: 'شكراً لاهتمامك بحلول الزي الموحد من يونيوم',
        heading: 'شكراً لطلبك عرض السعر',
        body: `
          <p>شكراً لطلبك عرض سعر من يونيوم لاحتياجات الزي الموحد الخاصة بك.</p>
          <p>يعمل فريقنا على إعداد حل مخصص بناءً على متطلباتك. يمكنك توقع استلام عرض السعر التفصيلي خلال 48 ساعة.</p>
          <p>في غضون ذلك، قد تكون مهتماً باستكشاف:</p>
          <ul>
            <li>حلول الزي الموحد المخصصة لكل قطاع</li>
            <li>خيارات التصميم المخصص والعلامة التجارية</li>
            <li>خدمات إدارة برنامج الزي الموحد</li>
            <li>شهادات العملاء ودراسات الحالة</li>
          </ul>
          <p>إذا كان لديك أي أسئلة أو تحتاج إلى معلومات إضافية، فلا تتردد في الاتصال بنا.</p>
        `,
        cta: {
          text: 'استكشف حلولنا',
          url: 'https://uneom.com/ar/industries'
        }
      }
    },
    frequency: 'one-time',
    triggerEvent: 'quote_request'
  },
  
  seasonalPromotion: {
    name: 'Seasonal Promotions',
    description: 'Quarterly promotional campaigns highlighting seasonal offers and new collections',
    audience: ['all_subscribers', 'existing_customers'],
    templates: {
      en: {
        subject: 'Exclusive Seasonal Offers on Professional Uniforms | UNEOM',
        preheader: 'Limited-time offers on our premium uniform collections',
        heading: 'Seasonal Uniform Collection',
        body: `
          <p>Introducing our latest seasonal collection of professional uniforms, designed specifically for Saudi Arabia's climate and business environment.</p>
          <p>For a limited time, we're offering:</p>
          <ul>
            <li>15% discount on bulk orders (50+ units)</li>
            <li>Free customization on selected uniform lines</li>
            <li>Complimentary uniform program consultation</li>
            <li>Extended warranty on premium collections</li>
          </ul>
          <p>These offers are valid until [End Date]. Contact our team to take advantage of these seasonal promotions.</p>
        `,
        cta: {
          text: 'View Seasonal Offers',
          url: 'https://uneom.com/promotions'
        }
      },
      ar: {
        subject: 'عروض موسمية حصرية على الزي المهني | يونيوم',
        preheader: 'عروض لفترة محدودة على مجموعات الزي الموحد المتميزة',
        heading: 'مجموعة الزي الموحد الموسمية',
        body: `
          <p>نقدم لكم أحدث مجموعتنا الموسمية من الزي المهني، المصممة خصيصاً لمناخ المملكة العربية السعودية وبيئة الأعمال.</p>
          <p>لفترة محدودة، نقدم:</p>
          <ul>
            <li>خصم 15% على طلبات الجملة (50+ وحدة)</li>
            <li>تخصيص مجاني على خطوط الزي الموحد المختارة</li>
            <li>استشارة مجانية لبرنامج الزي الموحد</li>
            <li>ضمان ممتد على المجموعات المتميزة</li>
          </ul>
          <p>هذه العروض سارية حتى [تاريخ الانتهاء]. اتصل بفريقنا للاستفادة من هذه العروض الموسمية.</p>
        `,
        cta: {
          text: 'عرض العروض الموسمية',
          url: 'https://uneom.com/ar/promotions'
        }
      }
    },
    frequency: 'quarterly'
  }
};

/**
 * Get an email campaign by its identifier
 * @param campaignId - Campaign identifier
 * @returns - Email campaign or null if not found
 */
export const getEmailCampaign = (campaignId: string): EmailCampaign | null => {
  return emailCampaigns[campaignId] || null;
};

/**
 * Get an email template for a specific campaign and locale
 * @param campaignId - Campaign identifier
 * @param locale - Language code ('en' or 'ar')
 * @returns - Email template or null if not found
 */
export const getEmailTemplate = (
  campaignId: string,
  locale: 'en' | 'ar' = 'en'
): EmailTemplate | null => {
  const campaign = getEmailCampaign(campaignId);
  if (!campaign) return null;
  
  return campaign.templates[locale];
};

/**
 * Generate a personalized email body by replacing placeholders with actual values
 * @param template - Email template
 * @param replacements - Object with placeholder replacements
 * @returns - Personalized email body
 */
export const personalizeEmail = (
  template: EmailTemplate,
  replacements: Record<string, string>
): EmailTemplate => {
  let personalizedBody = template.body;
  let personalizedSubject = template.subject;
  
  // Replace placeholders in body and subject
  Object.entries(replacements).forEach(([key, value]) => {
    const placeholder = `[${key}]`;
    personalizedBody = personalizedBody.replace(new RegExp(placeholder, 'g'), value);
    personalizedSubject = personalizedSubject.replace(new RegExp(placeholder, 'g'), value);
  });
  
  return {
    ...template,
    body: personalizedBody,
    subject: personalizedSubject
  };
}; 