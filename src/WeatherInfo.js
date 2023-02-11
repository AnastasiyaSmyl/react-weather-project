import React from "react";
import WeatherIcon from "./WeatherIcon";
import CurrentDate from "./CurrentDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.info.city},
        <br />
        {props.info.country}{" "}
      </h1>
      <ul>
        <li>
          {" "}
          <CurrentDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon
              code={props.info.iconUrl}
              description={props.info.description}
            />
            <WeatherTemp celsius={props.info.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.info.feels)}</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
