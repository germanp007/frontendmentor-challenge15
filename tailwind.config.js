/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        LightPink: "hsl(275, 100%, 97%)",
        GrayishPurple: "hsl(292, 16%, 49%)",
        DarkPurple: "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
