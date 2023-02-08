import React from "react";

import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
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
            size={48}
            animate={true}
          />{" "}
          <h2>-8℃</h2>
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