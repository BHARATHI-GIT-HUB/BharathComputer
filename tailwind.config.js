/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#2e4c66",
      black: "#000000",
      grayblue: "#93B5C6",
      green: "#00bfa5",
      gray: "#EEEEEE",
      white: "rgb(245, 238, 238)",
      sandle: " rgba(128, 128, 128, 0.206)",
      opacity: "rgba(0, 0, 0, 0.5)",
    },
    fontSize: {
      secondaryheading: "1.6rem",
      secondarypara: ".8rem",
      primaryheading: "3.5rem",
      primarypara: "1.4rem",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        OpenSnas: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        Header: ["1.4rem"],
      },
    },
  },
  plugins: [],
};
