import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
import axios from "axios";

import "./WeatherDaily.css";

export default function WeatherDaily(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function DailyWeather(response) {
    //console.log(response.data);

    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherDaily">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                  <WeatherIcon
                    code={dailyForecast.condition.icon_url}
                    size={40}
                  />
                  <div className="daily-temp">
                    <span className="daily-temp-min">
                      {Math.round(dailyForecast.temperature.minimum)}
                    </span>
                    <span className="daily-temp-max">
                      {Math.round(dailyForecast.temperature.maximum)}{" "}
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
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
