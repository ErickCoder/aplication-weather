/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'Niebla': "url('/images_clima/niebla.jpg')",
          'Tormenta': "url('/images_clima/Tormenta_electrica.jpg')",
          'Aguacero': "url('/images_clima/Aguacero.jpg')",
          'Pocas_Nubes': "url('/images_clima/Pocas_nubes.jpg')",
          'Soleado': "url('/images_clima/soleado.jpg')",
          'Airoso': "url('/images_clima/airoso.jpg')",
          'Nieve': "url('/images_clima/Nieve.jpg')",
          'Mayormente_Nublado': "url('/images_clima/Mayormente_nublado.jpg')",
          'Probablemente_Nublado': "url('/images_clima/Probablemente_nublado.jpg')",
          'Noche': "url('/images_clima/noche.jpg')",
          'clear_SkyN': "url('/images_clima/Nube_luna.jpg')",
          'Nublado_Dia': "url('/images_clima/Nublado1.jpg')",
          'Nublado_Noche': "url('/images_clima/Nublado_Noche.jpg')",
          'Soleado1': "url('/images_clima/Soleado1.jpg')",
          'Lluvia_Dia': "url('/images_clima/Lluvia_Dia.jpg')",
          'Lluvia_Noche': "url('/images_clima/Lluvia_noche.jpg')",
        },
        fontFamily:{
          "principal-font": ["Lato","sans"]
        },
        
    },
  },
  plugins: [],
  darkMode:"class"
}

