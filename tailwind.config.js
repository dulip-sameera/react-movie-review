/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
    },
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
