import React from "react";
import { Image } from "../components/Image";
import violin from '../images/violin.jpg'
import dev from '../images/coverPhoto.jpg'
import fitness from '../images/smiling.jpg'
export const AboutPage = () => {

  return (
    <>
        <>
        <section className="text-dark-green bg-creme"> 
        <h1 className="font-primary text-lg flex justify-center text-center">Good Business with Good People</h1>
        <section className="p-4 justify-between flex flex-col contents-center md:flex-row text-center items-center">
            <Image text="Engineer with a hunger for growth and career development." alt="dev" src={dev}/>
            <Image text="Musician with creativity." alt="violin" src={violin}/>
            <Image text="Entrepreneur & athlete with dedication, commitment, and focus." alt="trainer" src={fitness} />
        </section>
        </section>
        </>
    </>
  );
};
