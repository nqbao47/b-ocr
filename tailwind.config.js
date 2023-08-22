/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        dDIN: ["D-DIN", "sans-serif"],
      },
      boxShadow: {
        boxShadowInput:
          " 0 1px 1px rgba(0,0,0,0.075) inset,0 0 0.35rem #2c82c9",
      },
    },
  },
  plugins: [],
};
