import React, {useState} from 'react';
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Search( {city} ) {
const [message, setMessage] = useState("")
function testAxios(response) {
let temp = response.data.main.temp;
let cityName = response.data.name; 
    return (
        setMessage(`e.g. It is ${Math.round(temp)}°C in ${cityName}`)
      )
}
let apiKey = "c3fdeae7b368bbda2e09bebfb67775c6";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(url).then(testAxios);

return (
    <div className="Search">
    <p>First step is implementing the search</p>
    {message}
    <br />
    <br />
    <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="gold" />
    </div>
  ) 
}