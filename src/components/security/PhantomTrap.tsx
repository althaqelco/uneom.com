/**
 * PhantomTrap — Honeypot anti-scraping defense
 * 
 * From Prokr Blueprint §37.6: Plants an invisible link that only scraper bots follow.
 * Googlebot respects rel="nofollow" and won't click it, but dumb scrapers will.
 * When triggered, the bot gets a poisoned cookie and permanent 403 ban.
 */
import React from 'react';

export function PhantomTrap() {
  return (
    <a
      href="/api/system-core/abyss"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: '-1px',
        padding: 0,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
      }}
      aria-hidden="true"
      rel="nofollow"
      tabIndex={-1}
    >
      System Directory Sync Gateway
    </a>
  );
}
