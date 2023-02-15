import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherDaily.css";

export default function WeatherDaily(){
    return (
      <div className="WeatherDaily">
        <div className="row">
          <div className="col">
            <div className="daily-day">Mon</div>
            <WeatherIcon code="" /> ☀
            <div className="daily-temp">
              <span className="daily-temp-min">10°</span>
              <span className="daily-temp-max">15°</span>
            </div>
          </div>
        </div>
      </div>
    );
}