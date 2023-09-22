import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Onboard2 from "./Pages/Onboard2";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Options from "./Pages/Options";
import Levels from "./Pages/Levels";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

reportWebVitals();
