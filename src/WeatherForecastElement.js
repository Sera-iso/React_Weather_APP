import React from "react";
import WeatherIcon from "./WeatherIcon";
import {formatTime} from "./timeHelper.js";
import "./WeatherForecastElement.css";

export default function WeatherForecastElement({data}) {
  
    function formatHour(timestamp) {
        let time = new Date(timestamp);
        let hours = time.getHours();
        let minutes = time.getMinutes();
        
        return `${formatTime(hours)}:${formatTime(minutes)}`;
    }

    return (
        <div className="WeatherForecastElement col">
            <ul>
                <li className="hour">
                {formatHour(data.dt * 1000)}
                </li>
                <li>
                <WeatherIcon iconCode={data.weather[0].icon} iconSize={30} />
                </li>
                <li className="temp">
                {Math.round(data.main.temp_max)}°C | {Math.round(data.main.temp_min)}°C
                </li>
            </ul>
        </div>
    )
}