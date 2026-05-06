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
  
  if (productData) {
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

  // Check if it's a category
  const categorySlug = slug.join('/');
  const categoryProducts = products.filter(p => p.category === categorySlug);
  if (categoryProducts.length > 0) {
    const catName = categoryProducts[0].categoryNameAr;
    return {
      title: `${catName} | أزياء مهنية | يونيوم`,
      description: `تصفح مجموعتنا المميزة من ${catName}. ملابس مهنية عالية الجودة للشركات السعودية.`,
      openGraph: {
        title: `${catName} | يونيوم`,
        description: `تصفح مجموعتنا المميزة من ${catName}.`,
        url: `https://uneom.com/ar/shop/${categorySlug}`,
        siteName: 'UNEOM',
        locale: 'ar'
      }
    };
  }
    
  return {
    title: 'المنتج غير موجود | يونيوم',
  };
}

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];
  
  // Unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));
  categories.forEach(cat => {
    paths.push({ slug: cat.split('/') });
  });
  
  // Product paths
  products.forEach(product => {
    paths.push({ slug: [...product.category.split('/'), product.id] });
  });
  
  return paths;
}

export default function ProductPage({ params }: PageProps) {
  return <ClientPage params={params} locale="ar" />;
}