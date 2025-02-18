/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif']
      },

      colors:{
        primary:"#854d3d",
        secondary:"#4a1e1b",
        background:"#E2D9C8",

      },

      container:{
        center:true,
        padding:{
          Default:'1rem',
          sm:'2rem',
        },
      },
    },
  },
  plugins: [],
} 