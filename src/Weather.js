import React, {useState} from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import "./Weather.css";

export default function Weather() {

const[ready, setReady] = useState(false);
const[weatherData, setWeatherData] = useState({});

  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      description: response.data.description,
      temperature: response.data.temperature.current,
      wind: 12
    });
    setReady(true);
  }

  if (ready) {

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
      <li> Wednesday, 8 February </li>
      <li>{weatherData.discription}</li>
    </ul>

    <div className="row">
      <div className="col-6">
        <ReactAnimatedWeather
          icon="CLEAR_NIGHT"
          color="grey"
          size={58}
          animate={true}
        />{" "}
        <span className="temperature">
          {Math.round(weatherData.temperature)}{" "}
        </span>{" "}
        <span className="unit"> ℃ | ℉</span>{" "}
      </div>

      <div className="col-6">
        <ul>
          <li>Precipitation: 0 mm</li>
          <li>Humidity: 83%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
    </div>
  </div>
);
  } else {

  const apiKey = "794t01af404a57a31b48o842fab9851b";
  let city = "Kyiv";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  return "Loading..."
  }



  
}
