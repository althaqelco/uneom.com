import type { Config } from 'tailwindcss';

/**
 * UNEOM brand system.
 * Single accent: emerald-600 (#10B981 — Saudi flag green undertone).
 * No generic gradients. Subtle elevations. 8pt spacing grid.
 */
const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        ink: {
          50:  '#F7F8FA',
          100: '#EDEFF2',
          200: '#D5D9E0',
          300: '#A8B0BD',
          400: '#6E7785',
          500: '#475569', // slate body text
          600: '#2D3748',
          700: '#1F2937',
          800: '#111827',
          900: '#0B1220',
          950: '#070A12'
        },
        navy: {
          50:  '#EEF2F8',
          100: '#D6DFEC',
          200: '#A8BAD3',
          300: '#7993B6',
          400: '#4D6F9A',
          500: '#2C507F',
          600: '#1C3D6A',
          700: '#162F52',
          800: '#0F2C4D',  // brand primary
          900: '#0A1F37',
          950: '#06121F'
        },
        accent: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',  // brand accent
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        }
      },
      fontFamily: {
        sans: ['var(--font-tajawal)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-tajawal)', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Editorial scale — generous, confident
        'display-2xl': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-xl':  ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.08', letterSpacing: '-0.022em', fontWeight: '800' }],
        'display-lg':  ['clamp(2rem, 4vw, 3.25rem)',   { lineHeight: '1.12', letterSpacing: '-0.018em', fontWeight: '700' }],
        'display':     ['clamp(1.625rem, 3vw, 2.5rem)', { lineHeight: '1.18', letterSpacing: '-0.012em', fontWeight: '700' }]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      },
      maxWidth: {
        'prose-lg': '68ch',
        'prose-xl': '76ch'
      },
      boxShadow: {
        'elevation-sm': '0 1px 2px rgba(15, 44, 77, 0.06), 0 1px 3px rgba(15, 44, 77, 0.04)',
        'elevation':    '0 4px 6px rgba(15, 44, 77, 0.06), 0 2px 4px rgba(15, 44, 77, 0.04)',
        'elevation-lg': '0 12px 24px rgba(15, 44, 77, 0.08), 0 4px 8px rgba(15, 44, 77, 0.04)',
        'elevation-xl': '0 24px 48px rgba(15, 44, 77, 0.12), 0 8px 16px rgba(15, 44, 77, 0.06)'
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
