import React from "react";
import { Icon } from "./Skill-Icon";
import HTML from "../images/skills-icons/icons8-html-96.png";
import Angular from "../images/skills-icons/icons8-angular-96.png";
import figma from "../images/skills-icons/icons8-figma-96.png";
import css from "../images/skills-icons/icons8-css-96.png";
import javascript from "../images/skills-icons/icons8-javascript-96.png";
import react from "../images/skills-icons/icons8-react-96.png";
import canva from "../images/skills-icons/icons8-canva-96.png";
import gcp from "../images/skills-icons/icons8-google-cloud-96.png";
import gitlab from "../images/skills-icons/icons8-gitlab-96.png";
import heroku from "../images/skills-icons/icons8-heroku-96.png"

export const IconList = () => {
  const skillsArray = [
    { src: figma, alt: "figma" },
    { src: HTML, alt: "HTML" },
    { src: css, alt: "css" },
    { src: javascript, alt: "javascript" },
    { src: react, alt: "react" },
    { src: Angular, alt: "Angular" },
    { src: canva, alt: "canva" },
    { src: gcp, alt: "gcp" },
    { src: gitlab, alt: "gitlab" },
    { src: heroku, alt: "heroku" },

  ];


  return (
    <>
    <section className="flex flex-row flex-wrap justify-between">
      {skillsArray.map((item, index) => {
        return (
          <Icon
            key={`skill-${index}`} // Unique key for each Icon
            src={item.src}
            alt={item.alt}
          />
        );
      })}
      </section>
    </>
  );
};
