/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 0.8s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInDown: {
          from: { opacity: 0, transform: "translateY(-20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: 0, transform: "translateX(-30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};