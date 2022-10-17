module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{js,jsx}"],
  theme: {
    colors: {
      fondo: "#212529",
      blanco: "rgba(255, 255, 255, 1)",
      naranja: "rgba(255, 66, 36, 1)",
      purpura: "rgba(58, 0, 255, 0.678)",
      pes: "rgb(38 40 48)",
    },

    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
