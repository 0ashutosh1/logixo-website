/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#4c1d95',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 4s ease-in-out infinite',
        'float-fast': 'float-fast 3s ease-in-out infinite',
        'scroll-horizontal': 'scroll-horizontal 40s linear infinite',
        'scroll-horizontal-reverse': 'scroll-horizontal-reverse 40s linear infinite',
        'scroll-vertical': 'scroll-vertical 20s linear infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(12deg)' },
          '50%': { transform: 'translateY(-20px) rotate(8deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-6deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-2deg)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px) rotate(8deg)' },
          '50%': { transform: 'translateY(-25px) rotate(3deg)' },
        },
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-horizontal-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scroll-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 20px #06b6d4',
      },
      minHeight: {
        '500vh': '500vh',
      },
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem',
        '35': '8.75rem',
      },
    },
  },
  plugins: [],
}