import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherDaily.css";

export default function WeatherDaily(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function DailyWeather(response) {
    //console.log(response.data);

    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherDaily">
        <div className="row">
          <div className="col">
            <div className="daily-day">{forecast[0].time}</div>
            <WeatherIcon code={forecast[0].condition.icon_url} />
            <div className="daily-temp">
              <span className="daily-temp-min">
                {Math.round(forecast[0].temperature.minimum)}
              </span>
              <span className="daily-temp-max">
                {Math.round(forecast[0].temperature.maximum)}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "794t01af404a57a31b48o842fab9851b";
    let longitude = props.coord.longitude;
    let latitude = props.coord.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(DailyWeather);

    return null;
  }
}
