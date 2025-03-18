/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      fontSize: {
        xl: '20px',
        '2xl': '36px',
      },
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        },
        brown: {
          1: '#704232',
          2: '#7E5446',
          3: '#97766A',
        },
        gray: {
          1: '#f9fafb',
          2: '#fafafa',
        },
        red: {
          1: '#da1e37',
          2: '#ff4d4f',
        },
        green: {
          1: '#49cc90',
        },
        disabled: {
          1: 'rgba(0, 0, 0, 0.25)',
          2: 'rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
  plugins: [],
};
