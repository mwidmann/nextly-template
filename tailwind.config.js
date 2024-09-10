const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        midnightBlue: "#003366" /* A deep, rich blue */,
        roseQuartz: "#F7CAC9" /* A soft, warm pink */,
        charcoalGrey: "#36454F" /* A neutral, versatile grey */,
        creamyWhite: "#F5F5F5" /* A soft, off-white hue */,
        metallicGold: "#D4AF37" /* A luxurious gold accent */,
        mutedGreen: "#8F9779" /* A subtle, earthy green */,
        bada55: "#bada55",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      brand: ["Antonio", ...defaultTheme.fontFamily.sans],
      elegant: ["Euphoria Script", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
