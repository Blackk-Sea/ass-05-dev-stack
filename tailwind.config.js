/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        // Both gradients come from the single source of truth in src/theme/brand.js
        brand: 'var(--brand-gradient)',
        'brand-diagonal': 'var(--brand-gradient-diagonal)',
      },
      colors: {
        brand: {
          from: 'var(--brand-from)',
          via: 'var(--brand-via)',
          to: 'var(--brand-to)',
          solid: 'var(--brand-solid)',
          soft: 'var(--brand-soft)',
        },
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.12)',
        'card-hover': '0 8px 30px -10px rgb(15 23 42 / 0.18)',
        brand: '0 10px 24px -10px var(--brand-solid)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-6px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.4s ease-out both',
        'menu-in': 'menu-in 0.18s ease-out both',
      },
    },
  },
  plugins: [],
};
