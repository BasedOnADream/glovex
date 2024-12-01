/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{1:1},
      height:
      {
        800:"800px",
      },
      margin:
      {
        "full":"100%",
        "btn":"368px",
      },
      colors:
      {
        "main":"#D6292E",
        "third":"#DE5458",
        "second":"#6622b1"
      }
    },
  },
  plugins: [],
}