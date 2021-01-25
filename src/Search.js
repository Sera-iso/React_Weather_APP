import React, { useState } from 'react';
import axios from 'axios';
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function fetchWeatherData(response) {
    let city = response.data.name;
    let temp = response.data.main.temp;
    let icon = response.data.weather.icon;
    let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    let description = response.data.weather.description;
    let condition = response.data.weather.main;
    let results = (<ul>
      <li>{city}</li>
      <li>{Math.round(temp)}°<sup>C | F</sup></li>
      <li><img src={iconUrl} alt={description} />{condition}</li>
    </ul>);
    setWeather(results);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
      {weather}
    </div>
  )
}