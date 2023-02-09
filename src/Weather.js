import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            ></input>{" "}
          </div>
        </div>
      </form>
      <h1>
        Kyiv,
        <br />
        Ukraine{" "}
      </h1>
      <ul>
        <li> Wednesday, 8 February </li>
        <li>Snowing </li>
      </ul>

      <div className="row">
        <div className="col-6">
            <ReactAnimatedWeather
              icon="CLEAR_NIGHT"
              color="grey"
              size={58}
              animate={true}
            />{" "}
          <span className="temperature">-8 </span>{" "}
          <span className="unit"> ℃ | ℉</span>{" "}
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 0 mm</li>
            <li>Humidity: 83%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
