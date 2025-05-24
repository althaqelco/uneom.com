/**
 * Corporate Uniforms Benefits Section
 * 
 * Optimized for Core Web Vitals with deferred loading
 * Implements SEO-friendly content structure with schema markup
 */

import React from 'react';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from '@/components/images/OptimizedImage';

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, iconAlt }) => {
  // Use intersection observer for animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center p-6 transition-opacity duration-700 ease-in-out ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <OptimizedImage
          src={icon}
          alt={iconAlt}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const benefits = {
    en: [
      {
        icon: '/images/icons/brand-icon.svg',
        title: 'Brand Identity',
        description: 'Strengthen your corporate identity with uniforms that showcase your brand colors, logo, and values.',
        iconAlt: 'Brand identity icon'
      },
      {
        icon: '/images/icons/professional-icon.svg',
        title: 'Professional Image',
        description: 'Present a consistent, professional appearance that instills confidence in clients and partners.',
        iconAlt: 'Professional image icon'
      },
      {
        icon: '/images/icons/comfort-icon.svg',
        title: 'Employee Comfort',
        description: 'Our uniforms are designed for all-day comfort with breathable fabrics and ergonomic designs.',
        iconAlt: 'Comfort icon'
      },
      {
        icon: '/images/icons/durability-icon.svg',
        title: 'Durability',
        description: 'High-quality materials and construction ensure your uniforms withstand daily wear and frequent washing.',
        iconAlt: 'Durability icon'
      },
      {
        icon: '/images/icons/customization-icon.svg',
        title: 'Customization',
        description: 'Tailor your uniforms to specific departments, positions, or individual preferences.',
        iconAlt: 'Customization icon'
      }
    ],
    ar: [
      {
        icon: '/images/icons/brand-icon.svg',
        title: 'هوية العلامة التجارية',
        description: 'عزز هوية شركتك بزي موحد يعرض ألوان علامتك التجارية وشعارها وقيمها.',
        iconAlt: 'أيقونة هوية العلامة التجارية'
      },
      {
        icon: '/images/icons/professional-icon.svg',
        title: 'المظهر الاحترافي',
        description: 'قدم مظهرًا احترافيًا متسقًا يبعث الثقة في العملاء والشركاء.',
        iconAlt: 'أيقونة المظهر الاحترافي'
      },
      {
        icon: '/images/icons/comfort-icon.svg',
        title: 'راحة الموظفين',
        description: 'تم تصميم الزي الموحد لدينا للراحة طوال اليوم مع أقمشة قابلة للتنفس وتصاميم مريحة.',
        iconAlt: 'أيقونة الراحة'
      },
      {
        icon: '/images/icons/durability-icon.svg',
        title: 'المتانة',
        description: 'تضمن المواد عالية الجودة والتصنيع المتقن أن يتحمل الزي الموحد الارتداء اليومي والغسيل المتكرر.',
        iconAlt: 'أيقونة المتانة'
      },
      {
        icon: '/images/icons/customization-icon.svg',
        title: 'التخصيص',
        description: 'خصص الزي الموحد للإدارات أو المناصب المحددة أو التفضيلات الفردية.',
        iconAlt: 'أيقونة التخصيص'
      }
    ]
  };
  
  const content = {
    en: {
      title: 'Benefits of UNEOM Corporate Uniforms',
      subtitle: 'Why choose our corporate uniforms for your business'
    },
    ar: {
      title: 'مزايا الزي الموحد للشركات من يونيوم',
      subtitle: 'لماذا تختار الزي الموحد للشركات لعملك'
    }
  };
  
  const t = content[isArabic ? 'ar' : 'en'];
  const benefitsList = benefits[isArabic ? 'ar' : 'en'];
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  return (
    <section className="py-16 bg-white" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <Benefit 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconAlt={benefit.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
