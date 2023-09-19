import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Landing } from "./pages/Landing-page";
import { Porfolio } from "./pages/Porfolio-page";
import { ProcessPage } from "./pages/Process-page";
import { LastPage } from "./pages/Last-page";

import { AboutPage } from "./pages/About-Me";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Landing />
    <Porfolio />
    <AboutPage/>
    <LastPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
