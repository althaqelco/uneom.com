'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SEO from '@/components/SEO';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function ArabicFAQPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    // الأسئلة العامة
    {
      id: 'general-1',
      category: 'general',
      question: 'ما هي أنواع الزي الموحد التي تصنعها يونيوم؟',
      answer: 'تختص يونيوم في تصنيع الأزياء الموحدة المتميزة للرعاية الصحية (الزي الطبي، معاطف المختبر)، الطيران (أزياء الطيارين وطاقم الطائرة)، الضيافة (أزياء الفنادق والمطاعم)، الشركات (الملابس التجارية)، التعليم (الزي المدرسي)، والقطاعات الصناعية. نقدم حلولاً مخصصة مصممة لتلبية متطلبات كل صناعة في المملكة العربية السعودية.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'هل تخدمون العملاء خارج المملكة العربية السعودية؟',
      answer: 'بينما تركز يونيوم بشكل أساسي على خدمة السوق السعودي، نعمل أيضاً مع العملاء في جميع أنحاء منطقة مجلس التعاون الخليجي. خبرتنا في تصميم الأزياء الموحدة للمناخ الشرق أوسطي والمتطلبات الثقافية تجعلنا الشريك المثالي للمؤسسات في المنطقة.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'ما الذي يميز يونيوم عن موردي الأزياء الموحدة الآخرين؟',
      answer: 'تتميز يونيوم بفهمها العميق لمتطلبات أماكن العمل السعودية، واختيار الأقمشة المناسبة للمناخ، والحساسية الثقافية في التصميم، والالتزام بالجودة. نقدم خدمات شاملة من الاستشارة الأولية للتصميم حتى التسليم النهائي، مع قدرات التصنيع المحلية وخدمة العملاء المتجاوبة.'
    },

    // عملية الطلب
    {
      id: 'ordering-1',
      category: 'ordering',
      question: 'ما هي الكمية الدنيا لطلب الأزياء الموحدة؟',
      answer: 'تختلف الكميات الدنيا للطلب حسب نوع المنتج ومستوى التخصيص. للأزياء الموحدة القياسية، الحد الأدنى عادة 50 قطعة لكل تصميم. للأزياء الموحدة المخصصة بالكامل مع تصاميم فريدة، قد تكون الحدود الدنيا أعلى. اتصل بفريق المبيعات لدينا للحصول على المتطلبات المحددة بناءً على احتياجاتك.'
    },
    {
      id: 'ordering-2',
      category: 'ordering',
      question: 'كم من الوقت يستغرق استلام طلب الأزياء الموحدة؟',
      answer: 'طلبات الأزياء الموحدة القياسية تستغرق عادة 2-4 أسابيع للإنتاج والتسليم. الأزياء الموحدة المصممة خصيصاً تتطلب 4-8 أسابيع حسب التعقيد وحجم الطلب. يمكن استيعاب الطلبات العاجلة مقابل رسوم إضافية. نقدم جداول زمنية مفصلة أثناء عملية التسعير.'
    },
    {
      id: 'ordering-3',
      category: 'ordering',
      question: 'هل يمكنني طلب عينات قبل تقديم طلب كبير؟',
      answer: 'نعم، نشجع العملاء على طلب عينات لتقييم جودة القماش والمقاس والتصميم. يمكن تقديم طلبات العينات من خلال نموذج الاتصال أو بالاتصال بمكاتبنا. قد تطبق تكاليف العينات ولكن غالباً ما تُحتسب ضمن طلبك النهائي.'
    },

    // التخصيص
    {
      id: 'customization-1',
      category: 'customization',
      question: 'هل يمكنكم إضافة شعار شركتنا على الأزياء الموحدة؟',
      answer: 'بالطبع! نقدم خيارات علامة تجارية متنوعة تشمل التطريز، الطباعة الحريرية، النقل الحراري، والملصقات المنسوجة. يعمل فريق التصميم معك لتحديد أفضل موضع وطريقة لشعارك لضمان المتانة والمظهر المهني.'
    },
    {
      id: 'customization-2',
      category: 'customization',
      question: 'هل تقدمون ألواناً مخصصة لتتناسب مع علامتنا التجارية؟',
      answer: 'نعم، يمكننا مطابقة ألوان العلامة التجارية المحددة لأزيائكم الموحدة. خدمة مطابقة الألوان لدينا تضمن أن تتماشى أزياؤكم الموحدة بشكل مثالي مع هويتكم المؤسسية. نعمل مع مراجع ألوان بانتون ويمكننا تقديم عينات ألوان للموافقة قبل الإنتاج.'
    },
    {
      id: 'customization-3',
      category: 'customization',
      question: 'هل يمكنكم تصميم أزياء موحدة تتوافق مع قواعد اللباس الإسلامي؟',
      answer: 'يونيوم لديها خبرة واسعة في تصميم الأزياء الموحدة المحتشمة التي تحترم متطلبات اللباس الإسلامي مع الحفاظ على المظهر المهني. نقدم أكماماً أطول، وخطوط عنق مناسبة، وتصاميم متوافقة مع الحجاب، وتعديلات أخرى لضمان الامتثال الثقافي عبر جميع فئات الأزياء الموحدة.'
    },

    // الجودة والمواد
    {
      id: 'quality-1',
      category: 'quality',
      question: 'ما هي الأقمشة التي تستخدمونها لمناخ المملكة العربية السعودية؟',
      answer: 'نختار أقمشة مناسبة خصيصاً لمناخ المملكة العربية السعودية الحار، تشمل خلطات البوليستر الماصة للرطوبة، وتركيبات القطن والبوليستر القابلة للتنفس، والأقمشة المتخصصة للتبريد. جميع المواد مختبرة للمتانة والراحة والأداء في البيئات عالية الحرارة.'
    },
    {
      id: 'quality-2',
      category: 'quality',
      question: 'هل أزياؤكم الموحدة معتمدة لمعايير السلامة؟',
      answer: 'نعم، أزياء يونيوم الموحدة تلبي معايير السلامة والجودة ذات الصلة بما في ذلك ISO 9001:2015، ومعيار OEKO-TEX Standard 100، وشهادات علامة الجودة السعودية. الأزياء الموحدة الخاصة بالصناعات (الرعاية الصحية، الصناعية) تمتثل لمتطلبات السلامة الإضافية حسب الحاجة.'
    },

    // التسعير والدفع
    {
      id: 'pricing-1',
      category: 'pricing',
      question: 'كيف يتم تحديد تسعير الأزياء الموحدة؟',
      answer: 'يعتمد التسعير على عوامل تشمل نوع القماش، وتعقيد التصميم، ومستوى التخصيص، وكمية الطلب، والجدول الزمني للتسليم. نقدم عروض أسعار مفصلة تفصل جميع التكاليف. تتوفر خصومات الكمية للطلبات الأكبر، ونقدم أسعاراً تنافسية للشراكات طويلة المدى.'
    },
    {
      id: 'pricing-2',
      category: 'pricing',
      question: 'ما هي طرق الدفع التي تقبلونها؟',
      answer: 'تقبل يونيوم طرق دفع متنوعة تشمل التحويلات المصرفية، وخطابات الاعتماد، والحسابات المؤسسية المعتمدة. للطلبات الكبيرة، يمكننا ترتيب شروط دفع مرنة. جميع الأسعار بالريال السعودي مع جداول دفع واضحة مقدمة في عروض الأسعار.'
    }
  ];

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <SEO
        title="الأسئلة الشائعة | يونيوم لتصنيع الأزياء الموحدة"
        description="اعثر على إجابات للأسئلة الشائعة حول خدمات تصنيع الأزياء الموحدة من يونيوم، وعملية الطلب، وخيارات التخصيص، ومعايير الجودة في المملكة العربية السعودية."
        canonicalUrl="https://uneom.com/ar/faq/"
      />

      {/* قسم البطل */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl text-white/90 mb-8">
              اعثر على إجابات للأسئلة الشائعة حول خدمات تصنيع الأزياء الموحدة من يونيوم، وعملية الطلب، ومعايير الجودة.
            </p>
          </div>
        </Container>
      </section>

      {/* محتوى الأسئلة الشائعة */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.id} className="border border-neutral-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-neutral-50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
                  >
                    <svg
                      className={`w-5 h-5 text-neutral-500 transition-transform ${
                        openFAQ === item.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <h3 className="text-lg font-semibold text-neutral-800 pl-4">
                      {item.question}
                    </h3>
                  </button>
                  {openFAQ === item.id && (
                    <div className="px-6 pb-4">
                      <p className="text-neutral-700 leading-relaxed text-right">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">لا تزال لديك أسئلة؟</h2>
            <p className="text-lg text-neutral-700 mb-8">
              متخصصو الأزياء الموحدة لدينا هنا للمساعدة. اتصل بنا للحصول على مساعدة شخصية مع احتياجات الأزياء الموحدة الخاصة بك.
            </p>
            <Link
              href="/ar/contact"
              className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
            >
              اتصل بفريقنا
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}