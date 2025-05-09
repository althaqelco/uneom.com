import React from 'react';
import LocationPageLayout from '@/components/layout/LocationPageLayout';

export default function TestWhatsAppPage() {
  return (
    <LocationPageLayout locale="en">
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">Test WhatsApp Component</h1>
        <p className="mt-4">This is a test page to verify that the FloatingWhatsApp component works correctly.</p>
      </div>
    </LocationPageLayout>
  );
} 