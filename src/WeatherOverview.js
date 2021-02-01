import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherOverview.css";

export default function WeatherOverview( {data} ) {
     return (
        <div className="WeatherOverview">
          <h1>{data.city}</h1>
          <WeatherTemperature celsius={Math.round(data.temp)} />
          <ul>
            <li className="weather-conditions">
              <WeatherIcon iconCode={data.icon} />
              {data.condition}</li>
            <li className="other-measurements">Humidity: {data.humidity}% | Wind: {Math.round(data.wind)}km/h</li>
          </ul>
          <FormattedDate date={data.date} />
        </div>
    )
}