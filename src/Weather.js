import React from "react";
import "./Weather.css";

export default function weather() {
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
        <h1>Tehran</h1>{" "}
        <ul>
          <li>Thursday 09:02</li>
          <li>Broken Cloud</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="partly cloudy"
                className="float-left"
              />
              <span className="temperature">15</span>
              <span className="unit">℃</span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: 77%</li>
              <li>Wind: 6.17 km/h</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
