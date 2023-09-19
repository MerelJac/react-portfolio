import React from "react";
import { AboutImg } from "../components/About-img";
import { HeaderText } from "../components/Header-text";
import { ProcessCard } from "../components/Process-card";
import coverPhoto from '../images/violinBackground.png'


export const AboutPage = () => {
    const sectionStyle = {
        backgroundImage: `url(${coverPhoto})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        backgroundSize: "cover",
      };

  return (
    <>
      <section className="h-[100vh] p-4 flex flex-col text-creme"
        style={sectionStyle}>
          <HeaderText text="My Skills" />
          <ProcessCard />
      </section>
    </>
  );
};
