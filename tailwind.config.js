/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        error: "#D86161",
        "gray-custom": "#7A7A7A",
        "light-gray": "#E6E6E6",
        dark: "#212121",
        primary: "#1597E4",
        expire: "#D8D8D8",
      },
      fontSize: {
        12: "0.75rem", // Extra small
        14: "0.875rem", // Small
        16: "1rem", // Default
        18: "1.125rem", // Large
        20: "1.25rem", // Extra large
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      fontFamily: {
        Poppins: ["Poppins", "sans"],
      },
      lineHeight: {
        20: "20px",
      },
      height: {
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        48: "3rem",
        60: "3.75rem",
        564: "35.25rem",
      },
      width: {
        48: "3rem",
        513: "32.0625rem",
        244: "15.25rem",
        72: "4.5rem",
        107: "6.6875rem",
        123: "7.6875rem",
        246: "15.375rem",
        577: "36.0625rem",
        782: "48.875rem",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
};
