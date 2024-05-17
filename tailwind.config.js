/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
        "4xl": "20rem",
      },
      margin: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
        "4xl": "20rem",
      },
    },
  },
  plugins: [],
};
