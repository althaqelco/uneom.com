/**
 * Speculation Rules component — browser-native prerendering.
 * Prerenders industry pages on moderate engagement,
 * prefetches shop pages conservatively.
 * Per master-plan-v11 §10.3 (T1).
 */

'use client';

import { useEffect } from 'react';

export function SpeculationRules() {
  useEffect(() => {
    if (!('HTMLScriptElement' in window)) return;
    // Check if speculation rules are supported
    if (!('speculationrules' in HTMLScriptElement.prototype)) return;

    const script = document.createElement('script');
    script.type = 'speculationrules';
    script.textContent = JSON.stringify({
      prerender: [{
        source: 'document',
        where: {
          and: [
            { href_matches: '/industries/*' },
            { not: { href_matches: '/industries/*/*' } }
          ]
        },
        eagerness: 'moderate'
      }],
      prefetch: [
        {
          source: 'document',
          where: { href_matches: '/shop/*' },
          eagerness: 'conservative'
        },
        {
          source: 'document',
          where: { href_matches: '/locations/*' },
          eagerness: 'conservative'
        }
      ]
    });
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
