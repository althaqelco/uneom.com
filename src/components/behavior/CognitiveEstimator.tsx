/**
 * CognitiveEstimator — Interactive Uniform Cost Calculator
 * 
 * From Prokr Blueprint §38.2: Steals the "first click" within 3 seconds,
 * sending a strong Active INP signal to Navboost. The slider + urgency buttons
 * force immediate interaction, converting the page from "passive facade" to
 * "interactive application" in Navboost's eyes.
 */
'use client';

import React, { useState, useCallback } from 'react';

interface CognitiveEstimatorProps {
  industryAr: string;
  industryEn: string;
  cityAr: string;
  basePrice?: number;
}

const INDUSTRY_MULTIPLIERS: Record<string, number> = {
  healthcare: 1.2,
  hospitality: 1.1,
  corporate: 1.3,
  aviation: 1.5,
  education: 0.8,
  manufacturing: 1.0,
  security: 1.1,
  'retail-shops': 0.9,
  'factory-industry': 1.0,
  'factory-security': 1.15,
};

export function CognitiveEstimator({ 
  industryAr, 
  industryEn, 
  cityAr, 
  basePrice = 120 
}: CognitiveEstimatorProps) {
  const [employees, setEmployees] = useState(50);
  const [customization, setCustomization] = useState<'standard' | 'custom' | 'premium'>('standard');
  const [hasCalculated, setHasCalculated] = useState(false);

  const customMultiplier = { standard: 1, custom: 1.4, premium: 1.8 }[customization];
  const industryMultiplier = INDUSTRY_MULTIPLIERS[industryEn.toLowerCase()] || 1.0;
  
  const unitCost = Math.round(basePrice * industryMultiplier * customMultiplier);
  const totalCost = unitCost * employees;
  const bulkDiscount = employees >= 100 ? 0.15 : employees >= 50 ? 0.1 : 0;
  const finalCost = Math.round(totalCost * (1 - bulkDiscount));

  const handleInteraction = useCallback(() => {
    if (!hasCalculated) setHasCalculated(true);
  }, [hasCalculated]);

  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 my-8 relative overflow-hidden"
      onMouseEnter={handleInteraction}
    >
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-blue-600 to-blue-800" />

      <h3 className="text-xl font-black text-slate-800 mb-1">
        🧮 حاسبة تكلفة الزي الموحد — {industryAr}
      </h3>
      <p className="text-sm text-slate-500 mb-6">تقدير فوري بناءً على بيانات السوق في {cityAr}</p>

      {/* Employee Count Slider */}
      <div className="mb-6">
        <label className="flex justify-between text-sm font-bold text-slate-700 mb-3">
          <span>عدد الموظفين</span>
          <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg font-mono">{employees} موظف</span>
        </label>
        <input
          type="range"
          min="10"
          max="500"
          step="10"
          value={employees}
          onChange={(e) => { setEmployees(Number(e.target.value)); handleInteraction(); }}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>10</span><span>100</span><span>250</span><span>500</span>
        </div>
      </div>

      {/* Customization Level */}
      <div className="flex gap-3 mb-6">
        {[
          { key: 'standard' as const, label: '📦 قياسي', desc: 'ألوان وتصاميم جاهزة' },
          { key: 'custom' as const, label: '✂️ مخصص', desc: 'تصميم حسب الطلب' },
          { key: 'premium' as const, label: '👔 فاخر', desc: 'تصميم حصري + تطريز' },
        ].map((opt) => (
          <button
            key={opt.key}
            onClick={() => { setCustomization(opt.key); handleInteraction(); }}
            className={`flex-1 py-3 px-2 rounded-xl text-center transition-all duration-200 ${
              customization === opt.key
                ? 'bg-blue-600 text-white shadow-md scale-[1.02]'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <div className="text-sm font-bold">{opt.label}</div>
            <div className={`text-[10px] mt-1 ${customization === opt.key ? 'text-blue-100' : 'text-slate-400'}`}>
              {opt.desc}
            </div>
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-200">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-600 font-bold text-sm">سعر القطعة الواحدة:</span>
          <span className="text-lg font-black text-slate-800">{unitCost} ر.س</span>
        </div>
        {bulkDiscount > 0 && (
          <div className="flex justify-between items-center mb-3">
            <span className="text-emerald-600 font-bold text-sm">🎉 خصم الكميات ({Math.round(bulkDiscount * 100)}%):</span>
            <span className="text-emerald-600 font-bold">-{Math.round(totalCost * bulkDiscount).toLocaleString()} ر.س</span>
          </div>
        )}
        <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
          <span className="text-slate-800 font-black">التكلفة التقديرية الإجمالية:</span>
          <div className="text-2xl font-black text-blue-900">
            {finalCost.toLocaleString()} <span className="text-base text-blue-500">ر.س</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <a
        href="/quote"
        className="block mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white text-center font-bold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
      >
        📩 احصل على عرض سعر دقيق — مجاناً
      </a>
    </div>
  );
}
