/**
 * Corporate Uniforms Product Categories Section
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
    threshold: 0.1,
  });

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
        image: '/images/industries/corporate/corporate-suit.jpg',
        title: 'Executive Suits',
        description: 'Premium tailored suits for executives and management teams that convey authority and professionalism.',
        link: '/products/corporate/executive-suits',
        imageAlt: 'Executive business suits for corporate professionals'
      },
      {
        image: '/images/industries/corporate/corporate-shirt.jpg',
        title: 'Business Shirts',
        description: 'Comfortable, wrinkle-resistant shirts available in your brand colors and with optional logo embroidery.',
        link: '/products/corporate/business-shirts',
        imageAlt: 'Professional business shirts for corporate uniforms'
      },
      {
        image: '/images/industries/corporate/corporate-blazer.jpg',
        title: 'Corporate Blazers',
        description: 'Stylish blazers that can be customized with your company colors, buttons, and pocket designs.',
        link: '/products/corporate/corporate-blazers',
        imageAlt: 'Custom corporate blazers for business attire'
      },
      {
        image: '/images/industries/corporate/front-desk.jpg',
        title: 'Front Desk Uniforms',
        description: 'Distinctive and professional attire for receptionists and front desk staff who represent your brand.',
        link: '/products/corporate/front-desk',
        imageAlt: 'Front desk and receptionist uniforms for corporate environments'
      },
      {
        image: '/images/industries/corporate/corporate-trousers.jpg',
        title: 'Business Trousers',
        description: 'Durable, comfortable trousers designed to match your corporate jackets and maintain a consistent look.',
        link: '/products/corporate/business-trousers',
        imageAlt: 'Professional business trousers for corporate uniforms'
      },
      {
        image: '/images/industries/corporate/accessories.jpg',
        title: 'Corporate Accessories',
        description: 'Ties, scarves, pins, and other accessories that complete your corporate uniform with attention to detail.',
        link: '/products/corporate/accessories',
        imageAlt: 'Corporate uniform accessories including ties and scarves'
      }
    ],
    ar: [
      {
        image: '/images/industries/corporate/corporate-suit.jpg',
        title: 'بدلات تنفيذية',
        description: 'بدلات مخصصة ممتازة للمدراء التنفيذيين وفرق الإدارة تنقل السلطة والاحترافية.',
        link: '/ar/products/corporate/executive-suits',
        imageAlt: 'بدلات أعمال تنفيذية للمهنيين في الشركات'
      },
      {
        image: '/images/industries/corporate/corporate-shirt.jpg',
        title: 'قمصان عمل',
        description: 'قمصان مريحة ومقاومة للتجاعيد متوفرة بألوان علامتك التجارية وخيار التطريز بالشعار.',
        link: '/ar/products/corporate/business-shirts',
        imageAlt: 'قمصان مهنية للزي الموحد للشركات'
      },
      {
        image: '/images/industries/corporate/corporate-blazer.jpg',
        title: 'سترات رسمية',
        description: 'سترات أنيقة يمكن تخصيصها بألوان شركتك وأزرارها وتصاميم الجيوب.',
        link: '/ar/products/corporate/corporate-blazers',
        imageAlt: 'سترات شركات مخصصة للملابس الرسمية'
      },
      {
        image: '/images/industries/corporate/front-desk.jpg',
        title: 'زي موحد لمكتب الاستقبال',
        description: 'ملابس مميزة واحترافية لموظفي الاستقبال الذين يمثلون علامتك التجارية.',
        link: '/ar/products/corporate/front-desk',
        imageAlt: 'زي موحد لمكتب الاستقبال والاستقبال للبيئات المؤسسية'
      },
      {
        image: '/images/industries/corporate/corporate-trousers.jpg',
        title: 'بناطيل رسمية',
        description: 'بناطيل متينة ومريحة مصممة لتتناسب مع سترات شركتك والحفاظ على مظهر متناسق.',
        link: '/ar/products/corporate/business-trousers',
        imageAlt: 'بناطيل مهنية للزي الموحد للشركات'
      },
      {
        image: '/images/industries/corporate/accessories.jpg',
        title: 'إكسسوارات الشركات',
        description: 'ربطات العنق والأوشحة والدبابيس وغيرها من الإكسسوارات التي تكمل الزي الموحد للشركات مع الاهتمام بالتفاصيل.',
        link: '/ar/products/corporate/accessories',
        imageAlt: 'إكسسوارات الزي الموحد للشركات بما في ذلك ربطات العنق والأوشحة'
      }
    ]
  };
  
  const content = {
    en: {
      title: 'Corporate Uniform Categories',
      subtitle: 'Explore our range of professional business attire'
    },
    ar: {
      title: 'فئات الزي الموحد للشركات',
      subtitle: 'استكشف مجموعتنا من الملابس الرسمية المهنية'
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
