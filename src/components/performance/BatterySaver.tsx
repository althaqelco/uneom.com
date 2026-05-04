/**
 * BatterySaver — Lithium Drain Index Optimizer (§38.5.3)
 *
 * Detects device battery level and disables animations/videos
 * when battery drops below 20%. Google's Lithium Drain Index 
 * penalizes energy-hungry pages on mobile.
 */
'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

interface BatteryState {
  isLowBattery: boolean;
  level: number;
}

const BatteryContext = createContext<BatteryState>({ isLowBattery: false, level: 1 });

export function useBatteryState() {
  return useContext(BatteryContext);
}

export function BatterySaverProvider({ children }: { children: React.ReactNode }) {
  const [batteryState, setBatteryState] = useState<BatteryState>({ isLowBattery: false, level: 1 });

  useEffect(() => {
    const checkBattery = async () => {
      try {
        // Battery Status API (Chrome/Edge/Samsung Browser)
        const nav = navigator as any;
        if (!nav.getBattery) return;
        
        const battery = await nav.getBattery();
        const update = () => {
          const level = battery.level;
          const isLow = level < 0.2 && !battery.charging;
          setBatteryState({ isLowBattery: isLow, level });
          
          // Apply energy-saving CSS class to html element
          if (isLow) {
            document.documentElement.classList.add('battery-saver');
          } else {
            document.documentElement.classList.remove('battery-saver');
          }
        };

        update();
        battery.addEventListener('levelchange', update);
        battery.addEventListener('chargingchange', update);

        return () => {
          battery.removeEventListener('levelchange', update);
          battery.removeEventListener('chargingchange', update);
        };
      } catch {
        // Battery API not supported, no action needed
      }
    };

    checkBattery();
  }, []);

  return (
    <BatteryContext.Provider value={batteryState}>
      {children}
      {/* Battery Saver CSS — disables animations when active */}
      <style jsx global>{`
        .battery-saver * {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0.01s !important;
        }
        .battery-saver video,
        .battery-saver iframe {
          display: none !important;
        }
        .battery-saver .slider,
        .battery-saver .carousel {
          animation: none !important;
        }
      `}</style>
    </BatteryContext.Provider>
  );
}
