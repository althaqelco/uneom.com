/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['@/lib/data/images']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://wa.me https://firebaseinstallations.googleapis.com; frame-ancestors 'none';" }
        ]
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      },
      {
        source: '/manifest.json',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }]
      },
      {
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: 'Service-Worker-Allowed', value: '/' }
        ]
      },
      {
        source: '/((?!_next|api|images|fonts).*)',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }]
      },
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }]
      },
      {
        /* Agent discovery — Link headers (RFC 8288 + RFC 9727) */
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/mcp/server-card.json>; rel="service-desc", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="service-doc"'
          }
        ]
      },
      {
        source: '/.well-known/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }]
      }
    ];
  },

  async redirects() {
    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 1 — Wildcard catch-alls (process FIRST; order matters in Next.js)
    // ─────────────────────────────────────────────────────────────────────────
    const wildcards = [
      // City × Industry matrix → city hub  (~500 old URLs, 2 rules)
      { source: '/locations/:city/:industry/',    destination: '/locations/:city/',    permanent: true },
      { source: '/ar/locations/:city/:industry/', destination: '/ar/locations/:city/', permanent: true },

      // Tag pages → blog hub (all tag variants with encoded chars)
      { source: '/blog/tag/',      destination: '/blog/',      permanent: true },
      { source: '/ar/blog/tag/',   destination: '/ar/blog/',   permanent: true },
      { source: '/blog/tag/:tag*/',    destination: '/blog/',      permanent: true },
      { source: '/ar/blog/tag/:tag*/', destination: '/ar/blog/',   permanent: true },

      // Authors index + individual → about
      { source: '/authors/',             destination: '/about/',      permanent: true },
      { source: '/ar/authors/',          destination: '/ar/about/',   permanent: true },
      { source: '/authors/:slug/',       destination: '/about/',      permanent: true },
      { source: '/ar/authors/:slug/',    destination: '/ar/about/',   permanent: true },

      // Mobile pages → home
      { source: '/mobile/',    destination: '/',      permanent: true },
      { source: '/ar/mobile/', destination: '/ar/',   permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 2 — /blog/posts/ specific corrections
    // These must come BEFORE the blog/posts wildcard so they take precedence
    // when the old /posts/{slug} maps to a DIFFERENT new slug.
    // ─────────────────────────────────────────────────────────────────────────
    const blogPostsSpecific = [
      // Aviation
      { source: '/blog/posts/aviation-uniform-design/',          destination: '/blog/airline-uniform-design-cultural-identity/', permanent: true },
      { source: '/ar/blog/posts/aviation-uniform-design/',       destination: '/ar/blog/airline-uniform-design-cultural-identity/', permanent: true },
      { source: '/blog/posts/uniforms-airline-brand-identity/',  destination: '/blog/aviation-uniforms-brand-identity/',  permanent: true },
      { source: '/ar/blog/posts/uniforms-airline-brand-identity/', destination: '/ar/blog/aviation-uniforms-brand-identity/', permanent: true },
      { source: '/blog/posts/evolving-trends-gulf-airline-uniforms/', destination: '/blog/aviation-uniforms-brand-identity/', permanent: true },
      { source: '/ar/blog/posts/evolving-trends-gulf-airline-uniforms/', destination: '/ar/blog/aviation-uniforms-brand-identity/', permanent: true },
      { source: '/blog/posts/islamic-compliant-aviation-attire/', destination: '/blog/airline-uniform-design-cultural-identity/', permanent: true },
      { source: '/ar/blog/posts/islamic-compliant-aviation-attire/', destination: '/ar/blog/airline-uniform-design-cultural-identity/', permanent: true },

      // Corporate / Education
      { source: '/blog/posts/corporate-identity-uniforms/',         destination: '/blog/corporate-dress-code-evolution/', permanent: true },
      { source: '/ar/blog/posts/corporate-identity-uniforms/',      destination: '/ar/blog/corporate-dress-code-evolution/', permanent: true },
      { source: '/blog/posts/corporate-uniform-employee-satisfaction/', destination: '/blog/corporate-uniform-psychology/', permanent: true },
      { source: '/ar/blog/posts/corporate-uniform-employee-satisfaction/', destination: '/ar/blog/corporate-uniform-psychology/', permanent: true },
      { source: '/blog/posts/school-uniforms-academic-performance/', destination: '/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/ar/blog/posts/school-uniforms-academic-performance/', destination: '/ar/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/blog/posts/vision-2030-reshaping-dress-codes/',   destination: '/blog/corporate-dress-code-evolution/', permanent: true },
      { source: '/ar/blog/posts/vision-2030-reshaping-dress-codes/', destination: '/ar/blog/corporate-dress-code-evolution/', permanent: true },

      // Healthcare
      { source: '/blog/posts/healthcare-uniforms/',                 destination: '/blog/healthcare-uniforms-infection-control/', permanent: true },
      { source: '/ar/blog/posts/healthcare-uniforms/',              destination: '/ar/blog/healthcare-uniforms-infection-control/', permanent: true },
      { source: '/blog/posts/healthcare-uniforms-innovation/',      destination: '/blog/advanced-fabrics-healthcare-uniforms/', permanent: true },
      { source: '/ar/blog/posts/healthcare-uniforms-innovation/',   destination: '/ar/blog/advanced-fabrics-healthcare-uniforms/', permanent: true },
      { source: '/blog/posts/medical-scrubs-evolution/',            destination: '/blog/medical-scrubs-evolution-saudi/', permanent: true },
      { source: '/ar/blog/posts/medical-scrubs-evolution/',         destination: '/ar/blog/medical-scrubs-evolution-saudi/', permanent: true },

      // Hospitality
      { source: '/blog/posts/hotel-staff-uniforms/',                destination: '/blog/hotel-staff-uniform-guide/', permanent: true },
      { source: '/ar/blog/posts/hotel-staff-uniforms/',             destination: '/ar/blog/hotel-staff-uniform-guide/', permanent: true },
      { source: '/blog/posts/hospitality-uniforms-cultural-identity/', destination: '/blog/hospitality-uniforms-cultural-identity/', permanent: true },

      // Manufacturing / Security
      { source: '/blog/posts/industrial-protective-clothing-advances/', destination: '/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/ar/blog/posts/industrial-protective-clothing-advances/', destination: '/ar/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/blog/posts/industrial-safety-compliance-guide/',  destination: '/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/ar/blog/posts/industrial-safety-compliance-guide/', destination: '/ar/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/blog/posts/security-uniform-standards/',          destination: '/blog/advanced-fabrics-security-uniforms/', permanent: true },
      { source: '/ar/blog/posts/security-uniform-standards/',       destination: '/ar/blog/advanced-fabrics-security-uniforms/', permanent: true },

      // Sustainability
      { source: '/blog/posts/sustainable-fabrics/',                 destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/posts/sustainable-fabrics/',              destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/posts/sustainable-school-uniforms-saudi/',   destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/posts/sustainable-school-uniforms-saudi/', destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/posts/sustainable-uniform-solutions/',       destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/posts/sustainable-uniform-solutions/',    destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/posts/sustainable-uniforms-2024-trends/',    destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/posts/sustainable-uniforms-2024-trends/', destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/posts/sustainable-uniforms/',                destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/posts/sustainable-uniforms/',             destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/posts/textile-innovations-2025/',            destination: '/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/ar/blog/posts/textile-innovations-2025/',         destination: '/ar/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/blog/posts/uniform-customization/',               destination: '/blog/choosing-uniform-supplier-guide/', permanent: true },
      { source: '/ar/blog/posts/uniform-customization/',            destination: '/ar/blog/choosing-uniform-supplier-guide/', permanent: true },
      { source: '/blog/posts/uniform-maintenance-tips/',            destination: '/blog/choosing-uniform-supplier-guide/', permanent: true },
      { source: '/ar/blog/posts/uniform-maintenance-tips/',         destination: '/ar/blog/choosing-uniform-supplier-guide/', permanent: true },
      { source: '/blog/posts/uniform-trends-2023/',                 destination: '/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/ar/blog/posts/uniform-trends-2023/',              destination: '/ar/blog/future-professional-wear-digital-age/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 3 — /blog/posts/ wildcard (catches all remaining posts/{slug}
    // where old slug == new slug — avoids 404 for dual-routing legacy)
    // ─────────────────────────────────────────────────────────────────────────
    const blogPostsWildcard = [
      { source: '/blog/posts/:slug/',    destination: '/blog/:slug/',    permanent: true },
      { source: '/ar/blog/posts/:slug/', destination: '/ar/blog/:slug/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 4 — Deprecated blog posts → best-match new post
    // Old posts that no longer exist; each redirects to the semantically
    // closest new evergreen post to preserve topical link equity.
    // ─────────────────────────────────────────────────────────────────────────
    const blogDeprecated = [
      // Healthcare cluster
      { source: '/blog/healthcare-uniforms/',                  destination: '/blog/healthcare-uniforms-infection-control/', permanent: true },
      { source: '/ar/blog/healthcare-uniforms/',               destination: '/ar/blog/healthcare-uniforms-infection-control/', permanent: true },
      { source: '/blog/healthcare-compliance-guide/',          destination: '/blog/healthcare-uniforms-infection-control/', permanent: true },
      { source: '/ar/blog/healthcare-compliance-guide/',       destination: '/ar/blog/healthcare-uniforms-infection-control/', permanent: true },
      { source: '/blog/healthcare-uniforms-innovation/',       destination: '/blog/advanced-fabrics-healthcare-uniforms/', permanent: true },
      { source: '/ar/blog/healthcare-uniforms-innovation/',    destination: '/ar/blog/advanced-fabrics-healthcare-uniforms/', permanent: true },
      { source: '/blog/medical-textile-innovation/',           destination: '/blog/advanced-fabrics-healthcare-uniforms/', permanent: true },
      { source: '/ar/blog/medical-textile-innovation/',        destination: '/ar/blog/advanced-fabrics-healthcare-uniforms/', permanent: true },
      { source: '/blog/sustainable-healthcare-uniforms/',      destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-healthcare-uniforms/',   destination: '/ar/blog/circular-economy-uniforms/', permanent: true },

      // Hospitality cluster
      { source: '/blog/restaurant-uniform-trends/',            destination: '/blog/chef-uniform-design-guide/', permanent: true },
      { source: '/ar/blog/restaurant-uniform-trends/',         destination: '/ar/blog/chef-uniform-design-guide/', permanent: true },

      // Aviation cluster
      { source: '/blog/evolving-trends-gulf-airline-uniforms/', destination: '/blog/aviation-uniforms-brand-identity/', permanent: true },
      { source: '/ar/blog/evolving-trends-gulf-airline-uniforms/', destination: '/ar/blog/aviation-uniforms-brand-identity/', permanent: true },
      { source: '/blog/future-aviation-uniforms-gcc/',         destination: '/blog/airline-uniform-design-cultural-identity/', permanent: true },
      { source: '/ar/blog/future-aviation-uniforms-gcc/',      destination: '/ar/blog/airline-uniform-design-cultural-identity/', permanent: true },
      { source: '/blog/islamic-compliant-aviation-attire/',    destination: '/blog/airline-uniform-design-cultural-identity/', permanent: true },
      { source: '/ar/blog/islamic-compliant-aviation-attire/', destination: '/ar/blog/airline-uniform-design-cultural-identity/', permanent: true },
      { source: '/blog/uniforms-airline-brand-identity/',      destination: '/blog/aviation-uniforms-brand-identity/', permanent: true },
      { source: '/ar/blog/uniforms-airline-brand-identity/',   destination: '/ar/blog/aviation-uniforms-brand-identity/', permanent: true },

      // Corporate + Education cluster
      { source: '/blog/corporate-uniform-employee-satisfaction/', destination: '/blog/corporate-uniform-psychology/', permanent: true },
      { source: '/ar/blog/corporate-uniform-employee-satisfaction/', destination: '/ar/blog/corporate-uniform-psychology/', permanent: true },
      { source: '/blog/corporate-uniforms-brand-culture/',     destination: '/blog/corporate-dress-code-evolution/', permanent: true },
      { source: '/ar/blog/corporate-uniforms-brand-culture/',  destination: '/ar/blog/corporate-dress-code-evolution/', permanent: true },
      { source: '/blog/corporate-uniforms-brand-perception/',  destination: '/blog/corporate-uniform-psychology/', permanent: true },
      { source: '/ar/blog/corporate-uniforms-brand-perception/', destination: '/ar/blog/corporate-uniform-psychology/', permanent: true },
      { source: '/blog/fabrics-professional-attire/',          destination: '/blog/fabrics-student-uniforms/', permanent: true },
      { source: '/ar/blog/fabrics-professional-attire/',       destination: '/ar/blog/fabrics-student-uniforms/', permanent: true },
      { source: '/blog/school-uniform-buyer-guide/',           destination: '/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/ar/blog/school-uniform-buyer-guide/',        destination: '/ar/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/blog/school-uniforms-academic-performance/', destination: '/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/ar/blog/school-uniforms-academic-performance/', destination: '/ar/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/blog/school-uniforms-national-identity-saudi/', destination: '/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/ar/blog/school-uniforms-national-identity-saudi/', destination: '/ar/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/blog/teacher-uniform-professional-guide/',   destination: '/blog/national-day-corporate-uniforms/', permanent: true },
      { source: '/ar/blog/teacher-uniform-professional-guide/', destination: '/ar/blog/national-day-corporate-uniforms/', permanent: true },
      { source: '/blog/uniforms-modern-education/',            destination: '/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/ar/blog/uniforms-modern-education/',         destination: '/ar/blog/cultural-identity-saudi-school-uniforms/', permanent: true },
      { source: '/blog/vision-2030-reshaping-dress-codes/',    destination: '/blog/corporate-dress-code-evolution/', permanent: true },
      { source: '/ar/blog/vision-2030-reshaping-dress-codes/', destination: '/ar/blog/corporate-dress-code-evolution/', permanent: true },

      // Manufacturing + Security cluster
      { source: '/blog/industrial-protective-clothing-advances/', destination: '/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/ar/blog/industrial-protective-clothing-advances/', destination: '/ar/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/blog/industrial-safety-compliance-guide/',   destination: '/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/ar/blog/industrial-safety-compliance-guide/', destination: '/ar/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/blog/industrial-safety-standards/',          destination: '/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/ar/blog/industrial-safety-standards/',       destination: '/ar/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/blog/safety-standards-saudi-manufacturing/', destination: '/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/ar/blog/safety-standards-saudi-manufacturing/', destination: '/ar/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/blog/workwear-innovations-saudi-factories/', destination: '/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/ar/blog/workwear-innovations-saudi-factories/', destination: '/ar/blog/industrial-safety-workwear-saudi/', permanent: true },
      { source: '/blog/security-uniform-psychology/',          destination: '/blog/advanced-fabrics-security-uniforms/', permanent: true },
      { source: '/ar/blog/security-uniform-psychology/',       destination: '/ar/blog/advanced-fabrics-security-uniforms/', permanent: true },
      { source: '/blog/security-uniform-safety-standards/',    destination: '/blog/advanced-fabrics-security-uniforms/', permanent: true },
      { source: '/ar/blog/security-uniform-safety-standards/', destination: '/ar/blog/advanced-fabrics-security-uniforms/', permanent: true },
      { source: '/blog/security-uniforms-authority-trust/',    destination: '/blog/bulletproof-protection-technologies/', permanent: true },
      { source: '/ar/blog/security-uniforms-authority-trust/', destination: '/ar/blog/bulletproof-protection-technologies/', permanent: true },
      { source: '/blog/smart-security-uniforms-future/',       destination: '/blog/advanced-fabrics-security-uniforms/', permanent: true },
      { source: '/ar/blog/smart-security-uniforms-future/',    destination: '/ar/blog/advanced-fabrics-security-uniforms/', permanent: true },

      // Retail cluster
      { source: '/blog/retail-uniform-impact/',                destination: '/blog/mall-retail-uniforms-excellence/', permanent: true },
      { source: '/ar/blog/retail-uniform-impact/',             destination: '/ar/blog/mall-retail-uniforms-excellence/', permanent: true },
      { source: '/blog/retail-uniform-selection-guide/',       destination: '/blog/mall-retail-uniforms-excellence/', permanent: true },
      { source: '/ar/blog/retail-uniform-selection-guide/',    destination: '/ar/blog/mall-retail-uniforms-excellence/', permanent: true },
      { source: '/blog/sustainable-retail-uniforms/',          destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-retail-uniforms/',       destination: '/ar/blog/circular-economy-uniforms/', permanent: true },

      // Sustainability + Trends cluster
      { source: '/blog/sustainable-fabrics/',                  destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-fabrics/',               destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/sustainable-school-uniforms-saudi/',    destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-school-uniforms-saudi/', destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/sustainable-uniform-practices/',        destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-uniform-practices/',     destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/sustainable-uniform-solutions/',        destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-uniform-solutions/',     destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/sustainable-uniforms-2024-trends/',     destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-uniforms-2024-trends/',  destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/sustainable-uniforms/',                 destination: '/blog/circular-economy-uniforms/', permanent: true },
      { source: '/ar/blog/sustainable-uniforms/',              destination: '/ar/blog/circular-economy-uniforms/', permanent: true },
      { source: '/blog/smart-fabrics-professional-wear/',      destination: '/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/ar/blog/smart-fabrics-professional-wear/',   destination: '/ar/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/blog/textile-innovations-2025/',             destination: '/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/ar/blog/textile-innovations-2025/',          destination: '/ar/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/blog/top-10-uniform-innovations-2025/',      destination: '/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/ar/blog/top-10-uniform-innovations-2025/',   destination: '/ar/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/blog/uniform-trends-2023/',                  destination: '/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/ar/blog/uniform-trends-2023/',               destination: '/ar/blog/future-professional-wear-digital-age/', permanent: true },
      { source: '/blog/uniform-trends-2025-saudi-market/',     destination: '/blog/choosing-uniform-supplier-guide/', permanent: true },
      { source: '/ar/blog/uniform-trends-2025-saudi-market/',  destination: '/ar/blog/choosing-uniform-supplier-guide/', permanent: true },
      { source: '/blog/uniform-budget-planning-2026/',         destination: '/blog/choosing-uniform-supplier-guide/', permanent: true },
      { source: '/ar/blog/uniform-budget-planning-2026/',      destination: '/ar/blog/choosing-uniform-supplier-guide/', permanent: true },

      // Placeholder posts → blog hub
      { source: '/blog/placeholder1/',        destination: '/blog/', permanent: true },
      { source: '/ar/blog/placeholder1/',     destination: '/ar/blog/', permanent: true },
      { source: '/blog/placeholder2/',        destination: '/blog/', permanent: true },
      { source: '/ar/blog/placeholder2/',     destination: '/ar/blog/', permanent: true },
      { source: '/blog/placeholder-aviation1/', destination: '/blog/category/aviation/', permanent: true },
      { source: '/ar/blog/placeholder-aviation1/', destination: '/ar/blog/category/aviation/', permanent: true },
      { source: '/blog/placeholder-aviation2/', destination: '/blog/category/aviation/', permanent: true },
      { source: '/ar/blog/placeholder-aviation2/', destination: '/ar/blog/category/aviation/', permanent: true },
      { source: '/blog/placeholder-corporate1/', destination: '/blog/category/corporate-education/', permanent: true },
      { source: '/ar/blog/placeholder-corporate1/', destination: '/ar/blog/category/corporate-education/', permanent: true },
      { source: '/blog/placeholder-corporate2/', destination: '/blog/category/corporate-education/', permanent: true },
      { source: '/ar/blog/placeholder-corporate2/', destination: '/ar/blog/category/corporate-education/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 5 — Industries consolidation (EN + AR mirrors)
    // ─────────────────────────────────────────────────────────────────────────
    const industries = [
      { source: '/industries/factory-industry/',     destination: '/industries/manufacturing/', permanent: true },
      { source: '/ar/industries/factory-industry/',  destination: '/ar/industries/manufacturing/', permanent: true },
      { source: '/industries/supply-manufacturing/', destination: '/industries/manufacturing/', permanent: true },
      { source: '/ar/industries/supply-manufacturing/', destination: '/ar/industries/manufacturing/', permanent: true },
      { source: '/industries/retail-shops/',         destination: '/industries/retail/', permanent: true },
      { source: '/ar/industries/retail-shops/',      destination: '/ar/industries/retail/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 6 — Services consolidation
    // ─────────────────────────────────────────────────────────────────────────
    const services = [
      // Tactical / security programs → industry pillar (not a service)
      { source: '/services/healthcare-uniform-program/',     destination: '/industries/healthcare/', permanent: true },
      { source: '/ar/services/healthcare-uniform-program/',  destination: '/ar/industries/healthcare/', permanent: true },
      { source: '/services/security-uniform-program/',       destination: '/industries/security/', permanent: true },
      { source: '/ar/services/security-uniform-program/',    destination: '/ar/industries/security/', permanent: true },
      { source: '/services/professional-security-program/',  destination: '/industries/security/', permanent: true },
      { source: '/ar/services/professional-security-program/', destination: '/ar/industries/security/', permanent: true },
      { source: '/services/lightweight-tactical-program/',   destination: '/industries/security/', permanent: true },
      { source: '/ar/services/lightweight-tactical-program/', destination: '/ar/industries/security/', permanent: true },
      { source: '/services/tactical-equipment-program/',     destination: '/industries/security/', permanent: true },
      { source: '/ar/services/tactical-equipment-program/',  destination: '/ar/industries/security/', permanent: true },
      { source: '/services/tactical-patrol-program/',        destination: '/industries/security/', permanent: true },
      { source: '/ar/services/tactical-patrol-program/',     destination: '/ar/industries/security/', permanent: true },

      // Program management consolidation
      { source: '/services/ppe-program-management/',         destination: '/services/program-management/', permanent: true },
      { source: '/ar/services/ppe-program-management/',      destination: '/ar/services/program-management/', permanent: true },
      { source: '/services/uniform-program-management/',     destination: '/services/program-management/', permanent: true },
      { source: '/ar/services/uniform-program-management/',  destination: '/ar/services/program-management/', permanent: true },
      { source: '/services/corporate-programs/',             destination: '/services/program-management/', permanent: true },
      { source: '/ar/services/corporate-programs/',          destination: '/ar/services/program-management/', permanent: true },

      // Renamed / merged services
      { source: '/services/weather-protection-program/',     destination: '/resources/weather-protection-guide/', permanent: true },
      { source: '/ar/services/weather-protection-program/',  destination: '/ar/resources/weather-protection-guide/', permanent: true },
      { source: '/services/manufacturing/',                  destination: '/industries/manufacturing/', permanent: true },
      { source: '/ar/services/manufacturing/',               destination: '/ar/industries/manufacturing/', permanent: true },
      { source: '/services/technical-finishes/',             destination: '/services/fabric-selection/', permanent: true },
      { source: '/ar/services/technical-finishes/',          destination: '/ar/services/fabric-selection/', permanent: true },
      { source: '/services/uniform-policies/',               destination: '/resources/policy-templates/', permanent: true },
      { source: '/ar/services/uniform-policies/',            destination: '/ar/resources/policy-templates/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 7 — Resources consolidation
    // ─────────────────────────────────────────────────────────────────────────
    const resources = [
      // Merged into existing guides
      { source: '/resources/nfpa70e-guide/',               destination: '/resources/electrical-safety-ppe-guide/', permanent: true },
      { source: '/ar/resources/nfpa70e-guide/',            destination: '/ar/resources/electrical-safety-ppe-guide/', permanent: true },
      { source: '/resources/safety-standards-guide/',      destination: '/resources/electrical-safety-ppe-guide/', permanent: true },
      { source: '/ar/resources/safety-standards-guide/',   destination: '/ar/resources/electrical-safety-ppe-guide/', permanent: true },
      { source: '/resources/tactical-equipment-standards/', destination: '/resources/security-equipment-standards/', permanent: true },
      { source: '/ar/resources/tactical-equipment-standards/', destination: '/ar/resources/security-equipment-standards/', permanent: true },
      { source: '/resources/tactical-outerwear-standards/', destination: '/resources/security-equipment-standards/', permanent: true },
      { source: '/ar/resources/tactical-outerwear-standards/', destination: '/ar/resources/security-equipment-standards/', permanent: true },
      { source: '/resources/lightweight-tactical-guide/',  destination: '/resources/security-equipment-standards/', permanent: true },
      { source: '/ar/resources/lightweight-tactical-guide/', destination: '/ar/resources/security-equipment-standards/', permanent: true },
      { source: '/resources/fit-optimization/',            destination: '/resources/size-guide/', permanent: true },
      { source: '/ar/resources/fit-optimization/',         destination: '/ar/resources/size-guide/', permanent: true },
      { source: '/resources/fabric-technology/',           destination: '/resources/fabric-guide/', permanent: true },
      { source: '/ar/resources/fabric-technology/',        destination: '/ar/resources/fabric-guide/', permanent: true },

      // Sub-pages → parent or best match
      { source: '/resources/fabric-guide/healthcare/',     destination: '/resources/healthcare-uniform-standards/', permanent: true },
      { source: '/ar/resources/fabric-guide/healthcare/',  destination: '/ar/resources/healthcare-uniform-standards/', permanent: true },
      { source: '/resources/size-guide/medical/',          destination: '/resources/size-guide/', permanent: true },
      { source: '/ar/resources/size-guide/medical/',       destination: '/ar/resources/size-guide/', permanent: true },
      { source: '/resources/policy-templates/hospital/',   destination: '/resources/policy-templates/', permanent: true },
      { source: '/ar/resources/policy-templates/hospital/', destination: '/ar/resources/policy-templates/', permanent: true },

      // Removed resources → hub or canonical alternative
      { source: '/resources/events/',                      destination: '/resources/', permanent: true },
      { source: '/ar/resources/events/',                   destination: '/ar/resources/', permanent: true },
      { source: '/resources/case-studies/',                destination: '/case-studies/', permanent: true },
      { source: '/ar/resources/case-studies/',             destination: '/ar/case-studies/', permanent: true },
      { source: '/resources/guides/',                      destination: '/resources/', permanent: true },
      { source: '/ar/resources/guides/',                   destination: '/ar/resources/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 8 — Shop: renamed categories
    // Old category slug → new category slug (product data restructure)
    // ─────────────────────────────────────────────────────────────────────────
    const shopCategories = [
      // culinary-uniforms merged into hospitality-attire
      { source: '/shop/culinary-uniforms/',                   destination: '/shop/hospitality-attire/', permanent: true },
      { source: '/ar/shop/culinary-uniforms/',                destination: '/ar/shop/hospitality-attire/', permanent: true },

      // Category slug changes (old → new)
      { source: '/shop/aviation-uniforms/',                   destination: '/shop/aviation/', permanent: true },
      { source: '/ar/shop/aviation-uniforms/',                destination: '/ar/shop/aviation/', permanent: true },
      { source: '/shop/corporate-workwear/',                  destination: '/shop/corporate/', permanent: true },
      { source: '/ar/shop/corporate-workwear/',               destination: '/ar/shop/corporate/', permanent: true },
      { source: '/shop/education-uniforms/',                  destination: '/shop/education/', permanent: true },
      { source: '/ar/shop/education-uniforms/',               destination: '/ar/shop/education/', permanent: true },
      { source: '/shop/industrial-uniforms/',                 destination: '/shop/manufacturing/', permanent: true },
      { source: '/ar/shop/industrial-uniforms/',              destination: '/ar/shop/manufacturing/', permanent: true },
      { source: '/shop/retail-uniforms/',                     destination: '/shop/retail/', permanent: true },
      { source: '/ar/shop/retail-uniforms/',                  destination: '/ar/shop/retail/', permanent: true },
      { source: '/shop/security-uniforms/',                   destination: '/shop/security/', permanent: true },
      { source: '/ar/shop/security-uniforms/',                destination: '/ar/shop/security/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 9 — Shop: renamed products
    // Old product slug → best-match new product slug under the new category
    // ─────────────────────────────────────────────────────────────────────────
    const shopProducts = [
      // culinary → hospitality-attire
      { source: '/shop/culinary-uniforms/executive-chef-coat/',    destination: '/shop/hospitality-attire/chef-jacket-classic/', permanent: true },
      { source: '/ar/shop/culinary-uniforms/executive-chef-coat/', destination: '/ar/shop/hospitality-attire/chef-jacket-classic/', permanent: true },

      // hospitality-attire product slug change
      { source: '/shop/hospitality-attire/luxury-hotel-uniform/',    destination: '/shop/hospitality-attire/hotel-front-desk/', permanent: true },
      { source: '/ar/shop/hospitality-attire/luxury-hotel-uniform/', destination: '/ar/shop/hospitality-attire/hotel-front-desk/', permanent: true },

      // aviation: category renamed + product slug kept
      { source: '/shop/aviation-uniforms/airline-crew-uniform/',    destination: '/shop/aviation/airline-crew-uniform/', permanent: true },
      { source: '/ar/shop/aviation-uniforms/airline-crew-uniform/', destination: '/ar/shop/aviation/airline-crew-uniform/', permanent: true },

      // corporate: category renamed + product slug kept
      { source: '/shop/corporate-workwear/executive-suit/',    destination: '/shop/corporate/executive-suit/', permanent: true },
      { source: '/ar/shop/corporate-workwear/executive-suit/', destination: '/ar/shop/corporate/executive-suit/', permanent: true },

      // education: category renamed + product slug changed
      { source: '/shop/education-uniforms/premium-school-uniforms/',    destination: '/shop/education/student-uniform-boys/', permanent: true },
      { source: '/ar/shop/education-uniforms/premium-school-uniforms/', destination: '/ar/shop/education/student-uniform-boys/', permanent: true },

      // industrial → manufacturing + product slug changed
      { source: '/shop/industrial-uniforms/industrial-coverall/',    destination: '/shop/manufacturing/coverall-fr/', permanent: true },
      { source: '/ar/shop/industrial-uniforms/industrial-coverall/', destination: '/ar/shop/manufacturing/coverall-fr/', permanent: true },

      // medical-scrubs: product slug changed
      { source: '/shop/medical-scrubs/premium-scrubs-set/',    destination: '/shop/medical-scrubs/scrub-set-premium/', permanent: true },
      { source: '/ar/shop/medical-scrubs/premium-scrubs-set/', destination: '/ar/shop/medical-scrubs/scrub-set-premium/', permanent: true },

      // retail: category renamed + product slug changed
      { source: '/shop/retail-uniforms/luxury-retail-collection/',    destination: '/shop/retail/retail-staff-polo/', permanent: true },
      { source: '/ar/shop/retail-uniforms/luxury-retail-collection/', destination: '/ar/shop/retail/retail-staff-polo/', permanent: true },

      // security: category renamed + product slugs changed
      { source: '/shop/security-uniforms/security-officer-uniform/',    destination: '/shop/security/guard-uniform-classic/', permanent: true },
      { source: '/ar/shop/security-uniforms/security-officer-uniform/', destination: '/ar/shop/security/guard-uniform-classic/', permanent: true },
      { source: '/shop/security-uniforms/tactical-security-vest/',    destination: '/shop/security/security-tactical-set/', permanent: true },
      { source: '/ar/shop/security-uniforms/tactical-security-vest/', destination: '/ar/shop/security/security-tactical-set/', permanent: true },
    ];

    // ─────────────────────────────────────────────────────────────────────────
    // LAYER 10 — Case study slug changes
    // Two slugs were shortened during the data consolidation.
    // ─────────────────────────────────────────────────────────────────────────
    const caseStudies = [
      { source: '/case-studies/hospital-aesthetic-clinic/',    destination: '/case-studies/hospital-aesthetic/', permanent: true },
      { source: '/ar/case-studies/hospital-aesthetic-clinic/', destination: '/ar/case-studies/hospital-aesthetic/', permanent: true },
      { source: '/case-studies/luxury-salon-evolution/',       destination: '/case-studies/luxury-salon/', permanent: true },
      { source: '/ar/case-studies/luxury-salon-evolution/',    destination: '/ar/case-studies/luxury-salon/', permanent: true },
    ];

    return [
      ...wildcards,
      ...blogPostsSpecific,
      ...blogPostsWildcard,
      ...blogDeprecated,
      ...industries,
      ...caseStudies,
      ...services,
      ...resources,
      ...shopCategories,
      ...shopProducts,
    ];
  }
};

export default nextConfig;
