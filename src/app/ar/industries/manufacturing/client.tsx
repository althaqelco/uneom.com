'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ManufacturingIndustryClientPageAr() {
  const locale = 'ar';
  
  const manufacturingIndustryData = {
    title: "زي موحد للتصنيع وملابس العمل الصناعية في السعودية",
    subtitle: "ملابس عمل صناعية وأزياء موحدة للتصنيع مصممة خصيصًا للمصانع السعودية، تضمان السلامة والمتانة والامتثال للمعايير",
    heroImage: "/images/manufacturing/manufacturing_facility_workers_main.jpg",
    introduction: [
        "في قطاع التصنيع السعودي سريع النمو، تلعب ملابس العمل المهنية دورًا حاسمًا في سلامة مكان العمل، وكفاءة التشغيل، وإظهار هوية صناعية حديثة. تم تصميم حلول أزياء التصنيع الشاملة من يونيم خصيصًا لتلبية المتطلبات الفريدة للمصانع والمنشآت الصناعية السعودية.",
      "من موظفي خطوط الإنتاج ومشغلي الآلات إلى المشرفين وفرق مراقبة الجودة وموظفي الصيانة، نقدم ملابس عمل عالية الجودة تجمع بين الوظائف العملية والحماية القصوى والمظهر المهني.",
      "مع استمرار نمو قطاع التصنيع السعودي بشكل ملحوظ في ظل رؤية 2030، نتشارك مع المصانع والعمليات الصناعية لتطوير برامج أزياء موحدة تعزز سلامة مكان العمل، وترفع من معنويات الموظفين."
      ],
      benefits: [
        {
        title: "الامتثال لمعايير السلامة السعودية",
        description: "جميع ملابس العمل لدينا تلبي أو تتجاوز معايير السلامة والصحة المهنية السعودية وشهادات السلامة الدولية.",
        icon: "/icons/safety-compliance-shield.svg"
        },
        {
        title: "تعزيز الهوية المؤسسية",
        description: "ندمج العلامة التجارية لشركتك في كل تفصيل من تفاصيل الزي الموحد، مما يخلق مظهراً مهنياً متسقاً.",
        icon: "/icons/corporate-identity-manufacturing.svg"
        },
        {
        title: "تصاميم محتشمة وعملية",
          description: "تصاميم خاصة تحترم متطلبات اللباس المحتشم للموظفات مع الحفاظ على الوظائف العملية لبيئات العمل الصناعية.",
        icon: "/icons/modest-design-industrial.svg"
        },
        {
        title: "أقمشة عالية الأداء",
        description: "منسوجات مخصصة للتصنيع توفر المتانة ومقاومة الحرارة والحماية من المواد الكيميائية والراحة.",
        icon: "/icons/fabric-tech-industrial.svg"
      }
    ],
    products: [
      {
        id: "1",
          name: "أزياء موحدة لخط الإنتاج",
          description: "ملابس عمل متينة ومريحة مصممة لموظفي خط الإنتاج، مع ميزات لمرونة الحركة والحماية من مخاطر التصنيع الشائعة.",
          image: "/images/manufacturing/production_line_uniforms.jpg",
        href: "/ar/shop/manufacturing-workwear/production-line-uniform"
        },
        {
        id: "2",
          name: "ملابس المشرفين والإدارة",
          description: "ملابس عمل احترافية تميز الموظفين الإشرافيين والإداريين مع الحفاظ على الوظائف العملية لبيئة أرضية المصنع.",
          image: "/images/manufacturing/supervisor_workwear.jpg",
        href: "/ar/shop/manufacturing-workwear/supervisor-uniform"
        },
        {
        id: "3",
          name: "أزياء موحدة للصيانة والفنيين",
        description: "ملابس عمل متخصصة لفرق الصيانة والفنيين، تتميز بأقمشة معززة وجيوب متعددة للأدوات وحماية محسنة.",
          image: "/images/manufacturing/maintenance_technical_uniform.jpg",
        href: "/ar/shop/manufacturing-workwear/maintenance-uniform"
        }
      ],
    testimonials: [
      {
        id: "1",
        quote: "ساهمت ملابس عمل التصنيع من يونيم بشكل كبير في تحسين مقاييس السلامة في مكان العمل وتبسيط عملية إدارة الزي الموحد لدينا.",
          author: "محمد الحربي",
        position: "مدير العمليات",
        company: "الصناعات السعودية المتقدمة"
        },
        {
        id: "2",
        quote: "متانة وعملية ملابس العمل من يونيم كانت مثيرة للإعجاب. يقدر موظفونا الراحة خلال المناوبات الطويلة.",
          author: "فاطمة العتيبي",
        position: "مديرة الموارد البشرية",
        company: "مجمع الرياض للتصنيع"
      }
    ],
    cta: {
      title: "ارتقِ بعملية التصنيع الخاصة بك مع يونيم",
      description: "شارك مع يونيم لتصميم وتقديم ملابس عمل للتصنيع تعطي الأولوية للسلامة والمتانة والهوية المهنية.",
      buttonText: "احصل على عرض سعر لملابس عمل التصنيع",
      buttonUrl: "/ar/quote?industry=manufacturing&focused=true"
    }
  };

  // Pass skipMainLayout=true to prevent duplicate headers/footers
  return <IndustryPageLayout locale={locale} industryData={manufacturingIndustryData} skipMainLayout={true} />;
} 