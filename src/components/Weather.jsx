import { useState } from "react";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp";

const Weather = ({ weatherInfo }) => {
 
const [isCelsius, setIsCelsius] = useState(true)

const handleChangeTemp=() => {
    setIsCelsius(!isCelsius)
}

  return (
    <section className="text-center grid gap-6 p-4 text-black">
       <i className='bx bxs-sun width: 60px height: 60px' ></i>
    <i className='bx bxs-moon'></i>
    <p className="font-extrabold text-2xl">
      {weatherInfo?.name}, {weatherInfo?.sys.country}
    </p>

    <section className='grid gap-4 sm:grid-cols-[1fr_auto]'>
    {/*   {/Section top/} */}
      <article className="bg-[#e0e0e080] p-2 rounded-3xl grid grid-cols-2 items-center fontbo">
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
      <section className='bg-[#e0e0e080] p-4 py-4 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center h-18 pt-7 font-bold'>
        <article className='flex gap-2 sm:items-center' >
          <div>
            <img src="/images/wind.png" alt="" />
          </div>
          <span>{weatherInfo?.wind.speed}m/s</span>
        </article>

        <article className='flex gap-2 sm:items-center'>
          <div>
            <img src="/images/humidity.png" alt="" />
          </div>
          <span>{weatherInfo?.main.humidity}%</span>
        </article>

        <article className='flex gap-2 sm:items-center'>
          <div>
            <img src="/images/pressure.png" alt="" />
          </div>
          <span>{weatherInfo?.main.humidity}hPa</span>
        </article>
      </section>
    </section>

    
    <button onClick={handleChangeTemp} className="bg-white rounded-3xl overflow-hidden p-3 w-134px h-30 text-[#4580BA]" >Change F/C</button>

</section>

  );
};
export default Weather;
