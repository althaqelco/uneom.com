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
  const shopPath = slug.join('/');
  const shopAlternates = {
    canonical: `https://uneom.com/shop/${shopPath}/`,
    languages: {
      'en': `https://uneom.com/shop/${shopPath}/`,
      'ar-SA': `https://uneom.com/ar/shop/${shopPath}/`,
      'x-default': `https://uneom.com/shop/${shopPath}/`,
    },
  };

  if (productData) {
    return {
      title: `${productData.nameEn} | UNEOM Saudi Arabia`,
      description: productData.descriptionEn,
      alternates: shopAlternates,
      openGraph: {
        title: `${productData.nameEn} | UNEOM Saudi Arabia`,
        description: productData.descriptionEn,
        url: `https://uneom.com/shop/${shopPath}/`,
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

  // Check if it's a category
  const categoryProducts = products.filter(p => p.category === shopPath);
  if (categoryProducts.length > 0) {
    const catName = categoryProducts[0].categoryNameEn;
    return {
      title: `${catName} | Professional Uniforms | UNEOM`,
      description: `Explore our premium collection of ${catName.toLowerCase()}. High-quality, durable uniforms for Saudi Arabian businesses.`,
      alternates: shopAlternates,
      openGraph: {
        title: `${catName} | UNEOM`,
        description: `Explore our premium collection of ${catName.toLowerCase()}.`,
        url: `https://uneom.com/shop/${shopPath}/`,
        siteName: 'UNEOM',
        locale: 'en_US'
      }
    };
  }
    
  return {
    title: 'Product Not Found | UNEOM',
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

export default function ProductDetailPage({ params }: PageProps) {
  return <ClientPage params={params} locale="en" />;
}