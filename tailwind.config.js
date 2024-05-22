/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "hsl(148, 38%, 91%)",
        green: "hsl(169, 82%, 27%)",
        red: "hsl(0, 66%, 56%)",
        hover:"hsl(154deg, 35.9%, 21.55%)",

        white: "hsl(0, 0%, 100%)",
        mediumGrey: "hsl(186, 15%, 59%)",
        darkGrey: "hsl(187, 24%, 22%)",
      },
    },
  },
  plugins: [],
};
