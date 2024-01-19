/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vizcab: {
          100: "#E8F2F2",
          200: "#BEE7E5",
          800: "#2C3E57",
        },
      },
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill, 250px)",
        "auto-fit-250": "repeat(auto-fit, 250px)",
      },
    },
  },
  plugins: [],
};
