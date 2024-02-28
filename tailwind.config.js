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
        primary2: '#FFC285',
        secondary: '#EE8B88',
        secondary2: '#FA387F',
        tertiary: '#553F4B',
        tertiary2: '#612E53',
        neutral: '#2A2C3C',
        dark: '#111118',
        darker: '#0A0411',
      },
    },
  },
  plugins: [],
}

