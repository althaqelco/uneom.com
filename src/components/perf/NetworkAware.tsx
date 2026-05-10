/**
 * Network-aware lite mode detection.
 * On slow connections (2G/3G) or Save-Data mode, adds
 * `uneom-lite-mode` class to <html> to degrade gracefully.
 * Per master-plan-v11 §10.4 (T1).
 */

'use client';

import { useEffect } from 'react';

interface NetworkInformation {
  effectiveType: string;
  saveData: boolean;
}

export function NetworkAware() {
  useEffect(() => {
    if ('connection' in navigator) {
      const conn = (navigator as unknown as { connection: NetworkInformation }).connection;
      if (conn.saveData || /2g|3g/.test(conn.effectiveType)) {
        document.documentElement.classList.add('uneom-lite-mode');
      }
    }
  }, []);

  return null;
}
