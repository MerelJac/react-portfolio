import React from "react";
import HTML from "../assets/skills-icons/icons8-html-96.png";
import Angular from "../assets/skills-icons/icons8-angular-96.png";
import figma from "../assets/skills-icons/icons8-figma-96.png";
import css from "../assets/skills-icons/icons8-css-96.png";
import javascript from "../assets/skills-icons/icons8-javascript-96.png";
import react from "../assets/skills-icons/icons8-react-96.png";
import gcp from "../assets/skills-icons/icons8-google-cloud-96.png";
import gitlab from "../assets/skills-icons/icons8-gitlab-96.png";
import heroku from "../assets/skills-icons/icons8-heroku-96.png";

export const IconsArray = () => {
  return (
    <div className="flex flex-col pb-4">
      <section className="flex flex-row justify-between">
        <img className="max-w-[80px]" src={javascript} alt={javascript} />
        <img className="max-w-[80px]" src={css} alt={css} />
        <img className="max-w-[80px]" src={HTML} alt={HTML} />
      </section>
      <section className="flex flex-row justify-between">
        <img className="max-w-[80px]" src={gitlab} alt={gitlab} />
        <img className="max-w-[80px]" src={gcp} alt={gcp} />
        <img className="max-w-[80px]" src={heroku} alt={heroku} />
      </section>
      <section className="flex flex-row justify-between">
        <img className="max-w-[80px]" src={react} alt={react} />
        <img className="max-w-[80px]" src={figma} alt={figma} />
        <img className="max-w-[80px]" src={Angular} alt={Angular} />
      </section>
    </div>
  );
};
