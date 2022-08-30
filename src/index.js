import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Your gift 
          <br />
          Will be available soon! 
        </h1>
        <Timer />
        <Preloader />
        <Optin/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
