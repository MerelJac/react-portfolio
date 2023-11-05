import React from "react";
import trainingSite from "../assets/images/trainingsite.png";
import ScrollAnimation from "react-animate-on-scroll";
import gymGenius from "../assets/images/gymGenius.png";
import renImg from "../assets/images/renimg.png";
import { PorfolioSection } from "../components/PortfiloSection";
import { PorfolioSectionFlipped } from "../components/PorfolioSectionFlipped";

export const ProcessPage = () => {
  return (
    <section className="text-creme px-4">
      <ScrollAnimation animateIn="fadeIn">
        <h1 className="font-primary sm:text-lg text-md flex justify-center text-center p-[20px]">
          Design, Develop, Deploy
        </h1>
        <section className="p-4 justify-around flex flex-col contents-center items-center">
          <PorfolioSection
            title="Software as a Service"
            text="Building scalable applications with Cloud Platform Services."
            projectTitle="Ren Platform to aid in decarbonization of global supply chain."
            projectContribution="Improve accuracy of data presentation, refactor routes to improve accessiblity, collaborate with design team to add front end features & more!"
            img={renImg}
            imgAlt="SaasImg"
            hrefImg="https://www.ren.inc/platform"
            buttonText="View Platform"
          />
          <PorfolioSectionFlipped
            title="Web Applications"
            text="Tailored applications designed to present, store, and manipulate data in alignment with a business's specific needs."
            projectTitle="Fitness app to simplify exercise logging and suggest unique workout variety."
            projectContribution="Solo project including front end and back end development."
            img={gymGenius}
            imgAlt="gymImg"
            hrefImg="https://github.com/MerelJac/GymGenius"
            buttonText="View on GitHub"
          />
          <PorfolioSection
            title="Custom Websites"
            text="Enhance business's digital footprint with custom websites."
            projectTitle="Website for Personal Trainer."
            projectContribution="Designed & deployed to meet customer needs."
            img={trainingSite}
            imgAlt="TrainingImg"
            hrefImg="https://www.trainingbyana.com/"
            buttonText="View Site"
          />
        </section>
      </ScrollAnimation>
    </section>
  );
};
