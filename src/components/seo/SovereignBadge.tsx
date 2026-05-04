/**
 * SovereignBadge — CRN Verification Trust Badge (§37.4.3)
 * 
 * Displays a verified commercial registration badge with a direct link
 * to the Ministry of Commerce verification page. Injects PropertyValue
 * in JSON-LD to transform the site from "Affiliate" to "Sovereign Entity."
 */
import React from 'react';

interface SovereignBadgeProps {
  crnNumber?: string;
  isVerified?: boolean;
  companyName?: string;
}

export default function SovereignBadge({ crnNumber, isVerified = true, companyName = 'UNEOM' }: SovereignBadgeProps) {
  if (!crnNumber || !isVerified) return null;

  // JSON-LD PropertyValue for CRN — injected directly into the page
  const identifierSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyName,
    "identifier": {
      "@type": "PropertyValue",
      "name": "السجل التجاري السعودي (CRN)",
      "propertyID": "CRN",
      "value": crnNumber,
    },
  };

  return (
    <div className="mt-6 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/60 rounded-2xl shadow-sm inline-block">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(identifierSchema) }}
      />

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-emerald-900 leading-none">كيان تجاري موثق</h3>
          <p className="text-[11px] text-emerald-600 mt-0.5">Verified Commercial Entity</p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-xs text-emerald-700">سجل تجاري:</span>
            <strong className="font-mono text-emerald-900 text-sm select-all tracking-wider">{crnNumber}</strong>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-emerald-200/50 flex items-center justify-between">
        <a
          href={`https://mc.gov.sa/ar/eservices/Pages/Commercial-data.aspx?cr=${crnNumber}`}
          target="_blank"
          rel="nofollow external noopener noreferrer"
          className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 transition-colors flex items-center gap-1"
        >
          <span>التحقق عبر وزارة التجارة</span>
          <span>→</span>
        </a>
        <span className="text-[10px] text-emerald-500 font-mono">mc.gov.sa</span>
      </div>
    </div>
  );
}
