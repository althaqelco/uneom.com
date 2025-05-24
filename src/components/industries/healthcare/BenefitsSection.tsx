/**
 * Healthcare Uniforms Benefits Section
 * 
 * Optimized for Core Web Vitals with deferred loading
 * Implements SEO-friendly content structure with schema markup
 * Supports both English and Arabic content
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
        icon: '/images/icons/durability-icon.svg',
        title: 'Durability',
        description: 'Our healthcare uniforms are made from high-quality fabrics that withstand frequent washing and sanitization.',
        iconAlt: 'Durability icon'
      },
      {
        icon: '/images/icons/comfort-icon.svg',
        title: 'Comfort',
        description: 'Designed for all-day wear with breathable, stretchy fabrics that allow freedom of movement during long shifts.',
        iconAlt: 'Comfort icon'
      },
      {
        icon: '/images/icons/hygiene-icon.svg',
        title: 'Hygiene',
        description: 'Made with antimicrobial fabrics that help reduce the spread of bacteria and maintain a clean environment.',
        iconAlt: 'Hygiene icon'
      },
      {
        icon: '/images/icons/function-icon.svg',
        title: 'Functionality',
        description: 'Practical features like multiple pockets, pen holders, and badge clips for essential medical tools and equipment.',
        iconAlt: 'Functionality icon'
      },
      {
        icon: '/images/icons/professional-icon.svg',
        title: 'Professional Image',
        description: 'Clean, professional appearance that helps patients identify staff roles and instills confidence in care.',
        iconAlt: 'Professional image icon'
      }
    ],
    ar: [
      {
        icon: '/images/icons/durability-icon.svg',
        title: 'المتانة',
        description: 'تم تصنيع الزي الموحد للرعاية الصحية من أقمشة عالية الجودة تتحمل الغسيل المتكرر والتعقيم.',
        iconAlt: 'أيقونة المتانة'
      },
      {
        icon: '/images/icons/comfort-icon.svg',
        title: 'الراحة',
        description: 'مصممة للارتداء طوال اليوم مع أقمشة قابلة للتنفس ومرنة تسمح بحرية الحركة خلال المناوبات الطويلة.',
        iconAlt: 'أيقونة الراحة'
      },
      {
        icon: '/images/icons/hygiene-icon.svg',
        title: 'النظافة',
        description: 'مصنوعة من أقمشة مضادة للميكروبات تساعد على تقليل انتشار البكتيريا والحفاظ على بيئة نظيفة.',
        iconAlt: 'أيقونة النظافة'
      },
      {
        icon: '/images/icons/function-icon.svg',
        title: 'الوظائف العملية',
        description: 'ميزات عملية مثل الجيوب المتعددة وحاملات الأقلام ومشابك الشارات للأدوات والمعدات الطبية الأساسية.',
        iconAlt: 'أيقونة الوظائف'
      },
      {
        icon: '/images/icons/professional-icon.svg',
        title: 'المظهر الاحترافي',
        description: 'مظهر نظيف واحترافي يساعد المرضى على تحديد أدوار الموظفين ويعزز الثقة في الرعاية.',
        iconAlt: 'أيقونة المظهر الاحترافي'
      }
    ]
  };
  
  const content = {
    en: {
      title: 'Benefits of UNEOM Healthcare Uniforms',
      subtitle: 'Why choose our healthcare uniforms for your medical facility'
    },
    ar: {
      title: 'مزايا الزي الموحد للرعاية الصحية من يونيوم',
      subtitle: 'لماذا تختار الزي الموحد للرعاية الصحية لمنشأتك الطبية'
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
