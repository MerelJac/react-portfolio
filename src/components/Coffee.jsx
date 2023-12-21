import React from "react";
import { HeaderText } from "./HeaderText";
import ScrollAnimation from "react-animate-on-scroll";
import { DetailText } from "./DetailText";

export const Coffee = (props) => {
  return (
    <>
      <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
        {" "}
        <HeaderText text="Let's get coffee" />
        <DetailText text="& build something cool"/>
      </ScrollAnimation>
    </>
  );
};
