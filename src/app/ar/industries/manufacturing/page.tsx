import { Metadata } from 'next';
import ManufacturingIndustryClientPageAr from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: "زي موحد للتصنيع وملابس العمل الصناعية في السعودية | يونيم",
  description: "ملابس عمل صناعية وأزياء موحدة للتصنيع مصممة خصيصًا للمصانع السعودية، تضمن السلامة والمتانة والامتثال للمعايير الصناعية السعودية.",
  keywords: "ملابس عمل صناعية، زي موحد للتصنيع، ملابس مصانع سعودية، ملابس السلامة الصناعية، يونيفورم مصانع، أزياء العمل الصناعية",
};

export default function ManufacturingIndustryPageAr() {
  return <ManufacturingIndustryClientPageAr />;
} 
