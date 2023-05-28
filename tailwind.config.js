/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'niebla': "url('/images_clima/niebla.jpg')",
          'tormenta': "url('/images_clima/Tormenta_electrica.jpg')",
          'Aguacero': "url('/images_clima/Aguacero.jpg')",
    
        },
        fontFamily:{
          "principal-font": ["Lato","sans"]
        },
        
    },
  },
  plugins: [],
  darkMode:"class"
}

