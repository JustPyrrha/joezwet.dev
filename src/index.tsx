import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";
import {ParallaxProvider} from "react-scroll-parallax";

ReactDOM.render(
  <React.StrictMode>
      <ParallaxProvider>
          <App />
      </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// https://bit.ly/CRA-vitals
reportWebVitals();
