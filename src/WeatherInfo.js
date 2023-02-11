import React from "react";
import CurrentDate from "./CurrentDate";


export default function WeatherInfo(props){
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
              <div className="clearfix">
                <img
                  src={props.info.iconUrl}
                  alt={props.info.description}
                  className="float-left"
                />{" "}
                <span className="temperature">
                  {Math.round(props.info.temperature)}{" "}
                </span>{" "}
                <span className="unit"> ℃ | ℉</span>{" "}
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