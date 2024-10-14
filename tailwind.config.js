/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      desktop1: "1360px",
      desktop2: "1325px",
      desktop3: "920px",
      desktop4: "960px",

      // text
      stext1: "1160px",
      stext2: "1060px",

      sm: "640px",
      sm2: "530px",
      sm3: "360px",
      sm4: "400px",
      sm5: "460px",
      md: "768px",
      md2: "846px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
