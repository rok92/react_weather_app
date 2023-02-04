import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}°C / {Math.round(weather?.main.temp*1.8+32)}°F</h2>
      <h3>{weather?.weather[0].description}</h3>
      <div>{weather?.main.temp_max}°C / {weather?.main.temp_min}°F</div>
    </div>
  )
}

export default WeatherBox
