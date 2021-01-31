import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherOverview( {data} ) {
     return (
    <div className="WeatherOverview">
          <h1>{data.city}</h1>
          <span className="temperature">
            <h2>{Math.round(data.temp)}°</h2>
            <sup className="units">C | F</sup>
          </span>
          <ul>
            <li className="weather-conditions"><img src={data.iconUrl} alt={data.description} />{data.condition}</li>
            <li className="other-measurements">Humidity: {data.humidity}% | Wind: {Math.round(data.wind)}km/h</li>
          </ul>
          <FormattedDate date={data.date} />
        </div>
    )
}