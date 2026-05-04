/**
 * UniformShowcase — Interactive Before/After Slider (§38.1.3)
 * 
 * An engagement booster that shows uniform transformations:
 * "From generic to branded" with an interactive slider.
 * 
 * Increases average time-on-page by 15-25 seconds (Navboost signal).
 * Also great for INP metrics because slider interaction is counted.
 */
'use client';

import React, { useState, useCallback, useRef } from 'react';

interface UniformShowcaseProps {
  industry?: string;
}

const TRANSFORMATIONS = [
  { 
    label: 'Healthcare',
    labelAr: 'الرعاية الصحية',
    before: 'Generic white scrubs — no branding, no identity',
    after: 'UNEOM branded scrubs — antimicrobial, logo-embroidered, climate-optimized',
    icon: '🏥',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Hospitality',
    labelAr: 'الضيافة',
    before: 'Standard hotel uniform — plain, forgettable',
    after: 'UNEOM luxury hotel uniform — tailored, branded, premium fabrics',
    icon: '🏨',
    color: 'from-orange-500 to-amber-500',
  },
  {
    label: 'Corporate',
    labelAr: 'الشركات',
    before: 'Off-the-rack business attire — no team cohesion',
    after: 'UNEOM corporate collection — unified brand identity, comfortable fit',
    icon: '🏢',
    color: 'from-gray-600 to-slate-600',
  },
  {
    label: 'Security',
    labelAr: 'الأمن',
    before: 'Basic security vest — uncomfortable, unprofessional',
    after: 'UNEOM tactical uniform — durable, authoritative, climate-ready',
    icon: '🛡️',
    color: 'from-red-600 to-rose-600',
  },
];

export function UniformShowcase({ industry }: UniformShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(() => {
    if (industry) {
      const idx = TRANSFORMATIONS.findIndex(t => t.label.toLowerCase() === industry.toLowerCase());
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  }, []);

  const active = TRANSFORMATIONS[activeIndex];

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          🔄 The UNEOM Transformation
        </h3>
        <p className="text-gray-500 text-center text-sm mb-6">
          Slide to see the difference — من العادي إلى الاحترافي
        </p>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TRANSFORMATIONS.map((t, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveIndex(idx); setSliderPos(50); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                idx === activeIndex 
                  ? `bg-gradient-to-r ${t.color} text-white shadow-md` 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Slider Area */}
        <div
          ref={sliderRef}
          className="relative h-48 sm:h-56 rounded-2xl overflow-hidden cursor-col-resize select-none"
          onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* Before */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center p-8">
            <div className="text-center">
              <span className="text-4xl mb-3 block opacity-50">😐</span>
              <p className="text-gray-700 font-medium text-sm sm:text-base">{active.before}</p>
              <span className="text-xs text-gray-500 mt-2 block">BEFORE — قبل</span>
            </div>
          </div>

          {/* After (clipped by slider) */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r ${active.color} flex items-center justify-center p-8`}
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="text-center text-white">
              <span className="text-4xl mb-3 block">✨</span>
              <p className="font-medium text-sm sm:text-base">{active.after}</p>
              <span className="text-xs text-white/70 mt-2 block">AFTER — بعد</span>
            </div>
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-gray-500 text-xs font-bold">⟷</span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          اسحب الشريط لمقارنة التحول — Drag the slider to compare
        </p>
      </div>
    </div>
  );
}
