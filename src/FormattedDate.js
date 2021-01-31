import React from "react";

export default function FormattedDate( {date} ) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) {
        return `0${hours}`
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        return `0${minutes}`
    }
    return (
        <div className="FormattedDate">
            Last updated {day}, at {hours}:{minutes}
        </div>
    )
    
}