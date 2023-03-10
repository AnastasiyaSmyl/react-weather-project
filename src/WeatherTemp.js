import React, { useState } from "react";


export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)} </span>{" "}
        <span className="unit">
          {" "}
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            ℉{" "}
          </a>{" "}
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round((props.celsius*9)/5+32)} </span>{" "}
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            {" "}
            ℃{" "}
          </a>{" "}
          | ℉{" "}
        </span>{" "}
      </div>
    );
  }
}
