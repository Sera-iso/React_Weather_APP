import React from "react";
import {formatTime} from "./timeHelper.js";
import "./FormattedDate.css";

export default function FormattedDate( {date} ) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    return (
        <div className="FormattedDate">
            Last updated {day}, at {formatTime(hours)}:{formatTime(minutes)}
        </div>
    )
}