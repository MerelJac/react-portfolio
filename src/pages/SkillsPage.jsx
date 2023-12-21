import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SkillCard from "../components/SkillCard";

import { DownloadButton } from "../components/DownloadButton";
import Resume from "../assets/UpdatedTechResume.pdf";

// export const SkillsPage = () => {
//   return (
//       <section className="text-dark-green bg-creme">
//         <ScrollAnimation animateIn="fadeIn">
//           <h1 className="sm:text-lg fadeIn font-primary text-md flex justify-center p-[20px]">
//             Skills & Experience
//           </h1>
//           <section className="p-4 px-4 justify-around flex flex-col contents-center sm:flex-row text-center">
//             <IconsArray/>
//             <Experience />
//           </section>
//         </ScrollAnimation>
//       </section>
//   );
// };

export const SkillsPage = () => {
  return (
    <section className="text-dark-green bg-creme flex justify-center" >
      <ScrollAnimation animateIn="fadeIn">
        <h1 className="sm:text-lg fadeIn font-primary text-md flex justify-center p-[20px]">
          Skills & Experience
        </h1>
        <div className="flex flex-wrapr">
          <SkillCard
            header="Full Stack Web Development"
            detail="Let's useasdfjkaskdfaefear"
          />
          <SkillCard
            header="Full Stack Web Development"
            detail="Let's useasdfjkaskdfaefear"
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
