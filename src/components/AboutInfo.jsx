import React from "react";
import { Info } from "./Info";
import { Icon } from "./SkillsIcon";
import HTML from "../images/skills-icons/icons8-html-96.png";
import Angular from "../images/skills-icons/icons8-angular-96.png";
import css from "../images/skills-icons/icons8-css-96.png";
import javascript from "../images/skills-icons/icons8-javascript-96.png";
import react from "../images/skills-icons/icons8-react-96.png";

export const AboutInfo = () => {
return (
    <>
    <div className="flex flex-col justify-start items-start bg-creme text-dark-green p-4 rounded-md">
            <Info title="Software Engineer" />
            <div className="flex ">
                <Icon src={HTML} alt={"HTML"}/>
                <Icon src={css} alt={"CSS"}/>
                <Icon src={javascript} alt={"javascript"}/>
                <Icon src={react} alt={"react"}/>
                <Icon src={Angular} alt={"Angular"}/>

            </div>
            <Info title="& more!" />
            <p>In my free time, I love making music, spending time outdoors, and staying active!</p>
            </div>
    </>
)
}