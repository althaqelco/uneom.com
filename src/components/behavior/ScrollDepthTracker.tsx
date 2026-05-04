/**
 * ScrollDepthTracker — Engagement Signal Amplifier (§38.1)
 * 
 * Tracks scroll depth milestones (25%, 50%, 75%, 100%) and fires
 * GA4 events. Google uses scroll depth as a signal for content quality
 * via the Navboost system.
 * 
 * Also marks high-engagement users (75%+ scroll) with a cookie
 * for retargeting purposes.
 */
'use client';

import { useEffect, useRef } from 'react';

export function ScrollDepthTracker() {
  const milestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.round((window.scrollY / docHeight) * 100);
      const checkpoints = [25, 50, 75, 100];

      for (const checkpoint of checkpoints) {
        if (scrollPercent >= checkpoint && !milestones.current.has(checkpoint)) {
          milestones.current.add(checkpoint);

          // Fire GA4 event
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${checkpoint}%`,
              value: checkpoint,
              non_interaction: true,
            });
          }

          // Mark high-engagement user
          if (checkpoint >= 75) {
            document.cookie = 'uneom_engaged=1; path=/; max-age=2592000; SameSite=Lax';
          }
        }
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return null; // Invisible tracker
}
