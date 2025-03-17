'use client';

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <MainLayout locale="ar">
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">المقال غير موجود</h1>
          <p className="text-neutral-600 mb-8">المقال الذي تبحث عنه غير موجود.</p>
          <Link href="/ar/blog" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200">
            العودة إلى المدونة
          </Link>
        </div>
      </Container>
    </MainLayout>
  );
} 