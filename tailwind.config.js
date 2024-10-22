/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Poppins', 'Inter', 'sans-serif'], // Set font default ke Inter
    },
    screens: {
      'hp': '300px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'ultrawide': '1620px'
    },
    colors: {
      'primary': '#171717',
      'secondary': '#fdba74',
      'sechov': '#fb923c',
      'slate': '#e2e8f0'
    },
      fill: theme => ({
        secondary: theme('colors.secondary')
      }),

  },
  },
}
