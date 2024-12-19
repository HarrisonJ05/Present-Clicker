/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jxs,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'XmasButton': "url('/imgs/XmasButtons.svg')",
        'LoginBg': "url('/imgs/SnowfallBg.jpg')",
      },
      width: {
        '75': '19.7rem',
        '84': '21rem'
      },
      inset: {
        '4.5rem': '4.75rem',
        '7.5rem': '7.5rem',
        '8.5rem': '8.5rem',
        '1.8rem': '1.872rem',
      },
      colors: {
        'top-band': '#1A4D7C80',
      }
    },
  },
  plugins: [],
}

