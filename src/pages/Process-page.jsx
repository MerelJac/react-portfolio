import React from "react";
import { ProcessCard } from "../components/Process-card";

export const ProcessPage = () => {
    return (
        <>
        <section className="text-creme"> 
        <h1 className="font-primary text-lg flex justify-center">Design, Develop, Deploy</h1>
        <section className="p-4 justify-between flex flex-col contents-center sm:flex-row">
            <ProcessCard title="SAAS" text="Builing user-centric software as a service." alt="SAAS" src=""/>
            <ProcessCard title="Web & Mobile Apps" text="Building dynamic and scalable applicatoins." alt="Apps" src="" />
        </section>
        </section>
        </>
    ) 
}