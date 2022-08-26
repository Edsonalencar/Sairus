const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyan': '#34C5AA',
        'gray': '#F7F6F6',
        'gray-200': '#E5E5E5',
        'gray-400': '#6B7280',
        'gray-800': '#25262C',
        'orange-800':     '#FF4A4A',
        'orange-400': '#FF9551',
      },
      fontFamily: {
        sans: ['poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
