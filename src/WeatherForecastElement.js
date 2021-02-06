import React from "react";
import "./WeatherForecastElement.css";

export default function WeatherForecastElement({data}) {
  
    function formatHour(timestamp) {
        let time = new Date(timestamp);
        let hours = time.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }
        let minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hours}:${minutes}`;
    }

    return (
        <div className="WeatherForecastElement col-2">
            <ul>
                <li>
                {formatHour(data.dt * 1000)}
                </li>
                <li>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt={data.weather[0].main} />
                </li>
                <li>
                {Math.round(data.main.temp_max)}°| {Math.round(data.main.temp_min)}°
                </li>
            </ul>
        </div>
    )
}