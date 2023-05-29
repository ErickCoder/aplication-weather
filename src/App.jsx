import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './components/Loader'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)


  
  const handleSubmit= (e) => {
    e.preventDefault()
    const city= e.target.city.value
    const KEY = '44f1f57375cf9c084dc69a88bc046a61'

    const URL_COUNTRY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`


    axios.get(URL_COUNTRY)
    .then(({data})=> {
      let newData = data;
      newData.weatherImage = '';
      if (data.weather[0].icon === '01n'){
        newData.weatherImage = 'bg-clear_SkyN'
      }
      if (data.weather[0].icon === '01d'){
        newData.weatherImage = 'bg-Soleado1'
      }
      if (data.weather[0].icon === '02n'){
        newData.weatherImage = 'bg-Noche'
      }
      if (data.weather[0].icon === '02d'){
        newData.weatherImage = 'bg-Pocas_Nubes'
      }
      if (data.weather[0].icon === '03d'){
        newData.weatherImage = 'bg-Nublado_Dia'
      }
      if (data.weather[0].icon === '03n'){
        newData.weatherImage = 'bg-Nublado_Noche'
      }
      if (data.weather[0].icon === '04d'){
        newData.weatherImage = 'bg-Nublado_Dia'
      }
      if (data.weather[0].icon === '04n'){
        newData.weatherImage = 'bg-Nublado_Noche'
      }
      if (data.weather[0].icon === '09n'){
        newData.weatherImage = 'bg-Aguacero'
      }
      if (data.weather[0].icon === '09d'){
        newData.weatherImage = 'bg-Aguacero'
      }
      if (data.weather[0].icon === '10d'){
        newData.weatherImage = 'bg-Lluvia_Dia'
        }
        if (data.weather[0].icon === '10n'){
          newData.weatherImage = 'bg-Lluvia_Noche'
          }
        if (data.weather[0].icon === '11d'){
            newData.weatherImage = 'bg-Tormenta'
            }
      if (data.weather[0].icon === '11n'){
        newData.weatherImage = 'bg-Tormenta'
        }
      if (data.weather[0].icon === '13d'){
        newData.weatherImage = 'bg-Nieve'
        }
        if (data.weather[0].icon === '13n'){
          newData.weatherImage = 'bg-Nieve'
          }

          if (data.weather[0].icon === '50d'){
            newData.weatherImage = 'bg-niebla'
            }
            
            if(data.weather[0].description === 'light rain'){
              newData.weatherImage = 'bg-Aguacero'
            }

            if (data.weather[0].icon === '50n'){
              newData.weatherImage = 'bg-niebla'
              }
        
      
       
      setWeatherInfo(newData)
      return newData;


    })












    
    .catch((error) => console.log(error))
  
  


  
  }






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
      if (data.weather[0].icon === '01n'){
        newData.weatherImage = 'bg-clear_SkyN'
      }
      if (data.weather[0].icon === '01d'){
        newData.weatherImage = 'bg-Soleado1'
      }
      if (data.weather[0].icon === '02n'){
        newData.weatherImage = 'bg-Noche'
      }
      if (data.weather[0].icon === '03d'){
        newData.weatherImage = 'bg-Nublado_Dia'
      }
      if (data.weather[0].icon === '03n'){
        newData.weatherImage = 'bg-Nublado_Noche'
      }

      if (data.weather[0].main === 'Drizzle'){
        newData.weatherImage = 'bg-Aguacero'
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
        if(data.weather[0].main === 'Rain'){
          newData.weatherImage = 'bg-Aguacero'
        }
        if(data.weather[0].main === 'Light Rain'){
          newData.weatherImage = 'bg-Aguacero'
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

      weatherInfo ?  <Weather weatherInfo={weatherInfo} handleSubmit={handleSubmit} />
      : <Loader/>

     }
     
     
    </main>
  )
}

export default App