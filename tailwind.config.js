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
  },
  },
  plugins: [],
}
