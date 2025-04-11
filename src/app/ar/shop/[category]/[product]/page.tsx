import { products, getProductById, getProductsByCategory } from '@/lib/data/products';
import ClientPage from './ClientPage';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    product: string;
  };
}

// This generates all possible static paths during build time for Arabic shop products
export async function generateStaticParams() {
  // Define all possible category and product combinations for the Arabic version
  return [
    { category: 'healthcare', product: 'medical-scrubs' },
    { category: 'healthcare', product: 'lab-coats' },
    { category: 'healthcare', product: 'nurse-uniforms' },
    { category: 'corporate-workwear', product: 'corporate-shirt' },
    { category: 'corporate-workwear', product: 'executive-blazer' },
    { category: 'corporate-workwear', product: 'executive-suit' },
    { category: 'corporate-workwear', product: 'office-trouser' },
    { category: 'corporate-workwear', product: 'reception-uniform' },
    { category: 'hospitality', product: 'hotel-staff-uniforms' },
    { category: 'hospitality', product: 'restaurant-uniforms' },
    { category: 'hospitality', product: 'chef-uniforms' },
    { category: 'industrial', product: 'factory-workwear' },
    { category: 'industrial', product: 'safety-uniforms' },
    { category: 'industrial', product: 'construction-uniforms' },
    { category: 'security', product: 'security-guard-uniforms' },
    { category: 'security', product: 'surveillance-uniforms' },
    { category: 'security', product: 'event-security-uniforms' },
    { category: 'security-uniforms', product: 'executive-protection' },
    { category: 'security-uniforms', product: 'tactical-security-uniforms' },
    { category: 'security-uniforms', product: 'mall-security' },
    // Add aviation category products
    { category: 'aviation-uniforms', product: 'airline-crew-uniform' },
    { category: 'aviation-uniforms', product: 'pilot-uniform-set' },
    { category: 'aviation-uniforms', product: 'ground-crew-uniform' },
    // Add missing industrial products
    { category: 'industrial-uniforms', product: 'industrial-coverall' },
    { category: 'industrial-uniforms', product: 'industrial-coverall-pro' },
    { category: 'industrial-uniforms', product: 'flame-resistant-workwear' },
    { category: 'industrial-uniforms', product: 'hi-vis-safety-uniform' },
    { category: 'industrial-uniforms', product: 'safety-helmet-pro' },
    // Add missing retail products
    { category: 'retail-uniforms', product: 'luxury-retail-collection' },
    { category: 'retail-uniforms', product: 'customer-service' },
    { category: 'retail-uniforms', product: 'store-staff' },
    { category: 'retail-uniforms', product: 'beauty-salon' },
  ];
}

// This would normally come from a database or API
const getProductData = (category: string, productSlug: string) => {
  // This is mock data for demonstration
  return {
    id: productSlug,
    name: 'زي طبي احترافي',
    description: 'زي طبي عالي الجودة مصمم خصيصًا للاستخدام في المستشفيات والعيادات. مصنوع من أقمشة مقاومة للبكتيريا ومريحة للارتداء طوال اليوم.',
    features: [
      'مقاوم للبكتيريا',
      'سهل التنظيف',
      'مقاوم للتجاعيد',
      'مريح للارتداء لفترات طويلة',
      'متوفر بألوان متعددة',
      'مناسب للمناخ السعودي'
    ],
    price: 350,
    images: [
      '/images/products/medical-uniform-1.jpg',
      '/images/products/medical-uniform-2.jpg',
      '/images/products/medical-uniform-3.jpg',
      '/images/products/medical-uniform-4.jpg',
      '/images/products/medical-uniform-5.jpg'
    ],
    colors: ['#FFFFFF', '#0A2463', '#3E92CC', '#44CF6C', '#EAD94C'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: category,
    tags: ['زي طبي', 'مستشفى', 'عيادة', 'رعاية صحية'],
    rating: 4.8,
    reviews: 124
  };
};

// Get related products
const getRelatedProducts = (category: string, currentProductId: string) => {
  // This would normally come from a database or API
  return [
    {
      id: 'related-product-1',
      name: 'معطف مختبر طبي',
      price: 280,
      images: ['/images/products/lab-coat-1.jpg'],
      category: category,
      rating: 4.5,
      reviews: 87,
      colors: ['#FFFFFF', '#0A2463'],
      sizes: ['S', 'M', 'L', 'XL'],
      tags: ['معطف مختبر', 'طبي'],
      features: ['مقاوم للبقع', 'سهل التنظيف'],
      description: 'معطف مختبر عالي الجودة للاستخدام الطبي'
    },
    {
      id: 'related-product-2',
      name: 'زي تمريض متميز',
      price: 320,
      images: ['/images/products/nurse-uniform-1.jpg'],
      category: category,
      rating: 4.7,
      reviews: 65,
      colors: ['#FFFFFF', '#3E92CC', '#44CF6C'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      tags: ['تمريض', 'زي طبي'],
      features: ['مريح', 'مقاوم للبكتيريا'],
      description: 'زي تمريض مريح ومتين للاستخدام اليومي'
    },
    {
      id: 'related-product-3',
      name: 'بدلة جراحية متطورة',
      price: 400,
      images: ['/images/products/surgical-uniform-1.jpg'],
      category: category,
      rating: 4.9,
      reviews: 42,
      colors: ['#0A2463', '#3E92CC'],
      sizes: ['S', 'M', 'L', 'XL'],
      tags: ['جراحة', 'زي طبي', 'غرفة عمليات'],
      features: ['معقم', 'مقاوم للسوائل'],
      description: 'بدلة جراحية متطورة للاستخدام في غرف العمليات'
    },
    {
      id: 'related-product-4',
      name: 'زي استقبال طبي',
      price: 290,
      images: ['/images/products/reception-uniform-1.jpg'],
      category: category,
      rating: 4.6,
      reviews: 38,
      colors: ['#FFFFFF', '#0A2463', '#3E92CC'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      tags: ['استقبال', 'زي طبي', 'مكتب'],
      features: ['أنيق', 'مريح', 'سهل العناية'],
      description: 'زي استقبال أنيق للعاملين في مكاتب الاستقبال الطبية'
    }
  ];
};

export default function ProductPage({ params }: PageProps) {
  const { category, product } = params;
  const locale = 'ar';
  
  // Get product data
  const productData = getProductData(category, product);
  
  // Get related products
  const relatedProducts = getRelatedProducts(category, product);
  
  return <ClientPage product={productData} relatedProducts={relatedProducts} locale={locale} />;
} 