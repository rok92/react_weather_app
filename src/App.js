import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const cities = ["Paris", "New York", "Ulsan", "Tokyo", "Gwangjang-dong"];
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={ API key }&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={ API key }&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  const handleLocation=(city)=>{
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  }

  useEffect(() => {
    city === "" ? getCurrentLocation() : getWeatherByCity();
  }, [city]);
  return (
    <div>
      {loading?(
        <div className="container">
           <ClipLoader  color="#f88c6b" loading={loading} size={150}/>
        </div>
      ):(
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} selected={city} handleLocation={handleLocation} />
      </div>
      )}
    </div>
  );
}

export default App;
