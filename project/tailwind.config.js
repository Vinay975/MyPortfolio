/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cinematic: ['"Barlow Condensed"', 'Oswald', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cinematic: {
          dark: {
            bg: '#090B10',
            secondary: '#10141C',
            surface: '#171C25',
            primary: '#F5F3EF',
            muted: '#A5ACB8',
            border: '#2A303B',
            red: '#D62828',
            redHover: '#A91F27',
            silver: '#B9C1CC',
            gold: '#E8B66B',
          },
          light: {
            bg: '#F5F3EF',
            secondary: '#EAE8E2',
            surface: '#FFFFFF',
            primary: '#151922',
            muted: '#5E6672',
            border: '#D6D5D0',
            red: '#C62828',
            redHover: '#9B1F1F',
            silver: '#7A838E',
            gold: '#C49347',
          },
        },
      },
      letterSpacing: {
        widest: '0.2em',
        cinematic: '0.15em',
      },
    },
  },
  plugins: [],
};