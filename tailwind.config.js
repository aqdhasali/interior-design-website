/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olivegreen: "#214e34",
        darkgreen: "#0f341f",
      },

      backgroundImage: {
        'home': "url('/lr.jpeg')",
      },

      animation:{
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};
