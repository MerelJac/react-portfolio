import React from "react";
import { Experience } from "../components/Experience";
import { IconsArray } from "../components/AllIcons";
import ScrollAnimation from "react-animate-on-scroll";

export const SkillsPage = () => {
  return (
    <>
      <section className="text-dark-green bg-creme">
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="sm:text-lg fadeIn font-primary text-md flex justify-center p-[20px]">
            Skills & Experience
          </h1>
          <section className="p-4 px-4 justify-around flex flex-col contents-center sm:flex-row text-center">
            <IconsArray/>
            <Experience />
          </section>
        </ScrollAnimation>
      </section>
    </>
  );
};
