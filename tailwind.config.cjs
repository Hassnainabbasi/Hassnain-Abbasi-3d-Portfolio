// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   mode: "jit",
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         "c-black": "#0d1117",
//         "c-white": "#f3f7fb",
//         secondary: "#1a445d",
//         "light-black": "rgba(30,30,40,.7)",
//         "c-border-light": "hsla(0,0%,100%,.2)",
//         "c-border-dark": "hsla(0,0%,100%,.1)",
//       },
//       screens: {
//         xs: "450px",
//       },
//       backgroundImage: {
//         "hero-gradient-light":
//           "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(200,217,238,1) 100%)",
//         "hero-gradient-dark":
//           "linear-gradient(225deg, rgba(13,17,23,1) 0%, rgba(4,52,81,1) 30%, rgba(13,17,23,1) 100%)",
//         "white-gradient": "linear-gradient(to right, #cfcfcf, #ffffff)",
//         "black-gradient": "linear-gradient(to right, #434343, #000000)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "c-black": "#0d1117",
        "c-white": "#f3f7fb",
        secondary: "#1a445d",
        "light-black": "rgba(30,30,40,.7)",
        "c-border-light": "hsla(0,0%,100%,.2)",
        "c-border-dark": "hsla(0,0%,100%,.1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-gradient-light":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(144,224,239,1) 100%)",
        "hero-gradient-dark":
          "linear-gradient(225deg, rgba(13,17,23,1) 0%, rgba(0,128,128,1) 30%, rgba(13,17,23,1) 100%)",
        "white-gradient": "linear-gradient(to right, #cfcfcf, #ffffff)",
        "black-gradient": "linear-gradient(to right, #434343, #000000)",
      },
    },
  },
  plugins: [],
};
