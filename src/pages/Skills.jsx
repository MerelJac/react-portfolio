import React from "react";
import { Experience } from "../components/Experience"; 
import { IconsArray } from "../components/All-Icons";

export const SkillsPage = () => {
    return (
        <>
        <section className="text-dark-green bg-creme"> 
        <h1 className="font-primary text-lg flex justify-center">Skills & Experience</h1>
        <section className="p-4 px-4 justify-around flex flex-col contents-center sm:flex-row text-center">
            <IconsArray/>
            <Experience/>
        </section>
        </section>
        </>
    ) 
}