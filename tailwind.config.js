/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1ECC3",
          secondary: "#C9D8B6",
          accent: "#57837B",
          neutral: "#515E63",
          "base-100": "#F1ECC3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
