import { ImageResponse } from 'next/og';

export const alt = 'UNEOM — Saudi Professional Uniforms';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default Open Graph image — generated dynamically.
 * Brand-coherent, no third-party assets, edge-ready.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0F2C4D',
          padding: '64px',
          position: 'relative'
        }}
      >
        {/* Accent bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '6px',
          background: '#10B981'
        }} />

        {/* Header — UNEOM wordmark */}
        <div style={{
          fontSize: '64px',
          fontWeight: 800,
          color: 'white',
          letterSpacing: '-0.025em',
          marginTop: '24px'
        }}>
          UNEOM
        </div>

        <div style={{ flex: 1 }} />

        {/* Eyebrow */}
        <div style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#34D399',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          marginBottom: '24px'
        }}>
          Saudi Arabia · Since 2013
        </div>

        {/* Headline */}
        <div style={{
          fontSize: '72px',
          fontWeight: 800,
          color: 'white',
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          maxWidth: '900px'
        }}>
          Professional uniforms for the Saudi enterprises that build the kingdom.
        </div>

        <div style={{ flex: 1 }} />

        {/* Footer strip */}
        <div style={{
          display: 'flex',
          gap: '32px',
          fontSize: '20px',
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 500
        }}>
          <span>500+ enterprises</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <span>24 cities</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <span>8 industries</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <span>ISO 9001 + OEKO-TEX</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
