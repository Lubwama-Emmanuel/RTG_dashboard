/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   sans: ['"Merriweather"', "sans"],
    // },
    extend: {
      fontFamily: {
        logo: ['"Shrikhand"', "cursive"],
      },
    },
  },
  plugins: [],
};
