import React from "react";
import { Experience } from "../components/Experience"; 
import { IconsArray } from "../components/All-Icons";

export const SkillsPage = () => {
    return (
        <>
        <section className="text-dark-green bg-creme"> 
        <h1 className="font-primary text-lg flex justify-center">Skills & Experience</h1>
        <section className="p-4 justify-between flex flex-col contents-center sm:flex-row">
            <IconsArray/>
            <Experience/>
        </section>
        </section>
        </>
    ) 
}