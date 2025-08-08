/**
 * Healthcare Uniforms Product Categories Section
 * 
 * Implements the following optimizations:
 * - Lazy-loaded images for better performance
 * - Structured data for better SEO
 * - Responsive design for all devices
 * - Uses IntersectionObserver for defer-loading
 */

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from '@/components/images/OptimizedImage';

interface ProductCategoryProps {
  image: string;
  title: string;
  description: string;
  link: string;
  imageAlt: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ 
  image, 
  title, 
  description, 
  link,
  imageAlt
}) => {
  // Use intersection observer for animation and lazy loading
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1});

  return (
    <div 
      ref={ref}
      className={`rounded-lg overflow-hidden shadow-md bg-white transition-all duration-500 transform ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative h-64">
        <OptimizedImage
          src={image}
          alt={imageAlt}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={link}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          <span>View Details</span>
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const ProductCategoriesSection: React.FC = () => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const categories = {
    en: [
      {
        image: '/images/industries/healthcare/doctor-coats.jpg',
        title: 'Doctor Coats',
        description: 'Professional lab coats for doctors and specialists, available in various styles and lengths.',
        link: '/products/healthcare/doctor-coats',
        imageAlt: 'Professional white lab coats for doctors and specialists'
      },
      {
        image: '/images/industries/healthcare/nursing-uniforms.jpg',
        title: 'Nursing Uniforms',
        description: 'Comfortable, functional nursing uniforms designed for long shifts and active movement.',
        link: '/products/healthcare/nursing-uniforms',
        imageAlt: 'Comfortable and practical nursing uniforms for healthcare staff'
      },
      {
        image: '/images/industries/healthcare/scrubs.jpg',
        title: 'Medical Scrubs',
        description: 'Durable, easy-care scrubs available in a variety of colors to distinguish departments or roles.',
        link: '/products/healthcare/scrubs',
        imageAlt: 'Medical scrubs in various colors for healthcare professionals'
      },
      {
        image: '/images/industries/healthcare/admin-uniforms.jpg',
        title: 'Admin Uniforms',
        description: 'Professional attire for reception, administrative, and non-clinical healthcare staff.',
        link: '/products/healthcare/admin-uniforms',
        imageAlt: 'Professional uniforms for healthcare administrative staff'
      },
      {
        image: '/images/industries/healthcare/patient-gowns.jpg',
        title: 'Patient Gowns',
        description: 'Dignified, comfortable patient gowns designed for ease of use and patient comfort.',
        link: '/products/healthcare/patient-gowns',
        imageAlt: 'Comfortable and dignified patient gowns for medical facilities'
      },
      {
        image: '/images/industries/healthcare/accessories.jpg',
        title: 'Medical Accessories',
        description: 'Complementary items including caps, shoe covers, and badge holders for complete medical attire.',
        link: '/products/healthcare/accessories',
        imageAlt: 'Medical accessories including caps and badge holders'
      }
    ],
    ar: [
      {
        image: '/images/industries/healthcare/doctor-coats.jpg',
        title: 'معاطف الأطباء',
        description: 'معاطف مختبر احترافية للأطباء والمتخصصين، متوفرة بأنماط وأطوال متنوعة.',
        link: '/ar/products/healthcare/doctor-coats',
        imageAlt: 'معاطف مختبر بيضاء احترافية للأطباء والمتخصصين'
      },
      {
        image: '/images/industries/healthcare/nursing-uniforms.jpg',
        title: 'زي التمريض',
        description: 'زي تمريض مريح وعملي مصمم للمناوبات الطويلة والحركة النشطة.',
        link: '/ar/products/healthcare/nursing-uniforms',
        imageAlt: 'زي تمريض مريح وعملي لطاقم الرعاية الصحية'
      },
      {
        image: '/images/industries/healthcare/scrubs.jpg',
        title: 'ملابس التعقيم الطبية',
        description: 'ملابس تعقيم متينة وسهلة العناية متوفرة بمجموعة متنوعة من الألوان لتمييز الأقسام أو الأدوار.',
        link: '/ar/products/healthcare/scrubs',
        imageAlt: 'ملابس طبية بألوان متنوعة للمتخصصين في الرعاية الصحية'
      },
      {
        image: '/images/industries/healthcare/admin-uniforms.jpg',
        title: 'زي موظفي الإدارة',
        description: 'ملابس احترافية لموظفي الاستقبال والإدارة والموظفين غير السريريين في مجال الرعاية الصحية.',
        link: '/ar/products/healthcare/admin-uniforms',
        imageAlt: 'زي احترافي للموظفين الإداريين في مجال الرعاية الصحية'
      },
      {
        image: '/images/industries/healthcare/patient-gowns.jpg',
        title: 'أثواب المرضى',
        description: 'أثواب كريمة ومريحة للمرضى مصممة لسهولة الاستخدام وراحة المريض.',
        link: '/ar/products/healthcare/patient-gowns',
        imageAlt: 'أثواب مريحة وكريمة للمرضى في المرافق الطبية'
      },
      {
        image: '/images/industries/healthcare/accessories.jpg',
        title: 'الإكسسوارات الطبية',
        description: 'عناصر تكميلية تشمل القبعات وأغطية الأحذية وحاملات الشارات للملابس الطبية الكاملة.',
        link: '/ar/products/healthcare/accessories',
        imageAlt: 'إكسسوارات طبية تشمل القبعات وحاملات الشارات'
      }
    ]
  };
  
  const content = {
    en: {
      title: 'Healthcare Uniform Categories',
      subtitle: 'Explore our range of professional medical attire'
    },
    ar: {
      title: 'فئات الزي الموحد للرعاية الصحية',
      subtitle: 'استكشف مجموعتنا من الملابس الطبية المهنية'
    }
  };
  
  const t = content[isArabic ? 'ar' : 'en'];
  const productCategories = categories[isArabic ? 'ar' : 'en'];
  const textDir = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'text-right' : 'text-left';
  
  return (
    <section className="py-16 bg-gray-50" dir={textDir}>
      <div className="container mx-auto px-4">
        <div className={`mb-12 ${textAlign}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <ProductCategory 
              key={index}
              image={category.image}
              title={category.title}
              description={category.description}
              link={category.link}
              imageAlt={category.imageAlt}
            />
          ))}
        </div>
      </div>
      
      {/* Structured Data for Products (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': productCategories.map((category, index) => ({
              '@type': 'ListItem',
              'position': index + 1,
              'item': {
                '@type': 'Product',
                'name': category.title,
                'description': category.description,
                'image': `https://www.uneom.com${category.image}`,
                'url': `https://www.uneom.com${category.link}`
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default ProductCategoriesSection;
