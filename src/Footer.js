import React from "react";

import "./Footer.css";

export default function Footer(){
    return (
      <footer>
        <div className="code-inform">
          <small>
            This project was coded <a href="/">Anastasiya Smyslova</a> and is{" "}
            <a
              href="https://github.com/AnastasiyaSmyl/react-weather-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on
            <a
              href="https://leafy-seahorse-bc54bb.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify
            </a>
          </small>
        </div>
      </footer>
    );
}