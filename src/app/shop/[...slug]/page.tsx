import React from 'react';
import { products } from '@/lib/data/products';
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export async function generateMetadata(
  { params: { slug } }: { 
    params: { slug: string[] } 
  }
): Promise<Metadata> {
  const productId = slug[slug.length - 1];
  const productData = products.find(p => p.id === productId);
  
  if (!productData) {
    return {
      title: 'Product Not Found | UNEOM',
    };
  }
    
  return {
    title: `${productData.nameEn} | UNEOM Saudi Arabia`,
    description: productData.descriptionEn,
    openGraph: {
      title: `${productData.nameEn} | UNEOM Saudi Arabia`,
      description: productData.descriptionEn,
      url: `https://uneom.com/shop/${slug.join('/')}`,
      siteName: 'UNEOM',
      images: [
        {
          url: `https://uneom.com${productData.images[0].src}`,
          width: 1200,
          height: 630,
          alt: productData.nameEn
        }
      ],
      locale: 'en_US'
    }
  };
}

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: [...product.category.split('/'), product.id],
  }));
}

export default function ProductDetailPage({ params }: PageProps) {
  return <ClientPage params={params} />;
}