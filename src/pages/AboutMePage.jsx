import React from "react";
import { Image } from "../components/Image";
import violin from "../assets/images/vio.png"
import dev from "../assets/images/face.png";
import fitness from "../assets/images/fit.png";
import ScrollAnimation from "react-animate-on-scroll";

export const AboutPage = () => {
  return (
    <>
      <>
        <section className="text-dark-green bg-creme py-4">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="font-primary text-md sm:text-lg flex justify-center text-center p-[20px]">
              Good Business with Good People
            </h1>
            <section className="p-4 justify-between flex flex-col contents-center md:flex-row text-center items-center">
                <Image
                  text="Engineer with a hunger for growth & career development."
                  alt="dev"
                  src={dev}
                />
                <Image
                  text="Musician with creativity & dedication."
                  alt="violin"
                  src={violin}
                />
                <Image
                  text="Entrepreneur & athlete with commitment and focus."
                  alt="trainer"
                  src={fitness}
                />
            </section>
          </ScrollAnimation>
        </section>
      </>
    </>
  );
};
