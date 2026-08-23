/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: { xs: '420px' },
      colors: {
        // --- ported 1:1 from the original static build ---
        navy: { 950: '#05070F', 900: '#0B1330', 850: '#0F1A3F', 800: '#121F4C', 700: '#1A2A63', 600: '#233780' },
        sapphire: { 400: '#5B7FE0', 500: '#3B5FE0', 600: '#2A48C4', 700: '#22399E' },
        ivory: { 50: '#FAF7F1', 100: '#F2EDE1', 200: '#E7DFCF' },
        // --- new: elegant violet/indigo accent, used sparingly (orbit ring, AI service, portfolio glow) ---
        iris: { 300: '#B3A8F5', 400: '#9C8FF0', 500: '#7B5FE0', 600: '#6247C4', 700: '#4E38A6' },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontWeight: { 500: '500', 600: '600' },
      boxShadow: {
        deep: '0 30px 60px -18px rgba(0,0,0,0.55)',
        soft: '0 10px 30px -10px rgba(5,7,15,0.25)',
        glow: '0 0 80px -10px rgba(91,127,224,0.35)',
        'glow-iris': '0 0 90px -15px rgba(123,95,224,0.4)',
      },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'spin-slow-reverse': { to: { transform: 'rotate(-360deg)' } },
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
        'float-sm': {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-5px,0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%,-3%,0) scale(1.04)' },
        },
        'drift-alt': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-3%,2%,0) scale(1.06)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.45, transform: 'scale(0.82)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: 0.15 },
          '50%': { opacity: 0.85 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        playhead: {
          '0%': { transform: 'translateX(-2vw)' },
          '100%': { transform: 'translateX(102vw)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 26s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 34s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'float-sm': 'float-sm 5s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        'drift-alt': 'drift-alt 22s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.6s ease-in-out infinite',
        twinkle: 'twinkle 3.2s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        marquee: 'marquee 40s linear infinite',
        playhead: 'playhead 16s linear infinite',
      },
    },
  },
  plugins: [],
}
