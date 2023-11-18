import React from "react";

import { DownloadButton } from "./DownloadButton";
import Resume from "../assets/UpdatedTechResume.pdf";

export const Experience = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col pb-4">
        <h2 className="text-sm">Full Stack Web Developer</h2>
        <p>Sproutbox Media</p>
      </div>

      <div className="flex flex-col pb-4">
        <h2 className="text-sm">Software Engineering Intern</h2>
        <p>
          Climate Tech Start Up @ <a href="https://www.ren.inc/">Ren</a>
        </p>
      </div>

      <div className="flex flex-col pb-4">
        <h2 className="text-sm">Full Stack Web Development</h2>
        <p>University of Oregon & EdX</p>
      </div>

      <DownloadButton
        href={Resume}
        alt={"resume"}
        downloadName={"MerelResume"}
        text={"Resume"}
      />
    </section>
  );
};
