import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SkillCard from "../components/SkillCard";
import consult from "../assets/images/consult.png";
import saas from "../assets/images/saas.png";
import website from "../assets/images/website.png";
import fullstack from "../assets/images/fullstack.png";


import { DownloadButton } from "../components/DownloadButton";
import Resume from "../assets/EngineeringRes.pdf";

export const SkillsPage = () => {
  return (
    <section className="text-creme bg-dark-green flex justify-center">
      <ScrollAnimation animateIn="fadeIn">
        <h1 className="sm:text-lg fadeIn font-primary text-md flex justify-center p-[20px]">
          Let's Work Together
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkillCard
                      img={fullstack}
            header="Full Stack Web Development"
            detail="You dream it, let's build it."
          />
          <SkillCard
            img={saas}
            header="Software as a Service"
            detail="Automate data analysis in large scale applications & deploy with cloud platform services with a product mindset."
          />
          <SkillCard
                      img={website}
            header="Custom Websites"
            detail="Let's display your brand."
          />
          <SkillCard
            img={consult}
            header="Consulting"
            detail="Learn more about enhancing your business's online presence."
          />
        </div>
        <div className="flex justify-center py-10">
          <DownloadButton
            href={Resume}
            alt={"resume"}
            downloadName={"MerelResume"}
            text={"Resume"}
          />
        </div>
      </ScrollAnimation>
    </section>
  );
};
