import React, { useState } from 'react';
import axios from 'axios';
import "./Search.css";


export default function Search() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({ loaded: false });
  const [forecast, setForecast] = useState({ forecastLoaded: false });

  function fetchWeatherData(response) {
    setWeather({
      city: response.data.name,
      temp: response.data.main.temp,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather.description,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      loaded: true
    });
  }

  function formatDate(timestamp) {
    let time = new Date(timestamp);
    let hour = time.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = time.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hour}:${minutes}`
  }

  function fetchForecastData(response) {
    setForecast({
      time: formatDate(response.data.list[0].dt * 1000),
      iconUrlForecast: `https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}.png`,
      maxTemp: response.data.list[0].main.temp_max,
      minTemp: response.data.list[0].main.temp_min,
      forecastLoaded: true
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "c3fdeae7b368bbda2e09bebfb67775c6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(url).then(fetchWeatherData);

    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    axios.get(forecastUrl).then(fetchForecastData);
  }

  function fetchCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Enter a city..." autoFocus="on" onChange={fetchCity} />
          <input type="submit" className="btn btn-primary" value="Search" />
        </div>
      </form>
      {weather.loaded === true ? (
        <div className="weather-data">
          <h1>{weather.city}</h1>
          <span className="temperature">
            <h2>{Math.round(weather.temp)}°</h2>
            <sup className="units">C | F</sup>
          </span>
          <ul>
            <li className="weather-conditions"><img src={weather.iconUrl} alt={weather.description} />{weather.condition}</li>
            <li className="other-measurements">Humidity: {weather.humidity}% | Wind: {Math.round(weather.wind)}km/h</li>
          </ul>
          <hr />
        </div>) : null}
      {forecast.forecastLoaded === true ? (
        <div className="row">
          <div className="col">
            <ul>
              <li className="small">
                {forecast.time}
              </li>
              <li>
                <img src={forecast.iconUrlForecast} alt="forecast icon" />
              </li>
              <li className="small">
                {Math.round(forecast.maxTemp)}° | {Math.round(forecast.minTemp)}°
                  </li>
            </ul>
          </div>
        </div>) : null}
    </div>
  )
}