import React from "react";
import { HeaderText } from "../components/Header-text";
import coverPhoto from "../images/violinBackground.png";
import { IconList } from "../components/Icons-Render";

export const AboutPage = () => {
  const sectionStyle = {
    backgroundImage: `url(${coverPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", // Default position for small screens
    lg: {
      backgroundPosition: "50%", // Change position for larger screens (e.g., lg breakpoint)
    },
    backgroundSize: "cover",
  };

  return (
    <>
      <section
        className="h-[80vh] p-4 flex flex-col text-creme grid sm:grid-cols-[30%_auto] grid-cols-[90%_auto]"
        style={sectionStyle}
      >
        <div className="flex flex-col justify-between">
        <HeaderText text="My Skills" />
        <IconList />
        </div>

      </section>
    </>
  );
};
