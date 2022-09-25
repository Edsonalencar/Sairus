const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyan-700': '#34C5AA',
        'orange-300': '#FF9551',
        'orange-800': '#FF4A4A',
        'gray-100': '##F7F6F6',
        'gray-200': '#E5E5E5',
        'gray-600': '#6B7280',
        'gray-800': '#25262C',
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
