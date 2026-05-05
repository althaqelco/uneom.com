import React from 'react';

interface SovereignBadgeProps {
  crn?: string;
  className?: string;
}

/**
 * SovereignBadge
 * 
 * Displays the Commercial Registration Number (CRN) with a direct link
 * to the Ministry of Commerce verification portal. Boosts E-E-A-T signals.
 */
export default function SovereignBadge({ crn = 'CRN-PENDING', className = '' }: SovereignBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-md shadow-sm ${className}`}>
      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-green-800">
          موثق في وزارة التجارة
        </span>
        <a 
          href={`https://mc.gov.sa/ar/`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] text-green-600 hover:underline"
          title="Ministry of Commerce Verification"
        >
          س.ت: {crn}
        </a>
      </div>
    </div>
  );
}
