import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/components/seo/ServerSEO';
import { ClientPage } from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Metadata {
  const locale = params.locale || 'en';
  const isArabic = locale === 'ar';
  
  const title = isArabic 
    ? "الزي الموحد الاحترافي وملابس العمل للشركات في المملكة العربية السعودية | يونيوم"
    : "Professional Corporate Uniforms & Business Attire in Saudi Arabia | UNEOM";
    
  const description = isArabic
    ? "ملابس عمل مُصممة خصيصًا للبيئات المؤسسية التي توازن بين الاحترافية وثقافة مكان العمل السعودي. زي موحد للشركات من يونيوم."
    : "Tailored business attire for corporate environments that balance professionalism with Saudi workplace culture. Premium corporate uniforms from UNEOM.";
    
  const keywords = [
    isArabic ? 'زي موحد للشركات' : 'corporate uniforms',
    isArabic ? 'ملابس العمل' : 'business attire',
    isArabic ? 'زي مهني' : 'professional clothing',
    isArabic ? 'ملابس مكتبية' : 'office wear',
    isArabic ? 'يونيوم' : 'UNEOM',
    isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    isArabic ? 'ملابس تنفيذية' : 'executive clothing',
    isArabic ? 'زي موظفين' : 'staff uniforms'
  ];
  
  return generateSEO({
    title,
    description,
    keywords,
    path: `/industries/corporate`,
    locale: locale as 'en' | 'ar',
    imageUrl: '/images/corporate/corporate-uniforms-og.webp'
  });
}

export default function CorporatePage() {
  return <ClientPage />;
} 