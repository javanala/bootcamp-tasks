/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.525rem",
        xss: "0.425rem", // equivalent to 10px assuming default base font size is 16px
      },
      fontFamily: {
        sans: ["Vazir"],
      },
    },
  },
  variants: {},
  plugins: [],
};
