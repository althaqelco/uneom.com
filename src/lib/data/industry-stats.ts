/**
 * UNEOM-verified industry statistics.
 * These are real operational numbers used in blog posts, industry pages,
 * and AI Overviews citations. Updated quarterly.
 *
 * Source: UNEOM operations data 2024–2026.
 */

export interface IndustryStat {
  slug: string;
  industry: string;
  stats: {
    label: string;
    value: string;
    context: string;
  }[];
}

export const INDUSTRY_STATS: IndustryStat[] = [
  {
    slug: 'healthcare',
    industry: 'Healthcare',
    stats: [
      { label: 'Wash cycles per shift (Riyadh)', value: '4.2', context: '38% above global average. Most uniforms aren\'t built for it.' },
      { label: 'Healthcare warranty', value: '18 months', context: '6 months above industry standard.' },
      { label: 'Partner hospitals', value: '38', context: 'Active UNEOM programme contracts across the Kingdom.' },
      { label: 'Scrub replacement cycle', value: '8 months', context: 'Average before colour fade on standard fabrics. UNEOM: 14 months.' }
    ]
  },
  {
    slug: 'hospitality',
    industry: 'Hospitality',
    stats: [
      { label: '5-star hotel programmes', value: '24', context: 'Active across Riyadh, Jeddah, Mecca, and Medina.' },
      { label: 'F&B uniform lifespan', value: '12 months', context: 'Chef jackets endure 300+ industrial wash cycles.' },
      { label: 'Hajj-season deployment', value: '48 hours', context: 'Emergency joiner-kit dispatch during peak season.' },
      { label: 'Custom design turnaround', value: '21 days', context: 'From sketch to first fitting — including cultural compliance review.' }
    ]
  },
  {
    slug: 'aviation',
    industry: 'Aviation',
    stats: [
      { label: 'Airlines served', value: '6', context: 'GCC carriers and Saudi domestic airlines.' },
      { label: 'Crew uniform refresh', value: '24 months', context: 'Standard programme cycle for cabin crew.' },
      { label: 'Fabric weight compliance', value: '180-220 GSM', context: 'GACA-compliant range for in-flight comfort.' },
      { label: 'Cultural compliance rate', value: '100%', context: 'Every design reviewed for hijab integration and modesty standards.' }
    ]
  },
  {
    slug: 'corporate',
    industry: 'Corporate',
    stats: [
      { label: 'Corporate clients', value: '150+', context: 'Active programme contracts across all sectors.' },
      { label: 'Repeat contract rate', value: '78%', context: 'Across 12 years — built for the second contract, not the first sale.' },
      { label: 'Executive suit lead time', value: '14 days', context: 'Repeat-programme production for standard sizes.' },
      { label: 'Size coverage', value: 'XS–5XL', context: 'Full inclusive sizing on all corporate lines.' }
    ]
  },
  {
    slug: 'education',
    industry: 'Education',
    stats: [
      { label: 'Schools served', value: '85+', context: 'International, private, and government-affiliated schools.' },
      { label: 'Student uniform warranty', value: '12 months', context: 'Colour-fast guarantee under daily wash.' },
      { label: 'Joiner-kit dispatch', value: '48 hours', context: 'Mid-term enrolment kit delivery nationwide.' },
      { label: 'Fabric UV protection', value: 'UPF 30+', context: 'All outdoor PE uniforms include UV blocking.' }
    ]
  },
  {
    slug: 'manufacturing',
    industry: 'Manufacturing',
    stats: [
      { label: 'FR coverall flash-arc rating', value: 'HRC 2 (8 cal/cm²)', context: 'NFPA 70E compliant for electrical environments.' },
      { label: 'Industrial clients', value: '60+', context: 'Petrochemical, FMCG, and construction sectors.' },
      { label: 'Hi-vis compliance', value: 'EN ISO 20471', context: 'Class 2 and Class 3 for all manufacturing lines.' },
      { label: 'PPE programme lead time', value: '21 days', context: 'Including on-site fitting and safety certification.' }
    ]
  },
  {
    slug: 'security',
    industry: 'Security',
    stats: [
      { label: 'Security companies served', value: '200+', context: 'Corporate, compound, and event security.' },
      { label: 'Tactical set durability', value: '500+ hours field use', context: 'Tested in Saudi climate conditions.' },
      { label: 'HCIS compliance rate', value: '100%', context: 'All security uniforms meet High Commission for Industrial Security specs.' },
      { label: 'Guard uniform turnaround', value: '14 days', context: 'Standard sizing with custom badge integration.' }
    ]
  },
  {
    slug: 'retail',
    industry: 'Retail',
    stats: [
      { label: 'Retail chains served', value: '45+', context: 'Mall-based and standalone retail brands.' },
      { label: 'Standard fabric lifespan', value: '6 months', context: 'Industry average under 12-hour shifts and daily laundry.' },
      { label: 'UNEOM retail lifespan', value: '14 months', context: 'Cotton-spandex twill with 200-cycle reactive-dye fixation.' },
      { label: 'Multi-store deployment', value: '100+ locations', context: 'Single contract, single ops contact, distributed delivery.' }
    ]
  }
];

export const INDUSTRY_STATS_BY_SLUG = Object.fromEntries(
  INDUSTRY_STATS.map(s => [s.slug, s])
);
