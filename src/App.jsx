import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = '44f1f57375cf9c084dc69a88bc046a61'

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios
      .get(URL)
      .then(({ data }) =>{

      let newData = data;
      newData.weatherImage = '';
      if (data.weather[0].main === 'Clear'){
        newData.weatherImage = 'bg-Soleado'
      }
      if (data.weather[0].main === 'Drizzle'){
        newData.weatherImage = 'bg-Lluvia'
        }
      if (data.weather[0].main === 'Clouds'){
        newData.weatherImage = 'bg-Pocas_Nubes'
        }
      if (data.weather[0].main === 'Snow'){
        newData.weatherImage = 'bg-Nieve'
        }
      if (data.weather[0].main === 'Thunderstorm'){
        newData.weatherImage = 'bg-Tormenta_electrica'
        }
      if (data.weather[0].main === 'Mist'){
        newData.weatherImage = 'bg-Niebla'
        }
        if(data.weather[0].main === 'Fog'){
          newData.weatherImage = 'bg-Niebla'
        }
        
      setWeatherInfo(newData)
      return newData;
    })


      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    
    <main  className={`${weatherInfo?.weatherImage || ""} bg-center bg-no-repeat min-h-screen bg-cover text-white flex justify-center items-center font-principal-font `} >
   {/*  <Loader/> */}


     {

      weatherInfo ?  <Weather weatherInfo={weatherInfo}/>
      : <Loader/>
     }
    </main>
  )
}

export default App