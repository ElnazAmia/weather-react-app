import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);

    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast,index){
            if(index<6){
              return(<div className="col">
              <WeatherForecastDay data={dailyForecast}/>
          </div>)
            }
          })
          }
          
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "f0ff64afa8957098b6eda5ad96796c19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}