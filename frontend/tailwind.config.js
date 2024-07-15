/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        michroma: ["Michroma"],
        raleway: ["Raleway"],
      },
      colors: {
        base: "#1E2D2F",
        primary: "#FFBE0B",
        "primary-dark": "#d79d00",
        secondary: "#FB5607",
        "secondary-dark": "#c94303",
        tertiary: "#7DDF64",
        "tertiary-dark": "#49c729",
      },
    },
  },
  plugins: [],
};
