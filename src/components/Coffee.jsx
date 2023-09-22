import React from "react";
import { HeaderText } from "./Header-text";
import ScrollAnimation from "react-animate-on-scroll";

export const Coffee = (props) => {
  return (
    <>
      <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
        {" "}
        <HeaderText text="Let's get coffee!" />
      </ScrollAnimation>
    </>
  );
};
