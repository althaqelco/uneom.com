/**
 * Eyebrow — small editorial label rendered above a section heading.
 * Establishes hierarchy without competing visually with the H2.
 */

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = '' }: Props) {
  return (
    <span className={`eyebrow ${className}`}>
      {children}
    </span>
  );
}
