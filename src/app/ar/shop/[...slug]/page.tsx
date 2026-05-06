import React from 'react';
import { products } from '@/lib/data/products';
import ClientPage from '@/app/shop/[...slug]/ClientPage';
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
    title: `${productData.nameAr} | يونيوم المملكة العربية السعودية`,
    description: productData.descriptionAr,
    openGraph: {
      title: `${productData.nameAr} | يونيوم المملكة العربية السعودية`,
      description: productData.descriptionAr,
      url: `https://uneom.com/ar/shop/${slug.join('/')}`,
      siteName: 'UNEOM',
      images: [
        {
          url: `https://uneom.com${productData.images[0].src}`,
          width: 1200,
          height: 630,
          alt: productData.nameAr
        }
      ],
      locale: 'ar'
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

export default function ProductPage({ params }: PageProps) {
  return <ClientPage params={params} />;
}