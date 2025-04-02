import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fdf8e4',
          100: '#fbefc8',
          200: '#f8e599',
          300: '#f6db6b',
          400: '#f3d13d',
          500: '#f1c80f',
          600: '#c1a00c',
          700: '#917809',
          800: '#615006',
          900: '#302803',
          950: '#181401',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'scaleIn': 'scaleIn 0.7s ease-in-out',
        'fadeInDelayed': 'fadeIn 0.5s ease-in-out 0.2s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
            maxWidth: '100%',
            h1: {
              color: theme('colors.neutral.900'),
              fontFamily: theme('fontFamily.heading'),
            },
            h2: {
              color: theme('colors.neutral.900'),
              fontFamily: theme('fontFamily.heading'),
            },
            h3: {
              color: theme('colors.neutral.900'),
              fontFamily: theme('fontFamily.heading'),
            },
            h4: {
              color: theme('colors.neutral.900'),
              fontFamily: theme('fontFamily.heading'),
            },
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
            },
            figcaption: {
              fontStyle: 'italic',
              color: theme('colors.neutral.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
