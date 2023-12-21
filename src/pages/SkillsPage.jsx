import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SkillCard from "../components/SkillCard";

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
            header="Full Stack Web Development"
            detail="You dream it, let's build it."
          />
          <SkillCard
            header="Software as a Service"
            detail="Automate data analysis in large scale applications & deploy with cloud platform services with a product mindset."
          />
          <SkillCard
            header="Custom Websites"
            detail="Let's display your brand."
          />
          <SkillCard
            header="Consulting"
            detail="Learn more about enhancing your business's online presence."
          />
        </div>
        <div className="flex justify-center">
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
