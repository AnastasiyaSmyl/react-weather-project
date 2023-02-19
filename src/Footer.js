import React from "react";

import "./Footer.css";

export default function Footer(){
    return (
      <footer>
        <div className="code-inform">
          <small className="info-line">
            This project was coded{" "}
            <a
              className="no-underline"
              href="https://www.linkedin.com/in/anastasiya-smyslova-190218243"
              target="_blank"
              rel="noreferrer"
            >
              Anastasiya Smyslova
            </a>{" "}
            and is{" "}
            <a
              className="no-underline"
              href="https://github.com/AnastasiyaSmyl/react-weather-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on
            <a
              className="no-underline"
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