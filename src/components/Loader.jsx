import React from 'react'
import "./styles/Loader.css"


const Loader = () => {
  return (
    <section className=''>
         <div className='parrafo'>
         <p className=''>Weather App</p>
         </div>
       

      <div className="wrapper">
    <div className="sun"></div>
    <div className="cloud">
      <div className="cloud1">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="cloud1 c_shadow">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
 
    <div className="cloud_s">
      <div className="cloud1">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="cloud1 c_shadow">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    
    <div className="cloud_vs">
      <div className="cloud1">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="cloud1 c_shadow">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div className="haze"></div>
    <div className="haze_stripe"></div>
    <div className="haze_stripe"></div>
    <div className="haze_stripe"></div>
    <div className="thunder"></div>
    <div className="rain">
       <ul>
         <li></li>
         <li></li>
         <li></li>
      </ul>
    </div>
    <div className="sleet">
       <ul>
         <li></li>
         <li></li>
         <li></li>
      </ul>
    </div>
    <div className="text">
      <ul>
        <li>Soleado</li>
        <li>Parcialmente Soleado</li>
        <li>Parcialmente Nublado</li>
        <li>Mayormente Nublado</li>
        <li>Nublado</li>
        <li>Brumoso</li>
        <li>Tormenta</li>
        <li>Lluvia</li>
        <li>Nieve y Lluvia</li>
      </ul>
    </div>
  </div>

    </section>

  )
}

export default Loader