import React from "react";
import WeatherIcon from "./WeatherIcon";
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
        <div className="WeatherForecastElement col">
            <ul>
                <li className="hour">
                {formatHour(data.dt * 1000)}
                </li>
                <li>
                <WeatherIcon iconCode={data.weather[0].icon} />
                </li>
                <li className="temp">
                {Math.round(data.main.temp_max)}°C | {Math.round(data.main.temp_min)}°C
                </li>
            </ul>
        </div>
    )
}