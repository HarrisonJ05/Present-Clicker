/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jxs,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'top-band': '#1A4D7C80',
      }
    },
  },
  plugins: [],
}

