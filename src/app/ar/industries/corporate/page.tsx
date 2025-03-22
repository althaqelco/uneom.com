'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function CorporatePageArabic() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // Empty placeholder for industry data
  const corporateIndustryData = {
    title: "",
    subtitle: "",
    heroImage: "",
    
    introduction: {
      title: "",
      content: ``
    },
    
    benefits: [],
    products: [],
    fabricTechnologies: [],
    customizationOptions: [],
    testimonials: [],
    
    cta: {
      title: "",
      description: "",
      buttonText: "",
      buttonUrl: ""
    },
    seoKeywords: ""
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={corporateIndustryData}
      skipMainLayout={true}
    />
  );
} 
