import React from "react";
import { Image } from "../components/Image";
import violin from "../images/vio.png";
import dev from "../images/face.png";
import fitness from "../images/fit.png";
import ScrollAnimation from "react-animate-on-scroll";

export const AboutPage = () => {
  return (
    <>
      <>
        <section className="text-dark-green bg-creme my-4">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="font-primary text-lg flex justify-center text-center p-[20px]">
              Good Business with Good People
            </h1>
            <section className="p-4 justify-between flex flex-col contents-center md:flex-row text-center items-center">
              <ScrollAnimation
                animateIn="bounce"
                initiallyVisible={true}
              >
                <Image
                  text="Engineer with a hunger for growth and career development."
                  alt="dev"
                  src={dev}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounce"
                initiallyVisible={true}
              >
                <Image
                  text="Musician with creativity."
                  alt="violin"
                  src={violin}
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounce"
                initiallyVisible={true}
              >
                <Image
                  text="Entrepreneur & athlete with dedication, commitment, and focus."
                  alt="trainer"
                  src={fitness}
                />
              </ScrollAnimation>
            </section>
          </ScrollAnimation>
        </section>
      </>
    </>
  );
};
