/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F94A29",
        lightOrange: "#FF8B13",
        darkBrown: "#820000",
        lightGray: "#EFEFEF",
        gray: "#DDDDDD",
        darkBlue: "#03001C",
      },
    },
  },
  plugins: [],
};
