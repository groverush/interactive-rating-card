import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(var(--primary-color))",
      "neutral-gray": "hsl(var(--neutral-gray))",
      "neutral-blue": "hsl(var(--neutral-blue))",
      white: colors.white,
      black: colors.black,
      gray: colors.gray
    },
    extend: {}
  },
  plugins: []
}
