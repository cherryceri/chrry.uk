/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'montserrat': ['montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#FEE2C9',
        secondary: '#EE8B88',
        tertiary: '#553F4B',
        neutral: '#2A2C3C',
        dark: '#111118',
        darker: '#070f19',
      },
    },
  },
  plugins: [],
}

