/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      //primary
      "dark-cyan": "hsl(158, 36%, 37%)",
      "darker-cyan": "hsla(158, 36%, 20%)",
      cream: "hsl(30, 38%, 92%)",

      //neutral
      white: "hsl(0, 0%, 100%)",
      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
    },

    fontWeight: {
      normal: "500",
      bold: "700",
    },
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
