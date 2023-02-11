import React, { useState } from "react";
//import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import CurrentDate from "./CurrentDate";

import "./Weather.css";

export default function Weather(props) {
  //const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
   // console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date (response.data.time * 1000),
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  if (weatherData.ready) {
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
          {weatherData.city},
          <br />
          {weatherData.country}{" "}
        </h1>
        <ul>
         <li> <CurrentDate date={weatherData.date}/></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />{" "}
              <span className="temperature">
                {Math.round(weatherData.temperature)}{" "}
              </span>{" "}
              <span className="unit"> ℃ | ℉</span>{" "}
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0 mm</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "794t01af404a57a31b48o842fab9851b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.currentCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
