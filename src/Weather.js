import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready:true,
      date: new Date(response.data.dt*1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon:`https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`
    });
   
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>{" "}
          </div>
          <h1>{weatherData.city}</h1>{" "}
          <ul>
            <li><FormattedDate date={weatherData.date}/></li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex">
                <img
                  src={weatherData.icon}
                  alt={weatherData.descrition}
                  className="float-left"
                />
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">℃</span>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>Humidity:{weatherData.humidity} %</li>
                <li>Wind:{Math.round(weatherData.wind
                )} km/h</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    
    const apiKey = "f0ff64afa8957098b6eda5ad96796c19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
