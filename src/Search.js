import React, { useState } from 'react';
import axios from 'axios';
import WeatherOverview from "./WeatherOverview";
import WeatherForecast from "./WeatherForecast";
import "./Search.css";


export default function Search( {defaultCity} ) {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState({ search: false });

  function fetchWeatherData(response) {
    setWeather({
      search: true,
      city: response.data.name,
      country: response.data.sys.country,
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      description: response.data.weather.description,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000)
    });
  }
  
  function searchCity() {
    const apiKey = "c3fdeae7b368bbda2e09bebfb67775c6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(url).then(fetchWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function fetchCity(event) {
    setCity(event.target.value);
  }

  if (weather.search) {
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Enter a city..." autoFocus="on" onChange={fetchCity} />
          <input type="submit" className="btn btn-primary" value="Search" />
        </div>
      </form>
      <WeatherOverview data={weather} />
      <hr />
      <WeatherForecast city={weather.city} />
      </div>
      )
    } else {
       searchCity();
       return null;
    }
  }