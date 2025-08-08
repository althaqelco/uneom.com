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
        
        // Primary Colors - Saudi Heritage (Blues)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#1e40af',  // Updated to deep blue
          600: '#1e3a8a',  // Royal blue
          700: '#1e293b',  // Navy
          800: '#0f172a',  // Darker navy
          900: '#0c0a09',  // Near black
          950: '#030712',
        },
        
        // Secondary Colors - Professional Gold/Orange
        secondary: {
          50: '#fef7ed',
          100: '#fef3e2',
          200: '#fde3c2',
          300: '#fcca8b',
          400: '#f9a352',
          500: '#f97706',  // Professional orange
          600: '#d97706',  // Gold
          700: '#ea580c',  // Accent orange
          800: '#c2410c',
          900: '#9a3412',
          950: '#431407',
        },
        
        // Emerald/Teal accents
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#059669',  // Emerald
          600: '#0d9488',  // Teal
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        
        // Purple accent for modern touch
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#7c3aed',  // Accent purple
          600: '#7c2d12',
          700: '#6b21a8',
          800: '#581c87',
          900: '#4c1d95',
          950: '#2e1065',
        },
        
        // Enhanced neutral system
        neutral: {
          50: '#f8fafc',   // Light background
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',  // Medium gray
          600: '#475569',
          700: '#334155',
          800: '#1e293b',  // Dark gray
          900: '#0f172a',  // Near black
          950: '#020617',
        },
        
        // Medical/Healthcare specific colors
        medical: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#0891b2',
          400: '#0e7490',
          500: '#0369a1',
          600: '#075985',
          700: '#0c4a6e',
          800: '#164e63',
          900: '#155e75',
        },
        
        // Aviation specific colors
        aviation: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#1e40af',
          400: '#1e3a8a',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e293b',
          900: '#0f172a',
        },
        
        // Hospitality warm colors
        hospitality: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#f59e0b',
          400: '#d97706',
          500: '#b45309',
          600: '#92400e',
          700: '#78350f',
          800: '#451a03',
          900: '#292524',
        },
      },
      
      // Updated gradient system
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1e293b 0%, #1e3a8a 50%, #1e40af 100%)',
        'gradient-medical': 'linear-gradient(135deg, #0369a1 0%, #0891b2 100%)',
        'gradient-aviation': 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
        'gradient-hospitality': 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        // Arabic fonts
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
        'arabic-heading': ['Amiri', 'Cairo', 'serif'],
      },
      
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'scaleIn': 'scaleIn 0.7s ease-in-out',
        'fadeInDelayed': 'fadeIn 0.5s ease-in-out 0.2s both',
        'slideInUp': 'slideInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
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
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
