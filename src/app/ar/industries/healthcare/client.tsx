'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

const HealthcareIndustryClientPage = () => {
  const locale = 'ar';
  
  const healthcareIndustryData = {
    title: "أزياء موحدة للرعاية الصحية",
    subtitle: "أزياء احترافية وعملية لمختلف تخصصات ومنشآت الرعاية الصحية في المملكة العربية السعودية",
    heroImage: "/images/healthcare/healthcare-hero.jpg",
    introduction: [
      "في قطاع الرعاية الصحية بالمملكة العربية السعودية، تعد الأزياء الموحدة المهنية أكثر من مجرد ملابس - فهي تلعب دورًا محوريًا في تعزيز التعرف على المهنيين الصحيين، وضمان النظافة، وتعزيز ثقة المرضى.",
      "نقدم في يونيوم مجموعة شاملة من حلول الأزياء الموحدة لمختلف التخصصات في قطاع الرعاية الصحية، بدءًا من الأطباء والتمريض وحتى الفنيين والإداريين وفرق الدعم.",
      "بفضل سنوات خبرتنا في تجهيز منشآت الرعاية الصحية في جميع أنحاء المملكة، فإننا نفهم أهمية توفير ملابس تلبي المعايير الصارمة للنظافة وسهولة الحركة والراحة أثناء المناوبات الطويلة."
    ],
    benefits: [
    {
      title: 'الهوية المهنية',
      description: 'تساعد الأزياء المميزة على التعرف الفوري على دور ومسؤوليات كل فرد في فريق الرعاية الصحية',
        icon: '/icons/role-identification.svg'
    },
    {
      title: 'الوقاية والسلامة',
      description: 'توفر الحماية من التعرض للمواد الحيوية والسوائل والمواد الكيميائية المحتملة في بيئة الرعاية الصحية',
        icon: '/icons/safety.svg'
    },
    {
      title: 'راحة المريض',
      description: 'يساعد الزي الموحد المهني على طمأنة المرضى وتعزيز الثقة في مقدمي الرعاية الصحية',
        icon: '/icons/patient-comfort.svg'
    },
    {
      title: 'العملية والراحة',
      description: 'مصممة للتحرك بحرية والراحة خلال المناوبات الطويلة والحركة المستمرة',
        icon: '/icons/comfort.svg'
    },
    {
      title: 'سهولة التنظيف',
      description: 'مصنوعة من أقمشة قابلة للغسل بسهولة وتتحمل التعقيم المتكرر والتطهير القوي',
        icon: '/icons/cleaning.svg'
    },
    {
      title: 'تعزيز المعنويات',
      description: 'تساهم الأزياء العصرية والمناسبة في تحسين الروح المعنوية للموظفين والجو العام في المنشأة',
        icon: '/icons/morale.svg'
      }
    ],
    products: [
      {
        id: '1',
        name: 'أزياء التمريض',
        description: 'أزياء حديثة ومريحة للتمريض بتصاميم مصممة خصيصًا للرعاية المباشرة للمرضى',
        image: '/images/healthcare/nurse-uniforms.jpg',
        href: '/ar/shop/medical-scrubs/nursing-scrubs'
      },
      {
        id: '2',
        name: 'معاطف المختبر الطبية',
        description: 'معاطف مختبر عالية الجودة للأطباء والصيادلة وموظفي المختبرات',
        image: '/images/healthcare/lab-coats.jpg',
        href: '/ar/shop/medical-scrubs/medical-lab-coats'
      },
      {
        id: '3',
        name: 'أزياء العمليات الجراحية',
        description: 'ملابس معقمة للاستخدام في غرف العمليات، مصممة للراحة خلال الإجراءات الطويلة',
        image: '/images/healthcare/surgical-scrubs.jpg',
        href: '/ar/shop/medical-scrubs/surgical-scrubs'
      }
    ],
    testimonials: [
      {
        id: '1',
        quote: 'ساعدت يونيوم في تحسين صورة طاقم المستشفى المهنية بشكل كبير. الأزياء عالية الجودة والمريحة، وقد تلقينا تعليقات إيجابية من المرضى والزوار حول المظهر الموحد الاحترافي.',
        author: 'د. محمد الشمري',
        position: 'مدير المستشفى',
        company: 'مستشفى الرعاية المتكاملة'
      }
    ],
    cta: {
      title: 'ارتقِ بمستوى الرعاية الصحية من خلال أزياء مهنية عالية الجودة',
      description: 'تواصل معنا اليوم للحصول على استشارة مجانية حول كيفية تحسين برنامج الأزياء الموحدة في منشأتك الصحية.',
      buttonText: 'طلب استشارة مجانية',
      buttonUrl: '/ar/contact'
    }
  };
  
  // Pass skipMainLayout=true to prevent duplicate headers/footers
  return <IndustryPageLayout locale={locale} industryData={healthcareIndustryData} skipMainLayout={true} />;
};

export default HealthcareIndustryClientPage; 