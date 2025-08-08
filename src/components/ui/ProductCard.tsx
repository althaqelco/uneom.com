import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedImagePath } from '@/lib/utils/imageLoader';

export interface ProductProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  category?: string;
  href: string;
  discountPercentage?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: ProductProps;
  locale?: string;
  showAddToQuote?: boolean;
  className?: string;
}

/**
 * Product card component for displaying product information
 */
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  locale = 'en',
  showAddToQuote = false,
  className = ''}) => {
  const {
    name,
    image,
    price,
    category,
    href,
    discountPercentage,
    isNew,
    isFeatured} = product;
  
  const rtl = locale === 'ar';
  const localizedImage = getLocalizedImagePath(image, locale as 'en' | 'ar');
  
  return (
    <div
      className={`group bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <Link href={href} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={localizedImage}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className={`absolute top-2 ${rtl ? 'right-2' : 'left-2'} flex flex-col gap-2`}>
            {isNew && (
              <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                {locale === 'ar' ? 'جديد' : 'NEW'}
              </span>
            )}
            {isFeatured && (
              <span className="bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                {locale === 'ar' ? 'مميز' : 'FEATURED'}
              </span>
            )}
          </div>
          
          {/* Discount badge */}
          {discountPercentage && (
            <div className={`absolute top-2 ${rtl ? 'left-2' : 'right-2'}`}>
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                {locale === 'ar' ? `خصم ${discountPercentage}%` : `${discountPercentage}% OFF`}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          {category && (
            <div className="text-sm text-primary-600 font-medium mb-1">{category}</div>
          )}
          <h3 className="text-lg font-bold mb-1 transition-colors duration-200 group-hover:text-primary-600">
            {name}
          </h3>
          {price && (
            <div className="text-neutral-900 font-semibold">{price}</div>
          )}
          
          {showAddToQuote && (
            <button
              className="mt-3 w-full bg-primary-100 text-primary-800 hover:bg-primary-200 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
            >
              {locale === 'ar' ? 'أضف إلى عرض السعر' : 'Add to Quote'}
            </button>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard; 