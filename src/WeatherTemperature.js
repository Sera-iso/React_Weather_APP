import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature( {celsius} ) {
    const [temperature, setTemperature] = useState("celsius");

    function convertToF(event) {
    event.preventDefault();
    setTemperature("fahrenheit");
    }

    function convertToC(event) {
    event.preventDefault();
    setTemperature("celsius");
    }

    if (temperature === "celsius") {
        return (
            <div className="WeatherTemperature">
                <h2>{celsius}</h2>
                <p className="units">°C | <a href="/" onClick={convertToF}>°F</a></p>
            </div>
        )
    } else {
        let fahrenheit = (celsius * 9/5) + 32;
        return (
            <div className="WeatherTemperature">
                <h2>{Math.round(fahrenheit)}</h2>
                <p className="units"><a href="/" onClick={convertToC}>°C</a> | °F</p>
            </div>
        )
    }
}