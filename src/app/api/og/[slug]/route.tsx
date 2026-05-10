/**
 * Dynamic OG Image generation API.
 * Generates branded 1200×630 OG images per page slug.
 * Per master-plan-v11 §29 API Routes.
 */

import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';


export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const title = decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #0F2C4D 0%, #1A4068 50%, #0F2C4D 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            fontSize: '36px',
            fontWeight: 900,
            color: '#D4A853',
            letterSpacing: '3px'
          }}>
            UNEOM
          </div>
          <div style={{
            width: '2px',
            height: '28px',
            background: 'rgba(212,168,83,0.4)'
          }} />
          <div style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 500
          }}>
            Saudi Professional Uniforms
          </div>
        </div>

        {/* Title */}
        <div style={{
          fontSize: '52px',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1.2,
          maxWidth: '900px',
          textWrap: 'balance'
        }}>
          {title}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 500
          }}>
            uneom.com
          </div>
          <div style={{
            display: 'flex',
            gap: '24px',
            fontSize: '14px',
            color: 'rgba(212,168,83,0.8)',
            fontWeight: 600,
          }}>
            <span>ISO 9001</span>
            <span>•</span>
            <span>OEKO-TEX</span>
            <span>•</span>
            <span>24 Cities</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
