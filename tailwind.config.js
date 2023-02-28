/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        greenbookbackground: "url(../src/images/BHM.jpeg)",
      },
      colors: {
        "greenbook-green": "#015044",
      },
      scale: {
        102: "1.02",
      },
      height: {
        30: "30vh",
        35: "35vh",
        20: "20vh",
        25: "25vh",
        75: "75vh",
        70: "70vh",
        40: "40vh",
        50: "50vh",
        55: "55vh",
        45: "45vh",
        80: "80vh",
        85: "85vh",
        60: "60vh",
        90: "90vh",
      },
    },
  },
  plugins: [],
};
