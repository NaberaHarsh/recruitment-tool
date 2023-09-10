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
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        40: "40px",
        48: "48px",
        60: "60px",
        564: "564px",
      },
      width: {
        48: "48px",
        513: "513px",
        244: "244px",
        72: "72px",
        107: "107px",
        123: "123px",
        246: "246px",
        577: "577px",
        782: "782px",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
};
