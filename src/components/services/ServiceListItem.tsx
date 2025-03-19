"use client";

import Link from 'next/link';
import ImageResolver from '../ui/ImageResolver';

interface ServiceListItemProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  locale: string;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({
  title,
  description,
  slug,
  image,
  locale
}) => {
  const isRtl = locale === 'ar';
  const serviceUrl = `/${locale === 'ar' ? 'ar/' : ''}services/${slug}`;
  
  return (
    <Link 
      href={serviceUrl}
      className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <ImageResolver
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          locale={locale}
        />
      </div>
      <div className="p-6" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceListItem; 