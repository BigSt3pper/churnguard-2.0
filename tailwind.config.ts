import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-foreground': 'var(--accent-foreground)',
        border: 'var(--border)',
        card: 'var(--card)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        display: ['var(--font-display)', ...defaultTheme.fontFamily.serif],
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        accent: 'var(--shadow-accent)',
        'accent-lg': 'var(--shadow-accent-lg)',
      },
      // Glassmorphism utility
      backdropBlur: {
        glass: '12px',
      },
      backgroundImage: {
        'grain-light': "url('/grain-light.png')",
        'grain-dark': "url('/grain-dark.png')",
        'radial-spot': 'radial-gradient(ellipse at center, rgba(79,70,229,0.08) 0%, transparent 70%)',
      },
      // Bottom sheet animation
      keyframes: {
        'bottom-sheet-in': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'bottom-sheet-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'bottom-sheet-in': 'bottom-sheet-in 0.3s cubic-bezier(0.4,0,0.2,1)',
        'bottom-sheet-out': 'bottom-sheet-out 0.3s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
};

export default config;
