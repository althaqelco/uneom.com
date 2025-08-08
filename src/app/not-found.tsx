import React from 'react';
import Link from "next/link";
import { Metadata } from "next";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// نضيف البيانات الوصفية لصفحة 404
export const metadata: Metadata = {
  title: "404 - Page Not Found | Uneom",
  description: "Sorry, the page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false}};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We couldn't find the page you're looking for. It might have been moved, 
        deleted, or perhaps never existed.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Back to Home
        </Link>
        
        <Link 
          href="/ar"
          className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          النسخة العربية
        </Link>
      </div>
      
      {/* إضافة بعض النص لشرح حالة 404 لتحسين SEO */}
      <div className="mt-12 text-gray-500 text-sm max-w-xl">
        <p>
          Error 404 occurs when a page cannot be found on the server. If you 
          believe this is an error, please contact our support team or try 
          searching for what you need from our homepage.
        </p>
      </div>
    </div>
  );
} 