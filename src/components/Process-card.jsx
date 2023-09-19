import React from "react";
import { Info } from "../components/Info";
import { Icon } from "./Skill-Icon";

import HTML from "../images/skills-icons/icons8-html-96.png";
import Angular from "../images/skills-icons/icons8-angular-96.png";
import css from "../images/skills-icons/icons8-css-96.png";
import javascript from "../images/skills-icons/icons8-javascript-96.png";
import react from "../images/skills-icons/icons8-react-96.png";
import figma from "../images/skills-icons/icons8-figma-96.png";
import canva from "../images/skills-icons/icons8-canva-96.png";
import gcp from "../images/skills-icons/icons8-google-cloud-96.png";
import gitlab from "../images/skills-icons/icons8-gitlab-96.png";
import heroku from "../images/skills-icons/icons8-heroku-96.png"
export const ProcessCard = () => {
  return (
    <>
      <section className="flex flex-col items-start relative translate-y-[100%]">
          {/* <Info title="Design" /> */}
          <article className="flex">
            <Icon src={canva} alt={"canva"} />
            <Icon src={figma} alt={"figma"} />
          </article>

          {/* <Info title="Develop" /> */}
          <article className="flex">
            <Icon src={HTML} alt={"HTML"} />
            <Icon src={css} alt={"CSS"} />
            <Icon src={javascript} alt={"javascript"} />
            <Icon src={react} alt={"react"} />
            <Icon src={Angular} alt={"Angular"} />
          </article>

          {/* <Info title="Deploy" /> */}
          <article className="flex">
          <Icon src={heroku} alt={"heroku"} />
            <Icon src={gitlab} alt={"gitlab"} />
            <Icon src={gcp} alt={"gcp"} />
          </article>
      </section>
    </>
  );
};
