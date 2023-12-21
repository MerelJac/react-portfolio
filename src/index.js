import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Landing } from "./pages/LandingPage";
import { LastPage } from "./pages/LastPage";
import { ProcessPage } from "./pages/ProcessPage";
import { SkillsPage } from "./pages/SkillsPage";
import { AboutPage } from "./pages/AboutMePage";
import "tailwindcss-animatecss";
import PicPage from "./pages/PicPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Landing />
    <PicPage />
    <SkillsPage />
    <AboutPage />
    <LastPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
