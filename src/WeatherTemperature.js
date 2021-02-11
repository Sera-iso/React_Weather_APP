import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature( {celsius} ) {
    const [temperature, setTemperature] = useState("unitCelsius");

    function handleCovertToFClick(event) { 
    event.preventDefault();
    setTemperature("unitFahrenheit"); 
    }

    function handleCovertToCClick(event) {
    event.preventDefault();
    setTemperature("unitCelsius"); 
    }

    function covertToF() { 
        return Math.round((celsius * 9/5) + 32);
    }

    if (temperature === "unitCelsius") {
        return (
            <div className="WeatherTemperature">
                <h2>{celsius}</h2>
                <p className="units">°C | <a href="/" onClick={handleCovertToFClick}>°F</a></p>
            </div>
        )
    } else {
        return (
            <div className="WeatherTemperature">
                <h2>{covertToF()}</h2>
                <p className="units"><a href="/" onClick={handleCovertToCClick}>°C</a> | °F</p>
            </div>
        )
    }
}