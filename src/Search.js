import React, { useState } from 'react';
import axios from 'axios';
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function fetchWeatherData(response) {
    setWeather({
      city: response.data.name,
      temp: response.data.main.temp,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather.description,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(false);
    let apiKey = "c3fdeae7b368bbda2e09bebfb67775c6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(url).then(fetchWeatherData);
  }

  function fetchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Enter a city..." onChange={fetchCity} />
          <input type="submit" className="btn btn-primary" value="Search" />
        </div>
      </form>
      {loaded === true ? (<div className="weather-data"><h1>{weather.city}</h1>
        <span className="units"><h2>{Math.round(weather.temp)}°</h2><sup>C | F</sup></span>
        <ul>
          <li className="weather-conditions"><img src={weather.iconUrl} alt={weather.description} />{weather.condition}</li>
          <li className="other-measurements">Humidity: {weather.humidity}% | Wind: {Math.round(weather.wind)}km/h</li>
        </ul>
      </div>) : null}
    </div>
  )
}