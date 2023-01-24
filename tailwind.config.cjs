/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: {
          100: '#3A3A3A',
          200: '#2D2D2D',
          300: '#1F1F1F',
          400: '#050505'
        },
        gray: {
          100: '#FFFFFF',
          200: '#050505',
          300: '#3A3A3A',
          400: '#838383'
        },
        purple: '#A445ED',
        red: '#FF5252'
      },
      fontFamily: {
        mono: ['Inconsolata', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif']
      }
    },
    plugins: []
  }
}
