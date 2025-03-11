import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  href: string;
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={product.href}
          className="group"
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 mb-4">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default RelatedProducts; 