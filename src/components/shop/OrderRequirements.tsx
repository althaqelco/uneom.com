import React from 'react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

interface OrderRequirementsProps {
  minOrder: number;
  className?: string;
}

const OrderRequirements: React.FC<OrderRequirementsProps> = ({ minOrder, className = "" }) => {
  return (
    <div className={`bg-neutral-50 rounded-2xl p-8 ${className}`}>
      <SectionHeading as="h2" className="mb-6">
        Ordering Information
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Minimum Order</h3>
          <p className="text-neutral-600">{minOrder} units per style and color</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Production Timeline</h3>
          <p className="text-neutral-600">3-4 weeks for standard orders<br />2-3 weeks for rush orders</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">Payment Terms</h3>
          <p className="text-neutral-600">50% deposit upon order confirmation<br />50% before shipment</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button variant="primary">
          Request a Quote
        </Button>
      </div>
    </div>
  );
};

export default OrderRequirements; 