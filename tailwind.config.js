
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6a11cb",
          light: "#9b5de5",
          dark: "#3a0ca3"
        },
        accent: "#22d3ee"
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        'xl2': "1.25rem"
      }
    },
  },
  plugins: [],
};
