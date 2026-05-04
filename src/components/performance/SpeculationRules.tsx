/**
 * SpeculationRules — Next-Page Prefetch Accelerator (§38.5.1)
 *
 * Uses the Speculation Rules API (Chrome 110+) to preload likely next pages.
 * This makes navigations appear instant, reducing "SPA slowness."
 * Falls back gracefully on unsupported browsers.
 */
import React from 'react';

export function SpeculationRules() {
  const rules = {
    prerender: [
      {
        where: {
          and: [
            { href_matches: "/quote*" },
            { not: { href_matches: "/api/*" } },
          ],
        },
        eagerness: "moderate",
      },
    ],
    prefetch: [
      {
        where: {
          and: [
            { href_matches: "/*" },
            { not: { href_matches: "/api/*" } },
            { not: { href_matches: "/_next/*" } },
          ],
        },
        eagerness: "conservative",
      },
    ],
  };

  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rules) }}
    />
  );
}
