import React from "react";

import "./Footer.css";

export default function Footer(){
    return (
      <footer>
        <div className="code-inform">
          <small>
            This project was coded <a href="/">Anastasiya Smyslova</a> and is{" "}
            <a href="/">open-sourced</a> on GitHub and hosted on{" "}
            <a href="/"> Netlify</a>
          </small>
        </div>
      </footer>
    );
}