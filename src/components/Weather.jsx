import { useEffect, useState } from "react";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp";

   


const wheaterIcons={
  "01d": "/weather_images/sun1.svg",
  "01n": "/weather_images/luna3.png",
  "02d": "/weather_images/02_d.svg",
  "02n": "/weather_images/02_n.svg",
  "03d": "/weather_images/03_d.svg",
  "03n": "/weather_images/03_n.svg",
  "04d": "/weather_images/04_d.svg",
  "04n": "/weather_images/04_n.svg",
  "09d": "/weather_images/09_d.svg",
  "09n": "/weather_images/09_n.svg",
  "10d": "/weather_images/10_d.svg",
  "10n": "/weather_images/10_n.svg",
  "11d": "/weather_images/11_d.svg",
  "11n": "/weather_images/11_d.svg",
  "13d": "/weather_images/13_d.svg",
  "13n": "/weather_images/13_n.svg",
  "50d": "/weather_images/50_d.svg",
  "50n": "/weather_images/50_d.svg",

  

  
}

  const Weather = ({ weatherInfo, handleSubmit }) => {
 
    const [isCelsius, setIsCelsius] = useState(true)
    const [isDark, setIsDark] = useState(false)

const handleChangeTemp=() => {
    setIsCelsius(!isCelsius)
}

    const handleTheme=() => setIsDark(!isDark)

    useEffect(() => {
      
  
      if(isDark){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
       
      }, [isDark])
      
 


  return (
    
    <section className="text-center grid gap-6 p-4 text-black">
     <div className="flex justify-center">
     
     <form onSubmit={handleSubmit}>
    

     <input id="city" placeholder="Search City..." type="text" className="placeholder-[#ccb3fa] bg-white dark:text-white text-black shadow-md shadow-slate-700 font-medium px-3 py-2 no rounded-l-lg outline-none dark:bg-[#571dc2] sm:w-80" />
     
     
     <button className="bg-[#571dc2] dark:bg-white rounded-r-lg w-10 shadow-md shadow-slate-700 font-extrabold h-10">
     {
     !isDark ? <i className='bx bx-search-alt-2 text-white'></i> : <i className='bx bx-search-alt-2 text-[#571dc2] dark:font-extrabold'></i>
     }
   
     </button>
     </form>

      
     </div>
  
     
     <button onClick={handleTheme} className="mx-auto block mb-4 text-2xl bg-[#ffffff1a] rounded-md hover:text-violet-900 transition-colors backdrop-opacity-10 ">

       {
       isDark ? <i className='bx bxs-sun' ></i> :  <i className='bx bxs-moon hover:drop-shadow-xl shadow-slate-100'></i>
       }
     </button>
       
    <h2 className="font-normal text-2xl">
    
      <div className="bg-[#e0e0e080] dark:bg-[#090909bd] dark:text-white px-2 w-[182px] rounded-xl flex justify-around">
       

      {weatherInfo?.name}, {weatherInfo?.sys.country} 
      
      {!isDark ? <img src="/icons/bx-map.svg" alt="" /> : <img src="/icons/bx-map-white.svg" alt="" />}
     
      </div>
      

    </h2>

    <section className='grid gap-4 sm:grid-cols-[1fr_auto]'>
    {/*   {/Section top/} */}
      <article className="bg-[#e0e0e080] dark:bg-[#090909bd] dark:text-white p-2 rounded-3xl grid grid-cols-2 items-center font-bold shadow-lg shadow-stone-800 dark:shadow-neutral-950">
       
        <h3 className='col-span-2 capitalize font-extrabold my-3 text-xl  '>{weatherInfo?.weather[0].description}</h3>

        <span className='text-4xl pb-5'>{isCelsius
              ? kelvinToCelsius(weatherInfo?.main.temp)
              : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>

        <div className="pb-5 my-0 mx-auto">
          <img
            src={wheaterIcons[weatherInfo?.weather[0].icon] }
            alt=""/>
            
          
        </div>
      </article>
    {/*   {/Section bottom/} */}
      <section className='bg-[#e0e0e080] dark:bg-[#090909bd] dark:text-white dark:font-medium p-4 py-4 rounded-3xl shadow-lg shadow-stone-800 grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center h-18 pt-7 font-bold'>
        <article className='flex gap-2 sm:items-center' >
          <div>
          {
          !isDark ?  <img src="/images/wind.png" alt="" /> :  <img src="/images/Wind_White.png" alt=""/>
          }
           
          </div>
          <span>{weatherInfo?.wind.speed}m/s</span>
        </article>

        <article className='flex gap-2 sm:items-center'>
          <div className="">
            {
           !isDark? <img className="" src="/images/humidity.png" alt="" /> : <img className="" src="/images/Humidity_White.png" alt="" />

            }
          </div>
          <span>{weatherInfo?.main.humidity}%</span>
        </article>

        <article className='flex gap-2 sm:items-center'>
          <div>
          {
           
           !isDark? <img src="/images/pressure.png" alt="" /> : <img src="/images/Pressure_White.png" alt="" />

          }
          </div>
          <span>{weatherInfo?.main.humidity}hPa</span>
        </article>
      </section>
    </section>

    <div>



    </div>
    <button onClick={handleChangeTemp} className="bg-white font-semibold hover:text-white hover:bg-[#571dc2] transition-colors  rounded-3xl overflow-hidden p-3 w-134px h-30 text-[#571dc2] dark:bg-[#571dc2] dark:text-white dark:hover:bg-white dark:hover:text-[#571dc2] dark:font-semibold sm:w-52 place-self-center w-44 " >Change F/C</button>

</section>

  );
};
export default Weather;
