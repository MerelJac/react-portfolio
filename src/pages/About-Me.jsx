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
        <h1 className="font-primary text-lg flex justify-center">Good Business with Good People</h1>
        <section className="p-4 justify-between flex flex-col contents-center sm:flex-row">
            <Image text="Engineer" alt="dev" src={dev}/>
            <Image text="Artist" alt="violin" src={violin}/>
            <Image text="Entrepreneur" alt="trainer" src={fitness} />
        </section>
        </section>
        </>
    </>
  );
};
