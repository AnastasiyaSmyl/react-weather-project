import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherDaily from "./WeatherDaily";
import Footer from "./Footer";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.currentCity);

  function showWeather(response) {
    //console.log(response.data.condition.icon);
    setWeatherData({
      ready: true,
      coord: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      feels: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    const apiKey = "794t01af404a57a31b48o842fab9851b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for the city
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                  onChange={cityChange}
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
          <WeatherInfo info={weatherData} />
          <WeatherDaily coord={weatherData.coord} />
        
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
