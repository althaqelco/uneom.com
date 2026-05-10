/**
 * Battery saver detection.
 * Adds `uneom-power-saver` class when battery < 20% and not charging.
 * Per master-plan-v11 §10.5 (T1).
 */

'use client';

import { useEffect } from 'react';

export function BatterySaver() {
  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const check = () => {
          if (battery.level < 0.20 && !battery.charging) {
            document.documentElement.classList.add('uneom-power-saver');
          } else {
            document.documentElement.classList.remove('uneom-power-saver');
          }
        };
        check();
        battery.addEventListener('levelchange', check);
        battery.addEventListener('chargingchange', check);
      });
    }
  }, []);

  return null;
}
