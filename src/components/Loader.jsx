import React from 'react'
import "./styles/Loader.css"
const Loader = () => {
  return (
    <div className="wrapper  bg-no-repeat min-h-screen bg-cover">
    <div className="cloud">
      <div className="cloud_left"></div>
      <div className="cloud_right"></div>
    </div>
    <div className="rain">
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
    </div>
    <div className="surface">
      <div className="hit"></div>
      <div className="hit"></div>
      <div className="hit"></div>
      <div className="hit"></div>
      <div className="hit"></div>
    </div>
  </div>
  )
}

export default Loader