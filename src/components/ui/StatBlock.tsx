/**
 * StatBlock — renders a single Information-Gain statistic in editorial style.
 * Used on homepage, industry pillars, and city pages.
 */

interface Props {
  value: string;
  label: string;
  context?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function StatBlock({ value, label, context, size = 'md' }: Props) {
  const valueClass = {
    sm: 'text-4xl',
    md: 'text-5xl lg:text-6xl',
    lg: 'text-6xl lg:text-7xl'
  }[size];

  return (
    <div className="flex flex-col gap-2">
      <div className={`stat-number font-display ${valueClass} font-extrabold leading-none text-navy-900 tracking-tight`}>
        {value}
      </div>
      <div className="text-sm font-semibold uppercase tracking-wider text-accent-700">
        {label}
      </div>
      {context && (
        <p className="mt-1 text-sm leading-relaxed text-ink-500 pretty">
          {context}
        </p>
      )}
    </div>
  );
}
