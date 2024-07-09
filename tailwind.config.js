/** @type {import('tailwindcss').Config} */
export default {
  content: [


    './index.html',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
      },
    },
  },
  // plugins: [ require("tailwind-scrollbar-hide") ],
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

