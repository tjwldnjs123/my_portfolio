/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        intro: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
          // "75%": { opacity: "0" },
        },
        out: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        intro: "intro 7s",
        out: "intro 6s",
      },
    },
  },
  plugins: [],
};
