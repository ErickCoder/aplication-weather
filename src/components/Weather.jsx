import { useEffect, useState } from "react";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp";

  const Weather = ({ weatherInfo }) => {
 
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
     
     <button onClick={handleTheme} className="mx-auto block mb-4 text-2xl bg-[#ffffff1a] rounded-md hover:text-violet-900 transition-colors backdrop-opacity-10 ">

       {
       isDark ? <i className='bx bxs-sun' ></i> :  <i className='bx bxs-moon hover:drop-shadow-xl shadow-slate-100'></i>
       }
     </button>

    <p className="font-extrabold text-2xl">
      {weatherInfo?.name}, {weatherInfo?.sys.country}
    </p>

    <section className='grid gap-4 sm:grid-cols-[1fr_auto]'>
    {/*   {/Section top/} */}
      <article className="bg-[#e0e0e080] dark:bg-[#090909bd] dark:text-white p-2 rounded-3xl grid grid-cols-2 items-center font-bold shadow-lg shadow-slate-800 dark:shadow-neutral-950">
        <h3 className='col-span-2 capitalize font-extrabold'>{weatherInfo?.weather[0].description}</h3>

        <span className='text-4xl'>{isCelsius
              ? kelvinToCelsius(weatherInfo?.main.temp)
              : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>

        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
      </article>
    {/*   {/Section bottom/} */}
      <section className='bg-[#e0e0e080] dark:bg-[#090909bd] dark:text-white dark:font-medium p-4 py-4 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center h-18 pt-7 font-bold'>
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

    
    <button onClick={handleChangeTemp} className="bg-white font-semibold  rounded-3xl overflow-hidden p-3 w-134px h-30 text-[#4580BA] dark:bg-[#571dc2] dark:text-white dark:font-semibold" >Change F/C</button>

</section>

  );
};
export default Weather;
