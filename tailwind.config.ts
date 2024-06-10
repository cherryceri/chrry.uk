import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base": "#181825",
        "base1": "#15161e",
        "base2": "#181825",
        "base3": "#202031",
        "base4": "#28283E",
        "base5": "#30304B",
        "base6": "#383857",
        "main": "#D74766",
        "main1": "#5B202D",
        "main2": "#A63A52",
        "main3": "#D74766",
        "main4": "#DE6882",
        "main5": "#E58A9E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
