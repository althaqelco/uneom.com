import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'المدونة | يونيوم - الأزياء المهنية وملابس العمل',
  description: 'استكشف مدونتنا للحصول على رؤى ونصائح واتجاهات في الأزياء المهنية وملابس العمل',
  alternates: {
    canonical: 'https://uneom.com/ar/blog'}
};

export default function BlogLayout({
  children}: {
  children: React.ReactNode;
}) {
  return children;
} 